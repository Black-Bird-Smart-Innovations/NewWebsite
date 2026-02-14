import '../css/legal.css';

export default function TermsPage() {
  return (
    <main className="legal-page">
      <div className="legal-container">
        <header className="legal-header">
          <h1 className="legal-title">Terms of Service</h1>
          <p className="legal-meta">Last Updated: January 18, 2023</p>
        </header>
        <div className="legal-content">
          {/* Introduction */}
          <section className="legal-section">
            <p className="legal-intro">Welcome to Black Bird Smart Innovations. By using our smart wristband device and mobile application, you agree to be bound by these Terms of Service. Please read them carefully before using our services.</p>
          </section>

          {/* Company Information */}
          <section className="legal-section">
            <h2>Company Information</h2>
            <div className="contact-card">
              <p><strong>Black Bird Smart Wristband</strong></p>
              <p>230 West Route 59 #1047</p>
              <p>Nanuet, New York 10954, United States</p>
              <p>Email: <a href="mailto:Blackbird_tech@yahoo.com">Blackbird_tech@yahoo.com</a></p>
              <p>Phone: <a href="tel:917-977-0949">917-977-0949</a></p>
            </div>
          </section>

          {/* Application Purpose */}
          <section className="legal-section">
            <h2>Application Purpose</h2>
            <p>The Black Bird application and smart wristband are designed to:</p>
            <ol>
              <li>Store and use Protective Information in the event of a crisis</li>
              <li>Connect with Black Bird Smart Wristband and use specialized functions to locate and/or assist vulnerable individuals</li>
            </ol>
            <p>Our services are intended to provide safety monitoring for vulnerable individuals including the elderly, disabled persons, and children with special needs.</p>
          </section>

          {/* End User License Agreement (EULA) */}
          <section className="legal-section">
            <h2>End User License Agreement (EULA)</h2>
            <h3>License Grant</h3>
            <p>Subject to these Terms, Black Bird Smart Innovations grants you a limited, non-exclusive, non-transferable license to:</p>
            <ul>
              <li>Download and install the Black Bird application on your personal mobile device</li>
              <li>Use the application in conjunction with your Black Bird smart wristband</li>
              <li>Access the features and services provided through the application</li>
            </ul>
            <h3>Restrictions</h3>
            <p>You agree NOT to:</p>
            <ul>
              <li>Copy, modify, or distribute the application</li>
              <li>Reverse engineer, decompile, or disassemble the application</li>
              <li>Rent, lease, or lend the application to third parties</li>
              <li>Use the application for any unlawful purpose</li>
              <li>Remove or alter any proprietary notices or labels</li>
              <li>Transfer the license to another party without our consent</li>
            </ul>
          </section>

          {/* User Accounts */}
          <section className="legal-section">
            <h2>User Accounts</h2>
            <p>To use Black Bird Smart Innovations services, you must:</p>
            <ul>
              <li>Create an account with accurate information</li>
              <li>Maintain the security of your account credentials</li>
              <li>Notify us immediately of any unauthorized access</li>
              <li>Be at least 18 years old or have parental consent</li>
            </ul>
            <p>You are responsible for all activities that occur under your account.</p>
          </section>

          {/* Subscription and Payment */}
          <section className="legal-section">
            <h2>Subscription and Payment</h2>
            <p>Black Bird Smart Innovations operates on a subscription basis:</p>
            <ul>
              <li>Monthly subscription fee: $39.99 USD</li>
              <li>Billing occurs automatically each month</li>
              <li>You may cancel at any time through your account settings</li>
              <li>Refunds are subject to our refund policy</li>
            </ul>
            <p>Prices are subject to change with 30 days notice.</p>
          </section>

          {/* User-Generated Content */}
          <section className="legal-section">
            <h2>User-Generated Content</h2>
            <p>When using Black Bird Smart Innovations, you may submit content such as:</p>
            <ul>
              <li>Profile information and photos</li>
              <li>Emergency contact details</li>
              <li>Medical information</li>
              <li>Location data</li>
            </ul>
            <h3>Content Guidelines</h3>
            <p>You agree that your content will not:</p>
            <ul>
              <li>Violate any laws or regulations</li>
              <li>Infringe on intellectual property rights</li>
              <li>Contain false or misleading information</li>
              <li>Be harmful, threatening, or harassing</li>
            </ul>
          </section>

          {/* Limitation of Liability */}
          <section className="legal-section">
            <h2>Limitation of Liability</h2>
            <div className="legal-notice">
              <svg width="20" height="20" viewBox="0 0 20 20" fill="none"><circle cx="10" cy="10" r="8" stroke="currentColor" strokeWidth="1.5"/><path d="M10 6V10M10 14V14.01" stroke="currentColor" strokeWidth="2" strokeLinecap="round"/></svg>
              <p><strong>Important:</strong> Black Bird Smart Innovations is a safety monitoring tool and should not be relied upon as the sole means of emergency protection. Always contact emergency services (911) directly in life-threatening situations.</p>
            </div>
            <p>To the maximum extent permitted by law:</p>
            <ul>
              <li>Black Bird Smart Innovations provides services "as is" without warranties of any kind</li>
              <li>We are not liable for any indirect, incidental, or consequential damages</li>
              <li>Our total liability shall not exceed the amount paid for services in the past 12 months</li>
              <li>We do not guarantee uninterrupted or error-free service</li>
            </ul>
          </section>

          {/* Third-Party Services */}
          <section className="legal-section">
            <h2>Third-Party Services</h2>
            <p>Our services integrate with third-party platforms:</p>
            <ul>
              <li><strong>Apple:</strong> For iOS app distribution and services</li>
              <li><strong>Google:</strong> For Android app distribution and mapping services</li>
              <li><strong>Payment Processors:</strong> For secure transaction handling</li>
            </ul>
            <p>These third parties are beneficiaries of these Terms with respect to their services.</p>
          </section>

          {/* Governing Law */}
          <section className="legal-section">
            <h2>Governing Law</h2>
            <p>These Terms shall be governed by and construed in accordance with the laws of the State of New York, United States, without regard to its conflict of law provisions.</p>
            <p>Any disputes arising from these Terms shall be resolved in the courts of New York State.</p>
          </section>

          {/* Changes to Terms */}
          <section className="legal-section">
            <h2>Changes to Terms</h2>
            <p>We reserve the right to modify these Terms at any time. We will notify users of material changes via:</p>
            <ul>
              <li>Email notification</li>
              <li>In-app notification</li>
              <li>Posting the updated Terms on our website</li>
            </ul>
            <p>Continued use of our services after changes constitutes acceptance of the new Terms.</p>
          </section>

          {/* Contact Us */}
          <section className="legal-section">
            <h2>Contact Us</h2>
            <p>If you have questions about these Terms of Service, please contact us:</p>
            <div className="contact-card">
              <p>Email: <a href="mailto:Blackbird_tech@yahoo.com">Blackbird_tech@yahoo.com</a></p>
              <p>Phone: <a href="tel:917-977-0949">917-977-0949</a></p>
            </div>
          </section>
        </div>
      </div>
    </main>
  );
}
