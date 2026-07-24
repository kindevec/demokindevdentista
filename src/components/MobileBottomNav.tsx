import React from 'react';
import { Home, Sparkles, Users, Share2, PhoneCall } from 'lucide-react';
import { createWhatsAppLink, EMERGENCY_WA_MESSAGE } from '../data/clinicData';

interface MobileBottomNavProps {
  activeSection: string;
  setActiveSection: (section: string) => void;
  onOpenEmergency: () => void;
}

export const MobileBottomNav: React.FC<MobileBottomNavProps> = ({
  activeSection,
  setActiveSection,
  onOpenEmergency,
}) => {
  const handleNavClick = (sectionId: string) => {
    setActiveSection(sectionId);
    const element = document.getElementById(sectionId);
    if (element) {
      element.scrollIntoView({ behavior: 'smooth' });
    }
  };

  const navItems = [
    { id: 'inicio', label: 'Inicio', icon: Home },
    { id: 'especialidades', label: 'Servicios', icon: Sparkles },
    // Urgencias is in center (index 2)
    { id: 'nosotros', label: 'Nosotros', icon: Users },
    { id: 'contacto', label: 'Contacto', icon: Share2 },
  ];

  return (
    <nav className="lg:hidden fixed bottom-0 left-0 right-0 z-50 bg-white/95 backdrop-blur-xl border-t border-[#00BFFF]/20 shadow-[0_-4px_25px_rgba(0,90,156,0.1)] px-2 sm:px-6 pt-1.5 pb-2 pb-[calc(0.5rem+env(safe-area-inset-bottom,0px))] transition-all duration-300">
      <div className="w-full max-w-2xl mx-auto grid grid-cols-5 items-center justify-items-center relative">
        
        {/* 1. Inicio */}
        <button
          onClick={() => handleNavClick('inicio')}
          className={`w-full flex flex-col items-center justify-center min-h-[46px] py-1 px-1 rounded-2xl transition-all duration-200 relative ${
            activeSection === 'inicio'
              ? 'text-[#005A9C] font-bold bg-cyan-50/80 shadow-sm'
              : 'text-[#708090] hover:text-[#005A9C] hover:bg-slate-50/80'
          }`}
        >
          {activeSection === 'inicio' && (
            <span className="absolute -top-1.5 w-6 h-1 rounded-full bg-gradient-to-r from-[#005A9C] to-[#00BFFF]" />
          )}
          <Home className={`w-5 h-5 transition-transform duration-200 ${activeSection === 'inicio' ? 'scale-110 text-[#00BFFF]' : ''}`} />
          <span className="text-[10px] sm:text-[11px] leading-tight mt-0.5 truncate max-w-full">
            Inicio
          </span>
        </button>

        {/* 2. Servicios */}
        <button
          onClick={() => handleNavClick('especialidades')}
          className={`w-full flex flex-col items-center justify-center min-h-[46px] py-1 px-1 rounded-2xl transition-all duration-200 relative ${
            activeSection === 'especialidades'
              ? 'text-[#005A9C] font-bold bg-cyan-50/80 shadow-sm'
              : 'text-[#708090] hover:text-[#005A9C] hover:bg-slate-50/80'
          }`}
        >
          {activeSection === 'especialidades' && (
            <span className="absolute -top-1.5 w-6 h-1 rounded-full bg-gradient-to-r from-[#005A9C] to-[#00BFFF]" />
          )}
          <Sparkles className={`w-5 h-5 transition-transform duration-200 ${activeSection === 'especialidades' ? 'scale-110 text-[#00BFFF]' : ''}`} />
          <span className="text-[10px] sm:text-[11px] leading-tight mt-0.5 truncate max-w-full">
            Servicios
          </span>
        </button>

        {/* 3. URGENCIAS (Boton destacado y equilibrado en el CENTRO) */}
        <div className="w-full flex flex-col items-center justify-center -translate-y-3">
          <a
            href={createWhatsAppLink(EMERGENCY_WA_MESSAGE)}
            target="_blank"
            rel="noopener noreferrer"
            onClick={() => onOpenEmergency()}
            className="group flex flex-col items-center justify-center"
            title="Atención Dental de Urgencia 24/7"
          >
            {/* Elegant Round Floating Button */}
            <div className="w-12 h-12 rounded-full bg-gradient-to-tr from-red-600 via-rose-500 to-rose-600 border-2 border-white shadow-md shadow-red-500/30 flex items-center justify-center text-white active:scale-95 group-hover:scale-105 transition-all duration-200 relative">
              <PhoneCall className="w-5 h-5 text-white" />
              {/* Subtle status pulse dot */}
              <span className="absolute top-0.5 right-0.5 w-2.5 h-2.5 bg-emerald-400 border-2 border-white rounded-full animate-pulse" />
            </div>
            <span className="text-[9px] sm:text-[10px] font-black tracking-wider text-red-600 uppercase mt-0.5">
              Urgencias
            </span>
          </a>
        </div>

        {/* 4. Nosotros */}
        <button
          onClick={() => handleNavClick('nosotros')}
          className={`w-full flex flex-col items-center justify-center min-h-[46px] py-1 px-1 rounded-2xl transition-all duration-200 relative ${
            activeSection === 'nosotros'
              ? 'text-[#005A9C] font-bold bg-cyan-50/80 shadow-sm'
              : 'text-[#708090] hover:text-[#005A9C] hover:bg-slate-50/80'
          }`}
        >
          {activeSection === 'nosotros' && (
            <span className="absolute -top-1.5 w-6 h-1 rounded-full bg-gradient-to-r from-[#005A9C] to-[#00BFFF]" />
          )}
          <Users className={`w-5 h-5 transition-transform duration-200 ${activeSection === 'nosotros' ? 'scale-110 text-[#00BFFF]' : ''}`} />
          <span className="text-[10px] sm:text-[11px] leading-tight mt-0.5 truncate max-w-full">
            Nosotros
          </span>
        </button>

        {/* 5. Contacto */}
        <button
          onClick={() => handleNavClick('contacto')}
          className={`w-full flex flex-col items-center justify-center min-h-[46px] py-1 px-1 rounded-2xl transition-all duration-200 relative ${
            activeSection === 'contacto' || activeSection === 'casos-reales'
              ? 'text-[#005A9C] font-bold bg-cyan-50/80 shadow-sm'
              : 'text-[#708090] hover:text-[#005A9C] hover:bg-slate-50/80'
          }`}
        >
          {(activeSection === 'contacto' || activeSection === 'casos-reales') && (
            <span className="absolute -top-1.5 w-6 h-1 rounded-full bg-gradient-to-r from-[#005A9C] to-[#00BFFF]" />
          )}
          <Share2 className={`w-5 h-5 transition-transform duration-200 ${activeSection === 'contacto' || activeSection === 'casos-reales' ? 'scale-110 text-[#00BFFF]' : ''}`} />
          <span className="text-[10px] sm:text-[11px] leading-tight mt-0.5 truncate max-w-full">
            Contacto
          </span>
        </button>

      </div>
    </nav>
  );
};



