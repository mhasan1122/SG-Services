import { decorDotImg, paypalImg, rBadgeImg } from '../../../assets'
import './MembershipCard.css'

const FEATURES = [
  'Up to 25 active job posts',
  'Premium Placement & Visibility',
  'Messaging anyone, unlimited',
  'Unlimited invites',
  'View all applicants',
  'Unlimited invites to jobseekers',
]

function CheckIcon() {
  return (
    <svg
      className="membership-card__check"
      viewBox="0 0 16 16"
      fill="none"
      aria-hidden="true"
    >
      <circle cx="8" cy="8" r="8" fill="#0ea5e9" />
      <path
        d="M4.5 8.2l2.2 2.2 4.8-4.8"
        stroke="#fff"
        strokeWidth="1.6"
        strokeLinecap="round"
        strokeLinejoin="round"
      />
    </svg>
  )
}

export function MembershipCard() {
  return (
    <div className="membership-card">
      <div className="membership-card__scene">
        <img
          src={decorDotImg}
          className="membership-card__dot"
          alt=""
          aria-hidden="true"
        />

        <div className="membership-card__panel">
          <p className="membership-card__label">Your Membership Tier</p>
          <h3 className="membership-card__tier">Premium</h3>

          <p className="membership-card__features-label">FEATURES</p>
          <ul className="membership-card__features">
            {FEATURES.map((feature) => (
              <li key={feature} className="membership-card__feature">
                <CheckIcon />
                <span>{feature}</span>
              </li>
            ))}
          </ul>
        </div>

        <div className="membership-card__payment">
          <img
            src={paypalImg}
            className="membership-card__paypal-icon"
            alt=""
            aria-hidden="true"
          />
          <div className="membership-card__payment-text">
            <span className="membership-card__payment-label">Upcoming Payment In...</span>
            <span className="membership-card__payment-amount">14 Days - $79.99</span>
          </div>
        </div>

        <img
          src={rBadgeImg}
          className="membership-card__badge"
          alt=""
          aria-hidden="true"
        />
      </div>
    </div>
  )
}
