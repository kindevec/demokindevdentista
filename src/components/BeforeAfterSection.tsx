import React, { useState, useRef } from 'react';
import { motion } from 'motion/react';
import { BEFORE_AFTER_CASES, createWhatsAppLink } from '../data/clinicData';
import {
  Star,
  Sparkles,
  MoveHorizontal,
  MessageCircle,
  Quote,
  CheckCircle2,
  Info
} from 'lucide-react';

interface BeforeAfterSliderProps {
  beforeImage: string;
  afterImage: string;
  title: string;
}

const InteractiveBeforeAfterSlider: React.FC<BeforeAfterSliderProps> = ({
  beforeImage,
  afterImage,
  title
}) => {
  const [sliderPosition, setSliderPosition] = useState<number>(50);
  const [isDragging, setIsDragging] = useState<boolean>(false);
  const [imgErrorBefore, setImgErrorBefore] = useState<boolean>(false);
  const [imgErrorAfter, setImgErrorAfter] = useState<boolean>(false);

  const containerRef = useRef<HTMLDivElement>(null);

  // Fallback image in case any external URL fails to load
  const fallbackBefore = "https://images.unsplash.com/photo-1588776814546-1ffcf47267a5?q=80&w=800&auto=format&fit=crop";
  const fallbackAfter = "https://images.unsplash.com/photo-1598256989800-fe5f95da9787?q=80&w=800&auto=format&fit=crop";

  const updatePosition = (clientX: number) => {
    if (!containerRef.current) return;
    const rect = containerRef.current.getBoundingClientRect();
    if (rect.width === 0) return;
    const x = clientX - rect.left;
    let percentage = (x / rect.width) * 100;
    if (percentage < 0) percentage = 0;
    if (percentage > 100) percentage = 100;
    setSliderPosition(Math.round(percentage));
  };

  const handlePointerDown = (e: React.PointerEvent<HTMLDivElement>) => {
    setIsDragging(true);
    try {
      e.currentTarget.setPointerCapture(e.pointerId);
    } catch {
      // pointer capture fallback
    }
    updatePosition(e.clientX);
  };

  const handlePointerMove = (e: React.PointerEvent<HTMLDivElement>) => {
    if (!isDragging) return;
    updatePosition(e.clientX);
  };

  const handlePointerUp = (e: React.PointerEvent<HTMLDivElement>) => {
    setIsDragging(false);
    try {
      e.currentTarget.releasePointerCapture(e.pointerId);
    } catch {
      // ignore
    }
  };

  return (
    <div
      ref={containerRef}
      onPointerDown={handlePointerDown}
      onPointerMove={handlePointerMove}
      onPointerUp={handlePointerUp}
      onPointerCancel={handlePointerUp}
      className="relative w-full h-[280px] sm:h-[340px] rounded-2xl overflow-hidden select-none cursor-ew-resize border-2 border-[#00BFFF]/20 shadow-lg bg-slate-900 touch-none group"
      style={{ userSelect: 'none', WebkitUserSelect: 'none' }}
    >
      {/* Background After Image */}
      <img
        src={imgErrorAfter ? fallbackAfter : afterImage}
        alt={`${title} - Después`}
        referrerPolicy="no-referrer"
        draggable={false}
        onDragStart={(e) => e.preventDefault()}
        onError={() => setImgErrorAfter(true)}
        className="absolute inset-0 w-full h-full object-cover pointer-events-none select-none"
      />

      {/* After Badge */}
      <div className="absolute top-3 right-3 bg-[#005A9C]/90 text-white text-[10px] sm:text-[11px] font-extrabold px-3 py-1 rounded-full backdrop-blur-md shadow-md z-10 flex items-center gap-1 border border-white/20 pointer-events-none">
        <Sparkles className="w-3 h-3 text-[#00BFFF]" />
        <span>DESPUÉS</span>
      </div>

      {/* Foreground Clipped Before Image */}
      <div
        className="absolute inset-0 h-full overflow-hidden pointer-events-none"
        style={{ width: `${sliderPosition}%` }}
      >
        <img
          src={imgErrorBefore ? fallbackBefore : beforeImage}
          alt={`${title} - Antes`}
          referrerPolicy="no-referrer"
          draggable={false}
          onDragStart={(e) => e.preventDefault()}
          onError={() => setImgErrorBefore(true)}
          className="absolute inset-0 w-full h-full object-cover max-w-none pointer-events-none select-none"
          style={{
            width: containerRef.current ? `${containerRef.current.offsetWidth}px` : '100%'
          }}
        />
        {/* Before Badge */}
        <div className="absolute top-3 left-3 bg-slate-900/85 text-white text-[10px] sm:text-[11px] font-extrabold px-3 py-1 rounded-full backdrop-blur-md shadow-md z-10 border border-white/20 pointer-events-none">
          ANTES
        </div>
      </div>

      {/* Glowing Vertical Splitter Line & Handle */}
      <div
        className="absolute top-0 bottom-0 w-1 bg-gradient-to-b from-[#00BFFF] via-white to-[#005A9C] shadow-[0_0_12px_rgba(0,191,255,0.8)] z-20 pointer-events-none"
        style={{ left: `${sliderPosition}%` }}
      >
        {/* Round Central Handle Button */}
        <div
          className={`absolute top-1/2 -translate-y-1/2 -translate-x-1/2 w-10 h-10 rounded-full bg-white border-2 border-[#005A9C] shadow-xl flex items-center justify-center text-[#005A9C] transition-transform duration-150 pointer-events-none ${
            isDragging ? 'scale-125 border-[#00BFFF] shadow-[#00BFFF]/50' : 'group-hover:scale-110'
          }`}
        >
          <MoveHorizontal className="w-5 h-5 text-[#005A9C]" />
        </div>

        {/* Position Percentage Badge */}
        <div className="absolute bottom-3 -translate-x-1/2 bg-[#005A9C]/90 text-white text-[9px] font-bold px-2 py-0.5 rounded-full backdrop-blur-md border border-white/30 shadow-md">
          {sliderPosition}%
        </div>
      </div>

      {/* Accessible Invisible Range Control Input */}
      <input
        type="range"
        min="0"
        max="100"
        value={sliderPosition}
        onChange={(e) => setSliderPosition(Number(e.target.value))}
        className="sr-only"
        aria-label={`Comparar antes y después para ${title}`}
      />

      {/* Hover Helper Overlay */}
      <div className="absolute bottom-2 left-1/2 -translate-x-1/2 bg-black/70 backdrop-blur-md text-white text-[10px] font-medium px-3 py-1 rounded-full opacity-80 group-hover:opacity-100 transition-opacity pointer-events-none border border-white/10 hidden sm:block">
        Mueve o desliza para comparar
      </div>
    </div>
  );
};

export const BeforeAfterSection: React.FC = () => {
  const [activeCategory, setActiveCategory] = useState<'todos' | 'ortodoncia' | 'implantes' | 'estetica'>('todos');

  const filteredCases =
    activeCategory === 'todos'
      ? BEFORE_AFTER_CASES
      : BEFORE_AFTER_CASES.filter((c) => c.category === activeCategory);

  return (
    <section id="casos-reales" className="py-20 bg-[#FDFDFD] relative">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        
        {/* Section Header */}
        <div className="text-center max-w-3xl mx-auto mb-10 space-y-3">
          <div className="inline-flex items-center gap-1.5 px-3.5 py-1 rounded-full bg-cyan-50 border border-cyan-100 text-[#005A9C] text-xs font-bold uppercase tracking-wider">
            <Sparkles className="w-3.5 h-3.5 text-[#00BFFF]" />
            <span>Transformaciones Clínicas Reales</span>
          </div>
          <h2 className="text-3xl sm:text-4xl font-extrabold text-[#005A9C] tracking-tight">
            Casos de Antes y Después en Ortodoncia e Implantes
          </h2>
          <p className="text-sm sm:text-base text-[#708090]">
            Resultados verificados de nuestros pacientes. Arrastra el deslizador interactivo para apreciar la precisión del cambio estético y funcional.
          </p>
        </div>

        {/* Category Filters */}
        <div className="flex flex-wrap items-center justify-center gap-2 mb-10">
          {[
            { id: 'todos', label: 'Todos los Casos' },
            { id: 'ortodoncia', label: 'Ortodoncia Invisible' },
            { id: 'implantes', label: 'Implantes Guiados' },
            { id: 'estetica', label: 'Diseño de Sonrisa' },
          ].map((cat) => (
            <button
              key={cat.id}
              onClick={() => setActiveCategory(cat.id as any)}
              className={`px-5 py-2.5 rounded-full text-xs font-bold uppercase tracking-wider transition-all duration-200 ${
                activeCategory === cat.id
                  ? 'bg-[#005A9C] text-white shadow-md shadow-[#005A9C]/20 scale-105'
                  : 'bg-slate-100 text-[#708090] hover:bg-slate-200'
              }`}
            >
              {cat.label}
            </button>
          ))}
        </div>

        {/* Cases Grid */}
        <div className="grid grid-cols-1 lg:grid-cols-3 gap-8">
          {filteredCases.map((c, idx) => (
            <motion.div
              key={c.id}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.5, delay: idx * 0.1 }}
              viewport={{ once: true }}
              className="bg-white/80 backdrop-blur-md rounded-3xl p-6 border border-[#00BFFF]/15 shadow-xl shadow-cyan-900/5 hover:border-[#00BFFF]/40 hover:shadow-2xl transition-all duration-300 flex flex-col justify-between"
            >
              <div>
                {/* Clean Interactive Slider */}
                <InteractiveBeforeAfterSlider
                  beforeImage={c.beforeImage}
                  afterImage={c.afterImage}
                  title={c.title}
                />

                {/* Meta details */}
                <div className="mt-5 space-y-3">
                  <div className="flex items-center justify-between">
                    <span className="text-[11px] font-bold uppercase tracking-wider text-[#005A9C] bg-cyan-50 border border-cyan-100 px-3 py-1 rounded-full">
                      Duración: {c.duration}
                    </span>
                    <div className="flex items-center text-amber-400">
                      {[...Array(c.stars)].map((_, i) => (
                        <Star key={i} className="w-4 h-4 fill-amber-400 text-amber-400" />
                      ))}
                    </div>
                  </div>

                  <h3 className="text-lg font-bold text-[#005A9C] leading-snug">{c.title}</h3>
                  <p className="text-xs text-[#708090] leading-relaxed">{c.description}</p>

                  {/* Testimonial Quote */}
                  <div className="p-4 rounded-2xl bg-gradient-to-br from-cyan-50/60 to-slate-50 border border-cyan-100/80 relative mt-4">
                    <Quote className="w-5 h-5 text-[#00BFFF]/40 absolute top-3 right-3" />
                    <p className="text-xs italic text-[#005A9C] pr-6">"{c.testimonial}"</p>
                    <div className="flex items-center gap-1.5 mt-2">
                      <CheckCircle2 className="w-3.5 h-3.5 text-[#00BFFF]" />
                      <p className="text-[11px] font-bold text-[#005A9C]">{c.patientName} • Paciente Verificado</p>
                    </div>
                  </div>
                </div>
              </div>

              {/* WhatsApp Action for similar cases */}
              <div className="mt-6 pt-4 border-t border-slate-100">
                <a
                  href={createWhatsAppLink(`Hola Cielo Dental, vi el caso de ${c.title} y desearía consultar si mi situación es candidata a un tratamiento similar.`)}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="w-full py-3.5 rounded-2xl bg-[#005A9C] hover:bg-[#00477b] text-white font-bold text-xs transition-all flex items-center justify-center gap-2 shadow-md hover:scale-[1.01]"
                >
                  <MessageCircle className="w-4 h-4 text-[#00BFFF]" />
                  <span>Consultar sobre este tratamiento</span>
                </a>
              </div>
            </motion.div>
          ))}
        </div>

        {/* Clinical Disclaimer Banner */}
        <div className="mt-12 max-w-2xl mx-auto p-4 rounded-2xl bg-cyan-50/50 border border-cyan-100 flex items-center gap-3 text-xs text-[#708090]">
          <Info className="w-5 h-5 text-[#00BFFF] shrink-0" />
          <p>
            * Todos los casos presentados muestran resultados reales de pacientes tratados en Cielo Dental. Los planes de tratamiento son personalizados y los tiempos pueden variar según la evaluación clínica inicial.
          </p>
        </div>

      </div>
    </section>
  );
};

