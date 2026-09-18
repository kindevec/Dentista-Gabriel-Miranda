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
    title: "Rehabilitación Oral & Prótesis",
    category: "Residencia Univ. de los Hemisferios",
    badge: "Prótesis & Coronas de Circonio",
    tagline: "Prótesis totales o parciales, coronas cerámicas y prótesis sobre implantes.",
    summary: "Reconstrucción anatómica y funcional completa de la cavidad oral. Devolvemos la capacidad de masticar con firmeza y sonreír con naturalidad mediante prótesis fijas o removibles de alta resistencia y coronas de circonio translúcido biocompatible.",
    image: "https://images.unsplash.com/photo-1588776814546-1ffcf47267a5?q=80&w=1000&auto=format&fit=crop",
    features: [
      "Prótesis fijas totales o parciales y coronas estéticas",
      "Coronas sobre implantes con ajuste oclusal perfecto",
      "Materiales de alta durabilidad y apariencia biológica",
      "Recuperación integral de la fuerza masticatoria"
    ],
    patientTarget: "Pacientes con ausencia de una o varias piezas dentales o desgaste oclusal severo.",
    estimatedDuration: "2 a 4 sesiones con provisionales estéticos inmediatos.",
    waMessage: `Hola ${DOCTOR_NAME}, deseo solicitar una valoración especializada para Rehabilitación Oral y Prótesis en Miranda Dental Studio.`
  },
  {
    id: "estetica-carillas",
    title: "Estética Dental & Carillas",
    category: "Diplomado 'Arte en Resinas' (Perú)",
    badge: "Carillas Directas & Indirectas",
    tagline: "Carillas cerámicas, resinas estratificadas y microabrasión para fluorosis.",
    summary: "Diseño de sonrisa personalizado basado en tus facciones. Corregimos manchas, fracturas, diastemas y esmalte con fluorosis mediante carillas directas de alta estética, carillas indirectas y microabrasión conservadora que respeta al máximo la estructura de tu diente.",
    image: "https://images.unsplash.com/photo-1606811841689-23dfddce3e95?q=80&w=1000&auto=format&fit=crop",
    features: [
      "Carillas directas en resina estratificada y carillas cerámicas",
      "Microabrasión especializada para fluorosis y manchas rebeldes",
      "Planificación previa de sonrisa adaptada a tu fisonomía",
      "Preservación máxima y respeto del esmalte dental natural"
    ],
    patientTarget: "Personas con dientes manchados, fluorosis, bordes desgastados o asimetrías de sonrisa.",
    estimatedDuration: "1 a 3 citas con prueba previa en boca.",
    waMessage: `Hola ${DOCTOR_NAME}, me gustaría agendar una valoración para Estética Dental, Carillas o Microabrasión.`
  },
  {
    id: "endodoncia-mecanizada",
    title: "Endodoncia Mecanizada",
    category: "Diplomado en CPO BRASIL",
    badge: "Alivio del Dolor en 1 Sesión",
    tagline: "Tratamiento de conductos rotatorio indoloro para salvar tu diente natural.",
    summary: "Tratamiento pulpar de alta precisión con tecnología rotatoria mecanizada bajo estándares internacionales de CPO Brasil. Eliminamos el dolor agudo y la infección de forma inmediata, logrando un sellado hermético en una sola sesión confortable.",
    image: "https://images.unsplash.com/photo-1629909615184-74f495363b67?q=80&w=1000&auto=format&fit=crop",
    features: [
      "Limas rotatorias de níquel-titanio termotratadas",
      "Localizador apical digital de máxima precisión",
      "Eliminación inmediata de la infección y el dolor",
      "Preservación de la raíz original evitando extracciones"
    ],
    patientTarget: "Dolor pulsátil intenso, sensibilidad persistente al frío/calor o caries profundas.",
    estimatedDuration: "1 sola sesión clínica de 45 a 60 minutos.",
    waMessage: `¡URGENCIA! Hola ${DOCTOR_NAME}, tengo un dolor dental intenso y solicito atención para Endodoncia Mecanizada.`
  },
  {
    id: "implantologia",
    title: "Implantología Dental",
    category: "Especialidad Implanto-Asistida",
    badge: "Titanio Biocompatible Seguro",
    tagline: "Reposición fija y definitiva de raíces perdidas con integración ósea de por vida.",
    summary: "Cirugía de colocación de implantes de titanio grado médico para restaurar dientes perdidos de manera fija y definitiva. Restaura la función masticatoria con la firmeza de un diente propio, impidiendo la pérdida de hueso y mejorando tu estética facial.",
    image: "https://images.unsplash.com/photo-1579684385127-1ef15d508118?q=80&w=1000&auto=format&fit=crop",
    features: [
      "Implantes de titanio biocompatible de alta gama",
      "Planificación digital para inserción precisa y segura",
      "Fijación sólida sin desgastar los dientes adyacentes",
      "Rehabilitación fija con coronas estéticas de circonio"
    ],
    patientTarget: "Pacientes con pérdida de una o múltiples piezas dentales o prótesis flojas.",
    estimatedDuration: "Fijación quirúrgica en 1 cita con protocolo de oseointegración.",
    waMessage: `Hola ${DOCTOR_NAME}, deseo solicitar información y una consulta para Implantes Dentales en Miranda Dental Studio.`
  },
  {
    id: "cirugia-terceros-molares",
    title: "Cirugía Oral (Muelas del Juicio)",
    category: "Cirugía Oral Menor",
    badge: "Extracción Atraumática & Segura",
    tagline: "Extracción quirúrgica de terceros molares con anestesia guiada y rápida recuperación.",
    summary: "Extracción especializada de muelas del juicio impactadas, retenidas o en mala posición. Procedimiento seguro, rápido y 100% indoloro que previene apiñamientos dentales, infecciones severas y daño a las piezas vecinas.",
    image: "https://images.unsplash.com/photo-1598256989800-fe5f95da9787?q=80&w=1000&auto=format&fit=crop",
    features: [
      "Extracción libre de dolor con técnica quirúrgica atraumática",
      "Prevención de infecciones pericoronarias y apiñamientos",
      "Suturas reabsorbibles y protocolo analgésico postoperatorio",
      "Recuperación confortable en pocos días"
    ],
    patientTarget: "Jóvenes y adultos con dolor, inflamación o muelas del juicio retenidas.",
    estimatedDuration: "30 a 45 minutos en consulta ambulatoria.",
    waMessage: `Hola ${DOCTOR_NAME}, necesito agendar una valoración para extracción de Terceros Molares (Muelas del Juicio).`
  },
  {
    id: "ortodoncia",
    title: "Ortodoncia Integral",
    category: "Alineación Dental & Oclusión",
    badge: "Convencional, Autoligado & Estéticos",
    tagline: "Alineación estética y corrección de mordida con brackets de baja fricción.",
    summary: "Corrección de apiñamientos, mordidas abiertas o cruzadas. Contamos con brackets convencionales, brackets de autoligado pasivo (que acortan los tiempos y reducen molestias) y brackets estéticos para una sonrisa perfectamente alineada.",
    image: "https://images.unsplash.com/photo-1570172619644-dfd03ed5d881?q=80&w=1000&auto=format&fit=crop",
    features: [
      "Brackets de autoligado pasivo de baja fricción",
      "Opciones de brackets estéticos cerámicos discretos",
      "Corrección de mordidas funcionales y estética dental",
      "Planes con financiamiento y crédito directo propio"
    ],
    patientTarget: "Niños, jóvenes y adultos con dientes desalineados o problemas de mordida.",
    estimatedDuration: "12 a 18 meses con controles mensuales programados.",
    waMessage: `Hola ${DOCTOR_NAME}, me gustaría agendar una valoración para Ortodoncia y conocer las opciones de brackets.`
  },
  {
    id: "armonizacion-facial",
    title: "Armonización Facial (Botox & Hialurónico)",
    category: "Congreso Río de Janeiro SMILE & HOF 2026",
    badge: "Bichectomía, Botox & Relleno Labial",
    tagline: "Perfilamiento facial, atenuación de líneas de expresión y volumen labial armónico.",
    summary: "Procedimientos médico-estéticos avanzados para realzar la belleza natural de tu rostro. Bichectomía para estilizar mejillas, toxina botulínica (Botox) para bruxismo y arrugas de expresión, y ácido hialurónico para hidratación y perfilado labial armónico.",
    image: "https://images.unsplash.com/photo-1512290900672-1f5586616262?q=80&w=1000&auto=format&fit=crop",
    features: [
      "Bichectomía ambulatoria para perfilar el tercio inferior del rostro",
      "Toxina botulínica (Botox) para bruxismo y líneas de expresión",
      "Ácido hialurónico reticulado para perfilado e hidratación labial",
      "Resultados naturales que armonizan tu sonrisa con tu rostro"
    ],
    patientTarget: "Pacientes con bruxismo, tensión muscular mandibular o que desean rejuvenecer y armonizar su rostro.",
    estimatedDuration: "30 a 45 minutos por sesión ambulatoria.",
    waMessage: `Hola ${DOCTOR_NAME}, deseo solicitar una consulta de valoración para Armonización Facial (Botox / Ácido Hialurónico / Bichectomía).`
  },
  {
    id: "periodoncia",
    title: "Periodoncia & Plástica Gingival",
    category: "Salud Periodontal & Estética Rosa",
    badge: "Gingivectomía & Salud de Encías",
    tagline: "Gingivectomía para sonrisa gingival, detartrajes profundos y frenectomía.",
    summary: "Tratamiento de la encía y tejidos que soportan tus dientes. Realizamos gingivectomía estética para armonizar el tamaño de tus dientes cuando se muestra demasiada encía, detartrajes / retartrajes con ultrasonido para detener el sangrado, y frenectomía.",
    image: "https://images.unsplash.com/photo-1629909613654-28e377c37b09?q=80&w=1000&auto=format&fit=crop",
    features: [
      "Gingivectomía y remodelado estético del contorno de encías",
      "Detartrajes y retartrajes ultrasónicos indoloros",
      "Frenectomía labial o lingual mínimamente invasiva",
      "Eliminación del sangrado, inflamación y mal aliento de raíz"
    ],
    patientTarget: "Pacientes con sonrisa gingival (dientes pequeños), encías sangrantes o frenillos tensos.",
    estimatedDuration: "1 a 2 citas clínicas con rápida cicatrización.",
    waMessage: `Hola ${DOCTOR_NAME}, deseo agendar una valoración para Periodoncia, Gingivectomía o tratamiento de encías.`
  }
];
