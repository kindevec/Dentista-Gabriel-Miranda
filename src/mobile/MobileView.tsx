import React, { useState, useEffect, useRef } from 'react';
import { MobileTopBar } from './MobileTopBar';
import { MobileHero } from './MobileHero';
import { MobileServices } from './MobileServices';
import { MobileSpecialties } from './MobileSpecialties';
import { MobileEmergency } from './MobileEmergency';
import { MobileDoctorProfile } from './MobileDoctorProfile';
import { MobileFAQ } from './MobileFAQ';
import { MobileContact } from './MobileContact';
import { MobileFooter } from './MobileFooter';
import { MobileBottomNav } from './MobileBottomNav';
import { createWhatsAppLink, EMERGENCY_WA_MESSAGE } from '../data/clinicData';

export const MobileView: React.FC = () => {
  const [activeSection, setActiveSection] = useState<string>('inicio');
  const [preselectedSpecialty, setPreselectedSpecialty] = useState<string>('consulta-valoracion');
  const isProgrammaticScrollRef = useRef<boolean>(false);
  const scrollTimeoutRef = useRef<NodeJS.Timeout | null>(null);

  // Navigate smoothly with header offset and lock scrollspy during animation
  const handleNavigateToSection = (sectionId: string) => {
    setActiveSection(sectionId);
    isProgrammaticScrollRef.current = true;

    if (scrollTimeoutRef.current) {
      clearTimeout(scrollTimeoutRef.current);
    }

    if (sectionId === 'inicio') {
      window.scrollTo({ top: 0, behavior: 'smooth' });
    } else {
      const element = document.getElementById(sectionId);
      if (element) {
        const navOffset = 60; // Compensates sticky MobileTopBar
        const elementPosition = element.getBoundingClientRect().top + window.scrollY;
        const offsetPosition = Math.max(0, elementPosition - navOffset);
        window.scrollTo({
          top: offsetPosition,
          behavior: 'smooth',
        });
      }
    }

    // Release lock once the smooth scroll has finished
    scrollTimeoutRef.current = setTimeout(() => {
      isProgrammaticScrollRef.current = false;
    }, 850);
  };

  // Mobile-Optimized ScrollSpy
  useEffect(() => {
    const sectionMap = [
      { id: 'inicio', navKey: 'inicio' },
      { id: 'servicios', navKey: 'servicios' },
      { id: 'especialidades', navKey: 'especialidades' },
      { id: 'urgencias', navKey: 'especialidades' },
      { id: 'nosotros', navKey: 'nosotros' },
      { id: 'preguntas', navKey: 'nosotros' },
      { id: 'contacto', navKey: 'contacto' },
    ];

    let isTicking = false;

    const handleScroll = () => {
      // If user just clicked a nav button, don't let intermediate scroll events revert activeSection
      if (isProgrammaticScrollRef.current) return;
      if (isTicking) return;
      isTicking = true;

      window.requestAnimationFrame(() => {
        // Special case: if near bottom of page, highlight 'contacto'
        const isNearBottom = window.innerHeight + window.scrollY >= document.documentElement.scrollHeight - 80;
        if (isNearBottom) {
          setActiveSection('contacto');
          isTicking = false;
          return;
        }

        const scrollPosition = window.scrollY + 160;
        for (let i = sectionMap.length - 1; i >= 0; i--) {
          const item = sectionMap[i];
          const element = document.getElementById(item.id);
          if (element) {
            const top = element.getBoundingClientRect().top + window.scrollY;
            if (scrollPosition >= top) {
              setActiveSection((prev) => (prev === item.navKey ? prev : item.navKey));
              break;
            }
          }
        }
        isTicking = false;
      });
    };

    window.addEventListener('scroll', handleScroll, { passive: true });
    handleScroll();
    return () => {
      window.removeEventListener('scroll', handleScroll);
      if (scrollTimeoutRef.current) clearTimeout(scrollTimeoutRef.current);
    };
  }, []);

  const handleOpenBooking = () => {
    handleNavigateToSection('contacto');
  };

  const handleSelectSpecialtyForBooking = (specialtyId: string) => {
    setPreselectedSpecialty(specialtyId);
    handleOpenBooking();
  };

  const handleOpenEmergency = () => {
    window.open(createWhatsAppLink(EMERGENCY_WA_MESSAGE), '_blank');
  };

  return (
    <div className="min-h-screen bg-[#FAF9F5] text-stone-800 font-sans antialiased selection:bg-[#D4AF37]/25 selection:text-[#84631E] overflow-x-hidden relative">
      {/* 1. Mobile Compact Glassmorphism Header */}
      <MobileTopBar onOpenBooking={handleOpenBooking} onOpenEmergency={handleOpenEmergency} />

      {/* 2. Main Mobile Content */}
      <main className="w-full">
        {/* Hero Section */}
        <MobileHero
          onOpenBooking={handleOpenBooking}
          onOpenEmergency={handleOpenEmergency}
        />

        {/* Basic Services Carousel */}
        <MobileServices onSelectService={handleSelectSpecialtyForBooking} />

        {/* Clinical Specialties Accordion */}
        <MobileSpecialties onSelectSpecialty={handleSelectSpecialtyForBooking} />

        {/* 24/7 Priority Emergency Banner */}
        <MobileEmergency onOpenEmergency={handleOpenEmergency} />

        {/* Dr. Gabriel Miranda Profile & Clinic Infrastructure */}
        <MobileDoctorProfile onOpenBooking={handleOpenBooking} />

        {/* FAQ Accordion */}
        <MobileFAQ />

        {/* Luxury Booking Form, Clinic Data & Map */}
        <MobileContact preselectedSpecialty={preselectedSpecialty} />
      </main>

      {/* 3. Mobile Footer */}
      <MobileFooter />

      {/* 4. High-Tier Luxury Mobile Bottom Navigation Bar */}
      <MobileBottomNav
        activeSection={activeSection}
        setActiveSection={setActiveSection}
        onNavigate={handleNavigateToSection}
        onOpenBooking={handleOpenBooking}
      />
    </div>
  );
};
