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
          Nuestras Plataformas de  <br />
          <span className="text-orange-500">Innovación Educativa</span>
        </h2>

        <p className="text-gray-400 mt-6">
          Herramientas de alto impacto diseñadas para automatizar la
          gestión y potenciar la creatividad pedagógica. Tecnología chilena
          que devuelve el tiempo a quienes educa.
        </p>
      </div>

      {/* GRID */}
      <div className="flex flex-col gap-10">

        {/* EduPrompt*/}
        <SoftwareCard
          title="Edu Prompt"
          subtitle="Version 1.0"
          description="Potencia tu práctica docente con inteligencia artificial. Una herramienta profesional diseñada para el éxito del educador moderno."
          tags={[
            "IA para docentes",
            "Asistentes Virtuales",
            "Productividad Docente",
            "Innovación Educativa"
          ]}
          image="/EduPrompt/Login.png"
          href="/software/nexus"
        />

        {/* ERP + AI */}
        <div className="grid md:grid-cols-2 gap-10">

          <SoftwareCard
            title="Patrimonio Gob"
            subtitle=""
            description="Cero pérdidas, control total. 
            Cumple con los estándares estatales y mantén cada recurso de tu 
            escuela exactamente donde debe estar."
            tags={[
              "Gestión de Recursos",
              "Inventario Inteligente"
            ]}
            image="/PatrimonioGob/Login.png"
            href="/software/erp"
          />

          {/*<SoftwareCard
            title="SIAK"
            subtitle="Sistema Integral para aplicación de Ley Karin"
            description="Optimiza la gestión de la Ley 21.643. Respalda jurídicamente tus investigaciones de acoso y violencia laboral con total seguridad."
            tags={[
              "Gestión Ley Karin",
              "Espacios Seguros"
            ]}
            image="/prueba.svg"
            href="/software/ai"
          />*/}

        </div>

        {/* MOBILE */}
        {/*<SoftwareCard
          title="UTP Digital"
          subtitle="Mobile Companion"
          description="Micro-aprendizaje impulsado por IA para reforzar conocimiento desde cualquier lugar."
          tags={[
            "Offline Mode",
            "Voice Interaction",
            "Daily Learning"
          ]}
          image="/prueba.svg"
          href="/software/mobile"
        />*/}

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