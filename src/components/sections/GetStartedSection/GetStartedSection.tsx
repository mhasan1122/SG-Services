import { decorDotImg } from '../../../assets'
import { FindWorkMockup } from './FindWorkMockup'
import './GetStartedSection.css'

function ArrowIcon() {
  return (
    <svg viewBox="0 0 24 24" fill="none" aria-hidden="true">
      <path
        d="M9 6l6 6-6 6"
        stroke="currentColor"
        strokeWidth="2.5"
        strokeLinecap="round"
        strokeLinejoin="round"
      />
    </svg>
  )
}

export function GetStartedSection() {
  return (
    <section className="get-started-section">
      <div className="get-started-section__bg" aria-hidden="true">
        <span className="get-started-section__orb get-started-section__orb--one" />
        <span className="get-started-section__orb get-started-section__orb--two" />
        <span className="get-started-section__orb get-started-section__orb--three" />
        <span className="get-started-section__orb get-started-section__orb--four" />
        <span className="get-started-section__sun" />
      </div>

      <img
        src={decorDotImg}
        className="get-started-section__dot"
        alt=""
        aria-hidden="true"
      />

      <div className="get-started-section__container">
        <FindWorkMockup />

        <div className="get-started-section__text">
          <span className="get-started-section__badge">Are you ready?</span>
          <h2 className="get-started-section__title">
            Help is only a few clicks away!
          </h2>
          <p className="get-started-section__desc">
            Click Below to get set up super quickly and find help now!
          </p>

          <a href="#signup" className="get-started-section__cta">
            <span className="get-started-section__cta-icon">
              <ArrowIcon />
            </span>
            <span className="get-started-section__cta-label">Get Started</span>
          </a>
        </div>
      </div>
    </section>
  )
}
