import { MembershipCard } from './MembershipCard'
import './FeeFreeSection.css'

export function FeeFreeSection() {
  return (
    <section className="fee-free-section">
      <div className="fee-free-section__container">
        <MembershipCard />

        <div className="fee-free-section__text">
          <span className="fee-free-section__badge">Actually Fee Free</span>
          <h2 className="fee-free-section__title">Fee-Free Forever</h2>
          <p className="fee-free-section__desc">
            We don&apos;t charge you fees and we don&apos;t put up paywalls. We&apos;re the
            bridge that connects job opportunities with the best candidates, with no
            middleman involved.
          </p>
        </div>
      </div>
    </section>
  )
}
