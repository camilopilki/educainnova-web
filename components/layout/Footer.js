import Image from "next/image"

export default function Footer() {
  return (
    <footer className="px-6 md:px-10 py-10 border-t border-[#1c1c1f] mt-10">

      {/* 🔥 NUEVA SECCIÓN: Logotipos de Alianzas (Alineados a la derecha) */}
      <div className="flex justify-center md:justify-end items-center gap-8 mb-10">
        
        {/* Logo MACOR ATE (Reutilizamos la imagen del Navbar) */}


        {/* Sello circular REGISTRO ATE */}
        {/* IMPORTANTE: Asegúrate de tener esta imagen en tu carpeta 'public' */}
        <Image 
          src="/Sello_ATE.svg" /* <--- Cambia este nombre por el archivo real de tu sello */
          alt="Sello Registro ATE" 
          width={90} 
          height={90} 
          className="w-auto h-[70px] md:h-[90px] object-contain" 
        />
        
      </div>

      {/* ⬇️ BARRA INFERIOR ORIGINAL ⬇️ */}
      <div className="flex flex-col md:flex-row justify-between items-center gap-4 text-sm text-gray-500 pt-6 border-t border-[#1c1c1f]/50">

        {/* Marca */}
        <div className="font-semibold text-white">
          educa<span className="text-orange-500">Innova</span>
        </div>

        {/* Links */}
        <div className="flex gap-6">
          <a href="#" className="hover:text-white transition">Privacy Policy</a>
          <a href="#" className="hover:text-white transition">Terms</a>
          <a href="#" className="hover:text-white transition">Contact</a>
        </div>

        {/* Copy */}
        <div>
          © 2026 EducaInnova
        </div>

      </div>

    </footer>
  )
}