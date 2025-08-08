"use client"

import React, { useState } from "react"
import { useIsMobile } from "../hooks/use-mobile"
import { GamesList } from "./GamesList"
import { gamesData } from "../data/gamesData"

export const TabSections = () => {
  const isMobile = useIsMobile()
  const [activeTab, setActiveTab] = useState<"all" | "upcoming">("all")
  
  // Filter games based on active tab
  const filteredGames = gamesData.filter(game => 
    activeTab === "all" 
      ? game.category === "all" 
      : game.category === "upcoming"
  )

  // If on mobile, we'll handle the tab switching in FeaturedGamesCards
  if (isMobile) {
    return (
      <div className="mt-4">
        <GamesList games={filteredGames} />
      </div>
    )
  }
  
  return (
    <div className="w-full">
      <div className="grid grid-cols-2 gap-0 mb-0 w-full">
        <div 
          className={`text-white text-center py-3 font-bold text-lg border-r border-white cursor-pointer transition-colors ${activeTab === "all" ? "bg-[#3b38b3]" : "bg-[#4f46e5]"}`}
          onClick={() => setActiveTab("all")}
        >
          ALL YONO APPS
        </div>
        <div 
          className={`text-white text-center py-3 font-bold text-lg cursor-pointer transition-colors ${activeTab === "upcoming" ? "bg-[#3b38b3]" : "bg-[#4f46e5]"}`}
          onClick={() => setActiveTab("upcoming")}
        >
          UPCOMING APPS
        </div>
      </div>
      <div className="mt-4 w-full">
        <GamesList games={filteredGames} />
      </div>
    </div>
  )
}