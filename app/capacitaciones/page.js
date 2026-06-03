"use client"
import Link from "next/link"
import { Bot, School, Settings, ArrowRight, CheckCircle2 } from "lucide-react"

export default function CapacitacionesPage() {
  const capacitaciones = [
    {
      title: "Inteligencia Artificial en Educación",
      desc: "Implementa IA en procesos pedagógicos y administrativos de manera ética y efectiva.",
      icon: <Bot className="w-8 h-8 text-orange-500" />,
    },
    {
      title: "Transformación Digital Escolar",
      desc: "Moderniza tu institución con herramientas tecnológicas adaptadas a la realidad local.",
      icon: <School className="w-8 h-8 text-orange-500" />,
    },
    {
      title: "Automatización de Procesos",
      desc: "Optimiza tareas repetitivas de gestión y mejora drásticamente la eficiencia de tu equipo.",
      icon: <Settings className="w-8 h-8 text-orange-500" />,
    },
  ]

  return (
    <main className="min-h-screen bg-[#0d0d0f] text-white px-6 md:px-12 py-24 relative overflow-hidden">
      
      {/* Luces de ambiente de fondo (Glows) */}
      <div className="absolute top-0 left-1/4 w-[500px] h-[500px] bg-orange-500/5 rounded-full blur-[120px] pointer-events-none" />
      <div className="absolute top-1/2 -right-64 w-[400px] h-[400px] bg-orange-500/5 rounded-full blur-[100px] pointer-events-none" />

      {/* 🔥 HERO SECTION */}
      <section className="max-w-5xl mx-auto text-center relative z-10 mt-10">
        <h1 className="text-4xl md:text-6xl font-bold leading-tight mb-6 tracking-tight">
          ¿Cómo llevar tu institución educativa al{" "}
          <span className="bg-gradient-to-r from-orange-400 to-orange-600 bg-clip-text text-transparent">
            siguiente nivel?
          </span>
        </h1>

        <p className="text-white/60 text-lg max-w-3xl mx-auto leading-relaxed">
          En EducaInnova acompañamos a líderes educativos en su camino hacia la
          transformación digital. Diseñamos capacitaciones a medida que integran
          inteligencia artificial y responden a las realidades del sistema educativo.
        </p>

        <div className="mt-10">
          <Link href="/solicitar-capacitacion">
            <button className="bg-gradient-to-r from-orange-500 to-orange-600 text-white px-8 py-3 rounded-xl font-medium hover:scale-[1.02] transition shadow-[0_0_20px_rgba(249,115,22,0.2)]">
              Solicitar información
            </button>
          </Link>
        </div>
      </section>

      {/* 🔥 AUTORIDAD / DIFERENCIACIÓN */}
      <section className="max-w-4xl mx-auto mt-32 text-center bg-white/5 border border-white/10 p-8 md:p-12 rounded-3xl backdrop-blur-md relative z-10">
        <h2 className="text-2xl md:text-3xl font-bold mb-4 tracking-tight">
          Entendemos el sistema educativo desde dentro
        </h2>
        <p className="text-white/60 max-w-2xl mx-auto text-sm md:text-base leading-relaxed">
          Desde la normativa vigente hasta la convivencia escolar, conocemos los
          desafíos reales de las instituciones chilenas. Por eso nuestras capacitaciones no
          son genéricas: están estrictamente adaptadas para generar impacto concreto.
        </p>
      </section>

      {/* 🔥 TARJETAS DE CAPACITACIONES */}
      <section className="max-w-6xl mx-auto mt-32 relative z-10">
        <h2 className="text-3xl font-bold mb-12 text-center tracking-tight">
          Programas de Capacitación Experta
        </h2>

        <div className="grid md:grid-cols-3 gap-8">
          {capacitaciones.map((item, i) => (
            <div
              key={i}
              className="group relative bg-white/5 border border-white/10 rounded-2xl p-8 
              hover:border-orange-500/30 hover:bg-white/[0.07] transition duration-300 overflow-hidden flex flex-col justify-between"
            >
              {/* Efecto hover iluminado en esquina */}
              <div className="absolute top-0 right-0 w-24 h-24 bg-orange-500/10 rounded-full blur-2xl opacity-0 group-hover:opacity-100 transition duration-500" />

              <div>
                <div className="mb-6 bg-white/5 w-14 h-14 rounded-xl flex items-center justify-center border border-white/10 group-hover:border-orange-500/30 transition">
                  {item.icon}
                </div>

                <h3 className="text-xl font-semibold mb-3 group-hover:text-orange-400 transition">
                  {item.title}
                </h3>

                <p className="text-white/60 text-sm leading-relaxed">
                  {item.desc}
                </p>
              </div>

              <div className="mt-6 pt-4 border-t border-white/5 flex items-center gap-2 text-sm text-orange-400 font-medium opacity-80 group-hover:opacity-100 group-hover:translate-x-1 transition-all duration-300">
                <span>Conocer programa</span>
                <ArrowRight size={16} />
              </div>
            </div>
          ))}
        </div>
      </section>

      {/* 🔥 METODOLOGÍA */}
      <section className="max-w-6xl mx-auto mt-36 relative z-10">
        <h2 className="text-3xl font-bold mb-12 text-center tracking-tight">
          Nuestra Metodología de Trabajo
        </h2>

        <div className="grid md:grid-cols-3 gap-8 text-left">
          <div className="bg-white/[0.03] border border-white/5 p-8 rounded-2xl relative">
            <span className="absolute top-4 right-6 text-xs text-orange-500/40 font-mono font-bold">FASE 01</span>
            <h3 className="font-semibold text-lg mb-3 flex items-center gap-2">
              <CheckCircle2 className="text-orange-500 w-5 h-5 shrink-0" />
              Diagnóstico Inicial
            </h3>
            <p className="text-white/50 text-sm leading-relaxed">
              Analizamos a fondo la infraestructura digital y el nivel de competencia técnica actual de tu equipo docente.
            </p>
          </div>

          <div className="bg-white/[0.03] border border-white/5 p-8 rounded-2xl relative">
            <span className="absolute top-4 right-6 text-xs text-orange-500/40 font-mono font-bold">FASE 02</span>
            <h3 className="font-semibold text-lg mb-3 flex items-center gap-2">
              <CheckCircle2 className="text-orange-500 w-5 h-5 shrink-0" />
              Diseño a Medida
            </h3>
            <p className="text-white/50 text-sm leading-relaxed">
              Creamos la ruta de aprendizaje estructurando los contenidos basándonos estrictamente en los objetivos de tu institución.
            </p>
          </div>

          <div className="bg-white/[0.03] border border-white/5 p-8 rounded-2xl relative">
            <span className="absolute top-4 right-6 text-xs text-orange-500/40 font-mono font-bold">FASE 03</span>
            <h3 className="font-semibold text-lg mb-3 flex items-center gap-2">
              <CheckCircle2 className="text-orange-500 w-5 h-5 shrink-0" />
              Acompañamiento Práctico
            </h3>
            <p className="text-white/50 text-sm leading-relaxed">
              Ejecutamos talleres dinámicos con soporte continuo para asegurar que los conocimientos se apliquen en el día a día.
            </p>
          </div>
        </div>
      </section>

      {/* 🔥 CTA FINAL OPTIMIZADO (Mismo embudo limpio) */}
      <section className="max-w-4xl mx-auto mt-36 mb-12 text-center relative z-10 border-t border-white/10 pt-16">
        <h2 className="text-3xl font-bold mb-4 tracking-tight">
          ¿Listo para dar el gran paso?
        </h2>

        <p className="text-white/60 mb-8 max-w-lg mx-auto text-sm md:text-base">
          Conversemos y diseñemos una capacitación de alto impacto adaptada al presupuesto y plazos de tu institución.
        </p>

        <Link href="/solicitar-capacitacion">
          <button className="bg-gradient-to-r from-orange-500 to-orange-600 hover:scale-[1.02] px-8 py-4 rounded-xl font-medium transition text-base shadow-[0_0_20px_rgba(249,115,22,0.15)]">
            Comenzar transformación
          </button>
        </Link>
      </section>

    </main>
  )
}