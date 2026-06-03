"use client"
import { useState } from "react"
import { ChevronDown } from "lucide-react"

export default function CapacitacionForm() {
  const [formData, setFormData] = useState({
    nombre: "",
    email: "",
    colegio: "",
    publico: "Equipo Directivo"
  })
  
  const [isOpen, setIsOpen] = useState(false)
  const [estadoEnvio, setEstadoEnvio] = useState("idle") // idle, loading, success, error

  const opcionesPublico = [
    "Equipo Directivo",
    "Docentes",
    "Administrativos",
    "Todo el personal"
  ]

  const handleSubmit = async (e) => {
    e.preventDefault()
    setEstadoEnvio("loading")

    try {
      const response = await fetch('/api/enviar-capacitacion', {
        method: 'POST',
        headers: { 'Content-Type': 'application/json' },
        body: JSON.stringify(formData),
      })

      if (response.ok) {
        setEstadoEnvio("success")
      } else {
        setEstadoEnvio("error")
      }
    } catch (error) {
      setEstadoEnvio("error")
    }
  }

  return (
    <main className="min-h-screen bg-black text-white flex items-center justify-center p-4">
      <div className="max-w-md w-full bg-white/5 backdrop-blur-xl border border-white/10 p-8 rounded-2xl shadow-2xl relative overflow-hidden">
        
        {/* Glow de fondo */}
        <div className="absolute -top-20 -right-20 w-64 h-64 bg-orange-500/20 rounded-full blur-[80px] pointer-events-none" />
        <div className="absolute -bottom-20 -left-20 w-64 h-64 bg-orange-500/10 rounded-full blur-[80px] pointer-events-none" />

        <div className="relative z-10">
          <h1 className="text-3xl font-bold mb-2">Lleva tu institución al siguiente nivel</h1>
          <p className="text-gray-400 text-sm mb-8">Déjanos tus datos y diseñaremos una capacitación de IA que genere impacto real.</p>

          <form onSubmit={handleSubmit} className="space-y-5">
            
            {/* Selector Personalizado */}
            <div className="relative">
              <label className="text-xs text-gray-400 uppercase tracking-wider mb-1 block">¿A quién va dirigida?</label>
              <div 
                onClick={() => setIsOpen(!isOpen)}
                className="w-full bg-black/40 border border-white/10 rounded-xl px-4 py-3 text-white flex justify-between items-center cursor-pointer hover:border-orange-500/50 transition"
              >
                <span>{formData.publico}</span>
                <ChevronDown className={`w-5 h-5 text-gray-400 transition-transform ${isOpen ? "rotate-180" : ""}`} />
              </div>
              
              {isOpen && (
                <div className="absolute z-50 w-full mt-2 bg-[#1a1a1a]/95 backdrop-blur-xl border border-white/10 rounded-xl overflow-hidden shadow-xl">
                  {opcionesPublico.map((opcion) => (
                    <div
                      key={opcion}
                      onClick={() => {
                        setFormData({ ...formData, publico: opcion })
                        setIsOpen(false)
                      }}
                      className="px-4 py-3 hover:bg-orange-500/20 cursor-pointer transition text-sm"
                    >
                      {opcion}
                    </div>
                  ))}
                </div>
              )}
            </div>

            <div>
              <label className="text-xs text-gray-400 uppercase tracking-wider mb-1 block">Nombre Completo</label>
              <input
                type="text"
                required
                className="w-full bg-black/40 border border-white/10 rounded-xl px-4 py-3 text-white focus:outline-none focus:border-orange-500 transition"
                onChange={(e) => setFormData({...formData, nombre: e.target.value})}
              />
            </div>

            <div>
              <label className="text-xs text-gray-400 uppercase tracking-wider mb-1 block">Correo Institucional</label>
              <input
                type="email"
                required
                className="w-full bg-black/40 border border-white/10 rounded-xl px-4 py-3 text-white focus:outline-none focus:border-orange-500 transition"
                onChange={(e) => setFormData({...formData, email: e.target.value})}
              />
            </div>

            <div>
              <label className="text-xs text-gray-400 uppercase tracking-wider mb-1 block">Institución Educativa</label>
              <input
                type="text"
                required
                className="w-full bg-black/40 border border-white/10 rounded-xl px-4 py-3 text-white focus:outline-none focus:border-orange-500 transition"
                onChange={(e) => setFormData({...formData, colegio: e.target.value})}
              />
            </div>

            <button
              type="submit"
              disabled={estadoEnvio === "loading" || estadoEnvio === "success"}
              className="w-full bg-gradient-to-r from-orange-500 to-orange-600 text-white font-medium py-3 rounded-xl hover:scale-[1.02] transition shadow-[0_0_20px_rgba(249,115,22,0.25)] disabled:opacity-50 disabled:hover:scale-100 mt-4"
            >
              {estadoEnvio === "idle" && "Solicitar Información"}
              {estadoEnvio === "loading" && "Enviando solicitud..."}
              {estadoEnvio === "success" && "¡Solicitud Enviada!"}
              {estadoEnvio === "error" && "Error, intenta nuevamente"}
            </button>
          </form>
        </div>
      </div>
    </main>
  )
}