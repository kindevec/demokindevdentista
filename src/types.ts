export interface Specialty {
  id: string;
  title: string;
  shortDesc: string;
  fullDesc: string;
  iconName: string;
  badge?: string;
  features: string[];
  waMessage: string;
  estimatedTime: string;
}

export interface Doctor {
  id: string;
  name: string;
  role: string;
  specialty: string;
  experienceYears: number;
  image: string;
  bio: string;
  education: string;
  schedule: string;
}

export interface BeforeAfterCase {
  id: string;
  title: string;
  category: 'ortodoncia' | 'implantes' | 'estetica';
  description: string;
  beforeImage: string;
  afterImage: string;
  duration: string;
  patientName: string;
  testimonial: string;
  stars: number;
}

export interface SocialNetwork {
  id: string;
  name: string;
  handle: string;
  iconType: 'facebook' | 'instagram' | 'whatsapp';
  color: string;
  bgColor: string;
  description: string;
  actionText: string;
  url: string;
  waMessage?: string;
  image?: string;
}

export interface AppointmentData {
  patientName: string;
  phone: string;
  email: string;
  specialtyId: string;
  preferredDoctorId: string;
  preferredDate: string;
  preferredTime: string;
  notes: string;
  isEmergency: boolean;
}
