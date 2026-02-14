export default function VideoSection() {
  return (
    <section className="video-section" id="video">
      <div className="container">
        <div className="section-header">
          <span className="section-tag">See It In Action</span>
          <h2 className="section-title">Introducing Black Bird Smart Innovations</h2>
          <p className="section-description">
            Discover how our smart wristband technology provides peace of mind for caregivers and safety for loved ones.
          </p>
        </div>
        <div className="video-wrapper">
          <div className="video-container video-container--local">
            <video controls playsInline>
              <source src="/videos/blackbird-promo-2025.mp4" type="video/mp4" />
              Your browser does not support the video tag.
            </video>
          </div>
        </div>

        <h3 className="video-subsection-title" id="tutorial">Quick Setup Guide</h3>
        <p className="video-subsection-desc">Watch our quick guide to learn how easy it is to set up and use your Black Bird wristband.</p>
        <div className="video-wrapper">
          <div className="video-container">
            <iframe
              src="https://player.vimeo.com/video/1041799890?h=0&title=0&byline=0&portrait=0"
              style={{ border: 0 }}
              allow="autoplay; fullscreen; picture-in-picture"
              allowFullScreen
            ></iframe>
          </div>
        </div>
      </div>
    </section>
  );
}
