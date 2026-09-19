import React from 'react';
import { motion } from 'motion/react';
import { Home, Stethoscope, Layers, UserCheck, MessageSquare } from 'lucide-react';

interface MobileBottomNavProps {
  activeSection: string;
  setActiveSection: (section: string) => void;
  onNavigate?: (sectionId: string) => void;
  onOpenBooking?: () => void;
}

export const MobileBottomNav: React.FC<MobileBottomNavProps> = ({
  activeSection,
  setActiveSection,
  onNavigate,
}) => {
  const handleNavClick = (sectionId: string) => {
    if (onNavigate) {
      onNavigate(sectionId);
      return;
    }

    setActiveSection(sectionId);
    if (sectionId === 'inicio') {
      window.scrollTo({ top: 0, behavior: 'smooth' });
      return;
    }
    const element = document.getElementById(sectionId);
    if (element) {
      const navOffset = 60;
      const elementPosition = element.getBoundingClientRect().top + window.scrollY;
      const offsetPosition = Math.max(0, elementPosition - navOffset);
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
    <nav
      role="navigation"
      aria-label="Navegación Móvil"
      className="fixed bottom-0 left-0 right-0 z-50 bg-[#0D0D0D]/95 backdrop-blur-2xl border-t border-[#D4AF37]/35 shadow-[0_-4px_30px_rgba(0,0,0,0.85)] px-2 pt-1.5 pb-[calc(0.5rem+env(safe-area-inset-bottom,0px))] transition-all duration-300"
    >
      {/* Top delicate golden highlight line */}
      <div className="absolute top-0 left-0 right-0 h-[1px] bg-gradient-to-r from-transparent via-[#D4AF37]/70 to-transparent pointer-events-none" />

      <div className="w-full max-w-lg mx-auto grid grid-cols-5 items-center justify-items-center gap-0.5">
        {navItems.map((item) => {
          const Icon = item.icon;
          const isActive = activeSection === item.id;
          const isLongLabel = item.id === 'especialidades';

          return (
            <button
              key={item.id}
              type="button"
              onClick={() => handleNavClick(item.id)}
              className={`w-full min-w-0 flex flex-col items-center justify-center h-[56px] py-1 px-0 rounded-xl transition-all duration-200 relative cursor-pointer active:scale-92 select-none overflow-hidden ${
                isActive
                  ? 'text-[#F3E5AB]'
                  : 'text-stone-400 hover:text-stone-200'
              }`}
              title={item.label}
            >
              {/* Efecto de Foquito y Haz de Luz Descendente desde arriba en barra negra */}
              {isActive && (
                <motion.div
                  layoutId="foquitoSpotlightTop"
                  transition={{
                    type: "spring",
                    stiffness: 380,
                    damping: 32,
                  }}
                  className="absolute inset-0 pointer-events-none overflow-hidden"
                >
                  {/* 1. Barra luminosa del Foquito en la parte superior (arriba) */}
                  <div className="absolute top-0 left-1/2 -translate-x-1/2 w-8 xs:w-9 h-[3.5px] rounded-b-full bg-gradient-to-r from-[#D4AF37] via-[#FFF9DF] to-[#D4AF37] shadow-[0_0_14px_3px_rgba(212,175,55,1),0_0_6px_rgba(255,255,255,0.95)] z-20" />

                  {/* 2. Resplandor directo del foquito en el techo */}
                  <div className="absolute -top-1 left-1/2 -translate-x-1/2 w-12 h-3.5 bg-[#D4AF37]/45 blur-xs rounded-full pointer-events-none" />

                  {/* 3. Haz de luz cónico descendente que ilumina desde arriba hacia el icono y las letras */}
                  <div
                    className="absolute top-[3.5px] inset-x-0 bottom-0 bg-gradient-to-b from-[#D4AF37]/40 via-[#D4AF37]/18 to-transparent pointer-events-none"
                    style={{
                      clipPath: 'polygon(24% 0%, 76% 0%, 94% 100%, 6% 100%)',
                    }}
                  />

                  {/* 4. Aura de iluminación suave envolvente */}
                  <div className="absolute inset-x-1.5 top-1 bottom-1 bg-radial from-[#D4AF37]/30 via-[#D4AF37]/10 to-transparent blur-xs pointer-events-none" />
                </motion.div>
              )}

              <Icon
                className={`w-5 h-5 transition-transform duration-200 relative z-10 ${
                  isActive
                    ? 'text-[#F3E5AB] scale-110 drop-shadow-[0_0_12px_rgba(212,175,55,0.8)]'
                    : 'text-stone-400'
                }`}
              />

              <span
                className={`leading-tight mt-1 whitespace-nowrap text-center tracking-tighter transition-colors relative z-10 ${
                  isLongLabel
                    ? 'text-[9.2px] xs:text-[10.5px] scale-[0.98]'
                    : 'text-[11px] xs:text-[11.5px]'
                } ${
                  isActive
                    ? 'font-black text-white drop-shadow-[0_1px_6px_rgba(212,175,55,0.7)]'
                    : 'font-semibold text-stone-400'
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
