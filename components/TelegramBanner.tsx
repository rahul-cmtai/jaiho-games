"use client"

import { useIsMobile } from "../hooks/use-mobile"

export const TelegramBanner = () => {
  const isMobile = useIsMobile()
  
  return (
    <div className="w-full bg-white py-4 border-t-2 border-b-2 border-[#00a7e1] shadow-sm mb-6">
      <div className="flex items-center justify-between px-4 w-full">
        <div className="flex items-center space-x-2">
          <div className="w-6 h-6 bg-[#00a7e1] rounded-full flex items-center justify-center">
            <svg xmlns="http://www.w3.org/2000/svg" className="h-4 w-4 text-white" viewBox="0 0 24 24" fill="currentColor">
              <path d="M12 0C5.373 0 0 5.373 0 12s5.373 12 12 12 12-5.373 12-12S18.627 0 12 0zm5.894 8.221l-1.97 9.28c-.145.658-.537.818-1.084.508l-3-2.21-1.446 1.394c-.14.18-.357.275-.6.275h-.002l.205-2.95 5.37-4.87c.234-.21-.054-.329-.36-.122l-6.64 4.17-2.863-.92c-.617-.2-.628-.617.136-.913l11.18-4.305c.503-.176.941.114.786.865z" />
            </svg>
          </div>
          <span className="text-[#00a7e1] font-medium">Join Our Telegram Channel</span>
        </div>
        <button className="bg-[#4abe5c] hover:bg-[#3da04e] text-white px-4 py-1 rounded-full font-medium transition-colors duration-200 flex items-center">
          <span className="text-white mr-1">✓</span>
          <span>Join Now</span>
        </button>
      </div>
    </div>
  )
}