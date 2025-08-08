"use client"

import type React from "react"

import { useState } from "react"
import { Search, Menu, X, Home } from "lucide-react"
import { Button } from "@/components/ui/button"
import { Input } from "@/components/ui/input"
import Link from "next/link"

export default function NotFound() {
  const [searchQuery, setSearchQuery] = useState("")
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false)

  const handleSearch = (e: React.FormEvent) => {
    e.preventDefault()
    // Handle search functionality
    console.log("Searching for:", searchQuery)
  }

  return (
    <div className="min-h-screen bg-gray-50">
      {/* Header */}
      <header className="bg-white shadow-sm">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="flex justify-between items-center h-16">
            {/* Logo */}
            <Link href="/" className="flex items-center space-x-3">
              <div className="w-12 h-12 bg-green-600 rounded-full flex items-center justify-center relative">
                <div className="text-white font-bold text-xs text-center leading-tight">
                  <div>ONLY</div>
                  <div>JAIHO</div>
                  <div className="text-[8px]">GAMES</div>
                </div>
              </div>
              <span className="text-xl font-semibold text-gray-900">Only Jaiho Games</span>
            </Link>

            {/* Desktop Navigation */}
            <nav className="hidden md:flex space-x-8">
              <Link href="/" className="text-blue-600 hover:text-blue-800 font-medium">
                Home
              </Link>
              <Link href="/about" className="text-gray-700 hover:text-blue-600 font-medium">
                About
              </Link>
              <Link href="/contact" className="text-gray-700 hover:text-blue-600 font-medium">
                Contact Us
              </Link>
              <Link href="/disclaimer" className="text-gray-700 hover:text-blue-600 font-medium">
                Disclaimer
              </Link>
              <Link href="/privacy" className="text-gray-700 hover:text-blue-600 font-medium">
                Privacy & Policies
              </Link>
            </nav>

            {/* Mobile menu button */}
            <div className="md:hidden">
              <Button variant="ghost" size="sm" onClick={() => setMobileMenuOpen(!mobileMenuOpen)}>
                {mobileMenuOpen ? <X className="h-6 w-6" /> : <Menu className="h-6 w-6" />}
              </Button>
            </div>
          </div>

          {/* Mobile Navigation */}
          {mobileMenuOpen && (
            <div className="md:hidden border-t border-gray-200 py-4">
              <div className="flex flex-col space-y-4">
                <Link href="/" className="text-blue-600 font-medium">
                  Home
                </Link>
                <Link href="/about" className="text-gray-700 font-medium">
                  About
                </Link>
                <Link href="/contact" className="text-gray-700 font-medium">
                  Contact Us
                </Link>
                <Link href="/disclaimer" className="text-gray-700 font-medium">
                  Disclaimer
                </Link>
                <Link href="/privacy" className="text-gray-700 font-medium">
                  Privacy & Policies
                </Link>
              </div>
            </div>
          )}
        </div>
      </header>

      {/* 404 Content */}
      <main className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 py-16">
        <div className="text-center">
          <div className="mb-8">
            <div className="w-24 h-24 bg-gray-200 rounded-full mx-auto mb-6 flex items-center justify-center">
              <span className="text-4xl text-gray-400">404</span>
            </div>
            <h1 className="text-3xl font-bold text-gray-900 mb-4">This page doesn't seem to exist.</h1>
            <p className="text-lg text-gray-600 mb-8">
              It looks like the link pointing here was faulty. Maybe try searching?
            </p>
          </div>

          {/* Search Form */}
          <form onSubmit={handleSearch} className="max-w-md mx-auto mb-8">
            <div className="relative">
              <Input
                type="text"
                placeholder="Search..."
                value={searchQuery}
                onChange={(e) => setSearchQuery(e.target.value)}
                className="w-full pl-4 pr-12 py-3 border border-gray-300 rounded-lg focus:ring-2 focus:ring-blue-500 focus:border-transparent text-lg"
              />
              <Button
                type="submit"
                className="absolute right-2 top-1/2 transform -translate-y-1/2 bg-gray-100 hover:bg-gray-200 text-gray-600 p-2 rounded"
                size="sm"
              >
                <Search className="h-4 w-4" />
              </Button>
            </div>
          </form>

          {/* Back to Home Button */}
          <Link href="/">
            <Button className="bg-green-600 hover:bg-green-700 text-white px-8 py-3 rounded-lg font-medium transition-colors flex items-center space-x-2 mx-auto">
              <Home className="h-4 w-4" />
              <span>Back to Home</span>
            </Button>
          </Link>
        </div>
      </main>

      {/* Footer */}
      <footer className="bg-white border-t border-gray-200 mt-auto">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-8">
          <div className="text-center">
            <p className="text-gray-600 text-sm">
              Copyright © 2025 Only Jaiho Games | Powered by{" "}
              <Link href="#" className="text-blue-600 hover:text-blue-800">
                Astra WordPress Theme
              </Link>
            </p>
          </div>
        </div>
      </footer>
    </div>
  )
}
