"use client"

import { useState } from "react"
import { Menu, X } from "lucide-react"
import { Button } from "@/components/ui/button"
import Link from "next/link"

export default function AboutPage() {
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false)

  return (
    <div>

      {/* About Content */}
      <main className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 py-12">
        <div className="bg-white rounded-lg shadow-sm p-8">
          <h1 className="text-3xl font-bold text-gray-900 mb-8">About Only Jaiho Games</h1>

          <div className="prose prose-lg max-w-none">
            <section className="mb-8">
              <h2 className="text-2xl font-semibold text-gray-800 mb-4">Welcome to Only Jaiho Games</h2>
              <p className="text-gray-700 mb-4">
                OnlyJaihoGames.com is your ultimate destination for discovering the most trusted and exciting gaming
                applications. We are dedicated to introducing the best earning apps and rummy games to players across
                India.
              </p>
              <p className="text-gray-700 mb-4">
                Our platform serves as a comprehensive guide for gaming enthusiasts who are looking for legitimate,
                safe, and rewarding gaming experiences. We carefully curate and review each application to ensure our
                users have access to only the highest quality games.
              </p>
            </section>

            <section className="mb-8">
              <h2 className="text-2xl font-semibold text-gray-800 mb-4">Our Mission</h2>
              <p className="text-gray-700 mb-4">
                Our mission is to bridge the gap between gaming enthusiasts and premium gaming applications. We strive
                to provide accurate information, honest reviews, and reliable download links for the best earning apps
                in the market.
              </p>
              <ul className="list-disc list-inside text-gray-700 space-y-2">
                <li>Promote safe and secure gaming experiences</li>
                <li>Provide comprehensive information about gaming apps</li>
                <li>Support responsible gaming practices</li>
                <li>Connect users with legitimate earning opportunities</li>
              </ul>
            </section>

            <section className="mb-8">
              <h2 className="text-2xl font-semibold text-gray-800 mb-4">What We Offer</h2>
              <div className="grid md:grid-cols-2 gap-6">
                <div className="bg-green-50 p-6 rounded-lg">
                  <h3 className="text-lg font-semibold text-green-800 mb-3">Curated Game Collection</h3>
                  <p className="text-gray-700">
                    We feature only the most trusted and popular gaming applications, including rummy games, slots, and
                    other skill-based games.
                  </p>
                </div>
                <div className="bg-blue-50 p-6 rounded-lg">
                  <h3 className="text-lg font-semibold text-blue-800 mb-3">Detailed Information</h3>
                  <p className="text-gray-700">
                    Each game listing includes comprehensive details about bonuses, withdrawal limits, and special
                    features to help you make informed decisions.
                  </p>
                </div>
                <div className="bg-orange-50 p-6 rounded-lg">
                  <h3 className="text-lg font-semibold text-orange-800 mb-3">Safety First</h3>
                  <p className="text-gray-700">
                    We prioritize user safety and only recommend applications that maintain high security standards and
                    fair gaming practices.
                  </p>
                </div>
                <div className="bg-purple-50 p-6 rounded-lg">
                  <h3 className="text-lg font-semibold text-purple-800 mb-3">Regular Updates</h3>
                  <p className="text-gray-700">
                    Our team continuously monitors and updates our game listings to ensure you have access to the latest
                    and most relevant gaming options.
                  </p>
                </div>
              </div>
            </section>

            <section className="mb-8">
              <h2 className="text-2xl font-semibold text-gray-800 mb-4">Our Commitment</h2>
              <p className="text-gray-700 mb-4">
                At Only Jaiho Games, we are committed to promoting responsible gaming. We strongly advocate for:
              </p>
              <ul className="list-disc list-inside text-gray-700 space-y-2">
                <li>Gaming only for users above 18 years of age</li>
                <li>Playing within your financial means</li>
                <li>Understanding the risks associated with real money gaming</li>
                <li>Seeking help if gaming becomes problematic</li>
              </ul>
            </section>

            <section className="mb-8">
              <h2 className="text-2xl font-semibold text-gray-800 mb-4">Contact Information</h2>
              <p className="text-gray-700 mb-4">
                We value your feedback and are always here to help. If you have any questions, suggestions, or concerns,
                please don't hesitate to reach out to us through our contact page.
              </p>
              <p className="text-gray-700">Thank you for choosing Only Jaiho Games as your trusted gaming companion!</p>
            </section>
          </div>
        </div>
      </main>
    </div>
  )
}
