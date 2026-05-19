import ContactInfo from "../shared/ContactInfo"
import Image from "next/image"

export default function ContactSection() {
  return (
    <section className="relative px-10 py-20 min-h-screen flex flex-col justify-center overflow-hidden">

      {/* GLOW DE FONDO */}
      <div className="absolute right-0 top-1/2 -translate-y-1/2 w-[600px] h-[600px] bg-gradient-to-r from-orange-500/30 to-transparent blur-[140px] rounded-full"></div>

      <div className="grid md:grid-cols-2 gap-16 items-center relative z-10">

        {/* IZQUIERDA */}
        <div>
          <h1 className="text-5xl md:text-6xl font-bold leading-tight">
            Transformamos la educación <br />
            con <span className="text-orange-500">inteligencia artificial</span>
          </h1>

          <p className="text-gray-400 mt-6 max-w-md">
            Transformamos la gestión y el aprendizaje escolar mediante capacitación experta
            en IA y soluciones digitales personalizadas. Lidera el futuro educativo con el Sello
            IA.
          </p>

          <div className="mt-6">
            <ContactInfo />
          </div>
        </div>

        {/* DERECHA - MASCOTA */}
        <div className="flex justify-center">
          <Image
            src="/mascota.png"
            alt="Mascota EducAInnova"
            width={0}
            height={0}
            sizes="100vw"
            className="w-[280px] md:w-[420px] lg:w-[500px] h-auto drop-shadow-[0_0_60px_rgba(255,115,0,0.6)] animate-float"
          />
        </div>

      </div>
    </section>
  )
}