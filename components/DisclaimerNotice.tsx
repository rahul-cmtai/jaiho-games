import Link from "next/link"

export const DisclaimerNotice = () => {
  return (
    <div className="border border-red-500 bg-red-50 p-6 mb-6 rounded-sm w-full">
      <div className="flex items-start mb-4">
        <div className="mr-2">
          <span className="text-3xl">⚠️</span>
        </div>
        <h3 className="font-bold text-gray-900">Important Notice</h3>
      </div>
      
      <div className="text-center mb-4">
        <p className="mb-2">
          <span className="font-semibold">OnlyJaihoGames.com</span> doesn't run or the apps listed here. The <span className="font-semibold">rummy app</span> can be addictive and risky financially, so use them carefully. Only for <span className="font-semibold">18+ people</span>.
        </p>
        <p>
          Please read our <Link href="/disclaimer" className="text-blue-600 hover:underline">Disclaimer page</Link> and the specific disclaimer for each app.
        </p>
      </div>
      
      <p className="font-semibold text-center">
        Alert: Rummy, a skill-based game, is banned by the government in Andhra Pradesh, Sikkim, Nagaland, Assam, Arunachal Pradesh, Tamil Nadu, Odisha, and Telangana.
      </p>
    </div>
  )
}