"use client"

import type React from "react"

import Link from "next/link"
import { usePathname, useRouter } from "next/navigation"
import { useState } from "react"
import { Search } from "lucide-react"
import { Button } from "@/components/ui/button"
import { Input } from "@/components/ui/input"
import { ThemeToggle } from "@/components/theme-toggle"

export default function Navbar() {
  const [searchQuery, setSearchQuery] = useState("")
  const router = useRouter()
  const pathname = usePathname()

  const handleSearch = (e: React.FormEvent) => {
    e.preventDefault()
    if (searchQuery.trim()) {
      router.push(`/search?q=${encodeURIComponent(searchQuery.trim())}`)
    }
  }

  return (
    <header className="sticky top-0 z-50 w-full border-b border-blue-500/20 bg-black/70 backdrop-blur-md">
      <div className="container flex h-16 items-center justify-between">
        <div className="flex items-center gap-6 md:gap-10">
          <Link href="/" className="flex items-center space-x-2">
            <span className="text-xl font-bold bg-clip-text text-transparent bg-gradient-to-r from-blue-500 via-green-400 to-red-500">
              GGamingZone
            </span>
          </Link>
          <nav className="hidden md:flex gap-6">
            <Link
              href="/"
              className={`text-sm font-medium transition-colors hover:text-blue-400 ${
                pathname === "/" ? "text-blue-500" : "text-gray-300"
              }`}
            >
              Home
            </Link>
            <Link
              href="/category/game"
              className={`text-sm font-medium transition-colors hover:text-blue-400 ${
                pathname === "/category/game" ? "text-blue-500" : "text-gray-300"
              }`}
            >
              Games
            </Link>
            <Link
              href="/category/program"
              className={`text-sm font-medium transition-colors hover:text-blue-400 ${
                pathname === "/category/program" ? "text-blue-500" : "text-gray-300"
              }`}
            >
              Programs
            </Link>
          </nav>
        </div>

        <div className="flex items-center gap-4">
          <form onSubmit={handleSearch} className="hidden md:flex relative">
            <Input
              type="search"
              placeholder="Search..."
              className="w-[200px] lg:w-[300px] bg-gray-900/70 border-blue-500/30 focus:border-blue-500/70"
              value={searchQuery}
              onChange={(e) => setSearchQuery(e.target.value)}
            />
            <Button type="submit" size="icon" variant="ghost" className="absolute right-0 top-0 h-full text-blue-400">
              <Search className="h-4 w-4" />
              <span className="sr-only">Search</span>
            </Button>
          </form>
          <ThemeToggle />
          <Button variant="ghost" size="icon" className="md:hidden text-blue-400">
            <Search className="h-5 w-5" />
            <span className="sr-only">Search</span>
          </Button>
        </div>
      </div>
    </header>
  )
}
