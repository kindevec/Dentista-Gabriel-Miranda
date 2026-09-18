import React, { useState, useEffect } from 'react';
import { motion, AnimatePresence } from 'motion/react';
import {
  SOCIAL_NETWORKS,
  CLINIC_PHONE_DISPLAY,
  CLINIC_EMAIL,
  CLINIC_ADDRESS,
  CLINIC_CITY,
  CLINIC_HOURS,
  SPECIALTIES_DATA,
  DOCTOR_NAME,
  createWhatsAppLink,
  VALUATION_PRICE,
  FINANCING_INFO
} from '../data/clinicData';
import { CLINICAL_SPECIALTIES } from '../data/clinicalSpecialtiesData';
import {
  MapPin,
  Phone,
  Mail,
  Clock,
  CheckCircle,
  ExternalLink,
  ArrowRight,
  CreditCard
} from 'lucide-react';
import {
  OfficialWhatsAppLogo,
  OfficialInstagramLogo,
  OfficialFacebookLogo,
  WhatsAppIcon
} from './OfficialSocialLogos';
import {
  LuxuryTreatmentSelect,
  LuxuryTimeSelect,
  LuxuryDatePicker,
  TREATMENT_OPTIONS
} from './ui/LuxuryFormControls';

interface SocialAndContactSectionProps {
  preselectedSpecialty?: string;
}

export const SocialAndContactSection: React.FC<SocialAndContactSectionProps> = ({
  preselectedSpecialty = 'rehabilitacion-oral',
}) => {
  const [formData, setFormData] = useState({
    patientName: '',
    phone: '',
    email: '',
    specialtyId: preselectedSpecialty,
    preferredDate: '',
    preferredTime: 'Mañana (09:00 - 12:00)',
    notes: '',
    isEmergency: false,
  });

  const [isSubmitted, setIsSubmitted] = useState(false);

  useEffect(() => {
    if (preselectedSpecialty) {
      setFormData((prev) => ({ ...prev, specialtyId: preselectedSpecialty }));
    }
  }, [preselectedSpecialty]);

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();

    const matchedTreatment = TREATMENT_OPTIONS.find((t) => t.id === formData.specialtyId);
    const matchedService = SPECIALTIES_DATA.find((s) => s.id === formData.specialtyId)
      || CLINICAL_SPECIALTIES.find((s) => s.id === formData.specialtyId);
    const serviceName = matchedTreatment ? matchedTreatment.title : (matchedService ? matchedService.title : 'Consulta de Valoración Médica');

    const messageLines = [
      `*SOLICITUD DE CITA EN MIRANDA DENTAL STUDIO*`,
      `👤 *Paciente:* ${formData.patientName}`,
      `📞 *Teléfono:* ${formData.phone}`,
      formData.email ? `✉️ *Email:* ${formData.email}` : '',
      `🦷 *Motivo / Tratamiento:* ${serviceName}`,
      formData.preferredDate ? `📅 *Fecha Sugerida:* ${formData.preferredDate}` : '',
      `⏰ *Franja Horaria:* ${formData.preferredTime}`,
      `💳 *Valoración:* $${VALUATION_PRICE} (Incluye Diagnóstico, Fotos y Rayos X)`,
      formData.isEmergency ? `🚨 *Condición:* ¡PRESENTA DOLOR O URGENCIA PRIORITARIA!` : '',
      formData.notes ? `📝 *Nota Médica:* ${formData.notes}` : '',
    ].filter(Boolean);

    const fullMessage = messageLines.join('\n');
    const waUrl = createWhatsAppLink(fullMessage);

    setIsSubmitted(true);

    setTimeout(() => {
      window.open(waUrl, '_blank');
      setIsSubmitted(false);
    }, 900);
  };

  return (
    <section id="contacto" className="py-8 sm:py-12 relative overflow-hidden bg-gradient-to-b from-white via-[#FAF9F5] to-white scroll-mt-16">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10 pb-2 sm:pb-3">
        
        {/* Section Header */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, amount: 0.3 }}
          transition={{ duration: 0.5 }}
          className="text-center max-w-3xl mx-auto mb-5 sm:mb-7 space-y-2"
        >
          <h2 className="text-3xl sm:text-4xl lg:text-5xl font-extrabold text-[#0D0D0D] tracking-tight">
            Agenda tu <span className="text-transparent bg-clip-text bg-gradient-to-r from-[#C5A059] via-[#D4AF37] to-[#84631E]">Valoración de $15</span>
          </h2>
          <p className="text-sm sm:text-base text-stone-600 max-w-xl mx-auto">
            Diagnóstico clínico completo, fotografías y radiografías dentales con el {DOCTOR_NAME}. Atendemos de Lunes a Domingo.
          </p>
        </motion.div>

        {/* Split Layout: Booking Form + Location & Financing */}
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-8 lg:gap-10 items-start">
          
          {/* Left Column (7 cols): Formulario directo sobre el lienzo */}
          <motion.div
            initial={{ opacity: 0, x: -20 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true, amount: 0.2 }}
            transition={{ duration: 0.5 }}
            className="lg:col-span-7 flex flex-col justify-between"
          >
            <div className="mb-4">
              <span className="text-xs font-black tracking-widest text-[#84631E] uppercase mb-1 block">
                Agendamiento Inmediato • Miranda Dental Studio
              </span>
              <h3 className="text-2xl sm:text-3xl font-black text-[#0D0D0D] tracking-tight">
                Reserva tu Cita en Línea
              </h3>
              <p className="text-xs sm:text-sm text-stone-600 mt-1 leading-relaxed">
                Completa tus datos y serás transferido a nuestro WhatsApp oficial con tu cita preparada.
              </p>
            </div>

            <form onSubmit={handleSubmit} className="space-y-4">
              {/* Patient Name */}
              <div>
                <label className="block text-[11px] font-bold text-[#0D0D0D] uppercase tracking-wider mb-1.5 pl-1">
                  Nombre y Apellido *
                </label>
                <input
                  type="text"
                  required
                  placeholder="Ej. María Fernanda Morales"
                  value={formData.patientName}
                  onChange={(e) => setFormData({ ...formData, patientName: e.target.value })}
                  className="w-full px-5 py-3.5 rounded-2xl bg-white border border-stone-300 shadow-xs focus:border-[#D4AF37] focus:ring-3 focus:ring-[#D4AF37]/20 text-stone-800 placeholder:text-stone-400 text-sm transition-all outline-none"
                />
              </div>

              {/* Phone & Email */}
              <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
                <div>
                  <label className="block text-[11px] font-bold text-[#0D0D0D] uppercase tracking-wider mb-1.5 pl-1">
                    Teléfono Celular / WhatsApp *
                  </label>
                  <input
                    type="tel"
                    required
                    placeholder="+593 98 231 5408"
                    value={formData.phone}
                    onChange={(e) => setFormData({ ...formData, phone: e.target.value })}
                    className="w-full px-5 py-3.5 rounded-2xl bg-white border border-stone-300 shadow-xs focus:border-[#D4AF37] focus:ring-3 focus:ring-[#D4AF37]/20 text-stone-800 placeholder:text-stone-400 text-sm transition-all outline-none"
                  />
                </div>
                <div>
                  <label className="block text-[11px] font-bold text-[#0D0D0D] uppercase tracking-wider mb-1.5 pl-1">
                    Correo Electrónico (Opcional)
                  </label>
                  <input
                    type="email"
                    placeholder="paciente@correo.com"
                    value={formData.email}
                    onChange={(e) => setFormData({ ...formData, email: e.target.value })}
                    className="w-full px-5 py-3.5 rounded-2xl bg-white border border-stone-300 shadow-xs focus:border-[#D4AF37] focus:ring-3 focus:ring-[#D4AF37]/20 text-stone-800 placeholder:text-stone-400 text-sm transition-all outline-none"
                  />
                </div>
              </div>

              {/* Specialty Select (Custom Luxury Dropdown) */}
              <div>
                <label className="block text-[11px] font-bold text-[#0D0D0D] uppercase tracking-wider mb-1.5 pl-1">
                  Tratamiento o Motivo de Consulta *
                </label>
                <LuxuryTreatmentSelect
                  value={formData.specialtyId}
                  onChange={(val) => setFormData({ ...formData, specialtyId: val })}
                />
              </div>

              {/* Preferred Date & Time (Custom Luxury Dropdowns) */}
              <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
                <div>
                  <label className="block text-[11px] font-bold text-[#0D0D0D] uppercase tracking-wider mb-1.5 pl-1">
                    Fecha Deseada
                  </label>
                  <LuxuryDatePicker
                    value={formData.preferredDate}
                    onChange={(val) => setFormData({ ...formData, preferredDate: val })}
                  />
                </div>
                <div>
                  <label className="block text-[11px] font-bold text-[#0D0D0D] uppercase tracking-wider mb-1.5 pl-1">
                    Horario Preferido
                  </label>
                  <LuxuryTimeSelect
                    value={formData.preferredTime}
                    onChange={(val) => setFormData({ ...formData, preferredTime: val })}
                  />
                </div>
              </div>

              {/* Clinical Notes */}
              <div>
                <label className="block text-[11px] font-bold text-[#0D0D0D] uppercase tracking-wider mb-1.5 pl-1">
                  Notas Adicionales o Síntomas
                </label>
                <textarea
                  rows={3}
                  placeholder="Describe brevemente tu molestia dental o el resultado estético que buscas..."
                  value={formData.notes}
                  onChange={(e) => setFormData({ ...formData, notes: e.target.value })}
                  className="w-full px-5 py-3.5 rounded-2xl bg-white border border-stone-300 shadow-xs focus:border-[#D4AF37] focus:ring-3 focus:ring-[#D4AF37]/20 text-stone-800 placeholder:text-stone-400 text-sm transition-all outline-none resize-none"
                />
              </div>

              {/* Emergency Checkbox */}
              <label className="flex items-center gap-3 p-3.5 rounded-2xl bg-amber-50/70 border border-amber-200/80 cursor-pointer">
                <input
                  type="checkbox"
                  checked={formData.isEmergency}
                  onChange={(e) => setFormData({ ...formData, isEmergency: e.target.checked })}
                  className="w-4 h-4 rounded text-[#D4AF37] focus:ring-[#D4AF37] border-amber-300"
                />
                <span className="text-xs text-stone-800 font-medium leading-tight">
                  Presento <strong className="font-bold text-amber-900">dolor agudo</strong> o requiero atención médica urgente prioritaria
                </span>
              </label>

              {/* Submit Button */}
              <motion.button
                whileHover={{ scale: 1.015 }}
                whileTap={{ scale: 0.985 }}
                type="submit"
                className="w-full py-4 rounded-2xl bg-gradient-to-r from-[#D4AF37] via-[#F3E5AB] to-[#C5A059] hover:from-[#C5A059] hover:to-[#84631E] text-[#0B0B0B] font-black text-xs uppercase tracking-wider transition-all duration-300 shadow-lg shadow-amber-950/15 flex items-center justify-center gap-2.5 cursor-pointer mt-2 border border-[#D4AF37]/60"
              >
                <WhatsAppIcon className="w-5 h-5 text-[#0B0B0B]" />
                <span>Confirmar y Enviar Solicitud por WhatsApp ($15)</span>
                <ArrowRight className="w-4 h-4 text-[#0B0B0B]" />
              </motion.button>

              <AnimatePresence>
                {isSubmitted && (
                  <motion.div
                    initial={{ opacity: 0, y: 10 }}
                    animate={{ opacity: 1, y: 0 }}
                    exit={{ opacity: 0 }}
                    className="p-4 rounded-2xl bg-emerald-50 border border-emerald-200/80 text-emerald-800 text-xs font-semibold flex items-center justify-center gap-2"
                  >
                    <CheckCircle className="w-4 h-4 text-emerald-600 shrink-0" />
                    <span>¡Solicitud preparada! Serás redirigido a WhatsApp para enviar el mensaje a Miranda Dental Studio.</span>
                  </motion.div>
                )}
              </AnimatePresence>
            </form>

            {/* Official Social Channels - Strictly Standalone Icons */}
            <div className="pt-5 mt-5 border-t border-stone-200/70 flex flex-col sm:flex-row sm:items-center justify-between gap-3">
              <p className="text-xs font-semibold text-stone-500">
                O contáctanos en nuestros canales oficiales:
              </p>
              <div className="flex items-center gap-3.5">
                {SOCIAL_NETWORKS.map((social) => (
                  <a
                    key={social.id}
                    href={social.url}
                    target="_blank"
                    rel="noopener noreferrer"
                    aria-label={social.name}
                    className="transition-transform duration-200 hover:scale-115 active:scale-95 cursor-pointer focus:outline-none focus-visible:ring-2 focus-visible:ring-[#D4AF37] rounded-full inline-flex"
                  >
                    {social.id === 'whatsapp' && <OfficialWhatsAppLogo className="w-8 h-8 drop-shadow-xs" />}
                    {social.id === 'instagram' && <OfficialInstagramLogo className="w-8 h-8 drop-shadow-xs" />}
                    {social.id === 'facebook' && <OfficialFacebookLogo className="w-8 h-8 drop-shadow-xs" />}
                  </a>
                ))}
              </div>
            </div>
          </motion.div>

          {/* Right Column (5 cols): Real Location, Payment Methods & Google Maps */}
          <motion.div
            initial={{ opacity: 0, x: 20 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true, amount: 0.2 }}
            transition={{ duration: 0.6 }}
            className="lg:col-span-5 flex flex-col justify-between space-y-6"
          >
            {/* Sede Information */}
            <div className="space-y-5">
              <div>
                <span className="text-xs font-black tracking-widest text-[#84631E] uppercase mb-1.5 block">
                  Ubicación & Consultorio Clínico
                </span>
                <h3 className="text-2xl sm:text-3xl font-black text-[#0D0D0D] tracking-tight">
                  Miranda Dental Studio
                </h3>
                <p className="text-xs sm:text-sm text-stone-600 mt-1 leading-relaxed">
                  Instalaciones de primer nivel con parqueadero privado en planta baja para tu total comodidad.
                </p>
              </div>

              {/* Contact Rows */}
              <div className="space-y-4">
                <div className="flex items-start gap-3.5">
                  <div className="w-9 h-9 rounded-xl bg-[#FAF7EE] border border-[#D4AF37]/40 text-[#84631E] shrink-0 flex items-center justify-center mt-0.5 shadow-2xs">
                    <MapPin className="w-4 h-4 text-[#84631E]" />
                  </div>
                  <div>
                    <h4 className="text-[11px] font-bold text-stone-400 uppercase tracking-wider">Dirección</h4>
                    <p className="text-sm font-bold text-[#0D0D0D] leading-snug">{CLINIC_ADDRESS}</p>
                    <p className="text-xs font-semibold text-[#84631E] mt-0.5">{CLINIC_CITY}</p>
                  </div>
                </div>

                <div className="flex items-start gap-3.5">
                  <div className="w-9 h-9 rounded-xl bg-[#FAF7EE] border border-[#D4AF37]/40 text-[#84631E] shrink-0 flex items-center justify-center mt-0.5 shadow-2xs">
                    <Clock className="w-4 h-4 text-[#84631E]" />
                  </div>
                  <div>
                    <h4 className="text-[11px] font-bold text-stone-400 uppercase tracking-wider">Horario de Atención</h4>
                    <p className="text-sm font-bold text-[#0D0D0D] leading-snug">{CLINIC_HOURS}</p>
                  </div>
                </div>

                <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
                  <div className="flex items-start gap-3.5">
                    <div className="w-9 h-9 rounded-xl bg-[#FAF7EE] border border-[#D4AF37]/40 text-[#84631E] shrink-0 flex items-center justify-center mt-0.5 shadow-2xs">
                      <Phone className="w-4 h-4 text-[#84631E]" />
                    </div>
                    <div>
                      <h4 className="text-[11px] font-bold text-stone-400 uppercase tracking-wider">Teléfono / WhatsApp</h4>
                      <a
                        href={`tel:${CLINIC_PHONE_DISPLAY.replace(/\s+/g, '')}`}
                        className="text-sm font-bold text-[#84631E] hover:underline"
                      >
                        {CLINIC_PHONE_DISPLAY}
                      </a>
                    </div>
                  </div>

                  <div className="flex items-start gap-3.5">
                    <div className="w-9 h-9 rounded-xl bg-[#FAF7EE] border border-[#D4AF37]/40 text-[#84631E] shrink-0 flex items-center justify-center mt-0.5 shadow-2xs">
                      <Mail className="w-4 h-4 text-[#84631E]" />
                    </div>
                    <div>
                      <h4 className="text-[11px] font-bold text-stone-400 uppercase tracking-wider">Correo</h4>
                      <a
                        href={`mailto:${CLINIC_EMAIL}`}
                        className="text-xs font-bold text-stone-700 hover:text-[#84631E] transition-colors truncate block max-w-[170px]"
                      >
                        {CLINIC_EMAIL}
                      </a>
                    </div>
                  </div>
                </div>
              </div>

              {/* Formas de Pago & Crédito Directo (Exacto al PDF) */}
              <div className="p-4 rounded-2xl bg-[#FAF7EE] border border-[#D4AF37]/40 space-y-2">
                <div className="flex items-center gap-2 text-[#84631E]">
                  <CreditCard className="w-4 h-4" />
                  <h4 className="text-xs font-black uppercase tracking-wider">Formas de Pago & Financiamiento</h4>
                </div>
                <p className="text-xs text-stone-700 leading-relaxed">
                  {FINANCING_INFO}
                </p>
              </div>
            </div>

            {/* Single Organic Window for Google Maps Location */}
            <div className="rounded-[2.2rem] overflow-hidden shadow-lg border border-stone-200/80 relative group h-56 sm:h-64">
              <img
                src="https://images.unsplash.com/photo-1526778548025-fa2f459cd5c1?q=80&w=800&auto=format&fit=crop"
                alt="Mapa Miranda Dental Studio"
                referrerPolicy="no-referrer"
                className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-700"
              />
              <div className="absolute inset-0 bg-gradient-to-t from-[#0B0B0B]/90 via-[#0B0B0B]/60 to-transparent flex flex-col items-center justify-end p-6 text-center text-white">
                <MapPin className="w-7 h-7 text-[#D4AF37] mb-1 animate-bounce" />
                <p className="text-sm font-black">Miranda Dental Studio</p>
                <p className="text-xs text-stone-200 mb-3.5 font-medium">Av. 19 de Mayo y Velasco Ibarra (Planta Baja)</p>
                <motion.a
                  whileHover={{ scale: 1.03 }}
                  whileTap={{ scale: 0.97 }}
                  href="https://maps.google.com/?q=Av.+19+de+Mayo+y+Velasco+Ibarra,+Quito"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="px-5 py-2.5 rounded-full bg-white text-[#0B0B0B] text-xs font-black shadow-md hover:bg-[#FAF7EE] transition-all flex items-center gap-1.5 cursor-pointer border border-[#D4AF37]/40"
                >
                  <span>Abrir en Google Maps</span>
                  <ExternalLink className="w-3.5 h-3.5 text-[#84631E]" />
                </motion.a>
              </div>
            </div>
          </motion.div>

        </div>
      </div>
    </section>
  );
};
