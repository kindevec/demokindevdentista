import React, { useState } from 'react';
import { TopBar } from './components/TopBar';
import { Navbar } from './components/Navbar';
import { HeroSection } from './components/HeroSection';
import { TrustCounters } from './components/TrustCounters';
import { SpecialtiesSection } from './components/SpecialtiesSection';
import { AboutSection } from './components/AboutSection';
import { BeforeAfterSection } from './components/BeforeAfterSection';
import { SocialAndContactSection } from './components/SocialAndContactSection';
import { Footer } from './components/Footer';
import { MobileBottomNav } from './components/MobileBottomNav';
import { PatientPortalModal } from './components/PatientPortalModal';
import { AppointmentModal } from './components/AppointmentModal';
import { createWhatsAppLink, EMERGENCY_WA_MESSAGE } from './data/clinicData';

export default function App() {
  const [activeSection, setActiveSection] = useState<string>('inicio');
  const [isPortalOpen, setIsPortalOpen] = useState<boolean>(false);
  const [isBookingOpen, setIsBookingOpen] = useState<boolean>(false);
  const [preselectedSpecialty, setPreselectedSpecialty] = useState<string>('ortodoncia');

  const handleOpenBookingWithSpecialty = (specId: string) => {
    setPreselectedSpecialty(specId);
    setIsBookingOpen(true);
  };

  const handleOpenEmergency = () => {
    // Triggers direct emergency WhatsApp dispatch
    window.open(createWhatsAppLink(EMERGENCY_WA_MESSAGE), '_blank');
  };

  return (
    <div className="min-h-screen bg-[#FDFDFD] text-[#708090] font-sans antialiased selection:bg-[#00BFFF]/20 selection:text-[#005A9C] pb-16 lg:pb-0">
      
      {/* 1. Top Bar (Fine info bar with phone, email, hours) */}
      <TopBar />

      {/* 2. Navbar (Logo, 5 Section links, Dropdown, Portal del Paciente button) */}
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
        <AboutSection />

        {/* Section 4: Casos Reales (Before & After Slider in Orthodontics & Implants) */}
        <BeforeAfterSection />

        {/* Section 5: Redes & Contacto (3 Social networks with official logos, custom descriptions, prefilled WhatsApp links & Booking form) */}
        <SocialAndContactSection
          preselectedSpecialty={preselectedSpecialty}
        />
      </main>

      {/* Footer */}
      <Footer />

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
