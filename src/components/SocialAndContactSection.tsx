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
  createWhatsAppLink
} from '../data/clinicData';
import {
  MapPin,
  Phone,
  Mail,
  Clock,
  CheckCircle,
  ExternalLink,
  ArrowRight
} from 'lucide-react';
import {
  OfficialWhatsAppLogo,
  OfficialInstagramLogo,
  OfficialFacebookLogo,
  WhatsAppIcon
} from './OfficialSocialLogos';
import { OrganicDentalRibbon } from './OrganicDentalRibbon';
import { CurvedSectionDivider } from './CurvedSectionDivider';

interface SocialAndContactSectionProps {
  preselectedSpecialty?: string;
}

export const SocialAndContactSection: React.FC<SocialAndContactSectionProps> = ({
  preselectedSpecialty = 'ortodoncia',
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

    const spec = SPECIALTIES_DATA.find((s) => s.id === formData.specialtyId)?.title || 'Evaluación General';

    const message = formData.isEmergency
      ? `¡ATENCIÓN DE URGENCIA DENTAL!
Paciente: ${formData.patientName}
Teléfono: ${formData.phone}
Email: ${formData.email || 'No especificado'}
Motivo urgente: ${formData.notes || 'Dolor o emergencia dental activa.'}`
      : `Hola ${DOCTOR_NAME}, solicito agendar una cita oficial desde su web:
- Paciente: ${formData.patientName}
- Teléfono: ${formData.phone}
- Email: ${formData.email || 'No especificado'}
- Tratamiento: ${spec}
- Fecha deseada: ${formData.preferredDate || 'Lo antes posible'}
- Horario preferido: ${formData.preferredTime}
- Motivo de consulta: ${formData.notes || 'Primera valoración diagnóstica'}`;

    const waUrl = createWhatsAppLink(message);
    window.open(waUrl, '_blank');
    setIsSubmitted(true);
  };

  return (
    <section id="contacto" className="py-10 sm:py-12 relative overflow-hidden bg-[#F8FAFC]">
      <div id="redes-contacto" className="absolute -top-24 pointer-events-none" aria-hidden="true" />
      {/* 1. Intercalated High-Definition Photographic Background */}
      <div className="absolute inset-0 z-0 pointer-events-none">
        <img
          src="https://images.unsplash.com/photo-1519494026892-80bbd2d6fd0d?q=80&w=1920&auto=format&fit=crop"
          alt="Edificio Médico Platinum Odontología Gabriel Miranda"
          referrerPolicy="no-referrer"
          className="w-full h-full object-cover opacity-[0.05] filter grayscale"
        />
        <div className="absolute inset-0 bg-gradient-to-b from-[#F8FAFC] via-white/80 to-[#F8FAFC]" />
      </div>

      {/* 2. Floating 3D Curved Ribbon */}
      <OrganicDentalRibbon className="top-1/3 -right-20 w-[30rem] opacity-40" variant="cyan" />

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10 pb-4 sm:pb-5">
        
        {/* Section Header with Animation */}
        <motion.div
          initial={{ opacity: 0, y: 25 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, amount: 0.3 }}
          transition={{ duration: 0.6 }}
          className="text-center max-w-3xl mx-auto mb-5 sm:mb-7 space-y-2.5"
        >
          <h2 className="text-3xl sm:text-4xl lg:text-5xl font-extrabold text-[#0A2540] tracking-tight">
            Agenda tu Consulta o Conéctate con Nosotros
          </h2>
          <p className="text-sm sm:text-base text-slate-600 text-justify">
            Estamos a tu disposición a través de nuestros canales oficiales verificados. Reserva tu cita médica en línea o escríbenos directamente a WhatsApp.
          </p>
        </motion.div>

        {/* 2. Split Layout: Interactive Booking Form + Clinic Location Details */}
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-8 lg:gap-10 items-start">
          
          {/* Left Column (7 cols): Formulario directo sobre el lienzo (Cero Box-in-Box) */}
          <motion.div
            initial={{ opacity: 0, x: -20 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true, amount: 0.2 }}
            transition={{ duration: 0.6 }}
            className="lg:col-span-7 flex flex-col justify-between"
          >
            <div className="mb-6">
              <span className="text-xs font-black tracking-widest text-[#0084DE] uppercase mb-1.5 block">
                Agendamiento Rápido 24/7
              </span>
              <h3 className="text-2xl sm:text-3xl font-black text-[#0A2540] tracking-tight">
                Reserva tu Cita de Valoración
              </h3>
              <p className="text-xs sm:text-sm text-slate-600 mt-1.5 leading-relaxed">
                Completa tus datos y serás transferido directamente a nuestro WhatsApp oficial con tu requerimiento organizado.
              </p>
            </div>

            <form onSubmit={handleSubmit} className="space-y-4">
              {/* Patient Name */}
              <div>
                <label className="block text-[11px] font-bold text-[#0A2540] uppercase tracking-wider mb-1.5 pl-1">
                  Nombre Completo *
                </label>
                <input
                  type="text"
                  required
                  placeholder="Ej. María Fernanda Morales"
                  value={formData.patientName}
                  onChange={(e) => setFormData({ ...formData, patientName: e.target.value })}
                  className="w-full px-5 py-3.5 rounded-2xl bg-white border border-slate-200/90 shadow-xs focus:border-[#005A9C] focus:ring-3 focus:ring-[#00BFFF]/20 text-slate-800 placeholder:text-slate-400 text-sm transition-all outline-none"
                />
              </div>

              {/* Phone & Email */}
              <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
                <div>
                  <label className="block text-[11px] font-bold text-[#0A2540] uppercase tracking-wider mb-1.5 pl-1">
                    Teléfono Celular / WhatsApp *
                  </label>
                  <input
                    type="tel"
                    required
                    placeholder="+593 98 231 5408"
                    value={formData.phone}
                    onChange={(e) => setFormData({ ...formData, phone: e.target.value })}
                    className="w-full px-5 py-3.5 rounded-2xl bg-white border border-slate-200/90 shadow-xs focus:border-[#005A9C] focus:ring-3 focus:ring-[#00BFFF]/20 text-slate-800 placeholder:text-slate-400 text-sm transition-all outline-none"
                  />
                </div>
                <div>
                  <label className="block text-[11px] font-bold text-[#0A2540] uppercase tracking-wider mb-1.5 pl-1">
                    Correo Electrónico (Opcional)
                  </label>
                  <input
                    type="email"
                    placeholder="paciente@correo.com"
                    value={formData.email}
                    onChange={(e) => setFormData({ ...formData, email: e.target.value })}
                    className="w-full px-5 py-3.5 rounded-2xl bg-white border border-slate-200/90 shadow-xs focus:border-[#005A9C] focus:ring-3 focus:ring-[#00BFFF]/20 text-slate-800 placeholder:text-slate-400 text-sm transition-all outline-none"
                  />
                </div>
              </div>

              {/* Specialty Selector */}
              <div>
                <label className="block text-[11px] font-bold text-[#0A2540] uppercase tracking-wider mb-1.5 pl-1">
                  Tratamiento o Especialidad Deseada *
                </label>
                <select
                  value={formData.specialtyId}
                  onChange={(e) => setFormData({ ...formData, specialtyId: e.target.value })}
                  className="w-full px-5 py-3.5 rounded-2xl bg-white border border-slate-200/90 shadow-xs focus:border-[#005A9C] focus:ring-3 focus:ring-[#00BFFF]/20 text-slate-800 text-sm transition-all cursor-pointer outline-none"
                >
                  {SPECIALTIES_DATA.map((s) => (
                    <option key={s.id} value={s.id}>
                      {s.title}
                    </option>
                  ))}
                  <option value="general">Evaluación General & Limpieza Profunda</option>
                </select>
              </div>

              {/* Date & Time Preferences */}
              <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
                <div>
                  <label className="block text-[11px] font-bold text-[#0A2540] uppercase tracking-wider mb-1.5 pl-1">
                    Fecha Preferida
                  </label>
                  <input
                    type="date"
                    value={formData.preferredDate}
                    onChange={(e) => setFormData({ ...formData, preferredDate: e.target.value })}
                    className="w-full px-5 py-3.5 rounded-2xl bg-white border border-slate-200/90 shadow-xs focus:border-[#005A9C] focus:ring-3 focus:ring-[#00BFFF]/20 text-slate-800 text-sm transition-all outline-none"
                  />
                </div>
                <div>
                  <label className="block text-[11px] font-bold text-[#0A2540] uppercase tracking-wider mb-1.5 pl-1">
                    Horario Conveniente
                  </label>
                  <select
                    value={formData.preferredTime}
                    onChange={(e) => setFormData({ ...formData, preferredTime: e.target.value })}
                    className="w-full px-5 py-3.5 rounded-2xl bg-white border border-slate-200/90 shadow-xs focus:border-[#005A9C] focus:ring-3 focus:ring-[#00BFFF]/20 text-slate-800 text-sm transition-all cursor-pointer outline-none"
                  >
                    <option value="Mañana (09:00 - 12:00)">Mañana (08:30 - 12:00)</option>
                    <option value="Tarde (13:00 - 16:00)">Mediodía / Tarde (13:00 - 16:00)</option>
                    <option value="Fin de tarde (16:00 - 19:00)">Fin de tarde (16:00 - 19:00)</option>
                    <option value="Sábados (09:00 - 14:00)">Sábado Matutino</option>
                  </select>
                </div>
              </div>

              {/* Notes */}
              <div>
                <label className="block text-[11px] font-bold text-[#0A2540] uppercase tracking-wider mb-1.5 pl-1">
                  Motivo de Consulta o Molestia Específica
                </label>
                <textarea
                  rows={3}
                  placeholder="Describe brevemente tus expectativas, si presentas sensibilidad o si requieres valoración estética..."
                  value={formData.notes}
                  onChange={(e) => setFormData({ ...formData, notes: e.target.value })}
                  className="w-full px-5 py-3.5 rounded-2xl bg-white border border-slate-200/90 shadow-xs focus:border-[#005A9C] focus:ring-3 focus:ring-[#00BFFF]/20 text-slate-800 placeholder:text-slate-400 text-sm transition-all resize-none outline-none"
                />
              </div>

              {/* Emergency Toggle Inline */}
              <label
                htmlFor="isEmergency"
                className="flex items-center gap-3.5 p-3.5 rounded-2xl bg-amber-50/70 border border-amber-200/60 cursor-pointer transition-colors hover:bg-amber-50"
              >
                <input
                  type="checkbox"
                  id="isEmergency"
                  checked={formData.isEmergency}
                  onChange={(e) => setFormData({ ...formData, isEmergency: e.target.checked })}
                  className="w-4 h-4 text-red-600 rounded focus:ring-red-500 cursor-pointer shrink-0 ml-1"
                />
                <span className="text-xs text-amber-950 font-medium leading-tight">
                  Presento <strong className="font-bold text-red-700">dolor agudo</strong> o requiero atención médica urgente prioritaria
                </span>
              </label>

              {/* Submit Button */}
              <motion.button
                whileHover={{ scale: 1.015 }}
                whileTap={{ scale: 0.985 }}
                type="submit"
                className="w-full py-4 rounded-2xl bg-gradient-to-r from-[#005A9C] via-[#0084DE] to-[#00BFFF] hover:from-[#004a82] hover:to-[#00a3da] text-white font-black text-xs uppercase tracking-wider transition-all duration-300 shadow-lg shadow-[#005A9C]/25 flex items-center justify-center gap-2.5 cursor-pointer mt-2"
              >
                <WhatsAppIcon className="w-5 h-5 text-white" />
                <span>Confirmar y Enviar Solicitud por WhatsApp</span>
                <ArrowRight className="w-4 h-4 text-cyan-200" />
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
                    <span>¡Solicitud preparada! Serás redirigido a WhatsApp para enviar el mensaje al consultorio.</span>
                  </motion.div>
                )}
              </AnimatePresence>
            </form>

            {/* Canales y Redes Sociales Oficiales (Únicamente iconos, sin contenedor ni texto) */}
            <div className="pt-5 mt-5 border-t border-slate-200/70 flex flex-col sm:flex-row sm:items-center justify-between gap-3">
              <p className="text-xs font-semibold text-slate-500">
                O contáctanos en nuestros canales oficiales:
              </p>
              <div className="flex items-center gap-3">
                {SOCIAL_NETWORKS.map((social) => (
                  <a
                    key={social.id}
                    href={social.url}
                    target="_blank"
                    rel="noopener noreferrer"
                    aria-label={social.name}
                    className="transition-transform duration-200 hover:scale-115 active:scale-95 cursor-pointer focus:outline-none focus-visible:ring-2 focus-visible:ring-[#0084DE] rounded-full inline-flex"
                  >
                    {social.id === 'whatsapp' && <OfficialWhatsAppLogo className="w-8 h-8 drop-shadow-xs" />}
                    {social.id === 'instagram' && <OfficialInstagramLogo className="w-8 h-8 drop-shadow-xs" />}
                    {social.id === 'facebook' && <OfficialFacebookLogo className="w-8 h-8 drop-shadow-xs" />}
                  </a>
                ))}
              </div>
            </div>
          </motion.div>

          {/* Right Column (5 cols): Location Info & Medical Amenities sobre el lienzo */}
          <motion.div
            initial={{ opacity: 0, x: 20 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true, amount: 0.2 }}
            transition={{ duration: 0.6 }}
            className="lg:col-span-5 flex flex-col justify-between space-y-6"
          >
            {/* Sede Information - Directo sobre el lienzo */}
            <div className="space-y-5">
              <div>
                <span className="text-xs font-black tracking-widest text-[#0084DE] uppercase mb-1.5 block">
                  Sede Clínica Principal
                </span>
                <h3 className="text-2xl sm:text-3xl font-black text-[#0A2540] tracking-tight">
                  Edificio Médico Platinum
                </h3>
                <p className="text-xs sm:text-sm text-slate-600 mt-1 leading-relaxed">
                  Instalaciones diseñadas para tu confort y seguridad, equipadas con tecnología de diagnóstico 3D y bioseguridad grado hospitalario.
                </p>
              </div>

              {/* Contact Rows directamente sobre el lienzo con jerarquía tipográfica */}
              <div className="space-y-4">
                <div className="flex items-start gap-3.5">
                  <div className="w-9 h-9 rounded-xl bg-cyan-500/10 text-[#005A9C] shrink-0 flex items-center justify-center mt-0.5 shadow-2xs">
                    <MapPin className="w-4 h-4 text-[#005A9C]" />
                  </div>
                  <div>
                    <h4 className="text-[11px] font-bold text-slate-400 uppercase tracking-wider">Dirección</h4>
                    <p className="text-sm font-bold text-[#0A2540] leading-snug">{CLINIC_ADDRESS}</p>
                    <p className="text-xs font-semibold text-[#0084DE] mt-0.5">{CLINIC_CITY}</p>
                  </div>
                </div>

                <div className="flex items-start gap-3.5">
                  <div className="w-9 h-9 rounded-xl bg-cyan-500/10 text-[#005A9C] shrink-0 flex items-center justify-center mt-0.5 shadow-2xs">
                    <Clock className="w-4 h-4 text-[#005A9C]" />
                  </div>
                  <div>
                    <h4 className="text-[11px] font-bold text-slate-400 uppercase tracking-wider">Horario de Atención</h4>
                    <p className="text-sm font-bold text-[#0A2540] leading-snug">{CLINIC_HOURS}</p>
                  </div>
                </div>

                <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
                  <div className="flex items-start gap-3.5">
                    <div className="w-9 h-9 rounded-xl bg-cyan-500/10 text-[#005A9C] shrink-0 flex items-center justify-center mt-0.5 shadow-2xs">
                      <Phone className="w-4 h-4 text-[#005A9C]" />
                    </div>
                    <div>
                      <h4 className="text-[11px] font-bold text-slate-400 uppercase tracking-wider">Línea Telefónica</h4>
                      <a
                        href={`tel:${CLINIC_PHONE_DISPLAY.replace(/\s+/g, '')}`}
                        className="text-sm font-bold text-[#005A9C] hover:underline"
                      >
                        {CLINIC_PHONE_DISPLAY}
                      </a>
                    </div>
                  </div>

                  <div className="flex items-start gap-3.5">
                    <div className="w-9 h-9 rounded-xl bg-cyan-500/10 text-[#005A9C] shrink-0 flex items-center justify-center mt-0.5 shadow-2xs">
                      <Mail className="w-4 h-4 text-[#005A9C]" />
                    </div>
                    <div>
                      <h4 className="text-[11px] font-bold text-slate-400 uppercase tracking-wider">Correo Electrónico</h4>
                      <a
                        href={`mailto:${CLINIC_EMAIL}`}
                        className="text-xs font-bold text-slate-700 hover:text-[#005A9C] transition-colors truncate block max-w-[170px]"
                      >
                        {CLINIC_EMAIL}
                      </a>
                    </div>
                  </div>
                </div>
              </div>

              {/* Amenities directamente sobre el lienzo */}
              <div className="pt-4 border-t border-slate-200/70">
                <p className="text-[11px] font-bold text-slate-400 uppercase tracking-wider mb-2.5">
                  Comodidades del Edificio Médico:
                </p>
                <div className="grid grid-cols-2 gap-2 text-xs text-slate-700 font-medium">
                  <div className="flex items-center gap-2">
                    <CheckCircle className="w-3.5 h-3.5 text-[#005A9C] shrink-0" />
                    <span>Parqueadero subterráneo</span>
                  </div>
                  <div className="flex items-center gap-2">
                    <CheckCircle className="w-3.5 h-3.5 text-[#005A9C] shrink-0" />
                    <span>Ascensores camilleros</span>
                  </div>
                  <div className="flex items-center gap-2">
                    <CheckCircle className="w-3.5 h-3.5 text-[#005A9C] shrink-0" />
                    <span>Seguridad privada 24/7</span>
                  </div>
                  <div className="flex items-center gap-2">
                    <CheckCircle className="w-3.5 h-3.5 text-[#005A9C] shrink-0" />
                    <span>Rampas de accesibilidad</span>
                  </div>
                </div>
              </div>
            </div>

            {/* Single Organic Window for Google Maps Location */}
            <div className="rounded-[2.2rem] overflow-hidden shadow-lg border border-slate-200/80 relative group h-56 sm:h-64">
              <img
                src="https://images.unsplash.com/photo-1526778548025-fa2f459cd5c1?q=80&w=800&auto=format&fit=crop"
                alt="Mapa Edificio Médico Platinum Quito"
                referrerPolicy="no-referrer"
                className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-700"
              />
              <div className="absolute inset-0 bg-gradient-to-t from-[#0A2540]/90 via-[#0A2540]/60 to-transparent flex flex-col items-center justify-end p-6 text-center text-white">
                <MapPin className="w-7 h-7 text-cyan-400 mb-1 animate-bounce" />
                <p className="text-sm font-black">Edificio Médico Platinum</p>
                <p className="text-xs text-cyan-100 mb-3.5 font-medium">Av. Shyris y Naciones Unidas, Quito</p>
                <motion.a
                  whileHover={{ scale: 1.03 }}
                  whileTap={{ scale: 0.97 }}
                  href="https://maps.google.com/?q=Av.+de+los+Shyris+y+Naciones+Unidas,+Quito"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="px-5 py-2.5 rounded-full bg-white text-[#005A9C] text-xs font-extrabold shadow-md hover:bg-cyan-50 transition-all flex items-center gap-1.5 cursor-pointer"
                >
                  <span>Abrir en Google Maps</span>
                  <ExternalLink className="w-3.5 h-3.5" />
                </motion.a>
              </div>
            </div>
          </motion.div>

        </div>

      </div>

      {/* Organic Curved Wave Transition into Footer */}
      <div className="absolute bottom-0 left-0 right-0 z-10">
        <CurvedSectionDivider position="bottom" fillColor="#0A2540" variant="smoothCurve" />
      </div>
    </section>
  );
};
