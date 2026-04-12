"use client"

import Link from "next/link"
import Image from "next/image"
import { usePathname } from "next/navigation"
import { motion } from "framer-motion"

const links = [
  { name: "Home", href: "/" },
  { name: "Software", href: "/software" },
  { name: "Capacitaciones", href: "/capacitaciones" }, // 🔥 NUEVO
  { name: "Quienes Somos", href: "/manifesto" },
]

export default function Navbar() {
  const pathname = usePathname()

  return (
    <nav className="fixed top-0 w-full z-50 bg-[#0B0B0D]/80 backdrop-blur-xl border-b border-white/5">
      
      <div className="flex items-center justify-between px-6 md:px-10 py-4">

        {/* 🔥 LOGO */}
        <Link href="/" className="flex items-center">
          <div className="relative flex items-center justify-center">

            {/* Glow */}
            <div className="absolute w-[120px] h-[40px] bg-orange-500/20 blur-3xl rounded-full opacity-70"></div>

            {/* Imagen */}
            <Image
              src="/Logonavbar.svg"
              alt="EducAInnova Logo"
              width={140}
              height={40}
              className="relative object-contain bg-transparent hover:scale-105 transition"
            />
            
          </div>
        </Link>

        {/* 🔗 LINKS */}
        <div className="flex gap-8 md:gap-10 relative">
          {links.map((link) => {
            const isActive =
              pathname === link.href ||
              (link.href !== "/" && pathname.startsWith(link.href))

            return (
              <Link
                key={link.href}
                href={link.href}
                className="relative text-sm font-medium"
              >
                <span
                  className={`transition ${
                    isActive
                      ? "text-white"
                      : "text-gray-400 hover:text-white"
                  }`}
                >
                  {link.name}
                </span>

                {/* 🔥 Línea animada */}
                {isActive && (
                  <motion.div
                    layoutId="navbar-indicator"
                    className="absolute -bottom-2 left-0 right-0 h-[2px] bg-orange-500 rounded-full"
                    transition={{
                      type: "spring",
                      stiffness: 400,
                      damping: 30,
                    }}
                  />
                )}
              </Link>
            )
          })}
        </div>

      </div>
    </nav>
  )
}