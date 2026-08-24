import React, { useRef, useEffect } from 'react';
import { gsap } from 'gsap';
import './ChromaGrid.css';

export interface ChromaGridItem {
  image: string;
  title: string;
  subtitle: string;
  handle?: string;
  location?: string;
  borderColor?: string;
  gradient?: string;
  url?: string;
}

export interface ChromaGridProps {
  items?: ChromaGridItem[];
  className?: string;
  radius?: number;
  columns?: number;
  rows?: number;
  damping?: number;
  fadeOut?: number;
  ease?: string;
}

export const ChromaGrid: React.FC<ChromaGridProps> = ({
  items,
  className = '',
  radius = 300,
  columns = 3,
  rows = 2,
  damping = 0.45,
  fadeOut = 0.6,
  ease = 'power3.out',
}) => {
  const rootRef = useRef<HTMLDivElement>(null);
  const fadeRef = useRef<HTMLDivElement>(null);
  const setX = useRef<((value: number | string) => void) | null>(null);
  const setY = useRef<((value: number | string) => void) | null>(null);
  const pos = useRef<{ x: number; y: number }>({ x: 0, y: 0 });

  const demo: ChromaGridItem[] = [
    {
      image: 'https://images.unsplash.com/photo-1622253692010-333f2da6031d?q=80&w=600&auto=format&fit=crop',
      title: 'Dra. María Elena Castro',
      subtitle: 'Especialista en Ortodoncia Invisible & Digital',
      handle: '@dra.castro.orto',
      location: 'Quito, Ecuador',
      borderColor: '#00BFFF',
      gradient: 'linear-gradient(145deg, #00BFFF22, #081D34)',
      url: '#',
    },
    {
      image: 'https://images.unsplash.com/photo-1537368910025-700350fe46c7?q=80&w=600&auto=format&fit=crop',
      title: 'Dr. Carlos Mendoza',
      subtitle: 'Cirugía Oral & Implantología Guiada 3D',
      handle: '@dr.mendoza.implantes',
      location: 'Quito, Ecuador',
      borderColor: '#005A9C',
      gradient: 'linear-gradient(210deg, #005A9C33, #081D34)',
      url: '#',
    },
    {
      image: 'https://images.unsplash.com/photo-1582750433449-648ed127bb54?q=80&w=600&auto=format&fit=crop',
      title: 'Dra. Sofía Viteri',
      subtitle: 'Estética Dental & Diseño de Sonrisas',
      handle: '@dra.sofiaviteri',
      location: 'Quito, Ecuador',
      borderColor: '#10B981',
      gradient: 'linear-gradient(165deg, #10B98122, #081D34)',
      url: '#',
    },
    {
      image: 'https://images.unsplash.com/photo-1588776814546-1ffcf47267a5?q=80&w=600&auto=format&fit=crop',
      title: 'Dr. Fernando Arízaga',
      subtitle: 'Endodoncia & Microcirugía Apical',
      handle: '@dr.arizaga.endo',
      location: 'Quito, Ecuador',
      borderColor: '#F59E0B',
      gradient: 'linear-gradient(195deg, #F59E0B22, #081D34)',
      url: '#',
    },
    {
      image: 'https://images.unsplash.com/photo-1559839734-2b71ea197ec2?q=80&w=600&auto=format&fit=crop',
      title: 'Dra. Patricia Andrade',
      subtitle: 'Odontopediatría y Cuidado Preventivo',
      handle: '@dra.andrade.kids',
      location: 'Quito, Ecuador',
      borderColor: '#8B5CF6',
      gradient: 'linear-gradient(225deg, #8B5CF622, #081D34)',
      url: '#',
    },
    {
      image: 'https://images.unsplash.com/photo-1629909615184-74f495363b67?q=80&w=600&auto=format&fit=crop',
      title: 'Dra. Daniela Guzmán',
      subtitle: 'Rehabilitación Oral & Prótesis Digitales',
      handle: '@dra.guzman.rehab',
      location: 'Quito, Ecuador',
      borderColor: '#06B6D4',
      gradient: 'linear-gradient(135deg, #06B6D422, #081D34)',
      url: '#',
    },
  ];

  const data = items?.length ? items : demo;

  useEffect(() => {
    const el = rootRef.current;
    if (!el) return;
    setX.current = gsap.quickSetter(el, '--x', 'px');
    setY.current = gsap.quickSetter(el, '--y', 'px');
    const { width, height } = el.getBoundingClientRect();
    pos.current = { x: width / 2, y: height / 2 };
    setX.current(pos.current.x);
    setY.current(pos.current.y);
  }, []);

  const moveTo = (x: number, y: number) => {
    gsap.to(pos.current, {
      x,
      y,
      duration: damping,
      ease,
      onUpdate: () => {
        setX.current?.(pos.current.x);
        setY.current?.(pos.current.y);
      },
      overwrite: true,
    });
  };

  const handleMove = (e: React.PointerEvent<HTMLDivElement>) => {
    if (!rootRef.current) return;
    const r = rootRef.current.getBoundingClientRect();
    moveTo(e.clientX - r.left, e.clientY - r.top);
    if (fadeRef.current) {
      gsap.to(fadeRef.current, { opacity: 0, duration: 0.25, overwrite: true });
    }
  };

  const handleLeave = () => {
    if (fadeRef.current) {
      gsap.to(fadeRef.current, {
        opacity: 1,
        duration: fadeOut,
        overwrite: true,
      });
    }
  };

  const handleCardClick = (url?: string) => {
    if (url && url !== '#') {
      window.open(url, '_blank', 'noopener,noreferrer');
    }
  };

  const handleCardMove = (e: React.MouseEvent<HTMLElement>) => {
    const card = e.currentTarget;
    const rect = card.getBoundingClientRect();
    const x = e.clientX - rect.left;
    const y = e.clientY - rect.top;
    card.style.setProperty('--mouse-x', `${x}px`);
    card.style.setProperty('--mouse-y', `${y}px`);
  };

  return (
    <div
      ref={rootRef}
      className={`chroma-grid ${className}`}
      style={
        {
          '--r': `${radius}px`,
          '--cols': columns,
          '--rows': rows,
        } as React.CSSProperties
      }
      onPointerMove={handleMove}
      onPointerLeave={handleLeave}
    >
      {data.map((c, i) => (
        <article
          key={i}
          className="chroma-card"
          onMouseMove={handleCardMove}
          onClick={() => handleCardClick(c.url)}
          style={
            {
              '--card-border': c.borderColor || 'transparent',
              '--card-gradient': c.gradient || 'linear-gradient(145deg, #1e293b, #0f172a)',
              cursor: c.url && c.url !== '#' ? 'pointer' : 'default',
            } as React.CSSProperties
          }
        >
          <div className="chroma-img-wrapper">
            <img src={c.image} alt={c.title} loading="lazy" />
          </div>
          <footer className="chroma-info">
            <h3 className="name">{c.title}</h3>
            {c.handle && <span className="handle">{c.handle}</span>}
            <p className="role">{c.subtitle}</p>
            {c.location && <span className="location">{c.location}</span>}
          </footer>
        </article>
      ))}
      <div className="chroma-overlay" />
      <div ref={fadeRef} className="chroma-fade" />
    </div>
  );
};

export default ChromaGrid;
