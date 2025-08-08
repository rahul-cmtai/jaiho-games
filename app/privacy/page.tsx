"use client"

import { useState } from "react"
import { Menu, X, Shield } from "lucide-react"
import { Button } from "@/components/ui/button"
import Link from "next/link"

export default function PrivacyPage() {
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false)

  return (
    <div>

      {/* Privacy Policy Content */}
      <main className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 py-12">
        <div className="bg-white rounded-lg shadow-sm p-8">
          <div className="flex items-center space-x-3 mb-8">
            <Shield className="h-8 w-8 text-green-600" />
            <h1 className="text-3xl font-bold text-gray-900">Privacy Policy & Terms</h1>
          </div>

          <div className="prose prose-lg max-w-none">
            <section className="mb-8">
              <h2 className="text-2xl font-semibold text-gray-800 mb-4">Privacy Policy</h2>
              <p className="text-gray-700 mb-4">
                At OnlyJaihoGames.com, we are committed to protecting your privacy and ensuring the security of your
                personal information. This Privacy Policy explains how we collect, use, and safeguard your data when you
                visit our website.
              </p>
              <p className="text-gray-700 mb-4">
                <strong>Effective Date:</strong> January 1, 2025
              </p>
            </section>

            <section className="mb-8">
              <h2 className="text-2xl font-semibold text-gray-800 mb-4">Information We Collect</h2>
              <div className="bg-blue-50 border border-blue-200 rounded-lg p-6 mb-4">
                <h3 className="text-lg font-semibold text-blue-800 mb-3">Automatically Collected Information</h3>
                <ul className="list-disc list-inside text-gray-700 space-y-2">
                  <li>IP address and location data</li>
                  <li>Browser type and version</li>
                  <li>Device information (mobile, desktop, tablet)</li>
                  <li>Pages visited and time spent on site</li>
                  <li>Referring website information</li>
                  <li>Cookies and similar tracking technologies</li>
                </ul>
              </div>
              <div className="bg-green-50 border border-green-200 rounded-lg p-6">
                <h3 className="text-lg font-semibold text-green-800 mb-3">Information You Provide</h3>
                <ul className="list-disc list-inside text-gray-700 space-y-2">
                  <li>Contact form submissions (name, email, message)</li>
                  <li>Newsletter subscription email addresses</li>
                  <li>Feedback and survey responses</li>
                  <li>Comments and user-generated content</li>
                </ul>
              </div>
            </section>

            <section className="mb-8">
              <h2 className="text-2xl font-semibold text-gray-800 mb-4">How We Use Your Information</h2>
              <p className="text-gray-700 mb-4">We use the collected information for the following purposes:</p>
              <ul className="list-disc list-inside text-gray-700 space-y-2">
                <li>To provide and maintain our website services</li>
                <li>To improve user experience and website functionality</li>
                <li>To respond to your inquiries and provide customer support</li>
                <li>To send newsletters and promotional content (with consent)</li>
                <li>To analyze website traffic and user behavior</li>
                <li>To prevent fraud and ensure website security</li>
                <li>To comply with legal obligations</li>
              </ul>
            </section>

            <section className="mb-8">
              <h2 className="text-2xl font-semibold text-gray-800 mb-4">Cookies and Tracking</h2>
              <div className="bg-yellow-50 border border-yellow-200 rounded-lg p-6">
                <p className="text-gray-700 mb-4">
                  We use cookies and similar tracking technologies to enhance your browsing experience. These include:
                </p>
                <ul className="list-disc list-inside text-gray-700 space-y-2">
                  <li>
                    <strong>Essential Cookies:</strong> Required for basic website functionality
                  </li>
                  <li>
                    <strong>Analytics Cookies:</strong> Help us understand how visitors use our site
                  </li>
                  <li>
                    <strong>Advertising Cookies:</strong> Used to display relevant advertisements
                  </li>
                  <li>
                    <strong>Preference Cookies:</strong> Remember your settings and preferences
                  </li>
                </ul>
                <p className="text-gray-700 mt-4">
                  You can control cookie settings through your browser preferences, but disabling certain cookies may
                  affect website functionality.
                </p>
              </div>
            </section>

            <section className="mb-8">
              <h2 className="text-2xl font-semibold text-gray-800 mb-4">Third-Party Services</h2>
              <p className="text-gray-700 mb-4">
                Our website may use third-party services that collect information independently. These include:
              </p>
              <ul className="list-disc list-inside text-gray-700 space-y-2 mb-4">
                <li>Google Analytics for website analytics</li>
                <li>Google AdSense for advertising</li>
                <li>Social media plugins and widgets</li>
                <li>Content delivery networks (CDNs)</li>
              </ul>
              <p className="text-gray-700">
                These services have their own privacy policies, and we encourage you to review them.
              </p>
            </section>

            <section className="mb-8">
              <h2 className="text-2xl font-semibold text-gray-800 mb-4">Data Security</h2>
              <div className="bg-green-50 border border-green-200 rounded-lg p-6">
                <p className="text-gray-700 mb-4">
                  We implement appropriate security measures to protect your personal information:
                </p>
                <ul className="list-disc list-inside text-gray-700 space-y-2">
                  <li>SSL encryption for data transmission</li>
                  <li>Regular security audits and updates</li>
                  <li>Access controls and authentication</li>
                  <li>Secure data storage practices</li>
                  <li>Regular backup and recovery procedures</li>
                </ul>
                <p className="text-gray-700 mt-4">
                  However, no method of transmission over the internet is 100% secure, and we cannot guarantee absolute
                  security.
                </p>
              </div>
            </section>

            <section className="mb-8">
              <h2 className="text-2xl font-semibold text-gray-800 mb-4">Your Rights</h2>
              <p className="text-gray-700 mb-4">You have the following rights regarding your personal data:</p>
              <div className="grid md:grid-cols-2 gap-6">
                <div className="bg-blue-50 p-4 rounded-lg">
                  <h3 className="font-semibold text-blue-800 mb-2">Access & Portability</h3>
                  <p className="text-gray-700 text-sm">
                    Request access to your personal data and receive a copy in a portable format.
                  </p>
                </div>
                <div className="bg-orange-50 p-4 rounded-lg">
                  <h3 className="font-semibold text-orange-800 mb-2">Correction</h3>
                  <p className="text-gray-700 text-sm">Request correction of inaccurate or incomplete personal data.</p>
                </div>
                <div className="bg-red-50 p-4 rounded-lg">
                  <h3 className="font-semibold text-red-800 mb-2">Deletion</h3>
                  <p className="text-gray-700 text-sm">
                    Request deletion of your personal data under certain circumstances.
                  </p>
                </div>
                <div className="bg-purple-50 p-4 rounded-lg">
                  <h3 className="font-semibold text-purple-800 mb-2">Opt-out</h3>
                  <p className="text-gray-700 text-sm">Unsubscribe from marketing communications at any time.</p>
                </div>
              </div>
            </section>

            <section className="mb-8">
              <h2 className="text-2xl font-semibold text-gray-800 mb-4">Terms of Service</h2>
              <div className="bg-gray-50 border border-gray-200 rounded-lg p-6">
                <h3 className="text-lg font-semibold text-gray-800 mb-3">Website Usage</h3>
                <p className="text-gray-700 mb-4">
                  By accessing OnlyJaihoGames.com, you agree to use the website responsibly and in accordance with
                  applicable laws.
                </p>
                <ul className="list-disc list-inside text-gray-700 space-y-2">
                  <li>You must be at least 18 years old to use this website</li>
                  <li>You agree not to use the website for illegal activities</li>
                  <li>You will not attempt to harm or disrupt the website</li>
                  <li>You understand that we are not responsible for third-party applications</li>
                  <li>You acknowledge the risks associated with real money gaming</li>
                </ul>
              </div>
            </section>

            <section className="mb-8">
              <h2 className="text-2xl font-semibold text-gray-800 mb-4">Intellectual Property</h2>
              <p className="text-gray-700 mb-4">
                All content on OnlyJaihoGames.com, including text, images, logos, and design elements, is protected by
                copyright and other intellectual property laws. You may not reproduce, distribute, or modify any content
                without permission.
              </p>
            </section>

            <section className="mb-8">
              <h2 className="text-2xl font-semibold text-gray-800 mb-4">Changes to This Policy</h2>
              <p className="text-gray-700 mb-4">
                We may update this Privacy Policy and Terms of Service from time to time. Changes will be posted on this
                page with an updated effective date. We encourage you to review this policy periodically.
              </p>
            </section>

            <section className="mb-8">
              <h2 className="text-2xl font-semibold text-gray-800 mb-4">Contact Us</h2>
              <p className="text-gray-700 mb-4">
                If you have any questions about this Privacy Policy or Terms of Service, please contact us:
              </p>
              <div className="bg-blue-50 border border-blue-200 rounded-lg p-6">
                <ul className="text-gray-700 space-y-2">
                  <li>
                    <strong>Email:</strong> privacy@onlyjaihogames.com
                  </li>
                  <li>
                    <strong>Contact Page:</strong>{" "}
                    <Link href="/contact" className="text-blue-600 underline">
                      Visit our contact page
                    </Link>
                  </li>
                  <li>
                    <strong>Response Time:</strong> We aim to respond within 48 hours
                  </li>
                </ul>
              </div>
            </section>

            <div className="bg-green-100 border border-green-200 rounded-lg p-6">
              <p className="text-gray-700 text-center">
                <strong>
                  By using OnlyJaihoGames.com, you acknowledge that you have read, understood, and agree to this Privacy
                  Policy and Terms of Service.
                </strong>
              </p>
              <p className="text-gray-600 text-center text-sm mt-2">Last Updated: January 2025</p>
            </div>
          </div>
        </div>
      </main>
    </div>
  )
}
