import { decorDotImg, profileMockupImg, gruAvatarImg } from '../../../assets'
import { LazyImage } from '../../ui/LazyImage/LazyImage'
import './ProfileFeatureMockup.css'

const SKILLS = [
  'Python Dev',
  'Javascript',
  'Front End',
  'Back End',
  'IOS Development',
  '+12',
]

export function ProfileFeatureMockup() {
  return (
    <div className="profile-feature-mockup">
      <div className="profile-feature-mockup__scene">
        <LazyImage
          src={decorDotImg}
          className="profile-feature-mockup__dot"
          alt=""
          aria-hidden="true"
        />

        <div className="profile-feature-mockup__card">
          <div className="profile-feature-mockup__profile-wrap">
            <LazyImage
              src={profileMockupImg}
              className="profile-feature-mockup__profile"
              alt="Custom profile preview"
            />

            <button
              type="button"
              className="profile-feature-mockup__play"
              aria-label="Play intro video"
            >
              <svg viewBox="0 0 24 24" fill="currentColor" aria-hidden="true">
                <path d="M8 5v14l11-7z" />
              </svg>
            </button>

            <LazyImage
              src={gruAvatarImg}
              className="profile-feature-mockup__floating-avatar"
              alt=""
              aria-hidden="true"
            />
          </div>

          <div className="profile-feature-mockup__feedback">
            <LazyImage
              src={gruAvatarImg}
              className="profile-feature-mockup__feedback-avatar"
              alt=""
              aria-hidden="true"
            />
            <div className="profile-feature-mockup__feedback-text">
              <span className="profile-feature-mockup__feedback-label">
                Past Client Feedback
              </span>
              <span className="profile-feature-mockup__feedback-quote">
                Best Developer Ever!
              </span>
            </div>
          </div>

          <div className="profile-feature-mockup__skills">
            {SKILLS.map((skill) => (
              <span key={skill} className="profile-feature-mockup__skill">
                {skill}
              </span>
            ))}
          </div>
        </div>
      </div>
    </div>
  )
}
