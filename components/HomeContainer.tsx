import { FeaturedGamesCards } from "./FeaturedGamesCards"
import { HeroBanner } from "./HeroBanner"
import { TabSections } from "./TabSections"
import { TelegramBanner } from "./TelegramBanner"
import { DisclaimerNotice } from "./DisclaimerNotice"
import { InfoSections } from "./InfoSections"
import { ScrollToTop } from "./ScrollToTop"
import { useIsMobile } from "../hooks/use-mobile"

export const HomeContainer = () => {
  return (
    <div>
      {/* Hero Section */}
      <HeroBanner />

      {/* Featured Games Cards */}
      <div className="w-full px-4 sm:px-6 lg:px-8 py-8">
        <div className="max-w-7xl mx-auto">
          <FeaturedGamesCards />
        </div>
        {/* TelegramBanner only shown on desktop */}
        <div className="hidden sm:block">
          <TelegramBanner />
        </div>
      </div>

      {/* Tab Sections - Only for desktop, mobile is handled in FeaturedGamesCards */}
      <TabSections />
      
      {/* Disclaimer Notice */}
      <div className="w-full px-4 sm:px-6 lg:px-8 py-8">
        <DisclaimerNotice />
      </div>
      
      {/* Info Sections - Full Width */}
      <InfoSections />
      
      {/* Scroll to Top Button */}
      <ScrollToTop />
    </div>
  )
}