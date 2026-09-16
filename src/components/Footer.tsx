import React from 'react';
import { Logo } from './Logo';
import { CLINIC_PHONE_DISPLAY, CLINIC_EMAIL, CLINIC_ADDRESS, CLINIC_CITY, CLINIC_HOURS, createWhatsAppLink, GENERAL_WA_MESSAGE } from '../data/clinicData';
import { ShieldCheck, MapPin, Phone, Mail, Clock, ArrowUpRight } from 'lucide-react';
import { WhatsAppIcon, OfficialInstagramLogo } from './OfficialSocialLogos';

export const Footer: React.FC = () => {
  const currentYear = new Date().getFullYear();

  const scrollToTop = () => {
    window.scrollTo({ top: 0, behavior: 'smooth' });
  };

  return (
    <footer className="bg-[#0A2540] text-slate-300 pt-12 pb-20 lg:pb-10 border-t border-white/10 relative">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        
        {/* Top Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-12 gap-10 pb-8 sm:pb-10 border-b border-white/10">
          
          {/* Col 1: Brand & Philosophy (5 Cols) */}
          <div className="lg:col-span-5 space-y-4">
            <div onClick={scrollToTop} className="cursor-pointer inline-block">
              <Logo size="lg" variant="dark" />
            </div>

            <p className="text-xs sm:text-sm text-slate-300 leading-relaxed max-w-md pt-2 text-justify">
              Odontología de alta gama fundamentada en precisión tecnológica 3D, bioseguridad quirúrgica de grado hospitalario y una vocación auténtica por la salud y la serenidad de nuestros pacientes.
            </p>

            <div className="inline-flex items-center gap-2 p-2 rounded-xl bg-white/5 border border-white/10 text-cyan-200 text-xs font-semibold">
              <ShieldCheck className="w-4 h-4 text-[#00BFFF]" />
              <span>Registro y Habilitación Sanitaria Oficial</span>
            </div>
          </div>

          {/* Col 2: Quick Links (3 Cols) */}
          <div className="lg:col-span-3 space-y-3">
            <p className="text-xs font-bold text-white uppercase tracking-wider">
              Navegación Rápida
            </p>
            <ul className="space-y-2 text-xs text-slate-300">
              <li>
                <a href="#inicio" className="hover:text-[#00BFFF] transition-colors">
                  Inicio & Portada
                </a>
              </li>
              <li>
                <a href="#especialidades" className="hover:text-[#00BFFF] transition-colors">
                  Especialidades & Tratamientos
                </a>
              </li>
              <li>
                <a href="#casos-reales" className="hover:text-[#00BFFF] transition-colors">
                  Galería Antes y Después
                </a>
              </li>
              <li>
                <a href="#nosotros" className="hover:text-[#00BFFF] transition-colors">
                  Dr. Gabriel Miranda & Instalaciones
                </a>
              </li>
              <li>
                <a href="#preguntas" className="hover:text-[#00BFFF] transition-colors">
                  Preguntas Frecuentes
                </a>
              </li>
              <li>
                <a href="#contacto" className="hover:text-[#00BFFF] transition-colors">
                  Agendamiento & Ubicación
                </a>
              </li>
            </ul>
          </div>

          {/* Col 3: Direct Contact (4 Cols) */}
          <div className="lg:col-span-4 space-y-3">
            <p className="text-xs font-bold text-white uppercase tracking-wider">
              Atención al Paciente
            </p>
            <ul className="space-y-2.5 text-xs text-slate-300">
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

            <div className="pt-3 flex flex-wrap items-center gap-3">
              <a
                href={createWhatsAppLink(GENERAL_WA_MESSAGE)}
                target="_blank"
                rel="noopener noreferrer"
                className="inline-flex items-center gap-2 px-5 py-2.5 rounded-full bg-[#25D366] hover:bg-[#20BA5A] text-white font-bold text-xs transition-all shadow-md cursor-pointer"
              >
                <WhatsAppIcon className="w-4 h-4 text-white" />
                <span>WhatsApp Oficial</span>
                <ArrowUpRight className="w-3.5 h-3.5" />
              </a>

              <a
                href="https://www.instagram.com/odontologia_miranda/"
                target="_blank"
                rel="noopener noreferrer"
                className="inline-flex items-center gap-2 px-5 py-2.5 rounded-full bg-gradient-to-r from-[#833AB4] via-[#FD1D1D] to-[#F77737] hover:brightness-110 text-white font-bold text-xs transition-all shadow-md cursor-pointer"
              >
                <OfficialInstagramLogo className="w-4 h-4 text-white" />
                <span>Instagram @odontologia_miranda</span>
                <ArrowUpRight className="w-3.5 h-3.5" />
              </a>
            </div>
          </div>

        </div>

        {/* Bottom Bar: Copyright & Kindev S.A.S. Seal */}
        <div className="pt-8 flex flex-col sm:flex-row items-center justify-between gap-4 text-xs text-slate-400 text-center sm:text-left">
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
