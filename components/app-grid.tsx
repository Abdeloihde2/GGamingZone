import Link from "next/link"
import Image from "next/image"
import { Button } from "@/components/ui/button"
import { Card, CardContent, CardFooter } from "@/components/ui/card"
import type { AppType } from "@/lib/types"

interface AppGridProps {
  items: AppType[]
}

export default function AppGrid({ items }: AppGridProps) {
  return (
    <div className="grid grid-cols-2 sm:grid-cols-3 md:grid-cols-4 lg:grid-cols-5 gap-4">
      {items.map((item) => (
        <Card
          key={item.id}
          className="overflow-hidden bg-black/50 backdrop-blur-sm border border-blue-500/20 hover:border-blue-500/50 transition-all"
        >
          <Link href={`/app/${item.id}`}>
            <div className="overflow-hidden aspect-square relative">
              <Image
                src={item.image || "/placeholder.svg"}
                alt={item.title}
                fill
                className="object-cover transition-transform hover:scale-105"
                sizes="(max-width: 768px) 100vw, (max-width: 1200px) 50vw, 33vw"
              />
            </div>
            <CardContent className="p-4">
              <h3 className="font-semibold line-clamp-2 min-h-[48px] text-white">{item.title}</h3>
              <div className="flex items-center text-sm text-blue-300 mt-2">
                <span>Platforms: {item.platforms}</span>
              </div>
            </CardContent>
          </Link>
          <CardFooter className="p-4 pt-0">
            <Button asChild className="w-full bg-blue-600 hover:bg-blue-700">
              <Link href={`/app/${item.id}`}>View Details</Link>
            </Button>
          </CardFooter>
        </Card>
      ))}
    </div>
  )
}
