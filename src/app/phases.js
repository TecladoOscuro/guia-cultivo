// Tab definitions for all guides

const phases = [
  { id: "compra", emoji: "🛒", title: "Compra", subtitle: "Lista completa" },
  { id: "semillas_int", emoji: "🌱", title: "Semillas", subtitle: "Qué elegir" },
  { id: "antes", emoji: "📦", title: "Setup", subtitle: "Montaje inicial" },
  { id: "goteo", emoji: "💧", title: "Riego Auto", subtitle: "Setup goteo" },
  { id: "germinacion", emoji: "🥚", title: "Germinación", subtitle: "Días 1–7" },
  { id: "vegetativa", emoji: "🌿", title: "Vegetativa", subtitle: "Días 7–35" },
  { id: "poda", emoji: "🕸️", title: "SCROG & LST", subtitle: "Guía paso a paso" },
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
  { id: "biblio_cannabis", emoji: "📚", title: "Bibliografía", subtitle: "Fuentes" },
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
  { id: "biblio_setas", emoji: "📚", title: "Bibliografía", subtitle: "Fuentes" },
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
  { id: "biblio_cactus", emoji: "📚", title: "Bibliografía", subtitle: "Fuentes" },
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
  { id: "glosario_ferment", emoji: "📖", title: "Glosario", subtitle: "Términos" },
  { id: "faq_ferment", emoji: "❓", title: "FAQ", subtitle: "Problemas comunes" },
  { id: "biblio_ferment", emoji: "📚", title: "Bibliografía", subtitle: "Fuentes" },
];

const fermentSidraPhases = [
  { id: "compra_sidra", emoji: "🛒", title: "Compra", subtitle: "Manzanas + equipo" },
  { id: "prep_sidra", emoji: "🍎", title: "Prep mosto", subtitle: "Triturar + prensar" },
  { id: "fermentacion_sidra", emoji: "🫧", title: "Fermentación", subtitle: "3-6 semanas" },
  { id: "embotellado_sidra", emoji: "🍾", title: "Embotellado", subtitle: "Natural / espumosa" },
  { id: "cata_sidra", emoji: "🥂", title: "Cata", subtitle: "Maduración" },
];

const fermentChichaPhases = [
  { id: "compra_chicha", emoji: "🛒", title: "Compra", subtitle: "Jora + equipo" },
  { id: "prep_chicha", emoji: "🌽", title: "Preparación", subtitle: "Cocción jora" },
  { id: "fermentacion_chicha", emoji: "🫧", title: "Fermentación", subtitle: "2-5 días" },
  { id: "cata_chicha", emoji: "🥂", title: "Degustación", subtitle: "Fresco y frío" },
];

const fermentPulquePhases = [
  { id: "compra_pulque", emoji: "🛒", title: "Compra", subtitle: "Aguamiel + starter" },
  { id: "prep_pulque", emoji: "🌵", title: "Aguamiel", subtitle: "Preparar base" },
  { id: "fermentacion_pulque", emoji: "🫧", title: "Fermentación", subtitle: "12-48h" },
  { id: "cata_pulque", emoji: "🥛", title: "Consumo fresco", subtitle: "Curados + variedades" },
];

const fermentBalchePhases = [
  { id: "compra_balche", emoji: "🛒", title: "Compra", subtitle: "Corteza + miel" },
  { id: "preparacion_balche", emoji: "🌿", title: "Preparación", subtitle: "Macerar corteza" },
  { id: "fermentacion_balche", emoji: "🫧", title: "Fermentación", subtitle: "2-4 días" },
  { id: "cata_balche", emoji: "🍵", title: "Ceremonial", subtitle: "Sabor + contexto" },
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
  { id: "pasiflora", emoji: "🌸", title: "Pasiflora", subtitle: "Ansiolítico clásico" },
  { id: "valeriana", emoji: "💤", title: "Valeriana", subtitle: "Sedante potente" },
  { id: "adormidera_cal", emoji: "🌼", title: "Adormidera California", subtitle: "Sedante leve no-opio" },
  { id: "catnip", emoji: "🐈", title: "Catnip", subtitle: "Hierba gatera" },
  { id: "wild_dagga", emoji: "🦁", title: "Wild Dagga", subtitle: "Cannabis-like africano" },
  { id: "ruda_siria", emoji: "🌌", title: "Ruda siria", subtitle: "IMAO ayahuasca analog" },
  { id: "calamo", emoji: "🪴", title: "Cálamo", subtitle: "Rizoma estimulante leve" },
  { id: "tabaco_rustico", emoji: "🌬️", title: "Tabaco rústico", subtitle: "Mapacho ceremonial" },
  { id: "lobelia", emoji: "🌿", title: "Lobelia", subtitle: "Indian tobacco" },
  { id: "coleus", emoji: "🍂", title: "Coleus", subtitle: "Salvia-like débil" },
  { id: "sasafras", emoji: "🌳", title: "Sasafrás", subtitle: "Té tradicional safrol" },
  { id: "mormon_tea", emoji: "🍵", title: "Mormon tea", subtitle: "Ephedra americana" },
  { id: "escoba_canaria", emoji: "🌾", title: "Escoba canaria", subtitle: "Citisina Yaqui" },
  { id: "chicalote", emoji: "🌻", title: "Chicalote", subtitle: "Amapola mexicana" },
  { id: "woodrose", emoji: "🌹", title: "Hawaiian Woodrose", subtitle: "Semillas LSA" },
  { id: "morning_glory", emoji: "🌅", title: "Morning Glory", subtitle: "Ololiuhqui LSA" },
  { id: "beleno", emoji: "💀", title: "Beleño", subtitle: "Tropano brujería" },
  { id: "belladona", emoji: "🖤", title: "Belladona", subtitle: "Tropano clásico" },
  { id: "mandragora", emoji: "🪬", title: "Mandrágora", subtitle: "Raíz mítica" },
  { id: "datura_inoxia", emoji: "🎺", title: "Datura inoxia", subtitle: "Toloache mexicano" },
  { id: "estramonio", emoji: "⚠️", title: "Estramonio", subtitle: "Datura común ES" },
  { id: "kratom", emoji: "🌿", title: "Kratom", subtitle: "Mitragyna speciosa" },
  { id: "iboga", emoji: "🌿", title: "Iboga", subtitle: "Tabernanthe iboga" },
  { id: "yopo", emoji: "🌳", title: "Yopo", subtitle: "Anadenanthera peregrina" },
  { id: "glosario_plantas", emoji: "📖", title: "Glosario", subtitle: "Términos etnobotánica" },
  { id: "faq_plantas", emoji: "❓", title: "FAQ", subtitle: "Dudas + harm reduction" },
  { id: "biblio_plantas", emoji: "📚", title: "Bibliografía", subtitle: "Fuentes" },
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
  { id: "biblio_amanita", emoji: "📚", title: "Bibliografía", subtitle: "Fuentes" },
];

// Trufas mágicas (esclerocios Psilocybe tampanensis/mexicana/atlantis)
const trufasPhases = [
  { id: "intro_trufas", emoji: "🌟", title: "Intro", subtitle: "Qué son trufas" },
  { id: "compra_trufas", emoji: "🛒", title: "Compra", subtitle: "Esporada + equipo" },
  { id: "inoculacion_trufas", emoji: "💉", title: "Inoculación", subtitle: "Esporas en grano" },
  { id: "incubacion_trufas", emoji: "🔮", title: "Incubación", subtitle: "8-16 semanas oscuro" },
  { id: "cosecha_trufas", emoji: "✂️", title: "Cosecha", subtitle: "Esclerocios del frasco" },
  { id: "preparacion_trufas", emoji: "🍯", title: "Preparación", subtitle: "Consumo + dosis" },
  { id: "conservacion_trufas", emoji: "🫙", title: "Conservación", subtitle: "Frescas/secas/miel" },
  { id: "harm_reduction_trufas", emoji: "⚠️", title: "Seguridad", subtitle: "Set/setting" },
  { id: "faq_trufas", emoji: "❓", title: "FAQ", subtitle: "Dudas comunes" },
  { id: "biblio_trufas", emoji: "📚", title: "Bibliografía", subtitle: "Fuentes" },
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
  { id: "biblio_aya", emoji: "📚", title: "Bibliografía", subtitle: "Fuentes" },
];

// Plantas tóxicas / venenos botánicos
const toxicasPhases = [
  { id: "intro_toxicas", emoji: "☠️", title: "Intro", subtitle: "Toxinas vegetales" },
  { id: "compra_toxicas", emoji: "🛒", title: "Compra", subtitle: "Viveros + seguridad" },
  { id: "brugmansia", emoji: "🎺", title: "Brugmansia", subtitle: "Floripondio tropano" },
  { id: "adelfa", emoji: "🌺", title: "Adelfa", subtitle: "Glucósido cardiaco" },
  { id: "dedalera", emoji: "💜", title: "Dedalera", subtitle: "Fuente digoxina" },
  { id: "aconito", emoji: "💙", title: "Acónito", subtitle: "Alcaloide más tóxico EU" },
  { id: "cicuta", emoji: "💀", title: "Cicuta", subtitle: "Sócrates · Coniina" },
  { id: "ricino", emoji: "🔴", title: "Ricino", subtitle: "Ricina max toxicidad" },
  { id: "colchico", emoji: "🌸", title: "Cólquico", subtitle: "Colchicina antimitótica" },
  { id: "tejo", emoji: "🌲", title: "Tejo", subtitle: "Taxina · árbol ancestral" },
  { id: "lirio_valle", emoji: "🤍", title: "Lirio del Valle", subtitle: "Convalatoxina cardiaca" },
  { id: "eleboro", emoji: "❄️", title: "Eléboro", subtitle: "Rosa de Navidad" },
  { id: "veratrum", emoji: "⛰️", title: "Veratrum", subtitle: "Confusión fatal genciana" },
  { id: "laureola", emoji: "🫐", title: "Laureola", subtitle: "Dafnetoxina vesicante" },
  { id: "curare", emoji: "🏹", title: "Curare", subtitle: "Parálisis flácida · flechas" },
  { id: "nuez_vomica", emoji: "⚡", title: "Nuez Vómica", subtitle: "Estricnina · tetania" },
  { id: "calabar_bean", emoji: "🫘", title: "Calabar Bean", subtitle: "Fisostigmina · ordalia" },
  { id: "glosario_toxicas", emoji: "📖", title: "Glosario", subtitle: "Términos toxicología" },
  { id: "faq_toxicas", emoji: "❓", title: "FAQ", subtitle: "Primeros auxilios" },
  { id: "biblio_toxicas", emoji: "📚", title: "Bibliografía", subtitle: "Toxicología botánica" },
];

// Hongos medicinales funcionales (no psicoactivos)
const hongosMedicinalesPhases = [
  { id: "intro_hongos", emoji: "🌟", title: "Intro", subtitle: "Hongos medicinales" },
  { id: "lions_mane", emoji: "🦁", title: "Lion's Mane", subtitle: "Hericium erinaceus" },
  { id: "reishi", emoji: "🍄", title: "Reishi", subtitle: "Ganoderma lucidum" },
  { id: "chaga", emoji: "🪨", title: "Chaga", subtitle: "Inonotus obliquus" },
  { id: "cordyceps", emoji: "🧡", title: "Cordyceps", subtitle: "Cordyceps militaris" },
  { id: "glosario_hongos", emoji: "📖", title: "Glosario", subtitle: "Términos micología" },
  { id: "faq_hongos", emoji: "❓", title: "FAQ", subtitle: "Dudas comunes" },
  { id: "biblio_hongos", emoji: "📚", title: "Bibliografía", subtitle: "Fuentes" },
];

// Huerta — cultivo de verduras en clima mediterráneo
const huertaPhases = [
  { id: "intro_huerta", emoji: "🥬", title: "Intro", subtitle: "Huerto en casa" },
  { id: "compra_huerta", emoji: "🛒", title: "Compra", subtitle: "Equipo y sustratos" },
  { id: "tomate", emoji: "🍅", title: "Tomate", subtitle: "La reina del huerto" },
  { id: "pimiento", emoji: "🫑", title: "Pimiento", subtitle: "Dulce y padrón" },
  { id: "berenjena", emoji: "🍆", title: "Berenjena", subtitle: "Calor total" },
  { id: "lechuga", emoji: "🥬", title: "Lechuga", subtitle: "Corte y rebrote" },
  { id: "espinaca", emoji: "🌿", title: "Espinaca", subtitle: "Invierno" },
  { id: "kale", emoji: "🥦", title: "Kale", subtitle: "Superalimento" },
  { id: "acelga", emoji: "🌱", title: "Acelga", subtitle: "Productiva" },
  { id: "calabacin", emoji: "🥒", title: "Calabacín", subtitle: "Imparable" },
  { id: "pepino", emoji: "🥒", title: "Pepino", subtitle: "Fresco verano" },
  { id: "melon", emoji: "🍈", title: "Melón", subtitle: "Dulce premio" },
  { id: "sandia", emoji: "🍉", title: "Sandía", subtitle: "Verano puro" },
  { id: "zanahoria", emoji: "🥕", title: "Zanahoria", subtitle: "Raíz dulce" },
  { id: "rabano", emoji: "🔴", title: "Rábano", subtitle: "30 días" },
  { id: "remolacha", emoji: "🟣", title: "Remolacha", subtitle: "Raíz y hoja" },
  { id: "patata", emoji: "🥔", title: "Patata", subtitle: "En saco" },
  { id: "cebolla", emoji: "🧅", title: "Cebolla", subtitle: "Base cocina" },
  { id: "ajo", emoji: "🧄", title: "Ajo", subtitle: "Sin esfuerzo" },
  { id: "puerro", emoji: "🌿", title: "Puerro", subtitle: "Invierno largo" },
  { id: "judia_verde", emoji: "🫘", title: "Judía Verde", subtitle: "Trepadora" },
  { id: "guisante", emoji: "🟢", title: "Guisante", subtitle: "Dulce invierno" },
  { id: "haba", emoji: "🫘", title: "Haba", subtitle: "Rústica" },
  { id: "brocoli", emoji: "🥦", title: "Brócoli", subtitle: "Otoño-invierno" },
  { id: "coliflor", emoji: "🧀", title: "Coliflor", subtitle: "Cabeza blanca" },
  { id: "albahaca", emoji: "🌿", title: "Albahaca", subtitle: "Aromática rey" },
  { id: "perejil", emoji: "🌿", title: "Perejil", subtitle: "Siempre a mano" },
  { id: "cilantro", emoji: "🌿", title: "Cilantro", subtitle: "Amor u odio" },
  { id: "menta", emoji: "🌱", title: "Menta", subtitle: "En contenida" },
  { id: "romero", emoji: "🌿", title: "Romero", subtitle: "Indestructible" },
  { id: "tomillo", emoji: "🌿", title: "Tomillo", subtitle: "Mediterráneo" },
  { id: "oregano", emoji: "🌿", title: "Orégano", subtitle: "Pizza always" },
  { id: "faq_huerta", emoji: "❓", title: "FAQ", subtitle: "Dudas comunes" },
  { id: "biblio_huerta", emoji: "📚", title: "Bibliografía", subtitle: "Fuentes" },
  { id: "glosario_huerta", emoji: "📖", title: "Glosario", subtitle: "Términos" },
];

// Frutales — frutales en clima mediterráneo
const frutalesPhases = [
  { id: "intro_frutales", emoji: "🍎", title: "Intro", subtitle: "Frutales en casa" },
  { id: "compra_frutales", emoji: "🛒", title: "Compra", subtitle: "Dónde y qué" },
  { id: "fresa", emoji: "🍓", title: "Fresa", subtitle: "En maceta" },
  { id: "frambuesa", emoji: "🫐", title: "Frambuesa", subtitle: "Cañas dulces" },
  { id: "arandano", emoji: "🫐", title: "Arándano", subtitle: "Suelo ácido" },
  { id: "mora", emoji: "🍇", title: "Mora", subtitle: "Zarzamora" },
  { id: "limonero", emoji: "🍋", title: "Limonero", subtitle: "4 estaciones" },
  { id: "naranjo", emoji: "🍊", title: "Naranjo", subtitle: "Zumo propio" },
  { id: "mandarino", emoji: "🍊", title: "Mandarino", subtitle: "Fácil pelar" },
  { id: "melocotonero", emoji: "🍑", title: "Melocotonero", subtitle: "Fruta de verano" },
  { id: "ciruelo", emoji: "🟣", title: "Ciruelo", subtitle: "Claudia y más" },
  { id: "cerezo", emoji: "🍒", title: "Cerezo", subtitle: "Horas-frío" },
  { id: "albaricoquero", emoji: "🟠", title: "Albaricoquero", subtitle: "Temprano" },
  { id: "manzano", emoji: "🍎", title: "Manzano", subtitle: "Bajo frío" },
  { id: "peral", emoji: "🍐", title: "Peral", subtitle: "Dulce cosecha" },
  { id: "higuera", emoji: "🪴", title: "Higuera", subtitle: "Indestructible" },
  { id: "vid", emoji: "🍇", title: "Vid", subtitle: "Uva de mesa" },
  { id: "kiwi", emoji: "🥝", title: "Kiwi", subtitle: "Trepador" },
  { id: "granado", emoji: "🟥", title: "Granado", subtitle: "Fruta joya" },
  { id: "faq_frutales", emoji: "❓", title: "FAQ", subtitle: "Dudas comunes" },
  { id: "biblio_frutales", emoji: "📚", title: "Bibliografía", subtitle: "Fuentes" },
  { id: "glosario_frutales", emoji: "📖", title: "Glosario", subtitle: "Términos" },
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
  { id: "biblio_dmt", emoji: "📚", title: "Bibliografía", subtitle: "Fuentes" },
];

