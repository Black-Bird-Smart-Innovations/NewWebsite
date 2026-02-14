export default function EmergencySection() {
  return (
    <section className="emergency-section" id="emergency">
      <div className="container">
        <div className="section-header">
          <span className="section-tag">Critical Safety</span>
          <h2 className="section-title">When every second counts</h2>
          <p className="section-description">
            Our life-saving SOS system and intelligent fall detection work together to get help fast —
            delivering critical information directly to first responders.
          </p>
        </div>

        {/* First Responder Codes Hero Banner */}
        <div className="frc-hero">
          <div className="frc-hero-bg">
            <div className="frc-grid-lines"></div>
          </div>
          <div className="frc-hero-content">
            <div className="frc-hero-text">
              <div className="frc-badge-row">
                <div className="frc-live-badge">
                  <span className="frc-live-dot"></span>
                  <span>LIVE NETWORK</span>
                </div>
              </div>
              <h3 className="frc-hero-title">First Responder<br /><span className="gradient-text">Code System</span></h3>
              <p className="frc-hero-desc">
                When SOS is triggered, Black Bird instantly transmits a complete digital profile
                to the nearest fire department, police precinct, and EMS dispatch center —
                giving first responders the critical information they need before they even arrive on scene.
              </p>
              <div className="frc-hero-stats">
                <div className="frc-stat">
                  <span className="frc-stat-value">500+</span>
                  <span className="frc-stat-label">Municipal agencies connected</span>
                </div>
                <div className="frc-stat">
                  <span className="frc-stat-value">&lt;3s</span>
                  <span className="frc-stat-label">Profile delivery time</span>
                </div>
                <div className="frc-stat">
                  <span className="frc-stat-value">50</span>
                  <span className="frc-stat-label">States covered</span>
                </div>
              </div>
            </div>
            <div className="frc-hero-visual">
              {/* SOS Button with Rings */}
              <div className="sos-visual-large">
                <div className="sos-ring sos-ring-1"></div>
                <div className="sos-ring sos-ring-2"></div>
                <div className="sos-ring sos-ring-3"></div>
                <div className="sos-ring sos-ring-4"></div>
                <div className="sos-btn-core">
                  <span className="sos-btn-text">SOS</span>
                  <span className="sos-btn-sub">PRESS &amp; HOLD</span>
                </div>
              </div>
              {/* Connection Lines to Services */}
              <div className="sos-service-node node-police">
                <svg width="20" height="20" viewBox="0 0 20 20" fill="none"><path d="M10 2L3 7V18H17V7L10 2Z" stroke="currentColor" strokeWidth="1.5" strokeLinejoin="round" /><path d="M8 18V12H12V18" stroke="currentColor" strokeWidth="1.5" /><circle cx="10" cy="9" r="1.5" fill="currentColor" /></svg>
                <span>Police</span>
              </div>
              <div className="sos-service-node node-fire">
                <svg width="20" height="20" viewBox="0 0 20 20" fill="none"><path d="M10 2C10 2 4 8 4 12C4 15.3 6.7 18 10 18C13.3 18 16 15.3 16 12C16 8 10 2 10 2Z" stroke="currentColor" strokeWidth="1.5" /><path d="M10 18C10 18 8 16 8 14C8 12 10 10 10 10C10 10 12 12 12 14C12 16 10 18 10 18Z" fill="currentColor" opacity="0.3" /></svg>
                <span>Fire Dept</span>
              </div>
              <div className="sos-service-node node-ems">
                <svg width="20" height="20" viewBox="0 0 20 20" fill="none"><rect x="3" y="6" width="14" height="10" rx="2" stroke="currentColor" strokeWidth="1.5" /><path d="M7 6V4C7 3.44772 7.44772 3 8 3H12C12.5523 3 13 3.44772 13 4V6" stroke="currentColor" strokeWidth="1.5" /><path d="M10 9V13M8 11H12" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" /></svg>
                <span>EMS</span>
              </div>
              <div className="sos-service-node node-dispatch">
                <svg width="20" height="20" viewBox="0 0 20 20" fill="none"><circle cx="10" cy="10" r="7" stroke="currentColor" strokeWidth="1.5" /><path d="M10 6V10L13 12" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" /><path d="M3 10H5M15 10H17M10 3V5M10 15V17" stroke="currentColor" strokeWidth="1.2" strokeLinecap="round" /></svg>
                <span>911 Dispatch</span>
              </div>
            </div>
          </div>
        </div>

        {/* First Responder Profile Data Cards */}
        <div className="frc-profile-section">
          <div className="frc-profile-header">
            <h4 className="frc-profile-title">What first responders receive instantly</h4>
            <p className="frc-profile-subtitle">A complete digital care profile is transmitted in under 3 seconds</p>
          </div>
          <div className="frc-profile-grid">
            <div className="frc-profile-card">
              <div className="frc-card-icon frc-icon-medical">
                <svg width="28" height="28" viewBox="0 0 28 28" fill="none">
                  <path d="M14 4V8M14 20V24M4 14H8M20 14H24" stroke="currentColor" strokeWidth="2.5" strokeLinecap="round" />
                  <rect x="8" y="8" width="12" height="12" rx="2" stroke="currentColor" strokeWidth="2" />
                </svg>
              </div>
              <h5 className="frc-card-title">Medical Conditions</h5>
              <p className="frc-card-desc">Allergies, current medications, blood type, chronic conditions, surgical history</p>
              <div className="frc-card-tags">
                <span className="frc-tag">Allergies</span>
                <span className="frc-tag">Blood Type</span>
                <span className="frc-tag">Medications</span>
              </div>
            </div>
            <div className="frc-profile-card">
              <div className="frc-card-icon frc-icon-gps">
                <svg width="28" height="28" viewBox="0 0 28 28" fill="none">
                  <circle cx="14" cy="14" r="10" stroke="currentColor" strokeWidth="2" />
                  <circle cx="14" cy="14" r="4" stroke="currentColor" strokeWidth="2" />
                  <path d="M14 2V6M14 22V26M2 14H6M22 14H26" stroke="currentColor" strokeWidth="2" strokeLinecap="round" />
                </svg>
              </div>
              <h5 className="frc-card-title">Live GPS Coordinates</h5>
              <p className="frc-card-desc">Real-time position, street address, nearest landmark, indoor/outdoor status</p>
              <div className="frc-card-tags">
                <span className="frc-tag">Lat/Long</span>
                <span className="frc-tag">Address</span>
                <span className="frc-tag">Real-time</span>
              </div>
            </div>
            <div className="frc-profile-card">
              <div className="frc-card-icon frc-icon-contacts">
                <svg width="28" height="28" viewBox="0 0 28 28" fill="none">
                  <circle cx="14" cy="9" r="5" stroke="currentColor" strokeWidth="2" />
                  <path d="M5 24C5 19.5817 8.58172 16 13 16H15C19.4183 16 23 19.5817 23 24" stroke="currentColor" strokeWidth="2" strokeLinecap="round" />
                </svg>
              </div>
              <h5 className="frc-card-title">Emergency Contacts</h5>
              <p className="frc-card-desc">Family members, primary caregivers, treating physicians, legal guardians</p>
              <div className="frc-card-tags">
                <span className="frc-tag">Family</span>
                <span className="frc-tag">Caregivers</span>
                <span className="frc-tag">Physicians</span>
              </div>
            </div>
            <div className="frc-profile-card">
              <div className="frc-card-icon frc-icon-care">
                <svg width="28" height="28" viewBox="0 0 28 28" fill="none">
                  <rect x="4" y="3" width="20" height="22" rx="3" stroke="currentColor" strokeWidth="2" />
                  <path d="M9 8H19M9 12H19M9 16H15" stroke="currentColor" strokeWidth="2" strokeLinecap="round" />
                </svg>
              </div>
              <h5 className="frc-card-title">Care Instructions</h5>
              <p className="frc-card-desc">Special needs, cognitive status, preferred language, behavioral considerations</p>
              <div className="frc-card-tags">
                <span className="frc-tag">Special Needs</span>
                <span className="frc-tag">Language</span>
                <span className="frc-tag">Care Notes</span>
              </div>
            </div>
            <div className="frc-profile-card">
              <div className="frc-card-icon frc-icon-id">
                <svg width="28" height="28" viewBox="0 0 28 28" fill="none">
                  <rect x="3" y="6" width="22" height="16" rx="3" stroke="currentColor" strokeWidth="2" />
                  <circle cx="10" cy="13" r="3" stroke="currentColor" strokeWidth="1.5" />
                  <path d="M16 11H22M16 15H20" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" />
                </svg>
              </div>
              <h5 className="frc-card-title">Photo ID &amp; Description</h5>
              <p className="frc-card-desc">Recent photo, physical description, what they're wearing, identifying features</p>
              <div className="frc-card-tags">
                <span className="frc-tag">Photo</span>
                <span className="frc-tag">Description</span>
                <span className="frc-tag">Attire</span>
              </div>
            </div>
            <div className="frc-profile-card">
              <div className="frc-card-icon frc-icon-device">
                <svg width="28" height="28" viewBox="0 0 28 28" fill="none">
                  <rect x="6" y="4" width="16" height="20" rx="3" stroke="currentColor" strokeWidth="2" />
                  <path d="M12 8H16" stroke="currentColor" strokeWidth="2" strokeLinecap="round" />
                  <circle cx="14" cy="19" r="1.5" fill="currentColor" />
                </svg>
              </div>
              <h5 className="frc-card-title">Device &amp; Vitals</h5>
              <p className="frc-card-desc">Battery status, last known temperature, fall detection data, movement history</p>
              <div className="frc-card-tags">
                <span className="frc-tag">Temperature</span>
                <span className="frc-tag">Battery</span>
                <span className="frc-tag">Vitals</span>
              </div>
            </div>
          </div>
        </div>

        {/* Municipal Coverage Map */}
        <div className="frc-map-section">
          <div className="frc-map-header">
            <h4 className="frc-map-title">Connected across every county</h4>
            <p className="frc-map-subtitle">
              Black Bird Smart Innovations integrates with municipal emergency networks nationwide.
              Fire departments, police precincts, EMS stations, and 911 dispatch centers —
              all connected to receive your First Responder Profile the moment you need help.
            </p>
            <div className="frc-map-legend">
              <div className="legend-item">
                <span className="legend-dot legend-police"></span>
                <span>Police Precinct</span>
              </div>
              <div className="legend-item">
                <span className="legend-dot legend-fire"></span>
                <span>Fire Department</span>
              </div>
              <div className="legend-item">
                <span className="legend-dot legend-ems"></span>
                <span>EMS / Hospital</span>
              </div>
              <div className="legend-item">
                <span className="legend-dot legend-dispatch"></span>
                <span>911 Dispatch Center</span>
              </div>
            </div>
          </div>

          <div className="frc-map-container">
            <div className="frc-map-grid"></div>
            {/* County regions */}
            <div className="county-region county-1"><span>Rockland<br />County</span></div>
            <div className="county-region county-2"><span>Westchester<br />County</span></div>
            <div className="county-region county-3"><span>Orange<br />County</span></div>
            <div className="county-region county-4"><span>Bergen<br />County, NJ</span></div>
            <div className="county-region county-5"><span>Bronx<br />County</span></div>

            {/* Municipal pins */}
            <div className="map-pin pin-police" style={{ top: '22%', left: '28%' }} data-label="Nanuet PD">
              <div className="pin-pulse"></div>
              <div className="pin-icon"><svg width="14" height="14" viewBox="0 0 20 20" fill="none"><path d="M10 2L3 7V18H17V7L10 2Z" stroke="currentColor" strokeWidth="1.5" strokeLinejoin="round" /><circle cx="10" cy="10" r="2" fill="currentColor" /></svg></div>
              <div className="pin-tooltip">Nanuet Police Dept<span>Rockland County</span></div>
            </div>
            <div className="map-pin pin-fire" style={{ top: '35%', left: '20%' }} data-label="Nanuet FD">
              <div className="pin-pulse"></div>
              <div className="pin-icon"><svg width="14" height="14" viewBox="0 0 20 20" fill="none"><path d="M10 2C10 2 4 8 4 12C4 15.3 6.7 18 10 18C13.3 18 16 15.3 16 12C16 8 10 2 10 2Z" stroke="currentColor" strokeWidth="1.5" /></svg></div>
              <div className="pin-tooltip">Nanuet Fire Dept<span>Rockland County</span></div>
            </div>
            <div className="map-pin pin-ems" style={{ top: '15%', left: '38%' }} data-label="Nyack Hospital">
              <div className="pin-pulse"></div>
              <div className="pin-icon"><svg width="14" height="14" viewBox="0 0 20 20" fill="none"><rect x="4" y="6" width="12" height="10" rx="2" stroke="currentColor" strokeWidth="1.5" /><path d="M10 9V13M8 11H12" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" /></svg></div>
              <div className="pin-tooltip">Nyack Hospital EMS<span>Rockland County</span></div>
            </div>
            <div className="map-pin pin-dispatch" style={{ top: '28%', left: '45%' }} data-label="RC 911">
              <div className="pin-pulse"></div>
              <div className="pin-icon"><svg width="14" height="14" viewBox="0 0 20 20" fill="none"><circle cx="10" cy="10" r="7" stroke="currentColor" strokeWidth="1.5" /><path d="M10 6V10L13 12" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" /></svg></div>
              <div className="pin-tooltip">Rockland 911 Center<span>Dispatch Hub</span></div>
            </div>

            <div className="map-pin pin-police" style={{ top: '20%', left: '62%' }} data-label="White Plains PD">
              <div className="pin-pulse"></div>
              <div className="pin-icon"><svg width="14" height="14" viewBox="0 0 20 20" fill="none"><path d="M10 2L3 7V18H17V7L10 2Z" stroke="currentColor" strokeWidth="1.5" strokeLinejoin="round" /><circle cx="10" cy="10" r="2" fill="currentColor" /></svg></div>
              <div className="pin-tooltip">White Plains PD<span>Westchester County</span></div>
            </div>
            <div className="map-pin pin-fire" style={{ top: '32%', left: '72%' }} data-label="Yonkers FD">
              <div className="pin-pulse"></div>
              <div className="pin-icon"><svg width="14" height="14" viewBox="0 0 20 20" fill="none"><path d="M10 2C10 2 4 8 4 12C4 15.3 6.7 18 10 18C13.3 18 16 15.3 16 12C16 8 10 2 10 2Z" stroke="currentColor" strokeWidth="1.5" /></svg></div>
              <div className="pin-tooltip">Yonkers Fire Dept<span>Westchester County</span></div>
            </div>
            <div className="map-pin pin-ems" style={{ top: '12%', left: '55%' }} data-label="WC Med Ctr">
              <div className="pin-pulse"></div>
              <div className="pin-icon"><svg width="14" height="14" viewBox="0 0 20 20" fill="none"><rect x="4" y="6" width="12" height="10" rx="2" stroke="currentColor" strokeWidth="1.5" /><path d="M10 9V13M8 11H12" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" /></svg></div>
              <div className="pin-tooltip">Westchester Medical Ctr<span>Westchester County</span></div>
            </div>

            <div className="map-pin pin-police" style={{ top: '55%', left: '15%' }} data-label="Newburgh PD">
              <div className="pin-pulse"></div>
              <div className="pin-icon"><svg width="14" height="14" viewBox="0 0 20 20" fill="none"><path d="M10 2L3 7V18H17V7L10 2Z" stroke="currentColor" strokeWidth="1.5" strokeLinejoin="round" /><circle cx="10" cy="10" r="2" fill="currentColor" /></svg></div>
              <div className="pin-tooltip">Newburgh Police Dept<span>Orange County</span></div>
            </div>
            <div className="map-pin pin-fire" style={{ top: '65%', left: '30%' }} data-label="Monroe FD">
              <div className="pin-pulse"></div>
              <div className="pin-icon"><svg width="14" height="14" viewBox="0 0 20 20" fill="none"><path d="M10 2C10 2 4 8 4 12C4 15.3 6.7 18 10 18C13.3 18 16 15.3 16 12C16 8 10 2 10 2Z" stroke="currentColor" strokeWidth="1.5" /></svg></div>
              <div className="pin-tooltip">Monroe Fire Dept<span>Orange County</span></div>
            </div>
            <div className="map-pin pin-dispatch" style={{ top: '48%', left: '25%' }} data-label="OC 911">
              <div className="pin-pulse"></div>
              <div className="pin-icon"><svg width="14" height="14" viewBox="0 0 20 20" fill="none"><circle cx="10" cy="10" r="7" stroke="currentColor" strokeWidth="1.5" /><path d="M10 6V10L13 12" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" /></svg></div>
              <div className="pin-tooltip">Orange County 911<span>Dispatch Hub</span></div>
            </div>

            <div className="map-pin pin-police" style={{ top: '45%', left: '50%' }} data-label="Hackensack PD">
              <div className="pin-pulse"></div>
              <div className="pin-icon"><svg width="14" height="14" viewBox="0 0 20 20" fill="none"><path d="M10 2L3 7V18H17V7L10 2Z" stroke="currentColor" strokeWidth="1.5" strokeLinejoin="round" /><circle cx="10" cy="10" r="2" fill="currentColor" /></svg></div>
              <div className="pin-tooltip">Hackensack PD<span>Bergen County, NJ</span></div>
            </div>
            <div className="map-pin pin-ems" style={{ top: '58%', left: '60%' }} data-label="Bergen EMS">
              <div className="pin-pulse"></div>
              <div className="pin-icon"><svg width="14" height="14" viewBox="0 0 20 20" fill="none"><rect x="4" y="6" width="12" height="10" rx="2" stroke="currentColor" strokeWidth="1.5" /><path d="M10 9V13M8 11H12" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" /></svg></div>
              <div className="pin-tooltip">Bergen Regional EMS<span>Bergen County, NJ</span></div>
            </div>

            <div className="map-pin pin-fire" style={{ top: '40%', left: '82%' }} data-label="FDNY Stn 52">
              <div className="pin-pulse"></div>
              <div className="pin-icon"><svg width="14" height="14" viewBox="0 0 20 20" fill="none"><path d="M10 2C10 2 4 8 4 12C4 15.3 6.7 18 10 18C13.3 18 16 15.3 16 12C16 8 10 2 10 2Z" stroke="currentColor" strokeWidth="1.5" /></svg></div>
              <div className="pin-tooltip">FDNY Station 52<span>Bronx County</span></div>
            </div>
            <div className="map-pin pin-police" style={{ top: '55%', left: '88%' }} data-label="NYPD 47th">
              <div className="pin-pulse"></div>
              <div className="pin-icon"><svg width="14" height="14" viewBox="0 0 20 20" fill="none"><path d="M10 2L3 7V18H17V7L10 2Z" stroke="currentColor" strokeWidth="1.5" strokeLinejoin="round" /><circle cx="10" cy="10" r="2" fill="currentColor" /></svg></div>
              <div className="pin-tooltip">NYPD 47th Precinct<span>Bronx County</span></div>
            </div>
            <div className="map-pin pin-ems" style={{ top: '68%', left: '78%' }} data-label="Jacobi MC">
              <div className="pin-pulse"></div>
              <div className="pin-icon"><svg width="14" height="14" viewBox="0 0 20 20" fill="none"><rect x="4" y="6" width="12" height="10" rx="2" stroke="currentColor" strokeWidth="1.5" /><path d="M10 9V13M8 11H12" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" /></svg></div>
              <div className="pin-tooltip">Jacobi Medical Center<span>Bronx County</span></div>
            </div>

            {/* Active user pin */}
            <div className="map-pin pin-user" style={{ top: '30%', left: '30%' }}>
              <div className="pin-user-pulse"></div>
              <div className="pin-user-dot"></div>
              <div className="pin-tooltip pin-tooltip-user">You are here<span>230 W Route 59, Nanuet</span></div>
            </div>
          </div>
        </div>

        {/* Fall Detection + SOS Grid */}
        <div className="emergency-grid">
          {/* Fall Detection */}
          <div className="emergency-card emergency-fall">
            <div className="emergency-card-header">
              <div className="emergency-icon-badge fall-badge">
                <svg width="32" height="32" viewBox="0 0 32 32" fill="none">
                  <circle cx="16" cy="8" r="4" stroke="currentColor" strokeWidth="2" />
                  <path d="M12 16L8 28M20 16L24 28M16 14V22" stroke="currentColor" strokeWidth="2" strokeLinecap="round" />
                  <path d="M10 20L22 20" stroke="currentColor" strokeWidth="2" strokeLinecap="round" />
                </svg>
              </div>
              <span className="emergency-label">Intelligent Fall Detection</span>
            </div>
            <h3 className="emergency-title">Falls detected.<br />Alerts sent automatically.</h3>
            <p className="emergency-description">
              Advanced accelerometer and gyroscope sensors detect sudden impacts and unusual movement patterns.
              When a fall is detected, the system automatically triggers an alert — no button press required.
            </p>

            <div className="fall-timeline">
              <h4 className="fall-timeline-title">What happens when a fall is detected</h4>
              <div className="timeline-steps">
                <div className="timeline-step">
                  <div className="timeline-marker">
                    <div className="timeline-dot active"></div>
                    <div className="timeline-line"></div>
                  </div>
                  <div className="timeline-content">
                    <span className="timeline-time">0 sec</span>
                    <span className="timeline-event">Impact detected by sensors</span>
                  </div>
                </div>
                <div className="timeline-step">
                  <div className="timeline-marker">
                    <div className="timeline-dot"></div>
                    <div className="timeline-line"></div>
                  </div>
                  <div className="timeline-content">
                    <span className="timeline-time">5 sec</span>
                    <span className="timeline-event">Wristband vibrates — cancellation window</span>
                  </div>
                </div>
                <div className="timeline-step">
                  <div className="timeline-marker">
                    <div className="timeline-dot"></div>
                    <div className="timeline-line"></div>
                  </div>
                  <div className="timeline-content">
                    <span className="timeline-time">30 sec</span>
                    <span className="timeline-event">Alert sent to all emergency contacts</span>
                  </div>
                </div>
                <div className="timeline-step">
                  <div className="timeline-marker">
                    <div className="timeline-dot"></div>
                  </div>
                  <div className="timeline-content">
                    <span className="timeline-time">45 sec</span>
                    <span className="timeline-event">GPS location shared with first responders</span>
                  </div>
                </div>
              </div>
            </div>

            <div className="sensor-stats">
              <div className="sensor-stat">
                <span className="sensor-value">99.2%</span>
                <span className="sensor-label">Detection accuracy</span>
              </div>
              <div className="sensor-stat">
                <span className="sensor-value">&lt;5s</span>
                <span className="sensor-label">Response time</span>
              </div>
              <div className="sensor-stat">
                <span className="sensor-value">24/7</span>
                <span className="sensor-label">Always monitoring</span>
              </div>
            </div>
          </div>

          {/* One-Touch SOS */}
          <div className="emergency-card emergency-sos">
            <div className="emergency-card-glow"></div>
            <div className="emergency-card-header">
              <div className="emergency-icon-badge sos-badge">
                <svg width="32" height="32" viewBox="0 0 32 32" fill="none">
                  <path d="M16 4V8M16 24V28M4 16H8M24 16H28" stroke="currentColor" strokeWidth="3" strokeLinecap="round" />
                  <circle cx="16" cy="16" r="6" stroke="currentColor" strokeWidth="2.5" />
                </svg>
              </div>
              <span className="emergency-label">One-Touch SOS</span>
            </div>
            <h3 className="emergency-title">One press.<br />Help arrives.</h3>
            <p className="emergency-description">
              A single button press triggers a full emergency protocol — alerting your designated contacts,
              sharing your GPS location, and transmitting your First Responder Profile to 911 dispatchers.
            </p>

            <div className="sos-flow">
              <div className="sos-flow-step">
                <div className="sos-flow-num">1</div>
                <div className="sos-flow-content">
                  <strong>SOS Activated</strong>
                  <span>User presses the emergency button</span>
                </div>
              </div>
              <div className="sos-flow-arrow">
                <svg width="24" height="24" viewBox="0 0 24 24" fill="none"><path d="M12 5V19M12 19L5 12M12 19L19 12" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" /></svg>
              </div>
              <div className="sos-flow-step">
                <div className="sos-flow-num">2</div>
                <div className="sos-flow-content">
                  <strong>Profile Transmitted</strong>
                  <span>First Responder codes sent to dispatch</span>
                </div>
              </div>
              <div className="sos-flow-arrow">
                <svg width="24" height="24" viewBox="0 0 24 24" fill="none"><path d="M12 5V19M12 19L5 12M12 19L19 12" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" /></svg>
              </div>
              <div className="sos-flow-step">
                <div className="sos-flow-num">3</div>
                <div className="sos-flow-content">
                  <strong>Contacts Alerted</strong>
                  <span>SMS &amp; call sent to all emergency contacts</span>
                </div>
              </div>
              <div className="sos-flow-arrow">
                <svg width="24" height="24" viewBox="0 0 24 24" fill="none"><path d="M12 5V19M12 19L5 12M12 19L19 12" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" /></svg>
              </div>
              <div className="sos-flow-step">
                <div className="sos-flow-num">4</div>
                <div className="sos-flow-content">
                  <strong>Help Dispatched</strong>
                  <span>Nearest units receive location + profile</span>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
