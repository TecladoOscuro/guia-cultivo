// Definiciones de fases/pestañas para todas las guías

const phases = [
  { id: "compra", emoji: "🛒", title: "Compra", subtitle: "Lista completa" },
  { id: "semillas_int", emoji: "🌱", title: "Semillas", subtitle: "Qué elegir" },
  { id: "antes", emoji: "📦", title: "Setup", subtitle: "Montaje inicial" },
  { id: "goteo", emoji: "💧", title: "Riego Auto", subtitle: "Setup goteo" },
  { id: "germinacion", emoji: "🥚", title: "Germinación", subtitle: "Días 1–7" },
  { id: "vegetativa", emoji: "🌿", title: "Vegetativa", subtitle: "Días 7–35" },
  { id: "poda", emoji: "✂️", title: "Poda & LST", subtitle: "Opcional" },
  { id: "floracion", emoji: "🌸", title: "Floración", subtitle: "Días 35–80" },
  { id: "cosecha", emoji: "🪴", title: "Cosecha", subtitle: "Día ~80" },
  { id: "plagas_int", emoji: "🐛", title: "Plagas", subtitle: "Interior" },
];

const extPhases = [
  { id: "compra_ext", emoji: "🛒", title: "Compra", subtitle: "Exterior lista" },
  { id: "ubicacion", emoji: "📍", title: "Ubicación", subtitle: "Seguridad" },
  { id: "germinacion_ext", emoji: "🥚", title: "Germinación", subtitle: "Primavera" },
  { id: "semillas_ext", emoji: "🌱", title: "Semillas", subtitle: "Fotoperiodo" },
  { id: "fases_ext", emoji: "📅", title: "Calendario", subtitle: "Mar-Oct" },
  { id: "riego_ext", emoji: "💧", title: "Riego", subtitle: "Frecuencia" },
  { id: "plagas", emoji: "🐛", title: "Plagas", subtitle: "Exterior" },
  { id: "cosecha_ext", emoji: "🪴", title: "Cosecha", subtitle: "Octubre" },
];

const generalPhases = [
  { id: "mis_semillas", emoji: "🗂️", title: "Mis Semillas", subtitle: "Perfil" },
  { id: "poda_gen", emoji: "✂️", title: "Poda General", subtitle: "Referencia" },
  { id: "cosecha_gen", emoji: "🪴", title: "Cosecha General", subtitle: "Referencia" },
  { id: "conservacion", emoji: "🏺", title: "Conservación", subtitle: "Almacenaje" },
  { id: "diagnostico", emoji: "🔬", title: "Diagnóstico", subtitle: "Deficiencias" },
  { id: "extracciones", emoji: "🧄", title: "Extracciones", subtitle: "Hash, mantequilla" },
  { id: "faq", emoji: "❓", title: "FAQ", subtitle: "Preguntas" },
  { id: "conceptos", emoji: "📖", title: "Glosario", subtitle: "Términos" },
];

const mushroomKitPhases = [
  { id: "compra_kit", emoji: "🛒", title: "Compra", subtitle: "Kit completo" },
  { id: "setup_kit", emoji: "📦", title: "Preparación", subtitle: "Montar SGFC" },
  { id: "incubacion_kit", emoji: "🔮", title: "Incubación", subtitle: "Colonización" },
  { id: "fructificacion_kit", emoji: "🍄", title: "Fructificación", subtitle: "Crecimiento" },
  { id: "cosecha_kit", emoji: "✂️", title: "Cosecha", subtitle: "Giro-tirón" },
  { id: "secado_kit", emoji: "🌬️", title: "Secado", subtitle: "Cracker dry" },
];

const mushroomManualPhases = [
  { id: "compra_manual", emoji: "🛒", title: "Compra", subtitle: "Desde cero" },
  { id: "esterilizar", emoji: "🧫", title: "Esterilizar", subtitle: "Olla a presión" },
  { id: "inoculacion", emoji: "💉", title: "Inoculación", subtitle: "SAB aséptico" },
  { id: "incubacion_manual", emoji: "🔮", title: "Incubación", subtitle: "Colonización" },
  { id: "fructificacion_manual", emoji: "🍄", title: "Fructificación", subtitle: "Monotub" },
  { id: "cosecha_manual", emoji: "✂️", title: "Cosecha", subtitle: "Múltiples flush" },
  { id: "secado_manual", emoji: "🌬️", title: "Secado", subtitle: "Cracker dry" },
];

const mushroomGeneral = [
  { id: "conceptos_setas", emoji: "📖", title: "Glosario", subtitle: "Términos" },
  { id: "faq_setas", emoji: "❓", title: "FAQ", subtitle: "Problemas" },
];
