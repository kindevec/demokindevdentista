import React from 'react';
import { motion } from 'motion/react';
import { DOCTORS_DATA, createWhatsAppLink } from '../data/clinicData';
import { Shield, Cpu, Heart, Award, Calendar, CheckCircle, MessageSquare } from 'lucide-react';

export const AboutSection: React.FC = () => {
  return (
    <section id="nosotros" className="py-20 bg-slate-50/60 relative">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        
        {/* Header */}
        <div className="text-center max-w-3xl mx-auto mb-16 space-y-3">
          <span className="px-3.5 py-1 rounded-full bg-cyan-100/70 text-[#005A9C] text-xs font-bold uppercase tracking-wider">
            Excelencia Médica & Humanismo
          </span>
          <h2 className="text-3xl sm:text-4xl font-extrabold text-[#005A9C] tracking-tight">
            Conoce al equipo multidisciplinario de Cielo Dental
          </h2>
          <p className="text-sm sm:text-base text-[#708090]">
            Nuestros especialistas cuentan con posgrados internacionales, actualización continua y una sólida vocación por transformar vidas a través de la salud bucal.
          </p>
        </div>

        {/* Doctors Grid */}
        <div className="grid grid-cols-1 md:grid-cols-3 gap-8 mb-20">
          {DOCTORS_DATA.map((doc, index) => (
            <motion.div
              key={doc.id}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.5, delay: index * 0.15 }}
              viewport={{ once: true }}
              className="bg-white/80 backdrop-blur-md rounded-3xl overflow-hidden border border-[#00BFFF]/15 shadow-xl shadow-cyan-900/5 hover:border-[#00BFFF]/40 hover:shadow-2xl transition-all duration-300 flex flex-col justify-between group"
            >
              <div>
                {/* Doctor Image */}
                <div className="relative h-72 overflow-hidden bg-slate-100">
                  <img
                    src={doc.image}
                    alt={doc.name}
                    referrerPolicy="no-referrer"
                    onError={(e) => {
                      // Fallback image in case doctor photo URL is blocked or broken
                      e.currentTarget.src = "https://images.unsplash.com/photo-1559839734-2b71ea197ec2?q=80&w=800&auto=format&fit=crop";
                    }}
                    className="w-full h-full object-cover object-top transition-transform duration-500 group-hover:scale-105"
                  />
                  <div className="absolute inset-0 bg-gradient-to-t from-black/60 via-transparent to-transparent opacity-70" />
                  
                  {/* Experience Badge */}
                  <div className="absolute top-4 right-4 bg-white/90 backdrop-blur-md px-3 py-1 rounded-full border border-white/50 text-[11px] font-bold text-[#005A9C] shadow-sm">
                    +{doc.experienceYears} Años Experiencia
                  </div>

                  <div className="absolute bottom-4 left-4 right-4 text-white">
                    <p className="text-xs font-semibold text-[#00BFFF]">{doc.specialty}</p>
                    <h3 className="text-xl font-bold">{doc.name}</h3>
                  </div>
                </div>

                {/* Doctor Body */}
                <div className="p-6 space-y-4">
                  <p className="text-xs font-bold text-[#005A9C] uppercase tracking-wider">
                    {doc.role}
                  </p>
                  <p className="text-xs text-[#708090] leading-relaxed">
                    {doc.bio}
                  </p>
                  <div className="p-3 rounded-2xl bg-slate-50 border border-slate-100 space-y-1">
                    <p className="text-[11px] font-bold text-[#005A9C] flex items-center gap-1">
                      <Award className="w-3.5 h-3.5 text-[#00BFFF]" />
                      Formación Académica:
                    </p>
                    <p className="text-[11px] text-[#708090]">{doc.education}</p>
                  </div>
                </div>
              </div>

              {/* Action Button */}
              <div className="p-6 pt-0">
                <a
                  href={createWhatsAppLink(`Hola Cielo Dental, me gustaría agendar una cita directamente con el ${doc.name}.`)}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="w-full py-3 rounded-2xl bg-cyan-50 hover:bg-[#005A9C] hover:text-white text-[#005A9C] font-bold text-xs transition-colors flex items-center justify-center gap-2 group-hover:bg-[#005A9C] group-hover:text-white"
                >
                  <Calendar className="w-4 h-4" />
                  <span>Consultar con {doc.name.split(' ')[1]}</span>
                </a>
              </div>
            </motion.div>
          ))}
        </div>

        {/* Clinical Technology & Philosophy Showcase Grid */}
        <div className="bg-white/80 backdrop-blur-md rounded-3xl p-8 lg:p-12 border border-[#00BFFF]/15 shadow-xl shadow-cyan-900/5">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
            
            {/* Left Column: Technology Highlights */}
            <div className="space-y-6">
              <span className="px-3 py-1 rounded-full bg-cyan-50 text-[#005A9C] text-xs font-bold uppercase tracking-wider">
                Infraestructura Clínica
              </span>
              <h3 className="text-2xl sm:text-3xl font-extrabold text-[#005A9C]">
                Instalaciones diseñadas para la bioseguridad y el confort total
              </h3>
              <p className="text-sm text-[#708090] leading-relaxed">
                En Cielo Dental nos alejamos del concepto tradicional de clínica fría o intimidante. Creamos espacios serenos con música ambiental suave, aromaterapia y equipos silenciosos de última generación.
              </p>

              <div className="space-y-4">
                <div className="flex items-start gap-3 p-3.5 rounded-2xl bg-slate-50 border border-slate-100">
                  <div className="p-2 rounded-xl bg-[#005A9C] text-white shrink-0">
                    <Cpu className="w-5 h-5" />
                  </div>
                  <div>
                    <h4 className="text-xs font-bold text-[#005A9C]">Escaner Intraoral 3D Iterero</h4>
                    <p className="text-xs text-[#708090]">Elimina las impresiones de pasta tradicionales. Escaneo digital en 3 minutos.</p>
                  </div>
                </div>

                <div className="flex items-start gap-3 p-3.5 rounded-2xl bg-slate-50 border border-slate-100">
                  <div className="p-2 rounded-xl bg-[#005A9C] text-white shrink-0">
                    <Heart className="w-5 h-5" />
                  </div>
                  <div>
                    <h4 className="text-xs font-bold text-[#005A9C]">Odontología de Mínima Invasión</h4>
                    <p className="text-xs text-[#708090]">Conservamos al máximo la estructura natural del diente sin intervenciones agresivas.</p>
                  </div>
                </div>

                <div className="flex items-start gap-3 p-3.5 rounded-2xl bg-slate-50 border border-slate-100">
                  <div className="p-2 rounded-xl bg-[#005A9C] text-white shrink-0">
                    <Shield className="w-5 h-5" />
                  </div>
                  <div>
                    <h4 className="text-xs font-bold text-[#005A9C]">Esterilización Quirúrgica de Grado Hospitalario</h4>
                    <p className="text-xs text-[#708090]">Autoclaves de clase B y envasado al vacío de instrumental garantizado.</p>
                  </div>
                </div>
              </div>
            </div>

            {/* Right Column: High Quality Image Gallery */}
            <div className="relative">
              <div className="rounded-3xl overflow-hidden shadow-2xl border-4 border-white">
                <img
                  src="https://images.unsplash.com/photo-1629909615184-74f495363b67?q=80&w=1000&auto=format&fit=crop"
                  alt="Tecnología clínica avanzada en Cielo Dental"
                  referrerPolicy="no-referrer"
                  className="w-full h-[400px] object-cover"
                />
              </div>

              <div className="absolute -bottom-6 -left-6 bg-[#005A9C] text-white p-5 rounded-2xl shadow-xl max-w-xs hidden sm:block">
                <p className="text-xs font-bold text-[#00BFFF] mb-1">Filosofía Médica Empática</p>
                <p className="text-[11px] text-cyan-100 leading-tight">
                  "Explicamos detalladamente cada paso de tu tratamiento para que tomes decisiones informadas con total serenidad."
                </p>
              </div>
            </div>

          </div>
        </div>

      </div>
    </section>
  );
};
