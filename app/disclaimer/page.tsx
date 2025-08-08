"use client"

import { useState } from "react"
import { Menu, X, AlertTriangle } from "lucide-react"
import { Button } from "@/components/ui/button"
import Link from "next/link"

export default function DisclaimerPage() {
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false)

  return (
    <div>

      {/* Disclaimer Content */}
      <main className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 py-12">
        <div className="bg-white rounded-lg shadow-sm p-8">
          <div className="flex items-center space-x-3 mb-8">
            <AlertTriangle className="h-8 w-8 text-red-600" />
            <h1 className="text-3xl font-bold text-gray-900">Disclaimer</h1>
          </div>

          <div className="prose prose-lg max-w-none">
            <div className="bg-red-50 border-l-4 border-red-400 p-6 mb-8">
              <div className="flex items-start space-x-3">
                <AlertTriangle className="h-6 w-6 text-red-600 flex-shrink-0 mt-1" />
                <div>
                  <h2 className="text-xl font-semibold text-red-800 mb-2">Important Notice</h2>
                  <p className="text-red-700">
                    <strong>OnlyJaihoGames.com</strong> does not run, operate, or host any of the applications listed on
                    this website. We are an informational platform that provides details about various gaming
                    applications available in the market.
                  </p>
                </div>
              </div>
            </div>

            <section className="mb-8">
              <h2 className="text-2xl font-semibold text-gray-800 mb-4">Age Restriction</h2>
              <div className="bg-yellow-50 border border-yellow-200 rounded-lg p-6">
                <p className="text-gray-700 mb-4">
                  <strong>18+ Only:</strong> All gaming applications featured on this website are intended for users who
                  are 18 years of age or older. By accessing this website and downloading any applications, you confirm
                  that you are at least 18 years old.
                </p>
                <p className="text-gray-700">
                  Parents and guardians are advised to monitor their children's internet usage and prevent access to
                  real money gaming applications.
                </p>
              </div>
            </section>

            <section className="mb-8">
              <h2 className="text-2xl font-semibold text-gray-800 mb-4">Financial Risk Warning</h2>
              <div className="bg-red-50 border border-red-200 rounded-lg p-6">
                <p className="text-gray-700 mb-4">
                  <strong>Rummy and other skill-based games can be addictive and financially risky.</strong> Please
                  consider the following before playing:
                </p>
                <ul className="list-disc list-inside text-gray-700 space-y-2">
                  <li>Only play with money you can afford to lose</li>
                  <li>Set strict limits on your gaming budget and time</li>
                  <li>Never chase losses with bigger bets</li>
                  <li>Seek help if gaming becomes problematic</li>
                  <li>Remember that gaming should be for entertainment, not income</li>
                </ul>
              </div>
            </section>

            <section className="mb-8">
              <h2 className="text-2xl font-semibold text-gray-800 mb-4">Legal Restrictions</h2>
              <div className="bg-orange-50 border border-orange-200 rounded-lg p-6">
                <p className="text-gray-700 mb-4">
                  <strong>State-wise Restrictions:</strong> Rummy, being a skill-based game, is banned by the government
                  in the following states:
                </p>
                <div className="grid md:grid-cols-2 gap-4">
                  <ul className="list-disc list-inside text-gray-700 space-y-1">
                    <li>Andhra Pradesh</li>
                    <li>Sikkim</li>
                    <li>Nagaland</li>
                    <li>Assam</li>
                  </ul>
                  <ul className="list-disc list-inside text-gray-700 space-y-1">
                    <li>Arunachal Pradesh</li>
                    <li>Tamil Nadu</li>
                    <li>Odisha</li>
                    <li>Telangana</li>
                  </ul>
                </div>
                <p className="text-gray-700 mt-4">
                  <strong>Users from these states should not download or play rummy applications.</strong>
                  It is your responsibility to ensure compliance with local laws and regulations.
                </p>
              </div>
            </section>

            <section className="mb-8">
              <h2 className="text-2xl font-semibold text-gray-800 mb-4">Third-Party Applications</h2>
              <p className="text-gray-700 mb-4">
                All applications listed on OnlyJaihoGames.com are developed and operated by third-party companies. We do
                not:
              </p>
              <ul className="list-disc list-inside text-gray-700 space-y-2 mb-4">
                <li>Host any APK files on our servers</li>
                <li>Control the content or functionality of these applications</li>
                <li>Process any payments or transactions</li>
                <li>Provide customer support for the applications</li>
                <li>Guarantee the availability or performance of any application</li>
              </ul>
              <p className="text-gray-700">
                All download links redirect to official sources or third-party platforms. Users download and use these
                applications at their own risk.
              </p>
            </section>

            <section className="mb-8">
              <h2 className="text-2xl font-semibold text-gray-800 mb-4">No Liability</h2>
              <p className="text-gray-700 mb-4">OnlyJaihoGames.com and its operators shall not be held liable for:</p>
              <ul className="list-disc list-inside text-gray-700 space-y-2">
                <li>Any financial losses incurred while using the featured applications</li>
                <li>Technical issues, bugs, or malfunctions in third-party applications</li>
                <li>Disputes between users and application operators</li>
                <li>Changes in application terms, conditions, or availability</li>
                <li>Any legal consequences arising from the use of featured applications</li>
              </ul>
            </section>

            <section className="mb-8">
              <h2 className="text-2xl font-semibold text-gray-800 mb-4">Responsible Gaming</h2>
              <div className="bg-green-50 border border-green-200 rounded-lg p-6">
                <p className="text-gray-700 mb-4">We strongly promote responsible gaming practices:</p>
                <ul className="list-disc list-inside text-gray-700 space-y-2">
                  <li>Play for entertainment, not as a source of income</li>
                  <li>Set time and money limits before you start playing</li>
                  <li>Take regular breaks during gaming sessions</li>
                  <li>Never play under the influence of alcohol or drugs</li>
                  <li>Seek professional help if you develop gambling problems</li>
                </ul>
                <p className="text-gray-700 mt-4">
                  <strong>Helpline:</strong> If you or someone you know has a gambling problem, please contact a
                  gambling addiction helpline in your area.
                </p>
              </div>
            </section>

            <section className="mb-8">
              <h2 className="text-2xl font-semibold text-gray-800 mb-4">Information Accuracy</h2>
              <p className="text-gray-700 mb-4">
                While we strive to provide accurate and up-to-date information about gaming applications, we cannot
                guarantee the completeness or accuracy of all details. Application features, bonuses, and terms may
                change without notice.
              </p>
              <p className="text-gray-700">
                Users are advised to verify all information directly with the application operators before making any
                decisions.
              </p>
            </section>

            <section className="mb-8">
              <h2 className="text-2xl font-semibold text-gray-800 mb-4">Contact Information</h2>
              <p className="text-gray-700 mb-4">
                If you have any questions about this disclaimer or need clarification on any matter, please contact us
                through our{" "}
                <Link href="/contact" className="text-blue-600 underline">
                  contact page
                </Link>
                .
              </p>
              <p className="text-gray-700">
                <strong>Last Updated:</strong> January 2025
              </p>
            </section>

            <div className="bg-gray-100 border border-gray-200 rounded-lg p-6">
              <p className="text-gray-700 text-center">
                <strong>
                  By using OnlyJaihoGames.com, you acknowledge that you have read, understood, and agree to this
                  disclaimer.
                </strong>
              </p>
            </div>
          </div>
        </div>
      </main>
    </div>
  )
}
