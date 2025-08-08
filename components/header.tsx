"use client"

import Link from "next/link"
import Image from "next/image"
import { useIsMobile } from "../hooks/use-mobile"

export const Header = () => {
  const isMobile = useIsMobile()

  return (
    <header className="bg-white py-4 flex justify-between items-center border-b max-w-7xl mx-auto px-8">
      <div className="flex items-center pl-4">
        <Link href="/" className="flex items-center">
          <Image 
            src="/logo_game.png" 
            alt="Only Jaiho Games" 
            width={isMobile ? 40 : 90} 
            height={isMobile ? 40 : 90} 
            className="mr-2"
          />
          <h1 className={`${isMobile ? "text-lg" : "text-2xl"} font-bold text-gray-800`}>Only Jaiho Games</h1>
        </Link>
      </div>
      
      {isMobile ? (
        <button className="bg-[#00a7e1] text-white px-4 py-1.5 rounded-md font-medium flex items-center">
          <span className="mr-2">Telegram</span>
          <svg xmlns="http://www.w3.org/2000/svg" width="16" height="16" fill="currentColor" viewBox="0 0 16 16">
            <path d="M16 8A8 8 0 1 1 0 8a8 8 0 0 1 16 0zM8.287 5.906c-.778.324-2.334.994-4.666 2.01-.378.15-.577.298-.595.442-.03.243.275.339.69.47l.175.055c.408.133.958.288 1.243.294.26.006.549-.1.868-.32 2.179-1.471 3.304-2.214 3.374-2.23.05-.012.12-.026.166.016.047.041.042.12.037.141-.03.129-1.227 1.241-1.846 1.817-.193.18-.33.307-.358.336a8.154 8.154 0 0 1-.188.186c-.38.366-.664.64.015 1.088.327.216.589.393.85.571.284.194.568.387.936.629.093.06.183.125.27.187.331.236.63.448.997.414.214-.02.435-.22.547-.82.265-1.417.786-4.486.906-5.751a1.426 1.426 0 0 0-.013-.315.337.337 0 0 0-.114-.217.526.526 0 0 0-.31-.093c-.3.005-.763.166-2.984 1.09z"/>
          </svg>
        </button>
      ) : (
        <nav>
          <ul className="flex space-x-8 pr-4">
            <li>
              <Link href="/" className="text-blue-600 hover:text-blue-800 font-medium">
                Home
              </Link>
            </li>
            <li>
              <Link href="/about" className="text-gray-700 hover:text-gray-900 font-medium">
                About
              </Link>
            </li>
            <li>
              <Link href="/contact" className="text-gray-700 hover:text-gray-900 font-medium">
                Contact Us
              </Link>
            </li>
            <li>
              <Link href="/disclaimer" className="text-gray-700 hover:text-gray-900 font-medium">
                Disclaimer
              </Link>
            </li>
            <li>
              <Link href="/privacy" className="text-gray-700 hover:text-gray-900 font-medium">
                Privacy & Polices
              </Link>
            </li>
          </ul>
        </nav>
      )}
      
      {isMobile && (
        <button className="text-gray-600">
          <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" fill="currentColor" viewBox="0 0 16 16">
            <path fillRule="evenodd" d="M2.5 12a.5.5 0 0 1 .5-.5h10a.5.5 0 0 1 0 1H3a.5.5 0 0 1-.5-.5zm0-4a.5.5 0 0 1 .5-.5h10a.5.5 0 0 1 0 1H3a.5.5 0 0 1-.5-.5zm0-4a.5.5 0 0 1 .5-.5h10a.5.5 0 0 1 0 1H3a.5.5 0 0 1-.5-.5z"/>
          </svg>
        </button>
      )}
    </header>
  )
}