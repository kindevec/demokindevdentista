import React, { useState, useEffect } from 'react';
import { X, Calendar, Clock, User, Phone, CheckCircle, Send, Sparkles } from 'lucide-react';
import { SPECIALTIES_DATA, DOCTORS_DATA, CLINIC_PHONE_DISPLAY, createWhatsAppLink } from '../data/clinicData';

interface AppointmentModalProps {
  isOpen: boolean;
  onClose: () => void;
  preselectedSpecialtyId?: string;
}

export const AppointmentModal: React.FC<AppointmentModalProps> = ({
  isOpen,
  onClose,
  preselectedSpecialtyId = 'ortodoncia',
}) => {
  const [patientName, setPatientName] = useState('');
  const [phone, setPhone] = useState('');
  const [specialtyId, setSpecialtyId] = useState(preselectedSpecialtyId);
  const [doctorId, setDoctorId] = useState('dr-carlos');
  const [preferredDate, setPreferredDate] = useState('');
  const [preferredTime, setPreferredTime] = useState('09:00 AM');
  const [isDone, setIsDone] = useState(false);

  useEffect(() => {
    if (preselectedSpecialtyId) {
      setSpecialtyId(preselectedSpecialtyId);
    }
  }, [preselectedSpecialtyId]);

  if (!isOpen) return null;

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    const spec = SPECIALTIES_DATA.find((s) => s.id === specialtyId)?.title || 'Odontología General';
    const doc = DOCTORS_DATA.find((d) => d.id === doctorId)?.name || 'Cualquier especialista';

    const message = `Hola Cielo Dental, me gustaría confirmar una cita médica desde su sitio web:
- Paciente: ${patientName}
- Teléfono: ${phone}
- Especialidad: ${spec}
- Doctor: ${doc}
- Fecha Deseada: ${preferredDate || 'Lo antes posible'}
- Horario: ${preferredTime}`;

    window.open(createWhatsAppLink(message), '_blank');
    setIsDone(true);
  };

  return (
    <div className="fixed inset-0 z-50 flex items-center justify-center p-4 bg-black/60 backdrop-blur-sm animate-in fade-in duration-200">
      <div className="bg-white/95 backdrop-blur-xl rounded-3xl max-w-lg w-full border border-[#00BFFF]/20 shadow-2xl overflow-hidden relative animate-in zoom-in-95 duration-200 max-h-[90vh] flex flex-col">
        
        {/* Header */}
        <div className="bg-gradient-to-r from-[#005A9C] to-[#00BFFF] p-6 text-white flex items-center justify-between">
          <div className="flex items-center gap-3">
            <div className="p-2.5 rounded-2xl bg-white/10 backdrop-blur-md">
              <Calendar className="w-6 h-6 text-cyan-200" />
            </div>
            <div>
              <h3 className="text-xl font-bold">Agendar Cita Médica</h3>
              <p className="text-xs text-cyan-100 opacity-90">Confirmación directa con Recepción</p>
            </div>
          </div>
          <button
            onClick={onClose}
            className="p-2 rounded-full bg-white/10 hover:bg-white/20 text-white transition-colors"
          >
            <X className="w-5 h-5" />
          </button>
        </div>

        {/* Content */}
        <div className="p-6 sm:p-8 overflow-y-auto">
          {isDone ? (
            <div className="text-center py-8 space-y-4">
              <div className="w-16 h-16 rounded-full bg-emerald-100 text-emerald-600 flex items-center justify-center mx-auto">
                <CheckCircle className="w-10 h-10" />
              </div>
              <h4 className="text-2xl font-bold text-[#005A9C]">¡Cita redirigida a WhatsApp!</h4>
              <p className="text-xs text-[#708090]">
                Tu mensaje ha sido generado para la línea oficial {CLINIC_PHONE_DISPLAY}. Te responderemos en menos de 5 minutos.
              </p>
              <button
                onClick={() => {
                  setIsDone(false);
                  onClose();
                }}
                className="px-6 py-2.5 rounded-full bg-[#005A9C] text-white text-xs font-bold uppercase tracking-wider"
              >
                Cerrar Ventana
              </button>
            </div>
          ) : (
            <form onSubmit={handleSubmit} className="space-y-4">
              <div>
                <label className="block text-xs font-bold text-[#005A9C] mb-1">
                  Nombre del Paciente *
                </label>
                <input
                  type="text"
                  required
                  placeholder="Tu nombre completo"
                  value={patientName}
                  onChange={(e) => setPatientName(e.target.value)}
                  className="w-full px-4 py-3 rounded-xl bg-slate-50 border border-slate-200 text-xs text-[#005A9C] focus:outline-none focus:border-[#00BFFF]"
                />
              </div>

              <div>
                <label className="block text-xs font-bold text-[#005A9C] mb-1">
                  Número de WhatsApp *
                </label>
                <input
                  type="tel"
                  required
                  placeholder="Ej. 099 195 2889"
                  value={phone}
                  onChange={(e) => setPhone(e.target.value)}
                  className="w-full px-4 py-3 rounded-xl bg-slate-50 border border-slate-200 text-xs text-[#005A9C] focus:outline-none focus:border-[#00BFFF]"
                />
              </div>

              <div className="grid grid-cols-1 sm:grid-cols-2 gap-3">
                <div>
                  <label className="block text-xs font-bold text-[#005A9C] mb-1">
                    Especialidad
                  </label>
                  <select
                    value={specialtyId}
                    onChange={(e) => setSpecialtyId(e.target.value)}
                    className="w-full px-3 py-2.5 rounded-xl bg-slate-50 border border-slate-200 text-xs text-[#005A9C] font-semibold"
                  >
                    {SPECIALTIES_DATA.map((s) => (
                      <option key={s.id} value={s.id}>
                        {s.title}
                      </option>
                    ))}
                  </select>
                </div>

                <div>
                  <label className="block text-xs font-bold text-[#005A9C] mb-1">
                    Especialista
                  </label>
                  <select
                    value={doctorId}
                    onChange={(e) => setDoctorId(e.target.value)}
                    className="w-full px-3 py-2.5 rounded-xl bg-slate-50 border border-slate-200 text-xs text-[#005A9C] font-semibold"
                  >
                    {DOCTORS_DATA.map((d) => (
                      <option key={d.id} value={d.id}>
                        {d.name}
                      </option>
                    ))}
                  </select>
                </div>
              </div>

              <div className="grid grid-cols-1 sm:grid-cols-2 gap-3">
                <div>
                  <label className="block text-xs font-bold text-[#005A9C] mb-1">
                    Fecha Deseada
                  </label>
                  <input
                    type="date"
                    value={preferredDate}
                    onChange={(e) => setPreferredDate(e.target.value)}
                    className="w-full px-3 py-2.5 rounded-xl bg-slate-50 border border-slate-200 text-xs text-[#005A9C]"
                  />
                </div>

                <div>
                  <label className="block text-xs font-bold text-[#005A9C] mb-1">
                    Horario
                  </label>
                  <select
                    value={preferredTime}
                    onChange={(e) => setPreferredTime(e.target.value)}
                    className="w-full px-3 py-2.5 rounded-xl bg-slate-50 border border-slate-200 text-xs text-[#005A9C] font-semibold"
                  >
                    <option value="09:00 AM">09:00 AM - Mañana</option>
                    <option value="11:30 AM">11:30 AM - Mañana</option>
                    <option value="03:00 PM">03:00 PM - Tarde</option>
                    <option value="05:30 PM">05:30 PM - Tarde</option>
                  </select>
                </div>
              </div>

              <button
                type="submit"
                className="w-full py-4 rounded-full bg-[#005A9C] hover:bg-[#00477b] text-white font-bold text-xs uppercase tracking-wider transition-all shadow-md flex items-center justify-center gap-2 mt-4"
              >
                <Send className="w-4 h-4 text-[#00BFFF]" />
                <span>Enviar Reserva por WhatsApp</span>
              </button>
            </form>
          )}
        </div>

      </div>
    </div>
  );
};
