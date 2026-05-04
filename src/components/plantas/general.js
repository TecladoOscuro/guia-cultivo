// PLANTAS PSICOACTIVAS SUAVES — todas legales en España
// Cada planta = phase. Cultivo + uso + harm reduction.

function INTRO_PLANTAS() {
  const c = PLANTAS_COLORS;
  return (
    <div>
      <InfoBoxX c={c}>
        Plantas legales con efectos psicoactivos suaves. Todas se pueden cultivar en casa o conseguir en herboristería sin problemas. Efectos van de relajación profunda a cambios sutiles en percepción/sueños. NO sustituyen drogas controladas — son experiencias diferentes, más sutiles, más botánicas.
      </InfoBoxX>

      <SectionTitleX c={c}>QUÉ INCLUYE ESTA SECCIÓN</SectionTitleX>
      <div style={{ display: "grid", gap: "10px", marginBottom: "20px" }}>
        {[
          { nombre: "🍃 Salvia divinorum", tipo: "Visionario INTENSO (5-15 min)", legal: "Legal cultivo + posesión (España)", dif: "Difícil cultivo (humedad alta)" },
          { nombre: "🌿 Damiana (Turnera diffusa)", tipo: "Eufórico ligero, afrodisíaco", legal: "100% legal", dif: "Fácil cultivo interior cálido" },
          { nombre: "🪷 Blue Lotus (Nymphaea caerulea)", tipo: "Sedante onírico, leve euforia", legal: "100% legal", dif: "Acuático, requiere estanque/maceta agua" },
          { nombre: "🥬 Lechuga silvestre (Lactuca virosa)", tipo: "Analgésico suave, sedante", legal: "100% legal", dif: "Muy fácil exterior" },
          { nombre: "💭 Calea zacatechichi", tipo: "Sueños vívidos, oneirogenic", legal: "100% legal (excepto Polonia)", dif: "Fácil clima cálido" },
        ].map((p, i) => (
          <div key={i} style={{ background: c.bg2, border: `1px solid ${c.border1}`, borderRadius: "10px", padding: "12px" }}>
            <div style={{ fontSize: "14px", fontWeight: "bold", color: c.textBright, marginBottom: "4px" }}>{p.nombre}</div>
            <div style={{ fontSize: "11px", color: c.accent2, marginBottom: "3px" }}>💊 {p.tipo}</div>
            <div style={{ fontSize: "11px", color: c.accent2, marginBottom: "3px" }}>⚖️ {p.legal}</div>
            <div style={{ fontSize: "11px", color: c.accent2 }}>📈 {p.dif}</div>
          </div>
        ))}
      </div>

      <WarningBoxX c={c}>
        ⚠️ <strong>Harm reduction general:</strong> Aunque todas son legales y "suaves", siguen siendo psicoactivas. NO mezclar con alcohol u otras sustancias sin investigación previa. Empezar con dosis BAJAS para test de tolerancia personal. Algunas (Salvia especialmente) requieren sitter (acompañante sobrio) la primera vez.
      </WarningBoxX>

      <SectionTitleX c={c}>POR QUÉ ESTAS Y NO OTRAS</SectionTitleX>
      <InfoBoxX c={c}>
        Plantas excluidas a propósito:<br/>
        ❌ <strong>Datura / Brugmansia:</strong> legal pero MUY peligroso (deliriante real, causa intoxicaciones graves frecuentes)<br/>
        ❌ <strong>Belladona / Mandrágora:</strong> mismo problema que Datura<br/>
        ❌ <strong>Iboga:</strong> legal cultivar pero ibogaína controlada y riesgo cardíaco<br/>
        ❌ <strong>Khat:</strong> ilegal en EU<br/>
        ❌ <strong>Adormidera:</strong> cultivo legal ornamental, extracción de látex ilegal<br/>
        <br/>
        Las 5 incluidas son: <strong>seguras (en dosis razonables), legales y no adictivas</strong>.
      </InfoBoxX>

      <SectionTitleX c={c}>TABLA COMPARATIVA DE DOSIS Y MÉTODOS</SectionTitleX>
      <div style={{ background: c.bg2, border: `1px solid ${c.border1}`, borderRadius: "10px", padding: "14px", marginBottom: "20px" }}>
        <div style={{ fontSize: "11px", color: c.accent2, marginBottom: "10px", lineHeight: "1.5" }}>
          Resumen rápido. Cada planta tiene su tab con detalle completo de cultivo, dosis y harm reduction. Empieza siempre por el rango bajo.
        </div>
        {[
          { p: "🍃 Salvia divinorum", baja: "200-300mg hoja", media: "300-500mg hoja", metodo: "Vaporizar/fumar (vía masticada x10 dosis). Sitter obligado primera vez.", dur: "5-15 min" },
          { p: "🌿 Damiana", baja: "2-4g hoja", media: "5-10g hoja", metodo: "Infusión (1 cda en taza, 5 min) o fumada en mezcla.", dur: "1-2h" },
          { p: "🪷 Blue Lotus", baja: "3-5g flor", media: "5-10g flor", metodo: "Té (5 min en agua 70°C) o vino macerado 2 sem (extracción mejor).", dur: "1-2h" },
          { p: "🥬 Wild Lettuce", baja: "1-2g lactucario", media: "3-5g lactucario", metodo: "Lactucario (látex seco) en cápsulas/té. Hojas frescas tienen poco efecto.", dur: "2-4h" },
          { p: "💭 Calea zacatechichi", baja: "5-10g hoja", media: "10-15g hoja", metodo: "Té amargo + cigarrillo de hoja seca antes de dormir. Para sueños vívidos.", dur: "Toda la noche" },
          { p: "🌴 Kava", baja: "2-4 cdas raíz", media: "4-8 cdas raíz", metodo: "Macerar raíz molida en agua tibia 10 min, exprimir con bolsa. Beber 1-3 tazas.", dur: "2-4h" },
          { p: "🌵 Kanna (fermentado)", baja: "100-200mg", media: "200-500mg", metodo: "Sublingual (debajo lengua 5 min) o snuff. Mascado tradicional sudafricano.", dur: "1-3h" },
        ].map((d, i) => (
          <div key={i} style={{ borderBottom: i < 6 ? `1px solid ${c.border1}` : "none", padding: "8px 0" }}>
            <div style={{ fontSize: "12px", fontWeight: "bold", color: c.textBright, marginBottom: "3px" }}>{d.p}</div>
            <div style={{ fontSize: "11px", color: c.accent3, lineHeight: "1.5", marginBottom: "2px" }}>
              <strong>Baja:</strong> {d.baja} · <strong>Media:</strong> {d.media} · <strong>Duración:</strong> {d.dur}
            </div>
            <div style={{ fontSize: "11px", color: c.accent2, lineHeight: "1.5" }}>{d.metodo}</div>
          </div>
        ))}
      </div>

      <LegalHealthBox c={c}
        legal={<>✅ Las 8 plantas (Salvia, Damiana, Blue Lotus, Wild Lettuce, Calea, Kava, Kanna): 100% LEGALES en España.<br/>✅ Cultivo + posesión + uso personal: legal.<br/>❌ Calea prohibida en Polonia (excepción rara). Salvia ilegal en USA/Australia.<br/>Verifica si viajas.</>}
        salud={<>Salvia disociativa intensa — sitter obligatorio. Kanna/Mucuna actúan en serotonina/dopamina — NO mezclar SSRI/IMAO. Kava posible toxicidad hepática con uso excesivo. Lúpulo fitoestrogénico (dosis altas hombres). NINGUNA es adictiva físicamente.</>}
        contraindicaciones={<>SSRI/IMAO/MDMA (Kanna, Mucuna especialmente) · Embarazo/lactancia (TODAS) · Cardiopatía · Alcohol/depresores con Kava/Wild lettuce · Conducir tras dosis</>}
      />
    </div>
  );
}

function COMPRA_PLANTAS() {
  const c = PLANTAS_COLORS;
  const items = [
    // Salvia divinorum
    { item: "🍃 Esqueje Salvia divinorum (enraizado)", precio: "15-30€", donde: "Internet", nota: "Vendedores etnobotánicos UE (Avalon, World Seed Supply, ethnopharm). Variedades: Bunk, Hofmann, Wasson — diferencias mínimas. Difícil de cultivar (humedad alta) pero potencia máxima.", planta: "Salvia", prioridad: "ESENCIAL" },
    { item: "🍃 Hojas Salvia secas (atajo)", precio: "10-25€ / 10g", donde: "Internet", nota: "Vendedores especializados. Cuidado: la mayoría de potencia se pierde en hojas mal secadas o muy viejas.", planta: "Salvia", prioridad: "ÚTIL" },
    // Damiana
    { item: "🌿 Semillas Damiana", precio: "3-8€ / sobre", donde: "Internet", nota: "Vendedores de plantas medicinales. Germinación 60-80%. Plantar primavera.", planta: "Damiana", prioridad: "IMPORTANTE" },
    { item: "🌿 Hojas Damiana secas", precio: "5-12€ / 50g", donde: "Tienda física", nota: "EN HERBORISTERÍAS DE BARRIO normalmente la tienen (planta tradicional). Ahorra cultivo si solo quieres probar.", planta: "Damiana", prioridad: "ESENCIAL" },
    // Blue Lotus
    { item: "🪷 Tubérculo Blue Lotus", precio: "10-25€", donde: "Internet", nota: "Vendedores de plantas acuáticas o etnobotánicos. Necesitas estanque o barreño grande para plantarlo.", planta: "Blue Lotus", prioridad: "ESENCIAL" },
    { item: "🪷 Flores secas Blue Lotus", precio: "10-20€ / 10g", donde: "Internet", nota: "Vendedores etnobotánicos UE. Buscar 'Nymphaea caerulea dried flowers'. Calidad variable.", planta: "Blue Lotus", prioridad: "IMPORTANTE" },
    // Wild Lettuce
    { item: "🥬 Semillas Lechuga silvestre (Lactuca virosa)", precio: "1-3€ / sobre", donde: "Internet", nota: "Cualquier vendedor de semillas medicinales. Crece como mala hierba — muy fácil. Plantar marzo o septiembre.", planta: "Wild Lettuce", prioridad: "ESENCIAL" },
    { item: "🥬 Lactucario (látex seco)", precio: "10-20€ / 10g", donde: "Internet", nota: "Si no quieres extraer tú: vendedores etnobotánicos venden lactucario ya listo.", planta: "Wild Lettuce", prioridad: "ÚTIL" },
    // Calea
    { item: "💭 Esqueje Calea zacatechichi", precio: "10-20€", donde: "Internet", nota: "Más fácil que semillas (delicadas). Vendedores etnobotánicos. Crecimiento medio.", planta: "Calea", prioridad: "ESENCIAL" },
    { item: "💭 Hojas Calea secas", precio: "8-18€ / 25g", donde: "Internet", nota: "Vendedores etnobotánicos UE. Sabor MUY amargo — quizás añadir limón/miel.", planta: "Calea", prioridad: "IMPORTANTE" },
    // Kava
    { item: "🌴 Esqueje Kava (Piper methysticum)", precio: "30-60€", donde: "Internet", nota: "Vendedores etnobotánicos UE. Variedades novatos: 'Borogu' o 'Mahakea'. Cultivo INTERIOR obligatorio en España.", planta: "Kava", prioridad: "IMPORTANTE" },
    { item: "🌴 Raíz Kava molida (atajo)", precio: "20-50€ / 250g", donde: "Internet", nota: "Buscar 'kava noble' (NO extractos baratos con solventes — toxicidad hepática histórica fue por extractos malos). Suficiente para 10-20 sesiones.", planta: "Kava", prioridad: "ESENCIAL" },
    { item: "🥄 Kava strainer bag", precio: "5-10€", donde: "Internet", nota: "Bolsa de tela para preparar Kava tradicional. Reutilizable. Buscar 'kava strainer bag'.", planta: "Kava", prioridad: "ESENCIAL" },
    // Kanna
    { item: "🌵 Esqueje Sceletium tortuosum (Kanna)", precio: "8-20€", donde: "Internet", nota: "Vendedores etnobotánicos UE. Crece rápido, muy fácil. Mediterráneo: exterior posible.", planta: "Kanna", prioridad: "ESENCIAL" },
    { item: "🌵 Kanna fermentada en polvo", precio: "15-30€ / 25g", donde: "Internet", nota: "Si no quieres cultivar/fermentar: comprar polvo ya fermentado. 'Kanna powder fermented' o 'Sceletium fermented'.", planta: "Kanna", prioridad: "ÚTIL" },
  ];
  const [filterPlanta, setFilterPlanta] = React.useState([]);
  const [filterPrio, setFilterPrio] = React.useState([]);
  const togglePlanta = (p) => setFilterPlanta(s => s.includes(p) ? s.filter(x => x !== p) : [...s, p]);
  const togglePrio = (p) => setFilterPrio(s => s.includes(p) ? s.filter(x => x !== p) : [...s, p]);
  const filtered = items.filter(i =>
    (filterPlanta.length === 0 || filterPlanta.includes(i.planta)) &&
    (filterPrio.length === 0 || filterPrio.includes(i.prioridad))
  );
  const plantas = ["Salvia", "Damiana", "Blue Lotus", "Wild Lettuce", "Calea", "Kava", "Kanna"];
  const plantaColor = { "Salvia": "#9070b8", "Damiana": "#a888c8", "Blue Lotus": "#bda3d4", "Wild Lettuce": "#d3bee0", "Calea": "#e8d8ee", "Kava": "#a888c8", "Kanna": "#bda3d4" };
  const prioColor = { "ESENCIAL": "#e88aa8", "IMPORTANTE": "#bda3d4", "ÚTIL": "#a888c8" };

  return (
    <div>
      <InfoBoxX c={c}>
        Lista completa de compra para las 7 plantas suaves: esquejes/semillas + alternativas atajo (producto seco listo). Filtra por planta para ver solo lo que necesitas.
      </InfoBoxX>

      <SectionTitleX c={c}>FILTRAR POR PLANTA</SectionTitleX>
      <div style={{ display: "flex", gap: "6px", marginBottom: "12px", flexWrap: "wrap" }}>
        {plantas.map(p => {
          const active = filterPlanta.includes(p);
          const cc = plantaColor[p];
          return (
            <button key={p} onClick={() => togglePlanta(p)} style={{
              background: active ? cc : "transparent",
              color: active ? c.bg : cc,
              border: `1.5px solid ${cc}`,
              borderRadius: "16px", padding: "5px 12px",
              fontSize: "11px", fontWeight: "bold", letterSpacing: "0.5px",
              transition: "all 0.15s",
            }}>{p}</button>
          );
        })}
      </div>
      <SectionTitleX c={c}>FILTRAR POR PRIORIDAD</SectionTitleX>
      <div style={{ display: "flex", gap: "6px", marginBottom: "12px", flexWrap: "wrap" }}>
        {["ESENCIAL", "IMPORTANTE", "ÚTIL"].map(p => {
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
      {(filterPlanta.length > 0 || filterPrio.length > 0) && (
        <button onClick={() => { setFilterPlanta([]); setFilterPrio([]); }} style={{
          background: "transparent", color: c.accent2, border: "none",
          fontSize: "11px", marginBottom: "16px", textDecoration: "underline", padding: 0,
        }}>✕ Limpiar filtros</button>
      )}

      <SectionTitleX c={c}>LISTA COMPRA PLANTAS SUAVES ({filtered.length}/{items.length})</SectionTitleX>
      {filtered.map((item, i) => (
        <div key={i} style={{ background: c.bg2, border: `1px solid ${c.border1}`, borderLeft: `3px solid ${prioColor[item.prioridad]}`, borderRadius: "10px", padding: "12px", marginBottom: "8px" }}>
          <div style={{ display: "flex", justifyContent: "space-between", marginBottom: "6px" }}>
            <div style={{ fontSize: "13px", fontWeight: "bold", color: c.textBright }}>{item.item}</div>
            <div style={{ fontSize: "11px", color: c.accent1, fontWeight: "bold" }}>{item.precio}</div>
          </div>
          <div style={{ display: "flex", gap: "6px", marginBottom: "6px", flexWrap: "wrap" }}>
            <span style={{ fontSize: "9px", padding: "2px 8px", borderRadius: "10px", background: prioColor[item.prioridad], color: c.bg, fontWeight: "bold", letterSpacing: "0.5px" }}>{item.prioridad}</span>
            <span style={{ fontSize: "9px", padding: "2px 8px", borderRadius: "10px", background: "transparent", color: plantaColor[item.planta], border: `1px solid ${plantaColor[item.planta]}`, fontWeight: "bold" }}>{item.planta}</span>
          </div>
          <div style={{ fontSize: "11px", color: c.accent2, marginBottom: "4px" }}>📍 {item.donde}</div>
          <div style={{ fontSize: "12px", color: c.accent3 }}>{item.nota}</div>
        </div>
      ))}

      <InfoBoxX c={c}>
        💡 <strong>Vendedores recomendados (etnobotánica EU):</strong> Avalon Magic Plants (Holanda), World Seed Supply (USA pero envía a EU), Tatanka (Holanda), Herbalistics (UK), Magic Mushrooms Shop. Comparar precios + leer reviews antes de comprar.
      </InfoBoxX>
    </div>
  );
}

function SALVIA() {
  const c = PLANTAS_COLORS;
  return (
    <div>
      <InfoBoxX c={c}>
        <strong>Salvia divinorum</strong> — planta mexicana con <GlossaryLink term="Salvinorina A">salvinorina A</GlossaryLink>, el <GlossaryLink term="Psicoactivo">psicoactivo</GlossaryLink> natural más potente conocido. Experiencia disociativa intensa de 5-15 min. NO es como cannabis o setas — es completamente distinto, alienante, a veces aterrador. Solo para gente que entiende lo que va a hacer.
      </InfoBoxX>

      <WarningBoxX c={c}>
        ⚠️ <strong>Sobre la experiencia:</strong> Salvia produce experiencia DISOCIATIVA — sensación de salir del cuerpo, geometría imposible, "convertirse en objeto", risa incontrolable o pánico. NO es recreativo en sentido fiestero. NO conducir, no estar de pie, SIEMPRE con sitter sobrio. Algunas personas tienen mal viaje. Investigar Erowid antes.
      </WarningBoxX>

      <SectionTitleX c={c}>CONDICIONES IDEALES</SectionTitleX>
      <div style={{ display: "grid", gridTemplateColumns: "1fr 1fr", gap: "10px", marginBottom: "16px" }}>
        <StatBoxX c={c} label="Temperatura" value="18-26°C constante" />
        <StatBoxX c={c} label="Humedad" value="60-80% (alta)" />
        <StatBoxX c={c} label="Luz" value="Indirecta (sombra)" />
        <StatBoxX c={c} label="Sustrato" value="Drenado, ácido (pH 5.5-6.5)" />
      </div>

      <SectionTitleX c={c}>PRECIOS ORIENTATIVOS</SectionTitleX>
      <InfoBoxX c={c}>
        🌱 Esqueje enraizado: <strong>15-30€</strong> · 🍃 Hojas secas: <strong>10-25€/10g</strong> (semillas casi imposibles de conseguir). Inversión total inicio: ~50-80€ con maceta+sustrato+humidificador.
      </InfoBoxX>

      <SectionTitleX c={c}>CULTIVO</SectionTitleX>
      <StepX c={c} num={1} text="Comprar esqueje (semillas casi imposibles): vendedores online europeos, 15-30€ por esqueje enraizado. Variedades: Bunk, Hofmann, Wasson — diferencias mínimas." />
      <StepX c={c} num={2} text="Sustrato: tierra de jardín + perlita + turba (1:1:1). Maceta drenada. NO usa cactus (necesita más humedad)." />
      <StepX c={c} num={3} text="Luz: indirecta. Ventana orientada norte/este. Luz directa la quema." why="En su hábitat natural (Oaxaca) crece bajo sombra de árboles altos. Luz directa = hojas amarillas y caídas." />
      <StepX c={c} num={4} text="Humedad: 60-80%. Esto es lo más difícil. Pulverizar 2-3x/día o usar humidificador. Bandeja con guijarros + agua bajo la maceta ayuda." />
      <StepX c={c} num={5} text="Temperatura: 18-26°C constante. Sensible al frío (<15°C la frena), al calor (>30°C la marchita)." />
      <StepX c={c} num={6} text="Riego: cuando la superficie del sustrato esté ligeramente seca. Salvia bebe MUCHO comparada con otras plantas." />

      <SectionTitleX c={c}>COSECHA Y PREPARACIÓN</SectionTitleX>
      <StepX c={c} num={1} text="Cortar hojas grandes y maduras (10cm+) con tijeras esterilizadas. La planta sigue produciendo más hojas." />
      <StepX c={c} num={2} text="Secar hojas en sitio oscuro y ventilado. 5-10 días hasta que estén crujientes." why="Luz degrada salvinorina. Calor también — NO usar horno." />
      <StepX c={c} num={3} text="Conservar en frasco hermético opaco. Dura años manteniendo potencia." />

      <SectionTitleX c={c}>USO TRADICIONAL — QUID</SectionTitleX>
      <InfoBoxX c={c}>
        Método tradicional Mazateco: masticar hojas FRESCAS (5-15 hojas) y mantenerlas en la boca 30 min sin tragar (la salvinorina se absorbe por la mucosa oral). Experiencia más suave y larga (45-60 min) que fumar.
      </InfoBoxX>

      <SectionTitleX c={c}>USO MODERNO — INFUSIÓN</SectionTitleX>
      <InfoBoxX c={c}>
        Hojas secas en infusión NO funciona bien — la salvinorina se destruye con el calor del agua. Mascar hojas secas tampoco — duras y poco efectivas. Para hojas secas, opción tradicional es extracto (consumo concentrado, NO recomendado para principiantes — requiere harm reduction extrema).
      </InfoBoxX>

      <SectionTitleX c={c}>EFECTOS</SectionTitleX>
      <InfoBoxX c={c}>
        Comienzo: 30 segundos (fumado) o 5-10 min (quid). Duración: 5-15 min (fumado), 45-60 min (quid). Sensaciones: disociación TOTAL (salir del cuerpo), geometría imposible, sensación de ser "tirado" hacia otra dimensión, posible pánico. NO es agradable como otros psicodélicos — es alienante y a veces aterrador.
      </InfoBoxX>

      <SectionTitleX c={c}>CONSERVACIÓN</SectionTitleX>
      <InfoBoxX c={c}>
        🥄 <strong>Hojas secas:</strong> frasco hermético OPACO (la luz UV degrada salvinorina), lugar fresco y seco. Dura 2-3 años manteniendo potencia.<br/>
        🌱 <strong>Plantas vivas:</strong> con cuidados correctos viven indefinidamente. Una planta = recurso para décadas si replantas esquejes.<br/>
        🍶 <strong>Tintura sublingual:</strong> hojas secas en alcohol 95% durante 4-6 semanas. Potencia concentrada. Conservar en frasco oscuro — años.
      </InfoBoxX>

      <SectionTitleX c={c}>HARM REDUCTION</SectionTitleX>
      <ErrorCardX c={c}
        error="Probar primera vez sin sitter"
        consecuencia="Caídas, golpes, salir corriendo. Personas han hecho cosas peligrosas durante la disociación."
        fix="SIEMPRE con sitter sobrio la primera vez. Sentado en sofá o cama, no de pie. Dosis baja primera vez."
      />
      <ErrorCardX c={c}
        error="Mezclar con alcohol/otras sustancias"
        consecuencia="Salvia ya es disociativa. Mezclar empeora la confusión y aumenta riesgo de pánico."
        fix="Sobrio. Sin nada más en sangre. La salvia sola ya es lo suficientemente intensa."
      />
    </div>
  );
}

function DAMIANA() {
  const c = PLANTAS_COLORS;
  return (
    <div>
      <InfoBoxX c={c}>
        <strong>Damiana (Turnera diffusa)</strong> — arbusto aromático mexicano. Efecto: relajación + ligera euforia + afrodisíaco suave. La planta más "amigable" de esta lista. Sabor agradable, efectos suaves, buena para principiantes en plantas psicoactivas.
      </InfoBoxX>

      <SectionTitleX c={c}>CONDICIONES IDEALES</SectionTitleX>
      <div style={{ display: "grid", gridTemplateColumns: "1fr 1fr", gap: "10px", marginBottom: "16px" }}>
        <StatBoxX c={c} label="Temperatura" value="18-32°C" />
        <StatBoxX c={c} label="Humedad" value="30-50% (baja)" />
        <StatBoxX c={c} label="Luz" value="Sol directo / semi-sombra" />
        <StatBoxX c={c} label="Sustrato" value="Drenado tipo suculenta" />
      </div>

      <SectionTitleX c={c}>PRECIOS ORIENTATIVOS</SectionTitleX>
      <InfoBoxX c={c}>
        🌰 Semillas: <strong>3-8€/sobre</strong> · 🌿 Hojas secas (herboristería): <strong>5-12€/50g</strong>. Inversión total inicio: ~20-40€. La opción MÁS BARATA y fácil de las plantas suaves.
      </InfoBoxX>

      <SectionTitleX c={c}>CULTIVO</SectionTitleX>
      <StepX c={c} num={1} text="Semillas o esquejes. Semillas tardan 2-4 semanas en germinar a 20-25°C. Esquejes enraízan en agua en 2-3 semanas." />
      <StepX c={c} num={2} text="Sustrato: bien drenado, tipo suculenta. Tolera tierra pobre." />
      <StepX c={c} num={3} text="Luz: sol directo o semi-sombra. Adapta a ambos." />
      <StepX c={c} num={4} text="Riego: poco. Es planta semi-desértica. Solo cuando el sustrato esté muy seco." />
      <StepX c={c} num={5} text="Temperatura: 18-32°C ideal. Sensible al frío extremo (<5°C). En zona fría: cultivo interior junto a ventana sur." />

      <SectionTitleX c={c}>COSECHA</SectionTitleX>
      <StepX c={c} num={1} text="Cortar ramitas con hojas (5-10cm) en cualquier momento del año. La planta sigue produciendo." />
      <StepX c={c} num={2} text="Secar al aire (sombra ventilada) 5-7 días. Conservar en frasco." />

      <SectionTitleX c={c}>USOS</SectionTitleX>
      <InfoBoxX c={c}>
        🍵 <strong>Infusión:</strong> 2-3g de hojas secas por taza. Hervir 5-10 min. 1-3 tazas al día. Sabor herbal agradable.<br/>
        🚬 <strong>Mezclada con tabaco/cannabis:</strong> 30% damiana en blends. Efecto suaviza y aporta notas dulces.<br/>
        🍷 <strong>Licor:</strong> macerar 50g en 500ml de vodka 2 semanas. Filtrar. Licor afrodisíaco tradicional mexicano.
      </InfoBoxX>

      <SectionTitleX c={c}>EFECTOS</SectionTitleX>
      <InfoBoxX c={c}>
        Comienzo: 15-30 min. Duración: 2-4h. Sensaciones: relajación corporal, ligero "buzz" mental similar a kava o cannabis muy suave, calidez. Reportada como ayuda en ansiedad social. Sin "viaje" — solo bienestar.
      </InfoBoxX>

      <SectionTitleX c={c}>CONSERVACIÓN</SectionTitleX>
      <InfoBoxX c={c}>
        🥄 <strong>Hojas secas:</strong> frasco hermético, lugar fresco. Dura 1-2 años.<br/>
        🍷 <strong>Licor casero:</strong> dura años, mejora con el tiempo (macerado).<br/>
        🌱 <strong>Plantas vivas:</strong> en clima cálido viven indefinidamente.
      </InfoBoxX>

      <SectionTitleX c={c}>HARM REDUCTION</SectionTitleX>
      <InfoBoxX c={c}>
        Damiana es de las MÁS SEGURAS de la lista. Sin contraindicaciones graves conocidas. Precaución: embarazo (estimulante uterino), medicación antidiabética (puede bajar glucosa), no mezclar con alcohol en exceso.
      </InfoBoxX>
    </div>
  );
}

function BLUE_LOTUS() {
  const c = PLANTAS_COLORS;
  return (
    <div>
      <InfoBoxX c={c}>
        <strong>Blue Lotus (Nymphaea caerulea)</strong> — flor sagrada del antiguo Egipto. Sedante suave, leve euforia, sueños vívidos. Aspecto hermoso (flor azul). Cultivable solo si tienes estanque o maceta acuática.
      </InfoBoxX>

      <SectionTitleX c={c}>CONDICIONES IDEALES</SectionTitleX>
      <div style={{ display: "grid", gridTemplateColumns: "1fr 1fr", gap: "10px", marginBottom: "16px" }}>
        <StatBoxX c={c} label="Temperatura agua" value="22-28°C tropical" />
        <StatBoxX c={c} label="Profundidad" value="30cm sobre maceta" />
        <StatBoxX c={c} label="Luz" value="Pleno sol 6h+" />
        <StatBoxX c={c} label="Sustrato" value="Arcillosa pesada acuática" />
      </div>

      <SectionTitleX c={c}>PRECIOS ORIENTATIVOS</SectionTitleX>
      <InfoBoxX c={c}>
        🌱 Tubérculo: <strong>10-25€</strong> · 🪷 Flores secas: <strong>10-20€/10g</strong>. Estanque/barreño 50L+: <strong>20-50€</strong>. Inversión total inicio: ~50-100€ (necesitas espacio acuático).
      </InfoBoxX>

      <SectionTitleX c={c}>CULTIVO ACUÁTICO</SectionTitleX>
      <StepX c={c} num={1} text="Necesitas: estanque pequeño, barreño grande de plástico (50L+), o pecera GRANDE. Profundidad mínima 30cm." />
      <StepX c={c} num={2} text="Sustrato: tierra arcillosa pesada en una maceta acuática (8-15cm de profundidad de tierra). Encima poner gravilla para que el agua quede limpia." />
      <StepX c={c} num={3} text="Plantar tubérculo o semilla en la maceta de tierra. Cubrir todo con agua hasta 20-30cm sobre la maceta." />
      <StepX c={c} num={4} text="Luz: pleno sol 6h+ al día. Imprescindible para flor." />
      <StepX c={c} num={5} text="Temperatura agua: 22-28°C. Tropical. En España solo crece bien mayo-octubre exterior. En invierno: interior junto a ventana sur cálida o invernadero." />
      <StepX c={c} num={6} text="Fertilizar: pellets para plantas acuáticas cada 6 semanas en temporada activa." />

      <SectionTitleX c={c}>COSECHA</SectionTitleX>
      <StepX c={c} num={1} text="Recolectar las flores cuando se abren (a media mañana). Se abren 2-3 días, se cierran de noche." />
      <StepX c={c} num={2} text="Secar las flores enteras en sitio oscuro y ventilado. 1-2 semanas." />
      <StepX c={c} num={3} text="Conservar enteras o desmenuzadas en frasco hermético." />

      <SectionTitleX c={c}>USOS</SectionTitleX>
      <InfoBoxX c={c}>
        🍵 <strong>Infusión:</strong> 5-10g de flores secas en agua caliente (NO hirviendo, 80°C). Reposo 15 min. 1 taza por sesión.<br/>
        🍷 <strong>Vino macerado (uso egipcio antiguo):</strong> 30g de flores secas en 750ml de vino tinto seco. Macerar 2 semanas. Filtrar. Beber en copas pequeñas.<br/>
        🚬 <strong>Fumada:</strong> mezclada con tabaco, efecto sutil.
      </InfoBoxX>

      <SectionTitleX c={c}>EFECTOS</SectionTitleX>
      <InfoBoxX c={c}>
        Comienzo: 30 min - 1h. Duración: 2-4h. Sensaciones: relajación profunda corporal y mental, sueños vívidos si se toma antes de dormir, ligera euforia. NO es alucinógeno. Comparable a una copa de vino con efecto sedante extra.
      </InfoBoxX>

      <SectionTitleX c={c}>CONSERVACIÓN</SectionTitleX>
      <InfoBoxX c={c}>
        🪷 <strong>Flores secas enteras:</strong> frasco hermético oscuro. Dura 2-3 años.<br/>
        🍷 <strong>Vino macerado (egipcio):</strong> 2-4 años en botella oscura corchada.<br/>
        🌱 <strong>Tubérculo en hibernación:</strong> sacar del agua en invierno, mantener húmedo en bolsa plástica nevera. Replantar primavera.
      </InfoBoxX>

      <SectionTitleX c={c}>HARM REDUCTION</SectionTitleX>
      <InfoBoxX c={c}>
        Sedante suave — NO mezclar con alcohol/depresores. Embarazo y lactancia: contraindicado. Sin antecedentes adversos significativos en uso tradicional milenario egipcio.
      </InfoBoxX>
    </div>
  );
}

function WILD_LETTUCE() {
  const c = PLANTAS_COLORS;
  return (
    <div>
      <InfoBoxX c={c}>
        <strong>Lechuga silvestre (Lactuca virosa)</strong> — pariente de la lechuga común, pero con látex blanco que tiene propiedades analgésicas y sedantes. Conocida como "opio del pobre". NO contiene opiáceos reales — solo es sedante suave.
      </InfoBoxX>

      <SectionTitleX c={c}>CONDICIONES IDEALES</SectionTitleX>
      <div style={{ display: "grid", gridTemplateColumns: "1fr 1fr", gap: "10px", marginBottom: "16px" }}>
        <StatBoxX c={c} label="Temperatura" value="15-30°C tolerante" />
        <StatBoxX c={c} label="Humedad" value="40-70% (normal)" />
        <StatBoxX c={c} label="Luz" value="Sol directo 4-6h" />
        <StatBoxX c={c} label="Sustrato" value="Cualquier suelo común" />
      </div>

      <SectionTitleX c={c}>PRECIOS ORIENTATIVOS</SectionTitleX>
      <InfoBoxX c={c}>
        🌰 Semillas: <strong>1-3€/sobre</strong> (cientos de semillas) · 🥬 Lactucario seco: <strong>10-20€/10g</strong>. Inversión total inicio: ~10-20€. La planta MÁS BARATA y crece como mala hierba.
      </InfoBoxX>

      <SectionTitleX c={c}>CULTIVO — CASI INVASIVA</SectionTitleX>
      <StepX c={c} num={1} text="Semillas: cualquier vendedor de semillas medicinales. 1-3€ por sobre con cientos de semillas." />
      <StepX c={c} num={2} text="Plantar directamente en exterior en marzo-abril o septiembre. Suelo común, no requiere especial." />
      <StepX c={c} num={3} text="Sol directo 4-6h al día. Riego moderado." />
      <StepX c={c} num={4} text="Crece como una lechuga normal pero MÁS — hasta 2m de altura cuando florece. Hojas grandes, tallo grueso lleno de látex." />
      <StepX c={c} num={5} text="Listo para cosechar a los 3-4 meses, justo antes de florecer (concentración máxima de látex)." />

      <SectionTitleX c={c}>EXTRACCIÓN DEL LÁTEX (LACTUCARIO)</SectionTitleX>
      <StepX c={c} num={1} text="Cortar el tallo principal con cuchillo. Sale un líquido blanco lechoso (látex) — eso es lo activo." />
      <StepX c={c} num={2} text="Recoger el látex en cuchara o trapo limpio. Cada planta da 1-3g." />
      <StepX c={c} num={3} text="Hacer cortes superficiales adicionales en el tallo cada 2-3 días — se sigue regenerando látex hasta semanas." />
      <StepX c={c} num={4} text="Secar el látex al aire (oscuro). Se vuelve marrón oscuro y resinoso. Conservar en frasco." />

      <SectionTitleX c={c}>USOS</SectionTitleX>
      <InfoBoxX c={c}>
        🍵 <strong>Infusión de hojas:</strong> 5-10g de hojas secas (sin látex). Efecto suave. Tradicional para insomnio.<br/>
        🚬 <strong>Lactucario fumado:</strong> 0.5-1g del látex seco. Efecto más fuerte, sedante notable.<br/>
        💊 <strong>Cápsulas:</strong> rellenar cápsulas con polvo de hojas o lactucario. 200-400mg.
      </InfoBoxX>

      <SectionTitleX c={c}>EFECTOS</SectionTitleX>
      <InfoBoxX c={c}>
        Comienzo: 30 min - 1h. Duración: 3-6h. Sensaciones: somnolencia, alivio de dolor leve-moderado, relajación muscular. No euforia. Útil para insomnio o dolor de cabeza. NO es adictivo, NO contiene opiáceos.
      </InfoBoxX>

      <SectionTitleX c={c}>CONSERVACIÓN</SectionTitleX>
      <InfoBoxX c={c}>
        🥄 <strong>Hojas secas:</strong> frasco hermético, lugar fresco. Dura 1-2 años.<br/>
        🥄 <strong>Lactucario (látex seco):</strong> frasco oscuro hermético. Dura 3-5 años. La forma más concentrada y duradera.<br/>
        💊 <strong>Cápsulas:</strong> rellenar y guardar en frasco con sílica gel.
      </InfoBoxX>

      <SectionTitleX c={c}>HARM REDUCTION</SectionTitleX>
      <InfoBoxX c={c}>
        Sedante suave — NO mezclar con alcohol/depresores SNC. Embarazo y lactancia: contraindicado. NO conducir tras dosis altas.
      </InfoBoxX>
    </div>
  );
}

function CALEA() {
  const c = PLANTAS_COLORS;
  return (
    <div>
      <InfoBoxX c={c}>
        <strong>Calea zacatechichi</strong> — "hierba de los sueños" Maya. Oneirogenic = produce sueños VÍVIDOS, intensos, muchas veces lúcidos. Sabor MUY amargo. Para gente interesada en exploración onírica.
      </InfoBoxX>

      <SectionTitleX c={c}>CONDICIONES IDEALES</SectionTitleX>
      <div style={{ display: "grid", gridTemplateColumns: "1fr 1fr", gap: "10px", marginBottom: "16px" }}>
        <StatBoxX c={c} label="Temperatura" value="18-30°C" />
        <StatBoxX c={c} label="Humedad" value="40-60%" />
        <StatBoxX c={c} label="Luz" value="Pleno sol / semi-sombra" />
        <StatBoxX c={c} label="Sustrato" value="Universal + perlita drenado" />
      </div>

      <SectionTitleX c={c}>PRECIOS ORIENTATIVOS</SectionTitleX>
      <InfoBoxX c={c}>
        🌱 Esqueje: <strong>10-20€</strong> · 💭 Hojas secas: <strong>8-18€/25g</strong>. Inversión total inicio: ~25-50€.
      </InfoBoxX>

      <SectionTitleX c={c}>CULTIVO</SectionTitleX>
      <StepX c={c} num={1} text="Semillas o esquejes. Más fácil esqueje (semillas son delicadas)." />
      <StepX c={c} num={2} text="Sustrato: bien drenado, mezcla universal + perlita." />
      <StepX c={c} num={3} text="Luz: pleno sol o semi-sombra. Adapta bien." />
      <StepX c={c} num={4} text="Riego: regular pero sin encharcar." />
      <StepX c={c} num={5} text="Temperatura: 18-30°C. Sensible al frío (<10°C). Cultivar interior si vives zona fría." />
      <StepX c={c} num={6} text="Crece como arbusto bajo (50cm-1m). Cosecha hojas individuales según necesidad — la planta sigue produciendo." />

      <SectionTitleX c={c}>USO TRADICIONAL — ANTES DE DORMIR</SectionTitleX>
      <StepX c={c} num={1} text="2-5g de hojas secas en infusión. Hervir 10 min. Sabor BRUTALMENTE amargo — añade miel/limón si quieres." />
      <StepX c={c} num={2} text="Beber 30 min antes de irse a la cama." />
      <StepX c={c} num={3} text="Adicional (potencia el efecto): fumar pipa pequeña con hojas secas justo antes de acostarse." />
      <StepX c={c} num={4} text="Tener libreta y bolígrafo en la mesilla — al despertar anotar sueños inmediatamente o se olvidan." />

      <SectionTitleX c={c}>EFECTOS</SectionTitleX>
      <InfoBoxX c={c}>
        Mientras te duermes: NO efecto consciente notable, quizás ligera somnolencia.<br/>
        Durante la noche: sueños MUY vívidos, larga duración, mucha imaginería. Algunas personas reportan sueños lúcidos (consciencia dentro del sueño).<br/>
        Al despertar: recuerdo VÍVIDO de sueños — más detalles que sin Calea. La sensación dura horas.<br/>
        <br/>
        <strong>NO es psicoactivo en estado de vigilia.</strong> Solo afecta al sueño. Lo más cercano a "soñar a propósito".
      </InfoBoxX>

      <SectionTitleX c={c}>CONSERVACIÓN</SectionTitleX>
      <InfoBoxX c={c}>
        🥄 <strong>Hojas secas:</strong> frasco hermético oscuro. Dura 1-2 años.<br/>
        🌱 <strong>Plantas vivas:</strong> en clima cálido viven indefinidamente.<br/>
        🍶 <strong>Tintura alcohólica:</strong> 50g hojas secas en 250ml vodka 4 semanas. Filtra. Dura años.
      </InfoBoxX>

      <SectionTitleX c={c}>HARM REDUCTION</SectionTitleX>
      <ErrorCardX c={c}
        error="Usarla todas las noches"
        consecuencia="Tolerancia se desarrolla rápido. Después de 1-2 semanas, no hace efecto. También puede afectar calidad del sueño profundo."
        fix="Máximo 2-3 veces por semana. Descansos de 1+ semana cada mes. Usar como herramienta, no como rutina."
      />
    </div>
  );
}

function KAVA() {
  const c = PLANTAS_COLORS;
  return (
    <div>
      <InfoBoxX c={c}>
        <strong>Kava (Piper methysticum)</strong> — arbusto del Pacífico (Hawaii, Fiji, Vanuatu). Bebida ceremonial milenaria. Activos: <GlossaryLink term="Kavalactona">kavalactonas</GlossaryLink>. Efecto: relajación muscular profunda + ansiolítico + leve euforia social. SIN deterioro cognitivo ni resaca. Legal en España.
      </InfoBoxX>

      <SectionTitleX c={c}>POR QUÉ KAVA</SectionTitleX>
      <InfoBoxX c={c}>
        ✨ Reemplazo natural de alcohol/benzos para socializar, dormir, calmar ansiedad<br/>
        ✨ NO adictivo (consumo diario tradicional sin dependencia)<br/>
        ✨ Activa GABA sin afectar memoria ni coordinación severamente<br/>
        ⚠️ Sabor terroso/amargo — aprendido (gusta o no)<br/>
        ⚠️ Posible toxicidad hepática con uso EXCESIVO o productos malos (extractos con solventes)
      </InfoBoxX>

      <SectionTitleX c={c}>CULTIVO — INTERIOR OBLIGATORIO EN ESPAÑA</SectionTitleX>
      <WarningBoxX c={c}>
        🌴 Kava es TROPICAL. NO sobrevive heladas, NO sobrevive bajo 10°C, necesita humedad alta + sol filtrado. En España: <strong>SOLO INTERIOR o invernadero climatizado</strong>. Exterior solo en Canarias (clima subtropical) o jardines muy abrigados de Andalucía/Levante.
      </WarningBoxX>

      <SectionTitleX c={c}>CONDICIONES IDEALES</SectionTitleX>
      <div style={{ display: "grid", gridTemplateColumns: "1fr 1fr", gap: "10px", marginBottom: "20px" }}>
        <StatBoxX c={c} label="Temperatura" value="22-30°C constante" />
        <StatBoxX c={c} label="Humedad" value="70-90% (alta)" />
        <StatBoxX c={c} label="Luz" value="Indirecta brillante" />
        <StatBoxX c={c} label="Sustrato" value="Drenado, ácido (pH 5.5-6.5)" />
      </div>

      <SectionTitleX c={c}>COMPRA</SectionTitleX>
      <InfoBoxX c={c}>
        🌱 <strong>Esquejes (preferible):</strong> 30-60€ por esqueje enraizado. Vendedores etnobotánicos UE. Variedades para empezar: 'Borogu' o 'Mahakea' (rendimiento alto, kavalactonas balanceadas).<br/>
        🌰 <strong>Semillas:</strong> raras y germinación errática (10-20%). NO recomendadas para empezar.<br/>
        💵 <strong>Atajo:</strong> raíz seca molida ya lista, 20-50€ por 250g. Suficiente para 10-20 sesiones. Hawai'i Kava o vendedores europeos certificados (busca "kava noble").
      </InfoBoxX>

      <SectionTitleX c={c}>PASO A PASO — DESDE ESQUEJE</SectionTitleX>
      <StepX c={c} num={1} text="Recibes esqueje de 20-40cm con raíz iniciada. Hidratar 24h en agua templada." />
      <StepX c={c} num={2} text="Maceta GRANDE (40-60L), sustrato: 50% turba + 30% perlita + 20% mantillo orgánico. Drenaje crítico." />
      <StepX c={c} num={3} text="Plantar SIN enterrar el cuello (donde tallo y raíz se unen). Riego abundante." />
      <StepX c={c} num={4} text="Coloca en zona luminosa pero SIN sol directo intenso. Junto a ventana sur con cortina translúcida = ideal." why="Sol directo quema las hojas grandes de Kava. Necesita luz brillante pero filtrada (como el sotobosque tropical donde crece)." />
      <StepX c={c} num={5} text="Humedad: humidificador 24/7 o bandeja con guijarros + agua bajo la maceta. Pulverizar hojas 2x/día." warning />
      <StepX c={c} num={6} text="Temperatura: 22-28°C constante. NUNCA bajar de 15°C. En invierno: cerca de calefactor o usar manta térmica para reptiles bajo la maceta." />
      <StepX c={c} num={7} text="Riego: mantener sustrato HÚMEDO sin encharcar. Verificar diariamente con dedo en tierra. Kava bebe mucho." />
      <StepX c={c} num={8} text="Fertilizar: NPK equilibrado (10-10-10) cada 3-4 semanas en primavera-verano. NADA en invierno." />

      <SectionTitleX c={c}>CUIDADOS A LARGO PLAZO</SectionTitleX>
      <StepX c={c} num={1} text="Mes 1-6: aclimatación, crecimiento lento. La planta puede perder hojas iniciales — normal." />
      <StepX c={c} num={2} text="Año 1: 30-60cm de altura. Hojas grandes en forma de corazón. Aún no cosechable." />
      <StepX c={c} num={3} text="Año 2: 80-120cm. Hojas más densas. Empieza a desarrollar raíces gruesas." />
      <StepX c={c} num={4} text="Año 3-4: 1.5-2.5m. Listo para primera cosecha de raíces." />
      <StepX c={c} num={5} text="Trasplante a maceta más grande cada 2 años (50→80→120L). Sin más espacio = crecimiento parado." />

      <SectionTitleX c={c}>RECOLECCIÓN</SectionTitleX>
      <StepX c={c} num={1} text="Espera mínimo 3 años desde plantar el esqueje. La concentración de kavalactonas se desarrolla con la edad." />
      <StepX c={c} num={2} text="Sacar la planta entera de la maceta. Sacudir tierra. Ver el rizoma (raíz gruesa horizontal) y las raíces finas." />
      <StepX c={c} num={3} text="Cortar las raíces más gruesas (1cm+ de grosor) — son las más ricas. Conservar el rizoma central + algunos esquejes para replantar." why="Las raíces finas tienen menos kavalactonas. La proporción óptima es: 30% rizoma + 70% raíces grandes." />
      <StepX c={c} num={4} text="Lavar bien con agua fría. Cortar en trozos pequeños (2-3cm)." />
      <StepX c={c} num={5} text="Secar al aire (sombra ventilada) 2-4 semanas hasta crujiente." />
      <StepX c={c} num={6} text="Replantar: trozos de tallo + algunos rizomas pequeños = nuevas plantas. Una planta cosechada = 5-10 esquejes nuevos." />

      <SectionTitleX c={c}>RENDIMIENTO</SectionTitleX>
      <InfoBoxX c={c}>
        Una planta de 4 años: 300-800g de raíz seca total. Suficiente para 30-80 sesiones de Kava (10g por sesión típica). Si replantas los esquejes = producción regular cada 3-4 años.
      </InfoBoxX>

      <SectionTitleX c={c}>PREPARACIÓN TRADICIONAL</SectionTitleX>
      <StepX c={c} num={1} text="Pesa 8-15g de raíz seca molida (consulta proveedor para potencia exacta — varía mucho)." />
      <StepX c={c} num={2} text="Pon el polvo en una bolsa de filtro de tela ('kava strainer bag', 5-10€ online) o en una media de nylon limpia." />
      <StepX c={c} num={3} text="Sumerge la bolsa en 250-400ml de agua FRÍA o tibia (NUNCA hirviendo — destruye kavalactonas)." warning />
      <StepX c={c} num={4} text="Masajear/escurrir la bolsa dentro del agua durante 10-15 minutos. El líquido se vuelve marrón-lechoso." why="Las kavalactonas son liposolubles, no hidrosolubles. El masajeo libera los aceites que se emulsionan en el agua." />
      <StepX c={c} num={5} text="Sacar la bolsa, escurrir bien. El líquido = bebida lista. Los restos del polvo se desechan o se reusan para una segunda extracción más débil." />
      <StepX c={c} num={6} text="Beber RÁPIDO (de un trago si puedes). Sabor terroso/amargo intenso. Tradicional Vanuatu: tres conchas seguidas y ya." />

      <SectionTitleX c={c}>EFECTOS</SectionTitleX>
      <InfoBoxX c={c}>
        Comienzo: 15-30 min después de beber. Pico: 1-2h. Total: 4-6h.<br/>
        Sensaciones: relajación muscular profunda (sientes el cuerpo "pesado"), ansiolítico fuerte (calma social), ligera euforia, posible adormecimiento de boca y lengua (NORMAL — efecto local de las kavalactonas en mucosa). NO hay deterioro cognitivo significativo — puedes pensar y hablar normal, solo con menos ansiedad. NO resaca al día siguiente.
      </InfoBoxX>

      <SectionTitleX c={c}>CONSERVACIÓN</SectionTitleX>
      <InfoBoxX c={c}>
        🥄 <strong>Raíz seca molida:</strong> frasco hermético oscuro, lugar fresco. Dura 2-3 años manteniendo potencia.<br/>
        🥄 <strong>Bebida preparada:</strong> CONSUMIR EN EL DÍA. Si guardas en nevera: máximo 24h. Las kavalactonas precipitan y pierde efecto.<br/>
        🥄 <strong>Pasta concentrada (tradicional):</strong> reducir el líquido a fuego muy bajo (no hervir). Pasta densa que se conserva 1-2 semanas en nevera.
      </InfoBoxX>

      <SectionTitleX c={c}>HARM REDUCTION</SectionTitleX>
      <ErrorCardX c={c}
        error="Beber a diario en grandes cantidades durante meses"
        consecuencia="Posible 'kava dermopathy' — piel seca/escamosa (reversible al parar). Algunos casos raros de toxicidad hepática reportados."
        fix="Uso ocasional (1-3 veces/semana). Descansos 1+ semana cada mes. Si notas piel seca: PARA y consulta médico."
      />
      <ErrorCardX c={c}
        error="Mezclar con alcohol u otras drogas depresoras"
        consecuencia="Sumar depresores SNC = sedación excesiva, posible vómito o pérdida de consciencia."
        fix="Kava sola. Si tomas medicación: consultar — interactúa con benzos, opiáceos, alcohol."
      />
      <ErrorCardX c={c}
        error="Comprar extractos baratos con solventes"
        consecuencia="Los casos históricos de toxicidad hepática vinculados a kava fueron extractos químicos con solventes que extraían toxinas, no kavalactonas. La raíz tradicional NO tiene este problema."
        fix="Solo raíz molida tradicional o productos certificados 'kava noble'. NO extractos baratos sin certificación."
      />
    </div>
  );
}

function KANNA() {
  const c = PLANTAS_COLORS;
  return (
    <div>
      <InfoBoxX c={c}>
        <strong>Kanna (Sceletium tortuosum)</strong> — suculenta sudafricana, usada por bosquimanos hace 400 años. Activos: <GlossaryLink term="Mesembrina">mesembrina</GlossaryLink>, mesembrenona — actúan como SSRI natural + leve euforia. Antidepresivo, ansiolítico, social. Legal en España.
      </InfoBoxX>

      <SectionTitleX c={c}>POR QUÉ KANNA</SectionTitleX>
      <InfoBoxX c={c}>
        ✨ Antidepresivo natural, eleva ánimo en 30-60 min<br/>
        ✨ Reduce ansiedad social — "lubricante social" suave<br/>
        ✨ Suculenta DURÍSIMA — sobrevive sequía, calor, abandono<br/>
        ✨ Ideal para mediterráneo: exterior posible TODO EL AÑO<br/>
        ⚠️ NO mezclar con SSRI/IMAO (síndrome serotonérgico)<br/>
        ⚠️ Tolerancia rápida con uso diario
      </InfoBoxX>

      <SectionTitleX c={c}>CULTIVO — DOS OPCIONES VIABLES EN ESPAÑA</SectionTitleX>
      <div style={{ display: "grid", gap: "10px", marginBottom: "20px" }}>
        {[
          { tipo: "🌞 Exterior mediterráneo (Andalucía, Levante, Baleares)", det: "PERFECTO. Suculenta nativa de zonas semidesérticas — ama el calor y soporta heladas suaves. Plantar en jardín o macetas en terraza. Riego mínimo. Crece todo el año." },
          { tipo: "🪴 Interior con luz directa (resto España)", det: "Junto a ventana SUR con luz directa 4-6h/día. Maceta tipo cactus con drenaje extremo. Riego cuando esté COMPLETAMENTE seca (cada 2-3 semanas)." },
          { tipo: "🌲 Guerrilla en zona rural seca/cálida", det: "OPCIÓN VIABLE en Murcia, sur de Aragón, Almería, etc. Suculenta poco visible (parece planta común), no llama atención. Plantar entre rocas o matorral, riego inicial 1-2 meses, después AUTOSOSTENIBLE." },
          { tipo: "❄️ Norte húmedo (Galicia, Cantábrico)", det: "DIFÍCIL. Demasiado lluvia + bajas temperaturas para una suculenta semidesértica. Solo viable interior con sol directo y NUNCA exterior." },
        ].map((opt, i) => (
          <div key={i} style={{ background: c.bg2, border: `1px solid ${c.border1}`, borderRadius: "10px", padding: "12px" }}>
            <div style={{ fontSize: "13px", fontWeight: "bold", color: c.textBright, marginBottom: "4px" }}>{opt.tipo}</div>
            <div style={{ fontSize: "12px", color: c.accent3, lineHeight: "1.5" }}>{opt.det}</div>
          </div>
        ))}
      </div>

      <SectionTitleX c={c}>CONDICIONES IDEALES</SectionTitleX>
      <div style={{ display: "grid", gridTemplateColumns: "1fr 1fr", gap: "10px", marginBottom: "20px" }}>
        <StatBoxX c={c} label="Temperatura" value="15-35°C (tolerante)" />
        <StatBoxX c={c} label="Humedad" value="20-50% (baja)" />
        <StatBoxX c={c} label="Luz" value="Sol directo pleno" />
        <StatBoxX c={c} label="Sustrato" value="Cactus + arena, MUY drenado" />
      </div>

      <SectionTitleX c={c}>COMPRA</SectionTitleX>
      <InfoBoxX c={c}>
        🌱 <strong>Esquejes (preferible):</strong> 8-20€ por esqueje. Crecimiento garantizado, enraíza en 2-3 semanas. Vendedores etnobotánicos UE.<br/>
        🌰 <strong>Semillas:</strong> 5-10€ por 50 sem. Germinación 60-70% (mucho mejor que kava). Posible para empezar.<br/>
        💵 <strong>Atajo:</strong> hojas/tallos secos ya fermentados, 15-30€ por 25g. Suficiente para muchas dosis (200-300mg típico).
      </InfoBoxX>

      <SectionTitleX c={c}>PASO A PASO — DESDE ESQUEJE</SectionTitleX>
      <StepX c={c} num={1} text="Recibes esqueje de 5-15cm. Dejar callusing (cicatrizar el corte) 3-5 días en sombra antes de plantar." why="Igual que cactus: callusing previene pudrición de la base al plantar." />
      <StepX c={c} num={2} text="Maceta 5-15L (no necesita gigante), o directamente al suelo en exterior. Sustrato cactus + 30% arena gruesa." />
      <StepX c={c} num={3} text="Plantar enterrando solo 2-3cm. Apretar suavemente la tierra alrededor." />
      <StepX c={c} num={4} text="Sol directo desde el primer día (Kanna AMA el sol). Pero esquejes recién plantados: aclimatación gradual 1 semana en semi-sombra antes de sol pleno." />
      <StepX c={c} num={5} text="NO regar la primera semana. Después: riego ligero cada 7-10 días." why="Riego antes de que enraíce → pudrición. Mejor sequía que encharcamiento siempre con Kanna." warning />
      <StepX c={c} num={6} text="Mes 1-2: enraizamiento. Verás nuevos brotes apareciendo. Empieza riego regular cada 10-14 días." />
      <StepX c={c} num={7} text="Mes 3-12: crecimiento explosivo. La planta se extiende horizontalmente y forma alfombra densa." />

      <SectionTitleX c={c}>CULTIVO GUERRILLA — DETALLES</SectionTitleX>
      <StepX c={c} num={1} text="Elige zona seca y soleada: matorral, bordes de campos abandonados, entre rocas. NO zonas con riego agrícola activo." />
      <StepX c={c} num={2} text="Plantar en primavera (marzo-mayo) o otoño (septiembre-octubre). Evita verano (calor extremo durante enraizamiento)." />
      <StepX c={c} num={3} text="Visitas iniciales: 2-3 visitas en primer mes para regar (1L de agua por visita). Después AUTÓNOMA — no necesita más cuidados." why="Una vez establecida, Kanna sobrevive con el agua de lluvia natural en mediterráneo. Eso es la magia del cultivo guerrilla con suculentas." />
      <StepX c={c} num={4} text="Camuflaje: parece planta crasa común. Bajo perfil, no atrae atención. No huele, no llama la atención." />
      <StepX c={c} num={5} text="Cosechas: visitas 1-2 al año en otoño. Cosechar tallos largos, dejar la base intacta. La planta rebrota desde la base." />

      <SectionTitleX c={c}>RECOLECCIÓN</SectionTitleX>
      <StepX c={c} num={1} text="Cosecha posible a partir de 6-12 meses desde plantar. Mejor temporada: otoño (concentración máxima de mesembrina)." />
      <StepX c={c} num={2} text="Cortar tallos largos (15-30cm) con tijera limpia. Dejar al menos 50% de la planta intacta." />
      <StepX c={c} num={3} text="La planta sigue creciendo desde los nodos restantes. Cosechas regulares estimulan más crecimiento." />

      <SectionTitleX c={c}>PREPARACIÓN TRADICIONAL — FERMENTACIÓN</SectionTitleX>
      <InfoBoxX c={c}>
        Tradicional bosquimano: fermentar Kanna mejora potencia y reduce alcaloides amargos. Es el método que DA EL EFECTO completo. Sin fermentación = experiencia mucho más débil.
      </InfoBoxX>

      <StepX c={c} num={1} text="Cosechar 50-100g de hojas + tallos frescos." />
      <StepX c={c} num={2} text="Aplastar el material con mortero o piedra (machacar pero no triturar a polvo)." why="Romper las células libera los enzimas que activan la fermentación." />
      <StepX c={c} num={3} text="Meter en bolsa hermética de plástico (Ziplock) o frasco con tapa. Comprimir bien para sacar el aire." />
      <StepX c={c} num={4} text="Dejar al SOL durante 8-10 días. Cada 1-2 días: abrir, mezclar/aplastar de nuevo, cerrar." why="Calor + bacterias de la planta = fermentación que convierte mesembrina en formas más activas." />
      <StepX c={c} num={5} text="Día 8-10: el material es marrón oscuro, blando, olor característico (no podrido — fermentado). Listo." />
      <StepX c={c} num={6} text="Secar al sol 2-3 días hasta crujiente. Triturar a polvo en molinillo." />
      <StepX c={c} num={7} text="Conservar en frasco hermético oscuro. Dura 1-2 años." />

      <SectionTitleX c={c}>MÉTODO RÁPIDO (SIN FERMENTACIÓN)</SectionTitleX>
      <StepX c={c} num={1} text="Si no quieres esperar 8 días: secar las hojas/tallos al aire (sombra ventilada) 1 semana hasta crujiente." />
      <StepX c={c} num={2} text="Triturar a polvo. Listo para usar." />
      <StepX c={c} num={3} text="Efecto MÁS DÉBIL que la fermentada (~50%). Para uso diario suave puede bastar." />

      <SectionTitleX c={c}>CONSUMO</SectionTitleX>
      <InfoBoxX c={c}>
        💊 <strong>Sublingual:</strong> 100-300mg de polvo bajo la lengua. Mantener 5-10 min, escupir o tragar. Inicio: 5-15 min. La forma más rápida y eficiente.<br/>
        💨 <strong>Snortado:</strong> 50-150mg. Inicio inmediato. Picazón nasal intensa. Para situaciones donde necesitas efecto YA.<br/>
        🍵 <strong>Té:</strong> 200-500mg en infusión 5-10 min. Más suave, más largo (hasta 4h). Combinar con manzanilla para potenciar relajación.<br/>
        🚬 <strong>Fumado:</strong> 100-300mg en pipa. Efecto suave, breve (1-2h). Sabor herbal.<br/>
        💊 <strong>Cápsulas:</strong> rellenar cápsulas vacías con 200-400mg. Conveniente, sin sabor.
      </InfoBoxX>

      <SectionTitleX c={c}>EFECTOS</SectionTitleX>
      <InfoBoxX c={c}>
        Comienzo: 5-15 min (sublingual/snort) o 30-60 min (té/cápsulas). Pico: 1-2h. Total: 2-4h.<br/>
        Sensaciones: elevación de ánimo notable, ansiolítico fuerte (calma social), ligera euforia, motivación, claridad mental. Como un café + un ansiolítico suave, sin la "subida" cafeínica. NO alucinógeno. NO deterioro cognitivo.
      </InfoBoxX>

      <SectionTitleX c={c}>CONSERVACIÓN</SectionTitleX>
      <InfoBoxX c={c}>
        🥄 <strong>Polvo seco:</strong> frasco hermético oscuro. Dura 1-2 años. Mejor con sílica gel para mantener seco.<br/>
        🥄 <strong>Tintura alcohólica:</strong> 50g de polvo en 250ml vodka. Macerar 2 semanas. Filtrar. Dura años. Dosis: 1-3ml sublingual.<br/>
        🌱 <strong>Plantas vivas:</strong> en exterior mediterráneo viven INDEFINIDAMENTE. Una planta = recurso para décadas.
      </InfoBoxX>

      <SectionTitleX c={c}>HARM REDUCTION</SectionTitleX>
      <ErrorCardX c={c}
        error="Combinar con SSRI/IMAO/antidepresivos"
        consecuencia="Riesgo SÍNDROME SEROTONÉRGICO. Kanna actúa como SSRI natural — sumar = exceso de serotonina."
        fix="No tomar si estás con medicación serotonérgica. Off-meds 4-6 semanas antes de probar Kanna."
      />
      <ErrorCardX c={c}
        error="Uso diario durante meses"
        consecuencia="Tolerancia rápida — el efecto se va perdiendo. También posible bajada de ánimo al parar."
        fix="Máximo 2-3 veces por semana. Descansos 1+ semana cada mes."
      />
      <ErrorCardX c={c}
        error="Mezclar con MDMA u otros estimulantes serotonérgicos"
        consecuencia="Síndrome serotonérgico. Riesgo grave."
        fix="Kanna sola. Esperar 24h+ entre Kanna y otras sustancias serotonérgicas."
      />
    </div>
  );
}

function SINICUICHI() {
  const c = PLANTAS_COLORS;
  return (
    <div>
      <InfoBoxX c={c}>
        <strong>Sinicuichi (Heimia salicifolia)</strong> — arbusto mexicano sagrado, único conocido en producir <strong>alucinaciones AUDITIVAS</strong> (sonidos amarillos, voces lejanas suaves). Activos: alcaloides quinolizidínicos (criogenina, lyofolina). Suave, muy peculiar.
      </InfoBoxX>

      <SectionTitleX c={c}>POR QUÉ SINICUICHI</SectionTitleX>
      <InfoBoxX c={c}>
        ✨ Único alucinógeno principalmente AUDITIVO (no visual)<br/>
        ✨ Reportes: oír música distante, voces inaudibles, sonidos como "tintineos amarillos"<br/>
        ✨ Sutil — no hay distorsión visual significativa, solo audición y memoria<br/>
        ✨ Reduce frecuencia cardíaca y bajada de temperatura corporal (cuidado)<br/>
        ⚠️ Tradicional fermentación previa (similar a Kanna)
      </InfoBoxX>

      <SectionTitleX c={c}>CONDICIONES IDEALES</SectionTitleX>
      <div style={{ display: "grid", gridTemplateColumns: "1fr 1fr", gap: "10px", marginBottom: "16px" }}>
        <StatBoxX c={c} label="Temperatura" value="15-30°C" />
        <StatBoxX c={c} label="Humedad" value="40-70%" />
        <StatBoxX c={c} label="Luz" value="Sol pleno o filtrado" />
        <StatBoxX c={c} label="Sustrato" value="Drenado, ligeramente ácido" />
      </div>

      <SectionTitleX c={c}>PRECIOS ORIENTATIVOS</SectionTitleX>
      <InfoBoxX c={c}>
        🌰 Semillas: <strong>3-8€/sobre</strong> · 🌱 Esqueje: <strong>10-25€</strong> · 🍃 Hojas secas: <strong>10-25€/25g</strong>. Inversión total inicio: ~25-50€.
      </InfoBoxX>

      <SectionTitleX c={c}>CULTIVO</SectionTitleX>
      <StepX c={c} num={1} text="Semillas o esquejes. Las semillas requieren estratificación fría (1 mes en nevera) antes de germinar a 22-25°C." />
      <StepX c={c} num={2} text="Sustrato: tierra de jardín + perlita (3:1). Maceta drenada o exterior directamente." />
      <StepX c={c} num={3} text="Sol pleno o sombra parcial. Adapta bien a ambos." />
      <StepX c={c} num={4} text="Riego moderado: cuando el sustrato esté seco a 2cm de profundidad. Tolerante a sequía." />
      <StepX c={c} num={5} text="Temperatura: tolerante. Sobrevive heladas suaves (-3°C). En zonas cálidas exterior todo el año." />
      <StepX c={c} num={6} text="Crecimiento: arbusto de 1-3m. Hojas alargadas finas. Flores amarillas en verano." />

      <SectionTitleX c={c}>COSECHA</SectionTitleX>
      <StepX c={c} num={1} text="Cosecha hojas en verano cuando esté en plena floración (concentración máxima de alcaloides)." />
      <StepX c={c} num={2} text="Cortar ramitas con hojas + flores. La planta sigue produciendo." />
      <StepX c={c} num={3} text="Una planta madura (2 años) da 50-150g de hojas frescas por temporada." />

      <SectionTitleX c={c}>PREPARACIÓN TRADICIONAL — FERMENTACIÓN</SectionTitleX>
      <InfoBoxX c={c}>
        Tradicional Mexicano: hojas frescas se machacan + se ponen en agua al sol durante 24-72h hasta que el agua se vuelve amarilla (de ahí "sonidos amarillos"). El agua fermentada es lo que se bebe.
      </InfoBoxX>

      <StepX c={c} num={1} text="Cosechar 50-100g de hojas frescas." />
      <StepX c={c} num={2} text="Machacar las hojas con mortero. Poner en frasco vidrio." />
      <StepX c={c} num={3} text="Cubrir con 500ml de agua templada. Tapar parcialmente (no hermético — para fermentar)." />
      <StepX c={c} num={4} text="Dejar al SOL durante 1-3 días. El agua se vuelve amarillenta." why="La fermentación + sol activa los alcaloides. Sin esto el efecto es muy débil." />
      <StepX c={c} num={5} text="Colar el líquido amarillo. Beber 100-250ml." />

      <SectionTitleX c={c}>MÉTODO RÁPIDO (SIN FERMENTACIÓN)</SectionTitleX>
      <InfoBoxX c={c}>
        🍵 <strong>Té:</strong> 5-10g hojas secas en infusión 15 min. Efecto más débil pero más rápido de preparar.
      </InfoBoxX>

      <SectionTitleX c={c}>EFECTOS</SectionTitleX>
      <InfoBoxX c={c}>
        Comienzo: 30-60 min. Duración: 2-4h.<br/>
        Sensaciones reportadas: estado meditativo, somnolencia, distorsiones AUDITIVAS sutiles (sonidos lejanos, "amarillos"), distorsión del tiempo, posible bajada ligera de temperatura corporal y ritmo cardíaco. Sin efectos visuales notables. Único entre psicodélicos.
      </InfoBoxX>

      <SectionTitleX c={c}>CONSERVACIÓN</SectionTitleX>
      <InfoBoxX c={c}>
        🥄 <strong>Hojas secas:</strong> frasco hermético. Dura 1-2 años.<br/>
        🍶 <strong>Líquido fermentado:</strong> consumir en el día, máximo 24h en nevera.<br/>
        🌱 <strong>Plantas vivas:</strong> rebrota cada primavera en climas templados.
      </InfoBoxX>

      <SectionTitleX c={c}>HARM REDUCTION</SectionTitleX>
      <ErrorCardX c={c}
        error="Dosis altas con cardiopatía"
        consecuencia="Sinicuichi baja ritmo cardíaco y temperatura. Con problemas cardiacos = riesgo."
        fix="Si tienes problemas cardiovasculares: NO tomar. Sano: dosis moderada. Empieza siempre bajo."
      />
      <ErrorCardX c={c}
        error="Mezclar con depresores SNC"
        consecuencia="Sinicuichi ya deprime ligeramente sistema nervioso. Sumar alcohol/benzos = sedación excesiva."
        fix="Sobrio. Solo Sinicuichi."
      />
    </div>
  );
}

function MUCUNA() {
  const c = PLANTAS_COLORS;
  return (
    <div>
      <InfoBoxX c={c}>
        <strong>Mucuna pruriens</strong> — leguminosa trepadora tropical. Semillas con 4-7% de <strong><GlossaryLink term="L-DOPA">L-DOPA</GlossaryLink> natural</strong> (precursor de dopamina). Eufórica sutil, mejora ánimo, libido, recuperación muscular. Suplemento popular en biohacking.
      </InfoBoxX>

      <SectionTitleX c={c}>POR QUÉ MUCUNA</SectionTitleX>
      <InfoBoxX c={c}>
        ✨ Mejora estado de ánimo, motivación, energía mental<br/>
        ✨ Aumenta libido y función sexual<br/>
        ✨ Estudiada para Parkinson (precursor natural de dopamina)<br/>
        ✨ NO es alucinógeno — solo eleva ánimo y motivación<br/>
        ⚠️ Pelusa de las vainas IRRITA piel violentamente (de ahí "pruriens" = picar)<br/>
        ⚠️ NO mezclar con MAOI o antidepresivos
      </InfoBoxX>

      <SectionTitleX c={c}>CONDICIONES IDEALES</SectionTitleX>
      <div style={{ display: "grid", gridTemplateColumns: "1fr 1fr", gap: "10px", marginBottom: "16px" }}>
        <StatBoxX c={c} label="Temperatura" value="22-32°C tropical" />
        <StatBoxX c={c} label="Humedad" value="60-80%" />
        <StatBoxX c={c} label="Luz" value="Sol pleno + tutor 2-3m" />
        <StatBoxX c={c} label="Sustrato" value="Rico en materia orgánica" />
      </div>

      <SectionTitleX c={c}>PRECIOS ORIENTATIVOS</SectionTitleX>
      <InfoBoxX c={c}>
        🌰 Semillas: <strong>3-10€/sobre</strong> (germinación 70-90%) · 💊 Polvo Mucuna ya extraído: <strong>15-30€/200g</strong> (atajo). Inversión total cultivo: ~30-60€ con tutor + maceta grande.
      </InfoBoxX>

      <SectionTitleX c={c}>CULTIVO</SectionTitleX>
      <StepX c={c} num={1} text="Hidratar semillas en agua templada 24h. Plantar a 2cm profundidad en sustrato rico." />
      <StepX c={c} num={2} text="Germina en 5-14 días a 25-28°C. Plántula crece rápido si tiene calor." />
      <StepX c={c} num={3} text="Trasplante a maceta GRANDE (40L+) o jardín. Es trepadora vigorosa — necesita tutor de 2-3m mínimo." why="Mucuna trepa y se enrolla en cualquier soporte. Sin tutor crece como mata baja con poco rendimiento." />
      <StepX c={c} num={4} text="Sol pleno. En España: exterior mediterráneo de mayo a octubre. Resto del año interior con luz directa." />
      <StepX c={c} num={5} text="Riego abundante en verano. Reducir en invierno." />
      <StepX c={c} num={6} text="Mes 4-6: aparecen flores (racimos colgantes púrpura). Después vainas con pelusa irritante." warning />

      <SectionTitleX c={c}>COSECHA</SectionTitleX>
      <StepX c={c} num={1} text="Cosechar vainas cuando están secas (marrón oscuro, secas al tacto). Mes 6-8 desde plantar." />
      <StepX c={c} num={2} text="USAR GUANTES + MASCARILLA + GAFAS. La pelusa de las vainas causa picor brutal en piel y mucosas." warning />
      <StepX c={c} num={3} text="Recoger vainas. Quemarlas brevemente con mechero (la pelusa se va al instante) O congelar 24h y aplastar (pelusa se desactiva con frío)." />
      <StepX c={c} num={4} text="Abrir vainas con cuchillo. Sacar las semillas (3-7 por vaina, color marrón-negro)." />
      <StepX c={c} num={5} text="Una planta produce 50-200g de semillas secas en una temporada." />

      <SectionTitleX c={c}>PREPARACIÓN</SectionTitleX>
      <StepX c={c} num={1} text="Tostar semillas en sartén seca 5-10 min hasta que crujen (mejora sabor + reduce antinutrientes)." />
      <StepX c={c} num={2} text="Triturar a polvo en molinillo de café/especias." />
      <StepX c={c} num={3} text="Conservar en frasco hermético oscuro. Dura 1-2 años manteniendo potencia." />

      <SectionTitleX c={c}>CONSUMO</SectionTitleX>
      <InfoBoxX c={c}>
        💊 <strong>Cápsulas:</strong> 200-500mg de polvo. Vacías cápsulas tamaño 00 rellenas. 1-2 cápsulas/día.<br/>
        🥛 <strong>Smoothie:</strong> 2-5g de polvo en batido (sabor a café tostado).<br/>
        🍵 <strong>Té:</strong> 3-5g en infusión 15 min.<br/>
        ⏰ Mejor por la mañana — eleva motivación y energía.
      </InfoBoxX>

      <SectionTitleX c={c}>EFECTOS</SectionTitleX>
      <InfoBoxX c={c}>
        Comienzo: 30-60 min. Duración: 4-6h.<br/>
        Sensaciones: motivación, claridad mental, ligero aumento de energía, mejor estado de ánimo, aumento libido. NO euforia intensa. NO alucinaciones. Sutil pero notable. Comparable a una taza de café + ansiolítico ligero.
      </InfoBoxX>

      <SectionTitleX c={c}>CONSERVACIÓN</SectionTitleX>
      <InfoBoxX c={c}>
        🥄 <strong>Polvo seco:</strong> frasco hermético oscuro + sílica gel. Dura 1-2 años.<br/>
        🌰 <strong>Semillas enteras:</strong> 3-5 años en lugar fresco y seco.<br/>
        🌱 <strong>Plantas:</strong> en clima cálido viven varios años. En frío anuales.
      </InfoBoxX>

      <SectionTitleX c={c}>HARM REDUCTION</SectionTitleX>
      <ErrorCardX c={c}
        error="Combinar con MAOI / SSRI / Levodopa"
        consecuencia="Mucuna eleva dopamina. Combinar con medicación dopaminérgica/serotonérgica = riesgo síndrome serotonérgico o crisis hipertensiva."
        fix="Off-meds 4-6 semanas si tomas SSRI/MAOI antes de probar Mucuna."
      />
      <ErrorCardX c={c}
        error="Uso diario continuo durante meses"
        consecuencia="Posible disminución de dopamina endógena (downregulation). Tolerancia."
        fix="Ciclos: 5 días tomando, 2 días sin. O 3-4 días/semana. Descansos de 1+ semana cada mes."
      />
      <ErrorCardX c={c}
        error="No usar protección al cosechar"
        consecuencia="La pelusa de las vainas causa picor extremo, ardor en ojos, problemas respiratorios."
        fix="SIEMPRE: gafas + mascarilla FFP2 + guantes + manga larga. Quemar pelusa antes de manipular."
      />
    </div>
  );
}

function LUPULO() {
  const c = PLANTAS_COLORS;
  return (
    <div>
      <InfoBoxX c={c}>
        <strong>Lúpulo (Humulus lupulus)</strong> — trepadora vivaz. Conocida por la cerveza, pero la flor (cono) es <strong>sedante natural y ansiolítico</strong>. Activos: humulonas, lupulonas + 8-prenilnaringenina (fitoestrogénico). Tradicional para insomnio.
      </InfoBoxX>

      <SectionTitleX c={c}>POR QUÉ LÚPULO</SectionTitleX>
      <InfoBoxX c={c}>
        ✨ Sedante suave — ayuda a dormir<br/>
        ✨ Ansiolítico — reduce ansiedad social y general<br/>
        ✨ Fitoestrogénico (mujeres en menopausia, equilibrio hormonal)<br/>
        ✨ TREPADORA fácil — cubre paredes/pérgolas, decorativa<br/>
        ✨ Misma planta que cerveza (ver guía Fermentar > Cerveza)<br/>
        ⚠️ Efecto fitoestrogénico — hombres con uso muy intenso pueden ver reducción libido (raro)
      </InfoBoxX>

      <SectionTitleX c={c}>CONDICIONES IDEALES</SectionTitleX>
      <div style={{ display: "grid", gridTemplateColumns: "1fr 1fr", gap: "10px", marginBottom: "16px" }}>
        <StatBoxX c={c} label="Temperatura" value="-15 a +35°C (resistente)" />
        <StatBoxX c={c} label="Humedad" value="40-70% (tolerante)" />
        <StatBoxX c={c} label="Luz" value="Sol pleno 6h+" />
        <StatBoxX c={c} label="Sustrato" value="Cualquier suelo profundo" />
      </div>

      <SectionTitleX c={c}>PRECIOS ORIENTATIVOS</SectionTitleX>
      <InfoBoxX c={c}>
        🌱 Rizoma: <strong>5-15€</strong> · 🌾 Conos secos (herboristería): <strong>3-10€/50g</strong> · 🌿 Variedades: Cascade, Saaz, Hallertau, Magnum (todas válidas, las cerveceras suelen tener más amargor). Inversión total cultivo: ~30€ con tutor + maceta.
      </InfoBoxX>

      <SectionTitleX c={c}>CULTIVO — TREPADORA VIGOROSA</SectionTitleX>
      <StepX c={c} num={1} text="Plantar rizomas en primavera (marzo-abril). Enterrar 5cm en suelo profundo y suelto." why="Lúpulo desarrolla raíces profundas. Suelo compactado limita crecimiento." />
      <StepX c={c} num={2} text="Tutor obligatorio: alambre, cuerda, pérgola — 3-5m de altura. Lúpulo trepa rápido (10cm/día en pleno crecimiento)." />
      <StepX c={c} num={3} text="Sol pleno. Mínimo 6h directas/día. Sin sol = poca producción de conos." />
      <StepX c={c} num={4} text="Riego abundante en primavera-verano. Tolera sequía pero la producción baja." />
      <StepX c={c} num={5} text="Año 1: crecimiento moderado. Quizás algunos conos al final del verano." />
      <StepX c={c} num={6} text="Año 2-3+: planta madura. Crecimiento explosivo cada primavera. Cosechas grandes desde año 2." />
      <StepX c={c} num={7} text="Vivaz: la parte aérea muere en invierno, brota de nuevo cada primavera durante 20-30 años." />

      <SectionTitleX c={c}>COSECHA</SectionTitleX>
      <StepX c={c} num={1} text="Conos listos en agosto-septiembre. Maduros: papel-textura, color verde claro a amarillento, aroma a lúpulo intenso al apretar." />
      <StepX c={c} num={2} text="Cosechar manualmente conos individuales. La planta sigue produciendo más." />
      <StepX c={c} num={3} text="Una planta madura: 0.5-2kg de conos secos por temporada." />

      <SectionTitleX c={c}>SECADO</SectionTitleX>
      <StepX c={c} num={1} text="Extender conos en bandeja con rejilla. Sombra ventilada. NO sol directo (degrada aceites)." />
      <StepX c={c} num={2} text="Secar 1-3 semanas hasta que crujan al apretar." />
      <StepX c={c} num={3} text="Conservar en bolsas vacío en congelador (mantiene aroma + alfa-ácidos para cerveza). O frasco hermético oscuro a temperatura ambiente." />

      <SectionTitleX c={c}>PREPARACIÓN PARA USO SEDANTE</SectionTitleX>
      <InfoBoxX c={c}>
        🍵 <strong>Infusión:</strong> 1-2g de conos secos en agua hirviendo, reposo 10 min. Sabor amargo. Mejor con miel + manzanilla. 1 taza 30 min antes de dormir.<br/>
        💊 <strong>Cápsulas:</strong> 200-400mg de polvo de lúpulo. 1-2 cápsulas antes de dormir.<br/>
        🛏️ <strong>Almohada de lúpulo:</strong> rellenar bolsita pequeña con 50g de conos secos. Aroma sedante durante toda la noche. Tradicional anglosajón.<br/>
        🍷 <strong>Tintura:</strong> 50g de conos en 250ml vodka, 4 semanas. Filtrar. Dosis: 1-3ml sublingual antes de dormir.<br/>
        🍺 <strong>Cerveza:</strong> ya cubierto en guía Fermentar.
      </InfoBoxX>

      <SectionTitleX c={c}>EFECTOS</SectionTitleX>
      <InfoBoxX c={c}>
        Comienzo: 30-60 min. Duración: 3-6h.<br/>
        Sensaciones: relajación corporal, somnolencia gradual, reducción de ansiedad, calma mental. Sin "viaje" — solo sedante natural. Comparable a una valeriana suave o un té de manzanilla potenciado.
      </InfoBoxX>

      <SectionTitleX c={c}>CONSERVACIÓN</SectionTitleX>
      <InfoBoxX c={c}>
        🥄 <strong>Conos secos:</strong> bolsa al vacío en congelador = 2-3 años manteniendo potencia. Frasco hermético = 6-12 meses.<br/>
        🍶 <strong>Tintura:</strong> dura años en frasco oscuro.<br/>
        🌱 <strong>Plantas vivas:</strong> 20-30 años productivas. Una vez plantadas, recurso para décadas.
      </InfoBoxX>

      <SectionTitleX c={c}>HARM REDUCTION</SectionTitleX>
      <ErrorCardX c={c}
        error="Mezclar con alcohol/benzos"
        consecuencia="Sumar depresores SNC = sedación excesiva."
        fix="No mezclar para uso terapéutico. La cerveza con lúpulo ya combina ambos en dosis suaves — moderación."
      />
      <ErrorCardX c={c}
        error="Hombres con uso muy intenso (>10g/día durante meses)"
        consecuencia="El 8-prenilnaringenina del lúpulo es uno de los fitoestrógenos más potentes conocidos. Uso extremo puede afectar libido masculina."
        fix="Uso normal (1-3g/día puntual) sin problema. Para uso diario continuo: ciclar (5 días sí, 2 no). Mujeres: efecto fitoestrogénico puede ser beneficioso (menopausia)."
      />
      <ErrorCardX c={c}
        error="Embarazo / lactancia"
        consecuencia="Efectos hormonales sin estudiar. Riesgo desconocido."
        fix="Evitar uso terapéutico. La cerveza ocasional es OK pero alcohol embarazo NO."
      />
    </div>
  );
}

function FAQ_PLANTAS() {
  const c = PLANTAS_COLORS;
  const [query, setQuery] = React.useState("");
  const faqs = [
    { q: "¿Cuál es la más segura para empezar?", a: "Damiana. Efecto suave, sabor agradable, fácil cultivo, sin riesgos especiales. Después: Wild lettuce o Calea." },
    { q: "¿Cuál es la más intensa?", a: "Salvia divinorum, sin duda. Es la más potente psicoactivamente de toda la lista — pero también la más exigente en cultivo y la más arriesgada en uso (siempre con sitter)." },
    { q: "¿Puedo mezclar plantas?", a: "Algunas combinaciones son tradicionales: Damiana + Blue Lotus en infusión = sedante + eufórico. Wild lettuce + manzanilla = súper sedante para insomnio. NO mezclar Salvia con nada — su efecto disociativo es ya extremo." },
    { q: "¿Son adictivas?", a: "Ninguna de estas 5 produce dependencia física. Salvia incluso tiene 'sigma-mediated' anti-recompensa — la mayoría de gente NO repite a menudo. Damiana, Calea y Wild lettuce son no-adictivas como manzanilla." },
    { q: "¿Cuándo es mejor evitar?", a: "Embarazo y lactancia: TODAS contraindicadas. Medicación: consultar con médico — algunas pueden interactuar (especialmente Wild lettuce con sedantes y Damiana con antidepresivos). Conducir: nunca tras consumir cualquiera de estas." },
    { q: "¿Cuánto duran los efectos?", a: "Salvia: 5-15 min (intenso). Damiana: 2-4h. Blue Lotus: 2-4h. Wild lettuce: 3-6h. Calea: solo durante el sueño (8h aprox), efecto hipnagógico." },
    { q: "¿Dónde compro semillas/plantas en España?", a: "Online: vendedores especializados en etnobotánica (busca 'semillas etnobotánica España'). Damiana también en herboristerías como hojas secas. Salvia esquejes solo online. Blue Lotus rizomas en tiendas de plantas acuáticas." },
    { q: "¿Estas plantas son legales seguro?", a: "Sí, las 8 son legales en España (y en EU general): cultivo + posesión + uso personal. Calea está prohibida en Polonia (excepción rara). Salvia ha sido prohibida en algunos países (USA, Australia, varios EU) pero NO en España. Verifica si viajas." },
    { q: "¿Cuál es mejor para insomnio?", a: "Wild lettuce + manzanilla = combinación clásica. Lúpulo (almohada o té) también muy bueno. Calea para sueños lúcidos pero NO ayuda a dormir." },
    { q: "¿Cuál sirve para ansiedad social?", a: "Damiana (ligera euforia + relajación, sabor agradable) o Kava (más fuerte, sin embriagar). Kanna también ayuda pero ojo con interacciones SSRI." },
    { q: "¿Cuál es estimulante natural?", a: "Mucuna pruriens (motivación + energía mental sin agitación cafeínica). Sinicuichi también pero efecto más auditivo, no estimulante." },
    { q: "¿Combinar con cafeína?", a: "Mucuna + cafeína: bien (ambos dopaminérgicos suaves). Kava + cafeína: contradicción, pierde efecto. Kanna + cafeína: posible — pero cuidado si tomas SSRI." },
    { q: "¿Cuál tiene efecto más rápido?", a: "Salvia fumada: 30 segundos. Kanna sublingual: 5-15 min. Wild lettuce/Damiana/Calea: 30-60 min infusión. Blue Lotus: 30-60 min. Kava: 15-30 min." },
    { q: "¿Cómo guardo plantas frescas tras cosecha?", a: "Hojas: secar al aire en sombra 5-10 días hasta crujientes, frasco hermético oscuro. Flores Blue Lotus: enteras, frasco oscuro. Raíz Kava: trozos secos al aire 2-4 sem. Tubérculo Wild Lettuce látex: extracto secado oscuro. Plantas vivas: en clima óptimo viven indefinidamente." },
    { q: "¿Cuál ayuda a meditar?", a: "Sinicuichi (auditivo, sonidos suaves), Blue Lotus (sedante onírico), Damiana (relajación + claridad). NO usar Salvia (demasiado intensa para meditación tradicional)." },
    { q: "¿Cuál es la más legal sin gris alguno?", a: "Damiana, Blue Lotus, Wild Lettuce, Calea, Lúpulo, Mucuna — TODAS 100% legales sin ambigüedad. Sinicuichi: legal cultivar, gris jurídico mínimo el consumo. Kava/Kanna: 100% legal. Salvia: legal España pero ilegal varios países UE — verificar si viajas." },
    { q: "¿Tincturas vs infusión: cuál es mejor?", a: "Infusión: más rápida (5-10 min), efectos más suaves, dura horas. Tintura alcohólica: maceración 4-6 sem, dura años, más concentrada, dosis 1-3ml sublingual = absorción rápida. Para uso ocasional: infusión. Para uso regular: tintura más práctica." },
    { q: "¿Puedo regalar plantas/extractos?", a: "Sí, todas son legales. Compartir café/té de plantas medicinales = OK. Vender = requiere registro como producto herbal (Sanidad Pública). Mejor: regalar a amigos sin transacción comercial." },
  ];

  const filtered = faqs.filter(f =>
    f.q.toLowerCase().includes(query.toLowerCase()) ||
    f.a.toLowerCase().includes(query.toLowerCase())
  );

  return (
    <div>
      <InfoBoxX c={c}>
        Preguntas comunes sobre plantas psicoactivas suaves. Si quieres más info, recursos: Erowid.org (en inglés, biblioteca completa), TripSit, sitio español Ojos de Brujo.
      </InfoBoxX>

      <input type="text" placeholder="🔍 Buscar pregunta o palabra clave..." value={query} onChange={(e) => setQuery(e.target.value)} style={{
        width: "100%", padding: "10px 14px", fontSize: "13px",
        background: c.bg2, color: c.textBright, border: `1px solid ${c.border1}`,
        borderRadius: "8px", marginBottom: "12px", fontFamily: "inherit", outline: "none",
      }} />
      <div style={{ fontSize: "11px", color: c.accent2, marginBottom: "12px" }}>
        {filtered.length}/{faqs.length} preguntas {query && `· "${query}"`}
      </div>

      {filtered.map((f, i) => (
        <div key={i} style={{ background: c.bg2, border: `1px solid ${c.border1}`, borderRadius: "10px", padding: "14px", marginBottom: "10px" }}>
          <div style={{ fontSize: "13px", fontWeight: "bold", color: c.textBright, marginBottom: "6px" }}>❓ {f.q}</div>
          <div style={{ fontSize: "12px", color: c.accent3, lineHeight: "1.6" }}>{f.a}</div>
        </div>
      ))}
    </div>
  );
}
