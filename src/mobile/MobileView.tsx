import React, { useState, useEffect } from 'react';
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
      if (isTicking) return;
      isTicking = true;

      window.requestAnimationFrame(() => {
        const scrollPosition = window.scrollY + 180;
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
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  const handleOpenBooking = () => {
    setActiveSection('contacto');
    const el = document.getElementById('contacto');
    if (el) {
      el.scrollIntoView({ behavior: 'smooth', block: 'start' });
    }
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
      <MobileTopBar onOpenEmergency={handleOpenEmergency} />

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
        onOpenBooking={handleOpenBooking}
      />
    </div>
  );
};
