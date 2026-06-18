import { heroBackgroundImg } from '../../../assets'
import { SiteHeader } from '../../layout/SiteHeader/SiteHeader'
import './HeroSection.css'

export function HeroSection() {
  return (
    <section
      className="hero-section"
      style={{ backgroundImage: `url(${heroBackgroundImg})` }}
    >
      <SiteHeader />

      <div className="hero-section__content">
        <h1 className="hero-section__title">RemoteRecruit’s Difference</h1>
        <p className="hero-section__desc">
          RemoteRecruit is connecting the world with an easy-to-use platform that lets
          full-time, part-time, and freelance workers showcase their talents to
          businesses that need them. With no paywalls, no fees, and no barriers, there’s
          nothing but you, your talents, and the next step in your career.
        </p>
      </div>
    </section>
  )
}
