import SoftwareCard from "@/components/ui/SoftwareCard"

export default function SoftwareSection() {
  return (
    <section className="px-6 md:px-12 py-24 bg-black text-white">

      {/* TITULO */}
      <div className="text-center max-w-3xl mx-auto mb-20">
        <p className="text-xs tracking-widest text-orange-500 mb-3">
          NUESTRA SUITE
        </p>

        <h2 className="text-4xl md:text-5xl font-bold leading-tight">
          Nuestra Suite de <br />
          <span className="text-orange-500">Innovación Educativa</span>
        </h2>

        <p className="text-gray-400 mt-6">
          Ingeniería de software diseñada para transformar el aprendizaje
          mediante inteligencia artificial y experiencias modernas.
        </p>
      </div>

      {/* GRID */}
      <div className="flex flex-col gap-10">

        {/* LMS */}
        <SoftwareCard
          title="Nexus Academy LMS"
          subtitle="Cloud LMS Platform"
          description="Infraestructura de aprendizaje omnicanal que integra IA para personalización en tiempo real."
          tags={[
            "Adaptive Pathways",
            "Predictive Analytics",
            "Social Learning",
            "Blockchain Certs"
          ]}
          image="/prueba.svg"
          href="/software/nexus"
        />

        {/* ERP + AI */}
        <div className="grid md:grid-cols-2 gap-10">

          <SoftwareCard
            title="Insight ERP Educativo"
            subtitle="Core Operations"
            description="Gestión administrativa completa con analítica predictiva para instituciones."
            tags={[
              "Smart Scheduling",
              "Financial Intelligence"
            ]}
            image="/prueba.svg"
            href="/software/erp"
          />

          <SoftwareCard
            title="Genius Tutor AI"
            subtitle="Personalized Learning"
            description="Tutor inteligente 24/7 que guía el aprendizaje mediante IA conversacional."
            tags={[
              "Cognitive Tracking",
              "Adaptive Feedback"
            ]}
            image="/prueba.svg"
            href="/software/ai"
          />

        </div>

        {/* MOBILE */}
        <SoftwareCard
          title="Aura Pocket Learner"
          subtitle="Mobile Companion"
          description="Micro-aprendizaje impulsado por IA para reforzar conocimiento desde cualquier lugar."
          tags={[
            "Offline Mode",
            "Voice Interaction",
            "Daily Learning"
          ]}
          image="/prueba.svg"
          href="/software/mobile"
        />

      </div>

      {/* CTA FINAL */}
      <div className="mt-24 text-center">
        <div className="bg-gradient-to-r from-[#111] to-[#1a1a1a] border border-white/10 rounded-2xl p-10">

          <h3 className="text-3xl font-semibold">
            ¿Listo para <span className="text-orange-500">transformar</span> tu institución?
          </h3>

          <p className="text-gray-400 mt-4">
            Implementa nuestra arquitectura educativa inteligente hoy.
          </p>

          <div className="flex justify-center gap-4 mt-8">
            <button className="bg-orange-500 hover:bg-orange-600 px-6 py-3 rounded-xl font-medium">
              Solicitar Demo
            </button>

            <button className="border border-white/20 hover:bg-white/10 px-6 py-3 rounded-xl">
              Contactar Ventas
            </button>
          </div>

        </div>
      </div>

    </section>
  )
}