import { Specialty, DoctorProfile, SocialNetwork, FaqItem } from '../types';

export const CLINIC_NAME = "Miranda Dental Studio";
export const CLINIC_TAGLINE = "Rehabilitación Oral y Estética";
export const DOCTOR_NAME = "Dr. Gabriel Mateo Miranda Hormaza";
export const DOCTOR_TITLE = "Odontólogo — Rehabilitación Oral y Estética";
export const DOCTOR_SENESCYT = "1042-2023-2642790";
export const CLINIC_PHONE_DISPLAY = "+593 98 231 5408";
export const CLINIC_PHONE_RAW = "593982315408";
export const CLINIC_EMAIL = "contacto@mirandadentalstudio.com";
export const CLINIC_ADDRESS = "Av. 19 de Mayo y Velasco Ibarra, Edificio color gris, Local planta baja (Parqueadero para pacientes)";
export const CLINIC_CITY = "Quito - Ecuador";
export const CLINIC_HOURS = "Lunes a Sábado: 09:00 AM - 19:00 PM | Domingo: 09:00 AM - 14:00 PM";
export const VALUATION_PRICE = 15;
export const VALUATION_DETAILS = "Incluye diagnóstico integral, fotografías clínicas de alta definición y radiografías dentales.";
export const FINANCING_INFO = "Efectivo, Transferencia, se aceptan todas las tarjetas de crédito y débito. Crédito directo dental desde $400 hasta $2,000.";

export function createWhatsAppLink(message: string): string {
  return `https://wa.me/${CLINIC_PHONE_RAW}?text=${encodeURIComponent(message)}`;
}

export const GENERAL_WA_MESSAGE = `Hola ${DOCTOR_NAME}, deseo agendar la consulta de valoración de $15 (incluye diagnóstico, fotografías y radiografías) en Miranda Dental Studio.`;
export const BOOKING_WA_MESSAGE = `Hola ${DOCTOR_NAME}, deseo agendar una cita en Miranda Dental Studio. ¿Qué días y horarios tiene disponibilidad?`;
export const EMERGENCY_WA_MESSAGE = `¡URGENCIA DENTAL! Hola ${DOCTOR_NAME}, presento dolor agudo y requiero atención prioritaria en Miranda Dental Studio.`;

/**
 * SERVICIOS BÁSICOS Y DE CONSULTORIO (Utilizados en la Rueda Interactiva de Servicios)
 */
export const SPECIALTIES_DATA: Specialty[] = [
  {
    id: "profilaxis-profunda",
    title: "Profilaxis Dental Profunda con Ultrasonido",
    shortDesc: "Limpieza profesional con ultrasonido para eliminar sarro subgingival, placa bacteriana y manchas superficiales.",
    fullDesc: "Higiene dental avanzada de grado clínico que desinflama encías, previene la enfermedad periodontal y devuelve la pureza y frescura a tu sonrisa.",
    iconName: "Droplets",
    badge: "Cuidado Preventivo Esencial",
    image: "https://images.unsplash.com/photo-1588776814546-1ffcf47267a5?q=80&w=800&auto=format&fit=crop",
    features: [
      "Eliminación ultrasónica de cálculo y sarro",
      "Pulido dental con pasta profiláctica suave",
      "Control bacteriano y salud de encías",
      "Revisión diagnóstica completa"
    ],
    waMessage: `Hola ${DOCTOR_NAME}, deseo agendar una Profilaxis Dental Profunda en Miranda Dental Studio.`,
    estimatedTime: "40 a 45 minutos",
    suitableFor: "Toda la familia como mantenimiento preventivo semestral."
  },
  {
    id: "restauraciones-esteticas",
    title: "Restauraciones Estéticas Biomiméticas",
    shortDesc: "Calzas y reconstrucciones invisibles en resina de alta densidad que imitan el color y textura natural del diente.",
    fullDesc: "Reemplazo de restauraciones metálicas oscuras o reparación de caries y fracturas con resinas nanoparticuladas biocompatibles de larga duración.",
    iconName: "ShieldCheck",
    badge: "Biomimética Dental",
    image: "https://images.unsplash.com/photo-1606811841689-23dfddce3e95?q=80&w=800&auto=format&fit=crop",
    features: [
      "Estratificación de capas con color dental exacto",
      "Aislamiento absoluto para máxima adhesión",
      "Pulido de alto brillo inalterable",
      "Preservación de la anatomía original"
    ],
    waMessage: `Hola ${DOCTOR_NAME}, quisiera agendar una cita para Restauraciones Estéticas en resina.`,
    estimatedTime: "45 minutos por pieza",
    suitableFor: "Pacientes con caries, fracturas o restauraciones antiguas deterioradas."
  },
  {
    id: "blanqueamiento-led",
    title: "Blanqueamiento Dental Profesional LED",
    shortDesc: "Aclara hasta 4 tonos el esmalte dental en una sesión con gel desensibilizante fotoactivado.",
    fullDesc: "Tecnología de fotoactivación controlada que elimina pigmentos profundos por café, té o tabaco sin dañar la integridad de tu esmalte.",
    iconName: "Smile",
    badge: "Efecto Luminoso Inmediato",
    image: "https://images.unsplash.com/photo-1570172619644-dfd03ed5d881?q=80&w=800&auto=format&fit=crop",
    features: [
      "Aclaramiento de 3 a 5 tonos en 1 sola cita",
      "Protector gingival fotopolimerizable",
      "Fórmula clínica con nitrato de potasio anti-sensibilidad",
      "Brillo radiante y natural de tu sonrisa"
    ],
    waMessage: `Hola ${DOCTOR_NAME}, me gustaría agendar una sesión de Blanqueamiento Dental LED en consultorio.`,
    estimatedTime: "50 minutos",
    suitableFor: "Dientes oscurecidos o manchados que buscan una sonrisa rejuvenecida."
  },
  {
    id: "microabrasion",
    title: "Microabrasión Dental para Fluorosis",
    shortDesc: "Tratamiento químico-mecánico especializado para eliminar manchas blancas o pardas causadas por fluorosis.",
    fullDesc: "Técnica conservadora que pule y remueve las alteraciones de color superficiales del esmalte, devolviendo una tonalidad homogénea y natural a tus dientes frontales.",
    iconName: "Activity",
    badge: "Tratamiento de Manchas",
    image: "https://images.unsplash.com/photo-1629909615184-74f495363b67?q=80&w=800&auto=format&fit=crop",
    features: [
      "Eliminación selectiva de manchas por fluorosis",
      "Procedimiento mínimamente invasivo sin desgastes agresivos",
      "Remineralización inmediata con flúor tópico",
      "Resultados visibles en la misma sesión"
    ],
    waMessage: `Hola ${DOCTOR_NAME}, requiero una valoración para Microabrasión Dental y tratamiento de fluorosis.`,
    estimatedTime: "45 a 60 minutos",
    suitableFor: "Pacientes con manchas blancas o marrones congénitas o por exceso de flúor."
  },
  {
    id: "extracciones-dentales",
    title: "Cirugía y Extracciones Atraumáticas",
    shortDesc: "Retiro seguro y libre de dolor de piezas dentales no restaurables o molares dañados.",
    fullDesc: "Extracciones realizadas bajo técnicas de microcirugía atraumática que preservan el hueso alveolar para futuros implantes o rehabilitaciones fijas.",
    iconName: "ShieldCheck",
    badge: "Procedimiento Atraumático",
    image: "https://images.unsplash.com/photo-1579684385127-1ef15d508118?q=80&w=800&auto=format&fit=crop",
    features: [
      "Anestesia guiada 100% indolora",
      "Preservación de reborde óseo",
      "Técnicas mínimamente invasivas",
      "Instrucciones y seguimiento postquirúrgico directo"
    ],
    waMessage: `Hola ${DOCTOR_NAME}, necesito información y cita para una Extracción Dental segura.`,
    estimatedTime: "30 a 45 minutos",
    suitableFor: "Dientes con fracturas severas o raíces no recuperables."
  },
  {
    id: "consulta-valoracion",
    title: "Consulta de Valoración Médica Integral ($15)",
    shortDesc: "Evaluación clínica exhaustiva con fotografías clínicas y radiografías dentales incluidas.",
    fullDesc: "El punto de partida ideal para transformar tu sonrisa: diagnóstico clínico completo, fotografías intraorales y radiografías por solo $15 con el Dr. Gabriel Mateo Miranda.",
    iconName: "Layers",
    badge: "Solo $15 Incluye Rayos X",
    image: "https://images.unsplash.com/photo-1622253692010-333f2da6031d?q=80&w=800&auto=format&fit=crop",
    features: [
      "Diagnóstico clínico personalizado completo",
      "Fotografías intraorales y extraorales de alta resolución",
      "Radiografías dentales diagnósticas incluidas",
      "Presupuesto honesto y plan de crédito directo"
    ],
    waMessage: `Hola ${DOCTOR_NAME}, deseo reservar mi Consulta de Valoración de $15 con diagnóstico, fotos y radiografías.`,
    estimatedTime: "30 a 45 minutos",
    suitableFor: "Nuevos pacientes que buscan un diagnóstico certero y accesible."
  }
];

export const DOCTOR_PROFILE: DoctorProfile = {
  name: "Dr. Gabriel Mateo Miranda Hormaza",
  title: "Odontólogo — Especialista en Rehabilitación Oral y Estética",
  role: "Director Clínico y Fundador de Miranda Dental Studio",
  specialty: "Rehabilitación Oral, Prótesis Implanto-Asistida, Estética Dental y Armonización Facial",
  experienceYears: 3,
  image: "https://images.unsplash.com/photo-1622253692010-333f2da6031d?q=80&w=1000&auto=format&fit=crop",
  bio: "El Dr. Gabriel Mateo Miranda Hormaza (Graduado en 2023, con 3 años de trayectoria clínica) es egresado de la prestigiosa Universidad de los Andes y actualmente cursa su 2do año de Residencia en la especialidad de Rehabilitación Oral y Prótesis implanto asistida en la Universidad de los Hemisferios. Con residencia internacional en la Universidad Cayetano Heredia de Perú, diplomado en Carillas 'Arte en Resinas' (Perú), diplomado en Endodoncia mecanizada en CPO BRASIL y formación continua en congresos internacionales como SMILE & HOF 2026 en Río de Janeiro (Brasil), fusiona la máxima precisión biomecánica con la armonía estética natural.",
  credentials: [
    "Registro Oficial de Título Senescyt: 1042-2023-2642790",
    "Cursando 2do año de Residencia en Rehabilitación Oral y Prótesis Implanto Asistida (Universidad de los Hemisferios)",
    "Graduado en Odontología por la Universidad de los Andes (2023)",
    "Residencia Odontológica en Universidad Cayetano Heredia (Perú)",
    "Diplomado Internacional en Carillas 'Arte en Resinas' (Perú)",
    "Diplomado en Endodoncia Mecanizada en CPO BRASIL",
    "Congreso en Brasil Río de Janeiro 2026 SMILE & HOF",
    "Congreso Internacional Regional Amazónico",
    "Congreso de Odontología Restauradora Estética en Rehabilitación Oral (Quito)"
  ],
  philosophy: "«Brindar una odontología especializada, basada en la excelencia clínica, la tecnología y la atención humana, buscando resultados funcionales, estéticos y naturales. Cada paciente merece un tratamiento personalizado, honesto y pensado para cuidar su salud y transformar su sonrisa y calidad de vida.»",
  schedule: "Lunes a Sábado: 09:00 AM - 19:00 PM | Domingo: 09:00 AM - 14:00 PM"
};

export const FAQ_DATA: FaqItem[] = [
  {
    id: "faq-1",
    question: "¿Qué incluye la consulta de valoración de $15?",
    answer: "La consulta de valoración de $15 es integral: incluye diagnóstico clínico minucioso con el Dr. Gabriel Mateo Miranda, registro fotográfico de tu sonrisa y radiografías dentales diagnósticas. Además, recibirás tu plan de tratamiento personalizado con presupuesto claro y opciones de financiamiento.",
    category: "general"
  },
  {
    id: "faq-2",
    question: "¿Qué formas de pago y crédito directo tienen?",
    answer: "Aceptamos efectivo, transferencias bancarias y todas las tarjetas de crédito y débito. Adicionalmente, contamos con nuestro Crédito Directo Dental propio para tratamientos desde $400 hasta $2,000 sin trámites engorrosos.",
    category: "pagos"
  },
  {
    id: "faq-3",
    question: "¿Atienden los fines de semana y domingos?",
    answer: "¡Sí! En Miranda Dental Studio comprendemos los horarios laborales de nuestros pacientes. Atendemos de Lunes a Sábado de 9:00 am a 7:00 pm, y los Domingos de 9:00 am a 2:00 pm con cita previa o urgencias.",
    category: "general"
  },
  {
    id: "faq-4",
    question: "¿Tienen parqueadero para pacientes?",
    answer: "Sí, nuestras instalaciones en Av. 19 de Mayo y Velasco Ibarra (Edificio color gris, planta baja) cuentan con parqueadero propio y exclusivo para la total comodidad de nuestros pacientes.",
    category: "general"
  },
  {
    id: "faq-5",
    question: "¿Qué especialidades atienden en el consultorio?",
    answer: "Ofrecemos Rehabilitación Oral (prótesis y coronas), Estética Dental y Carillas, Endodoncia mecanizada (CPO Brasil), Implantología, Cirugía de terceros molares, Ortodoncia (autoligado y estéticos), Armonización Facial (Botox, Ácido Hialurónico, Bichectomía) y Periodoncia.",
    category: "tratamientos"
  },
  {
    id: "faq-6",
    question: "¿Los tratamientos causan dolor?",
    answer: "No. En Miranda Dental Studio aplicamos técnicas de anestesia guiada, odontología de mínima invasión y enfoque biológico respetuoso para que cada procedimiento sea completamente confortable y relajado.",
    category: "general"
  }
];

export const SOCIAL_NETWORKS: SocialNetwork[] = [
  {
    id: "whatsapp",
    name: "WhatsApp Oficial Miranda Dental Studio",
    handle: "+593 98 231 5408",
    iconType: "whatsapp",
    color: "#25D366",
    bgColor: "bg-emerald-50 border-emerald-200 text-[#25D366]",
    description: "Canal de atención directa y agendamiento médico con el Dr. Gabriel Mateo Miranda. Reserva tu valoración de $15 o consulta sobre tratamientos.",
    actionText: "Chatear por WhatsApp",
    url: createWhatsAppLink("Hola Dr. Gabriel Mateo Miranda, deseo agendar una consulta de valoración de $15 en Miranda Dental Studio."),
    waMessage: "Hola Dr. Gabriel Mateo Miranda, deseo información para una cita.",
    image: "https://images.unsplash.com/photo-1588776814546-1ffcf47267a5?q=80&w=800&auto=format&fit=crop"
  },
  {
    id: "instagram",
    name: "Instagram Oficial",
    handle: "@odontologia_miranda",
    iconType: "instagram",
    color: "#D4AF37",
    bgColor: "bg-amber-50 border-amber-200 text-[#D4AF37]",
    description: "Casos clínicos reales de Rehabilitación Oral, Diseño de Sonrisa y Estética en Miranda Dental Studio.",
    actionText: "Seguir en Instagram",
    url: "https://www.instagram.com/odontologia_miranda/",
    waMessage: "Hola Dr. Gabriel Mateo Miranda, vi su Instagram oficial y deseo agendar una valoración.",
    image: "https://images.unsplash.com/photo-1606811841689-23dfddce3e95?q=80&w=800&auto=format&fit=crop"
  },
  {
    id: "facebook",
    name: "Facebook Oficial",
    handle: "Miranda Dental Studio",
    iconType: "facebook",
    color: "#1877F2",
    bgColor: "bg-blue-50 border-blue-200 text-[#1877F2]",
    description: "Comunidad de pacientes y testimonios sobre nuestros tratamientos dentales en Quito.",
    actionText: "Visitar Facebook",
    url: "https://facebook.com/odontologiagabrielmiranda",
    waMessage: "Hola Dr. Gabriel Mateo Miranda, vi su página oficial de Facebook y deseo una cita.",
    image: "https://images.unsplash.com/photo-1629909613654-28e377c37b09?q=80&w=800&auto=format&fit=crop"
  }
];
