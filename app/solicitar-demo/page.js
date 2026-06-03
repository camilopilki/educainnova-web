"use client"
import { useSearchParams } from 'next/navigation'
import { useState, Suspense } from 'react'

const inputClasses = "w-full bg-black/40 border border-white/10 rounded-xl px-4 py-3.5 text-white placeholder-gray-600 focus:border-orange-500 focus:ring-1 focus:ring-orange-500 transition-all outline-none";
const labelClasses = "block text-xs font-semibold text-gray-400 uppercase tracking-widest mb-2 ml-1";

// Opciones disponibles mapeadas
const opcionesSoftware = [
  { value: "Nuestra Suite", label: "Nuestra Suite (Completa)" },
  { value: "Edu Prompt", label: "Edu Prompt" },
  { value: "Patrimonio Gob", label: "Patrimonio Gob" },
  { value: "SIAK", label: "SIAK (Ley Karin)" },
];

function FormularioDemo() {
  const searchParams = useSearchParams()
  const softwareInicial = searchParams.get('software') || 'Nuestra Suite'
  
  const [formData, setFormData] = useState({
    nombre: '',
    email: '',
    colegio: '',
    software: softwareInicial 
  })

  const [isDropdownOpen, setIsDropdownOpen] = useState(false)
  
  // NUEVO: Estado para manejar la carga y los mensajes de éxito/error
  const [estadoEnvio, setEstadoEnvio] = useState('idle') 

  // NUEVO: Función conectada a tu backend
  const handleSubmit = async (e) => {
    e.preventDefault();
    setEstadoEnvio('loading');

    try {
      const response = await fetch('/api/enviar-demo', {
        method: 'POST',
        headers: { 'Content-Type': 'application/json' },
        body: JSON.stringify(formData),
      });

      if (response.ok) {
        setEstadoEnvio('success');
        // Vaciamos los campos visualmente tras el éxito
        setFormData({ ...formData, nombre: '', email: '', colegio: '' });
      } else {
        setEstadoEnvio('error');
      }
    } catch (error) {
      console.error("Error en la petición:", error);
      setEstadoEnvio('error');
    }
  }

  const softwareSeleccionadoLabel = opcionesSoftware.find(opt => opt.value === formData.software)?.label || "Selecciona una opción";

  return (
    <div className="relative bg-white/5 border border-white/10 p-8 md:p-10 rounded-3xl max-w-lg w-full backdrop-blur-xl shadow-2xl overflow-hidden">
      
      {/* Luces decorativas */}
      <div className="absolute -top-20 -right-20 w-40 h-40 bg-orange-500/20 rounded-full blur-3xl pointer-events-none"></div>
      <div className="absolute -bottom-20 -left-20 w-40 h-40 bg-orange-600/10 rounded-full blur-3xl pointer-events-none"></div>

      <div className="text-center mb-10 relative z-10">
        <h2 className="text-3xl text-white font-bold mb-3 tracking-tight">Solicitar <span className="text-orange-500">Demo</span></h2>
        <p className="text-gray-400 text-sm">Déjanos tus datos y un especialista en tecnología educativa te contactará a la brevedad.</p>
      </div>
      
      <form onSubmit={handleSubmit} className="flex flex-col gap-6 relative z-10">
        
        {/* SELECTOR PERSONALIZADO */}
        <div>
          <label className={labelClasses}>Plataforma de Interés</label>
          <div className="relative">
            <div 
              onClick={() => setIsDropdownOpen(!isDropdownOpen)}
              className={`${inputClasses} flex items-center justify-between cursor-pointer`}
            >
              <span className="text-white truncate">{softwareSeleccionadoLabel}</span>
              <svg 
                className={`h-4 w-4 text-gray-400 transition-transform duration-300 ${isDropdownOpen ? 'rotate-180' : ''}`} 
                xmlns="http://www.w3.org/2000/svg" viewBox="0 0 20 20" fill="currentColor"
              >
                <path fillRule="evenodd" d="M5.293 7.293a1 1 0 011.414 0L10 10.586l3.293-3.293a1 1 0 111.414 1.414l-4 4a1 1 0 01-1.414 0l-4-4a1 1 0 010-1.414z" clipRule="evenodd" />
              </svg>
            </div>

            {isDropdownOpen && (
              <>
                <div className="fixed inset-0 z-40" onClick={() => setIsDropdownOpen(false)}></div>
                <div className="absolute z-50 w-full mt-2 bg-[#1a1a1a]/95 border border-white/10 rounded-xl shadow-2xl backdrop-blur-xl overflow-hidden py-1">
                  {opcionesSoftware.map((opcion) => (
                    <div 
                      key={opcion.value}
                      onClick={() => {
                        setFormData({...formData, software: opcion.value});
                        setIsDropdownOpen(false);
                      }}
                      className={`px-4 py-3 text-sm cursor-pointer transition-colors ${
                        formData.software === opcion.value 
                          ? 'bg-orange-500/20 text-orange-500 font-medium' 
                          : 'text-gray-300 hover:bg-white/5 hover:text-white'
                      }`}
                    >
                      {opcion.label}
                    </div>
                  ))}
                </div>
              </>
            )}
          </div>
        </div>

        {/* Inputs */}
        <div>
          <label className={labelClasses}>Nombre Completo</label>
          <input type="text" placeholder="Ej. Juan Pérez" className={inputClasses} value={formData.nombre} onChange={(e) => setFormData({...formData, nombre: e.target.value})} required />
        </div>
        <div>
          <label className={labelClasses}>Correo Institucional</label>
          <input type="email" placeholder="contacto@institucion.cl" className={inputClasses} value={formData.email} onChange={(e) => setFormData({...formData, email: e.target.value})} required />
        </div>
        <div>
          <label className={labelClasses}>Institución Educativa</label>
          <input type="text" placeholder="Ej. Liceo Bicentenario" className={inputClasses} value={formData.colegio} onChange={(e) => setFormData({...formData, colegio: e.target.value})} required />
        </div>

        {/* BOTÓN DINÁMICO */}
        <div className="mt-2">
          <button 
            type="submit" 
            disabled={estadoEnvio === 'loading' || estadoEnvio === 'success'}
            className="w-full bg-gradient-to-r from-orange-500 to-orange-600 hover:from-orange-600 hover:to-orange-700 text-white font-semibold py-4 rounded-xl transition-all transform hover:scale-[1.02] active:scale-95 shadow-lg shadow-orange-500/25 disabled:opacity-70 disabled:cursor-not-allowed disabled:transform-none"
          >
            {estadoEnvio === 'loading' ? 'Enviando solicitud...' : 
             estadoEnvio === 'success' ? '¡Solicitud Enviada!' : 
             'Agendar Demostración'}
          </button>

          {estadoEnvio === 'success' && (
            <p className="text-green-400 text-sm text-center mt-4 font-medium animate-fade-in">
              ¡Gracias! Nos contactaremos contigo pronto.
            </p>
          )}
          {estadoEnvio === 'error' && (
            <p className="text-red-400 text-sm text-center mt-4 font-medium animate-fade-in">
              Hubo un error al enviar. Por favor, revisa tu conexión e intenta de nuevo.
            </p>
          )}
        </div>
      </form>
    </div>
  )
}

export default function SolicitarDemo() {
  return (
    <div className="min-h-screen flex items-center justify-center p-4 bg-[#0a0a0a] bg-[radial-gradient(ellipse_at_center,_var(--tw-gradient-stops))] from-gray-900 via-[#0a0a0a] to-black">
      <Suspense fallback={<div className="text-orange-500 font-bold animate-pulse">Cargando interfaz...</div>}>
        <FormularioDemo />
      </Suspense>
    </div>
  )
}