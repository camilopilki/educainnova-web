"use client"
import { useState } from "react"
import { Send } from "lucide-react"

export default function NewsletterCTA() {
  const [email, setEmail] = useState("")
  const [estado, setEstado] = useState("idle") // idle, loading, success

  const handleSubmit = async (e) => {
    e.preventDefault()
    setEstado("loading")
    
    // Aquí irá la conexión a tu backend más adelante usando Nodemailer
    setTimeout(() => setEstado("success"), 1500) 
  }

  return (
    <section className="w-full py-12 px-4 flex justify-center">
      <div className="max-w-4xl w-full bg-[#111]/80 backdrop-blur-md border border-white/10 rounded-2xl p-8 md:p-10 flex flex-col md:flex-row items-center justify-between gap-8 shadow-2xl relative overflow-hidden">
        
        {/* Glow sutil de fondo */}
        <div className="absolute -top-24 -left-24 w-48 h-48 bg-orange-500/20 rounded-full blur-[80px] pointer-events-none" />

        {/* Textos */}
        <div className="flex-1 text-center md:text-left z-10">
          <h3 className="text-2xl font-bold text-white mb-2">Mantente a la vanguardia</h3>
          <p className="text-gray-400 text-sm">
            Suscríbete a nuestro boletín y recibe los mejores insights sobre Inteligencia Artificial en la educación.
          </p>
        </div>

        {/* Formulario */}
        <form onSubmit={handleSubmit} className="flex-1 w-full max-w-md flex flex-col sm:flex-row gap-3 z-10">
          <input
            type="email"
            required
            placeholder="Tu correo electrónico..."
            className="flex-1 bg-black/50 border border-white/10 rounded-xl px-4 py-3 text-white text-sm focus:outline-none focus:border-orange-500 transition-colors"
            value={email}
            onChange={(e) => setEmail(e.target.value)}
            disabled={estado !== "idle"}
          />
          <button
            type="submit"
            disabled={estado !== "idle"}
            className="bg-gradient-to-r from-orange-500 to-orange-600 text-white font-medium px-6 py-3 rounded-xl hover:scale-[1.02] transition-all shadow-[0_0_15px_rgba(249,115,22,0.2)] flex items-center justify-center gap-2 disabled:opacity-50 disabled:hover:scale-100"
          >
            {estado === "idle" && (
              <>
                <span>Suscribirme</span>
                <Send size={16} />
              </>
            )}
            {estado === "loading" && "Procesando..."}
            {estado === "success" && "¡Suscrito!"}
          </button>
        </form>
      </div>
    </section>
  )
}