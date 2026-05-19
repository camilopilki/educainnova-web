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
            Ejercito #435, Concepción
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
          <p className="text-gray-400">contacto@educainnova.cl</p>
        </div>
      </div>

      {/* Teléfono */}
      <div className="flex items-start gap-3">
        <div className="bg-[#1c1c1f] p-2 rounded-lg">
          📞
        </div>
        <div>
          <p className="text-white font-medium">Llámanos</p>
          <p className="text-gray-400">+56 9 8439 3443 </p>
          <p className="text-gray-400">+56 9 4975 9760 </p>
        </div>
      </div>

    </div>
  )
}