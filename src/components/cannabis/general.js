function COMPRA() {
  const priorityColor = { "ESENCIAL": "#e63946", "IMPORTANTE": "#f4a261", "ÚTIL": "#52b788" };
  const dondeColor = {
    "Zamnesia": "#1a6b8a",
    "Amazon": "#8a5a1a",
    "Gratis": "#2d6a4f",
    "Ferretería": "#5a3a8a",
  };

  const sections = [
    {
      title: "🏠 KIT BASE",
      items: [
        {
          name: "Kit cultivo interior 80×80 completo",
          price: "400–600€", priority: "ESENCIAL", donde: null,
          detail: "El kit completo incluye: armario 80×80×180cm, LED 240W, extractor en línea 100mm, filtro de carbón 100mm, controlador de clima, ventilador de pinza, temporizador 24h, tubo flexible, poleas y bridas. Marcas recomendadas: Zamnesia, Mammoth, Secret Jardin. OJO: el kit NO incluye macetas — hay que comprarlas aparte.",
          duracion: "Permanente",
        },
        {
          name: "Semillas autoflorecientes feminizadas",
          price: "15–80€ (pack 3)",
          priority: "ESENCIAL", donde: null,
          detail: "Ver pestaña Semillas para guía completa de qué variedad elegir. Guárdalas en su envase original dentro de un bote de cristal hermético en la nevera. Aguantan 2-5 años perfectamente.",
          duracion: "1 ronda por semilla plantada",
        },
      ]
    },
    {
      title: "🌱 SUSTRATO Y MACETAS",
      items: [
        {
          name: "BioBizz Light Mix — saco 50L",
          price: "12€", priority: "ESENCIAL", donde: "Amazon",
          detail: "Es la tierra donde crecerán tus plantas. Light Mix tiene muy pocos nutrientes de base, lo que significa que no quemará las raíces cuando empieces. Es la opción más segura para principiantes. Un saco de 50L es suficiente para 2 plantas en macetas de 11L con sobras para las siguientes rondas.",
          duracion: "1–2 cosechas por saco",
        },
        {
          name: "Macetas de tela 11L (pack de 3-5)",
          price: "10–20€", priority: "ESENCIAL", donde: "Amazon",
          detail: "Las macetas de tela permiten que el aire entre por los laterales, lo que hace que las raíces crezcan mejor que en plástico. Úsalas para las plantas definitivas. El kit NO incluye macetas — esto es lo primero que mucha gente olvida comprar.",
          duracion: "Permanentes, reutilizables",
        },
        {
          name: "Platos para macetas (juego de 3-5)",
          price: "5–15€", priority: "ESENCIAL", donde: "Amazon",
          detail: "Van debajo de las macetas para recoger el agua que drena por los agujeros. Sin platos mancharás el suelo y no podrás ver cuánto drena. Compra los del mismo tamaño que las macetas.",
          duracion: "Permanentes",
        },
        {
          name: "Vasitos de plástico con agujeros — para germinar",
          price: "Gratis", priority: "ESENCIAL", donde: "Gratis",
          detail: "Para la fase de germinación y plántula (primeras 2-3 semanas) necesitas un recipiente pequeño de ~0.5L. Puedes usar vasos de plástico de yogur grande, de café, o cualquier vaso de plástico al que hagas 4-5 agujeros en el fondo con un bolígrafo caliente. No hace falta comprar nada.",
          duracion: "Reutilizable",
        },
      ]
    },
    {
      title: "🧪 FERTILIZANTES",
      items: [
        {
          name: "BioBizz Bio·Grow + Bio·Bloom — 1L de cada",
          price: "30–40€", priority: "ESENCIAL", donde: "Amazon",
          detail: "El abono para la fase de crecimiento (vegetativa). Rico en nitrógeno, que es lo que necesita la planta para crecer en tamaño. Dosis: 1–2ml por litro de agua de riego. Empieza en la semana 3 desde que germina. Con 1L tienes para 3–4 cosechas.",
          cuando: "Semana 3 de vegetativa hasta que aparecen los primeros pelos blancos (pistilos)",
          duracion: "3–4 cosechas con 1L",
        },
        {
          name: "BioBizz Top·Max — 250ml",
          price: "12–18€", priority: "IMPORTANTE", donde: "Amazon",
          detail: "Estimulador de floración — aumenta el tamaño y densidad de los cogollos. No es imprescindible para empezar, pero la diferencia en el resultado final es notable. Úsalo junto al Bio·Bloom en floración.",
          cuando: "Semanas 2–6 de floración, junto con Bio·Bloom",
          duracion: "2–3 cosechas con 250ml",
        },
      ]
    },
    {
      title: "💧 CONTROL DE pH",
      items: [
        {
          name: "pH Down — 500ml",
          price: "8–15€", priority: "ESENCIAL", donde: "Amazon",
          detail: "El agua del grifo suele tener pH 7–8, pero las plantas necesitan agua entre pH 6.2 y 6.5 para absorber los nutrientes correctamente. Este líquido baja el pH — solo necesitas unas pocas gotas por litro. 500ml te dura literalmente años.",
          duracion: "Años",
        },
        {
          name: "pHmetro digital",
          price: "15–30€", priority: "ESENCIAL", donde: "Amazon",
          detail: "Un aparato pequeño que metes en el agua y te dice exactamente el pH. Sin esto no puedes saber si el agua está bien. Guárdalo siempre con la punta en la solución de almacenamiento para que no se estropee.",
          duracion: "Permanente (calibrar cada mes)",
        },
        {
          name: "Kit soluciones de calibración pH (pH 4 y pH 7)",
          price: "8–15€", priority: "IMPORTANTE", donde: "Amazon",
          detail: "Para calibrar el pHmetro una vez al mes y asegurarte de que mide bien. Sin calibración el aparato pierde precisión con el tiempo y puede darte lecturas erróneas sin que te enteres.",
          duracion: "Años",
        },
      ]
    },
    {
      title: "🌡️ MEDICIÓN",
      items: [
        {
          name: "Higrómetro/termómetro digital",
          price: "8–15€", priority: "ESENCIAL", donde: "Amazon",
          detail: "Un aparatito pequeño que mide temperatura y humedad dentro del armario. Lo colocas a la altura de las plantas. Sin esto no puedes saber si el clima está bien. ",
          duracion: "Permanente",
        },
        {
          name: "Lupa de bolsillo 60x",
          price: "5–12€", priority: "ESENCIAL", donde: "Amazon",
          detail: "Una lupa pequeña de bolsillo que se usa para mirar los tricomas (las gotitas de resina) de los cogollos y saber exactamente cuándo cosechar. Sin ella no puedes saber el momento óptimo de cosecha. ",
          duracion: "Permanente",
        },
        {
          name: "Higrómetros mini para botes de curado (x2-3)",
          price: "6–12€", priority: "IMPORTANTE", donde: "Amazon",
          detail: "Van dentro de los botes de cristal durante el curado para medir la humedad. Sin ellos el curado es a ciegas y puedes arruinar la cosecha con moho en los últimos días. ",
          duracion: "Permanente",
        },
      ]
    },
    {
      title: "🚿 RIEGO",
      items: [
        {
          name: "Regadera 5L con cuello largo y fino",
          price: "10–20€", priority: "ESENCIAL", donde: "Amazon",
          detail: "El cuello largo y fino permite dirigir el agua exactamente donde quieres sin mojar el tallo ni las hojas. Las regaderas normales de boca ancha son muy difíciles de usar en macetas. ",
          duracion: "Permanente",
        },
        {
          name: "Spray de precisión 500ml",
          price: "3–8€", priority: "ESENCIAL", donde: "Amazon",
          detail: "Para humedecer el papel de germinar, para mojar suavemente alrededor de las plántulas recién brotadas, y para refrescar el ambiente si hace mucho calor. Uno de plástico vacío sirve perfectamente.",
          duracion: "Permanente",
        },
      ]
    },
    {
      title: "💧 RIEGO AUTOMÁTICO (opcional pero muy recomendado)",
      items: [
        {
          name: "Sistema riego por goteo con temporizador",
          price: "15–35€", priority: "IMPORTANTE", donde: "Amazon",
          detail: "Sistema de tubos finos con goteros y un temporizador que riega automáticamente. Reduce las aperturas del armario al mínimo — abres solo 1 vez por semana para revisión. ",
          cuando: "Desde semana 2–3 de vegetativa. Las primeras semanas riega a mano con spray.",
          duracion: "Permanente",
        },
        {
          name: "Depósito de agua 15-20L con tapa",
          price: "10–20€", priority: "IMPORTANTE", donde: "Amazon",
          detail: "Va fuera del armario. Preparas el agua con pH y nutrientes, y el sistema de goteo la lleva dentro solo. Solo tienes que rellenar cada 2–3 días sin abrir el armario. Busca cualquier cubo o bidón de plástico alimentario con tapa.",
          duracion: "Permanente",
        },
      ]
    },
    {
      title: "✂️ COSECHA Y CURADO",
      items: [
        {
          name: "Tijeras de punta fina (manicura)",
          price: "~10–20€", priority: "ESENCIAL", donde: "Amazon",
          detail: "Para recortar las hojas pequeñas alrededor de los cogollos en la cosecha (manicura). Las baratas de ferretería se pegan de resina rápido. Límplalas con alcohol isopropílico mientras trabajas. En Amazon busca 'tijeras manicura cogollos' o 'bud trimming scissors'.",
          duracion: "Permanente",
        },
        {
          name: "Botes Mason jar herméticos 1L (pack de 4)",
          price: "~15–20€", priority: "ESENCIAL", donde: "Amazon",
          detail: "Para el curado de los cogollos tras el secado. Deben ser de cristal hermético — el plástico no funciona igual y puede dar sabor. Llénalos al 75% de su capacidad. ",
          duracion: "Permanente",
        },
        {
          name: "Guantes de nitrilo (caja 100 uds)",
          price: "~8€", priority: "IMPORTANTE", donde: "Amazon",
          detail: "Para la cosecha y manicura. La resina de los cogollos es extremadamente pegajosa — sin guantes te quedas con los dedos negros y prácticamente imposibles de limpiar. ",
          duracion: "1 caja para varias cosechas",
        },
      ]
    },
    {
      title: "🛡️ CONTROL DE OLOR",
      items: [
        {
          name: "Cinta americana ancha",
          price: "3–8€", priority: "ESENCIAL", donde: "Amazon",
          detail: "Para sellar el tubo de extracción donde pasa por la ventana y tapar cualquier hueco alrededor. Un trapo viejo enrollado también sirve si no tienes cinta en casa.",
          duracion: "Permanente",
        },
        {
          name: "ONA Gel neutralizador de olores — 1L",
          price: "15–30€", priority: "IMPORTANTE", donde: "Amazon",
          detail: "Neutralizador de olores para poner FUERA del armario, en la habitación. No dentro — afectaría al sabor final. Es una red de seguridad extra para cualquier fuga mínima al abrir la tienda. Dura 2–3 meses.",
          duracion: "2–3 meses por bote",
        },
      ]
    },
    {
      title: "🔧 EXTRAS IMPRESCINDIBLES",
      items: [
        {
          name: "Alcohol isopropílico 99% — 500ml",
          price: "~5–8€", priority: "IMPORTANTE", donde: "Amazon",
          detail: "Para limpiar las tijeras de manicura cuando se llenan de resina (cada 10–15 minutos de trabajo). También para limpiar el pHmetro y cualquier herramienta. En Amazon o farmacia.",
          duracion: "Mucho tiempo",
        },
        {
          name: "Pinzas de punta fina (acero inoxidable)",
          price: "3–10€", priority: "ESENCIAL", donde: "Amazon",
          detail: "Para manipular las semillas durante la germinación sin tocarlas con los dedos. Los aceites naturales de la piel pueden contaminar la semilla. Cualquier pinzas de punta fina sirven.",
          duracion: "Permanente",
        },
        {
          name: "Sílica gel (desecante) — sobrecitos",
          price: "~3–5€", priority: "IMPORTANTE", donde: "Amazon",
          detail: "Para guardar las semillas que no uses todavía. Un sobrecito de sílica gel en el bote de cristal absorbe la humedad y mantiene las semillas en perfecto estado durante años. En Amazon busca 'silica gel sobres desecantes'.",
          duracion: "Permanente",
        },
      ]
    },
  ];

  const dondeColors = {
    "Zamnesia": { bg: "#0d2a3a", border: "#1a6b8a", text: "#74c6d5" },
    "Amazon": { bg: "#2a1a0d", border: "#8a5a1a", text: "#d5a074" },
    "Gratis": { bg: "#0d2a14", border: "#2d6a4f", text: "#74c69d" },
    "Ferretería": { bg: "#1a0d2a", border: "#5a3a8a", text: "#b474d5" },
  };

  return (
    <div>
      {/* Resumen */}
      <div style={{ background: "#162a1e", border: "1px solid #2d6a4f", borderRadius: "10px", padding: "14px", marginBottom: "16px" }}>
        <div style={{ display: "flex", justifyContent: "space-between", marginBottom: "8px" }}>
          <span style={{ fontSize: "12px", color: "#74c69d" }}>Inversión inicial total</span>
          <span style={{ fontSize: "14px", fontWeight: "bold", color: "#d8f3dc" }}>~880€</span>
        </div>
        <div style={{ display: "flex", justifyContent: "space-between", marginBottom: "8px" }}>
          <span style={{ fontSize: "12px", color: "#74c69d" }}>Zamnesia (kit + semillas)</span>
          <span style={{ fontSize: "13px", color: "#95d5b2" }}>~500–650€</span>
        </div>
        <div style={{ display: "flex", justifyContent: "space-between", marginBottom: "8px" }}>
          <span style={{ fontSize: "12px", color: "#74c69d" }}>Amazon (accesorios)</span>
          <span style={{ fontSize: "13px", color: "#95d5b2" }}>~200–300€</span>
        </div>
        <div style={{ display: "flex", justifyContent: "space-between" }}>
          <span style={{ fontSize: "12px", color: "#74c69d" }}>Coste recurrente por cosecha</span>
          <span style={{ fontSize: "13px", color: "#95d5b2" }}>~60–80€</span>
        </div>
      </div>

      {/* Prioridad leyenda */}
      <div style={{ display: "flex", gap: "12px", marginBottom: "20px" }}>
        {[["ESENCIAL", "#e63946"], ["IMPORTANTE", "#f4a261"], ["ÚTIL", "#52b788"]].map(([label, color]) => (
          <div key={label} style={{ display: "flex", alignItems: "center", gap: "5px" }}>
            <div style={{ width: "8px", height: "8px", borderRadius: "50%", background: color }} />
            <span style={{ fontSize: "10px", color: "#74c69d" }}>{label}</span>
          </div>
        ))}
      </div>

      {sections.map((section, si) => (
        <div key={si} style={{ marginBottom: "24px" }}>
          <div style={{ fontSize: "10px", letterSpacing: "2px", color: "#52b788", marginBottom: "10px", paddingBottom: "6px", borderBottom: "1px solid #1b4332" }}>
            {section.title}
          </div>
          {section.items.map((item, ii) => (
            <div key={ii} style={{
              background: "#0d1f14", border: "1px solid #1b4332",
              borderRadius: "10px", padding: "14px", marginBottom: "10px",
              borderLeft: `3px solid ${priorityColor[item.priority]}`,
            }}>
              <div style={{ display: "flex", justifyContent: "space-between", alignItems: "flex-start", marginBottom: "8px" }}>
                <div style={{ fontSize: "14px", color: "#d8f3dc", flex: 1, paddingRight: "10px" }}>{item.name}</div>
                <div style={{ textAlign: "right", flexShrink: 0 }}>
                  <div style={{ fontSize: "13px", fontWeight: "bold", color: "#95d5b2" }}>{item.price}</div>
                  <div style={{ fontSize: "9px", color: priorityColor[item.priority], marginTop: "2px" }}>{item.priority}</div>
                </div>
              </div>
              <div style={{ fontSize: "12px", color: "#74c69d", lineHeight: "1.5", marginBottom: "8px" }}>
                {item.detail}
              </div>
              {item.cuando && (
                <div style={{ fontSize: "11px", color: "#52b788", marginBottom: "6px" }}>
                  🕐 <span style={{ color: "#40916c" }}>Cuándo: </span>{item.cuando}
                </div>
              )}
              <div style={{ display: "flex", justifyContent: "space-between", alignItems: "center", marginTop: "4px" }}>
                <div style={{ fontSize: "11px", color: "#40916c" }}>⏳ {item.duracion}</div>
              </div>
            </div>
          ))}
        </div>
      ))}
    </div>
  );
}

function MIS_SEMILLAS() {
  const semillas = [
    {
      nombre: "Strawberry Banana Auto",
      marca: "FastBuds",
      tipo: "Autofloreciente",
      cantidad: "1 semilla",
      genetica: "70% indica / 30% sativa",
      thc: "25%",
      cbd: "<1%",
      altura_indoor: "80–120cm",
      altura_outdoor: "80–150cm",
      ciclo: "8–9 semanas desde semilla",
      rendimiento_indoor: "400–600g/m²",
      rendimiento_outdoor: "50–200g/planta",
      efecto: "Relajante y eufórico. Cuerpo y mente. Sabor intenso a fresa madura y plátano dulce.",
      color: "#e63946",
      donde: "🏠 Interior (prioritario) · 🌲 Exterior posible",
      notas_indoor: [
        "Puede crecer bastante para ser auto — hasta 120cm. Aplica LST desde semana 2-3 para mantenerla en rango.",
        "Muy aromática durante la floración — asegúrate de que el filtro de carbón esté bien sellado.",
        "Produce mucha resina — las tijeras se pegarán rápido en la cosecha. Alcohol isopropílico a mano.",
        "Ciclo algo más largo que otras autos — no la coseches antes de tiempo. Espera a los tricomas.",
        "Responde muy bien al LST — con buena técnica puede doblar el rendimiento esperado.",
      ],
      notas_outdoor: [
        "En exterior puede desarrollarse mucho más — hasta 150cm en condiciones óptimas.",
        "Al ser auto, florece sola sin importar el ciclo de luz. Puedes plantarla en mayo y cosechar en julio.",
        "Resistencia media a hongos — vigila la Botrytis en septiembre si la dejas hasta entonces.",
        "Buen rendimiento en exterior mediterráneo. Más discreta en tamaño que el fotoperiodo.",
      ],
    },
    {
      nombre: "White Widow",
      marca: "Desconocida / Feminizada",
      tipo: "Fotoperiodo feminizada",
      cantidad: "3 semillas",
      genetica: "60% indica / 40% sativa",
      thc: "18–20%",
      cbd: "<1%",
      altura_indoor: "60–100cm",
      altura_outdoor: "100–150cm",
      ciclo: "8–9 semanas de floración (tras cambio a 12/12h)",
      rendimiento_indoor: "400–500g/m²",
      rendimiento_outdoor: "200–400g/planta",
      efecto: "Equilibrado y versátil. Eufórico y relajante. La clásica por excelencia — robusta y muy resistente.",
      color: "#95d5b2",
      donde: "🏠 Interior · 🌲 Exterior ambas válidas",
      notas_indoor: [
        "Fotoperiodo: NO florece sola. Cuando llegue a 40-50cm cambia el temporizador a 12h/12h.",
        "Muy robusta y resistente — perfecta para principiantes. Perdona errores de riego y nutrientes mejor que otras.",
        "Compacta para ser fotoperiodo — en 120×120 caben 4 plantas cómodamente con margen.",
        "Muy resinosa — los cogollos se cubren de tricomas blancos (de ahí el nombre). Fácil de saber cuándo cosechar.",
        "Tienes 3 semillas — germina 2 y guarda 1 de reserva. Si las dos funcionan bien, perfecto.",
      ],
      notas_outdoor: [
        "En exterior florece sola en agosto cuando los días se acortan. No tienes que hacer nada.",
        "Excelente para exterior mediterráneo — resistente al moho y las plagas.",
        "Puede llegar a 150cm en exterior con buena vegetativa. Pon tutores en agosto.",
        "Cosecha en octubre. Con suerte antes de las lluvias fuertes.",
        "La más recomendada de tus semillas para el bosque — robustez y rendimiento garantizados.",
      ],
    },
    {
      nombre: "Zkittlez OG Auto",
      marca: "Barney's Farm",
      tipo: "Autofloreciente",
      cantidad: "Muestra exclusiva (1–3 semillas)",
      genetica: "Indica dominante",
      thc: "22–24%",
      cbd: "<1%",
      altura_indoor: "70–100cm",
      altura_outdoor: "80–130cm",
      ciclo: "8–9 semanas desde semilla",
      rendimiento_indoor: "450–550g/m²",
      rendimiento_outdoor: "50–150g/planta",
      efecto: "Muy relajante y sedante. Sabor afrutado intenso a caramelo y frutos del bosque.",
      color: "#f4a261",
      donde: "🏠 Interior (ideal) · 🌲 Exterior posible",
      notas_indoor: [
        "Barney's Farm hace semillas de primera calidad — esta muestra es premium.",
        "Tamaño compacto y manejable — ideal para el 120×120 sin necesidad de LST agresivo.",
        "Como es muestra exclusiva, tienes pocas semillas — germínala cuando ya tengas experiencia de una cosecha anterior.",
        "Muy alta producción de resina — cogollos densos y muy aromáticos en floración.",
        "El sabor final mejora mucho con curado largo — mínimo 4 semanas para esta variedad.",
      ],
      notas_outdoor: [
        "Al ser auto, florece sola. Puedes plantarla en mayo para cosechar en julio.",
        "Tamaño discreto — buena opción si el spot tiene restricciones de altura o visibilidad.",
        "Resistencia media — vigila bien en septiembre si hay humedad nocturna alta.",
      ],
    },
    {
      nombre: "Watermelon Zkittlez Auto",
      marca: "Barney's Farm",
      tipo: "Autofloreciente",
      cantidad: "Muestra exclusiva (1–3 semillas)",
      genetica: "Indica dominante",
      thc: "22%",
      cbd: "<1%",
      altura_indoor: "70–100cm",
      altura_outdoor: "80–120cm",
      ciclo: "8–9 semanas desde semilla",
      rendimiento_indoor: "400–500g/m²",
      rendimiento_outdoor: "50–130g/planta",
      efecto: "Relajante y sedante. Sabor a sandía fresca y frutas tropicales muy marcado.",
      color: "#52b788",
      donde: "🏠 Interior (ideal) · 🌲 Exterior posible",
      notas_indoor: [
        "Hermana de la Zkittlez OG — misma calidad Barney's Farm pero con perfil de sandía.",
        "Muy aromática durante la floración — una de las más llamativas en olor. Filtro de carbón imprescindible.",
        "Compacta y manejable en el 120×120.",
        "Como la Zkittlez OG, guárdala para cuando ya tengas experiencia — es una semilla premium para aprovecharla bien.",
        "El curado largo (4-6 semanas) hace que el sabor a sandía se exprese al máximo.",
      ],
      notas_outdoor: [
        "Discreta en tamaño — buena para spots con poca altura disponible.",
        "Mismas consideraciones que la Zkittlez OG en exterior.",
      ],
    },
  ];

  return (
    <div>
      <InfoBox>
        Estas son las semillas que tienes actualmente. Para cada una encontrarás sus características reales, notas específicas para cultivo indoor y outdoor, y recomendaciones sobre cuándo y cómo usarlas según tu nivel de experiencia.
      </InfoBox>

      <div style={{ background: "#1a2a10", border: "1px solid #4a7a20", borderRadius: "10px", padding: "14px", marginBottom: "20px" }}>
        <div style={{ fontSize: "10px", letterSpacing: "2px", color: "#74c69d", marginBottom: "10px" }}>ORDEN RECOMENDADO DE USO</div>
        {[
          { num: "1ª", semilla: "White Widow (fotoperiodo)", cuando: "Cuando tengas el armario listo. Tienes 3 semillas — margen para aprender.", porq: "La más robusta y que más perdona errores. Ideal para primera cosecha." },
          { num: "2ª", semilla: "Strawberry Banana Auto (FastBuds)", cuando: "Segunda o tercera cosecha.", porq: "Autofloreciente de alta calidad. Más sencilla pero algo más exigente que la White Widow." },
          { num: "3ª", semilla: "Zkittlez OG Auto o Watermelon Zkittlez (Barney's Farm)", cuando: "Cuando ya controles el proceso.", porq: "Son muestras exclusivas — pocas semillas sin segunda oportunidad. Aprovéchalas con experiencia." },
        ].map((r, i) => (
          <div key={i} style={{ display: "flex", gap: "12px", padding: "8px 0", borderBottom: i < 2 ? "1px solid #1b4332" : "none" }}>
            <div style={{ fontSize: "14px", fontWeight: "bold", color: "#52b788", flexShrink: 0, width: "28px" }}>{r.num}</div>
            <div>
              <div style={{ fontSize: "13px", color: "#d8f3dc", marginBottom: "3px" }}>{r.semilla}</div>
              <div style={{ fontSize: "11px", color: "#52b788", marginBottom: "2px" }}>Cuándo: {r.cuando}</div>
              <div style={{ fontSize: "11px", color: "#74c69d" }}>Por qué: {r.porq}</div>
            </div>
          </div>
        ))}
      </div>

      {semillas.map((s, i) => (
        <div key={i} style={{ background: "#0d1f14", border: `1px solid ${s.color}33`, borderLeft: `4px solid ${s.color}`, borderRadius: "12px", padding: "16px", marginBottom: "20px" }}>
          <div style={{ marginBottom: "12px" }}>
            <div style={{ fontSize: "16px", fontWeight: "bold", color: "#d8f3dc", marginBottom: "3px" }}>{s.nombre}</div>
            <div style={{ fontSize: "11px", color: s.color, marginBottom: "2px" }}>{s.marca} · {s.tipo} · {s.cantidad}</div>
            <div style={{ fontSize: "12px", color: "#74c69d" }}>{s.donde}</div>
          </div>

          <div style={{ display: "grid", gridTemplateColumns: "1fr 1fr", gap: "6px", marginBottom: "12px" }}>
            {[["Genética", s.genetica], ["THC", s.thc], ["Altura indoor", s.altura_indoor], ["Altura outdoor", s.altura_outdoor], ["Ciclo", s.ciclo], ["Rend. indoor", s.rendimiento_indoor]].map(([k, v]) => (
              <div key={k} style={{ fontSize: "11px" }}>
                <span style={{ color: "#40916c" }}>{k}: </span>
                <span style={{ color: "#95d5b2" }}>{v}</span>
              </div>
            ))}
          </div>

          <div style={{ background: "#162a1e", borderRadius: "8px", padding: "10px 12px", marginBottom: "12px" }}>
            <div style={{ fontSize: "11px", color: s.color, marginBottom: "3px" }}>Efecto y sabor</div>
            <div style={{ fontSize: "12px", color: "#95d5b2", lineHeight: "1.5" }}>{s.efecto}</div>
          </div>

          <div style={{ marginBottom: "10px" }}>
            <div style={{ fontSize: "10px", letterSpacing: "2px", color: "#52b788", marginBottom: "8px" }}>🏠 NOTAS PARA INDOOR</div>
            {s.notas_indoor.map((n, j) => (
              <div key={j} style={{ display: "flex", gap: "8px", marginBottom: "6px" }}>
                <div style={{ color: s.color, flexShrink: 0, fontSize: "12px" }}>→</div>
                <div style={{ fontSize: "12px", color: "#b7e4c7", lineHeight: "1.5" }}>{n}</div>
              </div>
            ))}
          </div>

          <div>
            <div style={{ fontSize: "10px", letterSpacing: "2px", color: "#74c69d", marginBottom: "8px" }}>🌲 NOTAS PARA OUTDOOR</div>
            {s.notas_outdoor.map((n, j) => (
              <div key={j} style={{ display: "flex", gap: "8px", marginBottom: "6px" }}>
                <div style={{ color: "#74c69d", flexShrink: 0, fontSize: "12px" }}>→</div>
                <div style={{ fontSize: "12px", color: "#95d5b2", lineHeight: "1.5" }}>{n}</div>
              </div>
            ))}
          </div>
        </div>
      ))}
    </div>
  );
}

function SEMILLAS_INT() {
  return (
    <div>
      <InfoBox>
        Para interior las autoflorecientes son la opción ideal: ciclo corto de 70-80 días, no dependen del ciclo de luz, y son las más fáciles para principiante. Puedes empezar en cualquier época del año excepto en verano si tu zona tiene calor extremo y no tienes aire acondicionado.
      </InfoBox>

      <SectionTitle>CUÁNDO EMPEZAR — PLANNING INTERIOR</SectionTitle>
      <div style={{ background: "#0d1f14", border: "1px solid #1b4332", borderRadius: "10px", padding: "14px", marginBottom: "16px" }}>
        <p style={{ margin: "0 0 10px", fontSize: "12px", color: "#95d5b2", lineHeight: "1.6" }}>
          Con autoflorecientes puedes empezar cualquier mes del año. La única limitación es el calor en verano — si el armario supera 30°C de forma consistente las plantas mueren. Sin aire acondicionado, evita junio-agosto en zonas cálidas.
        </p>
        {[
          { ronda: "Septiembre – Octubre", cosecha: "Noviembre – Diciembre", nota: "✅ Ideal — temperatura perfecta, sin calor" },
          { ronda: "Enero – Febrero", cosecha: "Marzo – Abril", nota: "✅ Muy buena — sin problemas de calor" },
          { ronda: "Marzo – Abril", cosecha: "Mayo – Junio", nota: "✅ Buena — terminas antes del verano" },
          { ronda: "Junio – Agosto (sin AC)", cosecha: "—", nota: "❌ Calor extremo. Las plantas mueren por encima de 30–32°C" },
        ].map((row, i) => (
          <div key={i} style={{ padding: "7px 0", borderBottom: i < 3 ? "1px solid #1b4332" : "none" }}>
            <div style={{ display: "flex", justifyContent: "space-between", marginBottom: "3px" }}>
              <span style={{ fontSize: "12px", color: "#d8f3dc", fontWeight: "bold" }}>Inicio: {row.ronda}</span>
              {row.cosecha !== "—" && <span style={{ fontSize: "11px", color: "#95d5b2" }}>Cosecha: {row.cosecha}</span>}
            </div>
            <div style={{ fontSize: "11px", color: row.nota.startsWith("❌") ? "#ff6b6b" : "#52b788" }}>{row.nota}</div>
          </div>
        ))}
      </div>

      <SectionTitle>QUÉ BUSCAR EN UNA SEMILLA PARA INTERIOR</SectionTitle>
      <Step num={1} text="Autofloreciente feminizada — imprescindible para empezar en interior." why="Las autos florecen solas por edad, sin cambiar el ciclo de luz. Las fotoperiodo necesitan que cambies manualmente a 12/12h. Para un primer cultivo, las autos eliminan esa complejidad y permiten 3 cosechas al año." />
      <Step num={2} text="Altura compacta — busca variedades que no superen 80-100cm." why="Un armario de 80×80 tiene unos 110-120cm útiles contando la luz colgada. Una planta de 100cm cabe con margen cómodo. Variedades que superan 120cm pueden tener problemas." />
      <Step num={3} text="Ciclo de 65-80 días — para poder hacer 3 cosechas al año evitando el verano." />
      <Step num={4} text="Dificultad de cultivo baja o media — para primera cosecha, elige variedades etiquetadas como 'fácil' o 'principiantes'." />

      <SectionTitle>VARIEDADES RECOMENDADAS — TODOS LOS PERFILES</SectionTitle>

      <div style={{ fontSize: "10px", letterSpacing: "2px", color: "#9b2226", marginBottom: "10px" }}>🔴 INDICA DOMINANTE — Efecto relajante, sedante, corporal</div>
      {[
        {
          name: "Black Diamond Auto (Zamnesia Seeds)",
          genetica: "90% indica", thc: "23%", altura: "~80cm", ciclo: "8–9 semanas",
          rendimiento: "350–450g/m²", dificultad: "Fácil",
          efecto: "Muy sedante y relajante. Ideal para noche. Sabor a uva y tierra.",
          nota: "La más indica de la lista. Perfecta para el armario por su tamaño compacto. Buena opción de principiante por su facilidad de cultivo.",
        },
        {
          name: "Purple Punch Auto (FastBuds)",
          genetica: "70% indica", thc: "20%", altura: "60–90cm", ciclo: "9 semanas",
          rendimiento: "400–500g/m²", dificultad: "Fácil",
          efecto: "Relajante y eufórico. Sabor a frutas dulces, uva y arándanos. Cogollos morados espectaculares.",
          nota: "Muy compacta, ideal para el 80×80. Una de las más fáciles del mercado. Buen rendimiento para principiante.",
        },
        {
          name: "Zkittlez Auto (Barney's Farm)",
          genetica: "70% indica", thc: "23%", altura: "70–90cm", ciclo: "8–9 semanas",
          rendimiento: "450–550g/m²", dificultad: "Fácil",
          efecto: "Relajante con toque eufórico. Sabor muy afrutado y dulce, característico.",
          nota: "Muy popular por la calidad y densidad de sus cogollos. Encaja perfectamente en el 80×80.",
        },
      ].map((v, i) => (
        <div key={i} style={{ background: "#0d1f14", border: "1px solid #1b4332", borderLeft: "3px solid #9b2226", borderRadius: "10px", padding: "14px", marginBottom: "10px" }}>
          <div style={{ fontSize: "14px", color: "#d8f3dc", fontWeight: "bold", marginBottom: "8px" }}>{v.name}</div>
          <div style={{ display: "grid", gridTemplateColumns: "1fr 1fr", gap: "5px", marginBottom: "8px" }}>
            {[["Genética", v.genetica], ["THC", v.thc], ["Altura", v.altura], ["Ciclo", v.ciclo], ["Rendimiento", v.rendimiento], ["Dificultad", v.dificultad]].map(([k, val]) => (
              <div key={k} style={{ fontSize: "11px" }}>
                <span style={{ color: "#40916c" }}>{k}: </span>
                <span style={{ color: "#95d5b2" }}>{val}</span>
              </div>
            ))}
          </div>
          <div style={{ fontSize: "11px", color: "#f4a261", marginBottom: "4px" }}>Efecto: {v.efecto}</div>
          <div style={{ fontSize: "12px", color: "#74c69d", lineHeight: "1.5" }}>{v.nota}</div>
        </div>
      ))}

      <div style={{ fontSize: "10px", letterSpacing: "2px", color: "#f4a261", margin: "16px 0 10px" }}>🟡 HÍBRIDO EQUILIBRADO — Efecto balanceado, cuerpo y mente</div>
      {[
        {
          name: "Gorilla Cookies Auto (FastBuds)",
          genetica: "60% indica / 40% sativa", thc: "24-28%", altura: "70–100cm", ciclo: "9 semanas",
          rendimiento: "500–650g/m²", dificultad: "Fácil-Media",
          efecto: "Potente y equilibrado. Inicio eufórico que evoluciona a relajación profunda. Una de las más potentes del mercado.",
          nota: "Una de las más productivas disponibles. Puede superar 100cm — controla la altura con LST desde la semana 2.",
        },
        {
          name: "Wedding Cheesecake Auto (FastBuds)",
          genetica: "70% indica / 30% sativa", thc: "23%", altura: "60–100cm", ciclo: "8–9 semanas",
          rendimiento: "400–600g/m²", dificultad: "Fácil",
          efecto: "Equilibrado tirando a relajante. Sabor a tarta, queso y vainilla muy característico y aromático.",
          nota: "Una de las más fáciles de cultivar. Muy aromática — asegúrate de que el filtro de carbón funciona bien.",
        },
        {
          name: "Cookies Gelato Auto (Royal Queen Seeds)",
          genetica: "75% indica / 20% sativa", thc: "24%", altura: "90–140cm", ciclo: "10 semanas",
          rendimiento: "450–500g/m²", dificultad: "Media",
          efecto: "Creativo y relajante. Sabor a galletas, tierra, fruta y miel. Cogollos morados y con mucha resina.",
          nota: "Puede llegar a 140cm — usa LST agresivo desde semana 2 para mantenerla en rango. Ciclo algo más largo.",
        },
      ].map((v, i) => (
        <div key={i} style={{ background: "#0d1f14", border: "1px solid #1b4332", borderLeft: "3px solid #f4a261", borderRadius: "10px", padding: "14px", marginBottom: "10px" }}>
          <div style={{ fontSize: "14px", color: "#d8f3dc", fontWeight: "bold", marginBottom: "8px" }}>{v.name}</div>
          <div style={{ display: "grid", gridTemplateColumns: "1fr 1fr", gap: "5px", marginBottom: "8px" }}>
            {[["Genética", v.genetica], ["THC", v.thc], ["Altura", v.altura], ["Ciclo", v.ciclo], ["Rendimiento", v.rendimiento], ["Dificultad", v.dificultad]].map(([k, val]) => (
              <div key={k} style={{ fontSize: "11px" }}>
                <span style={{ color: "#40916c" }}>{k}: </span>
                <span style={{ color: "#95d5b2" }}>{val}</span>
              </div>
            ))}
          </div>
          <div style={{ fontSize: "11px", color: "#f4a261", marginBottom: "4px" }}>Efecto: {v.efecto}</div>
          <div style={{ fontSize: "12px", color: "#74c69d", lineHeight: "1.5" }}>{v.nota}</div>
        </div>
      ))}

      <div style={{ fontSize: "10px", letterSpacing: "2px", color: "#52b788", margin: "16px 0 10px" }}>🟢 SATIVA DOMINANTE — Efecto cerebral, energético, creativo</div>
      {[
        {
          name: "HulkBerry Auto (Royal Queen Seeds)",
          genetica: "Sativa dominante", thc: "21%", altura: "80–120cm", ciclo: "8–9 semanas",
          rendimiento: "450–500g/m²", dificultad: "Fácil-Media",
          efecto: "Energético y eufórico. Sabor a frutas dulces. Efecto estimulante, bueno para tareas creativas o sociales.",
          nota: "La sativa más recomendada para interior. Puede crecer bastante — LST desde semana 2 obligatorio.",
        },
        {
          name: "Super Lemon Haze Auto (Greenhouse Seeds)",
          genetica: "Sativa dominante", thc: "18-20%", altura: "80–100cm", ciclo: "7 semanas",
          rendimiento: "450–500g/m²", dificultad: "Fácil",
          efecto: "Energético, eufórico y estimulante. Sabor muy cítrico a limón. Ideal para uso diurno.",
          nota: "Una de las autos con ciclo más corto — 7 semanas. Permite más cosechas al año. Fácil de gestionar.",
        },
      ].map((v, i) => (
        <div key={i} style={{ background: "#0d1f14", border: "1px solid #1b4332", borderLeft: "3px solid #52b788", borderRadius: "10px", padding: "14px", marginBottom: "10px" }}>
          <div style={{ fontSize: "14px", color: "#d8f3dc", fontWeight: "bold", marginBottom: "8px" }}>{v.name}</div>
          <div style={{ display: "grid", gridTemplateColumns: "1fr 1fr", gap: "5px", marginBottom: "8px" }}>
            {[["Genética", v.genetica], ["THC", v.thc], ["Altura", v.altura], ["Ciclo", v.ciclo], ["Rendimiento", v.rendimiento], ["Dificultad", v.dificultad]].map(([k, val]) => (
              <div key={k} style={{ fontSize: "11px" }}>
                <span style={{ color: "#40916c" }}>{k}: </span>
                <span style={{ color: "#95d5b2" }}>{val}</span>
              </div>
            ))}
          </div>
          <div style={{ fontSize: "11px", color: "#f4a261", marginBottom: "4px" }}>Efecto: {v.efecto}</div>
          <div style={{ fontSize: "12px", color: "#74c69d", lineHeight: "1.5" }}>{v.nota}</div>
        </div>
      ))}

      <div style={{ fontSize: "10px", letterSpacing: "2px", color: "#74c69d", margin: "16px 0 10px" }}>🔵 ALTO CBD — Efecto relajante sin psicoactividad intensa</div>
      <div style={{ background: "#0d1f14", border: "1px solid #1b4332", borderLeft: "3px solid #74c69d", borderRadius: "10px", padding: "14px", marginBottom: "16px" }}>
        <div style={{ fontSize: "14px", color: "#d8f3dc", fontWeight: "bold", marginBottom: "8px" }}>Medikit Auto CBD (Buddha Seeds)</div>
        <div style={{ display: "grid", gridTemplateColumns: "1fr 1fr", gap: "5px", marginBottom: "8px" }}>
          {[["CBD", "~20%"], ["THC", "~1%"], ["Altura", "70–90cm"], ["Ciclo", "8–9 semanas"]].map(([k, val]) => (
            <div key={k} style={{ fontSize: "11px" }}>
              <span style={{ color: "#40916c" }}>{k}: </span>
              <span style={{ color: "#95d5b2" }}>{val}</span>
            </div>
          ))}
        </div>
        <div style={{ fontSize: "11px", color: "#f4a261", marginBottom: "4px" }}>Efecto: Sin efecto psicoactivo. Relajante, ansiolítico. Para uso medicinal o quienes no quieren colocón.</div>
        <div style={{ fontSize: "12px", color: "#74c69d", lineHeight: "1.5" }}>Para quienes buscan los beneficios sin el efecto psicoactivo del THC. Muy fácil de cultivar.</div>
      </div>

      <SectionTitle>CUÁNTAS PLANTAS — RECOMENDACIÓN SEGÚN TAMAÑO</SectionTitle>
      <Step num={1} text="Armario 80×80: 2 plantas en macetas de 11L." why="2 plantas bien cuidadas dan mejor resultado que 3-4 apretadas. Más espacio por planta = más luz = más rendimiento." />
      <Step num={2} text="Armario 100×100: 3-4 plantas en macetas de 11L." />
      <Step num={3} text="Armario 120×120: 4 plantas en macetas de 11L." why="4 plantas es el equilibrio ideal para este tamaño. Con 6 plantas también caben pero es más difícil de gestionar para un principiante." />
      <Step num={4} text="Germina siempre 1 semilla extra de reserva por si alguna falla." />
      <Step num={5} text="Con autoflorecientes en 120×120 espera: 80-150g en la primera cosecha · 150-300g en las siguientes." />

      <SectionTitle>⚠️ SI TU KIT INCLUYE SEMILLAS FOTOPERIODO</SectionTitle>
      <div style={{ background: "#1a2a10", border: "1px solid #4a7a20", borderRadius: "10px", padding: "14px", marginBottom: "12px" }}>
        <p style={{ margin: "0 0 10px", fontSize: "13px", color: "#d8f3dc", fontWeight: "bold" }}>
          Algunos kits incluyen semillas feminizadas fotoperiodo como regalo — como las Critical King del kit 120×120 de La Huerta.
        </p>
        <p style={{ margin: 0, fontSize: "13px", color: "#95d5b2", lineHeight: "1.6" }}>
          Las semillas fotoperiodo NO florecen solas por edad como las autoflorecientes. Necesitas cambiar manualmente el temporizador de 18/6h a 12/12h para forzar la floración. Esto te da control total sobre cuándo florece — y por tanto, control sobre la altura final de la planta.
        </p>
      </div>
      {[
        { num: 1, text: "Autofloreciente en interior: florece sola, más simple, ciclo fijo de ~75 días. Sin control de altura por ciclo.", tip: "Recomendada para principiantes absolutos." },
        { num: 2, text: "Fotoperiodo en interior: tú decides cuándo florece cambiando el temporizador a 12/12h. Más control, más potencial de producción.", tip: "Las semillas de regalo del kit suelen ser fotoperiodo." },
      ].map((item, i) => (
        <div key={i} style={{ background: "#0d1f14", border: "1px solid #1b4332", borderRadius: "8px", padding: "12px 14px", marginBottom: "8px" }}>
          <div style={{ fontSize: "13px", color: "#d8f3dc", marginBottom: "4px" }}>{item.num}. {item.text}</div>
          <div style={{ fontSize: "12px", color: "#52b788" }}>→ {item.tip}</div>
        </div>
      ))}
    </div>
  );
}


function ANTES() {
  return (
    <div>
      <InfoBox>
        Antes de germinar la primera semilla, el armario tiene que estar montado y funcionando.
        No improvises sobre la marcha — un error de setup arruina la cosecha entera.
        Dedica un día entero solo a esto.
      </InfoBox>

      <SectionTitle>MONTAJE DEL ARMARIO</SectionTitle>
      <Step num={1} text="Lee las instrucciones del kit antes de tocar nada. Saca todas las piezas y comprueba que no falta nada." why="Los kits a veces tienen piezas defectuosas. Mejor saberlo antes que cuando ya estás a medias." />
      <Step num={2} text="Monta el armario en el rincón definitivo de la habitación. No lo moverás una vez en funcionamiento." why="El tubo de ventilación llega hasta la ventana. Si cambias de sitio, tienes que rehacer todo el sellado." />
      <Step num={3} text="Cuelga el LED del techo con las poleas incluidas. Empieza con la luz a 60–70cm del suelo." why="La distancia de la luz es crítica. Demasiado cerca quema las plantas. Ya la bajarás según crezcan." />
      <Step num={4} text="Instala el filtro de carbón dentro, en la parte alta. Conéctalo al extractor con el tubo flexible." why="El aire caliente sube. Poner el extractor arriba saca el aire más caliente y húmedo primero." />
      <Step num={5} text="Saca el tubo de ventilación hacia la ventana. Sella el hueco con espuma aislante y cinta americana. Sin huecos." why="Cualquier hueco es una fuga de olor. El filtro de carbón solo funciona si TODO el aire sale por él, sin atajos." />
      <Step num={6} text="Pon el ventilador de pinza dentro apuntando a las futuras plantas, pero ligeramente desviado — no directo." why="El viento directo constante estresa y deseca las plantas. El movimiento de aire suave fortalece los tallos sin dañarlos." />
      <Step num={7} text="Pon el temporizador en el enchufe de la LUZ. Programa 20h encendido / 4h apagado." why="Las autoflorecientes no necesitan cambio de ciclo para florecer, pero 20/4 es el estándar para maximizar el crecimiento." />
      <Step num={8} text="El extractor NO va al temporizador. Debe estar encendido 24h al día." why="Si el extractor se apaga mientras la luz está encendida, el calor se acumula rápido. Con luz off también necesita correr para controlar la humedad." />

      <SectionTitle>PRUEBA DE 24H ANTES DE PLANTAR</SectionTitle>
      <Step num={9} text="Enciéndelo todo durante 24 horas sin plantas. Mide temperatura y humedad con el higrómetro." />
      <Step num={10} text="Objetivo: 22–28°C con luz encendida, 50–70% de humedad. Si hace más calor, sube la velocidad del extractor." />
      <Step num={11} text="Las paredes del armario deben estar ligeramente hundidas hacia dentro cuando el extractor corre." why="Eso es la presión negativa: el extractor aspira más de lo que entra, así que las paredes se 'chupan'. Significa que el aire solo puede salir por el filtro de carbón, no por las costuras. Si las paredes se inflan hacia fuera, hay algo mal." />

      <SectionTitle color="#ff6b6b">⚠️ PROTOCOLO AL ABRIR EL ARMARIO — SIEMPRE</SectionTitle>
      <Step num={null} text="Paso 1: Apaga el extractor. Espera 2–3 minutos." why="Con el extractor funcionando hay presión negativa dentro. Al abrir la cremallera, ese desequilibrio hace que el aire interior salga rápidamente por la abertura antes de pasar por el filtro, llevándose olor consigo. Al apagarlo primero, la presión se iguala y puedes abrir sin ese 'puff' inicial de aire sin filtrar." warning />
      <Step num={null} text="Paso 2: Abre despacio. Haz lo que necesites con calma." warning />
      <Step num={null} text="Paso 3: Cierra la cremallera. Vuelve a encender el extractor." warning />
    </div>
  );
}

function GERMINACION() {
  return (
    <div>
      <div style={{ display: "grid", gridTemplateColumns: "1fr 1fr", gap: "10px", marginBottom: "20px" }}>
        <StatBox label="Temperatura" value="20–25°C" />
        <StatBox label="Humedad" value="70–80%" />
        <StatBox label="Luz" value="Sin luz directa" />
        <StatBox label="Duración" value="5–7 días" />
      </div>
      <InfoBox>
        La germinación ocurre fuera del armario, en un sitio oscuro y cálido. El armario no entra en juego hasta que la plántula ya tiene raíz y brote visible.
      </InfoBox>

      <SectionTitle>PASO A PASO</SectionTitle>
      <Step num={1} text="Llena un vaso con agua mineral a temperatura ambiente. No del grifo, no fría." why="El cloro del agua del grifo puede inhibir la germinación. El agua mineral es más neutra y predecible." />
      <Step num={2} text="Mete la semilla en el vaso. Déjala 12–18 horas hasta que empiece a abrirse o se hunda sola." why="El agua activa los procesos internos de la semilla. Si flota toda la noche sin hundirse, dale un toque suave para sumergirla." />
      <Step num={3} text="Dobla papel de cocina en 4 capas. Humedécelo y escúrrelo bien — húmedo pero sin gotear." why="Si el papel gotea la semilla se puede pudrir. Prueba: al apretarlo fuerte, no deben caer gotas." />
      <Step num={4} text="Saca la semilla del agua con unas pinzas (nunca con los dedos). Ponla en el centro del papel." why="Los aceites naturales de la piel pueden contaminar la semilla y ralentizar la germinación." />
      <Step num={5} text="Dobla el papel sobre la semilla y mételo dentro de un tupper con tapa. Ciérralo." why="El tupper mantiene la humedad constante sin que tengas que estar rehidratando el papel cada pocas horas." />
      <Step num={6} text="Guarda el tupper en un lugar oscuro a ~22°C. Encima de un router WiFi funciona perfecto." why="El calor constante acelera la germinación. La oscuridad imita el estado natural de una semilla bajo tierra." />
      <Step num={7} text="Revisa cada 12 horas sin mover demasiado. En 2–5 días verás salir una raíz blanca (radícula)." />
      <Step num={8} text="Cuando la raíz mida entre 1 y 2 cm, está lista. No esperes más." why="Si la dejas crecer más de 3cm se dobla al enterrarla y queda mal orientada. 1–2cm es el momento ideal." />
      <Step num={9} text="Prepara una maceta pequeña (0,5L o un vaso con agujeros) con sustrato ligeramente húmedo. No empapado." />
      <Step num={10} text="Haz un agujero de 1cm con un lápiz. Mete la semilla con la raíz hacia abajo. Cubre suavemente sin apretar." why="Las raíces crecen hacia abajo por gravedad. Si la raíz queda mirando arriba, la planta tiene que hacer un giro extra bajo tierra, lo que la retrasa." />
      <Step num={11} text="Pon la maceta dentro del armario, luz a 60–70cm, ciclo 20/4. En 1–3 días verás el brote salir del sustrato." />

      <SectionTitle color="#e63946">🚫 ERRORES QUE CUESTAN GRAMOS</SectionTitle>
      <ErrorCard error="Papel demasiado mojado" consecuencia="La semilla se pudre antes de germinar. La pierdes entera." fix="Escurre bien el papel. Al apretarlo fuerte no deben caer gotas." />
      <ErrorCard error="Mover y revisar el tupper constantemente" consecuencia="La raíz es frágil. Las vibraciones pueden romperla." fix="Revisa cada 12h con cuidado. No agites." />
      <ErrorCard error="Plantar con raíz muy larga (+3cm)" consecuencia="La raíz se dobla bajo tierra, la planta sale torcida y tarda más en arrancar." fix="Planta cuando la raíz mide 1–2cm exactamente." />
      <ErrorCard error="Regar la maceta recién plantada con regadera" consecuencia="La radícula recién brotada se asfixia con demasiada agua." fix="Solo spray alrededor del punto de plantación. Nada más los primeros 2–3 días." />
    </div>
  );
}

function VEGETATIVA() {
  return (
    <div>
      <div style={{ display: "grid", gridTemplateColumns: "1fr 1fr", gap: "10px", marginBottom: "20px" }}>
        <StatBox label="Temperatura" value="22–28°C" />
        <StatBox label="Humedad" value="50–70%" />
        <StatBox label="Luz" value="20h / 4h" />
        <StatBox label="Duración" value="3–4 semanas" />
      </div>
      <InfoBox>
        En esta fase la planta solo crece en tamaño — raíces, tallo, hojas. No florece todavía. Tu único trabajo es no matar la planta. Menos intervención = mejor resultado.
      </InfoBox>

      <SectionTitle>EL RIEGO — LO MÁS IMPORTANTE DE TODA LA GUÍA</SectionTitle>
      <Step num={1} text="Antes de regar, mete el dedo índice 2cm en el sustrato. Si notas húmedo: NO riegas. Si notas seco: riegas." why="El error nº1 de principiantes es regar por rutina ('toca regar hoy'). Las plantas no tienen calendario. La sobreirrigación mata más plantas que cualquier otra cosa porque las raíces se asfixian sin oxígeno." />
      <Step num={2} text="Cuando riegues, hazlo hasta que salga agua por los agujeros de abajo de la maceta." why="Así te aseguras de que toda la tierra se humedece uniformemente. El agua que drena por abajo es normal, no la desperdicies — significa que llegó a todas las raíces." />
      <Step num={3} text="Levanta la maceta justo después de regar. Nota su peso. Vuelve a regar solo cuando se sienta claramente más ligera." why="Una maceta mojada pesa el doble que una seca. En pocas semanas aprenderás a saber solo con el peso si necesita agua. Es la habilidad más útil del cultivo." />

      <SectionTitle>LA LUZ</SectionTitle>
      <Step num={4} text="Semanas 1–2: luz a 60–70cm de la planta." />
      <Step num={5} text="Semana 3: si la planta supera los 15cm, baja la luz a 50cm." />
      <Step num={6} text="Semana 4: puedes bajar a 40cm. No menos de momento." why="Demasiado cerca quema las hojas (manchas blancas en el centro). Demasiado lejos hace que la planta se estire buscando luz y quede débil y alta sin estructura, lo que reduce el rendimiento final." />
      <Step num={7} text="Test de temperatura siempre: pon el dorso de la mano donde están las hojas. Si quema tu mano, quema la planta. Sube la luz." />

      <SectionTitle>NUTRIENTES Y pH</SectionTitle>
      <Step num={8} text="Semanas 1–2: CERO nutrientes. Solo agua con pH ajustado a 6.2–6.5." why="El sustrato BioBizz ya tiene nutrientes de base para las primeras semanas. Si añades más encima, quemas las raíces. La planta parece enferma aunque en realidad tiene exceso, no falta." />
      <Step num={9} text="Cómo ajustar el pH: llena la regadera, añade unas gotas de pH Down, mide con el pHmetro. Añade más gotas si hace falta hasta llegar a 6.2–6.5. Haz esto en cada riego." why="El pH es la acidez del agua. Las plantas solo pueden absorber nutrientes en un rango concreto de pH. Si el pH está mal, los nutrientes están ahí pero la planta no puede tomarlos. Es como tener comida en un bote con tapa. El pHmetro no es opcional." />
      <Step num={10} text="Semana 3: añade BioBizz Grow a 1ml por litro de agua. Solo eso." />
      <Step num={11} text="Semana 4: sube a 2ml/L si la planta se ve verde oscuro y sana. Si las hojas están amarillentas, quédate en 1ml." />
      <Step num={12} text="Técnica avanzada (opcional): mide el pH del agua de escorrentía (runoff). Cuando riegues, coloca un plato bajo la maceta y recoge el agua que drena. Mide su pH con tu pHmetro." why="Si el pH del runoff difiere más de 0.5 puntos del agua que entró, hay acumulación de sales (nutrientes) que no el sustrato no absorbe. Esto causa bloqueo de nutrientes (lockout). Solución: flush con agua a pH 6.3 sin nutrientes durante 2-3 días." />

      <SectionTitle>LEER LA PLANTA (no necesitas experiencia, solo observación)</SectionTitle>
      <Step num={12} text="Hojas verde oscuro, firmes y turgentes = planta feliz. No cambies nada." />
      <Step num={13} text="Hojas amarillas en la parte de ABAJO (hojas viejas) = le faltan nutrientes. Sube dosis ligeramente." />
      <Step num={14} text="Hojas amarillas o con puntas quemadas en la parte de ARRIBA (hojas nuevas) = exceso de nutrientes o luz demasiado cerca." />
      <Step num={15} text="Hojas caídas y mustias antes de regar = le falta agua. Riega." />
      <Step num={16} text="Hojas caídas y mustias justo después de regar = exceso de agua. Espera más entre riegos." why="Sí, tanto el exceso como el defecto de agua causan hojas caídas. La diferencia está en el momento: si cae justo después de regar, hay demasiada agua. Si lleva días sin regar y cae, le falta." />

      <SectionTitle>📏 CONTROL DE ALTURA — CLAVE PARA FOTOPERIODO EN INTERIOR</SectionTitle>
      <div style={{ background: "#1a2a10", border: "1px solid #4a7a20", borderRadius: "10px", padding: "14px", marginBottom: "12px" }}>
        <p style={{ margin: "0 0 8px", fontSize: "13px", color: "#d8f3dc", fontWeight: "bold" }}>
          ¿Por qué importa la altura con fotoperiodo?
        </p>
        <p style={{ margin: 0, fontSize: "13px", color: "#95d5b2", lineHeight: "1.6" }}>
          Con fotoperiodo tú controlas cuándo empieza la floración cambiando el temporizador a 12/12h. Cuando lo haces, la planta puede doblar o triplicar su tamaño durante los primeros 30 días de floración (el "estirón"). Si cambias demasiado tarde, la planta choca con el techo y el LED antes de terminar de florecer. Si cambias demasiado pronto, la planta es pequeña y el rendimiento es menor.
        </p>
      </div>
      <Step num={1} text="Calcula el espacio útil de tu armario: altura total (200cm) - luz colgada (~15cm) - distancia luz a planta (~30cm) = ~155cm útiles para la planta." why="La distancia mínima entre la luz y la punta de la planta debe ser ~25-30cm para no quemar. Con el LED colgado en el techo tienes unos 155cm de margen real." />
      <Step num={2} text="Divide ese espacio entre 3 — eso es la altura a la que debes cambiar a 12/12h." why="Si tienes 150cm útiles y la planta puede triplicar su altura en floración, cambia a 12/12h cuando mida 50cm. 50 × 3 = 150cm. Margen perfecto." />
      <Step num={3} text="Para un armario de 120×120×200cm: cambia a 12/12h cuando las plantas midan 40-50cm." />
      <Step num={4} text="Para un armario de 100×100×200cm: mismo criterio — cambia a 40-50cm de altura." />
      <Step num={5} text="Para un armario de 80×80×180cm: cambia a 35-45cm de altura — hay 20cm menos de margen." />
      <Step num={6} text="Cómo medir: desde el nivel del sustrato hasta la punta más alta de la planta." />

      <div style={{ background: "#0d1f14", border: "1px solid #1b4332", borderRadius: "10px", padding: "14px", marginBottom: "20px" }}>
        <div style={{ fontSize: "10px", letterSpacing: "2px", color: "#52b788", marginBottom: "10px" }}>TABLA RÁPIDA — CUÁNDO CAMBIAR A 12/12h</div>
        {[
          { armario: "80×80×180cm", cambio: "35–45cm", cosecha: "~75 días después" },
          { armario: "100×100×200cm", cambio: "40–50cm", cosecha: "~75 días después" },
          { armario: "120×120×200cm", cambio: "45–55cm", cosecha: "~75 días después" },
        ].map((row, i) => (
          <div key={i} style={{ display: "flex", justifyContent: "space-between", padding: "7px 0", borderBottom: i < 2 ? "1px solid #1b4332" : "none" }}>
            <span style={{ fontSize: "12px", color: "#d8f3dc" }}>{row.armario}</span>
            <span style={{ fontSize: "12px", color: "#52b788", fontWeight: "bold" }}>Cambia a 12/12h con {row.cambio}</span>
          </div>
        ))}
      </div>

      <SectionTitle>TRANSPLANTE A MACETA GRANDE</SectionTitle>
      <Step num={17} text="Cuando la planta tenga 15–20cm y veas raíces salir por los agujeros de abajo, transplanta a la maceta de 11L." />
      <Step num={18} text="Riega ligeramente el día anterior." why="Si el sustrato está muy seco se deshace al sacar la planta y dañas las raíces. Si está muy mojado, también. Ligeramente húmedo es perfecto para que el cepellón salga intacto." />
      <Step num={19} text="Pon sustrato nuevo en el fondo de la maceta grande. Saca la planta de la pequeña sin romper el bloque de tierra. Introdúcela y rellena los lados." />
      <Step num={20} text="No riegues abundantemente hasta 2–3 días después." why="Las raíces están en modo recuperación tras el transplante. Dales tiempo a asentarse antes de añadir más estrés." />

      <SectionTitle color="#e63946">🚫 ERRORES QUE CUESTAN GRAMOS</SectionTitle>
      <ErrorCard error="Regar cada día por costumbre" consecuencia="Raíces sin oxígeno, la planta se ahoga lentamente. Es la causa nº1 de fracaso en principiantes." fix="Dedo en el sustrato siempre. Si está húmedo, no riegas. Sin excepciones." />
      <ErrorCard error="No medir el pH del agua" consecuencia="La planta parece enferma aunque tenga suficientes nutrientes. Pierdes semanas intentando arreglarlo con más abono cuando el problema es otro." fix="pH 6.2–6.5 en cada riego. El pHmetro cuesta 20€ y vale cada céntimo." />
      <ErrorCard error="Empezar con nutrientes desde el día 1" consecuencia="Quemadura de raíces. Las puntas de las hojas se vuelven marrones." fix="Las primeras 2 semanas solo agua. El sustrato ya trae lo que necesita." />
      <ErrorCard error="Intervenir demasiado — cambiar la luz cada día, mover la planta" consecuencia="El estrés continuo ralentiza el crecimiento y reduce el rendimiento." fix="Establece una rutina fija y respétala. Esta fase requiere paciencia, no intervención." />
    </div>
  );
}

function FLORACION() {
  return (
    <div>
      <div style={{ display: "grid", gridTemplateColumns: "1fr 1fr", gap: "10px", marginBottom: "20px" }}>
        <StatBox label="Temperatura" value="20–26°C" />
        <StatBox label="Humedad" value="40–50%" />
        <StatBox label="Luz auto" value="Florece sola" />
        <StatBox label="Luz foto" value="Cambiar a 12/12h" />
      </div>

      <div style={{ background: "#162a1e", border: "1px solid #2d6a4f", borderRadius: "10px", padding: "14px", marginBottom: "16px" }}>
        <div style={{ fontSize: "10px", letterSpacing: "2px", color: "#52b788", marginBottom: "10px" }}>DOS TIPOS DE SEMILLA — DOS FORMAS DE FLORECER</div>
        {[
          { tipo: "🌱 Autofloreciente", como: "Florece sola a los 30-35 días sin que hagas nada. No cambies el temporizador.", accion: "Solo observa — verás aparecer pelos blancos (pistilos) en los nudos." },
          { tipo: "🌿 Fotoperiodo (ej. Critical King)", como: "NO florece sola. Necesitas cambiar el temporizador a 12h luz / 12h oscuridad.", accion: "Cuando la planta llegue a 40-55cm (según tu armario), cambia el temporizador a 12/12h." },
        ].map((item, i) => (
          <div key={i} style={{ background: "#0d1f14", border: "1px solid #1b4332", borderRadius: "8px", padding: "12px", marginBottom: i === 0 ? "8px" : "0" }}>
            <div style={{ fontSize: "13px", color: "#d8f3dc", fontWeight: "bold", marginBottom: "6px" }}>{item.tipo}</div>
            <div style={{ fontSize: "12px", color: "#74c69d", marginBottom: "4px" }}>{item.como}</div>
            <div style={{ fontSize: "12px", color: "#52b788" }}>→ {item.accion}</div>
          </div>
        ))}
      </div>

      <SectionTitle>SI USAS FOTOPERIODO — CÓMO CAMBIAR A 12/12h</SectionTitle>
      <Step num={1} text="Espera a que las plantas lleguen a 40-55cm de altura (según tu armario — ver tabla en pestaña Semillas)." why="Si cambias demasiado pronto la planta es pequeña y el rendimiento es bajo. Si cambias demasiado tarde, la planta se estira en floración y choca con el techo o el LED." />
      <Step num={2} text="Ve al temporizador y cambia el ciclo: de 18h encendido / 6h apagado → a 12h encendido / 12h apagado." />
      <Step num={3} text="El período de oscuridad de 12h debe ser COMPLETAMENTE oscuro — sin ninguna luz, ni siquiera momentánea." why="Cualquier interrupción de luz durante el período oscuro puede confundir a la planta y retrasar o interrumpir la floración. No abras el armario durante las 12h de oscuridad." />
      <Step num={4} text="En 7-14 días verás aparecer los primeros pistilos (pelos blancos) — la planta ha entrado en floración." />
      <Step num={5} text="A partir de ese momento NO vuelvas a cambiar el ciclo de luz. Mantén 12/12h hasta la cosecha." />
      <Step num={6} text="Duración de la floración con Critical King: ~7-8 semanas desde que aparecen los primeros pistilos." />

      <InfoBox>
        Con autoflorecientes, la floración empieza sola al cabo de ~30–35 días. Verás aparecer pelos blancos (pistilos) en los nudos de la planta. No tienes que hacer nada para provocarlo.
      </InfoBox>

      <SectionTitle>SEÑALES DE QUE EMPIEZA LA FLORACIÓN</SectionTitle>
      <Step num={1} text="Pelos blancos y finos en los nudos (donde las ramas salen del tallo principal)." />
      <Step num={2} text="La planta deja de crecer en altura y empieza a engordar con más estructura." />
      <Step num={3} text="El olor empieza a ser más intenso. Es normal y es buena señal." />

      <SectionTitle>CAMBIOS AL ENTRAR EN FLORACIÓN</SectionTitle>
      <Step num={4} text="Cambia los nutrientes: deja de usar Grow, empieza con Bloom a 2ml/L. Mantén Grow a 0.5ml/L." why="La planta ya no necesita tanto nitrógeno (Grow) y sí más fósforo y potasio (Bloom) para desarrollar los cogollos. Cambiar el fertilizante en este momento marca diferencia real en el rendimiento." />
      <Step num={5} text="BAJA la humedad al 40–50%. Si está más alta, sube la velocidad del extractor." why="En floración los cogollos son densos y retienen humedad. Por encima del 60% puede aparecer Botrytis — moho gris que destruye el cogollo desde dentro en días, sin que lo veas hasta que es demasiado tarde. No hay recuperación posible." />
      <Step num={6} text="Baja la luz a 30–35cm del punto más alto de la planta. Usa el test de la mano siempre antes de bajar más." />

      <SectionTitle>LAVADO DE RAÍCES (semanas 5–6 de floración)</SectionTitle>
      <Step num={7} text="Deja de dar nutrientes completamente. Solo agua con pH 6.2 durante los últimos 10–14 días antes de cosechar." why="Si no lavas las raíces, los cogollos acumulan sales minerales de los nutrientes. El resultado es un sabor químico y áspero que arruina meses de trabajo. Durante el lavado la planta consume sus propias reservas y el sabor final es limpio y natural." />
      <Step num={8} text="Señal de que va bien: las hojas grandes empezarán a amarillear. Eso es bueno — la planta está usando lo que le queda." />

      <SectionTitle>SABER CUÁNDO COSECHAR (imprescindible)</SectionTitle>
      <Step num={9} text="Compra una lupa de 60x (en Amazon ~5€). Sin ella estás adivinando." why="Los tricomas son las gotitas de resina que cubren los cogollos. Su color es el único indicador fiable del punto exacto de madurez. Sin lupa no puedes verlos." />
      <Step num={10} text="Mira los tricomas de los cogollos (no de las hojas). Hay tres estados:" />
      <Step num={11} text="Transparentes → Aún no está. Necesita más tiempo." />
      <Step num={12} text="Blancos y lechosos (turbios) → Punto óptimo. Efecto más activo." />
      <Step num={13} text="Ámbar → Más relajante y corporal. Si hay muchos, estás al límite." />
      <Step num={14} text="Para tu primera cosecha: busca que el 70–80% sean lechosos con alguno ámbar." />

      <SectionTitle color="#e63946">🚫 ERRORES QUE CUESTAN GRAMOS</SectionTitle>
      <ErrorCard error="Humedad alta en floración (+60%)" consecuencia="Botrytis dentro de los cogollos. Puedes perder toda la cosecha en 3 días sin darte cuenta hasta que es tarde." fix="40–50% de humedad obligatorio. Revisa el higrómetro cada día en esta fase." />
      <ErrorCard error="Saltarse el lavado de raíces" consecuencia="Sabor químico inevitable. Meses de trabajo con resultado mediocre." fix="Últimos 10–14 días solo agua. Es el paso que más diferencia el resultado final." />
      <ErrorCard error="Cosechar por impaciencia sin revisar los tricomas" consecuencia="Rendimiento reducido un 30–40% y efecto muy inferior al potencial de la planta." fix="La lupa de 60x cuesta 5€. Te ahorra semanas de espera desperdiciada." />
    </div>
  );
}

function COSECHA() {
  return (
    <div>
      <div style={{ display: "grid", gridTemplateColumns: "1fr 1fr", gap: "10px", marginBottom: "20px" }}>
        <StatBox label="Secado" value="10–14 días" />
        <StatBox label="Temp. secado" value="18–20°C" />
        <StatBox label="Humedad secado" value="45–55%" />
        <StatBox label="Curado mínimo" value="2–4 semanas" />
      </div>

      <SectionTitle>EL DÍA DE LA COSECHA</SectionTitle>
      <Step num={1} text="48h antes de cortar: apaga la luz y déjala en oscuridad total." why="Muchos growers lo hacen creyendo que dispara la producción de resina en las últimas horas. No está 100% demostrado, pero no cuesta nada y muchos ven mejoras. Es el último empujón antes de cosechar." />
      <Step num={2} text="Ponte guantes de nitrilo antes de tocar los cogollos." why="La resina es muy pegajosa y difícil de quitar de la piel. Además, el calor de las manos puede degradarla." />
      <Step num={3} text="Corta la planta a nivel del sustrato con tijeras limpias. Puedes cortar entera o rama a rama." />
      <Step num={4} text="Quita las hojas grandes (fan leaves, las hojas grandes sin resina) con los dedos o tijeras." why="Tienen poco valor, ralentizan el secado y si las dejas pueden acumular humedad. Las hojas pequeñas que rodean los cogollos se dejan para la manicura posterior." />

      <SectionTitle>EL SECADO</SectionTitle>
      <Step num={5} text="Cuelga las ramas boca abajo en un lugar oscuro, 18–20°C, 45–55% humedad. Airflow suave en la habitación pero sin ventilador apuntando directamente." why="La oscuridad protege los cannabinoides de la degradación por la luz. El aire directo seca el exterior demasiado rápido mientras el interior sigue húmedo — eso provoca moho dentro del cogollo aunque por fuera parezca seco." />
      <Step num={6} text="No toques ni muevas las ramas durante el secado." />
      <Step num={7} text="TEST de secado listo: coge una ramita fina. Dóblala. Si craquea (se parte limpio y seco), está lista. Si se dobla sin romperse, necesita más tiempo." why="Este test es más fiable que mirar el color o tocar el cogollo con los dedos. El interior seca más lento que el exterior y este test lo detecta perfectamente." />
      <Step num={8} text="Duración habitual: 10–14 días. En julio con calor puede ser algo menos." />

      <SectionTitle>LA MANICURA</SectionTitle>
      <Step num={9} text="Una vez seco, recorta con tijeras de punta fina las hojas pequeñas que rodean cada cogollo (sugarleaves)." why="Son material de menor calidad. Retirarlas mejora el aspecto, el sabor y la experiencia final." />
      <Step num={10} text="Guarda los recortes (trim) aparte en una bolsa. Sirven para hacer aceite, mantequilla u otros usos." />

      <SectionTitle>EL CURADO — EL PASO QUE MÁS DIFERENCIA EL RESULTADO</SectionTitle>
      <Step num={11} text="Mete los cogollos en botes de cristal herméticos (Mason jars). Llénalos al 75%." why="Muy llenos: la humedad no circula bien. Muy vacíos: se seca demasiado rápido en el bote." />
      <Step num={12} text="Pon un higrómetro pequeño dentro de cada bote." why="La humedad dentro del bote debe estar entre 58–65%. Sin higrómetro estás completamente a ciegas." />
      <Step num={13} text="Las primeras 2 semanas: abre cada bote 15 minutos al día. Se llama 'burping'." why="El material sigue liberando humedad residual después de parecer seco. Si no la liberas, se acumula y aparece moho aunque el cogollo pareciera listo al meterlo." />
      <Step num={14} text="Si el higrómetro marca más de 70%: deja el bote abierto 1–2 horas. Si marca menos de 55%: ciérralo hasta mañana." />
      <Step num={15} text="Mínimo 2 semanas de curado. 4 semanas es notablemente mejor. 8 semanas es lo ideal." why="El curado no es solo esperar. Durante ese tiempo ocurren reacciones químicas que descomponen la clorofila (que da sabor vegetal amargo) y desarrollan los terpenos (el aroma y sabor final). No hay atajos posibles." />

      <SectionTitle color="#e63946">🚫 ERRORES QUE CUESTAN GRAMOS</SectionTitle>
      <ErrorCard error="Secar con ventilador directo encima de las ramas" consecuencia="Exterior seco, interior húmedo. Moho invisible dentro del cogollo." fix="Airflow indirecto. El aire circula en la habitación pero no apunta a las ramas." />
      <ErrorCard error="Meter en bote antes de hacer el test de la ramita" consecuencia="Moho en el curado. Pierdes toda la cosecha después de meses de trabajo, en los últimos días." fix="Test de la ramita sin excepción. Si dobla sin romperse, espera más días." />
      <ErrorCard error="Saltarse el curado o hacerlo solo 3–4 días" consecuencia="Sabor vegetal, efecto brusco. Todo el trabajo de meses con un resultado pobre." fix="El curado es parte del cultivo, no un extra. 2 semanas mínimo, 4 ideal." />
      <ErrorCard error="No hacer burping diario las primeras semanas" consecuencia="Moho en el bote. Todo perdido en la recta final." fix="15 minutos al día abriendo el bote. Con el higrómetro dentro sabes exactamente qué pasa." />

      <SectionTitle>📦 CONSERVACIÓN A LARGO PLAZO</SectionTitle>
      <div style={{ background: "#162a1e", border: "1px solid #2d6a4f", borderRadius: "10px", padding: "14px", marginBottom: "12px" }}>
        <p style={{ margin: "0 0 8px", fontSize: "12px", color: "#95d5b2", lineHeight: "1.6" }}>
          Los cuatro enemigos del producto son: <span style={{ color: "#d8f3dc", fontWeight: "bold" }}>luz, oxígeno, humedad y calor</span>. Cualquier método de conservación busca eliminar alguno de estos cuatro factores.
        </p>
      </div>

      {[
        {
          metodo: "🫙 Botes de cristal herméticos + oscuridad",
          duracion: "6–12 meses",
          color: "#52b788",
          recomendado: "✅ Método estándar",
          pasos: [
            "Botes Mason jar de cristal al 75% de capacidad, humedad interior 58-65%, lugar oscuro y fresco.",
            "La luz UV degrada los cannabinoides — no uses botes transparentes en zonas con luz. Los de cristal ámbar o guardarlos en caja oscura.",
            "Temperatura ideal: 15-21°C. Por encima de 25°C los terpenos se evaporan y el producto pierde aroma.",
            "Con estas condiciones mantienes calidad completa hasta 12 meses.",
          ],
        },
        {
          metodo: "🔵 Envasado al vacío",
          duracion: "12–18 meses",
          color: "#74c69d",
          recomendado: "✅ Recomendado para excedente",
          pasos: [
            "Elimina el oxígeno que oxida y degrada los cannabinoides. Extiende la vida útil considerablemente.",
            "IMPORTANTE: solo después del curado completo (mínimo 4 semanas). Si envásas al vacío antes de que el curado haya terminado, el proceso se interrumpe.",
            "Problema: las máquinas de vacío domésticas pueden aplastar los cogollos y romper los tricomas. Solución: mete los cogollos en el congelador 20-30 minutos antes de envasar — se quedan rígidos y aguantan la presión sin aplastarse.",
            "Una vez envasado al vacío, guarda en lugar oscuro y fresco.",
          ],
        },
        {
          metodo: "❄️ Congelación",
          duracion: "1–2 años",
          color: "#95d5b2",
          recomendado: "⚠️ Solo para largo plazo — con precauciones",
          pasos: [
            "Funciona bien para conservación muy larga pero requiere cuidado. Los tricomas congelados son extremadamente frágiles — se rompen con el mínimo contacto y pierdes potencia.",
            "Nunca toques los cogollos cuando están fríos o recién sacados del congelador.",
            "Descongela siempre dentro del bote cerrado y hermético. Espera a temperatura ambiente antes de abrir. La condensación es el mayor riesgo — si el vapor de agua toca los cogollos directamente aparece moho.",
            "No congeles y descongeles repetidamente. Descongela solo lo que vayas a consumir próximamente.",
          ],
        },
        {
          metodo: "🏆 Vacío + congelación",
          duracion: "2+ años",
          color: "#d8f3dc",
          recomendado: "✅ Mejor método para largo plazo",
          pasos: [
            "La combinación más efectiva: sin oxígeno y sin temperatura. Mínima degradación posible.",
            "Proceso: curado completo (4+ semanas) → congelación 30 min para endurecer → envasado al vacío → congelador.",
            "Para consumir: saca del congelador, deja descongelar sin abrir 2-3 horas a temperatura ambiente, abre solo cuando el bote esté a temperatura ambiente.",
            "Ideal si tienes una cosecha exterior grande (200-500g) y no puedes consumirlo todo en 12 meses.",
          ],
        },
      ].map((m, i) => (
        <div key={i} style={{ background: "#0d1f14", border: `1px solid ${m.color}33`, borderLeft: `3px solid ${m.color}`, borderRadius: "10px", padding: "14px", marginBottom: "10px" }}>
          <div style={{ display: "flex", justifyContent: "space-between", alignItems: "flex-start", marginBottom: "8px" }}>
            <div style={{ fontSize: "14px", color: "#d8f3dc", fontWeight: "bold" }}>{m.metodo}</div>
            <div style={{ textAlign: "right", flexShrink: 0, marginLeft: "10px" }}>
              <div style={{ fontSize: "11px", color: m.color, fontWeight: "bold" }}>{m.duracion}</div>
              <div style={{ fontSize: "10px", color: "#74c69d", marginTop: "2px" }}>{m.recomendado}</div>
            </div>
          </div>
          {m.pasos.map((p, j) => (
            <div key={j} style={{ display: "flex", gap: "8px", marginBottom: "6px" }}>
              <div style={{ color: m.color, flexShrink: 0, fontSize: "11px" }}>{j + 1}.</div>
              <div style={{ fontSize: "12px", color: "#74c69d", lineHeight: "1.5" }}>{p}</div>
            </div>
          ))}
        </div>
      ))}

      <div style={{ background: "#1b4332", borderRadius: "10px", padding: "14px" }}>
        <div style={{ fontSize: "12px", color: "#d8f3dc", lineHeight: "1.6" }}>
          <span style={{ fontWeight: "bold" }}>Recomendación práctica: </span>
          Con 3 cosechas de interior al año (80-150g cada una) el consumo y producción suelen equilibrarse. Los botes de cristal bien curados son más que suficientes. Usa el vacío solo si acumulas más de lo que consumes, y la congelación solo para el excedente de una gran cosecha exterior.
        </div>
      </div>
    </div>
  );
}

function PLAGAS_INT() {
  return (
    <div>
      <InfoBox>
        En interior, las plagas menos comunes que en exterior pero pueden aparecer, especialmente con sustratos orgánicos. La buena noticia: son fáciles de detectar y eliminar con rapidez. Prevención desde el inicio es la mejor estrategia.
      </InfoBox>

      <SectionTitle>CHECKLIST DE INSPECCIÓN SEMANAL</SectionTitle>
      {[
        "Mira el envés de todas las hojas jóvenes — fungus gnats y ácaros se esconden ahí.",
        "Comprueba la base del tallo y el sustrato — busca mosquitos pequeños volando.",
        "Inspecciona las puntas de las hojas — rayones plateados = trips.",
        "Agujeros irregulares en hojas = ya hay problema, actúa inmediatamente.",
        "Pon trampas amarillas pegajosas cerca de la planta — detectan plagas antes de que se propaguen.",
      ].map((item, i) => (
        <div key={i} style={{ display: "flex", gap: "10px", background: "#0d1f14", border: "1px solid #1b4332", borderRadius: "8px", padding: "10px 12px", marginBottom: "6px" }}>
          <div style={{ color: "#52b788", flexShrink: 0 }}>☐</div>
          <div style={{ fontSize: "12px", color: "#b7e4c7", lineHeight: "1.5" }}>{item}</div>
        </div>
      ))}

      <SectionTitle>LAS 3 PLAGAS PRINCIPALES EN INTERIOR</SectionTitle>
      {[
        {
          nombre: "🪰 Fungus gnats (mosquitos del sustrato)", nivel: "ALTO", color: "#e63946",
          descripcion: "Mosquitos pequeños (2-3mm) que viven en sustratos orgánicos húmedos. Las larvas se comen las raíces, debilitando la planta. Los adultos no hacen daño directo pero indican un problema.",
          deteccion: "Mosquitos pequeños volando alrededor de la planta. Larvas blancas con cabeza negra en el sustrato (saca un poco y mira). Planta débil sin razón aparente.",
          prevencion: "Sustrato ligeramente seco entre riegos. No riegues excesivamente. Trampas amarillas pegajosas — los adultos se quedan pegados y no ponen huevos nuevos.",
          tratamiento: "Bacillus israelensis (Bti) rociado sobre el sustrato. Mata las larvas sin afectar la planta. 2-3 aplicaciones cada 5 días. Mantén el sustrato más seco mientras hay infestación. Los nematodos Steinernema feltiae también funcionan bien pero son más caros.",
        },
        {
          nombre: "🕷️ Spider mites (araña roja)", nivel: "ALTO", color: "#e63946",
          descripcion: "Ácaros microscópicos (0.5mm) que viven en el envés de las hojas. Chupan la savia dejando puntos amarillos. Con infestación fuerte pueden defoliar una planta en una semana.",
          deteccion: "Puntos amarillos/blancos en hojas. Telarañas finas en el envés (úsalos con lupa). Planta amarillea rápidamente sin razón clara.",
          prevencion: "Humedad relativa 50–70%. Buen flujo de aire. Evita temperaturas por encima de 28°C. Inspección semanal del envés de hojas.",
          tratamiento: "Jabón potásico 5ml/L en spray, cubriendo bien el envés. Aplica al atardecer cuando la luz está apagada. Repite cada 3 días durante 2 semanas. Si no mejora, añade aceite de neem 2ml/L. En último extremo, Spinosad.",
        },
        {
          nombre: "🐛 Trips", nivel: "MEDIO", color: "#f4a261",
          descripcion: "Insectos diminutos (1-2mm) que dejan rayones plateados en las hojas mientras chupan el contenido celular. No son tan destructivos como los ácaros pero se propagan rápido.",
          deteccion: "Rayones o puntos plateados en el envés de hojas. Pequeños insectos negros o marrones visibles si miras con lupa. Hojas moteadas y punteadas.",
          prevencion: "Buena circulación de aire. Humedad controlada. Trampas azules pegajosas (los trips prefieren el azul).",
          tratamiento: "Spinosad en spray. Es un insecticida natural muy efectivo contra trips. 2-3 aplicaciones cada 3-4 días. Alternativamente, jabón potásico primero, luego Spinosad si no baja.",
        },
      ].map((plaga, i) => (
        <div key={i} style={{ background: "#0d1f14", border: `1px solid ${plaga.color}44`, borderRadius: "10px", padding: "14px", marginBottom: "12px" }}>
          <div style={{ display: "flex", justifyContent: "space-between", alignItems: "center", marginBottom: "8px" }}>
            <div style={{ fontSize: "14px", fontWeight: "bold", color: "#d8f3dc" }}>{plaga.nombre}</div>
            <div style={{ fontSize: "9px", color: plaga.color, letterSpacing: "1px", fontWeight: "bold" }}>{plaga.nivel}</div>
          </div>
          <div style={{ fontSize: "12px", color: "#74c69d", lineHeight: "1.5", marginBottom: "10px" }}>{plaga.descripcion}</div>
          {[["🔍 Cómo detectar", plaga.deteccion], ["🛡️ Prevención", plaga.prevencion], ["💊 Tratamiento", plaga.tratamiento]].map(([titulo, texto]) => (
            <div key={titulo} style={{ marginBottom: "8px" }}>
              <div style={{ fontSize: "10px", color: "#52b788", letterSpacing: "1px", marginBottom: "3px" }}>{titulo}</div>
              <div style={{ fontSize: "12px", color: "#b7e4c7", lineHeight: "1.5" }}>{texto}</div>
            </div>
          ))}
        </div>
      ))}
    </div>
  );
}

function CONSERVACION() {
  return (
    <div>
      <InfoBox>
        Los cuatro enemigos del producto cosechado son: <span style={{ color: "#d8f3dc", fontWeight: "bold" }}>luz, oxígeno, humedad y calor</span>. Cualquier método de conservación busca eliminar alguno de estos cuatro factores. Esta sección aplica igual si has cultivado en interior o en exterior.
      </InfoBox>

      {[
        {
          metodo: "🫙 Botes de cristal herméticos + oscuridad",
          duracion: "6–12 meses",
          color: "#52b788",
          recomendado: "✅ Método estándar — lo que usarás normalmente",
          pasos: [
            "Botes Mason jar de cristal al 75% de capacidad, humedad interior 58-65%, lugar oscuro y fresco.",
            "La luz UV degrada los cannabinoides — guarda los botes en un cajón oscuro o en caja. Si los botes son transparentes, que no les dé luz directa.",
            "Temperatura ideal: 15-21°C. Por encima de 25°C los terpenos se evaporan y el producto pierde aroma y sabor.",
            "Con estas condiciones mantienes calidad completa hasta 12 meses.",
          ],
        },
        {
          metodo: "🔵 Envasado al vacío",
          duracion: "12–18 meses",
          color: "#74c69d",
          recomendado: "✅ Recomendado para guardar excedente",
          pasos: [
            "Elimina el oxígeno que oxida y degrada los cannabinoides. Extiende la vida útil considerablemente.",
            "IMPORTANTE: solo después del curado completo (mínimo 4 semanas). Si envasas antes de terminar el curado, el proceso se interrumpe.",
            "Problema: las máquinas de vacío domésticas pueden aplastar los cogollos y romper los tricomas. Solución: mete los cogollos en el congelador 20-30 minutos antes — se quedan rígidos y aguantan la presión sin aplastarse.",
            "Una vez envasado al vacío, guarda en lugar oscuro y fresco.",
          ],
        },
        {
          metodo: "❄️ Congelación",
          duracion: "1–2 años",
          color: "#95d5b2",
          recomendado: "⚠️ Solo para largo plazo — con precauciones",
          pasos: [
            "Los tricomas congelados son extremadamente frágiles — se rompen con el mínimo contacto y pierdes potencia. Nunca toques los cogollos cuando están fríos.",
            "Descongela siempre dentro del bote cerrado y hermético. Espera a temperatura ambiente antes de abrir. La condensación es el mayor riesgo — el vapor de agua sobre los cogollos puede causar moho.",
            "No congeles y descongeles repetidamente. Solo descongela lo que vayas a consumir pronto.",
          ],
        },
        {
          metodo: "🏆 Vacío + congelación",
          duracion: "2+ años",
          color: "#d8f3dc",
          recomendado: "✅ El mejor método para grandes cosechas de exterior",
          pasos: [
            "La combinación más efectiva: sin oxígeno y sin temperatura. Mínima degradación posible.",
            "Proceso: curado completo (4+ semanas) → congela 30 min para endurecer → envasa al vacío → congelador.",
            "Para consumir: saca del congelador, deja descongelar sin abrir 2-3 horas a temperatura ambiente, abre solo cuando el bote esté a temperatura ambiente.",
            "Ideal si tienes una cosecha exterior grande (200-500g) y no puedes consumirla en 12 meses.",
          ],
        },
      ].map((m, i) => (
        <div key={i} style={{ background: "#0d1f14", border: `1px solid ${m.color}33`, borderLeft: `3px solid ${m.color}`, borderRadius: "10px", padding: "14px", marginBottom: "12px" }}>
          <div style={{ display: "flex", justifyContent: "space-between", alignItems: "flex-start", marginBottom: "8px" }}>
            <div style={{ fontSize: "14px", color: "#d8f3dc", fontWeight: "bold" }}>{m.metodo}</div>
            <div style={{ textAlign: "right", flexShrink: 0, marginLeft: "10px" }}>
              <div style={{ fontSize: "11px", color: m.color, fontWeight: "bold" }}>{m.duracion}</div>
            </div>
          </div>
          <div style={{ fontSize: "11px", color: m.color, marginBottom: "10px" }}>{m.recomendado}</div>
          {m.pasos.map((p, j) => (
            <div key={j} style={{ display: "flex", gap: "8px", marginBottom: "6px" }}>
              <div style={{ color: m.color, flexShrink: 0, fontSize: "11px" }}>{j + 1}.</div>
              <div style={{ fontSize: "12px", color: "#74c69d", lineHeight: "1.5" }}>{p}</div>
            </div>
          ))}
        </div>
      ))}

      <div style={{ background: "#1b4332", borderRadius: "10px", padding: "14px" }}>
        <div style={{ fontSize: "12px", color: "#d8f3dc", lineHeight: "1.6" }}>
          <span style={{ fontWeight: "bold" }}>Recomendación práctica: </span>
          Con 3 cosechas de interior al año los botes de cristal herméticos son más que suficientes. Usa el vacío solo si acumulas más de lo que consumes. La congelación solo para el excedente de una gran cosecha exterior.
        </div>
      </div>
    </div>
  );
}

function CONCEPTOS() {
  const categories = [
    {
      cat: "🌿 TÉCNICAS DE CULTIVO",
      color: "#52b788",
      terms: [
        { term: "LST (Low Stress Training)", def: "Técnica de doblar las ramas de la planta hacia fuera y fijarlas con clips o cuerdas para que crezca en forma de abanico horizontal en vez de vertical. El objetivo es que la luz llegue a más puntos de la planta al mismo tiempo, aumentando el rendimiento. Se hace en vegetativa, semana 2-3, cuando las ramas aún son flexibles. No se corta nada — solo se doblan y sujetan. Es la técnica más recomendada para principiantes porque si la haces mal, la planta simplemente vuelve a su posición.", visual: "🌿→📐 Planta vertical → Planta en abanico horizontal" },
        { term: "Topping", def: "Cortar la punta principal de la planta para que en vez de un solo cola principal crezcan dos. Genera más cogollos pero estresa a la planta — no recomendado para autoflorecientes ni para principiantes.", visual: "✂️ Corte en la punta → 2 ramas principales" },
        { term: "FIM", def: "Similar al topping pero pellizcando en vez de cortando limpiamente. Genera 4 puntas en vez de 2. Técnica avanzada — no recomendada para empezar.", visual: null },
        { term: "Defoliación", def: "Quitar hojas grandes que hacen sombra a los cogollos que están creciendo debajo. Solo 2-3 hojas por sesión máximo, con días de descanso entre sesiones. Solo en vegetativa o inicio de floración, nunca en floración avanzada.", visual: null },
        { term: "SOG (Sea of Green)", def: "Poner muchas plantas pequeñas juntas para que formen un 'mar verde' uniforme. Técnica para maximizar rendimiento en poco espacio. No recomendada para empezar.", visual: null },
        { term: "ScrOG (Screen of Green)", def: "Poner una red horizontal sobre las plantas y pasar las ramas por los agujeros para tener una capa uniforme de cogollos a la misma altura. Maximiza el uso de la luz. Técnica intermedia.", visual: null },
        { term: "Acolchado / Mulching", def: "Cubrir el suelo alrededor de la planta con hojas secas, corteza o hierba. Retiene la humedad del suelo evitando que el calor la evapore. En exterior reduce el riego a la mitad en verano. Coste cero — usas lo que hay en el bosque.", visual: null },
      ]
    },
    {
      cat: "🌱 LA PLANTA",
      color: "#74c69d",
      terms: [
        { term: "Vegetativa (fase)", def: "La primera etapa de vida de la planta. Solo crece en tamaño — raíces, tallo y hojas. No hay cogollos todavía. En interior con luz 18h/6h. En autoflorecientes dura 3-4 semanas. En fotoperiodo dura hasta que cambias el ciclo de luz.", visual: null },
        { term: "Floración (fase)", def: "La segunda etapa, cuando la planta deja de crecer en altura y empieza a producir cogollos. En autoflorecientes empieza sola a los 30-35 días. En fotoperiodo empieza cuando cambias el temporizador a 12h/12h.", visual: null },
        { term: "Autofloreciente", def: "Variedad que florece sola según su edad, sin importar las horas de luz. Ciclo corto de 70-80 días desde semilla. Perfecta para principiantes. No puedes controlar cuándo florece.", visual: null },
        { term: "Fotoperiodo", def: "Variedad que solo florece cuando cambias el temporizador a 12h de luz / 12h de oscuridad. Tú decides cuándo empieza a florecer. Más producción pero más compleja. Tus White Widow son fotoperiodo.", visual: null },
        { term: "Feminizada", def: "Semilla modificada para producir solo plantas hembra (las que dan cogollos). Sin feminizar, el 50% de plantas serían macho y no producirían cogollos. Todas tus semillas son feminizadas.", visual: null },
        { term: "Pistilo", def: "Los pelos blancos que aparecen en la planta cuando empieza a florecer. Al principio son blancos y se van volviendo naranjas/marrones conforme madura. Cuando el 70-80% son naranjas, la cosecha se acerca.", visual: "🔍 Pelo blanco fino que sale de los nudos de la planta" },
        { term: "Tricoma", def: "Las pequeñas 'gotitas' de resina que cubren los cogollos. Contienen los cannabinoides y terpenos. Su color indica el punto de madurez: transparentes = pronto, lechosos = óptimo, ámbar = maduro.", visual: "🔬 Necesitas lupa 60x para verlos bien" },
        { term: "Cola / Cogollo", def: "La flor de la planta hembra. Es lo que se cosecha y cura. Se forma durante la fase de floración.", visual: null },
        { term: "Cotiledones", def: "Las dos primeras hojitas redondeadas que salen cuando la semilla germina. No parecen cannabis — son redondas y simples. Son normales. Las hojas características aparecen a partir del día 5-7.", visual: "🌱 Las dos primeras hojas redondeadas = normales" },
        { term: "Fan leaves", def: "Las hojas grandes y características de la planta. No tienen resina. Se retiran en la cosecha porque no tienen valor y ralentizan el secado.", visual: null },
        { term: "Sugarleaves", def: "Las hojas pequeñas que rodean los cogollos, cubiertas de resina (tricomas). Se recortan en la manicura post-cosecha. Sirven para hacer extractos o mantequilla.", visual: null },
        { term: "Nudo", def: "El punto del tallo donde sale una rama. En floración, los pistilos aparecen primero en los nudos. Cuantos más nudos tiene una planta, más potencial de producción.", visual: null },
        { term: "Ápice", def: "La punta más alta de la planta. La que crece hacia la luz. Es el punto de referencia para medir la distancia entre la planta y el LED.", visual: "☝️ La punta más alta = ápice" },
        { term: "Radícula", def: "La primera raíz blanca que sale de la semilla cuando germina. Cuando mide 1-2cm es el momento de plantarla.", visual: "🌱 Raíz blanca que sale de la semilla" },
      ]
    },
    {
      cat: "🧪 NUTRIENTES Y SUSTRATO",
      color: "#95d5b2",
      terms: [
        { term: "Sustrato", def: "La tierra donde crece la planta. No es tierra de jardín normal — está formulado específicamente para cannabis con la estructura, pH y nutrientes adecuados. BioBizz Light Mix es el más recomendado para principiantes.", visual: null },
        { term: "Nutrientes / Fertilizantes", def: "Los 'alimentos' que le das a la planta diluidos en el agua de riego. Los básicos son nitrógeno (N) para crecer y fósforo-potasio (P-K) para florecer. Bio Grow = crecimiento, Bio Bloom = floración.", visual: null },
        { term: "pH", def: "Medida de acidez del agua en escala del 1 al 14. 7 es neutro. Las plantas en sustrato necesitan que el agua esté entre 6.0 y 6.8 para poder absorber los nutrientes. Fuera de ese rango, los nutrientes están ahí pero la planta no puede tomarlos — como tener comida en un bote con tapa.", visual: "💧 pH 6.0-6.8 = agua correcta para regar" },
        { term: "pH Down", def: "Líquido ácido que añades al agua para bajar el pH. El agua del grifo suele estar en pH 7-8. Unas pocas gotas llevan el agua al rango correcto.", visual: null },
        { term: "pHmetro", def: "Aparato digital que metes en el agua y te dice exactamente el pH. Imprescindible — sin él cultivas a ciegas.", visual: "📏 Aparato pequeño con pantalla y punta metálica" },
        { term: "EC / TDS", def: "Medida de la concentración de sales minerales (nutrientes) en el agua. A mayor EC, más nutrientes. Herramienta avanzada — no imprescindible para empezar con sustratos.", visual: null },
        { term: "Lavado de raíces", def: "Los últimos 10-14 días antes de cosechar, dejas de dar nutrientes y solo riegas con agua con pH correcto. La planta consume sus propias reservas y el producto final tiene mejor sabor. Sin lavado, los cogollos saben a químico.", visual: null },
        { term: "Quemar (plantas)", def: "Cuando das demasiados nutrientes y las raíces se 'queman' por el exceso de sales. Síntoma: puntas de hojas marrones. La solución es reducir la dosis, no añadir más.", visual: "🍂 Puntas de hojas marrones = exceso de nutrientes" },
        { term: "Cepellón", def: "El bloque compacto de tierra con raíces que se forma dentro de la maceta. En el trasplante hay que sacarlo intacto para no dañar las raíces.", visual: null },
      ]
    },
    {
      cat: "🏠 SETUP E INSTALACIÓN",
      color: "#b7e4c7",
      terms: [
        { term: "Armario de cultivo / Tienda", def: "La estructura de tela reflectante donde viven las plantas. Interior reflectante para aprovechar la luz. Con cremalleras, aperturas para tubos y cables. Se monta con varillas metálicas.", visual: null },
        { term: "LED", def: "Tipo de iluminación de bajo consumo para cultivo. El estándar actual — más eficiente que las lámparas de sodio antiguas (HPS). Genera menos calor por watt de luz producido.", visual: null },
        { term: "HPS (High Pressure Sodium)", def: "Tipo de iluminación antigua de sodio de alta presión. Más calor y más consumo que LED para el mismo resultado. Aún muy usada pero en retirada.", visual: null },
        { term: "Extractor", def: "Ventilador en línea que aspira el aire del interior del armario y lo expulsa hacia el exterior. Crea la presión negativa y controla la temperatura y humedad. Siempre conectado al filtro de carbón para eliminar el olor.", visual: "💨 Aspirador de aire que va conectado al filtro" },
        { term: "Extractor en línea (TT)", def: "El tipo correcto de extractor para uso con filtro de carbón. Cilíndrico, se instala en el tubo entre el filtro y la salida al exterior. Compatible con filtros anti-olor.", visual: null },
        { term: "Extractor helicoidal", def: "Tipo de ventilador barato que NO es compatible con filtro de carbón. Si el kit lo incluye, el sistema anti-olor no funcionará correctamente.", visual: "❌ No sirve para control de olores" },
        { term: "Filtro de carbón", def: "Cilindro relleno de carbón activo que absorbe las moléculas de olor antes de que el aire salga al exterior. Dura 12-18 meses. El elemento más importante para el control de olores.", visual: "🛢️ Cilindro negro que va dentro del armario en la parte alta" },
        { term: "Presión negativa", def: "Estado del armario cuando el extractor aspira más de lo que entra por las aperturas inferiores. Las paredes del armario se 'chupan' ligeramente hacia dentro. Significa que todo el aire sale por el filtro.", visual: "📦 Paredes hundidas hacia dentro = correcto" },
        { term: "Temporizador", def: "Enchufe programable que enciende y apaga la luz automáticamente. Se programa con el ciclo de luz deseado: 18/6h para vegetativa, 12/12h para forzar floración en fotoperiodo.", visual: null },
        { term: "Higrómetro", def: "Aparato que mide la humedad relativa del ambiente y la temperatura. Se coloca a la altura de las plantas dentro del armario.", visual: "📊 Pantalla pequeña con temperatura y % de humedad" },
        { term: "Controlador de clima", def: "Aparato que regula automáticamente la velocidad del extractor según la temperatura y/o humedad. Mantiene el clima del armario estable sin que tengas que ajustar nada manualmente.", visual: null },
        { term: "Polea de cuerda", def: "Sistema de cuerda con trinquete que se engancha al techo del armario para colgar el LED. Permite subir y bajar la luz fácilmente según crece la planta.", visual: "🪝 Cuerda con trinquete para regular la altura del LED" },
        { term: "Maceta de tela", def: "Maceta de material poroso que permite que el aire entre por los laterales. Las raíces se 'autopodán' al llegar al borde — la planta desarrolla más raíces secundarias y crece mejor que en maceta de plástico.", visual: null },
        { term: "Setup", def: "Todo el conjunto de equipamiento instalado y configurado. Cuando alguien dice 'mi setup' se refiere a su armario con todo lo que lleva.", visual: null },
      ]
    },
    {
      cat: "✂️ COSECHA Y CURADO",
      color: "#d8f3dc",
      terms: [
        { term: "Cosecha", def: "El momento de cortar la planta. Se hace cuando los tricomas están en el punto óptimo (70-80% lechosos). Incluye cortar, secar, manicurar y curar.", visual: null },
        { term: "Secado", def: "Fase de 10-14 días donde las ramas cuelgan boca abajo en lugar oscuro, fresco y con algo de circulación de aire. El agua se evapora lentamente. Listo cuando las ramitas finas craquean al doblarlas.", visual: null },
        { term: "Manicura / Trim", def: "Recortar las hojas pequeñas (sugarleaves) que rodean los cogollos después del secado. Se hace con tijeras de punta fina. Los recortes (trim) sirven para extractos.", visual: "✂️ Recortar las hojitas alrededor del cogollo" },
        { term: "Curado", def: "Guardar los cogollos en botes herméticos de cristal durante semanas o meses después del secado. Ocurren reacciones químicas que eliminan el sabor vegetal y desarrollan el aroma. Sin curado el resultado es notablemente peor.", visual: null },
        { term: "Burping", def: "Abrir los botes de curado 15 minutos al día durante las primeras semanas para liberar la humedad residual que siguen soltando los cogollos. Sin burping puede aparecer moho en el bote.", visual: "🫙 Abrir el bote 15 min al día" },
        { term: "Botrytis", def: "Moho gris que ataca los cogollos desde dentro, especialmente con humedad alta en otoño o en armarios con poca ventilación. Cuando lo ves ya hay daño importante. Prevención: humedad por debajo del 55% en floración.", visual: "🔍 Manchas grises/marrones dentro del cogollo" },
        { term: "Terpenos", def: "Los compuestos que dan el aroma y sabor característico de cada variedad. Se desarrollan y se potencian durante el curado. Por eso el curado largo (4-8 semanas) marca tanta diferencia en el resultado final.", visual: null },
      ]
    },
    {
      cat: "📐 MEDIDAS Y TÉRMINOS TÉCNICOS",
      color: "#f4a261",
      terms: [
        { term: "g/m² (gramos por metro cuadrado)", def: "La medida estándar de producción en interior. Si ves 'rendimiento 400g/m²' significa que en 1 metro cuadrado de superficie se pueden producir 400 gramos. Tu armario 120×120 tiene 1.44m² de superficie.", visual: null },
        { term: "Ciclo 18/6", def: "18 horas de luz encendida y 6 horas de oscuridad. El ciclo estándar para la fase vegetativa en interior. Simula los días largos de verano.", visual: "💡 18h luz + 🌑 6h oscuridad = vegetativa" },
        { term: "Ciclo 12/12", def: "12 horas de luz y 12 horas de oscuridad. Simula los días otoñales. Las plantas fotoperiodo reciben esta señal y empiezan a florecer. Se cambia manualmente en el temporizador.", visual: "💡 12h luz + 🌑 12h oscuridad = floración fotoperiodo" },
        { term: "Humedad relativa (HR / RH)", def: "Porcentaje de humedad en el aire. En vegetativa: 50-70%. En floración: 40-50%. Por encima del 60% en floración, riesgo alto de Botrytis.", visual: "💧 % de agua en el aire — mide el higrómetro" },
        { term: "THC", def: "El principal cannabinoide psicoactivo del cannabis. A mayor %, mayor potencia del efecto. Tus semillas tienen entre 20-25% THC.", visual: null },
        { term: "CBD", def: "Cannabinoide no psicoactivo con propiedades medicinales. Las variedades estándar tienen menos del 1%. Las variedades CBD tienen altos niveles de CBD y muy bajo THC.", visual: null },
        { term: "Indica", def: "Tipo genético de cannabis. Plantas más compactas, hojas anchas, efecto relajante y sedante, ciclo de floración más corto. Ideal para uso nocturno.", visual: null },
        { term: "Sativa", def: "Tipo genético de cannabis. Plantas más altas, hojas finas, efecto más energético y cerebral, ciclo de floración más largo. Ideal para uso diurno.", visual: null },
        { term: "Híbrido", def: "Cruce de indica y sativa. La mayoría de variedades modernas son híbridos con porcentaje variable de cada una. Ejemplo: '70% indica / 30% sativa'.", visual: null },
        { term: "Muestra exclusiva (Exclusive Sample)", def: "Pack promocional de pocas semillas (1-3) que los bancos de semillas dan como regalo o muestra. Las de Barney's Farm que tienes son muestras — probablemente 1-2 semillas cada una. Úsalas con cuidado.", visual: null },
      ]
    },
  ];

  const [searchTerm, setSearchTerm] = React.useState('');
  const allTerms = categories.flatMap(c => c.terms.map(t => ({...t, cat: c.cat, color: c.color})));
  const filtered = searchTerm.length > 1
    ? allTerms.filter(t => t.term.toLowerCase().includes(searchTerm.toLowerCase()) || t.def.toLowerCase().includes(searchTerm.toLowerCase()))
    : null;

  return (
    <div>
      <InfoBox>
        Aquí encontrarás todos los términos técnicos explicados en lenguaje de cero conocimiento. Usa la búsqueda para encontrar cualquier palabra que no entiendas de la guía.
      </InfoBox>

      {/* Buscador */}
      <div style={{ marginBottom: "20px" }}>
        <input
          type="text"
          placeholder="🔍 Buscar término... (ej: LST, pH, tricoma)"
          value={searchTerm}
          onChange={e => setSearchTerm(e.target.value)}
          style={{
            width: "100%", padding: "12px 16px", fontSize: "14px",
            background: "#0d1f14", border: "1px solid #2d6a4f",
            borderRadius: "8px", color: "#d8f3dc", outline: "none",
          }}
        />
      </div>

      {/* Resultados de búsqueda */}
      {filtered && (
        <div style={{ marginBottom: "20px" }}>
          <div style={{ fontSize: "10px", letterSpacing: "2px", color: "#52b788", marginBottom: "10px" }}>
            {filtered.length} RESULTADO{filtered.length !== 1 ? 'S' : ''}
          </div>
          {filtered.length === 0 && (
            <div style={{ fontSize: "13px", color: "#74c69d", padding: "12px" }}>No encontrado. Escríbelo en la siguiente cosulta a Claude 😉</div>
          )}
          {filtered.map((item, i) => (
            <div key={i} style={{ background: "#0d1f14", border: `1px solid ${item.color}44`, borderLeft: `3px solid ${item.color}`, borderRadius: "8px", padding: "12px 14px", marginBottom: "8px" }}>
              <div style={{ fontSize: "13px", fontWeight: "bold", color: item.color, marginBottom: "4px" }}>{item.term}</div>
              {item.visual && <div style={{ fontSize: "11px", color: "#52b788", marginBottom: "6px" }}>{item.visual}</div>}
              <div style={{ fontSize: "13px", color: "#b7e4c7", lineHeight: "1.5" }}>{item.def}</div>
            </div>
          ))}
        </div>
      )}

      {/* Categorías completas */}
      {!filtered && categories.map((cat, ci) => (
        <div key={ci} style={{ marginBottom: "28px" }}>
          <div style={{ fontSize: "11px", letterSpacing: "2px", color: cat.color, marginBottom: "12px", paddingBottom: "6px", borderBottom: `1px solid ${cat.color}33` }}>
            {cat.cat}
          </div>
          {cat.terms.map((item, i) => (
            <div key={i} style={{ background: "#0d1f14", border: "1px solid #1b4332", borderLeft: `3px solid ${cat.color}`, borderRadius: "8px", padding: "12px 14px", marginBottom: "8px" }}>
              <div style={{ fontSize: "13px", fontWeight: "bold", color: cat.color, marginBottom: "4px" }}>{item.term}</div>
              {item.visual && (
                <div style={{ fontSize: "11px", color: "#52b788", background: "#162a1e", padding: "4px 8px", borderRadius: "4px", marginBottom: "6px", display: "inline-block" }}>{item.visual}</div>
              )}
              <div style={{ fontSize: "13px", color: "#b7e4c7", lineHeight: "1.5" }}>{item.def}</div>
            </div>
          ))}
        </div>
      ))}
    </div>
  );
}

function GOTEO() {
  return (
    <div>
      <div style={{ background: "#162a1e", border: "1px solid #2d6a4f", borderRadius: "10px", padding: "14px", marginBottom: "20px" }}>
        <p style={{ margin: 0, fontSize: "13px", color: "#95d5b2", lineHeight: "1.7" }}>
          El riego automático por goteo es la mejor decisión para cultivo interior: reduces las aperturas del armario al mínimo, eliminas el riesgo de regar de más por descuido, y el olor hacia la habitación baja drásticamente. Para principiante absoluto es especialmente útil porque elimina el error más común.
        </p>
      </div>

      <SectionTitle>QUÉ COMPRAR</SectionTitle>
      <Step num={1} text="Kit de riego por goteo con temporizador digital — ~20–35€" why="Busca un kit que incluya: temporizador, bomba o sistema de gravedad, tubos de 4–6mm, y goteros regulables. En Amazon busca 'kit riego goteo interior plantas' o 'drip irrigation kit indoor'. No necesitas nada caro." />
      <Step num={2} text="Depósito de agua 15–20L con tapa — ~10–15€" why="El depósito va FUERA del armario. El tubo pasa por una de las aperturas laterales (todos los armarios tienen). Así rellenas el agua sin abrir la tienda nunca." />
      <Step num={3} text="Tubo silicona alimentario 6mm — 2–3 metros — ~5€" why="Para conectar el depósito exterior con los goteros dentro. El tubo de silicona es flexible y no transfiere sabores ni sustancias al agua." />

      <SectionTitle>INSTALACIÓN PASO A PASO</SectionTitle>
      <Step num={1} text="Coloca el depósito en una silla o estante a la misma altura o ligeramente más alto que las macetas, FUERA del armario." why="La gravedad es suficiente para mover el agua si el depósito está a la misma altura o más alto. No necesitas bomba eléctrica para un setup de 2 plantas." />
      <Step num={2} text="Pasa el tubo principal por una de las aperturas laterales pequeñas del armario. Hay varias de diferentes tamaños — elige la más ajustada al tubo." why="Estas aperturas están cosidas con velcro o goma para sellar alrededor de tubos y cables. El armario las tiene precisamente para esto." />
      <Step num={3} text="Dentro del armario, divide el tubo principal en 2 ramales (uno por planta) con un conector en Y." />
      <Step num={4} text="Al final de cada ramal coloca un gotero regulable. Ponlo en el borde de la maceta, no en el centro." why="Si el gotero está en el centro cae directamente sobre las raíces principales. En el borde el agua se distribuye mejor y las raíces crecen buscándola." />
      <Step num={5} text="Conecta el temporizador entre el depósito y el tubo principal. Ponlo fuera del armario para poder ajustarlo sin abrir." />
      <Step num={6} text="Haz una prueba con agua sola: abre el gotero al mínimo y mira cuánto tarda en salir medio litro. Anota el tiempo." why="Necesitas saber el caudal real para programar el temporizador correctamente. Cada gotero es diferente aunque pongan lo mismo en la caja." />

      <SectionTitle>CONFIGURACIÓN DEL TEMPORIZADOR</SectionTitle>
      <Step num={7} text="Fase vegetativa (semanas 2–4): programa 1 riego al día, por la mañana, de 3–5 minutos." why="Por la mañana coincide con el inicio del ciclo de luz. Las plantas absorben más agua con luz. Empieza corto — siempre puedes alargar, nunca puedes deshacer el exceso de agua." />
      <Step num={8} text="Fase floración (semanas 4–10): 1–2 riegos al día de 4–6 minutos." why="En floración la planta consume más agua. Pero sigue siendo mejor quedarse corto y ajustar que pasarse." />
      <Step num={9} text="Cómo saber si el tiempo está bien: al día siguiente del riego, mete el dedo en el sustrato. Si está húmedo a 2cm: perfecto. Si está empapado: reduce el tiempo. Si está seco: auméntalo." />
      <Step num={10} text="IMPORTANTE: los primeros 7–10 días desde que plantas la semilla, el riego automático NO — usa spray a mano. La plántula es demasiado pequeña y frágil." why="El goteo está pensado para plantas con raíces desarrolladas. Una plántula de 3cm puede ahogarse con el caudal mínimo de un gotero." />

      <SectionTitle>PREPARACIÓN DEL AGUA EN EL DEPÓSITO</SectionTitle>
      <Step num={11} text="Llena el depósito. Añade los nutrientes según la fase (Grow o Bloom). Ajusta el pH a 6.2–6.5 con pH Down. Tapa." />
      <Step num={12} text="El agua preparada aguanta bien 3–4 días en el depósito con tapa. Prepara solo lo que vayas a usar en ese tiempo." why="Más de 4–5 días el agua puede empezar a tener algas o bacterias, especialmente con nutrientes orgánicos. Con tapa y en lugar fresco dura bien." />
      <Step num={13} text="Cada vez que rellenes el depósito: mide el pH de nuevo y ajusta. No asumas que el pH es el mismo que la vez anterior." />

      <SectionTitle>RUTINA SEMANAL CON GOTEO AUTOMÁTICO</SectionTitle>
      {[
        { dia: "Cada 2–3 días", tarea: "Rellenar depósito y ajustar pH/nutrientes. Sin abrir el armario." },
        { dia: "1 vez por semana", tarea: "Abrir el armario (con protocolo extractor): revisión visual rápida, bajar la luz si creció, comprobar que los goteros no están obstruidos." },
        { dia: "Cuando toca trasplantar", tarea: "Apertura necesaria. Aprovecha para limpiar los goteros con agua limpia." },
      ].map((r, i) => (
        <div key={i} style={{
          background: "#0d1f14", border: "1px solid #1b4332",
          borderRadius: "8px", padding: "12px 14px", marginBottom: "8px",
          display: "flex", gap: "12px",
        }}>
          <div style={{ fontSize: "11px", fontWeight: "bold", color: "#52b788", minWidth: "110px", flexShrink: 0 }}>{r.dia}</div>
          <div style={{ fontSize: "13px", color: "#b7e4c7", lineHeight: "1.5" }}>{r.tarea}</div>
        </div>
      ))}

      <SectionTitle color="#e63946">🚫 ERRORES COMUNES</SectionTitle>
      <ErrorCard error="Programar el goteo igual todo el cultivo" consecuencia="En germinación y plántula el goteo mata. En floración puede quedarse corto." fix="Ajusta el temporizador en cada fase. No es lo mismo semana 1 que semana 7." />
      <ErrorCard error="No revisar que los goteros funcionan" consecuencia="Un gotero obstruido y una planta sin agua durante 2 días puede ser fatal." fix="Una vez por semana en la revisión visual, comprueba que gotea correctamente." />
      <ErrorCard error="Preparar el depósito y no medir el pH" consecuencia="El agua con nutrientes cambia el pH. Si no mides después de añadirlos, estás regando a pH incorrecto." fix="Añade nutrientes → después mide y ajusta pH. Siempre en ese orden." />
    </div>
  );
}

function PODA() {
  return (
    <div>
      <div style={{ background: "#1a2a10", border: "1px solid #4a7a20", borderRadius: "10px", padding: "14px", marginBottom: "20px" }}>
        <p style={{ margin: "0 0 8px", fontSize: "13px", color: "#c5e8a0", lineHeight: "1.6", fontWeight: "bold" }}>
          ⚠️ Regla de oro para autoflorecientes: menos es más.
        </p>
        <p style={{ margin: 0, fontSize: "13px", color: "#95d5b2", lineHeight: "1.6" }}>
          Las autoflorecientes tienen un ciclo de vida fijo — no pueden "recuperar tiempo perdido" como las de fotoperiodo. Cualquier estrés (cortes, daños) come días de su vida útil. La poda agresiva en autos puede reducir el rendimiento final. Con esto en mente, hay técnicas seguras y técnicas a evitar.
        </p>
      </div>

      <SectionTitle color="#4a7a20">✅ LO QUE SÍ PUEDES HACER</SectionTitle>

      <div style={{ background: "#0d1f14", border: "1px solid #1b4332", borderRadius: "10px", padding: "14px", marginBottom: "12px" }}>
        <div style={{ fontSize: "14px", fontWeight: "bold", color: "#74c69d", marginBottom: "8px" }}>LST — Low Stress Training (doblar, no cortar)</div>
        <div style={{ fontSize: "13px", color: "#b7e4c7", lineHeight: "1.6", marginBottom: "10px" }}>
          La técnica más recomendada para principiantes con autos. Consiste en doblar suavemente las ramas hacia fuera y fijarlas con clips o cuerdas para que la planta crezca más horizontal. Así la luz llega a más puntos y produces más cogollos sin cortar nada.
        </div>
        <div style={{ fontSize: "10px", letterSpacing: "2px", color: "#52b788", marginBottom: "8px" }}>CÓMO HACERLO</div>
        <Step num={1} text="Semana 2–3 de vegetativa: cuando la planta tenga 4–5 nudos y unos 15cm." />
        <Step num={2} text="Dobla suavemente la rama principal hacia un lado, en ángulo de ~45°. No fuerces — si notas resistencia, para." why="Las ramas jóvenes son flexibles. Si intentas doblar una rama leñosa y gruesa se rompe. Hazlo temprano cuando aún son flexibles." />
        <Step num={3} text="Fija la rama doblada con un clip de bonsái, una pinza de ropa pequeña, o cuerda suave atada a la maceta." />
        <Step num={4} text="En 24–48h verás que las ramas laterales empiezan a crecer hacia arriba buscando la luz. Eso es exactamente lo que quieres." />
        <Step num={5} text="Repite con las ramas laterales si se vuelven a poner verticales. El objetivo es una planta en forma de abanico, no de árbol." />
        <div style={{ background: "#162a1e", borderLeft: "3px solid #40916c", padding: "8px 10px", borderRadius: "0 6px 6px 0", fontSize: "12px", color: "#74c69d", lineHeight: "1.5", marginTop: "8px" }}>
          <span style={{ color: "#52b788", fontWeight: "bold" }}>Qué necesitas comprar: </span>Clips de bonsái (pack 20 uds, ~5€) o simplemente cuerda de jardín suave (~3€). Nada más.
        </div>
      </div>

      <div style={{ background: "#0d1f14", border: "1px solid #1b4332", borderRadius: "10px", padding: "14px", marginBottom: "12px" }}>
        <div style={{ fontSize: "14px", fontWeight: "bold", color: "#74c69d", marginBottom: "8px" }}>ScrOG — Screen of Green (para fotoperiodo)</div>
        <div style={{ fontSize: "13px", color: "#b7e4c7", lineHeight: "1.6", marginBottom: "10px" }}>
          Red de cultivo horizontal que mantiene la altura bajo control y maximiza los puntos de floración bajo una luz. Solo viable para fotoperiodo — tienes tiempo para entrenar. No para autoflorecientes.
        </div>
        <div style={{ fontSize: "10px", letterSpacing: "2px", color: "#52b788", marginBottom: "8px" }}>CÓMO HACERLO</div>
        <Step num={1} text="Fotoperiodo: cuando la planta llegue a semana 3–4 de vegetativa (20–30cm de altura), instala la red a 20–25cm por encima de la planta." why="Necesitas espacio bajo la red para que crezca. Demasiado alta = desperdicio de la zona; demasiado baja = la planta no cabe." />
        <Step num={2} text="Red: malla elástica 5×5cm o hilo de jardinería formando una rejilla. Cuesta ~20-30€ o hazla tú con cuerda." />
        <Step num={3} text="Cuando las ramas crecen hacia la luz, pasa cada rama que sale de la red por debajo de ella, horizontalmente. El objetivo es llenar toda la red de puntas de crecimiento a la misma altura." />
        <Step num={4} text="A medida que las ramas nuevas crecen hacia arriba, mételas bajo la red también. Al final tendrás una planta plana como una sábana." />
        <Step num={5} text="Cuando el 80% de la red está llena de puntas verdes, cambia a 12/12h." why="Ahora todos los puntos están a la misma distancia de la luz y florecerán uniformemente. El rendimiento es 30-40% mayor que sin ScrOG." />
        <div style={{ background: "#162a1e", borderLeft: "3px solid #40916c", padding: "8px 10px", borderRadius: "0 6px 6px 0", fontSize: "12px", color: "#74c69d", lineHeight: "1.5", marginTop: "8px" }}>
          <span style={{ color: "#52b788", fontWeight: "bold" }}>Material: </span>Red de ScrOG (20-30€) o cuerda de jardinería y dos soportes, o simplemente clips fijando hilo a los lados del armario. No es complicado.
        </div>
      </div>

      <div style={{ background: "#0d1f14", border: "1px solid #1b4332", borderRadius: "10px", padding: "14px", marginBottom: "12px" }}>
        <div style={{ fontSize: "14px", fontWeight: "bold", color: "#74c69d", marginBottom: "8px" }}>Defoliación leve (quitar hojas que bloquean luz)</div>
        <div style={{ fontSize: "13px", color: "#b7e4c7", lineHeight: "1.6", marginBottom: "10px" }}>
          Consiste en quitar hojas grandes que hacen sombra a los cogollos que están creciendo debajo. No es cortar ramas — solo quitar hojas individualmente.
        </div>
        <Step num={1} text="Solo en vegetativa o inicio de floración — nunca en floración avanzada." why="En floración avanzada la planta ya no puede recuperarse del estrés y cada hoja quitada es energía que pierde." />
        <Step num={2} text="Quita solo las hojas grandes (fan leaves) que estén tapando completamente un punto de crecimiento." />
        <Step num={3} text="Máximo 2–3 hojas por sesión. Espera 3–4 días entre sesiones." why="Quitar demasiadas hojas a la vez es un estrés importante. Las hojas son los paneles solares de la planta — quitarlas reduce su capacidad de fotosíntesis." />
        <Step num={4} text="Corta la hoja desde la base del peciolo (el rabillo). Con tijeras limpias, corte limpio." />
        <div style={{ background: "#162a1e", borderLeft: "3px solid #40916c", padding: "8px 10px", borderRadius: "0 6px 6px 0", fontSize: "12px", color: "#74c69d", lineHeight: "1.5", marginTop: "8px" }}>
          <span style={{ color: "#52b788", fontWeight: "bold" }}>Material: </span>Tijeras de punta fina. Limpia con alcohol isopropílico antes de usar.
        </div>
      </div>

      <SectionTitle color="#e63946">❌ LO QUE NO DEBES HACER CON AUTOFLORECIENTES</SectionTitle>

      <ErrorCard
        error="Topping (cortar la punta principal)"
        consecuencia="En fotoperiodo genera dos puntas principales. En autos come 1–2 semanas de vida que no recupera nunca. Rendimiento final peor."
        fix="Con autos nunca hagas topping. Es técnica de fotoperiodo."
      />
      <ErrorCard
        error="FIM (técnica similar al topping)"
        consecuencia="Mismo problema. Las autos no tienen tiempo de recuperación."
        fix="Reserva estas técnicas para cuando tengas experiencia con fotoperiodo."
      />
      <ErrorCard
        error="Defoliación agresiva (quitar muchas hojas a la vez)"
        consecuencia="La planta entra en estrés severo y para de crecer durante varios días — días que con autos no puedes recuperar."
        fix="Máximo 2–3 hojas cada 3–4 días. Si tienes dudas, no quites nada."
      />
      <ErrorCard
        error="Podar en floración avanzada (semana 4+)"
        consecuencia="Los cogollos están en pleno desarrollo. Cualquier estrés reduce el rendimiento final directamente."
        fix="Toda la poda y LST en vegetativa o primeras 2 semanas de floración. Después, manos fuera."
      />

      <SectionTitle>PARA TU PRIMERA VEZ — RECOMENDACIÓN HONESTA</SectionTitle>
      <div style={{ background: "#1b4332", borderRadius: "10px", padding: "14px" }}>
        <p style={{ margin: "0 0 8px", fontSize: "13px", color: "#d8f3dc", lineHeight: "1.6" }}>
          En la primera cosecha, haz solo LST si te apetece experimentar. Si no, no hagas nada de poda — una planta sin tocar con buena luz, buen riego y buenos nutrientes da mejor resultado que una planta podada incorrectamente.
        </p>
        <p style={{ margin: 0, fontSize: "13px", color: "#95d5b2", lineHeight: "1.6" }}>
          El LST es la única técnica que no penaliza si la haces mal — en el peor caso la rama vuelve a su posición. Empieza por ahí en la segunda o tercera ronda cuando ya controles el resto.
        </p>
      </div>
    </div>
  );
}

// ─── EXTERIOR COMPONENTS ─────────────────────────────────────────────────────

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

function COMPRA_EXT() {
  const priorityColor = { "ESENCIAL": "#e63946", "IMPORTANTE": "#f4a261", "ÚTIL": "#52b788" };
  const sections = [
    {
      title: "SEMILLAS",
      items: [
        { name: "Semillas feminizadas fotoperiodo (3–5 unidades)", price: "30–80€", priority: "ESENCIAL", detail: "Para exterior en zona mediterránea, el fotoperiodo es la mejor opción — plantas enormes que florecen solas en agosto cuando los días se acortan. Busca variedades resistentes al moho. Marcas fiables: Royal Queen Seeds, FastBuds, Barney's Farm.", duracion: "1 temporada por semilla" },
      ]
    },
    {
      title: "SUSTRATO Y MACETAS",
      items: [
        { name: "BioBizz Light Mix — saco 50L", price: "12–25€", priority: "ESENCIAL", detail: "Para mezclar con la tierra del spot al 50/50 al rellenar el hoyo de plantación. El Light Mix mejora cualquier suelo forestal dándole mejor estructura y nutrientes de arranque sin quemar las raíces.", duracion: "1 temporada" },
        { name: "Maceta biodegradable 11cm (x5)", price: "5–15€", priority: "ESENCIAL", detail: "Para la fase de plántula en casa antes de trasplantar al exterior. Las biodegradables permiten enterrar la maceta entera sin sacar la planta, eliminando el estrés de trasplante. Alternativa gratuita: vasos de yogur con agujeros.", duracion: "1 uso" },
        { name: "Maceta de tela 20–30L (opcional)", price: "10–20€", priority: "ÚTIL", detail: "Solo si el suelo del spot es muy pedregoso o poco profundo. Plantar directamente en suelo con buen hoyo siempre es mejor — las raíces crecen sin límite y la planta puede ser enorme.", duracion: "Reutilizable" },
      ]
    },
    {
      title: "NUTRIENTES",
      items: [
        { name: "BioBizz Bio·Grow — 1L", price: "15–20€", priority: "ESENCIAL", detail: "Fertilizante orgánico para la fase vegetativa (crecimiento). Rico en nitrógeno. Dosis: 2–4ml/L de agua. Empieza en la semana 3 desde que la planta está en el exterior. 1L da para toda una temporada con 3 plantas.", duracion: "1 temporada (3 plantas)" },
        { name: "BioBizz Bio·Bloom — 1L", price: "15–20€", priority: "ESENCIAL", detail: "Fertilizante orgánico para la fase de floración. Rico en fósforo y potasio para desarrollar cogollos. Dosis: 2–4ml/L. Se usa desde que aparecen los primeros pistilos hasta 2 semanas antes de cosechar (lavado de raíces).", duracion: "1 temporada (3 plantas)" },
        { name: "Bacillus thuringiensis (Bt) — 250ml", price: "10–20€", priority: "ESENCIAL", detail: "Bacteria natural que elimina orugas sin dañar la planta ni el ecosistema. El tratamiento preventivo más importante en exterior — en cualquier bosque hay orugas. Busca 'Dipel' o 'Bacillus thuringiensis var. kurstaki'. En growshop o jardinería.", duracion: "1 temporada" },
        { name: "Jabón potásico — 500ml", price: "5–10€", priority: "IMPORTANTE", detail: "Para pulgones y ácaros si aparecen. Producto ecológico y no tóxico. Diluye 5ml/L y aplica al atardecer sobre el envés de las hojas, nunca con sol directo.", duracion: "1 temporada" },
      ]
    },
    {
      title: "CONTROL DE pH",
      items: [
        { name: "pH Down — 500ml", price: "8–15€", priority: "ESENCIAL", detail: "Para bajar el pH del agua del grifo (suele estar en 7–8). Las plantas solo absorben nutrientes entre pH 6.0 y 6.8. Unas pocas gotas por litro son suficientes. 500ml te dura años.", duracion: "Años" },
        { name: "pHmetro digital", price: "15–30€", priority: "ESENCIAL", detail: "Mide el pH del agua antes de cada riego. Sin él cultivas a ciegas. Guárdalo siempre con la punta húmeda en su solución de almacenamiento. Calibra una vez al mes con solución de calibración.", duracion: "Permanente" },
        { name: "Solución de calibración pH 7 — 250ml", price: "5–10€", priority: "IMPORTANTE", detail: "Para calibrar el pHmetro y asegurarte de que mide bien. Sin calibración el aparato pierde precisión con el tiempo.", duracion: "Años" },
      ]
    },
    {
      title: "HERRAMIENTAS DE CULTIVO",
      items: [
        { name: "Pala de jardinería", price: "8–20€", priority: "ESENCIAL", detail: "Para hacer el hoyo de plantación de mínimo 50×50×50cm. El tamaño del hoyo es el factor que más impacta en el rendimiento final — cuanto más grande y con mejor sustrato, más grande la planta.", duracion: "Permanente" },
        { name: "Estacas de bambú (pack) + cuerda suave de jardín", price: "5–10€", priority: "IMPORTANTE", detail: "Para sujetar ramas en floración cuando los cogollos pesan. Clava la estaca a 5cm del tallo, ata con lazo en forma de 8 para que no corte la circulación. Alternativa gratuita: ramas rectas del bosque.", duracion: "Reutilizable" },
        { name: "Spray de 1L vacío", price: "2–5€", priority: "ESENCIAL", detail: "Para aplicar tratamientos foliares (Bt, jabón potásico). Puedes reutilizar cualquier spray vacío de limpieza bien lavado.", duracion: "Permanente" },
        { name: "Guantes de nitrilo (caja)", price: "5–10€", priority: "IMPORTANTE", detail: "Para la cosecha y manicura. La resina de los cogollos es extremadamente pegajosa y difícil de quitar sin disolvente.", duracion: "Varias cosechas" },
      ]
    },
    {
      title: "AGUA Y RIEGO",
      items: [
        { name: "Garrafas o bidón de transporte 20L", price: "5–20€", priority: "ESENCIAL", detail: "Para llevar agua al spot. En julio una planta grande puede necesitar 5–10L al día. Calcula cuánto puedes llevar por visita y con qué frecuencia puedes ir. Es el factor logístico más importante del cultivo exterior.", duracion: "Permanente" },
        { name: "Sistema riego por goteo (opcional)", price: "15–40€", priority: "ÚTIL", detail: "Tubos, goteros y temporizador a pilas conectados a un bidón elevado. Permite espaciar las visitas al spot de días a semanas. En exterior funciona por gravedad — el bidón debe estar 50–80cm por encima de los goteros.", duracion: "Permanente" },
      ]
    },
    {
      title: "COSECHA Y CURADO",
      items: [
        { name: "Tijeras de punta fina (manicura)", price: "10–20€", priority: "ESENCIAL", detail: "Para recortar las hojas pequeñas alrededor de los cogollos en la cosecha. Limpia con alcohol isopropílico cada 15 minutos — la resina las atasca rápido.", duracion: "Permanente" },
        { name: "Botes Mason jar herméticos 1L (x4–6)", price: "15–25€", priority: "ESENCIAL", detail: "Para el curado de los cogollos. Deben ser de cristal hermético. Llénalos al 75%. Mínimo 2 semanas de curado — 4 semanas es notablemente mejor.", duracion: "Permanente" },
        { name: "Higrómetros mini para botes (x2–3)", price: "6–12€", priority: "IMPORTANTE", detail: "Van dentro de los botes durante el curado. La humedad dentro del bote debe estar entre 58–65%. Sin higrómetro el curado es a ciegas.", duracion: "Permanente" },
        { name: "Alcohol isopropílico 99% — 250ml", price: "4–8€", priority: "IMPORTANTE", detail: "Para limpiar las tijeras de manicura de la resina. También para limpiar el pHmetro y cualquier herramienta.", duracion: "Mucho tiempo" },
        { name: "Bolsas herméticas grandes (x5)", price: "3–5€", priority: "ESENCIAL", detail: "Para transportar la cosecha desde el bosque. El olor en cosecha es muy intenso — sin bolsas herméticas es un problema real en el coche.", duracion: "1 cosecha" },
      ]
    },
  ];

  return (
    <div>
      <InfoBox>
        Cultivo exterior en bosque: sin armario, sin electricidad, sin extractor. El sol hace todo el trabajo. Una planta de fotoperiodo bien cuidada puede dar 200–500g — mucho más que cualquier armario doméstico. El coste inicial es mínimo comparado con el interior.
      </InfoBox>
      <div style={{ background: "#1a2a10", border: "1px solid #4a7a20", borderRadius: "10px", padding: "14px", marginBottom: "20px" }}>
        <div style={{ fontSize: "10px", letterSpacing: "2px", color: "#74c69d", marginBottom: "10px" }}>PRESUPUESTO ESTIMADO EXTERIOR</div>
        {[
          { label: "Inversión inicial total", value: "~150–300€", bold: true },
          { label: "Semillas (3–5 unidades)", value: "30–80€" },
          { label: "Sustrato + nutrientes", value: "60–80€" },
          { label: "Herramientas y accesorios", value: "40–80€" },
          { label: "Cosecha y curado", value: "30–60€" },
          { label: "Gasto eléctrico", value: "0€" },
          { label: "Rendimiento estimado (3 plantas)", value: "300–900g" },
          { label: "Coste temporada siguiente", value: "~40–60€ (solo semillas y nutrientes)" },
        ].map((row, i) => (
          <div key={i} style={{ display: "flex", justifyContent: "space-between", padding: "5px 0", borderBottom: i < 7 ? "1px solid #1b4332" : "none" }}>
            <span style={{ fontSize: "12px", color: "#74c69d" }}>{row.label}</span>
            <span style={{ fontSize: "12px", color: "#d8f3dc", fontWeight: row.bold ? "bold" : "normal" }}>{row.value}</span>
          </div>
        ))}
      </div>
      <div style={{ display: "flex", gap: "12px", marginBottom: "20px" }}>
        {[["ESENCIAL", "#e63946"], ["IMPORTANTE", "#f4a261"], ["ÚTIL", "#52b788"]].map(([label, color]) => (
          <div key={label} style={{ display: "flex", alignItems: "center", gap: "5px" }}>
            <div style={{ width: "8px", height: "8px", borderRadius: "50%", background: color }} />
            <span style={{ fontSize: "10px", color: "#74c69d" }}>{label}</span>
          </div>
        ))}
      </div>
      {sections.map((section, si) => (
        <div key={si} style={{ marginBottom: "24px" }}>
          <div style={{ fontSize: "10px", letterSpacing: "2px", color: "#52b788", marginBottom: "10px", paddingBottom: "6px", borderBottom: "1px solid #1b4332" }}>
            {section.title}
          </div>
          {section.items.map((item, ii) => (
            <div key={ii} style={{
              background: "#0d1f14", border: "1px solid #1b4332",
              borderLeft: `3px solid ${priorityColor[item.priority]}`,
              borderRadius: "10px", padding: "14px", marginBottom: "10px",
            }}>
              <div style={{ display: "flex", justifyContent: "space-between", marginBottom: "8px" }}>
                <div style={{ fontSize: "14px", color: "#d8f3dc", flex: 1, paddingRight: "10px" }}>{item.name}</div>
                <div style={{ textAlign: "right", flexShrink: 0 }}>
                  <div style={{ fontSize: "13px", fontWeight: "bold", color: "#95d5b2" }}>{item.price}</div>
                  <div style={{ fontSize: "9px", color: priorityColor[item.priority], marginTop: "2px" }}>{item.priority}</div>
                </div>
              </div>
              <div style={{ fontSize: "12px", color: "#74c69d", lineHeight: "1.5", marginBottom: "4px" }}>{item.detail}</div>
              <div style={{ fontSize: "11px", color: "#40916c" }}>⏳ {item.duracion}</div>
            </div>
          ))}
        </div>
      ))}
    </div>
  );
}

function SEMILLAS_EXT() {
  return (
    <div>
      <InfoBox>
        En exterior con fotoperiodo la planta crece de primavera a verano ganando tamaño máximo. En agosto-septiembre florece sola cuando los días se acortan por debajo de 14 horas de luz. Más tamaño en vegetativa = más rendimiento en floración. Es el ciclo más natural y eficiente.
      </InfoBox>

      <SectionTitle>FOTOPERIODO VS AUTOFLORECIENTE EN EXTERIOR</SectionTitle>
      {[
        { tipo: "✅ Fotoperiodo — Recomendado para exterior", color: "#52b788", puntos: [
          "Florece sola en agosto sin que hagas nada — los días cortos lo activan",
          "Vegetativa larga (mayo-julio): la planta alcanza su máximo potencial de tamaño",
          "Rendimiento: 200–500g+ por planta bien cuidada",
          "Plantas de 1–2 metros o más según variedad",
          "Una cosecha al año — pero de mucho volumen",
          "Necesita empezar en primavera para aprovechar toda la vegetativa",
        ]},
        { tipo: "⚠️ Autofloreciente — Válida con matices", color: "#f4a261", puntos: [
          "Ciclo corto de 70-80 días — puedes cosechar en julio antes del calor/lluvia",
          "Rendimiento menor: 50–150g por planta",
          "Plantas de 60–100cm: más discretas",
          "Válida si tienes prisa, el spot tiene limitaciones de altura, o quieres evitar el otoño húmedo",
          "Puedes hacer 2 cosechas en temporada si empiezas pronto",
        ]},
      ].map((op, i) => (
        <div key={i} style={{ background: "#0d1f14", border: `1px solid ${op.color}33`, borderLeft: `3px solid ${op.color}`, borderRadius: "10px", padding: "14px", marginBottom: "12px" }}>
          <div style={{ fontSize: "13px", fontWeight: "bold", color: op.color, marginBottom: "10px" }}>{op.tipo}</div>
          {op.puntos.map((p, j) => (
            <div key={j} style={{ fontSize: "12px", color: "#b7e4c7", marginBottom: "5px" }}>→ {p}</div>
          ))}
        </div>
      ))}

      <SectionTitle>QUÉ BUSCAR AL ELEGIR UNA SEMILLA EXTERIOR</SectionTitle>
      <Step num={1} text="Feminizada — imprescindible para principiante." why="Las plantas macho no producen cogollos y polinizan a las hembras arruinando la cosecha. Sin experiencia, identificar machos a tiempo es difícil. Las feminizadas eliminan ese riesgo — todas son hembra." />
      <Step num={2} text="Resistente al moho — busca esta característica en la descripción de la variedad." why="En otoño las noches son húmedas. La Botrytis (moho gris) puede destruir los cogollos en días desde dentro. Una variedad resistente es el seguro más importante para el exterior mediterráneo." />
      <Step num={3} text="Indica o indica-dominante — más compacta, más densa y ciclo de floración más corto." why="Las sativas pueden llegar a 3+ metros y necesitan 12+ semanas de floración — no encajan bien en exterior mediterráneo. Las indicas son más manejables." />
      <Step num={4} text="Floración de 8-9 semanas máximo — para cosechar antes de las lluvias de octubre." />
      <Step num={5} text="Adaptada al clima mediterráneo — muchas marcas etiquetan esto explícitamente." />

      <SectionTitle>VARIEDADES RECOMENDADAS PARA EXTERIOR MEDITERRÁNEO</SectionTitle>
      {[
        { name: "🏆 Critical (Royal Queen Seeds)", indica: "80%", thc: "20%", floracion: "7–8 semanas", rendimiento: "400–500g/planta", moho: "Alta ✅", nota: "La variedad más cultivada en exterior mediterráneo. Robusta, rápida, altísima resistencia al moho. Producción enorme para el tiempo de floración. La más recomendada para principiantes." },
        { name: "Northern Lights (Royal Queen Seeds)", indica: "90%", thc: "18%", floracion: "7–8 semanas", rendimiento: "200–300g/planta", moho: "Alta ✅", nota: "La indica clásica. Muy compacta para ser de fotoperiodo, discreta en el bosque, muy resistente al moho y las plagas. Efecto sedante y relajante. Ideal para zonas con menos sol." },
        { name: "Purple Punch (Barney's Farm)", indica: "80%", thc: "22%", floracion: "8–9 semanas", rendimiento: "300–400g/planta", moho: "Media-alta", nota: "Cogollos morados espectaculares. Sabor a frutas del bosque. Algo más sensible al moho que las anteriores — requiere más atención en septiembre. Muy popular en exterior." },
        { name: "OG Kush Auto (FastBuds) — si prefieres auto", indica: "75%", thc: "21%", floracion: "8 semanas (auto)", rendimiento: "100–200g/planta", moho: "Media", nota: "La mejor autofloreciente para exterior si quieres cosechar en julio y evitar el otoño. Mucho menos rendimiento que el fotoperiodo pero más sencilla de gestionar en tiempo." },
      ].map((v, i) => (
        <div key={i} style={{ background: "#0d1f14", border: "1px solid #1b4332", borderLeft: `3px solid ${i === 0 ? "#52b788" : "#2d6a4f"}`, borderRadius: "10px", padding: "14px", marginBottom: "10px" }}>
          {i === 0 && <div style={{ fontSize: "9px", color: "#52b788", letterSpacing: "2px", marginBottom: "6px" }}>⭐ RECOMENDADA PRINCIPAL</div>}
          <div style={{ fontSize: "14px", color: "#d8f3dc", fontWeight: "bold", marginBottom: "8px" }}>{v.name}</div>
          <div style={{ display: "grid", gridTemplateColumns: "1fr 1fr", gap: "6px", marginBottom: "8px" }}>
            {[["Genética", v.indica + " indica"], ["THC", v.thc], ["Floración", v.floracion], ["Rendimiento", v.rendimiento], ["Resist. moho", v.moho]].map(([k, val]) => (
              <div key={k} style={{ fontSize: "11px" }}>
                <span style={{ color: "#40916c" }}>{k}: </span>
                <span style={{ color: "#95d5b2" }}>{val}</span>
              </div>
            ))}
          </div>
          <div style={{ fontSize: "12px", color: "#74c69d", lineHeight: "1.5" }}>{v.nota}</div>
        </div>
      ))}

      <SectionTitle>CUÁNTAS SEMILLAS PLANTAR</SectionTitle>
      <Step num={1} text="Primera temporada: 2–3 plantas máximo." why="Con más plantas tienes más trabajo de riego, más tratamientos, más visitas. Para aprender el proceso 2-3 plantas es suficiente y manejable. Con experiencia puedes escalar." />
      <Step num={2} text="Germina siempre 1-2 semillas extra de reserva." why="La tasa de germinación incluso con buenas semillas es del 80-90%. Tener reservas evita quedarte sin plantas si alguna falla en la germinación o en las primeras semanas." />
      <Step num={3} text="Guarda las semillas sobrantes en bote de cristal hermético con sílica gel en la nevera. Aguantan 2-5 años perfectamente." />

      <SectionTitle color="#e63946">⚠️ HERMAFRODITAS — QUÉ SON Y QUÉ HACER</SectionTitle>
      <div style={{ background: "#1a0a0a", border: "1px solid #4a1010", borderRadius: "10px", padding: "14px", marginBottom: "12px" }}>
        <div style={{ fontSize: "13px", fontWeight: "bold", color: "#ff6b6b", marginBottom: "8px" }}>Definición</div>
        <div style={{ fontSize: "12px", color: "#c9a0a0", marginBottom: "12px", lineHeight: "1.5" }}>
          Una planta hermafrodita desarrolla tanto pistilos (órgano sexual femenino) como sacos de polen (órgano sexual masculino) en la misma planta. Aunque las semillas sean feminizadas, bajo estrés pueden hermafroditar. Cuando hermafroditan, polinizan sus propios cogollos y generan semillas — arruinando la cosecha.
        </div>
        <div style={{ fontSize: "13px", fontWeight: "bold", color: "#ff6b6b", marginBottom: "8px" }}>Causas del hermafroditismo</div>
        <div style={{ fontSize: "12px", color: "#c9a0a0", marginBottom: "12px", lineHeight: "1.5" }}>
          <strong>Genética débil:</strong> algunas variedades tendentes a hermafroditar bajo estrés (es raro pero pasa).<br/>
          <strong>Calor extremo:</strong> temperaturas {'>'}30°C sostenidas en floración pueden disparar el estrés.<br/>
          <strong>Falta de agua:</strong> sequía extrema en plena floración causa estrés severo.<br/>
          <strong>Luz nocturna:</strong> si la planta recibe ráfagas de luz durante la noche en floración, interpreta que el ciclo se rompió y puede hermafroditar como reacción evolutiva (crear semillas antes de morir).
        </div>
        <div style={{ fontSize: "13px", fontWeight: "bold", color: "#ff6b6b", marginBottom: "8px" }}>Cómo detectarlos</div>
        <div style={{ fontSize: "12px", color: "#c9a0a0", marginBottom: "12px", lineHeight: "1.5" }}>
          Observa el cogollo durante la floración. Los sacos de polen parecen <strong>pequeños plátanos o conos</strong> entre los pistilos blancos y normales. Están en las axilas y nudos. Si ves estas estructuras, la planta es hermafrodita.
        </div>
        <div style={{ fontSize: "13px", fontWeight: "bold", color: "#ff6b6b", marginBottom: "8px" }}>Qué hacer si encuentras uno</div>
        <div style={{ fontSize: "12px", color: "#c9a0a0", marginBottom: "8px", lineHeight: "1.5" }}>
          <strong>Opción 1 — Eliminar la planta (más seguro):</strong> si es temprano (semana 2–4 de floración), elimina toda la planta inmediatamente. Un solo saco que suelte polen puede polinizar todas tus plantas y todo el bosque cercano. No merece la pena.
        </div>
        <div style={{ fontSize: "12px", color: "#c9a0a0", marginBottom: "12px", lineHeight: "1.5" }}>
          <strong>Opción 2 — Remover sacos manualmente (alto riesgo):</strong> si está muy avanzada la floración (semana 8+) y los sacos son pocos, puedes intentar retirarlos manualmente cada día con unas pinzas, con guantes gruesos, en las visitas. El riesgo es que se rompa un saco sin verlo y hagas más daño. Solo si tienes mucha experiencia.
        </div>
        <div style={{ fontSize: "13px", fontWeight: "bold", color: "#ff6b6b", marginBottom: "8px" }}>Consecuencia de no actuar</div>
        <div style={{ fontSize: "12px", color: "#c9a0a0", lineHeight: "1.5" }}>
          Si no actúas y los sacos liberan polen, toda tu cosecha estará llena de semillas. Los cogollos serán inutilizables — cada bocado tiene una semilla. Meses de trabajo por nada. Es la peor forma de perder una cosecha.
        </div>
      </div>
    </div>
  );
}

function UBICACION() {
  return (
    <div>
      <InfoBox>
        Elegir bien el spot es la decisión más importante de todo el cultivo exterior. Un buen spot puede doblar el rendimiento respecto a uno mediocre. No plantes en el primer sitio que encuentres — dedica tiempo a explorar y analizar antes de comprometerte.
      </InfoBox>

      <SectionTitle>CRITERIOS PARA UN BUEN SPOT — POR ORDEN DE IMPORTANCIA</SectionTitle>
      <Step num={1} text="Sol directo mínimo 6 horas al día — cuantas más mejor. Orientación sur o sureste." why="El cannabis es una de las plantas que más luz necesita. Menos de 6h de sol directo y el rendimiento cae drásticamente — la planta no puede fotosintentizar suficiente energía para desarrollar cogollos densos. Comprueba el spot a diferentes horas del día antes de plantar." />
      <Step num={2} text="Acceso a agua — cerca de río, arroyo, manantial o con acceso cómodo para llevar garrafas." why="Una planta grande en julio necesita 5–10L al día. Sin agua cerca tendrás que cargar garrafas en cada visita. En pleno verano esto puede ser insostenible — planifica bien la logística del agua antes de elegir el spot." />
      <Step num={3} text="Suelo profundo y bien drenado — sin encharcamiento. Clava un palo 50cm: si sale muy mojado en días sin lluvia, busca otro sitio." why="El suelo encharcado pudre las raíces igual que el exceso de riego en interior. Las raíces necesitan oxígeno para absorber nutrientes." />
      <Step num={4} text="Protección del viento fuerte — idealmente un claro rodeado de árboles que actúen como cortavientos." why="El viento fuerte en floración (agosto-septiembre) rompe ramas cargadas de cogollos. Perder una rama principal en plena floración es un rendimiento perdido." />
      <Step num={5} text="Discreción — mínimo 100-200m de caminos frecuentados. No visible desde senderos." />
      <Step num={6} text="Acceso cómodo para ti — valorando que visitarás el spot regularmente durante 5 meses." />

      <SectionTitle>CÓMO PREPARAR EL HOYO</SectionTitle>
      <Step num={7} text="Mínimo 50×50×50cm. Si puedes hacer 60×60×60cm, mejor." why="Las raíces en exterior crecen sin límite. Un hoyo grande lleno de buen sustrato es lo que más impacta en el tamaño final de la planta. No escatimes aquí — es el trabajo más importante que harás en todo el cultivo." />
      <Step num={8} text="Mezcla la tierra del hoyo con Light Mix al 50/50. Rellena el hoyo con esa mezcla." why="La tierra de bosque puede ser ácida, pobre en nutrientes o muy arcillosa. Mezclarla con Light Mix da a las raíces un arranque óptimo sin exceso de nutrientes que queme." />
      <Step num={9} text="Riega el hoyo preparado abundantemente 24-48h antes de plantar para que el sustrato se asiente." />
      <Step num={10} text="Si el suelo es muy pedregoso o poco profundo, planta en maceta de 20-30L apoyada en el suelo." />

      <SectionTitle>CAMUFLAJE Y DISCRECIÓN</SectionTitle>
      <Step num={11} text="Planta entre arbustos y vegetación existente — no en claro despejado visible desde lejos." />
      <Step num={12} text="Rodea la planta con plantas aromáticas si es posible: romero, lavanda, menta. Ayudan a enmascarar el olor en floración." />
      <Step num={13} text="Varía el acceso cada visita — no crees un camino marcado hacia el spot." />
      <Step num={14} text="En floración (agosto-octubre) el olor es muy intenso. En bosque con brisa se dispersa rápido, pero los días sin viento es notable." />

      <SectionTitle color="#e63946">🚫 ERRORES QUE ARRUINAN EL SPOT</SectionTitle>
      <ErrorCard error="No verificar las horas reales de sol" consecuencia="Un spot con sombra parcial puede tener 3-4h de sol — la mitad de lo necesario. Rendimiento mínimo." fix="Visita el spot a las 10h, 13h y 16h en un día despejado. Si el sol no llega directo en esas horas, busca otro." />
      <ErrorCard error="Hoyo demasiado pequeño" consecuencia="Las raíces se quedan sin espacio en semanas. La planta se estresa y el rendimiento cae a la mitad." fix="50×50×50cm es el mínimo absoluto. 60×60×60cm si puedes." />
      <ErrorCard error="Spot demasiado cerca de caminos" consecuencia="Alguien la puede encontrar durante los 5 meses que está creciendo." fix="Mínimo 100-200m de cualquier sendero frecuentado. En bosque denso con buena vegetación, menos distancia puede ser suficiente." />

      <SectionTitle>🔒 SEGURIDAD Y DISCRECIÓN — PROTOCOLO COMPLETO</SectionTitle>

      <div style={{ background: "#0d1f14", border: "1px solid #1b4332", borderRadius: "10px", padding: "14px", marginBottom: "12px" }}>
        <div style={{ fontSize: "13px", fontWeight: "bold", color: "#74c69d", marginBottom: "10px" }}>Cómo elegir el acceso al spot</div>
        {[
          { num: 1, text: "Nunca aparques el coche en el mismo punto siempre. Varía entre 2-3 puntos de acceso distintos.", why: "Un coche aparcado repetidamente en el mismo sitio en días concretos llama la atención de senderistas y vecinos de la zona." },
          { num: 2, text: "Evita acceder al spot en horas punta de senderismo — entre las 9h y las 12h los fines de semana hay mucha gente en el bosque.", why: "El anochecer o la madrugada son el momento con menos tráfico de personas en el monte." },
          { num: 3, text: "Nunca vayas en grupo si no es necesario. Una persona sola llama menos la atención que un grupo.", why: null },
          { num: 4, text: "Cambia el camino de acceso al spot en cada visita. No sigas siempre el mismo rastro.", why: "Un sendero marcado en la vegetación que lleva a ningún camino oficial es la señal más obvia de que hay algo al final." },
          { num: 5, text: "Lleva ropa neutra sin logos llamativos. Una mochila de senderismo normal pasa desapercibida.", why: null },
        ].map((s, i) => (
          <div key={i} style={{ marginBottom: "10px" }}>
            <div style={{ display: "flex", gap: "8px", marginBottom: s.why ? "6px" : "0" }}>
              <div style={{ color: "#52b788", flexShrink: 0, fontSize: "12px", fontWeight: "bold" }}>{s.num}.</div>
              <div style={{ fontSize: "12px", color: "#b7e4c7", lineHeight: "1.5" }}>{s.text}</div>
            </div>
            {s.why && (
              <div style={{ marginLeft: "20px", background: "#162a1e", borderLeft: "3px solid #40916c", padding: "6px 10px", borderRadius: "0 6px 6px 0", fontSize: "11px", color: "#74c69d", lineHeight: "1.4" }}>
                <span style={{ color: "#52b788", fontWeight: "bold" }}>¿Por qué? </span>{s.why}
              </div>
            )}
          </div>
        ))}
      </div>

      <div style={{ background: "#0d1f14", border: "1px solid #1b4332", borderRadius: "10px", padding: "14px", marginBottom: "12px" }}>
        <div style={{ fontSize: "13px", fontWeight: "bold", color: "#74c69d", marginBottom: "10px" }}>Camuflaje activo de la planta</div>
        {[
          { num: 1, text: "Planta siempre dentro de vegetación existente, nunca en claro abierto visible.", why: "Una planta verde brillante en medio de un claro marrón-ocre de verano destaca a metros de distancia." },
          { num: 2, text: "Rodea la planta con plantas aromáticas: romero, lavanda, tomillo, menta. Crecen solas en el mediterráneo.", why: "Los aromas fuertes confunden el olfato de quien pasa cerca. También mejoran el ecosistema del spot." },
          { num: 3, text: "En floración, cuando la planta crece y puede sobresalir de la vegetación circundante, usa LST para mantenerla horizontal y baja.", why: "Una planta de 1.5m vertical es visible desde lejos. La misma planta en abanico horizontal a 80cm de altura es invisible entre arbustos." },
          { num: 4, text: "Evita cortar ramas o vegetación alrededor para hacer espacio. Adapta la planta a lo que hay, no al revés.", why: "Los claros artificiales en el bosque son señales evidentes. La vegetación alrededor es tu mejor camuflaje." },
          { num: 5, text: "No dejes herramientas, bolsas, garrafas ni ningún objeto humano cerca del spot.", why: "Cualquier objeto artificial en el bosque es señal de presencia humana reciente. Limpia cada visita." },
        ].map((s, i) => (
          <div key={i} style={{ marginBottom: "10px" }}>
            <div style={{ display: "flex", gap: "8px", marginBottom: s.why ? "6px" : "0" }}>
              <div style={{ color: "#52b788", flexShrink: 0, fontSize: "12px", fontWeight: "bold" }}>{s.num}.</div>
              <div style={{ fontSize: "12px", color: "#b7e4c7", lineHeight: "1.5" }}>{s.text}</div>
            </div>
            {s.why && (
              <div style={{ marginLeft: "20px", background: "#162a1e", borderLeft: "3px solid #40916c", padding: "6px 10px", borderRadius: "0 6px 6px 0", fontSize: "11px", color: "#74c69d", lineHeight: "1.4" }}>
                <span style={{ color: "#52b788", fontWeight: "bold" }}>¿Por qué? </span>{s.why}
              </div>
            )}
          </div>
        ))}
      </div>

      <div style={{ background: "#0d1f14", border: "1px solid #1b4332", borderRadius: "10px", padding: "14px", marginBottom: "12px" }}>
        <div style={{ fontSize: "13px", fontWeight: "bold", color: "#74c69d", marginBottom: "10px" }}>Control del olor — el mayor riesgo exterior</div>
        {[
          { num: 1, text: "En floración (agosto-octubre) el olor es muy intenso. Visita el spot en días con brisa — el viento lo dispersa. Los días de calma y sin viento el olor se queda estático.", why: null },
          { num: 2, text: "Las visitas más largas (riego, revisión) hazlas de madrugada o muy temprano — menos paseantes.", why: null },
          { num: 3, text: "No te quedes en el spot más tiempo del necesario en floración avanzada.", why: "El olor se impregna en la ropa. Sal del spot, ventila bien y no vayas a sitios concurridos directamente después." },
          { num: 4, text: "En la cosecha, trabaja con bolsas herméticas desde el primer corte. El olor al cortar los cogollos es muy intenso.", why: null },
        ].map((s, i) => (
          <div key={i} style={{ marginBottom: "8px" }}>
            <div style={{ display: "flex", gap: "8px", marginBottom: s.why ? "6px" : "0" }}>
              <div style={{ color: "#52b788", flexShrink: 0, fontSize: "12px", fontWeight: "bold" }}>{s.num}.</div>
              <div style={{ fontSize: "12px", color: "#b7e4c7", lineHeight: "1.5" }}>{s.text}</div>
            </div>
            {s.why && (
              <div style={{ marginLeft: "20px", background: "#162a1e", borderLeft: "3px solid #40916c", padding: "6px 10px", borderRadius: "0 6px 6px 0", fontSize: "11px", color: "#74c69d", lineHeight: "1.4" }}>
                <span style={{ color: "#52b788", fontWeight: "bold" }}>¿Por qué? </span>{s.why}
              </div>
            )}
          </div>
        ))}
      </div>

      <div style={{ background: "#0d1f14", border: "1px solid #1b4332", borderRadius: "10px", padding: "14px", marginBottom: "12px" }}>
        <div style={{ fontSize: "13px", fontWeight: "bold", color: "#74c69d", marginBottom: "10px" }}>Qué hacer si alguien te cruza cerca del spot</div>
        {[
          "Comportamiento normal — saluda, no te escondas ni cambies de dirección bruscamente.",
          "Si te preguntan qué haces: senderismo, setas, fotografía, observación de aves. Respuestas naturales que no requieren explicación.",
          "No vuelvas al spot el mismo día si has tenido un encuentro cercano.",
          "Si sospechas que alguien ha encontrado el spot — no vuelvas durante al menos 2-3 semanas.",
        ].map((item, i) => (
          <div key={i} style={{ display: "flex", gap: "10px", marginBottom: "8px" }}>
            <div style={{ color: "#52b788", flexShrink: 0 }}>→</div>
            <div style={{ fontSize: "12px", color: "#b7e4c7", lineHeight: "1.5" }}>{item}</div>
          </div>
        ))}
      </div>

      <div style={{ background: "#1a2a10", border: "1px solid #4a7a20", borderRadius: "10px", padding: "14px" }}>
        <div style={{ fontSize: "13px", fontWeight: "bold", color: "#74c69d", marginBottom: "10px" }}>📱 Seguridad digital</div>
        {[
          { tip: "No hagas fotos al spot con el móvil normal", detail: "Las fotos del móvil llevan metadatos GPS incrustados. Si la foto sale del dispositivo por cualquier motivo, la localización exacta va con ella. Si quieres documentar el crecimiento, desactiva la ubicación en la cámara." },
          { tip: "No compartas la ubicación del spot con nadie", detail: "Aunque sea alguien de confianza. La regla más básica y la que más se ignora. La mayoría de spots que se pierden es por comentario entre conocidos, no por encontrarse por casualidad." },
          { tip: "No busques el spot en Google Maps con el móvil personal", detail: "El historial de ubicaciones y búsquedas queda registrado. Usa modo incógnito o simplemente no lo busques digitalmente." },
          { tip: "No hables del spot en redes sociales ni mensajería", detail: "WhatsApp, Telegram, Instagram — cualquier comunicación digital deja rastro. Lo que no se dice no existe." },
        ].map((item, i) => (
          <div key={i} style={{ background: "#0d2a14", border: "1px solid #2d6a4f", borderRadius: "8px", padding: "10px 12px", marginBottom: "8px" }}>
            <div style={{ fontSize: "12px", fontWeight: "bold", color: "#d8f3dc", marginBottom: "4px" }}>→ {item.tip}</div>
            <div style={{ fontSize: "11px", color: "#74c69d", lineHeight: "1.5" }}>{item.detail}</div>
          </div>
        ))}
      </div>
    </div>
  );
}

function GERMINACION_EXT() {
  return (
    <div>
      <div style={{ background: "#1a2a10", border: "1px solid #4a7a20", borderRadius: "10px", padding: "14px", marginBottom: "20px" }}>
        <p style={{ margin: "0 0 6px", fontSize: "13px", color: "#d8f3dc", fontWeight: "bold" }}>🗓️ Cuándo empezar</p>
        <p style={{ margin: 0, fontSize: "13px", color: "#95d5b2", lineHeight: "1.6" }}>
          En zona mediterránea: germina entre marzo y mayo. La planta pasará 2-3 semanas en casa antes de ir al exterior. Para cuando esté lista, las noches deben superar los 12-13°C de forma consistente. En zonas más frías del interior, espera hasta mayo-junio.
        </p>
      </div>

      <SectionTitle>FASE 1 — GERMINACIÓN (Días 1–7)</SectionTitle>
      <Step num={1} text="Prepara los vasitos o macetas biodegradables con Light Mix ligeramente húmedo." />
      <Step num={2} text="Pon cada semilla en un vaso con agua mineral a temperatura ambiente durante 12-18h." why="El agua mineral activa los procesos internos de la semilla. El cloro del agua del grifo puede inhibir la germinación." />
      <Step num={3} text="Transfiere cada semilla a papel de cocina húmedo (no chorreando) dentro de un tupper. Ciérralo y ponlo en un sitio oscuro y cálido a ~22°C." why="El calor constante y la oscuridad imitan el estado natural de una semilla bajo tierra. Encima de un router WiFi funciona perfectamente." />
      <Step num={4} text="Revisa cada 12h. En 3-5 días verás salir una raíz blanca (radícula)." />
      <Step num={5} text="Cuando la raíz mida 1-2cm, planta en el vasito con la raíz hacia abajo. Cubre con 1cm de sustrato suavemente." why="Si la raíz supera 3cm se dobla al plantarla. 1-2cm es el momento exacto." />

      <SectionTitle>FASE 2 — PLÁNTULA EN CASA (Días 7–21)</SectionTitle>
      <Step num={6} text="Pon el vasito en la ventana con más sol de casa. Rota el vaso cada día para que la planta crezca recta." />
      <Step num={7} text="Riega solo cuando el sustrato esté seco al tacto (dedo 2cm). Usa spray para las primeras semanas." why="La sobreirrigación mata más plántulas que cualquier otra cosa. En un vasito pequeño el sustrato se seca rápido — pero comprueba siempre antes de añadir agua." />
      <Step num={8} text="Sin nutrientes las primeras 2 semanas. Solo agua con pH 6.2–6.5." why="El Light Mix ya tiene nutrientes de base. Añadir más encima quema las raíces jóvenes y la planta muere." />
      <Step num={9} text="Las primeras hojas que ves (cotiledones) son redondeadas y no parecen cannabis. Es normal. Las hojas características salen a partir del día 5-7." />
      <Step num={10} text="Si la planta crece muy estirada buscando luz, acércala más a la ventana. Una planta estirada no es grave — se recupera con sol directo en el exterior." />
      <Step num={11} text="Cuando tenga 10-15cm y 3-4 pares de hojas reales está lista para ir al exterior." />

      <SectionTitle>FASE 3 — TRASPLANTE AL EXTERIOR</SectionTitle>
      <Step num={12} text="Asegúrate de que las mínimas nocturnas sean consistentemente por encima de 12-13°C en tu zona. Consulta el pronóstico antes de salir." why="El frío nocturno estresa las plántulas jóvenes y puede matarlas. Mejor esperar una semana más que arriesgar las plantas." />
      <Step num={13} text="Riega bien el vasito el día anterior para que el sustrato esté cohesionado." why="El sustrato húmedo mantiene la forma del cepellón al sacarlo. Si está seco se deshace y dañas las raíces." />
      <Step num={14} text="Si usas maceta biodegradable: entiérrala entera en el hoyo. Las raíces atravesarán el material solas. Cero estrés de trasplante." />
      <Step num={15} text="Si usas vasito plástico: aprieta suavemente los lados y saca la planta con todo el cepellón intacto. Ponla en el centro del hoyo y rellena los lados." />
      <Step num={16} text="Riega abundantemente justo después del trasplante — hasta empapar bien todo el hoyo." why="El riego post-trasplante elimina bolsas de aire alrededor de las raíces y las pone en contacto directo con el nuevo sustrato." />
      <Step num={17} text="Si el sol es muy fuerte los primeros 2-3 días, pon sombra provisional con una rama o cartón." why="La planta pasa de la luz indirecta del alféizar al sol directo. El cambio brusco puede quemar las hojas. La adaptación progresiva evita el problema." />

      <SectionTitle color="#e63946">🚫 ERRORES EN GERMINACIÓN Y TRASPLANTE</SectionTitle>
      <ErrorCard error="Regar el vasito cada día por rutina" consecuencia="La radícula se ahoga. Es la causa nº1 de muerte en plántula." fix="Dedo en el sustrato siempre. Si está húmedo, no riegas." />
      <ErrorCard error="Trasplantar con frío nocturno" consecuencia="La plántula se estresa, para de crecer y puede morir." fix="Espera a que las mínimas superen 12-13°C de forma consistente." />
      <ErrorCard error="Romper el cepellón al trasplantar" consecuencia="Las raíces quedan expuestas. La planta entra en estrés severo durante semanas." fix="Aprieta los lados del vasito suavemente antes de sacar. Sale entero si el sustrato está húmedo." />
      <ErrorCard error="No regar después del trasplante" consecuencia="Bolsas de aire alrededor de las raíces — la planta no puede absorber agua ni nutrientes." fix="Riego abundante inmediatamente después de plantar. Empapa bien." />
    </div>
  );
}

function FASES_EXT() {
  return (
    <div>
      <InfoBox>
        El calendario exterior es la naturaleza haciendo su trabajo. Tú solo riegas, alimentas y vigilas. El sol controla el crecimiento y el acortamiento de días activa la floración automáticamente en agosto. No hay que hacer nada para que florezca.
      </InfoBox>

      <SectionTitle>CALENDARIO MES A MES</SectionTitle>
      {[
        { mes: "MARZO–MAYO", icono: "🌱", fase: "Germinación y trasplante al exterior", color: "#40916c", pasos: [
          "Germina en casa según fase anterior.",
          "Trasplanta al hoyo cuando tenga 10-15cm y las noches superen 12°C.",
          "Primeras semanas: riego suave cada 2-3 días. Solo agua con pH 6.2-6.5.",
          "Sin nutrientes las primeras 2 semanas en exterior — el sustrato ya tiene lo que necesita.",
          "Protege de posibles heladas tardías con tela de jardín si las temperaturas bajan inesperadamente.",
        ]},
        { mes: "JUNIO", icono: "🌿", fase: "Vegetativa temprana — arranque fuerte", color: "#52b788", pasos: [
          "La planta crece rápido con los días largos de junio (15-16h de luz).",
          "Empieza Bio·Grow: 2ml/L en cada riego. Ajusta siempre el pH del agua a 6.2-6.5.",
          "Riega cuando el suelo esté seco a 3-4cm de profundidad.",
          "Primera aplicación de Bacillus thuringiensis (Bt) en spray sobre las hojas — prevención de orugas.",
          "Si crece muy vertical, empieza LST (doblar ramas hacia fuera) para que la luz llegue a más puntos.",
          "Pon acolchado (hojas secas, corteza) alrededor de la base para retener humedad.",
        ]},
        { mes: "JULIO", icono: "🌿", fase: "Vegetativa máxima — pico de crecimiento y calor", color: "#74c69d", pasos: [
          "La planta puede crecer 5-10cm al día. Es el mes de mayor crecimiento.",
          "Riego más frecuente — puede ser diario en días muy calurosos. Nunca entre las 12h y 16h.",
          "Sube Bio·Grow a 3-4ml/L si la planta se ve sana y verde oscuro.",
          "Aplica Bt cada 2 semanas. Revisa el envés de las hojas en cada visita.",
          "Pon tutores (estacas de bambú o ramas del bosque) en las ramas principales.",
          "El acolchado es crítico este mes — reduce el riego a la mitad.",
        ]},
        { mes: "AGOSTO", icono: "🌸", fase: "Inicio de floración automática", color: "#b7e4c7", pasos: [
          "A principios de agosto los días bajan de 14h y la planta empieza a florecer sola.",
          "Señal: aparecen pelos blancos (pistilos) en los nudos entre ramas. No tienes que hacer nada.",
          "Cambia a Bio·Bloom 2-3ml/L. Mantén Bio·Grow a 0.5ml/L.",
          "El olor empieza a ser notable. En bosque con brisa se dispersa bien.",
          "Baja la frecuencia de riego ligeramente — los cogollos en formación no quieren tanta agua como la vegetativa.",
        ]},
        { mes: "SEPTIEMBRE", icono: "🌸", fase: "Floración avanzada — mes más crítico", color: "#95d5b2", pasos: [
          "Los cogollos engordan rápido. Aumenta las visitas a 2 veces por semana.",
          "LAVADO DE RAÍCES: semana 4-5 de floración, solo agua con pH 6.2 los últimos 10-14 días antes de cosechar.",
          "Revisa en cada visita que no haya Botrytis: abre cogollos con cuidado y busca manchas grises o textura blanda.",
          "Si aparece moho: corta la rama afectada 5cm por debajo de la zona visible. Bolsa hermética. Desinfecta tijeras con alcohol entre cortes.",
          "Añade tutores adicionales — los cogollos pesan mucho y pueden doblar o romper ramas.",
          "Revisa el estado de los tricomas con la lupa 60x semanalmente.",
        ]},
        { mes: "OCTUBRE", icono: "✂️", fase: "Cosecha", color: "#d8f3dc", pasos: [
          "Tricomas 70-80% lechosos con alguno ámbar = punto óptimo de cosecha.",
          "Con riesgo de lluvia o moho: puedes adelantar al 60% lechosos. Mejor cosechar antes que perderlo por moho.",
          "Cosecha de madrugada o al amanecer — menos calor, más resina, más discreción.",
          "Lleva: mochila, bolsas herméticas dobles, tijeras limpias, guantes.",
          "Limpia el spot completamente — recoge raíces, ramas y cualquier rastro.",
        ]},
      ].map((m, i) => (
        <div key={i} style={{ background: "#0d1f14", border: "1px solid #1b4332", borderRadius: "10px", padding: "14px", marginBottom: "12px" }}>
          <div style={{ display: "flex", alignItems: "center", gap: "10px", marginBottom: "10px" }}>
            <div style={{ fontSize: "20px" }}>{m.icono}</div>
            <div>
              <div style={{ fontSize: "13px", fontWeight: "bold", color: m.color }}>{m.mes}</div>
              <div style={{ fontSize: "11px", color: "#52b788" }}>{m.fase}</div>
            </div>
          </div>
          {m.pasos.map((p, j) => (
            <div key={j} style={{ display: "flex", gap: "8px", marginBottom: "6px" }}>
              <div style={{ color: m.color, flexShrink: 0, fontSize: "12px" }}>{j + 1}.</div>
              <div style={{ fontSize: "12px", color: "#b7e4c7", lineHeight: "1.5" }}>{p}</div>
            </div>
          ))}
        </div>
      ))}
    </div>
  );
}

function RIEGO_EXT() {
  return (
    <div>
      <InfoBox>
        El riego en exterior es el trabajo más constante de toda la temporada. En julio puede ser diario. Planifica bien la logística del agua antes de empezar — es el factor limitante real del cultivo exterior.
      </InfoBox>

      <SectionTitle>EL AGUA — QUÉ USAR Y CÓMO PREPARARLA</SectionTitle>
      {[
        { tipo: "💧 Agua del grifo", ph: "7.0–8.5 (varía por zona)", ajuste: "Sí — mide siempre", color: "#f4a261", detail: "La opción más práctica y barata. Prepárala en casa: llena el bidón, añade nutrientes si toca, mide el pH con el pHmetro y ajusta con unas gotas de pH Down hasta 6.2-6.5. Todo en 5 minutos. Lleva el bidón ya preparado al spot." },
        { tipo: "🏔️ Agua de manantial o río cercano", ph: "6.0–7.5 (varía)", ajuste: "Mide antes de usar", color: "#52b788", detail: "Si hay agua natural cerca del spot, úsala — es gratis y evita cargar peso. El pH del agua natural suele ser más favorable. Mide siempre con el pHmetro. Si está entre 6.0 y 7.0 puedes usarla directamente. Por encima de 7.5 añade unas gotas de pH Down." },
        { tipo: "🛒 Agua mineral embotellada", ph: "6.5–7.4 (suele estar bien)", ajuste: "Generalmente no", color: "#74c69d", detail: "Funciona bien y raramente necesita ajuste de pH. El problema es el coste — una temporada completa con 3 plantas son 900-1.000L, lo que sale muy caro. Úsala solo en las primeras semanas mientras la planta es pequeña si no tienes otra opción." },
      ].map((agua, i) => (
        <div key={i} style={{ background: "#162a1e", border: `1px solid ${agua.color}44`, borderRadius: "8px", padding: "12px", marginBottom: "8px" }}>
          <div style={{ display: "flex", justifyContent: "space-between", marginBottom: "6px" }}>
            <div style={{ fontSize: "13px", color: "#d8f3dc", fontWeight: "bold" }}>{agua.tipo}</div>
            <div style={{ fontSize: "10px", color: agua.color, fontWeight: "bold" }}>{agua.ajuste}</div>
          </div>
          <div style={{ fontSize: "11px", color: "#52b788", marginBottom: "4px" }}>pH habitual: {agua.ph}</div>
          <div style={{ fontSize: "12px", color: "#74c69d", lineHeight: "1.5" }}>{agua.detail}</div>
        </div>
      ))}

      <SectionTitle>CÓMO REGAR CORRECTAMENTE A MANO</SectionTitle>
      <Step num={1} text="Prepara el agua en casa: llena el bidón, añade nutrientes si toca, ajusta el pH a 6.2-6.5." />
      <Step num={2} text="Vierte lentamente alrededor de la base de la planta — nunca encima de las hojas ni del tallo." why="El agua en las hojas con sol directo actúa como lupa y puede quemarlas. El agua en el tallo puede causar podredumbre en la base. Siempre al suelo, alrededor de la planta." />
      <Step num={3} text="Riega hasta que el suelo no absorba más y quede agua en la superficie. Para, espera que se absorba. Si sigue seco, añade más." why="Una riega profunda y completa es mejor que varias superficiales. El agua debe llegar a las raíces más profundas, no solo mojar los primeros centímetros." />
      <Step num={4} text="Nunca riegues entre las 12h y las 16h en verano." why="El agua se evapora antes de llegar a las raíces y las gotas en las hojas pueden quemar con el sol de mediodía." />
      <Step num={5} text="En exterior con macetas (vs tierra): observa el agua de drenaje que sale por los agujeros de abajo si riegas con abundancia. Si es turbia o tiene olor, puede haber acumulación de sales — significa que el pH interior está bloqueando nutrientes." why="Menos crítico que interior porque el agua de lluvia lava el sustrato naturalmente. Pero si los síntomas no claaran (amarilleo sin razón), la raíz puede estar en bloqueo de nutrientes acumulados." />

      <SectionTitle>FRECUENCIA DE VISITAS SIN RIEGO AUTOMÁTICO</SectionTitle>
      <div style={{ background: "#0d1f14", border: "1px solid #1b4332", borderRadius: "10px", padding: "14px", marginBottom: "12px" }}>
        {[
          { mes: "Marzo–Mayo", visitas: "2x semana", agua: "3-8L por visita (3 plantas)", nota: "" },
          { mes: "Junio", visitas: "2-3x semana", agua: "8-15L por visita", nota: "" },
          { mes: "Julio ⚠️", visitas: "Cada 1-2 días", agua: "15-25L por visita", nota: "El mes más exigente — sin agua las plantas mueren en 2-3 días de calor extremo." },
          { mes: "Agosto", visitas: "Cada 2 días", agua: "12-18L por visita", nota: "" },
          { mes: "Septiembre", visitas: "2-3x semana", agua: "8-12L por visita", nota: "Menos calor pero más vigilancia de moho — visitas más importantes que nunca." },
          { mes: "Octubre", visitas: "1-2x semana", agua: "5-8L por visita", nota: "Cosecha próxima. Reducir riego en las 2 últimas semanas (lavado de raíces)." },
        ].map((row, i) => (
          <div key={i} style={{ padding: "8px 0", borderBottom: i < 5 ? "1px solid #1b4332" : "none" }}>
            <div style={{ display: "flex", justifyContent: "space-between", marginBottom: "3px" }}>
              <span style={{ fontSize: "12px", color: "#d8f3dc", fontWeight: "bold" }}>{row.mes}</span>
              <span style={{ fontSize: "11px", color: "#95d5b2" }}>{row.visitas}</span>
            </div>
            <div style={{ fontSize: "11px", color: "#74c69d" }}>{row.agua}</div>
            {row.nota && <div style={{ fontSize: "11px", color: "#f4a261", marginTop: "2px" }}>{row.nota}</div>}
          </div>
        ))}
      </div>

      <SectionTitle>RIEGO AUTOMÁTICO POR GRAVEDAD — SIN ELECTRICIDAD</SectionTitle>
      <div style={{ background: "#0d1f14", border: "1px solid #1b4332", borderRadius: "10px", padding: "14px", marginBottom: "12px" }}>
        <div style={{ fontSize: "13px", fontWeight: "bold", color: "#74c69d", marginBottom: "10px" }}>Cómo funciona</div>
        <div style={{ fontSize: "12px", color: "#95d5b2", lineHeight: "1.6", marginBottom: "10px" }}>
          Bidón elevado 50-80cm → tubo principal → goteros regulables en cada planta. La gravedad mueve el agua sin necesidad de bomba ni electricidad. Un temporizador a pilas entre el bidón y el tubo abre y cierra el paso automáticamente.
        </div>
        {[
          { num: 1, text: "Instala un conector de depósito (racor pasante) en la parte baja del bidón haciendo un agujero." },
          { num: 2, text: "Conecta tubo flexible de 4-6mm al conector. Lleva el tubo hasta las plantas con ramales de 1 para cada planta." },
          { num: 3, text: "Pincha un gotero regulable al final de cada ramal. Regula al mínimo caudal — la gravedad tiene poca presión." },
          { num: 4, text: "Eleva el bidón 50-80cm con piedras, ramas o cualquier soporte estable." },
          { num: 5, text: "Añade temporizador a pilas (15-25€) entre el bidón y el tubo para programar riegos automáticos." },
          { num: 6, text: "Con 20L y goteros bien regulados puedes cubrir 3-4 días en julio sin visitar el spot." },
        ].map((s, i) => (
          <div key={i} style={{ display: "flex", gap: "8px", marginBottom: "8px" }}>
            <div style={{ color: "#52b788", flexShrink: 0, fontSize: "12px", fontWeight: "bold" }}>{s.num}.</div>
            <div style={{ fontSize: "12px", color: "#b7e4c7", lineHeight: "1.5" }}>{s.text}</div>
          </div>
        ))}
      </div>

      <div style={{ background: "#1a2a10", border: "1px solid #4a7a20", borderRadius: "10px", padding: "14px", marginBottom: "12px" }}>
        <div style={{ fontSize: "13px", fontWeight: "bold", color: "#74c69d", marginBottom: "8px" }}>🍂 Acolchado (Mulching) — truco clave para reducir riego</div>
        <div style={{ fontSize: "12px", color: "#95d5b2", lineHeight: "1.6" }}>
          Cubre el suelo alrededor de cada planta con 5-10cm de hojas secas, corteza o hierba del propio bosque. Coste: cero. Resultado: retiene la humedad del suelo evitando que el calor la evapore. Puede reducir la frecuencia de riego a la mitad en julio. Aplícalo desde junio.
        </div>
      </div>

      <SectionTitle>🎋 TUTORES — CÓMO Y CUÁNDO USARLOS</SectionTitle>
      <Step num={1} text="Las plantas de fotoperiodo en exterior pueden llegar a 1.5-2m. En floración los cogollos pesan mucho y las ramas se doblan o rompen." />
      <Step num={2} text="Cuándo ponerlos: a partir de agosto cuando los cogollos empiezan a engordar. No es necesario antes." />
      <Step num={3} text="Clava la estaca a 5cm del tallo de la rama que necesita soporte." why="Más cerca puede pinchar raíces principales. 5cm es la distancia de seguridad." />
      <Step num={4} text="Ata la rama con cuerda suave en lazo de 8 — un nudo entre la rama y la estaca para que no toque directamente." why="La cuerda directa sobre la rama puede cortar la circulación de savia y matar esa parte." />
      <Step num={5} text="Alternativa gratuita: ramas largas y rectas del propio bosque. Funcionan igual de bien." />
    </div>
  );
}

function PLAGAS() {
  return (
    <div>
      <InfoBox>
        En exterior las plagas son inevitables — el bosque está lleno de vida. La clave es prevención constante desde el principio, no reaccionar cuando ya es tarde. Con el protocolo correcto no perderás la cosecha.
      </InfoBox>

      <SectionTitle>CHECKLIST DE CADA VISITA</SectionTitle>
      {[
        "Mira el envés de las hojas jóvenes — pulgones y ácaros viven ahí.",
        "Busca agujeros irregulares en hojas — señal de orugas activas de noche.",
        "Comprueba que los tutores aguantan el peso de las ramas.",
        "Mira la base del tallo — caracoles y babosas atacan aquí.",
        "En septiembre: abre cogollos con cuidado y busca manchas grises — Botrytis.",
        "Aplica Bt si hace más de 2 semanas desde la última aplicación.",
        "Riega si el suelo está seco a 3-4cm de profundidad.",
      ].map((item, i) => (
        <div key={i} style={{ display: "flex", gap: "10px", background: "#0d1f14", border: "1px solid #1b4332", borderRadius: "8px", padding: "10px 12px", marginBottom: "6px" }}>
          <div style={{ color: "#52b788", flexShrink: 0 }}>☐</div>
          <div style={{ fontSize: "12px", color: "#b7e4c7", lineHeight: "1.5" }}>{item}</div>
        </div>
      ))}

      <SectionTitle>LAS 4 AMENAZAS PRINCIPALES</SectionTitle>
      {[
        {
          nombre: "🐛 Orugas y larvas", nivel: "ALTO", color: "#e63946",
          descripcion: "Comen las hojas de noche dejando agujeros irregulares. Con infestación fuerte pueden defoliar una planta en días.",
          deteccion: "Agujeros irregulares en hojas. Excrementos negros pequeños sobre las hojas. Las propias orugas visibles por la noche con linterna.",
          prevencion: "Bacillus thuringiensis (Bt) en spray sobre todas las hojas cada 2 semanas desde junio. Es la prevención más importante de todo el cultivo exterior.",
          tratamiento: "Aumenta Bt a cada semana. Revisa manualmente y elimina orugas con guantes. Si la infestación es muy grande, Spinosad (insecticida natural) como refuerzo.",
        },
        {
          nombre: "🐌 Caracoles y babosas", nivel: "MEDIO", color: "#f4a261",
          descripcion: "Atacan plántulas y plantas jóvenes de noche o con tiempo húmedo. Menos problema cuando la planta es grande y el tallo está lignificado.",
          deteccion: "Rastro de baba plateada en el suelo y la planta. Bordes de hojas comidos en semicírculos regulares.",
          prevencion: "Pon una capa de ceniza de madera o tierra de diatomeas alrededor de la base. Los caracoles no cruzan estas barreras.",
          tratamiento: "Trampa de cerveza: vaso enterrado a nivel del suelo con cerveza dentro — los atrae y ahoga. Recógelos manualmente en las visitas nocturnas.",
        },
        {
          nombre: "🍄 Botrytis — moho gris", nivel: "CRÍTICO EN SEPTIEMBRE-OCTUBRE", color: "#9b2226",
          descripcion: "El mayor peligro del exterior mediterráneo. Ataca los cogollos desde dentro en noches húmedas de otoño. Puede destruir una cosecha entera en 5-7 días. No hay tratamiento — solo prevención y eliminación rápida.",
          deteccion: "Manchas grises o marrones dentro de los cogollos. Micelio gris al separar las hojas del cogollo. Textura blanda o esponjosa donde debería haber firmeza.",
          prevencion: "Elige variedades resistentes. Visita 2 veces por semana en septiembre. No riegues en exceso en floración. Buena circulación de aire alrededor de la planta.",
          tratamiento: "Corta la rama afectada con tijeras limpias 5cm por debajo de la zona visible. Mete en bolsa hermética sin tocar otras partes. Desinfecta las tijeras con alcohol entre cada corte. Hay que actuar el mismo día que lo detectas.",
        },
        {
          nombre: "🌿 Pulgones y ácaros", nivel: "BAJO-MEDIO", color: "#f4a261",
          descripcion: "Insectos pequeños que chupan la savia. Debilitan la planta y pueden transmitir enfermedades. En exterior los depredadores naturales del bosque los controlan bastante bien.",
          deteccion: "Pulgones: racimos de insectos verdes o negros en el envés de hojas jóvenes. Ácaros: puntos amarillos en hojas, telaraña fina en el envés con lupa.",
          prevencion: "No uses insecticidas de amplio espectro — matas también a las mariquitas y otros predadores que te ayudan a controlarlos. El ecosistema del bosque se autorregula.",
          tratamiento: "Jabón potásico 5ml/L en spray al atardecer cubriendo bien el envés. 2-3 aplicaciones cada 3 días. Si no mejora, añade aceite de neem 2ml/L.",
        },
        {
          nombre: "🍯 Oídio — moho blanco", nivel: "ALTO (sept-oct)", color: "#f4a261",
          descripcion: "Hongo muy común en clima mediterráneo en otoño. Florece cuando hay noches frías (10-15°C) y días cálidos (20-25°C). Se ve como polvo blanco harinoso en hojas y cogollos.",
          deteccion: "Polvo blanco harinoso en el envés de hojas y en las sugar leaves alrededor de los cogollos. Empieza en hojas bajas y sube. Puede cubrir el cogollo entero si no actúas.",
          prevencion: "Elige variedades resistentes desde la compra. Buena circulación de aire entre las ramas. Evita regar las hojas por la noche. Visitas semanales en septiembre para detectarlo temprano.",
          tratamiento: "Bicarbonato sódico 5g/L + jabón potásico 5ml/L en spray aplicado al atardecer. Cubre todas las hojas bien. Aplica cada 5-7 días hasta desaparecer. Elimina hojas muy afectadas manualmente. En último recurso, azufre en polvo (solo antes de floración avanzada, no al final).",
        },
      ].map((plaga, i) => (
        <div key={i} style={{ background: "#0d1f14", border: `1px solid ${plaga.color}44`, borderRadius: "10px", padding: "14px", marginBottom: "12px" }}>
          <div style={{ display: "flex", justifyContent: "space-between", alignItems: "center", marginBottom: "8px" }}>
            <div style={{ fontSize: "14px", fontWeight: "bold", color: "#d8f3dc" }}>{plaga.nombre}</div>
            <div style={{ fontSize: "9px", color: plaga.color, letterSpacing: "1px", fontWeight: "bold" }}>{plaga.nivel}</div>
          </div>
          <div style={{ fontSize: "12px", color: "#74c69d", lineHeight: "1.5", marginBottom: "10px" }}>{plaga.descripcion}</div>
          {[["🔍 Cómo detectar", plaga.deteccion], ["🛡️ Prevención", plaga.prevencion], ["💊 Tratamiento", plaga.tratamiento]].map(([titulo, texto]) => (
            <div key={titulo} style={{ marginBottom: "8px" }}>
              <div style={{ fontSize: "10px", color: "#52b788", letterSpacing: "1px", marginBottom: "3px" }}>{titulo}</div>
              <div style={{ fontSize: "12px", color: "#b7e4c7", lineHeight: "1.5" }}>{texto}</div>
            </div>
          ))}
        </div>
      ))}
    </div>
  );
}

function COSECHA_EXT() {
  return (
    <div>
      <InfoBox>
        El proceso de secado y curado es idéntico al cultivo interior. La única diferencia es la logística previa — cosechar en el bosque y transportar de forma discreta. No te precipites: la cosecha antes de tiempo puede reducir el rendimiento un 30-40%.
      </InfoBox>

      <SectionTitle>CUÁNDO COSECHAR — LOS INDICADORES</SectionTitle>
      <Step num={1} text="Lupa 60x sobre los tricomas de los cogollos (no de las hojas) — el único indicador fiable." why="El calendario es orientativo. Los tricomas son la realidad. Sin lupa estás adivinando el momento más importante de todo el cultivo." />
      <Step num={2} text="Tricomas transparentes → aún no. Necesita más tiempo." />
      <Step num={3} text="Tricomas blancos lechosos (turbios) → punto óptimo. Efecto más activo y equilibrado." />
      <Step num={4} text="Tricomas ámbar → efecto más sedante y corporal. Muchos ámbar = al límite, cosecha ya." />
      <Step num={5} text="Para primera cosecha: busca 70-80% lechosos con alguno ámbar." />
      <Step num={6} text="Con lluvia prevista y 60% lechosos: cosecha ya. Mejor perder algo de potencial que perder todo por moho." why="En exterior el clima manda. Una semana de lluvia en octubre puede destruir la cosecha entera. El pragmatismo es parte del cultivo exterior." />

      <SectionTitle>SEÑALES ADICIONALES DE MADUREZ</SectionTitle>
      {[
        "Los pistilos (pelos) han cambiado de blanco a naranja/marrón en un 70-80% del cogollo.",
        "Las hojas grandes (fan leaves) empiezan a amarillear y caer — la planta está usando sus reservas.",
        "El olor es muy intenso y característico de la variedad.",
        "Los cogollos han dejado de crecer en tamaño y se han vuelto más densos y duros.",
      ].map((item, i) => (
        <div key={i} style={{ display: "flex", gap: "10px", background: "#0d1f14", border: "1px solid #1b4332", borderRadius: "8px", padding: "10px 12px", marginBottom: "6px" }}>
          <div style={{ color: "#52b788", flexShrink: 0 }}>→</div>
          <div style={{ fontSize: "12px", color: "#b7e4c7", lineHeight: "1.5" }}>{item}</div>
        </div>
      ))}

      <SectionTitle>LOGÍSTICA EN EL BOSQUE</SectionTitle>
      <Step num={7} text="Cosecha de madrugada o al amanecer — menor temperatura, más resina, más discreción." why="La resina está más concentrada con temperaturas frescas. Las madrugadas tienen menos movimiento de personas en el bosque." />
      <Step num={8} text="Material necesario: mochila grande, bolsas herméticas dobles, tijeras limpias, guantes de nitrilo, bolsas de basura para restos." />
      <Step num={9} text="Quita las hojas grandes (fan leaves) en el spot antes de meter en las bolsas — reduce el volumen y el olor." />
      <Step num={10} text="Corta rama a rama. Mete en bolsa hermética inmediatamente al cortar." why="El olor en cosecha es muy intenso. Las bolsas herméticas contienen el olor durante el transporte." />
      <Step num={11} text="Limpia el spot completamente al terminar — raíces, ramas, tierra removida. No dejes rastro visible." />

      <SectionTitle>SECADO</SectionTitle>
      <Step num={12} text="Cuelga las ramas boca abajo en un lugar oscuro, 18-20°C, 45-55% humedad. Airflow suave en la habitación pero sin ventilador apuntando directamente a las ramas." why="La oscuridad protege los cannabinoides. El aire directo seca el exterior demasiado rápido mientras el interior sigue húmedo — eso provoca moho dentro aunque por fuera parezca seco." />
      <Step num={13} text="Duración: 10-14 días habitualmente. En ambientes húmedos puede ser más." />
      <Step num={14} text="Test de secado: dobla una ramita fina. Si craquea limpiamente, está lista. Si se dobla sin romperse, necesita más tiempo." why="Este test detecta si el interior sigue húmedo — que es más lento que el exterior. Es más fiable que mirar el color o tocar el cogollo." />

      <SectionTitle>MANICURA Y CURADO</SectionTitle>
      <Step num={15} text="Recorta las hojas pequeñas (sugarleaves) que rodean cada cogollo con tijeras de punta fina. Limpia las tijeras con alcohol cada 15 minutos." />
      <Step num={16} text="Guarda los recortes (trim) — sirven para hacer extractos, aceite o mantequilla." />
      <Step num={17} text="Mete los cogollos en botes Mason jar herméticos al 75% de capacidad. Un higrómetro dentro de cada bote." why="Muy llenos: la humedad no circula. Muy vacíos: se secan en exceso en el bote." />
      <Step num={18} text="Primeras 2 semanas: abre los botes 15 minutos al día (burping) para liberar humedad residual." why="El material sigue liberando humedad aunque parezca seco. Sin burping aparece moho en el bote y pierdes la cosecha en los últimos días." />
      <Step num={19} text="Humedad objetivo dentro del bote: 58-65%. Si supera el 70%, deja el bote abierto 1-2 horas. Si baja del 55%, cierra y no abras hasta mañana." />
      <Step num={20} text="Mínimo 2 semanas de curado. 4 semanas es notablemente mejor. 8 semanas es lo ideal." why="El curado no es esperar. Ocurren reacciones químicas que descomponen la clorofila (sabor vegetal amargo) y desarrollan los terpenos (aroma y sabor final). No hay atajos." />

      <SectionTitle color="#e63946">🚫 ERRORES EN COSECHA Y CURADO</SectionTitle>
      <ErrorCard error="Cosechar demasiado pronto por impaciencia" consecuencia="Rendimiento reducido 30-40% y efecto muy inferior al potencial de la planta." fix="Lupa 60x siempre. Espera al 70-80% de tricomas lechosos." />
      <ErrorCard error="Esperar demasiado en octubre con riesgo de lluvia" consecuencia="La Botrytis puede destruir la cosecha entera en una semana de lluvia." fix="Con lluvia prevista y 60% lechosos: cosecha ya." />
      <ErrorCard error="Transportar sin bolsas herméticas" consecuencia="El olor en el coche es intensísimo. Muy poco discreto." fix="Bolsas herméticas dobles para el transporte. Siempre." />
      <ErrorCard error="Meter en bote antes de que esté bien seco" consecuencia="Moho en el curado. Pierdes toda la cosecha en los últimos días." fix="Test de la ramita sin excepción. Si dobla, espera más." />
      <ErrorCard error="No hacer el curado o acortarlo" consecuencia="Sabor vegetal, efecto brusco. Meses de trabajo con resultado pobre." fix="Mínimo 2 semanas. 4 semanas es la diferencia entre mediocre y excelente." />

      <SectionTitle>📦 CONSERVACIÓN — especialmente importante en exterior por el volumen</SectionTitle>
      <div style={{ background: "#162a1e", border: "1px solid #2d6a4f", borderRadius: "10px", padding: "14px", marginBottom: "12px" }}>
        <p style={{ margin: 0, fontSize: "12px", color: "#95d5b2", lineHeight: "1.6" }}>
          Una planta de fotoperiodo en exterior puede dar 200-500g. Es mucho más de lo que puedes consumir a corto plazo — la conservación correcta es esencial. Los cuatro enemigos: <span style={{ color: "#d8f3dc", fontWeight: "bold" }}>luz, oxígeno, humedad y calor</span>.
        </p>
      </div>
      {[
        { metodo: "🫙 Botes cristal herméticos", duracion: "6–12 meses", nota: "Método estándar post-curado. Humedad 58-65%, lugar oscuro y fresco (15-21°C). Suficiente para consumo habitual." },
        { metodo: "🔵 Envasado al vacío", duracion: "12–18 meses", nota: "Solo después del curado completo (4+ semanas). Congela 20-30 min antes de envasar para que los cogollos aguanten la presión sin aplastarse y romper tricomas." },
        { metodo: "❄️ Congelación", duracion: "1–2 años", nota: "Para excedentes grandes. Los tricomas fríos son frágiles — no toques los cogollos congelados. Descongela siempre dentro del bote cerrado hasta temperatura ambiente antes de abrir." },
        { metodo: "🏆 Vacío + congelación", duracion: "2+ años", nota: "El mejor método para grandes volúmenes de exterior. Curado completo → congela 30 min → envasa al vacío → congelador. Para consumir: descongela sin abrir 2-3 horas." },
      ].map((m, i) => (
        <div key={i} style={{ background: "#0d1f14", border: "1px solid #1b4332", borderRadius: "8px", padding: "12px", marginBottom: "8px", display: "flex", gap: "12px", justifyContent: "space-between" }}>
          <div>
            <div style={{ fontSize: "13px", color: "#d8f3dc", fontWeight: "bold", marginBottom: "4px" }}>{m.metodo}</div>
            <div style={{ fontSize: "12px", color: "#74c69d", lineHeight: "1.5" }}>{m.nota}</div>
          </div>
          <div style={{ fontSize: "11px", color: "#52b788", fontWeight: "bold", flexShrink: 0 }}>{m.duracion}</div>
        </div>
      ))}
    </div>
  );
}

function DIAGNOSTICO() {
  return (
    <div>
      <InfoBox>
        Cuando tu planta empieza a mostrar síntomas (hojas amarillas, manchas, puntas quemadas), el primer paso es diagnosticar correctamente. Estos síntomas pueden venir de 5 fuentes: pH incorrecto, deficiencia de nutrientes, exceso de nutrientes, riego, o luz. Esta guía te ayuda a identificar cuál es el problema real.
      </InfoBox>

      <SectionTitle color="#52b788">🔑 REGLA DE ORO</SectionTitle>
      <div style={{ background: "#162a1e", border: "1px solid #2d6a4f", borderRadius: "10px", padding: "14px", marginBottom: "20px" }}>
        <p style={{ margin: 0, fontSize: "13px", color: "#95d5b2", lineHeight: "1.7" }}>
          Antes de añadir o restar nutrientes, <span style={{ color: "#d8f3dc", fontWeight: "bold" }}>mide el pH del agua que entra y el runoff (agua que sale)</span>. Muchos problemas que parecen "falta de nutrientes" son en realidad pH incorrecto que bloquea los nutrientes. Si el pH está mal, añadir más nutrientes empeora el problema.
        </p>
      </div>

      <SectionTitle>DEFICIENCIAS DE NUTRIENTES — GUÍA VISUAL</SectionTitle>
      {[
        { elemento: "🔴 Nitrógeno (N)", zona: "Hojas bajas/viejas", sintoma: "Amarilleo progresivo, empezando por las hojas más viejas. El tallo puede ponerse rojo/morado.", causa: "Dosis de nutrientes insuficiente o pH fuera del rango 6.0-7.0 (bloquea N).", solucion: "Aumenta Bio Grow a 1ml/L más. Mide pH — si está >7.0, bájalo con pH Down. Espera 3-5 días para ver mejora." },
        { elemento: "🟠 Fósforo (P)", zona: "Toda la planta", sintoma: "Hojas moradas, rojas o rojizas. Pecíolos (tallos de hojas) muy rojos. Crecimiento ralentizado.", causa: "Baja temperatura (<15°C) o pH incorrecto (mejor a 6.5). Exterior en otoño temprano.", solucion: "Mide pH ajusta a 6.2-6.5. Si ya estás en floración y es otoño, es normal — espera a que suba temperatura. Si es interior, sube temp a 22°C mínimo." },
        { elemento: "🟡 Potasio (K)", zona: "Hojas viejas", sintoma: "Bordes de hojas viejas se vuelven marrones y se tuercen hacia arriba. Parece quemadura desde los bordes.", causa: "Deficiencia de K o pH bloqueado (mejor 6.2-6.5). Común al final de floración.", solucion: "Aumenta Bio Bloom a 1ml/L más. Mide pH. Si está al final de floración, es normal — el plant está terminando. Reduce dosis agua sola las 2 últimas semanas." },
        { elemento: "💚 Magnesio (Mg)", zona: "Hojas medias", sintoma: "Clorosis intervenal: venas verdes pero el espacio entre las venas se vuelve amarillo. Las venas siguen siendo verdes oscuro.", causa: "Deficiencia de Mg o pH incorrecto. Puede ocurrir si cambias el nivel de EC (concentración de sales) demasiado rápido.", solucion: "Solución rápida: 1ml/L sulfato de magnesio (MgSO4) en el riego. O aumenta dosis de Bio Grow/Bloom que ya llevan Mg. En 3-7 días debería mejorar." },
        { elemento: "⚪ Calcio (Ca)", zona: "Hojas nuevas/ápice", sintoma: "Manchitas marrones o negras en hojas nuevas. Los nuevos brotes pueden deformarse. Aspecto de 'quemadura leve' en el ápice.", causa: "Deficiencia de Ca (raro si usas agua grifo decente) o pH demasiado bajo (<6.0).", solucion: "Sube pH a 6.2-6.5. Si sigue así 1 semana, añade cal agrícola (0.5g/L) al agua. Raramente necesario con BioBizz." },
        { elemento: "🔸 Hierro (Fe)", zona: "Hojas nuevas", sintoma: "Amarilleo entre venas en hojas nuevas (opuesto a Mg). Las venas nuevas siguen verdes pero el resto amarilla.", causa: "pH demasiado alto (>7.0) — bloquea la absorción de Fe aunque esté presente.", solucion: "Baja pH a 6.2-6.5 con pH Down. El Fe debería desbloquearse en 3-5 días. Rara vez necesitas añadir Fe extras si el pH es correcto." },
      ].map((def, i) => (
        <div key={i} style={{ background: "#0d1f14", border: "1px solid #1b4332", borderRadius: "10px", padding: "14px", marginBottom: "12px" }}>
          <div style={{ fontSize: "14px", fontWeight: "bold", color: "#d8f3dc", marginBottom: "8px" }}>{def.elemento}</div>
          {[["Dónde aparece", def.zona], ["Síntoma", def.sintoma], ["Causa probable", def.causa], ["Solución", def.solucion]].map(([k, v]) => (
            <div key={k} style={{ marginBottom: "8px" }}>
              <div style={{ fontSize: "10px", color: "#52b788", letterSpacing: "1px", marginBottom: "2px" }}>{k.toUpperCase()}</div>
              <div style={{ fontSize: "12px", color: "#b7e4c7", lineHeight: "1.5" }}>{v}</div>
            </div>
          ))}
        </div>
      ))}

      <SectionTitle>TOXICIDAD — EXCESO DE NUTRIENTES</SectionTitle>
      {[
        { problema: "🔥 Quemadura de nutrientes (Nutrient burn)", sintoma: "Puntas de hojas marrones y crujientes. Empieza en hojas viejas, sube hacia las nuevas. Bordes quemados como si tocara fuego.", causa: "Dosis de nutrientes demasiado alta. Acumulación de sales en el sustrato (EC muy alto).", solucion: "FLUSH INMEDIATAMENTE: riega con agua sola a pH 6.3 sin nutrientes durante 2-3 riegos consecutivos. Reduce la dosis de nutrientes 30-50%. Espera 7 días para volver a nutrientes normales." },
        { problema: "🚫 Bloqueo de nutrientes (Nutrient lockout)", sintoma: "Múltiples síntomas a la vez: hojas amarillas, moradas, puntas quemadas. Aspecto general de 'algo anda mal' pero sin patrón claro.", causa: "pH completamente incorrecto (fuera del rango 5.8-7.0). Aunque los nutrientes estén ahí, la planta no puede tomarlos.", solucion: "MIDE INMEDIATAMENTE el pH del agua que entra y el runoff. Ajusta a 6.2-6.5. Flush con agua a pH 6.3 durante 2-3 riegos. En 5-10 días debería recuperarse si el pH era el problema." },
      ].map((tox, i) => (
        <div key={i} style={{ background: "#1a0a0a", border: "1px solid #4a1010", borderRadius: "10px", padding: "14px", marginBottom: "12px" }}>
          <div style={{ fontSize: "14px", fontWeight: "bold", color: "#ff6b6b", marginBottom: "8px" }}>{tox.problema}</div>
          {[["Síntoma", tox.sintoma], ["Causa", tox.causa], ["Solución", tox.solucion]].map(([k, v]) => (
            <div key={k} style={{ marginBottom: "8px" }}>
              <div style={{ fontSize: "10px", color: "#e63946", letterSpacing: "1px", marginBottom: "2px" }}>{k.toUpperCase()}</div>
              <div style={{ fontSize: "12px", color: "#c9a0a0", lineHeight: "1.5" }}>{v}</div>
            </div>
          ))}
        </div>
      ))}

      <SectionTitle>PROBLEMAS DE RIEGO</SectionTitle>
      {[
        { problema: "💧 Overwatering (exceso de agua)", sintoma: "Hojas caídas y mustias aunque el sustrato esté mojado. Olor desagradable en maceta/sustrato. Crecimiento lento.", causa: "Riego demasiado frecuente. Las raíces se ahogan sin oxígeno.", solucion: "Deja de regar. Espera 3-5 días a que el sustrato se seque completamente. Exterior: asegúrate de que hay buen drenaje en el hoyo. Interior: airea el sustrato si es posible (abre ventilador). La planta se recupera en 5-7 días." },
        { problema: "💀 Underwatering (falta de agua)", sintoma: "Hojas caídas pero el sustrato está SECO. Bordes de hojas secas y crujientes. Crecimiento lentísimo.", causa: "No riegas lo suficiente. La planta no llega a agua.", solucion: "Riega abundantemente hasta que salga agua por los agujeros. Espera a que el sustrato se seque un poco (superficie seca, 2-3cm dentro húmedo) antes de regar de nuevo. Interior: aumenta frecuencia. Exterior: julio puede ser cada 1-2 días." },
      ].map((prob, i) => (
        <div key={i} style={{ background: "#0d1f14", border: "1px solid #1b4332", borderRadius: "10px", padding: "14px", marginBottom: "12px" }}>
          <div style={{ fontSize: "14px", fontWeight: "bold", color: "#d8f3dc", marginBottom: "8px" }}>{prob.problema}</div>
          {[["Síntoma", prob.sintoma], ["Causa", prob.causa], ["Solución", prob.solucion]].map(([k, v]) => (
            <div key={k} style={{ marginBottom: "8px" }}>
              <div style={{ fontSize: "10px", color: "#52b788", letterSpacing: "1px", marginBottom: "2px" }}>{k.toUpperCase()}</div>
              <div style={{ fontSize: "12px", color: "#b7e4c7", lineHeight: "1.5" }}>{v}</div>
            </div>
          ))}
        </div>
      ))}

      <SectionTitle>PROBLEMAS DE LUZ</SectionTitle>
      {[
        { problema: "📏 Luz demasiado cerca", sintoma: "Quemadura de hojas: manchas blancas/grises en el centro de las hojas altas. Hojas crujientes.", causa: "LED/HPS a menos de 20-25cm. El calor quema el tejido.", solucion: "Sube la luz inmediatamente. Prueba con la mano: si quema tu mano, quema la planta. Distancia mínima 25-30cm para LED. Espera 7 días a que se recupere." },
        { problema: "🌱 Luz demasiado lejos", sintoma: "Planta muy alta y delgada. Tallos largos y débiles. Entrenudos grandes (distancia entre nudos).", causa: "LED/HPS a más de 70cm. La planta se estira buscando luz.", solucion: "Baja la luz a 50-60cm. La planta se recupera en 1-2 semanas y los nuevos brotes crecen más compactos. Mejor control de altura." },
      ].map((luz, i) => (
        <div key={i} style={{ background: "#0d1f14", border: "1px solid #1b4332", borderRadius: "10px", padding: "14px", marginBottom: "12px" }}>
          <div style={{ fontSize: "14px", fontWeight: "bold", color: "#d8f3dc", marginBottom: "8px" }}>{luz.problema}</div>
          {[["Síntoma", luz.sintoma], ["Causa", luz.causa], ["Solución", luz.solucion]].map(([k, v]) => (
            <div key={k} style={{ marginBottom: "8px" }}>
              <div style={{ fontSize: "10px", color: "#52b788", letterSpacing: "1px", marginBottom: "2px" }}>{k.toUpperCase()}</div>
              <div style={{ fontSize: "12px", color: "#b7e4c7", lineHeight: "1.5" }}>{v}</div>
            </div>
          ))}
        </div>
      ))}
    </div>
  );
}

function EXTRACCIONES() {
  return (
    <div>
      <InfoBox>
        El trim (recortes de sugar leaves sin resina) no es basura — es material de valor que puedes transformar en hash, mantequilla, aceite u otros productos. Esta guía cubre los métodos más prácticos y seguros para aprovechar tu trim.
      </InfoBox>

      <SectionTitle>ANTES DE EMPEZAR</SectionTitle>
      <Step num={1} text="Guarda el trim en bolsas herméticas en el congelador desde el momento que lo separas." why="El frío conserva los cannabinoides intactos. El trim a temperatura ambiente pierde potencia rápidamente." />
      <Step num={2} text="Solo usa métodos sin solventes químicos (seguridad)." />
      <Step num={3} text="Todas estas técnicas requieren decarboxilación si vas a hacer edibles (mantequilla, aceite)." />

      <SectionTitle>MÉTODO 1: HASH EN SECO (Dry Sift)</SectionTitle>
      <div style={{ background: "#0d1f14", border: "1px solid #1b4332", borderRadius: "10px", padding: "14px", marginBottom: "12px" }}>
        <div style={{ fontSize: "13px", fontWeight: "bold", color: "#74c69d", marginBottom: "10px" }}>La técnica más simple: tamiz + movimiento + frío</div>
        <Step num={1} text="Necesitas: tamiz de malla 73–120µm (puedes comprarlo en Amazon, ~10€), bolsa grande, y el trim congelado." />
        <Step num={2} text="Mete el trim congelado en una bolsa grande. Ciérrala." />
        <Step num={3} text="Coloca el tamiz sobre una bandeja o plato blanco limpio." />
        <Step num={4} text="Sobre el tamiz, pon el trim congelado. Haz movimientos circulares suaves con los dedos — frota el trim contra la malla." />
        <Step num={5} text="Los tricomas (cabezas de resina) caen a través de la malla a la bandeja. El trim se queda arriba." why="El frío mantiene los tricomas quebradizos — se desprenden fácilmente. A temperatura ambiente son pegajosos y se quedan en el trim." />
        <Step num={6} text="Recoge el polvo blanco que cae (eso es kief casi puro). La proporción es típicamente 1-2g de hash por cada 10g de trim seco." />
        <Step num={7} text="Prensa el kief ligeramente con una cuchara caliente (dabber) o con una pequeña prensa manual — forme una bola o pastilla compacta." />
        <Step num={8} text="Cura en bote hermético a oscuridad durante 1-2 semanas. El hash seco se vuelve más potente con el tiempo." why="Durante el curado ocurren conversiones químicas que suavizan el sabor y estabilizan la estructura." />
        <div style={{ background: "#162a1e", borderLeft: "3px solid #40916c", padding: "8px 10px", borderRadius: "0 6px 6px 0", fontSize: "12px", color: "#74c69d", lineHeight: "1.5", marginTop: "8px" }}>
          <span style={{ color: "#52b788", fontWeight: "bold" }}>Resultado: </span>Hash en seco color marrón claro, sabor fuerte, se puede fumar o vaporizar. Muy fácil de hacer.
        </div>
      </div>

      <SectionTitle>MÉTODO 2: HASH DE AGUA (Bubble Hash)</SectionTitle>
      <div style={{ background: "#0d1f14", border: "1px solid #1b4332", borderRadius: "10px", padding: "14px", marginBottom: "12px" }}>
        <div style={{ fontSize: "13px", fontWeight: "bold", color: "#74c69d", marginBottom: "10px" }}>Más trabajo pero resultado más limpio y potente</div>
        <Step num={1} text="Necesitas: dos baldes (5-10L), hielo, agua, bolsas de burbujas (bubble bags, ~30€ un set), colador de tela." />
        <Step num={2} text="Llena un balde con agua fría (2L) y hielo (mucho hielo). Pon el trim congelado dentro." />
        <Step num={3} text="Agita vigorosamente durante 15-20 minutos. El hielo y el movimiento hacen que los tricomas se desprendan y caigan al agua." />
        <Step num={4} text="Mete las bubble bags en orden de micrones (empezando por la más gruesa) dentro del segundo balde vacío. Vierte lentamente el agua con trim en las bolsas." why="Las bolsas retienen diferentes tamaños de partículas. Cada bolsa recoge hash de diferente calidad (pureza)." />
        <Step num={5} text="El material más fino y puro queda en las bolsas más finas (última bolsa). Eso es el hash." />
        <Step num={6} text="Recoge el hash de cada bolsa con una espátula. Aprieta suavemente para eliminar agua." />
        <Step num={7} text="Deja secar en una bandeja en lugar oscuro y con airflow durante 2-3 semanas. Remueve cada 2-3 días para secar uniformemente." />
        <div style={{ background: "#162a1e", borderLeft: "3px solid #40916c", padding: "8px 10px", borderRadius: "0 6px 6px 0", fontSize: "12px", color: "#74c69d", lineHeight: "1.5", marginTop: "8px" }}>
          <span style={{ color: "#52b788", fontWeight: "bold" }}>Resultado: </span>Hash de agua color marrón oscuro/negro, muy puro y potente, sabor limpio. Se fuma, vaporiza o derrite (rosin).
        </div>
      </div>

      <SectionTitle>MÉTODO 3: MANTEQUILLA CANNÁBICA (Edibles)</SectionTitle>
      <div style={{ background: "#0d1f14", border: "1px solid #1b4332", borderRadius: "10px", padding: "14px", marginBottom: "12px" }}>
        <div style={{ fontSize: "13px", fontWeight: "bold", color: "#74c69d", marginBottom: "10px" }}>Convierte trim en mantequilla para brownies, galletas, etc.</div>
        <Step num={1} text="PASO IMPRESCINDIBLE - Decarboxilación: calienta el trim en el horno a 110°C durante 45 minutos en una bandeja forrada con papel." why="Sin decarboxilación los cannabinoides THCA y CBDA no se activan — no tendrías efecto. La decarb convierte THCA → THC." />
        <Step num={2} text="Necesitas: mantequilla (200g por cada 30g de trim), una olla, un termómetro (importante), colador de tela fina." />
        <Step num={3} text="Derrite la mantequilla a fuego bajo (máximo 90°C, no debe humear)." />
        <Step num={4} text="Añade el trim decarboxilado a la mantequilla derretida. Mezcla bien." />
        <Step num={5} text="Mantén a 75-85°C durante 2-4 horas (lento y bajo = mejor). Remueve cada 15-20 minutos." why="La infusión a baja temperatura es clave — el calor alto degrada los cannabinoides. Un termómetro es vital." />
        <Step num={6} text="Cuela con la tela fina en un recipiente limpio. Exprime bien el trim para extraer toda la mantequilla." />
        <Step num={7} text="Deja reposar en la nevera hasta que la mantequilla se solidifique. La sustancia oscura que cae al fondo es agua + impurezas — descártala." />
        <Step num={8} text="La mantequilla clara de arriba es tu 'cannabutter' lista. Úsala en cualquier receta de repostería (chocolate, brownies, galletas)." why="Funciona mejor en recetas con grasa (mantequilla, chocolate). En bebidas calientes (té) funciona pero el sabor es fuerte." />
        <div style={{ background: "#162a1e", borderLeft: "3px solid #40916c", padding: "8px 10px", borderRadius: "0 6px 6px 0", fontSize: "12px", color: "#74c69d", lineHeight: "1.5", marginTop: "8px" }}>
          <span style={{ color: "#52b788", fontWeight: "bold" }}>Resultado: </span>Mantequilla infusionada lista para edibles. Sabor más suave que fumar. Efecto más duradero (4-6h vs 2-3h al fumar).
        </div>
      </div>

      <SectionTitle color="#e63946">⚠️ PRECAUCIONES DE SEGURIDAD</SectionTitle>
      <div style={{ background: "#1a0a0a", border: "1px solid #4a1010", borderRadius: "10px", padding: "14px" }}>
        <div style={{ fontSize: "12px", color: "#c9a0a0", lineHeight: "1.6" }}>
          <strong>NO uses solventes:</strong> butano, hexano, acetona — son tóxicos, explosivos y dejan residuos peligrosos.<br/>
          <strong>Ventilación:</strong> si decarboxilas, pon el horno en ventilación buena — tendrá olor fuerte.<br/>
          <strong>Temperatura:</strong> nunca expongas cannabis a más de 110°C sin estar en agua/grasa (riesgo de quemar cannabinoides).<br/>
          <strong>Almacenaje:</strong> guarda edibles y extracciones fuera del alcance de niños y mascotas.
        </div>
      </div>
    </div>
  );
}

function FAQ() {
  return (
    <div>
      <InfoBox>
        Preguntas comunes de cultivadores principiantes. Si tu situación no está aquí, navega al Diagnóstico para síntomas más específicos.
      </InfoBox>

      <SectionTitle>PROBLEMAS DE CRECIMIENTO</SectionTitle>
      {[
        { q: "Mi planta está amarilla. ¿Qué hago?", r: "Tres causas principales: 1) Deficiencia de N (hojas bajas amarillas) — aumenta Bio Grow. 2) pH incorrecto — mide pH, ajusta a 6.2-6.5. 3) Edad (últimas semanas floración) — es normal. Primero mide pH, luego añade nutrientes si hace falta." },
        { q: "La planta no crece nada. Está parada hace 2 semanas.", r: "Causa #1: Overwatering — deja secar completamente 3-5 días. Causa #2: Luz demasiado lejos — bájala a 50-60cm. Causa #3: Temperatura <18°C — sube a 22°C mínimo. Causa #4: Suelo encharcado/sin drenaje — en exterior verifica que el hoyo drena bien." },
        { q: "¿Cuándo cosechar? ¿Cómo sé que está lista?", r: "Interior: mira los tricomas con lupa de aumento. 60-70% lechosos (blancos) = primer punto de cosecha, efecto energético. 80-90% lechosos = punto ideal. Algunos ámbar = más sedante. Exterior: espera a 70-80% lechosos, o cosecha antes si lluvia inminente." },
        { q: "Las hojas están rizadas hacia arriba. ¿Qué es?", r: "Calor o falta de agua. Mide temperatura — si está >28°C, sube extractor. Si el sustrato está seco, riega. Si es exterior, es normal en días muy calurosos — se recupera por la noche." },
        { q: "Las hojas están colgando/droopy. Acababa de regar.", r: "Overwatering. El sustrato está muy mojado y las raíces sin oxígeno. Deja de regar 5 días. Abre ventilador si es interior. La planta se recupera." },
      ].map((item, i) => (
        <div key={i} style={{ background: "#0d1f14", border: "1px solid #1b4332", borderRadius: "10px", padding: "14px", marginBottom: "12px" }}>
          <div style={{ fontSize: "13px", fontWeight: "bold", color: "#d8f3dc", marginBottom: "8px" }}>❓ {item.q}</div>
          <div style={{ fontSize: "12px", color: "#b7e4c7", lineHeight: "1.6" }}>{item.r}</div>
        </div>
      ))}

      <SectionTitle>PROBLEMAS DE NUTRIENTES Y pH</SectionTitle>
      {[
        { q: "¿Debo medir el pH? ¿Es realmente necesario?", r: "SÍ. Es la causa raíz de 50% de los problemas. Si el pH está mal, los nutrientes están ahí pero bloqueados. El pHmetro cuesta 20€ y vale cada céntimo. Interior: 6.2-6.5. Exterior: 6.0-7.0. Sin medidor estarás disparando a ciegas." },
        { q: "¿Qué es el runoff? ¿Debo medirlo?", r: "Agua que drena por los agujeros de abajo cuando riegas. Mide su pH con tu pHmetro. Si difiere >0.5 puntos del agua que entraste, hay bloqueo de nutrientes (acumulación de sales). Solución: flush 2-3 días con agua sola a pH 6.3." },
        { q: "Añadí nutrientes y empeó todo. ¿Qué hago?", r: "Probablemente nutrient burn. PARA de añadir nutrientes inmediatamente. Haz un flush: riega con agua sola a pH 6.3 durante 2-3 riegos consecutivos. Luego vuelve a nutrientes con dosis 50% menor." },
        { q: "En exterior el pH sube solo en el depósito. ¿Qué es?", r: "Algas. El agua llena en un depósito abierto y expuesto a luz crece algas — cambiar pH. Solución: cubre el depósito con tapa opaca o bolsa negra. Las algas mueren sin luz. O: cambia el agua cada 2-3 días." },
        { q: "¿Qué hago si no tengo acceso a pH Down en exterior?", r: "Urgencia: usa zumo de limón (ácido cítrico) — baja pH naturalmente. 2-3 gotas por litro. No es exacto pero funciona. Para la próxima: lleva pH Down de casa en una botella pequeña (cuesta 5€)." },
      ].map((item, i) => (
        <div key={i} style={{ background: "#0d1f14", border: "1px solid #1b4332", borderRadius: "10px", padding: "14px", marginBottom: "12px" }}>
          <div style={{ fontSize: "13px", fontWeight: "bold", color: "#d8f3dc", marginBottom: "8px" }}>❓ {item.q}</div>
          <div style={{ fontSize: "12px", color: "#b7e4c7", lineHeight: "1.6" }}>{item.r}</div>
        </div>
      ))}

      <SectionTitle>PROBLEMAS DE SETUP Y CLIMA</SectionTitle>
      {[
        { q: "El extractor no crea presión negativa. ¿Por qué?", r: "Causas: 1) Tubo no sellado bien — revisa que no haya fugas de aire. 2) Filtro de carbón saturado — cámbialo. 3) Extractor muy débil — actualiza a uno más potente. 4) Entrada de aire obstruida — asegúrate que entra aire (rejilla abierta en la puerta o pared)." },
        { q: "La humedad es demasiado baja (30%). ¿Qué hago?", r: "Interior: cuelga toallas mojadas en las esquinas (se evaporan). O: apaga el extractor 1-2 horas. O: moja el suelo y las paredes. Exterior: es normal en julio — no hay mucho que hacer. Asegúrate de riego frecuente." },
        { q: "Llueve mucho (exterior). ¿Protejo la planta?", r: "Un poco de lluvia es bueno (agua gratis). Demasiada lluvia = Botrytis en floración. Si llueve días seguidos en septiembre-octubre: abre cogollos para ver si hay moho. Toldo temporal sobre la planta si puedes sin bloquear luz/aire." },
        { q: "¿Luz 24h o 18/6 en interior para autos?", r: "Autos florecen solas, no dependen del fotoperiodo. 20/4 es estándar (20h luz, 4h oscuridad) — menos gasto eléctrico que 24h. 18/6 también funciona. La mayoría usa 20/4." },
        { q: "¿Puedo cultivar con luz natural exterior en febrero?", r: "No. Los días en febrero son demasiado cortos (<12h). Las plantas fotoperiodo florecen sola sin querer. Espera a marzo-mayo para germinar. Si quieres en invierno: cultiva autos o usa luz artificial interior." },
      ].map((item, i) => (
        <div key={i} style={{ background: "#0d1f14", border: "1px solid #1b4332", borderRadius: "10px", padding: "14px", marginBottom: "12px" }}>
          <div style={{ fontSize: "13px", fontWeight: "bold", color: "#d8f3dc", marginBottom: "8px" }}>❓ {item.q}</div>
          <div style={{ fontSize: "12px", color: "#b7e4c7", lineHeight: "1.6" }}>{item.r}</div>
        </div>
      ))}

      <SectionTitle>PROBLEMAS MENOS COMUNES</SectionTitle>
      {[
        { q: "¿Puedo reutilizar el sustrato del año pasado?", r: "No recomendado. El sustrato se compacta y agota sus nutrientes. Para una nueva temporada compra sustrato fresco (BioBizz Light Mix). Si quieres reutilizar: mezcla 50% sustrato viejo + 50% nuevo y añade bacteria benéfica (Mycorrhizae)." },
        { q: "Me olvidé de regar 5 días. ¿Está muerta?", r: "Probablemente no. Aunque parecer marchita, las raíces pueden estar vivas. Riega abundantemente y espera 2-3 días. Si recupera turgencia (hojas firmes) está salvada. Si sigue marchita tras 5 días, está muerta." },
        { q: "¿Puedo dejar las plantas solas 2 semanas en julio?", r: "NO en julio (pico de calor). Las plantas mueren sin agua en 2-3 días. Con riego automático a goteros: sí, funciona. Sin automático: pide a alguien que visite cada 1-2 días, o escurza las plantas." },
        { q: "¿Qué hago con las plantas después de cosechar?", r: "Interior: limpia el armario (vacía, deja 24h con luz + extractor para secar). Sustrato viejo desecha o reutiliza mezclado 50/50. Exterior: limpia completamente el spot — no dejes trazas." },
      ].map((item, i) => (
        <div key={i} style={{ background: "#0d1f14", border: "1px solid #1b4332", borderRadius: "10px", padding: "14px", marginBottom: "12px" }}>
          <div style={{ fontSize: "13px", fontWeight: "bold", color: "#d8f3dc", marginBottom: "8px" }}>❓ {item.q}</div>
          <div style={{ fontSize: "12px", color: "#b7e4c7", lineHeight: "1.6" }}>{item.r}</div>
        </div>
      ))}
    </div>
  );
}


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

function TIMELINE({ navigate }) {
  const [tab, setTab] = useState("interior");

  const interiorNodes = [
    { semana: "Semana 0", titulo: "Preparación del armario", emoji: "📦", desc: "Monta el armario, instala el LED, extractor y filtro. Prueba 24h sin plantas. Verifica presión negativa.", mode: "interior", phase: "antes", color: "#2d6a4f" },
    { semana: "Semana 1", titulo: "Germinación", emoji: "🥚", desc: "Semilla en agua 12-18h, luego papel húmedo en tupper a 22°C. En 3-5 días sale la radícula. Planta cuando mide 1-2cm.", mode: "interior", phase: "germinacion", color: "#40916c" },
    { semana: "Semanas 1-3", titulo: "Plántula", emoji: "🌱", desc: "Solo agua con pH 6.2-6.5. Sin nutrientes. Riega solo cuando el sustrato esté seco. Luz a 60-70cm.", mode: "interior", phase: "vegetativa", color: "#52b788" },
    { semana: "Semanas 3-5", titulo: "Vegetativa", emoji: "🌿", desc: "Empieza con Bio Grow a 1ml/L. Baja la luz gradualmente. Riego cuando el sustrato esté seco a 2cm. Observa hojas para leer la planta.", mode: "interior", phase: "vegetativa", color: "#52b788" },
    { semana: "Semana 3-4", titulo: "LST (opcional)", emoji: "📐", desc: "Dobla las ramas hacia fuera y fíjalas con clips para que la planta crezca en abanico. Más luz = más cogollos.", mode: "interior", phase: "poda", color: "#74c69d", optional: true },
    { semana: "Semana 5\n(Fotoperiodo)", titulo: "Cambiar a 12/12h", emoji: "⏱️", desc: "SOLO si usas semillas fotoperiodo (White Widow): cuando la planta mida 40-50cm, cambia el temporizador a 12h/12h. Las auto florecen solas.", mode: "interior", phase: "floracion", color: "#95d5b2", highlight: true },
    { semana: "Semanas 5-12", titulo: "Floración", emoji: "🌸", desc: "Cambia a Bio Bloom. Baja la humedad al 40-50%. Mira los tricomas semanalmente con la lupa. Lavado de raíces las 2 últimas semanas.", mode: "interior", phase: "floracion", color: "#b7e4c7" },
    { semana: "Semana 12-13", titulo: "Cosecha y secado", emoji: "✂️", desc: "Cuando el 70-80% de tricomas sean lechosos. Cuelga ramas boca abajo 10-14 días. Test de la ramita antes del bote.", mode: "interior", phase: "cosecha", color: "#d8f3dc" },
    { semana: "Semanas 14-18", titulo: "Curado", emoji: "🫙", desc: "Mason jars al 75%. Burping 15 min al día. Higrómetro dentro: 58-65%. Mínimo 2 semanas, 4 es mucho mejor.", mode: "general", phase: "cosecha_gen", color: "#e8f5e9" },
  ];

  const exteriorNodes = [
    { semana: "Marzo-Mayo", titulo: "Germinación en casa", emoji: "🥚", desc: "Semilla en agua, luego papel húmedo. Plántula en vasito en el alféizar. 2-3 semanas hasta 10-15cm. Asegúrate de que las noches > 12°C antes de salir.", mode: "exterior", phase: "germinacion_ext", color: "#2d6a4f" },
    { semana: "Finales de mayo", titulo: "Trasplante al bosque", emoji: "🌲", desc: "Hoyo 50×50×50cm mínimo. Mezcla tierra + Light Mix 50/50. Riega abundantemente. Sombra los primeros 2-3 días.", mode: "exterior", phase: "ubicacion", color: "#40916c" },
    { semana: "Junio", titulo: "Vegetativa temprana", emoji: "🌿", desc: "Bio Grow 2ml/L. Riego cuando el suelo esté seco a 3-4cm. Primera aplicación de Bt. Pon acolchado alrededor de la base.", mode: "exterior", phase: "fases_ext", color: "#52b788" },
    { semana: "Julio", titulo: "Vegetativa máxima", emoji: "🌿", desc: "Pico de calor y crecimiento. Riego casi diario. Pon tutores. Aplica Bt cada 2 semanas. Vigilancia de plagas en cada visita.", mode: "exterior", phase: "riego_ext", color: "#52b788" },
    { semana: "Agosto", titulo: "Inicio floración automática", emoji: "🌸", desc: "Los días se acortan. La planta florece sola — verás pelos blancos en los nudos. Cambia a Bio Bloom. Reduce humedad si es alta.", mode: "exterior", phase: "fases_ext", color: "#b7e4c7" },
    { semana: "Septiembre", titulo: "Floración avanzada — MES CRÍTICO", emoji: "⚠️", desc: "Visita 2x/semana. Busca Botrytis abriendo cogollos. Lavado de raíces semanas 4-5. Añade tutores. Mira tricomas semanalmente.", mode: "exterior", phase: "plagas", color: "#f4a261", highlight: true },
    { semana: "Octubre", titulo: "Cosecha en el bosque", emoji: "✂️", desc: "70-80% tricomas lechosos = cosechar. Con lluvia prevista y 60% lechosos: cosecha ya. Bolsas herméticas. Limpia el spot.", mode: "exterior", phase: "cosecha_ext", color: "#d8f3dc" },
    { semana: "Octubre-Dic", titulo: "Secado y curado", emoji: "🫙", desc: "Idéntico al interior. 10-14 días secando. Test de la ramita. Mason jars, burping diario, higrómetro dentro. 4 semanas mínimo.", mode: "general", phase: "cosecha_gen", color: "#e8f5e9" },
  ];

  const nodes = tab === "interior" ? interiorNodes : exteriorNodes;

  return (
    <div>
      <InfoBox>
        El timeline te muestra el proceso completo de principio a fin. Haz clic en cualquier nodo para ir directamente a la sección correspondiente de la guía.
      </InfoBox>

      {/* Tab selector */}
      <div style={{ display: "flex", background: "#0d1f14", borderRadius: "10px", padding: "4px", gap: "4px", marginBottom: "24px" }}>
        {[{ id: "interior", label: "🏠 Interior" }, { id: "exterior", label: "🌲 Exterior" }].map(t => (
          <button key={t.id} onClick={() => setTab(t.id)} style={{
            flex: 1, padding: "10px", border: "none", borderRadius: "8px",
            background: tab === t.id ? "#2d6a4f" : "transparent",
            color: tab === t.id ? "#d8f3dc" : "#52b788",
            cursor: "pointer", fontSize: "13px", fontWeight: "bold",
            fontFamily: "Georgia, serif",
          }}>{t.label}</button>
        ))}
      </div>

      {/* Timeline */}
      <div style={{ position: "relative", paddingLeft: "20px" }}>
        {/* Línea vertical */}
        <div style={{ position: "absolute", left: "19px", top: "20px", bottom: "20px", width: "2px", background: "linear-gradient(to bottom, #2d6a4f, #52b788, #d8f3dc)", borderRadius: "1px" }} />

        {nodes.map((node, i) => (
          <div key={i} style={{ position: "relative", marginBottom: "6px" }}>
            {/* Nodo clickable */}
            <button
              onClick={() => navigate(node.mode, node.phase)}
              style={{
                width: "100%", textAlign: "left", border: "none", cursor: "pointer",
                background: "transparent", padding: 0, fontFamily: "Georgia, serif",
              }}
            >
              <div style={{
                display: "flex", gap: "14px", alignItems: "flex-start",
                background: node.highlight ? "#1a3a20" : "#0d1f14",
                border: `1px solid ${node.highlight ? node.color : "#1b4332"}`,
                borderRadius: "10px", padding: "12px 14px",
                marginLeft: "20px",
                transition: "all 0.2s",
              }}
                onMouseEnter={e => e.currentTarget.style.background = "#1b4332"}
                onMouseLeave={e => e.currentTarget.style.background = node.highlight ? "#1a3a20" : "#0d1f14"}
              >
                {/* Círculo del nodo */}
                <div style={{
                  position: "absolute", left: "-2px", top: "50%", transform: "translateY(-50%)",
                  width: "14px", height: "14px", borderRadius: "50%",
                  background: node.color, border: "2px solid #0a1a0f",
                  flexShrink: 0, zIndex: 1,
                }} />

                <div style={{ fontSize: "22px", flexShrink: 0, lineHeight: 1 }}>{node.emoji}</div>
                <div style={{ flex: 1 }}>
                  <div style={{ display: "flex", justifyContent: "space-between", alignItems: "flex-start", marginBottom: "4px" }}>
                    <div style={{ fontSize: "13px", fontWeight: "bold", color: node.color }}>{node.titulo}</div>
                    {node.optional && <div style={{ fontSize: "9px", color: "#52b788", background: "#1b4332", padding: "2px 6px", borderRadius: "4px", flexShrink: 0, marginLeft: "8px" }}>OPCIONAL</div>}
                  </div>
                  <div style={{ fontSize: "10px", color: "#40916c", marginBottom: "5px" }}>{node.semana}</div>
                  <div style={{ fontSize: "12px", color: "#74c69d", lineHeight: "1.5" }}>{node.desc}</div>
                  <div style={{ fontSize: "10px", color: "#2d6a4f", marginTop: "6px" }}>→ Ver sección completa</div>
                </div>
              </div>
            </button>
          </div>
        ))}
      </div>
    </div>
  );
}

// TABS Y COMPONENTES PARA GUÍA DE SETAS PSILOCYBE CUBENSIS

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

// Helper components para setas con paleta mushroom
