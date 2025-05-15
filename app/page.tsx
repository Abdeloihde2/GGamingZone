import { Tabs, TabsContent, TabsList, TabsTrigger } from "@/components/ui/tabs"
import AppGrid from "@/components/app-grid"
import { getApps } from "@/lib/data"

export default function Home() {
  const apps = getApps()
  const games = apps.filter((app) => app.category === "game")
  const programs = apps.filter((app) => app.category === "program")

  return (
    <div className="space-y-8">
      <section className="py-6 text-center">
        <h1 className="text-5xl font-bold mb-4 bg-clip-text text-transparent bg-gradient-to-r from-blue-500 via-green-400 to-red-500">
          Welcome To GGamingZone
        </h1>
        <p className="text-gray-300 text-lg max-w-2xl mx-auto">
          Download your favorite games and programs for iOS and Android
        </p>
      </section>

      <div className="bg-black/50 backdrop-blur-md rounded-xl p-6 border border-blue-500/20">
        <Tabs defaultValue="games" className="w-full">
          <TabsList className="grid w-full grid-cols-2 mb-8 bg-gray-900/70">
            <TabsTrigger value="games">Games</TabsTrigger>
            <TabsTrigger value="programs">Programs</TabsTrigger>
          </TabsList>
          <TabsContent value="games">
            <h2 className="text-2xl font-bold mb-6 text-white">Featured Games</h2>
            <AppGrid items={games} />
          </TabsContent>
          <TabsContent value="programs">
            <h2 className="text-2xl font-bold mb-6 text-white">Featured Programs</h2>
            <AppGrid items={programs} />
          </TabsContent>
        </Tabs>
      </div>
    </div>
  )
}
