import { Header } from '../../../components/header'

export default function Loading() {
  return (
    <div className="min-h-screen bg-gray-50">
      {/* Header */}
      <Header />
      
      {/* Page Title Banner */}
      <div className="bg-white border-b border-gray-200 py-4">
        <div className="max-w-7xl mx-auto px-4">
          <div className="h-8 bg-gray-300 rounded w-3/4 animate-pulse"></div>
        </div>
      </div>

      {/* App Details */}
      <div className="max-w-7xl mx-auto px-4 py-8">
        <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
          {/* Left Column - App Image */}
          <div className="md:col-span-1 animate-pulse">
            <div className="bg-gray-300 rounded-full w-48 h-48 mx-auto"></div>
          </div>

          {/* Right Column - App Details */}
          <div className="md:col-span-2 animate-pulse">
            <div className="h-8 bg-gray-300 rounded w-1/2 mb-4"></div>
            <div className="h-6 bg-gray-300 rounded w-1/3 mb-6"></div>

            <div className="grid grid-cols-2 md:grid-cols-4 gap-4 mb-8">
              {[1, 2, 3, 4].map((i) => (
                <div key={i} className="border border-gray-200 p-4 flex flex-col items-center justify-center">
                  <div className="h-8 w-8 bg-gray-300 rounded-full mb-2"></div>
                  <div className="h-6 bg-gray-300 rounded w-16"></div>
                  <div className="h-4 bg-gray-300 rounded w-12 mt-1"></div>
                </div>
              ))}
            </div>

            {/* Download Button */}
            <div className="text-center mb-6">
              <div className="h-12 bg-gray-300 rounded w-48 mx-auto"></div>
            </div>

            {/* Telegram Button */}
            <div className="text-center">
              <div className="h-12 bg-gray-300 rounded w-64 mx-auto"></div>
            </div>
          </div>
        </div>

        {/* Related Apps Section */}
        <div className="mt-12 animate-pulse">
          <div className="bg-gray-300 py-3 px-4 rounded-t-md">
            <div className="h-6 bg-gray-400 rounded w-1/4"></div>
          </div>

          <div className="border border-gray-200 rounded-b-md">
            {[1, 2, 3, 4].map((i) => (
              <div key={i} className="border-b border-gray-200 last:border-b-0">
                <div className="flex items-center justify-between p-4">
                  <div className="flex items-center">
                    <div className="mr-4 h-4 w-4 bg-gray-300 rounded"></div>
                    <div className="bg-gray-300 rounded-full w-16 h-16 mr-4"></div>
                    <div>
                      <div className="h-5 bg-gray-300 rounded w-32 mb-2"></div>
                      <div className="h-4 bg-gray-300 rounded w-24 mb-1"></div>
                      <div className="h-4 bg-gray-300 rounded w-28"></div>
                    </div>
                  </div>
                  <div className="h-10 bg-gray-300 rounded w-24"></div>
                </div>
              </div>
            ))}
          </div>
        </div>

        {/* Disclaimer */}
        <div className="mt-8 p-6 bg-white rounded-md shadow-sm border border-gray-200 animate-pulse">
          <div className="space-y-2">
            <div className="h-4 bg-gray-300 rounded w-full"></div>
            <div className="h-4 bg-gray-300 rounded w-full"></div>
            <div className="h-4 bg-gray-300 rounded w-5/6"></div>
            <div className="h-4 bg-gray-300 rounded w-4/6"></div>
          </div>
        </div>
      </div>
    </div>
  )
}