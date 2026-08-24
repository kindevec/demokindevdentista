import React from 'react';
import { ArrowRight } from 'lucide-react';
import { createWhatsAppLink } from '../data/clinicData';
import { AccordionGallery, AccordionItem } from './AccordionGallery';

interface SpecialtiesSectionProps {
  onSelectSpecialtyForBooking: (specialtyId: string) => void;
}

export const SpecialtiesSection: React.FC<SpecialtiesSectionProps> = ({ onSelectSpecialtyForBooking }) => {
  const treatmentItems: AccordionItem[] = [
    {
      id: "ortodoncia",
      image: "https://images.unsplash.com/photo-1598256989800-fe5f95da9787?q=80&w=900&auto=format&fit=crop",
      label: "Ortodoncia Invisible y Digital",
      desc: "Alineación digital con alineadores invisibles sin brackets.",
      waMessage: "Hola Cielo Dental, quisiera solicitar una evaluación para el tratamiento de Ortodoncia Invisible.",
    },
    {
      id: "implantes",
      image: "https://images.unsplash.com/photo-1609840114035-3c981b782dfe?q=80&w=900&auto=format&fit=crop",
      label: "Implantes Dentales Guiados 3D",
      desc: "Cirugía guiada por computadora con carga inmediata.",
      waMessage: "Hola Cielo Dental, me interesa agendar una consulta sobre Implantes Dentales Guiados.",
    },
    {
      id: "estetica",
      image: "https://images.unsplash.com/photo-1606811841689-23dfddce3e95?q=80&w=900&auto=format&fit=crop",
      label: "Diseño de Sonrisa & Blanqueamiento",
      desc: "Carillas cerámicas ultra finas y aclaramiento dental LED.",
      waMessage: "Hola Cielo Dental, deseo agendar una cita para Diseño de Sonrisa y Blanqueamiento.",
    },
    {
      id: "odontopediatria",
      image: "https://images.unsplash.com/photo-1579684453423-f84349ef60b0?q=80&w=900&auto=format&fit=crop",
      label: "Odontopediatría y Cuidado Infantil",
      desc: "Experiencia empática y libre de dolor pensada para niños.",
      waMessage: "Hola Cielo Dental, me gustaría agendar una cita de Odontopediatría.",
    },
    {
      id: "endodoncia",
      image: "https://images.unsplash.com/photo-1579684385127-1ef15d508118?q=80&w=900&auto=format&fit=crop",
      label: "Endodoncia Microscópica",
      desc: "Tratamiento de conducto en 1 sola sesión con alivio del dolor.",
      waMessage: "Hola Cielo Dental, requiero una evaluación de Endodoncia.",
    },
  ];

  return (
    <section id="especialidades" className="py-24 bg-gradient-to-br from-[#005A9C] via-[#00487d] to-[#081D34] text-white relative overflow-hidden">
      {/* Subtle Background Radial Ambient Glows */}
      <div className="absolute top-0 right-1/4 w-96 h-96 bg-[#00BFFF]/15 rounded-full blur-3xl pointer-events-none" />
      <div className="absolute bottom-0 left-1/4 w-96 h-96 bg-[#00BFFF]/10 rounded-full blur-3xl pointer-events-none" />

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
        
        {/* Header */}
        <div className="text-center max-w-3xl mx-auto mb-12 space-y-3">
          <h2 className="text-3xl sm:text-4xl font-extrabold text-white tracking-tight">
            Tratamientos modernos diseñados para tu <span className="text-[#00BFFF]">salud y estética</span>
          </h2>
          <p className="text-sm sm:text-base text-cyan-100/90">
            Pasa el cursor sobre cada tratamiento para expandir y explorar nuestra tecnología clínica de alta precisión.
          </p>
        </div>

        {/* Accordion Gallery Component */}
        <div className="mb-14">
          <AccordionGallery
            items={treatmentItems}
            defaultIndex={0}
            height={490}
            radius={24}
            gap={12}
            accentColor="#00BFFF"
            overlayColor="#081D34"
            textColor="#FFFFFF"
            duration={0.65}
            expandRatio={0.5}
            trigger="hover"
            onOpenBooking={(treatmentId) => {
              if (treatmentId) {
                onSelectSpecialtyForBooking(treatmentId);
              }
            }}
          />
        </div>

        {/* Interactive Treatment Explorer Bar (Frosted Glass CTA) */}
        <div className="mt-16 bg-white/10 backdrop-blur-xl border border-white/20 rounded-3xl p-8 text-white shadow-2xl relative overflow-hidden">
          <div className="relative z-10 grid grid-cols-1 lg:grid-cols-12 gap-8 items-center">
            <div className="lg:col-span-8 space-y-2">
              <span className="text-xs font-bold uppercase tracking-widest text-[#00BFFF]">
                ¿No estás seguro de cuál tratamiento necesitas?
              </span>
              <h3 className="text-2xl sm:text-3xl font-extrabold text-white">
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
                className="px-8 py-4 rounded-full bg-[#00BFFF] hover:bg-[#00a6de] text-white font-bold text-xs uppercase tracking-wider transition-all shadow-lg hover:scale-105 flex items-center gap-2.5 cursor-pointer group"
              >
                <svg className="w-4 h-4 fill-white shrink-0 group-hover:scale-110 transition-transform" viewBox="0 0 24 24">
                  <path d="M.057 24l1.687-6.163c-1.041-1.804-1.588-3.849-1.587-5.946.003-6.556 5.338-11.891 11.893-11.891 3.181.001 6.167 1.24 8.413 3.488 2.245 2.248 3.481 5.236 3.48 8.414-.003 6.557-5.338 11.892-11.893 11.892-1.99-.001-3.951-.5-5.688-1.448l-6.305 1.654zm6.597-3.807c1.676.995 3.276 1.591 5.392 1.592 5.448 0 9.886-4.434 9.889-9.885.002-5.462-4.415-9.89-9.881-9.892-5.452 0-9.887 4.434-9.889 9.884-.001 2.225.651 3.891 1.746 5.634l-.999 3.648 3.742-.981zm11.387-5.464c-.074-.124-.272-.198-.57-.347-.297-.149-1.758-.868-2.031-.967-.272-.099-.47-.149-.669.149-.198.297-.768.967-.941 1.165-.173.198-.347.223-.644.074-.297-.149-1.255-.462-2.39-1.475-.883-.788-1.48-1.761-1.653-2.059-.173-.297-.018-.458.13-.606.134-.133.297-.347.446-.521.151-.172.2-.296.3-.495.099-.198.05-.372-.025-.521-.075-.148-.669-1.611-.916-2.206-.242-.579-.487-.501-.669-.51l-.57-.01c-.198 0-.52.074-.792.372s-1.04 1.016-1.04 2.479 1.065 2.876 1.213 3.074c.149.198 2.095 3.2 5.076 4.487.709.306 1.263.489 1.694.626.712.226 1.36.194 1.872.118.571-.085 1.758-.719 2.006-1.413.248-.695.248-1.29.173-1.414z" />
                </svg>
                <span>Solicitar Evaluación 3D</span>
                <ArrowRight className="w-4 h-4 text-white" />
              </a>
            </div>
          </div>
        </div>

      </div>
    </section>
  );
};
