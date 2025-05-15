import { searchApps } from "@/lib/data"
import AppGrid from "@/components/app-grid"

interface SearchPageProps {
  searchParams: {
    q: string
  }
}

export default function SearchPage({ searchParams }: SearchPageProps) {
  const query = searchParams.q || ""
  const results = searchApps(query)

  return (
    <div className="space-y-8">
      <div>
        <h1 className="text-3xl font-bold bg-clip-text text-transparent bg-gradient-to-r from-blue-500 via-green-400 to-red-500">
          Search Results
        </h1>
        <p className="text-blue-300 mt-2">
          {results.length} {results.length === 1 ? "result" : "results"} for "{query}"
        </p>
      </div>

      {results.length > 0 ? (
        <div className="bg-black/50 backdrop-blur-md rounded-xl p-6 border border-blue-500/20">
          <AppGrid items={results} />
        </div>
      ) : (
        <div className="text-center py-12 bg-black/50 backdrop-blur-md rounded-xl border border-blue-500/20">
          <h2 className="text-xl font-semibold text-white">No results found</h2>
          <p className="text-blue-300 mt-2">Try searching with different keywords</p>
        </div>
      )}
    </div>
  )
}
