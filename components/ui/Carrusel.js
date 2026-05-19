"use client"; // Obligatorio para Framer Motion y useState

import { useState } from "react";
import Image from "next/image";
import { motion, AnimatePresence } from "framer-motion";

// 🔥 1. IMPORTAMOS LOS NUEVOS ICONOS (limpios y vectoriales)
import { ChevronLeft, ChevronRight } from "lucide-react";

export default function Carousel({ images }) {
  const [currentIndex, setCurrentIndex] = useState(0);

  const nextSlide = () => {
    setCurrentIndex((prev) => (prev + 1 === images.length ? 0 : prev + 1));
  };

  const prevSlide = () => {
    setCurrentIndex((prev) => (prev === 0 ? images.length - 1 : prev - 1));
  };

  if (!images || images.length === 0) return null;

  return (
    <div className="relative w-full aspect-video rounded-2xl overflow-hidden group bg-[#0a0a0a] border border-white/10">
      
      {/* 🖼️ Animación de las imágenes (Mismo código anterior) */}
      <AnimatePresence mode="wait">
        <motion.div
          key={currentIndex}
          initial={{ opacity: 0, x: 20 }}
          animate={{ opacity: 1, x: 0 }}
          exit={{ opacity: 0, x: -20 }}
          transition={{ duration: 0.3 }}
          className="relative w-full h-full"
        >
          <Image
            src={images[currentIndex]}
            alt={`Captura de pantalla ${currentIndex + 1}`}
            fill
            className="object-cover"
          />
        </motion.div>
      </AnimatePresence>

      {/* 🎮 Controles del Carrusel (Solo si hay más de 1 imagen) */}
      {images.length > 1 && (
        <>
          {/* Botón Anterior */}
          <button
            onClick={prevSlide}
            // 🔥 2. NUEVO DISEÑO DEL BOTÓN:
            // - Semi-transparente blanco con ligero desenfoque (glassmorphism)
            // - Borde sutil
            // - Hover a color naranja corporativo
            className="absolute left-4 top-1/2 -translate-y-1/2 bg-white/10 hover:bg-orange-500/20 backdrop-blur-sm border border-white/10 text-white w-12 h-12 flex items-center justify-center rounded-full opacity-0 group-hover:opacity-100 transition-all z-10 hover:scale-105 shadow-xl"
          >
            {/* 🔥 3. REEMPLAZAMOS "◀" CON ICONO VECTORIAL */}
            <ChevronLeft size={28} strokeWidth={1.5} className="mr-0.5" />
          </button>

          {/* Botón Siguiente */}
          <button
            onClick={nextSlide}
            className="absolute right-4 top-1/2 -translate-y-1/2 bg-white/10 hover:bg-orange-500/20 backdrop-blur-sm border border-white/10 text-white w-12 h-12 flex items-center justify-center rounded-full opacity-0 group-hover:opacity-100 transition-all z-10 hover:scale-105 shadow-xl"
          >
            {/* 🔥 3. REEMPLAZAMOS "▶" CON ICONO VECTORIAL */}
            <ChevronRight size={28} strokeWidth={1.5} className="ml-0.5" />
          </button>

          {/* Indicadores Inferiores (Puntitos - Mismo código anterior) */}
          <div className="absolute bottom-4 left-1/2 -translate-x-1/2 flex gap-2.5 z-10 bg-black/50 p-2 rounded-full backdrop-blur-sm border border-white/10">
            {images.map((_, index) => (
              <button
                key={index}
                onClick={() => setCurrentIndex(index)}
                className={`h-2.5 rounded-full transition-all duration-300 ${
                  index === currentIndex 
                    ? "w-8 bg-orange-500" // Naranja corporativo
                    : "w-2.5 bg-white/40 hover:bg-white/80"
                }`}
              />
            ))}
          </div>
        </>
      )}
    </div>
  );
}