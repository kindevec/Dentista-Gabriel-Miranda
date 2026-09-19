import React, { useState, useEffect } from 'react';
import { Navbar } from '../components/Navbar';
import { HeroSection } from '../components/HeroSection';
import { SpecialtiesSection } from '../components/SpecialtiesSection';
import { SpecialtiesCarouselSection } from '../components/SpecialtiesCarouselSection';
import { EmergencyBannerSection } from '../components/EmergencyBannerSection';
import { DoctorProfileSection } from '../components/DoctorProfileSection';
import { FaqSection } from '../components/FaqSection';
import { SocialAndContactSection } from '../components/SocialAndContactSection';
import { Footer } from '../components/Footer';
import { FloatingWhatsApp } from '../components/FloatingWhatsApp';
import { createWhatsAppLink, EMERGENCY_WA_MESSAGE } from '../data/clinicData';

export const DesktopView: React.FC = () => {
  const [activeSection, setActiveSection] = useState<string>('inicio');
  const [preselectedSpecialty, setPreselectedSpecialty] = useState<string>('ortodoncia');

  // Automated ScrollSpy for Desktop Header
  useEffect(() => {
    const sectionMap = [
      { id: 'inicio', navKey: 'inicio' },
      { id: 'servicios', navKey: 'servicios' },
      { id: 'especialidades', navKey: 'especialidades' },
      { id: 'nosotros', navKey: 'nosotros' },
      { id: 'urgencias', navKey: 'nosotros' },
      { id: 'preguntas', navKey: 'nosotros' },
      { id: 'contacto', navKey: 'contacto' },
    ];

    let isTicking = false;

    const handleScroll = () => {
      if (isTicking) return;
      isTicking = true;

      window.requestAnimationFrame(() => {
        const scrollPosition = window.scrollY + 220;
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

  const handleOpenBookingWithSpecialty = (specId: string) => {
    setPreselectedSpecialty(specId);
  };

  const handleOpenEmergency = () => {
    window.open(createWhatsAppLink(EMERGENCY_WA_MESSAGE), '_blank');
  };

  return (
    <div className="min-h-screen bg-[#FAF9F5] text-stone-800 font-sans antialiased selection:bg-[#D4AF37]/25 selection:text-[#84631E] overflow-x-hidden">
      {/* Sticky & Translucent Navbar */}
      <Navbar
        activeSection={activeSection}
        setActiveSection={setActiveSection}
      />

      {/* Main Desktop Sections */}
      <main>
        {/* 1. Hero Section */}
        <HeroSection
          onOpenEmergency={handleOpenEmergency}
        />

        {/* 2. Servicios Odontológicos Digitales (3D Wheel Neumórfico) */}
        <SpecialtiesSection
          onSelectSpecialtyForBooking={handleOpenBookingWithSpecialty}
        />

        {/* 3. Especialidades Odontológicas (Carrusel Horizontal Amplio) */}
        <SpecialtiesCarouselSection
          onSelectSpecialtyForBooking={handleOpenBookingWithSpecialty}
        />

        {/* 4. Perfil del Dr. Gabriel Miranda, Infraestructura y Bioseguridad */}
        <DoctorProfileSection />

        {/* 5. Sección de Urgencias Odontológicas 24/7 (Justo antes de FAQ) */}
        <EmergencyBannerSection
          onOpenEmergency={handleOpenEmergency}
        />

        {/* 6. Preguntas Frecuentes Interactivas */}
        <FaqSection />

        {/* 7. Canales Oficiales, Formulario de Agendamiento y Ubicación */}
        <SocialAndContactSection
          preselectedSpecialty={preselectedSpecialty}
        />
      </main>

      {/* Footer */}
      <Footer />

      {/* Desktop Persistent Floating WhatsApp Button */}
      <FloatingWhatsApp />
    </div>
  );
};
