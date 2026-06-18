import logoImg from './assets/Logo.png'
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
    </>
  )
}

export default App
