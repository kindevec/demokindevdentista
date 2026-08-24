import React, { useState } from 'react';
import { motion } from 'motion/react';
import { SOCIAL_NETWORKS, CLINIC_PHONE_DISPLAY, CLINIC_EMAIL, CLINIC_ADDRESS, CLINIC_HOURS, SPECIALTIES_DATA, DOCTORS_DATA, createWhatsAppLink, EMERGENCY_WA_MESSAGE } from '../data/clinicData';
import { MapPin, Phone, Mail, Clock, Send, Calendar, CheckCircle, AlertCircle, ExternalLink, ShieldCheck } from 'lucide-react';

interface SocialAndContactSectionProps {
  preselectedSpecialty?: string;
}

export const SocialAndContactSection: React.FC<SocialAndContactSectionProps> = ({ preselectedSpecialty = '' }) => {
  const [formData, setFormData] = useState({
    patientName: '',
    phone: '',
    email: '',
    specialtyId: preselectedSpecialty || 'ortodoncia',
    doctorId: 'dr-carlos',
    preferredDate: '',
    preferredTime: '10:00 AM',
    notes: '',
    isEmergency: false,
  });

  const [isSubmitted, setIsSubmitted] = useState(false);

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    
    // Construct pre-recorded message
    const spec = SPECIALTIES_DATA.find((s) => s.id === formData.specialtyId)?.title || 'General';
    const doc = DOCTORS_DATA.find((d) => d.id === formData.doctorId)?.name || 'Cualquier especialista';
    
    const message = formData.isEmergency
      ? `¡ATENCIÓN DE URGENCIA!
Nombre: ${formData.patientName}
Teléfono: ${formData.phone}
Email: ${formData.email}
Notas: ${formData.notes || 'Dolor o emergencia dental activa.'}`
      : `Hola Cielo Dental, me gustaría agendar una cita oficial desde su web:
- Paciente: ${formData.patientName}
- Teléfono: ${formData.phone}
- Email: ${formData.email}
- Especialidad: ${spec}
- Doctor Preferido: ${doc}
- Fecha Deseada: ${formData.preferredDate || 'Lo antes posible'}
- Horario Preferido: ${formData.preferredTime}
- Notas: ${formData.notes || 'Consulta inicial de evaluación'}`;

    const waUrl = createWhatsAppLink(message);
    window.open(waUrl, '_blank');
    setIsSubmitted(true);
  };

  // Official Brand Logos SVG Components
  const FacebookOfficialLogo = () => (
    <svg className="w-8 h-8 fill-[#1877F2]" viewBox="0 0 24 24">
      <path d="M24 12.073c0-6.627-5.373-12-12-12s-12 5.373-12 12c0 5.99 4.388 10.954 10.125 11.854v-8.385H7.078v-3.47h3.047V9.43c0-3.007 1.792-4.669 4.533-4.669 1.312 0 2.686.235 2.686.235v2.953H15.83c-1.491 0-1.956.925-1.956 1.874v2.25h3.328l-.532 3.47h-2.796v8.385C19.612 23.027 24 18.062 24 12.073z" />
    </svg>
  );

  const InstagramOfficialLogo = () => (
    <svg className="w-8 h-8" viewBox="0 0 24 24">
      <radialGradient id="igGrad" cx="30%" cy="107%" r="130%">
        <stop offset="0%" stopColor="#fdf497" />
        <stop offset="5%" stopColor="#fdf497" />
        <stop offset="45%" stopColor="#fd5949" />
        <stop offset="60%" stopColor="#d6249f" />
        <stop offset="90%" stopColor="#285AEB" />
      </radialGradient>
      <path
        fill="url(#igGrad)"
        d="M12 2.163c3.204 0 3.584.012 4.85.07 3.252.148 4.771 1.691 4.919 4.919.058 1.265.069 1.645.069 4.849 0 3.205-.012 3.584-.069 4.849-.149 3.225-1.664 4.771-4.919 4.919-1.266.058-1.644.07-4.85.07-3.204 0-3.584-.012-4.849-.07-3.26-.149-4.771-1.699-4.919-4.92-.058-1.265-.07-1.644-.07-4.849 0-3.204.013-3.583.07-4.849.149-3.227 1.664-4.771 4.919-4.919 1.266-.057 1.645-.069 4.849-.069zm0-2.163c-3.259 0-3.667.014-4.947.072-4.358.2-6.78 2.618-6.98 6.98-.059 1.281-.073 1.689-.073 4.948 0 3.259.014 3.668.072 4.948.2 4.358 2.618 6.78 6.98 6.98 1.281.058 1.689.072 4.948.072 3.259 0 3.668-.014 4.948-.072 4.354-.2 6.782-2.618 6.979-6.98.059-1.28.073-1.689.073-4.948 0-3.259-.014-3.667-.072-4.947-.196-4.354-2.617-6.78-6.979-6.98-1.281-.059-1.69-.073-4.949-.073zm0 5.838c-3.403 0-6.162 2.759-6.162 6.162s2.759 6.163 6.162 6.163 6.162-2.759 6.162-6.163c0-3.403-2.759-6.162-6.162-6.162zm0 10.162c-2.209 0-4-1.79-4-4 0-2.209 1.791-4 4-4s4 1.791 4 4c0 2.21-1.791 4-4 4zm6.406-11.845c-.796 0-1.441.645-1.441 1.44s.645 1.44 1.441 1.44c.795 0 1.439-.645 1.439-1.44s-.644-1.44-1.439-1.44z"
      />
    </svg>
  );

  const WhatsappOfficialLogo = () => (
    <svg className="w-8 h-8 fill-[#25D366]" viewBox="0 0 24 24">
      <path d="M.057 24l1.687-6.163c-1.041-1.804-1.588-3.849-1.587-5.946.003-6.556 5.338-11.891 11.893-11.891 3.181.001 6.167 1.24 8.413 3.488 2.245 2.248 3.481 5.236 3.48 8.414-.003 6.557-5.338 11.892-11.893 11.892-1.99-.001-3.951-.5-5.688-1.448l-6.305 1.654zm6.597-3.807c1.676.995 3.276 1.591 5.392 1.592 5.448 0 9.886-4.434 9.889-9.885.002-5.462-4.415-9.89-9.881-9.892-5.452 0-9.887 4.434-9.889 9.884-.001 2.225.651 3.891 1.746 5.634l-.999 3.648 3.742-.981zm11.387-5.464c-.074-.124-.272-.198-.57-.347-.297-.149-1.758-.868-2.031-.967-.272-.099-.47-.149-.669.149-.198.297-.768.967-.941 1.165-.173.198-.347.223-.644.074-.297-.149-1.255-.462-2.39-1.475-.883-.788-1.48-1.761-1.653-2.059-.173-.297-.018-.458.13-.606.134-.133.297-.347.446-.521.151-.172.2-.296.3-.495.099-.198.05-.372-.025-.521-.075-.148-.669-1.611-.916-2.206-.242-.579-.487-.501-.669-.51l-.57-.01c-.198 0-.52.074-.792.372s-1.04 1.016-1.04 2.479 1.065 2.876 1.213 3.074c.149.198 2.095 3.2 5.076 4.487.709.306 1.263.489 1.694.626.712.226 1.36.194 1.872.118.571-.085 1.758-.719 2.006-1.413.248-.695.248-1.29.173-1.414z" />
    </svg>
  );

  return (
    <section id="contacto" className="pt-10 pb-20 md:pt-12 md:pb-24 bg-white relative">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        
        {/* Section Header */}
        <div className="text-center max-w-3xl mx-auto mb-16 space-y-3">
          <h2 className="text-3xl sm:text-4xl font-extrabold text-[#005A9C] tracking-tight">
            Redes Sociales Oficiales & Contacto Directo
          </h2>
          <p className="text-sm sm:text-base text-[#708090]">
            Estamos siempre a tu disposición. Conéctate con nosotros a través de nuestras plataformas verificadas o agenda tu cita directamente.
          </p>
        </div>

        {/* 3 OFFICIAL SOCIAL NETWORKS IMAGE CARDS WITH HOVER OVERLAY INFO */}
        <div className="grid grid-cols-1 md:grid-cols-3 gap-8 mb-20">
          {SOCIAL_NETWORKS.map((sn) => {
            return (
              <motion.div
                key={sn.id}
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.5 }}
                viewport={{ once: true }}
                tabIndex={0}
                className="relative h-[380px] sm:h-[400px] rounded-3xl overflow-hidden border border-[#00BFFF]/20 shadow-xl shadow-cyan-900/10 group cursor-pointer select-none"
              >
                {/* Card Background Image */}
                <img
                  src={sn.image}
                  alt={sn.name}
                  referrerPolicy="no-referrer"
                  draggable={false}
                  className="absolute inset-0 w-full h-full object-cover transition-transform duration-700 group-hover:scale-110 group-focus:scale-110"
                />

                {/* Base State Gradient Overlay (visible when not hovered) */}
                <div className="absolute inset-0 bg-gradient-to-t from-slate-950/90 via-slate-950/40 to-slate-900/20 transition-opacity duration-300 group-hover:opacity-20" />

                {/* Base Card Content (Initial State) */}
                <div className="absolute inset-0 p-6 flex flex-col justify-between z-10 group-hover:opacity-0 transition-opacity duration-300 pointer-events-none">
                  {/* Top Bar */}
                  <div className="flex items-center justify-between">
                    <div className="p-3 rounded-2xl bg-white/90 backdrop-blur-md border border-white/40 shadow-lg">
                      {sn.iconType === 'facebook' && <FacebookOfficialLogo />}
                      {sn.iconType === 'instagram' && <InstagramOfficialLogo />}
                      {sn.iconType === 'whatsapp' && <WhatsappOfficialLogo />}
                    </div>
                    <span className="text-[11px] font-extrabold text-white bg-slate-900/80 backdrop-blur-md px-3.5 py-1.5 rounded-full border border-white/20 shadow-md">
                      {sn.handle}
                    </span>
                  </div>

                  {/* Bottom Bar */}
                  <div>
                    <h3 className="text-2xl font-black text-white drop-shadow-md">
                      {sn.name}
                    </h3>
                  </div>
                </div>

                {/* Hover Reveal Overlay (Full info displayed on hover/focus/tap) */}
                <div className="absolute inset-0 bg-slate-950/92 backdrop-blur-md p-6 flex flex-col justify-between z-20 opacity-0 group-hover:opacity-100 group-focus:opacity-100 transition-all duration-300 transform translate-y-2 group-hover:translate-y-0 group-focus:translate-y-0">
                  <div className="space-y-4">
                    {/* Header inside hover */}
                    <div className="flex items-center justify-between pb-3 border-b border-white/10">
                      <div className="flex items-center gap-3">
                        <div className="p-2.5 rounded-xl bg-white/10 border border-white/20">
                          {sn.iconType === 'facebook' && <FacebookOfficialLogo />}
                          {sn.iconType === 'instagram' && <InstagramOfficialLogo />}
                          {sn.iconType === 'whatsapp' && <WhatsappOfficialLogo />}
                        </div>
                        <div>
                          <h3 className="text-lg font-bold text-white leading-tight">
                            {sn.name}
                          </h3>
                          <span className="text-[11px] font-bold text-[#00BFFF]">
                            {sn.handle}
                          </span>
                        </div>
                      </div>
                    </div>

                    {/* Description Text */}
                    <p className="text-xs text-slate-300 leading-relaxed pt-1">
                      {sn.description}
                    </p>
                  </div>

                  {/* Call to action button inside hover */}
                  <div className="pt-4">
                    <a
                      href={sn.url}
                      target="_blank"
                      rel="noopener noreferrer"
                      className="w-full py-3.5 px-4 rounded-2xl bg-gradient-to-r from-[#005A9C] to-[#00BFFF] hover:from-[#00477b] hover:to-[#00a3da] text-white font-bold text-xs transition-all duration-200 flex items-center justify-center gap-2 shadow-lg shadow-cyan-500/20 hover:scale-[1.02] active:scale-95"
                    >
                      <span>{sn.actionText}</span>
                      <ExternalLink className="w-4 h-4 text-white" />
                    </a>
                  </div>
                </div>
              </motion.div>
            );
          })}
        </div>

        {/* OVERLAPPING FLOATING CONTACT & BOOKING CARD (Matching Reference Design) */}
        <div className="max-w-6xl mx-auto relative pt-4">
          <div className="relative grid grid-cols-1 lg:grid-cols-12 items-center">
            
            {/* 1. Left Floating / Overlapping Colored Card (Contact Info) */}
            <div className="lg:col-span-5 bg-gradient-to-br from-[#005A9C] via-[#004b82] to-[#081D34] text-white rounded-3xl p-8 sm:p-10 shadow-2xl z-20 lg:-mr-8 relative border border-cyan-400/20">
              {/* Subtle ambient lighting inside card */}
              <div className="absolute top-0 right-0 w-48 h-48 bg-[#00BFFF]/15 rounded-full blur-2xl pointer-events-none" />

              <div className="relative z-10 space-y-6">
                <div>
                  <h3 className="text-2xl sm:text-3xl font-extrabold text-white">
                    Información de Contacto
                  </h3>
                </div>

                <div className="space-y-5 pt-2">
                  {/* Address */}
                  <div className="flex items-start gap-3.5">
                    <div className="p-2 rounded-xl bg-white/10 text-[#00BFFF] shrink-0">
                      <MapPin className="w-5 h-5" />
                    </div>
                    <div>
                      <p className="text-xs font-bold text-cyan-200">Ubicación Geográfica</p>
                      <p className="text-xs text-white leading-snug">{CLINIC_ADDRESS}</p>
                    </div>
                  </div>

                  {/* Email */}
                  <div className="flex items-start gap-3.5">
                    <div className="p-2 rounded-xl bg-white/10 text-[#00BFFF] shrink-0">
                      <Mail className="w-5 h-5" />
                    </div>
                    <div>
                      <p className="text-xs font-bold text-cyan-200">Correo Electrónico</p>
                      <a href={`mailto:${CLINIC_EMAIL}`} className="text-xs text-white hover:text-[#00BFFF] transition-colors">
                        {CLINIC_EMAIL}
                      </a>
                    </div>
                  </div>

                  {/* Phone */}
                  <div className="flex items-start gap-3.5">
                    <div className="p-2 rounded-xl bg-white/10 text-[#00BFFF] shrink-0">
                      <Phone className="w-5 h-5" />
                    </div>
                    <div>
                      <p className="text-xs font-bold text-cyan-200">Teléfono Recepción Directa</p>
                      <a
                        href={`tel:${CLINIC_PHONE_DISPLAY.replace(/\s+/g, '')}`}
                        className="text-sm font-extrabold text-white hover:text-[#00BFFF] transition-colors block"
                      >
                        {CLINIC_PHONE_DISPLAY}
                      </a>
                    </div>
                  </div>

                  {/* Hours */}
                  <div className="flex items-start gap-3.5">
                    <div className="p-2 rounded-xl bg-white/10 text-[#00BFFF] shrink-0">
                      <Clock className="w-5 h-5" />
                    </div>
                    <div>
                      <p className="text-xs font-bold text-cyan-200">Horarios de Atención</p>
                      <p className="text-xs text-white">{CLINIC_HOURS}</p>
                    </div>
                  </div>
                </div>

              </div>
            </div>

            {/* 2. Right Main Card (Booking Form) */}
            <div className="lg:col-span-7 bg-white rounded-3xl p-5 sm:p-8 lg:p-10 border border-slate-200 shadow-xl relative z-10 -mt-6 lg:mt-0">
              
              <div className="flex items-center gap-3 mb-6 pb-4 border-b border-slate-100">
                <div className="p-3 rounded-2xl bg-cyan-50 text-[#005A9C]">
                  <Calendar className="w-6 h-6 text-[#005A9C]" />
                </div>
                <div>
                  <h3 className="text-xl sm:text-2xl font-extrabold text-[#005A9C]">Formulario de Agendamiento</h3>
                </div>
              </div>

              {isSubmitted ? (
                <div className="py-12 text-center space-y-4 animate-in fade-in duration-300">
                  <div className="w-16 h-16 rounded-full bg-emerald-100 text-emerald-600 flex items-center justify-center mx-auto">
                    <CheckCircle className="w-10 h-10" />
                  </div>
                  <h4 className="text-2xl font-bold text-[#005A9C]">¡Solicitud enviada con éxito!</h4>
                  <p className="text-xs text-[#708090] max-w-md mx-auto">
                    Hemos transferido tu solicitud a nuestro canal de recepción en WhatsApp ({CLINIC_PHONE_DISPLAY}). Un asesor se comunicará contigo de inmediato para confirmar tu hora exacta.
                  </p>
                  <button
                    onClick={() => setIsSubmitted(false)}
                    className="px-6 py-2.5 rounded-full bg-[#005A9C] text-white text-xs font-bold uppercase tracking-wider cursor-pointer"
                  >
                    Agendar otra cita
                  </button>
                </div>
              ) : (
                <form onSubmit={handleSubmit} className="space-y-5">
                  {/* Emergency Checkbox Alert */}
                  <div className="p-4 rounded-2xl bg-red-50/80 border border-red-200 flex items-center justify-between">
                    <div className="flex items-center gap-2.5">
                      <AlertCircle className="w-5 h-5 text-red-600 shrink-0" />
                      <div>
                        <p className="text-xs font-bold text-red-700">¿Es una emergencia o dolor agudo?</p>
                        <p className="text-[11px] text-red-600">Marque la casilla para asignación prioritaria 24/7</p>
                      </div>
                    </div>
                    <input
                      type="checkbox"
                      checked={formData.isEmergency}
                      onChange={(e) => setFormData({ ...formData, isEmergency: e.target.checked })}
                      className="w-5 h-5 rounded text-red-600 focus:ring-red-500 cursor-pointer"
                    />
                  </div>

                  {/* Patient Name & Phone */}
                  <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
                    <div>
                      <label className="block text-xs font-bold text-[#005A9C] mb-1">
                        Nombre Completo *
                      </label>
                      <input
                        type="text"
                        required
                        placeholder="Ej. María Fernanda López"
                        value={formData.patientName}
                        onChange={(e) => setFormData({ ...formData, patientName: e.target.value })}
                        className="w-full px-4 py-3 rounded-xl bg-slate-50 border border-slate-200 text-xs focus:outline-none focus:border-[#00BFFF] focus:bg-white text-[#005A9C] transition-all"
                      />
                    </div>

                    <div>
                      <label className="block text-xs font-bold text-[#005A9C] mb-1">
                        Teléfono Móvil (WhatsApp) *
                      </label>
                      <input
                        type="tel"
                        required
                        placeholder="Ej. 099 195 2889"
                        value={formData.phone}
                        onChange={(e) => setFormData({ ...formData, phone: e.target.value })}
                        className="w-full px-4 py-3 rounded-xl bg-slate-50 border border-slate-200 text-xs focus:outline-none focus:border-[#00BFFF] focus:bg-white text-[#005A9C] transition-all"
                      />
                    </div>
                  </div>

                  {/* Email & Specialty */}
                  <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
                    <div>
                      <label className="block text-xs font-bold text-[#005A9C] mb-1">
                        Correo Electrónico
                      </label>
                      <input
                        type="email"
                        placeholder="ejemplo@correo.com"
                        value={formData.email}
                        onChange={(e) => setFormData({ ...formData, email: e.target.value })}
                        className="w-full px-4 py-3 rounded-xl bg-slate-50 border border-slate-200 text-xs focus:outline-none focus:border-[#00BFFF] focus:bg-white text-[#005A9C] transition-all"
                      />
                    </div>

                    <div>
                      <label className="block text-xs font-bold text-[#005A9C] mb-1">
                        Especialidad de Interés
                      </label>
                      <select
                        value={formData.specialtyId}
                        onChange={(e) => setFormData({ ...formData, specialtyId: e.target.value })}
                        className="w-full px-4 py-3 rounded-xl bg-slate-50 border border-slate-200 text-xs focus:outline-none focus:border-[#00BFFF] focus:bg-white text-[#005A9C] font-medium transition-all"
                      >
                        {SPECIALTIES_DATA.map((s) => (
                          <option key={s.id} value={s.id}>
                            {s.title}
                          </option>
                        ))}
                      </select>
                    </div>
                  </div>

                  {/* Preferred Doctor & Date */}
                  <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
                    <div>
                      <label className="block text-xs font-bold text-[#005A9C] mb-1">
                        Especialista Preferido
                      </label>
                      <select
                        value={formData.doctorId}
                        onChange={(e) => setFormData({ ...formData, doctorId: e.target.value })}
                        className="w-full px-4 py-3 rounded-xl bg-slate-50 border border-slate-200 text-xs focus:outline-none focus:border-[#00BFFF] focus:bg-white text-[#005A9C] font-medium transition-all"
                      >
                        {DOCTORS_DATA.map((d) => (
                          <option key={d.id} value={d.id}>
                            {d.name} ({d.specialty})
                          </option>
                        ))}
                      </select>
                    </div>

                    <div>
                      <label className="block text-xs font-bold text-[#005A9C] mb-1">
                        Fecha Preferida
                      </label>
                      <input
                        type="date"
                        value={formData.preferredDate}
                        onChange={(e) => setFormData({ ...formData, preferredDate: e.target.value })}
                        className="w-full px-4 py-3 rounded-xl bg-slate-50 border border-slate-200 text-xs focus:outline-none focus:border-[#00BFFF] focus:bg-white text-[#005A9C] transition-all"
                      />
                    </div>
                  </div>

                  {/* Notes */}
                  <div>
                    <label className="block text-xs font-bold text-[#005A9C] mb-1">
                      Motivo de Consulta o Comentarios
                    </label>
                    <textarea
                      rows={3}
                      placeholder="Describe brevemente lo que te gustaría evaluar o consultar..."
                      value={formData.notes}
                      onChange={(e) => setFormData({ ...formData, notes: e.target.value })}
                      className="w-full px-4 py-3 rounded-xl bg-slate-50 border border-slate-200 text-xs focus:outline-none focus:border-[#00BFFF] focus:bg-white text-[#005A9C] transition-all resize-none"
                    />
                  </div>

                  {/* Submit Button */}
                  <div className="pt-2">
                    <button
                      type="submit"
                      className="w-full py-4 rounded-full bg-gradient-to-r from-[#005A9C] to-[#00BFFF] hover:from-[#00477b] hover:to-[#00a3da] text-white font-bold text-sm uppercase tracking-wider shadow-lg shadow-cyan-500/20 transition-all hover:scale-[1.01] flex items-center justify-center gap-2 cursor-pointer"
                    >
                      <Send className="w-4 h-4 text-white" />
                      <span>Enviar</span>
                    </button>
                  </div>
                </form>
              )}
            </div>

          </div>
        </div>

      </div>
    </section>
  );
};
