"use client"

import React, { useState } from "react"
import { useIsMobile } from "../hooks/use-mobile"
import { GamesList } from "./GamesList"
import { gamesData } from "../data/gamesData"
import Link from "next/link"

export const FeaturedGamesCards = () => {
  const isMobile = useIsMobile()
  const [activeCard, setActiveCard] = useState<number | null>(null);
  const [activeTab, setActiveTab] = useState<"all" | "upcoming">("all");

  // Filter games based on active tab for mobile view
  const filteredGames = gamesData.filter(game => 
    activeTab === "all" 
      ? game.category === "all" 
      : game.category === "upcoming"
  )

  // Function to handle touch events for mobile hover effect
  const handleTouchStart = (index: number) => {
    setActiveCard(index);
  };

  const handleTouchEnd = () => {
    setTimeout(() => {
      setActiveCard(null);
    }, 300);
  };

  // Helper function to determine card style based on active state
  const getCardStyle = (index: number) => {
    if (isMobile && activeCard === index) {
      return "transform -translate-y-2 scale-105 shadow-lg";
    }
    return "";
  };

  return (
    <div className={`flex flex-wrap justify-center items-center ${isMobile ? 'mb-4 px-2' : 'mb-8 px-4'} max-w-4xl mx-auto py-4 relative`}>
      <div className={`grid grid-cols-3 ${isMobile ? 'gap-1' : 'gap-6'}`}>
        {/* 3D Card Container - Left (Smaller) */}
        <div 
          className={`relative ${isMobile ? 'w-full h-52' : 'w-56 h-64'} transition-transform duration-300 hover:-translate-y-2 hover:scale-105 ${getCardStyle(0)}`}
          onTouchStart={() => handleTouchStart(0)}
          onTouchEnd={handleTouchEnd}
        >
          {/* Gray 3D shadow effect */}
          <div className="absolute -right-2 -top-2 w-full h-full bg-gray-300 rounded-lg transform rotate-3"></div>
          
          {/* 3F Games Card */}
          <div className="bg-[#b2b2b2] rounded-lg overflow-hidden text-center w-full h-full shadow-md relative z-10">
            <div className="relative">
              <div className={`w-full ${isMobile ? 'h-32' : 'h-44'} flex items-center justify-center`}>
                <div className={`${isMobile ? 'w-20 h-20' : 'w-24 h-24'} bg-[#1b6b32] rounded-full flex items-center justify-center`}>
                  <div className="text-white font-bold text-center leading-tight">
                    <div className={`${isMobile ? 'text-xl' : 'text-2xl'} text-[#f8ff00]`}>3F</div>
                    <div className={`${isMobile ? 'text-sm' : 'text-base'}`}>GAMES</div>
                  </div>
                </div>
              </div>
              <div className="absolute top-2 right-2 bg-white text-black text-xs font-semibold rounded-full px-2 py-1">
                NO2
              </div>
            </div>
            <div className={`${isMobile ? 'p-3' : 'p-4'}`}>
              <p className="text-white font-medium text-base">3F Games</p>
              <Link href="/apps/2">
                <button className={`bg-[#4abe5c] hover:bg-[#3da04e] active:bg-[#3da04e] text-white ${isMobile ? 'text-xs px-2 py-0.5' : 'text-sm px-4 py-1'} rounded-full font-medium mt-2 w-full transition-colors duration-200`}>
                  Download
                </button>
              </Link>
            </div>
          </div>
        </div>

        {/* 3D Card Container - Middle (Larger) */}
        <div 
          className={`relative ${isMobile ? 'w-full h-56' : 'w-60 h-68'} transition-transform duration-300 hover:-translate-y-2 hover:scale-105 ${getCardStyle(1)}`}
          onTouchStart={() => handleTouchStart(1)}
          onTouchEnd={handleTouchEnd}
        >
          {/* Gray 3D shadow effect */}
          <div className="absolute -right-2 -top-2 w-full h-full bg-gray-300 rounded-lg transform rotate-3"></div>
          
          {/* Jaiho Rummy Card */}
          <div className="bg-[#ff8a2b] rounded-lg overflow-hidden text-center w-full h-full shadow-md relative z-10">
            <div className="relative">
              <div className={`w-full ${isMobile ? 'h-36' : 'h-48'} flex items-center justify-center`}>
                <div className={`${isMobile ? 'w-24 h-24' : 'w-32 h-32'} bg-[#1b6b32] rounded-full flex items-center justify-center`}>
                  <div className="text-white font-bold text-center leading-tight">
                    <div className={`${isMobile ? 'text-xl' : 'text-2xl'}`}>JAIHO</div>
                    <div className={`${isMobile ? 'text-sm' : 'text-base'}`}>RUMMY</div>
                  </div>
                </div>
              </div>
              <div className="absolute top-2 right-2 bg-white text-black text-xs font-semibold rounded-full px-2 py-1">
                NO1
              </div>
            </div>
            <div className={`${isMobile ? 'p-1.5' : 'p-2'}`}>
              <p className={`text-white font-medium ${isMobile ? 'text-base' : 'text-lg'}`}>Jaiho Rummy</p>
              {/* <div className="bg-[#1b6b32] text-white text-xs rounded-md px-2 py-0.5 mb-2 inline-block">
                100% Trusted
              </div> */}
              <Link href="/apps/3">
                <button className={`bg-[#4abe5c] hover:bg-[#3da04e] active:bg-[#3da04e] text-white ${isMobile ? 'text-xs px-2 py-0.5' : 'text-sm px-4 py-1.5'} rounded-full font-medium mt-1 w-full transition-colors duration-200`}>
                  Download
                </button>
              </Link>
            </div>
          </div>
        </div>

        {/* 3D Card Container - Right (Smaller) */}
        <div 
          className={`relative ${isMobile ? 'w-full h-52' : 'w-56 h-64'} transition-transform duration-300 hover:-translate-y-2 hover:scale-105 ${getCardStyle(2)}`}
          onTouchStart={() => handleTouchStart(2)}
          onTouchEnd={handleTouchEnd}
        >
          {/* Gray 3D shadow effect */}
          <div className="absolute -right-2 -top-2 w-full h-full bg-gray-300 rounded-lg transform rotate-3"></div>
          
          {/* Slots Winner Card */}
          <div className="bg-[#d28c33] rounded-lg overflow-hidden text-center w-full h-full shadow-md relative z-10">
            <div className="relative">
              <div className={`w-full ${isMobile ? 'h-32' : 'h-44'} flex items-center justify-center`}>
                <div className={`${isMobile ? 'w-20 h-20' : 'w-24 h-24'} bg-[#1b6b32] rounded-full flex items-center justify-center`}>
                  <div className="text-white font-bold text-center leading-tight">
                    <div className={`${isMobile ? 'text-xl' : 'text-2xl'}`}>SLOTS</div>
                    <div className={`${isMobile ? 'text-sm' : 'text-base'}`}>WINNER</div>
                  </div>
                </div>
              </div>
              <div className="absolute top-2 right-2 bg-white text-black text-xs font-semibold rounded-full px-2 py-1">
                NO3
              </div>
            </div>
            <div className={`${isMobile ? 'p-1' : 'p-2'}`}>
              <p className="text-white font-medium">Slots Winner</p>
              <Link href="/apps/4">
                <button className={`bg-[#4abe5c] hover:bg-[#3da04e] active:bg-[#3da04e] text-white ${isMobile ? 'text-xs px-2 py-0.5' : 'text-sm px-4 py-1'} rounded-full font-medium mt-2 w-full transition-colors duration-200`}>
                  Download
                </button>
              </Link>
            </div>
          </div>
        </div>
      </div>
      
      {isMobile && (
        <>
          {/* Telegram Banner for Mobile */}
          <div className="w-full my-4">
            <div className="bg-white py-3 border-t-2 border-b-2 border-[#00a7e1] shadow-sm w-screen relative" style={{ left: "50%", right: "50%", marginLeft: "-50vw", marginRight: "-50vw" }}>
              <div className="flex items-center justify-between px-4">
                <div className="flex items-center space-x-2">
                  <div className="w-6 h-6 bg-[#00a7e1] rounded-full flex items-center justify-center">
                    <svg xmlns="http://www.w3.org/2000/svg" className="h-3 w-3 text-white" viewBox="0 0 24 24" fill="currentColor">
                      <path d="M12 0C5.373 0 0 5.373 0 12s5.373 12 12 12 12-5.373 12-12S18.627 0 12 0zm5.894 8.221l-1.97 9.28c-.145.658-.537.818-1.084.508l-3-2.21-1.446 1.394c-.14.18-.357.275-.6.275h-.002l.205-2.95 5.37-4.87c.234-.21-.054-.329-.36-.122l-6.64 4.17-2.863-.92c-.617-.2-.628-.617.136-.913l11.18-4.305c.503-.176.941.114.786.865z" />
                    </svg>
                  </div>
                  <span className="text-black font-medium text-sm">Join Our Telegram Channel</span>
                </div>
                <button className="bg-[#4abe5c] hover:bg-[#3da04e] text-white px-3 py-1 rounded-full text-xs font-medium transition-colors duration-200 flex items-center">
                  <span className="text-white mr-1">✓</span>
                  <span>Join Now</span>
                </button>
              </div>
            </div>
          </div>

          <div className="w-full mt-2 grid grid-cols-2 gap-0">
            <button 
              className={`text-white text-sm font-medium py-3 border-r border-white transition-colors duration-200 ${activeTab === "all" ? "bg-[#3b38b3]" : "bg-[#4f46e5] active:bg-[#4338ca]"}`}
              onClick={() => setActiveTab("all")}
            >
              ALL YONO APPS
            </button>
            <button 
              className={`text-white text-sm font-medium py-3 transition-colors duration-200 ${activeTab === "upcoming" ? "bg-[#3b38b3]" : "bg-[#4f46e5] active:bg-[#4338ca]"}`}
              onClick={() => setActiveTab("upcoming")}
            >
              UPCOMING APPS
            </button>
          </div>
          <div className="w-full mt-4">
            <GamesList games={filteredGames} />
          </div>
        </>
      )}
    </div>
  )
}