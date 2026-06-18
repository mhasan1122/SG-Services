import { logoImg } from '../../../assets'
import './SiteHeader.css'

export function SiteHeader() {
  return (
    <header className="site-header">
      <div className="site-header__logo">
        <img src={logoImg} className="site-header__logo-img" alt="RemoteRecruit Logo" />
      </div>
      <div className="site-header__actions">
        <a href="#signin" className="site-header__link">
          Sign In
        </a>
        <a href="#signup" className="site-header__signup">
          Sign Up
        </a>
      </div>
    </header>
  )
}
