import { DOCTOR_NAME } from './clinicData';

export interface ClinicalWorkflowStep {
  stepNumber: string;
  phase: string;
  description: string;
}

export interface SpecialtyTechnology {
  name: string;
  desc: string;
}

export interface DetailedClinicalSpecialty {
  id: string;
  title: string;
  category: string;
  badge: string;
  tagline: string;
  summary: string;
  image: string;
  technologies: SpecialtyTechnology[];
  workflow: ClinicalWorkflowStep[];
  clinicalBenefits: string[];
  patientTarget: string;
  estimatedDuration: string;
  waMessage: string;
}

export const CLINICAL_SPECIALTIES: DetailedClinicalSpecialty[] = [
  {
    id: "rehabilitacion-implantes",
    title: "Rehabilitación Oral e Implantología Guiada",
    category: "Implantología & Cirugía Digital",
    badge: "Biocompatibilidad & Carga Inmediata",
    tagline: "Restauración anatómica fija definitiva y recuperación masticatoria guiada por TAC 3D.",
    summary: "Disciplina reconstructiva de alta complejidad enfocada en reemplazar piezas perdidas o deterioradas mediante implantes de titanio grado médico y prótesis fijas de circonio translúcido. Planificamos cada milímetro con tomografía 3D (CBCT) y guías computarizadas sin incisiones traumáticas ni dolor postoperatorio.",
    image: "https://images.unsplash.com/photo-1579684385127-1ef15d508118?q=80&w=1000&auto=format&fit=crop",
    technologies: [
      { name: "Tomografía Computarizada CBCT 3D", desc: "Mapeo volumétrico exacto de densidad ósea y nervios." },
      { name: "Guías Quirúrgicas CAD/CAM", desc: "Inserción del implante con precisión milimétrica guiada." },
      { name: "Circonio Multicapa Monolítico", desc: "Máxima resistencia mecánica y estética translúcida natural." }
    ],
    workflow: [
      { stepNumber: "01", phase: "Diagnóstico Tomográfico 3D", description: "Evaluación ósea digital y simulación virtual de colocación." },
      { stepNumber: "02", phase: "Fabricación de Guía Quirúrgica", description: "Impresión 3D de la guía para un procedimiento sin colgajo." },
      { stepNumber: "03", phase: "Microcirugía e Implante", description: "Fijación indolora con anestesia guiada y carga provisional." },
      { stepNumber: "04", phase: "Prótesis Definitiva de Circonio", description: "Ajuste oclusal biomimético y control de osteointegración." }
    ],
    clinicalBenefits: [
      "Integración ósea definitiva para toda la vida sin desplazamientos",
      "Recuperación del 100% de la fuerza masticatoria y dicción",
      "Preservación del volumen óseo facial previniendo el envejecimiento"
    ],
    patientTarget: "Pacientes con pérdida de una o múltiples piezas, fracturas irreparables o prótesis removibles inestables.",
    estimatedDuration: "1 a 3 citas clínicas con protocolo de carga provisional inmediata.",
    waMessage: `Hola ${DOCTOR_NAME}, deseo solicitar una valoración especializada para Rehabilitación Oral e Implantología Guiada por TAC.`
  },
  {
    id: "ortodoncia-invisible",
    title: "Ortodoncia Digital & Alineadores Invisibles",
    category: "Ortopedia Dentofacial & Alineación 3D",
    badge: "100% Removible & Discreto",
    tagline: "Corrección milimétrica de mordidas y apiñamientos sin brackets metálicos.",
    summary: "Corrección integral de maloclusiones, apiñamientos y anomalías de mordida a través de alineadores termoplásticos transparentes de última generación. Mediante el escaneo intraoral iTero proyectamos el movimiento biológico de cada diente en tiempo real, reduciendo hasta un 35% el tiempo de tratamiento frente a brackets tradicionales.",
    image: "https://images.unsplash.com/photo-1598256989800-fe5f95da9787?q=80&w=1000&auto=format&fit=crop",
    technologies: [
      { name: "Escáner Óptico Intraoral iTero", desc: "Captura 6,000 imágenes por segundo sin pastas desagradables." },
      { name: "Software ClinCheck 3D", desc: "Simulación interactiva del resultado final antes de iniciar." },
      { name: "Polímero SmartTrack Certificado", desc: "Fuerza biológica suave, continua y libre de dolor." }
    ],
    workflow: [
      { stepNumber: "01", phase: "Escaneo Digital Intraoral 3D", description: "Mapeo 3D de alta precisión de tus arcadas dentales en 3 min." },
      { stepNumber: "02", phase: "Simulación Virtual del Plan", description: "Aprobación conjunta de los movimientos y duración estimada." },
      { stepNumber: "03", phase: "Entrega de Sets de Alineadores", description: "Instrucciones de cambio secuencial quincenal en casa." },
      { stepNumber: "04", phase: "Monitoreo y Retención Final", description: "Seguimiento periódico y retenedores nocturnos de estabilidad." }
    ],
    clinicalBenefits: [
      "Completamente transparentes: nadie notará que los llevas puestos",
      "Removibles para comer sin restricciones y cepillarte con facilidad",
      "Cero llagas o rozaduras metálicas en mejillas y encías"
    ],
    patientTarget: "Adultos y jóvenes con apiñamientos, diastemas o mordidas complejas que buscan confort y estética absoluta.",
    estimatedDuration: "6 a 14 meses (según complejidad del caso y uso diario recomendado).",
    waMessage: `Hola ${DOCTOR_NAME}, me interesa conocer el plan de tratamiento y valoración para Ortodoncia Invisible con Alineadores.`
  },
  {
    id: "diseno-sonrisa-biomimetico",
    title: "Diseño de Sonrisa Biomimético & Carillas",
    category: "Estética Dental & Morfología Facial",
    badge: "Cerámica E-max Ultra Fina (0.3mm)",
    tagline: "Perfección armónica adaptada a tus rasgos faciales preservando el esmalte dental.",
    summary: "Armonización estética de la sonrisa basada en las proporciones áureas faciales del paciente. Utilizamos láminas cerámicas de disilicato de litio E-max ultrafinas (0.3 mm) que se adhieren de forma biomimética al esmalte dental, corrigiendo defectos de forma, color refractario, roturas o desgastes severos con una naturalidad absoluta.",
    image: "https://images.unsplash.com/photo-1606811841689-23dfddce3e95?q=80&w=1000&auto=format&fit=crop",
    technologies: [
      { name: "Digital Smile Design (DSD)", desc: "Estudio morfopsicológico de proporciones labio-faciales." },
      { name: "Prueba Estética Mock-up en Boca", desc: "Permite ver y sentir la nueva sonrisa antes de cualquier tallado." },
      { name: "Cerámica Prensada E-max", desc: "Comportamiento lumínico y translucidez idéntica al diente natural." }
    ],
    workflow: [
      { stepNumber: "01", phase: "Sesión Fotográfica & Análisis DSD", description: "Registro digital de alta resolución y trazado de proporciones." },
      { stepNumber: "02", phase: "Prueba Mock-up en Vivo", description: "Colocación de réplica temporal sobre tus dientes para tu visto bueno." },
      { stepNumber: "03", phase: "Micro-preparación Mínimamente Invasiva", description: "Desgaste mínimo de 0.3 mm conservando el esmalte sano." },
      { stepNumber: "04", phase: "Cementación Adhesiva Definitiva", description: "Fijación química microscópica bajo polimerización láser." }
    ],
    clinicalBenefits: [
      "Inalterabilidad total del tono: resistente al café, té y tabaco",
      "Respeto máximo a la biología dental con técnicas biomiméticas",
      "Garantía visual previa: ves el resultado antes de iniciar el trabajo"
    ],
    patientTarget: "Personas con dientes pigmentados, desgastados, con fracturas, asimetrías o espacios interdentales.",
    estimatedDuration: "2 a 3 citas clínicas con prueba estética en vivo.",
    waMessage: `Hola ${DOCTOR_NAME}, deseo información y solicitar una cita de diagnóstico para Diseño de Sonrisa y Carillas E-max.`
  },
  {
    id: "endodoncia-microscopica",
    title: "Endodoncia Microscópica & Conservación",
    category: "Microcirugía Endodóntica & Terapia Pulpar",
    badge: "Alivio Inmediato del Dolor en 1 Cita",
    tagline: "Resolución del dolor agudo e infección pulpar preservando tu pieza biológica.",
    summary: "Tratamiento de conductos radiculares de alta precisión enfocado en salvar el diente natural ante infecciones pulpares profundas o traumatismos severos. Empleamos magnificación óptica microscópica, instrumentación rotatoria termotratada y obturación tridimensional que eliminan el dolor y la infección en una sola consulta de 60 minutos.",
    image: "https://images.unsplash.com/photo-1629909615184-74f495363b67?q=80&w=1000&auto=format&fit=crop",
    technologies: [
      { name: "Microscopio Clínico Operatorio", desc: "Magnificación óptica hasta 20x del sistema de conductos internos." },
      { name: "Localizador Apical Digital", desc: "Determinación electrónica exacta de la longitud de la raíz." },
      { name: "Limas de Níquel-Titanio Rotatorias", desc: "Desinfección anatómica tridimensional profunda y flexible." }
    ],
    workflow: [
      { stepNumber: "01", phase: "Diagnóstico Digital Inmediato", description: "Radiografía digital y test de sensibilidad pulpar localizada." },
      { stepNumber: "02", phase: "Anestesia Guiada Localizada", description: "Bloqueo anestésico rápido y 100% indoloro." },
      { stepNumber: "03", phase: "Desinfección con Microscopio", description: "Remoción minuciosa del nervio infectado con irrigación ultrasónica." },
      { stepNumber: "04", phase: "Sellado Termoplástico 3D", description: "Hermetización del conducto con gutapercha bioactiva biocompatible." }
    ],
    clinicalBenefits: [
      "Eliminación inmediata y definitiva del dolor dental agudo en 1 hora",
      "Mantiene tu propia raíz biológica en el hueso evitando extracciones",
      "Tasa de éxito clínico superior al 98% con magnificación óptica"
    ],
    patientTarget: "Dolor pulsátil intenso, sensibilidad persistente al calor o frío, caries profundas o abscesos.",
    estimatedDuration: "1 sola sesión clínica (45 a 60 minutos).",
    waMessage: `¡URGENCIA! Hola ${DOCTOR_NAME}, tengo un dolor dental intenso y requiero atención prioritaria de Endodoncia Microscópica.`
  },
  {
    id: "periodoncia-regenerativa",
    title: "Periodoncia Avanzada & Cirugía Plástica Gingival",
    category: "Salud Periodontal & Regeneración de Soporte",
    badge: "Control Bacteriano & Salud Ósea",
    tagline: "Recuperación biológica de encías, detención de movilidad y regeneración de soporte óseo.",
    summary: "Especialidad médica orientada al diagnóstico, tratamiento y regeneración de los tejidos de soporte del diente (encías, ligamento periodontal y hueso alveolar). Tratamos desde gingivitis leves hasta periodontitis severas y recesiones gingivales mediante terapias piezoeléctricas avanzadas y microinjertos conectivos.",
    image: "https://images.unsplash.com/photo-1588776814546-1ffcf47267a5?q=80&w=1000&auto=format&fit=crop",
    technologies: [
      { name: "Ultrasonido Piezoeléctrico Subgingival", desc: "Descontaminación indolora sin dañar el cemento radicular." },
      { name: "Microcirugía Mucogingival Plástica", desc: "Cubrimiento de raíces expuestas mediante microinjertos." },
      { name: "Terapia Antimicrobiana Guiada", desc: "Eliminación selectiva de biofilms patógenos profundos." }
    ],
    workflow: [
      { stepNumber: "01", phase: "Periodontograma Digital", description: "Cartografía milimétrica de bolsas periodontales y nivel óseo." },
      { stepNumber: "02", phase: "Descontaminación Ultrasónica", description: "Raspado y alisado radicular profundo por cuadrantes." },
      { stepNumber: "03", phase: "Terapia Regenerativa / Injerto", description: "Recuperación de encía retraída en zonas estéticas expuestas." },
      { stepNumber: "04", phase: "Plan de Mantenimiento Preventivo", description: "Controles periódicos semestrales para evitar recidivas." }
    ],
    clinicalBenefits: [
      "Frena el sangrado, la inflamación y el mal aliento de raíz",
      "Detiene la pérdida ósea y recupera la firmeza de dientes móviles",
      "Restaura la línea gingival armónica protegiendo las raíces dentales"
    ],
    patientTarget: "Pacientes con encías sangrantes al cepillarse, raíces destapadas, sensibilidad o movilidad dental.",
    estimatedDuration: "2 a 4 sesiones de tratamiento con seguimiento semestral.",
    waMessage: `Hola ${DOCTOR_NAME}, requiero agendar una cita de evaluación periodontal y cuidado de encías.`
  },
  {
    id: "odontopediatria-familiar",
    title: "Odontopediatría & Ortodoncia Interceptiva",
    category: "Cuidado Pediátrico & Ortopedia Funcional",
    badge: "Atención Lúdica Libre de Miedos",
    tagline: "Cuidado preventivo cariñoso, adaptación positiva y guía del crecimiento maxilar.",
    summary: "Atención odontológica integral y preventiva diseñada especialmente para bebés, niños y preadolescentes. Nuestro enfoque psicológico positivo convierte la visita al dentista en una experiencia amena y relajante, tratando caries tempranas y corrigiendo a tiempo anomalías de crecimiento en los maxilares antes de que se vuelvan complejas.",
    image: "https://images.unsplash.com/photo-1629909613654-28e377c37b09?q=80&w=1000&auto=format&fit=crop",
    technologies: [
      { name: "Cámara Intraoral Infantil Interactiva", desc: "Los niños visualizan sus dientes y participan en la consulta." },
      { name: "Sellantes Ionoméricos Bioactivos", desc: "Protección antimicrobiana y mineralización continua contra caries." },
      { name: "Aparatos Ortopédicos Funcionales", desc: "Corrección suave de malos hábitos y guía del desarrollo óseo." }
    ],
    workflow: [
      { stepNumber: "01", phase: "Adaptación y Juego Clínico", description: "Técnica 'Decir - Mostrar - Hacer' para ganar confianza total." },
      { stepNumber: "02", phase: "Exploración Óptica Digital", description: "Detección temprana de lesiones incipientes sin instrumental invasivo." },
      { stepNumber: "03", phase: "Profilaxis y Sellantes Preventivos", description: "Limpieza ultrasónica suave y protección de fosas molares." },
      { stepNumber: "04", phase: "Evaluación del Recambio Dentario", description: "Planificación de espacio para la dentición permanente." }
    ],
    clinicalBenefits: [
      "Genera hábitos de salud bucal positivos y una vida sin fobias dentales",
      "Evita tratamientos complejos o extracciones en la edad adulta",
      "Ambiente adaptado con refuerzo positivo y premios motivacionales"
    ],
    patientTarget: "Bebés desde el primer año, niños y adolescentes en etapa de crecimiento y cambio de dientes.",
    estimatedDuration: "Consultas dinámicas y amenas de 30 a 45 minutos.",
    waMessage: `Hola ${DOCTOR_NAME}, me gustaría agendar una cita odontopediátrica para mi hijo/a con su equipo.`
  }
];
