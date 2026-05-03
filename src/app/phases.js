// Tab definitions for all guides

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
  { id: "compra_ext", emoji: "🛒", title: "Compra", subtitle: "Lista completa" },
  { id: "semillas_ext", emoji: "🌱", title: "Semillas", subtitle: "Qué elegir" },
  { id: "ubicacion", emoji: "🌲", title: "Ubicación", subtitle: "Elegir el spot" },
  { id: "germinacion_ext", emoji: "🥚", title: "Germinar", subtitle: "En casa primero" },
  { id: "fases_ext", emoji: "🌿", title: "Fases", subtitle: "Mes a mes" },
  { id: "riego_ext", emoji: "💧", title: "Riego", subtitle: "A mano o auto" },
  { id: "plagas", emoji: "🐛", title: "Plagas", subtitle: "Prevención" },
  { id: "cosecha_ext", emoji: "✂️", title: "Cosecha", subtitle: "Secado y curado" },
];

const generalPhases = [
  { id: "timeline", emoji: "📅", title: "Timeline", subtitle: "Paso a paso" },
  { id: "mis_semillas", emoji: "🫘", title: "Mis Semillas", subtitle: "Las que tengo" },
  { id: "poda_gen", emoji: "✂️", title: "Poda & LST", subtitle: "Técnicas" },
  { id: "cosecha_gen", emoji: "🪴", title: "Cosecha", subtitle: "Secado y curado" },
  { id: "conservacion", emoji: "🫙", title: "Conservación", subtitle: "Guardar producto" },
  { id: "diagnostico", emoji: "🔬", title: "Diagnóstico", subtitle: "Qué falla" },
  { id: "extracciones", emoji: "🧪", title: "Extracciones", subtitle: "Usar el trim" },
  { id: "faq", emoji: "❓", title: "FAQ", subtitle: "Problemas comunes" },
  { id: "conceptos", emoji: "📖", title: "Glosario", subtitle: "Términos explicados" },
];

const mushroomKitPhases = [
  { id: "compra_kit", emoji: "🛒", title: "Compra", subtitle: "Kit completo" },
  { id: "setup_kit", emoji: "📦", title: "Preparación", subtitle: "Montar SGFC" },
  { id: "incubacion_kit", emoji: "🔮", title: "Incubación", subtitle: "Colonización" },
  { id: "fructificacion_kit", emoji: "🍄", title: "Fructificación", subtitle: "Crecimiento" },
  { id: "cosecha_kit", emoji: "✂️", title: "Cosecha", subtitle: "Giro-tirón" },
  { id: "secado_kit", emoji: "🌬️", title: "Secado", subtitle: "Cracker dry" },
];

const mushroomFriendlyPhases = [
  { id: "compra_friendly", emoji: "🛒", title: "Compra", subtitle: "Pre-esterilizado" },
  { id: "prep_friendly", emoji: "🧼", title: "Prep limpio", subtitle: "Sin olla a presión" },
  { id: "inoculacion_friendly", emoji: "💉", title: "Inoculación", subtitle: "Cultura líquida" },
  { id: "incubacion_friendly", emoji: "🔮", title: "Incubación", subtitle: "Colonización" },
  { id: "fructificacion_friendly", emoji: "🍄", title: "Fructificación", subtitle: "Monotub" },
  { id: "cosecha_friendly", emoji: "✂️", title: "Cosecha", subtitle: "Múltiples flush" },
  { id: "secado_friendly", emoji: "🌬️", title: "Secado", subtitle: "Cracker dry" },
];

const mushroomAdvancedPhases = [
  { id: "compra_advanced", emoji: "🛒", title: "Compra", subtitle: "Lab desde cero" },
  { id: "esterilizar_advanced", emoji: "🧫", title: "Esterilizar", subtitle: "Olla a presión" },
  { id: "inoculacion_advanced", emoji: "💉", title: "Inoculación", subtitle: "SAB + esporada" },
  { id: "incubacion_advanced", emoji: "🔮", title: "Incubación", subtitle: "Colonización" },
  { id: "fructificacion_advanced", emoji: "🍄", title: "Fructificación", subtitle: "Bulk monotub" },
  { id: "cosecha_advanced", emoji: "✂️", title: "Cosecha", subtitle: "Múltiples flush" },
  { id: "secado_advanced", emoji: "🌬️", title: "Secado", subtitle: "Cracker dry" },
];

const mushroomGeneral = [
  { id: "timeline_setas", emoji: "📅", title: "Timeline", subtitle: "Cronograma" },
  { id: "conceptos_setas", emoji: "📖", title: "Glosario", subtitle: "Términos" },
  { id: "faq_setas", emoji: "❓", title: "FAQ", subtitle: "Problemas" },
];

// Cactus mescalina (San Pedro / Bolivian Torch / Peyote)
const cactusPhases = [
  { id: "intro_cactus", emoji: "🌵", title: "Intro", subtitle: "Qué cactus" },
  { id: "compra_cactus", emoji: "🛒", title: "Compra", subtitle: "Esquejes/semillas" },
  { id: "germinacion_cactus", emoji: "🥚", title: "Germinación", subtitle: "Si semillas" },
  { id: "cuidados_cactus", emoji: "💧", title: "Cuidados", subtitle: "Riego/sol/sustrato" },
  { id: "crecimiento_cactus", emoji: "📈", title: "Crecimiento", subtitle: "Años de espera" },
  { id: "cosecha_cactus", emoji: "✂️", title: "Cosecha", subtitle: "Cuándo y cuánto" },
  { id: "preparacion_cactus", emoji: "🪵", title: "Preparación", subtitle: "Limpiar y secar" },
  { id: "faq_cactus", emoji: "❓", title: "FAQ", subtitle: "Glosario+dudas" },
];

// Fermentaciones — modos
const fermentHidromielPhases = [
  { id: "compra_hidromiel", emoji: "🛒", title: "Compra", subtitle: "Materia prima" },
  { id: "prep_hidromiel", emoji: "🍯", title: "Mosto", subtitle: "Disolver miel" },
  { id: "fermentacion_hidromiel", emoji: "🫧", title: "Fermentación", subtitle: "4-6 semanas" },
  { id: "embotellado_hidromiel", emoji: "🍾", title: "Embotellado", subtitle: "Trasiego" },
  { id: "cata_hidromiel", emoji: "🥂", title: "Cata", subtitle: "Maduración" },
];

const fermentCervezaPhases = [
  { id: "compra_cerveza", emoji: "🛒", title: "Compra", subtitle: "Kit o desde 0" },
  { id: "macerado_cerveza", emoji: "🌾", title: "Macerado", subtitle: "Activar enzimas" },
  { id: "hervor_cerveza", emoji: "🔥", title: "Hervor + Lúpulo", subtitle: "Sabor + amargor" },
  { id: "fermentacion_cerveza", emoji: "🫧", title: "Fermentación", subtitle: "1-2 semanas" },
  { id: "embotellado_cerveza", emoji: "🍾", title: "Embotellado", subtitle: "Carbonatación" },
  { id: "cata_cerveza", emoji: "🍺", title: "Cata", subtitle: "Maduración" },
];

const fermentGeneralPhases = [
  { id: "intro_ferment", emoji: "🌟", title: "Intro", subtitle: "Qué fermentar" },
  { id: "higiene_ferment", emoji: "🧼", title: "Higiene", subtitle: "Sanitización" },
  { id: "faq_ferment", emoji: "❓", title: "FAQ", subtitle: "Problemas comunes" },
];

const fermentSidraPhases = [
  { id: "compra_sidra", emoji: "🛒", title: "Compra", subtitle: "Manzanas + equipo" },
  { id: "prep_sidra", emoji: "🍎", title: "Prep mosto", subtitle: "Triturar + prensar" },
  { id: "fermentacion_sidra", emoji: "🫧", title: "Fermentación", subtitle: "3-6 semanas" },
  { id: "embotellado_sidra", emoji: "🍾", title: "Embotellado", subtitle: "Natural / espumosa" },
  { id: "cata_sidra", emoji: "🥂", title: "Cata", subtitle: "Maduración" },
];

// Plantas psicoactivas suaves — un solo modo, cada planta = phase
const plantasPhases = [
  { id: "intro_plantas", emoji: "🌟", title: "Intro", subtitle: "Plantas suaves" },
  { id: "compra_plantas", emoji: "🛒", title: "Compra", subtitle: "Donde conseguir" },
  { id: "salvia", emoji: "🍃", title: "Salvia divinorum", subtitle: "Disociativo intenso" },
  { id: "damiana", emoji: "🌿", title: "Damiana", subtitle: "Eufórico ligero" },
  { id: "blue_lotus", emoji: "🪷", title: "Blue Lotus", subtitle: "Sedante onírico" },
  { id: "wild_lettuce", emoji: "🥬", title: "Lechuga silvestre", subtitle: "Analgésico" },
  { id: "calea", emoji: "💭", title: "Calea zacatechichi", subtitle: "Sueños lúcidos" },
  { id: "kava", emoji: "🌴", title: "Kava", subtitle: "Relajante muscular" },
  { id: "kanna", emoji: "🌵", title: "Kanna", subtitle: "Antidepresivo + euforia" },
  { id: "sinicuichi", emoji: "🎵", title: "Sinicuichi", subtitle: "Alucinógeno auditivo" },
  { id: "mucuna", emoji: "🫘", title: "Mucuna pruriens", subtitle: "L-DOPA natural" },
  { id: "lupulo", emoji: "🌾", title: "Lúpulo", subtitle: "Sedante natural" },
  { id: "faq_plantas", emoji: "❓", title: "FAQ", subtitle: "Dudas + harm reduction" },
];

// Amanita muscaria — forrajeo + preparación (no se cultiva)
const amanitaPhases = [
  { id: "intro_amanita", emoji: "🌟", title: "Intro", subtitle: "Qué es Amanita" },
  { id: "compra_amanita", emoji: "🛒", title: "Equipo", subtitle: "Forrajeo + procesado" },
  { id: "identificacion_amanita", emoji: "🔍", title: "Identificación", subtitle: "Vs venenosas" },
  { id: "recoleccion_amanita", emoji: "🍂", title: "Recolección", subtitle: "Otoño bosque" },
  { id: "secado_amanita", emoji: "🌬️", title: "Secado", subtitle: "Decarbox crítica" },
  { id: "preparacion_amanita", emoji: "🍵", title: "Preparación", subtitle: "Té, dosis" },
  { id: "conservacion_amanita", emoji: "🫙", title: "Conservación", subtitle: "Largo plazo" },
  { id: "harm_reduction_amanita", emoji: "⚠️", title: "Seguridad", subtitle: "Dosis y riesgos" },
  { id: "faq_amanita", emoji: "❓", title: "FAQ", subtitle: "Dudas comunes" },
];

// Ayahuasca — vid + arbusto + brebaje
const ayahuascaPhases = [
  { id: "intro_aya", emoji: "🌟", title: "Intro", subtitle: "Qué es ayahuasca" },
  { id: "compra_aya", emoji: "🛒", title: "Compra", subtitle: "Plantas/preparados" },
  { id: "cultivo_caapi", emoji: "🌿", title: "Vid Caapi", subtitle: "Banisteriopsis" },
  { id: "cultivo_chacruna", emoji: "🍃", title: "Chacruna", subtitle: "Psychotria viridis" },
  { id: "cuidados_aya", emoji: "💧", title: "Cuidados", subtitle: "Clima tropical" },
  { id: "preparacion_brebaje", emoji: "🍵", title: "Brebaje", subtitle: "Cocción 6-12h" },
  { id: "ceremonia_aya", emoji: "🕯️", title: "Ceremonia", subtitle: "Set/setting/dieta" },
  { id: "harm_reduction_aya", emoji: "⚠️", title: "Seguridad", subtitle: "MAOI peligros" },
  { id: "faq_aya", emoji: "❓", title: "FAQ", subtitle: "Dudas comunes" },
];

// DMT — Mimosa hostilis + química + uso
const dmtPhases = [
  { id: "intro_dmt", emoji: "🌟", title: "Intro", subtitle: "Qué es DMT" },
  { id: "fuentes_dmt", emoji: "🌳", title: "Fuentes", subtitle: "Mimosa, Acacia, etc" },
  { id: "compra_dmt", emoji: "🛒", title: "Compra", subtitle: "Semillas + equipo" },
  { id: "cultivo_mimosa", emoji: "🌱", title: "Mimosa", subtitle: "Cultivo árbol" },
  { id: "cultivo_chaliponga", emoji: "🍃", title: "Chaliponga", subtitle: "Diplopterys cabrerana" },
  { id: "cultivo_acacia", emoji: "🌳", title: "Acacia confusa", subtitle: "Alternativa Mimosa" },
  { id: "extraccion_dmt", emoji: "🧪", title: "Extracción", subtitle: "Vista general A/B" },
  { id: "consumo_dmt", emoji: "💨", title: "Consumo", subtitle: "Vapor / changa" },
  { id: "experiencia_dmt", emoji: "👁️", title: "Experiencia", subtitle: "Qué esperar" },
  { id: "harm_reduction_dmt", emoji: "⚠️", title: "Seguridad", subtitle: "Set/setting" },
  { id: "faq_dmt", emoji: "❓", title: "FAQ", subtitle: "Dudas comunes" },
];

