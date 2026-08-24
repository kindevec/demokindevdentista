import * as React from "react";
import {
  motion,
  useMotionValue,
  useTransform,
  animate,
  type PanInfo,
  type MotionValue,
} from "motion/react";
import { Check, MessageCircle, Calendar, ChevronLeft, ChevronRight } from "lucide-react";
import { cn } from "@/lib/utils";
import { createWhatsAppLink } from "@/data/clinicData";

export interface Slide {
  id?: string;
  image: string;
  title: string;
  description: string;
  features?: string[];
  estimatedTime?: string;
  waMessage?: string;
  badge?: string;
}

interface CarouselConfig {
  distanceDivisor: number;
  velocityDivisor: number;
  sensitivity: number;
  xMultiplier: number;
  yMultiplier: number;
  rotationMultiplier: number;
  scaleReduction: number;
}

const getCarouselConfig = (width: number): CarouselConfig => {
  if (width < 640) {
    return {
      distanceDivisor: 120,
      velocityDivisor: 450,
      sensitivity: 170,
      xMultiplier: 85,
      yMultiplier: 10,
      rotationMultiplier: 4,
      scaleReduction: 0.05,
    };
  }
  if (width < 1024) {
    return {
      distanceDivisor: 150,
      velocityDivisor: 550,
      sensitivity: 200,
      xMultiplier: 125,
      yMultiplier: 18,
      rotationMultiplier: 6,
      scaleReduction: 0.07,
    };
  }
  return {
    distanceDivisor: 180,
    velocityDivisor: 650,
    sensitivity: 230,
    xMultiplier: 165,
    yMultiplier: 22,
    rotationMultiplier: 7,
    scaleReduction: 0.08,
  };
};

export interface CarouselStackedProps {
  slides: Slide[];
  className?: string;
  onOpenBooking?: (treatmentId?: string) => void;
}

export const CarouselStacked: React.FC<CarouselStackedProps> = ({
  slides,
  className = "",
  onOpenBooking,
}) => {
  const scrollProgress = useMotionValue(0);
  const startProgress = React.useRef(0);
  const [windowWidth, setWindowWidth] = React.useState(0);
  const [currentIndex, setCurrentIndex] = React.useState(0);
  const hoverTimeoutRef = React.useRef<NodeJS.Timeout | null>(null);

  const total = slides.length;

  React.useEffect(() => {
    setWindowWidth(window.innerWidth);
    const handleResize = () => setWindowWidth(window.innerWidth);
    window.addEventListener("resize", handleResize);
    return () => window.removeEventListener("resize", handleResize);
  }, []);

  const config = React.useMemo(
    () => getCarouselConfig(windowWidth),
    [windowWidth],
  );

  React.useEffect(() => {
    const unsubscribe = scrollProgress.on("change", (latest) => {
      let positive = Math.round(latest) % total;
      if (positive < 0) positive += total;
      setCurrentIndex(positive);
    });
    return () => unsubscribe();
  }, [scrollProgress, total]);

  const animateTo = React.useCallback(
    (targetIndex: number) => {
      const current = scrollProgress.get();
      let diff = (targetIndex - (current % total)) % total;
      if (diff > total / 2) diff -= total;
      if (diff < -total / 2) diff += total;
      
      if (Math.abs(diff) < 0.05) return;

      const target = current + diff;

      animate(scrollProgress, target, {
        duration: 1.15,
        ease: [0.22, 1, 0.36, 1],
      });
    },
    [scrollProgress, total],
  );

  const handleHoverCard = (targetIndex: number) => {
    if (hoverTimeoutRef.current) clearTimeout(hoverTimeoutRef.current);
    hoverTimeoutRef.current = setTimeout(() => {
      animateTo(targetIndex);
    }, 220);
  };

  const handleDragStart = () => {
    startProgress.current = scrollProgress.get();
  };

  const handleDragEnd = (
    _: MouseEvent | TouchEvent | PointerEvent,
    info: PanInfo,
  ) => {
    const dragDistance = info.offset.x;
    const velocity = info.velocity.x;

    const distanceShift = -dragDistance / config.distanceDivisor;
    const velocityShift = -velocity / config.velocityDivisor;

    let totalShift = Math.round(distanceShift + velocityShift);
    totalShift = Math.max(-2, Math.min(2, totalShift));

    const target = Math.round(startProgress.current) + totalShift;

    animate(scrollProgress, target, {
      duration: 1.1,
      ease: [0.22, 1, 0.36, 1],
    });
  };

  const nextSlide = () => {
    const current = Math.round(scrollProgress.get());
    animate(scrollProgress, current + 1, {
      duration: 1.1,
      ease: [0.22, 1, 0.36, 1],
    });
  };

  const prevSlide = () => {
    const current = Math.round(scrollProgress.get());
    animate(scrollProgress, current - 1, {
      duration: 1.1,
      ease: [0.22, 1, 0.36, 1],
    });
  };

  return (
    <div
      className={cn(
        "flex flex-col items-center justify-center w-full py-2 select-none relative",
        className,
      )}
    >
      <div className="relative w-full max-w-7xl h-[440px] sm:h-[470px] md:h-[490px] flex items-center justify-center">
        {/* Transparent Drag Surface */}
        <motion.div
          drag="x"
          dragConstraints={{ left: 0, right: 0 }}
          onDragStart={handleDragStart}
          onDrag={(_, info) => {
            const delta = -info.delta.x / config.sensitivity;
            scrollProgress.set(scrollProgress.get() + delta);
          }}
          onDragEnd={handleDragEnd}
          className="absolute inset-0 z-30 cursor-grab active:cursor-grabbing"
        />

        {slides.map((slide, i) => (
          <Card
            key={i}
            slide={slide}
            index={i}
            total={total}
            progress={scrollProgress}
            config={config}
            onHoverCard={() => handleHoverCard(i)}
            onOpenBooking={onOpenBooking}
          />
        ))}
      </div>

      {/* Navigation Controls & Indicators */}
      <div className="mt-5 flex items-center gap-6 z-40 relative">
        <button
          onClick={prevSlide}
          className="w-10 h-10 rounded-full bg-white shadow-md border border-slate-200 hover:border-[#00BFFF] text-[#005A9C] hover:bg-cyan-50 flex items-center justify-center transition-all cursor-pointer hover:scale-105 active:scale-95"
          aria-label="Tratamiento anterior"
        >
          <ChevronLeft className="w-5 h-5" />
        </button>

        {/* Dots */}
        <div className="flex items-center gap-2">
          {slides.map((_, i) => (
            <button
              key={i}
              onClick={() => animateTo(i)}
              onMouseEnter={() => handleHoverCard(i)}
              className={cn(
                "h-2.5 rounded-full transition-all duration-300 cursor-pointer",
                currentIndex === i ? "w-8 bg-[#00BFFF]" : "w-2.5 bg-slate-300 hover:bg-[#00BFFF]/50",
              )}
              aria-label={`Ir a tratamiento ${i + 1}`}
            />
          ))}
        </div>

        <button
          onClick={nextSlide}
          className="w-10 h-10 rounded-full bg-white shadow-md border border-slate-200 hover:border-[#00BFFF] text-[#005A9C] hover:bg-cyan-50 flex items-center justify-center transition-all cursor-pointer hover:scale-105 active:scale-95"
          aria-label="Siguiente tratamiento"
        >
          <ChevronRight className="w-5 h-5" />
        </button>
      </div>
    </div>
  );
};

interface CardProps {
  key?: React.Key;
  slide: Slide;
  index: number;
  total: number;
  progress: MotionValue<number>;
  config: CarouselConfig;
  onHoverCard?: () => void;
  onOpenBooking?: (treatmentId?: string) => void;
}

const Card = ({
  slide,
  index,
  total,
  progress,
  config,
  onHoverCard,
  onOpenBooking,
}: CardProps) => {
  const offset = useTransform(progress, (p) => {
    let diff = (index - p) % total;
    if (diff > total / 2) diff -= total;
    if (diff < -total / 2) diff += total;
    return diff;
  });

  const x = useTransform(offset, (o) => o * config.xMultiplier);
  const rotate = useTransform(offset, (o) => {
    const absO = Math.abs(o);
    if (absO < 0.05) return 0;
    return o * config.rotationMultiplier;
  });
  const y = useTransform(offset, (o) => {
    const absO = Math.abs(o);
    if (absO < 0.05) return 0;
    return absO * config.yMultiplier;
  });
  const scale = useTransform(
    offset,
    (o) => 1 - Math.abs(o) * config.scaleReduction,
  );
  const opacity = useTransform(
    offset,
    [-total / 2, -total / 2 + 0.5, 0, total / 2 - 0.5, total / 2],
    [0, 1, 1, 1, 0],
  );
  const zIndex = useTransform(offset, (o) =>
    Math.round(100 - Math.abs(o) * 10),
  );

  return (
    <motion.div
      style={{
        x,
        rotate,
        y,
        scale,
        opacity,
        zIndex,
      }}
      onMouseEnter={() => {
        onHoverCard?.();
      }}
      onClick={() => {
        onHoverCard?.();
      }}
      className={cn(
        "absolute rounded-3xl overflow-hidden bg-white shadow-2xl border-2 border-cyan-100/80 transition-shadow duration-300 flex flex-col cursor-pointer",
        "w-[305px] sm:w-[340px] md:w-[365px] h-[410px] sm:h-[435px]",
      )}
    >
      {/* Top Image Banner */}
      <div className="relative h-32 sm:h-36 w-full overflow-hidden bg-slate-100 shrink-0">
        <img
          src={slide.image}
          alt={slide.title}
          referrerPolicy="no-referrer"
          className="w-full h-full object-cover object-center"
        />
        <div className="absolute inset-0 bg-gradient-to-t from-slate-950/85 via-slate-950/35 to-transparent" />
        
        {/* Title inside banner */}
        <div className="absolute bottom-2.5 left-3.5 right-3.5">
          <h3 className="text-sm sm:text-base font-extrabold text-white leading-snug drop-shadow-md">
            {slide.title}
          </h3>
        </div>
      </div>

      {/* Card Body Content - Snug, tightly fitting layout with 0 excess empty space */}
      <div className="p-3.5 sm:p-4 flex-1 flex flex-col justify-between">
        <div className="space-y-2">
          {/* Description */}
          <p className="text-[11.5px] sm:text-xs text-[#708090] leading-relaxed line-clamp-2">
            {slide.description}
          </p>

          {/* Features Checklist */}
          {slide.features && slide.features.length > 0 && (
            <div className="space-y-1.5 border-t border-slate-100 pt-2">
              {slide.features.map((feat, fIdx) => (
                <div key={fIdx} className="flex items-start gap-1.5">
                  <div className="p-0.5 rounded-full bg-cyan-100 text-[#005A9C] shrink-0 mt-0.5">
                    <Check className="w-2.5 h-2.5 text-[#005A9C]" />
                  </div>
                  <span className="text-[11px] text-[#005A9C] font-medium leading-tight">
                    {feat}
                  </span>
                </div>
              ))}
            </div>
          )}
        </div>

        {/* Action Buttons - Directly placed under content without blank gap */}
        <div className="pt-2.5 border-t border-slate-100 relative z-50">
          <div className="grid grid-cols-2 gap-2">
            <button
              onClick={(e) => {
                e.stopPropagation();
                onOpenBooking?.(slide.id);
              }}
              className="w-full py-2 px-2 rounded-xl bg-[#005A9C] hover:bg-[#00477b] text-white font-bold text-xs transition-all flex items-center justify-center gap-1 shadow-sm cursor-pointer hover:scale-[1.02] active:scale-95"
            >
              <Calendar className="w-3.5 h-3.5" />
              <span>Reservar Cita</span>
            </button>

            <a
              href={createWhatsAppLink(slide.waMessage || `Hola Cielo Dental, me interesa información sobre ${slide.title}.`)}
              target="_blank"
              rel="noopener noreferrer"
              onClick={(e) => e.stopPropagation()}
              className="w-full py-2 px-2 rounded-xl bg-emerald-50 hover:bg-emerald-100 text-emerald-700 border border-emerald-200 font-bold text-xs transition-all flex items-center justify-center gap-1 cursor-pointer hover:scale-[1.02] active:scale-95"
            >
              <MessageCircle className="w-3.5 h-3.5 text-emerald-600" />
              <span>WhatsApp</span>
            </a>
          </div>
        </div>
      </div>
    </motion.div>
  );
};

export default CarouselStacked;
