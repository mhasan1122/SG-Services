import {
  decorDotImg,
  dashboardMockupImg,
  rBadgeImg,
  gruAvatarImg,
} from '../../../assets'
import { LazyImage } from '../../ui/LazyImage/LazyImage'
import { ProfileCard } from './ProfileCard'
import './FeatureMockup.css'

export function FeatureMockup() {
  return (
    <div className="feature-mockup">
      <div className="feature-mockup__scene">
        <LazyImage
          src={decorDotImg}
          className="feature-mockup__dot"
          alt=""
          aria-hidden="true"
        />

        <div className="feature-mockup__card">
          <LazyImage
            src={dashboardMockupImg}
            className="feature-mockup__dashboard"
            alt="RemoteRecruit dashboard preview"
          />

          <div className="feature-mockup__profiles">
            <ProfileCard
              avatarSrc={gruAvatarImg}
              role="Python Developer"
              name="Felonious Gru"
              peek
            />
            <ProfileCard
              avatarSrc={gruAvatarImg}
              role="Front End Wizard"
              name="Mel Muselphiem"
              offset
              animate
              lightRole
            />
          </div>

          <LazyImage
            src={rBadgeImg}
            className="feature-mockup__badge"
            alt=""
            aria-hidden="true"
          />
        </div>
      </div>
    </div>
  )
}
