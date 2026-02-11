// Theme toggle — works with data-theme attribute on <html>
(function () {
    var toggle = document.getElementById('themeToggle');
    if (!toggle) return;

    toggle.addEventListener('click', function () {
        var next = document.documentElement.dataset.theme === 'dark' ? 'light' : 'dark';
        document.documentElement.dataset.theme = next;
        localStorage.setItem('theme', next);
    });

    // Follow OS changes when the user hasn't manually picked a theme
    window.matchMedia('(prefers-color-scheme: dark)').addEventListener('change', function (e) {
        if (!localStorage.getItem('theme')) {
            document.documentElement.dataset.theme = e.matches ? 'dark' : 'light';
        }
    });
})();
