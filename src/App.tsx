import React, { useState, useEffect } from 'react';
import { Navbar } from './components/Navbar';
import { HeroSection } from './components/HeroSection';
import { TrustCounters } from './components/TrustCounters';
import { SpecialtiesSection } from './components/SpecialtiesSection';
import { AboutSection } from './components/AboutSection';
import { BeforeAfterSection } from './components/BeforeAfterSection';
import { SocialAndContactSection } from './components/SocialAndContactSection';
import { Footer } from './components/Footer';
import { MobileBottomNav } from './components/MobileBottomNav';
import { FloatingWhatsAppButton } from './components/FloatingWhatsAppButton';
import { PatientPortalModal } from './components/PatientPortalModal';
import { AppointmentModal } from './components/AppointmentModal';
import { createWhatsAppLink, EMERGENCY_WA_MESSAGE } from './data/clinicData';

export default function App() {
  const [activeSection, setActiveSection] = useState<string>('inicio');
  const [isPortalOpen, setIsPortalOpen] = useState<boolean>(false);
  const [isBookingOpen, setIsBookingOpen] = useState<boolean>(false);
  const [preselectedSpecialty, setPreselectedSpecialty] = useState<string>('ortodoncia');

  useEffect(() => {
    const sectionIds = ['inicio', 'especialidades', 'nosotros', 'casos-reales', 'contacto'];

    const handleScroll = () => {
      const scrollPosition = window.scrollY + 140;
      for (let i = sectionIds.length - 1; i >= 0; i--) {
        const id = sectionIds[i];
        const el = document.getElementById(id);
        if (el) {
          const top = el.offsetTop;
          if (scrollPosition >= top) {
            setActiveSection(id);
            break;
          }
        }
      }
    };

    window.addEventListener('scroll', handleScroll, { passive: true });
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  const handleOpenBookingWithSpecialty = (specId: string) => {
    setPreselectedSpecialty(specId);
    setIsBookingOpen(true);
  };

  const handleOpenEmergency = () => {
    // Triggers direct emergency WhatsApp dispatch
    window.open(createWhatsAppLink(EMERGENCY_WA_MESSAGE), '_blank');
  };

  return (
    <div className="min-h-screen bg-[#FDFDFD] text-[#708090] font-sans antialiased selection:bg-[#00BFFF]/20 selection:text-[#005A9C] pb-28 lg:pb-0 overflow-x-clip w-full">
      
      {/* 1. Navbar (Header principal directamente en la parte superior) */}
      <Navbar
        activeSection={activeSection}
        setActiveSection={setActiveSection}
        onOpenPortal={() => setIsPortalOpen(true)}
        onOpenBooking={() => setIsBookingOpen(true)}
      />

      {/* Main Content Sections */}
      <main>
        {/* Section 1: Inicio (Hero Section) */}
        <HeroSection
          onOpenBooking={() => setIsBookingOpen(true)}
          onOpenEmergency={handleOpenEmergency}
        />

        {/* Central Trust Counters (Count-up animation) */}
        <TrustCounters />

        {/* Section 2: Especialidades (Super rounded cards & blurred shadows) */}
        <SpecialtiesSection
          onSelectSpecialtyForBooking={handleOpenBookingWithSpecialty}
        />

        {/* Section 3: Nosotros (Medical team & Clinical tech) */}
        <AboutSection onOpenBooking={() => setIsBookingOpen(true)} />

        {/* Section 4: Casos Reales (Before & After Slider in Orthodontics & Implants) */}
        <BeforeAfterSection />

        {/* Section 5: Redes & Contacto (3 Social networks with official logos, custom descriptions, prefilled WhatsApp links & Booking form) */}
        <SocialAndContactSection
          preselectedSpecialty={preselectedSpecialty}
        />
      </main>

      {/* Footer */}
      <Footer />

      {/* Global Floating Side WhatsApp Button with hide/show animations */}
      <FloatingWhatsAppButton />

      {/* Mobile Bottom Navigation Bar (5 Icons including Citas de Urgencia button) */}
      <MobileBottomNav
        activeSection={activeSection}
        setActiveSection={setActiveSection}
        onOpenEmergency={handleOpenEmergency}
      />

      {/* Modals */}
      <PatientPortalModal
        isOpen={isPortalOpen}
        onClose={() => setIsPortalOpen(false)}
      />

      <AppointmentModal
        isOpen={isBookingOpen}
        onClose={() => setIsBookingOpen(false)}
        preselectedSpecialtyId={preselectedSpecialty}
      />

    </div>
  );
}
