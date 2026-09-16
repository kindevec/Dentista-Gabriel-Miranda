import React, { useState, useEffect } from 'react';
import { Logo } from './Logo';
import { ChevronDown, Layers, Smile, ShieldCheck, Activity, Droplets, Zap, HeartHandshake } from 'lucide-react';
import { SPECIALTIES_DATA, createWhatsAppLink, BOOKING_WA_MESSAGE } from '../data/clinicData';

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
  const [isDropdownOpen, setIsDropdownOpen] = useState(false);

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
    setIsDropdownOpen(false);

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

  const getSpecialtyIcon = (iconName: string) => {
    switch (iconName) {
      case 'Layers':
        return <Layers className="w-4 h-4 text-[#00BFFF]" />;
      case 'Smile':
        return <Smile className="w-4 h-4 text-[#00BFFF]" />;
      case 'ShieldCheck':
        return <ShieldCheck className="w-4 h-4 text-[#00BFFF]" />;
      case 'Activity':
        return <Activity className="w-4 h-4 text-[#00BFFF]" />;
      case 'Droplets':
        return <Droplets className="w-4 h-4 text-[#00BFFF]" />;
      case 'Zap':
        return <Zap className="w-4 h-4 text-[#00BFFF]" />;
      case 'HeartHandshake':
        return <HeartHandshake className="w-4 h-4 text-[#00BFFF]" />;
      default:
        return <Layers className="w-4 h-4 text-[#00BFFF]" />;
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

        {/* Desktop Navigation Links (5 Secciones Exactas) */}
        <nav className="hidden lg:flex items-center space-x-1 xl:space-x-2">
          {/* Section 1: Inicio */}
          <button
            onClick={() => handleNavClick('inicio')}
            className={`px-4 py-2 rounded-full text-xs xl:text-sm font-semibold transition-all duration-200 cursor-pointer ${
              activeSection === 'inicio'
                ? isScrolled
                  ? 'text-[#005A9C] bg-cyan-50 font-bold shadow-xs'
                  : 'text-[#005A9C] bg-white/70 backdrop-blur-xs font-bold shadow-xs border border-cyan-100/60'
                : 'text-slate-600 hover:text-[#005A9C] hover:bg-white/60'
            }`}
          >
            Inicio
          </button>

          {/* Section 2: Especialidades (con Dropdown) */}
          <div
            className="relative"
            onMouseEnter={() => setIsDropdownOpen(true)}
            onMouseLeave={() => setIsDropdownOpen(false)}
          >
            <button
              onClick={() => handleNavClick('especialidades')}
              className={`px-4 py-2 rounded-full text-xs xl:text-sm font-semibold flex items-center gap-1.5 transition-all duration-200 cursor-pointer ${
                activeSection === 'especialidades'
                  ? isScrolled
                    ? 'text-[#005A9C] bg-cyan-50 font-bold'
                    : 'text-[#005A9C] bg-white/70 backdrop-blur-xs font-bold shadow-xs border border-cyan-100/60'
                  : 'text-slate-600 hover:text-[#005A9C] hover:bg-white/60'
              }`}
            >
              <span>Especialidades</span>
              <ChevronDown
                className={`w-3.5 h-3.5 transition-transform duration-200 ${
                  isDropdownOpen ? 'rotate-180 text-[#00BFFF]' : 'text-slate-400'
                }`}
              />
            </button>

            {/* Dropdown Menu con Curvas Suaves */}
            {isDropdownOpen && (
              <div className="absolute top-full left-0 w-88 bg-white/95 backdrop-blur-xl rounded-[2rem] shadow-2xl border border-cyan-100/80 p-3 mt-1.5 grid gap-1 z-50 animate-in fade-in slide-in-from-top-2 duration-200">
                <div className="px-3.5 py-2 border-b border-slate-100 mb-1">
                  <p className="text-xs font-bold text-[#005A9C] uppercase tracking-wider">
                    Tratamientos Odontológicos
                  </p>
                  <p className="text-[11px] text-slate-500">Tecnología 3D & Mínima Invasión</p>
                </div>
                {SPECIALTIES_DATA.map((spec) => (
                  <button
                    key={spec.id}
                    onClick={() => handleNavClick('especialidades')}
                    className="flex items-start gap-2.5 p-2.5 rounded-2xl hover:bg-cyan-50/70 transition-colors text-left group cursor-pointer"
                  >
                    <div className="p-1.5 rounded-full bg-cyan-50 group-hover:bg-[#005A9C] group-hover:text-white transition-colors shrink-0 mt-0.5">
                      {getSpecialtyIcon(spec.iconName)}
                    </div>
                    <div>
                      <p className="text-xs font-bold text-[#005A9C] group-hover:text-[#00BFFF] transition-colors">
                        {spec.title}
                      </p>
                      <p className="text-[11px] text-slate-500 line-clamp-1">{spec.shortDesc}</p>
                    </div>
                  </button>
                ))}
              </div>
            )}
          </div>

          {/* Section 3: Nosotros */}
          <button
            onClick={() => handleNavClick('nosotros')}
            className={`px-4 py-2 rounded-full text-xs xl:text-sm font-semibold transition-all duration-200 cursor-pointer ${
              activeSection === 'nosotros'
                ? isScrolled
                  ? 'text-[#005A9C] bg-cyan-50 font-bold'
                  : 'text-[#005A9C] bg-white/70 backdrop-blur-xs font-bold shadow-xs border border-cyan-100/60'
                : 'text-slate-600 hover:text-[#005A9C] hover:bg-white/60'
            }`}
          >
            Nosotros
          </button>

          {/* Section 4: Casos Reales */}
          <button
            onClick={() => handleNavClick('casos-reales')}
            className={`px-4 py-2 rounded-full text-xs xl:text-sm font-semibold transition-all duration-200 cursor-pointer ${
              activeSection === 'casos-reales'
                ? isScrolled
                  ? 'text-[#005A9C] bg-cyan-50 font-bold'
                  : 'text-[#005A9C] bg-white/70 backdrop-blur-xs font-bold shadow-xs border border-cyan-100/60'
                : 'text-slate-600 hover:text-[#005A9C] hover:bg-white/60'
            }`}
          >
            Casos Reales
          </button>

          {/* Section 5: Redes & Contacto */}
          <button
            onClick={() => handleNavClick('contacto')}
            className={`px-4 py-2 rounded-full text-xs xl:text-sm font-semibold transition-all duration-200 cursor-pointer ${
              activeSection === 'contacto'
                ? isScrolled
                  ? 'text-[#005A9C] bg-cyan-50 font-bold'
                  : 'text-[#005A9C] bg-white/70 backdrop-blur-xs font-bold shadow-xs border border-cyan-100/60'
                : 'text-slate-600 hover:text-[#005A9C] hover:bg-white/60'
            }`}
          >
            Redes & Contacto
          </button>
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
