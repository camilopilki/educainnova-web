import ContactSection from "@/components/sections/ContactSection"
import Newsletter from "@/components/sections/Newsletter"
import Footer from "@/components/layout/Footer"

export default function Home() {
  return (
    <main className="bg-[#0b0b0c] text-white">

      {/* HERO */}
      <ContactSection />

      {/* NEWSLETTER */}
      <Newsletter />

      <Footer />

    </main>
  )
}