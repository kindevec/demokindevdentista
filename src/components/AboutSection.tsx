import React from 'react';
import { motion } from 'motion/react';
import { DOCTORS_DATA, createWhatsAppLink, CLINIC_PHONE_DISPLAY, GENERAL_WA_MESSAGE } from '../data/clinicData';
import { Shield, Cpu, Heart, Award, Calendar, CheckCircle, ArrowUpRight, ArrowRight, Phone, Sparkles, ShieldCheck, HeartHandshake, Smile, Scan } from 'lucide-react';
import { ChromaGrid } from './ChromaGrid';
import { FlowingMenu } from './FlowingMenu';

interface AboutSectionProps {
  onOpenBooking?: () => void;
}

export const AboutSection: React.FC<AboutSectionProps> = ({ onOpenBooking }) => {
  return (
    <section id="nosotros" className="pt-16 pb-10 md:pt-20 md:pb-12 bg-white relative overflow-hidden">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        
        {/* 1. WHY CHOOSE US SECTION (Layout matching reference image) */}
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 lg:gap-16 items-center mb-24">
          
          {/* Left Collage & Experience Badge */}
          <div className="lg:col-span-6 relative">
            <div className="relative mx-auto max-w-md lg:max-w-none">
              
              {/* Primary Large Image */}
              <div className="relative rounded-3xl overflow-hidden shadow-2xl border-4 border-white bg-slate-100 z-10">
                <img
                  src="https://images.unsplash.com/photo-1576091160550-2173dba999ef?q=80&w=800&auto=format&fit=crop"
                  alt="Doctora atendiendo a paciente en Cielo Dental"
                  className="w-full h-80 sm:h-96 object-cover object-center"
                />
                <div className="absolute inset-0 bg-gradient-to-t from-slate-900/40 via-transparent to-transparent" />
              </div>

              {/* Secondary Overlapping Small Image */}
              <div className="absolute -bottom-8 -right-4 sm:-right-8 w-44 sm:w-56 rounded-2xl overflow-hidden shadow-2xl border-4 border-white z-20 hidden sm:block bg-white">
                <img
                  src="https://images.unsplash.com/photo-1551076805-e1869033e561?q=80&w=600&auto=format&fit=crop"
                  alt="Especialista dental"
                  className="w-full h-44 object-cover object-top"
                />
              </div>

              {/* Circular Emblem Seal */}
              <div className="absolute top-1/2 -right-4 sm:right-36 -translate-y-1/2 z-30 w-24 h-24 rounded-full bg-white shadow-xl border border-cyan-100 flex items-center justify-center p-2 hidden sm:flex">
                <svg viewBox="0 0 100 100" className="w-full h-full animate-spin-slow">
                  <path
                    id="sealPath"
                    d="M 50, 50 m -35, 0 a 35,35 0 1,1 70,0 a 35,35 0 1,1 -70,0"
                    fill="none"
                  />
                  <text className="text-[8px] font-extrabold uppercase tracking-[2px] fill-[#005A9C]">
                    <textPath href="#sealPath" startOffset="0%">
                      • CIELO DENTAL • ODONTOLOGIA DIGITAL
                    </textPath>
                  </text>
                </svg>
                <div className="absolute inset-0 m-auto w-8 h-8 rounded-full bg-cyan-50 flex items-center justify-center text-[#00BFFF]">
                  <Sparkles className="w-4 h-4" />
                </div>
              </div>

            </div>
          </div>

          {/* Right Text Column */}
          <div className="lg:col-span-6 space-y-5">
            {/* Script Subtitle */}
            <p className="font-script text-3xl sm:text-4xl text-[#00BFFF] tracking-wide">
              Cielo Dental
            </p>

            {/* Headline */}
            <h2 className="text-3xl sm:text-4xl md:text-5xl font-extrabold text-[#005A9C] tracking-tight leading-tight uppercase">
              Por Qué Elegir <span className="text-[#00BFFF]">Cielo Dental.</span>
            </h2>

            {/* Paragraph - 5 lines justified */}
            <p className="text-sm sm:text-base text-[#708090] leading-relaxed text-justify">
              En <strong className="text-[#005A9C]">Cielo Dental</strong> transformamos la atención odontológica combinando tecnología digital 3D de alta precisión, rigurosos protocolos de bioseguridad y un enfoque profundamente humano. Nuestro compromiso es brindarte diagnósticos certeros y tratamientos confortables que restauren la salud y armonía de tu sonrisa en un ambiente sereno, puntual y libre de estrés, garantizando resultados duraderos para toda tu familia.
            </p>

            {/* Direct Feature Items with Professional Icons (Without Box Containers) */}
            <div className="space-y-4 pt-1">
              <div className="flex items-center gap-3.5">
                <div className="w-10 h-10 rounded-xl bg-cyan-50 border border-cyan-100 text-[#005A9C] flex items-center justify-center shrink-0 shadow-sm">
                  <ShieldCheck className="w-5 h-5 text-[#005A9C]" />
                </div>
                <h4 className="text-sm sm:text-base font-bold text-[#005A9C]">
                  Bioseguridad & Honestidad Clínica
                </h4>
              </div>

              <div className="flex items-center gap-3.5">
                <div className="w-10 h-10 rounded-xl bg-cyan-50 border border-cyan-100 text-[#005A9C] flex items-center justify-center shrink-0 shadow-sm">
                  <Cpu className="w-5 h-5 text-[#005A9C]" />
                </div>
                <h4 className="text-sm sm:text-base font-bold text-[#005A9C]">
                  Tecnología 3D & Procedimientos Sin Dolor
                </h4>
              </div>

              <div className="flex items-center gap-3.5">
                <div className="w-10 h-10 rounded-xl bg-cyan-50 border border-cyan-100 text-[#005A9C] flex items-center justify-center shrink-0 shadow-sm">
                  <HeartHandshake className="w-5 h-5 text-[#005A9C]" />
                </div>
                <h4 className="text-sm sm:text-base font-bold text-[#005A9C]">
                  Enfoque Empático y Familiar
                </h4>
              </div>
            </div>

          </div>

        </div>

        {/* 2. MEDICAL TEAM HEADER */}
        <div className="text-center max-w-3xl mx-auto mb-14 space-y-3">
          <h3 className="text-3xl sm:text-4xl font-extrabold text-[#005A9C] tracking-tight">
            Conoce al equipo médico de Cielo Dental
          </h3>
          <p className="text-sm sm:text-base text-[#708090]">
            Especialistas certificados con formación de posgrado internacional y actualización continua.
          </p>
        </div>

        {/* Doctors Grid with Interactive ChromaGrid Animation */}
        <div className="mb-20">
          <ChromaGrid
            columns={3}
            rows={1}
            radius={380}
            damping={0.35}
            items={DOCTORS_DATA.map((doc, index) => {
              const borderColors = ['#00BFFF', '#005A9C', '#00BFFF'];
              const gradients = [
                'linear-gradient(180deg, #FFFFFF 0%, #F8FAFC 100%)',
                'linear-gradient(180deg, #FFFFFF 0%, #F0F9FF 100%)',
                'linear-gradient(180deg, #FFFFFF 0%, #F8FAFC 100%)',
              ];
              return {
                image: doc.image,
                title: doc.name,
                subtitle: `${doc.specialty} • ${doc.education}`,
                handle: doc.role,
                borderColor: borderColors[index % borderColors.length],
                gradient: gradients[index % gradients.length],
                url: createWhatsAppLink(`Hola Cielo Dental, me gustaría agendar una cita directamente con el ${doc.name}.`),
              };
            })}
          />
        </div>

        {/* 3. Clinical Installations & Biosecurity Hero Layout (Clean minimalist style without descriptions and figures) */}
        <div className="pt-8 pb-8">
          
          {/* Main Cyan-Blue Medical Container */}
          <div className="relative rounded-[32px] sm:rounded-[40px] overflow-hidden bg-gradient-to-br from-[#005A9C] via-[#00487d] to-[#081D34] text-white p-8 sm:p-12 lg:p-14 pb-20 sm:pb-24 shadow-2xl text-center">
            {/* Background Medical Photo with Overlay */}
            <div className="absolute inset-0 pointer-events-none">
              <img
                src="https://images.unsplash.com/photo-1629909615184-74f495363b67?q=80&w=1600&auto=format&fit=crop"
                alt="Instalaciones de bioseguridad Cielo Dental"
                className="w-full h-full object-cover opacity-15 mix-blend-overlay"
              />
              <div className="absolute inset-0 bg-gradient-to-t from-[#081D34]/90 via-[#00487d]/40 to-transparent" />
            </div>

            <div className="relative z-10 max-w-3xl mx-auto space-y-3">
              <h3 className="text-2xl sm:text-3xl lg:text-4xl font-extrabold text-white leading-tight">
                Instalaciones diseñadas para tu confort total
              </h3>
              <p className="text-xs sm:text-sm text-cyan-100/90 max-w-2xl mx-auto leading-relaxed">
                Espacios serenos con equipos silenciosos de última generación, luz natural y protocolos de estándar internacional.
              </p>
            </div>
          </div>

          {/* Bottom Row: 3 Floating Overlapping White Cards */}
          <div className="grid grid-cols-1 md:grid-cols-3 gap-6 max-w-4xl mx-auto px-4 -mt-10 sm:-mt-12 relative z-20">
            
            {/* Card 1: Escáner 3D Digital */}
            <div className="bg-white rounded-3xl p-6 sm:p-8 shadow-xl shadow-slate-900/10 border border-slate-100 flex flex-col items-center text-center justify-center hover:shadow-2xl transition-all duration-300 group hover:-translate-y-1">
              <div className="space-y-3 flex flex-col items-center">
                <div className="w-16 h-16 rounded-2xl bg-[#CCF2FF] text-[#005A9C] flex items-center justify-center shadow-sm group-hover:bg-[#00BFFF] group-hover:text-white transition-colors">
                  <Scan className="w-8 h-8" />
                </div>
                <h4 className="text-base sm:text-lg font-bold text-[#005A9C]">
                  Escáner 3D Digital
                </h4>
              </div>
            </div>

            {/* Card 2: Esterilización Quirúrgica */}
            <div className="bg-white rounded-3xl p-6 sm:p-8 shadow-xl shadow-slate-900/10 border border-slate-100 flex flex-col items-center text-center justify-center hover:shadow-2xl transition-all duration-300 group hover:-translate-y-1">
              <div className="space-y-3 flex flex-col items-center">
                <div className="w-16 h-16 rounded-2xl bg-[#CCF2FF] text-[#005A9C] flex items-center justify-center shadow-sm group-hover:bg-[#00BFFF] group-hover:text-white transition-colors">
                  <ShieldCheck className="w-8 h-8" />
                </div>
                <h4 className="text-base sm:text-lg font-bold text-[#005A9C]">
                  Esterilización Quirúrgica
                </h4>
              </div>
            </div>

            {/* Card 3: Confort Ergonómico */}
            <div className="bg-white rounded-3xl p-6 sm:p-8 shadow-xl shadow-slate-900/10 border border-slate-100 flex flex-col items-center text-center justify-center hover:shadow-2xl transition-all duration-300 group hover:-translate-y-1">
              <div className="space-y-3 flex flex-col items-center">
                <div className="w-16 h-16 rounded-2xl bg-[#CCF2FF] text-[#005A9C] flex items-center justify-center shadow-sm group-hover:bg-[#00BFFF] group-hover:text-white transition-colors">
                  <HeartHandshake className="w-8 h-8" />
                </div>
                <h4 className="text-base sm:text-lg font-bold text-[#005A9C]">
                  Confort Ergonómico
                </h4>
              </div>
            </div>

          </div>

        </div>

      </div>
    </section>
  );
};

