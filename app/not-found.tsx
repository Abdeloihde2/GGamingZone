import Link from "next/link"
import { Button } from "@/components/ui/button"

export default function NotFound() {
  return (
    <div className="flex flex-col items-center justify-center min-h-[70vh] text-center px-4 bg-black/50 backdrop-blur-md rounded-xl p-8 border border-blue-500/20">
      <h1 className="text-6xl font-bold bg-clip-text text-transparent bg-gradient-to-r from-blue-500 via-green-400 to-red-500">
        404
      </h1>
      <h2 className="text-2xl font-semibold mt-4 text-white">Page Not Found</h2>
      <p className="text-blue-300 mt-2 max-w-md">The page you are looking for doesn't exist or has been moved.</p>
      <Button asChild className="mt-8 bg-blue-600 hover:bg-blue-700">
        <Link href="/">Return Home</Link>
      </Button>
    </div>
  )
}
