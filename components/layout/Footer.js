export default function Footer() {
  return (
    <footer className="px-10 py-10 border-t border-[#1c1c1f] mt-10">

      <div className="flex flex-col md:flex-row justify-between items-center gap-4 text-sm text-gray-500">

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