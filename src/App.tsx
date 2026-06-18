import logoImg from './assets/Logo.png'
import decorDotImg from './assets/Ellipse 55.png'
import dashboardMockupImg from './assets/Rectangle 104.png'
import rBadgeImg from './assets/Group 132.png'
import gruAvatarImg from './assets/20170315-ShowbizInsider-DespicableMe-696x464-696x430.png'
import './App.css'

function App() {
  return (
    <>
      <section className="hero-section">
        <header className="hero-header">
          <div className="logo-container">
            <img src={logoImg} className="logo-img" alt="RemoteRecruit Logo" />
          </div>
          <div className="nav-actions">
            <a href="#signin" className="nav-link">Sign In</a>
            <a href="#signup" className="nav-btn-signup">Sign Up</a>
          </div>
        </header>

        <div className="hero-content">
          <h1 className="hero-title">RemoteRecruit’s Difference</h1>
          <p className="hero-desc">
            RemoteRecruit is connecting the world with an easy-to-use platform that lets 
            full-time, part-time, and freelance workers showcase their talents to 
            businesses that need them. With no paywalls, no fees, and no barriers, there’s 
            nothing but you, your talents, and the next step in your career.
          </p>
        </div>
      </section>

      <section className="features-section">
        <div className="features-container">
          {/* Left Column */}
          <div className="features-text-content">
            <span className="badge-tag">Global Reach</span>
            <h2 className="features-title">The First Fully Global Job Board, Anywhere, Ever</h2>
            <p className="features-desc">
              RemoteRecruit connects candidates with opportunities around the world. With today’s 
              remote-first workforce, you need to be able to find the best jobs and the best 
              people for them, wherever they may be.
            </p>
          </div>

          {/* Right Column */}
          <div className="features-visual-content">
            <div className="mockup-scene">
              <img src={decorDotImg} className="decor-dot-img" alt="" aria-hidden="true" />

              <div className="mockup-card">
                <img
                  src={dashboardMockupImg}
                  className="dashboard-mockup-img"
                  alt="RemoteRecruit dashboard preview"
                />

                <div className="profile-cards">
                  <div className="profile-card profile-card--peek">
                    <img src={gruAvatarImg} className="profile-avatar yellow-border" alt="" />
                    <div className="profile-info">
                      <span className="profile-role">Python Developer</span>
                      <span className="profile-name">Felonious Gru</span>
                    </div>
                  </div>

                  <div className="profile-card profile-card--offset profile-card--animate">
                    <img src={gruAvatarImg} className="profile-avatar yellow-border" alt="" />
                    <div className="profile-info">
                      <span className="profile-role profile-role--light">Front End Wizard</span>
                      <span className="profile-name">Mel Muselphiem</span>
                    </div>
                  </div>
                </div>

                <img src={rBadgeImg} className="badge-r-logo-img" alt="" aria-hidden="true" />
              </div>
            </div>
          </div>
        </div>
      </section>
    </>
  )
}

export default App
