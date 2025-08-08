"use client"

import Link from "next/link"

export const Footer = () => {
  return (
    <footer className="bg-white py-6 border-t">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Copyright Section */}
        <div className="text-center text-sm text-gray-600">
          <p>Copyright © 2025 Only Jaiho Games | Powered by <a href="https://cmtai.com" className="text-blue-600 hover:underline">CMT AI</a></p>
        </div>
        
        {/* Scroll to top button */}
        <div className="flex justify-end mt-4">
          <button 
            onClick={() => window.scrollTo({ top: 0, behavior: 'smooth' })}
            className="bg-blue-600 text-white p-2 rounded-sm hover:bg-blue-700 focus:outline-none"
            aria-label="Scroll to top"
          >
            <svg xmlns="http://www.w3.org/2000/svg" className="h-5 w-5" fill="none" viewBox="0 0 24 24" stroke="currentColor">
              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M5 15l7-7 7 7" />
            </svg>
          </button>
        </div>
      </div>
    </footer>
  )
}