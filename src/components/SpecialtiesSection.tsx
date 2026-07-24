import React, { useState } from 'react';
import { motion } from 'motion/react';
import { Sparkles, ShieldCheck, Smile, HeartHandshake, Activity, Check, ArrowRight, MessageCircle, Clock } from 'lucide-react';
import { SPECIALTIES_DATA, createWhatsAppLink } from '../data/clinicData';
import { Specialty } from '../types';

interface SpecialtiesSectionProps {
  onSelectSpecialtyForBooking: (specialtyId: string) => void;
}

export const SpecialtiesSection: React.FC<SpecialtiesSectionProps> = ({ onSelectSpecialtyForBooking }) => {
  const [selectedCategory, setSelectedCategory] = useState<string>('all');
  const [activeTabId, setActiveTabId] = useState<string>('ortodoncia');

  const specialtyIconsMap: Record<string, React.ReactNode> = {
    Sparkles: <Sparkles className="w-6 h-6 text-[#00BFFF]" />,
    ShieldCheck: <ShieldCheck className="w-6 h-6 text-[#00BFFF]" />,
    Smile: <Smile className="w-6 h-6 text-[#00BFFF]" />,
    HeartHandshake: <HeartHandshake className="w-6 h-6 text-[#00BFFF]" />,
    Activity: <Activity className="w-6 h-6 text-[#00BFFF]" />,
  };

  const activeSpecialty = SPECIALTIES_DATA.find((s) => s.id === activeTabId) || SPECIALTIES_DATA[0];

  return (
    <section id="especialidades" className="py-20 bg-[#FDFDFD] relative">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        
        {/* Header */}
        <div className="text-center max-w-3xl mx-auto mb-16 space-y-3">
          <span className="px-3.5 py-1 rounded-full bg-cyan-50 text-[#005A9C] border border-cyan-200 text-xs font-bold uppercase tracking-wider">
            Nuestras 5 Especialidades Odontológicas
          </span>
          <h2 className="text-3xl sm:text-4xl font-extrabold text-[#005A9C] tracking-tight">
            Tratamientos modernos diseñados para tu salud y estética
          </h2>
          <p className="text-sm sm:text-base text-[#708090]">
            Utilizamos tecnología 3D libre de dolor, materiales biocompatibles de la más alta calidad y protocolos de esterilización hospitalaria.
          </p>
        </div>

        {/* 5 Specialty Cards Grid - Super rounded rounded-3xl with blurred shadows */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {SPECIALTIES_DATA.map((spec, index) => (
            <motion.div
              key={spec.id}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.5, delay: index * 0.1 }}
              viewport={{ once: true }}
              className="bg-white/80 backdrop-blur-md rounded-3xl p-8 border border-[#00BFFF]/15 shadow-xl shadow-cyan-900/5 hover:border-[#00BFFF]/40 hover:shadow-2xl hover:shadow-cyan-500/10 hover:-translate-y-1.5 transition-all duration-300 flex flex-col justify-between relative overflow-hidden group"
            >
              {/* Top Accent Gradient Line */}
              <div className="absolute top-0 left-0 right-0 h-1.5 bg-gradient-to-r from-[#005A9C] via-[#00BFFF] to-[#005A9C] opacity-80 group-hover:opacity-100 transition-opacity" />

              <div>
                {/* Badge & Icon Header */}
                <div className="flex items-center justify-between mb-6">
                  <div className="w-14 h-14 rounded-2xl bg-cyan-50 border border-cyan-100 flex items-center justify-center group-hover:bg-[#005A9C] transition-colors duration-300">
                    {specialtyIconsMap[spec.iconName]}
                  </div>
                  {spec.badge && (
                    <span className="px-3 py-1 rounded-full text-[11px] font-bold uppercase tracking-wider bg-gradient-to-r from-[#005A9C] to-[#00BFFF] text-white shadow-sm">
                      {spec.badge}
                    </span>
                  )}
                </div>

                {/* Title & Description */}
                <h3 className="text-xl font-bold text-[#005A9C] mb-3 group-hover:text-[#00BFFF] transition-colors">
                  {spec.title}
                </h3>
                <p className="text-xs sm:text-sm text-[#708090] mb-6 leading-relaxed">
                  {spec.shortDesc}
                </p>

                {/* Features List */}
                <div className="space-y-2.5 mb-8 border-t border-slate-100 pt-4">
                  {spec.features.map((feat, fIdx) => (
                    <div key={fIdx} className="flex items-start gap-2.5">
                      <div className="p-0.5 rounded-full bg-cyan-100 text-[#005A9C] shrink-0 mt-0.5">
                        <Check className="w-3.5 h-3.5 text-[#005A9C]" />
                      </div>
                      <span className="text-xs text-[#005A9C] font-medium leading-tight">{feat}</span>
                    </div>
                  ))}
                </div>
              </div>

              {/* Card Footer & Action Buttons */}
              <div className="space-y-3 pt-2">
                <div className="flex items-center justify-between text-xs text-[#708090] pb-2 border-b border-slate-100">
                  <span className="flex items-center gap-1">
                    <Clock className="w-3.5 h-3.5 text-[#00BFFF]" />
                    Duración estimada:
                  </span>
                  <span className="font-bold text-[#005A9C]">{spec.estimatedTime}</span>
                </div>

                <div className="grid grid-cols-2 gap-2">
                  <button
                    onClick={() => onSelectSpecialtyForBooking(spec.id)}
                    className="w-full py-3 px-3 rounded-2xl bg-[#005A9C] hover:bg-[#00477b] text-white font-bold text-xs transition-colors flex items-center justify-center gap-1 shadow-sm"
                  >
                    <span>Reservar Cita</span>
                  </button>

                  <a
                    href={createWhatsAppLink(spec.waMessage)}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="w-full py-3 px-3 rounded-2xl bg-emerald-50 hover:bg-emerald-100 text-emerald-700 border border-emerald-200 font-bold text-xs transition-colors flex items-center justify-center gap-1"
                  >
                    <MessageCircle className="w-3.5 h-3.5 text-emerald-600" />
                    <span>WhatsApp</span>
                  </a>
                </div>
              </div>
            </motion.div>
          ))}
        </div>

        {/* Interactive Treatment Explorer Bar */}
        <div className="mt-16 bg-gradient-to-r from-[#005A9C] to-[#00BFFF] rounded-3xl p-8 text-white shadow-2xl relative overflow-hidden">
          <div className="relative z-10 grid grid-cols-1 lg:grid-cols-12 gap-8 items-center">
            <div className="lg:col-span-8 space-y-2">
              <span className="text-xs font-bold uppercase tracking-widest text-cyan-200">
                ¿No estás seguro de cuál tratamiento necesitas?
              </span>
              <h3 className="text-2xl sm:text-3xl font-extrabold">
                Diagnóstico digital preliminar sin costo en tu primera consulta
              </h3>
              <p className="text-xs sm:text-sm text-cyan-100/90 max-w-2xl">
                Te realizaremos un escaneo 3D intraoral completo para evaluar el estado real de tus dientes, encías y articulación maxilar.
              </p>
            </div>
            <div className="lg:col-span-4 flex justify-start lg:justify-end">
              <a
                href={createWhatsAppLink("Hola Cielo Dental, quisiera agendar un diagnóstico digital preliminar con escáner 3D para evaluar mi caso.")}
                target="_blank"
                rel="noopener noreferrer"
                className="px-8 py-4 rounded-full bg-white text-[#005A9C] hover:bg-cyan-50 font-bold text-xs uppercase tracking-wider transition-all shadow-lg hover:scale-105 flex items-center gap-2"
              >
                <span>Solicitar Evaluación 3D</span>
                <ArrowRight className="w-4 h-4 text-[#00BFFF]" />
              </a>
            </div>
          </div>
        </div>

      </div>
    </section>
  );
};
