import { Specialty, DoctorProfile, BeforeAfterCase, SocialNetwork, FaqItem, ClinicStat } from '../types';

export const CLINIC_NAME = "Odontología Gabriel Miranda";
export const DOCTOR_NAME = "Dr. Gabriel Miranda";
export const DOCTOR_TITLE = "Especialista en Rehabilitación Oral & Estética Dental";
export const CLINIC_PHONE_DISPLAY = "+593 98 231 5408";
export const CLINIC_PHONE_RAW = "593982315408";
export const CLINIC_EMAIL = "contacto@odontologiagabrielmiranda.com";
export const CLINIC_ADDRESS = "Av. de los Shyris y Naciones Unidas, Edificio Médico Platinum, Piso 4, Cons. 402";
export const CLINIC_CITY = "Quito - Ecuador";
export const CLINIC_HOURS = "Lun - Vie: 08:30 AM - 19:00 PM | Sáb: 09:00 AM - 15:00 PM | Urgencias 24/7";

export function createWhatsAppLink(message: string): string {
  return `https://wa.me/${CLINIC_PHONE_RAW}?text=${encodeURIComponent(message)}`;
}

export const GENERAL_WA_MESSAGE = `Hola ${DOCTOR_NAME}, deseo agendar una cita de evaluación y diagnóstico dental en su consultorio.`;
export const BOOKING_WA_MESSAGE = `Hola ${DOCTOR_NAME}, deseo agendar una cita dental en su consultorio. ¿Me podría indicar qué días y horarios tiene disponibilidad? Muchas gracias.`;
export const EMERGENCY_WA_MESSAGE = `¡URGENCIA DENTAL! Hola ${DOCTOR_NAME}, presento dolor agudo o una emergencia dental y requiero atención prioritaria inmediata.`;

export const CLINIC_STATS: ClinicStat[] = [
  {
    value: "100%",
    label: "Diagnóstico Digital 3D",
    sublabel: "Planificación milimétrica computarizada",
    iconName: "Cpu",
  },
  {
    value: "24/7",
    label: "Atención Prioritaria",
    sublabel: "Respuesta inmediata ante emergencias",
    iconName: "ShieldCheck",
  },
  {
    value: "99.4%",
    label: "Satisfacción Clínica",
    sublabel: "Recomendaciones y reseñas 5 estrellas",
    iconName: "Star",
  },
  {
    value: "100%",
    label: "Tratamientos Indoloros",
    sublabel: "Anestesia guiada por computadora",
    iconName: "ShieldCheck",
  },
];

export const SPECIALTIES_DATA: Specialty[] = [
  {
    id: "ortodoncia",
    title: "Ortodoncia Invisible & Digital 3D",
    shortDesc: "Alineación estética avanzada con alineadores transparentes removibles o brackets de autoligado de baja fricción.",
    fullDesc: "Corregimos apiñamientos, mordidas abiertas o cruzadas mediante planificación computarizada 3D, permitiéndote ver el resultado final antes de iniciar.",
    iconName: "Layers",
    badge: "Más Solicitado",
    image: "https://images.unsplash.com/photo-1598256989800-fe5f95da9787?q=80&w=800&auto=format&fit=crop",
    features: [
      "Escaneo digital intraoral sin pastas ni náuseas",
      "Alineadores transparentes 100% discretos",
      "Reducción del tiempo de tratamiento hasta un 35%",
      "Controles presenciales y seguimiento digital"
    ],
    waMessage: `Hola ${DOCTOR_NAME}, me gustaría agendar una valoración para Ortodoncia Invisible y conocer el plan de tratamiento.`,
    estimatedTime: "6 a 16 meses",
    suitableFor: "Adultos y jóvenes que buscan discreción, comodidad y rapidez."
  },
  {
    id: "diseno-sonrisa",
    title: "Diseño de Sonrisa & Carillas Dentales",
    shortDesc: "Carillas cerámicas ultrafinas (0.3 mm) y resinas de alta estética para armonizar forma, tamaño y tonalidad.",
    fullDesc: "Diseño biomimético personalizado adaptado a tus rasgos faciales con prueba estética en vivo (Mock-up) para garantizar la naturalidad de tu nueva sonrisa.",
    iconName: "Smile",
    badge: "Alta Estética",
    image: "https://images.unsplash.com/photo-1606811841689-23dfddce3e95?q=80&w=800&auto=format&fit=crop",
    features: [
      "Mock-up previo (prueba estética directa en boca)",
      "Carillas de porcelana E-max o resina estratificada",
      "Corrección de manchas, fracturas y desgastes",
      "Preservación máxima de tu esmalte natural"
    ],
    waMessage: `Hola ${DOCTOR_NAME}, deseo solicitar una consulta de valoración para Diseño de Sonrisa y Carillas Estéticas.`,
    estimatedTime: "2 a 3 sesiones",
    suitableFor: "Personas con dientes pigmentados, desgastados, con espacios o asimétricos."
  },
  {
    id: "implantes",
    title: "Implantes Dentales Guiados por Computadora",
    shortDesc: "Reposición fija y definitiva de piezas perdidas con implantes de titanio biocompatible y coronas de circonio.",
    fullDesc: "Cirugía mínimamente invasiva mediante guía quirúrgica 3D. Recupera tu capacidad masticatoria y la confianza para reír sin dolor y con fijación para toda la vida.",
    iconName: "ShieldCheck",
    badge: "Precisión Quirúrgica",
    image: "https://images.unsplash.com/photo-1579684385127-1ef15d508118?q=80&w=800&auto=format&fit=crop",
    features: [
      "Planificación tomográfica digital milimétrica",
      "Procedimiento sin bisturí tradicional ni dolor",
      "Coronas estéticas de circonio translúcido",
      "Posibilidad de carga y diente provisional inmediato"
    ],
    waMessage: `Hola ${DOCTOR_NAME}, requiero información y valoración para Implantes Dentales Guiados por Computadora.`,
    estimatedTime: "1 a 3 citas",
    suitableFor: "Pacientes con pérdida de una o varias piezas dentales."
  },
  {
    id: "endodoncia",
    title: "Endodoncia Microscópica en 1 Sesión",
    shortDesc: "Salvamos tu diente natural eliminando el dolor y la infección pulpar con tecnología rotatoria de última generación.",
    fullDesc: "Tratamiento de conducto indoloro con microscopía clínica de alta magnificación y localizador electrónico apical que resuelve la molestia en una sola cita.",
    iconName: "Activity",
    badge: "Alivio Inmediato",
    image: "https://images.unsplash.com/photo-1629909615184-74f495363b67?q=80&w=800&auto=format&fit=crop",
    features: [
      "Tratamiento completado en 1 sola sesión de 60 min",
      "Anestesia computarizada indolora y localizada",
      "Limas de níquel-titanio termo-tratadas",
      "Sellado radicular termoplástico tridimensional"
    ],
    waMessage: `Hola ${DOCTOR_NAME}, tengo dolor dental agudo y solicito una cita prioritaria de Endodoncia.`,
    estimatedTime: "1 sesión (60 min)",
    suitableFor: "Dolor intenso, caries profundas, inflamación o traumatismos dentales."
  },
  {
    id: "limpieza-profilaxis",
    title: "Limpieza con Ultrasonido & Profilaxis Pro",
    shortDesc: "Higiene dental profunda con tecnología piezoeléctrica ultrasónica para remover sarro, manchas y placa bacteriana.",
    fullDesc: "Tratamiento preventivo esencial que desinflama encías, combate el mal aliento y devuelve el brillo natural a tus dientes sin desgastar el esmalte.",
    iconName: "Droplets",
    badge: "Cuidado Preventivo",
    image: "https://images.unsplash.com/photo-1588776814546-1ffcf47267a5?q=80&w=800&auto=format&fit=crop",
    features: [
      "Eliminación ultrasónica de sarro supra y subgingival",
      "Aeropulidor con bicarbonato micronizado para manchas",
      "Aplicación tópica de flúor remineralizante",
      "Evaluación periodontal completa incluida"
    ],
    waMessage: `Hola ${DOCTOR_NAME}, deseo agendar una Limpieza Dental Ultrasónica y Profilaxis Profunda.`,
    estimatedTime: "40 minutos",
    suitableFor: "Revisión preventiva semestral para toda la familia."
  },
  {
    id: "blanqueamiento",
    title: "Blanqueamiento Dental LED / Láser",
    shortDesc: "Aclara hasta 5 tonos de tu esmalte en una sola sesión de 45 minutos con fórmulas desensibilizantes.",
    fullDesc: "Tecnología de fotoactivación en frío que disuelve pigmentos causados por café, té, tabaco o el paso de los años, manteniendo tus dientes protegidos.",
    iconName: "Zap",
    badge: "Efecto Inmediato",
    image: "https://images.unsplash.com/photo-1570172619644-dfd03ed5d881?q=80&w=800&auto=format&fit=crop",
    features: [
      "Aclaramiento de 4 a 6 tonos en 45 minutos",
      "Fórmula clínica con nitrato de potasio anti-sensibilidad",
      "Kit de refuerzo en casa opcional personalizado",
      "Protección gingival foto-polimerizable"
    ],
    waMessage: `Hola ${DOCTOR_NAME}, quisiera agendar una sesión de Blanqueamiento Dental LED en consultorio.`,
    estimatedTime: "45 a 60 minutos",
    suitableFor: "Pacientes con tonalidad amarilla o manchas que desean una sonrisa reluciente."
  },
  {
    id: "odontopediatria",
    title: "Odontopediatría & Atención Familiar",
    shortDesc: "Odontología empática, cálida y libre de traumas pensada para niños, adolescentes y toda la familia.",
    fullDesc: "Ambiente amigable con técnicas de adaptación psicológica positiva, selladores preventivos y guía del desarrollo maxilar y dental infantil.",
    iconName: "HeartHandshake",
    badge: "Atención Empática",
    image: "https://images.unsplash.com/photo-1629909613654-28e377c37b09?q=80&w=800&auto=format&fit=crop",
    features: [
      "Enfoque 'Decir - Mostrar - Hacer' sin miedo ni dolor",
      "Sellantes de fosas y fisuras contra caries",
      "Detección temprana de anomalías de mordida",
      "Educación interactiva en técnica de cepillado"
    ],
    waMessage: `Hola ${DOCTOR_NAME}, me gustaría agendar una cita odontopediátrica para mi hijo/a con su equipo.`,
    estimatedTime: "30 a 45 minutos",
    suitableFor: "Bebés, niños y adolescentes en etapa de crecimiento dental."
  }
];

export const DOCTOR_PROFILE: DoctorProfile = {
  name: "Dr. Gabriel Miranda",
  title: "Cirujano Dentista & Especialista en Estética Oral",
  role: "Director Clínico y Fundador",
  specialty: "Rehabilitación Oral, Estética Dental & Odontología Digital",
  experienceYears: 12,
  image: "https://images.unsplash.com/photo-1622253692010-333f2da6031d?q=80&w=1000&auto=format&fit=crop",
  bio: "Con más de una década dedicada a perfeccionar sonrisas, el Dr. Gabriel Miranda fusiona la precisión científica con la sensibilidad artística. Su enfoque primordial es ofrecer tratamientos odontológicos de excelencia en un ambiente cálido, relajado y 100% libre de dolor, sustentado en tecnología digital 3D y los más estrictos estándares de bioseguridad internacional.",
  credentials: [
    "Especialista en Rehabilitación Oral & Implantología Quirúrgica",
    "Diplomado Internacional en Odontología Estética y Diseño de Sonrisa Biomimético",
    "Certificación Oficial en Ortodoncia Digital con Alineadores Invisibles",
    "Miembro Activo de la Federación Odontológica Ecuatoriana"
  ],
  philosophy: "«Cada paciente es único. Mi mayor satisfacción es ver cómo una sonrisa saludable y armónica transforma la seguridad y la calidad de vida de una persona, sin que el proceso cause temor ni dolor.»",
  schedule: "Lunes a Viernes: 08:30 AM - 19:00 PM | Sábados: 09:00 AM - 15:00 PM"
};

export const BEFORE_AFTER_CASES: BeforeAfterCase[] = [
  {
    id: "caso-ortodoncia-1",
    title: "Alineación de Apiñamiento Severo y Mordida Cruzada",
    category: "ortodoncia",
    treatmentType: "Ortodoncia Invisible 3D",
    description: "Paciente de 26 años con apiñamiento anterior y rotaciones dentales. Planificación digital 3D sin extracciones de premolares.",
    beforeImage: "https://images.unsplash.com/photo-1588776814546-1ffcf47267a5?q=80&w=800&auto=format&fit=crop",
    afterImage: "https://images.unsplash.com/photo-1598256989800-fe5f95da9787?q=80&w=800&auto=format&fit=crop",
    duration: "10 Meses",
    patientName: "Valeria M.",
    testimonial: "Tenía mucho complejo con mis dientes pero no quería usar brackets metálicos por mi carrera. El Dr. Gabriel Miranda me recomendó los alineadores y en solo 10 meses el cambio fue radical. ¡El trato es de 10!",
    stars: 5
  },
  {
    id: "caso-implante-2",
    title: "Rehabilitación Fija con Implante Guiado en 3D",
    category: "implantes",
    treatmentType: "Implante Guiado de Titanio + Corona Circonio",
    description: "Reemplazo de pieza dental ausente por traumatismo con cirugía guiada milimétrica y corona de circonio de alta traslucidez.",
    beforeImage: "https://images.unsplash.com/photo-1579684385127-1ef15d508118?q=80&w=800&auto=format&fit=crop",
    afterImage: "https://images.unsplash.com/photo-1606811841689-23dfddce3e95?q=80&w=800&auto=format&fit=crop",
    duration: "2 Sesiones",
    patientName: "Carlos E.",
    testimonial: "La precisión del Dr. Gabriel me dejó asombrado: no sentí dolor durante la cirugía ni después. Hoy puedo comer y sonreír con total normalidad, se ve idéntico a mis dientes naturales.",
    stars: 5
  },
  {
    id: "caso-estetica-3",
    title: "Diseño de Sonrisa con Carillas Cerámicas Ultrafinas",
    category: "estetica",
    treatmentType: "8 Carillas de Porcelana E-Max",
    description: "Armonización estética de borde incisal, color y cierre de diastemas centrales en paciente con desgaste severo por bruxismo.",
    beforeImage: "https://images.unsplash.com/photo-1588776814546-1ffcf47267a5?q=80&w=800&auto=format&fit=crop",
    afterImage: "https://images.unsplash.com/photo-1570172619644-dfd03ed5d881?q=80&w=800&auto=format&fit=crop",
    duration: "3 Citas",
    patientName: "Diana P.",
    testimonial: "El Dr. Miranda me hizo un mock-up antes de colocar las carillas definitivas. Pude ver y aprobar mi sonrisa antes de empezar. El resultado superó todas mis expectativas.",
    stars: 5
  },
  {
    id: "caso-blanqueamiento-4",
    title: "Aclaramiento Dental Clínico Fotoactivado LED",
    category: "blanqueamiento",
    treatmentType: "Blanqueamiento LED en Consultorio",
    description: "Tratamiento de aclaramiento dental de 5 tonos para eliminar manchas crónicas por café y té en esmalte intacto.",
    beforeImage: "https://images.unsplash.com/photo-1579684385127-1ef15d508118?q=80&w=800&auto=format&fit=crop",
    afterImage: "https://images.unsplash.com/photo-1598256989800-fe5f95da9787?q=80&w=800&auto=format&fit=crop",
    duration: "1 Sesión (45 min)",
    patientName: "Santiago G.",
    testimonial: "Rápido y sin sensibilidad dental. En una sola visita salí con los dientes varios tonos más blancos. Altamente recomendado.",
    stars: 5
  }
];

export const FAQ_DATA: FaqItem[] = [
  {
    id: "faq-1",
    question: "¿Los tratamientos dentales duelen?",
    answer: "No. En Odontología Gabriel Miranda aplicamos anestesia computarizada y técnicas de mínima invasión que eliminan el dolor durante y después de los procedimientos. Nuestro principal compromiso es que vivas una experiencia odontológica serena y confortable.",
    category: "general"
  },
  {
    id: "faq-2",
    question: "¿Qué facilidades y formas de pago ofrecen?",
    answer: "Aceptamos efectivo, transferencias bancarias directas, tarjetas de débito y tarjetas de crédito con planes de financiamiento diferido a 3, 6, 9 y 12 meses sin intereses en tratamientos como Ortodoncia e Implantes.",
    category: "pagos"
  },
  {
    id: "faq-3",
    question: "¿Qué incluye la consulta inicial de valoración?",
    answer: "La consulta inicial incluye examen clínico integral, escaneo digital intraoral 3D de alta definición, diagnóstico fotográfico de tu sonrisa, plan de tratamiento personalizado con presupuesto detallado y asesoría médica sin compromiso.",
    category: "general"
  },
  {
    id: "faq-4",
    question: "¿Cómo sé si soy candidato para Ortodoncia Invisible o Carillas?",
    answer: "Durante la primera consulta digital realizamos un escaneo en 3D que proyecta la movilidad y el espacio de tus dientes. Si tus encías y raíces están saludables, prácticamente el 95% de los pacientes califican para alineadores o carillas estéticas.",
    category: "tratamientos"
  },
  {
    id: "faq-5",
    question: "¿Qué debo hacer en caso de una urgencia dental?",
    answer: "Si presentas dolor agudo, inflamación, pérdida o fractura de un diente, haz clic de inmediato en nuestro botón rojo de 'Urgencias 24/7' en la web o escríbenos a WhatsApp. Nuestro equipo médico te dará instrucciones de primeros auxilios y te asignará atención prioritaria en el consultorio.",
    category: "general"
  },
  {
    id: "faq-6",
    question: "¿Tienen parqueadero y acceso para personas con movilidad reducida?",
    answer: "Sí, el Edificio Médico Platinum cuenta con parqueadero privado subterráneo gratuito para nuestros pacientes, rampas de acceso y amplios ascensores camilleros para tu total comodidad.",
    category: "general"
  }
];

export const SOCIAL_NETWORKS: SocialNetwork[] = [
  {
    id: "whatsapp",
    name: "WhatsApp Oficial 24/7",
    handle: "+593 98 231 5408",
    iconType: "whatsapp",
    color: "#25D366",
    bgColor: "bg-emerald-50 border-emerald-200 text-[#25D366]",
    description: "Canal prioritario de respuesta médica directa. Agenda tu cita, consulta dudas de tratamientos o solicita atención de emergencia las 24 horas del día con respuesta en menos de 5 minutos.",
    actionText: "Chatear por WhatsApp",
    url: createWhatsAppLink("Hola Dr. Gabriel Miranda, me contacto desde su sitio web oficial para agendar una cita o realizar una consulta médica."),
    waMessage: "Hola Dr. Gabriel Miranda, me comunico desde la web para agendar una cita de evaluación.",
    image: "https://images.unsplash.com/photo-1588776814546-1ffcf47267a5?q=80&w=800&auto=format&fit=crop"
  },
  {
    id: "instagram",
    name: "Instagram Oficial",
    handle: "@odontologia_miranda",
    iconType: "instagram",
    color: "#E4405F",
    bgColor: "bg-pink-50 border-pink-200 text-[#E4405F]",
    description: "Sigue nuestros casos clínicos reales en video, testimonios de pacientes, recomendaciones de cuidado bucal y los últimos avances en odontología digital que aplicamos en el consultorio.",
    actionText: "Seguir en Instagram",
    url: "https://www.instagram.com/odontologia_miranda/",
    waMessage: "Hola Dr. Gabriel Miranda, vi su Instagram oficial @odontologia_miranda y quisiera agendar una consulta.",
    image: "https://images.unsplash.com/photo-1606811841689-23dfddce3e95?q=80&w=800&auto=format&fit=crop"
  },
  {
    id: "facebook",
    name: "Facebook Oficial",
    handle: "Odontología Gabriel Miranda",
    iconType: "facebook",
    color: "#1877F2",
    bgColor: "bg-blue-50 border-blue-200 text-[#1877F2]",
    description: "Comunidad de pacientes en constante crecimiento. Artículos sobre prevención dental, promociones de temporada, transmisiones en vivo y testimonios de pacientes satisfechos.",
    actionText: "Visitar Facebook",
    url: "https://facebook.com/odontologiagabrielmiranda",
    waMessage: "Hola Dr. Gabriel Miranda, vi su página de Facebook y deseo información para una cita.",
    image: "https://images.unsplash.com/photo-1629909613654-28e377c37b09?q=80&w=800&auto=format&fit=crop"
  }
];
