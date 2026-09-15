import { useState, useEffect } from 'react';
import { TopBar } from './components/TopBar';
import { Navbar } from './components/Navbar';
import { HeroSection } from './components/HeroSection';
import { TrustCounters } from './components/TrustCounters';
import { SpecialtiesSection } from './components/SpecialtiesSection';
import { BeforeAfterSection } from './components/BeforeAfterSection';
import { EmergencyBannerSection } from './components/EmergencyBannerSection';
import { DoctorProfileSection } from './components/DoctorProfileSection';
import { FaqSection } from './components/FaqSection';
import { SocialAndContactSection } from './components/SocialAndContactSection';
import { Footer } from './components/Footer';
import { MobileBottomNav } from './components/MobileBottomNav';
import { AppointmentModal } from './components/AppointmentModal';
import { FloatingWhatsApp } from './components/FloatingWhatsApp';
import { createWhatsAppLink, EMERGENCY_WA_MESSAGE } from './data/clinicData';

export default function App() {
  const [activeSection, setActiveSection] = useState<string>('inicio');
  const [isBookingOpen, setIsBookingOpen] = useState<boolean>(false);
  const [preselectedSpecialty, setPreselectedSpecialty] = useState<string>('ortodoncia');

  // Automated ScrollSpy to keep both Header and Mobile Bottom Nav synchronized with real-time scrolling
  useEffect(() => {
    const sectionMap = [
      { id: 'inicio', navKey: 'inicio' },
      { id: 'especialidades', navKey: 'especialidades' },
      { id: 'casos-reales', navKey: 'casos-reales' },
      { id: 'urgencias', navKey: 'casos-reales' },
      { id: 'nosotros', navKey: 'nosotros' },
      { id: 'preguntas', navKey: 'nosotros' },
      { id: 'contacto', navKey: 'contacto' },
    ];

    const handleScroll = () => {
      const scrollPosition = window.scrollY + 220;
      for (let i = sectionMap.length - 1; i >= 0; i--) {
        const item = sectionMap[i];
        const element = document.getElementById(item.id);
        if (element) {
          const top = element.offsetTop;
          if (scrollPosition >= top) {
            setActiveSection(item.navKey);
            break;
          }
        }
      }
    };

    window.addEventListener('scroll', handleScroll, { passive: true });
    handleScroll();
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  const handleOpenBookingWithSpecialty = (specId: string) => {
    setPreselectedSpecialty(specId);
    setIsBookingOpen(true);
  };

  const handleOpenEmergency = () => {
    window.open(createWhatsAppLink(EMERGENCY_WA_MESSAGE), '_blank');
  };

  return (
    <div className="min-h-screen bg-[#F8FAFC] text-slate-700 font-sans antialiased selection:bg-cyan-500/20 selection:text-[#005A9C] pb-16 lg:pb-0 overflow-x-hidden">
      {/* 1. Top Bar */}
      <TopBar />

      {/* 2. Sticky Navbar with Exactly 5 Sections & Mobile Drawer */}
      <Navbar
        activeSection={activeSection}
        setActiveSection={setActiveSection}
        onOpenBooking={() => setIsBookingOpen(true)}
      />

      {/* Main Content Sections with Intercalated Backgrounds & Animations */}
      <main>
        {/* 1. Hero Section (Fondo fotográfico clínico HD + Cintas orgánicas 3D + Doctor) */}
        <HeroSection
          onOpenBooking={() => setIsBookingOpen(true)}
          onOpenEmergency={handleOpenEmergency}
        />

        {/* 2. Central Trust Counters (Píldoras y métricas clínicas de precisión) */}
        <TrustCounters />

        {/* 3. Especialidades Clínicas (Fondo médico perla intercalado con textura de laboratorio 3D) */}
        <SpecialtiesSection
          onSelectSpecialtyForBooking={handleOpenBookingWithSpecialty}
        />

        {/* 4. Casos Reales Antes y Después (Fondo de alto contraste azul médico profundo con slider y ribbons) */}
        <BeforeAfterSection />

        {/* 5. Sección de Urgencias Odontológicas 24/7 (Inspirada en "We will help in Emergency" de Medigo) */}
        <EmergencyBannerSection
          onOpenEmergency={handleOpenEmergency}
        />

        {/* 6. Perfil del Dr. Gabriel Miranda, Infraestructura y Bioseguridad */}
        <DoctorProfileSection />

        {/* 7. Preguntas Frecuentes Interactivas */}
        <FaqSection />

        {/* 8. Canales Oficiales, Formulario de Agendamiento y Ubicación en Quito */}
        <SocialAndContactSection
          preselectedSpecialty={preselectedSpecialty}
        />
      </main>

      {/* Footer */}
      <Footer />

      {/* Mobile Bottom Navigation Bar (Ergonómico para pulgar con Urgencias 24/7 central) */}
      <MobileBottomNav
        activeSection={activeSection}
        setActiveSection={setActiveSection}
        onOpenEmergency={handleOpenEmergency}
      />

      {/* Desktop Persistent Floating WhatsApp Button */}
      <FloatingWhatsApp />

      {/* Booking Modal */}
      <AppointmentModal
        isOpen={isBookingOpen}
        onClose={() => setIsBookingOpen(false)}
        preselectedSpecialtyId={preselectedSpecialty}
      />
    </div>
  );
}
