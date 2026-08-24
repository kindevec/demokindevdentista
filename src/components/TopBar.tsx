import React, { useState } from 'react';
import { Globe, ChevronDown, X, ArrowRight, Phone } from 'lucide-react';
import { CLINIC_PHONE_DISPLAY } from '../data/clinicData';

export const TopBar: React.FC = () => {
  const [isVisible, setIsVisible] = useState(true);

  if (!isVisible) return null;

  const scrollToAbout = (e: React.MouseEvent) => {
    e.preventDefault();
    const element = document.getElementById('nosotros');
    if (element) {
      element.scrollIntoView({ behavior: 'smooth' });
    }
  };

  return (
    <div className="bg-[#081D34] text-slate-200 text-xs py-2 px-4 border-b border-cyan-900/40 relative z-50">
      <div className="max-w-7xl mx-auto flex items-center justify-between gap-4">
        {/* Left: Language selector */}
        <div className="flex items-center gap-2">
          <div className="flex items-center gap-1.5 px-2.5 py-0.5 rounded-md bg-white/10 text-cyan-200 hover:bg-white/15 cursor-pointer transition-colors text-[11px] font-medium">
            <Globe className="w-3.5 h-3.5 text-[#00BFFF]" />
            <span className="tracking-wide">ESPAÑOL</span>
            <ChevronDown className="w-3 h-3 text-cyan-300 opacity-75" />
          </div>
        </div>

        {/* Center: Main Announcement text with Read More link */}
        <div className="flex-1 text-center hidden sm:flex items-center justify-center gap-2 text-[11px] md:text-xs">
          <span className="text-slate-300">
            Atención de excelencia. Tecnología digital 3D y sonrisas saludables para toda la vida.
          </span>
          <a
            href="#nosotros"
            onClick={scrollToAbout}
            className="inline-flex items-center gap-1 text-[#00BFFF] hover:text-cyan-300 font-semibold underline underline-offset-2 transition-colors ml-1"
          >
            <span>Conoce más</span>
            <ArrowRight className="w-3 h-3" />
          </a>
        </div>

        {/* Right: Phone shortcut & Close banner button */}
        <div className="flex items-center gap-3">
          <a
            href={`tel:${CLINIC_PHONE_DISPLAY.replace(/\s+/g, '')}`}
            className="hidden md:flex items-center gap-1.5 text-cyan-300 hover:text-white transition-colors text-[11px] font-medium"
          >
            <Phone className="w-3 h-3 text-[#00BFFF]" />
            <span>{CLINIC_PHONE_DISPLAY}</span>
          </a>

          <button
            onClick={() => setIsVisible(false)}
            aria-label="Cerrar barra informativa"
            className="p-1 rounded hover:bg-white/10 text-slate-400 hover:text-white transition-colors cursor-pointer"
          >
            <X className="w-3.5 h-3.5" />
          </button>
        </div>
      </div>
    </div>
  );
};

