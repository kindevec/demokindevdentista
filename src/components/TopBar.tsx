import React from 'react';
import { Phone, Mail, Clock, MapPin, MessageSquare } from 'lucide-react';
import { CLINIC_PHONE_DISPLAY, CLINIC_EMAIL, CLINIC_HOURS, createWhatsAppLink, GENERAL_WA_MESSAGE } from '../data/clinicData';

export const TopBar: React.FC = () => {
  return (
    <div className="bg-[#005A9C] text-white text-xs py-2 px-4 border-b border-cyan-500/20 hidden md:block">
      <div className="max-w-7xl mx-auto flex flex-wrap items-center justify-between gap-4">
        {/* Left items: Phone, Email, Hours */}
        <div className="flex items-center space-x-6">
          <a
            href={`tel:${CLINIC_PHONE_DISPLAY.replace(/\s+/g, '')}`}
            className="flex items-center gap-1.5 hover:text-[#00BFFF] transition-colors group"
            title="Llamar directamente a recepción"
          >
            <Phone className="w-3.5 h-3.5 text-[#00BFFF] group-hover:scale-110 transition-transform" />
            <span className="font-medium">{CLINIC_PHONE_DISPLAY}</span>
          </a>

          <a
            href={`mailto:${CLINIC_EMAIL}`}
            className="flex items-center gap-1.5 hover:text-[#00BFFF] transition-colors group"
            title="Enviar un correo electrónico"
          >
            <Mail className="w-3.5 h-3.5 text-[#00BFFF] group-hover:scale-110 transition-transform" />
            <span>{CLINIC_EMAIL}</span>
          </a>

          <div className="flex items-center gap-1.5 text-cyan-100/90">
            <Clock className="w-3.5 h-3.5 text-[#00BFFF]" />
            <span>{CLINIC_HOURS}</span>
          </div>
        </div>

        {/* Right items: Location hint & WhatsApp direct badge */}
        <div className="flex items-center space-x-4">
          <div className="flex items-center gap-1 text-cyan-100/80 text-[11px]">
            <MapPin className="w-3 h-3 text-[#00BFFF]" />
            <span>Edificio Médico Cielo, Piso 3</span>
          </div>

          <a
            href={createWhatsAppLink(GENERAL_WA_MESSAGE)}
            target="_blank"
            rel="noopener noreferrer"
            className="bg-[#00BFFF] hover:bg-cyan-300 text-[#005A9C] font-semibold px-2.5 py-0.5 rounded-full flex items-center gap-1 transition-all duration-200 hover:shadow-sm"
          >
            <MessageSquare className="w-3 h-3" />
            <span>Chat 24/7</span>
          </a>
        </div>
      </div>
    </div>
  );
};
