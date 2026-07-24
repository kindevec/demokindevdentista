import React from 'react';

interface LogoProps {
  className?: string;
  showText?: boolean;
  size?: 'sm' | 'md' | 'lg';
}

export const Logo: React.FC<LogoProps> = ({ className = '', showText = true, size = 'md' }) => {
  const iconSizes = {
    sm: 'w-8 h-8',
    md: 'w-10 h-10',
    lg: 'w-14 h-14'
  };

  const textSizes = {
    sm: 'text-lg',
    md: 'text-xl',
    lg: 'text-2xl'
  };

  return (
    <div className={`inline-flex items-center gap-3 group cursor-pointer ${className}`}>
      {/* Abstract geometric Tooth + Cloud + Smile Arc SVG */}
      <div className={`relative flex items-center justify-center rounded-2xl bg-gradient-to-br from-[#00BFFF]/20 via-[#005A9C]/10 to-[#005A9C]/20 p-2 border border-[#00BFFF]/30 shadow-sm transition-all duration-300 group-hover:scale-105 group-hover:shadow-md group-hover:shadow-[#00BFFF]/20 ${iconSizes[size]}`}>
        <svg viewBox="0 0 100 100" className="w-full h-full" fill="none" xmlns="http://www.w3.org/2000/svg">
          <defs>
            <linearGradient id="cloudGrad" x1="0%" y1="0%" x2="100%" y2="100%">
              <stop offset="0%" stopColor="#00BFFF" />
              <stop offset="100%" stopColor="#005A9C" />
            </linearGradient>
            <linearGradient id="toothGrad" x1="0%" y1="0%" x2="0%" y2="100%">
              <stop offset="0%" stopColor="#FFFFFF" />
              <stop offset="100%" stopColor="#F0F9FF" />
            </linearGradient>
            <filter id="softGlow" x="-20%" y="-20%" width="140%" height="140%">
              <feGaussianBlur stdDeviation="3" result="blur" />
              <feComposite in="SourceGraphic" in2="blur" operator="over" />
            </filter>
          </defs>

          {/* Outer Cloud Silhouette Base */}
          <path
            d="M 25 55 C 20 55 15 48 18 40 C 20 32 28 30 32 30 C 36 20 50 18 60 24 C 68 18 80 22 82 32 C 88 34 90 42 86 48 C 88 56 80 62 72 60 C 68 68 55 70 48 68 C 40 70 30 65 25 55 Z"
            fill="url(#cloudGrad)"
            opacity="0.15"
          />

          {/* Geometric Tooth Body with Cloud curvature */}
          <path
            d="M 32 32 C 32 22 42 18 50 18 C 58 18 68 22 68 32 C 72 40 70 52 66 60 C 62 68 58 82 54 82 C 51 82 50 72 48 72 C 46 72 45 82 42 82 C 38 82 34 68 30 60 C 26 52 28 40 32 32 Z"
            fill="url(#toothGrad)"
            stroke="#005A9C"
            strokeWidth="3.5"
            strokeLinejoin="round"
            filter="url(#softGlow)"
          />

          {/* Cloud Curve Inlay (Upper Crown contour) */}
          <path
            d="M 36 34 C 42 26 58 26 64 34"
            stroke="#00BFFF"
            strokeWidth="3"
            strokeLinecap="round"
          />

          {/* Vibrant Smile Arc */}
          <path
            d="M 34 52 Q 50 66 66 52"
            stroke="#00BFFF"
            strokeWidth="4"
            strokeLinecap="round"
          />

          {/* Sparkle Highlight */}
          <circle cx="62" cy="28" r="3" fill="#00BFFF" />
          <circle cx="66" cy="24" r="1.5" fill="#FFFFFF" />
        </svg>
      </div>

      {showText && (
        <div className="flex flex-col leading-tight">
          <span className={`font-bold tracking-tight text-[#005A9C] ${textSizes[size]} flex items-center gap-1`}>
            Cielo <span className="text-[#00BFFF]">Dental</span>
          </span>
          <span className="text-[10px] tracking-widest text-[#708090] uppercase font-semibold">
            Clínica Odontológica
          </span>
        </div>
      )}
    </div>
  );
};
