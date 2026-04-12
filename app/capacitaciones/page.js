"use client"

export default function CapacitacionesPage() {
  const capacitaciones = [
    {
      title: "Inteligencia Artificial en Educación",
      desc: "Implementa IA en procesos pedagógicos y administrativos.",
      icon: "🤖",
    },
    {
      title: "Transformación Digital Escolar",
      desc: "Moderniza tu institución con herramientas tecnológicas.",
      icon: "🏫",
    },
    {
      title: "Automatización de Procesos",
      desc: "Optimiza tareas repetitivas y mejora la eficiencia.",
      icon: "⚙️",
    },
  ]

  return (
    <main className="min-h-screen bg-[#0d0d0f] text-white px-6 md:px-12 py-24">

      {/* 🔥 HERO (MENSAJE REAL) */}
      <section className="max-w-5xl mx-auto text-center">
        <h1 className="text-4xl md:text-6xl font-bold leading-tight mb-6">
          ¿Cómo llevar tu institución educativa al{" "}
          <span className="text-orange-500">siguiente nivel?</span>
        </h1>

        <p className="text-white/60 text-lg max-w-3xl mx-auto">
          En EducAInnova acompañamos a líderes educativos en su camino hacia la
          transformación digital. Diseñamos capacitaciones a medida que integran
          inteligencia artificial y responden a las realidades del sistema educativo.
        </p>

        <div className="mt-8">
          <button className="bg-orange-500 hover:bg-orange-600 px-6 py-3 rounded-xl font-medium transition">
            Solicitar información
          </button>
        </div>
      </section>

      {/* 🔥 AUTORIDAD */}
      <section className="max-w-5xl mx-auto mt-24 text-center">
        <h2 className="text-3xl font-bold mb-6">
          Entendemos el sistema educativo desde dentro
        </h2>

        <p className="text-white/60 max-w-3xl mx-auto">
          Desde la normativa vigente hasta la convivencia escolar, conocemos los
          desafíos reales de las instituciones. Por eso nuestras capacitaciones no
          son genéricas: están diseñadas para generar impacto concreto.
        </p>
      </section>

      {/* 🔥 CAPACITACIONES */}
      <section className="max-w-6xl mx-auto mt-24">
        <h2 className="text-3xl font-bold mb-10 text-center">
          Nuestras capacitaciones
        </h2>

        <div className="grid md:grid-cols-3 gap-8">
          {capacitaciones.map((item, i) => (
            <div
              key={i}
              className="group relative bg-white/5 border border-white/10 rounded-2xl p-6 
              hover:border-orange-500/40 hover:bg-white/10 transition duration-300 cursor-pointer overflow-hidden"
            >
              {/* Glow */}
              <div className="absolute inset-0 opacity-0 group-hover:opacity-100 transition">
                <div className="absolute -inset-[1px] bg-gradient-to-r from-orange-500/20 to-transparent blur-xl"></div>
              </div>

              <div className="relative z-10">
                <div className="text-3xl mb-4">{item.icon}</div>

                <h3 className="text-xl font-semibold mb-2 group-hover:text-orange-400 transition">
                  {item.title}
                </h3>

                <p className="text-white/60 text-sm">
                  {item.desc}
                </p>

                <div className="mt-4 text-sm text-orange-400 opacity-0 group-hover:opacity-100 transition">
                  Ver detalles →
                </div>
              </div>
            </div>
          ))}
        </div>
      </section>

      {/* 🔥 METODOLOGÍA */}
      <section className="max-w-6xl mx-auto mt-28 text-center">
        <h2 className="text-3xl font-bold mb-10">
          ¿Cómo trabajamos?
        </h2>

        <div className="grid md:grid-cols-3 gap-8 text-left">
          <div className="bg-white/5 border border-white/10 p-6 rounded-xl">
            <h3 className="font-semibold mb-2">Diagnóstico</h3>
            <p className="text-white/60 text-sm">
              Analizamos las necesidades reales de tu institución.
            </p>
          </div>

          <div className="bg-white/5 border border-white/10 p-6 rounded-xl">
            <h3 className="font-semibold mb-2">Diseño a medida</h3>
            <p className="text-white/60 text-sm">
              Creamos capacitaciones adaptadas a tu contexto educativo.
            </p>
          </div>

          <div className="bg-white/5 border border-white/10 p-6 rounded-xl">
            <h3 className="font-semibold mb-2">Implementación</h3>
            <p className="text-white/60 text-sm">
              Ejecutamos con acompañamiento y enfoque práctico.
            </p>
          </div>
        </div>
      </section>

      {/* 🔥 CTA FINAL */}
      <section className="max-w-4xl mx-auto mt-28 text-center">
        <h2 className="text-3xl font-bold mb-6">
          Lleva tu institución al siguiente nivel
        </h2>

        <p className="text-white/60 mb-8">
          Conversemos y diseñemos una capacitación que realmente genere impacto.
        </p>

        <button className="bg-orange-500 hover:bg-orange-600 px-8 py-4 rounded-xl font-medium transition text-lg">
          Contactar ahora
        </button>
      </section>

    </main>
  )
}