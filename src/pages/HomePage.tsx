import { HeroSection } from '../components/sections/HeroSection/HeroSection'
import { FeaturesSection } from '../components/sections/FeaturesSection/FeaturesSection'
import { FeeFreeSection } from '../components/sections/FeeFreeSection/FeeFreeSection'
import { CustomProfileSection } from '../components/sections/CustomProfileSection/CustomProfileSection'

export function HomePage() {
  return (
    <>
      <HeroSection />
      <FeaturesSection />
      <FeeFreeSection />
      <CustomProfileSection />
    </>
  )
}
