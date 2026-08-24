import React from 'react';
import { Sparkles } from 'lucide-react';

interface LogoProps {
  className?: string;
  showText?: boolean;
  size?: 'sm' | 'md' | 'lg';
  layout?: 'horizontal' | 'vertical';
}

export const Logo: React.FC<LogoProps> = ({
  className = '',
  showText = true,
  size = 'md',
  layout = 'horizontal',
}) => {
  const iconSizes = {
    sm: 'w-7 h-7',
    md: 'w-8 h-8',
    lg: 'w-11 h-11',
  };

  const isVertical = layout === 'vertical';

  return (
    <div
      className={`inline-flex ${
        isVertical ? 'flex-col items-center text-center gap-0.5 min-w-[160px]' : 'items-center gap-2'
      } group cursor-pointer select-none ${className}`}
    >
      {/* Geometric Tooth + Heart/Smile Arc SVG with Motion & Illumination Aura */}
      <div
        className={`relative flex items-center justify-center transition-transform duration-500 group-hover:scale-110 mb-0.5 ${iconSizes[size]}`}
      >
        {/* Soft Illuminated Cyan Glow Halo */}
        <div className="absolute inset-0 rounded-full bg-gradient-to-tr from-[#00BFFF]/40 via-[#005A9C]/20 to-[#CCF2FF]/50 blur-md animate-pulse pointer-events-none" />

        {/* Floating Animated Tooth Icon */}
        <div className="relative z-10 w-full h-full animate-float group-hover:animate-none">
          <svg viewBox="0 0 100 100" className="w-full h-full filter drop-shadow-[0_2px_8px_rgba(0,191,255,0.35)]" fill="none" xmlns="http://www.w3.org/2000/svg">
            <defs>
              <linearGradient id="cloudGrad" x1="0%" y1="0%" x2="100%" y2="100%">
                <stop offset="0%" stopColor="#00BFFF" />
                <stop offset="100%" stopColor="#005A9C" />
              </linearGradient>
              <linearGradient id="toothGrad" x1="0%" y1="0%" x2="100%" y2="100%">
                <stop offset="0%" stopColor="#FFFFFF" />
                <stop offset="100%" stopColor="#F0F9FF" />
              </linearGradient>
            </defs>

            {/* Tooth Outline with Heart/Smile Center Arc */}
            <path
              d="M 32 30 C 32 20 42 16 50 16 C 58 16 68 20 68 30 C 72 38 70 50 66 58 C 62 66 58 80 54 80 C 51 80 50 70 48 70 C 46 70 45 80 42 80 C 38 80 34 66 30 58 C 26 50 28 38 32 30 Z"
              fill="#FFFFFF"
              stroke="#005A9C"
              strokeWidth="4"
              strokeLinejoin="round"
            />

            {/* Inlaid Heart / Smile Arc */}
            <path
              d="M 40 38 C 40 32 46 30 50 35 C 54 30 60 32 60 38 C 60 48 50 54 50 54 C 50 54 40 48 40 38 Z"
              fill="none"
              stroke="#00BFFF"
              strokeWidth="3.5"
              strokeLinecap="round"
              strokeLinejoin="round"
            />
          </svg>
        </div>

        {/* Twinkling Illumination Sparkle Star */}
        <Sparkles className="w-3.5 h-3.5 text-[#00BFFF] absolute -top-1.5 -right-1.5 animate-spin-slow group-hover:scale-125 transition-transform duration-300 drop-shadow-xs pointer-events-none" />
      </div>

      {/* Brand Text with Shimmering Illumination & Gradient Motion */}
      {showText && (
        <div className={`flex flex-col ${isVertical ? 'items-center leading-tight' : 'leading-tight'}`}>
          <span className="font-black tracking-tight text-lg md:text-xl flex items-center gap-1.5 whitespace-nowrap bg-gradient-to-r from-[#005A9C] via-[#00BFFF] to-[#005A9C] animate-shimmer bg-clip-text text-transparent group-hover:brightness-110 transition-all duration-300 drop-shadow-[0_1px_2px_rgba(0,90,156,0.15)]">
            Cielo <span className="text-[#00BFFF] font-black drop-shadow-none">Dental</span>
          </span>
        </div>
      )}
    </div>
  );
};


