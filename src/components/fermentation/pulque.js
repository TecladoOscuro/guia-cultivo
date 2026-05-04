// FERMENTACIONES — PULQUE

function COMPRA_PULQUE() {
  const c = FERMENT_COLORS;
  const items = [
    { item: "🌵 Aguamiel en lata o concentrado de maguey", precio: "8-20€", donde: "Internet/tiendas latinas/mexicanas", nota: "El aguamiel natural (savia fresca de agave maguey) es IMPOSIBLE de conseguir fuera de México — no se exporta porque fermenta en horas. Busca 'aguamiel de maguey concentrado', 'agave sap concentrate' en Amazon, tiendas mexicanas o bio especializadas. Algunos importadores ofrecen versión reducida. Es la opción más cercana al original.", prioridad: "ESENCIAL", tipo: "Consumible" },
    { item: "🍯 Néctar de agave / miel de agave (alternativa más fácil)", precio: "4-12€", donde: "Supermercado bio/herbolario", nota: "El néctar de agave es MUCHO más dulce y concentrado que el aguamiel natural (que tiene solo 10-12 Brix). Para simular aguamiel: diluir 1 parte de néctar en 3-4 partes de agua. Ajustar dulzor probando — debe saber ligeramente dulce, no almibarado.", prioridad: "ALTERNATIVA", tipo: "Consumible" },
    { item: "💧 Agua sin cloro (mineral, lluvia o filtrada, 2-3L)", precio: "1-2€", donde: "Supermercado", nota: "Para diluir el concentrado/néctar. El cloro del grifo inhibe las bacterias Leuconostoc que dan al pulque su textura característica. Agua mineral de botella es la opción más segura.", prioridad: "ESENCIAL", tipo: "Consumible" },
    { item: "🦠 Pulque semilla (inoculante activo)", precio: "0€", donde: "Lote anterior o importado de México", nota: "El 'pie de cuba' o semilla es pulque de lote anterior, activo y burbujeante. Es el inoculante tradicional. Si nunca has hecho pulque, necesitas una alternativa. Ver sección de sustitutos en PREP.", prioridad: "ESENCIAL", tipo: "Consumible" },
    { item: "🫙 Kefir de agua o kefir de leche (sustituto de semilla)", precio: "3-8€", donde: "Herbolario/internet", nota: "Contiene Lactobacillus y levaduras similares a los del pulque. No reproduce el perfil exacto pero inicia fermentación láctica. Usar 50-100ml de kefir activo por litro de base de aguamiel.", prioridad: "ALTERNATIVA", tipo: "Consumible" },
    { item: "🧫 Iniciador lacto-fermentación (suero de chucrut/kéfir activo)", precio: "0-5€", donde: "Elaboración propia o herbolario", nota: "El suero de un chucrut activo o de yogur natural sin pasteurizar contiene Lactobacillus. Alternativa de emergencia cuando no hay kefir. Añadir 50-100ml al aguamiel diluido.", prioridad: "ÚTIL", tipo: "Consumible" },
    { item: "🫙 Recipiente de barro o plástico food-grade 2-5L", precio: "5-20€", donde: "Ferretería/internet/mercadillo", nota: "Tradicionalmente ollas de barro sin vidriar (tinacal). En casa: cuenco de cerámica, bol grande de plástico food-grade o tarro de vidrio ancho. La superficie porosa del barro aloja colonias de Leuconostoc de lotes anteriores — ventaja para el tinacal tradicional.", prioridad: "ESENCIAL", tipo: "Equipo" },
    { item: "🧴 Refractómetro o hidrómetro (opcional)", precio: "10-25€", donde: "Internet", nota: "Para medir los Brix (densidad de azúcar) del aguamiel diluido. El aguamiel natural tiene 10-12 Brix. Útil para calibrar la dilución del néctar de agave.", prioridad: "ÚTIL", tipo: "Equipo" },
  ];
  const [filterPrio, setFilterPrio] = React.useState([]);
  const [filterTipo, setFilterTipo] = React.useState([]);
  const togglePrio = (p) => setFilterPrio(s => s.includes(p) ? s.filter(x => x !== p) : [...s, p]);
  const toggleTipo = (t) => setFilterTipo(s => s.includes(t) ? s.filter(x => x !== t) : [...s, t]);
  const filtered = items.filter(i =>
    (filterPrio.length === 0 || filterPrio.includes(i.prioridad)) &&
    (filterTipo.length === 0 || filterTipo.includes(i.tipo))
  );
  const prioColor = { "ESENCIAL": "#e8755a", "IMPORTANTE": "#dfb578", "ÚTIL": "#c08040", "ALTERNATIVA": "#7a9e7e" };
  const tipoColor = { "Equipo": "#8a5e30", "Consumible": "#c08040" };

  return (
    <div>
      <InfoBoxX c={c}>
        El principal desafío del pulque fuera de México: conseguir aguamiel fresco (savia cruda de agave maguey) es prácticamente imposible en Europa. Esta guía detalla las alternativas disponibles y cómo aproximarse al pulque auténtico con ingredientes accesibles.
      </InfoBoxX>

      <SectionTitleX c={c}>FILTRAR POR PRIORIDAD</SectionTitleX>
      <div style={{ display: "flex", gap: "6px", marginBottom: "12px", flexWrap: "wrap" }}>
        {["ESENCIAL", "IMPORTANTE", "ÚTIL", "ALTERNATIVA"].map(p => {
          const active = filterPrio.includes(p);
          return (
            <button key={p} onClick={() => togglePrio(p)} style={{
              background: active ? prioColor[p] : "transparent",
              color: active ? c.bg : prioColor[p],
              border: `1.5px solid ${prioColor[p]}`,
              borderRadius: "16px", padding: "5px 12px",
              fontSize: "11px", fontWeight: "bold", letterSpacing: "0.5px",
              transition: "all 0.15s",
            }}>{p}</button>
          );
        })}
      </div>
      <SectionTitleX c={c}>FILTRAR POR TIPO</SectionTitleX>
      <div style={{ display: "flex", gap: "6px", marginBottom: "12px", flexWrap: "wrap" }}>
        {["Equipo", "Consumible"].map(t => {
          const active = filterTipo.includes(t);
          return (
            <button key={t} onClick={() => toggleTipo(t)} style={{
              background: active ? tipoColor[t] : "transparent",
              color: active ? c.bg : tipoColor[t],
              border: `1.5px solid ${tipoColor[t]}`,
              borderRadius: "16px", padding: "5px 12px",
              fontSize: "11px", fontWeight: "bold", letterSpacing: "0.5px",
              transition: "all 0.15s",
            }}>{t}</button>
          );
        })}
      </div>
      {(filterPrio.length > 0 || filterTipo.length > 0) && (
        <button onClick={() => { setFilterPrio([]); setFilterTipo([]); }} style={{
          background: "transparent", color: c.accent2, border: "none",
          fontSize: "11px", marginBottom: "16px", textDecoration: "underline", padding: 0,
        }}>✕ Limpiar filtros</button>
      )}

      <SectionTitleX c={c}>LISTA DE COMPRA PULQUE ({filtered.length}/{items.length})</SectionTitleX>
      {filtered.map((item, i) => (
        <div key={i} style={{ background: c.bg2, border: `1px solid ${c.border1}`, borderLeft: `3px solid ${prioColor[item.prioridad]}`, borderRadius: "10px", padding: "12px", marginBottom: "8px" }}>
          <div style={{ display: "flex", justifyContent: "space-between", marginBottom: "6px" }}>
            <div style={{ fontSize: "13px", fontWeight: "bold", color: c.textBright }}>{item.item}</div>
            <div style={{ fontSize: "11px", color: c.accent1, fontWeight: "bold" }}>{item.precio}</div>
          </div>
          <div style={{ display: "flex", gap: "6px", marginBottom: "6px", flexWrap: "wrap" }}>
            <span style={{ fontSize: "9px", padding: "2px 8px", borderRadius: "10px", background: prioColor[item.prioridad], color: c.bg, fontWeight: "bold", letterSpacing: "0.5px" }}>{item.prioridad}</span>
            <span style={{ fontSize: "9px", padding: "2px 8px", borderRadius: "10px", background: "transparent", color: tipoColor[item.tipo], border: `1px solid ${tipoColor[item.tipo]}`, fontWeight: "bold" }}>{item.tipo}</span>
          </div>
          <div style={{ fontSize: "11px", color: c.accent2, marginBottom: "4px" }}>📍 {item.donde}</div>
          <div style={{ fontSize: "12px", color: c.accent3 }}>{item.nota}</div>
        </div>
      ))}
    </div>
  );
}

function PREP_PULQUE() {
  const c = FERMENT_COLORS;
  return (
    <div>
      <InfoBoxX c={c}>
        El pulque se hace fermentando aguamiel — la savia dulce del corazón del agave maguey, extraída semanalmente por el tlachiquero (artesano tradicional). En México, el aguamiel fresco se recoge cada mañana con una calabaza hueca (acocote). Fuera de México, hay que usar sustitutos o concentrados.
      </InfoBoxX>

      <SectionTitleX c={c}>QUÉ ES EL AGUAMIEL Y POR QUÉ ES DIFÍCIL</SectionTitleX>
      <InfoBoxX c={c}>
        🌵 <strong>Agave maguey:</strong> Agave americana, A. salmiana o A. mapisaga — plantas que tardan 8-20 años en madurar. Cuando están listas, el tlachiquero raspa el corazón de la piña (meristem) diariamente para estimular producción de savia.<br/>
        💧 <strong>Aguamiel:</strong> tiene 10-12 Brix (poco dulce), pH ~6, rico en azúcares simples y en Leuconostoc mesenteroides y Saccharomyces cerevisiae nativos de la planta.<br/>
        ⏱️ <strong>El problema:</strong> el aguamiel fresco empieza a fermentar en 1-4 horas a temperatura ambiente. Por eso es imposible exportarlo — llega acidificado.
      </InfoBoxX>

      <SectionTitleX c={c}>OPCIONES DE BASE EN ESPAÑA</SectionTitleX>
      <div style={{ display: "grid", gap: "8px", marginBottom: "16px" }}>
        {[
          { opcion: "🥇 Aguamiel concentrado importado", prep: "Diluir según instrucciones del producto (generalmente 1:2 o 1:3 con agua sin cloro). Objetivo: líquido ligeramente dulce, similar a agua azucarada suave (no almibarado).", nota: "Opción más cercana al original. Difícil de encontrar pero algunos importadores de Amazon o tiendas mexicanas especializadas lo tienen." },
          { opcion: "🥈 Néctar de agave diluido", prep: "Mezclar 1 cucharada de néctar de agave (15g) en 300ml de agua sin cloro. Probar: debe saber dulce pero aguado. Ajustar según gusto. Objetivo: ~8-12 Brix (si tienes refractómetro).", nota: "Néctar de agave es fructosa concentrada, no idéntico al aguamiel (que tiene mezcla de fructosa, glucosa y oliosacáridos), pero suficiente para fermentación." },
          { opcion: "🥉 Savia de Agave americana del jardín", prep: "Agave americana crece en jardines y parques de España (clima mediterráneo). En verano, cuando florece: cortar el tallo floral emergente y recoger la savia que brota. Solo disponible en temporada de floración.", nota: "Método auténtico pero estacional y requiere acceso a una planta madura. El sabor del pulque resultante es más cercano al original." },
        ].map((o, i) => (
          <div key={i} style={{ background: c.bg2, border: `1px solid ${c.border1}`, borderRadius: "8px", padding: "10px" }}>
            <div style={{ fontSize: "12px", fontWeight: "bold", color: c.textBright, marginBottom: "4px" }}>{o.opcion}</div>
            <div style={{ fontSize: "11px", color: c.accent3, lineHeight: "1.5", marginBottom: "4px" }}><strong>Preparación:</strong> {o.prep}</div>
            <div style={{ fontSize: "11px", color: c.accent2, lineHeight: "1.5" }}>💡 {o.nota}</div>
          </div>
        ))}
      </div>

      <SectionTitleX c={c}>PREPARAR LA BASE</SectionTitleX>
      <StepX c={c} num={1} text="Preparar 1-2L de base de aguamiel (según la opción elegida arriba). La base debe estar a temperatura ambiente o ligeramente cálida (22-28°C)." />
      <StepX c={c} num={2} text="Verter en el recipiente de fermentación limpio (barro, plástico o vidrio)." />
      <StepX c={c} num={3} text="Añadir el inoculante: 50-100ml de pulque semilla activo (si tienes), o 50-100ml de kefir de agua activo, o 50ml de suero de chucrut." why="El pulque no se hace con levadura de panadería — su perfil de bacterias lácticas (Leuconostoc) es lo que le da la textura viscosa característica (los glucanos). Sin ellas, obtienes un fermentado alcohólico genérico pero no pulque." />
      <StepX c={c} num={4} text="Remover suavemente para mezclar el inoculante con la base." />

      <SectionTitleX c={c}>NOTA SOBRE LA TEXTURA VISCOSA</SectionTitleX>
      <InfoBoxX c={c}>
        🔬 <strong>El secreto del pulque:</strong> su textura espesa y roposa (que mucha gente describe como babosa) viene de los glucanos — polisacáridos producidos por la bacteria Leuconostoc mesenteroides durante la fermentación. Estas bacterias convierten los azúcares del aguamiel en largas cadenas de glucosa que espesanl el líquido.<br/>
        🧪 Sin Leuconostoc nativo del aguamiel mexicano, el pulque casero tendrá menos viscosidad. Es normal — la viscosidad máxima se logra con el microbioma del tinacal tradicional, que tarda años en establecerse.
      </InfoBoxX>

      <SectionTitleX c={c}>ERRORES COMUNES EN PREP</SectionTitleX>
      <ErrorCardX c={c}
        error="Usar néctar de agave sin diluir"
        consecuencia="Concentración de azúcar demasiado alta — la fermentación produce demasiado alcohol y el Leuconostoc no puede prosperar. Resultado: fermentado alcohólico pero sin textura de pulque."
        fix="Diluir siempre el néctar hasta ~8-12 Brix (sabor ligeramente dulce, no almibarado). Ratio aproximado: 1 cucharada de néctar en 300ml de agua."
      />
      <ErrorCardX c={c}
        error="Usar agua clorada del grifo"
        consecuencia="El cloro mata el Leuconostoc y las levaduras del inoculante. La fermentación no arranca o lo hace muy lentamente."
        fix="Siempre agua mineral o agua del grifo reposada 24h (el cloro se evapora) o filtrada con carbón activo."
      />
    </div>
  );
}

function FERMENTACION_PULQUE() {
  const c = FERMENT_COLORS;
  return (
    <div>
      <InfoBoxX c={c}>
        El pulque fermenta MUY rápido — en México el tinacal (lugar de producción) recibe aguamiel fresca dos veces al día y el pulque está listo en 24-48h. Es una de las fermentaciones más rápidas del mundo bebible. La clave: consumir fresco, no guardar.
      </InfoBoxX>

      <SectionTitleX c={c}>PROCESO DE FERMENTACIÓN</SectionTitleX>
      <StepX c={c} num={1} text="Con el inoculante ya añadido a la base de aguamiel: cubrir el recipiente con un trapo o tela (no hermético) y dejar a temperatura ambiente 22-28°C." />
      <StepX c={c} num={2} text="Primeras 2-4 horas: agitar o remover suavemente cada hora para distribuir los microorganismos y homogeneizar la temperatura." why="Remover al inicio acelera la colonización bacteriana y asegura que el Leuconostoc tiene acceso a todos los azúcares disponibles." />
      <StepX c={c} num={3} text="Horas 4-12: empieza el burbujeo (pequeñas burbujas en superficie). Olor ligeramente ácido-afrutado. La viscosidad comienza a aumentar." />
      <StepX c={c} num={4} text="Horas 12-24: fermentación activa. Burbujeo constante. Textura empieza a volverse roposa. PROBAR: sabor ácido-dulce, ligeramente efervescente. Este es el punto de consumo tradicional." why="El pulque fresco de 12-24h es el más aromático y el de mejor textura. Los tlachiqueros lo llaman 'pulque curado' cuando está en este punto." />
      <StepX c={c} num={5} text="Horas 24-48: más ácido, más alcohólico (4-6% ABV), más espeso. Algunos prefieren este punto para mayor potencia." />
      <StepX c={c} num={6} text="Horas 48+: el pulque se vuelve muy ácido (vinagre de agave). Ya no es agradable de beber directamente." />

      <SectionTitleX c={c}>SEÑALES DE FERMENTACIÓN CORRECTA</SectionTitleX>
      <div style={{ display: "grid", gap: "8px", marginBottom: "16px" }}>
        {[
          { señal: "✅ Textura ligeramente viscosa o roposa", det: "Señal principal de que el Leuconostoc está activo y produciendo glucanos. Cuanto más viscoso, más auténtico." },
          { señal: "✅ Olor ácido-floral-levaduras", det: "Mezcla de ácido láctico + ésteres de Saccharomyces. Normal y deseable." },
          { señal: "✅ Burbujeo suave continuo", det: "CO₂ de la fermentación alcohólica y láctica. Normal." },
          { señal: "✅ Color blanco lechoso u opaco", det: "Normal — las levaduras en suspensión y los glucanos dan ese aspecto. El pulque auténtico es blanco y opaco." },
          { señal: "❌ Olor a podrido o a queso muy fuerte", det: "Contaminación con otras bacterias. Si el olor es muy desagradable: descartar y sanear mejor el recipiente." },
        ].map((s, i) => (
          <div key={i} style={{ background: c.bg2, border: `1px solid ${c.border1}`, borderRadius: "8px", padding: "10px" }}>
            <div style={{ fontSize: "12px", fontWeight: "bold", color: c.textBright, marginBottom: "3px" }}>{s.señal}</div>
            <div style={{ fontSize: "11px", color: c.accent3, lineHeight: "1.5" }}>{s.det}</div>
          </div>
        ))}
      </div>

      <SectionTitleX c={c}>ERRORES COMUNES</SectionTitleX>
      <ErrorCardX c={c}
        error="Esperar demasiado para consumir"
        consecuencia="A las 48-72h el pulque se convierte en vinagre de agave. No peligroso pero inbebible."
        fix="Consumir siempre entre las 12-36 horas de fermentación. Mover al frío si no se va a consumir en 24h."
      />
      <ErrorCardX c={c}
        error="Fermentar con levadura de pan (sin Leuconostoc)"
        consecuencia="Fermentado alcohólico de agave (parecido a un vino de agave o tequila sin destilar) pero sin textura ni sabor a pulque."
        fix="Usar kefir de agua activo o suero de chucrut como inoculante — contienen Lactobacillus que aproximan el perfil láctico del pulque."
      />
    </div>
  );
}

function CATA_PULQUE() {
  const c = FERMENT_COLORS;
  return (
    <div>
      <InfoBoxX c={c}>
        El pulque es una experiencia sensorial diferente a cualquier otra bebida fermentada occidental. La textura viscosa choca al principio — es parte de la experiencia. En México se dice "el pulque no se prueba, se adopta."
      </InfoBoxX>

      <SectionTitleX c={c}>PERFIL SENSORIAL</SectionTitleX>
      <div style={{ display: "grid", gap: "6px", marginBottom: "16px" }}>
        {[
          { label: "Textura", value: "Viscosa/roposa, ligeramente espumosa" },
          { label: "Color", value: "Blanco-opaco a ligeramente amarillento" },
          { label: "Aroma", value: "Ácido láctico + agave + levaduras + ligeramente floral" },
          { label: "Sabor base", value: "Ácido, dulce residual, ligeramente amargo vegetal de agave" },
          { label: "ABV", value: "4-8% (varía según fermentación)" },
          { label: "Efervescencia", value: "Baja — burbujeo suave natural" },
        ].map((s, i) => (
          <StatBoxX key={i} c={c} label={s.label} value={s.value} />
        ))}
      </div>

      <SectionTitleX c={c}>PULQUE CURADO — MEZCLADO CON FRUTA</SectionTitleX>
      <InfoBoxX c={c}>
        Los "curados" son pulque mezclado con puré de fruta, uno de los placeres más populares de Ciudad de México. Se hacen en licuadora, al momento de servir.
      </InfoBoxX>
      <div style={{ display: "grid", gap: "8px", marginBottom: "16px" }}>
        {[
          { tipo: "🍓 Curado de fresa", rec: "250ml pulque + 5-6 fresas + 1 cucharadita azúcar. Licuar 30 segundos. Servir con hielo." },
          { tipo: "🥭 Curado de mango", rec: "250ml pulque + 1/4 mango maduro. Licuar. Opcionalmente: pizca de chile en polvo en el vaso para contraste." },
          { tipo: "🍈 Curado de guayaba", rec: "250ml pulque + 1 guayaba madura (sin semillas). Licuar fino." },
          { tipo: "🌿 Curado de apio", rec: "250ml pulque + 2 ramas de apio + zumo de limón. Licuar. El más savory — para quienes no les gustan los dulces." },
          { tipo: "🌰 Curado de piñón (nuez de pino)", rec: "250ml pulque + 30g piñones tostados. Licuar muy fino. Colar. Sabor a nuez cremoso." },
          { tipo: "🌮 Sin curar (natural)", rec: "Pulque directo, sin mezclar. Servido frío en vaso amplio. La forma de probar el sabor puro." },
        ].map((c2, i) => (
          <div key={i} style={{ background: c.bg2, border: `1px solid ${c.border1}`, borderRadius: "8px", padding: "10px" }}>
            <div style={{ fontSize: "12px", fontWeight: "bold", color: c.textBright, marginBottom: "3px" }}>{c2.tipo}</div>
            <div style={{ fontSize: "11px", color: c.accent3, lineHeight: "1.5" }}>{c2.rec}</div>
          </div>
        ))}
      </div>

      <SectionTitleX c={c}>CONSERVACIÓN</SectionTitleX>
      <div style={{ display: "grid", gap: "6px", marginBottom: "16px" }}>
        {[
          { label: "Temperatura ambiente", value: "12-24h óptimo, 36h máximo" },
          { label: "Refrigerado (4°C)", value: "24-48h (fermentación muy lenta)" },
          { label: "Congelado", value: "No recomendado — destruye la textura" },
        ].map((s, i) => (
          <StatBoxX key={i} c={c} label={s.label} value={s.value} />
        ))}
      </div>

      <LegalHealthBox c={c}
        legal={<>✅ Fermentación de aguamiel/agave para consumo propio: 100% LEGAL en España y UE.<br/>✅ El pulque es bebida fermentada (no destilada) — igual que vino o cerveza en términos legales.<br/>📜 Patrimonio cultural mexicano. Declarado Bien Inmaterial por el gobierno de México en 2013.<br/>❌ Venta sin registro sanitario ni impuestos especiales: ilegal.</>}
        salud="ABV 4-8% — similar a una cerveza fuerte. Consumo moderado. El pulque tiene probióticos naturales (Lactobacillus, Leuconostoc) que pueden tener efectos beneficiosos en flora intestinal, similar al kéfir. No pasteurizar — se destruirían los microorganismos beneficiosos. Consumir fresco siempre."
        contraindicaciones="Embarazo/lactancia · Hepatopatía · Intolerancia a fermentados lácticos · Conducir/maquinaria · Medicación incompatible con alcohol"
        recursos="r/pulque · YouTube: 'cómo se hace el pulque' (documentales mexicanos) · 'The Oxford Companion to Beer' capítulo Pulque · Libro: 'Pulque, Tequila, Mezcal' (Gretchen Pierce) · Museo Nacional del Pulque, Ciudad de México"
      />
    </div>
  );
}
