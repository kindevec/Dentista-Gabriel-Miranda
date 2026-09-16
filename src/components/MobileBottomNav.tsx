import React from 'react';
import { Home, Layers, UserCheck, MessageSquare } from 'lucide-react';

interface MobileBottomNavProps {
  activeSection: string;
  setActiveSection: (section: string) => void;
  onOpenEmergency?: () => void;
}

export const MobileBottomNav: React.FC<MobileBottomNavProps> = ({
  activeSection,
  setActiveSection,
}) => {
  const handleNavClick = (sectionId: string) => {
    setActiveSection(sectionId);
    if (sectionId === 'inicio') {
      window.scrollTo({ top: 0, behavior: 'smooth' });
      return;
    }
    const element = document.getElementById(sectionId);
    if (element) {
      const navOffset = 70;
      const elementPosition = element.getBoundingClientRect().top + window.pageYOffset;
      const offsetPosition = elementPosition - navOffset;
      window.scrollTo({
        top: offsetPosition,
        behavior: 'smooth',
      });
    }
  };

  return (
    <nav className="lg:hidden fixed bottom-0 left-0 right-0 z-50 bg-white/95 backdrop-blur-2xl border-t border-cyan-200/80 shadow-[0_-4px_25px_rgba(0,90,156,0.14)] px-1 sm:px-4 pt-1.5 pb-2 pb-[calc(0.5rem+env(safe-area-inset-bottom,0px))] transition-all duration-300">
      <div className="w-full max-w-lg mx-auto grid grid-cols-4 items-center justify-items-center">
        
        {/* 1. Inicio */}
        <button
          onClick={() => handleNavClick('inicio')}
          className={`w-full min-w-0 flex flex-col items-center justify-center min-h-[46px] py-1 px-0.5 rounded-2xl transition-all duration-200 relative cursor-pointer ${
            activeSection === 'inicio'
              ? 'text-[#005A9C] font-bold bg-cyan-50/90 shadow-2xs'
              : 'text-slate-500 hover:text-[#005A9C]'
          }`}
          title="Inicio"
        >
          {activeSection === 'inicio' && (
            <span className="absolute -top-1.5 w-6 h-1 rounded-full bg-gradient-to-r from-[#005A9C] to-[#00BFFF]" />
          )}
          <Home className={`w-5 h-5 transition-transform duration-200 ${activeSection === 'inicio' ? 'scale-110 text-[#00BFFF]' : ''}`} />
          <span className="text-[9.5px] leading-tight mt-0.5 truncate max-w-full text-center">
            Inicio
          </span>
        </button>

        {/* 2. Especialidades */}
        <button
          onClick={() => handleNavClick('especialidades')}
          className={`w-full min-w-0 flex flex-col items-center justify-center min-h-[46px] py-1 px-0.5 rounded-2xl transition-all duration-200 relative cursor-pointer ${
            activeSection === 'especialidades'
              ? 'text-[#005A9C] font-bold bg-cyan-50/90 shadow-2xs'
              : 'text-slate-500 hover:text-[#005A9C]'
          }`}
          title="Especialidades"
        >
          {activeSection === 'especialidades' && (
            <span className="absolute -top-1.5 w-6 h-1 rounded-full bg-gradient-to-r from-[#005A9C] to-[#00BFFF]" />
          )}
          <Layers className={`w-5 h-5 transition-transform duration-200 ${activeSection === 'especialidades' ? 'scale-110 text-[#00BFFF]' : ''}`} />
          <span className="text-[9.5px] leading-tight mt-0.5 truncate max-w-full text-center">
            Especialidades
          </span>
        </button>

        {/* 3. Nosotros */}
        <button
          onClick={() => handleNavClick('nosotros')}
          className={`w-full min-w-0 flex flex-col items-center justify-center min-h-[46px] py-1 px-0.5 rounded-2xl transition-all duration-200 relative cursor-pointer ${
            activeSection === 'nosotros'
              ? 'text-[#005A9C] font-bold bg-cyan-50/90 shadow-2xs'
              : 'text-slate-500 hover:text-[#005A9C]'
          }`}
          title="Nosotros"
        >
          {activeSection === 'nosotros' && (
            <span className="absolute -top-1.5 w-6 h-1 rounded-full bg-gradient-to-r from-[#005A9C] to-[#00BFFF]" />
          )}
          <UserCheck className={`w-5 h-5 transition-transform duration-200 ${activeSection === 'nosotros' ? 'scale-110 text-[#00BFFF]' : ''}`} />
          <span className="text-[9.5px] leading-tight mt-0.5 truncate max-w-full text-center">
            Nosotros
          </span>
        </button>

        {/* 4. Redes & Contacto */}
        <button
          onClick={() => handleNavClick('contacto')}
          className={`w-full min-w-0 flex flex-col items-center justify-center min-h-[46px] py-1 px-0.5 rounded-2xl transition-all duration-200 relative cursor-pointer ${
            activeSection === 'contacto'
              ? 'text-[#005A9C] font-bold bg-cyan-50/90 shadow-2xs'
              : 'text-slate-500 hover:text-[#005A9C]'
          }`}
          title="Redes & Contacto"
        >
          {activeSection === 'contacto' && (
            <span className="absolute -top-1.5 w-6 h-1 rounded-full bg-gradient-to-r from-[#005A9C] to-[#00BFFF]" />
          )}
          <MessageSquare className={`w-5 h-5 transition-transform duration-200 ${activeSection === 'contacto' ? 'scale-110 text-[#00BFFF]' : ''}`} />
          <span className="text-[9.5px] leading-tight mt-0.5 truncate max-w-full text-center">
            Contacto
          </span>
        </button>

      </div>
    </nav>
  );
};
