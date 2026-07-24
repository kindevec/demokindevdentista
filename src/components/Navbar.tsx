import React, { useState, useEffect } from 'react';
import { Logo } from './Logo';
import { ChevronDown, UserCheck, Sparkles, ShieldCheck, Smile, HeartHandshake, Activity } from 'lucide-react';
import { SPECIALTIES_DATA } from '../data/clinicData';

interface NavbarProps {
  activeSection: string;
  setActiveSection: (section: string) => void;
  onOpenPortal: () => void;
  onOpenBooking: () => void;
}

export const Navbar: React.FC<NavbarProps> = ({
  activeSection,
  setActiveSection,
  onOpenPortal,
  onOpenBooking,
}) => {
  const [isScrolled, setIsScrolled] = useState(false);
  const [isDropdownOpen, setIsDropdownOpen] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      if (window.scrollY > 20) {
        setIsScrolled(true);
      } else {
        setIsScrolled(false);
      }
    };
    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  const handleNavClick = (sectionId: string) => {
    setActiveSection(sectionId);
    setIsDropdownOpen(false);
    const element = document.getElementById(sectionId);
    if (element) {
      element.scrollIntoView({ behavior: 'smooth' });
    }
  };

  const specialtyIconsMap: Record<string, React.ReactNode> = {
    Sparkles: <Sparkles className="w-4 h-4 text-[#00BFFF]" />,
    ShieldCheck: <ShieldCheck className="w-4 h-4 text-[#00BFFF]" />,
    Smile: <Smile className="w-4 h-4 text-[#00BFFF]" />,
    HeartHandshake: <HeartHandshake className="w-4 h-4 text-[#00BFFF]" />,
    Activity: <Activity className="w-4 h-4 text-[#00BFFF]" />,
  };

  return (
    <header
      className={`sticky top-0 z-40 transition-all duration-300 ${
        isScrolled
          ? 'bg-white/70 backdrop-blur-md shadow-lg shadow-cyan-900/5 border-b border-[#00BFFF]/15 py-3'
          : 'bg-white/80 backdrop-blur-md border-b border-[#00BFFF]/10 py-4'
      }`}
    >
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 flex items-center justify-between">
        {/* Logo */}
        <div onClick={() => handleNavClick('inicio')}>
          <Logo size="md" />
        </div>

        {/* Desktop Navigation Links (5 Sections) */}
        <nav className="hidden lg:flex items-center space-x-1 xl:space-x-2">
          {/* Section 1: Inicio */}
          <button
            onClick={() => handleNavClick('inicio')}
            className={`px-3 py-2 rounded-xl text-sm font-semibold transition-all duration-200 ${
              activeSection === 'inicio'
                ? 'text-[#005A9C] bg-cyan-50'
                : 'text-[#708090] hover:text-[#005A9C] hover:bg-slate-50'
            }`}
          >
            Inicio
          </button>

          {/* Section 2: Especialidades (With Dropdown) */}
          <div
            className="relative"
            onMouseEnter={() => setIsDropdownOpen(true)}
            onMouseLeave={() => setIsDropdownOpen(false)}
          >
            <button
              onClick={() => handleNavClick('especialidades')}
              className={`px-3 py-2 rounded-xl text-sm font-semibold flex items-center gap-1.5 transition-all duration-200 ${
                activeSection === 'especialidades'
                  ? 'text-[#005A9C] bg-cyan-50'
                  : 'text-[#708090] hover:text-[#005A9C] hover:bg-slate-50'
              }`}
            >
              <span>Especialidades</span>
              <ChevronDown
                className={`w-4 h-4 transition-transform duration-200 ${
                  isDropdownOpen ? 'rotate-180 text-[#00BFFF]' : ''
                }`}
              />
            </button>

            {/* Dropdown Menu */}
            {isDropdownOpen && (
              <div className="absolute top-full left-0 w-80 bg-white rounded-2xl shadow-2xl border border-cyan-100 p-3 mt-1 grid gap-1.5 z-50 animate-in fade-in slide-in-from-top-2 duration-200">
                <div className="px-3 py-1.5 border-b border-slate-100 mb-1">
                  <p className="text-xs font-bold text-[#005A9C] uppercase tracking-wider">
                    Especialidades Odontológicas
                  </p>
                  <p className="text-[11px] text-[#708090]">Odontología digital & atención empática</p>
                </div>
                {SPECIALTIES_DATA.map((spec) => (
                  <button
                    key={spec.id}
                    onClick={() => handleNavClick('especialidades')}
                    className="flex items-start gap-3 p-2.5 rounded-xl hover:bg-cyan-50/70 transition-colors text-left group"
                  >
                    <div className="p-2 rounded-lg bg-cyan-100/50 group-hover:bg-[#00BFFF] group-hover:text-white transition-colors">
                      {specialtyIconsMap[spec.iconName]}
                    </div>
                    <div>
                      <p className="text-xs font-bold text-[#005A9C] group-hover:text-[#00BFFF] transition-colors">
                        {spec.title}
                      </p>
                      <p className="text-[11px] text-[#708090] line-clamp-1">{spec.shortDesc}</p>
                    </div>
                  </button>
                ))}
              </div>
            )}
          </div>

          {/* Section 3: Nosotros */}
          <button
            onClick={() => handleNavClick('nosotros')}
            className={`px-3 py-2 rounded-xl text-sm font-semibold transition-all duration-200 ${
              activeSection === 'nosotros'
                ? 'text-[#005A9C] bg-cyan-50'
                : 'text-[#708090] hover:text-[#005A9C] hover:bg-slate-50'
            }`}
          >
            Nosotros
          </button>

          {/* Section 4: Casos Reales */}
          <button
            onClick={() => handleNavClick('casos-reales')}
            className={`px-3 py-2 rounded-xl text-sm font-semibold transition-all duration-200 ${
              activeSection === 'casos-reales'
                ? 'text-[#005A9C] bg-cyan-50'
                : 'text-[#708090] hover:text-[#005A9C] hover:bg-slate-50'
            }`}
          >
            Casos Reales
          </button>

          {/* Section 5: Redes & Contacto */}
          <button
            onClick={() => handleNavClick('contacto')}
            className={`px-3 py-2 rounded-xl text-sm font-semibold transition-all duration-200 ${
              activeSection === 'contacto'
                ? 'text-[#005A9C] bg-cyan-50'
                : 'text-[#708090] hover:text-[#005A9C] hover:bg-slate-50'
            }`}
          >
            Redes & Contacto
          </button>
        </nav>

        {/* Action Buttons Right (Desktop) */}
        <div className="hidden sm:flex items-center space-x-3">
          <button
            onClick={onOpenPortal}
            className="px-5 py-2.5 rounded-full border-2 border-[#005A9C] text-[#005A9C] hover:bg-[#005A9C] hover:text-white font-bold text-xs uppercase tracking-wider transition-all duration-200 shadow-sm hover:shadow-md flex items-center gap-2 group"
          >
            <UserCheck className="w-4 h-4 text-[#00BFFF] group-hover:text-white transition-colors" />
            <span>Portal del Paciente</span>
          </button>

          <button
            onClick={onOpenBooking}
            className="px-5 py-2.5 rounded-full bg-gradient-to-r from-[#005A9C] to-[#00BFFF] hover:from-[#004a82] hover:to-[#00a3da] text-white font-bold text-xs uppercase tracking-wider transition-all duration-200 shadow-md shadow-cyan-500/20 hover:scale-[1.02]"
          >
            Agendar Cita
          </button>
        </div>

        {/* Mobile Right Quick Action Buttons */}
        <div className="flex lg:hidden items-center space-x-2">
          <button
            onClick={onOpenPortal}
            className="px-3 py-1.5 rounded-full border border-[#005A9C]/40 text-[#005A9C] font-semibold text-xs flex items-center gap-1 hover:bg-[#005A9C] hover:text-white transition-all"
          >
            <UserCheck className="w-3.5 h-3.5 text-[#00BFFF]" />
            <span>Portal</span>
          </button>

          <button
            onClick={onOpenBooking}
            className="px-3 py-1.5 rounded-full bg-gradient-to-r from-[#005A9C] to-[#00BFFF] text-white font-bold text-xs transition-all shadow-sm active:scale-95"
          >
            Agendar
          </button>
        </div>
      </div>
    </header>
  );
};
