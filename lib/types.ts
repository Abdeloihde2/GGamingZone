export interface AppType {
  id: string
  title: string
  description: string
  image: string
  screenshots?: string[]
  category: "game" | "program"
  platforms: string
  version: string
  size: string
  lastUpdated: string
  iosLink?: string
  androidLink?: string
}
