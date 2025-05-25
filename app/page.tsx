import type { Metadata } from "next"
import Image from "next/image"

export const metadata: Metadata = {
  title: "learning from the past to grow a better future",
  description: "wildw0xd.xyz - learning from the past to grow a better future.",
}

export default function Home() {
  return (
    <main className="flex min-h-screen flex-col items-center justify-center p-4 text-center bg-white">
      <div className="mb-8">
        <Image src="/logo.png" alt="wildw0xd logo" width={200} height={200} priority />
      </div>
      <p className="text-sm sm:text-base md:text-lg text-gray-800">learning from the past to grow a better future.</p>
    </main>
  )
}
