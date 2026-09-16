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

  const getSocialIcon = (iconType: string) => {
    switch (iconType) {
      case 'whatsapp':
        return <OfficialWhatsAppLogo className="w-12 h-12" />;
      case 'instagram':
        return <OfficialInstagramLogo className="w-12 h-12" />;
      case 'facebook':
        return <OfficialFacebookLogo className="w-12 h-12" />;
      default:
        return <OfficialWhatsAppLogo className="w-12 h-12" />;
    }
  };

  const containerVariants = {
    hidden: { opacity: 0 },
    show: {
      opacity: 1,
      transition: {
        staggerChildren: 0.1,
      },
    },
  };

  const itemVariants = {
    hidden: { opacity: 0, y: 20 },
    show: {
      opacity: 1,
      y: 0,
      transition: { duration: 0.5, ease: "easeOut" as const },
    },
  };

  return (
    <section id="contacto" className="py-14 sm:py-16 relative overflow-hidden bg-[#F8FAFC]">
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

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10 pb-6 sm:pb-8">
        
        {/* Section Header with Animation */}
        <motion.div
          initial={{ opacity: 0, y: 25 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, amount: 0.3 }}
          transition={{ duration: 0.6 }}
          className="text-center max-w-3xl mx-auto mb-8 sm:mb-10 space-y-2.5"
        >
          <h2 className="text-3xl sm:text-4xl lg:text-5xl font-extrabold text-[#0A2540] tracking-tight">
            Agenda tu Consulta o Conéctate con Nosotros
          </h2>
          <p className="text-sm sm:text-base text-slate-600 text-justify">
            Estamos a tu disposición a través de nuestros canales oficiales verificados. Reserva tu cita médica en línea o escríbenos directamente a WhatsApp.
          </p>
        </motion.div>

        {/* 1. Official Social Media Cards Grid - Soft Rounded Surfaces [2.5rem] */}
        <motion.div
          variants={containerVariants}
          initial="hidden"
          whileInView="show"
          viewport={{ once: true, amount: 0.15 }}
          className="grid grid-cols-1 md:grid-cols-3 gap-6 mb-10 sm:mb-12"
        >
          {SOCIAL_NETWORKS.map((social) => (
            <motion.div
              key={social.id}
              variants={itemVariants}
              whileHover={{ y: -6, scale: 1.02 }}
              className="bg-white/95 backdrop-blur-xl rounded-[2.2rem] sm:rounded-[2.5rem] p-6 sm:p-8 shadow-xl shadow-slate-200/50 hover:shadow-2xl hover:shadow-cyan-500/10 transition-all duration-300 flex flex-col justify-between group border border-white"
            >
              <div>
                <div className="mb-5">
                  <div className="w-12 h-12 rounded-2xl bg-slate-50 flex items-center justify-center p-2.5 group-hover:scale-105 transition-transform duration-300">
                    {getSocialIcon(social.iconType)}
                  </div>
                </div>

                <h3 className="text-xl font-black text-[#0A2540] group-hover:text-[#005A9C] transition-colors">
                  {social.name}
                </h3>
                <p className="text-xs font-bold text-[#00BFFF] mb-3">{social.handle}</p>
                <p className="text-xs text-slate-600 leading-relaxed mb-6 text-justify">
                  {social.description}
                </p>
              </div>

              <motion.a
                whileHover={{ scale: 1.02 }}
                whileTap={{ scale: 0.98 }}
                href={social.url}
                target="_blank"
                rel="noopener noreferrer"
                className={`w-full py-3.5 px-5 rounded-full text-xs font-black uppercase tracking-wider flex items-center justify-center gap-2 transition-all shadow-md ${
                  social.id === 'whatsapp'
                    ? 'bg-gradient-to-r from-[#25D366] to-[#128C7E] text-white hover:brightness-105 animate-halo-whatsapp'
                    : social.id === 'instagram'
                    ? 'bg-gradient-to-r from-[#833AB4] via-[#FD1D1D] to-[#F77737] text-white hover:brightness-105'
                    : 'bg-[#1877F2] text-white hover:bg-[#166fe5]'
                }`}
              >
                <span>{social.actionText}</span>
                <ExternalLink className="w-3.5 h-3.5" />
              </motion.a>
            </motion.div>
          ))}
        </motion.div>

        {/* 2. Split Layout: Interactive Booking Form + Clinic Location Details */}
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-8 lg:gap-10 items-start">
          
          {/* Left Column (7 cols): Formulario sin Box-in-Box con Inputs Píldora */}
          <motion.div
            initial={{ opacity: 0, x: -20 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true, amount: 0.2 }}
            transition={{ duration: 0.6 }}
            className="lg:col-span-7 bg-white/95 backdrop-blur-2xl rounded-[2.2rem] sm:rounded-[3rem] p-5 sm:p-8 shadow-2xl shadow-cyan-950/5 border border-white"
          >
            <div className="mb-6">
              <h3 className="text-2xl sm:text-3xl font-black text-[#0A2540]">
                Reserva tu Cita de Valoración
              </h3>
              <p className="text-xs sm:text-sm text-slate-500 mt-1 text-justify">
                Completa tus datos y serás transferido a nuestro WhatsApp oficial con tu requerimiento organizado.
              </p>
            </div>

            <form onSubmit={handleSubmit} className="space-y-4">
              {/* Patient Name */}
              <div>
                <label className="block text-xs font-bold text-[#0A2540] uppercase tracking-wider mb-1.5 pl-2">
                  Nombre Completo *
                </label>
                <input
                  type="text"
                  required
                  placeholder="Ej. María Fernanda Morales"
                  value={formData.patientName}
                  onChange={(e) => setFormData({ ...formData, patientName: e.target.value })}
                  className="w-full px-5 py-3.5 rounded-full bg-slate-50/80 focus:bg-white focus:outline-none focus:ring-2 focus:ring-[#00BFFF]/40 text-base sm:text-sm transition-all"
                />
              </div>

              {/* Phone & Email */}
              <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
                <div>
                  <label className="block text-xs font-bold text-[#0A2540] uppercase tracking-wider mb-1.5 pl-2">
                    Teléfono Celular / WhatsApp *
                  </label>
                  <input
                    type="tel"
                    required
                    placeholder="+593 98 231 5408"
                    value={formData.phone}
                    onChange={(e) => setFormData({ ...formData, phone: e.target.value })}
                    className="w-full px-5 py-3.5 rounded-full bg-slate-50/80 focus:bg-white focus:outline-none focus:ring-2 focus:ring-[#00BFFF]/40 text-base sm:text-sm transition-all"
                  />
                </div>
                <div>
                  <label className="block text-xs font-bold text-[#0A2540] uppercase tracking-wider mb-1.5 pl-2">
                    Correo Electrónico (Opcional)
                  </label>
                  <input
                    type="email"
                    placeholder="paciente@correo.com"
                    value={formData.email}
                    onChange={(e) => setFormData({ ...formData, email: e.target.value })}
                    className="w-full px-5 py-3.5 rounded-full bg-slate-50/80 focus:bg-white focus:outline-none focus:ring-2 focus:ring-[#00BFFF]/40 text-base sm:text-sm transition-all"
                  />
                </div>
              </div>

              {/* Specialty Selector */}
              <div>
                <label className="block text-xs font-bold text-[#0A2540] uppercase tracking-wider mb-1.5 pl-2">
                  Tratamiento o Especialidad Deseada *
                </label>
                <select
                  value={formData.specialtyId}
                  onChange={(e) => setFormData({ ...formData, specialtyId: e.target.value })}
                  className="w-full px-5 py-3.5 rounded-full bg-slate-50/80 focus:bg-white focus:outline-none focus:ring-2 focus:ring-[#00BFFF]/40 text-base sm:text-sm transition-all cursor-pointer"
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
                  <label className="block text-xs font-bold text-[#0A2540] uppercase tracking-wider mb-1.5 pl-2">
                    Fecha Preferida
                  </label>
                  <input
                    type="date"
                    value={formData.preferredDate}
                    onChange={(e) => setFormData({ ...formData, preferredDate: e.target.value })}
                    className="w-full px-5 py-3.5 rounded-full bg-slate-50/80 focus:bg-white focus:outline-none focus:ring-2 focus:ring-[#00BFFF]/40 text-base sm:text-sm transition-all"
                  />
                </div>
                <div>
                  <label className="block text-xs font-bold text-[#0A2540] uppercase tracking-wider mb-1.5 pl-2">
                    Horario Conveniente
                  </label>
                  <select
                    value={formData.preferredTime}
                    onChange={(e) => setFormData({ ...formData, preferredTime: e.target.value })}
                    className="w-full px-5 py-3.5 rounded-full bg-slate-50/80 focus:bg-white focus:outline-none focus:ring-2 focus:ring-[#00BFFF]/40 text-base sm:text-sm transition-all cursor-pointer"
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
                <label className="block text-xs font-bold text-[#0A2540] uppercase tracking-wider mb-1.5 pl-2">
                  Motivo de Consulta o Molestia Específica
                </label>
                <textarea
                  rows={3}
                  placeholder="Describe brevemente tus expectativas, si presentas sensibilidad o si requieres valoración estética..."
                  value={formData.notes}
                  onChange={(e) => setFormData({ ...formData, notes: e.target.value })}
                  className="w-full px-5 py-3.5 rounded-3xl bg-slate-50/80 focus:bg-white focus:outline-none focus:ring-2 focus:ring-[#00BFFF]/40 text-base sm:text-sm transition-all resize-none"
                />
              </div>

              {/* Emergency Checkbox with Rounded Pill */}
              <div className="flex items-start sm:items-center gap-3 p-3.5 sm:p-4 rounded-2xl sm:rounded-full bg-amber-50/70">
                <input
                  type="checkbox"
                  id="isEmergency"
                  checked={formData.isEmergency}
                  onChange={(e) => setFormData({ ...formData, isEmergency: e.target.checked })}
                  className="w-4 h-4 text-red-600 rounded-full focus:ring-red-500 cursor-pointer ml-1 mt-0.5 sm:mt-0"
                />
                <label htmlFor="isEmergency" className="text-xs text-amber-900 font-semibold cursor-pointer">
                  Presento dolor agudo o requiero atención médica urgente prioritaria
                </label>
              </div>

              {/* Submit Button */}
              <motion.button
                whileHover={{ scale: 1.02 }}
                whileTap={{ scale: 0.98 }}
                type="submit"
                className="w-full py-4 sm:py-4.5 rounded-full bg-gradient-to-r from-[#005A9C] via-[#0084DE] to-[#00BFFF] hover:from-[#004a82] hover:to-[#00a3da] text-white font-black text-xs uppercase tracking-wider transition-all duration-300 shadow-xl shadow-[#005A9C]/25 flex items-center justify-center gap-2.5 cursor-pointer mt-4"
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
                    className="p-4 rounded-full bg-emerald-50 text-emerald-800 text-xs font-semibold flex items-center justify-center gap-2"
                  >
                    <CheckCircle className="w-4 h-4 text-emerald-600 shrink-0" />
                    <span>¡Solicitud preparada! Serás redirigido a WhatsApp para enviar el mensaje al consultorio.</span>
                  </motion.div>
                )}
              </AnimatePresence>
            </form>
          </motion.div>

          {/* Right Column (5 cols): Location Info & Medical Amenities */}
          <motion.div
            initial={{ opacity: 0, x: 20 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true, amount: 0.2 }}
            transition={{ duration: 0.6 }}
            className="lg:col-span-5 space-y-6"
          >
            {/* Contact Details Card with Organic Masked Architectural Header */}
            <div className="bg-white/95 backdrop-blur-2xl rounded-[2.2rem] sm:rounded-[3rem] p-5 sm:p-8 shadow-2xl shadow-cyan-950/5 border border-white space-y-6 overflow-hidden">
              
              {/* Masked Architectural Exterior Photo */}
              <div className="relative h-44 -mx-5 -mt-5 sm:-mx-8 sm:-mt-8 mb-5 overflow-hidden rounded-t-[2.2rem] sm:rounded-t-[3rem]">
                <img
                  src="https://images.unsplash.com/photo-1519494026892-80bbd2d6fd0d?q=80&w=800&auto=format&fit=crop"
                  alt="Edificio Médico Platinum"
                  referrerPolicy="no-referrer"
                  className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-700"
                />
                <div className="absolute inset-0 bg-gradient-to-t from-white via-white/30 to-transparent" />
              </div>

              <h3 className="text-2xl font-black text-[#0A2540]">
                Información de Ubicación
              </h3>

              <div className="space-y-5">
                <div className="flex items-start gap-4">
                  <div className="w-11 h-11 rounded-full bg-cyan-50 text-[#005A9C] shrink-0 flex items-center justify-center mt-0.5">
                    <MapPin className="w-5 h-5 text-[#00BFFF]" />
                  </div>
                  <div>
                    <h4 className="text-xs font-bold text-[#0A2540] uppercase tracking-wider">Dirección</h4>
                    <p className="text-xs text-slate-600 mt-0.5">{CLINIC_ADDRESS}</p>
                    <p className="text-xs font-bold text-[#005A9C] mt-0.5">{CLINIC_CITY}</p>
                  </div>
                </div>

                <div className="flex items-start gap-4">
                  <div className="w-11 h-11 rounded-full bg-cyan-50 text-[#005A9C] shrink-0 flex items-center justify-center mt-0.5">
                    <Clock className="w-5 h-5 text-[#00BFFF]" />
                  </div>
                  <div>
                    <h4 className="text-xs font-bold text-[#0A2540] uppercase tracking-wider">Horario de Atención</h4>
                    <p className="text-xs text-slate-600 mt-0.5">{CLINIC_HOURS}</p>
                  </div>
                </div>

                <div className="flex items-start gap-4">
                  <div className="w-11 h-11 rounded-full bg-cyan-50 text-[#005A9C] shrink-0 flex items-center justify-center mt-0.5">
                    <Phone className="w-5 h-5 text-[#00BFFF]" />
                  </div>
                  <div>
                    <h4 className="text-xs font-bold text-[#0A2540] uppercase tracking-wider">Línea Telefónica</h4>
                    <a
                      href={`tel:${CLINIC_PHONE_DISPLAY.replace(/\s+/g, '')}`}
                      className="text-xs font-bold text-[#005A9C] hover:underline"
                    >
                      {CLINIC_PHONE_DISPLAY}
                    </a>
                  </div>
                </div>

                <div className="flex items-start gap-4">
                  <div className="w-11 h-11 rounded-full bg-cyan-50 text-[#005A9C] shrink-0 flex items-center justify-center mt-0.5">
                    <Mail className="w-5 h-5 text-[#00BFFF]" />
                  </div>
                  <div>
                    <h4 className="text-xs font-bold text-[#0A2540] uppercase tracking-wider">Correo Electrónico</h4>
                    <a
                      href={`mailto:${CLINIC_EMAIL}`}
                      className="text-xs text-slate-600 hover:text-[#005A9C] transition-colors"
                    >
                      {CLINIC_EMAIL}
                    </a>
                  </div>
                </div>
              </div>

              {/* Building Amenities List */}
              <div className="pt-4 border-t border-slate-100">
                <p className="text-xs font-bold text-[#0A2540] mb-3">Comodidades del Edificio Médico:</p>
                <div className="grid grid-cols-1 sm:grid-cols-2 gap-2.5 text-xs text-slate-600">
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

            {/* Google Maps Visual Box with Organic Curved Pebble Silhouette */}
            <div className="rounded-[3rem] overflow-hidden shadow-xl bg-slate-100 relative group h-60">
              <img
                src="https://images.unsplash.com/photo-1526778548025-fa2f459cd5c1?q=80&w=800&auto=format&fit=crop"
                alt="Mapa Edificio Médico Platinum Quito"
                referrerPolicy="no-referrer"
                className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-500"
              />
              <div className="absolute inset-0 bg-[#0A2540]/60 backdrop-blur-[1px] flex flex-col items-center justify-center p-6 text-center text-white">
                <MapPin className="w-8 h-8 text-cyan-400 mb-2 animate-bounce" />
                <p className="text-sm font-bold">Edificio Médico Platinum</p>
                <p className="text-xs text-cyan-100 mb-3">Av. Shyris y Naciones Unidas, Quito</p>
                <motion.a
                  whileHover={{ scale: 1.05 }}
                  whileTap={{ scale: 0.95 }}
                  href="https://maps.google.com/?q=Av.+de+los+Shyris+y+Naciones+Unidas,+Quito"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="px-5 py-2.5 rounded-full bg-white text-[#005A9C] text-xs font-bold shadow-md hover:bg-cyan-50 transition-all flex items-center gap-1.5"
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
