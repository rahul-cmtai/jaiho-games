"use client"

import Image from "next/image"
import { useIsMobile } from "../hooks/use-mobile"
import Link from "next/link"

interface Game {
  id: number
  name: string
  size: string
  category: string
  bonus: string
  minWithdraw: string
  image: string
  description: string
  minWithdrawText: string
}

interface GamesListProps {
  games: Game[]
}

export const GamesList = ({ games }: GamesListProps) => {
  const isMobile = useIsMobile()
  
  return (
    <div className="w-full">
      {games.map((game, index) => (
        <div
          key={game.id}
          className={`flex items-center justify-between ${isMobile ? 'p-2 mb-2 bg-white rounded-md shadow-sm' : 'p-4 border-b border-gray-300'} hover:bg-gray-100 transition-all duration-200 relative overflow-hidden group hover:-translate-y-1 hover:shadow-lg`}
        >
          {/* 3D hover effect overlay */}
          <div className="absolute inset-0 bg-gradient-to-r from-transparent via-white/5 to-transparent opacity-0 group-hover:opacity-100 transform translate-x-full group-hover:translate-x-0 transition-all duration-700"></div>
          
          <div className="flex items-center space-x-2 sm:space-x-4 z-10 flex-1">
            {/* Game Number */}
            <div className={`text-gray-600 font-bold ${isMobile ? 'text-sm w-4' : 'text-lg w-8'}`}>{index + 1}.</div>

            {/* Game Logo */}
            <div className={`${isMobile ? 'w-10 h-10' : 'w-20 h-20'} overflow-hidden flex-shrink-0 flex items-center justify-center group-hover:shadow-md transition-all duration-200`}>
              <Image 
                src={game.image} 
                alt={game.name}
                width={isMobile ? 40 : 80}
                height={isMobile ? 40 : 80}
                className="object-contain w-full h-full"
                priority
                unoptimized
              />
            </div>

            {/* Game Info */}
            <div className="flex-1 min-w-0">
              {isMobile ? (
                <>
                  <h3 className="text-sm font-bold text-gray-900 mb-0.5 group-hover:text-blue-800 transition-colors duration-200">{game.name}</h3>
                  <div className="flex flex-col">
                    <div className="flex items-center text-red-600 text-[10px]">
                      <span className="mr-1 text-xs">🎁</span>
                      <span className="font-medium">Bnous Upto {game.bonus}</span>
                    </div>
                    <div className="flex items-center text-green-600 text-[10px]">
                      <span className="mr-1 text-xs">💰</span>
                      <span className="font-medium">Min. Withdraw {game.minWithdraw}</span>
                    </div>
                  </div>
                </>
              ) : (
                <>
                  <h3 className="text-xl font-bold text-gray-900 mb-2 group-hover:text-blue-800 transition-colors duration-200">{game.name}</h3>
                  <div className="space-y-1">
                    <div className="flex items-center text-red-600 text-sm">
                      <span className="mr-2 group-hover:scale-110 transition-transform duration-200">🎁</span>
                      <span className="font-medium">Bnous Upto {game.bonus}</span>
                    </div>
                    <div className="flex items-center text-green-600 text-sm">
                      <span className="mr-2 group-hover:scale-110 transition-transform duration-200">💰</span>
                      <span className="font-medium">Min. Withdraw {game.minWithdraw}</span>
                    </div>
                  </div>
                </>
              )}
            </div>
          </div>

          {/* Download Button */}
          <div className="flex-shrink-0 ml-2 sm:ml-4 z-10">
            <Link href={`/apps/${game.id}`}>
              <button className={`bg-[#00a7e1] text-white ${isMobile ? 'px-3 py-1 text-xs rounded-full' : 'px-6 py-2 text-sm rounded-md'} font-medium transition-all duration-200 flex items-center ${isMobile ? 'space-x-1' : 'space-x-2'} shadow-md group-hover:bg-[#0088c7] group-hover:shadow-lg group-hover:scale-105`}>
                {!isMobile && <span className="group-hover:animate-bounce">⬇️</span>}
                <span>Download</span>
              </button>
            </Link>
          </div>
        </div>
      ))}
    </div>
  )
}