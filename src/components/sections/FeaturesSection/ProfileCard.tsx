import { LazyImage } from '../../ui/LazyImage/LazyImage'
import './ProfileCard.css'

type ProfileCardProps = {
  avatarSrc: string
  role: string
  name: string
  peek?: boolean
  offset?: boolean
  animate?: boolean
  lightRole?: boolean
}

export function ProfileCard({
  avatarSrc,
  role,
  name,
  peek = false,
  offset = false,
  animate = false,
  lightRole = false,
}: ProfileCardProps) {
  const className = [
    'profile-card',
    peek && 'profile-card--peek',
    offset && 'profile-card--offset',
    animate && 'profile-card--animate',
  ]
    .filter(Boolean)
    .join(' ')

  return (
    <div className={className}>
      <LazyImage src={avatarSrc} className="profile-card__avatar" alt="" aria-hidden="true" />
      <div className="profile-card__info">
        <span
          className={`profile-card__role${lightRole ? ' profile-card__role--light' : ''}`}
        >
          {role}
        </span>
        <span className="profile-card__name">{name}</span>
      </div>
    </div>
  )
}
