// Cannabis interior cultivation components

function COMPRA() {
  const priorityColor = { "ESENCIAL": "#e63946", "IMPORTANTE": "#f4a261", "ÚTIL": "#52b788" };
  const [filterPriority, setFilterPriority] = React.useState([]);
  const [filterDonde, setFilterDonde] = React.useState([]);
  const togglePriority = (p) => setFilterPriority(s => s.includes(p) ? s.filter(x => x !== p) : [...s, p]);
  const toggleDonde = (d) => setFilterDonde(s => s.includes(d) ? s.filter(x => x !== d) : [...s, d]);
  const matchesFilter = (item) =>
    (filterPriority.length === 0 || filterPriority.includes(item.priority)) &&
    (filterDonde.length === 0 || filterDonde.includes(item.donde));
  const sections = [
    {
      title: "🏠 KIT BASE",
      items: [
        {
          name: "Kit cultivo interior 80×80 completo",
          price: "400–600€", priority: "ESENCIAL", donde: null,
          detail: "El kit completo incluye: armario 80×80×180cm, LED 240W, extractor en línea 100mm, filtro de carbón 100mm, controlador de clima, ventilador de pinza, temporizador 24h, tubo flexible, poleas y bridas. Marcas recomendadas: Mammoth, Secret Jardin, Spider Farmer. OJO: el kit NO incluye macetas — hay que comprarlas aparte.",
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
          price: "12€", priority: "ESENCIAL", donde: "Internet",
          detail: "Es la tierra donde crecerán tus plantas. Light Mix tiene muy pocos nutrientes de base, lo que significa que no quemará las raíces cuando empieces. Es la opción más segura para principiantes. Un saco de 50L es suficiente para 2 plantas en macetas de 11L con sobras para las siguientes rondas.",
          duracion: "1–2 cosechas por saco",
        },
        {
          name: "Macetas de tela 11L (pack de 3-5)",
          price: "10–20€", priority: "ESENCIAL", donde: "Internet",
          detail: "Las macetas de tela permiten que el aire entre por los laterales, lo que hace que las raíces crezcan mejor que en plástico. Úsalas para las plantas definitivas. El kit NO incluye macetas — esto es lo primero que mucha gente olvida comprar.",
          duracion: "Permanentes, reutilizables",
        },
        {
          name: "Platos para macetas (juego de 3-5)",
          price: "5–15€", priority: "ESENCIAL", donde: "Internet",
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
          price: "30–40€", priority: "ESENCIAL", donde: "Internet",
          detail: "El abono para la fase de crecimiento (vegetativa). Rico en nitrógeno, que es lo que necesita la planta para crecer en tamaño. Dosis: 1–2ml por litro de agua de riego. Empieza en la semana 3 desde que germina. Con 1L tienes para 3–4 cosechas.",
          cuando: "Semana 3 de vegetativa hasta que aparecen los primeros pelos blancos (pistilos)",
          duracion: "3–4 cosechas con 1L",
        },
        {
          name: "BioBizz Top·Max — 250ml",
          price: "12–18€", priority: "IMPORTANTE", donde: "Internet",
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
          price: "8–15€", priority: "ESENCIAL", donde: "Internet",
          detail: "El agua del grifo suele tener pH 7–8, pero las plantas necesitan agua entre pH 6.2 y 6.5 para absorber los nutrientes correctamente. Este líquido baja el pH — solo necesitas unas pocas gotas por litro. 500ml te dura literalmente años.",
          duracion: "Años",
        },
        {
          name: "pHmetro digital",
          price: "15–30€", priority: "ESENCIAL", donde: "Internet",
          detail: "Un aparato pequeño que metes en el agua y te dice exactamente el pH. Sin esto no puedes saber si el agua está bien. Guárdalo siempre con la punta en la solución de almacenamiento para que no se estropee.",
          duracion: "Permanente (calibrar cada mes)",
        },
        {
          name: "Kit soluciones de calibración pH (pH 4 y pH 7)",
          price: "8–15€", priority: "IMPORTANTE", donde: "Internet",
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
          price: "8–15€", priority: "ESENCIAL", donde: "Internet",
          detail: "Un aparatito pequeño que mide temperatura y humedad dentro del armario. Lo colocas a la altura de las plantas. Sin esto no puedes saber si el clima está bien. ",
          duracion: "Permanente",
        },
        {
          name: "Lupa de bolsillo 60x",
          price: "5–12€", priority: "ESENCIAL", donde: "Internet",
          detail: "Una lupa pequeña de bolsillo que se usa para mirar los tricomas (las gotitas de resina) de los cogollos y saber exactamente cuándo cosechar. Sin ella no puedes saber el momento óptimo de cosecha. ",
          duracion: "Permanente",
        },
        {
          name: "Higrómetros mini para botes de curado (x2-3)",
          price: "6–12€", priority: "IMPORTANTE", donde: "Internet",
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
          price: "10–20€", priority: "ESENCIAL", donde: "Internet",
          detail: "El cuello largo y fino permite dirigir el agua exactamente donde quieres sin mojar el tallo ni las hojas. Las regaderas normales de boca ancha son muy difíciles de usar en macetas. ",
          duracion: "Permanente",
        },
        {
          name: "Spray de precisión 500ml",
          price: "3–8€", priority: "ESENCIAL", donde: "Internet",
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
          price: "15–35€", priority: "IMPORTANTE", donde: "Internet",
          detail: "Sistema de tubos finos con goteros y un temporizador que riega automáticamente. Reduce las aperturas del armario al mínimo — abres solo 1 vez por semana para revisión. ",
          cuando: "Desde semana 2–3 de vegetativa. Las primeras semanas riega a mano con spray.",
          duracion: "Permanente",
        },
        {
          name: "Depósito de agua 15-20L con tapa",
          price: "10–20€", priority: "IMPORTANTE", donde: "Internet",
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
          price: "~10–20€", priority: "ESENCIAL", donde: "Internet",
          detail: "Para recortar las hojas pequeñas alrededor de los cogollos en la cosecha (manicura). Las baratas de tienda física se pegan de resina rápido. Límplalas con alcohol isopropílico mientras trabajas. En internet busca 'tijeras manicura cogollos' o 'bud trimming scissors'.",
          duracion: "Permanente",
        },
        {
          name: "Botes Mason jar herméticos 1L (pack de 4)",
          price: "~15–20€", priority: "ESENCIAL", donde: "Internet",
          detail: "Para el curado de los cogollos tras el secado. Deben ser de cristal hermético — el plástico no funciona igual y puede dar sabor. Llénalos al 75% de su capacidad. ",
          duracion: "Permanente",
        },
        {
          name: "Guantes de nitrilo (caja 100 uds)",
          price: "~8€", priority: "IMPORTANTE", donde: "Internet",
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
          price: "3–8€", priority: "ESENCIAL", donde: "Internet",
          detail: "Para sellar el tubo de extracción donde pasa por la ventana y tapar cualquier hueco alrededor. Un trapo viejo enrollado también sirve si no tienes cinta en casa.",
          duracion: "Permanente",
        },
        {
          name: "ONA Gel neutralizador de olores — 1L",
          price: "15–30€", priority: "IMPORTANTE", donde: "Internet",
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
          price: "~5–8€", priority: "IMPORTANTE", donde: "Internet",
          detail: "Para limpiar las tijeras de manicura cuando se llenan de resina (cada 10–15 minutos de trabajo). También para limpiar el pHmetro y cualquier herramienta. En internet o farmacia.",
          duracion: "Mucho tiempo",
        },
        {
          name: "Pinzas de punta fina (acero inoxidable)",
          price: "3–10€", priority: "ESENCIAL", donde: "Internet",
          detail: "Para manipular las semillas durante la germinación sin tocarlas con los dedos. Los aceites naturales de la piel pueden contaminar la semilla. Cualquier pinzas de punta fina sirven.",
          duracion: "Permanente",
        },
        {
          name: "Sílica gel (desecante) — sobrecitos",
          price: "~3–5€", priority: "IMPORTANTE", donde: "Internet",
          detail: "Para guardar las semillas que no uses todavía. Un sobrecito de sílica gel en el bote de cristal absorbe la humedad y mantiene las semillas en perfecto estado durante años. En internet busca 'silica gel sobres desecantes'.",
          duracion: "Permanente",
        },
      ]
    },
  ];

  const dondeColors = {
    "Internet": { bg: "#2a1a0d", border: "#8a5a1a", text: "#d5a074" },
    "Grow shop": { bg: "#0d2a14", border: "#2d6a4f", text: "#74c69d" },
    "Farmacia": { bg: "#0d2a3a", border: "#1a6b8a", text: "#74c6d5" },
    "Tienda física": { bg: "#1a0d2a", border: "#5a3a8a", text: "#b474d5" },
    "Gratis": { bg: "#0d1f14", border: "#52b788", text: "#95d5b2" },
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
          <span style={{ fontSize: "12px", color: "#74c69d" }}>Grow shop (kit + semillas)</span>
          <span style={{ fontSize: "13px", color: "#95d5b2" }}>~500–650€</span>
        </div>
        <div style={{ display: "flex", justifyContent: "space-between", marginBottom: "8px" }}>
          <span style={{ fontSize: "12px", color: "#74c69d" }}>Internet (accesorios)</span>
          <span style={{ fontSize: "13px", color: "#95d5b2" }}>~200–300€</span>
        </div>
        <div style={{ display: "flex", justifyContent: "space-between" }}>
          <span style={{ fontSize: "12px", color: "#74c69d" }}>Coste recurrente por cosecha</span>
          <span style={{ fontSize: "13px", color: "#95d5b2" }}>~60–80€</span>
        </div>
      </div>

      {/* Filtros clickables */}
      <div style={{ marginBottom: "20px" }}>
        <div style={{ fontSize: "10px", letterSpacing: "2px", color: "#52b788", marginBottom: "8px" }}>FILTRAR POR PRIORIDAD</div>
        <div style={{ display: "flex", gap: "6px", marginBottom: "12px", flexWrap: "wrap" }}>
          {[["ESENCIAL", "#e63946"], ["IMPORTANTE", "#f4a261"], ["ÚTIL", "#52b788"]].map(([label, color]) => {
            const active = filterPriority.includes(label);
            return (
              <button key={label} onClick={() => togglePriority(label)} style={{
                background: active ? color : "transparent",
                color: active ? "#0a1a0f" : color,
                border: `1.5px solid ${color}`,
                borderRadius: "16px",
                padding: "5px 12px",
                fontSize: "11px",
                fontWeight: "bold",
                letterSpacing: "0.5px",
                transition: "all 0.15s",
              }}>{label}</button>
            );
          })}
        </div>
        <div style={{ fontSize: "10px", letterSpacing: "2px", color: "#52b788", marginBottom: "8px" }}>FILTRAR POR DÓNDE COMPRAR</div>
        <div style={{ display: "flex", gap: "6px", flexWrap: "wrap" }}>
          {[...new Set(sections.flatMap(s => s.items.map(i => i.donde).filter(Boolean)))].map(label => {
            const c = dondeColors[label] || { bg: "#1a1a1a", border: "#444", text: "#aaa" };
            const active = filterDonde.includes(label);
            return (
              <button key={label} onClick={() => toggleDonde(label)} style={{
                background: active ? c.text : "transparent",
                color: active ? c.bg : c.text,
                border: `1.5px solid ${c.text}`,
                borderRadius: "16px",
                padding: "5px 12px",
                fontSize: "11px",
                fontWeight: "bold",
                letterSpacing: "0.5px",
                transition: "all 0.15s",
              }}>{label}</button>
            );
          })}
        </div>
        {(filterPriority.length > 0 || filterDonde.length > 0) && (
          <button onClick={() => { setFilterPriority([]); setFilterDonde([]); }} style={{
            background: "transparent", color: "#74c69d", border: "none",
            fontSize: "11px", marginTop: "10px", textDecoration: "underline", padding: 0,
          }}>✕ Limpiar filtros</button>
        )}
      </div>

      {sections.map((section, si) => {
        const filteredItems = section.items.filter(matchesFilter);
        if (filteredItems.length === 0) return null;
        return (
          <div key={si} style={{ marginBottom: "24px" }}>
            <div style={{ fontSize: "10px", letterSpacing: "2px", color: "#52b788", marginBottom: "10px", paddingBottom: "6px", borderBottom: "1px solid #1b4332" }}>
              {section.title}
            </div>
            {filteredItems.map((item, ii) => (
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
                  {item.donde && <div style={{ fontSize: "10px", padding: "2px 8px", borderRadius: "10px", background: dondeColors[item.donde]?.bg, color: dondeColors[item.donde]?.text, border: `1px solid ${dondeColors[item.donde]?.border}` }}>📍 {item.donde}</div>}
                </div>
              </div>
            ))}
          </div>
        );
      })}
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
          name: "Black Diamond Auto",
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
      <Step num={7} text={<>Revisa cada 12 horas sin mover demasiado. En 2–5 días verás salir una raíz blanca (<GlossaryLink guide="cannabis" term="Radícula">radícula</GlossaryLink>).</>} />
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
        En esta fase (<GlossaryLink guide="cannabis" term="Vegetativa (fase)">Vegetativa</GlossaryLink>) la planta solo crece en tamaño — raíces, tallo, hojas. No florece todavía. Tu único trabajo es no matar la planta. Menos intervención = mejor resultado.
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
          { tipo: <>🌱 <GlossaryLink guide="cannabis" term="Autofloreciente">Autofloreciente</GlossaryLink></>, como: <>Florece sola a los 30-35 días sin que hagas nada. No cambies el temporizador.</>, accion: <>Solo observa — verás aparecer pelos blancos (<GlossaryLink guide="cannabis" term="Pistilo">pistilos</GlossaryLink>) en los <GlossaryLink guide="cannabis" term="Nudo">nudos</GlossaryLink>.</> },
          { tipo: <>🌿 <GlossaryLink guide="cannabis" term="Fotoperiodo">Fotoperiodo</GlossaryLink> (ej. Critical King)</>, como: <>NO florece sola. Necesitas cambiar el temporizador a 12h luz / 12h oscuridad (<GlossaryLink guide="cannabis" term="Ciclo 12/12">ciclo 12/12</GlossaryLink>).</>, accion: <>Cuando la planta llegue a 40-55cm (según tu armario), cambia el temporizador a 12/12h.</> },
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
      <Step num={9} text="Compra una lupa de 60x (en internet ~5€). Sin ella estás adivinando." why="Los tricomas son las gotitas de resina que cubren los cogollos. Su color es el único indicador fiable del punto exacto de madurez. Sin lupa no puedes verlos." />
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


function GOTEO() {
  return (
    <div>
      <div style={{ background: "#162a1e", border: "1px solid #2d6a4f", borderRadius: "10px", padding: "14px", marginBottom: "20px" }}>
        <p style={{ margin: 0, fontSize: "13px", color: "#95d5b2", lineHeight: "1.7" }}>
          El riego automático por goteo es la mejor decisión para cultivo interior: reduces las aperturas del armario al mínimo, eliminas el riesgo de regar de más por descuido, y el olor hacia la habitación baja drásticamente. Para principiante absoluto es especialmente útil porque elimina el error más común.
        </p>
      </div>

      <SectionTitle>QUÉ COMPRAR</SectionTitle>
      <Step num={1} text="Kit de riego por goteo con temporizador digital — ~20–35€" why="Busca un kit que incluya: temporizador, bomba o sistema de gravedad, tubos de 4–6mm, y goteros regulables. En internet busca 'kit riego goteo interior plantas' o 'drip irrigation kit indoor'. No necesitas nada caro." />
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

