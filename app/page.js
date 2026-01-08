import Header from "@/components/Header"
import Footer from "@/components/Footer"
import Hero from "@/components/Hero"
import FAQ from "@/components/FAQ"

export default async function Home() {
  return (
    <main className="p-1 w-full">
      <Header />
      <Hero />
      <FAQ />
      <Footer />
    </main>
  )
}
