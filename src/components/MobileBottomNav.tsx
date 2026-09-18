import React from 'react';
import { Home, Stethoscope, Layers, UserCheck, MessageSquare } from 'lucide-react';

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

  const navItems = [
    { id: 'inicio', label: 'Inicio', icon: Home },
    { id: 'servicios', label: 'Servicios', icon: Stethoscope },
    { id: 'especialidades', label: 'Especialidades', icon: Layers },
    { id: 'nosotros', label: 'Dr. Miranda', icon: UserCheck },
    { id: 'contacto', label: 'Contacto', icon: MessageSquare },
  ];

  return (
    <nav className="lg:hidden fixed bottom-0 left-0 right-0 z-50 bg-white/95 backdrop-blur-2xl border-t border-[#D4AF37]/35 shadow-[0_-4px_25px_rgba(132,99,30,0.12)] px-1 sm:px-4 pt-1.5 pb-2 pb-[calc(0.5rem+env(safe-area-inset-bottom,0px))] transition-all duration-300">
      <div className="w-full max-w-lg mx-auto grid grid-cols-5 items-center justify-items-center">
        {navItems.map((item) => {
          const Icon = item.icon;
          const isActive = activeSection === item.id;
          return (
            <button
              key={item.id}
              onClick={() => handleNavClick(item.id)}
              className={`w-full min-w-0 flex flex-col items-center justify-center min-h-[46px] py-1 px-0.5 rounded-2xl transition-all duration-200 relative cursor-pointer ${
                isActive
                  ? 'text-[#84631E] font-black bg-[#FAF7EE] shadow-2xs border border-[#D4AF37]/30'
                  : 'text-stone-500 hover:text-[#84631E]'
              }`}
              title={item.label}
            >
              {isActive && (
                <span className="absolute -top-1.5 w-5 h-1 rounded-full bg-gradient-to-r from-[#D4AF37] to-[#84631E]" />
              )}
              <Icon className={`w-4.5 h-4.5 transition-transform duration-200 ${isActive ? 'scale-110 text-[#D4AF37]' : ''}`} />
              <span className="text-[8.5px] leading-tight mt-0.5 truncate max-w-full text-center">
                {item.label}
              </span>
            </button>
          );
        })}
      </div>
    </nav>
  );
};
