import React from 'react';
import { Home, Stethoscope, Layers, UserCheck, MessageSquare } from 'lucide-react';

interface MobileBottomNavProps {
  activeSection: string;
  setActiveSection: (section: string) => void;
  onOpenBooking?: () => void;
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
      element.scrollIntoView({ behavior: 'smooth', block: 'start' });
    }
  };

  const navItems = [
    { id: 'inicio', label: 'Inicio', icon: Home },
    { id: 'servicios', label: 'Servicios', icon: Stethoscope },
    { id: 'especialidades', label: 'Especialidades', icon: Layers },
    { id: 'nosotros', label: 'Dr. Miranda', icon: UserCheck },
    { id: 'contacto', label: 'Contacto', icon: MessageSquare },
  ];

  return (
    <nav
      role="navigation"
      aria-label="Navegación Móvil"
      className="fixed bottom-0 left-0 right-0 z-50 bg-white/95 backdrop-blur-2xl border-t border-[#D4AF37]/30 shadow-[0_-4px_25px_rgba(132,99,30,0.12)] px-2 pt-1.5 pb-[calc(0.5rem+env(safe-area-inset-bottom,0px))] transition-all duration-300"
    >
      {/* Top delicate golden highlight line */}
      <div className="absolute top-0 left-0 right-0 h-[1px] bg-gradient-to-r from-transparent via-[#D4AF37]/60 to-transparent pointer-events-none" />

      <div className="w-full max-w-lg mx-auto grid grid-cols-5 items-center justify-items-center gap-1">
        {navItems.map((item) => {
          const Icon = item.icon;
          const isActive = activeSection === item.id;

          return (
            <button
              key={item.id}
              type="button"
              onClick={() => handleNavClick(item.id)}
              className={`w-full min-w-0 flex flex-col items-center justify-center h-[50px] py-1 px-1 rounded-2xl transition-all duration-200 relative cursor-pointer active:scale-92 select-none ${
                isActive
                  ? 'text-[#84631E] bg-[#FAF7EE] shadow-2xs border border-[#D4AF37]/40'
                  : 'text-stone-400 hover:text-stone-700'
              }`}
              title={item.label}
            >
              {/* Active top pip indicator */}
              {isActive && (
                <span className="absolute top-1 w-5 h-0.5 rounded-full bg-gradient-to-r from-[#D4AF37] to-[#84631E]" />
              )}

              <Icon
                className={`w-5 h-5 transition-transform duration-200 ${
                  isActive ? 'text-[#84631E] scale-110' : 'text-stone-400'
                }`}
              />

              <span
                className={`text-[9.5px] leading-tight mt-1 truncate max-w-full text-center transition-colors ${
                  isActive ? 'font-bold text-[#84631E]' : 'font-medium text-stone-500'
                }`}
              >
                {item.label}
              </span>
            </button>
          );
        })}
      </div>
    </nav>
  );
};
