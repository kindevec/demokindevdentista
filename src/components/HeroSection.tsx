import React from 'react';
import { motion } from 'motion/react';
import { ArrowUpRight, Phone, MessageSquare, ChevronDown } from 'lucide-react';
import { createWhatsAppLink, CLINIC_PHONE_DISPLAY, GENERAL_WA_MESSAGE } from '../data/clinicData';

interface HeroSectionProps {
  onOpenBooking: () => void;
  onOpenEmergency: () => void;
}

export const HeroSection: React.FC<HeroSectionProps> = ({ onOpenBooking }) => {
  const scrollToNext = () => {
    const nextSection = document.getElementById('especialidades') || document.getElementById('nosotros');
    if (nextSection) {
      nextSection.scrollIntoView({ behavior: 'smooth' });
    }
  };

  return (
    <section id="inicio" className="relative w-full overflow-hidden bg-slate-950">
      {/* 1. Full-width Photographic Clinic Background */}
      <div className="absolute inset-0 z-0">
        <img
          src="https://images.unsplash.com/photo-1629909613654-28e377c37b09?q=85&w=2200&auto=format&fit=crop"
          alt="Especialistas de Cielo Dental atendiendo a paciente en quirófano moderno"
          className="w-full h-full object-cover object-center scale-105 animate-in fade-in duration-1000"
        />
        {/* Cinematic Gradient Overlays for optimal contrast and readability */}
        <div className="absolute inset-0 bg-gradient-to-t from-[#06182c]/90 via-[#071f3a]/65 to-[#081e36]/75" />
        <div className="absolute inset-0 bg-radial-gradient from-transparent via-[#05162a]/50 to-[#041122]/90" />
      </div>

      {/* Centered Content Container */}
      <div className="relative z-10 max-w-5xl mx-auto px-4 sm:px-6 lg:px-8 pt-20 pb-36 md:pt-28 md:pb-48 text-center">
        
        {/* Script Accent Subtitle */}
        <motion.div
          initial={{ opacity: 0, y: 15 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6 }}
          className="inline-flex items-center justify-center gap-2 mb-3"
        >
          <span className="font-script text-3xl sm:text-4xl md:text-5xl text-cyan-300 tracking-wide font-medium drop-shadow-sm">
            Cielo Dental
          </span>
        </motion.div>

        {/* Big Bold Headline */}
        <motion.h1
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.7, delay: 0.1 }}
          className="text-3xl sm:text-5xl md:text-6xl lg:text-7xl font-extrabold text-white tracking-tight leading-[1.1] uppercase drop-shadow-md"
        >
          Tu Sonrisa, Tu Bienestar,{' '}
          <span className="text-[#00BFFF] drop-shadow-[0_0_25px_rgba(0,191,255,0.4)]">
            Nuestra Prioridad
          </span>
        </motion.h1>

        {/* Clinic Description Paragraph */}
        <motion.p
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.7, delay: 0.2 }}
          className="text-sm sm:text-base md:text-lg text-slate-200/90 max-w-2xl mx-auto font-normal leading-relaxed mt-5 md:mt-6 drop-shadow"
        >
          En <strong className="text-white font-semibold">Cielo Dental</strong> creamos un espacio donde te sientes en confianza y en familia, combinando diagnósticos digitales 3D, ortodoncia invisible y tratamientos de máxima precisión sin dolor.
        </motion.p>

        {/* Dual Action CTA Buttons Row */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.7, delay: 0.3 }}
          className="flex flex-col sm:flex-row items-center justify-center gap-4 mt-8 md:mt-10"
        >
          {/* Primary CTA Button: Agendar Cita */}
          <button
            onClick={onOpenBooking}
            className="w-full sm:w-auto px-7 py-3 rounded-full bg-[#00BFFF] hover:bg-[#00a6de] text-white font-bold text-xs uppercase tracking-wider transition-all duration-300 shadow-xl shadow-cyan-500/25 hover:shadow-2xl hover:shadow-cyan-400/40 hover:scale-[1.03] flex items-center justify-center gap-2.5 group cursor-pointer"
          >
            <span className="w-7 h-7 rounded-full bg-white text-[#005A9C] flex items-center justify-center shadow-sm group-hover:scale-110 transition-transform shrink-0">
              <ArrowUpRight className="w-4 h-4 text-[#005A9C] transition-transform duration-300 group-hover:rotate-45" />
            </span>
            <span className="font-extrabold tracking-wide">Agendar Cita</span>
          </button>

          {/* Secondary CTA Button: WhatsApp Direct (Contáctanos) */}
          <a
            href={createWhatsAppLink("Hola Cielo Dental, me gustaría ponerme en contacto con ustedes para recibir información.")}
            target="_blank"
            rel="noopener noreferrer"
            className="w-full sm:w-auto px-7 py-3 rounded-full bg-white/10 hover:bg-white/20 backdrop-blur-md border border-white/25 text-white font-bold text-xs uppercase tracking-wider transition-all duration-300 hover:scale-[1.03] shadow-lg hover:shadow-cyan-500/20 flex items-center justify-center gap-2.5 group cursor-pointer"
          >
            <span className="w-7 h-7 rounded-full bg-[#25D366] text-white flex items-center justify-center shadow-sm group-hover:scale-110 transition-transform shrink-0">
              <svg className="w-4 h-4 fill-white" viewBox="0 0 24 24">
                <path d="M.057 24l1.687-6.163c-1.041-1.804-1.588-3.849-1.587-5.946.003-6.556 5.338-11.891 11.893-11.891 3.181.001 6.167 1.24 8.413 3.488 2.245 2.248 3.481 5.236 3.48 8.414-.003 6.557-5.338 11.892-11.893 11.892-1.99-.001-3.951-.5-5.688-1.448l-6.305 1.654zm6.597-3.807c1.676.995 3.276 1.591 5.392 1.592 5.448 0 9.886-4.434 9.889-9.885.002-5.462-4.415-9.89-9.881-9.892-5.452 0-9.887 4.434-9.889 9.884-.001 2.225.651 3.891 1.746 5.634l-.999 3.648 3.742-.981zm11.387-5.464c-.074-.124-.272-.198-.57-.347-.297-.149-1.758-.868-2.031-.967-.272-.099-.47-.149-.669.149-.198.297-.768.967-.941 1.165-.173.198-.347.223-.644.074-.297-.149-1.255-.462-2.39-1.475-.883-.788-1.48-1.761-1.653-2.059-.173-.297-.018-.458.13-.606.134-.133.297-.347.446-.521.151-.172.2-.296.3-.495.099-.198.05-.372-.025-.521-.075-.148-.669-1.611-.916-2.206-.242-.579-.487-.501-.669-.51l-.57-.01c-.198 0-.52.074-.792.372s-1.04 1.016-1.04 2.479 1.065 2.876 1.213 3.074c.149.198 2.095 3.2 5.076 4.487.709.306 1.263.489 1.694.626.712.226 1.36.194 1.872.118.571-.085 1.758-.719 2.006-1.413.248-.695.248-1.29.173-1.414z" />
              </svg>
            </span>
            <span className="font-extrabold tracking-wide">Contáctanos</span>
          </a>
        </motion.div>
      </div>

      {/* 4. Non-Square Organic Wave Ribbons & Rotating Scroll-Down Badge (Exact match to reference design) */}
      <div className="absolute -bottom-1 left-0 right-0 z-20 pointer-events-none w-full overflow-hidden leading-none">
        
        {/* Multi-Layer Organic Ribbon Wave SVG */}
        <svg
          viewBox="0 0 1440 200"
          fill="none"
          xmlns="http://www.w3.org/2000/svg"
          className="w-full h-28 sm:h-36 md:h-48 lg:h-56 block"
          preserveAspectRatio="none"
        >
          {/* Secondary Soft Mint / Light-Green Accent Ribbon (Right Side) */}
          <path
            d="M 660,110 C 890,165 1170,50 1440,65 L 1440,115 C 1170,100 890,215 660,160 Z"
            fill="#86EFAC"
            opacity="0.9"
          />

          {/* Primary Vibrant Turquoise / Cyan Ribbon (Full Width S-Curve) */}
          <path
            d="M 0,60 C 260,160 480,20 720,75 C 960,130 1180,10 1440,40 L 1440,90 C 1180,60 960,180 720,125 C 480,70 260,210 0,110 Z"
            fill="#00BFFF"
          />

          {/* Solid White / Page Background Base Wave */}
          <path
            d="M 0,90 C 260,190 480,50 720,105 C 960,160 1180,40 1440,70 L 1440,200 L 0,200 Z"
            fill="#FDFDFD"
          />
        </svg>

        {/* Interactive Scroll Down Circular Badge positioned in center of the wave */}
        <div className="absolute top-[52%] sm:top-[50%] left-1/2 -translate-x-1/2 -translate-y-1/2 pointer-events-auto z-30 flex flex-col items-center">
          
          {/* Animated Outer Pulse Halo */}
          <div className="relative flex items-center justify-center">
            <span className="absolute -inset-1 rounded-full bg-[#00BFFF]/30 animate-ping opacity-40 pointer-events-none" />
            <span className="absolute -inset-2 rounded-full bg-gradient-to-r from-[#00BFFF]/20 to-[#005A9C]/20 blur-sm animate-pulse pointer-events-none" />

            <button
              onClick={scrollToNext}
              aria-label="Desplazarse a la siguiente sección"
              className="group relative w-14 h-14 sm:w-16 sm:h-16 rounded-full bg-white/95 backdrop-blur-md border-2 border-cyan-200/90 shadow-xl shadow-cyan-900/25 flex items-center justify-center hover:scale-110 hover:border-[#00BFFF] hover:shadow-cyan-400/40 transition-all duration-300 cursor-pointer"
            >
              {/* Rotating Circular Text SVG in Spanish */}
              <svg
                viewBox="0 0 100 100"
                className="absolute inset-0 w-full h-full animate-[spin_12s_linear_infinite] group-hover:animate-[spin_5s_linear_infinite] pointer-events-none transition-all duration-500"
              >
                <path
                  id="heroScrollTextPath"
                  d="M 50, 50 m -37, 0 a 37,37 0 1,1 74,0 a 37,37 0 1,1 -74,0"
                  fill="none"
                />
                <text className="text-[8.5px] font-extrabold uppercase tracking-[2.6px] fill-[#005A9C] group-hover:fill-[#00BFFF] transition-colors">
                  <textPath href="#heroScrollTextPath" startOffset="0%">
                    • DESLIZAR ABAJO • EXPLORAR
                  </textPath>
                </text>
              </svg>

              {/* Inner Center Icon with Floating / Bouncing Animation */}
              <div className="w-6 h-6 rounded-full bg-cyan-50 text-[#005A9C] group-hover:bg-[#00BFFF] group-hover:text-white flex items-center justify-center transition-all duration-300 font-mono font-bold text-xs shadow-xs">
                <ChevronDown className="w-3.5 h-3.5 animate-bounce" />
              </div>
            </button>
          </div>

          {/* Vertical Guide Line with Target Dot at the Bottom */}
          <div className="flex flex-col items-center mt-1">
            <div className="w-[2px] h-10 sm:h-14 bg-gradient-to-b from-[#00BFFF] via-[#00BFFF]/70 to-[#00BFFF]/40 animate-pulse" />
            <div className="w-2.5 h-2.5 rounded-full border-2 border-[#00BFFF] bg-white shadow-sm animate-ping opacity-75" />
          </div>
        </div>

      </div>
    </section>
  );
};
