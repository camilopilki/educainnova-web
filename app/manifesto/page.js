import Image from "next/image"

export default function AboutSection() {
  return (
    <section className="px-10 py-20 bg-[#0b0b0c] text-white">

      {/* QUIENES SOMOS */}
      <div className="relative bg-[#111] rounded-3xl p-10 border border-gray-800 mb-16 overflow-hidden group">

        {/* glow hover */}
        <div className="absolute inset-0 bg-gradient-to-r from-orange-500/0 via-orange-500/10 to-orange-500/0 opacity-0 group-hover:opacity-100 transition duration-500 blur-2xl"></div>

        <div className="grid md:grid-cols-2 gap-10 items-center relative z-10">

          {/* TEXTO */}
          <div className="animate-slide-up">
            <h2 className="text-3xl font-bold mb-4">Quiénes Somos</h2>

            <p className="text-gray-400 leading-relaxed">
              En Educa Innova, no solo implementamos tecnología; 
              transformamos la cultura organizacional de las instituciones educativas. 
              Somos una Startup dedicada a potenciar escuelas,
              liceos y universidades mediante la optimización de sus procesos críticos.
            </p>
          </div>

          {/* ROBOT */}
          <div className="flex justify-center">
            <Image
              src="/mascota.png"
              alt="Mascota"
              width={0}
              height={0}
              sizes="100vw"
              className="w-[180px] md:w-[260px] lg:w-[320px] h-auto animate-float-slow drop-shadow-[0_0_40px_rgba(255,115,0,0.5)] group-hover:scale-110 transition duration-500"
            />
          </div>

        </div>
      </div>

      {/* CARDS */}
      <div className="grid md:grid-cols-2 gap-8">

        {/* MISIÓN */}
        <div className="bg-[#111] p-8 rounded-2xl border border-gray-800 relative overflow-hidden group hover:-translate-y-2 transition duration-300">

          <div className="absolute inset-0 bg-gradient-to-br from-orange-500/0 via-orange-500/10 to-transparent opacity-0 group-hover:opacity-100 transition"></div>

          <h3 className="text-2xl font-semibold text-orange-500 mb-4">
            Misión
          </h3>

          <p className="text-gray-400 leading-relaxed">
            Desarrollar soluciones tecnológicas innovadoras que integren inteligencia
            artificial en el ámbito educativo, optimizando procesos y mejorando la
            experiencia de aprendizaje.
          </p>

          <p className="mt-6 text-orange-400 text-sm">
            Innovación aplicada a la educación
          </p>
        </div>

        {/* VISIÓN */}
        <div className="bg-[#111] p-8 rounded-2xl border border-gray-800 relative overflow-hidden group hover:-translate-y-2 transition duration-300">

          <div className="absolute inset-0 bg-gradient-to-br from-orange-500/0 via-orange-500/10 to-transparent opacity-0 group-hover:opacity-100 transition"></div>

          <h3 className="text-2xl font-semibold text-orange-500 mb-4">
            Visión
          </h3>

          <p className="text-gray-400 leading-relaxed">
            Ser referentes en la transformación digital del sector educativo,
            desarrollando plataformas inteligentes que impulsen el aprendizaje
            del futuro.
          </p>

          <p className="mt-6 text-orange-400 text-sm">
            Educación + IA = futuro
          </p>
        </div>

      </div>

    </section>
  )
}