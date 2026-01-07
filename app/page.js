import fs from "fs/promises"
import path from "path"
import { Suspense } from "react"
import Header from "@/components/Header"
import Footer from "@/components/Footer"
import Hero from "@/components/Hero"
import CardsSection from "@/components/CardsSection"
import FAQ from "@/components/FAQ"

export default async function Home() {
  const filePath = path.join(process.cwd(), "data", "hundpark_data.json")
  const fileContents = await fs.readFile(filePath, "utf8")
  const rawParksData = JSON.parse(fileContents)

  return (
    <main className="p-1 w-full">
      <Suspense fallback={<div>Loading header...</div>}>
        <Header />
      </Suspense>
      <Hero />
      <CardsSection rawParksData={rawParksData} />
      <FAQ />
      <Footer />
    </main>
  )
}
