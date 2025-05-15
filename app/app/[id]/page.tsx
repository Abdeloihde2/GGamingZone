import { getAppById } from "@/lib/data"
import { notFound } from "next/navigation"
import Image from "next/image"
import { Button } from "@/components/ui/button"
import { Apple, SmartphoneIcon as Android } from "lucide-react"

interface AppPageProps {
  params: {
    id: string
  }
}

export default function AppPage({ params }: AppPageProps) {
  const app = getAppById(params.id)

  if (!app) {
    notFound()
  }

  return (
    <div className="max-w-5xl mx-auto">
      <div className="bg-black/50 backdrop-blur-md p-6 rounded-xl border border-blue-500/20">
        <div className="grid md:grid-cols-2 gap-8">
          <div className="space-y-6">
            <div className="relative aspect-square overflow-hidden rounded-lg">
              <Image
                src={app.image || "/placeholder.svg"}
                alt={app.title}
                fill
                className="object-cover"
                priority
                sizes="(max-width: 768px) 100vw, 50vw"
              />
            </div>

            {app.screenshots && app.screenshots.length > 0 && (
              <div className="space-y-4">
                <h2 className="text-xl font-semibold text-white">Screenshots</h2>
                <div className="grid grid-cols-2 gap-4">
                  {app.screenshots.map((screenshot, index) => (
                    <div key={index} className="relative aspect-video rounded-lg overflow-hidden">
                      <Image
                        src={screenshot || "/placeholder.svg"}
                        alt={`${app.title} screenshot ${index + 1}`}
                        fill
                        className="object-cover"
                        sizes="(max-width: 768px) 50vw, 25vw"
                      />
                    </div>
                  ))}
                </div>
              </div>
            )}
          </div>

          <div className="space-y-6">
            <div>
              <h1 className="text-3xl font-bold text-white">{app.title}</h1>
              <p className="text-blue-300 mt-2">Platforms: {app.platforms}</p>
            </div>

            <div className="space-y-4">
              <h2 className="text-xl font-semibold text-white">Description</h2>
              <p className="text-gray-300">{app.description}</p>
            </div>

            <div className="space-y-4">
              <h2 className="text-xl font-semibold text-white">Download</h2>
              <div className="flex flex-col sm:flex-row gap-4">
                {app.iosLink && (
                  <Button className="flex items-center gap-2 bg-blue-600 hover:bg-blue-700" asChild>
                    <a href={app.iosLink} target="_blank" rel="noopener noreferrer">
                      <Apple className="h-5 w-5" />
                      Download for iOS
                    </a>
                  </Button>
                )}

                {app.androidLink && (
                  <Button className="flex items-center gap-2 bg-green-600 hover:bg-green-700" asChild>
                    <a href={app.androidLink} target="_blank" rel="noopener noreferrer">
                      <Android className="h-5 w-5" />
                      Download for Android
                    </a>
                  </Button>
                )}
              </div>
            </div>

            <div className="space-y-4">
              <h2 className="text-xl font-semibold text-white">Details</h2>
              <div className="grid grid-cols-2 gap-4">
                <div>
                  <p className="text-blue-300">Category</p>
                  <p className="capitalize text-white">{app.category}</p>
                </div>
                <div>
                  <p className="text-blue-300">Version</p>
                  <p className="text-white">{app.version}</p>
                </div>
                <div>
                  <p className="text-blue-300">Size</p>
                  <p className="text-white">{app.size}</p>
                </div>
                <div>
                  <p className="text-blue-300">Last Updated</p>
                  <p className="text-white">{app.lastUpdated}</p>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  )
}
