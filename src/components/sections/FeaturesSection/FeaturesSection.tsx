import { FeatureMockup } from './FeatureMockup'
import './FeaturesSection.css'

export function FeaturesSection() {
  return (
    <section className="features-section">
      <div className="features-section__container">
        <div className="features-section__text">
          <span className="features-section__badge">Global Reach</span>
          <h2 className="features-section__title">
            The First Fully Global Job Board, Anywhere, Ever
          </h2>
          <p className="features-section__desc">
            RemoteRecruit connects candidates with opportunities around the world. With today’s
            remote-first workforce, you need to be able to find the best jobs and the best
            people for them, wherever they may be.
          </p>
        </div>

        <FeatureMockup />
      </div>
    </section>
  )
}
