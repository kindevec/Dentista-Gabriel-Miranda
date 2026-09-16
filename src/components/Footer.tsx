import React from 'react';
import { Logo } from './Logo';
import { CLINIC_PHONE_DISPLAY, CLINIC_EMAIL, CLINIC_ADDRESS, CLINIC_CITY, CLINIC_HOURS, createWhatsAppLink, GENERAL_WA_MESSAGE } from '../data/clinicData';
import { ShieldCheck, MapPin, Phone, Mail, Clock, ArrowUpRight } from 'lucide-react';
import { OfficialWhatsAppLogo, OfficialInstagramLogo, OfficialFacebookLogo } from './OfficialSocialLogos';

export const Footer: React.FC = () => {
  const currentYear = new Date().getFullYear();

  const scrollToTop = () => {
    window.scrollTo({ top: 0, behavior: 'smooth' });
  };

  return (
    <footer className="bg-[#0A2540] text-slate-300 pt-8 sm:pt-10 pb-20 lg:pb-7 border-t border-white/10 relative">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        
        {/* Top Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-12 gap-6 lg:gap-8 pb-6 sm:pb-7 border-b border-white/10">
          
          {/* Col 1: Brand & Philosophy (5 Cols) */}
          <div className="lg:col-span-5 space-y-2.5">
            <div onClick={scrollToTop} className="cursor-pointer inline-block">
              <Logo size="lg" variant="dark" />
            </div>

            <p className="text-xs text-slate-300 leading-relaxed max-w-md pt-0.5 text-justify">
              Odontología de alta gama fundamentada en precisión tecnológica 3D, bioseguridad quirúrgica de grado hospitalario y una vocación auténtica por la salud y la serenidad de nuestros pacientes.
            </p>

            <div className="flex items-center gap-2 text-cyan-200 text-xs font-semibold pt-0.5">
              <ShieldCheck className="w-4 h-4 text-[#00BFFF]" />
              <span>Registro y Habilitación Sanitaria Oficial</span>
            </div>
          </div>

          {/* Col 2: Quick Links (3 Cols) */}
          <div className="lg:col-span-3 space-y-2">
            <p className="text-xs font-bold text-white uppercase tracking-wider">
              Navegación Rápida
            </p>
            <ul className="space-y-1.5 text-xs text-slate-300">
              <li>
                <a href="#inicio" className="hover:text-[#00BFFF] transition-colors">
                  Inicio
                </a>
              </li>
              <li>
                <a href="#servicios" className="hover:text-[#00BFFF] transition-colors">
                  Servicios
                </a>
              </li>
              <li>
                <a href="#especialidades" className="hover:text-[#00BFFF] transition-colors">
                  Especialidades
                </a>
              </li>
              <li>
                <a href="#nosotros" className="hover:text-[#00BFFF] transition-colors">
                  Nosotros
                </a>
              </li>
              <li>
                <a href="#contacto" className="hover:text-[#00BFFF] transition-colors">
                  Contacto
                </a>
              </li>
            </ul>
          </div>

          {/* Col 3: Direct Contact (4 Cols) */}
          <div className="lg:col-span-4 space-y-2.5">
            <p className="text-xs font-bold text-white uppercase tracking-wider">
              Atención al Paciente
            </p>
            <ul className="space-y-2 text-xs text-slate-300">
              <li className="flex items-start gap-2.5">
                <MapPin className="w-4 h-4 text-[#00BFFF] shrink-0 mt-0.5" />
                <span>{CLINIC_ADDRESS}, {CLINIC_CITY}</span>
              </li>
              <li className="flex items-center gap-2.5">
                <Phone className="w-4 h-4 text-[#00BFFF] shrink-0" />
                <a href={`tel:${CLINIC_PHONE_DISPLAY.replace(/\s+/g, '')}`} className="hover:text-white font-semibold">
                  {CLINIC_PHONE_DISPLAY}
                </a>
              </li>
              <li className="flex items-center gap-2.5">
                <Mail className="w-4 h-4 text-[#00BFFF] shrink-0" />
                <span>{CLINIC_EMAIL}</span>
              </li>
              <li className="flex items-start gap-2.5">
                <Clock className="w-4 h-4 text-[#00BFFF] shrink-0 mt-0.5" />
                <span>{CLINIC_HOURS}</span>
              </li>
            </ul>

            {/* Social Icons Only (Compact & Vertical Optimization) */}
            <div className="pt-1.5 flex items-center gap-2.5">
              <a
                href={createWhatsAppLink(GENERAL_WA_MESSAGE)}
                target="_blank"
                rel="noopener noreferrer"
                aria-label="WhatsApp Oficial"
                className="w-9 h-9 rounded-full bg-white/10 hover:bg-[#25D366] text-white border border-white/15 hover:border-[#25D366] flex items-center justify-center transition-all duration-200 hover:scale-105 active:scale-95 shadow-xs cursor-pointer p-1.5"
              >
                <OfficialWhatsAppLogo className="w-full h-full" />
              </a>

              <a
                href="https://www.instagram.com/odontologia_miranda/"
                target="_blank"
                rel="noopener noreferrer"
                aria-label="Instagram Oficial"
                className="w-9 h-9 rounded-full bg-white/10 hover:bg-[#E4405F] text-white border border-white/15 hover:border-[#E4405F] flex items-center justify-center transition-all duration-200 hover:scale-105 active:scale-95 shadow-xs cursor-pointer p-1.5"
              >
                <OfficialInstagramLogo className="w-full h-full" />
              </a>

              <a
                href="https://facebook.com/odontologiagabrielmiranda"
                target="_blank"
                rel="noopener noreferrer"
                aria-label="Facebook Oficial"
                className="w-9 h-9 rounded-full bg-white/10 hover:bg-[#1877F2] text-white border border-white/15 hover:border-[#1877F2] flex items-center justify-center transition-all duration-200 hover:scale-105 active:scale-95 shadow-xs cursor-pointer p-1.5"
              >
                <OfficialFacebookLogo className="w-full h-full" />
              </a>
            </div>
          </div>

        </div>

        {/* Bottom Bar: Copyright & Kindev S.A.S. Seal */}
        <div className="pt-4 sm:pt-5 flex flex-col sm:flex-row items-center justify-between gap-2 text-xs text-slate-400 text-center sm:text-left">
          <p>
            © {currentYear} Odontología Gabriel Miranda. Todos los derechos reservados.
          </p>

          <div className="flex items-center gap-1.5">
            <span>Desarrollado con excelencia por</span>
            <a
              href="https://kindevx.web.app/"
              target="_blank"
              rel="noopener noreferrer"
              className="font-bold text-[#00BFFF] hover:text-white transition-colors underline inline-flex items-center gap-0.5"
            >
              <span>Kindev S.A.S.</span>
              <ArrowUpRight className="w-3 h-3" />
            </a>
          </div>
        </div>

      </div>
    </footer>
  );
};
