export default function Newsletter() {
  return (
    <section className="px-10 py-16">
      
      <div className="bg-[#151517] rounded-2xl p-8 flex flex-col md:flex-row justify-between items-center gap-6">
        
        {/* Texto */}
        <div>
          <h3 className="text-xl font-semibold">
            Stay ahead of the curve
          </h3>
          <p className="text-gray-400 text-sm mt-2">
            Suscríbete para recibir insights sobre IA en educación
          </p>
        </div>

        {/* Input */}
        <div className="flex gap-3 w-full md:w-auto">
          <input
            className="bg-[#1c1c1f] px-4 py-2 rounded-lg text-white w-full md:w-64"
            placeholder="Tu correo electrónico"
          />
          <button className="bg-white text-black px-4 rounded-lg font-medium">
            Suscribirme
          </button>
        </div>

      </div>

    </section>
  )
}