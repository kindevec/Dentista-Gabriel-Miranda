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
          ? 'bg-white/92 backdrop-blur-xl shadow-lg shadow-amber-950/5 border-b border-[#D4AF37]/30 py-2 sm:py-3'
          : 'bg-white/40 backdrop-blur-xs border-b border-transparent shadow-none py-3 sm:py-5'
      }`}
    >
      <div className="max-w-7xl mx-auto px-3 sm:px-6 lg:px-8 flex items-center justify-between">
        
        {/* Logo Miranda Dental Studio */}
        <div onClick={() => handleNavClick('inicio')} className="cursor-pointer">
          <Logo size="md" />
        </div>

        {/* Desktop Navigation Links (Inicio, Servicios, Especialidades, Nosotros, Contacto) */}
        <nav className="hidden lg:flex items-center space-x-1 xl:space-x-2">
          {[
            { id: 'inicio', label: 'Inicio' },
            { id: 'servicios', label: 'Servicios' },
            { id: 'especialidades', label: 'Especialidades' },
            { id: 'nosotros', label: 'Dr. Miranda' },
            { id: 'contacto', label: 'Contacto' },
          ].map((item) => {
            const isActive = activeSection === item.id;
            return (
              <button
                key={item.id}
                onClick={() => handleNavClick(item.id)}
                className={`px-3.5 xl:px-4 py-2 rounded-full text-xs xl:text-sm font-semibold transition-all duration-200 cursor-pointer ${
                  isActive
                    ? 'text-[#84631E] bg-[#FDF9EE] font-bold shadow-xs border border-[#D4AF37]/35'
                    : 'text-stone-700 hover:text-[#997328] hover:bg-[#FAF9F6]'
                }`}
              >
                {item.label}
              </button>
            );
          })}
        </nav>

        {/* Action Button Right (Desktop) */}
        <div className="hidden sm:flex items-center space-x-3">
          <a
            href={createWhatsAppLink(BOOKING_WA_MESSAGE)}
            target="_blank"
            rel="noopener noreferrer"
            className="px-6 py-2.5 rounded-full bg-gradient-to-r from-[#D4AF37] via-[#F3E5AB] to-[#C5A059] hover:from-[#C5A059] hover:to-[#997328] text-[#0B0B0B] font-black text-xs uppercase tracking-wider transition-all duration-300 shadow-md shadow-amber-950/15 hover:scale-[1.02] active:scale-98 cursor-pointer inline-flex items-center justify-center border border-[#D4AF37]/50"
          >
            Agendar Valoración $15
          </a>
        </div>

        {/* Mobile Header CTA (<lg) */}
        <div className="flex lg:hidden items-center">
          <a
            href={createWhatsAppLink(BOOKING_WA_MESSAGE)}
            target="_blank"
            rel="noopener noreferrer"
            className="px-3.5 py-1.5 rounded-full bg-gradient-to-r from-[#D4AF37] via-[#F3E5AB] to-[#C5A059] text-[#0B0B0B] font-black text-[11px] uppercase tracking-wider shadow-sm shadow-amber-950/15 active:scale-95 cursor-pointer inline-flex items-center justify-center border border-[#D4AF37]/40"
          >
            Cita $15
          </a>
        </div>

      </div>
    </header>
  );
};
