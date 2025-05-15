import type { AppType } from "./types"

// Mock database
const apps: AppType[] = [
  {
    id: "gta-sa-mod-gta5",
    title: "GTA SA (MOD GTA5)",
    description:
      "Experience Grand Theft Auto: San Andreas with enhanced GTA 5 graphics and features. This mod brings modern visuals, improved gameplay mechanics, and additional content inspired by GTA 5 to the classic San Andreas world. Explore Los Santos, San Fierro, and Las Venturas with stunning visual upgrades and enhanced performance.",
    image: "https://upload.wikimedia.org/wikipedia/en/a/a5/Grand_Theft_Auto_V.png",
    screenshots: [
      "/images/gta-sa-mod-screenshot1.jpg",
      "/images/gta-sa-mod-screenshot2.jpg",
      "/images/gta-sa-mod-screenshot3.jpg",
    ],
    category: "game",
    platforms: "📱",
    version: "2.0.1",
    size: "2.3 GB",
    lastUpdated: "2023-12-15",
    androidLink: "https://locked3.com/cl/i/1oem2x",
  },
  {
    id: "gta-sa-graphics-mod",
    title: "GTA SA (Graphics Mod)",
    description:
      "This enhanced version of Grand Theft Auto: San Andreas features significantly improved graphics while maintaining the original gameplay. Experience the classic GTA SA story with high-resolution textures, improved lighting effects, enhanced character models, and realistic weather effects. The mod brings the visual quality closer to modern gaming standards.",
    image: "https://i.postimg.cc/tTRfRKzm/4169b8fb-gta-6-cover-confirmed.jpg",
    screenshots: ["/images/gta-sa-graphics-screenshot1.jpg", "/images/gta-sa-graphics-screenshot2.jpg"],
    category: "game",
    platforms: "📱",
    version: "1.8.5",
    size: "2.1 GB",
    lastUpdated: "2023-11-20",
    androidLink: "https://contentlocked.net/cl/i/6dwk58",
  },
  {
    id: "minecraft-mod",
    title: "MINECRAFT MOD",
    description:
      "This modded version of Minecraft includes unlimited resources, unlocked premium features, and enhanced gameplay elements. Build anything you can imagine with infinite blocks, explore vast procedurally generated worlds, and enjoy survival mode without limitations. The mod also includes additional crafting recipes, custom items, and improved graphics not available in the standard version.",
    image: "https://i.postimg.cc/VL7NYwB2/1728293571-1.webp",
    screenshots: ["/images/minecraft-mod-screenshot1.jpg", "/images/minecraft-mod-screenshot2.jpg"],
    category: "game",
    platforms: "📱",
    version: "1.19.80",
    size: "850 MB",
    lastUpdated: "2023-10-05",
    androidLink: "https://installchecker.com/cl/i/99g35p",
  },
  {
    id: "poppy-playtime",
    title: "POPPY PLAYTIME",
    description:
      "Poppy Playtime is a horror-puzzle adventure where you play as a former employee revisiting an abandoned toy factory. Explore the mysterious facility while solving puzzles and avoiding the vengeful toys that now roam its corridors. Use your GrabPack, a backpack with extendable hands, to manipulate the environment and escape the clutches of Huggy Wuggy and other terrifying creatures.",
    image: "https://i.postimg.cc/tg2CJ5p2/poppy-playtime-chapter-1-150x150.jpg",
    screenshots: ["/images/poppy-playtime-screenshot1.jpg", "/images/poppy-playtime-screenshot2.jpg"],
    category: "game",
    platforms: "📱",
    version: "1.2.0",
    size: "1.2 GB",
    lastUpdated: "2023-09-15",
    androidLink: "https://appslocked.com/cl/i/volq7m",
  },
  {
    id: "fifa-16-mod-25",
    title: "FIFA 16 Mod 25",
    description:
      "FIFA 16 Mod 25 brings the latest 2025 season updates to the classic FIFA 16 game. This comprehensive mod includes updated player rosters, team kits, and stadiums reflecting the current football season. Enjoy improved graphics, enhanced gameplay mechanics, and realistic player attributes. The mod also features updated commentary, new celebrations, and tactical improvements for a modern football gaming experience.",
    image: "https://i.postimg.cc/vZwNxwmZ/fc25-standard-edition.jpg",
    screenshots: ["/images/fifa-16-mod-screenshot1.jpg", "/images/fifa-16-mod-screenshot2.jpg"],
    category: "game",
    platforms: "📱",
    version: "25.0.3",
    size: "3.5 GB",
    lastUpdated: "2024-05-01",
    androidLink: "https://locked1.com/cl/i/x6w37g",
  },
  {
    id: "truck-of-europe-3",
    title: "Truck of Europe 3 Mod (Unlimited Money)",
    description:
      "Experience the ultimate truck driving simulation with Truck of Europe 3. This modded version gives you unlimited money to purchase any truck and upgrade without restrictions. Drive across a detailed recreation of Europe, delivering cargo through realistic environments with dynamic weather and day-night cycles. The game features dozens of licensed trucks, hundreds of customization options, and realistic physics for an immersive driving experience.",
    image: "https://i.postimg.cc/QMsrpW0w/f7f3b2a97d948ccc0070d873af29032a.jpg",
    screenshots: ["/images/truck-europe-screenshot1.jpg", "/images/truck-europe-screenshot2.jpg"],
    category: "game",
    platforms: "📱",
    version: "1.7.2",
    size: "2.8 GB",
    lastUpdated: "2023-11-30",
    androidLink: "https://locked3.com/cl/i/dv87w7",
  },
  {
    id: "assetto-corsa-mod",
    title: "Assetto Corsa Mod",
    description:
      "Assetto Corsa brings realistic racing simulation to mobile devices with this specially optimized mod. Experience precise physics, detailed car models, and authentic racing circuits. This version includes additional cars, tracks, and features not available in the standard release. The mod enhances graphics quality, improves handling mechanics, and offers a comprehensive career mode with various racing disciplines.",
    image: "https://i.postimg.cc/5tYb9MKN/assetto-corsa-dhrh-1200.jpg",
    screenshots: ["/images/assetto-corsa-screenshot1.jpg", "/images/assetto-corsa-screenshot2.jpg"],
    category: "game",
    platforms: "📱",
    version: "1.16.3",
    size: "4.2 GB",
    lastUpdated: "2023-12-10",
    androidLink: "https://locked1.com/cl/i/r721p4",
  },
  {
    id: "real-flight-simulator",
    title: "Real Flight Simulator",
    description:
      "Real Flight Simulator offers the most realistic flying experience on mobile devices. Pilot over 30 detailed aircraft ranging from small private planes to commercial airliners. Navigate the global map with actual flight routes, airports, and navigation systems. Experience realistic weather conditions, day-night cycles, and emergency scenarios. The game features accurate cockpit instruments, realistic flight physics, and stunning visuals of landscapes and cities.",
    image: "https://i.postimg.cc/PqSL8hdG/1733401007-1.webp",
    screenshots: ["/images/rfs-screenshot1.jpg", "/images/rfs-screenshot2.jpg"],
    category: "game",
    platforms: "📱",
    version: "1.3.5",
    size: "3.1 GB",
    lastUpdated: "2024-01-15",
    androidLink: "https://appslocked.com/cl/i/lk4opj",
  },
  {
    id: "mortal-kombat-x",
    title: "Mortal Kombat X",
    description:
      "Mortal Kombat X brings the legendary fighting franchise to mobile with brutal combat and iconic characters. This version features stunning graphics, visceral Fatalities, and the signature X-ray moves. Assemble a team of fighters from a massive roster including classic characters and new additions. Compete in faction wars, challenge towers, and special events to earn rewards and unlock new content. The game offers intuitive touch controls and deep combat mechanics.",
    image: "https://i.postimg.cc/DypVMwnp/mortal-kombat-150x150.png",
    screenshots: ["/images/mk-x-screenshot1.jpg", "/images/mk-x-screenshot2.jpg"],
    category: "game",
    platforms: "📱",
    version: "3.5.0",
    size: "1.8 GB",
    lastUpdated: "2023-08-20",
    androidLink: "https://locked1.com/cl/i/r721g4",
  },
  {
    id: "city-car-driving",
    title: "City Car Driving Mod (Unlimited Money)",
    description:
      "City Car Driving offers a realistic urban driving simulation with this unlimited money mod. Practice driving in various traffic situations, weather conditions, and times of day without worrying about in-game currency. The game features realistic physics, detailed car models, and authentic city environments. Learn traffic rules, improve your driving skills, and explore a vast open-world city with diverse districts and road types.",
    image: "https://i.postimg.cc/8sQvpSV2/car-parking-driving-school-150x150.jpg",
    screenshots: ["/images/city-car-screenshot1.jpg", "/images/city-car-screenshot2.jpg"],
    category: "game",
    platforms: "📱",
    version: "2.5.0",
    size: "1.5 GB",
    lastUpdated: "2023-10-25",
    androidLink: "https://mobileverify.net/cl/i/ndko54",
  },
  {
    id: "capcut-pro",
    title: "CAPCUT (Mod PRO)",
    description:
      "CapCut Pro Mod unlocks all premium features of this powerful video editing app. Create professional-quality videos with access to all effects, transitions, and filters without subscription fees. The mod removes watermarks, unlocks premium templates, and provides unlimited exports in high resolution. Edit videos with multi-track timeline, precise trimming tools, speed controls, and advanced color grading options. Add text, stickers, and sound effects from an extensive library.",
    image: "https://i.postimg.cc/d1WPcsG0/logo-150x150.jpg",
    screenshots: ["/images/capcut-screenshot1.jpg", "/images/capcut-screenshot2.jpg"],
    category: "program",
    platforms: "📱",
    version: "7.8.1",
    size: "89 MB",
    lastUpdated: "2024-02-10",
    androidLink: "https://contentlocked.net/cl/i/2lj3gd",
  },
  {
    id: "photoshop-mobile",
    title: "PHOTOSHOP Mobile",
    description:
      "Adobe Photoshop Mobile brings professional photo editing capabilities to your smartphone. This version includes advanced features like layers, masks, and adjustment tools typically found in the desktop version. Edit photos with precision using selection tools, healing brushes, and clone stamps. Apply filters, effects, and adjustments with non-destructive editing. The app supports RAW files, custom brushes, and advanced retouching tools for professional results on the go.",
    image: "https://i.postimg.cc/XNG465DS/1679755128-1.webp",
    screenshots: ["/images/photoshop-mobile-screenshot1.jpg", "/images/photoshop-mobile-screenshot2.jpg"],
    category: "program",
    platforms: "📱",
    version: "6.5.2",
    size: "112 MB",
    lastUpdated: "2023-12-05",
    androidLink: "https://contentlocked.net/cl/i/j63o9p",
  },
  {
    id: "spotify-premium",
    title: "Spotify Premium v9.0.38.126 MOD APK",
    description:
      "This modded version of Spotify unlocks all Premium features without requiring a subscription. Enjoy ad-free music streaming, unlimited skips, and the ability to download tracks for offline listening. The mod enables high-quality audio streaming up to 320kbps and includes the Amoled dark theme for OLED displays. Access Spotify's vast library of music, podcasts, and playlists with all the benefits of a Premium account.",
    image: "https://i.postimg.cc/3wf5PrXx/spotify-apk-mod-premium-150x150.png",
    screenshots: ["/images/spotify-premium-screenshot1.jpg", "/images/spotify-premium-screenshot2.jpg"],
    category: "program",
    platforms: "📱",
    version: "9.0.38.126",
    size: "75 MB",
    lastUpdated: "2023-11-15",
    androidLink: "https://contentlocked.net/cl/i/wo9mg2",
  },
  {
    id: "netflix-premium",
    title: "Netflix v9.10.1 MOD APK (Premium Unlocked)",
    description:
      "This modified version of Netflix unlocks premium features without requiring a subscription. Watch movies and TV shows in 4K HDR quality on compatible devices. The mod removes regional restrictions, allowing access to content from different countries. Enjoy an ad-free viewing experience with the ability to download content for offline viewing. The app provides the full Netflix library with all the benefits of a premium account.",
    image: "https://i.postimg.cc/6qdP5BvR/netflix-150x150.jpg",
    screenshots: ["/images/netflix-premium-screenshot1.jpg", "/images/netflix-premium-screenshot2.jpg"],
    category: "program",
    platforms: "📱",
    version: "9.10.1",
    size: "95 MB",
    lastUpdated: "2024-01-05",
    androidLink: "https://contentlocked.net/cl/i/6dwkm8",
  },
  {
    id: "racing-master",
    title: "Racing Master by Netease v0.14.3 APK",
    description:
      "Racing Master is a high-fidelity racing simulation developed by Netease using Unreal Engine 4. Experience realistic racing with accurately modeled cars from manufacturers like Ferrari, Lamborghini, and Porsche. The game features detailed tracks, realistic physics, and stunning visual effects including dynamic weather and time-of-day changes. Compete in various race types from circuit racing to drift competitions, and customize your vehicles with performance upgrades and visual modifications.",
    image: "https://i.postimg.cc/R0BNNRyH/racing-master-icon-150x150.png",
    screenshots: ["/images/racing-master-screenshot1.jpg", "/images/racing-master-screenshot2.jpg"],
    category: "game",
    platforms: "📱",
    version: "0.14.3",
    size: "2.3 GB",
    lastUpdated: "2023-09-30",
    androidLink: "https://contentlocked.net/cl/i/g6p79d",
  },
  {
    id: "grid-legends",
    title: "GRID™ Legends: Deluxe Edition",
    description:
      "GRID Legends Deluxe Edition brings console-quality racing to mobile devices. Experience an immersive story mode, 'Driven to Glory,' featuring live-action cutscenes and compelling characters. Race across 130+ tracks in locations worldwide with a diverse roster of vehicles spanning touring cars, trucks, open-wheel racers, and electric vehicles. The Deluxe Edition includes exclusive cars, events, and customization options not available in the standard version.",
    image: "https://i.postimg.cc/Z0kWbXSc/1744621594-1.webp",
    screenshots: ["/images/grid-legends-screenshot1.jpg", "/images/grid-legends-screenshot2.jpg"],
    category: "game",
    platforms: "📱",
    version: "1.5.2",
    size: "3.8 GB",
    lastUpdated: "2024-02-20",
    androidLink: "https://contentlocked.net/cl/i/kl18kq",
  },
  {
    id: "beamng-drive-mobile",
    title: "BeamNG Drive Mobile",
    description:
      "BeamNG Drive brings its renowned soft-body physics simulation to mobile devices. Experience realistic vehicle damage and deformation in real-time as you drive through detailed environments. The game features dozens of customizable vehicles with accurate handling characteristics and component systems. Create your own scenarios, participate in challenges, or simply explore the open world while testing the limits of the physics engine.",
    image: "https://i.postimg.cc/MTxBtkqd/beamngdrive-vt9gh.png",
    screenshots: ["/images/beamng-screenshot1.jpg", "/images/beamng-screenshot2.jpg"],
    category: "game",
    platforms: "📱",
    version: "0.26.2",
    size: "2.9 GB",
    lastUpdated: "2023-12-20",
    androidLink: "https://contentlocked.net/cl/i/5kqp56kl18kq",
  },
  {
    id: "baseball-9",
    title: "BASEBALL 9 v3.7.1 MOD APK",
    description:
      "Baseball 9 is a casual yet deep baseball game with charming graphics and accessible gameplay. This modded version provides unlimited money and resources to fully upgrade your team without grinding. Recruit and develop players, customize their appearances and abilities, and compete in multiple leagues and championships. The game features simple controls, various game modes, and realistic baseball mechanics with a colorful, appealing art style.",
    image: "https://i.postimg.cc/yd1gSCQk/baseball-9-150x150.jpg",
    screenshots: ["/images/baseball-9-screenshot1.jpg", "/images/baseball-9-screenshot2.jpg"],
    category: "game",
    platforms: "📱",
    version: "3.7.1",
    size: "450 MB",
    lastUpdated: "2023-10-10",
    androidLink: "https://contentlocked.net/cl/i/r723xv",
  },
]

// Get all apps
export function getApps(): AppType[] {
  return apps
}

// Get app by ID
export function getAppById(id: string): AppType | undefined {
  return apps.find((app) => app.id === id)
}

// Get apps by category
export function getAppsByCategory(category: string): AppType[] {
  return apps.filter((app) => app.category === category)
}

// Search apps
export function searchApps(query: string): AppType[] {
  const lowercaseQuery = query.toLowerCase()
  return apps.filter(
    (app) => app.title.toLowerCase().includes(lowercaseQuery) || app.description.toLowerCase().includes(lowercaseQuery),
  )
}
