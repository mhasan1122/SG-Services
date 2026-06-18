import { logoImg, rBadgeImg } from '../../../assets'
import './SiteFooter.css'

const SOCIAL_LINKS = [
  { label: 'Facebook', href: '#facebook' },
  { label: 'Instagram', href: '#instagram' },
  { label: 'X', href: '#x' },
  { label: 'Twitter', href: '#twitter' },
  { label: 'LinkedIn', href: '#linkedin' },
  { label: 'Snapchat', href: '#snapchat' },
] as const

function SocialIcon({ label }: { label: (typeof SOCIAL_LINKS)[number]['label'] }) {
  switch (label) {
    case 'Facebook':
      return (
        <svg viewBox="0 0 24 24" fill="currentColor" aria-hidden="true">
          <path d="M14 8h3V5h-3c-2.2 0-4 1.8-4 4v2H7v3h3v7h3v-7h2.6l.4-3H13V9c0-.6.4-1 1-1z" />
        </svg>
      )
    case 'Instagram':
      return (
        <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.8" aria-hidden="true">
          <rect x="4" y="4" width="16" height="16" rx="4" />
          <circle cx="12" cy="12" r="3.5" />
          <circle cx="17.2" cy="6.8" r="1" fill="currentColor" stroke="none" />
        </svg>
      )
    case 'X':
      return (
        <svg viewBox="0 0 24 24" fill="currentColor" aria-hidden="true">
          <path d="M16.2 5h2.9l-6.4 7.3 7.5 9.7h-5.9l-4.6-6-5.3 6H2.1l6.8-7.8L2 5h6l4.2 5.5L16.2 5zm-1 14.2h1.6L7.9 6.7H6.2l9 12.5z" />
        </svg>
      )
    case 'Twitter':
      return (
        <svg viewBox="0 0 24 24" fill="currentColor" aria-hidden="true">
          <path d="M21.5 7.5c-.7.3-1.5.5-2.3.6.8-.5 1.4-1.2 1.7-2.1-.8.5-1.6.8-2.5 1-1.5-1.6-4.1-1.6-5.6 0-1 .9-1.3 2.3-.9 3.5-3.1-.2-5.9-1.6-7.7-4.1-.3.5-.5 1.2-.5 1.9 0 1.3.7 2.5 1.7 3.2-.6 0-1.2-.2-1.7-.5v.1c0 1.8 1.3 3.4 3.1 3.7-.3.1-.7.1-1 .1-.2 0-.5 0-.7-.1.5 1.5 1.9 2.6 3.6 2.6-1.3 1-3 1.6-4.8 1.6-.3 0-.6 0-.9-.1 1.7 1.1 3.7 1.7 5.9 1.7 7.1 0 11-5.9 11-11v-.5c.8-.5 1.4-1.2 1.9-2z" />
        </svg>
      )
    case 'LinkedIn':
      return (
        <svg viewBox="0 0 24 24" fill="currentColor" aria-hidden="true">
          <path d="M6.5 8.7H3.6V20h2.9V8.7zM5 4a1.7 1.7 0 100 3.4A1.7 1.7 0 005 4zm4.2 4.7H6.3V20h2.9v-5.8c0-1.5.3-3 2.2-3 1.9 0 1.9 1.8 1.9 3.1V20H16v-6.2c0-3.1-1.7-4.5-3.9-4.5-1.8 0-2.6 1-3 1.9l-.1-1.5z" />
        </svg>
      )
    case 'Snapchat':
      return (
        <svg viewBox="0 0 24 24" fill="currentColor" aria-hidden="true">
          <path d="M12 3c2.2 0 4.4 1.1 4.4 4.2 0 .5-.1 1-.2 1.4 2.5.6 4.3 2.2 4.3 4.8 0 .8-.2 1.5-.6 2.1 1.2.4 2.1 1 2.1 2.1 0 1.2-1.2 1.7-2.4 1.9-.3 1.5-1.4 2.5-2.8 2.5-.8 0-1.5-.3-2.1-.7-.6.8-1.6 1.3-2.7 1.3-1.1 0-2.1-.5-2.7-1.3-.6.4-1.3.7-2.1.7-1.4 0-2.5-1-2.8-2.5-1.2-.2-2.4-.7-2.4-1.9 0-1.1.9-1.7 2.1-2.1-.4-.6-.6-1.3-.6-2.1 0-2.6 1.8-4.2 4.3-4.8-.1-.4-.2-.9-.2-1.4C7.6 4.1 9.8 3 12 3z" />
        </svg>
      )
  }
}

function CheckIcon() {
  return (
    <svg
      className="pricing-card__icon pricing-card__icon--check"
      viewBox="0 0 16 16"
      fill="none"
      aria-hidden="true"
    >
      <circle cx="8" cy="8" r="8" fill="#1e3e85" />
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

function CrossIcon() {
  return (
    <svg
      className="pricing-card__icon pricing-card__icon--cross"
      viewBox="0 0 16 16"
      fill="none"
      aria-hidden="true"
    >
      <circle cx="8" cy="8" r="8" fill="#e2e8f0" />
      <path
        d="M5.5 5.5l5 5M10.5 5.5l-5 5"
        stroke="#94a3b8"
        strokeWidth="1.6"
        strokeLinecap="round"
        strokeLinejoin="round"
      />
    </svg>
  )
}

function DiamondIcon() {
  return (
    <svg
      className="pricing-card__premium-badge-icon"
      viewBox="0 0 24 24"
      fill="none"
      stroke="currentColor"
      strokeWidth="2"
      strokeLinecap="round"
      strokeLinejoin="round"
      aria-hidden="true"
    >
      <path d="M6 3h12l4 6-10 12L2 9z" />
      <path d="M11 3 8 9l4 12 4-12-3-6" />
      <path d="M2 9h20" />
    </svg>
  )
}

export function SiteFooter() {
  return (
    <footer className="site-footer">
      {/* Top Pricing Section */}
      <div className="site-footer__pricing">
        <div className="site-footer__pricing-container">
          <h2 className="site-footer__pricing-title">Help Is One Click Away</h2>

          <div className="pricing-cards">
            {/* Free Basic Card */}
            <div className="pricing-card pricing-card--free">
              <div className="pricing-card__body">
                <div className="pricing-card__price-column">
                  <div className="pricing-card__price-box">
                    <span className="pricing-card__price-large">Free</span>
                    <span className="pricing-card__price-small">Basic</span>
                  </div>
                </div>

                <div className="pricing-card__features-column">
                  <ul className="pricing-card__features">
                    <li className="pricing-card__feature pricing-card__feature--included">
                      <CheckIcon />
                      <span>1 Active Job</span>
                    </li>
                    <li className="pricing-card__feature pricing-card__feature--included">
                      <CheckIcon />
                      <span>Basic List Placement</span>
                    </li>
                    <li className="pricing-card__feature pricing-card__feature--excluded">
                      <CrossIcon />
                      <span>Unlimited Job Applicants</span>
                    </li>
                    <li className="pricing-card__feature pricing-card__feature--excluded">
                      <CrossIcon />
                      <span>Invite Anyone to Apply to Your Jobs</span>
                    </li>
                  </ul>
                </div>
              </div>

              <div className="pricing-card__footer">
                <a href="#get-started-free" className="pricing-card__btn pricing-card__btn--outlined">
                  Get Started
                </a>
              </div>
            </div>

            {/* Premium Card */}
            <div className="pricing-card pricing-card--premium">
              <div className="pricing-card__premium-badge">
                <DiamondIcon />
                <span>Premium</span>
              </div>

              <div className="pricing-card__body">
                <div className="pricing-card__price-column">
                  <div className="pricing-card__price-box">
                    <span className="pricing-card__price-large">$79.99</span>
                    <span className="pricing-card__price-small">Per Month</span>
                  </div>
                </div>

                <div className="pricing-card__features-column">
                  <ul className="pricing-card__features">
                    <li className="pricing-card__feature pricing-card__feature--included">
                      <CheckIcon />
                      <span>Unlimited Job Posts</span>
                    </li>
                    <li className="pricing-card__feature pricing-card__feature--included">
                      <CheckIcon />
                      <span>Instant Job Post Approval</span>
                    </li>
                    <li className="pricing-card__feature pricing-card__feature--included">
                      <CheckIcon />
                      <span>Premium List Placement</span>
                    </li>
                    <li className="pricing-card__feature pricing-card__feature--included">
                      <CheckIcon />
                      <span>Unlimited Job Applicants</span>
                    </li>
                  </ul>
                </div>
              </div>

              <div className="pricing-card__footer">
                <a href="#get-started-premium" className="pricing-card__btn pricing-card__btn--filled">
                  Get Started
                </a>
              </div>
            </div>
          </div>
        </div>
      </div>

      {/* Bottom Wave & Footer Content Section */}
      <div className="site-footer__bottom-section">
        {/* Layered SVG Wave */}
        <div className="site-footer__wave-container">
          <svg
            className="site-footer__wave"
            viewBox="0 0 1440 120"
            preserveAspectRatio="none"
            fill="none"
            xmlns="http://www.w3.org/2000/svg"
          >
            {/* Light blue wave underneath */}
            <path
              d="M0,70 C360,110 800,20 1100,50 C1280,65 1380,95 1440,100 L1440,120 L0,120 Z"
              fill="#52b4da"
              opacity="0.4"
            />
            {/* Dark blue wave in front */}
            <path
              d="M0,85 C360,125 800,35 1100,65 C1280,80 1380,110 1440,115 L1440,120 L0,120 Z"
              fill="#1e3e85"
            />
          </svg>
        </div>

        {/* Dark Blue Footer Main Content */}
        <div className="site-footer__inner">
          <div className="site-footer__main">
            <a href="/" className="site-footer__logo" aria-label="RemoteRecruit home">
              <img src={logoImg} className="site-footer__logo-img" alt="Remote Recruit" />
            </a>

            <div className="site-footer__social">
              {SOCIAL_LINKS.map((link) => (
                <a
                  key={link.label}
                  href={link.href}
                  className="site-footer__social-link"
                  aria-label={link.label}
                >
                  <SocialIcon label={link.label} />
                </a>
              ))}
            </div>
          </div>

          <div className="site-footer__bottom">
            <img
              src={rBadgeImg}
              className="site-footer__badge"
              alt=""
              aria-hidden="true"
            />
          </div>
        </div>
      </div>
    </footer>
  )
}
