import { getAppsByCategory } from "@/lib/data"
import { notFound } from "next/navigation"
import AppGrid from "@/components/app-grid"

interface CategoryPageProps {
  params: {
    type: string
  }
}

export default function CategoryPage({ params }: CategoryPageProps) {
  const type = params.type

  if (type !== "game" && type !== "program") {
    notFound()
  }

  const apps = getAppsByCategory(type)
  const title = type === "game" ? "Games" : "Programs"

  return (
    <div className="space-y-8">
      <h1 className="text-3xl font-bold bg-clip-text text-transparent bg-gradient-to-r from-blue-500 via-green-400 to-red-500">
        {title}
      </h1>
      <div className="bg-black/50 backdrop-blur-md rounded-xl p-6 border border-blue-500/20">
        <AppGrid items={apps} />
      </div>
    </div>
  )
}
