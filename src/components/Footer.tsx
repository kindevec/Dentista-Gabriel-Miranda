import React from 'react';
import { Logo } from './Logo';
import { CLINIC_PHONE_DISPLAY, CLINIC_EMAIL, CLINIC_ADDRESS, CLINIC_CITY, CLINIC_HOURS, createWhatsAppLink, GENERAL_WA_MESSAGE } from '../data/clinicData';
import { MapPin, Phone, Mail, Clock, ArrowUpRight } from 'lucide-react';
import { OfficialWhatsAppLogo, OfficialInstagramLogo, OfficialFacebookLogo } from './OfficialSocialLogos';

export const Footer: React.FC = () => {
  const currentYear = new Date().getFullYear();

  const scrollToTop = () => {
    window.scrollTo({ top: 0, behavior: 'smooth' });
  };

  return (
    <footer className="bg-[#0D0D0D] text-stone-300 pt-10 sm:pt-12 pb-20 lg:pb-8 border-t border-[#D4AF37]/30 relative">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        
        {/* Top Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-12 gap-8 pb-8 border-b border-white/10">
          
          {/* Col 1: Brand & Philosophy (5 Cols) */}
          <div className="lg:col-span-5 space-y-3">
            <div onClick={scrollToTop} className="cursor-pointer inline-block">
              <Logo size="lg" variant="dark" />
            </div>

            <p className="text-xs text-stone-300 leading-relaxed max-w-md pt-1 text-justify">
              Miranda Dental Studio — Odontología especializada basada en la excelencia clínica, la tecnología y la atención humana. Creadores de sonrisas funcionales, estéticas y naturales en Quito.
            </p>
          </div>

          {/* Col 2: Quick Links (3 Cols) */}
          <div className="lg:col-span-3 space-y-2.5">
            <p className="text-xs font-bold text-white uppercase tracking-wider">
              Navegación Rápida
            </p>
            <ul className="space-y-1.5 text-xs text-stone-300">
              <li>
                <a href="#inicio" className="hover:text-[#D4AF37] transition-colors">
                  Inicio
                </a>
              </li>
              <li>
                <a href="#servicios" className="hover:text-[#D4AF37] transition-colors">
                  Servicios Clínicos
                </a>
              </li>
              <li>
                <a href="#especialidades" className="hover:text-[#D4AF37] transition-colors">
                  Especialidades Médicas
                </a>
              </li>
              <li>
                <a href="#nosotros" className="hover:text-[#D4AF37] transition-colors">
                  Dr. Gabriel Miranda
                </a>
              </li>
              <li>
                <a href="#contacto" className="hover:text-[#D4AF37] transition-colors">
                  Valoración de $15 & Contacto
                </a>
              </li>
            </ul>
          </div>

          {/* Col 3: Direct Contact (4 Cols) */}
          <div className="lg:col-span-4 space-y-2.5">
            <p className="text-xs font-bold text-white uppercase tracking-wider">
              Atención al Paciente
            </p>
            <ul className="space-y-2 text-xs text-stone-300">
              <li className="flex items-start gap-2.5">
                <MapPin className="w-4 h-4 text-[#D4AF37] shrink-0 mt-0.5" />
                <span>{CLINIC_ADDRESS}, {CLINIC_CITY}</span>
              </li>
              <li className="flex items-center gap-2.5">
                <Phone className="w-4 h-4 text-[#D4AF37] shrink-0" />
                <a href={`tel:${CLINIC_PHONE_DISPLAY.replace(/\s+/g, '')}`} className="hover:text-white font-semibold">
                  {CLINIC_PHONE_DISPLAY}
                </a>
              </li>
              <li className="flex items-center gap-2.5">
                <Mail className="w-4 h-4 text-[#D4AF37] shrink-0" />
                <span>{CLINIC_EMAIL}</span>
              </li>
              <li className="flex items-start gap-2.5">
                <Clock className="w-4 h-4 text-[#D4AF37] shrink-0 mt-0.5" />
                <span>{CLINIC_HOURS}</span>
              </li>
            </ul>

            {/* Social Icons Only */}
            <div className="pt-2 flex items-center gap-3">
              <a
                href={createWhatsAppLink(GENERAL_WA_MESSAGE)}
                target="_blank"
                rel="noopener noreferrer"
                aria-label="WhatsApp Oficial"
                className="w-9 h-9 rounded-full bg-white/10 hover:bg-[#25D366] text-white border border-white/15 flex items-center justify-center transition-all duration-200 hover:scale-110 active:scale-95 shadow-xs cursor-pointer p-1.5"
              >
                <OfficialWhatsAppLogo className="w-full h-full" />
              </a>

              <a
                href="https://www.instagram.com/odontologia_miranda/"
                target="_blank"
                rel="noopener noreferrer"
                aria-label="Instagram Oficial"
                className="w-9 h-9 rounded-full bg-white/10 hover:bg-[#E4405F] text-white border border-white/15 flex items-center justify-center transition-all duration-200 hover:scale-110 active:scale-95 shadow-xs cursor-pointer p-1.5"
              >
                <OfficialInstagramLogo className="w-full h-full" />
              </a>

              <a
                href="https://facebook.com/odontologiagabrielmiranda"
                target="_blank"
                rel="noopener noreferrer"
                aria-label="Facebook Oficial"
                className="w-9 h-9 rounded-full bg-white/10 hover:bg-[#1877F2] text-white border border-white/15 flex items-center justify-center transition-all duration-200 hover:scale-110 active:scale-95 shadow-xs cursor-pointer p-1.5"
              >
                <OfficialFacebookLogo className="w-full h-full" />
              </a>
            </div>
          </div>

        </div>

        {/* Bottom Bar: Copyright & Back to Top */}
        <div className="pt-6 flex flex-col sm:flex-row items-center justify-between gap-4 text-xs text-stone-400">
          <div>
            © {currentYear} <strong>Miranda Dental Studio</strong>. Todos los derechos reservados. Dr. Gabriel Miranda.
          </div>

          <div className="flex items-center gap-6">
            <span className="text-[11px] text-stone-500">
              Quito, Ecuador • Consultas de Lunes a Domingo
            </span>

            <button
              onClick={scrollToTop}
              className="flex items-center gap-1 text-xs text-[#D4AF37] hover:underline cursor-pointer"
            >
              <span>Subir al inicio</span>
              <ArrowUpRight className="w-3.5 h-3.5" />
            </button>
          </div>
        </div>

      </div>
    </footer>
  );
};
