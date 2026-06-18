import { findWorkMockupImg } from '../../../assets'
import { LazyImage } from '../../ui/LazyImage/LazyImage'
import './FindWorkMockup.css'

export function FindWorkMockup() {
  return (
    <div className="find-work-mockup">
      <div className="find-work-mockup__scene">
        <div className="find-work-mockup__card">
          <LazyImage
            src={findWorkMockupImg}
            className="find-work-mockup__dashboard"
            alt="Find Work dashboard preview"
          />
        </div>
      </div>
    </div>
  )
}
