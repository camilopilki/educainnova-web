export default function ContactInfo() {
  return (
    <div className="mt-10 space-y-6 text-sm text-gray-300">

      {/* Dirección */}
      <div className="flex items-start gap-3">
        <div className="bg-[#1c1c1f] p-2 rounded-lg">
          📍
        </div>
        <div>
          <p className="text-white font-medium">Sede Central</p>
          <p className="text-gray-400">
            Paseo de la Innovación 45, Distrito Tecnológico, 28001
          </p>
        </div>
      </div>

      {/* Email */}
      <div className="flex items-start gap-3">
        <div className="bg-[#1c1c1f] p-2 rounded-lg">
          ✉️
        </div>
        <div>
          <p className="text-white font-medium">Escríbenos</p>
          <p className="text-gray-400">hola@educainnova.ai</p>
          <p className="text-gray-400">proyectos@educainnova.ai</p>
        </div>
      </div>

      {/* Teléfono */}
      <div className="flex items-start gap-3">
        <div className="bg-[#1c1c1f] p-2 rounded-lg">
          📞
        </div>
        <div>
          <p className="text-white font-medium">Llámanos</p>
          <p className="text-gray-400">+34 912 345 678</p>
        </div>
      </div>

    </div>
  )
}