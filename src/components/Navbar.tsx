import React, { useState, useEffect } from 'react';
import { Logo } from './Logo';
import { createWhatsAppLink, BOOKING_WA_MESSAGE } from '../data/clinicData';

interface NavbarProps {
  activeSection: string;
  setActiveSection: (section: string) => void;
  onOpenBooking?: () => void;
}

export const Navbar: React.FC<NavbarProps> = ({
  activeSection,
  setActiveSection,
  onOpenBooking: _onOpenBooking,
}) => {
  const [isScrolled, setIsScrolled] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      setIsScrolled(window.scrollY > 15);
    };
    handleScroll();
    window.addEventListener('scroll', handleScroll, { passive: true });
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  const handleNavClick = (sectionId: string) => {
    setActiveSection(sectionId);

    if (sectionId === 'inicio') {
      window.scrollTo({ top: 0, behavior: 'smooth' });
      return;
    }

    const element = document.getElementById(sectionId);
    if (element) {
      const navOffset = 80;
      const elementPosition = element.getBoundingClientRect().top + window.pageYOffset;
      const offsetPosition = elementPosition - navOffset;
      window.scrollTo({
        top: offsetPosition,
        behavior: 'smooth',
      });
    }
  };

  return (
    <header
      className={`fixed top-0 left-0 right-0 z-40 transition-all duration-500 ease-in-out ${
        isScrolled
          ? 'bg-white/85 backdrop-blur-xl shadow-lg shadow-sky-950/5 border-b border-sky-100/80 py-2 sm:py-3'
          : 'bg-transparent backdrop-blur-none border-b border-transparent shadow-none py-3 sm:py-5'
      }`}
    >
      <div className="max-w-7xl mx-auto px-3 sm:px-6 lg:px-8 flex items-center justify-between">
        
        {/* Logo */}
        <div onClick={() => handleNavClick('inicio')} className="cursor-pointer">
          <Logo size="md" />
        </div>

        {/* Desktop Navigation Links (5 Secciones Exactas: Inicio, Servicios, Especialidades, Nosotros, Contacto) */}
        <nav className="hidden lg:flex items-center space-x-1 xl:space-x-2">
          {[
            { id: 'inicio', label: 'Inicio' },
            { id: 'servicios', label: 'Servicios' },
            { id: 'especialidades', label: 'Especialidades' },
            { id: 'nosotros', label: 'Nosotros' },
            { id: 'contacto', label: 'Contacto' },
          ].map((item) => {
            const isActive = activeSection === item.id;
            return (
              <button
                key={item.id}
                onClick={() => handleNavClick(item.id)}
                className={`px-3.5 xl:px-4 py-2 rounded-full text-xs xl:text-sm font-semibold transition-all duration-200 cursor-pointer ${
                  isActive
                    ? isScrolled
                      ? 'text-[#005A9C] bg-cyan-50 font-bold shadow-xs'
                      : 'text-[#005A9C] bg-white/70 backdrop-blur-xs font-bold shadow-xs border border-cyan-100/60'
                    : 'text-slate-600 hover:text-[#005A9C] hover:bg-white/60'
                }`}
              >
                {item.label}
              </button>
            );
          })}
        </nav>

        {/* Action Buttons Right (Desktop) */}
        <div className="hidden sm:flex items-center space-x-3">
          <a
            href={createWhatsAppLink(BOOKING_WA_MESSAGE)}
            target="_blank"
            rel="noopener noreferrer"
            className="px-6 py-2.5 rounded-full bg-gradient-to-r from-[#005A9C] via-[#0084DE] to-[#00BFFF] hover:from-[#00477b] hover:to-[#009cd1] text-white font-bold text-xs uppercase tracking-wider transition-all duration-200 shadow-md shadow-cyan-500/20 hover:scale-[1.02] active:scale-98 cursor-pointer inline-flex items-center justify-center"
          >
            Agendar Cita
          </a>
        </div>

        {/* Mobile Header CTA (<lg) */}
        <div className="flex lg:hidden items-center">
          <a
            href={createWhatsAppLink(BOOKING_WA_MESSAGE)}
            target="_blank"
            rel="noopener noreferrer"
            className="px-4 py-2 rounded-full bg-gradient-to-r from-[#005A9C] to-[#00BFFF] text-white font-bold text-xs uppercase tracking-wider shadow-md shadow-cyan-500/20 active:scale-95 cursor-pointer inline-flex items-center justify-center"
          >
            Agendar
          </a>
        </div>

      </div>
    </header>
  );
};
