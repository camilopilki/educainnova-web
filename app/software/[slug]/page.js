import { softwareData } from "@/components/data/softwareData"
import Image from "next/image"
import Link from "next/link" // 🔥 1. Importamos Link de Next.js
// 🔥 Importamos el Carrusel que creamos
import Carousel from "@/components/ui/Carrusel"

export default async function SoftwareDetail({ params }) {
  const resolvedParams = await params
  const slug = resolvedParams.slug
  const data = softwareData[slug]

  if (!data) {
    return (
      <div className="text-white p-20">
        Software no encontrado
      </div>
    )
  }

  return (
    <main className="relative bg-[#0b0b0c] text-white min-h-screen px-6 md:px-12 py-32 overflow-hidden">

      {/* GLOW GENERAL */}
      <div className="absolute top-20 right-0 w-[400px] h-[400px] bg-orange-500/20 blur-[120px] rounded-full"></div>

      {/* MASCOTA DECORATIVA */}
      <div className="absolute top-28 right-10 hidden lg:block z-10">
        <Image
          src="/mascota.png"
          alt="Mascota"
          width={0}
          height={0}
          sizes="100vw"
          className="w-[120px] h-auto opacity-80 animate-float-slow drop-shadow-[0_0_40px_rgba(255,115,0,0.5)]"
        />
      </div>

      <div className="max-w-7xl mx-auto relative z-20">

        {/* HERO */}
        <div className="grid md:grid-cols-2 gap-16 items-center">

          {/* TEXTO */}
          <div className="animate-fade-in">

            <p className="text-orange-500 text-sm mb-3 uppercase tracking-widest">
              {data.subtitle}
            </p>

            <h1 className="text-4xl md:text-6xl font-bold mb-6 leading-tight">
              {data.title}
            </h1>

            <p className="text-gray-400 mb-8 text-lg leading-relaxed">
              {data.description}
            </p>

            {/* FEATURES */}
            <div className="flex flex-wrap gap-3 mb-10">
              {data.features.map((f, i) => (
                <span
                  key={i}
                  className="text-sm bg-white/5 border border-white/10 px-4 py-2 rounded-full hover:border-orange-500/50 transition"
                >
                  {f}
                </span>
              ))}
            </div>

            {/* BOTONES */}
            <div className="flex gap-4">

              {/* 🔥 2. Envolvemos el botón con el Link y el parámetro del software */}
              <Link href={`/solicitar-demo?software=${data.title}`}>
                <button className="bg-orange-500 px-6 py-3 rounded-xl font-semibold hover:bg-orange-600 transition shadow-[0_0_20px_rgba(255,115,0,0.4)] hover:scale-[1.02]">
                  Solicitar Demo
                </button>
              </Link>

              {/*<button className="border border-white/20 px-6 py-3 rounded-xl hover:bg-white/10 transition">
                Ver más
              </button>*/}

            </div>
          </div>

          {/* EL NUEVO CARRUSEL */}
          <div className="relative group">

            {/* glow detrás */}
            <div className="absolute inset-0 bg-orange-500/20 blur-3xl opacity-30 group-hover:opacity-50 transition"></div>

            {/* Llamamos al componente y le pasamos el arreglo de imágenes */}
            <Carousel images={data.images} />
            
          </div>

        </div>

      </div>

    </main>
  )
}