import { ProfileFeatureMockup } from '../FeaturesSection/ProfileFeatureMockup'
import '../FeaturesSection/FeaturesSection.css'

export function CustomProfileSection() {
  return (
    <section className="features-section">
      <div className="features-section__container">
        <div className="features-section__text">
          <span className="features-section__badge">Custom Profile</span>
          <h2 className="features-section__title">Showcase Your Talents</h2>
          <p className="features-section__desc">
            Personalize your profile with everything that makes you unique. Add an introductory
            video and other media for a personal touch that stands out to employers and
            candidates.
          </p>
        </div>

        <ProfileFeatureMockup />
      </div>
    </section>
  )
}
