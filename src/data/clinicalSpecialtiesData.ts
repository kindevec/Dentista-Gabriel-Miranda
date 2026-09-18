import { DOCTOR_NAME } from './clinicData';

export interface DetailedClinicalSpecialty {
  id: string;
  title: string;
  category: string;
  badge: string;
  tagline: string;
  summary: string;
  image: string;
  features: string[];
  patientTarget: string;
  estimatedDuration: string;
  waMessage: string;
}

export const CLINICAL_SPECIALTIES: DetailedClinicalSpecialty[] = [
  {
    id: "rehabilitacion-oral",
    title: "Rehabilitación Oral",
    category: "Residencia Univ. Hemisferios",
    badge: "Prótesis & Coronas",
    tagline: "Prótesis totales o parciales, coronas y prótesis sobre implantes.",
    summary: "Reconstrucción anatómica y masticatoria integral con prótesis fijas, removibles y coronas de alta resistencia.",
    image: "https://images.unsplash.com/photo-1588776814546-1ffcf47267a5?q=80&w=1000&auto=format&fit=crop",
    features: [
      "Prótesis totales, parciales y coronas estéticas",
      "Coronas sobre implantes de ajuste exacto",
      "Recuperación de la fuerza masticatoria"
    ],
    patientTarget: "Pérdida o desgaste de piezas dentales.",
    estimatedDuration: "2 a 4 sesiones con provisionales inmediatos.",
    waMessage: `Hola ${DOCTOR_NAME}, deseo una valoración para Rehabilitación Oral en Miranda Dental Studio.`
  },
  {
    id: "estetica-dental",
    title: "Estética Dental",
    category: "Diplomado en Perú",
    badge: "Carillas & Microabrasión",
    tagline: "Carillas directas o indirectas y microabrasión para fluorosis.",
    summary: "Diseño de sonrisa armónico con carillas de resina o cerámica y microabrasión para remover manchas de fluorosis.",
    image: "https://images.unsplash.com/photo-1606811841689-23dfddce3e95?q=80&w=1000&auto=format&fit=crop",
    features: [
      "Carillas directas e indirectas personalizadas",
      "Microabrasión conservadora para fluorosis",
      "Máximo respeto al esmalte natural"
    ],
    patientTarget: "Dientes manchados, fluorosis o asimetrías de sonrisa.",
    estimatedDuration: "1 a 3 citas clínicas.",
    waMessage: `Hola ${DOCTOR_NAME}, solicito una cita para Estética Dental y Carillas.`
  },
  {
    id: "endodoncia",
    title: "Endodoncia",
    category: "Diplomado CPO Brasil",
    badge: "Tratamiento de Conductos",
    tagline: "Tratamiento de conductos mecanizado y rotatorio en 1 sola sesión.",
    summary: "Alivio del dolor pulpar y erradicación de infecciones mediante limas rotatorias de alta precisión para salvar tu diente natural.",
    image: "https://images.unsplash.com/photo-1629909615184-74f495363b67?q=80&w=1000&auto=format&fit=crop",
    features: [
      "Tecnología rotatoria mecanizada CPO Brasil",
      "Localizador apical de alta exactitud",
      "Alivio inmediato del dolor en 1 cita"
    ],
    patientTarget: "Dolor dental agudo, caries profundas o infección pulpar.",
    estimatedDuration: "1 sesión de 45 a 60 minutos.",
    waMessage: `¡Urgencia! Hola ${DOCTOR_NAME}, presento dolor y requiero atención para Endodoncia.`
  },
  {
    id: "implantologia",
    title: "Implantología",
    category: "Especialidad Implanto-Asistida",
    badge: "Titanio Oseointegrado",
    tagline: "Reposición fija y definitiva de raíces dentales perdidas.",
    summary: "Colocación de implantes de titanio grado médico que devuelven la firmeza y función natural de tus dientes sin desgastar piezas vecinas.",
    image: "https://images.unsplash.com/photo-1579684385127-1ef15d508118?q=80&w=1000&auto=format&fit=crop",
    features: [
      "Implantes de titanio biocompatible de alta gama",
      "Fijación sólida y duradera de por vida",
      "Rehabilitación fija con coronas estéticas"
    ],
    patientTarget: "Ausencia de una o varias piezas dentales.",
    estimatedDuration: "Cirugía en 1 cita con protocolo de oseointegración.",
    waMessage: `Hola ${DOCTOR_NAME}, deseo solicitar información para Implantes Dentales.`
  },
  {
    id: "cirugia-oral",
    title: "Cirugía Oral",
    category: "Cirugía Oral Menor",
    badge: "Terceros Molares",
    tagline: "Extracción quirúrgica de terceros molares (muelas del juicio).",
    summary: "Extracción segura, rápida y sin dolor de muelas del juicio impactadas o retenidas, previniendo apiñamientos e infecciones.",
    image: "https://images.unsplash.com/photo-1598256989800-fe5f95da9787?q=80&w=1000&auto=format&fit=crop",
    features: [
      "Técnica quirúrgica atraumática sin dolor",
      "Prevención de apiñamientos e infecciones",
      "Recuperación cómoda en pocos días"
    ],
    patientTarget: "Muelas del juicio retenidas, inclinadas o con dolor.",
    estimatedDuration: "30 a 45 minutos en consulta ambulatoria.",
    waMessage: `Hola ${DOCTOR_NAME}, solicito valoración para extracción de Terceros Molares.`
  },
  {
    id: "ortodoncia",
    title: "Ortodoncia",
    category: "Alineación & Oclusión",
    badge: "Brackets Autoligado & Estéticos",
    tagline: "Brackets convencionales, autoligado y estéticos para tu mordida.",
    summary: "Corrección de apiñamientos y problemas de oclusión mediante aparatología de baja fricción y brackets estéticos.",
    image: "https://images.unsplash.com/photo-1570172619644-dfd03ed5d881?q=80&w=1000&auto=format&fit=crop",
    features: [
      "Brackets de autoligado pasivo y convencionales",
      "Opciones estéticas de alta discreción",
      "Facilidades con crédito directo propio"
    ],
    patientTarget: "Dientes apiñados, espacios o mordidas inadecuadas.",
    estimatedDuration: "12 a 18 meses con controles mensuales.",
    waMessage: `Hola ${DOCTOR_NAME}, deseo una valoración para Ortodoncia.`
  },
  {
    id: "armonizacion-facial",
    title: "Armonización Facial",
    category: "Certificación SMILE & HOF 2026",
    badge: "Botox, Hialurónico & Bichectomía",
    tagline: "Bichectomía, Ácido Hialurónico y Botox para equilibrar tu rostro.",
    summary: "Procedimientos médico-estéticos para estilizar mejillas, aliviar bruxismo y perfilar labios de manera natural.",
    image: "https://images.unsplash.com/photo-1512290900672-1f5586616262?q=80&w=1000&auto=format&fit=crop",
    features: [
      "Bichectomía ambulatoria para perfilar mejillas",
      "Botox para bruxismo y líneas de expresión",
      "Ácido hialurónico para perfilado e hidratación labial"
    ],
    patientTarget: "Pacientes con bruxismo o que buscan armonía facial.",
    estimatedDuration: "30 a 45 minutos por sesión.",
    waMessage: `Hola ${DOCTOR_NAME}, deseo consultar sobre Armonización Facial (Botox / Hialurónico / Bichectomía).`
  },
  {
    id: "periodoncia",
    title: "Periodoncia",
    category: "Salud Periodontal",
    badge: "Gingivectomía & Salud Gingival",
    tagline: "Gingivectomía, tartrectomía (retartrajes) y frenectomía.",
    summary: "Tratamiento de encías para corregir sonrisa gingival mediante gingivectomía, detener el sangrado con tartrectomías y frenectomías.",
    image: "https://images.unsplash.com/photo-1629909613654-28e377c37b09?q=80&w=1000&auto=format&fit=crop",
    features: [
      "Gingivectomía para armonizar sonrisa gingival",
      "Detartrajes y retartrajes ultrasónicos",
      "Frenectomía conservadora de rápida sanación"
    ],
    patientTarget: "Encías inflamadas, sangrantes o sonrisa gingival.",
    estimatedDuration: "1 a 2 citas de rápida recuperación.",
    waMessage: `Hola ${DOCTOR_NAME}, solicito valoración para Periodoncia y encías.`
  }
];
