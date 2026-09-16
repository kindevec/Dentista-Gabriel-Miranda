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
  suitableFor: string;
  iconBgColor?: string;
  image?: string;
}

export interface DoctorProfile {
  name: string;
  title: string;
  role: string;
  specialty: string;
  experienceYears: number;
  image: string;
  bio: string;
  credentials: string[];
  philosophy: string;
  schedule: string;
}

export interface BeforeAfterCase {
  id: string;
  title: string;
  category: 'ortodoncia' | 'implantes' | 'estetica' | 'blanqueamiento';
  description: string;
  beforeImage: string;
  afterImage: string;
  duration: string;
  patientName: string;
  treatmentType: string;
  testimonial: string;
  stars: number;
}

export interface SocialNetwork {
  id: string;
  name: string;
  handle: string;
  iconType: 'facebook' | 'instagram' | 'whatsapp' | 'maps';
  color: string;
  bgColor: string;
  description: string;
  actionText: string;
  url: string;
  waMessage?: string;
  image: string;
}

export interface FaqItem {
  id: string;
  question: string;
  answer: string;
  category: 'general' | 'tratamientos' | 'pagos';
}

export interface AppointmentData {
  patientName: string;
  phone: string;
  email: string;
  specialtyId: string;
  preferredDate: string;
  preferredTime: string;
  notes: string;
  isEmergency: boolean;
}

export interface ClinicStat {
  value: string;
  label: string;
  sublabel: string;
  iconName: string;
}
