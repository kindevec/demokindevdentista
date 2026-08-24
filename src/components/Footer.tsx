import React from 'react';
import { Logo } from './Logo';
import { CLINIC_PHONE_DISPLAY, CLINIC_EMAIL, CLINIC_ADDRESS, CLINIC_HOURS, createWhatsAppLink, GENERAL_WA_MESSAGE } from '../data/clinicData';
import { Phone, Mail, MapPin, Clock, ShieldCheck } from 'lucide-react';
import kindevIcon from '../assets/kindev_icon.webp';

export const Footer: React.FC = () => {
  // Official Facebook SVG
  const FacebookIcon = () => (
    <svg className="w-5 h-5 fill-[#1877F2]" viewBox="0 0 24 24">
      <path d="M24 12.073c0-6.627-5.373-12-12-12s-12 5.373-12 12c0 5.99 4.388 10.954 10.125 11.854v-8.385H7.078v-3.47h3.047V9.43c0-3.007 1.792-4.669 4.533-4.669 1.312 0 2.686.235 2.686.235v2.953H15.83c-1.491 0-1.956.925-1.956 1.874v2.25h3.328l-.532 3.47h-2.796v8.385C19.612 23.027 24 18.062 24 12.073z" />
    </svg>
  );

  // Official Instagram SVG
  const InstagramIcon = () => (
    <svg className="w-5 h-5" viewBox="0 0 24 24">
      <radialGradient id="footerIgGrad" cx="30%" cy="107%" r="130%">
        <stop offset="0%" stopColor="#fdf497" />
        <stop offset="5%" stopColor="#fdf497" />
        <stop offset="45%" stopColor="#fd5949" />
        <stop offset="60%" stopColor="#d6249f" />
        <stop offset="90%" stopColor="#285AEB" />
      </radialGradient>
      <path
        fill="url(#footerIgGrad)"
        d="M12 2.163c3.204 0 3.584.012 4.85.07 3.252.148 4.771 1.691 4.919 4.919.058 1.265.069 1.645.069 4.849 0 3.205-.012 3.584-.069 4.849-.149 3.225-1.664 4.771-4.919 4.919-1.266.058-1.644.07-4.85.07-3.204 0-3.584-.012-4.849-.07-3.26-.149-4.771-1.699-4.919-4.92-.058-1.265-.07-1.644-.07-4.849 0-3.204.013-3.583.07-4.849.149-3.227 1.664-4.771 4.919-4.919 1.266-.057 1.645-.069 4.849-.069zm0-2.163c-3.259 0-3.667.014-4.947.072-4.358.2-6.78 2.618-6.98 6.98-.059 1.281-.073 1.689-.073 4.948 0 3.259.014 3.668.072 4.948.2 4.358 2.618 6.78 6.98 6.98 1.281.058 1.689.072 4.948.072 3.259 0 3.668-.014 4.948-.072 4.354-.2 6.782-2.618 6.979-6.98.059-1.28.073-1.689.073-4.948 0-3.259-.014-3.667-.072-4.947-.196-4.354-2.617-6.78-6.979-6.98-1.281-.059-1.69-.073-4.949-.073zm0 5.838c-3.403 0-6.162 2.759-6.162 6.162s2.759 6.163 6.162 6.163 6.162-2.759 6.162-6.163c0-3.403-2.759-6.162-6.162-6.162zm0 10.162c-2.209 0-4-1.79-4-4 0-2.209 1.791-4 4-4s4 1.791 4 4c0 2.21-1.791 4-4 4zm6.406-11.845c-.796 0-1.441.645-1.441 1.44s.645 1.44 1.441 1.44c.795 0 1.439-.645 1.439-1.44s-.644-1.44-1.439-1.44z"
      />
    </svg>
  );

  // Official WhatsApp SVG
  const WhatsappIcon = () => (
    <svg className="w-5 h-5 fill-[#25D366]" viewBox="0 0 24 24">
      <path d="M.057 24l1.687-6.163c-1.041-1.804-1.588-3.849-1.587-5.946.003-6.556 5.338-11.891 11.893-11.891 3.181.001 6.167 1.24 8.413 3.488 2.245 2.248 3.481 5.236 3.48 8.414-.003 6.557-5.338 11.892-11.893 11.892-1.99-.001-3.951-.5-5.688-1.448l-6.305 1.654zm6.597-3.807c1.676.995 3.276 1.591 5.392 1.592 5.448 0 9.886-4.434 9.889-9.885.002-5.462-4.415-9.89-9.881-9.892-5.452 0-9.887 4.434-9.889 9.884-.001 2.225.651 3.891 1.746 5.634l-.999 3.648 3.742-.981zm11.387-5.464c-.074-.124-.272-.198-.57-.347-.297-.149-1.758-.868-2.031-.967-.272-.099-.47-.149-.669.149-.198.297-.768.967-.941 1.165-.173.198-.347.223-.644.074-.297-.149-1.255-.462-2.39-1.475-.883-.788-1.48-1.761-1.653-2.059-.173-.297-.018-.458.13-.606.134-.133.297-.347.446-.521.151-.172.2-.296.3-.495.099-.198.05-.372-.025-.521-.075-.148-.669-1.611-.916-2.206-.242-.579-.487-.501-.669-.51l-.57-.01c-.198 0-.52.074-.792.372s-1.04 1.016-1.04 2.479 1.065 2.876 1.213 3.074c.149.198 2.095 3.2 5.076 4.487.709.306 1.263.489 1.694.626.712.226 1.36.194 1.872.118.571-.085 1.758-.719 2.006-1.413.248-.695.248-1.29.173-1.414z" />
    </svg>
  );

  return (
    <footer className="bg-[#005A9C] text-white pt-16 pb-24 lg:pb-12 border-t border-cyan-500/20">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        
        {/* Top Footer Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-12 gap-10 pb-12 border-b border-cyan-500/30 items-start">
          
          {/* Col 1: Brand & Tagline */}
          <div className="lg:col-span-7 space-y-4">
            <div className="bg-white/95 p-3 rounded-2xl inline-block shadow-md">
              <Logo size="md" />
            </div>
            <p className="text-xs text-cyan-100/90 leading-relaxed max-w-md">
              Clínica odontológica de alta especialidad. Tecnología digital de vanguardia, ortodoncia invisible, implantes guiados 3D y atención humana transparente e indolora.
            </p>

            {/* REQUIRED FOOTER ICONS: Facebook, Instagram, WhatsApp */}
            <div className="pt-2">
              <p className="text-[11px] font-bold text-cyan-200 uppercase tracking-wider mb-2">
                Conéctate con Nosotros:
              </p>
              <div className="flex items-center space-x-3">
                {/* Facebook Icon */}
                <a
                  href="https://www.facebook.com/kindevec/"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="w-10 h-10 rounded-2xl bg-white/10 hover:bg-[#1877F2] text-white flex items-center justify-center transition-all duration-300 hover:scale-110 shadow-sm"
                  aria-label="Facebook"
                  title="Visitar Facebook"
                >
                  <FacebookIcon />
                </a>

                {/* Instagram Icon */}
                <a
                  href="https://www.instagram.com/kindevx/"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="w-10 h-10 rounded-2xl bg-white/10 hover:bg-gradient-to-tr hover:from-[#fdf497] hover:via-[#d6249f] hover:to-[#285AEB] text-white flex items-center justify-center transition-all duration-300 hover:scale-110 shadow-sm"
                  aria-label="Instagram"
                  title="Visitar Instagram"
                >
                  <InstagramIcon />
                </a>

                {/* WhatsApp Icon */}
                <a
                  href={createWhatsAppLink(GENERAL_WA_MESSAGE)}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="w-10 h-10 rounded-2xl bg-white/10 hover:bg-[#25D366] text-white flex items-center justify-center transition-all duration-300 hover:scale-110 shadow-sm"
                  aria-label="WhatsApp"
                  title={`WhatsApp ${CLINIC_PHONE_DISPLAY}`}
                >
                  <WhatsappIcon />
                </a>
              </div>
            </div>
          </div>

          {/* Col 2: Direct Contact Information */}
          <div className="lg:col-span-5 space-y-3">
            <h4 className="text-xs font-bold text-[#00BFFF] uppercase tracking-wider">
              Atención Directa al Paciente
            </h4>
            <div className="space-y-3 text-xs text-cyan-100/90">
              <div className="flex items-center gap-2.5">
                <Phone className="w-4 h-4 text-[#00BFFF] shrink-0" />
                <span className="font-bold text-white">{CLINIC_PHONE_DISPLAY}</span>
                <span className="text-[10px] text-cyan-200 bg-white/10 px-2 py-0.5 rounded-full">WhatsApp 24/7</span>
              </div>
              <div className="flex items-center gap-2.5">
                <Mail className="w-4 h-4 text-[#00BFFF] shrink-0" />
                <span>{CLINIC_EMAIL}</span>
              </div>
              <div className="flex items-start gap-2.5">
                <MapPin className="w-4 h-4 text-[#00BFFF] shrink-0 mt-0.5" />
                <span>{CLINIC_ADDRESS}</span>
              </div>
              <div className="flex items-center gap-2.5">
                <Clock className="w-4 h-4 text-[#00BFFF] shrink-0" />
                <span>{CLINIC_HOURS}</span>
              </div>
            </div>
          </div>

        </div>

        {/* Bottom Copyright & KINDEV Attribution Bar (Mirrors the 12-col grid for exact vertical alignment) */}
        <div className="pt-8 grid grid-cols-1 lg:grid-cols-12 gap-6 lg:gap-10 items-center text-xs text-cyan-200/80">
          <div className="lg:col-span-7 flex flex-col sm:flex-row items-center sm:items-start lg:items-center gap-2 sm:gap-6 text-center sm:text-left">
            <p>&copy; {new Date().getFullYear()} Cielo Dental. Todos los derechos reservados.</p>
            <div className="flex items-center gap-2 text-[11px] text-cyan-100/70">
              <ShieldCheck className="w-3.5 h-3.5 text-[#00BFFF]" />
              <span>Garantía Sanitaria Aprobada</span>
            </div>
          </div>

          {/* Logo y firma KINDEV: alineado exactamente en la misma línea vertical que Atención Directa */}
          <div className="lg:col-span-5 flex justify-center lg:justify-start">
            <a 
              href="https://kindevx.web.app/" 
              target="_blank" 
              rel="noopener noreferrer" 
              className="hover:text-white transition-all text-xs sm:text-sm flex items-center gap-2.5 group"
              title="Desarrollado por KINDEV"
              aria-label="Desarrollado por KINDEV"
            >
              {/* Logo de Colibrí KINDEV estático con efectos visuales de resplandor y hover */}
              <div className="relative inline-flex items-center justify-center flex-shrink-0 group/icon">
                {/* Halo de luz de fondo con efecto de respiración sutil */}
                <div className="absolute inset-0 rounded-full bg-gradient-to-r from-[#00E5FF]/30 to-[#00B0FF]/30 blur-md opacity-70 group-hover:opacity-100 group-hover:scale-125 transition-all duration-500 pointer-events-none"></div>
                
                <img 
                  src={kindevIcon} 
                  alt="KINDEV Logo" 
                  width="44" 
                  height="44" 
                  loading="lazy" 
                  decoding="async" 
                  className="relative z-10 w-9 h-9 sm:w-10 sm:h-10 object-contain drop-shadow-[0_2px_10px_rgba(0,229,255,0.45)] group-hover:drop-shadow-[0_4px_18px_rgba(0,229,255,0.85)] group-hover:scale-110 group-hover:-rotate-6 group-hover:brightness-110 transition-all duration-300 ease-out inline-block"
                />
              </div>
              <span className="text-xs sm:text-sm text-cyan-100/90 group-hover:text-white transition-colors">
                Desarrollado por{" "}
                <span className="font-extrabold text-[#00BFFF] drop-shadow-[0_0_8px_rgba(0,191,255,0.4)] group-hover:drop-shadow-[0_0_16px_rgba(0,191,255,0.95)] group-hover:brightness-125 group-hover:tracking-wider inline-block transition-all duration-300">
                  KINDEV
                </span>
              </span>
            </a>
          </div>
        </div>

      </div>
    </footer>
  );
};

