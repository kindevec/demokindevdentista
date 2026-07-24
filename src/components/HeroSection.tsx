import React from 'react';
import { motion } from 'motion/react';
import { Calendar, AlertTriangle, ShieldCheck, Sparkles, Clock, CheckCircle2, PhoneCall } from 'lucide-react';
import { createWhatsAppLink, GENERAL_WA_MESSAGE, EMERGENCY_WA_MESSAGE, CLINIC_PHONE_DISPLAY } from '../data/clinicData';

interface HeroSectionProps {
  onOpenBooking: () => void;
  onOpenEmergency: () => void;
}

export const HeroSection: React.FC<HeroSectionProps> = ({ onOpenBooking, onOpenEmergency }) => {
  return (
    <section
      id="inicio"
      className="relative overflow-hidden bg-[radial-gradient(ellipse_at_top,_var(--tw-gradient-stops))] from-cyan-100/60 via-[#FDFDFD] to-[#FDFDFD] pt-8 pb-16 md:pt-16 md:pb-24"
    >
      {/* Decorative ambient background elements */}
      <div className="absolute top-10 left-1/2 -translate-x-1/2 w-96 h-96 bg-[#00BFFF]/10 rounded-full blur-3xl pointer-events-none" />
      <div className="absolute top-40 -right-20 w-80 h-80 bg-[#005A9C]/10 rounded-full blur-3xl pointer-events-none" />

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 items-center">
          
          {/* Left Text & Actions Column */}
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6 }}
            className="lg:col-span-7 space-y-6 text-center lg:text-left"
          >
            {/* Top Pill Tag */}
            <div className="inline-flex items-center gap-2 px-4 py-1.5 rounded-full bg-cyan-100/70 border border-[#00BFFF]/30 text-[#005A9C] text-xs font-bold uppercase tracking-wider shadow-sm">
              <Sparkles className="w-4 h-4 text-[#00BFFF]" />
              <span>Odontología Digital & Atención Empática</span>
            </div>

            {/* H1 Headline */}
            <h1 className="text-3xl sm:text-4xl md:text-5xl lg:text-6xl font-extrabold text-[#005A9C] tracking-tight leading-[1.15]">
              Tecnología avanzada para{' '}
              <span className="text-transparent bg-clip-text bg-gradient-to-r from-[#005A9C] via-[#00BFFF] to-[#005A9C]">
                sonrisas perfectas
              </span>
            </h1>

            {/* Subtitle */}
            <p className="text-base sm:text-lg text-[#708090] max-w-2xl mx-auto lg:mx-0 font-normal leading-relaxed">
              En <strong className="text-[#005A9C] font-semibold">Cielo Dental</strong> combinamos escáneres 3D de alta precisión, diagnósticos guiados por computadora y un trato cálido y humano para brindarte tratamientos indoloros en un entorno relajante.
            </p>

            {/* Feature Highlights Grid */}
            <div className="grid grid-cols-2 sm:grid-cols-3 gap-3 pt-2 max-w-xl mx-auto lg:mx-0">
              <div className="flex items-center gap-2 p-2.5 rounded-xl bg-white/70 backdrop-blur-md border border-[#00BFFF]/15 shadow-sm">
                <CheckCircle2 className="w-4 h-4 text-[#00BFFF] shrink-0" />
                <span className="text-xs font-semibold text-[#005A9C]">Scanner Intraoral 3D</span>
              </div>
              <div className="flex items-center gap-2 p-2.5 rounded-xl bg-white/70 backdrop-blur-md border border-[#00BFFF]/15 shadow-sm">
                <CheckCircle2 className="w-4 h-4 text-[#00BFFF] shrink-0" />
                <span className="text-xs font-semibold text-[#005A9C]">Anestesia Computarizada</span>
              </div>
              <div className="flex items-center gap-2 p-2.5 rounded-xl bg-white/70 backdrop-blur-md border border-[#00BFFF]/15 shadow-sm col-span-2 sm:col-span-1">
                <CheckCircle2 className="w-4 h-4 text-[#00BFFF] shrink-0" />
                <span className="text-xs font-semibold text-[#005A9C]">Garantía por Escrito</span>
              </div>
            </div>

            {/* Dual Action Buttons */}
            <div className="flex flex-col sm:flex-row items-center justify-center lg:justify-start gap-4 pt-4">
              {/* Primary Solid Button: Agendar Cita */}
              <button
                onClick={onOpenBooking}
                className="w-full sm:w-auto px-8 py-4 rounded-full bg-[#005A9C] hover:bg-[#00477b] text-white font-bold text-sm uppercase tracking-wider transition-all duration-300 shadow-lg shadow-[#005A9C]/25 hover:shadow-xl hover:scale-[1.02] flex items-center justify-center gap-2.5 group"
              >
                <Calendar className="w-5 h-5 text-[#00BFFF] group-hover:scale-110 transition-transform" />
                <span>Agendar Cita</span>
              </button>

              {/* Secondary Red Outline Button: Servicios de Urgencia */}
              <a
                href={createWhatsAppLink(EMERGENCY_WA_MESSAGE)}
                target="_blank"
                rel="noopener noreferrer"
                onClick={onOpenEmergency}
                className="w-full sm:w-auto px-7 py-3.5 rounded-full border-2 border-red-500 text-red-600 hover:bg-red-50 font-bold text-sm uppercase tracking-wider transition-all duration-300 shadow-sm flex items-center justify-center gap-2 group hover:border-red-600"
              >
                <AlertTriangle className="w-5 h-5 text-red-500 group-hover:scale-110 transition-transform animate-pulse" />
                <span>Servicios de Urgencia</span>
              </a>
            </div>

            {/* Direct Phone Call Link Context */}
            <div className="pt-2 flex items-center justify-center lg:justify-start gap-2 text-xs text-[#708090]">
              <Clock className="w-3.5 h-3.5 text-[#00BFFF]" />
              <span>¿Prefieres llamar? Atención directa al</span>
              <a
                href={`tel:${CLINIC_PHONE_DISPLAY.replace(/\s+/g, '')}`}
                className="font-bold text-[#005A9C] underline hover:text-[#00BFFF]"
              >
                {CLINIC_PHONE_DISPLAY}
              </a>
            </div>
          </motion.div>

          {/* Right Image & Floating Visual Cards */}
          <motion.div
            initial={{ opacity: 0, scale: 0.95 }}
            animate={{ opacity: 1, scale: 1 }}
            transition={{ duration: 0.7, delay: 0.2 }}
            className="lg:col-span-5 relative"
          >
            {/* Main Clinical Doctor Image Container */}
            <div className="relative mx-auto max-w-md lg:max-w-none rounded-3xl overflow-hidden shadow-2xl border-4 border-white bg-gradient-to-br from-cyan-50 to-blue-50 group">
              <img
                src="https://images.unsplash.com/photo-1629909613654-28e377c37b09?q=80&w=1000&auto=format&fit=crop"
                alt="Profesional dental sonriendo en entorno clínico"
                referrerPolicy="no-referrer"
                className="w-full h-[420px] sm:h-[480px] object-cover object-top transition-transform duration-700 group-hover:scale-105"
              />

              {/* Gradient Overlay bottom */}
              <div className="absolute inset-0 bg-gradient-to-t from-[#005A9C]/70 via-transparent to-transparent opacity-60" />

              {/* Bottom Caption inside Image */}
              <div className="absolute bottom-4 left-4 right-4 text-white p-3 rounded-2xl bg-black/30 backdrop-blur-md border border-white/20">
                <p className="text-xs font-bold flex items-center gap-1.5">
                  <ShieldCheck className="w-4 h-4 text-[#00BFFF]" />
                  Dr. Carlos Mendoza & Equipo Medico
                </p>
                <p className="text-[11px] text-cyan-100 opacity-90">
                  Especialistas certificados en implantología y estética digital.
                </p>
              </div>
            </div>

            {/* Floating Card 1: 100% Sin Dolor */}
            <motion.div
              initial={{ y: 20, opacity: 0 }}
              animate={{ y: 0, opacity: 1 }}
              transition={{ delay: 0.5, duration: 0.5 }}
              className="absolute -top-4 -left-4 sm:-left-6 bg-white/80 backdrop-blur-md p-3 sm:p-4 rounded-2xl shadow-xl border border-[#00BFFF]/20 hidden sm:flex items-center gap-3 z-20"
            >
              <div className="w-10 h-10 rounded-xl bg-cyan-100/70 text-[#005A9C] flex items-center justify-center font-bold text-lg">
                <Sparkles className="w-5 h-5 text-[#005A9C]" />
              </div>
              <div>
                <p className="text-xs font-bold text-[#005A9C]">Tratamiento 100% Indoloro</p>
                <p className="text-[10px] text-[#708090]">Anestesia guiada por ordenador</p>
              </div>
            </motion.div>

            {/* Floating Card 2: Satisfacción Garantizada */}
            <motion.div
              initial={{ y: -20, opacity: 0 }}
              animate={{ y: 0, opacity: 1 }}
              transition={{ delay: 0.6, duration: 0.5 }}
              className="absolute -bottom-6 -right-2 sm:-right-4 bg-white/80 backdrop-blur-md p-3.5 rounded-2xl shadow-xl border border-[#00BFFF]/20 flex items-center gap-3 z-20"
            >
              <div className="p-2.5 rounded-xl bg-[#005A9C] text-[#00BFFF]">
                <PhoneCall className="w-5 h-5" />
              </div>
              <div>
                <p className="text-xs font-bold text-[#005A9C]">Citas Inmediatas</p>
                <p className="text-[10px] text-[#708090]">Respuesta por WhatsApp &lt; 5 min</p>
              </div>
            </motion.div>
          </motion.div>

        </div>
      </div>
    </section>
  );
};
