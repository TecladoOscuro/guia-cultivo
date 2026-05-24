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
      title: "🏠 EQUIPO PRINCIPAL — compra por separado, mejor que en kit",
      items: [
        {
          name: "⚠️ ¿Kit completo o por piezas?",
          price: "Igual o más barato por piezas", priority: "ESENCIAL", donde: null,
          detail: "Los kits completos de 400-600€ parecen un chollo, pero sacrifican justo donde más duele: el extractor (motor AC ruidoso, zumbido 50Hz que se oye en todo el piso) y el filtro de carbón (genérico, pierde eficacia en flora avanzada). Comprando las piezas por separado eliges extractor con motor EC silencioso (AC Infinity, 28-32dB, inapreciable), filtro de carbón australiano de calidad (VIVOSUN, 4.6★) y LED con diodos Samsung LM301H EVO. Mismo presupuesto, el doble de calidad y cero preocupaciones de olor.",
          duracion: "Decisión única",
        },
        {
          name: "Armario de cultivo — Spider Farmer 60×60×180cm",
          price: "~90€", priority: "ESENCIAL", donde: "Internet",
          detail: "Con 60×60cm y una sola planta bien entrenada con SCROG produces 100-150g por cosecha — más que suficiente para un consumidor medio durante un año entero. Si necesitas más cantidad, salta a 80×80×180cm (~100€) y añade una segunda luz. El armario Spider Farmer usa lona Mylar 1680D gruesa, tiene mirilla y bandeja inferior. Parece un armario ropero en una esquina.",
          duracion: "Permanente",
        },
        {
          name: "Luz LED — Mars Hydro FC-E1500 150W (Samsung LM301H EVO)",
          price: "~140€", priority: "ESENCIAL", donde: "Internet",
          detail: "150W reales con diodos Samsung LM301H EVO, control por app, regulable. Cubre perfectamente 60×60cm (416W/m²). Para 80×80cm, sube a 240-300W (Mars Hydro FC-E3000 o Spider Farmer SE3000, ~200-250€). Marcas recomendadas: Spider Farmer, Mars Hydro, ViparSpectra. Busca siempre diodos Samsung LM301H y driver MeanWell. Con 416W/m² produces cogollos densos en toda la superficie, no solo en el centro.",
          duracion: "Permanente (~50.000h, décadas)",
        },
        {
          name: "Extractor — AC Infinity Cloudline PRO S4 100mm (motor EC)",
          price: "~129€", priority: "ESENCIAL", donde: "Internet",
          detail: "El extractor es lo que más ruido hace. Los baratos (motor AC) vibran a 50Hz y se oyen en toda la casa. Un motor EC como este AC Infinity funciona a 28-32dB — como un portátil, no se oye fuera de la habitación. El modelo PRO S4 incluye controlador programable de temperatura y humedad: el extractor acelera solo si sube la temperatura, ahorrando electricidad y alargando la vida del filtro. Alternativa más barata: Cloudline A4 (~108€), mismo motor EC sin controlador digital.",
          duracion: "Permanente",
        },
        {
          name: "Filtro de carbón — VIVOSUN 100mm (carbón australiano)",
          price: "~49€", priority: "ESENCIAL", donde: "Internet",
          detail: "El filtro de carbón es lo ÚLTIMO en lo que escatimar si vives en un piso. La Critical y otras variedades huelen muy fuerte las últimas 4 semanas de floración. Un filtro bueno con carbón australiano virgen (RC-412) elimina el 100% del olor. VIVOSUN tiene 11.000 valoraciones a 4.6★. Dura 12-18 meses de uso continuo. Monta siempre el filtro DENTRO del armario, conectado al extractor, para crear presión negativa (las paredes se succionan hacia dentro = el olor solo sale por el filtro).",
          duracion: "12–18 meses",
        },
        {
          name: "Ventilador de clip oscilante — Spider Farmer (motor EC, 10W)",
          price: "~50€", priority: "ESENCIAL", donde: "Internet",
          detail: "Mueve el aire dentro del armario para evitar puntos calientes, fortalecer los tallos y prevenir moho. El motor EC de Spider Farmer es silencioso y tiene 10 velocidades. Alternativas: VIVOSUN AeroWave E6 Gen2 (65€, app, el mejor) o Secret Jardin Monkey Fan (25€, más básico). Colócalo a la altura del dosel vegetal, apuntando entre la luz y las plantas, sin dar directamente a los cogollos en floración avanzada.",
          duracion: "Permanente",
        },
        {
          name: "Tubo de extracción, poleas, temporizador, abrazaderas, cinta aluminio",
          price: "~55–75€ (conjunto)", priority: "ESENCIAL", donde: "Internet",
          detail: "Tubo insonorizado de aluminio 100mm x 2.5-3m (~28€) para sacar el aire del extractor al exterior (ventana). Poleas de trinquete con gancho (~12€, 4uds) para colgar la luz y ajustar altura. Temporizador digital programable (~9€, Garza) — mejor digital que analógico: no hace ruido de clic y puedes programar 8 encendidos. Abrazaderas metálicas 80-100mm (~10€, 4uds) para fijar el tubo al extractor y al filtro. Cinta de aluminio (~7€) para sellar todas las uniones del conducto.",
          duracion: "Permanente",
        },
        {
          name: "Semillas — fotoperiódicas feminizadas (recomendado) o autoflorecientes",
          price: "15–80€ (pack 3–5)", priority: "ESENCIAL", donde: null,
          detail: "Para 1 planta en espacio pequeño con SCROG, las FOTOPERIÓDICAS feminizadas son mejores que las autos: tú decides cuándo florece, la entrenas sin prisas, perdonan errores de principiante y rinden más por planta. Las autos son más rápidas pero no perdonan el estrés del trasplante ni el LST agresivo. Guarda las semillas sobrantes en un bote hermético en la nevera — duran 2-5 años. Ver pestaña Semillas para guía completa.",
          duracion: "1 planta por semilla germinada",
        },
      ]
    },
    {
      title: "🌱 SUSTRATO Y MACETAS",
      items: [
        {
          name: "BioBizz Light Mix — saco 50L",
          price: "~19€", priority: "ESENCIAL", donde: "Internet",
          detail: "Tierra con muy pocos nutrientes de base — no quema las raíces al empezar. Ideal para principiantes. Para 1 planta en maceta de 15L, un saco de 50L te rinde para 3 cosechas. Guarda el sobrante en la bolsa original bien cerrada en un sitio fresco y seco — aguanta 2-3 años. Si dentro de 2 años está muy seco, remójalo 24h antes de usar. No lo congeles ni lo dejes en la terraza (se llena de hongos).",
          duracion: "~3 cosechas por saco",
        },
        {
          name: "Maceta de tela 15–20L — geotextil",
          price: "~15€ (pack de 3)", priority: "ESENCIAL", donde: "Internet",
          detail: "Para 1 sola planta con SCROG, una maceta de 15-20L es ideal: las raíces se expanden sin límites y la planta es más vigorosa que metiendo 2-3 apretadas. Las de tela (geotextil) permiten que el aire pode las raíces por los laterales — crecen mejor que en plástico. Con 1 planta usas solo 1 maceta, pero los packs de 3-5 son baratos y te sobran para futuros cultivos. Para germinar, usa OTRA maceta pequeña de las que te sobran con solo 3-5L de tierra (dobla el borde hacia fuera) durante las primeras 2-3 semanas, luego trasplanta a la de 15L.",
          duracion: "Permanentes, reutilizables",
        },
        {
          name: "Plato recogedor 35–40cm",
          price: "~7€", priority: "ESENCIAL", donde: "Internet",
          detail: "Va debajo de la maceta para recoger el agua de drenaje. Sin plato manchas el suelo y no puedes ver cuánto ha drenado. Compra uno del mismo diámetro que la maceta (35-40cm para 15L).",
          duracion: "Permanente",
        },
      ]
    },
    {
      title: "🧪 FERTILIZANTES",
      items: [
        {
          name: "BioBizz Try Pack Indoor (Bio·Grow + Bio·Bloom + Top·Max) — 250ml c/u",
          price: "~15€", priority: "ESENCIAL", donde: "Internet",
          detail: "El pack pequeño (3 botes de 250ml) es la opción ideal para empezar con 1 planta. Incluye Bio·Grow (crecimiento, rico en nitrógeno), Bio·Bloom (floración, rico en fósforo y potasio) y Top·Max (estimulador de floración, aumenta tamaño y densidad de cogollos). Con 1 planta en 15L y 1 cosecha al año, el Try Pack te dura 2-3 cosechas. La alternativa son los botes de 1L (~12-15€ cada uno) si planeas varios cultivos seguidos.",
          cuando: "Bio·Grow desde semana 3 de vegetativa. Bio·Bloom + Top·Max desde semana 2 de floración.",
          duracion: "2–3 cosechas con 1 planta",
        },
        {
          name: "Opcional: BioBizz Bio·Grow + Bio·Bloom 1L de cada (si cultivas varias cosechas al año)",
          price: "30–40€ (los dos)", priority: "ÚTIL", donde: "Internet",
          detail: "Si planeas 3-4 cosechas al año, los botes de 1L son más económicos a largo plazo (~25€ en vez de ~45€ en Try Packs). Para 1 cosecha al año, el Try Pack de 250ml es más que suficiente.",
          duracion: "3–4 cosechas con 1L",
        },
      ]
    },
    {
      title: "💧 CONTROL DE pH",
      items: [
        {
          name: "Tiras reactivas de pH 0–14 (200 uds) — opción barata y suficiente",
          price: "~14€", priority: "ESENCIAL", donde: "Internet",
          detail: "Para empezar con BioBizz en tierra, unas tiras de pH de 200uds son más que suficientes. El sustrato Light Mix regula solo el pH bastante bien y los fertilizantes BioBizz son orgánicos (no bloquean nutrientes por pH como los minerales). Mide el pH del agua de riego una vez a la semana y ajusta si está fuera de 6.2-6.5. Con 200 tiras tienes para años.",
          duracion: "Años",
        },
        {
          name: "pHmetro digital + pH Down + calibración — kit profesional",
          price: "30–60€", priority: "ÚTIL", donde: "Internet",
          detail: "Si cultivas varias cosechas al año o usas fertilizantes minerales (no orgánicos), un pHmetro digital decente (15-30€) con soluciones de calibración pH 4 y 7 (8-15€) y pH Down (8-15€) te da precisión total. Para 1 cosecha al año con BioBizz orgánico, las tiras bastan. Si te pasas a mineral, el pHmetro pasa a ESENCIAL.",
          duracion: "Permanente (calibrar cada mes)",
        },
      ]
    },
    {
      title: "🏋️ ENTRENAMIENTO (SCROG + LST) — clave para 1 planta en poco espacio",
      items: [
        {
          name: "Red elástica SCROG 60×60cm con ganchos",
          price: "~7€", priority: "ESENCIAL", donde: "Internet",
          detail: "La malla SCROG (Screen of Green) es la técnica más eficaz para llenar todo el armario con una sola planta. Instálala a 25-35cm del sustrato y guía las ramas horizontalmente por debajo durante el estiramiento de floración. Convierte una planta de 1m de alto en un dosel plano de 60×60cm donde todos los cogollos reciben la misma luz. Sin SCROG, los cogollos de abajo reciben poca luz y salen flojos. La red elástica con 6 ganchos se engancha a los postes del armario.",
          duracion: "Permanente",
        },
        {
          name: "Clips de entrenamiento LST (Low Stress Training) — 150 uds",
          price: "~12€", priority: "IMPORTANTE", donde: "Internet",
          detail: "Pequeñas pinzas de plástico que se enganchan al tallo para doblar las ramas sin romperlas. Complementan la malla SCROG doblando las puntas hacia fuera. Más limpio y rápido que atar con alambre o bridas. 150 unidades cubren todo el ciclo. Alternativa más barata: alambre blando de jardinería (~4€).",
          duracion: "Reutilizables",
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
      title: "💧 RIEGO AUTOMÁTICO (opcional)",
      items: [
        {
          name: "Sistema riego por goteo con temporizador",
          price: "15–35€", priority: "ÚTIL", donde: "Internet",
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
          name: "Cinta americana / de aluminio — ancha",
          price: "3–8€", priority: "ESENCIAL", donde: "Internet",
          detail: "Para sellar todas las uniones del tubo de extracción donde pasa por la ventana o pared. La cinta de aluminio sella mejor que la cinta americana y aguanta el calor. Un rollo de 10m te sobra.",
          duracion: "Permanente",
        },
        {
          name: "ONA Gel o ONA Block — neutralizador de olores",
          price: "15–30€ (gel 1L) o ~16€ (block 170g)", priority: "IMPORTANTE", donde: "Internet",
          detail: "Neutralizador de olores para poner FUERA del armario, en la habitación. No dentro — afectaría al sabor final. Es una red de seguridad extra para cualquier fuga mínima al abrir el armario. El ONA Block sólido (170g) es más práctico: se abre y se coloca cerca, sin riesgo de derrames. Dura 2–3 meses. El gel de 1L dura más pero ocupa más espacio.",
          duracion: "2–3 meses",
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
          <span style={{ fontSize: "12px", color: "#74c69d" }}>Inversión inicial total (60×60 premium)</span>
          <span style={{ fontSize: "14px", fontWeight: "bold", color: "#d8f3dc" }}>~670–710€</span>
        </div>
        <div style={{ display: "flex", justifyContent: "space-between", marginBottom: "8px" }}>
          <span style={{ fontSize: "12px", color: "#74c69d" }}>Equipo principal (armario+luz+extractor+filtro)</span>
          <span style={{ fontSize: "13px", color: "#95d5b2" }}>~450–530€</span>
        </div>
        <div style={{ display: "flex", justifyContent: "space-between", marginBottom: "8px" }}>
          <span style={{ fontSize: "12px", color: "#74c69d" }}>Accesorios y consumibles</span>
          <span style={{ fontSize: "13px", color: "#95d5b2" }}>~120–160€</span>
        </div>
        <div style={{ display: "flex", justifyContent: "space-between" }}>
          <span style={{ fontSize: "12px", color: "#74c69d" }}>Coste recurrente por cosecha (luz+fertis+agua)</span>
          <span style={{ fontSize: "13px", color: "#95d5b2" }}>~35–50€</span>
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

      <InfoBox>
        Si NUNCA has cultivado: lee esto entero. El riego es el 80% del éxito o fracaso. No es complicado, pero hay que entender los números — no regar "por rutina" sino por NECESIDAD.
      </InfoBox>

      <SectionTitle color="#52b788">CANTIDADES EXACTAS POR SEMANA (MACETA 11L)</SectionTitle>
      <div style={{ background: "#0d1f14", border: "1px solid #1b4332", borderRadius: "10px", padding: "14px", marginBottom: "16px" }}>
        <div style={{ fontSize: "11px", color: "#52b788", letterSpacing: "1px", marginBottom: "10px", fontWeight: "bold" }}>📏 TABLA DE RIEGO PARA NOVATOS</div>
        {[
          { sem: "Semana 1-2 (plántula 5-15cm)", ml: "100-200ml", freq: "cada 3-4 días", nota: "Solo agua, sin nutrientes. La planta es pequeña — más agua = encharcamiento." },
          { sem: "Semana 3-4 (planta joven 15-30cm)", ml: "300-500ml", freq: "cada 2-3 días", nota: "Empieza nutrientes BioGrow 1ml/L. Verifica que el agua salga por debajo." },
          { sem: "Semana 5-6 (vegetativa madura 30-50cm)", ml: "500-800ml", freq: "cada 2-3 días", nota: "Bio Grow 2-3ml/L. La planta bebe MÁS — observa peso de maceta." },
          { sem: "Semana 7-8 (transición a flor)", ml: "800ml-1L", freq: "cada 2 días", nota: "Cambio gradual a Bio Bloom. Plantas grandes pueden necesitar más." },
          { sem: "Semana 9-12 (floración)", ml: "1-2L", freq: "cada 2 días en pico", nota: "Pico de consumo de agua. Cogollos creciendo. Bio Bloom 2-4ml/L." },
          { sem: "Última semana (lavado)", ml: "1-2L", freq: "cada 2 días", nota: "Solo agua con pH 6.3, sin nutrientes. Limpia las raíces antes de cosecha." },
        ].map((row, i) => (
          <div key={i} style={{ borderBottom: i < 5 ? "1px solid #1b4332" : "none", padding: "8px 0" }}>
            <div style={{ fontSize: "12px", fontWeight: "bold", color: "#d8f3dc", marginBottom: "3px" }}>{row.sem}</div>
            <div style={{ fontSize: "11px", color: "#95d5b2" }}>💧 <strong>{row.ml}</strong> · ⏱️ {row.freq}</div>
            <div style={{ fontSize: "11px", color: "#74c69d", marginTop: "3px", lineHeight: "1.5" }}>{row.nota}</div>
          </div>
        ))}
      </div>

      <SectionTitle color="#52b788">EL pH DEL AGUA — IMPRESCINDIBLE</SectionTitle>
      <InfoBox>
        🧪 <strong>pH objetivo: 6.2-6.5</strong> en sustrato (BioBizz Light Mix). Fuera de este rango la planta NO PUEDE absorber nutrientes aunque estén ahí. El error nº1 de principiantes es no medir pH.<br/><br/>
        El agua del grifo en España suele estar pH 7-8 (alcalina). Hay que <strong>BAJARLO con pH Down</strong> antes de regar.
      </InfoBox>

      <Step num={1} text={<>Llena la regadera con agua del grifo. <strong>Espera 24h</strong> en jarra abierta — el cloro se evapora.</>} why="Cloro mata bacterias beneficiosas del sustrato y puede dañar raíces sensibles." />
      <Step num={2} text={<>Mide el pH con pHmetro digital (15-30€). Anota el valor. Probablemente será 7.0-7.8.</>} />
      <Step num={3} text={<>Añade pH Down GOTA A GOTA (líquido pH-): 1-2 gotas por litro de agua. Mezcla y mide otra vez.</>} why="Empieza con 1 gota — el pH Down es muy concentrado. Sobre-acidificar (pH &lt;5) es peor que pH alto." />
      <Step num={4} text={<>Repite hasta llegar a <strong>pH 6.2-6.5</strong>. Listo para regar.</>} />
      <Step num={5} text={<>(Opcional, intermedio) Mide el pH del 'runoff' — el agua que sale por abajo de la maceta. Debe ser similar al que entró (±0.5). Si difiere &gt;0.5, el sustrato tiene acumulación de sales. Solución: <GlossaryLink guide="cannabis" term="Lavado de raíces">lavado de raíces</GlossaryLink>.</>} />

      <SectionTitle color="#52b788">SEÑALES VISUALES — QUÉ MIRAR PARA SABER QUÉ HACER</SectionTitle>
      <div style={{ background: "#0d1f14", border: "1px solid #1b4332", borderRadius: "10px", padding: "14px", marginBottom: "16px" }}>
        <div style={{ fontSize: "11px", color: "#52b788", letterSpacing: "1px", marginBottom: "10px", fontWeight: "bold" }}>👀 LO QUE DEBES NOTAR EN LA PLANTA</div>
        {[
          { signo: "✅ Hojas firmes apuntando hacia arriba (turgentes)", lectura: "PERFECTO. Riego correcto, planta hidratada y feliz. NO toques nada." },
          { signo: "🟡 Hojas LIGERAMENTE caídas hacia abajo (las puntas)", lectura: "PROBABLEMENTE FALTA AGUA. Verifica con el dedo. Si seco a 2cm: regar." },
          { signo: "❌ Hojas MUY caídas, rama colgando, planta marchita", lectura: "EMERGENCIA. Riega YA con 500ml-1L. Recuperación en 4-12h si no es muy tarde." },
          { signo: "❌ Hojas MUY caídas pero el sustrato está empapado", lectura: "ENCHARCAMIENTO. PARA de regar. Espera 5-7 días sin agua. Si sigue mal: trasplante a sustrato seco." },
          { signo: "🟡 Puntas de hojas amarillas/marrones", lectura: "Quemadura de nutrientes (sobrealimentación) o pH mal. Reduce dosis 50% y verifica pH." },
          { signo: "🟡 Hojas bajas amarillas, hojas altas verdes", lectura: "Deficiencia de Nitrógeno. Sube Bio Grow a 2-3ml/L." },
          { signo: "🟡 Hojas RIZADAS hacia ARRIBA (forma de canoa)", lectura: "CALOR/SED. Temperatura demasiado alta o falta agua. Verifica ambos." },
          { signo: "🟡 Hojas RIZADAS hacia ABAJO (puntas hacia el tallo)", lectura: "EXCESO DE NUTRIENTES o riego excesivo. Reduce dosis y/o salta un riego." },
          { signo: "🟡 Manchas blancas/oscuras en hojas medias", lectura: "Posible deficiencia de Calcio/Magnesio o pH bajo. Verifica pH agua." },
          { signo: "✅ Crecimiento vigoroso 2-5cm/día en vegetativa", lectura: "TODO BIEN. Eres un cultivador feliz. Sigue así." },
        ].map((s, i) => (
          <div key={i} style={{ borderBottom: i < 9 ? "1px solid #1b4332" : "none", padding: "6px 0" }}>
            <div style={{ fontSize: "12px", color: "#d8f3dc", marginBottom: "2px" }}>{s.signo}</div>
            <div style={{ fontSize: "11px", color: "#74c69d", lineHeight: "1.5" }}>→ {s.lectura}</div>
          </div>
        ))}
      </div>

      <SectionTitle color="#52b788">CÓMO SABER CUÁNDO REGAR (3 MÉTODOS)</SectionTitle>
      <Step num={1} text={<><strong>Método 1 (mejor para empezar): el dedo.</strong> Mete el dedo índice 2-3cm en el sustrato. Si notas HÚMEDO: NO regar (espera 1 día). Si notas SECO o ligeramente fresco: REGAR.</>} why="Las raíces necesitan ciclos de 'mojado y seco' para crecer. Sustrato siempre húmedo = raíces sin oxígeno = pudrición." />
      <Step num={2} text={<><strong>Método 2: el peso.</strong> Levanta la maceta justo tras regar. Memoriza ese peso. Cuando se sienta CLARAMENTE MÁS LIGERA = hora de regar. Una maceta seca pesa la mitad que mojada.</>} />
      <Step num={3} text={<><strong>Método 3 (avanzado): el medidor.</strong> Higrómetros de sustrato (5-15€) miden humedad %. Regar cuando llegue a 30-40%. Sobra para empezar — el dedo basta.</>} />

      <SectionTitle color="#52b788">TÉCNICA DE RIEGO</SectionTitle>
      <Step num={1} text={<>Riega <strong>LENTAMENTE</strong> en círculos alrededor del tallo. NO sobre el tallo directamente.</>} why="Riego rápido erosiona el sustrato y compacta la zona. Riego lento penetra uniformemente." />
      <Step num={2} text={<>Riega hasta que veas agua salir por los agujeros de abajo (el plato debajo se llena). Es señal de que el agua llegó hasta el fondo.</>} />
      <Step num={3} text={<>Vacía el plato 30 min después. Dejar la maceta sentada en agua = raíces ahogadas.</>} warning />
      <Step num={4} text={<>NO regar de noche con luz apagada — sin luz no transpiran y queda agua sin uso → moho. Regar al inicio del fotoperiodo (cuando se enciende la luz).</>} />

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
          Riego automático por goteo = LA MEJOR decisión para cultivo interior. Reduce aperturas del armario, elimina riesgo de regar de más, baja olor a habitación. Para novato absoluto: elimina el error más común (sobrerriego).
        </p>
      </div>

      <SectionTitle>CÓMO FUNCIONA EL GOTEO — ESQUEMA MENTAL</SectionTitle>
      <InfoBox>
        Sistema simple: <strong>depósito de agua FUERA del armario → tubo principal → temporizador → ramales (1 por maceta) → gotero regulable en cada maceta</strong>.<br/><br/>
        El temporizador abre la válvula durante X minutos según programación. El agua cae por gravedad (depósito elevado) o por bomba sumergible (kit con bomba). Los goteros tienen una válvula que regula gotas/segundo.
      </InfoBox>

      <SectionTitle>LISTA DE COMPRA — KIT GOTEO COMPLETO ~50€</SectionTitle>
      <Step num={1} text="Kit riego por goteo con temporizador digital — 20-35€. Busca kit que incluya: temporizador (preferiblemente con bomba sumergible si tu depósito está bajo), tubo principal 8-10mm, micro-tubos 4-6mm, goteros regulables y conectores." why="En internet busca 'kit riego goteo interior plantas' o 'drip irrigation kit'. Marcas: Gardena Micro-Drip, ELGo, Rainpoint." />
      <Step num={2} text="Depósito 15-20L con tapa hermética — 10-15€. Cubo plástico tipo IKEA o garrafa con grifo." why="Tapa = evita evaporación + algas + insectos. Hermético importante." />
      <Step num={3} text="Tubo silicona/PVC alimentario 6mm — 3-5m — 5€" why="Conecta depósito (fuera) → goteros (dentro). Pasa por aperturas laterales preparadas del armario." />
      <Step num={4} text="(Opcional) Bomba sumergible mini 12V — 10-15€" why="Si tu depósito no puede estar elevado, la bomba empuja el agua. Algunos kits ya la incluyen." />
      <Step num={5} text="Verifica el caudal del kit: lee la caja. Goteros típicos: 2L/h, 4L/h, 8L/h. Para 2 plantas en armario 80x80: 4L/h por gotero es estándar." />

      <SectionTitle>CAUDAL DE LOS GOTEROS — TABLA REFERENCIA</SectionTitle>
      <div style={{ background: "#0d1f14", border: "1px solid #1b4332", borderRadius: "10px", padding: "14px", marginBottom: "16px" }}>
        <div style={{ fontSize: "11px", color: "#52b788", letterSpacing: "1px", marginBottom: "10px", fontWeight: "bold" }}>💧 EQUIVALENCIAS CAUDAL × TIEMPO</div>
        {[
          { gotero: "2 L/h (gotero 'lento')", calc: "33ml/min · 0.55ml/seg · ~1 gota/seg", uso: "Plántulas y vegetativa temprana. Mucho control fino." },
          { gotero: "4 L/h (gotero estándar)", calc: "67ml/min · 1.1ml/seg · ~2 gotas/seg", uso: "Vegetativa madura + floración temprana. Caudal universal." },
          { gotero: "8 L/h (gotero 'rápido')", calc: "133ml/min · 2.2ml/seg · ~4 gotas/seg", uso: "Floración avanzada o macetas grandes (>15L). Riegas en menos tiempo." },
        ].map((row, i) => (
          <div key={i} style={{ borderBottom: i < 2 ? "1px solid #1b4332" : "none", padding: "8px 0" }}>
            <div style={{ fontSize: "12px", fontWeight: "bold", color: "#d8f3dc", marginBottom: "3px" }}>{row.gotero}</div>
            <div style={{ fontSize: "11px", color: "#95d5b2", marginBottom: "3px" }}>📏 {row.calc}</div>
            <div style={{ fontSize: "11px", color: "#74c69d", lineHeight: "1.5" }}>{row.uso}</div>
          </div>
        ))}
      </div>

      <SectionTitle>CALCULADORA — CUÁNTO TIEMPO DE RIEGO POR FASE</SectionTitle>
      <InfoBox>
        Fórmula: <strong>Tiempo (min) = ml necesarios ÷ caudal (ml/min)</strong><br/>
        Si gotero de 4L/h (= 67 ml/min):<br/>
        - Necesitas 200ml → 200÷67 = <strong>3 min</strong><br/>
        - Necesitas 500ml → 500÷67 = <strong>7-8 min</strong><br/>
        - Necesitas 1L (1000ml) → 1000÷67 = <strong>15 min</strong>
      </InfoBox>

      <SectionTitle>PROGRAMACIÓN DEL TEMPORIZADOR POR FASE</SectionTitle>
      <div style={{ background: "#0d1f14", border: "1px solid #1b4332", borderRadius: "10px", padding: "14px", marginBottom: "16px" }}>
        <div style={{ fontSize: "11px", color: "#52b788", letterSpacing: "1px", marginBottom: "10px", fontWeight: "bold" }}>🕐 PROGRAMACIÓN POR ETAPA (gotero 4L/h)</div>
        {[
          { fase: "Sem 1-2 (plántula)", config: "❌ NO USAR GOTEO. Spray manual 50-100ml/día.", explicacion: "Plántula muy frágil. Goteo automático puede ahogar." },
          { fase: "Sem 3-4 (vegetativa joven)", config: "1 riego/día, 3 min, mañana al encender luz", explicacion: "≈ 200ml/riego. Total 200ml/día." },
          { fase: "Sem 5-6 (vegetativa madura)", config: "1 riego/día, 5-7 min, mañana", explicacion: "≈ 350-470ml/riego. Total ≈400-500ml/día." },
          { fase: "Sem 7-8 (transición flor)", config: "1 riego/día, 7-10 min", explicacion: "≈ 470-670ml/riego. La planta bebe MÁS." },
          { fase: "Sem 9-12 (floración pico)", config: "2 riegos/día, 5-7 min cada uno (mañana + tarde)", explicacion: "Total 700ml-1.5L/día. Cogollos creciendo intensamente." },
          { fase: "Última semana (lavado)", config: "1-2 riegos/día, sin nutrientes (solo agua pH 6.3)", explicacion: "Limpia raíces antes de cosecha." },
        ].map((row, i) => (
          <div key={i} style={{ borderBottom: i < 5 ? "1px solid #1b4332" : "none", padding: "8px 0" }}>
            <div style={{ fontSize: "12px", fontWeight: "bold", color: "#d8f3dc", marginBottom: "3px" }}>{row.fase}</div>
            <div style={{ fontSize: "11px", color: "#95d5b2", marginBottom: "3px" }}>⏱️ {row.config}</div>
            <div style={{ fontSize: "11px", color: "#74c69d", lineHeight: "1.5" }}>→ {row.explicacion}</div>
          </div>
        ))}
      </div>

      <SectionTitle>INSTALACIÓN PASO A PASO</SectionTitle>
      <Step num={1} text="Coloca el depósito FUERA del armario, en silla/estante a misma altura o ligeramente MÁS ALTO que las macetas (gravedad). Si tienes bomba: depósito puede ir en suelo." why="La altura del depósito determina el caudal. Más alto = más presión = más caudal." />
      <Step num={2} text="Pasa el tubo principal por una apertura lateral del armario (todas las tiendas tienen aperturas selladas con velcro/goma para tubos)." />
      <Step num={3} text="Dentro: divide el tubo principal en 2 ramales (uno por maceta) con conector en Y." />
      <Step num={4} text="Coloca el gotero regulable en el BORDE de la maceta, NO en el centro. 2-3 goteros por maceta para macetas &gt;15L (distribución uniforme)." why="Centro = agua cae directamente sobre tallo y raíces principales. Borde = se distribuye uniformemente, raíces crecen buscando agua." />
      <Step num={5} text="Coloca el temporizador entre depósito y tubo principal. FUERA del armario para ajustar sin abrir." />
      <Step num={6} text="TEST INICIAL: programa 5 minutos con sólo agua (sin nutrientes, sin pH). Mide cuánto sale en cada gotero usando un vaso medidor." why="Cada gotero es ligeramente distinto aunque la caja diga el mismo caudal. CALIBRAR antes de empezar." />
      <Step num={7} text="Ajusta los goteros (regulables) hasta que cada uno dé el mismo caudal. Anota: 'mi gotero a 1.5 vueltas = 4L/h real'." />

      <SectionTitle>PREPARACIÓN DEL AGUA EN EL DEPÓSITO</SectionTitle>
      <Step num={1} text="Llena el depósito con agua del grifo (idealmente reposada 24h en jarra abierta para evaporar cloro)." />
      <Step num={2} text="Añade nutrientes según fase: BioBizz Grow 1-3ml/L (vegetativa) o Bloom 2-4ml/L (floración). Mezcla bien." />
      <Step num={3} text="MIDE el pH del depósito. Probable: 7-8 (alcalino del grifo)." />
      <Step num={4} text="Añade pH Down GOTA A GOTA mezclando, mide otra vez. Repite hasta llegar a 6.2-6.5." why="Solo añade pH Down DESPUÉS de los nutrientes. Si lo añades antes, los nutrientes pueden volver a alcalinizar y vuelves a empezar." warning />
      <Step num={5} text="Tapa el depósito. Anota la fecha de preparación." />
      <Step num={6} text="DURACIÓN del agua preparada: 3-5 días con nutrientes. Más tiempo → bacterias/algas. Si pasa más, vacía y prepara nuevo." />

      <SectionTitle color="#52b788">RUTINA SEMANAL CON GOTEO</SectionTitle>
      {[
        { dia: "Cada 3-4 días", tarea: "Rellenar depósito (verificar pH al rellenar). Sin abrir el armario." },
        { dia: "1 vez/semana", tarea: "Abrir armario brevemente: revisión visual plantas, bajar luz si crecieron, verificar que cada gotero gotea correctamente." },
        { dia: "1 vez/2 semanas", tarea: "Limpiar el depósito: vaciar, enjuagar, llenar nuevo. Evita acumulación de sales y biofilm." },
        { dia: "Ajustes según fase", tarea: "Reprogramar el temporizador cuando cambie de fase vegetativa→floración (sem 4-5)." },
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

      <SectionTitle>MANUAL VS GOTEO — COMPARATIVA NOVATO</SectionTitle>
      <InfoBox>
        🚿 <strong>RIEGO MANUAL</strong>: regadera de 5L con cuello fino. Riegas cuando el dedo dice (sustrato seco a 2cm). Cantidades exactas según fase (ver phase Vegetativa). Pros: control total, ves la planta cada vez, cero riesgo de fallo mecánico. Contras: tienes que estar disponible cada 1-3 días, abres armario cada vez (olor + apertura).<br/><br/>
        💧 <strong>RIEGO POR GOTEO</strong>: programado, automático. Pros: cero apertura del armario, cero olvidos, distribución uniforme, ahorras tiempo. Contras: 50€ inicial, requiere CALIBRAR (test al principio), si se obstruye un gotero la planta sufre.<br/><br/>
        💡 <strong>Recomendación primer cultivo</strong>: HAZ MANUAL para aprender a leer la planta. En el segundo cultivo: pasa a goteo. El manual te da intuición que el goteo no enseña.
      </InfoBox>

      <SectionTitle color="#e63946">🚫 ERRORES COMUNES</SectionTitle>
      <ErrorCard error="Programar el goteo igual todo el cultivo" consecuencia="En germinación y plántula el goteo mata. En floración puede quedarse corto." fix="Ajusta el temporizador en cada fase. No es lo mismo semana 1 que semana 7." />
      <ErrorCard error="No revisar que los goteros funcionan" consecuencia="Un gotero obstruido y una planta sin agua durante 2 días puede ser fatal." fix="Una vez por semana en la revisión visual, comprueba que gotea correctamente." />
      <ErrorCard error="Preparar el depósito y no medir el pH" consecuencia="El agua con nutrientes cambia el pH. Si no mides después de añadirlos, estás regando a pH incorrecto." fix="Añade nutrientes → después mide y ajusta pH. Siempre en ese orden." />
      <ErrorCard error="Usar nutrientes orgánicos no recomendados para goteo" consecuencia="Algunos nutrientes orgánicos (compost, guano) tienen partículas que obstruyen los goteros. Ruina del sistema." fix="Para goteo: nutrientes líquidos sintéticos o orgánicos filtrados (BioBizz, GHE, Canna). No mezclas caseras con sólidos." />
      <ErrorCard error="No calibrar los goteros antes" consecuencia="Crees que estás dando 200ml pero das 50ml o 600ml. Plantas mal." fix="TEST inicial obligatorio: 5 min con vaso medidor bajo cada gotero. Ajusta hasta uniformidad." />
    </div>
  );
}


function SCROG_INT() {
  return (
    <div>
      <InfoBox>
        Guía personalizada para TU equipo: armario Spider Farmer 60×60×180cm, luz Mars Hydro FC-E1500 150W Samsung, extractor AC Infinity PRO S4, filtro VIVOSUN 100mm, maceta de tela 15L con BioBizz Light Mix, fertilizantes BioBizz Try Pack, malla SCROG 60×60cm, clips LST 150uds. 1 planta: Critical Feminizada de Royal Queen Seeds (fotoperiódica). Todo explicado como si no hubieras cultivado nunca, porque es tu primera vez.
      </InfoBox>

      <SectionTitle>🎯 EL OBJETIVO DE ENTRENAR</SectionTitle>
      <div style={{ background: "#162a1e", border: "1px solid #2d6a4f", borderRadius: "10px", padding: "14px", marginBottom: "20px" }}>
        <p style={{ margin: "0 0 8px", fontSize: "13px", color: "#d8f3dc", lineHeight: "1.6" }}>
          Sin entrenar, tu Critical crece como un abeto: 1 tallo central con 1 cogollo gordo arriba y el resto flojos abajo sin luz. Resultado: <span style={{ color: "#e63946" }}>30-40g</span>.
        </p>
        <p style={{ margin: 0, fontSize: "13px", color: "#95d5b2", lineHeight: "1.6" }}>
          Con SCROG conviertes eso en un <span style={{ color: "#52b788", fontWeight: "bold" }}>dosel plano de 60×60cm con 10-20 cogollos principales</span>, todos a la misma altura recibiendo la misma luz. Resultado: <span style={{ color: "#52b788", fontWeight: "bold" }}>100-150g</span>. La técnica es gratis — solo necesitas la malla que ya tienes y tus dedos.
        </p>
      </div>

      <SectionTitle>💧 CÓMO REGAR — lo más básico y lo que más caga a los novatos</SectionTitle>
      <div style={{ background: "#2a1a0d", border: "2px solid #f4a261", borderRadius: "10px", padding: "14px", marginBottom: "16px" }}>
        <p style={{ margin: "0 0 10px", fontSize: "12px", color: "#f4a261", fontWeight: "bold" }}>REPITE CONMIGO: más plantas mueren ahogadas que secas.</p>
      </div>

      <div style={{ background: "#0d1f14", border: "1px solid #1b4332", borderRadius: "10px", padding: "14px", marginBottom: "16px" }}>
        <div style={{ fontSize: "13px", color: "#52b788", fontWeight: "bold", marginBottom: "10px" }}>🧪 Prepara el agua</div>
        <StepX c={CANNABIS_COLORS} num={1} text="Llena una garrafa de 5L con agua del grifo. Déjala destapada 24h." why="El cloro del grifo se evapora en 24h. Si riegas recién sacada del grifo, el cloro mata la microvida buena del sustrato." />
        <StepX c={CANNABIS_COLORS} num={2} text="Si toca echar fertilizante (según la fase), échalo en la garrafa. Primero Bio·Bloom, luego Bio·Grow, luego Top·Max. Agita 10 segundos." why="Siempre añade los nutrientes uno a uno y agita. Si los mezclas concentrados directamente reaccionan entre sí y se degradan." />
        <StepX c={CANNABIS_COLORS} num={3} text="Mide el pH con una tira. Debe estar entre 6.2 y 6.5. Si está por encima de 7, compra pH Down (8-15€, te dura años) y añade 2-3 gotas por litro hasta que baje." why="Con BioBizz en tierra, el pH no es crítico pero sí importante. Entre 6.0 y 7.0 la planta absorbe. Fuera de ese rango = hojas amarillas aunque haya nutrientes." />
      </div>

      <div style={{ background: "#0d1f14", border: "1px solid #1b4332", borderRadius: "10px", padding: "14px", marginBottom: "16px" }}>
        <div style={{ fontSize: "13px", color: "#52b788", fontWeight: "bold", marginBottom: "10px" }}>🔍 Antes de regar: EL TEST DE LA MACETA</div>
        <StepX c={CANNABIS_COLORS} num={1} text="Mete el dedo índice en la tierra hasta el segundo nudillo (unos 3-4cm)." why="Si está seco al tacto = riega. Si notas humedad aunque sea poca = NO riegues hoy. La tierra húmeda se nota fría y se pega al dedo. La seca está suelta y cálida." />
        <StepX c={CANNABIS_COLORS} num={2} text="Levanta la maceta con las dos manos. Cuando está seca pesa muy poco. Cuando está recién regada pesa el doble." why="Con la práctica sabrás solo con levantarla si toca regar o no. Las primeras semanas fiáte del dedo, no del peso." />
        <StepX c={CANNABIS_COLORS} num={3} text="Si el dedo está seco Y la maceta está ligera = RIEGA. Si tienes dudas entre hoy o mañana = MAÑANA." why="Regar de menos = la planta se mustia un poco pero se recupera en 2h. Regar de más = raíces podridas en 3-4 días y probablemente planta muerta. Ante la duda, espera 1 día." />
      </div>

      <div style={{ background: "#0d1f14", border: "1px solid #1b4332", borderRadius: "10px", padding: "14px", marginBottom: "20px" }}>
        <div style={{ fontSize: "13px", color: "#52b788", fontWeight: "bold", marginBottom: "10px" }}>🚿 CÓMO ECHAR EL AGUA (esto es importante)</div>
        <StepX c={CANNABIS_COLORS} num={1} text="Riega SIEMPRE en círculo alrededor del tallo, a unos 5-10cm de distancia. NUNCA eches el agua justo encima del tallo." why="Si mojas el tallo constantemente se pudre (damping off). Además, las raíces que beben están en los bordes de la maceta, no en el centro. Si riegas en círculo, las raíces crecen hacia fuera buscando el agua." />
        <StepX c={CANNABIS_COLORS} num={2} text="Echa el agua despacio, en 2-3 tandas con 30 segundos de pausa entre cada una. No vuelques el litro de golpe." why="Si echas el agua de golpe, crea canales en la tierra y el agua se escurre por los bordes sin mojar el interior. En tandas, la tierra absorbe uniformemente." />
        <StepX c={CANNABIS_COLORS} num={3} text="Deja de echar agua cuando empiecen a salir las primeras gotas por el plato de abajo. ESO ES SUFICIENTE. NO necesitas que salga un chorro." why="Un pequeño drenaje (10-20% de lo que echaste) asegura que has mojado todo el sustrato y arrastra sales acumuladas. Pero si sale un chorro tras chorro, estás desperdiciando agua y nutrientes." />
        <StepX c={CANNABIS_COLORS} num={4} text="Tira el agua del plato. NO la dejes ahí." why="Si la maceta se queda en agua estancada, las raíces del fondo se ahogan. Siempre plato seco después de regar." />
      </div>

      <SectionTitle>⏱️ CALENDARIO COMPLETO — qué hacer cada semana</SectionTitle>

      <div style={{ marginBottom: "16px" }}>
        <div style={{ fontSize: "14px", color: "#52b788", fontWeight: "bold", marginBottom: "8px" }}>📊 Tabla maestra de riego, luz y nutrientes</div>
        <table style={{ width: "100%", borderCollapse: "collapse", fontSize: "10px", fontFamily: "monospace" }}>
          <thead>
            <tr style={{ background: "#1b4332" }}>
              {["Semana", "Fase", "Agua (L)", "Frec. riego", "Luz %", "Altura luz", "Bio·Grow", "Bio·Bloom", "Top·Max", "Horas luz"].map(h => (
                <th key={h} style={{ padding: "4px 4px", color: "#d8f3dc", borderBottom: "1px solid #2d6a4f", textAlign: "center" }}>{h}</th>
              ))}
            </tr>
          </thead>
          <tbody>
            {[
              ["1", "Germinar", "Spray solo", "Cada 1-2 días", "30%", "60cm", "—", "—", "—", "18h"],
              ["2", "Plántula", "0.2-0.3L", "Cada 2-3 días", "35%", "55cm", "—", "—", "—", "18h"],
              ["3", "Vege temprano", "0.5-0.7L", "Cada 2-3 días", "50%", "45cm", "—", "—", "—", "18h"],
              ["4", "Poda apical + SCROG", "1L", "Cada 3 días", "60%", "45cm", "0.5ml/L", "—", "—", "18h"],
              ["5", "LST / rellenar malla", "1.5L", "Cada 3 días", "70%", "40cm", "0.5ml/L", "—", "—", "18h"],
              ["6", "Seguir LST", "2L", "Cada 3 días", "80%", "40cm", "1ml/L", "—", "—", "18h"],
              ["7", "Defoliar bajo malla → 12/12", "2L", "Cada 3-4 días", "100%", "35cm", "1ml/L", "2ml/L", "1ml/L", "12h"],
              ["8", "Estiramiento flora 1", "2-2.5L", "Cada 3-4 días", "100%", "35cm", "—", "2ml/L", "1ml/L", "12h"],
              ["9", "Estiramiento flora 2", "2.5L", "Cada 3-4 días", "100%", "30cm", "—", "2ml/L", "1ml/L", "12h"],
              ["10", "Fin estiramiento / día 21", "2.5L", "Cada 3-4 días", "100%", "30cm", "—", "2ml/L", "1ml/L", "12h"],
              ["11", "Engorde", "2.5-3L", "Cada 3-4 días", "100%", "30cm", "—", "2ml/L", "1ml/L", "12h"],
              ["12", "Engorde", "3L", "Cada 3-4 días", "100%", "30cm", "—", "2ml/L", "1ml/L", "12h"],
              ["13", "Engorde", "3L", "Cada 3-4 días", "100%", "30cm", "—", "2ml/L", "1ml/L", "12h"],
              ["14", "Maduración", "2.5L", "Cada 4 días", "100%", "30cm", "—", "2ml/L", "1ml/L", "12h"],
              ["15", "Lavado (flush)", "2.5-3L", "Cada 3-4 días", "100%", "30cm", "—", "—", "—", "12h"],
              ["16", "Lavado final", "2.5L", "Cada 4 días", "100%", "30cm", "—", "—", "—", "12h"],
              ["17", "🪴 Cosechar", "—", "—", "off", "—", "—", "—", "—", "0h"],
            ].map((r, i) => (
              <tr key={i} style={{ background: i % 2 === 0 ? "#0d1f14" : "#122318" }}>
                {r.map((c, j) => (
                  <td key={j} style={{ padding: "4px 4px", color: j === 0 ? "#52b788" : "#95d5b2", borderBottom: "1px solid #1b4332", textAlign: "center", fontWeight: j === 0 ? "bold" : "normal" }}>{c}</td>
                ))}
              </tr>
            ))}
          </tbody>
        </table>
      </div>

      <div style={{ background: "#0d1f14", border: "1px solid #1b4332", borderRadius: "10px", padding: "14px", marginBottom: "16px" }}>
        <div style={{ fontSize: "13px", color: "#52b788", fontWeight: "bold", marginBottom: "8px" }}>📝 Cómo leer la tabla</div>
        <ul style={{ margin: 0, paddingLeft: "16px", fontSize: "12px", color: "#95d5b2", lineHeight: "1.8" }}>
          <li><b>Agua (L)</b>: litros totales en ese riego. No es "al día", es "cada vez que riegas".</li>
          <li><b>Frec. riego</b>: días entre riego y riego. Si pone "cada 3 días", riegas el lunes y el jueves, no el martes.</li>
          <li><b>Luz %</b>: potencia del dimmer en tu Mars Hydro FC-E1500.</li>
          <li><b>Altura luz</b>: distancia desde el borde superior de la maceta (o la malla, una vez instalada) a la luz.</li>
          <li><b>ml/L</b>: mililitros de fertilizante POR LITRO de agua. Si pones 2L de agua y la tabla dice 2ml/L, echas 4ml totales.</li>
          <li><b>Horas luz</b>: cómo programar el temporizador. 18h = 18h encendida, 6h apagada. 12h = 12/12.</li>
        </ul>
      </div>

      <SectionTitle>🥚 SEMANA 1 — Germinación</SectionTitle>
      <StepX c={CANNABIS_COLORS} num={1} text="Pon la semilla en un vaso de agua templada (como el agua de la ducha, no caliente). Déjala 24h en un armario oscuro a temperatura ambiente." why="El agua ablanda la cáscara. En 24h la semilla se hincha y se hunde — está activa. Si no se hunde, empújala con el dedo." />
      <StepX c={CANNABIS_COLORS} num={2} text="Llena una de tus macetas de tela de 15L con solo 3-5L de Light Mix (no la llenes entera). Dobla el borde hacia fuera para que quede baja, tipo bandeja. Haz un agujero de 1cm con el dedo en el centro de la tierra. Mete la semilla con la punta hacia abajo. Cubre con tierra SIN apretar." why="En 3-5L la raíz coloniza rápido. En 15L ahora mismo la plántula se pierde y el riego es imposible de controlar. Dentro de 2-3 semanas la pasas a la maceta llena de 15L." />
      <StepX c={CANNABIS_COLORS} num={3} text="NO riegues con regadera todavía. Usa el spray de precisión y moja suavemente la superficie hasta que esté húmeda (como una esponja escurrida, no empapada). El plato debajo de la maceta." why="Una semilla no tiene raíces — no bebe agua, solo necesita humedad ambiental para activarse. Si encharcas, se pudre." />
      <StepX c={CANNABIS_COLORS} num={4} text="Configura el armario: luz a 60cm de altura, potencia al 30%, temporizador 18h encendida / 6h apagada. Extractor encendido al mínimo. Higrómetro dentro del armario." why="El extractor debe estar encendido desde el día 1 aunque no huela. Las plántulas necesitan intercambio de aire fresco." />
      <StepX c={CANNABIS_COLORS} num={5} text="Días 2-5: la semilla asoma del suelo. Sigue pulverizando cada 1-2 días para que la superficie esté húmeda. No toques la plántula." why="Las primeras 2 hojitas redondas (cotiledones) alimentan a la planta los primeros días. La plántula es frágil — no la toques." />

      <SectionTitle>🌱 SEMANA 2 — Plántula</SectionTitle>
      <StepX c={CANNABIS_COLORS} num={1} text="La planta mide 3-5cm. Ya tiene sus primeras hojas de verdad (dentadas, de cannabis). Sigue pulverizando, pero ahora moja un poco más — unos 200-300ml cada 2-3 días, siempre después de hacer el test del dedo." why="Las raíces empiezan a crecer. Necesitan un poco más de agua pero siguen siendo frágiles. Si te pasas de agua = hojas caídas y amarillas desde abajo." />
      <StepX c={CANNABIS_COLORS} num={2} text="Sube la luz al 35%. Bájala a 55cm de altura. El temporizador sigue a 18/6." why="Subir potencia muy despacio evita quemar la planta. Si ves que las hojas se ponen amarillas en las puntas o los bordes se doblan hacia arriba (como un taco), es demasiada luz — sube la luz 5-10cm." />
      <StepX c={CANNABIS_COLORS} num={3} text="Todavía SIN fertilizante. Solo agua. La planta vive de los nutrientes del Light Mix." why="El Light Mix tiene comida para 2-3 semanas. Si añades fertilizante ahora, quemas las raíces jóvenes." />

      <SectionTitle>🌿 SEMANA 3 — Vegetativo temprano + trasplante</SectionTitle>
      <StepX c={CANNABIS_COLORS} num={1} text="La planta mide 10-15cm y tiene 4-5 nudos (los bultitos del tallo donde salen ramas). Es el momento de trasplantar a la maceta definitiva de 15L." why="A los 4 nudos, las raíces ya han colonizado los 3-5L de tierra. Si esperas más, se quedan sin espacio (rootbound) y la planta se frena." />
      <StepX c={CANNABIS_COLORS} num={2} text="CÓMO TRASPLANTAR: llena la maceta de 15L con Light Mix hasta 3/4 de su capacidad. Haz un agujero del tamaño de tu maceta pequeña. Saca la planta CON MUCHO CUIDADO — pon la mano sobre la tierra, voltea la maceta boca abajo y dale un golpecito. El cepellón entero debe salir compacto. Mételo en el agujero de la maceta grande. Rellena alrededor con más tierra. Riega con 0.5-0.7L alrededor del cepellón (no encima del tallo)." why="Un trasplante limpio no estresa. Si el cepellón se desmorona y las raíces quedan al aire, la planta sufre un shock y se para 3-5 días. Ve despacio, no hay prisa." />
      <StepX c={CANNABIS_COLORS} num={3} text="Sube la luz: 50% de potencia, a 45cm de altura. Sigue 18/6." why="La planta ya es lo bastante grande para más luz. Sigues subiendo la potencia gradualmente." />
      <StepX c={CANNABIS_COLORS} num={4} text="Todavía SIN fertilizante. El Light Mix fresco de la maceta nueva tiene nutrientes para 2 semanas más." why="Acabas de darle 10-12L de tierra nueva con nutrientes. Si además le echas fertilizante = doble ración = quemadura." />

      <SectionTitle>✂️ SEMANA 3-4 — Poda apical (TOPPING)</SectionTitle>
      <div style={{ background: "#2a1a0d", border: "2px solid #f4a261", borderRadius: "10px", padding: "14px", marginBottom: "16px" }}>
        <p style={{ margin: 0, fontSize: "13px", color: "#f4a261", fontWeight: "bold" }}>
          ESTO CONVIERTE 1 COGOLLO EN 8-16. No te lo saltes. Es un corte de 2 segundos.
        </p>
      </div>
      <StepX c={CANNABIS_COLORS} num={1} text="Espera a que la planta se haya recuperado del trasplante (3-4 días después de trasplantar, ves que crece bien). Identifica el 4º NUDO contando desde abajo." />
      <StepX c={CANNABIS_COLORS} num={2} text="Con las tijeras limpias, corta el tallo principal JUSTO por encima del 4º nudo. Un corte limpio y recto." why="Al cortar la punta, la hormona de crecimiento (auxina) se redistribuye a las ramas laterales. Esas 4 ramas se convierten en 4 puntas principales. Si además las ramas laterales ramifican, obtienes 8-16 puntas." />
      <StepX c={CANNABIS_COLORS} num={3} text="NO cortes las ramas laterales. Solo la punta central de arriba." />
      <StepX c={CANNABIS_COLORS} num={4} text="Espera 5-7 días sin hacer nada más. La planta necesita recuperarse. Verás que las ramas laterales empiezan a crecer con fuerza." />

      <SectionTitle>🕸️ SEMANA 4 — Instalar malla SCROG</SectionTitle>
      <StepX c={CANNABIS_COLORS} num={1} text="Engancha los 6 ganchos de la malla a los postes del armario Spider Farmer. La malla debe quedar a 25-30cm de altura desde el borde superior de la maceta de 15L. Mide con un metro." why="25-30cm es el punto dulce para 60×60. Menos = no puedes regar ni ventilar debajo. Más = desperdicias altura de crecimiento." />
      <StepX c={CANNABIS_COLORS} num={2} text="La malla debe estar tensa pero elástica. Si está demasiado tensa no puedes meter ramas. Si está floja, los cogollos la hundirán en floración." />
      <StepX c={CANNABIS_COLORS} num={3} text="Sube la luz al 60%, a 45cm desde la maceta. Empieza con Bio·Grow (0.5ml por litro de agua). Riega 1L cada 3 días, siempre con el test del dedo." why="La planta ya está en la maceta grande 1 semana, ha gastado parte de los nutrientes del Light Mix. Empiezas con dosis MÍNIMA de fertilizante (0.5ml/L es la mitad de lo recomendado). Mejor poco que pasarse." />

      <SectionTitle>🧘 SEMANAS 5-6 — Rellenar la malla (LST intensivo, esto es el SCROG de verdad)</SectionTitle>
      <div style={{ background: "#162a1e", border: "1px solid #2d6a4f", borderRadius: "10px", padding: "14px", marginBottom: "16px" }}>
        <p style={{ margin: 0, fontSize: "13px", color: "#95d5b2", lineHeight: "1.6" }}>
          <span style={{ color: "#d8f3dc", fontWeight: "bold" }}>Estas 2 semanas definen el 80% de tu cosecha.</span> Tu único objetivo: guiar cada punta que asome por encima de la malla hacia el agujero de al lado. Aún NO has cambiado a 12/12 — la planta sigue en 18h de luz. Sin prisa.
        </p>
      </div>
      <StepX c={CANNABIS_COLORS} num={1} text="CADA 1-2 DÍAS: abre el armario, mira la malla desde arriba. Cualquier punta verde que asome más de 3-4cm por encima de la red, dóblala SUAVEMENTE y pásala por el agujero de al lado, en horizontal." why="Si esperas 3-4 días, los tallos se endurecen. Un tallo leñoso = se parte al doblarlo. Las puntas jóvenes y flexibles se guían con los dedos. Hazlo cada 48h — es 1 minuto de trabajo." />
      <StepX c={CANNABIS_COLORS} num={2} text="Usa los clips LST para fijar las ramas que se rebelan y se levantan solas al día siguiente. Engancha el clip al tallo y apóyalo contra el hilo de la malla." why="Las puntas buscan la luz hacia arriba. Aunque las guíes hoy, mañana estarán mirando hacia arriba otra vez. Los clips las mantienen en horizontal." />
      <StepX c={CANNABIS_COLORS} num={3} text="GUIAR = doblar, NUNCA cortar. No uses tijeras en esta fase para nada." why="Cada punta verde = un cogollo futuro. Si cortas una, pierdes ese cogollo." />
      <StepX c={CANNABIS_COLORS} num={4} text="Semana 5: riega 1.5L cada 3 días, con 0.5ml/L de Bio·Grow. Luz al 70%, a 40cm. Semana 6: sube a 2L cada 3 días, con 1ml/L de Bio·Grow. Luz al 80%, a 40cm." />
      <StepX c={CANNABIS_COLORS} num={5} text="OBJETIVO: cuando el 70-80% de los agujeros de la malla tengan una punta verde, pasas a la siguiente fase. NO esperes a tener el 100% lleno." why="Dejas 20-30% de huecos para el estiramiento de la floración (la planta crece un 50-100% más). Si llenas todo antes del 12/12, se satura." />

      <SectionTitle>🍃 SEMANA 7 — Defoliación pre-flora + cambio a 12/12</SectionTitle>
      <StepX c={CANNABIS_COLORS} num={1} text="DEFOLIACIÓN: quita TODAS las hojas grandes y ramitas que están POR DEBAJO de la malla. No reciben luz, no sirven. Usa las tijeras limpias. Corta desde la base del rabito de la hoja." why="Todo lo que está bajo la malla está en sombra. La planta gasta energía en mantenerlo vivo. Al quitarlo, toda esa energía va a los cogollos de arriba. Esto se hace 1 solo día." />
      <StepX c={CANNABIS_COLORS} num={2} text="NO quites hojas por encima de la malla. Esas SÍ hacen la fotosíntesis que engorda los cogollos." />
      <StepX c={CANNABIS_COLORS} num={3} text="CAMBIO A FLORACIÓN: reprograma el temporizador a 12h luz / 12h oscuridad. Mismo horario cada día (ej: 08:00-20:00)." why="La oscuridad NO debe interrumpirse. Si abres el armario durante las horas de oscuridad y entra luz, la planta se estresa muchísimo. NUNCA abras el armario en las 12h de oscuridad." />
      <StepX c={CANNABIS_COLORS} num={4} text="Sube la luz al 100%, a 35cm de la malla. Empieza con nutrientes de floración: Bio·Bloom 2ml/L + Top·Max 1ml/L. Deja de echar Bio·Grow. Riega 2L cada 3-4 días." why="En floración la planta necesita fósforo y potasio (Bio·Bloom), no nitrógeno (Bio·Grow). Demasiado nitrógeno en flora = hojas enormes, cogollos flojos." />

      <SectionTitle>📈 SEMANAS 8-9 — Estiramiento de floración</SectionTitle>
      <StepX c={CANNABIS_COLORS} num={1} text="La planta pega un estirón del 50-100%. TODAVÍA SIGUES guiando ramas por la malla. Aprovecha para llenar los huecos que dejaste." why="El estiramiento son las últimas 2-3 semanas de crecimiento en longitud. Después solo engorda." />
      <StepX c={CANNABIS_COLORS} num={2} text="PARA de guiar cuando veas pelitos blancos (pistilos) saliendo de las puntas. A partir de ahí déjalas crecer hacia arriba." why="Con pistilos visibles, la rama ya está formando el cogollo. Si la doblas ahora, dañas la formación." />
      <StepX c={CANNABIS_COLORS} num={3} text="Baja la luz a 30cm de las puntas más altas. Riega 2-2.5L cada 3-4 días con Bio·Bloom 2ml/L + Top·Max 1ml/L. Extractor al 50-60%." />

      <SectionTitle>🍂 SEMANA 10 — Defoliación día 21 de flora</SectionTitle>
      <StepX c={CANNABIS_COLORS} num={1} text="Cuenta 3 semanas exactas desde que pusiste 12/12. Limpia las hojas grandes que tapan cogollos inferiores." why="Es la ÚLTIMA defoliación fuerte. Después de esto, solo quitas alguna hoja suelta mínima." />
      <StepX c={CANNABIS_COLORS} num={2} text="NO quites las sugar leaves (hojitas pequeñas con resina pegadas al cogollo). Solo las grandes sin resina." />
      <StepX c={CANNABIS_COLORS} num={3} text="Luz al 100%, a 30cm. Bio·Bloom 2ml/L + Top·Max 1ml/L. Riega 2.5L cada 3-4 días." />

      <SectionTitle>🌸 SEMANAS 11-13 — Engorde de cogollos</SectionTitle>
      <StepX c={CANNABIS_COLORS} num={1} text="Los cogollos engordan visiblemente cada semana. Se forman los tricomas (cristalitos brillantes). El olor es MUY fuerte — el filtro VIVOSUN está trabajando a tope." />
      <StepX c={CANNABIS_COLORS} num={2} text="Controla la humedad: máximo 55%, ideal 40-50%. Si sube, acelera el extractor." why="Con cogollos gordos y humedad alta = moho dentro del cogollo (bud rot). Se ve marrón y polvoriento. Si lo ves, corta esa zona inmediatamente." />
      <StepX c={CANNABIS_COLORS} num={3} text="Riega 3L cada 3-4 días con Bio·Bloom 2ml/L + Top·Max 1ml/L. Luz al 100%, mantenida a 30cm. Si alguna punta se acerca mucho a la luz, sube la luz, no bajes la rama." />

      <SectionTitle>💧 SEMANAS 14-15 — Maduración y lavado de raíces</SectionTitle>
      <StepX c={CANNABIS_COLORS} num={1} text="Las hojas grandes empiezan a amarillear. ES NORMAL. La planta está consumiendo sus reservas de las hojas para engordar los cogollos. NO es deficiencia — NO añadas más fertilizante." />
      <StepX c={CANNABIS_COLORS} num={2} text="Semana 15: empieza el LAVADO DE RAÍCES. Deja de echar fertilizantes. SOLO agua, pH 6.2-6.5. Riega 2.5-3L cada 3-4 días como siempre." why="NO es inundar la maceta. Es regar NORMAL con agua sin nutrientes durante las últimas 2 semanas. Las sales acumuladas se disuelven con cada riego y la planta consume sus reservas. Cogollos limpios = ceniza gris clara, sabor suave." />
      <StepX c={CANNABIS_COLORS} num={3} text="Mira los tricomas con la lupa 60x. Quieres 70-80% lechosos (blanco niebla) y 20-30% ámbar (marrón dorado). Los pistilos (pelitos) estarán mayoritariamente marrones y enrollados." why="Lechoso = pico de THC (efecto más cerebral). Ámbar = THC degradándose a CBN (efecto más corporal, relajante). Para Critical índica, un 20% ámbar es ideal." />

      <SectionTitle>🪴 SEMANA 16-17 — Cosecha y secado</SectionTitle>
      <StepX c={CANNABIS_COLORS} num={1} text="Día de cosecha: apaga la luz. Corta la planta entera por la base del tallo con tijeras de podar. Cuélgala BOCA ABAJO dentro del armario con el extractor encendido al mínimo." why="Boca abajo = la savia residual baja por gravedad hacia los cogollos. El extractor mueve el aire suavemente para que no se estanque la humedad entre los cogollos." />
      <StepX c={CANNABIS_COLORS} num={2} text="Condiciones de secado: 18-22°C, 50-60% humedad, OSCURIDAD TOTAL. 7-10 días. Sabes que está listo cuando una rama pequeña se parte con un CRACK seco al doblarla." why="La luz y el calor degradan el THC durante el secado. Secado lento y en frío = mejor sabor, mejor efecto. Si seca muy rápido (3-4 días) = sabor a heno." />
      <StepX c={CANNABIS_COLORS} num={3} text="Manicura: con guantes de nitrilo, recorta las hojas que rodean los cogollos. Separa los cogollos de las ramas. Mete los cogollos en los botes de cristal herméticos (1.5L)." />
      <StepX c={CANNABIS_COLORS} num={4} text="CURADO en bote: llena cada bote al 75% (no a tope). Cierra. Abre 10 minutos al día las primeras 2 semanas (esto se llama 'burping'). Después abre 1 vez por semana. Mínimo 3 semanas de curado." why="El curado transforma la clorofila en azúcares. Sin curado = sabor a hierba cortada, áspero. Con 4 semanas de curado = sabor suave, efecto más redondo. La paciencia aquí se nota mucho." />

      <SectionTitle color="#e63946">🚫 ERRORES TÍPICOS DE NOVATO</SectionTitle>
      <ErrorCardX c={CANNABIS_COLORS} error="Regar demasiado (cada día o sin comprobar)" consecuencia="Raíces podridas, hojas caídas y amarillas desde abajo, planta muerta en 1 semana." fix="TEST DEL DEDO siempre. Si está húmedo = no riegues. En duda, espera 1 día." />
      <ErrorCardX c={CANNABIS_COLORS} error="Echar más fertilizante del que toca 'para que crezca más'" consecuencia="Puntas de hojas marrones y quemadas (nutrient burn). La planta se bloquea." fix="Empieza con la MITAD de lo recomendado (0.5ml/L en vez de 1ml/L). Sube solo si ves que las hojas de abajo amarillean." />
      <ErrorCardX c={CANNABIS_COLORS} error="Pasar a 12/12 con la malla al 30%" consecuencia="Cosecha de 40g en vez de 120g. Los huecos ya no se llenan." fix="Espera a tener el 70-80% de la malla llena. La fotoperiódica te espera." />
      <ErrorCardX c={CANNABIS_COLORS} error="Abrir el armario durante las horas de oscuridad en flora" consecuencia="La planta se estresa, puede volverse hermafrodita (cogollos con semillas)." fix="Solo abre cuando la luz esté encendida. Horario fijo." />
      <ErrorCardX c={CANNABIS_COLORS} error="No medir el pH nunca" consecuencia="Hojas amarillas. Tu instinto te dice 'más fertilizante'. Empeoras el problema." fix="Tiras de pH una vez por semana. Entre 6.0 y 6.5 estás bien." />
      <ErrorCardX c={CANNABIS_COLORS} error="Cosechar demasiado pronto (pistilos blancos, sin lupa)" consecuencia="Cogollos que no han engordado, efecto débil y ansioso." fix="Espera a 70% pistilos marrones + tricomas lechosos. Las últimas 2 semanas es cuando más engordan." />

      <SectionTitle>📊 RESULTADO CON TU SETUP</SectionTitle>
      <div style={{ display: "grid", gridTemplateColumns: "1fr 1fr", gap: "10px", marginBottom: "20px" }}>
        <StatBoxX c={CANNABIS_COLORS} label="Producción esperada" value="100–150g" />
        <StatBoxX c={CANNABIS_COLORS} label="Tiempo total" value="~16 semanas" />
        <StatBoxX c={CANNABIS_COLORS} label="Cogollos principales" value="10–20" />
        <StatBoxX c={CANNABIS_COLORS} label="Dosel final" value="60×60cm plano" />
        <StatBoxX c={CANNABIS_COLORS} label="Coste eléctrico" value="~55€" />
        <StatBoxX c={CANNABIS_COLORS} label="Consumo total" value="~310 kWh" />
      </div>
      <div style={{ background: "#1b4332", borderRadius: "10px", padding: "14px" }}>
        <p style={{ margin: 0, fontSize: "13px", color: "#d8f3dc", lineHeight: "1.6" }}>
          <span style={{ color: "#52b788", fontWeight: "bold" }}>Para tu primera vez: </span>
          No te agobies con la tabla. Los números son orientativos — si un riego es 1.8L en vez de 2L no pasa nada. Si tardas 8 semanas en llenar la malla en vez de 7, mejor que 6. La Critical es muy perdonadora. Aunque la cagues en algo, vas a cosechar algo que TE HAS CULTIVADO TÚ. Y eso ya es un éxito.
        </p>
      </div>
    </div>
  );
}

