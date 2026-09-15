import React, { useState, useEffect } from 'react';
import { X, Calendar, ShieldCheck, AlertCircle } from 'lucide-react';
import { WhatsAppIcon } from './OfficialSocialLogos';
import { SPECIALTIES_DATA, DOCTOR_NAME, CLINIC_PHONE_DISPLAY, createWhatsAppLink } from '../data/clinicData';

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
  const [formData, setFormData] = useState({
    name: '',
    phone: '',
    specialtyId: preselectedSpecialtyId,
    date: '',
    time: 'Mañana (08:30 - 12:00)',
    notes: '',
    isEmergency: false,
  });

  useEffect(() => {
    if (preselectedSpecialtyId) {
      setFormData((prev) => ({ ...prev, specialtyId: preselectedSpecialtyId }));
    }
  }, [preselectedSpecialtyId]);

  useEffect(() => {
    const handleKeyDown = (e: KeyboardEvent) => {
      if (e.key === 'Escape') onClose();
    };
    if (isOpen) {
      document.body.style.overflow = 'hidden';
      window.addEventListener('keydown', handleKeyDown);
    } else {
      document.body.style.overflow = 'auto';
    }
    return () => {
      document.body.style.overflow = 'auto';
      window.removeEventListener('keydown', handleKeyDown);
    };
  }, [isOpen, onClose]);

  if (!isOpen) return null;

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    const spec = SPECIALTIES_DATA.find((s) => s.id === formData.specialtyId)?.title || 'Evaluación General';

    const msg = formData.isEmergency
      ? `¡URGENCIA DENTAL!
Hola ${DOCTOR_NAME}, solicito atención prioritaria urgente:
- Paciente: ${formData.name}
- Teléfono: ${formData.phone}
- Motivo: ${formData.notes || 'Dolor o traumatismo dental agudo.'}`
      : `Hola ${DOCTOR_NAME}, deseo reservar una cita de valoración desde su web:
- Paciente: ${formData.name}
- Teléfono: ${formData.phone}
- Tratamiento: ${spec}
- Fecha sugerida: ${formData.date || 'Lo antes posible'}
- Horario preferido: ${formData.time}
- Comentarios: ${formData.notes || 'Primera consulta'}`;

    window.open(createWhatsAppLink(msg), '_blank');
    onClose();
  };

  return (
    <div className="fixed inset-0 z-50 flex items-center justify-center p-4 bg-slate-950/70 backdrop-blur-sm animate-in fade-in duration-200">
      <div
        className="relative w-full max-w-lg bg-white rounded-[2.5rem] p-7 sm:p-9 shadow-2xl max-h-[90vh] overflow-y-auto border border-white"
        onClick={(e) => e.stopPropagation()}
      >
        {/* Close Button */}
        <button
          onClick={onClose}
          className="absolute top-6 right-6 p-2.5 rounded-full text-slate-400 hover:text-slate-600 hover:bg-slate-100 transition-all cursor-pointer"
          aria-label="Cerrar ventana"
        >
          <X className="w-5 h-5" />
        </button>

        {/* Modal Header */}
        <div className="flex items-center gap-3.5 mb-6 pb-3 border-b border-slate-100">
          <div className="w-12 h-12 rounded-full bg-cyan-100 text-[#005A9C] flex items-center justify-center">
            <Calendar className="w-6 h-6 text-[#005A9C]" />
          </div>
          <div>
            <h3 className="text-xl font-bold text-[#0A2540]">Reservar Valoración Dental</h3>
            <p className="text-xs text-slate-500">Confirmación inmediata vía WhatsApp ({CLINIC_PHONE_DISPLAY})</p>
          </div>
        </div>

        {/* Form */}
        <form onSubmit={handleSubmit} className="space-y-4">
          
          {/* Emergency Option */}
          <div className="p-3.5 rounded-full bg-red-50 flex items-center justify-between px-5">
            <div className="flex items-center gap-2">
              <AlertCircle className="w-4 h-4 text-red-600 shrink-0" />
              <span className="text-xs font-bold text-red-700">¿Es un caso de urgencia dental?</span>
            </div>
            <input
              type="checkbox"
              checked={formData.isEmergency}
              onChange={(e) => setFormData({ ...formData, isEmergency: e.target.checked })}
              className="w-4 h-4 text-red-600 rounded cursor-pointer"
            />
          </div>

          <div>
            <label className="block text-xs font-bold text-[#0A2540] mb-1 pl-2">
              Nombre Completo *
            </label>
            <input
              type="text"
              required
              placeholder="Ej. Sofía Andrade"
              value={formData.name}
              onChange={(e) => setFormData({ ...formData, name: e.target.value })}
              className="w-full px-5 py-3 rounded-full bg-slate-50 text-xs focus:outline-none focus:ring-2 focus:ring-[#00BFFF]/40 text-slate-800"
            />
          </div>

          <div>
            <label className="block text-xs font-bold text-[#0A2540] mb-1 pl-2">
              Teléfono WhatsApp *
            </label>
            <input
              type="tel"
              required
              placeholder="Ej. +593 98 231 5408"
              value={formData.phone}
              onChange={(e) => setFormData({ ...formData, phone: e.target.value })}
              className="w-full px-5 py-3 rounded-full bg-slate-50 text-xs focus:outline-none focus:ring-2 focus:ring-[#00BFFF]/40 text-slate-800"
            />
          </div>

          <div>
            <label className="block text-xs font-bold text-[#0A2540] mb-1 pl-2">
              Tratamiento de Interés
            </label>
            <select
              value={formData.specialtyId}
              onChange={(e) => setFormData({ ...formData, specialtyId: e.target.value })}
              className="w-full px-5 py-3 rounded-full bg-slate-50 text-xs focus:outline-none focus:ring-2 focus:ring-[#00BFFF]/40 text-slate-800 font-medium cursor-pointer"
            >
              {SPECIALTIES_DATA.map((s) => (
                <option key={s.id} value={s.id}>
                  {s.title}
                </option>
              ))}
            </select>
          </div>

          <div className="grid grid-cols-2 gap-3">
            <div>
              <label className="block text-xs font-bold text-[#0A2540] mb-1 pl-2">
                Fecha Deseada
              </label>
              <input
                type="date"
                value={formData.date}
                onChange={(e) => setFormData({ ...formData, date: e.target.value })}
                className="w-full px-4 py-3 rounded-full bg-slate-50 text-xs focus:outline-none focus:ring-2 focus:ring-[#00BFFF]/40 text-slate-800"
              />
            </div>

            <div>
              <label className="block text-xs font-bold text-[#0A2540] mb-1 pl-2">
                Horario Preferido
              </label>
              <select
                value={formData.time}
                onChange={(e) => setFormData({ ...formData, time: e.target.value })}
                className="w-full px-4 py-3 rounded-full bg-slate-50 text-xs focus:outline-none focus:ring-2 focus:ring-[#00BFFF]/40 text-slate-800 cursor-pointer"
              >
                <option value="Mañana (08:30 - 12:00)">Mañana</option>
                <option value="Mediodía (12:00 - 15:00)">Mediodía</option>
                <option value="Tarde (15:00 - 19:00)">Tarde</option>
              </select>
            </div>
          </div>

          <div>
            <label className="block text-xs font-bold text-[#0A2540] mb-1 pl-2">
              Notas Adicionales
            </label>
            <textarea
              rows={2}
              placeholder="¿Algún síntoma específico o detalle a considerar?"
              value={formData.notes}
              onChange={(e) => setFormData({ ...formData, notes: e.target.value })}
              className="w-full px-5 py-3 rounded-3xl bg-slate-50 text-xs focus:outline-none focus:ring-2 focus:ring-[#00BFFF]/40 text-slate-800 resize-none"
            />
          </div>

          <button
            type="submit"
            className="w-full py-4 rounded-full bg-gradient-to-r from-[#005A9C] via-[#0084DE] to-[#00BFFF] hover:from-[#00477b] hover:to-[#009cd1] text-white font-extrabold text-xs uppercase tracking-wider shadow-lg shadow-cyan-500/20 transition-all hover:scale-[1.01] flex items-center justify-center gap-2 cursor-pointer mt-2"
          >
            <WhatsAppIcon className="w-4 h-4 text-emerald-300" />
            <span>Enviar Solicitud por WhatsApp</span>
          </button>
        </form>

        <div className="mt-4 text-center">
          <p className="text-[11px] text-slate-400 flex items-center justify-center gap-1">
            <ShieldCheck className="w-3.5 h-3.5 text-emerald-500" />
            <span>Tus datos son confidenciales y están protegidos por secreto médico.</span>
          </p>
        </div>
      </div>
    </div>
  );
};
