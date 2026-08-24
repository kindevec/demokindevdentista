import React, { useRef, useEffect } from 'react';
import { gsap } from 'gsap';

interface WaterNavLinkProps {
  label: string;
  isActive: boolean;
  onClick: () => void;
  children?: React.ReactNode;
  extraRight?: React.ReactNode;
  className?: string;
  onMouseEnterExtra?: () => void;
  onMouseLeaveExtra?: () => void;
}

export const WaterNavLink: React.FC<WaterNavLinkProps> = ({
  label,
  isActive,
  onClick,
  extraRight,
  className = '',
  onMouseEnterExtra,
  onMouseLeaveExtra,
}) => {
  const btnRef = useRef<HTMLButtonElement>(null);
  const waterBgRef = useRef<HTMLDivElement>(null);

  const findClosestEdge = (mouseX: number, mouseY: number, width: number, height: number): 'top' | 'bottom' => {
    const topDist = mouseY;
    const bottomDist = height - mouseY;
    return topDist < bottomDist ? 'top' : 'bottom';
  };

  useEffect(() => {
    if (!waterBgRef.current) return;
    if (isActive) {
      gsap.to(waterBgRef.current, {
        y: '0%',
        opacity: 1,
        duration: 0.35,
        ease: 'power2.out',
        overwrite: 'auto',
      });
    } else {
      gsap.to(waterBgRef.current, {
        opacity: 0,
        y: '100%',
        duration: 0.3,
        ease: 'power2.in',
        overwrite: 'auto',
      });
    }
  }, [isActive]);

  const handleMouseEnter = (e: React.MouseEvent<HTMLButtonElement>) => {
    onMouseEnterExtra?.();
    if (isActive || !btnRef.current || !waterBgRef.current) return;

    const rect = btnRef.current.getBoundingClientRect();
    const x = e.clientX - rect.left;
    const y = e.clientY - rect.top;
    const edge = findClosestEdge(x, y, rect.width, rect.height);

    gsap.killTweensOf(waterBgRef.current);
    gsap.set(waterBgRef.current, {
      y: edge === 'top' ? '-100%' : '100%',
      opacity: 1,
    });
    gsap.to(waterBgRef.current, {
      y: '0%',
      duration: 0.4,
      ease: 'expo.out',
    });
  };

  const handleMouseLeave = (e: React.MouseEvent<HTMLButtonElement>) => {
    onMouseLeaveExtra?.();
    if (isActive || !btnRef.current || !waterBgRef.current) return;

    const rect = btnRef.current.getBoundingClientRect();
    const x = e.clientX - rect.left;
    const y = e.clientY - rect.top;
    const edge = findClosestEdge(x, y, rect.width, rect.height);

    gsap.killTweensOf(waterBgRef.current);
    gsap.to(waterBgRef.current, {
      y: edge === 'top' ? '-100%' : '100%',
      opacity: 0,
      duration: 0.35,
      ease: 'expo.in',
    });
  };

  return (
    <button
      ref={btnRef}
      onClick={onClick}
      onMouseEnter={handleMouseEnter}
      onMouseLeave={handleMouseLeave}
      className={`relative px-4 py-2 rounded-2xl text-xs sm:text-sm font-bold tracking-wide transition-all duration-200 overflow-hidden cursor-pointer whitespace-nowrap select-none group flex items-center gap-1.5 ${
        isActive
          ? 'text-[#005A9C] font-extrabold shadow-sm scale-[1.02]'
          : 'text-slate-700 hover:text-[#005A9C]'
      } ${className}`}
    >
      {/* Directional Fluid Water Background Layer (Inspirado en FlowingMenu con efecto agua cristalina) */}
      <div
        ref={waterBgRef}
        aria-hidden="true"
        className="absolute inset-0 rounded-2xl pointer-events-none z-0 overflow-hidden bg-gradient-to-br from-[#CCF2FF] via-[#DCF6FF] to-[#CCF2FF] border border-white/90 shadow-md backdrop-blur-md"
        style={{
          transform: isActive ? 'translate3d(0, 0%, 0)' : 'translate3d(0, 100%, 0)',
          opacity: isActive ? 1 : 0,
        }}
      >
        {/* Subtle Water Reflection Shimmer */}
        <div className="absolute inset-0 bg-gradient-to-t from-transparent via-white/40 to-transparent opacity-60 pointer-events-none" />
      </div>

      {/* Button Text & Icons (Above Water Layer) */}
      <span className="relative z-10 transition-colors duration-200 drop-shadow-xs">
        {label}
      </span>
      {extraRight && <span className="relative z-10">{extraRight}</span>}
    </button>
  );
};

export default WaterNavLink;
