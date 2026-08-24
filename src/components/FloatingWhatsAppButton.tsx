import React, { useState } from 'react';
import { motion } from 'motion/react';
import { createWhatsAppLink, GENERAL_WA_MESSAGE } from '../data/clinicData';
import { ChevronLeft, X } from 'lucide-react';

export const FloatingWhatsAppButton: React.FC = () => {
  const [isHovered, setIsHovered] = useState(false);
  const [isDismissed, setIsDismissed] = useState(false);

  if (isDismissed) {
    return (
      <button
        onClick={() => setIsDismissed(false)}
        className="fixed right-0 top-1/2 -translate-y-1/2 z-50 bg-[#25D366] text-white p-2.5 rounded-l-2xl shadow-lg hover:pr-3.5 transition-all duration-300 active:scale-95"
        title="Mostrar WhatsApp"
        aria-label="Mostrar WhatsApp"
      >
        <ChevronLeft className="w-4 h-4 text-white" />
      </button>
    );
  }

  return (
    <div
      className="fixed right-0 top-1/2 -translate-y-1/2 z-50 flex items-center select-none"
      onMouseEnter={() => setIsHovered(true)}
      onMouseLeave={() => setIsHovered(false)}
    >
      {/* Floating Green Pill Docked to Side */}
      <motion.div
        initial={{ x: 30, opacity: 0 }}
        animate={{
          x: isHovered ? 0 : 6,
          opacity: 1,
        }}
        transition={{ type: 'spring', stiffness: 380, damping: 26 }}
        className="relative flex items-center"
      >
        <a
          href={createWhatsAppLink(GENERAL_WA_MESSAGE)}
          target="_blank"
          rel="noopener noreferrer"
          className={`relative flex items-center justify-center w-14 h-14 rounded-l-full bg-[#25D366] hover:bg-[#20bd5a] text-white shadow-2xl transition-all duration-300 border-y border-l border-white/20 group cursor-pointer ${
            isHovered
              ? 'shadow-[0_8px_30px_rgba(37,211,102,0.55)] scale-105 pr-2'
              : 'shadow-lg shadow-black/20'
          }`}
          title="Chatear por WhatsApp con Cielo Dental"
          aria-label="Chatear por WhatsApp con Cielo Dental"
        >
          {/* White WhatsApp SVG Icon */}
          <svg className="w-7 h-7 fill-white group-hover:scale-110 transition-transform duration-300" viewBox="0 0 24 24">
            <path d="M.057 24l1.687-6.163c-1.041-1.804-1.588-3.849-1.587-5.946.003-6.556 5.338-11.891 11.893-11.891 3.181.001 6.167 1.24 8.413 3.488 2.245 2.248 3.481 5.236 3.48 8.414-.003 6.557-5.338 11.892-11.893 11.892-1.99-.001-3.951-.5-5.688-1.448l-6.305 1.654zm6.597-3.807c1.676.995 3.276 1.591 5.392 1.592 5.448 0 9.886-4.434 9.889-9.885.002-5.462-4.415-9.89-9.881-9.892-5.452 0-9.887 4.434-9.889 9.884-.001 2.225.651 3.891 1.746 5.634l-.999 3.648 3.742-.981zm11.387-5.464c-.074-.124-.272-.198-.57-.347-.297-.149-1.758-.868-2.031-.967-.272-.099-.47-.149-.669.149-.198.297-.768.967-.941 1.165-.173.198-.347.223-.644.074-.297-.149-1.255-.462-2.39-1.475-.883-.788-1.48-1.761-1.653-2.059-.173-.297-.018-.458.13-.606.134-.133.297-.347.446-.521.151-.172.2-.296.3-.495.099-.198.05-.372-.025-.521-.075-.148-.669-1.611-.916-2.206-.242-.579-.487-.501-.669-.51l-.57-.01c-.198 0-.52.074-.792.372s-1.04 1.016-1.04 2.479 1.065 2.876 1.213 3.074c.149.198 2.095 3.2 5.076 4.487.709.306 1.263.489 1.694.626.712.226 1.36.194 1.872.118.571-.085 1.758-.719 2.006-1.413.248-.695.248-1.29.173-1.414z" />
          </svg>

          {/* Red Blinking Status Indicator Dot */}
          <span className="absolute top-1.5 right-1.5 w-3.5 h-3.5 bg-red-500 rounded-full border-2 border-white animate-ping" />
          <span className="absolute top-1.5 right-1.5 w-3.5 h-3.5 bg-red-500 rounded-full border-2 border-white shadow-xs" />
        </a>

        {/* Small dismiss button on hover */}
        {isHovered && (
          <button
            onClick={() => setIsDismissed(true)}
            className="absolute -left-3 top-1/2 -translate-y-1/2 w-5 h-5 rounded-full bg-slate-800/80 hover:bg-slate-900 text-white flex items-center justify-center text-[10px] shadow transition-colors"
            title="Ocultar botón de WhatsApp"
            aria-label="Ocultar botón de WhatsApp"
          >
            <X className="w-3 h-3 text-white" />
          </button>
        )}
      </motion.div>
    </div>
  );
};

export default FloatingWhatsAppButton;
