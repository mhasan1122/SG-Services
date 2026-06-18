import { HeroSection } from '../components/sections/HeroSection/HeroSection'
import { FeaturesSection } from '../components/sections/FeaturesSection/FeaturesSection'
import { FeeFreeSection } from '../components/sections/FeeFreeSection/FeeFreeSection'
import { CustomProfileSection } from '../components/sections/CustomProfileSection/CustomProfileSection'
import { GetStartedSection } from '../components/sections/GetStartedSection/GetStartedSection'
import { FaqSection } from '../components/sections/FaqSection/FaqSection'
import { SiteFooter } from '../components/layout/SiteFooter/SiteFooter'
import { RevealOnScroll } from '../components/ui/RevealOnScroll/RevealOnScroll'
import { ScrollToTop } from '../components/ui/ScrollToTop/ScrollToTop'

export function HomePage() {
  return (
    <>
      <RevealOnScroll>
        <HeroSection />
      </RevealOnScroll>
      <RevealOnScroll delay={80}>
        <FeaturesSection />
      </RevealOnScroll>
      <RevealOnScroll delay={100}>
        <FeeFreeSection />
      </RevealOnScroll>
      <RevealOnScroll delay={120}>
        <CustomProfileSection />
      </RevealOnScroll>
      <RevealOnScroll delay={140}>
        <GetStartedSection />
      </RevealOnScroll>
      <RevealOnScroll delay={160}>
        <FaqSection />
      </RevealOnScroll>
      <RevealOnScroll delay={180}>
        <SiteFooter />
      </RevealOnScroll>
      <ScrollToTop />
    </>
  )
}
