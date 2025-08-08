"use client"

import { useEffect, useState } from 'react'
import { useParams, useRouter } from 'next/navigation'
import { gamesData, Game } from '../../../data/gamesData'
import { Header } from '../../../components/header'
import { DisclaimerNotice } from '../../../components/DisclaimerNotice'
import { ScrollToTop } from '../../../components/ScrollToTop'
import { useIsMobile } from '../../../hooks/use-mobile'
import Image from 'next/image'
import Link from 'next/link'

export default function AppDetailsPage() {
  const params = useParams()
  const router = useRouter()
  const isMobile = useIsMobile()
  const [game, setGame] = useState<Game | null>(null)
  const [loading, setLoading] = useState(true)
  const [relatedGames, setRelatedGames] = useState<Game[]>([])

  useEffect(() => {
    if (params.id) {
      const gameId = parseInt(params.id as string, 10)
      const foundGame = gamesData.find(g => g.id === gameId)
      
      if (foundGame) {
        setGame(foundGame)
        
        // Get 4 related games (excluding current game)
        const related = gamesData
          .filter(g => g.id !== gameId)
          .slice(0, 4)
        
        setRelatedGames(related)
      } else {
        // Redirect to 404 if game not found
        router.push('/404')
      }
      setLoading(false)
    }
  }, [params.id, router])

  if (loading) {
    return (
      <div className="min-h-screen bg-gray-50 flex items-center justify-center">
        <div className="animate-spin rounded-full h-12 w-12 border-t-2 border-b-2 border-blue-500"></div>
      </div>
    )
  }

  if (!game) {
    return null
  }

  const handleDownload = () => {
    if (game.downloadLink) {
      window.open(game.downloadLink, '_blank')
    }
  }

  return (
    <div className="min-h-screen bg-gray-50">
      {/* Header */}
      <Header />

      {/* Page Title Banner */}
      <div className="bg-white border-b border-gray-200 py-4">
        <div className="max-w-7xl mx-auto px-4">
          <h1 className="text-2xl md:text-3xl font-bold text-gray-900 uppercase">
            {game.name} APK DOWNLOAD – UPTO {game.bonus} BONUS FREE | NEW APP LINK
          </h1>
        </div>
      </div>

      {/* App Details */}
      <div className="max-w-7xl mx-auto px-4 py-8">
        <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
          {/* Left Column - App Image */}
          <div className="md:col-span-1">
            <div className="bg-green-700 rounded-full w-48 h-48 mx-auto flex items-center justify-center overflow-hidden border-4 border-green-600">
              <div className="text-yellow-400 font-bold text-4xl text-center">
                {game.name.toUpperCase().split(" ")[0]}
                <br />
                {game.name.toUpperCase().split(" ")[1] || ""}
              </div>
            </div>
          </div>

          {/* Right Column - App Details */}
          <div className="md:col-span-2">
            <h2 className="text-4xl font-bold mb-4">{game.name}</h2>
            
            <div className="text-blue-600 text-2xl font-bold mb-6">
              <Link href={`#`}>{game.name} Apk</Link>
            </div>

            <div className="grid grid-cols-2 md:grid-cols-4 gap-4 mb-8">
              {/* Rating */}
              <div className="border border-gray-300 p-4 flex flex-col items-center justify-center">
                <div className="text-3xl mb-2">⭐</div>
                <div className="text-2xl font-bold">4.1</div>
                <div className="text-gray-500">Rating</div>
              </div>
              
              {/* Size */}
              <div className="border border-gray-300 p-4 flex flex-col items-center justify-center">
                <div className="text-3xl mb-2">⬇️</div>
                <div className="text-lg font-medium">{game.size}</div>
                <div className="text-gray-500">MB</div>
              </div>
              
              {/* Price */}
              <div className="border border-gray-300 p-4 flex flex-col items-center justify-center">
                <div className="text-3xl mb-2">🛒</div>
                <div className="text-lg font-medium">Free</div>
              </div>
              
              {/* Bonus */}
              <div className="border border-gray-300 p-4 flex flex-col items-center justify-center">
                <div className="text-2xl font-bold">{game.bonus}</div>
                <div className="text-gray-500">Upto Bonus</div>
              </div>
            </div>

            {/* Download Button */}
            <div className="text-center mb-6">
              <button
                onClick={handleDownload}
                className="bg-[#e91e63] hover:bg-[#d81b60] text-white px-8 py-3 rounded-md font-bold text-lg uppercase transition-all duration-200 w-full md:w-auto"
              >
                DOWNLOAD {game.name} APP
              </button>
            </div>

            {/* Telegram Button */}
            <div className="text-center">
              <Link href="https://t.me/onlyjaihogames" target="_blank" rel="noopener noreferrer">
                <button className="bg-[#4abe5c] hover:bg-[#3da04e] text-white px-8 py-3 rounded-full font-bold transition-all duration-200 w-full md:w-auto flex items-center justify-center">
                  <span className="mr-2">📱</span>
                  Join Our TeleGram Channel
                </button>
              </Link>
            </div>
          </div>
        </div>

        {/* Related Apps Section */}
        <div className="mt-12">
          <div className="bg-[#00a7e1] text-white py-3 px-4 rounded-t-md">
            <h2 className="text-xl font-bold flex items-center">
              <span className="mr-2">✅</span>
              Other Related Apps
            </h2>
          </div>

          <div className="border border-gray-200 rounded-b-md">
            {relatedGames.map((relatedGame, index) => (
              <div key={relatedGame.id} className="border-b border-gray-200 last:border-b-0">
                <div className="flex items-center justify-between p-4">
                  <div className="flex items-center">
                    <div className="mr-4 text-gray-500 font-bold">{index + 1}.</div>
                    <div className="bg-green-700 rounded-full w-16 h-16 flex items-center justify-center overflow-hidden mr-4">
                      <div className="text-yellow-400 font-bold text-xs text-center">
                        {relatedGame.name.toUpperCase().split(" ")[0]}
                        <br />
                        {relatedGame.name.toUpperCase().split(" ")[1] || ""}
                      </div>
                    </div>
                    <div>
                      <h3 className="font-bold text-lg">{relatedGame.name}</h3>
                      <div className="text-red-600 text-sm">
                        <span className="mr-1">🎁</span>
                        <span>Bnous Upto {relatedGame.bonus}</span>
                      </div>
                      <div className="text-green-600 text-sm">
                        <span className="mr-1">💰</span>
                        <span>Min. Withdraw {relatedGame.minWithdraw}</span>
                      </div>
                    </div>
                  </div>
                  <Link href={`/apps/${relatedGame.id}`}>
                    <button className="bg-gradient-to-r from-blue-500 to-blue-600 text-white px-4 py-2 rounded-md font-medium">
                      Download
                    </button>
                  </Link>
                </div>
              </div>
            ))}
          </div>
        </div>

        {/* Disclaimer */}
        <div className="mt-8 p-6 bg-white rounded-md shadow-sm border border-gray-200">
          <DisclaimerNotice />
        </div>
      </div>

      {/* Scroll to Top Button */}
      <ScrollToTop />
    </div>
  )
}