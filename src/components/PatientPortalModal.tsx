import React, { useState } from 'react';
import { X, UserCheck, Calendar, FileText, Activity, Lock, ArrowRight, CheckCircle2, Shield } from 'lucide-react';
import { CLINIC_PHONE_DISPLAY, createWhatsAppLink } from '../data/clinicData';

interface PatientPortalModalProps {
  isOpen: boolean;
  onClose: () => void;
}

export const PatientPortalModal: React.FC<PatientPortalModalProps> = ({ isOpen, onClose }) => {
  const [isLoggedIn, setIsLoggedIn] = useState(false);
  const [cedula, setCedula] = useState('');
  const [pin, setPin] = useState('');

  if (!isOpen) return null;

  const handleLogin = (e: React.FormEvent) => {
    e.preventDefault();
    if (cedula.trim()) {
      setIsLoggedIn(true);
    }
  };

  return (
    <div className="fixed inset-0 z-50 flex items-center justify-center p-4 bg-black/60 backdrop-blur-sm animate-in fade-in duration-200">
      <div className="bg-white/95 backdrop-blur-xl rounded-3xl max-w-2xl w-full border border-[#00BFFF]/20 shadow-2xl overflow-hidden relative animate-in zoom-in-95 duration-200 max-h-[90vh] flex flex-col">
        
        {/* Modal Header */}
        <div className="bg-gradient-to-r from-[#005A9C] to-[#00BFFF] p-6 text-white flex items-center justify-between">
          <div className="flex items-center gap-3">
            <div className="p-2.5 rounded-2xl bg-white/10 backdrop-blur-md">
              <UserCheck className="w-6 h-6 text-cyan-200" />
            </div>
            <div>
              <h3 className="text-xl font-bold">Portal Digital del Paciente</h3>
              <p className="text-xs text-cyan-100 opacity-90">Cielo Dental — Historial clínico y radiografías 3D</p>
            </div>
          </div>
          <button
            onClick={onClose}
            className="p-2 rounded-full bg-white/10 hover:bg-white/20 text-white transition-colors"
          >
            <X className="w-5 h-5" />
          </button>
        </div>

        {/* Modal Content */}
        <div className="p-6 sm:p-8 overflow-y-auto">
          {!isLoggedIn ? (
            /* Login Simulation Form */
            <div className="space-y-6">
              <div className="text-center max-w-md mx-auto space-y-2">
                <div className="w-12 h-12 rounded-2xl bg-cyan-50 text-[#005A9C] flex items-center justify-center mx-auto border border-cyan-100">
                  <Lock className="w-6 h-6 text-[#00BFFF]" />
                </div>
                <h4 className="text-lg font-bold text-[#005A9C]">Acceso Seguro a tu Expediente</h4>
                <p className="text-xs text-[#708090]">
                  Ingresa tu Cédula o número de documento y PIN temporal enviado a tu celular registrado.
                </p>
              </div>

              <form onSubmit={handleLogin} className="max-w-md mx-auto space-y-4">
                <div>
                  <label className="block text-xs font-bold text-[#005A9C] mb-1">
                    Cédula / Documento de Identidad
                  </label>
                  <input
                    type="text"
                    required
                    placeholder="Ej. 1723456789"
                    value={cedula}
                    onChange={(e) => setCedula(e.target.value)}
                    className="w-full px-4 py-3 rounded-xl bg-slate-50 border border-slate-200 text-xs text-[#005A9C] focus:outline-none focus:border-[#00BFFF]"
                  />
                </div>

                <div>
                  <label className="block text-xs font-bold text-[#005A9C] mb-1">
                    Clave de Acceso / PIN
                  </label>
                  <input
                    type="password"
                    placeholder="••••••••"
                    value={pin}
                    onChange={(e) => setPin(e.target.value)}
                    className="w-full px-4 py-3 rounded-xl bg-slate-50 border border-slate-200 text-xs text-[#005A9C] focus:outline-none focus:border-[#00BFFF]"
                  />
                </div>

                <button
                  type="submit"
                  className="w-full py-3.5 rounded-full bg-[#005A9C] hover:bg-[#00477b] text-white font-bold text-xs uppercase tracking-wider transition-all shadow-md"
                >
                  Ingresar a mi Portal
                </button>
              </form>

              <div className="text-center text-xs text-[#708090] border-t border-slate-100 pt-4">
                ¿Aún no tienes clave de acceso? Solicítala por WhatsApp a Recepción ({CLINIC_PHONE_DISPLAY}){' '}
                <a
                  href={createWhatsAppLink("Hola Cielo Dental, quisiera solicitar mi PIN de acceso al Portal del Paciente.")}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="text-[#005A9C] font-bold underline hover:text-[#00BFFF]"
                >
                  Solicitar PIN
                </a>
              </div>
            </div>
          ) : (
            /* Patient Dashboard View Mock */
            <div className="space-y-6">
              <div className="p-4 rounded-2xl bg-cyan-50 border border-cyan-100 flex items-center justify-between">
                <div>
                  <p className="text-xs font-bold text-[#005A9C]">Paciente Activo: C.I. {cedula}</p>
                  <p className="text-[11px] text-[#708090]">Tratamiento actual: Ortodoncia Invisible (Alineador #4)</p>
                </div>
                <button
                  onClick={() => setIsLoggedIn(false)}
                  className="text-xs font-bold text-red-600 underline"
                >
                  Cerrar Sesión
                </button>
              </div>

              {/* Patient Modules */}
              <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
                <div className="p-4 rounded-2xl bg-slate-50 border border-slate-200 space-y-2">
                  <div className="flex items-center gap-2 text-[#005A9C] font-bold text-xs">
                    <Calendar className="w-4 h-4 text-[#00BFFF]" />
                    <span>Próxima Cita</span>
                  </div>
                  <p className="text-sm font-extrabold text-[#005A9C]">Jueves 28 de Julio - 10:30 AM</p>
                  <p className="text-[11px] text-[#708090]">Control de Alineadores con Dra. Sofía Benítez</p>
                </div>

                <div className="p-4 rounded-2xl bg-slate-50 border border-slate-200 space-y-2">
                  <div className="flex items-center gap-2 text-[#005A9C] font-bold text-xs">
                    <Activity className="w-4 h-4 text-[#00BFFF]" />
                    <span>Progreso del Tratamiento</span>
                  </div>
                  <div className="w-full bg-slate-200 h-2.5 rounded-full overflow-hidden">
                    <div className="bg-gradient-to-r from-[#005A9C] to-[#00BFFF] h-full w-[65%]" />
                  </div>
                  <p className="text-[11px] text-[#005A9C] font-bold">65% Completado (Etapa 2 de 3)</p>
                </div>
              </div>

              {/* Digital X-Rays / Documents */}
              <div className="p-4 rounded-2xl border border-slate-200 space-y-3">
                <p className="text-xs font-bold text-[#005A9C] flex items-center gap-1.5">
                  <FileText className="w-4 h-4 text-[#00BFFF]" />
                  Estudios Radiográficos & Escaneo 3D
                </p>
                <div className="flex items-center justify-between p-3 rounded-xl bg-slate-50 text-xs">
                  <div>
                    <p className="font-bold text-[#005A9C]">Escaneo_Intraoral_3D_Maxilar.stl</p>
                    <p className="text-[10px] text-[#708090]">Fecha: 12/06/2026 — Tamaño: 14.2 MB</p>
                  </div>
                  <span className="text-[11px] font-bold text-[#00BFFF] cursor-pointer hover:underline">
                    Ver en 3D
                  </span>
                </div>
              </div>

              <div className="pt-2 flex justify-end">
                <button
                  onClick={onClose}
                  className="px-6 py-2.5 rounded-full bg-[#005A9C] text-white text-xs font-bold uppercase tracking-wider"
                >
                  Entendido / Volver al Sitio
                </button>
              </div>
            </div>
          )}
        </div>

      </div>
    </div>
  );
};
