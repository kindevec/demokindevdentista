import React, { useState, useEffect, useRef } from 'react';
import { motion, useInView } from 'motion/react';
import { Award, Users, Stethoscope, Star } from 'lucide-react';

interface CounterItemProps {
  end: number;
  prefix?: string;
  suffix?: string;
  label: string;
  sublabel: string;
  icon: React.ReactNode;
  duration?: number;
  decimals?: number;
}

const CounterItem: React.FC<CounterItemProps> = ({
  end,
  prefix = '',
  suffix = '',
  label,
  sublabel,
  icon,
  duration = 2000,
  decimals = 0,
}) => {
  const [count, setCount] = useState(0);
  const ref = useRef<HTMLDivElement>(null);
  const isInView = useInView(ref, { once: true, margin: '-50px' });

  useEffect(() => {
    if (!isInView) return;

    let startTime: number | null = null;
    let animationFrameId: number;

    const animate = (timestamp: number) => {
      if (!startTime) startTime = timestamp;
      const progress = Math.min((timestamp - startTime) / duration, 1);
      
      // Ease out quad
      const easeOut = 1 - Math.pow(1 - progress, 3);
      const current = easeOut * end;
      
      setCount(current);

      if (progress < 1) {
        animationFrameId = requestAnimationFrame(animate);
      } else {
        setCount(end);
      }
    };

    animationFrameId = requestAnimationFrame(animate);

    return () => cancelAnimationFrame(animationFrameId);
  }, [isInView, end, duration]);

  const formattedValue =
    decimals > 0
      ? count.toFixed(decimals)
      : Math.floor(count).toLocaleString('es-EC');

  return (
    <div
      ref={ref}
      className="flex flex-col items-center text-center p-6 rounded-3xl bg-white/80 backdrop-blur-md shadow-xl shadow-cyan-900/5 border border-[#00BFFF]/15 hover:border-[#00BFFF]/40 transition-all duration-300 hover:-translate-y-1 group"
    >
      <div className="w-14 h-14 rounded-2xl bg-cyan-50 border border-cyan-100 text-[#005A9C] flex items-center justify-center mb-4 group-hover:bg-[#005A9C] group-hover:text-[#00BFFF] transition-colors duration-300">
        {icon}
      </div>
      <div className="text-3xl sm:text-4xl font-extrabold text-[#005A9C] tracking-tight font-mono">
        {prefix}
        {formattedValue}
        {suffix}
      </div>
      <p className="text-sm font-bold text-[#005A9C] mt-2 group-hover:text-[#00BFFF] transition-colors">
        {label}
      </p>
      <p className="text-xs text-[#708090] mt-1">{sublabel}</p>
    </div>
  );
};

export const TrustCounters: React.FC = () => {
  return (
    <section className="py-12 bg-gradient-to-b from-[#FDFDFD] via-cyan-50/40 to-[#FDFDFD] relative">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        
        {/* Section Title */}
        <div className="text-center max-w-2xl mx-auto mb-10 space-y-2">
          <p className="text-xs font-bold uppercase tracking-widest text-[#00BFFF]">
            Respaldo & Trayectoria Clínica
          </p>
          <h2 className="text-2xl sm:text-3xl font-bold text-[#005A9C]">
            Números que garantizan tu tranquilidad
          </h2>
          <div className="w-16 h-1 bg-[#00BFFF] mx-auto rounded-full" />
        </div>

        {/* 4 Counter Cards */}
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6">
          <CounterItem
            end={15}
            prefix="+"
            label="Años de experiencia"
            sublabel="Liderando la odontología digital"
            icon={<Award className="w-7 h-7" />}
          />
          <CounterItem
            end={10000}
            prefix="+"
            label="Pacientes Satisfechos"
            sublabel="Sonrisas restauradas con éxito"
            icon={<Users className="w-7 h-7" />}
          />
          <CounterItem
            end={5}
            label="Especialidades"
            sublabel="Equipo médico altamente cualificado"
            icon={<Stethoscope className="w-7 h-7" />}
          />
          <CounterItem
            end={99.8}
            suffix="%"
            decimals={1}
            label="Tasa de Satisfacción"
            sublabel="Evaluación de confort e higiene"
            icon={<Star className="w-7 h-7" />}
          />
        </div>

      </div>
    </section>
  );
};
