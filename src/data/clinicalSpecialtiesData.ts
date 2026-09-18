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
    tagline: "Prótesis totales o parciales, coronas, coronas sobre implantes.",
    summary: "Reconstrucción anatómica y masticatoria integral con prótesis totales o parciales, coronas de alta resistencia y coronas sobre implantes.",
    image: "https://images.unsplash.com/photo-1588776814546-1ffcf47267a5?q=80&w=1000&auto=format&fit=crop",
    features: [
      "Prótesis totales o parciales",
      "Coronas estéticas de alta resistencia",
      "Coronas sobre implantes"
    ],
    patientTarget: "Pérdida de piezas dentales, desgaste severo o fracturas.",
    estimatedDuration: "2 a 4 sesiones con provisionales inmediatos.",
    waMessage: `Hola ${DOCTOR_NAME}, deseo una valoración para Rehabilitación Oral (Prótesis / Coronas / Implantes).`
  },
  {
    id: "estetica-dental",
    title: "Estética Dental",
    category: "Diplomado en Perú",
    badge: "Carillas & Microabrasión",
    tagline: "Carillas directas o indirectas, Microabrasión (Para pacientes con fluorosis).",
    summary: "Diseño de sonrisa de autor: carillas directas o indirectas para perfeccionar forma y color, y microabrasión especializada para pacientes con fluorosis.",
    image: "https://images.unsplash.com/photo-1606811841689-23dfddce3e95?q=80&w=1000&auto=format&fit=crop",
    features: [
      "Carillas directas o indirectas",
      "Microabrasión (Para pacientes con fluorosis)",
      "Máximo respeto y preservación del esmalte natural"
    ],
    patientTarget: "Dientes manchados, fluorosis, diastemas o asimetrías de sonrisa.",
    estimatedDuration: "1 a 3 citas clínicas.",
    waMessage: `Hola ${DOCTOR_NAME}, solicito una cita para Estética Dental (Carillas / Microabrasión).`
  },
  {
    id: "endodoncia",
    title: "Endodoncia o Tratamiento de Conductos",
    category: "Diplomado CPO Brasil",
    badge: "Tratamiento de Conductos",
    tagline: "Endodoncia o tratamiento de conductos mecanizado y rotatorio.",
    summary: "Alivio definitivo del dolor pulpar y erradicación de infecciones mediante limas rotatorias de alta precisión para salvar tu diente natural.",
    image: "https://images.unsplash.com/photo-1629909615184-74f495363b67?q=80&w=1000&auto=format&fit=crop",
    features: [
      "Tratamiento de conductos mecanizado y rotatorio",
      "Localizador apical de alta precisión (CPO Brasil)",
      "Alivio del dolor y preservación del diente natural"
    ],
    patientTarget: "Dolor agudo, caries profundas o infección en el nervio dental.",
    estimatedDuration: "1 sesión de 45 a 60 minutos.",
    waMessage: `¡Urgencia! Hola ${DOCTOR_NAME}, presento dolor y requiero Endodoncia / Tratamiento de conductos.`
  },
  {
    id: "implantologia",
    title: "Implantología",
    category: "Especialidad Implanto-Asistida",
    badge: "Titanio Oseointegrado",
    tagline: "Implantes dentales de titanio para reponer piezas fijas y definitivas.",
    summary: "Colocación de implantes dentales de titanio biocompatible que devuelven la firmeza, estabilidad y función masticatoria natural de por vida.",
    image: "https://images.unsplash.com/photo-1579684385127-1ef15d508118?q=80&w=1000&auto=format&fit=crop",
    features: [
      "Implantes dentales de titanio oseointegrado",
      "Coronas sobre implantes con ajuste exacto",
      "Fijación sólida y duradera sin desgastar dientes sanos"
    ],
    patientTarget: "Pérdida de una o múltiples piezas dentales.",
    estimatedDuration: "Cirugía ambulatoria en 1 cita y protocolo de oseointegración.",
    waMessage: `Hola ${DOCTOR_NAME}, deseo solicitar información para Implantología Dental.`
  },
  {
    id: "cirugia-oral",
    title: "Cirugía (Terceros Molares)",
    category: "Cirugía Oral Menor",
    badge: "Terceros Molares",
    tagline: "Extracción quirúrgica de terceros molares (muelas del juicio).",
    summary: "Extracción segura, rápida y sin dolor de terceros molares (muelas del juicio) impactadas o retenidas, previniendo apiñamientos e infecciones.",
    image: "https://images.unsplash.com/photo-1598256989800-fe5f95da9787?q=80&w=1000&auto=format&fit=crop",
    features: [
      "Extracción de terceros molares (muelas del juicio)",
      "Técnica quirúrgica atraumática sin dolor",
      "Recuperación cómoda en pocos días"
    ],
    patientTarget: "Muelas del juicio retenidas, impactadas, inclinadas o con dolor.",
    estimatedDuration: "30 a 45 minutos en consulta ambulatoria.",
    waMessage: `Hola ${DOCTOR_NAME}, solicito valoración para Cirugía de Terceros Molares.`
  },
  {
    id: "ortodoncia",
    title: "Ortodoncia",
    category: "Alineación & Oclusión",
    badge: "Brackets Autoligado & Estéticos",
    tagline: "Brackets convencionales, autoligado, estéticos.",
    summary: "Alineación dental integral y corrección de la mordida mediante brackets convencionales, sistemas de autoligado pasivo y brackets estéticos de alta discreción.",
    image: "https://images.unsplash.com/photo-1570172619644-dfd03ed5d881?q=80&w=1000&auto=format&fit=crop",
    features: [
      "Brackets convencionales",
      "Brackets de autoligado",
      "Brackets estéticos",
      "Financiamiento con crédito directo propio"
    ],
    patientTarget: "Dientes apiñados, espacios o mordidas inadecuadas.",
    estimatedDuration: "Tratamiento personalizado con revisiones mensuales.",
    waMessage: `Hola ${DOCTOR_NAME}, deseo una valoración para Ortodoncia (Brackets convencionales / autoligado / estéticos).`
  },
  {
    id: "armonizacion-facial",
    title: "Armonización Facial",
    category: "Certificación SMILE & HOF 2026",
    badge: "Botox, Hialurónico & Bichectomía",
    tagline: "Bichectomía, Ácido Hialurónico, Botox.",
    summary: "Procedimientos médico-estéticos faciales para estilizar mejillas (bichectomía), atenuar bruxismo y líneas de expresión (Botox) y perfilar labios (ácido hialurónico).",
    image: "https://images.unsplash.com/photo-1512290900672-1f5586616262?q=80&w=1000&auto=format&fit=crop",
    features: [
      "Bichectomía (definición de mejillas)",
      "Ácido Hialurónico (perfilado e hidratación labial)",
      "Botox (alivio de bruxismo y arrugas de expresión)"
    ],
    patientTarget: "Pacientes con bruxismo o que buscan armonizar y perfilar su rostro.",
    estimatedDuration: "30 a 45 minutos por sesión.",
    waMessage: `Hola ${DOCTOR_NAME}, deseo consultar sobre Armonización Facial (Bichectomía / Ác. Hialurónico / Botox).`
  },
  {
    id: "periodoncia",
    title: "Periodoncia",
    category: "Salud Periodontal",
    badge: "Gingivectomía & Salud Gingival",
    tagline: "Gingivectomía, retartrajes, frenectomía.",
    summary: "Cuidado clínico de encías y tejidos de soporte: gingivectomía para corregir la sonrisa gingival, retartrajes (detartraje y profilaxis profunda de sarro) y frenectomías funcionales.",
    image: "https://images.unsplash.com/photo-1629909615184-74f495363b67?q=80&w=1000&auto=format&fit=crop",
    features: [
      "Gingivectomía (diseño y nivelación de encías)",
      "Retartrajes (eliminación profunda de sarro y cálculo)",
      "Frenectomía conservadora de rápida cicatrización"
    ],
    patientTarget: "Encías inflamadas, sangrantes, sarro acumulado o sonrisa gingival.",
    estimatedDuration: "1 a 2 citas de rápida recuperación.",
    waMessage: `Hola ${DOCTOR_NAME}, solicito valoración para Periodoncia (Gingivectomía / Retartrajes / Frenectomía).`
  }
];
