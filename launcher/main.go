package main

import (
	"embed"
	"fmt"
	"io/fs"
	"net"
	"net/http"
	"os/exec"
	"runtime"
)

//go:embed all:website
var websiteFiles embed.FS

func main() {
	// Get the website subdirectory from embedded files
	websiteFS, err := fs.Sub(websiteFiles, "website")
	if err != nil {
		fmt.Printf("Error accessing embedded files: %v\n", err)
		fmt.Println("Press Enter to exit...")
		fmt.Scanln()
		return
	}

	// Find an available port
	listener, err := net.Listen("tcp", "127.0.0.1:0")
	if err != nil {
		fmt.Printf("Error finding available port: %v\n", err)
		fmt.Println("Press Enter to exit...")
		fmt.Scanln()
		return
	}
	port := listener.Addr().(*net.TCPAddr).Port
	listener.Close()

	// Create file server
	fileServer := http.FileServer(http.FS(websiteFS))
	http.Handle("/", fileServer)

	url := fmt.Sprintf("http://127.0.0.1:%d", port)

	fmt.Println("============================================")
	fmt.Println("   Blackbird Website Viewer")
	fmt.Println("============================================")
	fmt.Printf("\nStarting server at: %s\n", url)
	fmt.Println("\nOpening browser...")

	// Open browser
	go openBrowser(url)

	fmt.Println("\n--------------------------------------------")
	fmt.Println("Website is running!")
	fmt.Println("Keep this window open while viewing the site.")
	fmt.Println("Close this window or press Ctrl+C to stop.")
	fmt.Println("--------------------------------------------")

	// Start server
	if err := http.ListenAndServe(fmt.Sprintf("127.0.0.1:%d", port), nil); err != nil {
		fmt.Printf("Server error: %v\n", err)
		fmt.Println("Press Enter to exit...")
		fmt.Scanln()
	}
}

func openBrowser(url string) {
	var cmd *exec.Cmd

	switch runtime.GOOS {
	case "windows":
		cmd = exec.Command("rundll32", "url.dll,FileProtocolHandler", url)
	case "darwin":
		cmd = exec.Command("open", url)
	default: // linux and others
		cmd = exec.Command("xdg-open", url)
	}

	cmd.Start()
}
