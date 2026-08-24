import React, { useState, useEffect } from 'react';
import { Logo } from './Logo';
import { ChevronDown, ArrowUpRight, UserCheck, Sparkles, ShieldCheck, Smile, HeartHandshake, Activity, Menu, X, PhoneCall } from 'lucide-react';
import { SPECIALTIES_DATA, CLINIC_PHONE_DISPLAY } from '../data/clinicData';
import { WaterNavLink } from './WaterNavLink';

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
  const [isSpecialtiesDropdownOpen, setIsSpecialtiesDropdownOpen] = useState(false);
  const [mousePos, setMousePos] = useState({ x: 0, y: 0 });
  const [isHeaderHovered, setIsHeaderHovered] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      setIsScrolled(window.scrollY > 20);
    };

    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  const handleHeaderMouseMove = (e: React.MouseEvent<HTMLElement>) => {
    const rect = e.currentTarget.getBoundingClientRect();
    setMousePos({
      x: e.clientX - rect.left,
      y: e.clientY - rect.top,
    });
  };

  const handleNavClick = (sectionId: string) => {
    setActiveSection(sectionId);
    const element = document.getElementById(sectionId);
    if (element) {
      const headerOffset = 68;
      const elementPosition = element.getBoundingClientRect().top;
      const currentScroll = window.scrollY || window.pageYOffset || document.documentElement.scrollTop || 0;
      const targetTop = sectionId === 'inicio' ? 0 : Math.max(0, elementPosition + currentScroll - headerOffset);

      window.scrollTo({
        top: targetTop,
        behavior: 'smooth',
      });
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
      onMouseMove={handleHeaderMouseMove}
      onMouseEnter={() => setIsHeaderHovered(true)}
      onMouseLeave={() => setIsHeaderHovered(false)}
      className={`sticky top-0 z-50 transition-all duration-300 relative ${
        isScrolled
          ? 'bg-white shadow-md shadow-slate-900/10 border-b border-slate-100'
          : isHeaderHovered
          ? 'border-b border-cyan-300 bg-gradient-to-r from-white/95 via-cyan-50/95 to-sky-50/95 shadow-lg shadow-cyan-500/20 backdrop-blur-2xl'
          : 'border-b border-cyan-200/60 bg-gradient-to-r from-white/85 via-cyan-50/85 to-sky-50/85 shadow-md shadow-cyan-900/10 backdrop-blur-2xl'
      }`}
    >
      {/* 1. Interactive Cursor Spotlight Halo Flare (Active when top/hovered) */}
      <div
        className="absolute inset-0 pointer-events-none transition-opacity duration-300 z-0"
        style={{
          opacity: isHeaderHovered && !isScrolled ? 1 : 0,
          background: `radial-gradient(420px circle at ${mousePos.x}px ${mousePos.y}px, rgba(0, 191, 255, 0.35), rgba(204, 242, 255, 0.25), transparent 70%)`,
        }}
      />

      {/* 2. Animated Vivid Aurora Color Glow Waves in Background (Fades out when scrolled) */}
      <div
        className={`absolute inset-0 pointer-events-none overflow-hidden transition-opacity duration-500 ${
          isScrolled ? 'opacity-0' : isHeaderHovered ? 'opacity-100' : 'opacity-85'
        }`}
      >
        {/* Left Glowing Cyan Orb */}
        <div className={`absolute -top-10 -left-10 w-96 h-36 rounded-full bg-[#00BFFF]/35 blur-2xl transition-all duration-500 ${isHeaderHovered ? 'scale-110 opacity-100' : 'animate-pulse opacity-70'}`} />
        {/* Right Glowing Royal Blue Orb */}
        <div className={`absolute -bottom-10 -right-10 w-96 h-36 rounded-full bg-[#005A9C]/30 blur-2xl transition-all duration-500 ${isHeaderHovered ? 'scale-110 opacity-100' : 'animate-pulse opacity-70'}`} />
        {/* Center Sweeping Aurora Shimmer Wave */}
        <div className="absolute inset-0 bg-gradient-to-r from-transparent via-[#00BFFF]/30 via-[#CCF2FF]/50 to-transparent animate-shimmer opacity-95" />
      </div>

      {/* 3. Vibrant Luminous Neon Laser Beam along bottom border (Visible at top) */}
      <div
        className={`absolute bottom-0 left-0 right-0 h-[3px] bg-gradient-to-r from-transparent via-cyan-300 via-[#00BFFF] via-[#005A9C] to-transparent animate-shimmer pointer-events-none transition-all duration-300 ${
          isScrolled
            ? 'opacity-0'
            : isHeaderHovered
            ? 'opacity-100 shadow-[0_0_24px_rgba(0,191,255,1)] h-[3.5px]'
            : 'opacity-85 shadow-[0_0_14px_rgba(0,191,255,0.7)]'
        }`}
      />

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative">
        <div className="flex items-center justify-between h-16 lg:h-[68px]">
          
          {/* 1. LEFT NAVIGATION LINKS (Desktop: Secciones 1, 2 y 3 con efecto agua direccional tipo FlowingMenu) */}
          <nav className="hidden lg:flex items-center space-x-2 xl:space-x-3 flex-1 justify-end pr-4 xl:pr-8">
            {/* Sección 1: Inicio */}
            <WaterNavLink
              label="Inicio"
              isActive={activeSection === 'inicio'}
              onClick={() => handleNavClick('inicio')}
              onMouseEnterExtra={() => handleNavClick('inicio')}
            />

            {/* Sección 2: Especialidades (con Dropdown y efecto agua) */}
            <div
              className="relative"
              onMouseEnter={() => {
                setIsSpecialtiesDropdownOpen(true);
                handleNavClick('especialidades');
              }}
              onMouseLeave={() => setIsSpecialtiesDropdownOpen(false)}
            >
              <WaterNavLink
                label="Especialidades"
                isActive={activeSection === 'especialidades'}
                onClick={() => handleNavClick('especialidades')}
                onMouseEnterExtra={() => {
                  setIsSpecialtiesDropdownOpen(true);
                  handleNavClick('especialidades');
                }}
                onMouseLeaveExtra={() => setIsSpecialtiesDropdownOpen(false)}
                extraRight={
                  <ChevronDown
                    className={`w-3.5 h-3.5 transition-transform duration-200 ${
                      isSpecialtiesDropdownOpen ? 'rotate-180 text-[#005A9C]' : 'text-slate-400'
                    }`}
                  />
                }
              />

              {/* Dropdown Menu */}
              {isSpecialtiesDropdownOpen && (
                <div className="absolute top-full left-0 w-72 bg-white rounded-2xl shadow-xl border border-slate-100 p-2 mt-1 z-50 animate-in fade-in slide-in-from-top-2 duration-200">
                  <div className="px-3 py-1.5 border-b border-slate-100 mb-1">
                    <p className="text-[11px] font-bold text-[#005A9C] uppercase tracking-wider">
                      Especialidades Odontológicas
                    </p>
                  </div>
                  <div className="space-y-0.5">
                    {SPECIALTIES_DATA.map((spec) => (
                      <button
                        key={spec.id}
                        onClick={() => handleNavClick('especialidades')}
                        className="w-full flex items-center gap-2.5 p-2 rounded-xl hover:bg-[#CCF2FF]/50 text-left transition-colors cursor-pointer group"
                      >
                        <div className="p-1.5 rounded-lg bg-cyan-100/70 text-[#005A9C] group-hover:bg-[#00BFFF] group-hover:text-white transition-colors shrink-0">
                          {specialtyIconsMap[spec.iconName]}
                        </div>
                        <span className="text-xs font-semibold text-slate-800 group-hover:text-[#005A9C] transition-colors">
                          {spec.title}
                        </span>
                      </button>
                    ))}
                  </div>
                </div>
              )}
            </div>

            {/* Sección 3: Nosotros */}
            <WaterNavLink
              label="Nosotros"
              isActive={activeSection === 'nosotros'}
              onClick={() => handleNavClick('nosotros')}
              onMouseEnterExtra={() => handleNavClick('nosotros')}
            />
          </nav>

          {/* 2. CENTER / LEFT LOGO (Desktop: centered in tab plaque. Mobile: left aligned) */}
          <div className="flex-1 lg:flex-none lg:w-64 xl:w-72 flex items-center justify-start lg:justify-center relative shrink-0 z-20 pl-1 sm:pl-2 lg:pl-0">
            {/* Solid White Tab Plaque SVG (desktop only) */}
            <div className="hidden lg:block absolute top-0 left-1/2 -translate-x-1/2 pointer-events-none z-0">
              <svg
                width="320"
                height="94"
                viewBox="0 0 320 94"
                fill="none"
                xmlns="http://www.w3.org/2000/svg"
                className="filter drop-shadow-[0_8px_18px_rgba(0,191,255,0.22)]"
              >
                <defs>
                  <linearGradient id="plaqueGrad" x1="0%" y1="0%" x2="100%" y2="100%">
                    <stop offset="0%" stopColor="#FFFFFF" stopOpacity="0.98" />
                    <stop offset="50%" stopColor="#F0F9FF" stopOpacity="0.96" />
                    <stop offset="100%" stopColor="#FFFFFF" stopOpacity="0.98" />
                  </linearGradient>
                </defs>
                <path
                  d="M 0 0 L 320 0 L 320 68 C 280 68, 265 94, 235 94 L 85 94 C 55 94, 40 68, 0 68 Z"
                  fill="url(#plaqueGrad)"
                  stroke="rgba(0, 191, 255, 0.35)"
                  strokeWidth="1.5"
                />
              </svg>
            </div>

            {/* Logo content */}
            <div
              onClick={() => handleNavClick('inicio')}
              className="cursor-pointer relative z-10 flex items-center justify-center pt-0.5 lg:pt-2 pb-0 transition-transform duration-300 hover:scale-105"
            >
              {/* Desktop: Vertical plaque logo */}
              <div className="hidden lg:block">
                <Logo size="md" layout="vertical" />
              </div>
              {/* Mobile: Horizontal logo on the right corner */}
              <div className="block lg:hidden">
                <Logo size="sm" layout="horizontal" />
              </div>
            </div>
          </div>

          {/* 3. RIGHT NAVIGATION LINKS (Desktop: Secciones 4 y 5 con efecto agua + Botones) */}
          <nav className="hidden lg:flex items-center space-x-2 xl:space-x-3 flex-1 justify-start pl-4 xl:pl-8">
            {/* Sección 4: Casos Reales */}
            <WaterNavLink
              label="Casos Reales"
              isActive={activeSection === 'casos-reales'}
              onClick={() => handleNavClick('casos-reales')}
              onMouseEnterExtra={() => handleNavClick('casos-reales')}
            />

            {/* Sección 5: Redes & Contacto */}
            <WaterNavLink
              label="Contacto"
              isActive={activeSection === 'contacto'}
              onClick={() => handleNavClick('contacto')}
              onMouseEnterExtra={() => handleNavClick('contacto')}
            />

            {/* Portal del Paciente Button */}
            <button
              onClick={onOpenPortal}
              className="px-4 py-2 rounded-2xl border border-[#005A9C]/25 hover:border-[#005A9C] text-[#005A9C] hover:bg-[#CCF2FF]/60 font-bold text-xs flex items-center gap-1.5 transition-all cursor-pointer group whitespace-nowrap shadow-xs hover:shadow-sm"
              title="Portal del Paciente"
            >
              <UserCheck className="w-3.5 h-3.5 text-[#00BFFF] group-hover:text-[#005A9C] transition-colors" />
              <span>Portal</span>
            </button>

            {/* Main CTA Button: Agendar Cita */}
            <button
              onClick={onOpenBooking}
              className="pl-4 pr-1.5 py-1.5 rounded-full bg-[#00BFFF] hover:bg-[#00a6de] text-white font-bold text-xs uppercase tracking-wider transition-all duration-300 shadow-md shadow-[#00BFFF]/25 hover:shadow-lg hover:scale-[1.02] flex items-center gap-2.5 cursor-pointer group whitespace-nowrap"
            >
              <span className="font-extrabold tracking-wide">Agendar Cita</span>
              <span className="w-6 h-6 rounded-full bg-white text-[#005A9C] flex items-center justify-center transition-transform duration-300 group-hover:rotate-45 shadow-sm">
                <ArrowUpRight className="w-3.5 h-3.5 text-[#005A9C]" />
              </span>
            </button>
          </nav>

          {/* Mobile Right Action Button: Agendar */}
          <div className="flex lg:hidden items-center">
            <button
              onClick={onOpenBooking}
              className="pl-3.5 pr-1.5 py-1 rounded-full bg-[#00BFFF] hover:bg-[#00a6de] text-white font-bold text-xs flex items-center gap-1.5 shadow-sm active:scale-95 transition-transform"
            >
              <span>Agendar</span>
              <span className="w-5 h-5 rounded-full bg-white text-[#005A9C] flex items-center justify-center">
                <ArrowUpRight className="w-3 h-3 text-[#005A9C]" />
              </span>
            </button>
          </div>

        </div>
      </div>
    </header>
  );
};



