import React, { useState, useEffect, useRef } from 'react';
import { motion, useInView } from 'motion/react';
import { Award, Users, Stethoscope, Star, ShieldCheck, HeartHandshake, Sparkles, Smile } from 'lucide-react';

interface CounterData {
  id: string;
  end: number;
  prefix?: string;
  suffix?: string;
  label: string;
  icon: React.ReactNode;
  duration?: number;
  decimals?: number;
}

const COUNTERS_LIST: CounterData[] = [
  {
    id: 'exp',
    end: 15,
    prefix: '+',
    label: 'Años de experiencia',
    icon: <Award className="w-7 h-7" />,
  },
  {
    id: 'pacientes',
    end: 10000,
    prefix: '+',
    label: 'Pacientes Satisfechos',
    icon: <Users className="w-7 h-7" />,
  },
  {
    id: 'especialidades',
    end: 5,
    label: 'Especialidades',
    icon: <Stethoscope className="w-7 h-7" />,
  },
  {
    id: 'satisfaccion',
    end: 99.8,
    suffix: '%',
    decimals: 1,
    label: 'Tasa de Satisfacción',
    icon: <Star className="w-7 h-7" />,
  },
  {
    id: 'tecnologia',
    end: 100,
    suffix: '%',
    label: 'Tecnología Digital 3D',
    icon: <Sparkles className="w-7 h-7" />,
  },
  {
    id: 'bioseguridad',
    end: 100,
    suffix: '%',
    label: 'Bioseguridad Hospitalaria',
    icon: <ShieldCheck className="w-7 h-7" />,
  },
  {
    id: 'sonrisas',
    end: 1500,
    prefix: '+',
    label: 'Casos de Ortodoncia',
    icon: <Smile className="w-7 h-7" />,
  },
  {
    id: 'atencion',
    end: 24,
    suffix: '/7',
    label: 'Atención de Urgencias',
    icon: <HeartHandshake className="w-7 h-7" />,
  },
];

const CounterCard: React.FC<{ item: CounterData }> = ({ item }) => {
  const [count, setCount] = useState(0);
  const ref = useRef<HTMLDivElement>(null);
  const isInView = useInView(ref, { once: true, margin: '-20px' });

  useEffect(() => {
    if (!isInView) return;

    let startTime: number | null = null;
    let animationFrameId: number;
    const duration = item.duration || 2000;

    const animate = (timestamp: number) => {
      if (!startTime) startTime = timestamp;
      const progress = Math.min((timestamp - startTime) / duration, 1);
      
      const easeOut = 1 - Math.pow(1 - progress, 3);
      const current = easeOut * item.end;
      
      setCount(current);

      if (progress < 1) {
        animationFrameId = requestAnimationFrame(animate);
      } else {
        setCount(item.end);
      }
    };

    animationFrameId = requestAnimationFrame(animate);

    return () => cancelAnimationFrame(animationFrameId);
  }, [isInView, item.end, item.duration]);

  const formattedValue =
    (item.decimals || 0) > 0
      ? count.toFixed(item.decimals)
      : Math.floor(count).toLocaleString('es-EC');

  return (
    <div
      ref={ref}
      className="w-64 sm:w-72 shrink-0 flex flex-col items-center text-center p-6 rounded-3xl bg-white/95 backdrop-blur-md shadow-xl shadow-cyan-900/5 border-2 border-cyan-100/80 hover:border-[#00BFFF] hover:shadow-2xl hover:shadow-cyan-500/10 hover:-translate-y-2 transition-all duration-300 group select-none cursor-pointer"
    >
      <div className="w-14 h-14 rounded-2xl bg-cyan-50 border border-cyan-100 text-[#005A9C] flex items-center justify-center mb-4 group-hover:bg-[#005A9C] group-hover:text-[#00BFFF] group-hover:rotate-6 group-hover:scale-110 transition-all duration-300 shadow-sm">
        {item.icon}
      </div>
      <div className="text-3xl sm:text-4xl font-extrabold text-[#005A9C] tracking-tight font-mono group-hover:text-[#00BFFF] transition-colors">
        {item.prefix}
        {formattedValue}
        {item.suffix}
      </div>
      <p className="text-sm font-bold text-[#005A9C] mt-2 group-hover:text-[#00BFFF] transition-colors whitespace-nowrap">
        {item.label}
      </p>
    </div>
  );
};

export const TrustCounters: React.FC = () => {
  const [isPaused, setIsPaused] = useState(false);

  // Repeat items for seamless continuous looping ticker
  const duplicatedList = [...COUNTERS_LIST, ...COUNTERS_LIST, ...COUNTERS_LIST];

  return (
    <section className="pt-0 pb-12 bg-gradient-to-b from-[#FDFDFD] via-cyan-50/40 to-[#FDFDFD] relative z-20 overflow-hidden -mt-4 sm:-mt-6">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        
        {/* Section Title */}
        <div className="text-center max-w-2xl mx-auto pt-0 mb-6 space-y-2">
          <h2 className="text-2xl sm:text-3xl font-extrabold text-[#00BFFF] uppercase tracking-wide">
            Trayectoria Clínica
          </h2>
          <div className="w-16 h-1 bg-[#00BFFF] mx-auto rounded-full" />
        </div>

      </div>

      {/* Infinite Horizontal Ticker / Carousel Track */}
      <div
        className="relative w-full overflow-hidden"
        onMouseEnter={() => setIsPaused(true)}
        onMouseLeave={() => setIsPaused(false)}
      >
        {/* Left & Right Smooth Gradient Fade Edges */}
        <div className="absolute left-0 top-0 bottom-0 w-16 sm:w-28 bg-gradient-to-r from-[#FDFDFD] to-transparent z-10 pointer-events-none" />
        <div className="absolute right-0 top-0 bottom-0 w-16 sm:w-28 bg-gradient-to-l from-[#FDFDFD] to-transparent z-10 pointer-events-none" />

        <motion.div
          animate={{
            x: isPaused ? undefined : ['0%', '-33.333%'],
          }}
          transition={{
            x: {
              repeat: Infinity,
              repeatType: 'loop',
              duration: 26,
              ease: 'linear',
            },
          }}
          className="flex items-center gap-6 py-4 w-max"
        >
          {duplicatedList.map((item, index) => (
            <CounterCard key={`${item.id}-${index}`} item={item} />
          ))}
        </motion.div>
      </div>
    </section>
  );
};
