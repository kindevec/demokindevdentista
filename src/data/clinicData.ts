import { Specialty, Doctor, BeforeAfterCase, SocialNetwork } from '../types';

export const CLINIC_PHONE_DISPLAY = "099 195 2889";
export const CLINIC_PHONE_RAW = "593991952889";
export const CLINIC_EMAIL = "contacto@cielodental.com";
export const CLINIC_ADDRESS = "Av. de los Cerezos 405 y Solano, Edificio Médico Cielo, Piso 3";
export const CLINIC_HOURS = "Lun - Sáb: 08:00 AM - 07:00 PM | Atención de Urgencias 24/7";

export function createWhatsAppLink(message: string): string {
  return `https://wa.me/${CLINIC_PHONE_RAW}?text=${encodeURIComponent(message)}`;
}

export const GENERAL_WA_MESSAGE = "Hola Cielo Dental, me gustaría agendar una cita de evaluación diagnóstico y consulta con un especialista.";
export const EMERGENCY_WA_MESSAGE = "¡ATENCIÓN URGENTE! Hola Cielo Dental, necesito atención de emergencia médica dental inmediata. Por favor responder urgente.";

export const SPECIALTIES_DATA: Specialty[] = [
  {
    id: "ortodoncia",
    title: "Ortodoncia Invisible y Digital",
    shortDesc: "Alineación dental de última generación con alineadores transparentes invisibles e iteración 3D sin brackets metálicos.",
    fullDesc: "Corrige la posición de tus dientes de forma discreta y cómoda. Diseñamos digitalmente la evolución de tu sonrisa antes de empezar el tratamiento.",
    iconName: "Sparkles",
    badge: "Más Solicitado",
    features: [
      "Escaneo intraoral 3D sin moldes molestos",
      "Alineadores transparentes removibles",
      "Resultados visibles en menos tiempo",
      "Controles virtuales con IA"
    ],
    waMessage: "Hola Cielo Dental, quisiera solicitar una evaluación y cotización para el tratamiento de Ortodoncia Invisible.",
    estimatedTime: "6 a 18 meses"
  },
  {
    id: "implantes",
    title: "Implantes Dentales Guiados por Computadora",
    shortDesc: "Recupera tu estética y función masticatoria con implantes de titanio biocompatible de carga inmediata.",
    fullDesc: "Cirugía de mínima invasión planificada en 3D. Remplazamos dientes ausentes de forma definitiva con aspecto y sensación 100% natural.",
    iconName: "ShieldCheck",
    badge: "Alta Precisión",
    features: [
      "Guía quirúrgica digital 3D personalizada",
      "Colocación sin incisiones dolorosas",
      "Coronas de circonio translúcido",
      "Garantía de integración de por vida"
    ],
    waMessage: "Hola Cielo Dental, me interesa agendar una consulta sobre Implantes Dentales Guiados por Computadora.",
    estimatedTime: "1 a 3 sesiones"
  },
  {
    id: "estetica",
    title: "Diseño de Sonrisa y Blanqueamiento LED",
    shortDesc: "Carillas de porcelana ultra finas y aclaramiento dental de alta potencia sin sensibilidad.",
    fullDesc: "Perfeccionamos el color, forma y proporción de tus dientes combinando estética facial y odontología cosmética avanzada.",
    iconName: "Smile",
    badge: "Tendencia",
    features: [
      "Mock-up previo (prueba de sonrisa en vivo)",
      "Carillas cerámicas ultrafinadas (0.3mm)",
      "Blanqueamiento foto-activado en 45 min",
      "Preservación total del esmalte"
    ],
    waMessage: "Hola Cielo Dental, deseo agendar una sesión para Diseño de Sonrisa y Blanqueamiento LED.",
    estimatedTime: "1 a 2 sesiones"
  },
  {
    id: "odontopediatria",
    title: "Odontopediatría y Cuidado Infantil",
    shortDesc: "Experiencia odontológica lúdica, empática y libre de dolor pensada especialmente para los más pequeños.",
    fullDesc: "Ambiente cálido con técnicas de adaptación psicológica para prevenir caries y guiar el correcto crecimiento maxilar de los niños.",
    iconName: "HeartHandshake",
    badge: "Atención Empática",
    features: [
      "Espacio adaptado con juegos y pantallas",
      "Técnicas de sedación consciente aprobadas",
      "Sellantes preventivos y fluoración",
      "Ortodoncia interceptiva infantil"
    ],
    waMessage: "Hola Cielo Dental, me gustaría agendar una cita de Odontopediatría para mi hijo/a con ambiente empático.",
    estimatedTime: "30 a 45 minutos"
  },
  {
    id: "endodoncia",
    title: "Endodoncia y Microcirugía Apical",
    shortDesc: "Salvamos tus piezas dentales naturales mediante tratamiento de conductos microscópico en una sola sesión.",
    fullDesc: "Eliminamos el dolor agudo de infección pulpar con tecnología de magnificación microscópica y limas de níquel-titanio automatizadas.",
    iconName: "Activity",
    badge: "Sin Dolor",
    features: [
      "Tratamiento microscópico en 1 sola cita",
      "Anestesia computarizada indolora",
      "Sellado biocompatible termoplástico",
      "Alivio inmediato del dolor"
    ],
    waMessage: "Hola Cielo Dental, tengo dolor o molestia dental y requiero una cita urgente de Endodoncia.",
    estimatedTime: "1 sesión (60 min)"
  }
];

export const DOCTORS_DATA: Doctor[] = [
  {
    id: "dr-carlos",
    name: "Dr. Carlos Mendoza V.",
    role: "Director Médico & Especialista en Implantología",
    specialty: "Implantes Digitales & Rehabilitación Oral",
    experienceYears: 16,
    image: "https://images.unsplash.com/photo-1622253692010-333f2da6031d?q=80&w=800&auto=format&fit=crop",
    bio: "Pionero en cirugía guiada 3D en la región. Dedicado a brindar tratamientos mínimamente invasivos con empatía y precisión suiza.",
    education: "Especialista en Implantología - Univ. de Sao Paulo / Magíster en Rehabilitación Oral",
    schedule: "Lun, Mié, Vie (09:00 - 17:00)"
  },
  {
    id: "dra-sofia",
    name: "Dra. Sofía Benítez R.",
    role: "Especialista en Ortodoncia & Estética Dental",
    specialty: "Ortodoncia Invisible & Diseñadora de Sonrisas",
    experienceYears: 12,
    image: "https://images.unsplash.com/photo-1559839734-2b71ea197ec2?q=80&w=800&auto=format&fit=crop",
    bio: "Apasionada por la armonía facial y la tecnología digital. Certificada Invisalign Diamond Provider con más de 1,500 casos exitosos.",
    education: "Especialización en Ortodoncia Maxilofacial - Univ. Chile",
    schedule: "Mar, Jue, Sáb (08:30 - 18:00)"
  },
  {
    id: "dr-andres",
    name: "Dr. Andrés Morales S.",
    role: "Especialista en Endodoncia & Urgencias",
    specialty: "Endodoncia Microscópica & Manejo del Dolor",
    experienceYears: 10,
    image: "https://images.unsplash.com/photo-1537368910025-700350fe46c7?q=80&w=800&auto=format&fit=crop",
    bio: "Experto en técnicas anestésicas indoloras y microcirugía reconstructiva. Enfoque 100% centrado en la tranquilidad del paciente.",
    education: "Especialista en Endodoncia Automatizada - Univ. de Buenos Aires",
    schedule: "Lun a Sáb (Urgencias 24h)"
  }
];

export const BEFORE_AFTER_CASES: BeforeAfterCase[] = [
  {
    id: "case-1",
    title: "Alineación de Apiñamiento severo con Ortodoncia Invisible",
    category: "ortodoncia",
    description: "Paciente de 28 años con apiñamiento anterior y mordida cruzada. Tratamiento de 11 meses con alineadores invisibles sin extracciones.",
    beforeImage: "https://images.unsplash.com/photo-1588776814546-1ffcf47267a5?q=80&w=800&auto=format&fit=crop",
    afterImage: "https://images.unsplash.com/photo-1598256989800-fe5f95da9787?q=80&w=800&auto=format&fit=crop",
    duration: "11 Meses",
    patientName: "Mariana G.",
    testimonial: "No quería usar brackets metálicos por mi trabajo. Con los alineadores de Cielo Dental nadie notó que estaba en tratamiento y los cambios fueron asombrosos desde el tercer mes.",
    stars: 5
  },
  {
    id: "case-2",
    title: "Rehabilitación Completa con Implantes Guiados en 3D",
    category: "implantes",
    description: "Paciente masculino con pérdida de 2 piezas superiores por traumatismo. Colocación de implantes inmediatos y coronas de circonio.",
    beforeImage: "https://images.unsplash.com/photo-1579684385127-1ef15d508118?q=80&w=800&auto=format&fit=crop",
    afterImage: "https://images.unsplash.com/photo-1606811841689-23dfddce3e95?q=80&w=800&auto=format&fit=crop",
    duration: "3 Sesiones",
    patientName: "Roberto V.",
    testimonial: "Pensé que el proceso dolería, pero fue sorprendentemente suave gracias a la cirugía guiada por computadora. Volví a sonreír con total confianza.",
    stars: 5
  },
  {
    id: "case-3",
    title: "Diseño de Sonrisa Cerámico y Blanqueamiento Laser",
    category: "estetica",
    description: "Transformación estética con 6 carillas de porcelana ultra delgada y blanqueamiento LED para corregir coloración y asimetría.",
    beforeImage: "https://images.unsplash.com/photo-1588776814546-1ffcf47267a5?q=80&w=800&auto=format&fit=crop",
    afterImage: "https://images.unsplash.com/photo-1570172619644-dfd03ed5d881?q=80&w=800&auto=format&fit=crop",
    duration: "2 Sesiones",
    patientName: "Camila R.",
    testimonial: "El equipo de Cielo Dental me escuchó con muchísima empatía. Probar la sonrisa digital antes de poner las carillas me dio 100% de tranquilidad.",
    stars: 5
  }
];

export const SOCIAL_NETWORKS: SocialNetwork[] = [
  {
    id: "facebook",
    name: "Facebook Oficial",
    handle: "@kindevec",
    iconType: "facebook",
    color: "#1877F2",
    bgColor: "bg-blue-50 border-blue-200 text-[#1877F2]",
    description: "Únete a nuestra comunidad activa de más de 25,000 seguidores. Descubre artículos sobre cuidado oral, transmisiones en vivo con especialistas y promociones semanales exclusivas.",
    actionText: "Visitar Facebook Oficial",
    url: "https://www.facebook.com/kindevec/",
    waMessage: "Hola Cielo Dental, los vi en Facebook y quisiera consultar sobre sus servicios y promociones activas.",
    image: "https://images.unsplash.com/photo-1629909613654-28e377c37b09?q=80&w=800&auto=format&fit=crop"
  },
  {
    id: "instagram",
    name: "Instagram Oficial",
 handle: "@kindevx",
    iconType: "instagram",
    color: "#E4405F",
    bgColor: "bg-pink-50 border-pink-200 text-[#E4405F]",
    description: "Galería de casos reales en tiempo real, reels interactivos sobre higiene bucal, recorridos virtuales por nuestra clínica y videos de trasformación de sonrisas.",
    actionText: "Ver Instagram Oficial",
    url: "https://www.instagram.com/kindevx/",
    waMessage: "Hola Cielo Dental, encontré su perfil en Instagram y me encantaron los casos de diseño de sonrisa. Quisiera agendar una cita.",
    image: "https://images.unsplash.com/photo-1606811841689-23dfddce3e95?q=80&w=800&auto=format&fit=crop"
  },
  {
    id: "whatsapp",
    name: "WhatsApp Directo 24/7",
    handle: "099 195 2889",
    iconType: "whatsapp",
    color: "#25D366",
    bgColor: "bg-emerald-50 border-emerald-200 text-[#25D366]",
    description: "Canal oficial prioritario de comunicación instantánea. Recibe respuesta personalizada en menos de 5 minutos, confirma o reprograma tus citas y consulta urgencias 24 horas al día.",
    actionText: "Iniciar Chat Directo en WhatsApp",
    url: createWhatsAppLink("Hola Cielo Dental, me comunico desde la web para realizar una consulta rápida."),
    waMessage: "Hola Cielo Dental, me comunico desde su portal oficial para realizar una consulta rápida con un asesor.",
    image: "https://images.unsplash.com/photo-1588776814546-1ffcf47267a5?q=80&w=800&auto=format&fit=crop"
  }
];
