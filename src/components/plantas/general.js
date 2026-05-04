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
        💡 <strong>Vendedores recomendados (etnobotánica EU):</strong><br/>
        🇳🇱 <strong>Avalon Magic Plants</strong> (avalon-magicplants.com) — referencia EU, stock amplio, precios medios<br/>
        🇳🇱 <strong>Tatanka</strong> (tatanka.nl) — Salvia, Kanna, Calea, Blue Lotus. Envío ES<br/>
        🇳🇱 <strong>Zamnesia</strong> (zamnesia.com) — raíces Kava, semillas, esquejes<br/>
        🇩🇪 <strong>Sirius</strong> (sirius.nl) — amplio catálogo etnobotánica<br/>
        🇬🇧 <strong>Herbalistics</strong> (herbalistics.com.au) — UK, buen stock Kava y plantas difíciles<br/>
        🇪🇸 <strong>Herboristería online España</strong> — damiana, calea seca en polvo más barata que etnobotánica<br/>
        🇺🇸 <strong>Kava Dot Com / Nakamal at Home</strong> — kava noble certificada, mejor calidad, envío a ES posible<br/><br/>
        ⚠️ <strong>Siempre:</strong> leer reviews recientes (stock y calidad cambia). Comparar precios. Pedir siempre la hoja de datos de la planta para verificar especie.
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

      <SectionTitleX c={c}>EXTRACCIÓN — HOJA POTENCIADA (ENHANCED LEAF)</SectionTitleX>
      <StepX c={c} num={1} text="Preparar extracto: pesar 5g de hojas secas. Cubrir con 50ml de acetona (o alcohol isopropílico 99%) en vaso. Agitar 5 min. Filtrar la solución con papel de filtro o trapo fino." why="La salvinorina A es soluble en acetona y alcohol de alta graduación. El agua no funciona." />
      <StepX c={c} num={2} text="Calcular cantidad de hoja base: decide potencia (5x, 10x, 20x). Ejemplo: 1g de extracto de 5g de hojas + 4g de hojas limpias = enhanced leaf 5x." />
      <StepX c={c} num={3} text="Evaporar el solvente: verter el extracto filtrado sobre la hoja base en plato. Extender bien. Dejar evaporar en lugar ventilado (exterior o ventana abierta). El solvente se evapora en 30-60 min." warning />
      <StepX c={c} num={4} text="La hoja queda ligeramente húmeda/pegajosa al principio. Dejar secar completamente (1-2h). El extracto queda depositado uniformemente sobre las hojas." />
      <StepX c={c} num={5} text="Conservar en frasco hermético opaco. Enhanced leaf 5x = mucho más potente. EMPEZAR con dosis MUY pequeñas (50-100mg). La potencia puede sorprender incluso a usuarios experimentados." warning />

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

      <SectionTitleX c={c}>EXTRACCIÓN — TINTURA ALCOHÓLICA</SectionTitleX>
      <StepX c={c} num={1} text="Método más fácil: llenar un tarro de cristal con hojas secas de damiana (50-100g). Cubrir completamente con alcohol 40-50° (vodka) o para más potencia con alcohol 96° de farmacia diluido al 70% con agua." />
      <StepX c={c} num={2} text="Cerrar hermético. Guardar en lugar oscuro y fresco 2-4 semanas. Agitar una vez al día si puedes." why="El tiempo y la agitación extraen los flavonoides, terpenos y alcaloides activos de la damiana. Más tiempo = tintura más concentrada." />
      <StepX c={c} num={3} text="Filtrar con gasa o filtro de café. Exprimir bien el material vegetal. La tintura resultante tiene color marrón-verdoso." />
      <StepX c={c} num={4} text="Dosis: 2-5ml (1 cucharadita) sublingüal o en vaso de agua. Inicio 20-30 min. Conservar en frasco oscuro — dura 2-3 años." />

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

      <SectionTitleX c={c}>EXTRACCIÓN — TINTURA Y VINO EGIPCIO</SectionTitleX>
      <StepX c={c} num={1} text="Método egipcio (vino): 20-30g de flores secas en 750ml de vino tinto seco. Cerrar con corcho/tapa. Macerar en oscuro 2 semanas agitando cada 2-3 días. Filtrar. Consumir en copas pequeñas (100-150ml)." why="El alcohol del vino extrae los alcaloides (nuciferina, aporfina) y flavonoides. El vino actúa de menstruo y es el método tradicional documentado." />
      <StepX c={c} num={2} text="Tintura concentrada: 15g flores + 150ml vodka 40°, macerar 3-4 semanas en oscuro. Filtrar. Dosis: 5-10ml en agua o sola. Efecto más consistente que el té." />
      <StepX c={c} num={3} text="Extracción de aporfinas (avanzado): el compuesto activo nuciferina es soluble en alcohol. No se han documentado extracciones caseras tipo A/B — no necesario para efectos normales. La tintura en vodka es suficiente para apreciarse el efecto." />

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

      <SectionTitleX c={c}>EXTRACCIÓN — TINTURA AMARGA</SectionTitleX>
      <StepX c={c} num={1} text="Tintura en vodka: 20g de hojas secas en 200ml de vodka 40°. Macerar 4 semanas en oscuro. Filtrar. Resultante: tintura muy amarga concentrada." />
      <StepX c={c} num={2} text="Dosis tintura: 2-4ml (½-1 cucharadita) sublingual 30 min antes de dormir. Efecto más consistente que el té y más fácil de dosificar." />
      <StepX c={c} num={3} text="Aceite esencial (avanzado): los principios activos de Calea incluyen germacranólidos (sesquiterpenos amargos) y flavonoides. El aceite esencial por destilación al vapor concentra los terpenos aromáticos pero no necesariamente los activos para el sueño. La tintura alcohólica sigue siendo la preparación más documentada." />

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

      <SectionTitleX c={c}>EXTRACCIÓN</SectionTitleX>
      <StepX c={c} num={1} text="Decocción de corteza y hojas (método tradicional): 10-20g hojas secas o corteza en 500ml agua. Hervir 15-20 min. Colar. El agua amarillenta resultante contiene los alcaloides quinolizidínicos activos." />
      <StepX c={c} num={2} text="Fermentación documentada (más potente): proceso ya descrito en la sección de preparación. El agua fermentada al sol 24-72h activa mejor los alcaloides que la decocción directa." />
      <InfoBoxX c={c}>📦 La decocción es la extracción más sencilla. La fermentación tradicional concentra y activa los alcaloides (criogenina, lyofolina). Ambos métodos producen el líquido amarillo característico.</InfoBoxX>

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

      <SectionTitleX c={c}>EXTRACCIÓN</SectionTitleX>
      <StepX c={c} num={1} text="Deshidratación y triturado: tostar semillas limpias en sartén seca 5-10 min (reduce antinutrientes + facilita triturado). Dejar enfriar completamente." />
      <StepX c={c} num={2} text="Triturar en molinillo de café hasta polvo fino. Tamizar si hay trozos grandes. El polvo resultante contiene 4-7% L-DOPA natural biodisponible." />
      <InfoBoxX c={c}>📦 Resultado: polvo marrón oscuro de aroma a café tostado. Dosis: 2-5g en batido o cápsulas. La L-DOPA es el precursor directo de dopamina — efecto más sutil y sostenido que cafeína.</InfoBoxX>

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

      <SectionTitleX c={c}>EXTRACCIÓN</SectionTitleX>
      <StepX c={c} num={1} text="Extracción de lúpulina: la resina glandular amarilla visible en el interior de los conos es la lúpulina. Para extraerla, frotar conos secos con dedos sobre plato de vidrio — los gránulos amarillos se separan fácilmente. Almacenar por separado." />
      <StepX c={c} num={2} text="Tintura alcohólica: 50g conos secos en 250ml alcohol 60-70°. Macerar en frasco oscuro 3 semanas. Filtrar. El alcohol extrae eficientemente humulonas, lupulonas y el 2-metil-3-buten-2-ol sedante." />
      <InfoBoxX c={c}>📦 La lúpulina pura es más concentrada para cápsulas o vaporización. La tintura es más práctica para uso diario. Dosis tintura: 1-3ml sublingual antes de dormir.</InfoBoxX>

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

function PASIFLORA() {
  const c = PLANTAS_COLORS;
  return (
    <div>
      <InfoBoxX c={c}>
        <strong>Pasiflora (Passiflora incarnata)</strong> — trepadora perenne nativa del sureste de EEUU. Ansiolítico clásico, sedante suave. Una de las plantas medicinales más usadas en herboristería europea. Cultivo MUY fácil en Barcelona — robusta hasta -10°C. Compuestos: harmano, harmolol, crisina (modulador GABA).
      </InfoBoxX>

      <SectionTitleX c={c}>CONDICIONES IDEALES</SectionTitleX>
      <div style={{ display: "grid", gridTemplateColumns: "1fr 1fr", gap: "10px", marginBottom: "16px" }}>
        <StatBoxX c={c} label="Temperatura" value="10-30°C (rústica)" />
        <StatBoxX c={c} label="Humedad" value="40-70%" />
        <StatBoxX c={c} label="Luz" value="Sol pleno o parcial" />
        <StatBoxX c={c} label="Sustrato" value="Drenado, fértil" />
      </div>

      <SectionTitleX c={c}>PRECIOS ORIENTATIVOS</SectionTitleX>
      <InfoBoxX c={c}>
        🌰 Semillas: <strong>2-5€/sobre</strong> · 🌱 Esqueje enraizado: <strong>8-15€</strong> · 🌿 Hojas/flores secas (herboristería): <strong>3-8€/50g</strong>. Inversión total: ~15-30€. De las MÁS BARATAS y robustas.
      </InfoBoxX>

      <SectionTitleX c={c}>CULTIVO</SectionTitleX>
      <StepX c={c} num={1} text="Semillas: estratificar 1-2 semanas en nevera + remojo 24h. Germinan en 2-4 semanas a 20-25°C. Tasa germinación irregular (20-50%)." />
      <StepX c={c} num={2} text="Esquejes en primavera: trozo 15cm con 2-3 nudos, enraíza en agua o sustrato húmedo en 3-4 semanas." />
      <StepX c={c} num={3} text="Trepadora: necesita soporte (tutor, pérgola, valla). Crece 3-6m por temporada en Barcelona." />
      <StepX c={c} num={4} text="Suelo: drenado, neutro a ligeramente alcalino. No le gustan suelos encharcados." />
      <StepX c={c} num={5} text="Riego: regular en primavera/verano (cuando seque sustrato superior). Tolera sequía moderada en plantas establecidas." />
      <StepX c={c} num={6} text="Invierno: en Barcelona resiste fuera. Pierde hojas pero rebrota en primavera. En zonas muy frías (sierra) cubrir base con mulch." />
      <StepX c={c} num={7} text="Frutos comestibles (passifruta) — bonus alimentario. Aparecen 1-2 años tras siembra." />

      <SectionTitleX c={c}>COSECHA</SectionTitleX>
      <StepX c={c} num={1} text="Hojas y partes aéreas con flores: cosechar al inicio de floración (junio-agosto). Cortar puntas con tijera, dejando plantas con suficiente foliage." />
      <StepX c={c} num={2} text="Secar a sombra ventilada 5-10 días hasta que crujan. Conservar en frasco hermético oscuro." />
      <StepX c={c} num={3} text="Frutos: madurar en planta hasta arrugarse y ablandarse. Comestibles directamente." />

      <SectionTitleX c={c}>EXTRACCIÓN</SectionTitleX>
      <StepX c={c} num={1} text="Tintura alcohólica: 50g hojas/flores secas en 250ml alcohol 40-60°. Macerar en frasco oscuro 4-6 semanas agitando ocasionalmente. Filtrar con gasa." />
      <StepX c={c} num={2} text="Dosis tintura: 20-40 gotas (1-2ml) en agua, hasta 3x/día. Extracto seco (polvo concentrado) disponible en farmacia y herboristería — cómodo para cápsulas." />
      <InfoBoxX c={c}>📦 Resultado: tintura ambarino-verdosa con flavonoides (crisina, isovitexina) y harmanoides. Conservar frasco oscuro 4-5 años. Efecto ansiolítico notable con uso regular.</InfoBoxX>

      <SectionTitleX c={c}>USOS</SectionTitleX>
      <InfoBoxX c={c}>
        🍵 <strong>Infusión:</strong> 1-2 cucharaditas (2-4g) hojas/flores secas por taza. Hervir 5-10 min. Hasta 3 tazas/día. Sabor herbal ligero.<br/>
        💊 <strong>Tintura:</strong> 50g hojas secas en 250ml alcohol 40-60°. Macerar 3 semanas. 20-40 gotas en agua, hasta 3x/día.<br/>
        😴 <strong>Antes de dormir:</strong> taza 30-60 min antes de cama. Combina muy bien con lúpulo, valeriana, melisa.
      </InfoBoxX>

      <SectionTitleX c={c}>EFECTOS</SectionTitleX>
      <InfoBoxX c={c}>
        Comienzo: 30-60 min. Duración: 2-4h. Sensaciones: ansiolisis suave, calma mental, somnolencia ligera, relajación muscular. Sin "viaje". Comparable (pero más suave) a benzodiacepina herbal. Ayuda en insomnio leve, ansiedad, taquicardia nerviosa.
      </InfoBoxX>

      <SectionTitleX c={c}>CONSERVACIÓN</SectionTitleX>
      <InfoBoxX c={c}>
        🥄 <strong>Hojas/flores secas:</strong> frasco hermético oscuro. Dura 1-2 años con buena potencia.<br/>
        💧 <strong>Tintura:</strong> 4-5 años en botella oscura.<br/>
        🌱 <strong>Planta viva:</strong> perenne en Barcelona, indefinida con cuidado mínimo.
      </InfoBoxX>

      <SectionTitleX c={c}>HARM REDUCTION</SectionTitleX>
      <InfoBoxX c={c}>
        De las MÁS SEGURAS. Sin contraindicaciones graves. Precaución: embarazo (estimulante uterino leve), interacción con sedantes/ansiolíticos farmacéuticos (suma efecto), conducción tras dosis altas. NO mezclar con alcohol en exceso.
      </InfoBoxX>
    </div>
  );
}

function BELENO() {
  const c = PLANTAS_COLORS;
  return (
    <div>
      <InfoBoxX c={c}>
        <strong>Beleño negro (Hyoscyamus niger)</strong> — solanácea bienal de la herbolaria europea medieval. Una de las plantas brujería del "ungüento de las brujas". Tropanos: hiosciamina, escopolamina, atropina. ⚠️ <strong>POTENCIALMENTE LETAL</strong> — dosis activa muy cercana a tóxica. Material aquí es educativo histórico/etnobotánico.
      </InfoBoxX>

      <SectionTitleX c={c}>CONDICIONES IDEALES</SectionTitleX>
      <div style={{ display: "grid", gridTemplateColumns: "1fr 1fr", gap: "10px", marginBottom: "16px" }}>
        <StatBoxX c={c} label="Temperatura" value="15-25°C" />
        <StatBoxX c={c} label="Humedad" value="40-60%" />
        <StatBoxX c={c} label="Luz" value="Sol pleno" />
        <StatBoxX c={c} label="Sustrato" value="Pobre, calizo, seco" />
      </div>

      <SectionTitleX c={c}>PRECIOS ORIENTATIVOS</SectionTitleX>
      <InfoBoxX c={c}>
        🌰 Semillas: <strong>3-8€/sobre</strong> (sobres etnobotánicos). Sustrato + maceta: 10-20€. Inversión total: ~15-30€.
      </InfoBoxX>

      <SectionTitleX c={c}>CULTIVO</SectionTitleX>
      <StepX c={c} num={1} text="Semillas: longevidad alta (años). Sembrar mayo en Barcelona, superficie fina o muy ligeramente cubiertas. Germinan 1-3 semanas a 18-25°C." />
      <StepX c={c} num={2} text="Sustrato: pobre, drenante, calizo. Suelo de jardín seco o mezcla con arena. NO fertilizar en exceso (concentra alcaloides en suelo pobre)." />
      <StepX c={c} num={3} text="Espaciar 50cm entre plantas. Crece a 80-150cm en segunda temporada." />
      <StepX c={c} num={4} text="Riego escaso. Tolera sequía. Encharcamiento la mata." />
      <StepX c={c} num={5} text="Bienal: año 1 roseta basal de hojas. Año 2 tallo floral, semillas, muere tras." />
      <StepX c={c} num={6} text="Manejo: USAR GUANTES siempre. Olor fétido al romper hojas. No frotarse ojos tras tocar." />

      <SectionTitleX c={c}>COSECHA</SectionTitleX>
      <StepX c={c} num={1} text="Hojas: año 1 al final del verano, antes de helada. Año 2: durante floración (junio-agosto)." />
      <StepX c={c} num={2} text="Secado RÁPIDO al sol o estufa baja (40°C max) — pierde 80% peso. Almacenar en frasco etiquetado VENENO con calavera." />
      <StepX c={c} num={3} text="Semillas: 10x más potentes que hojas. Cosechar cápsulas casi maduras, secar al sol." />

      <SectionTitleX c={c}>EXTRACCIÓN</SectionTitleX>
      <StepX c={c} num={1} text="REFERENCIA HISTÓRICA ÚNICAMENTE. La extracción de tropanos (hiosciamina, escopolamina, atropina) de beleño era realizada en boticas medievales y laboratorios farmacéuticos del siglo XIX para preparar formulaciones magistrales." />
      <StepX c={c} num={2} text="Hoy los alcaloides tropánicos se obtienen industrialmente de fuentes controladas. La atropina pura se usa en hospitales a dosis tituladas. El extracto casero de beleño NO tiene dosificación fiable — variabilidad de alcaloides entre plantas hace el riesgo imprevisible." />
      <InfoBoxX c={c}>⚠️ NO intentar extracción doméstica de tropanos de beleño bajo ningún concepto. Material educativo y documental histórico únicamente. Cualquier uso psicoactivo de beleño crudo es extremadamente peligroso.</InfoBoxX>

      <SectionTitleX c={c}>USOS</SectionTitleX>
      <InfoBoxX c={c}>
        ⚠️ <strong>USO HISTÓRICO/EDUCATIVO:</strong><br/>
        🌿 <strong>Ungüento brujería medieval:</strong> grasa animal + hojas secas trituradas, aplicado en mucosas (NO ingerir). Absorción transdérmica más controlable que oral. Relatos siglo XV-XVII de "vuelo astral".<br/>
        🍵 <strong>Té tradicional para asma (siglo XIX):</strong> 0.1g hojas secas (NO MÁS) en infusión. Broncodilatador por escopolamina. Hoy obsoleto, sustituido por farma.<br/>
        🚬 <strong>Mezcla fumada antiasmática:</strong> hojas secas en pipa, alivio respiratorio rápido (uso médico hasta 1950).
      </InfoBoxX>

      <SectionTitleX c={c}>EFECTOS</SectionTitleX>
      <InfoBoxX c={c}>
        ⚠️ A dosis bajas (uso terapéutico antiguo): broncodilatación, midriasis (pupilas dilatadas), boca seca, sedación. A dosis "psicoactivas": delirio verdadero (NO euforia ni "viaje" como triptaminas), alucinaciones realistas indistinguibles de realidad, amnesia parcial post-experiencia, taquicardia, hipertermia, riesgo cardíaco. Duración 8-24h. Antídoto en hospitales: fisostigmina.
      </InfoBoxX>

      <SectionTitleX c={c}>CONSERVACIÓN</SectionTitleX>
      <InfoBoxX c={c}>
        🥄 <strong>Hojas/semillas secas:</strong> frasco hermético etiquetado, lugar seguro lejos de niños y mascotas. Potencia 2-3 años.<br/>
        🌱 <strong>Planta viva:</strong> bienal, autoresiembra. En jardín bardará año tras año si se le permite.
      </InfoBoxX>

      <SectionTitleX c={c}>HARM REDUCTION</SectionTitleX>
      <InfoBoxX c={c}>
        ⚠️ <strong>TIER ROJO — alta toxicidad.</strong> Ventana terapéutica MUY estrecha. Variabilidad alcaloides según planta/temporada/cultivo (=imposible dosificar a ojo). Contraindicaciones absolutas: cardiopatía, glaucoma, hipertensión, embarazo, lactancia, niños, ancianos. Combinación con alcohol/depresores = letal. NUNCA solo. Material educativo histórico — herbalismo serio recomienda derivados farmacéuticos titulados (atropina hospitalaria) en lugar de la planta cruda.
      </InfoBoxX>
    </div>
  );
}

function BELLADONA() {
  const c = PLANTAS_COLORS;
  return (
    <div>
      <InfoBoxX c={c}>
        <strong>Belladona (Atropa belladonna)</strong> — herbácea perenne europea. Junto a beleño y mandrágora forma el "trío brujería medieval". Tropanos: atropina, escopolamina, hiosciamina. Bayas negras brillantes muy atractivas (=peligro niños). ⚠️ <strong>VENENOSA TODA LA PLANTA</strong>. Material educativo histórico-medicinal.
      </InfoBoxX>

      <SectionTitleX c={c}>CONDICIONES IDEALES</SectionTitleX>
      <div style={{ display: "grid", gridTemplateColumns: "1fr 1fr", gap: "10px", marginBottom: "16px" }}>
        <StatBoxX c={c} label="Temperatura" value="12-22°C" />
        <StatBoxX c={c} label="Humedad" value="50-70%" />
        <StatBoxX c={c} label="Luz" value="Sombra parcial" />
        <StatBoxX c={c} label="Sustrato" value="Drenado, calizo, fértil" />
      </div>

      <SectionTitleX c={c}>PRECIOS ORIENTATIVOS</SectionTitleX>
      <InfoBoxX c={c}>
        🌰 Semillas: <strong>4-10€/sobre</strong> · 🌱 Plantón: <strong>8-15€</strong>. Inversión: ~20-40€.
      </InfoBoxX>

      <SectionTitleX c={c}>CULTIVO</SectionTitleX>
      <StepX c={c} num={1} text="Semillas: estratificar 4 semanas frío (nevera). Sembrar marzo en flat. Germinación lenta: 4-6 semanas a 18-22°C." />
      <StepX c={c} num={2} text="Trasplantar a 18cm cuando plántulas 5-10cm. Espaciar 70-80cm definitivos." />
      <StepX c={c} num={3} text="Sustrato: drenado, ligeramente alcalino. Bien con cal añadida. Le gusta semisombra (bajo árboles caducifolios ideal)." />
      <StepX c={c} num={4} text="Riego moderado. Suelo siempre algo húmedo, nunca encharcado. Mulch en verano para conservar humedad." />
      <StepX c={c} num={5} text="Año 1: 50cm altura, sin floración. Año 2+: 1-1.5m, flores marrón-violeta verano, bayas negras otoño." />
      <StepX c={c} num={6} text="Plantar en zona segura: lejos de niños, mascotas, huerto comestible. Etiquetar siempre. USAR GUANTES." />
      <StepX c={c} num={7} text="Perenne en Barcelona. Rebrota cada primavera de raíces persistentes. Vive 5-10 años." />

      <SectionTitleX c={c}>COSECHA</SectionTitleX>
      <StepX c={c} num={1} text="Hojas y tops: cosechar plenamente en flor (junio-agosto). Cortar partes aéreas a 5cm del suelo." />
      <StepX c={c} num={2} text="Secar rápido sombra ventilada 5-10 días. Almacenar frasco etiquetado." />
      <StepX c={c} num={3} text="Raíces: año 4 en otoño. Concentración alcaloides máxima. Lavar, cortar, secar al aire o estufa baja." />
      <StepX c={c} num={4} text="NO comer bayas — atractivas pero potencialmente letales (incluso 2-3 bayas niños = hospital). Compostar o desechar." />

      <SectionTitleX c={c}>EXTRACCIÓN</SectionTitleX>
      <StepX c={c} num={1} text="REFERENCIA HISTÓRICA ÚNICAMENTE. La extracción de atropina de belladona fue la base de la farmacología moderna del siglo XIX. Industrias farmacéuticas extraían atropina de hojas/raíces para preparaciones oculares y antiespasmódicas." />
      <StepX c={c} num={2} text="La atropina pura se produce hoy industrialmente y es fármaco hospitalario controlado. La extracción casera de belladona no tiene ninguna utilidad práctica y supone riesgo de intoxicación grave incluso durante la manipulación." />
      <InfoBoxX c={c}>⚠️ NO realizar extracción doméstica de belladona. Referencia etnobotánica e histórica únicamente. La belladona ornamental es legal; el uso psicoactivo no es seguro en ninguna dosis sin titulación química precisa.</InfoBoxX>

      <SectionTitleX c={c}>USOS</SectionTitleX>
      <InfoBoxX c={c}>
        ⚠️ <strong>USO HISTÓRICO/MEDICINAL:</strong><br/>
        💧 <strong>Tintura herbal (siglos XVIII-XIX):</strong> hojas en alcohol 60°. 1-3 gotas dilución. Antiespasmódico, midriático ocular (dilatar pupilas — origen del nombre "bella donna" en damas Renacimiento).<br/>
        🌿 <strong>Ungüento brujería medieval:</strong> grasa + extracto hojas. Aplicación tópica/mucosas para "vuelo".<br/>
        💊 <strong>Farma moderna:</strong> atropina pura titulada en hospitales (preanestesia, bradicardia, antídoto envenenamiento organofosforados). Belladona cruda obsoleta.
      </InfoBoxX>

      <SectionTitleX c={c}>EFECTOS</SectionTitleX>
      <InfoBoxX c={c}>
        ⚠️ Mismos efectos que beleño/datura — son misma familia tropano. Dosis baja: midriasis, sequedad, taquicardia. Dosis alta: delirio realista (no "viaje" psicodélico), confusión, alucinaciones táctiles ("arañas"), amnesia post-experiencia, hipertermia. Duración 8-24h. Riesgo letal por arritmia o hipertermia maligna.
      </InfoBoxX>

      <SectionTitleX c={c}>CONSERVACIÓN</SectionTitleX>
      <InfoBoxX c={c}>
        🥄 <strong>Hojas secas:</strong> 2-3 años en frasco oscuro etiquetado.<br/>
        💧 <strong>Tintura:</strong> 5+ años.<br/>
        🌱 <strong>Planta viva:</strong> perenne, raíces gruesas año tras año.
      </InfoBoxX>

      <SectionTitleX c={c}>HARM REDUCTION</SectionTitleX>
      <InfoBoxX c={c}>
        ⚠️ <strong>TIER ROJO.</strong> Mismas precauciones que beleño. Bayas atrayentes a niños/mascotas — ARRANCAR las que aparezcan si hay riesgo en hogar. Antídoto hospitalario fisostigmina. NO experimentar dosis psicoactivas — uso histórico documenta muertes frecuentes incluso entre brujos experimentados. Material aquí estrictamente educativo etnobotánico/farmacognosia.
      </InfoBoxX>
    </div>
  );
}

function MANDRAGORA() {
  const c = PLANTAS_COLORS;
  return (
    <div>
      <InfoBoxX c={c}>
        <strong>Mandrágora (Mandragora officinarum / autumnalis)</strong> — perenne mediterránea con raíz tuberosa antropomorfa. Solanácea con tropanos similares a belladona. Mítica en folclore europeo: "grita al ser arrancada". Cultivo viable en Barcelona — clima mediterráneo. ⚠️ Tóxica, uso histórico mágico-medicinal.
      </InfoBoxX>

      <SectionTitleX c={c}>CONDICIONES IDEALES</SectionTitleX>
      <div style={{ display: "grid", gridTemplateColumns: "1fr 1fr", gap: "10px", marginBottom: "16px" }}>
        <StatBoxX c={c} label="Temperatura" value="5-25°C (mediterránea)" />
        <StatBoxX c={c} label="Humedad" value="40-60%" />
        <StatBoxX c={c} label="Luz" value="Sol parcial / sombra" />
        <StatBoxX c={c} label="Sustrato" value="Profundo, drenado, calcáreo" />
      </div>

      <SectionTitleX c={c}>PRECIOS ORIENTATIVOS</SectionTitleX>
      <InfoBoxX c={c}>
        🌰 Semillas: <strong>5-15€/sobre</strong> (raras, etnobotánica especializada) · 🌱 Plantón pequeño: <strong>20-40€</strong>. Inversión: 30-60€.
      </InfoBoxX>

      <SectionTitleX c={c}>CULTIVO</SectionTitleX>
      <StepX c={c} num={1} text="Semillas: estratificar 6-8 semanas frío húmedo (nevera con peat). Germinación irregular y lenta: 1-3 meses." />
      <StepX c={c} num={2} text="Sustrato MUY profundo (50cm+) — la raíz baja recta y larga. Maceta: tipo airpot 10-15L, profunda. Mejor en suelo definitivo." />
      <StepX c={c} num={3} text="Mezcla: 60% jardín calcáreo + 30% arena gruesa + 10% compost. Drenaje crítico — encharcamiento pudre raíz." />
      <StepX c={c} num={4} text="Localización: lugar definitivo desde plántula. Trasplante difícil (raíz pivotante)." />
      <StepX c={c} num={5} text="Riego: parco. En invierno casi nada (mediterráneo, tiene reposo invernal). Verano: cuando seque sustrato." />
      <StepX c={c} num={6} text="Año 1-2: roseta basal de hojas grandes. Año 2-3: floración invernal (M. autumnalis flores morado claro), frutos amarillo aromáticos." />
      <StepX c={c} num={7} text="Hibernación: hojas mueren en verano seco extremo o invierno frío fuerte. Raíz persiste indefinida (40+ años posibles)." />

      <SectionTitleX c={c}>COSECHA</SectionTitleX>
      <StepX c={c} num={1} text="Raíz: año 3-5 mínimo (plantas más viejas más alcaloides). Otoño tras hibernación de hojas. Excavar con cuidado — la raíz es FRÁGIL y antropomorfa (forma humanoide)." />
      <StepX c={c} num={2} text="USAR GUANTES Y MASCARILLA al manejar — partículas pueden absorberse." />
      <StepX c={c} num={3} text="Limpiar con cepillo seco. Cortar en rodajas finas. Secar al sol o estufa baja 1-2 semanas." />
      <StepX c={c} num={4} text="Frutos: comestibles tradicionalmente en pequeñas cantidades (manzanitas amarillas) — Génesis bíblico mencione 'mandrágoras' como afrodisíaco. Pero efectos psicoactivos vienen de raíz, no fruto." />

      <SectionTitleX c={c}>EXTRACCIÓN</SectionTitleX>
      <StepX c={c} num={1} text="REFERENCIA ETNOBOTÁNICA E HISTÓRICA ÚNICAMENTE. La raíz contiene atropina, escopolamina e hiosciamina como belladona. Culturas clásicas (griega, romana, árabe medieval) macerababan la raíz en vino como anestésico y sedante ritual." />
      <StepX c={c} num={2} text="Extractar alcaloides de mandrágora casero no tiene ninguna utilidad ni justificación en el contexto actual. La variabilidad de concentración entre raíces hace imposible cualquier dosificación segura sin análisis químico." />
      <InfoBoxX c={c}>⚠️ La raíz de mandrágora como objeto etnobotánico/decorativo y folclórico es el uso legítimo y seguro. Referencia histórica únicamente para extracción.</InfoBoxX>

      <SectionTitleX c={c}>USOS</SectionTitleX>
      <InfoBoxX c={c}>
        ⚠️ <strong>USO HISTÓRICO/MÁGICO:</strong><br/>
        💧 <strong>Vino mandragórico (antigüedad clásica):</strong> raíz seca macerada en vino. Anestésico quirúrgico antes de éter (Dioscórides, Plinio). Dosis: gramaje incierto = peligroso.<br/>
        🌿 <strong>Ungüento brujería:</strong> mismo concepto que belladona/beleño. Aplicación tópica/mucosas.<br/>
        🪬 <strong>Folclore:</strong> raíz antropomorfa como amuleto (Harry Potter no es invento). Dormir con raíz bajo cama → "sueños proféticos" según tradición.<br/>
        💊 <strong>Farma:</strong> escopolamina aislada usada en parches (cinetosis, premedicación quirúrgica). Mandrágora cruda obsoleta.
      </InfoBoxX>

      <SectionTitleX c={c}>EFECTOS</SectionTitleX>
      <InfoBoxX c={c}>
        ⚠️ Tropanos = mismos efectos belladona/beleño. Histórico: anestesia + amnesia (perfecto para cirugía sin éter), sopor profundo. Sobredosis: delirio, alucinaciones, paro cardíaco. Duración 8-24h.
      </InfoBoxX>

      <SectionTitleX c={c}>CONSERVACIÓN</SectionTitleX>
      <InfoBoxX c={c}>
        🥄 <strong>Raíz seca rodajas:</strong> 3-5 años en frasco hermético etiquetado.<br/>
        💧 <strong>Vino mandragórico:</strong> botella oscura corchada, indefinido.<br/>
        🌱 <strong>Planta viva:</strong> perenne longeva. Raíz crece 1-2cm/año en grosor — plantas centenarias documentadas.
      </InfoBoxX>

      <SectionTitleX c={c}>HARM REDUCTION</SectionTitleX>
      <InfoBoxX c={c}>
        ⚠️ <strong>TIER ROJO.</strong> Misma toxicidad belladona/beleño + raíz vieja = imprevisible. Cultivar es legal (planta ornamental etnobotánica), uso psicoactivo NO recomendable sin química analítica para titulación. Material educativo etnohistórico. La planta ornamental + raíz como pieza decorativa folclórica es uso totalmente válido y seguro.
      </InfoBoxX>
    </div>
  );
}

function DATURA_INOXIA() {
  const c = PLANTAS_COLORS;
  return (
    <div>
      <InfoBoxX c={c}>
        <strong>Datura inoxia (Toloache, Yerba del diablo)</strong> — solanácea anual/perenne nativa SW USA y México. Flores trompeta blancas espectaculares (origen "trompeta del diablo"). Tropanos a tope: escopolamina dominante. ⚠️ <strong>EXTREMA TOXICIDAD</strong>. Uso shamánico mexicano antiguo, pero muertes documentadas frecuentes en uso recreativo moderno occidental (=desinformados).
      </InfoBoxX>

      <SectionTitleX c={c}>CONDICIONES IDEALES</SectionTitleX>
      <div style={{ display: "grid", gridTemplateColumns: "1fr 1fr", gap: "10px", marginBottom: "16px" }}>
        <StatBoxX c={c} label="Temperatura" value="20-32°C" />
        <StatBoxX c={c} label="Humedad" value="40-60%" />
        <StatBoxX c={c} label="Luz" value="Sol pleno" />
        <StatBoxX c={c} label="Sustrato" value="Suelto, arenoso, seco" />
      </div>

      <SectionTitleX c={c}>PRECIOS ORIENTATIVOS</SectionTitleX>
      <InfoBoxX c={c}>
        🌰 Semillas: <strong>2-6€/sobre</strong> (a veces se autoresiembra en jardines). Inversión: 10-20€.
      </InfoBoxX>

      <SectionTitleX c={c}>CULTIVO</SectionTitleX>
      <StepX c={c} num={1} text="Semillas: germinación lenta (3-5 semanas a 25°C). Pre-remojo 24h facilita. Sembrar mayo en Barcelona, directo en suelo definitivo o flats con bottom heat." />
      <StepX c={c} num={2} text="Sustrato seco, drenado, alcalino. Tolera suelos pobres. Sol pleno." />
      <StepX c={c} num={3} text="Espaciar 80-100cm — planta voluminosa, llega a 1-1.5m altura." />
      <StepX c={c} num={4} text="Riego: parco una vez establecida. Tolera sequía. Encharcamiento la pudre." />
      <StepX c={c} num={5} text="Floración: julio-octubre. Flores blancas trompeta 15-20cm largo, fragancia nocturna. Polinizadas por esfingidos." />
      <StepX c={c} num={6} text="Cápsulas espinosas con muchas semillas marrones. Autoresiembra agresiva — quitar cápsulas si no quieres jardín invadido." />
      <StepX c={c} num={7} text="En Barcelona: anual o perenne corta vida (raíz tubular puede sobrevivir invierno suave). USAR GUANTES siempre." />

      <SectionTitleX c={c}>COSECHA</SectionTitleX>
      <StepX c={c} num={1} text="Hojas y tops: durante floración (julio-septiembre). Olor fétido al manipular." />
      <StepX c={c} num={2} text="Secar rápido sombra ventilada. Almacenar frasco etiquetado VENENO." />
      <StepX c={c} num={3} text="Semillas: 10x más concentradas que hojas. Cosechar cápsulas verde-marrón antes de abrir. Secar al sol." />

      <SectionTitleX c={c}>EXTRACCIÓN</SectionTitleX>
      <StepX c={c} num={1} text="REFERENCIA HISTÓRICA ÚNICAMENTE. La extracción de tropanos de Datura inoxia para uso farmacológico era realizada en laboratorios en el siglo XIX para obtener escopolamina (el alcaloide dominante en esta especie frente a belladona y beleño)." />
      <StepX c={c} num={2} text="Ninguna extracción doméstica tiene sentido con esta planta. La variabilidad de alcaloides entre partes y entre plantas es tan alta que el delirio tropánico es prácticamente imposible de modular sin análisis." />
      <InfoBoxX c={c}>⚠️ Referencia histórica únicamente. La Datura inoxia como ornamental espectacular es el único uso doméstico seguro. NO extraer, NO usar internamente.</InfoBoxX>

      <SectionTitleX c={c}>USOS</SectionTitleX>
      <InfoBoxX c={c}>
        ⚠️ <strong>USO ETNOBOTÁNICO/EDUCATIVO:</strong><br/>
        🌿 <strong>Toloache mexicano (yerba del diablo):</strong> shamanes Yaqui, Huichol, Tarahumara. Hojas en bebida ritual o tabaco fumado. Iniciaciones masculinas — uso adulto guiado por curandero.<br/>
        🚬 <strong>Hojas fumadas (siglo XIX, asma):</strong> mismo broncodilatador que beleño. Obsoleto.<br/>
        🌸 <strong>Ornamental:</strong> flores espectaculares — uso jardín como ornamental tóxica está bien (con cartel y aviso a niños/mascotas).
      </InfoBoxX>

      <SectionTitleX c={c}>EFECTOS</SectionTitleX>
      <InfoBoxX c={c}>
        ⚠️ Delirio tropano clásico, pero MÁS intenso que beleño/belladona. 24-72h duración. Alucinaciones realistas total inmersión (no "ver lo virtual" — VER fantasmas/animales reales tocables). Hipertermia, taquicardia, midriasis severa, retención urinaria, amnesia 90%. Mortalidad documentada por arritmia o hipertermia. Antídoto: fisostigmina. Hospitalización siempre necesaria por sobredosis.
      </InfoBoxX>

      <SectionTitleX c={c}>CONSERVACIÓN</SectionTitleX>
      <InfoBoxX c={c}>
        🥄 <strong>Material seco:</strong> 2-3 años etiquetado.<br/>
        🌰 <strong>Semillas:</strong> longevidad 5-10 años germinables.<br/>
        🌱 <strong>Planta viva:</strong> ornamental espectacular en patio.
      </InfoBoxX>

      <SectionTitleX c={c}>HARM REDUCTION</SectionTitleX>
      <InfoBoxX c={c}>
        ⚠️ <strong>TIER ROJO MÁX.</strong> De TODAS las plantas brujería europeas/mexicanas, datura es la MÁS asociada a muertes y hospitalizaciones recreativas modernas. NO es psicodélica recreativa — es deliriante peligrosa. Uso shamánico tradicional implica años de aprendizaje, dieta previa, contexto ritual, dosaje memorizado generaciones. NUNCA solo, NUNCA experimentación naive. Ornamental espectacular en jardín = uso seguro y legal.
      </InfoBoxX>
    </div>
  );
}

function ESTRAMONIO() {
  const c = PLANTAS_COLORS;
  return (
    <div>
      <InfoBoxX c={c}>
        <strong>Estramonio (Datura stramonium, Jimson weed)</strong> — anual cosmopolita. Naturalizada en España — crece silvestre en cunetas, descampados. Misma familia que datura inoxia, mismos tropanos pero perfil ligeramente distinto (hiosciamina dominante). Llamada "yerba de los hechizos" en herbarios castellanos. ⚠️ Mismas precauciones que datura inoxia.
      </InfoBoxX>

      <SectionTitleX c={c}>CONDICIONES IDEALES</SectionTitleX>
      <div style={{ display: "grid", gridTemplateColumns: "1fr 1fr", gap: "10px", marginBottom: "16px" }}>
        <StatBoxX c={c} label="Temperatura" value="18-32°C" />
        <StatBoxX c={c} label="Humedad" value="40-70%" />
        <StatBoxX c={c} label="Luz" value="Sol pleno" />
        <StatBoxX c={c} label="Sustrato" value="Cualquiera (rústica)" />
      </div>

      <SectionTitleX c={c}>PRECIOS ORIENTATIVOS</SectionTitleX>
      <InfoBoxX c={c}>
        🌰 Semillas: <strong>1-4€/sobre</strong> (la más barata de las daturas) · gratis si recolectas en descampados Barcelona donde abunda. Inversión: 5-15€.
      </InfoBoxX>

      <SectionTitleX c={c}>CULTIVO</SectionTitleX>
      <StepX c={c} num={1} text="Semillas: viables en suelo años. Sembrar mayo directo en suelo definitivo. 4 semillas por hoyuelo, separar 50cm. Germinan 2-4 semanas." />
      <StepX c={c} num={2} text="Sustrato: lo que sea — crece en suelos pobres, ruderal por excelencia." />
      <StepX c={c} num={3} text="Riego: poco. Tolera sequía. Sol pleno." />
      <StepX c={c} num={4} text="Crecimiento rápido: 60-150cm en una temporada. Ramificación abierta." />
      <StepX c={c} num={5} text="Flores blancas (raramente violetas en var. tatula) trompeta 8cm. Cápsulas espinosas con cientos de semillas negras." />
      <StepX c={c} num={6} text="Anual estricta — muere en primer hielo. Autoresiembra. USAR GUANTES." />

      <SectionTitleX c={c}>COSECHA</SectionTitleX>
      <StepX c={c} num={1} text="Hojas y tops: durante floración (julio-septiembre)." />
      <StepX c={c} num={2} text="Secado sombra. Almacenar etiquetado." />
      <StepX c={c} num={3} text="Semillas: cosechar cápsulas casi maduras (verde-marrón) antes de abrir y dispersar. Secar al sol." />

      <SectionTitleX c={c}>EXTRACCIÓN</SectionTitleX>
      <StepX c={c} num={1} text="REFERENCIA HISTÓRICA ÚNICAMENTE. Igual que Datura inoxia — mismos alcaloides tropánicos (hiosciamina dominante en esta especie), mismas consideraciones de seguridad." />
      <StepX c={c} num={2} text="El estramonio silvestre en España es responsable de numerosas hospitalizaciones cada verano. No tiene ningún sentido concentrar sus alcaloides. El material histórico es una advertencia, no una instrucción." />
      <InfoBoxX c={c}>⚠️ Referencia histórica y documental únicamente. El estramonio es planta ruderal silvestre — no cultivar intencionalmente cerca de familias con niños o mascotas.</InfoBoxX>

      <SectionTitleX c={c}>USOS</SectionTitleX>
      <InfoBoxX c={c}>
        ⚠️ <strong>USO ETNOBOTÁNICO/EDUCATIVO:</strong><br/>
        🌿 <strong>"Hierba de Jimson" (origen colonial USA):</strong> Soldados ingleses Jamestown 1676 envenenados accidentalmente con ensalada de hojas — origen del nombre "Jimson" (Jamestown weed). Documentación delirio masivo.<br/>
        🚬 <strong>Cigarrillos antiasmáticos victorianos:</strong> mismo broncodilatador. Obsoleto.<br/>
        🪴 <strong>Ornamental ruderal:</strong> flor bonita, pero no en jardín familiar — autoresiembra invasiva.
      </InfoBoxX>

      <SectionTitleX c={c}>EFECTOS</SectionTitleX>
      <InfoBoxX c={c}>
        ⚠️ Mismo perfil deliriante datura inoxia. Variabilidad alcaloides altísima incluso entre plantas mismo arriate (=imposible dosificar reproducible). Mortalidad recreativa documentada en USA año tras año.
      </InfoBoxX>

      <SectionTitleX c={c}>CONSERVACIÓN</SectionTitleX>
      <InfoBoxX c={c}>
        🥄 <strong>Material seco:</strong> 2-3 años etiquetado.<br/>
        🌰 <strong>Semillas:</strong> banco semillas longevo años.
      </InfoBoxX>

      <SectionTitleX c={c}>HARM REDUCTION</SectionTitleX>
      <InfoBoxX c={c}>
        ⚠️ <strong>TIER ROJO.</strong> Mismas advertencias datura inoxia. Estramonio es objeto de muchos casos clínicos en hospitales españoles cada verano (jóvenes desinformados). Uso recreativo NO recomendado bajo ninguna circunstancia. Material educativo y ornamental ruderal histórico.
      </InfoBoxX>
    </div>
  );
}

function ADORMIDERA_CALIFORNIA() {
  const c = PLANTAS_COLORS;
  return (
    <div>
      <InfoBoxX c={c}>
        <strong>Adormidera de California (Eschscholzia californica)</strong> — papaverácea anual nativa de California (flor estatal). Sedante leve, ansiolítico. NO contiene opio (no es Papaver somniferum) — alcaloides distintos: californidina, eschscholtzina. Cultivo MUY fácil en Barcelona. Tier verde — tradición europea como "sustituto seguro de adormidera de opio".
      </InfoBoxX>

      <SectionTitleX c={c}>CONDICIONES IDEALES</SectionTitleX>
      <div style={{ display: "grid", gridTemplateColumns: "1fr 1fr", gap: "10px", marginBottom: "16px" }}>
        <StatBoxX c={c} label="Temperatura" value="10-28°C" />
        <StatBoxX c={c} label="Humedad" value="30-50%" />
        <StatBoxX c={c} label="Luz" value="Sol pleno" />
        <StatBoxX c={c} label="Sustrato" value="Pobre, drenado, seco" />
      </div>

      <SectionTitleX c={c}>PRECIOS ORIENTATIVOS</SectionTitleX>
      <InfoBoxX c={c}>
        🌰 Semillas: <strong>1-3€/sobre</strong> (semillerías ornamentales) · 🌿 Hojas/flores secas (herboristería): <strong>5-10€/100g</strong>. Inversión: 5-15€.
      </InfoBoxX>

      <SectionTitleX c={c}>CULTIVO</SectionTitleX>
      <StepX c={c} num={1} text="Semillas: sembrar directo octubre o febrero/marzo. NO trasplantan bien (raíz pivotante). 1cm profundidad, separar 15-20cm." />
      <StepX c={c} num={2} text="Germinan 7-14 días a 12-18°C. Crecimiento rápido — floración mayo-julio (hasta heladas)." />
      <StepX c={c} num={3} text="Sustrato pobre y seco — NO le gusta riego ni fertilizante. Suelo arenoso/pedregoso = más alcaloides." />
      <StepX c={c} num={4} text="Sol pleno crítico. Sombra = no flora bien." />
      <StepX c={c} num={5} text="Riego escaso. En Barcelona invierno con lluvia natural basta." />
      <StepX c={c} num={6} text="Anual fácil pero autoresiembra — vuelve año a año si dejas cápsulas madurar." />

      <SectionTitleX c={c}>COSECHA</SectionTitleX>
      <StepX c={c} num={1} text="Partes aéreas (hojas + flores + cápsulas verdes) durante floración. Cortar al ras del suelo, otoño antes de helada." />
      <StepX c={c} num={2} text="Secar sombra ventilada 5-7 días. Manejar cuidadoso (estructura frágil)." />
      <StepX c={c} num={3} text="Almacenar frasco hermético oscuro." />

      <SectionTitleX c={c}>EXTRACCIÓN</SectionTitleX>
      <StepX c={c} num={1} text="Tintura alcohólica de eschscholtzina: 50g partes aéreas secas en 250ml alcohol 70°. Macerar en frasco oscuro 4 semanas agitando cada 2-3 días." />
      <StepX c={c} num={2} text="Filtrar con gasa. La eschscholtzina es soluble en alcohol — la tintura es la forma más concentrada de esta planta." />
      <InfoBoxX c={c}>📦 Resultado: tintura ambarino-verde con eschscholtzina y californidina. Dosis: 30-60 gotas en agua 3x/día o antes de dormir. Sin opiáceos — mecanismo diferente (no activa receptores μ-opioides).</InfoBoxX>

      <SectionTitleX c={c}>USOS</SectionTitleX>
      <InfoBoxX c={c}>
        🍵 <strong>Infusión:</strong> 2-4g hojas/flores secas por taza. Hervir 5-10 min. 1-3 tazas/día. Sabor herbal suave.<br/>
        💧 <strong>Tintura:</strong> 50g en 250ml alcohol 50°. Macerar 3 semanas. 30-60 gotas hasta 3x/día.<br/>
        😴 <strong>Antes de dormir:</strong> taza 30 min antes de cama. Combina muy bien con pasiflora, lúpulo.
      </InfoBoxX>

      <SectionTitleX c={c}>EFECTOS</SectionTitleX>
      <InfoBoxX c={c}>
        Comienzo: 30-60 min. Duración: 2-4h. Sensaciones: relajación corporal, sedación leve, somnolencia, calma mental. Sin alucinaciones ni "viaje". Comparable a manzanilla/melisa pero más potente. Útil insomnio leve y ansiedad.
      </InfoBoxX>

      <SectionTitleX c={c}>CONSERVACIÓN</SectionTitleX>
      <InfoBoxX c={c}>
        🥄 <strong>Hojas/flores secas:</strong> 1-2 años frasco hermético.<br/>
        💧 <strong>Tintura:</strong> 4-5 años.
      </InfoBoxX>

      <SectionTitleX c={c}>HARM REDUCTION</SectionTitleX>
      <InfoBoxX c={c}>
        Tier verde. Sin contraindicaciones graves. Precaución embarazo/lactancia, suma con sedantes farmacéuticos. Nota: en California la planta silvestre está protegida (multas por arrancarla en parques). En España y privadamente: cultivo libre.
      </InfoBoxX>
    </div>
  );
}

function WOODROSE() {
  const c = PLANTAS_COLORS;
  return (
    <div>
      <InfoBoxX c={c}>
        <strong>Hawaiian Baby Woodrose (Argyreia nervosa)</strong> — convolvulácea trepadora vivaz, naturalizada en Hawái. Semillas con LSA (amida ácido lisérgico) — psicodélico ergolínico natural emparentado con LSD pero más sedante/somatic. Tradicionalmente usada en India/Hawai. Cultivo viable Barcelona indoor con macetón grande, outdoor sur ES.
      </InfoBoxX>

      <SectionTitleX c={c}>CONDICIONES IDEALES</SectionTitleX>
      <div style={{ display: "grid", gridTemplateColumns: "1fr 1fr", gap: "10px", marginBottom: "16px" }}>
        <StatBoxX c={c} label="Temperatura" value="18-30°C" />
        <StatBoxX c={c} label="Humedad" value="50-70%" />
        <StatBoxX c={c} label="Luz" value="Sol pleno o parcial" />
        <StatBoxX c={c} label="Sustrato" value="Fértil, drenado" />
      </div>

      <SectionTitleX c={c}>PRECIOS ORIENTATIVOS</SectionTitleX>
      <InfoBoxX c={c}>
        🌰 Semillas: <strong>3-10€/10ud</strong> (etnobotánica especializada — variedades "Ghana" más potentes). Maceta 30L+: 15-25€. Inversión: 25-50€.
      </InfoBoxX>

      <SectionTitleX c={c}>CULTIVO</SectionTitleX>
      <StepX c={c} num={1} text="Semillas: nick (cortar pequeño en seedcoat opuesto al ojo germinal con cutter). Remojo 24-48h en agua tibia hasta hinchen." />
      <StepX c={c} num={2} text="Sembrar en peat/vermiculita. NO usar bottom heat (rota raíz). Germinan 4-10 días a 22-28°C." />
      <StepX c={c} num={3} text="Trasplantar a maceta 30L+ cuando tenga 4-6 hojas. Trepadora vigorosa — necesita pérgola/tutor 3-4m." />
      <StepX c={c} num={4} text="Sustrato rico, drenado. Riego moderado. Año 1: arbusto pequeño sin flor. Año 2+: vine masivo, flores rosadas, vainas con 1-4 semillas peludas marrones." />
      <StepX c={c} num={5} text="Barcelona: indoor invierno (no tolera <5°C), outdoor primavera-otoño. Macetón rodante facilita movimiento." />
      <StepX c={c} num={6} text="Polinizada por abejas grandes/colibríes — en BCN posible polinización manual con pincel para asegurar semillas." />

      <SectionTitleX c={c}>COSECHA</SectionTitleX>
      <StepX c={c} num={1} text="Vainas: dejar madurar en planta hasta secas y marrones (otoño año 2+). Recoger antes de que se abran solas." />
      <StepX c={c} num={2} text="Abrir cápsulas, extraer semillas. Almacenar en frasco hermético oscuro fresco." />
      <StepX c={c} num={3} text="Potencia disminuye 6-12 meses tras cosecha — usar fresca." />

      <SectionTitleX c={c}>EXTRACCIÓN</SectionTitleX>
      <StepX c={c} num={1} text="Extracción A/B básica de LSA: triturar semillas + acidificar con agua y ácido cítrico (pH 4) → filtrar material vegetal → alcalinizar fase acuosa (pH 9-10 con NaOH o cal) → lavar con solvente apolar (naphtha) para extraer base libre → separar fase orgánica → evaporar. Proceso delicado." />
      <StepX c={c} num={2} text="Alternativa más simple: cold water extract (CWE). Triturar semillas, suspender en agua fría, agitar 1-2h, filtrar con tela fina, beber el agua. Reduce componentes responsables de náusea sin separar el LSA." />
      <InfoBoxX c={c}>📦 Para la mayoría: semillas directas con pelusa retirada son suficientes. CWE reduce náusea. A/B concentra el LSA pero requiere materiales de laboratorio. La potencia varía mucho entre lotes de semillas.</InfoBoxX>

      <SectionTitleX c={c}>USOS</SectionTitleX>
      <InfoBoxX c={c}>
        🌰 <strong>Semillas:</strong> dosis típica 4-8 semillas (variabilidad ALTA según procedencia/temporada). Empezar con 3 semillas test. Quitar la pelusa marrón externa (irritante GI) raspando con cuchillo.<br/>
        🥒 <strong>Cold water extract (CWE):</strong> triturar semillas, dejar en agua fría 1-2h, filtrar tela fina, beber agua. Reduce náusea típica de masticar semillas crudas.<br/>
        🍵 <strong>Infusión Lemon-Tek:</strong> triturar + zumo limón 30 min + agua tibia. Acelera onset.
      </InfoBoxX>

      <SectionTitleX c={c}>EFECTOS</SectionTitleX>
      <InfoBoxX c={c}>
        Comienzo: 1-2h (lento). Duración: 6-10h. Sensaciones: psicodélico ergolínico — cerebración, visuales sutiles ojos cerrados, introspección, melancolía+melocura, sedación corporal pesada (más somatic que LSD), náusea inicial común. Útil para introspección lenta y sueño profundo final con sueños vívidos.
      </InfoBoxX>

      <SectionTitleX c={c}>CONSERVACIÓN</SectionTitleX>
      <InfoBoxX c={c}>
        🌰 <strong>Semillas secas:</strong> frasco oscuro frío. Potencia decae a partir 6-9 meses. Frigorífico extiende a 1-2 años.<br/>
        🌱 <strong>Planta viva:</strong> perenne tropical. En BCN macetón indoor invierno, outdoor verano. Larga vida (10+ años posibles).
      </InfoBoxX>

      <SectionTitleX c={c}>HARM REDUCTION</SectionTitleX>
      <InfoBoxX c={c}>
        Tier verde-amarillo. Vasoconstricción ergolínica — contraindicado: cardiopatía, hipertensión, historial migraña hemiplégica, embarazo, lactancia. Interacción ISRS/IMAO: NO mezclar (síndrome serotoninérgico). Set/setting clásico psicodélico. Náusea: empezar con dosis baja, ayuno previo 4h. Algunos suplidores tratan semillas con fungicidas — comprar en etnobotánicas serias.
      </InfoBoxX>
    </div>
  );
}

function MORNING_GLORY() {
  const c = PLANTAS_COLORS;
  return (
    <div>
      <InfoBoxX c={c}>
        <strong>Morning Glory (Ipomoea tricolor / I. violacea)</strong> — convolvulácea anual trepadora ornamental común. Variedades "Heavenly Blue" y "Pearly Gates" tradicionalmente más activas. Mismos alcaloides LSA que woodrose pero más diluidos — necesitas más semillas. Sagrada azteca ("ololiuhqui"). Cultivo TRIVIAL en Barcelona — flor de jardín común.
      </InfoBoxX>

      <SectionTitleX c={c}>CONDICIONES IDEALES</SectionTitleX>
      <div style={{ display: "grid", gridTemplateColumns: "1fr 1fr", gap: "10px", marginBottom: "16px" }}>
        <StatBoxX c={c} label="Temperatura" value="15-30°C" />
        <StatBoxX c={c} label="Humedad" value="40-70%" />
        <StatBoxX c={c} label="Luz" value="Sol pleno" />
        <StatBoxX c={c} label="Sustrato" value="Fértil drenado" />
      </div>

      <SectionTitleX c={c}>PRECIOS ORIENTATIVOS</SectionTitleX>
      <InfoBoxX c={c}>
        🌰 Semillas: <strong>1-3€/sobre</strong> (jardinería común — mejores variedades "Heavenly Blue" o "Pearly Gates"). Inversión: 5-10€. La más barata de la lista.
      </InfoBoxX>

      <SectionTitleX c={c}>CULTIVO</SectionTitleX>
      <StepX c={c} num={1} text="Semillas: nick + remojo 2h en agua tibia. Sembrar abril-mayo directo en suelo definitivo. 1cm profundidad, separar 15-20cm." />
      <StepX c={c} num={2} text="Trepadora vigorosa: 3-5m por temporada. Necesita malla, valla, tutor." />
      <StepX c={c} num={3} text="Sol pleno. Sustrato cualquiera. Riego moderado." />
      <StepX c={c} num={4} text="Floración julio-octubre. Flores azul intenso/morado mañana, marchitan tarde. Polinizadas por abejas." />
      <StepX c={c} num={5} text="Cápsulas marrones con 4-6 semillas negras (algunas 'piel pelusilla blanca'). Cosechar al secar." />
      <StepX c={c} num={6} text="Anual en Barcelona — muere en primera helada. Autoresiembra abundante." />

      <SectionTitleX c={c}>COSECHA</SectionTitleX>
      <StepX c={c} num={1} text="Cápsulas: dejar madurar en planta hasta marrones secas. Cosechar antes de abrir solas (esparcen semillas)." />
      <StepX c={c} num={2} text="Extraer y secar al sol 1-2 días. Almacenar frasco hermético oscuro." />
      <StepX c={c} num={3} text="Una pérgola con vid morning glory puede dar 100-300 semillas/temporada." />

      <SectionTitleX c={c}>EXTRACCIÓN</SectionTitleX>
      <StepX c={c} num={1} text="Similar a Woodrose: cold water extract (CWE) es el método más accesible. Triturar 150-250 semillas, suspender en agua fría 1-2h, filtrar con tela fina, beber el agua filtrada. Reducir náusea: añadir antiemético (jengibre, meclizina) 30-60 min antes." />
      <StepX c={c} num={2} text="Extracción A/B más compleja (ver Woodrose para descripción completa): aplica igual pero necesitas mayor cantidad de semillas por el menor contenido de LSA por semilla versus Woodrose." />
      <InfoBoxX c={c}>📦 Las semillas directas o el CWE son los métodos más prácticos para Morning Glory. Variedad "Heavenly Blue" como referencia. Asegurarse de usar semillas untreated (sin fungicidas).</InfoBoxX>

      <SectionTitleX c={c}>USOS</SectionTitleX>
      <InfoBoxX c={c}>
        🌰 <strong>Semillas:</strong> dosis típica 100-300 semillas (mucho más que woodrose porque LSA más diluido). Variedad "Heavenly Blue" referencia clásica.<br/>
        🥒 <strong>Cold water extract:</strong> triturar semillas finas, agua fría 1-2h, filtrar tela. Reduce náusea.<br/>
        🍷 <strong>Vino azteca tradicional (ololiuhqui):</strong> uso ritual centroamericano — Rivea corymbosa estrictamente, pero Ipomoea variantes sirven.
      </InfoBoxX>

      <SectionTitleX c={c}>EFECTOS</SectionTitleX>
      <InfoBoxX c={c}>
        Similar a Woodrose pero más sutil/efímero. Comienzo 45-90 min. Duración 4-8h. Onírico, introspectivo, leve visualidad. Cuidado con suplidores que tratan semillas con fungicidas (síntomas: vómito severo) — comprar paquetes que no especifiquen tratamiento, o de fuentes de confianza orgánicas.
      </InfoBoxX>

      <SectionTitleX c={c}>CONSERVACIÓN</SectionTitleX>
      <InfoBoxX c={c}>
        🌰 <strong>Semillas:</strong> 2-3 años frasco oscuro fresco. Frigorífico extiende.<br/>
        🌸 <strong>Flores:</strong> ornamentales solamente, sin valor psicoactivo en flor.
      </InfoBoxX>

      <SectionTitleX c={c}>HARM REDUCTION</SectionTitleX>
      <InfoBoxX c={c}>
        Tier verde-amarillo. Mismas precauciones LSA que woodrose: vasoconstricción, no mezclar ISRS/IMAO, set/setting. Semillas comerciales modernas a veces tratadas con metiltiofano — preferir orgánicas. NO ingerir hojas/raíces (toxicidad GI sin LSA).
      </InfoBoxX>
    </div>
  );
}

function RUDA_SIRIA() {
  const c = PLANTAS_COLORS;
  return (
    <div>
      <InfoBoxX c={c}>
        <strong>Ruda siria (Peganum harmala)</strong> — zigofilácea perenne mediterráneo-asiática. Naturalizada en sur de España. Semillas + raíz contienen β-carbolinas (harmina, harmalina, tetrahidroharmina) — IMAO reversible (RIMA). Crítica para "ayahuasca analógica" vegetal: combinada con DMT-planta (mimosa, acacia, phalaris) hace ayahuasca casera funcional.
      </InfoBoxX>

      <SectionTitleX c={c}>CONDICIONES IDEALES</SectionTitleX>
      <div style={{ display: "grid", gridTemplateColumns: "1fr 1fr", gap: "10px", marginBottom: "16px" }}>
        <StatBoxX c={c} label="Temperatura" value="10-35°C (rústica)" />
        <StatBoxX c={c} label="Humedad" value="20-50%" />
        <StatBoxX c={c} label="Luz" value="Sol pleno" />
        <StatBoxX c={c} label="Sustrato" value="Pobre seco arenoso" />
      </div>

      <SectionTitleX c={c}>PRECIOS ORIENTATIVOS</SectionTitleX>
      <InfoBoxX c={c}>
        🌰 Semillas: <strong>3-8€/sobre</strong> (legales en ES, libre venta) · 🌿 Semillas secas (importadas Irán/Turquía): <strong>5-15€/100g</strong>. Inversión: 10-25€.
      </InfoBoxX>

      <SectionTitleX c={c}>CULTIVO</SectionTitleX>
      <StepX c={c} num={1} text="Semillas: sembrar abril-mayo en peat moss superficial. Germinan 2-3 semanas a 22-28°C. Susceptible a damping-off — NO sobreregar." />
      <StepX c={c} num={2} text="Sustrato seco, arenoso, alcalino. Crece en suelos ásperos pobres. Maceta o suelo definitivo (raíz pivotante profunda)." />
      <StepX c={c} num={3} text="Año 1: planta pot tier, brought indoor invierno. Año 2: plantar fuera definitivo." />
      <StepX c={c} num={4} text="Riego escaso. Tolera sequía extrema una vez establecida." />
      <StepX c={c} num={5} text="Año 2-3: floración primavera-verano. Flores blancas pequeñas, cápsulas redondas marrones con muchas semillas oscuras." />
      <StepX c={c} num={6} text="Perenne en Barcelona. En invierno frío fuerte hojas mueren, raíz persiste indefinida." />

      <SectionTitleX c={c}>COSECHA</SectionTitleX>
      <StepX c={c} num={1} text="Semillas: cápsulas marrón-negro maduras (final verano-otoño). Recolectar antes de que se abran." />
      <StepX c={c} num={2} text="Secar al sol 3-5 días. Almacenar frasco hermético oscuro." />
      <StepX c={c} num={3} text="Raíz: año 3+ otoño. Mayor concentración harmina. Lavar, cortar, secar al aire." />

      <SectionTitleX c={c}>EXTRACCIÓN</SectionTitleX>
      <StepX c={c} num={1} text="Extracción A/B de harmala: triturar semillas secas + acidificar con agua y vinagre o ácido cítrico (pH 4-5) → hervir 15 min → filtrar → alcalinizar (pH 9-10 con amoniaco o NaOH diluido) → el precipitado blanquecino son sales de harmala. Filtrar con papel de café o tela fina → secar al aire." />
      <StepX c={c} num={2} text="Resultado: polvo beige/marrón claro de sales de harmina+harmalina. Dosis equivalente a 3g de semillas. Almacenar frasco oscuro seco." />
      <InfoBoxX c={c}>📦 Resultado: extracto de harmala concentrado. Eficaz como IMAO para combinar con DMT-plantas (ayahuasca analógica). Las semillas directas son más simples pero producen más náusea. Recordar siempre el ayuno IMAO de 24h antes.</InfoBoxX>

      <SectionTitleX c={c}>USOS</SectionTitleX>
      <InfoBoxX c={c}>
        🌿 <strong>Tradicional iranio/turco:</strong> semillas quemadas en brasero como humo aromático apotropaico (espantar mal de ojo).<br/>
        ⚗️ <strong>Ayahuasca analógica vegetal:</strong> 2-4g semillas trituradas + extracto DMT-planta (mimosa, acacia confusa, phalaris arundinacea). β-carbolinas inhiben MAO, permiten DMT activo oral. Construye un combo IMAO+DMT ritual.<br/>
        💊 <strong>RIMA experimental:</strong> microdosis 0.5g semillas para efecto antidepresivo IMAO-reversible (similar moclobemida). NO sustituye psiquiatra.
      </InfoBoxX>

      <SectionTitleX c={c}>EFECTOS</SectionTitleX>
      <InfoBoxX c={c}>
        Solo (sin DMT-planta): náusea, sedación, ligera disociación, visiones cerradas a dosis altas (3-5g semillas). Con DMT: ayahuasca clásica — purga, visiones intensas oculares cerradas, contacto entidad, 4-8h. Combo más potente y más prolongado que DMT puro inhalado.
      </InfoBoxX>

      <SectionTitleX c={c}>CONSERVACIÓN</SectionTitleX>
      <InfoBoxX c={c}>
        🌰 <strong>Semillas:</strong> 5-10 años frasco hermético oscuro fresco.<br/>
        🌱 <strong>Planta viva:</strong> perenne longeva. Reservorio constante.
      </InfoBoxX>

      <SectionTitleX c={c}>HARM REDUCTION</SectionTitleX>
      <InfoBoxX c={c}>
        ⚠️ <strong>TIER ESPECIAL — INTERACCIONES IMAO CRÍTICAS.</strong> NO mezclar con: tiramina (queso curado, vino tinto, chucrut, embutido, soja fermentada, plátano maduro, atún latas viejas), ISRS, IMAOs farmacéuticos, MDMA/anfetaminas, dextrometorfano (jarabes tos), tramadol, meperidina. Síndrome serotoninérgico = potencialmente letal. Reposo dietético 24h antes y 24h después. Embarazo/lactancia contraindicado. Contraindicación cardíaca/hipertensión. Empezar dosis baja. NO conducir.
      </InfoBoxX>
    </div>
  );
}

function CATNIP() {
  const c = PLANTAS_COLORS;
  return (
    <div>
      <InfoBoxX c={c}>
        <strong>Catnip / Hierba gatera (Nepeta cataria)</strong> — labiada perenne aromática. Famosa por efecto eufórico en gatos (nepetalactona via olfato). En humanos: sedante leve, ligeramente psicoactivo en dosis altas (té concentrado o fumada). Cultivo trivial Barcelona — invasiva si descuidas.
      </InfoBoxX>

      <SectionTitleX c={c}>CONDICIONES IDEALES</SectionTitleX>
      <div style={{ display: "grid", gridTemplateColumns: "1fr 1fr", gap: "10px", marginBottom: "16px" }}>
        <StatBoxX c={c} label="Temperatura" value="5-30°C (rústica)" />
        <StatBoxX c={c} label="Humedad" value="30-70%" />
        <StatBoxX c={c} label="Luz" value="Sol o semisombra" />
        <StatBoxX c={c} label="Sustrato" value="Cualquiera" />
      </div>

      <SectionTitleX c={c}>PRECIOS ORIENTATIVOS</SectionTitleX>
      <InfoBoxX c={c}>
        🌰 Semillas: <strong>1-3€/sobre</strong> · 🌱 Planta: <strong>3-6€</strong>. Inversión: 5-10€.
      </InfoBoxX>

      <SectionTitleX c={c}>CULTIVO</SectionTitleX>
      <StepX c={c} num={1} text="Semillas: directo en suelo abril-mayo. Germinan 1-2 semanas. Espaciar 50cm (planta crece 60-80cm)." />
      <StepX c={c} num={2} text="Suelo cualquiera. Tolera sequía y suelo pobre. Sol pleno o semisombra." />
      <StepX c={c} num={3} text="Riego ocasional. Una vez establecida es independiente." />
      <StepX c={c} num={4} text="Floración mayo-octubre. Flores blanco-rosa pequeñas en espiga. Atrae polinizadores." />
      <StepX c={c} num={5} text="⚠️ Gatos vecinos te van a destrozar la planta. Proteger con jaula o cultivar interior." />
      <StepX c={c} num={6} text="Perenne hardy en Barcelona. Multiplicación por división rizoma o semilla autoresembrada." />

      <SectionTitleX c={c}>COSECHA</SectionTitleX>
      <StepX c={c} num={1} text="Hojas y tops florales: durante floración. 2-3 cosechas por temporada (planta rebrota)." />
      <StepX c={c} num={2} text="Secar sombra ventilada 5-7 días. Conservar frasco hermético." />

      <SectionTitleX c={c}>EXTRACCIÓN</SectionTitleX>
      <StepX c={c} num={1} text="Tintura alcohólica: 30-50g hojas secas en 200ml de alcohol 60%. Macerar en frasco oscuro 3-4 semanas agitando ocasionalmente." />
      <StepX c={c} num={2} text="Filtrar con gasa o filtro de café. La tintura de catnip extrae nepetalactona y flavonoides activos." />
      <InfoBoxX c={c}>📦 Resultado: tintura de aroma mentolado. Dosis humana: 2-4ml en agua. Para gatos: unas gotas en juguete. Conservar frasco oscuro hasta 2 años.</InfoBoxX>

      <SectionTitleX c={c}>USOS</SectionTitleX>
      <InfoBoxX c={c}>
        🍵 <strong>Infusión humana:</strong> 1-3 cucharaditas hojas secas por taza. Hervir 5-10 min. Sabor herbal mentolado. Sedante leve antes de dormir.<br/>
        🚬 <strong>Fumada (poco común):</strong> mezclada con tabaco/cannabis. Efecto cannabis-like débil reportado siglo XIX.<br/>
        🐈 <strong>Para gatos:</strong> hojas frescas o secas en juguetes. 30 min después se calman (efecto inverso al inicio).
      </InfoBoxX>

      <SectionTitleX c={c}>EFECTOS</SectionTitleX>
      <InfoBoxX c={c}>
        Humanos: sedación leve, somnolencia, calma digestiva (carminativa), antiespasmódico menstrual. Sin alucinaciones. Comparable a melisa o manzanilla algo más potente. Gatos: euforia, juego, rolling — efecto vía nepetalactona en órgano vomeronasal.
      </InfoBoxX>

      <SectionTitleX c={c}>CONSERVACIÓN</SectionTitleX>
      <InfoBoxX c={c}>
        🥄 <strong>Hojas secas:</strong> 1-2 años aroma intenso.<br/>
        🌱 <strong>Planta viva:</strong> perenne, autorenovación constante.
      </InfoBoxX>

      <SectionTitleX c={c}>HARM REDUCTION</SectionTitleX>
      <InfoBoxX c={c}>
        Tier verde. Sin contraindicaciones graves. Precaución embarazo (estimulante uterino leve), interacción con sedantes farmacéuticos. Para gatos: 30% no responden genéticamente, 70% sí — no problema en exceso (auto-regulan).
      </InfoBoxX>
    </div>
  );
}

function WILD_DAGGA() {
  const c = PLANTAS_COLORS;
  return (
    <div>
      <InfoBoxX c={c}>
        <strong>Wild Dagga / Lion's Tail (Leonotis leonurus)</strong> — labiada arbustiva africana. "Wild dagga" = "cannabis salvaje" en sudafricano (Khoikhoi). Compuestos: leonurina, marrubina. Efecto cannabis-like suave. Hermosa flor naranja tubular. Cultivable Barcelona — robusta hasta -5°C, en macetón mejor por movilidad.
      </InfoBoxX>

      <SectionTitleX c={c}>CONDICIONES IDEALES</SectionTitleX>
      <div style={{ display: "grid", gridTemplateColumns: "1fr 1fr", gap: "10px", marginBottom: "16px" }}>
        <StatBoxX c={c} label="Temperatura" value="10-35°C" />
        <StatBoxX c={c} label="Humedad" value="30-60%" />
        <StatBoxX c={c} label="Luz" value="Sol pleno" />
        <StatBoxX c={c} label="Sustrato" value="Drenado fértil" />
      </div>

      <SectionTitleX c={c}>PRECIOS ORIENTATIVOS</SectionTitleX>
      <InfoBoxX c={c}>
        🌰 Semillas: <strong>3-8€/sobre</strong> · 🌱 Esqueje enraizado: <strong>10-20€</strong>. Inversión: 20-40€.
      </InfoBoxX>

      <SectionTitleX c={c}>CULTIVO</SectionTitleX>
      <StepX c={c} num={1} text="Semillas: sembrar primavera, germinan 1-2 semanas a 22-28°C. Esquejes enraízan rápido en agua o sustrato húmedo (3-4 semanas)." />
      <StepX c={c} num={2} text="Sustrato bien drenado, ligeramente fértil. Sol pleno crítico (no flora en sombra)." />
      <StepX c={c} num={3} text="Maceta 20L+ recomendado en BCN para movilidad. Crece a 1-2m altura." />
      <StepX c={c} num={4} text="Riego moderado. Tolerar sequía moderada. Pinzar puntas para forzar ramificación." />
      <StepX c={c} num={5} text="Floración finales verano-otoño. Espigas con flores naranja vivo en verticilos — ESPECTACULAR." />
      <StepX c={c} num={6} text="Invierno BCN: si maceta, mover a cobijo (porche, garaje, ventana sur). Si suelo, mulch grueso. Aguanta hasta -5°C." />

      <SectionTitleX c={c}>COSECHA</SectionTitleX>
      <StepX c={c} num={1} text="Hojas y flores tubulares: durante floración (septiembre-noviembre BCN)." />
      <StepX c={c} num={2} text="Secar sombra 7-10 días. Conservar frasco hermético." />

      <SectionTitleX c={c}>EXTRACCIÓN</SectionTitleX>
      <StepX c={c} num={1} text="Tintura de leonurina: 50g hojas/flores secas en 250ml de alcohol 50-60°. Macerar en frasco oscuro 3 semanas agitando cada 2-3 días." />
      <StepX c={c} num={2} text="Filtrar con gasa. Embotellar en frasco oscuro. Dosis orientativa: 2-3ml en agua o sublingual. Dosis pequeña — empezar con 1ml." />
      <InfoBoxX c={c}>📦 Resultado: tintura de hojas y flores con leonurina. Efecto cannabis-like suave. Conservar frasco oscuro hasta 4-5 años.</InfoBoxX>

      <SectionTitleX c={c}>USOS</SectionTitleX>
      <InfoBoxX c={c}>
        🚬 <strong>Fumada (uso tradicional sudafricano):</strong> hojas/flores secas en pipa o joint, sola o mezclada con tabaco/cannabis. Efecto cannabis-like suave, sin "buzz" intenso.<br/>
        🍵 <strong>Infusión:</strong> 2-4g hojas secas por taza. Sabor amargo. Sedante leve.<br/>
        💧 <strong>Tintura:</strong> 50g en 250ml alcohol 50°. Macerar 3 semanas.
      </InfoBoxX>

      <SectionTitleX c={c}>EFECTOS</SectionTitleX>
      <InfoBoxX c={c}>
        Comienzo: 5-15 min (fumada) / 30-60 min (infusión). Duración: 1-3h. Sensaciones: relajación corporal, leve euforia, "buzz" suave cannabis-like, calma mental. NO alucinógeno.
      </InfoBoxX>

      <SectionTitleX c={c}>CONSERVACIÓN</SectionTitleX>
      <InfoBoxX c={c}>
        🥄 <strong>Hojas/flores secas:</strong> 1-2 años frasco hermético.<br/>
        💧 <strong>Tintura:</strong> 4-5 años.<br/>
        🌱 <strong>Planta viva:</strong> perenne con cobijo invierno BCN. 5-10 años de vida.
      </InfoBoxX>

      <SectionTitleX c={c}>HARM REDUCTION</SectionTitleX>
      <InfoBoxX c={c}>
        Tier verde. Sin contraindicaciones graves documentadas. Precaución embarazo. Interacción potencial con anticoagulantes (marrubina ligera anticoagulante). Sin riesgo adictivo.
      </InfoBoxX>
    </div>
  );
}

function TABACO_RUSTICO() {
  const c = PLANTAS_COLORS;
  return (
    <div>
      <InfoBoxX c={c}>
        <strong>Tabaco rústico (Nicotiana rustica)</strong> — solanácea anual con concentración de nicotina ×9 vs N. tabacum común (4-9% vs 0.5-1.5%). Tabaco shamánico amazónico ("mapacho") y ceremonial Plains americano (Crow Tobacco Society). NO para fumar casual — concentración tóxica fácil. Uso ritual con sopladores, ungüentos, rapé.
      </InfoBoxX>

      <SectionTitleX c={c}>CONDICIONES IDEALES</SectionTitleX>
      <div style={{ display: "grid", gridTemplateColumns: "1fr 1fr", gap: "10px", marginBottom: "16px" }}>
        <StatBoxX c={c} label="Temperatura" value="18-32°C" />
        <StatBoxX c={c} label="Humedad" value="50-70%" />
        <StatBoxX c={c} label="Luz" value="Sol pleno" />
        <StatBoxX c={c} label="Sustrato" value="Fértil drenado" />
      </div>

      <SectionTitleX c={c}>PRECIOS ORIENTATIVOS</SectionTitleX>
      <InfoBoxX c={c}>
        🌰 Semillas: <strong>2-5€/sobre</strong> (rústica más rara que tabacum, etnobotánica). Inversión: 10-20€.
      </InfoBoxX>

      <SectionTitleX c={c}>CULTIVO</SectionTitleX>
      <StepX c={c} num={1} text="Semillas DIMINUTAS — sembrar superficial mezcladas con arena fina. Germinan 1-2 semanas a 22-25°C en flat." />
      <StepX c={c} num={2} text="Trasplantar a maceta 5L cuando 4-5 hojas. Plantar definitivo a 70cm separación." />
      <StepX c={c} num={3} text="Sustrato rico en N pero drenado. Sol pleno. Riego abundante en crecimiento." />
      <StepX c={c} num={4} text="Crece 1-1.5m altura. Hojas 30-40cm grandes. Flores amarillo-verdoso." />
      <StepX c={c} num={5} text="Pinzar yema floral para concentrar nicotina en hojas (igual técnica que tabacum)." />
      <StepX c={c} num={6} text="USAR GUANTES al manejar — absorción transdérmica nicotina (envenenamiento del 'Green Tobacco Sickness' documentado en jornaleros)." />
      <StepX c={c} num={7} text="Anual en BCN. Suelo se agota — no replantar mismo lugar 2 años seguidos." />

      <SectionTitleX c={c}>COSECHA</SectionTitleX>
      <StepX c={c} num={1} text="Hojas inferiores madurando primero (color amarillento). Cosechar de abajo arriba progresivo." />
      <StepX c={c} num={2} text="Curado: colgar hojas en granero/garage seco ventilado. 3-6 semanas hasta secar y oscurecerse a marrón. Procesado tradicional incluye fermentación posterior — opcional." />
      <StepX c={c} num={3} text="Conservar hojas curadas en bolsa kraft seca. Use con moderación EXTREMA." />

      <SectionTitleX c={c}>EXTRACCIÓN</SectionTitleX>
      <StepX c={c} num={1} text="NO realizar extracción doméstica de nicotina. La nicotina concentrada es veneno de contacto — LD50 oral humano ~30-60mg (equivalente a muy poco polvo). Accidentes con nicotina líquida concentrada son documentados." />
      <StepX c={c} num={2} text="Uso externo insecticida (tradicional): decocción suave de hojas secas (10g en 1L agua, hervir 15 min, enfriar, filtrar). Pulverizar sobre plantas del huerto para control de plagas. NO ingerir, NO contacto piel prolongado." />
      <InfoBoxX c={c}>⚠️ Extracción de nicotina pura en casa es PELIGROSA. La decocción insecticida es el único uso doméstico seguro.</InfoBoxX>

      <SectionTitleX c={c}>USOS</SectionTitleX>
      <InfoBoxX c={c}>
        🌬️ <strong>Sopladores ceremoniales (uso amazónico):</strong> chamán sopla humo concentrado en pacientes — limpieza energética. Nunca el chamán traga humo profundo (=intoxicación).<br/>
        🌿 <strong>Rapé / Hapé:</strong> tabaco rústico molido + cenizas (Theobroma, etc.) — soplado en fosas nasales con kuripé/tepi. Efectos: claridad, purga emocional, conexión espiritual. 0.1-0.3g por dosis.<br/>
        🚬 <strong>Sahumerios apotropaicos:</strong> bouquet hojas secas como humo aromático.<br/>
        🪶 <strong>Tabaco ceremonial Plains (Crow Nation):</strong> mezclas con sweetgrass, sage, cedar para pipas ceremoniales.
      </InfoBoxX>

      <SectionTitleX c={c}>EFECTOS</SectionTitleX>
      <InfoBoxX c={c}>
        Nicotina concentrada — onset segundos vía inhalación, 2-3 min vía nasal. Estimulante intenso, lucidez focalizada, vértigo, náusea posible primera vez. Dosis altas: vómito, sudor, taquicardia. Sin alucinaciones. Tolerancia rápida pero NO usar para fumar diario — riesgo cardíaco e intoxicación letal nicotina (LD50 humano: ~30-60mg, tabaco rústico ~1g hojas secas). Adictivo.
      </InfoBoxX>

      <SectionTitleX c={c}>CONSERVACIÓN</SectionTitleX>
      <InfoBoxX c={c}>
        🥄 <strong>Hojas curadas:</strong> 5-10 años en lugar seco fresco.<br/>
        🌰 <strong>Semillas:</strong> 10+ años.
      </InfoBoxX>

      <SectionTitleX c={c}>HARM REDUCTION</SectionTitleX>
      <InfoBoxX c={c}>
        ⚠️ Nicotina concentración tóxica fácil. NO mascar hojas frescas. NO dosis altas inhaladas (intoxicación). Adictivo — usar SOLO ritual ocasional. Cardiopatía/hipertensión: contraindicado. Embarazo/lactancia: NO. Niños/mascotas: lejos absoluto. La belleza del tabaco rústico es su poder + uso ceremonial controlado, no como cigarrillo cotidiano.
      </InfoBoxX>
    </div>
  );
}

function CALAMO() {
  const c = PLANTAS_COLORS;
  return (
    <div>
      <InfoBoxX c={c}>
        <strong>Cálamo aromático (Acorus calamus)</strong> — acoraceae perenne acuática semi-emergente. Rizoma aromático con β-asarona. Uso milenario: amerindios algonquinos (raíz para "andar largas distancias"), védico, europeo medieval. Efectos: estimulante leve, ansiolítico, ligero psicoactivo en dosis altas. Cultivo viable BCN en estanque o macetón con sustrato siempre húmedo.
      </InfoBoxX>

      <SectionTitleX c={c}>CONDICIONES IDEALES</SectionTitleX>
      <div style={{ display: "grid", gridTemplateColumns: "1fr 1fr", gap: "10px", marginBottom: "16px" }}>
        <StatBoxX c={c} label="Temperatura" value="10-30°C" />
        <StatBoxX c={c} label="Humedad" value="80-100% sustrato" />
        <StatBoxX c={c} label="Luz" value="Sol pleno o parcial" />
        <StatBoxX c={c} label="Sustrato" value="Encharcado o pantanoso" />
      </div>

      <SectionTitleX c={c}>PRECIOS ORIENTATIVOS</SectionTitleX>
      <InfoBoxX c={c}>
        🌱 Rizoma: <strong>5-15€</strong> (centros plantas acuáticas) · 🌿 Raíz seca herboristería: <strong>5-15€/100g</strong>. Estanque/cubo 50L: 20-50€. Inversión: 30-80€.
      </InfoBoxX>

      <SectionTitleX c={c}>CULTIVO</SectionTitleX>
      <StepX c={c} num={1} text="Propagación por división rizoma — más fácil que semilla. Comprar trozo rizoma con 2-3 yemas." />
      <StepX c={c} num={2} text="Plantar horizontal en sustrato pesado (arcilla + barro), cubrir 2-3cm." />
      <StepX c={c} num={3} text="Mantener inundado o semi-inundado: borde de estanque, macetón con bandeja agua, kiddie pool 30L+. Agua 5-15cm sobre sustrato." />
      <StepX c={c} num={4} text="Sol pleno o parcial. Crece 60-100cm hojas largas tipo iris. Olor cítrico al frotar hojas." />
      <StepX c={c} num={5} text="Perenne en BCN. Hojas mueren invierno, rizoma persiste indefinido. Crece extensivo por rizoma — multiplicar cada 2-3 años." />
      <StepX c={c} num={6} text="Sin floración real en cultivo (espádice raro). Multiplica solo por rizoma." />

      <SectionTitleX c={c}>COSECHA</SectionTitleX>
      <StepX c={c} num={1} text="Rizoma año 2-3+. Otoño: extraer 50% del rizoma (replantar 50% para regeneración)." />
      <StepX c={c} num={2} text="Lavar bien (agua barrosa adherida). Pelar capa externa. Cortar trozos 1-2cm." />
      <StepX c={c} num={3} text="Secar al sol o estufa baja (40°C max) 2-3 semanas. Pierde 70% peso." />
      <StepX c={c} num={4} text="Conservar frasco hermético oscuro. Calidad disminuye con tiempo y humedad." />

      <SectionTitleX c={c}>EXTRACCIÓN</SectionTitleX>
      <StepX c={c} num={1} text="Tintura de rizoma: 50g rizoma seco triturado en 250ml alcohol 70°. Macerar en frasco oscuro 3-4 semanas agitando cada 2-3 días." />
      <StepX c={c} num={2} text="Filtrar con gasa fina. El alcohol extrae los aceites esenciales y β-asarona activa del rizoma." />
      <StepX c={c} num={3} text="Nota: variedades asiáticas tetraploides contienen más β-asarona que las europeas/americanas triploides. Si usas variedad asiática, reducir dosis." />
      <InfoBoxX c={c}>📦 Resultado: tintura de color ambarino con aroma cítrico-alcanforado. Dosis: 2-4ml en agua. Conservar frasco oscuro hasta 4-5 años.</InfoBoxX>

      <SectionTitleX c={c}>USOS</SectionTitleX>
      <InfoBoxX c={c}>
        🍵 <strong>Infusión:</strong> 2-5g rizoma seco machacado por taza. Hervir 10 min. 1 taza/día max. Sabor cítrico-amargo intenso.<br/>
        🌿 <strong>Mascado raíz fresca:</strong> tradición algonquina "para correr largas distancias sin cansar". 1cm trozo, mascar 5 min, escupir o tragar.<br/>
        💧 <strong>Tintura:</strong> 50g rizoma seco en 250ml alcohol 60°. Macerar 4 semanas.<br/>
        🪔 <strong>Aceite esencial / sahumerio:</strong> aromaterapia tradicional india (vacha en ayurveda).
      </InfoBoxX>

      <SectionTitleX c={c}>EFECTOS</SectionTitleX>
      <InfoBoxX c={c}>
        Comienzo: 30-60 min. Duración: 2-4h. Sensaciones: estimulante leve cuerpo, claridad mental, ansiolítico, supresor apetito. Dosis altas (5-10g): leve psicoactivo, ligera disociación, sueños vívidos. NO alucinógeno fuerte.
      </InfoBoxX>

      <SectionTitleX c={c}>CONSERVACIÓN</SectionTitleX>
      <InfoBoxX c={c}>
        🥄 <strong>Rizoma seco:</strong> 1-2 años (decae más rápido que otras hierbas). Frasco oscuro fresco.<br/>
        💧 <strong>Tintura:</strong> 4-5 años.<br/>
        🌱 <strong>Planta viva:</strong> perenne acuática 10+ años.
      </InfoBoxX>

      <SectionTitleX c={c}>HARM REDUCTION</SectionTitleX>
      <InfoBoxX c={c}>
        ⚠️ β-asarona considerada potencial carcinógena/genotóxica en estudios in vitro (FDA prohibe en alimentos USA, EU permite en pequeñas dosis). Variedad triploide europea (más usada herbario tradicional) tiene MENOS β-asarona que diploide asiática (uso ayurvédico). Comprar rizoma de variedades europeas/americanas. Embarazo: contraindicado. NO uso crónico — dosis ocasionales rituales.
      </InfoBoxX>
    </div>
  );
}

function VALERIANA() {
  const c = PLANTAS_COLORS;
  return (
    <div>
      <InfoBoxX c={c}>
        <strong>Valeriana (Valeriana officinalis)</strong> — valerianácea perenne europeo-asiática. Sedante clásico de la herbolaria europea — más potente que pasiflora. Compuestos: ácidos valerénicos, valepotriatos, GABAérgicos. Cultivo MUY fácil en Barcelona — robusta hasta -20°C. Tier verde.
      </InfoBoxX>

      <SectionTitleX c={c}>CONDICIONES IDEALES</SectionTitleX>
      <div style={{ display: "grid", gridTemplateColumns: "1fr 1fr", gap: "10px", marginBottom: "16px" }}>
        <StatBoxX c={c} label="Temperatura" value="0-30°C (rústica)" />
        <StatBoxX c={c} label="Humedad" value="50-80%" />
        <StatBoxX c={c} label="Luz" value="Sol o semisombra" />
        <StatBoxX c={c} label="Sustrato" value="Húmedo, fértil" />
      </div>

      <SectionTitleX c={c}>PRECIOS ORIENTATIVOS</SectionTitleX>
      <InfoBoxX c={c}>
        🌰 Semillas: <strong>2-5€/sobre</strong> · 🌱 Plantón: <strong>4-8€</strong> · 🌿 Raíz seca herboristería: <strong>5-15€/100g</strong>. Inversión: 10-20€.
      </InfoBoxX>

      <SectionTitleX c={c}>CULTIVO</SectionTitleX>
      <StepX c={c} num={1} text="Semillas: sembrar primavera u otoño. Germinan 2-3 semanas. Tasa irregular. Mejor por división rizoma o plantón." />
      <StepX c={c} num={2} text="Sustrato fértil, húmedo. NO le importa encharque ocasional (planta de pradera húmeda)." />
      <StepX c={c} num={3} text="Sol o semisombra. En BCN mejor semisombra para evitar marchitez verano." />
      <StepX c={c} num={4} text="Crece 1-1.5m altura. Flores rosadas-blancas grandes umbelas, fragancia dulce intenso (pero raíz huele a calcetines viejos)." />
      <StepX c={c} num={5} text="Riego regular. No tolera sequía prolongada." />
      <StepX c={c} num={6} text="Perenne. Multiplicación por división de mata cada 3 años." />

      <SectionTitleX c={c}>COSECHA</SectionTitleX>
      <StepX c={c} num={1} text="Raíz: año 2 otoño. Excavar mata, separar 70% rizoma para uso, replantar 30%." />
      <StepX c={c} num={2} text="Lavar muy bien (sustrato adherido entre raíces). Cortar en trozos." />
      <StepX c={c} num={3} text="Secar al aire ventilado 2-3 semanas — proceso fétido (olor calcetines), idealmente en garaje/exterior." />
      <StepX c={c} num={4} text="Almacenar frasco oscuro hermético." />

      <SectionTitleX c={c}>EXTRACCIÓN</SectionTitleX>
      <StepX c={c} num={1} text="Tintura de raíz: 50g raíz seca troceada en 250ml alcohol 60°. Macerar en frasco oscuro 4-6 semanas agitando cada 2-3 días. El olor es intensamente fétido — normal." />
      <StepX c={c} num={2} text="Filtrar con gasa. Embotellar en frasco oscuro. Dosis: 30-60 gotas (1.5-3ml) hasta 3x/día." />
      <StepX c={c} num={3} text="Decocción (más débil que tintura): 2-3g raíz seca hervida 15 min. Efecto más suave pero sin alcohol. Cápsulas de extracto seco disponibles en farmacia — opción comercial cómoda." />
      <InfoBoxX c={c}>📦 Resultado: tintura de olor potente con valereno activo. Más concentrada y duradera (4-5 años) que la decocción. Efecto sedante notable en dosis correcta.</InfoBoxX>

      <SectionTitleX c={c}>USOS</SectionTitleX>
      <InfoBoxX c={c}>
        🍵 <strong>Infusión:</strong> 1-3g raíz seca por taza. Hervir 10-15 min. 1-3 tazas/día. Sabor amargo-tierra desagradable (mejorar con menta o miel).<br/>
        💧 <strong>Tintura:</strong> 50g raíz seca en 250ml alcohol 60°. Macerar 3 semanas. 30-60 gotas hasta 3x/día.<br/>
        💊 <strong>Cápsulas:</strong> 300-600mg extracto antes de dormir. Disponible en farmacia.
      </InfoBoxX>

      <SectionTitleX c={c}>EFECTOS</SectionTitleX>
      <InfoBoxX c={c}>
        Comienzo: 30-60 min. Duración: 4-6h. Sensaciones: sedación notable, somnolencia, ansiolisis, relajación muscular. Algunas personas (5-10%) experimentan efecto paradójico estimulante — testear pequeña dosis primero. Sin alucinaciones. Útil insomnio crónico, ansiedad.
      </InfoBoxX>

      <SectionTitleX c={c}>CONSERVACIÓN</SectionTitleX>
      <InfoBoxX c={c}>
        🥄 <strong>Raíz seca:</strong> 1-2 años frasco hermético oscuro.<br/>
        💧 <strong>Tintura:</strong> 4-5 años.<br/>
        🌱 <strong>Planta viva:</strong> perenne 10+ años con divisiones periódicas.
      </InfoBoxX>

      <SectionTitleX c={c}>HARM REDUCTION</SectionTitleX>
      <InfoBoxX c={c}>
        Tier verde. Sin contraindicaciones graves. Precaución: embarazo, conducción tras dosis altas, suma con sedantes farmacéuticos (benzo, opiáceos, alcohol). 5-10% efecto paradójico — empezar dosis baja test. NO usar crónico permanente — descansos periódicos.
      </InfoBoxX>
    </div>
  );
}

function LOBELIA() {
  const c = PLANTAS_COLORS;
  return (
    <div>
      <InfoBoxX c={c}>
        <strong>Lobelia inflata (Indian Tobacco)</strong> — campanulácea anual norteamericana. Compuestos: lobelina, lobelinina (alkaloides nicotina-like — agonistas parciales receptores nicotínicos). Tradicional Cherokee y Iroquois para fumar y emética. Hierba "cesación tabaquismo" siglo XIX. Cultivo BCN viable. ⚠️ Margen estrecho activo/tóxico.
      </InfoBoxX>

      <SectionTitleX c={c}>CONDICIONES IDEALES</SectionTitleX>
      <div style={{ display: "grid", gridTemplateColumns: "1fr 1fr", gap: "10px", marginBottom: "16px" }}>
        <StatBoxX c={c} label="Temperatura" value="15-25°C" />
        <StatBoxX c={c} label="Humedad" value="50-70%" />
        <StatBoxX c={c} label="Luz" value="Semisombra" />
        <StatBoxX c={c} label="Sustrato" value="Húmedo, fértil" />
      </div>

      <SectionTitleX c={c}>PRECIOS ORIENTATIVOS</SectionTitleX>
      <InfoBoxX c={c}>
        🌰 Semillas: <strong>3-8€/sobre</strong> · 🌿 Hierba seca herboristería: <strong>5-15€/100g</strong>. Inversión: 10-20€.
      </InfoBoxX>

      <SectionTitleX c={c}>CULTIVO</SectionTitleX>
      <StepX c={c} num={1} text="Semillas DIMINUTAS — sembrar superficial mezcladas con arena, humedecer con spray. Germinan 2-3 semanas a 18-22°C." />
      <StepX c={c} num={2} text="Trasplantar a maceta cuando 4-5 hojas. Plantar definitivo a 30cm separación." />
      <StepX c={c} num={3} text="Sustrato húmedo fértil. Semisombra preferible (BCN sol fuerte verano la quema)." />
      <StepX c={c} num={4} text="Anual: crece 60-90cm altura. Flores azul-violeta tubulares, cápsulas hinchadas con muchas semillas." />
      <StepX c={c} num={5} text="Riego frecuente. No tolera sequía." />
      <StepX c={c} num={6} text="Cosechar antes de helada otoño. Autoresiembra ocasional." />

      <SectionTitleX c={c}>COSECHA</SectionTitleX>
      <StepX c={c} num={1} text="Partes aéreas: durante floración pleno (julio-septiembre)." />
      <StepX c={c} num={2} text="Secar sombra ventilada 5-10 días. Almacenar frasco hermético." />
      <StepX c={c} num={3} text="Semillas: 10x más concentradas. Cosechar cápsulas casi maduras." />

      <SectionTitleX c={c}>EXTRACCIÓN</SectionTitleX>
      <StepX c={c} num={1} text="Tintura: 30g hierba seca en 250ml alcohol 60°. Macerar en frasco oscuro 3-4 semanas. Filtrar con gasa." />
      <StepX c={c} num={2} text="Dosis MÁXIMA ABSOLUTA de tintura casera: 0.5ml (unas 10 gotas). Comenzar con 1-2 gotas para test de tolerancia. Margen activo/tóxico muy estrecho." />
      <InfoBoxX c={c}>⚠️ NO realizar extracto concentrado ni aislar lobelina pura en casa. La tintura diluida es la única preparación casera razonable. Dosis por encima de 0.5ml puede causar vómito, depresión respiratoria. Planta con toxicidad notable.</InfoBoxX>

      <SectionTitleX c={c}>USOS</SectionTitleX>
      <InfoBoxX c={c}>
        🚬 <strong>Fumada (uso Cherokee):</strong> hojas secas en pipa o mezcla. Efecto nicotina-like sin nicotina pura.<br/>
        🍵 <strong>Infusión emética/expectorante:</strong> 0.5-1g hierba seca (NO MÁS). Hervir 5 min. Tradicional siglo XIX para asma y tos productiva. Náusea común — emética a dosis altas.<br/>
        💧 <strong>Tintura:</strong> 30g hierba en 250ml alcohol 50°. Macerar 3 semanas. 5-15 gotas máximo (ojo dosis estrecha).
      </InfoBoxX>

      <SectionTitleX c={c}>EFECTOS</SectionTitleX>
      <InfoBoxX c={c}>
        Dosis baja (fumada/microdosis): estimulante leve nicotina-like sin nicotina, dilata bronquios, leve elevación mental. Dosis media: náusea, vómito (origen "vomitwort"). Dosis alta: depresión respiratoria, parálisis, riesgo letal — proximidad alcaloide a curare/cicuta peligroso. Margen muy estrecho.
      </InfoBoxX>

      <SectionTitleX c={c}>CONSERVACIÓN</SectionTitleX>
      <InfoBoxX c={c}>
        🥄 <strong>Hierba seca:</strong> 1-2 años frasco oscuro.<br/>
        💧 <strong>Tintura:</strong> 4-5 años.
      </InfoBoxX>

      <SectionTitleX c={c}>HARM REDUCTION</SectionTitleX>
      <InfoBoxX c={c}>
        ⚠️ Tier rojo-ámbar — margen estrecho. Empezar SIEMPRE microdosis (1-2 gotas tintura, no más). Evitar uso oral en cantidades >1g. Cardiopatía, hipertensión, embarazo: contraindicado. Náusea = señal parar. NO mezclar con nicotina (suma efectos receptor nicotínico). Históricamente usada para "vomitar enfermedad" — ese era su uso principal, no recreativo.
      </InfoBoxX>
    </div>
  );
}

function COLEUS() {
  const c = PLANTAS_COLORS;
  return (
    <div>
      <InfoBoxX c={c}>
        <strong>Coleus blumei / Plectranthus scutellarioides</strong> — labiada perenne tropical, ornamental común (hojas multicolores). Reportes de uso entre Mazatecos (México) como sustituto de Salvia divinorum. Salvinorin A no presente, pero compuestos similares (forskolin, etc.) reportan psicoactividad muy débil. Cultivo trivial — house plant común. Tier verde, efecto leve discutido.
      </InfoBoxX>

      <SectionTitleX c={c}>CONDICIONES IDEALES</SectionTitleX>
      <div style={{ display: "grid", gridTemplateColumns: "1fr 1fr", gap: "10px", marginBottom: "16px" }}>
        <StatBoxX c={c} label="Temperatura" value="18-28°C (>10°C)" />
        <StatBoxX c={c} label="Humedad" value="50-70%" />
        <StatBoxX c={c} label="Luz" value="Indirecta brillante" />
        <StatBoxX c={c} label="Sustrato" value="Universal drenado" />
      </div>

      <SectionTitleX c={c}>PRECIOS ORIENTATIVOS</SectionTitleX>
      <InfoBoxX c={c}>
        🌱 Planta: <strong>5-12€</strong> (cualquier garden center) · 🌰 Semillas mix: <strong>2-4€</strong>. Inversión: 5-15€. La más barata.
      </InfoBoxX>

      <SectionTitleX c={c}>CULTIVO</SectionTitleX>
      <StepX c={c} num={1} text="Esquejes ENRAÍZAN EN AGUA en 1-2 semanas — facilísimo. Cortar 10cm con 2-3 nudos, sumergir base en agua." />
      <StepX c={c} num={2} text="Trasplantar cuando raíces 3-5cm a maceta sustrato universal con perlita." />
      <StepX c={c} num={3} text="Indoor BCN preferible (no tolera <10°C). Ventana este/oeste con luz indirecta. Sol pleno quema hojas." />
      <StepX c={c} num={4} text="Riego cuando seca capa superior — no encharcar." />
      <StepX c={c} num={5} text="Pinzar yemas florales para mantener foliage colorido y compacto." />
      <StepX c={c} num={6} text="Outdoor primavera-verano BCN OK (sombra parcial). Indoor invierno." />

      <SectionTitleX c={c}>COSECHA</SectionTitleX>
      <StepX c={c} num={1} text="Hojas de cualquier estado planta. Quitar inferiores y puntas." />
      <StepX c={c} num={2} text="Frescas mejor que secas (compuestos volátiles). Si necesitas almacenar: secar rápido sombra." />

      <SectionTitleX c={c}>EXTRACCIÓN</SectionTitleX>
      <StepX c={c} num={1} text="Maceración alcohólica: 30-50g hojas frescas en 200ml alcohol 40-50°. Macerar 2-3 semanas en frasco oscuro." />
      <StepX c={c} num={2} text="Filtrar y embotellar. Dosis: 2-5ml. Los efectos reportados son muy débiles — más experimental que establecido científicamente. No esperar resultados consistentes." />
      <InfoBoxX c={c}>📦 Resultado: tintura de aroma herbal suave. La evidencia de psicoactividad de Coleus es débil y debatida — el efecto puede ser placebo parcial. Valor más botánico/cultural que farmacológico.</InfoBoxX>

      <SectionTitleX c={c}>USOS</SectionTitleX>
      <InfoBoxX c={c}>
        🌿 <strong>Hojas frescas masticadas:</strong> 30-50 hojas (tradición mazateca como sustituto Salvia). Mascar 10-15 min, no tragar saliva, finalmente escupir.<br/>
        🍵 <strong>Infusión:</strong> 10-20g hojas frescas. Sabor herbal suave.<br/>
        🌟 <strong>Decorativo:</strong> hojas hermosísimas multicolor (rojos, verdes, púrpuras, amarillos) — uso ornamental válido por sí solo.
      </InfoBoxX>

      <SectionTitleX c={c}>EFECTOS</SectionTitleX>
      <InfoBoxX c={c}>
        Reportes muy variables y subjetivos. Algunos: ligera sensación euforia + visuales sutiles, similar a Salvia muy diluida. Otros: nada. Comienzo 5-15 min, duración 30-60 min. Sin riesgo significativo a dosis usadas.
      </InfoBoxX>

      <SectionTitleX c={c}>CONSERVACIÓN</SectionTitleX>
      <InfoBoxX c={c}>
        🌱 <strong>Planta viva:</strong> perenne tropical indoor BCN. Multiplicación esquejes infinita.<br/>
        🍃 <strong>Hojas:</strong> usar frescas. Sin valor seco apreciable.
      </InfoBoxX>

      <SectionTitleX c={c}>HARM REDUCTION</SectionTitleX>
      <InfoBoxX c={c}>
        Tier verde. Sin riesgos documentados. Embarazo precaución por desconocimiento. Algunas variedades cultivar comerciales (foliage selection extrema) pueden tener menos compuestos activos.
      </InfoBoxX>
    </div>
  );
}

function SASAFRAS() {
  const c = PLANTAS_COLORS;
  return (
    <div>
      <InfoBoxX c={c}>
        <strong>Sasafrás (Sassafras albidum)</strong> — laurácea árbol mediano nativo este USA. Aceite raíz contiene safrol (~80%) — precursor para síntesis MDMA (fiscalizado UE). PLANTA legal cultivar y uso herbal/té tradicional. Aceite concentrado y safrol puro fiscalizados. Té de raíz tradicional Cherokee/colonial USA, base original "root beer". Cultivable BCN.
      </InfoBoxX>

      <SectionTitleX c={c}>CONDICIONES IDEALES</SectionTitleX>
      <div style={{ display: "grid", gridTemplateColumns: "1fr 1fr", gap: "10px", marginBottom: "16px" }}>
        <StatBoxX c={c} label="Temperatura" value="-15 a 30°C (hardy)" />
        <StatBoxX c={c} label="Humedad" value="40-70%" />
        <StatBoxX c={c} label="Luz" value="Sol o semisombra" />
        <StatBoxX c={c} label="Sustrato" value="Drenado, neutro/ácido" />
      </div>

      <SectionTitleX c={c}>PRECIOS ORIENTATIVOS</SectionTitleX>
      <InfoBoxX c={c}>
        🌰 Semillas: <strong>5-15€/10ud</strong> · 🌳 Plantón: <strong>20-50€</strong> · 🌿 Corteza raíz seca: <strong>10-25€/100g</strong>. Inversión: 30-80€.
      </InfoBoxX>

      <SectionTitleX c={c}>CULTIVO</SectionTitleX>
      <StepX c={c} num={1} text="Semillas: estratificación 4 meses frío húmedo. Sembrar otoño en lugar definitivo o flat. Germinación lenta primavera." />
      <StepX c={c} num={2} text="Plantón comercial es MUCHO más fácil — establecer en suelo definitivo otoño/primavera." />
      <StepX c={c} num={3} text="Suelo drenado, ligeramente ácido, fértil. Tolera muchos suelos. Sol o semisombra." />
      <StepX c={c} num={4} text="Crece 5-15m altura adulto. En BCN suelo: árbol mediano. Maceta grande: enano." />
      <StepX c={c} num={5} text="Hojas características 3-lobuladas (forma 'mitona'), color verde brillante, otoño espectacular naranja-rojo." />
      <StepX c={c} num={6} text="Cosechable a partir año 5+ para corteza raíz. Crecimiento lento." />

      <SectionTitleX c={c}>COSECHA</SectionTitleX>
      <StepX c={c} num={1} text="Corteza raíz: árbol bien establecido (5+ años). Excavar lateralmente para exponer raíces secundarias. Pelar corteza con cuchillo, dejar mayoría de raíz para regeneración." />
      <StepX c={c} num={2} text="Secar al aire 1-2 semanas. Cortar trozos pequeños. Almacenar frasco oscuro." />
      <StepX c={c} num={3} text="Hojas: secar también para mucílago tradicional gumbo creole." />

      <SectionTitleX c={c}>EXTRACCIÓN</SectionTitleX>
      <StepX c={c} num={1} text="Históricamente la corteza de raíz se destilaba al vapor para obtener aceite esencial rico en safrol (~80%). Esta práctica tiene relevancia solo documental." />
      <StepX c={c} num={2} text="Safrol es PRECURSOR REGULADO (DEA List I / UE Reglamento 273/2004). Su posesión concentrada o extracción intencionada para síntesis es un delito grave en España y toda la UE." />
      <InfoBoxX c={c}>⚠️ No realizar extracción de aceite esencial de sasafrás. El té de corteza es el único uso doméstico legal y seguro. La planta como árbol ornamental o el té ocasional no tienen implicaciones legales.</InfoBoxX>

      <SectionTitleX c={c}>USOS</SectionTitleX>
      <InfoBoxX c={c}>
        🍵 <strong>Té raíz tradicional Cherokee/colonial:</strong> 5-10g corteza seca por taza. Hervir 10 min. Sabor anís+canela+cítrico distintivo. Uso medicinal: depurativo primaveral, sangre, reumatismo.<br/>
        🍻 <strong>"Root beer" original:</strong> raíz sasafrás + zarzaparrilla + jengibre + miel + agua = bebida fermentada colonial USA. Predecesor refrescos modernos.<br/>
        🌿 <strong>Hojas (filé):</strong> deshidratadas trituradas para espesar gumbo cocina criolla Louisiana.
      </InfoBoxX>

      <SectionTitleX c={c}>EFECTOS</SectionTitleX>
      <InfoBoxX c={c}>
        Té tradicional: tonificante leve, ligero efecto eufórico, calidez digestiva. Sin "viaje" psicodélico (safrol vía oral en planta es muy diluido y metabolizado). Aceite esencial concentrado: hepatotóxico (carcinogénico en estudios FDA — restringido USA en alimentos). MDMA derivado de safrol no es psicoactividad de planta.
      </InfoBoxX>

      <SectionTitleX c={c}>CONSERVACIÓN</SectionTitleX>
      <InfoBoxX c={c}>
        🥄 <strong>Corteza raíz seca:</strong> 2-3 años frasco hermético oscuro.<br/>
        🌳 <strong>Árbol vivo:</strong> 50+ años. Inversión generacional.
      </InfoBoxX>

      <SectionTitleX c={c}>HARM REDUCTION</SectionTitleX>
      <InfoBoxX c={c}>
        ⚠️ Tier ámbar. Té tradicional ocasional: seguro y legal. Aceite esencial concentrado: NO usar internamente. NO destilar safrol — síntesis MDMA es delito grave UE (precursor fiscalizado). Embarazo/lactancia contraindicado (safrol cruza placenta). Niños: no recomendado uso prolongado. Uso ornamental y té tradicional ocasional = totalmente válido.
      </InfoBoxX>
    </div>
  );
}

function MORMON_TEA() {
  const c = PLANTAS_COLORS;
  return (
    <div>
      <InfoBoxX c={c}>
        <strong>Mormon tea / Té de los mormones (Ephedra nevadensis)</strong> — efedrácea arbusto desértico SW USA. Especie americana SIN efedrina propiamente (al contrario de E. sinica china, "ma huang"). Té tradicional pioneros mormones, indígenas SW. Pseudoefedrina trazas, polifenoles, taninos. Estimulante leve no como E. sinica. BCN sur seco viable.
      </InfoBoxX>

      <SectionTitleX c={c}>CONDICIONES IDEALES</SectionTitleX>
      <div style={{ display: "grid", gridTemplateColumns: "1fr 1fr", gap: "10px", marginBottom: "16px" }}>
        <StatBoxX c={c} label="Temperatura" value="-10 a 40°C (hardy)" />
        <StatBoxX c={c} label="Humedad" value="10-40% (desierto)" />
        <StatBoxX c={c} label="Luz" value="Sol pleno" />
        <StatBoxX c={c} label="Sustrato" value="Pobre arenoso seco" />
      </div>

      <SectionTitleX c={c}>PRECIOS ORIENTATIVOS</SectionTitleX>
      <InfoBoxX c={c}>
        🌰 Semillas: <strong>5-12€/sobre</strong> · 🌱 Plantón: <strong>15-30€</strong>. Inversión: 25-50€.
      </InfoBoxX>

      <SectionTitleX c={c}>CULTIVO</SectionTitleX>
      <StepX c={c} num={1} text="Semillas: estratificación 1-2 meses frío. Sembrar en arena gruesa primavera. Germinan 2-4 semanas." />
      <StepX c={c} num={2} text="Sustrato extremadamente drenado: arena + grava + 10% sustrato pobre. Encharcamiento la mata." />
      <StepX c={c} num={3} text="Sol pleno crítico. Tolera 40°C. Hardy hasta -10°C." />
      <StepX c={c} num={4} text="Riego MUY parco. En BCN basta lluvia natural. En verano seco: 1 riego al mes max." />
      <StepX c={c} num={5} text="Crece lento — arbusto 60-100cm altura tras 3-5 años. Tallos verdes articulados sin hojas verdaderas (fotosíntesis en tallos). Conos sexuales pequeños rojizos." />
      <StepX c={c} num={6} text="Perenne longeva. 30+ años fácil." />

      <SectionTitleX c={c}>COSECHA</SectionTitleX>
      <StepX c={c} num={1} text="Tallos verdes: durante toda temporada. Cortar puntas 10-15cm con tijera, dejar mata principal." />
      <StepX c={c} num={2} text="Secar sombra ventilada 1 semana. Almacenar frasco hermético." />

      <SectionTitleX c={c}>EXTRACCIÓN</SectionTitleX>
      <StepX c={c} num={1} text="Decocción simple: 5-10g tallos secos troceados en 500ml agua. Hervir 15-20 min. Colar. Beber 200-300ml." />
      <StepX c={c} num={2} text="El contenido de efedrina/pseudoefedrina en E. nevadensis americana es muy bajo (trazas). La decocción aporta polifenoles y taninos con efecto estimulante leve, no efedrina significativa como E. sinica china." />
      <InfoBoxX c={c}>📦 Resultado: té ambarino con efecto estimulante suave. Para concentrados o extractos de efedrina: regulado como precursor en UE. Usar solo la decocción tradicional.</InfoBoxX>

      <SectionTitleX c={c}>USOS</SectionTitleX>
      <InfoBoxX c={c}>
        🍵 <strong>Té tradicional pionero mormón:</strong> 3-5g tallos secos por taza. Hervir 10-15 min. Sabor herbal-amargo, color amarillento. 1-2 tazas/día.<br/>
        🌿 <strong>Indígenas SW (Hopi, Navajo):</strong> remedio para resfriado, alergias, congestión. Estimulante leve no abusivo.<br/>
        💧 <strong>Tintura:</strong> 50g tallos secos en 250ml alcohol 50°. Macerar 3 semanas.
      </InfoBoxX>

      <SectionTitleX c={c}>EFECTOS</SectionTitleX>
      <InfoBoxX c={c}>
        Comienzo: 30-45 min. Duración: 2-4h. Sensaciones: estimulante muy leve, descongestionante nasal, ligera elevación. NO comparable a efedrina pura ni a E. sinica china. Pseudoefedrina trazas. Adecuado para té digestivo o resfriado.
      </InfoBoxX>

      <SectionTitleX c={c}>CONSERVACIÓN</SectionTitleX>
      <InfoBoxX c={c}>
        🥄 <strong>Tallos secos:</strong> 2-3 años frasco oscuro.<br/>
        💧 <strong>Tintura:</strong> 4-5 años.<br/>
        🌱 <strong>Planta viva:</strong> longeva 30+ años.
      </InfoBoxX>

      <SectionTitleX c={c}>HARM REDUCTION</SectionTitleX>
      <InfoBoxX c={c}>
        Tier ámbar (planta legal, derivado farmacéutico fiscalizado). E. nevadensis americana es relativamente segura. NO confundir con E. sinica china — esa SÍ tiene efedrina pura (controlada UE en concentración alta). Cardiopatía, hipertensión, embarazo: precaución. Suma con cafeína (té+café = nervios). NO destilar/concentrar (precursor anfetaminas).
      </InfoBoxX>
    </div>
  );
}

function ESCOBA_CANARIA() {
  const c = PLANTAS_COLORS;
  return (
    <div>
      <InfoBoxX c={c}>
        <strong>Escoba canaria (Cytisus canariensis, antes Genista canariensis)</strong> — leguminosa arbustiva endémica Canarias. Flores amarillo brillante con citisina + esparteína (alcaloides quinolizidínicos). Uso etnobotánico: shamanes Yaqui (México) reportan flores fumadas — efecto "más pleasant and effective" según paper original. Citisina = parecido nicotina pero menos adictivo (usado farmacológicamente para cesación tabaco).
      </InfoBoxX>

      <SectionTitleX c={c}>CONDICIONES IDEALES</SectionTitleX>
      <div style={{ display: "grid", gridTemplateColumns: "1fr 1fr", gap: "10px", marginBottom: "16px" }}>
        <StatBoxX c={c} label="Temperatura" value="-5 a 35°C" />
        <StatBoxX c={c} label="Humedad" value="30-60%" />
        <StatBoxX c={c} label="Luz" value="Sol pleno" />
        <StatBoxX c={c} label="Sustrato" value="Drenado, ácido-neutro, pobre" />
      </div>

      <SectionTitleX c={c}>PRECIOS ORIENTATIVOS</SectionTitleX>
      <InfoBoxX c={c}>
        🌰 Semillas: <strong>3-8€/sobre</strong> · 🌱 Arbusto: <strong>12-25€</strong>. Inversión: 15-35€.
      </InfoBoxX>

      <SectionTitleX c={c}>CULTIVO</SectionTitleX>
      <StepX c={c} num={1} text="Semillas: nick + escaldar agua hirviendo (legumbre, semilla muy dura). Remojo 24h hasta hinchar. Germinan 2-4 semanas." />
      <StepX c={c} num={2} text="Sustrato drenado, no fértil (leguminosa fija N propio). Sol pleno." />
      <StepX c={c} num={3} text="Crece 2-3m altura. Floración primavera (mayo-junio) abundante amarillo brillante. Aroma dulce." />
      <StepX c={c} num={4} text="Riego ocasional una vez establecida. Tolera sequía." />
      <StepX c={c} num={5} text="BCN: outdoor permanente con cobijo invierno. Vive bien sur España." />
      <StepX c={c} num={6} text="Perenne. 10-20 años de vida. Pinzar primer año para forma." />

      <SectionTitleX c={c}>COSECHA</SectionTitleX>
      <StepX c={c} num={1} text="Flores frescas: durante floración (mayo-junio). Recoger amaneceres soleados (alcaloides máximos)." />
      <StepX c={c} num={2} text="Secar en frasco sellado 10 días para fermentación leve (reduce 'hardness' del humo según paper Gridelli 1969)." />
      <StepX c={c} num={3} text="Pasar luego a secado completo aire ventilado 1 semana. Almacenar frasco oscuro." />

      <SectionTitleX c={c}>EXTRACCIÓN</SectionTitleX>
      <StepX c={c} num={1} text="Tintura de citisina: 30g flores secas en 200ml alcohol 50°. Macerar 3 semanas en frasco oscuro. Filtrar." />
      <StepX c={c} num={2} text="Dosis EXTREMADAMENTE PEQUEÑA: la citisina es activa a nivel de microgramos-miligramos. Empezar con 0.5ml tintura como dosis de test. Dosis altas son tóxicas." />
      <InfoBoxX c={c}>⚠️ La citisina tiene margen terapéutico estrecho. No concentrar más allá de tintura estándar. Las flores fumadas administran dosis más controlables que la tintura concentrada.</InfoBoxX>

      <SectionTitleX c={c}>USOS</SectionTitleX>
      <InfoBoxX c={c}>
        🚬 <strong>Flores fumadas (uso Yaqui):</strong> 1-3g flores secas en pipa o joint. Mejor solas (mezcla con tabaco enmascara efecto).<br/>
        🍵 <strong>Infusión:</strong> 1-2g flores secas (NO MÁS — citisina tóxica dosis alta). Sabor floral amargo.<br/>
        🌸 <strong>Ornamental:</strong> arbusto espectacular en floración — uso jardín por sí solo válido.
      </InfoBoxX>

      <SectionTitleX c={c}>EFECTOS</SectionTitleX>
      <InfoBoxX c={c}>
        Comienzo: 5-10 min (fumada). Duración: 30-90 min. Sensaciones: estimulante leve, ligero buzz, claridad mental, posible visualidad sutil a dosis altas. Reportada como "más placentera" que escocesa o española. Náusea posible primera vez.
      </InfoBoxX>

      <SectionTitleX c={c}>CONSERVACIÓN</SectionTitleX>
      <InfoBoxX c={c}>
        🥄 <strong>Flores secas:</strong> 1-2 años frasco hermético.<br/>
        🌱 <strong>Arbusto vivo:</strong> 10-20 años, floración anual abundante.
      </InfoBoxX>

      <SectionTitleX c={c}>HARM REDUCTION</SectionTitleX>
      <InfoBoxX c={c}>
        ⚠️ Citisina TÓXICA dosis alta — NO ingerir más de 2g flores secas en infusión. Letalidad reportada en niños que comieron muchas semillas/vainas (=mantener lejos). Embarazo contraindicado (esparteína contractil uterina). Cardiopatía: precaución. Fumada moderada = más segura por dosis baja absorbida. NO mezclar con nicotina/cafeína altas.
      </InfoBoxX>
    </div>
  );
}

function CHICALOTE() {
  const c = PLANTAS_COLORS;
  return (
    <div>
      <InfoBoxX c={c}>
        <strong>Chicalote / Argemone mexicana</strong> — papaverácea anual mexicana. "Amapola espinosa" / "prickly poppy". Alcaloides isoquinolínicos: berberina, sanguinaria, alocriptopina. Sucedáneo opio MUY SUAVE en herbolaria mexicana popular (NO contiene opio pero efectos sedantes débiles). Cultivo trivial BCN. Útil para té sedante o ornamental.
      </InfoBoxX>

      <SectionTitleX c={c}>CONDICIONES IDEALES</SectionTitleX>
      <div style={{ display: "grid", gridTemplateColumns: "1fr 1fr", gap: "10px", marginBottom: "16px" }}>
        <StatBoxX c={c} label="Temperatura" value="15-35°C" />
        <StatBoxX c={c} label="Humedad" value="30-60%" />
        <StatBoxX c={c} label="Luz" value="Sol pleno" />
        <StatBoxX c={c} label="Sustrato" value="Pobre, drenado, seco" />
      </div>

      <SectionTitleX c={c}>PRECIOS ORIENTATIVOS</SectionTitleX>
      <InfoBoxX c={c}>
        🌰 Semillas: <strong>2-5€/sobre</strong> · gratis recolección descampados sur ES (a veces naturalizada). Inversión: 5-10€.
      </InfoBoxX>

      <SectionTitleX c={c}>CULTIVO</SectionTitleX>
      <StepX c={c} num={1} text="Semillas: directo en suelo definitivo abril-mayo. NO trasplanta bien (raíz pivotante)." />
      <StepX c={c} num={2} text="Sustrato pobre y seco. Sol pleno." />
      <StepX c={c} num={3} text="Crece 60-100cm altura. Tallos y hojas espinosas glauco-blancuzcas (cuidado al manejar)." />
      <StepX c={c} num={4} text="Riego escaso. Tolera sequía extrema." />
      <StepX c={c} num={5} text="Floración julio-octubre. Flores amarillo-naranja vivo, similares amapola. Cápsulas espinosas con muchas semillas negras (parecidas al opio pero NO son)." />
      <StepX c={c} num={6} text="Anual. Autoresiembra. USAR GUANTES por espinas." />

      <SectionTitleX c={c}>COSECHA</SectionTitleX>
      <StepX c={c} num={1} text="Hojas/flores: durante floración. Cortar partes aéreas en plenitud." />
      <StepX c={c} num={2} text="Secar sombra 5-7 días. Almacenar frasco." />
      <StepX c={c} num={3} text="Cápsulas: cosechar antes que abran, secar al sol. Semillas para resiembra o uso." />

      <SectionTitleX c={c}>EXTRACCIÓN</SectionTitleX>
      <StepX c={c} num={1} text="Extracción de látex (savia amarilla): hacer cortes superficiales en cápsulas verdes (como se hace con adormidera de opio). Sale una savia amarilla con sanguinarina y alcaloides isoquinolínicos activos." />
      <StepX c={c} num={2} text="Recoger la savia en placa de vidrio o cuchara. Dejar secar al aire hasta obtener residuo sólido resinoso de color marrón-naranja." />
      <InfoBoxX c={c}>📦 El látex seco es la forma más concentrada. Uso tradicional: tópico antiséptico. Para uso interno: precaución — sanguinarina es hepatotóxica en dosis altas. El látex seco se puede disolver en alcohol para tintura tópica.</InfoBoxX>

      <SectionTitleX c={c}>USOS</SectionTitleX>
      <InfoBoxX c={c}>
        🍵 <strong>Infusión tradicional:</strong> 2-4g hojas/flores secas por taza. Hervir 10 min. 1 taza/día max. Sabor amargo.<br/>
        💧 <strong>Tintura:</strong> 50g hierba seca en 250ml alcohol 60°. Macerar 3 semanas.<br/>
        🌿 <strong>Latex amarillo (savia):</strong> aplicación tópica heridas (antiséptico tradicional).
      </InfoBoxX>

      <SectionTitleX c={c}>EFECTOS</SectionTitleX>
      <InfoBoxX c={c}>
        Comienzo: 30-60 min. Duración: 2-4h. Sensaciones: sedación leve, ligera relajación, somnolencia. NO opiáceo, NO euforia. Comparable a manzanilla algo más fuerte. Útil tos seca, insomnio leve.
      </InfoBoxX>

      <SectionTitleX c={c}>CONSERVACIÓN</SectionTitleX>
      <InfoBoxX c={c}>
        🥄 <strong>Hojas/flores secas:</strong> 1-2 años frasco oscuro.<br/>
        💧 <strong>Tintura:</strong> 4-5 años.
      </InfoBoxX>

      <SectionTitleX c={c}>HARM REDUCTION</SectionTitleX>
      <InfoBoxX c={c}>
        Tier verde-amarillo. Berberina y sanguinaria a dosis altas son hepatotóxicas — NO uso prolongado. Embarazo contraindicado (uterotónico). Niños: no. Confundible con Papaver somniferum (opio real) por novatos — el chicalote tiene espinas obvias, opio NO.
      </InfoBoxX>
    </div>
  );
}

function KRATOM() {
  const c = PLANTAS_COLORS;
  return (
    <div>
      <InfoBoxX c={c}>
        <strong>Kratom (Mitragyna speciosa)</strong> — árbol tropical de la familia del café (Rubiaceae), originario de Tailandia, Malasia, Indonesia y Papúa Nueva Guinea. Sus hojas contienen mitragynina (alcaloide μ-opioide parcial) y 7-hidroximitragynina (metabolito 10-13x más potente). Efecto bifásico único: dosis bajas son estimulantes, dosis altas son opiáceas. Legal en España (no está en la lista de sustancias controladas). En la práctica, la mayoría de personas compran el polvo seco online en lugar de cultivarlo.
      </InfoBoxX>
      <SectionTitleX c={c}>POR QUÉ KRATOM</SectionTitleX>
      <InfoBoxX c={c}>
        • Efecto bifásico único: 1-5g = estimulante (energía, foco, sociabilidad, reducción fatiga) / 5-15g = opioide-like (analgesia potente, euforia, sedación){"  "}
        • Usado tradicionalmente por trabajadores del SE Asiático para aliviar fatiga en trabajo manual duro{"  "}
        • Investigado para reducción de daños en adicción a opioides (como sustituto autogestionado){"  "}
        • Legal en España: SÍ — pero la AESAN ha advertido sobre ventas como alimento{"  "}
        • Precio polvo online: €10-20 por 100g (práctico y accesible sin cultivar)
      </InfoBoxX>
      <SectionTitleX c={c}>CONDICIONES IDEALES</SectionTitleX>
      <div style={{ display: "grid", gridTemplateColumns: "1fr 1fr", gap: "10px", marginBottom: "16px" }}>
        <StatBoxX c={c} label="Temperatura" value="25-35°C constante" />
        <StatBoxX c={c} label="Humedad" value="70-90%" />
        <StatBoxX c={c} label="Luz" value="Sol indirecto intenso" />
        <StatBoxX c={c} label="Sustrato" value="Turboso, pH 5-6, drenado" />
        <StatBoxX c={c} label="Riego" value="Frecuente, sin encharcamiento" />
        <StatBoxX c={c} label="Tamaño adulto" value="3-7m en maceta grande" />
      </div>
      <SectionTitleX c={c}>VIABILIDAD EN ESPAÑA</SectionTitleX>
      <InfoBoxX c={c}>
        <strong>MUY DIFÍCIL.</strong> El Kratom es un árbol tropical grande que necesita condiciones constantes imposibles de mantener en exterior español salvo en invernadero climatizado dedicado. Las semillas son viables solo pocos días tras la cosecha (rarísimas en el mercado). Las esquejes son más fiables pero difíciles de encontrar. Para la gran mayoría: comprar el polvo seco en tiendas etnobotánicas online (Azarius, Shayanashop, Avalon) es enormemente más práctico que cultivar. Si decides cultivar: invernadero tropical mínimo, sustrato ácido (pH 5-6, turba + perlita), humedad alta constante, temperatura mínima nocturna 20°C.
      </InfoBoxX>
      <SectionTitleX c={c}>PRECIOS ORIENTATIVOS</SectionTitleX>
      <InfoBoxX c={c}>
        Polvo seco (uso más común): €10-20 por 100g / €25-50 por 250g. Cápsulas (dosis pre-pesadas): €15-30 por 50g equivalente. Semillas (muy raras): €5-15 por sobre, con germinación muy baja. Esquejes: €15-40 en tiendas especializadas. Extractos concentrados: €15-30 por 10g (equivale a ~50-100g polvo, usar con precaución extrema).
      </InfoBoxX>
      <SectionTitleX c={c}>CULTIVO (SI DECIDES INTENTARLO)</SectionTitleX>
      <StepX c={c} num={1} text="Conseguir esquejes de planta establecida (semillas no son viables si tienen más de pocos días)" why="Las semillas de Kratom pierden viabilidad germinativa en días tras la cosecha — raramente llegan viables por correo. El esqueje de planta sana es la única opción fiable para obtener planta." />
      <StepX c={c} num={2} text="Preparar sustrato: turba + perlita (60/40), pH ajustado a 5.5-6.0, maceta con buen drenaje" why="Kratom necesita sustrato ácido. pH fuera de rango reduce absorción de nutrientes. El drenaje previene la podredumbre radical, el mayor asesino de plántulas en casa." />
      <StepX c={c} num={3} text="Ambiente: invernadero climatizado a 25-32°C, humedad relativa >70% constante, luz indirecta brillante 12h+" why="Sin calor y humedad tropicales constantes el árbol detendrá el crecimiento, perderá hojas y morirá en invierno. No es viable en exterior español la mayor parte del año." />
      <StepX c={c} num={4} text="Riego frecuente pero sin encharcamiento — el substrato debe estar húmedo siempre, nunca seco" why="Árbol ripario (vive junto a ríos en su hábitat). Necesita humedad constante en raíces pero drenaje activo. El encharcamiento = hongos de raíz." />
      <StepX c={c} num={5} text="Fertilización con abono ligeramente ácido cada 2-3 semanas en temporada de crecimiento" why="Suelo ácido + tropical requiere nutrientes específicos. Abonos generales pueden elevar el pH y bloquear micronutrientes." />
      <SectionTitleX c={c}>COSECHA</SectionTitleX>
      <InfoBoxX c={c}>
        Hojas maduras: las más oscuras (verde intenso) tienen mayor contenido alcaloide. Cosechar individualmente tirando hacia abajo. Secar en sombra (no sol directo — degrada alcaloides) con buena ventilación, 3-5 días. Una vez secas y crujientes: pulverizar en molinillo de café. El polvo resultante se conserva en frasco hermético oscuro. Las hojas blancas, rojas o verdes (nomenclatura comercial) se refieren al color de la vena central y corresponden a efectos ligeramente distintos por proporción de alcaloides.
      </InfoBoxX>
      <SectionTitleX c={c}>PREPARACIÓN Y DOSIS</SectionTitleX>
      <InfoBoxX c={c}>
        <strong>Toss-and-wash:</strong> coger cucharadita de polvo en boca, tragar con agua. Rápido pero desagradable (sabor muy amargo). <strong>Té:</strong> calentar agua a 80°C (no hervir), añadir polvo, remover 15 min, colar. El limón ayuda a extraer alcaloides. <strong>Cápsulas:</strong> lo más cómodo, dosis exactas, sin sabor. <strong>Dosis:</strong> Umbral 1-2g. Estimulante 2-5g. Opioide-like 5-10g. Máximo recomendado 15g (más = náuseas y vómitos. Los extractos concentrados tienen equivalencias muy distintas — leer etiqueta con cuidado.
      </InfoBoxX>
      <SectionTitleX c={c}>EFECTOS</SectionTitleX>
      <InfoBoxX c={c}>
        <strong>1-5g (estimulante):</strong> energía mental y física aumentada, sociabilidad, foco, reducción de fatiga. Similar a cafeína fuerte pero con componente eufórico suave. Inicio 15-30 min, duración 2-4h. <strong>5-15g (opioide-like):</strong> analgesia intensa (válida para dolor crónico o agudo), euforia calida, sedación, relajación muscular profunda. Inicio 20-40 min, duración 4-6h. <strong>Efectos no deseados frecuentes:</strong> náuseas (especialmente sobre 7-8g, peor con estómago vacío), sudoración, estreñimiento con uso regular, mareo. El kratom "wobble" (visión oscilante, mareo) indica sobredosis — esperar sentado.
      </InfoBoxX>
      <SectionTitleX c={c}>CONSERVACIÓN</SectionTitleX>
      <InfoBoxX c={c}>
        Polvo en frasco hermético oscuro, lugar fresco y seco: 1-2 años con potencia conservada. Luz y humedad degradan los alcaloides. No refrigerar (condensación). Hojas secas enteras: hasta 2-3 años. Evitar plástico fino — usar vidrio o bolsa mylar con cierre. Etiquetar con fecha y cepa (variedad).
      </InfoBoxX>
      <SectionTitleX c={c}>HARM REDUCTION</SectionTitleX>
      <ErrorCardX c={c} error="Mezcla con opioides, benzodiacepinas o alcohol" consecuencia="Depresión respiratoria potencialmente fatal. El kratom actúa en los mismos receptores que la morfina y la heroína — la combinación puede detener la respiración durante el sueño sin que el usuario despierte." fix="NO combinar NUNCA con opioides (codeína, tramadol, morfina, heroína), benzodiacepinas (diazepam, alprazolam) ni alcohol. Esperar 24h tras cualquier opioide antes de tomar kratom." />
      <ErrorCardX c={c} error="Uso diario → dependencia física" consecuencia="Con uso diario durante semanas se desarrolla tolerancia y dependencia física. El síndrome de abstinencia (3-7 días) incluye insomnio, irritabilidad intensa, ansiedad, dolores musculares, moqueo, sudoración — similar a abstinencia de opioides leve." fix="Máximo 2-3 veces por semana. Usar dosis mínima efectiva. Hacer semanas de descanso cada mes. Si ya hay dependencia: reducción gradual de dosis (10-20% cada semana) en lugar de parada abrupta." />
      <ErrorCardX c={c} error="Hepatotoxicidad con uso crónico elevado" consecuencia="Casos documentados de daño hepático con uso diario de dosis altas durante meses. Síntomas: ictericia (piel amarilla), orina oscura, fatiga extrema, dolor abdominal derecho." fix="No superar 15g/día. Uso ocasional sin riesgo hepático documentado en personas sanas. Si hepatopatía previa: no usar. Contraindicado en embarazo." />
    </div>
  );
}

function IBOGA() {
  const c = PLANTAS_COLORS;
  return (
    <div>
      <InfoBoxX c={c}>
        <strong>Iboga (Tabernanthe iboga)</strong> — arbusto del sotobosque de la selva ecuatorial de África Central (Gabón, Camerún, RDC). Familia Apocynaceae. Su corteza de raíz contiene ibogaína (alcaloide tetracíclico de farmacología extremadamente compleja y multidiana) y otros alcaloides relacionados. Uso ancestral: ceremonia Bwiti (rito de paso, contacto con ancestros). Uso moderno investigado: tratamiento de adicción a opioides y estimulantes — una o dos sesiones pueden reducir drásticamente el craving. Riesgo crítico: prolongación del intervalo QT cardíaco → arritmia → muerte. Solo bajo supervisión médica en clínica certificada.
      </InfoBoxX>
      <SectionTitleX c={c}>POR QUÉ IBOGA</SectionTitleX>
      <InfoBoxX c={c}>
        • Tradición Bwiti (Gabón): rito de iniciación de 18-36h — contacto con ancestros, visión del propio nacimiento y muerte, sanación{"  "}
        • Uso experimental anti-adictivo: una sesión puede eliminar el síndrome de abstinencia de opioides y reducir el craving semanas o meses{"  "}
        • Farmacología única: antagonista NMDA (disociativo) + modulador opioide + inhibidor recaptación serotonina/dopamina{"  "}
        • Experiencia de 18-36h que usuarios describen como "10 años de terapia en una noche"{"  "}
        • Legalidad en España: la planta es legal como ornamental; la ibogaína per se no está en la lista nacional de sustancias controladas (2024) pero está sujeta a regulación sanitaria{"  "}
        • Para coleccionistas: especimen único de lento crecimiento, rarísimo en España
      </InfoBoxX>
      <SectionTitleX c={c}>CONDICIONES IDEALES</SectionTitleX>
      <div style={{ display: "grid", gridTemplateColumns: "1fr 1fr", gap: "10px", marginBottom: "16px" }}>
        <StatBoxX c={c} label="Temperatura" value="20-28°C constante" />
        <StatBoxX c={c} label="Humedad" value="75-85%" />
        <StatBoxX c={c} label="Luz" value="Sombra parcial 20-30%" />
        <StatBoxX c={c} label="Sustrato" value="Turboso ácido, pH 5.5-6.5" />
        <StatBoxX c={c} label="Riego" value="Moderado, drenaje excelente" />
        <StatBoxX c={c} label="Crecimiento" value="Extremadamente lento" />
      </div>
      <SectionTitleX c={c}>VIABILIDAD EN ESPAÑA</SectionTitleX>
      <InfoBoxX c={c}>
        <strong>DIFÍCIL — y el crecimiento es extremadamente lento.</strong> Arbusto del sotobosque tropical: necesita temperatura constante (sin bajar de 15°C nunca), humedad alta, luz filtrada. En España: solo viable en invernadero tropical o interior con iluminación artificial. El reto principal no es que muera — es que crece muy despacio: 3-5 años para alcanzar 30-50cm. La corteza de raíz (donde están los alcaloides) tarda una década+ en acumular cantidades significativas. Para la mayoría: cultivar como especimen coleccionista, no con fines de extracción. Las semillas pierden viabilidad en 1-2 semanas — casi imposible encontrarlas viables. Mejor opción: esqueje de planta establecida de coleccionista o tienda especializada.
      </InfoBoxX>
      <SectionTitleX c={c}>PRECIOS ORIENTATIVOS</SectionTitleX>
      <InfoBoxX c={c}>
        Semillas (rarísimas, baja germinación): €8-20 por sobre. Planta pequeña (5-15cm): €25-60 en tiendas etnobotánicas especializadas. Corteza de raíz seca (para colección, NO para uso sin supervisión médica): €15-40 por 10g en tiendas especializadas. Tratamiento con ibogaína en clínica certificada: €1.500-4.000 por sesión (España, Países Bajos, Portugal).
      </InfoBoxX>
      <SectionTitleX c={c}>CULTIVO</SectionTitleX>
      <StepX c={c} num={1} text="Conseguir esqueje de 10-15cm de planta sana, o semilla fresca (máximo 2 semanas tras cosecha)" why="Las semillas de Iboga pierden viabilidad muy rápido — si no germinan en 2 semanas, no germinarán. El esqueje es la opción más fiable para obtener planta viva." />
      <StepX c={c} num={2} text="Sustrato: turba de Sphagnum + perlita (70/30), pH 5.5-6.0, maceta pequeña con drenaje excelente" why="Iboga es arbusto del sotobosque tropical, acostumbrado a suelos forestales ácidos y ricos en materia orgánica. Sensible a encharcamiento — las raíces se pudren fácilmente." />
      <StepX c={c} num={3} text="Luz: sombra parcial. Nunca sol directo de mediodía. 4-6h de luz suave o luz artificial de espectro completo" why="Planta del sotobosque — en su hábitat crece bajo el dosel forestal. El sol directo intenso quema las hojas y estresa la planta." />
      <StepX c={c} num={4} text="Temperatura: 22-26°C día, mínimo 18°C noche. Nunca exponer a temperaturas bajo 15°C" why="Planta ecuatorial sin adaptación al frío. Una noche a 10°C puede dañar irreversiblemente una planta que tardó años en crecer." />
      <StepX c={c} num={5} text="Riego moderado: dejar secar ligeramente la capa superior entre riegos. Humidificador si humedad <60%" why="El error más común con Iboga es regar en exceso. El suelo húmedo constante pero no empapado es el objetivo. La humedad ambiental alta es esencial." />
      <StepX c={c} num={6} text="Paciencia total: crecimiento de milímetros por semana, especialmente al principio. No re-trasplantar frecuentemente" why="Iboga crece extremadamente despacio. Re-trasplantar demasiado frecuente daña las raíces frágiles y retrasa aún más el desarrollo." />
      <SectionTitleX c={c}>EFECTOS (SOLO CONTEXTO ETNOBOTÁNICO Y CLÍNICO)</SectionTitleX>
      <InfoBoxX c={c}>
        La experiencia con ibogaína dura 18-36 horas. Fase onírica (primeras 4-8h): visiones intensas, memorias de infancia y ancestrales, imágenes geométricas y escénicas con ojos cerrados. Fase introspectiva (horas 8-20): procesamiento emocional profundo, "conversaciones" con partes de uno mismo o figuras significativas. Fase de integración (últimas horas): agotamiento pero claridad mental. Los usuarios describen una lucidez sobre patrones vitales que pueden persistir semanas. Para adicción a opioides: reduce o elimina el síndrome de abstinencia físico y puede reducir drásticamente el craving durante semanas-meses. No es la cura definitiva — requiere trabajo de integración posterior.
      </InfoBoxX>
      <SectionTitleX c={c}>CONSERVACIÓN (ESPECIMEN COLECCIONISTA)</SectionTitleX>
      <InfoBoxX c={c}>
        Hojas y corteza de raíz secas en frasco hermético oscuro: 2-3 años. Secar a baja temperatura (40-50°C máximo) para preservar alcaloides. La planta viva no requiere más "conservación" que los cuidados descritos — es de muy larga vida si bien cuidada.
      </InfoBoxX>
      <SectionTitleX c={c}>HARM REDUCTION</SectionTitleX>
      <ErrorCardX c={c} error="Autoadministración de ibogaína" consecuencia="La ibogaína produce arritmias cardíacas potencialmente fatales al prolongar el intervalo QT del electrocardiograma. Casos de muerte documentados en autoadministraciones sin supervisión médica. El riesgo es real incluso en personas sin cardiopatía previa conocida." fix="La ibogaína SOLO debe administrarse en clínica certificada con: ECG previo, cardiólogo disponible, monitorización cardíaca continua durante las 24-36h, personal médico presente. Clínicas en España, Países Bajos (Awakn, ICEERS-validadas), Portugal." />
      <ErrorCardX c={c} error="Cardiopatía + ibogaína" consecuencia="Contraindicación ABSOLUTA. Personas con QTc >450ms, arritmias previas, insuficiencia cardíaca, o que toman medicamentos que alargan el QT (algunos antidepresivos, antibióticos, antiarrítmicos) tienen riesgo muy elevado de muerte súbita." fix="ECG obligatorio previo a cualquier sesión. Lista completa de medicamentos al médico. Si QTc >450ms: no candidato a ibogaína bajo ninguna circunstancia." />
      <ErrorCardX c={c} error="Ibogaína + opioides activos en sangre" consecuencia="Combinación peligrosa. Aunque la ibogaína se usa para tratar la adicción a opioides, la administración simultánea es de alto riesgo. La ibogaína modula los receptores opioides de forma compleja." fix="Protocolo estándar de clínicas: 12-24h de abstinencia de opioides antes de la sesión. El médico gestiona el síndrome de abstinencia puente si es necesario." />
    </div>
  );
}

function YOPO() {
  const c = PLANTAS_COLORS;
  return (
    <div>
      <InfoBoxX c={c}>
        <strong>Yopo (Anadenanthera peregrina) / Cebil (A. colubrina)</strong> — árbol leguminoso (familia Fabaceae) de América del Sur. A. peregrina: cuenca del Orinoco (Venezuela, Colombia), Caribe. A. colubrina: Andes bolivianos y argentinos. Sus semillas contienen bufotenina (5-OH-DMT, 5-10% del peso seco), trazas de DMT y 5-MeO-DMT, y beta-carbolinas. Uso tradicional: semillas tostadas y molidas, mezcladas con cal (calcio hidróxido) o cenizas, insufladas nasalmente en rituales chamánicos. Experiencia: 10-30 minutos, muy física e intensa. <strong>FÁCIL DE CULTIVAR</strong> comparado con Kratom o Iboga.
      </InfoBoxX>
      <SectionTitleX c={c}>POR QUÉ YOPO</SectionTitleX>
      <InfoBoxX c={c}>
        • Árbol leguminoso rústico y de crecimiento rápido — tolerante al clima mediterráneo (Canarias, SE España, interior cálido){"  "}
        • Semillas fácilmente disponibles en tiendas etnobotánicas (€10-25 por sobre){"  "}
        • Germinación muy fácil y rápida (5-14 días con escarificación mínima){"  "}
        • Un árbol adulto produce cientos de semillas por temporada{"  "}
        • Valor etnobotánico enorme: una de las plantas enteogénicas más antiguas documentadas en Suramérica (petroglifos y artefactos de inhalación de 4.000+ años){"  "}
        • Legalidad: la planta es completamente legal en España; la bufotenina es sustancia controlada en varios países (no en España per se como planta/semilla)
      </InfoBoxX>
      <SectionTitleX c={c}>CONDICIONES IDEALES</SectionTitleX>
      <div style={{ display: "grid", gridTemplateColumns: "1fr 1fr", gap: "10px", marginBottom: "16px" }}>
        <StatBoxX c={c} label="Temperatura" value="15-35°C (frost-sensible)" />
        <StatBoxX c={c} label="Humedad" value="30-70% (tolerante)" />
        <StatBoxX c={c} label="Luz" value="Sol pleno" />
        <StatBoxX c={c} label="Sustrato" value="Cualquiera bien drenado" />
        <StatBoxX c={c} label="Riego" value="Moderado, tolera sequía" />
        <StatBoxX c={c} label="Tamaño adulto" value="5-15m (en maceta: 2-4m)" />
      </div>
      <SectionTitleX c={c}>PRECIOS ORIENTATIVOS</SectionTitleX>
      <InfoBoxX c={c}>
        Semillas (sobre de 10-20 semillas): €10-25 en tiendas etnobotánicas. Planta pequeña (20-40cm): €15-35. Las semillas germinan con tasa muy alta — un sobre suele dar 8-15 plántulas vigorosas. No hay razón para comprar planta si tienes semillas.
      </InfoBoxX>
      <SectionTitleX c={c}>CULTIVO</SectionTitleX>
      <StepX c={c} num={1} text="Escarificación suave: frotar la semilla con papel de lija fino por ambas caras (5-10 seg) para rayar la testa dura" why="Las semillas de leguminosas tienen testa (cáscara exterior) muy dura que impide la absorción de agua. La escarificación leve permite que el agua entre y active la germinación. Sin esto, muchas semillas no germinan o tardan semanas." />
      <StepX c={c} num={2} text="Remojo en agua tibia 24h tras escarificación. Las semillas que floten desecharlas." why="El remojo hidrata el embrión y acelera la germinación. Las semillas que flotan suelen estar vacías o dañadas — tienen menor densidad que las sanas." />
      <StepX c={c} num={3} text="Plantar directamente a 1-2cm de profundidad en sustrato bien drenado (tierra + perlita 60/40), maceta pequeña, temperatura 22-28°C" why="Sustrato con buen drenaje evita la podredumbre radical en plántulas jóvenes. La temperatura cálida es crucial para la germinación — bajo 18°C el proceso se ralentiza mucho." />
      <StepX c={c} num={4} text="Germinación: 5-14 días. Mantener sustrato húmedo pero no encharcado hasta que aparezcan los primeros pares de hojas compuestas" why="Las plántulas de Anadenanthera son muy sensibles al encharcamiento en los primeros días. Una vez establecidas (15-20cm) son mucho más robustas." />
      <StepX c={c} num={5} text="Trasplantar a maceta más grande (20-30L) o al exterior cuando la planta tenga 30-40cm y sea temporada sin heladas" why="El Yopo crece rápido una vez establecido. Al exterior con pleno sol se desarrolla mucho más rápido que en interior. Sensible a las heladas — entrar a cubierto si <5°C previstos." />
      <StepX c={c} num={6} text="Fertilizar con abono general durante la temporada de crecimiento. Tolera periodos de sequía una vez establecido." why="Leguminosa fijadora de nitrógeno — menos dependiente de abonos nitrogenados que otras plantas. El abono potencia el crecimiento rápido inicial." />
      <SectionTitleX c={c}>COSECHA DE SEMILLAS</SectionTitleX>
      <InfoBoxX c={c}>
        Las vainas (pods) maduran a final de temporada — se vuelven marrones y se abren solas o se recogen antes de que se abran. Dentro: semillas planas y redondas de 1-2cm de diámetro, color marrón oscuro. Un árbol adulto puede producir decenas a cientos de vainas. Secar las semillas 1-2 semanas en lugar ventilado antes de almacenarlas. Almacenamiento en frasco hermético oscuro: 2-3 años manteniendo capacidad germinativa.
      </InfoBoxX>
      <SectionTitleX c={c}>USO TRADICIONAL (SOLO DOCUMENTACIÓN ETNOBOTÁNICA)</SectionTitleX>
      <InfoBoxX c={c}>
        El uso del Yopo es estrictamente chamánico en su contexto original. La preparación tradicional documentada por etnobotánicos: (1) Tostar las semillas en sartén seca a fuego medio hasta que se vuelvan marrones y empiecen a expandirse. (2) Moler en mortero hasta polvo muy fino. (3) Mezclar 50/50 en peso con cal viva (calcio hidróxido — venta en ferreterías como "cal apagada") o cenizas de corteza alcalina. La cal aumenta el pH de la mezcla, convirtiendo las sales de bufotenina en base libre más biodisponible. (4) La preparación resultante se insufla en pequeñísimas cantidades (0.3-0.5g total) mediante tubo de hueso o caña. En contexto tradicional: siempre administrado por el chamán, nunca autoadministrado.
      </InfoBoxX>
      <SectionTitleX c={c}>EFECTOS</SectionTitleX>
      <InfoBoxX c={c}>
        Muy distintos a psicodélicos "cómodos": los primeros 2-5 minutos son extremadamente físicos — taquicardia intensa, vasoconstricción, sensación de presión torácica, rubor, tensión muscular. Luego: visuals muy intensos (geométricos y de color), sensación de movimiento o vuelo, 10-30 minutos en total. No es una experiencia suave en ningún caso. En contexto tradicional: el malestar físico inicial es considerado parte del proceso de "purga" y limpieza. Usuarios contemporáneos lo describen invariablemente como intenso y difícil, incluso con dosis mínimas.
      </InfoBoxX>
      <SectionTitleX c={c}>CONSERVACIÓN</SectionTitleX>
      <InfoBoxX c={c}>
        Semillas secas en frasco hermético oscuro: 2-3 años. Para uso en preparación (tostadas y molidas): usar en el momento o conservar el polvo tostado en frasco hermético máximo 6 meses (el tostado degrada alcaloides con el tiempo).
      </InfoBoxX>
      <SectionTitleX c={c}>HARM REDUCTION</SectionTitleX>
      <ErrorCardX c={c} error="Cardiopatía o hipertensión + Yopo" consecuencia="La bufotenina produce vasoconstricción EXTREMA y taquicardia severa en los primeros minutos. Personas con cardiopatía, hipertensión, arritmias previas o ansiedad severa tienen riesgo real de evento cardiovascular." fix="CONTRAINDICACIÓN ABSOLUTA en cardiopatía, hipertensión no controlada, arritmias. No usar si tomas medicación cardiovascular. ECG recomendado antes del primer uso incluso en personas aparentemente sanas." />
      <ErrorCardX c={c} error="Expectativa de experiencia suave o recreativa" consecuencia="El Yopo NO tiene una versión suave. La intensidad cardiovascular y física es inevitable incluso con dosis muy bajas. Prepararse mentalmente para 5-10 minutos de incomodidad física intensa antes de la fase visual." fix="Set y setting chamánico: posición recostada, sitter presente, entorno silencioso y seguro. Nunca en solitario. Primera experiencia siempre con la dosis mínima posible (0.1-0.2g total polvo preparado)." />
      <ErrorCardX c={c} error="Dosis altas o metabolismo lento" consecuencia="Con dosis altas (>1g polvo preparado) los efectos cardiovasculares son peligrosos. Individuos con metabolismo lento de la bufotenina (variante genética CYP2D6 slow metabolizer) acumulan más bufotenina → efectos más intensos y prolongados." fix="Empezar siempre con la dosis más baja. No re-dosificar si el efecto tarda en llegar. El mecanismo es insuflado nasal — absorción rápida pero variable." />
    </div>
  );
}

function GLOSARIO_PLANTAS() {
  const c = PLANTAS_COLORS;
  const [query, setQuery] = React.useState("");
  const terminos = [
    { t: "Enteógeno", d: "Del griego: 'el dios adentro' (éntheos = divino + génos = generado). Término propuesto por Wasson, Hofmann y Schultes en 1978 para plantas/hongos usados en contexto espiritual o ritual: peyote, ayahuasca, Salvia, hongos. Preferido por etnobotánicos a 'alucinógeno' (que tiene connotación clínica negativa)." },
    { t: "Alucinógeno", d: "Sustancia que produce alucinaciones: percepciones sin estímulo externo. Término clínico/farmacológico genérico. Subgrupos: psicodélicos (LSD, psilocibina), disociativos (ketamina, Salvia), deliriantes (tropanos). Los psicodélicos producen distorsiones perceptuales que el sujeto sabe que no son reales; los deliriantes producen alucinaciones que el sujeto cree reales." },
    { t: "Psicodélico", d: "Del griego 'manifestador de la mente' (psyché + delos = manifiesto). Grupo específico dentro de alucinógenos: LSD, psilocibina, mescalina, DMT, LSA. Actúan principalmente en receptor de serotonina 5-HT2A. A diferencia de deliriantes, el usuario sabe que está bajo efecto. No producen amnesia." },
    { t: "IMAO / MAO", d: "MAO = Monoaminooxidasa: enzima que degrada monoaminas en el cuerpo (serotonina, dopamina, norepinefrina, DMT endógeno). IMAO = Inhibidor MAO: bloquea esta enzima → las monoaminas se acumulan. Ejemplo natural: Ruda siria (harmina, harmalina). CRÍTICO: combinación IMAO + SSRI = síndrome serotoninérgico (potencialmente letal). También potencia drasticamente cualquier triptamina oral (DMT, psilocibina)." },
    { t: "β-carbolinas / harmala", d: "Familia de alcaloides indólicos con acción IMAO reversible (RIMA). Las más conocidas: harmina y harmalina de Peganum harmala (Ruda siria) y tetrahydroharmina. También presentes en Passiflora en cantidades menores. Son los alcaloides que hacen activo el DMT oral en la ayahuasca." },
    { t: "Triptaminas", d: "Familia química basada en el núcleo indol con cadena etilenamino. Incluye serotonina (neurotransmisor), DMT (dimetiltriptamina), psilocina, bufotenina, 5-MeO-DMT. Las psicoactivas actúan en receptores 5-HT2A. El DMT endógeno presente en el cuerpo humano se degrada rápidamente por la MAO — por eso el DMT oral sin IMAO no produce efecto." },
    { t: "LSA (ergina)", d: "Ácido d-lisérgico amida — alcaloide ergolínico presente en semillas de Hawaiian Woodrose (Argyreia nervosa) y Morning Glory (Ipomoea violacea). Primo del LSD (ácido d-lisérgico dietilamida). Efectos similares a LSD pero más sedante y menos visual. 4-8h duración. Riesgo: náuseas intensas en primeras 1-2h + vasoconstricción. Semillas deben ser untreated (sin fungicidas comerciales)." },
    { t: "Kavalactonas", d: "Principios activos del Kava (Piper methysticum). 6 kavalactonas principales: kavaina, dihidrokavaina, metisticina, dihidrometisticina, yangonina, desmetoxiyangonina. Actúan en receptores GABA-A, bloquean canales de sodio y calcio. Producen relajación muscular, ansiolisis, euforia suave sin sedación central. Hepatotóxicas con variedades tudei o uso excesivo." },
    { t: "Mesembrina", d: "Alcaloide activo principal de Kanna (Sceletium tortuosum). Inhibidor de la PDE4 (fosfodiesterasa 4) + inhibidor de la recaptación de serotonina (SSRI suave). PDE4: enzima que degrada AMPc (segundo mensajero del bienestar). La inhibición PDE4 produce efecto antidepresivo + ansiolítico + mejora cognitiva. NO combinar con SSRI farmacológicos (riesgo síndrome serotoninérgico)." },
    { t: "Salvinorina A", d: "Terpenoide (no alcaloide) de Salvia divinorum. Primer κ-opioide no nitrogenado natural potente descubierto. Actúa en receptor kappa-opioide (κ-OR) — distinto del μ-OR del opio. Produce disociación intensa, 5-15 min. Anti-adictivo paradójico (κ-OR da propiedades anti-recompensa). Sin potencial de dependencia conocido." },
    { t: "Receptor κ-opioide (κ-OR)", d: "Receptor opioide kappa. Diferente del μ-OR (que media analgesia y euforia del opio). κ-OR: produce disforia, sedación, alucinaciones, miosis. Salvinorina A es agonista κ selectivo. Algunos antidepresivos investigados como antagonistas κ. Explica por qué Salvia es tan diferente de otras sustancias psicoactivas." },
    { t: "Alcaloide", d: "Compuesto orgánico nitrogenado de origen vegetal (o fúngico). Mayoría de psicoactivos vegetales son alcaloides: cafeína, nicotina, morfina, cocaína, coniina (cicuta), atropina, harmina, etc. Las plantas los producen como defensa contra herbívoros. Suelen tener sabor amargo." },
    { t: "Lobelina", d: "Alcaloide de Lobelia inflata. Agonista parcial de receptores nicotínicos de acetilcolina (nAChR) — mismo receptor que la nicotina pero con menor afinidad. Produce efectos similares a nicotina en dosis bajas (estimulante suave), eméticos y tóxicos en dosis altas. Investigada como sustituto para deshabituación tabáquica. Tier Rojo en dosis altas." },
    { t: "Asarona (β-asarona)", d: "Fenilpropanoide de Acorus calamus (Cálamo) — especialmente variedades asiáticas tetraploides. Posiblemente genotóxica/carcinogénica en estudios animales crónicos. Las variedades americanas triploides contienen apenas trazas. UE: nivel máximo de β-asarona en alimentos regulado a 0.1mg/kg (Reglamento 1334/2008)." },
    { t: "Set y Setting", d: "Concepto popularizado por Timothy Leary. 'Set' = mindset (estado mental, expectativas, intenciones, experiencias previas) del usuario. 'Setting' = entorno físico y social. Determinan en gran medida la experiencia con cualquier psicoactivo. Misma dosis de psilocibina: set/setting positivo = experiencia sanadora; set/setting negativo = psicosis transitoria." },
    { t: "Margen terapéutico", d: "Diferencia entre dosis efectiva mínima y dosis tóxica mínima. Amplio (aspirina): bastante segura. Estrecho (digoxina, colchicina, acónito): peligroso. Para plantas, el margen cambia por variabilidad entre plantas, partes, estaciones y preparaciones. Por eso los médicos usan formas purificadas y dosificadas, no extractos crudos." },
    { t: "Tintura madre", d: "Extracción alcohólica de planta fresca o seca en proporción 1:5 o 1:10 (planta:alcohol). Alcohol al 60-70% para mayoría de plantas. Maceración 4-6 semanas. Se filtra y embotella. Más concentrada que infusión, más estable (años). Dosis habitual: 1-3ml sublingual 3x/día o según planta." },
    { t: "Poliploidía (en botánica)", d: "Organismo con más de 2 copias de su genoma (diploides). Triploides: 3 copias (sandía sin pepitas). Tetraploides: 4 copias. Inducida con colchicina en mejora vegetal. Las plantas poliploides suelen ser más grandes, vigorosas y pueden tener mayor contenido de metabolitos secundarios (incluyendo alcaloides)." },
    { t: "Extracción ácido-base (A/B)", d: "Técnica básica de laboratorio para alcaloides: (1) Material + base (NaOH) → libera base libre del alcaloide. (2) Extracción con solvente no polar (nafta, DCM, éter). (3) Solvente + ácido → alcaloide pasa a fase acuosa como sal. (4) Base → precipita alcaloide libre. (5) Re-extracción o secado. Usada para DMT, harmina, mescalina." },
    { t: "Kratom (breve)", d: "Mitragyna speciosa — árbol del SE Asiático (familia del café). Activo: mitragynina (agonista μ-opioide parcial a dosis altas). Dosis bajas: estimulante. Dosis altas: opioide-like (analgesia, euforia, sedación). No está en esta guía actualmente — legal en España. Dependencia física posible con uso regular." },
    { t: "Nepetalactona", d: "Iridoide terpénico de Catnip (Nepeta cataria). Activa el órgano vomeronasal (de Jacobson) en gatos — respuesta eufórica intensa. En humanos: efecto sedante y ligeramente psicoactivo vía infusión. La nepetalactona se evapora rápidamente — las hojas secas frescas son más potentes para gatos que las añejas." },
    { t: "Leonurina", d: "Alcaloide de Wild Dagga (Leonotis leonurus). Produce efecto cannabis-like suave mediante mecanismo diferente al THC — actúa parcialmente en receptores opioides y sobre el sistema GABAérgico. Sin potencia del cannabis ni dependencia. Las flores concentran más leonurina que las hojas." },
    { t: "Harmina / Harmalina", d: "β-carbolinas de Ruda siria (Peganum harmala) — nota: distinto de la entrada general 'β-carbolinas'. La harmina es el IMAO reversible más potente de las dos, fluorescente bajo UV (azul). La harmalina es más sedante y produce más náusea. Tetrahidroharmina (THH) tiene acción más suave. Las tres juntas inhiben MAO-A con duración 4-6h — la ventana de riesgo de interacciones." },
    { t: "Eschscholtzina", d: "Alcaloide isoquinolínico de Adormidera de California (Eschscholzia californica). Ansiolítico suave con mecanismo GABAérgico. A diferencia de los alcaloides del opio real (morfina, codeína), la eschscholtzina NO activa receptores μ-opioides — no adictiva, no produce depresión respiratoria. Junto con californidina explica el efecto sedante leve sin riesgo opioide." },
    { t: "Citisina", d: "Alcaloide quinolizidínico de Escoba canaria (Cytisus canariensis) y otras leguminosas. Agonista parcial de los receptores nicotínicos de acetilcolina (nAChR), con mayor afinidad que la nicotina pero menor actividad intrínseca. Menos adictiva que nicotina. Base farmacológica del fármaco Champix (vareniclina) para cesación tabáquica — la citisina natural fue el modelo. Tóxica en dosis altas." },
    { t: "Safrol", d: "Fenilpropanoide de aceite esencial de corteza raíz de Sassafras albidum (~80% del aceite). Precursor clave para síntesis de MDMA y otros feniletilaminas. Clasificado en List I DEA (USA) y Reglamento 273/2004 (UE) como precursor de drogas. La planta y el té de raíz son legales; el aceite esencial concentrado y el safrol puro son productos regulados. En la planta viva está muy diluido y se metaboliza en hepatocitos." },
    { t: "Efedra / Efedrina", d: "Alcaloide simpaticomimético de Ephedra spp. (Mormon Tea y especialmente Ephedra sinica china 'Ma Huang'). Agonista indirecto de receptores adrenérgicos — libera norepinefrina y dopamina. Estimulante cardiovascular, broncodilatador, supresor apetito. E. nevadensis americana tiene trazas mínimas; E. sinica china tiene 0.5-3% efedrina. Regulada en UE como precursor de anfetaminas en concentraciones altas." },
    { t: "Lactucarium", d: "Resina seca de Lactuca virosa (Wild Lettuce / Lechuga silvestre). Alias 'opio lechuga' por su aspecto y uso histórico como sustituto del opio en el siglo XIX. Contiene lactucina, lactucopicrina y flavonoides sedantes — NO contiene alcaloides opiáceos. Acción: analgésica y sedante leve vía receptores no opioides. Forma: látex blanco-amarillento que se seca en resina marrón oscura." },
    { t: "L-DOPA natural", d: "Precursor directo de dopamina presente en semillas de Mucuna pruriens (4-7% del peso seco). La L-DOPA cruza la barrera hematoencefálica y se convierte en dopamina en el cerebro. Antiparkinsoniano natural — estudiado en ensayos clínicos para Parkinson no tratado en Africa subsahariana. En personas sanas: mejora motivación, libido, función motora, estado de ánimo. Efecto más suave que los medicamentos de L-DOPA farmacéuticos pero con matriz natural." },
    { t: "Sanguinarina", d: "Alcaloide benzofenantridínico de Chicalote (Argemone mexicana) y otras papaveráceas. Antimicrobiano y antiinflamatorio a dosis bajas — usado en pastas dentales y colutorios comerciales. En dosis altas: bloqueante de la ATP-sintasa, hepatotóxico, citotóxico. Tier Ámbar — uso tópico ocasional seguro, uso interno en dosis altas NO recomendado. Solucionario en alcohol para uso externo antiséptico." },
    { t: "Pasiflora flavonoides", d: "Crisina, orientina e isovitexina — los flavonoides activos de Passiflora incarnata. Mecanismo: moduladores positivos alostéricos del receptor GABA-A (mismo receptor que benzodiacepinas, pero con menor potencia y sin dependencia). La crisina también inhibe la aromatasa (enzima de conversión testosterona-estrógeno). Los flavonoides explican el efecto ansiolítico de pasiflora sin necesitar alcaloides." },
    { t: "Valereno", d: "Sesquiterpeno principal de la raíz de Valeriana officinalis. Principal responsable del efecto sedante — modula el receptor GABA-A directamente e inhibe la degradación del GABA. El ácido valerénico (derivado oxidado) potencia adicionalmente la acción GABAérgica. El olor característico a 'calcetines' de la raíz seca viene principalmente de los ácidos isovaléricos, no del valereno." },
    { t: "Lúpulina", d: "Resina glandular amarilla del interior de los conos de lúpulo (Humulus lupulus). Contiene ácidos alfa (humulonas) y beta (lupulonas) + 2-metil-3-buten-2-ol (sedante metabólico del ácido 2-metilbutírico). El 2-metil-3-buten-2-ol se forma por degradación de los ácidos alfas durante el procesado/almacenamiento — explica por qué el lúpulo añejo tiene más efecto sedante. La lúpulina se separa fácilmente frotando conos secos." },
    { t: "Ácido gamma-aminobutírico (GABA)", d: "Principal neurotransmisor inhibitorio del sistema nervioso central. Actúa sobre receptores GABA-A (ionotrópico, canal cloro) y GABA-B (metabotrópico). Muchos sedantes vegetales actúan en el receptor GABA-A: kava (kavalactonas), pasiflora (flavonoides), valeriana (valereno), lúpulo (2-metil-3-buten-2-ol), adormidera California (eschscholtzina). Las benzodiacepinas farmacéuticas también actúan en GABA-A, con mayor potencia y riesgo de dependencia." },
    { t: "Sitter", d: "Persona sobria presente durante una experiencia psicoactiva intensa para garantizar seguridad física y emocional. Rol: no participar, no interrumpir salvo necesidad, mantener entorno seguro, orientar si la persona se angustia, llamar servicios de emergencia si hay problema médico. Imprescindible con Salvia divinorum primera vez, dosis altas de psicodélicos, cualquier deliriante. Tradición chamánica universal — el curandero es el sitter en rituales tradicionales." },
    { t: "Extracción ácida", d: "Primera fase de una extracción ácido-base (A/B) de alcaloides. El material vegetal se suspende en agua acidificada (pH 4-5 con ácido cítrico, acético o HCl diluido). A pH ácido los alcaloides están en forma protonada (salt form = soluble en agua). La fase acuosa ácida retiene los alcaloides mientras las grasas, clorofilas y compuestos no básicos quedan en el material vegetal o en el solvente apolar." },
    { t: "Solvente apolar", d: "Líquido orgánico no miscible con agua que extrae compuestos no polares (alcaloides en base libre, grasas, ceras). Ejemplos: naphtha (nafta ligera), éter dietílico, DCM (diclorometano), acetato de etilo. En extracción A/B: añadir al final cuando la fase acuosa está alcalinizada (base libre del alcaloide) para extraer el alcaloide a la fase orgánica. Evaporar el solvente deja el alcaloide base libre. Seguridad: inflamables (excepto DCM), usar con ventilación." },
    { t: "Dosis umbral", d: "Dosis mínima a la que un efecto es perceptible, también llamada 'dosis de umbral' o threshold dose. Varía enormemente entre personas (metabolismo, tolerancia, sensibilidad genética) y entre lotes de planta (variabilidad de contenido). Regla de harm reduction: empezar con dosis umbral o menor en primera experiencia. Para LSA: 2-3 semillas de woodrose. Para Salvia: 50-100mg hojas. Para Kava: 5g raíz." },
    { t: "Vía de administración", d: "Ruta de entrada de una sustancia al organismo. Afecta onset (inicio), duración, intensidad y biodisponibilidad. Oral (ingerida): onset 30-90 min, duración máxima, metabolismo hepático primer paso. Sublingual: onset 5-15 min, evita primer paso. Fumada/inhalada: onset segundos-minutos, duración corta. Insufladda (snortada): onset 5-10 min, irritación nasal. Transdérmica (piel, mucosas): variable, uso histórico tropanos. Rectal: absorción rápida, omite primer paso." },
    { t: "Mitragynina", d: "Activo principal de Kratom (Mitragyna speciosa). Alcaloide oxindólico. A dosis bajas actúa como estimulante adrenérgico; a dosis altas como agonista parcial del receptor μ-opioide (mismo receptor de morfina y heroína). Potencia opiácea baja-media (aproximadamente 20 veces menos potente que morfina). 7-hidroximitragynina (metabolito menor presente en las hojas) es ~13x más potente que la mitragynina misma. La biphasicidad de efectos (estimulante a dosis bajas vs. opiáceo a dosis altas) es única entre plantas psicoactivas." },
    { t: "Ibogaína", d: "Alcaloide principal de Tabernanthe iboga. Estructura química única: indolalcaloide tetracíclico. Farmacología compleja multidiana: antagonista NMDA (produce disociación similar a ketamina), agonista sigma-2, modula receptores opioides μ y κ, inhibe recaptación de serotonina y dopamina. Efectos durante 18-36 horas. Actividad anti-adictiva documentada: una sola sesión supervisada puede reducir drásticamente el craving de opioides, cocaína y alcohol. Riesgo crítico: prolongación del intervalo QT → arritmia ventricular (torsades de pointes) → muerte súbita. Contraindicada en personas con cardiopatía. Solo bajo supervisión médica en clínica certificada con monitorización cardíaca continua." },
    { t: "Bufotenina (5-OH-DMT)", d: "Alcaloide triptamínico presente en semillas de Anadenanthera peregrina (Yopo) y A. colubrina (Cebil). Estructuralmente similar al DMT pero con grupo hidroxilo en posición 5 que la hace más polar y con mayor afinidad por ciertos receptores (especialmente 5-HT2A y receptores sigma). Efectos muy físicos: vasoconstricción severa y taquicardia intensa en los primeros minutos. Clasificada como sustancia controlada en varios países (no en España per se como planta/semilla). Históricamente confundida con DMT puro en reportes tempranos. En semillas de Yopo: 5-10% del peso seco de las semillas." },
    { t: "Dependencia física vs psicológica", d: "La dependencia física implica adaptaciones neurológicas que producen síntomas físicos mensurables al cesar el consumo (sudoración, temblores, taquicardia, dolor muscular, diarrea — síndrome de abstinencia). La psicológica implica craving/deseo intenso sin síntomas físicos objetivos. Kratom puede producir dependencia física con uso diario durante semanas. Psicodélicos clásicos (setas, LSD, mescalina): no producen dependencia física y la psicológica es mínima. Cannabis: dependencia psicológica moderada, físicamente muy leve. Alcohol y opiáceos farmacéuticos: dependencia física severa con abstinencia potencialmente peligrosa (el alcohol puede producir convulsiones fatales al retirar bruscamente)." },
    { t: "Síndrome de abstinencia a kratom", d: "Síntomas que aparecen al cesar el uso diario de kratom después de haber establecido dependencia física. Similares a abstinencia de opiáceos leve: insomnio intenso (el más persistente), irritabilidad extrema y ansiedad, dolores musculares difusos, rhinorrea (moqueo nasal), sudoración, bostezos frecuentes. Duración típica: 3-7 días, con pico en días 2-3 y resolución gradual. Menos grave que abstinencia de heroína/morfina farmacéutica pero incómodo. Prevención: no usar kratom más de 3-4 veces por semana; usar la dosis mínima efectiva; hacer ciclos de uso con semanas enteras de descanso; si hay dependencia establecida, reducir dosis gradualmente (10-20% por semana) en lugar de parar bruscamente." },
    { t: "Prolongación QT", d: "Alargamiento del intervalo QT en el electrocardiograma. El intervalo QT representa el período de despolarización y repolarización ventricular cardíaca. Cuando se alarga anormalmente (QTc >450ms en hombres, >460ms en mujeres), el corazón es vulnerable a arritmias ventriculares. Ibogaína y ciertos alcaloides de plantas lo alargan, igual que algunos antibióticos (eritromicina, azitromicina), antidepresivos (citalopram), antiarrítmicos y antipsicóticos. Riesgo: torsades de pointes (arritmia en espiral) → fibrilación ventricular → paro cardíaco → muerte súbita. Por eso la ibogaína requiere ECG previo para medir el QTc basal, monitorización cardíaca continua durante toda la sesión (18-36h) y personal médico presente. Contraindicada en personas con QTc basal >450ms, cardiopatía estructural o que toman medicamentos que alargan el QT." },
  ];

  const filtered = terminos.filter(t =>
    t.t.toLowerCase().includes(query.toLowerCase()) ||
    t.d.toLowerCase().includes(query.toLowerCase())
  );

  return (
    <div>
      <InfoBoxX c={c}>
        Glosario de etnobotánica y farmacología de plantas psicoactivas — 24 términos clave con definiciones precisas. Desde conceptos generales (enteógeno, psicodélico) hasta compuestos específicos (salvinorina, mesembrina, kavalactonas, LSA, mitragynina, ibogaína, bufotenina). Buscar por palabra o navegar completo.
      </InfoBoxX>

      <input type="text" placeholder="🔍 Buscar término..." value={query} onChange={(e) => setQuery(e.target.value)} style={{
        width: "100%", padding: "10px 14px", fontSize: "13px",
        background: c.bg2, color: c.textBright, border: `1px solid ${c.border1}`,
        borderRadius: "8px", marginBottom: "12px", fontFamily: "inherit", outline: "none",
      }} />
      <div style={{ fontSize: "11px", color: c.accent2, marginBottom: "12px" }}>
        {filtered.length}/{terminos.length} términos {query && `· "${query}"`}
      </div>

      {filtered.map((term, i) => (
        <div key={i} style={{ background: c.bg2, border: `1px solid ${c.border1}`, borderRadius: "10px", padding: "14px", marginBottom: "10px" }}>
          <div style={{ fontSize: "13px", fontWeight: "bold", color: c.accent1, marginBottom: "6px" }}>{term.t}</div>
          <div style={{ fontSize: "12px", color: c.accent3, lineHeight: "1.6" }}>{term.d}</div>
        </div>
      ))}
    </div>
  );
}

function FAQ_PLANTAS() {
  const c = PLANTAS_COLORS;
  const [query, setQuery] = React.useState("");
  const faqs = [
    { q: "¿Cuál es la más segura para empezar?", a: "Damiana. Efecto suave, sabor agradable, fácil cultivo, sin riesgos especiales. Después: Wild lettuce, Calea, Pasiflora o Catnip." },
    { q: "¿Cuál es la más intensa?", a: "Salvia divinorum entre las controlables (disociativo puro, 5-15 min). Las solanáceas tropánicas (Beleño, Belladona, Datura, Estramonio, Mandrágora) son técnicamente más intensas pero producen delirio REAL no controlable, con amnesia y riesgo vital. No son para uso psicoactivo recreativo." },
    { q: "¿Cuál es la más peligrosa de toda la lista?", a: "⚠️ TIER ROJO: Beleño, Belladona, Mandrágora, Datura inoxia y Estramonio (solanáceas con alcaloides tropánicos: atropina, escopolamina, hiosciamina). No existe 'dosis recreativa segura' — el margen entre efecto y toxicidad letal es mínimo. Son las responsables de la mayoría de intoxicaciones botánicas graves en España cada verano. Se cultivan como ornamentales con etiqueta VENENO, no como psicoactivos recreativos." },
    { q: "¿Qué son los alcaloides tropánicos y por qué son peligrosos?", a: "Atropina, escopolamina e hiosciamina — bloquean receptores muscarínicos del sistema nervioso. Provocan síndrome anticolinérgico: boca seca extrema, pupila dilatada fija, taquicardia, confusión, delirio REAL (no alucinaciones controladas, sino psicosis activa con amnesia total), hipertermia y coma. No hay 'trip de tropano' controlable. Hospitalizaciones frecuentes. Tratamiento: fisostigmina IV en urgencias." },
    { q: "¿Puedo usar Belladona, Datura o Estramonio de forma recreativa?", a: "NO. Sin excepción. Estas plantas han matado a personas que tomaron una sola hoja. La variabilidad de concentración entre plantas y partes es enorme — lo que no mató ayer puede matar hoy. Uso medicinal solo bajo supervisión médica especializada (alcaloides purificados en dosis controladas). Como hobby: cultívalas como ornamentales llamativas, ponles etiqueta VENENO y mantenlas lejos de niños/mascotas." },
    { q: "¿Qué es la Ruda siria y por qué necesita atención especial?", a: "⚠️ TIER ESPECIAL IMAO: Peganum harmala contiene harmina y harmalina — inhibidores de la MAO (enzima que degrada dopamina, serotonina, DMT endógeno). Efectos: potencia CUALQUIER triptamina o feniletilamina multiplicado. Riesgo real: interacción mortal con SSRI, IMAO farmacéuticos, tramadol, triptanos para migraña, MDMA, anfetaminas, algunos alimentos ricos en tiramina (queso curado, vino tinto). Requiere ayuno IMAO de 24h mínimo. Solo para personas con experiencia y conocimiento profundo." },
    { q: "¿Puedo mezclar Ruda siria con setas u otras plantas psicoactivas?", a: "Es posible (analógico de ayahuasca) pero exige preparación seria. El IMAO de la ruda potencia psilocibina 3-10x — una dosis de setas que normalmente toleras puede ser abrumadora. Verifica SIEMPRE el TripSit Combo Chart antes de cualquier combinación. NUNCA mezclar con SSRI/SNRI — riesgo síndrome serotoninérgico (hiperpirexia, convulsiones). El ayuno de tiramina 24h antes es obligatorio." },
    { q: "¿Qué son las semillas con LSA (Woodrose, Morning Glory)?", a: "LSA = Ácido lisérgico amida, primo del LSD. Produce 4-8h de experiencia alucinógena real. Fuentes: semillas de Hawaiian Woodrose (Argyreia nervosa, 4-8 semillas) y Morning Glory (Ipomoea violacea, 150-300 semillas). Alta probabilidad de náuseas intensas las primeras 1-2h (vasoconstricción). CRÍTICO: comprar semillas sin tratar (sin fungicidas/pesticidas comerciales = tóxicos). Semillas de vivero convencional = veneno. Solo semillas 'untreated' de fuentes etnobotánicas." },
    { q: "¿Puedo mezclar plantas?", a: "Suaves entre sí: OK con precaución. Damiana + Blue Lotus = sedante + eufórico. Pasiflora + Valeriana = sinérgico para insomnio. Wild lettuce + manzanilla = sedante clásico. Wild Dagga + Lúpulo = relajante suave. NUNCA: Salvia + nada (ya extrema sola). NUNCA: Ruda siria + cualquier cosa sin investigar previamente. NUNCA: solanáceas tropánicas + nada recreativo. Kanna + SSRI = peligroso. Verifica TripSit Combo para cualquier combinación con sustancias farmacológicas." },
    { q: "¿Son adictivas?", a: "La mayoría no produce dependencia física. Salvia tiene propiedades anti-adictivas. Tabaco rústico EXCEPCIÓN: Nicotiana rustica tiene 9x más nicotina que tabaco comercial — dependencia rápida posible. Kava: dependencia psicológica leve posible con uso diario prolongado. Calamo en dosis altas (asarona): potencial sedante habituante. Las suaves (Damiana, Calea, Pasiflora, etc.) sin riesgo adictivo conocido." },
    { q: "¿Cuándo es mejor evitar?", a: "Embarazo/lactancia: TODAS contraindicadas. Medicación: Wild lettuce (sedantes), Damiana (antidepresivos), Kanna (SSRI), Ruda siria (CRÍTICO con todo serotoninérgico), Tabaco rústico (cardiopatías). Conducir: nunca tras consumir cualquiera. Solanáceas tropánicas: SIEMPRE evitar uso interno sin prescripción médica." },
    { q: "¿Cuánto duran los efectos?", a: "Salvia fumada: 5-15 min. Kanna sublingual: 30-90 min. Tabaco rústico soplo: minutos. Damiana/Wild Dagga: 2-4h. Blue Lotus: 2-4h. Woodrose/Morning Glory: 4-8h. Kava: 1-3h. Kanna oral: 2-4h. Pasiflora/Valeriana (sedante): 4-8h. Calea (sueños): toda la noche. Ruda siria + triptamina: 4-6h (potenciada)." },
    { q: "¿Cuál es mejor para ansiedad/insomnio?", a: "Ansiedad diurna: Pasiflora (ansiolítica clásica, no sedante de día), Kava (más potente, sin embriagar), Kanna (antidepresivo + ansiolítico, ojo SSRI). Insomnio: Valeriana (tardía 2-4 sem, potente), Lúpulo (almohada o té, rápido), Pasiflora + Valeriana juntas. Calea: solo para sueños lúcidos, no induce sueño. Wild lettuce: analgésico-sedante si dolor es causa." },
    { q: "¿Cuál es estimulante natural?", a: "Mucuna pruriens (motivación + energía mental, L-DOPA natural, sin agitación cafeínica). Sinicuichi (distorsión auditiva + ligero estimulante). Tabaco rústico (estimulante fuerte — nicotina 9x, usar con extrema moderación). Mormon tea/Ephedra (efedrina, estimulante cardiovascular — Tier Ámbar, no combinar con estimulantes)." },
    { q: "¿Wild Dagga es parecido al cannabis?", a: "Efecto similar pero mucho más suave. Leonurine actúa diferente que THC — relajación leve, efecto ligeramente eufórico, fumable solo o mezclado. Legal en toda Europa sin restricciones. Buen sustituto herbal para fumadores que quieren reducir o para mezclas sin tabaco. No produce high intenso ni dependencia." },
    { q: "¿Para qué sirve el Tabaco rústico (Nicotiana rustica)?", a: "Mapacho amazónico — uso ceremonial en soplos (soplado directamente en cada fosa nasal) o como purga (brebaje). 9x más nicotina que tabaco comercial. NO fumar recreativamente como cigarrillo — sobredosis nicotínica real con náuseas, vómitos, taquicardia. Uso tradicional: mínima cantidad en contexto ritual. Cultivar para tradición o huerto no para fumar diariamente." },
    { q: "¿Es seguro el Cálamo (Acorus calamus)?", a: "Depende de la variedad. Variedades tetraploides asiáticas (Acorus calamus var. angustatus, de Asia) contienen β-asarona (posiblemente carcinogénica en dosis altas). Variedad americana/euroasiática triploide (A. calamus americanus): sin β-asarona, considerada segura. Si no sabes qué variedad tienes: usar con moderación como aromático/carminativo, no en dosis altas buscando efecto psicoactivo. Rizoma fresco vs seco: efecto diferente." },
    { q: "¿Coleus da efectos parecidos a Salvia?", a: "Reportes originales de Schultes/Hofmann sugirieron psicoactividad de Coleus blumei. En práctica: los efectos son muy débiles y altamente subjetivos. NO produce el disociativo potente de Salvia divinorum — mecanismo diferente. Cultivar como ornamental interesante o por tradición etnobotánica, no esperar experiencia psicoactiva notable. Curioso para explorar suaves." },
    { q: "¿Chicalote y Escoba canaria son seguros?", a: "Chicalote (Argemone mexicana) — TIER ÁMBAR: alcaloides del opio secundarios (sanguinarina, berberina) + rotenona (insecticida natural). GUANTES SIEMPRE al manipular. Efectos sedantes/analgésicos leves como ornamental/herbal externo. NO consumir en dosis altas sin conocimiento. Escoba canaria (Cytisus canariensis): citisina (agonista nicotínico parcial, base del fármaco Champix). Mínimas dosis, no fumar grandes cantidades." },
    { q: "¿Puedo cultivar estas plantas en balcón en Barcelona?", a: "Casi todas prosperan en BCN. Muy fáciles outdoor/balcón: Damiana, Pasiflora, Valeriana, Wild Dagga, Catnip, Lúpulo (enredadera), Tabaco rústico, Adormidera California, Ruda siria, Coleus (sol directo), Sinicuichi (sombra parcial). Solanáceas tropánicas (Estramonio, Datura): crecen solas hasta en descampados — si las plantas en balcón, etiqueta VENENO visible y lejos de curiosos. Woodrose/Morning Glory: enredaderas anuales, espectaculares en verja." },
    { q: "¿Dónde compro semillas/plantas en España?", a: "Online especializados: Avalon Magic Plants, Shayanashop, Azarius (UE), Equipo Botánico, La Huella Verde (ES). Herboristerías físicas: Damiana, Pasiflora, Valeriana, Lúpulo como hojas secas. Viveros locales BCN: Catnip, Coleus, Ruda siria (como ornamentales). Solanáceas tropánicas: vendedores semillas especializados. SIEMPRE especificar 'semillas sin tratar' para LSA plants." },
    { q: "¿Estas plantas son legales en España?", a: "Mayoría SÍ sin restricción: Damiana, Blue Lotus, Wild Lettuce, Calea, Kava, Kanna, Pasiflora, Valeriana, Lúpulo, Mucuna, Sinicuichi, Wild Dagga, Catnip, Ruda siria, Calamo, Coleus, Adormidera Cal, Woodrose, Morning Glory, Chicalote, Escoba canaria, Tabaco rústico, todas las solanáceas (Beleño, Belladona, Mandrágora, Datura, Estramonio) — cultivar como ornamental es completamente legal. Salvia: legal ES, ilegal varios países UE/USA. Calea: ilegal Polonia. Siempre verificar al viajar." },
    { q: "¿Cuánto duran en conservación?", a: "Hojas secas hermético/oscuro: 1-2 años. Raíces secas (Kava, Valeriana, Mandrágora): 2-4 años. Semillas LSA bien secas: 3-5 años (guardar en vacío). Tincturas alcohólicas: 3-5 años. Extractos secos: 1-2 años. La degradación reduce potencia, no crea toxicidad (excepción: hongos). Etiquetar siempre con fecha y especie." },
    { q: "¿Tincturas vs infusión vs fumar: cuál es mejor?", a: "Infusión: más rápida (5-10 min prep), efectos suaves-moderados, dura horas, social. Tintura alcohólica: maceración 4-6 sem, dura años, más concentrada, dosis 1-3ml sublingual (absorción rápida). Fumar (Wild Dagga, Tabaco rústico, Coleus): efecto inmediato, más corto, mayor concentración de humo. Para uso regular: tintura más práctica. Para primerizo: infusión (fácil ajustar dosis)." },
    { q: "¿Cuál es mejor para meditación/espiritualidad?", a: "Sinicuichi (distorsión auditiva suave, sonidos aumentados), Blue Lotus (sedante onírico, conexión), Damiana (relajación + claridad mental), Calea (sueños proféticos — uso chamánico mazateco), Salvia (disociativa intensa, no para principiantes). En tradición: Mapacho (Tabaco rústico) y Ruda siria tienen usos ceremoniales profundos pero requieren conocimiento." },
    { q: "¿Puedo regalar plantas/semillas/extractos?", a: "Sí, todas las de esta guía son legales. Compartir semillas = legal. Regalar plantas = legal. Vender = requiere registro como producto herbal (Sanidad Pública). Mejor: compartir con amigos sin transacción comercial. Para solanáceas: regalar semillas con etiqueta VENENO + instrucciones de seguridad." },
    { q: "¿Cómo hago una tintura correctamente?", a: "Proporciones estándar: 1 parte de planta seca en peso por 5 partes de alcohol en volumen (1:5). Alcohol: 60-70% para la mayoría (plantas con alcaloides + aceites esenciales). 40% (vodka) para plantas con compuestos más polares como flavonoides. Proceso: llenar frasco hermético oscuro con hierba seca troceada, cubrir completamente con alcohol de la graduación indicada, cerrar, agitar y guardar en lugar oscuro y fresco. Maceración: 3-4 semanas mínimo (4-6 semanas para raíces duras como Valeriana). Agitar cada 2-3 días. Filtrado: colar con gasa o filtro de café, exprimir bien el material. Almacenamiento: frasco oscuro etiquetado con fecha, especie y graduación alcohólica. Etiqueta incluir dosis recomendada. Vida útil: 3-5 años conservando potencia." },
    { q: "¿Cuál es la diferencia entre infusión, decocción y tintura?", a: "Infusión: agua caliente (<90°C, sin hervir) sobre material vegetal delicado (flores, hojas). Reposo 5-15 min tapado. Para plantas como pasiflora, catnip, menta, calea, damiana. Ventaja: rápida. Inconveniente: poco concentrada, caduca en pocas horas. Decocción: hervir material vegetal duro en agua (raíces, cortezas, semillas, tallos lignificados) durante 10-20 min. Para valeriana, kava, calamo, mormon tea, sinicuichi. Más concentrada que infusión pero aún acuosa. Tintura alcohólica: extracción en alcohol durante 3-6 semanas. Más concentrada que los dos métodos anteriores, extrae mayor variedad de compuestos, dura años. Dosis en gotas o mililitros. La forma más práctica para uso regular." },
    { q: "¿Qué hacer si tengo una experiencia difícil?", a: "Grounding inmediato: tumbarse en el suelo (contacto físico con superficie sólida), respirar lento y profundo (4 seg inhalar, 4 sostener, 4 exhalar). Cambiar entorno: salir al exterior, cambiar de habitación, temperatura diferente. Tripkiller opciones: benzodiacepinas de acción rápida (diazepam 5-10mg si disponible) reducen intensidad de psicodélicos y Salvia. Para tropanos: NO hay tripkiller fácil doméstico — ir a urgencias si hay confusión/taquicardia. Acompañamiento: pedir a alguien que esté presente, hablar es fundamental. Recordar: 'esto acabará, tengo sustancia en sangre, no es permanente'. Cuándo llamar emergencias: pérdida de conciencia, convulsiones, temperatura alta, desorientación total que no mejora, dolor torácico, dificultad para respirar. Integración posterior: escribir lo ocurrido, identificar triggers de angustia para evitarlos en próximas sesiones." },
    { q: "¿Son seguras las plantas con LSA (Woodrose, Morning Glory)?", a: "Sí con precauciones. Semillas: comprar siempre untreated (sin fungicidas ni pesticidas comerciales). Verificar que el proveedor específica 'no tratadas' o 'for botanical use'. Semillas de vivero convencional tienen tratamiento tóxico. Dosis conservadora primera vez: 3 semillas de woodrose o 50-80 de morning glory. Náuseas: normales en primeras 1-2h por vasoconstricción ergolínica. Gestionar con jengibre o meclizina 30 min antes. Vasoconstricción: contraindicado en cardiopatía, hipertensión, historial de migraña hemiplégica, Raynaud, embarazo. No combinar con triptanos, ergotaminas, ni otros vasoconstrictores. Set/setting clásico psicodélico. Duración 6-10h (woodrose) o 4-8h (morning glory) — planificar día libre." },
    { q: "¿Cómo funciona el método A/B de extracción?", a: "A/B (ácido-base) es la técnica estándar para aislar alcaloides de material vegetal. Principio: los alcaloides existen en dos formas según el pH. Forma sal (pH ácido): cargada positivamente, soluble en agua, NO soluble en solventes orgánicos. Forma base libre (pH básico): neutra, NO soluble en agua, SÍ soluble en solventes apolares (nafta, éter, DCM). Proceso básico: (1) Material vegetal + agua ácida pH 4-5 → alcaloides pasan a agua como sales. (2) Filtrar sólidos vegetales. (3) Añadir base (NaOH, NH3) hasta pH 9-10 → alcaloides se convierten en base libre. (4) Añadir solvente apolar → alcaloides base libre migran al solvente orgánico. (5) Separar fase orgánica. (6) Evaporar solvente → queda alcaloide concentrado. Aplicaciones en esta guía: LSA (woodrose/morning glory), harmala (ruda siria), DMT de plantas." },
    { q: "¿Cuál tiene mejor perfil para sueños lúcidos?", a: "Calea zacatechichi es la más documentada etnobotánicamente y con mayor número de reportes consistentes. Método: té concentrado (5-15g) + cigarrillo de hojas antes de dormir. Produce sueños muy vívidos con mayor recall. También reportados: Sinicuichi (alucinaciones auditivas durante sueño), Blue Lotus (sedante onírico suave, uso egipcio), Salvia divinorum en dosis muy bajas justo al dormirse (experimental, no establecido). Mención occidental: Mugwort (Artemisia vulgaris) en tradición de sueños lúcidos anglosajona, aunque menos potente que Calea. Para potenciar: técnica WBTB (Wake Back To Bed) + Calea + diario de sueños es la combinación más efectiva reportada." },
    { q: "¿Qué es el set y setting y por qué importa?", a: "Concepto de Timothy Leary (1960s), pero basado en observación universal chamánica milenaria. Set (mindset): el estado mental del usuario — expectativas, intenciones, miedo o apertura, experiencias previas, salud mental ese día. Setting: el entorno físico (lugar seguro vs desconocido, interior vs exterior, música o silencio) y social (sitter de confianza vs extraños, privacidad). Por qué importa: el cerebro bajo psicoactivos amplifica el estado emocional actual. Set negativo + setting caótico = alto riesgo de experiencia difícil. Ejemplos prácticos: primera vez con Salvia → habitación familiar, sitter conocido, sin música perturbadora, sin teléfono a mano. Primera vez con kava → entorno relajado, personas conocidas, sin expectativas de euforia intensa. Para plantas oníricas (Calea) → intención clara antes de dormir, libreta junto a la cama, apagar pantallas 1h antes." },
    { q: "¿La Mandrágora es realidad o mito?", a: "Mezcla de ambos. REALIDAD: la raíz contiene alcaloides tropánicos reales (atropina, escopolamina, hiosciamina) — la misma familia que belladona y beleño. Los efectos psicoactivos/deliriantes son reales a dosis correctas. Historia médica real: usada como anestésico en cirugía de la Antigüedad (Dioscórides, siglo I d.C.), bebida con vino antes de operaciones. MITO MEDIEVAL EXAGERADO: 'grita al ser arrancada y mata al que la oye' — folclore. La raíz no grita. La forma antropomorfa es real (la raíz se bifurca naturalmente) pero no mágica. Uso moderno: ornamental, etnobotánico, coleccionismo. El valor real está en entender la historia de la farmacología europea y el origen de la 'magia' botánica medieval — que era básicamente intoxicación controlada con conocimiento empírico." },
    { q: "¿Puedo fumar Wild Dagga mezclado con cannabis?", a: "Sí, la combinación es reportada como sinérgica leve. Wild Dagga (Leonotis leonurus) actúa por mecanismo diferente al THC — no hay interacción conocida peligrosa. El efecto combinado es una relajación algo más pronunciada que cada planta sola. Proporción típica en mezclas: 30-50% wild dagga + 50-70% cannabis. El wild dagga aporta sabor herbal y suaviza el humo. No hay potenciación psicoactiva significativa — simplemente complemento herbal. Sin contraindicaciones conocidas para la combinación. El wild dagga solo es mucho más suave que el cannabis — las personas que no quieren efectos intensos lo usan como sustituto parcial." },
    { q: "¿El Kava es adictivo?", a: "No produce dependencia física. El Kava no activa el sistema de recompensa dopaminérgico de forma significativa — no hay craving físico al parar. Dependencia psicológica leve posible con uso diario prolongado (igual que el café o el té). Hepatotoxicidad: el riesgo real documentado no es la adicción sino el daño hepático con uso excesivo o variedades inadecuadas. Las variedades 'tudei' (Piper wichmanii) contienen flavocavainas A y B hepatotóxicas — verificar siempre que sea 'kava noble' (Piper methysticum varietat noble). Los extractos con solventes orgánicos concentran las toxinas — solo raíz molida tradicional. Uso ocasional (1-3 veces/semana) de kava noble: sin riesgo hepático documentado en personas sanas." },
    { q: "¿El Coleus blumei realmente es psicoactivo?", a: "Debate abierto. La evidencia es muy débil. Los reportes originales de Schultes y Hofmann (años 60) describieron uso mazateco del Coleus como sustituto de Salvia divinorum. Sin embargo: los estudios farmacológicos posteriores no han identificado un compuesto activo claro de potencia significativa. El forskolín (diterpeno presente) tiene efectos cardiovasculares y en AMPc pero no psicoactivos directos conocidos. La mayoría de reportes son muy subjetivos y dosis-dependientes. Conclusión honesta: puede haber un efecto sutil real en algunas personas, pero es casi imposible distinguirlo de efecto placebo en la práctica. No esperar experiencia tipo Salvia-level. Valor principal: ornamental y curiosidad etnobotánica." },
    { q: "¿Cómo identifico si mis semillas de Woodrose o Morning Glory están tratadas?", a: "Señales de semillas tratadas: packaging de vivero convencional con mención a fungicida, insecticida o 'treated for planting'. Color inusual en la superficie (recubrimiento naranja, rosa, verde o azul visible). Olor químico intenso diferente al herbal. Bote de semillas ornamentales de tienda de jardinería convencional. Semillas sin tratar (untreated): comprar en tiendas etnobotánicas especializadas (Azarius, Shayanashop, Avalon) que especifican explícitamente 'untreated', 'no coating', 'for botanical use'. Verificar descripción del producto: mencionar Argyreia nervosa var. Ghana (woodrose) o Ipomoea tricolor 'Heavenly Blue' de fuente etnobotánica. Cosecha propia de planta cultivada en casa = la opción más segura. Semillas de vivero convencional de centros de jardinería como Leroy Merlin o similares: NO usar — casi siempre tratadas." },
    { q: "¿El Kratom es seguro?", a: "El Kratom tiene un perfil de riesgo real que hay que entender antes de usarlo. EFECTOS BIFÁSICOS: dosis bajas (1-5g polvo) son estimulantes como cafeína fuerte; dosis altas (5-15g) producen efectos opioides reales (analgesia, euforia, sedación). No es una hierba 'suave'. DEPENDENCIA FÍSICA: con uso diario durante semanas se desarrolla dependencia física. El síndrome de abstinencia al parar (insomnio, irritabilidad, dolores musculares, moqueo, sudoración) dura 3-7 días — incómodo pero no peligroso. Prevención: máximo 2-3 veces por semana, ciclos con semanas de descanso. HEPATOTOXICIDAD: casos documentados de daño hepático con uso diario de dosis altas durante meses. Uso ocasional en personas sanas: sin riesgo hepático conocido. MEZCLA PELIGROSA — RIESGO MUERTE: NO combinar con opioides (tramadol, codeína, morfina, heroína), benzodiacepinas (diazepam, alprazolam) ni alcohol. La combinación puede producir depresión respiratoria fatal durante el sueño. CONTRAINDICACIONES: embarazo, hepatopatía previa, uso concomitante de opiáceos o benzodiacepinas. DOSIS MÁXIMA: 15g en una toma — más produce náuseas y vómitos garantizados. Conclusión: kratom usado ocasionalmente, con moderación y sin mezclas, es manejable para adultos sanos. Uso diario = escalada de riesgo." },
    { q: "¿Puedo cultivar Kratom en España?", a: "Honestamente: es extremadamente difícil y la mayoría de personas no debería intentarlo. El Kratom es un árbol tropical grande (puede llegar a 30m en naturaleza) que necesita temperatura constante de 25-35°C, humedad superior al 70% todo el año, y luz brillante. En España eso significa invernadero climatizado dedicado, con calefacción en invierno y sistema de humidificación activo. Además: las semillas pierden viabilidad en pocos días tras cosecha (rarísimas y casi siempre inviables al llegar por correo). Los esquejes son más fiables pero difíciles de encontrar. Si decides intentarlo: sustrato ácido (turba + perlita, pH 5.5-6.0), maceta grande, temperatura mínima nocturna 20°C, riego frecuente sin encharcamiento. La ALTERNATIVA PRÁCTICA que usa la mayoría: comprar polvo de kratom seco en tiendas etnobotánicas online (Azarius, Shayanashop, Avalon Magic Plants). El precio es €10-20 por 100g con múltiples variedades (White Maeng Da, Green Borneo, Red Bali, etc.) con distintos perfiles de efecto. Sin invernadero: no cultivar." },
    { q: "¿Qué es la Ibogaína y dónde se hace el tratamiento?", a: "La ibogaína es el alcaloide principal de la corteza de raíz de Tabernanthe iboga, árbol de África Central. Es un compuesto de farmacología extremadamente compleja: actúa sobre múltiples receptores simultáneamente (NMDA, opioides, serotonina, dopamina). La experiencia dura 18-36 horas — larga e intensa. Se investiga seriamente para el tratamiento de adicción a opioides (heroína, metadona), estimulantes (cocaína) y alcohol: una o dos sesiones supervisadas pueden reducir drásticamente el craving y el síndrome de abstinencia durante semanas o meses. RIESGO CARDÍACO REAL: la ibogaína prolonga el intervalo QT del corazón, lo que puede causar arritmias fatales. Varios casos de muerte documentados en autoadministraciones sin supervisión médica. CÓMO HACERLO CORRECTAMENTE — SOLO EN CLÍNICA CERTIFICADA: el proceso requiere ECG previo, cardiólogo, monitorización cardíaca continua las 36h, y personal médico presente. Clínicas con protocolo validado: en España (varias clínicas de adicciones que trabajan con ibogaína), Países Bajos (ICEERS-validadas, Awakn), Portugal. Buscar clínicas reconocidas por MAPS o ICEERS. Precio: €1.500-4.000 por sesión. La autoadministración es peligrosa y no recomendada bajo ningún concepto." },
    { q: "¿El Yopo es peligroso?", a: "Sí, el Yopo tiene un perfil de riesgo real que lo distingue claramente de hierbas suaves como Damiana o Pasiflora. EFECTOS MUY FÍSICOS: los primeros 2-5 minutos tras la insuflación producen taquicardia intensa y vasoconstricción severa. No existe una 'experiencia suave de Yopo' — la intensidad cardiovascular inicial es siempre pronunciada, incluso con dosis mínimas. Incluso usuarios experimentados lo describen como brusco e incómodo. USO TRADICIONAL NO RECREATIVO: en las culturas originarias (Yanomami, Piaroa, otros pueblos del Orinoco) el Yopo nunca es recreativo — es estrictamente chamánico, siempre con contexto ritual y siempre administrado por el chamán, no autoadministrado. CONTRAINDICACIONES ABSOLUTAS: cardiopatía de cualquier tipo, hipertensión arterial no controlada, arritmias previas, ansiedad severa, trastorno de pánico, embarazo. NO usar con medicación cardiovascular, IMAO, ni estimulantes. SEGURIDAD MÍNIMA: nunca en solitario, siempre con sitter presente, posición recostada, entorno tranquilo. Primera dosis siempre la más baja posible. El Yopo como planta para cultivar es fácil y seguro — el riesgo es con el uso de las semillas preparadas." },
    { q: "¿Cuáles son las plantas más difíciles de cultivar de esta guía?", a: "Ranking de dificultad de cultivo (de más a menos difícil): 1. IBOGA (Tabernanthe iboga): crecimiento extremadamente lento (años para 30cm), necesita temperatura tropical constante, humedad alta, sombra parcial, sustrato ácido muy específico. Una planta que tardó 3 años en crecer puede morir en una noche fría. Sin invernadero tropical dedicado: imposible. 2. KRATOM (Mitragyna speciosa): árbol grande tropical, necesita 25-35°C constante y humedad >70%, semillas inviables por correo. Requiere invernadero climatizado. 3. KAVA (Piper methysticum): condiciones tropicales exactas, muy sensible a cambios de temperatura y sustrato. Solo crece bien en zonas muy cálidas y húmedas o invernadero. 4. WOODROSE / MORNING GLORY: fáciles de cultivar, pero la dificultad es encontrar semillas sin tratar (untreated) de fuente fiable. PLANTAS FÁCILES (al contrario): Catnip, Wild Dagga, Pasiflora, Damiana, Valeriana, Lúpulo, Coleus, Adormidera de California, Ruda siria — todas crecen bien en exterior español con cuidados mínimos. YOPO: sorprendentemente fácil — leguminosa rústica con germinación alta, tolera clima mediterráneo." },
  ];

  const filtered = faqs.filter(f =>
    f.q.toLowerCase().includes(query.toLowerCase()) ||
    f.a.toLowerCase().includes(query.toLowerCase())
  );

  return (
    <div>
      <InfoBoxX c={c}>
        Preguntas frecuentes sobre más de 30 plantas psicoactivas y etnobotánicas de esta guía — desde hierbas suaves hasta solanáceas tóxicas, LSA, IMAO y plantas oníricas. Busca por palabra clave o navega por tema. Recursos extra: Erowid.org, PsychonautWiki, TripSit Combo Chart, ICEERS.
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

function BIBLIO_PLANTAS() {
  const c = PLANTAS_COLORS;
  return <BibliografiaBlock c={c}
    intro="Bibliografía completa para la guía de plantas psicoactivas y etnobotánicas — más de 30 especies documentadas. Incluye etnobotánica clásica, farmacología por familia química (tropanos, triptaminas, LSA, IMAO, sedantes), recursos online por planta y harm reduction actualizado."
    libros={[
      { titulo: "Plants of the Gods", autor: "Schultes & Hofmann", año: "1979", nota: "Clásico etnobotánico. Capítulos sobre Salvia, Datura, Morning Glory, Amanita, etc." },
      { titulo: "The Encyclopedia of Psychoactive Plants", autor: "Christian Rätsch", año: "1998", nota: "Compendio enciclopédico — entrada por planta con química, dosis, historia, fuentes. La biblia de etnobotánica. Cubre casi todas las plantas de esta guía." },
      { titulo: "Pharmacotheon", autor: "Jonathan Ott", año: "1996", nota: "Organizado por familia química: triptaminas, LSA, alcaloides tropánicos, β-carbolinas. Referencia farmacológica definitiva para Ruda siria, Morning Glory, Woodrose, Datura." },
      { titulo: "Salvinorin: The Psychedelic Essence of Salvia divinorum", autor: "Daniel Siebert", año: "varios", nota: "PDFs descargables. Siebert redescubrió el mecanismo de Salvia. Indispensable." },
      { titulo: "Kava: The Pacific Drug", autor: "Lebot, Merlin & Lindstrom", año: "1992", nota: "Etnobotánica + farmacología + cultura del kava. Definitorio para kavalactonas." },
      { titulo: "Sceletium tortuosum (Kanna): A Compendium", autor: "varios", nota: "Compilaciones online sobre Kanna y mesembrina — SSRI natural." },
      { titulo: "A Modern Herbal", autor: "Maud Grieve", año: "1931", nota: "Herboristería occidental clásica — Wild Lettuce, Lobelia, Valeriana, Lúpulo, Calamo, Catnip, Wild Dagga. Disponible gratis online." },
      { titulo: "Poisonous Plants of California", autor: "Thomas C. Fuller & Elizabeth McClintock", año: "1986", nota: "Referencia para Datura, Estramonio, Beleño, Belladona, Chicalote. Toxicología botánica." },
      { titulo: "Anticholinergic Toxidrome (Solanaceae)", autor: "varios autores médicos", nota: "Papers en PubMed sobre intoxicación por tropanos. Buscar: 'Datura stramonium poisoning', 'atropine toxidrome'." },
      { titulo: "Sacred and Herbal Healing Beers", autor: "Stephen Harrod Buhner", año: "2010", nota: "Wild Dagga, Lúpulo, Calamo, Escoba canaria en tradición cervecera. Historia etnobotánica de plantas psicoactivas en fermentaciones." },
      { titulo: "Ayahuasca Analogues", autor: "Jonathan Ott", año: "1994", nota: "Ruda siria como fuente de IMAO. β-carbolinas, harmala, combinaciones con triptaminas. Referencia técnica definitiva para análogos de ayahuasca." },
      { titulo: "Handbook of Plant and Fungal Toxicants", autor: "J. P. F. D'Mello (ed.)", año: "1997", nota: "Capítulos sobre solanáceas, tropanos, citisina (Escoba canaria), rotenona (Chicalote), nicotina (Tabaco rústico)." },
      { titulo: "Hawaiian Baby Woodrose (Argyreia nervosa) — Monograph", autor: "varios etnobotánicos", nota: "Resources online sobre LSA en Woodrose: concentración de semillas, variación por planta, preparación segura." },
    ]}
    web={[
      { nombre: "Erowid Plants Vault", url: "https://erowid.org/plants/", nota: "Vault por planta — la referencia online estándar. Especialmente útil: Datura, Belladona, Morning Glory, Woodrose, Tobacco, Lobelia, Henbane, Calamus." },
      { nombre: "Erowid Datura Vault", url: "https://erowid.org/plants/datura/", nota: "Datura stramonium + inoxia. Reportes de intoxicación, dosificación imposible, primera ayuda." },
      { nombre: "Erowid Belladonna Vault", url: "https://erowid.org/plants/belladonna/", nota: "Atropa belladonna — historia, toxicología, experiencias." },
      { nombre: "Erowid Henbane (Beleño)", url: "https://erowid.org/plants/henbane/", nota: "Hyoscyamus niger — uno de los más peligrosos histórica y actualmente." },
      { nombre: "Erowid Morning Glory Vault", url: "https://erowid.org/plants/morning_glory/", nota: "Ipomoea violacea — LSA, dosis, semillas sin tratar, nausea, experiencias." },
      { nombre: "Erowid Hawaiian Baby Woodrose", url: "https://erowid.org/plants/hawaiian_baby_woodrose/", nota: "Argyreia nervosa — dosis (4-8 semillas), nausea, LSA potencia vs Morning Glory." },
      { nombre: "Erowid Syrian Rue (Ruda siria)", url: "https://erowid.org/plants/syrian_rue/", nota: "Peganum harmala — IMAO, combinaciones, interacciones, harm reduction detallado." },
      { nombre: "Erowid Tobacco Vault", url: "https://erowid.org/plants/tobacco/", nota: "Nicotiana tabacum + rustica — nicotina alta, uso ceremonial, sobredosis." },
      { nombre: "Erowid Lobelia Vault", url: "https://erowid.org/plants/lobelia/", nota: "Lobelia inflata — lobelina, 'Indian tobacco', toxicidad en dosis altas." },
      { nombre: "Erowid Calamus Vault", url: "https://erowid.org/plants/calamus/", nota: "Acorus calamus — variedades, asarona, efectos a distintas dosis." },
      { nombre: "Sage Wisdom (Daniel Siebert)", url: "https://www.sagewisdom.org", nota: "Recurso #1 sobre Salvia divinorum." },
      { nombre: "Kava Library / Kavasociety", url: "https://kavalibrary.com", nota: "Kava noble vs tudei, hepatotoxicidad, variedades." },
      { nombre: "PsychonautWiki — entradas por planta", url: "https://psychonautwiki.org", nota: "Cada planta con dosis, duración, interacciones, harm reduction. Especialmente útil: Belladona, Datura, Morning Glory, Woodrose, Harmala." },
      { nombre: "TripSit Combo Chart", url: "https://tripsit.me/drug-combinations/", nota: "CRÍTICO: verificar combinaciones ANTES de mezclar cualquier psicoactivo. Especialmente para Ruda siria + cualquier cosa." },
      { nombre: "ICEERS — Ethnobotany & Harm Reduction", url: "https://www.iceers.org", nota: "Investigación etnobotánica europea. Ayahuasca análogos, harm reduction plantas psicoactivas." },
      { nombre: "Avalon Magic Plants / Shayanashop", nota: "Vendedores etnobotánicos UE con descripciones técnicas actualizadas. Fuente semillas 'untreated'." },
      { nombre: "Henriette's Herbal Homepage", url: "https://www.henriettes-herb.com", nota: "Archivo herboristería occidental. Lobelia, Calamo, Wild Lettuce, Valeriana, Lupulo — con fuentes históricas." },
      { nombre: "Tropicos / JSTOR Plants", url: "https://tropicos.org", nota: "Taxonomía botánica oficial cuando necesites confirmar nombre científico." },
    ]}
    comunidad={[
      { nombre: "r/Salvia (Reddit)", nota: "Salvia divinorum — cultivo, experiencias, harm reduction." },
      { nombre: "r/kava (Reddit)", nota: "Activa. Reviews variedades, preparación tradicional." },
      { nombre: "r/Kanna (Reddit)", nota: "Sceletium tortuosum — cultivo, dosificación." },
      { nombre: "r/Nootropics (Reddit)", nota: "Mucuna, Kava, Kanna como nootrópicos." },
      { nombre: "r/herbalism (Reddit)", nota: "Wild Lettuce, Damiana, Lúpulo, Valeriana, Pasiflora." },
      { nombre: "r/LSA (Reddit)", nota: "Morning Glory + Woodrose — semillas sin tratar, dosis, nausea, experiencias." },
      { nombre: "r/Solanaceae (Reddit)", nota: "Datura, Belladona, Mandrágora, Estramonio — principalmente cultivo ornamental, harm reduction." },
      { nombre: "r/AyahuascaAnalogs (Reddit)", nota: "Ruda siria + combinaciones triptaminas. Requiere lectura seria antes de participar." },
      { nombre: "r/WildDagga / r/ethnobotany (Reddit)", nota: "Wild Dagga, Calamo, Sinicuichi, plantas menos documentadas." },
      { nombre: "Bluelight Drug Forums", url: "https://bluelight.org", nota: "Foro multicampo con threads históricos y peer harm reduction." },
      { nombre: "The Ethnobotanical Garden Forum", nota: "Cultivo específico de plantas etnobotánicas difíciles. Mandrágora, Datura inoxia, LSA plants." },
    ]}
    ciencia={[
      { nombre: "Roth et al. — 'Salvinorin A: κ opioid selective agonist' (PNAS 2002)", nota: "Mecanismo único de Salvia — no nitrogenado, primer κ-OR natural." },
      { nombre: "Schultes — 'Plant Hallucinogens' papers (1969-1976)", nota: "Etnobotánica clásica de Morning Glory, Datura, Tobacco." },
      { nombre: "Kava hepatotoxicity case reviews", nota: "Buscar PubMed: 'kava hepatotoxicity', 'Piper methysticum liver'. Riesgo variedad tudei vs noble." },
      { nombre: "Sceletium / mesembrine pharmacology (Gericke et al.)", nota: "SSRI natural + inhibición PDE4. Papers disponibles en PubMed." },
      { nombre: "Frontiers Plant Sci 2024 — 'Skeletons in the closet: Sceletium'", url: "https://www.frontiersin.org/journals/plant-science/articles/10.3389/fpls.2024.1268101/full", nota: "Análisis bibliométrico moderno de investigación de Kanna." },
      { nombre: "Cilia et al. — Mucuna pruriens RCT Parkinson (2026)", url: "https://journals.sagepub.com/doi/10.1177/1877718X251383721", nota: "L-DOPA natural en Parkinson no tratado. Sub-Saharan trial." },
      { nombre: "MDPI Neurol Int 2024 — 'Mucuna pruriens for Depression'", url: "https://www.mdpi.com/2035-8377/16/6/112", nota: "Revisión potencial antidepresivo de Mucuna." },
      { nombre: "Hyoscine/scopolamine pharmacology reviews", nota: "PubMed: 'scopolamine amnesia', 'atropine anticholinergic toxidrome'. Mecanismo solanáceas tropánicas." },
      { nombre: "Ott, J. — 'Harmala alkaloids as MAO inhibitors' (1994)", nota: "Capítulo en Ayahuasca Analogues. Harmina + harmalina de Peganum harmala." },
      { nombre: "'LSA (ergine) — pharmacology and effects' — TiHKAL, Shulgin", nota: "Alexander Shulgin. LSA como triptamina ergolina. En TiHKAL (disponible online)." },
      { nombre: "Lobeline pharmacology — 'Lobelia inflata as nicotinic receptor agonist'", nota: "Papers sobre lobelina en PubMed. Agonista parcial nAChR." },
      { nombre: "Argemone mexicana — 'sanguinarine toxicity'", nota: "PubMed: intoxicaciones por chicalote. Sanguinarina como bloqueante ATP-sintasa." },
      { nombre: "Ephedra alkaloids — 'ephedrine pharmacology'", nota: "Mormon tea (Ephedra nevadensis): trazas efedrina. Historia pharm y regulatoria." },
      { nombre: "ICEERS", url: "https://www.iceers.org", nota: "Investigación harm reduction plantas psicoactivas Europa." },
    ]}
    harm={[
      { nombre: "⚠️ TROPANOS — Anticolinergic Toxidrome First Aid", nota: "Si sospechas intoxicación (pupila dilatada fija, boca seca extrema, confusión): URGENCIAS inmediato. Tratamiento: fisostigmina IV. No inducir vómito. Llamar a Toxicología: 91 562 04 20 (España)." },
      { nombre: "PsychonautWiki — Belladona", url: "https://psychonautwiki.org/wiki/Belladonna", nota: "Tropano clásico — harm reduction, no dosis recreativa segura." },
      { nombre: "PsychonautWiki — Datura", url: "https://psychonautwiki.org/wiki/Datura", nota: "La más peligrosa recreativamente — casos de muerte y hospitalización." },
      { nombre: "PsychonautWiki — Harmala (Ruda siria)", url: "https://psychonautwiki.org/wiki/Syrian_rue", nota: "IMAO — interacciones críticas, lista de sustancias incompatibles." },
      { nombre: "PsychonautWiki — Morning Glory", url: "https://psychonautwiki.org/wiki/Morning_glory", nota: "LSA — semillas untreated, dosis, nausea, vasoconstricción." },
      { nombre: "PsychonautWiki — Hawaiian Baby Woodrose", url: "https://psychonautwiki.org/wiki/Hawaiian_baby_woodrose", nota: "LSA concentrado — 4-8 semillas, nausea intensa primeras 2h." },
      { nombre: "PsychonautWiki — Salvia divinorum", url: "https://psychonautwiki.org/wiki/Salvia_divinorum", nota: "Disociativo intenso — sitter obligado." },
      { nombre: "PsychonautWiki — Kava", url: "https://psychonautwiki.org/wiki/Kava", nota: "Hepatotoxicidad con uso excesivo prolongado." },
      { nombre: "PsychonautWiki — Kanna", url: "https://psychonautwiki.org/wiki/Kanna", nota: "NO mezclar con SSRI/IMAO." },
      { nombre: "TripSit Combo Chart", url: "https://tripsit.me/drug-combinations/", nota: "Verificar interacciones entre sustancias ANTES de combinar. Especialmente crítico para Ruda siria + todo." },
      { nombre: "TripSit Factsheets", url: "https://drugs.tripsit.me", nota: "Factsheets por planta/sustancia con dosis, duración, interacciones." },
      { nombre: "Energy Control", url: "https://energycontrol.org", nota: "Análisis sustancias en España. Útil para extractos desconocidos." },
      { nombre: "Teléfono Toxicología España: 91 562 04 20", nota: "Instituto Nacional de Toxicología y Ciencias Forenses. Disponible 24h para consultas de intoxicación." },
      { nombre: "Erowid — 'How to Safely Use Psychoactive Plants'", url: "https://erowid.org/psychoactives/basics/basics.shtml", nota: "Set, setting, dosis, compañía, integración." },
      { nombre: "FDA — Kratom 7-OH scheduling (2025)", url: "https://www.foodsafetynews.com/2025/07/the-fda-recommends-scheduling-kratoms-7-oh-under-the-controlled-substances-act/", nota: "Precedente regulatorio: aislados concentrados → controles. Aplicable a safrol, harmala, otros." },
    ]}
  />;
}
