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
  const [scrollProgress, setScrollProgress] = useState(0);

  useEffect(() => {
    const handleScroll = () => {
      // 0 en la parte superior (100% transparente), progresando suavemente hasta 1.0 (100% materializado) al llegar a 80px de scroll
      const currentScroll = window.scrollY;
      const progress = Math.min(Math.max(currentScroll / 80, 0), 1);
      setScrollProgress(progress);
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

  const isTop = scrollProgress === 0;

  return (
    <header
      style={{
        backgroundColor: isTop ? 'transparent' : `rgba(255, 255, 255, ${scrollProgress * 0.95})`,
        backdropFilter: isTop ? 'none' : `blur(${scrollProgress * 18}px)`,
        WebkitBackdropFilter: isTop ? 'none' : `blur(${scrollProgress * 18}px)`,
        borderBottom: isTop ? '1px solid transparent' : `1px solid rgba(212, 175, 55, ${scrollProgress * 0.3})`,
        boxShadow: isTop ? 'none' : `0 ${10 * scrollProgress}px ${25 * scrollProgress}px -5px rgba(132, 99, 30, ${scrollProgress * 0.08})`,
      }}
      className={`fixed top-0 left-0 right-0 z-40 transition-all duration-300 ease-out ${
        isTop
          ? 'py-3 sm:py-4 border-b border-transparent'
          : 'py-2 sm:py-2.5'
      }`}
    >
      <div className="max-w-7xl mx-auto px-3 sm:px-6 lg:px-8 flex items-center justify-between">
        
        {/* Logo Miranda Dental Studio con Neumorfismo */}
        <div 
          onClick={() => handleNavClick('inicio')} 
          className="cursor-pointer transition-transform duration-200 hover:scale-[1.02] active:scale-98"
        >
          <Logo size="md" neumorphic />
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
            Agendar Cita
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
