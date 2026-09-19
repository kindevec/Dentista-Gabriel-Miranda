import React from 'react';
import { motion } from 'motion/react';
import {
  createWhatsAppLink,
  GENERAL_WA_MESSAGE,
} from '../data/clinicData';
import {
  OfficialWhatsAppLogo,
  OfficialInstagramLogo,
  OfficialFacebookLogo,
} from '../components/OfficialSocialLogos';

export const MobileFooter: React.FC = () => {
  const currentYear = new Date().getFullYear();

  const handleScrollToTop = () => {
    window.scrollTo({ top: 0, behavior: 'smooth' });
  };

  return (
    <footer
      id="mobile-footer"
      className="relative z-10 border-t border-[#D4AF37]/30 pt-5 pb-20 px-4 overflow-hidden text-stone-300 shadow-[0_-8px_30px_rgba(0,0,0,0.5)] bg-[#0D0D0D]"
    >
      {/* Sutil aura luminosa dorada de fondo */}
      <div className="absolute inset-0 z-0 overflow-hidden pointer-events-none">
        <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-80 h-80 rounded-full bg-[#D4AF37]/5 blur-3xl pointer-events-none" />
      </div>

      <div className="max-w-sm mx-auto relative z-10 space-y-4">
        {/* FILA SUPERIOR: Logo Oficial Grande + Redes Sociales */}
        <div className="flex items-center justify-between gap-3">
          {/* Logo Oficial con Aura y Letras Más Grandes */}
          <motion.a
            href="#inicio"
            onClick={(e) => {
              e.preventDefault();
              handleScrollToTop();
            }}
            className="flex items-center gap-3 group cursor-pointer select-none shrink-0 relative"
            aria-label="Miranda Dental Studio - Volver arriba"
            whileHover={{ scale: 1.04 }}
            whileTap={{ scale: 0.96 }}
          >
            <div className="relative flex items-center justify-center">
              <motion.div
                animate={{
                  scale: [1, 1.2, 1.05, 1.15, 1],
                  opacity: [0.35, 0.7, 0.45, 0.65, 0.35],
                }}
                transition={{
                  duration: 4,
                  repeat: Infinity,
                  ease: 'easeInOut',
                }}
                className="absolute -inset-2.5 rounded-full bg-gradient-to-tr from-[#D4AF37]/60 via-[#F3E5AB]/45 to-[#C5A059]/30 blur-md pointer-events-none"
              />
              <div className="absolute -inset-1 rounded-full bg-[#D4AF37]/35 blur-xs pointer-events-none" />

              <img
                src="/logo-miranda.webp"
                alt="Miranda Dental Studio Símbolo"
                width="44"
                height="44"
                className="relative z-10 w-10 h-10 object-contain rounded-full drop-shadow-[0_0_12px_rgba(212,175,55,0.85)] filter contrast-[1.05] brightness-[1.05]"
              />
            </div>
            <div className="flex flex-col text-left relative z-10 leading-tight">
              <span className="font-serif text-base xs:text-lg font-black tracking-[0.18em] text-white leading-tight drop-shadow-[0_0_8px_rgba(212,175,55,0.5)]">
                MIRANDA
              </span>
              <span className="text-[11px] xs:text-xs tracking-[0.24em] font-sans font-black uppercase text-[#D4AF37] drop-shadow-[0_1px_2px_rgba(0,0,0,0.95)] drop-shadow-[0_0_8px_rgba(212,175,55,0.8)] select-none">
                DENTAL STUDIO
              </span>
            </div>
          </motion.a>

          {/* Iconos de Redes Sociales arriba a la derecha */}
          <div className="flex items-center gap-2.5 shrink-0">
            <motion.a
              href={createWhatsAppLink(GENERAL_WA_MESSAGE)}
              target="_blank"
              rel="noopener noreferrer"
              aria-label="WhatsApp Oficial"
              whileTap={{ scale: 0.95 }}
              className="inline-flex items-center justify-center cursor-pointer drop-shadow-[0_2px_8px_rgba(37,211,102,0.3)]"
            >
              <OfficialWhatsAppLogo className="w-7 h-7" />
            </motion.a>

            <motion.a
              href="https://www.instagram.com/odontologia_miranda/"
              target="_blank"
              rel="noopener noreferrer"
              aria-label="Instagram Oficial"
              whileTap={{ scale: 0.95 }}
              className="inline-flex items-center justify-center cursor-pointer drop-shadow-[0_2px_8px_rgba(225,48,108,0.3)]"
            >
              <OfficialInstagramLogo className="w-7 h-7" />
            </motion.a>

            <motion.a
              href="https://facebook.com/odontologiagabrielmiranda"
              target="_blank"
              rel="noopener noreferrer"
              aria-label="Facebook Oficial"
              whileTap={{ scale: 0.95 }}
              className="inline-flex items-center justify-center cursor-pointer drop-shadow-[0_2px_8px_rgba(24,119,242,0.3)]"
            >
              <OfficialFacebookLogo className="w-7 h-7" />
            </motion.a>
          </div>
        </div>

        {/* FILA INFERIOR: Legal y Firma Oficial KINDEV */}
        <div className="pt-1 flex flex-col items-center gap-2 text-[10.5px] text-stone-400 font-medium text-center">
          <div>
            <span>© {currentYear} Miranda Dental Studio. Todos los derechos reservados.</span>
          </div>

          <a 
            href="https://www.kindevsas.com/" 
            target="_blank" 
            rel="noopener noreferrer" 
            className="text-[11px] flex items-center gap-1.5 group"
            title="Desarrollado por KINDEV"
            aria-label="Desarrollado por KINDEV"
          >
            <div className="relative inline-flex items-center justify-center shrink-0">
              <div className="absolute inset-0 rounded-full bg-[#D4AF37]/30 blur-md opacity-70 group-hover:opacity-100 transition-all pointer-events-none" />
              <img 
                src="/kindev_icon.webp" 
                alt="KINDEV Logo" 
                width="20" 
                height="20" 
                loading="lazy" 
                decoding="async" 
                className="relative z-10 w-4.5 h-4.5 object-contain drop-shadow-[0_2px_6px_rgba(212,175,55,0.5)] inline-block"
              />
            </div>
            <span className="font-serif text-[10.5px] text-stone-300 group-hover:text-[#D4AF37] transition-colors font-semibold tracking-wide">
              Desarrollado por{" "}
              <span className="font-serif font-bold text-white inline-block">
                KINDEV
              </span>
            </span>
          </a>
        </div>
      </div>
    </footer>
  );
};
