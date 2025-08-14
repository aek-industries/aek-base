import './App.css'
import { useState, useEffect } from 'react'

function App() {
  const [showAkButton, setShowAkButton] = useState(false);
  const [keySequence, setKeySequence] = useState('');

  const scrollToSection = (sectionId) => {
    const element = document.getElementById(sectionId);
    element?.scrollIntoView({ behavior: 'smooth' });
  };

  useEffect(() => {
    const handleKeyPress = (event) => {
      const key = event.key.toLowerCase();
      const newSequence = keySequence + key;
      
      if (key === 'a' && keySequence === '') {
        setKeySequence('a');
      } else if (key === 'e' && keySequence === 'a') {
        setKeySequence('ae');
      } else if (key === 'k' && keySequence === 'ae') {
        setKeySequence('aek');
        setShowAkButton(true);
        // Reset after 5 seconds
        setTimeout(() => {
          setShowAkButton(false);
          setKeySequence('');
        }, 5000);
      } else {
        setKeySequence('');
      }
    };

    window.addEventListener('keydown', handleKeyPress);
    return () => window.removeEventListener('keydown', handleKeyPress);
  }, [keySequence]);

  return (
    <div className="app">
      {/* Navigation */}
      <nav className="navbar">
        <div className="nav-container">
          <div className="nav-logo">
            {showAkButton && <div className="ak-button">ak</div>}
            <h2>AEK INDUSTRIES</h2>
          </div>
          <div className="nav-links">
            <button onClick={() => scrollToSection('home')} className="nav-link">Home</button>
            <button onClick={() => scrollToSection('about')} className="nav-link">About Us</button>
            <button onClick={() => scrollToSection('contact')} className="nav-link">Contact Us</button>
          </div>
        </div>
      </nav>

      {/* Hero Section */}
      <section id="home" className="hero">
        <div className="hero-content">
          <h1 className="hero-title">Software as a Service</h1>
          <h2 className="hero-subtitle">Accelerating Innovation Through Technology</h2>
          <p className="hero-description">
            Delivering cutting-edge software solutions that transform industries and propel businesses into the future.
          </p>
          <button className="cta-button" onClick={() => scrollToSection('about')}>
            Explore Our Services
          </button>
        </div>
        <div className="hero-visual">
          <div className="floating-elements">
            <div className="celestial-body sun" title="Sun - Our Solar System's Star">
              <div className="celestial-glow"></div>
            </div>
            <div className="celestial-body earth" title="Earth - Our Home Planet">
              <div className="earth-continents"></div>
              <div className="satellite-orbit earth-orbit">
                <div className="satellite satellite-1"></div>
              </div>
              <div className="satellite-orbit earth-orbit-2">
                <div className="satellite satellite-2"></div>
              </div>
              {/* Moon orbiting Earth */}
              <div className="lunar-orbit">
                <div className="moon-small"></div>
              </div>
            </div>
            <div className="celestial-body mars" title="Mars - The Red Planet">
              <div className="mars-features"></div>
              <div className="satellite-orbit mars-orbit">
                <div className="satellite satellite-3"></div>
              </div>
              <div className="satellite-orbit mars-orbit-2">
                <div className="satellite satellite-4"></div>
              </div>
            </div>
            
          </div>
        </div>
      </section>

      {/* About Us Section */}
      <section id="about" className="about">
        <div className="section-container">
          <h2 className="section-title">About AEK Industries</h2>
          <div className="about-grid">
            <div className="about-card">
              <div className="card-icon">🚀</div>
              <h3>Space Technology</h3>
              <p>Advanced software for space exploration, satellite systems, and mission-critical applications.</p>
            </div>
            <div className="about-card">
              <div className="card-icon">⚡</div>
              <h3>Energy Solutions</h3>
              <p>Smart grid management, renewable energy optimization, and sustainable technology platforms.</p>
            </div>
            <div className="about-card">
              <div className="card-icon">🤖</div>
              <h3>AI Solutions</h3>
              <p>Machine learning models, predictive analytics, and intelligent automation systems.</p>
            </div>
            <div className="about-card">
              <div className="card-icon">💻</div>
              <h3>Software Development</h3>
              <p>Full-stack applications, cloud architecture, and scalable enterprise solutions.</p>
            </div>
          </div>
        </div>
      </section>

      {/* Contact Section */}
      <section id="contact" className="contact">
        <div className="section-container">
          <h2 className="section-title">Contact Us</h2>
          <div className="contact-content">
            <div className="contact-info">
              <h3>Ready to Transform Your Business?</h3>
              <p>Get in touch with our team to discuss how we can accelerate your next project.</p>
              <div className="contact-details">
                <div className="contact-item">
                  <span className="contact-label">Email:</span>
                  <span>hello@aekindustries.com</span>
                </div>
                <div className="contact-item">
                  <span className="contact-label">Phone:</span>
                  <span>+1 (240) 367-3568</span>
                </div>
              </div>
            </div>
            <div className="contact-form">
              <form>
                <input type="text" placeholder="Your Name" className="form-input" />
                <input type="email" placeholder="Your Email" className="form-input" />
                <textarea placeholder="Tell us about your project" className="form-textarea"></textarea>
                <button type="submit" className="form-button">Send Message</button>
              </form>
            </div>
          </div>
        </div>
      </section>

      {/* Footer */}
      <footer className="footer">
        <div className="footer-content">
          <p>&copy; 2024 AEK Industries. All rights reserved.</p>
        </div>
      </footer>
    </div>
  )
}

export default App
