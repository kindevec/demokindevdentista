import React from 'react';
import { Home, Sparkles, Users, Share2, PhoneCall } from 'lucide-react';
import { AnimatedTabBar, TabItem } from './ui/component';
import './MobileBottomNav.css';

interface MobileBottomNavProps {
  activeSection: string;
  setActiveSection: (section: string) => void;
  onOpenEmergency: () => void;
}

export const MobileBottomNav: React.FC<MobileBottomNavProps> = ({
  activeSection,
  setActiveSection,
  onOpenEmergency,
}) => {
  const navTabs: TabItem[] = [
    {
      id: 'inicio',
      label: 'Inicio',
      icon: <Home className="w-5 h-5" />,
      color: '#00BFFF',
    },
    {
      id: 'especialidades',
      label: 'Servicios',
      icon: <Sparkles className="w-5 h-5" />,
      color: '#00BFFF',
    },
    {
      id: 'urgencias',
      label: 'Urgencias',
      icon: <PhoneCall className="w-5 h-5" />,
      color: '#EF4444',
      isEmergency: true,
    },
    {
      id: 'nosotros',
      label: 'Nosotros',
      icon: <Users className="w-5 h-5" />,
      color: '#00BFFF',
    },
    {
      id: 'contacto',
      label: 'Contacto',
      icon: <Share2 className="w-5 h-5" />,
      color: '#25D366',
    },
  ];

  // Map activeSection to tab index
  const getIndexFromSection = (section: string) => {
    if (section === 'casos-reales') return 4;
    const idx = navTabs.findIndex((t) => t.id === section);
    return idx >= 0 ? idx : 0;
  };

  const activeIndex = getIndexFromSection(activeSection);

  const scrollToSection = (sectionId: string) => {
    const element = document.getElementById(sectionId);
    if (element) {
      const headerOffset = 64;
      const elementPosition = element.getBoundingClientRect().top;
      const currentScroll = window.scrollY || window.pageYOffset || document.documentElement.scrollTop || 0;
      const targetTop = sectionId === 'inicio' ? 0 : Math.max(0, elementPosition + currentScroll - headerOffset);

      window.scrollTo({
        top: targetTop,
        behavior: 'smooth',
      });
    }
  };

  const handleTabChange = (index: number) => {
    const item = navTabs[index];
    if (!item) return;

    if (item.isEmergency) {
      onOpenEmergency();
      return;
    }

    if (item.id) {
      setActiveSection(item.id);
      scrollToSection(item.id);
    }
  };

  const handleTabHover = (index: number) => {
    const item = navTabs[index];
    if (!item || item.isEmergency) return;

    if (item.id && activeSection !== item.id) {
      setActiveSection(item.id);
      scrollToSection(item.id);
    }
  };

  return (
    <nav className="mobile-tab-nav lg:hidden">
      <AnimatedTabBar
        items={navTabs}
        activeIndex={activeIndex}
        onTabChange={handleTabChange}
        onTabHover={handleTabHover}
      />
    </nav>
  );
};

export default MobileBottomNav;
