// FERMENTACIONES — contenido general (intro, higiene, FAQ)
// Aplica a hidromiel + cerveza + cualquier futura fermentación.

function INTRO_FERMENT() {
  const c = FERMENT_COLORS;
  return (
    <div>
      <InfoBoxX c={c}>
        Fermentar = cultivar microorganismos (levaduras) que comen azúcares y producen alcohol + CO₂. Legal en España hacer cualquier bebida fermentada para consumo propio (sin destilación). Es la mejor forma de hacer alcohol casero.
      </InfoBoxX>

      <SectionTitleX c={c}>QUÉ PUEDES FERMENTAR (orden de dificultad)</SectionTitleX>
      <div style={{ display: "grid", gap: "10px", marginBottom: "20px" }}>
        {[
          { nombre: "🍯 Hidromiel", dif: "MUY FÁCIL", tiempo: "4-8 semanas", coste: "20-40€ inicial", desc: "Miel + agua + levadura. Sin lúpulo, sin malta, sin cocción complicada. La bebida más antigua del mundo. Sabor: como vino pero con notas de miel." },
          { nombre: "🍺 Cerveza casera", dif: "MEDIA", tiempo: "4-6 semanas", coste: "50-100€ inicial (kit)", desc: "Malta + lúpulo + levadura + agua. Hervor + macerado más complejos. Resultado profesional con kits modernos. Sabor: el que tú elijas (IPA, stout, lager, etc.)." },
          { nombre: "🍎 Sidra", dif: "MUY FÁCIL", tiempo: "3-6 semanas", coste: "10-20€", desc: "Manzanas naturales + levadura (la natural de la fruta basta). Solo en otoño. Sabor: depende de las manzanas — versión casera es seca y compleja." },
          { nombre: "🍇 Vino casero", dif: "FÁCIL-MEDIA", tiempo: "3-6 meses", coste: "30-80€", desc: "Uvas (o frutas: ciruela, fresa, etc.) + levadura. Más tiempo de maduración pero proceso simple." },
          { nombre: "🌾 Kvass", dif: "FÁCIL", tiempo: "3-7 días", coste: "5-10€", desc: "Pan de centeno fermentado. Bebida rusa tradicional, muy bajo alcohol (1-2%). Refrescante y curiosa." },
          { nombre: "🦠 Kombucha", dif: "FÁCIL", tiempo: "1-2 semanas", coste: "10-20€", desc: "Té + azúcar + SCOBY. Bajo alcohol (<0.5%), no recreativo pero funcional (probióticos). Incluida porque comparte equipo." },
          { nombre: "🌽 Chicha de jora", dif: "FÁCIL", tiempo: "2-5 días", coste: "5-15€/lote", desc: "Cerveza de maíz fermentado andina, 4000+ años de historia. Jora (maíz malteado) + agua + especias. Fermentación rápida (1-4 días), bajo alcohol (1-4%), sabor terroso-afrutado. La bebida ceremonial del Imperio Inca." },
          { nombre: "🌵 Pulque", dif: "MEDIA", tiempo: "12-48h", coste: "10-20€", desc: "Bebida fermentada del aguamiel de maguey (agave). Textura viscosa característica por glucanos bacterianos. Requiere aguamiel fresco (difícil en España) o concentrado importado. ABV 4-8%. Pre-azteca, sagrada a Mayahuel. Consumir fresco." },
          { nombre: "🌿 Balché", dif: "FÁCIL-MEDIA", tiempo: "2-4 días", coste: "15-30€", desc: "Bebida ceremonial Maya: corteza de Lonchocarpus + miel + agua. Fermentación natural con levaduras de la miel cruda. ABV 3-6%, sabor amargo-mielado-tanino. Tradición milenaria yucateca." },
        ].map((f, i) => (
          <div key={i} style={{ background: c.bg2, border: `1px solid ${c.border1}`, borderRadius: "10px", padding: "12px" }}>
            <div style={{ display: "flex", justifyContent: "space-between", marginBottom: "6px" }}>
              <div style={{ fontSize: "14px", fontWeight: "bold", color: c.textBright }}>{f.nombre}</div>
              <div style={{ fontSize: "10px", color: c.accent1, fontWeight: "bold" }}>{f.dif}</div>
            </div>
            <div style={{ fontSize: "11px", color: c.accent2, marginBottom: "3px" }}>⏱️ {f.tiempo} · 💰 {f.coste}</div>
            <div style={{ fontSize: "12px", color: c.accent3, lineHeight: "1.5" }}>{f.desc}</div>
          </div>
        ))}
      </div>

      <SectionTitleX c={c}>POR DÓNDE EMPEZAR</SectionTitleX>
      <InfoBoxX c={c}>
        Si nunca has fermentado nada: empieza con <strong>hidromiel</strong>. Es el "hello world" de la fermentación. Pocos ingredientes, poco que aprender, error tolerante, resultado bebible y rico. Una vez domines hidromiel (1-2 lotes), salta a cerveza si quieres más complejidad.
      </InfoBoxX>

      <LegalHealthBox c={c}
        legal={<>✅ Fermentación de bebidas alcohólicas para consumo PROPIO: 100% LEGAL España + UE.<br/>❌ Destilación (whisky, ron, ginebra casero): ILEGAL sin licencia.<br/>❌ Comercializar/vender: requiere licencia + impuestos especiales.<br/>El límite legal es entre fermentación (legal) y destilación (ilegal).</>}
        salud="Producto final = ALCOHOL. Consumo responsable: máx 1-2 vasos/día con día de descanso. Riesgos: dependencia, daño hepático con uso crónico, accidentes con conducción. Embarazo/lactancia: 0 alcohol. Sanitización deficiente = posibles bacterias acéticas (vinagre) o moho — pero no mortales, solo arruinan el lote."
        contraindicaciones="Embarazo/lactancia · Hepatopatía · Antecedentes alcoholismo · Medicación incompatible con alcohol (consultar prospecto) · Conducir/operar maquinaria"
        recursos="HomeBrewTalk · r/homebrewing · r/mead · r/cider · BeerSmith · Tutoriales YouTube CraftBeer · Foros UE"
      />
    </div>
  );
}

function HIGIENE_FERMENT() {
  const c = FERMENT_COLORS;
  return (
    <div>
      <InfoBoxX c={c}>
        Higiene = la única regla que NO PUEDES romper. Bacterias contaminantes pueden agriar tu fermento (vinagre) o producir mal sabor. La buena noticia: no necesitas laboratorio — limpieza doméstica básica + un sanitizante son suficientes.
      </InfoBoxX>

      <SectionTitleX c={c}>NIVEL 1 — LIMPIEZA</SectionTitleX>
      <StepX c={c} num={1} text="Lavar todo equipo (botellas, garrafas, embudos, cucharas) con agua caliente + jabón normal antes de usar." />
      <StepX c={c} num={2} text="Aclarar muy bien — restos de jabón pueden matar la levadura." />

      <SectionTitleX c={c}>NIVEL 2 — SANITIZACIÓN (CRÍTICO)</SectionTitleX>
      <StepX c={c} num={1} text="Después de limpiar, sanitizar TODO lo que va a tocar el mosto post-cocción/post-pasteurización." why="La cocción mata bacterias del mosto. Pero si después tocas con una cuchara contaminada, vuelves a meter bacterias." />
      <StepX c={c} num={2} text="Opciones de sanitizante (elige una):" />
      <div style={{ display: "grid", gap: "8px", marginBottom: "16px" }}>
        {[
          { nombre: "Star San (no aclarar)", uso: "1.5ml / litro de agua. Rocía o sumerge. La espuma se queda — no hace falta aclarar (es food-safe). Botella dura años. Recomendado para principiantes.", coste: "10-15€ / 250ml" },
          { nombre: "Metabisulfito potásico", uso: "1g por litro de agua. Sumerge equipo 1-2min, escurrir. Tradicional en vinificación. Hay que aclarar.", coste: "5-10€ / 250g" },
          { nombre: "Lejía alimentaria", uso: "1ml por litro de agua. Sumergir 5-10min, ENJUAGAR muy bien. Barato pero olor persistente si no aclaras bien.", coste: "1-2€ / litro" },
          { nombre: "Hervir 10min", uso: "Solo para botellas pequeñas y utensilios resistentes. Equipo grande no entra en olla.", coste: "Gratis" },
        ].map((s, i) => (
          <div key={i} style={{ background: c.bg2, border: `1px solid ${c.border1}`, borderRadius: "8px", padding: "10px" }}>
            <div style={{ fontSize: "12px", fontWeight: "bold", color: c.textBright, marginBottom: "3px" }}>{s.nombre}</div>
            <div style={{ fontSize: "11px", color: c.accent3, marginBottom: "3px" }}>{s.uso}</div>
            <div style={{ fontSize: "10px", color: c.accent1 }}>💰 {s.coste}</div>
          </div>
        ))}
      </div>

      <SectionTitleX c={c}>ERRORES COMUNES</SectionTitleX>
      <ErrorCardX c={c}
        error="No sanitizar el airlock o el tapón"
        consecuencia="Bacterias entran por arriba durante la fermentación. Resultado: vinagre o sabor a calcetín."
        fix="Sanitizar TODO lo que va a tocar el fermento — incluyendo airlock, tapón, sello de goma."
      />
      <ErrorCardX c={c}
        error="Aclarar Star San con mucha agua"
        consecuencia="Diluyes el sanitizante y pierdes su efecto. Star San es food-safe, NO necesita aclararse."
        fix="Tras sanitizar con Star San: escurre el exceso pero deja la espuma. Es seguro fermentar con esa espuma."
      />
      <ErrorCardX c={c}
        error="Tocar el equipo sanitizado con manos sucias"
        consecuencia="Re-contaminas. Bacterias de la piel = una de las fuentes principales de contaminación."
        fix="Después de sanitizar, no tocar la zona interior con manos. Si tienes que tocar: lava manos + jabón + agua caliente."
      />
    </div>
  );
}

function GLOSARIO_FERMENT() {
  const c = FERMENT_COLORS;
  const [query, setQuery] = React.useState("");
  const terms = [
    { term: "ABV (Alcohol By Volume)", def: "% de alcohol en bebida fermentada. Calculado con hidrómetro: (densidad inicial - densidad final) × 131.25. Hidromiel: 10-14% típico. Cerveza: 4-7%. Sidra: 5-8%. Vino: 11-14%." },
    { term: "Krausen", def: "Espuma blanca-cremosa que aparece en superficie del mosto durante fermentación primaria (días 2-7). Levadura activa formando burbujas. NORMAL — no confundir con moho contaminante." },
    { term: "Hidrómetro", def: "Aparato de vidrio que flota en el líquido para medir densidad específica. Mide cuánto azúcar queda. Comparas densidad inicial (DI) vs final (DF) para calcular ABV. Imprescindible para principiantes (10-15€)." },
    { term: "Densidad específica (SG)", def: "Specific Gravity. Cuán denso es el líquido comparado con agua (1.000). Mosto inicial: 1.040-1.080 (azúcar disuelto). Mosto fermentado: 0.990-1.010 (alcohol menos denso que agua)." },
    { term: "SCOBY", def: "Symbiotic Culture Of Bacteria and Yeast. Disco gelatinoso de kombucha — colonia de bacterias acéticas + levaduras que conviven. Cada lote produce un SCOBY nuevo encima. Se reutilizan o regalan." },
    { term: "Mash / Macerado", def: "Primer paso en cerveza all-grain. Sumergir malta machacada en agua a 66°C durante 60-90 min. Las enzimas convierten almidón en azúcares fermentables. El líquido resultante = mosto." },
    { term: "Sparge / Aclarado", def: "Tras macerar, enjuagar el grano con agua a 75°C para extraer azúcares restantes. Mejora eficiencia de extracción. El total de líquido recogido va al hervor." },
    { term: "Mosto / Wort", def: "Líquido azucarado obtenido tras macerado/prensado de fruta/disolver miel. Es lo que la levadura va a fermentar. Antes del hervor + lúpulo (en cerveza) o antes de inocular (en hidromiel/sidra)." },
    { term: "Star San", def: "Sanitizante 'no-rinse' (no necesita aclarar). 1.5ml/L de agua. Espuma queda food-safe. Mata bacterias y levaduras salvajes. Recomendado para principiantes (10-15€/250ml dura años)." },
    { term: "Trasiego (siphoning)", def: "Trasvasar el líquido fermentado a otro recipiente, dejando el sedimento del fondo (lías). Se hace con sifón aprovechando gravedad. Limpia el lote antes de embotellar." },
    { term: "Priming sugar", def: "Azúcar añadida al embotellar para producir CO₂ natural en la botella (carbonatación). 5-7g/L. La levadura residual la come y produce burbujas selladas. Demasiado priming = botellas explotan." },
    { term: "IBU (International Bitterness Units)", def: "Unidades de amargor en cerveza. Lager 8-15 IBU (suave). Pale ale 30-45. IPA 50-70. Imperial IPA 70-100+. Depende del tipo y cantidad de lúpulo + tiempo de hervor." },
    { term: "Ale vs Lager", def: "Tipo de levadura. Ale: fermenta a 18-22°C, rápida (1-2 sem), sabores afrutados. Lager: fermenta a 8-12°C, lenta (3-6 sem), limpia. Ale más fácil para empezar (no necesitas controlar temp baja)." },
    { term: "Lautering", def: "Proceso de separar el mosto del grano agotado tras macerar. Implica filtrado + sparge. Bolsa BIAB (Brew In A Bag) simplifica esto para principiantes." },
    { term: "Mead (hidromiel)", def: "Bebida fermentada de miel + agua + levadura. La bebida alcohólica más antigua del mundo (8000+ años). Variantes: melomel (con frutas), metheglin (con especias), pyment (con uvas), bochet (miel caramelizada)." },
    { term: "Metabisulfito potásico", def: "Compuesto que libera SO₂. Mata bacterias y levaduras salvajes. Tradicional en vinificación. 1g/10L. Sulfitar 24h antes de inocular = más control sobre fermentación." },
    { term: "Yeast washing", def: "Reutilizar levadura de un lote anterior. Recoger sedimento (trub) tras embotellar, lavar con agua hervida fría, guardar en frasco en nevera (2-4 semanas). Ahorra dinero — cada generación se adapta mejor a tu proceso." },
    { term: "Acetobacter (vinagre)", def: "Bacteria que convierte alcohol en ácido acético. Si entra a tu fermento (oxígeno + tiempo) → vinagre en lugar de bebida alcohólica. Por eso airlock + sello hermético son críticos." },
    { term: "Lías / Trub", def: "Sedimento que cae al fondo del fermentador: levadura muerta, proteínas, restos de fruta. Beberlo no es peligroso pero da sabor amargo y turbidez. Por eso el trasiego antes de embotellar." },
    { term: "Pasteurización", def: "Calentar el mosto a 60-65°C durante 15 min para matar bacterias salvajes sin destruir azúcares ni aromas. NO confundir con esterilización (mucho más agresiva). Tradicional en hidromiel." },
    { term: "Carbonatación", def: "CO₂ disuelto en la bebida. Natural (priming sugar) o forzada (con CO₂ y barril). En sidra/cerveza casera: priming. Resultado tarda 2-3 semanas tras embotellar a temperatura ambiente." },
    { term: "Glucosa vs sacarosa vs miel", def: "Diferentes azúcares. Sacarosa (azúcar blanca) es la más simple para fermentar. Miel = glucosa + fructosa (hidromiel). Malta de cerveza = maltosa. Cada una da perfiles distintos." },
  ];

  const filtered = terms.filter(t =>
    t.term.toLowerCase().includes(query.toLowerCase()) ||
    t.def.toLowerCase().includes(query.toLowerCase())
  );

  return (
    <div>
      <InfoBoxX c={c}>
        Términos comunes en fermentación casera. Si encuentras un concepto raro en cualquier modo (Hidromiel, Cerveza, Sidra), buscalo aquí.
      </InfoBoxX>

      <input type="text" placeholder="🔍 Buscar término..." value={query} onChange={(e) => setQuery(e.target.value)} style={{
        width: "100%", padding: "10px 14px", fontSize: "13px",
        background: c.bg2, color: c.textBright, border: `1px solid ${c.border1}`,
        borderRadius: "8px", marginBottom: "12px", fontFamily: "inherit", outline: "none",
      }} />
      <div style={{ fontSize: "11px", color: c.accent2, marginBottom: "12px" }}>
        {filtered.length}/{terms.length} términos {query && `· "${query}"`}
      </div>

      {filtered.map((t, i) => (
        <div key={i} style={{ background: c.bg2, border: `1px solid ${c.border1}`, borderLeft: `3px solid ${c.accent1}`, borderRadius: "10px", padding: "14px", marginBottom: "10px" }}>
          <div style={{ fontSize: "13px", fontWeight: "bold", color: c.textBright, marginBottom: "6px" }}>📖 {t.term}</div>
          <div style={{ fontSize: "12px", color: c.accent3, lineHeight: "1.6" }}>{t.def}</div>
        </div>
      ))}
    </div>
  );
}

function FAQ_FERMENT() {
  const c = FERMENT_COLORS;
  const [query, setQuery] = React.useState("");
  const faqs = [
    { q: "¿Cuánto alcohol tendrá mi bebida?", a: "Depende del azúcar inicial y la levadura. Hidromiel: 10-14% típico. Cerveza: 4-7%. Sidra: 5-8%. Hay calculadoras online (busca 'ABV calculator brewing') que te dan el % exacto si mides densidad inicial y final con un hidrómetro (10-15€ herramienta básica)." },
    { q: "¿Es legal fermentar bebidas en casa?", a: "Sí en España y casi toda la UE — siempre que sea para CONSUMO PROPIO y no comercializado. La destilación SÍ es ilegal sin licencia (whisky, ron casero = ILEGAL). Fermentar = legal. Destilar = ilegal." },
    { q: "¿Cómo sé si mi fermento se ha contaminado?", a: "Señales: olor a vinagre fuerte (acetobacter), capa blanca peluda en la superficie (moho), sabor a podrido. Diferencia importante: capa de levadura (krausen, blanco-cremoso, espuma) = NORMAL. Capa de moho (verde, negro, peludo) = CONTAMINACIÓN, tira el lote." },
    { q: "¿Puedo reutilizar la levadura del lote anterior?", a: "Sí — se llama 'yeast washing'. Después de fermentar, recoges el sedimento del fondo (trub), lavas con agua hervida fría, y guardas en frasco en nevera. Dura 2-4 semanas. Ahorras dinero y cada generación adapta mejor a tu proceso." },
    { q: "¿Qué hago con la levadura sobrante?", a: "Opciones: (1) hacer otro lote inmediatamente, (2) yeast washing para guardar, (3) tirarla al desagüe (pequeñas cantidades, mucho agua). NO tirar al jardín — puede infestar tus plantas con hongos." },
    { q: "¿Por qué mi fermento no burbujea?", a: "Causas posibles: (1) levadura muerta (mosto demasiado caliente al añadirla, máx 25°C), (2) tapón mal sellado (CO₂ se escapa), (3) ya terminó (después de 2-4 semanas la actividad para). Verifica densidad con hidrómetro: si bajó del valor inicial = funcionó aunque no veas burbujas." },
    { q: "¿Necesito hervir todo o puedo usar agua del grifo?", a: "Hidromiel: SÍ, pasteurizar el mosto (calentar 60-65°C 15min) elimina bacterias. Cerveza: SÍ, hervor obligatorio (extrae lúpulo + esteriliza). Sidra/vino con frutas: opcional (la fruta tiene levaduras naturales). Agua del grifo: clorada, mata levadura — déjala reposar 24h en jarra abierta o usa agua mineral." },
    { q: "¿Conviene comprar kit o ir comprando piezas?", a: "Para empezar: KIT. Cubre lo básico, no te falta nada, viene probado. Después de 2-3 lotes y entiendes qué necesitas, puedes comprar piezas mejores individualmente (mejor garrafa de vidrio, sondas digitales de temperatura, etc.)." },
    { q: "¿Diferencia entre Ale y Lager?", a: "Tipo de levadura. ALE: fermenta a 18-22°C, rápida (1-2 sem), sabores afrutados/intensos. Cerveza típica artesanal. LAGER: fermenta a 8-12°C, lenta (3-6 sem), limpia y crujiente. Cerveza estilo industrial (pilsner, etc). Ale = más fácil para empezar." },
    { q: "¿Qué es un SCOBY?", a: "Symbiotic Culture Of Bacteria and Yeast. Disco gelatinoso que se forma en kombucha — combinación de bacterias acéticas + levaduras viviendo juntas. Cada lote produce un SCOBY nuevo. Se reutilizan o regalan." },
    { q: "¿Cómo limpiar el equipo correctamente?", a: "2 fases: (1) LIMPIEZA con agua + jabón — quita suciedad visible. (2) SANITIZACIÓN con Star San o metabisulfito — mata microorganismos. Las dos son distintas. Sanitizar sin limpiar antes = inútil." },
    { q: "¿Puedo fermentar fruta directamente sin levadura añadida?", a: "Sí — la piel de las frutas trae levaduras silvestres (de ahí 'fermentación espontánea'). Funciona pero MENOS PREDECIBLE. Resultado variable, riesgo de bacterias salvajes. Recomendado para principiantes: añadir levadura comercial." },
    { q: "¿Cuánto tiempo aguantan las botellas?", a: "Hidromiel/cerveza/sidra naturales (sin pasteurizar): 1-3 años en frasco frío oscuro. Pasteurizadas (calor 60°C 15min antes de embotellar): 5+ años. Con tiempo: el sabor evoluciona — algunas mejoran (hidromiel), otras se oxidan (cerveza IPA pierde lúpulo)." },
    { q: "¿Qué temperatura ideal para fermentación?", a: "Hidromiel: 18-22°C. Cerveza ALE: 18-22°C. Cerveza LAGER: 8-12°C (necesita nevera dedicada). Sidra: 15-22°C. Variaciones bruscas paran fermentación o producen sabores raros (banana, plástico). En verano: nevera con controlador de temperatura." },
    { q: "¿Mi fermento sabe a vinagre, qué hago?", a: "Acetobacter (bacterias acéticas) entró por contacto con oxígeno. Lote perdido como bebida — pero útil como vinagre artesanal! Continuar fermentando 2-3 semanas más con airlock entendiendo que será vinagre. Para próximo lote: revisar sello hermético del airlock." },
    { q: "¿Cuántos lotes puedo hacer al año?", a: "Hidromiel: 6-8 (4-6 sem por lote). Cerveza: 8-10 (4-6 sem). Sidra: 4-6 (3-6 sem + manzanas estacionales). Si tienes equipo doble = duplica. Empieza con 1 lote primero, aprende, después escala." },
    { q: "¿Mi cerveza queda muy turbia, problema?", a: "No, NORMAL. Cerveza casera tiende turbia por levaduras en suspensión. Para clarificar: (1) tiempo + frío (1-2 sem nevera tras embotellar), (2) gelatina/clarificante (Irish Moss en hervor), (3) cold crash 24h antes de embotellar. Sabor no afectado." },
    { q: "¿Calculadora ABV simple?", a: "(Densidad inicial - Densidad final) × 131.25 = ABV%. Ejemplo: DI 1.060, DF 1.005 → (60-5)×131.25/1000 = 7.2%. Online: 'ABV calculator brewing' busca cualquiera." },
    { q: "¿Mi mosto no fermenta tras 48h, qué pasa?", a: "Causas: (1) levadura muerta (mosto demasiado caliente al añadirla, max 25°C), (2) tapón mal sellado (CO₂ se escapa = sin burbujeo visible pero fermenta), (3) levadura no rehidratada bien antes. Solución: añadir levadura nueva rehidratada correctamente." },
  ];

  const filtered = faqs.filter(f =>
    f.q.toLowerCase().includes(query.toLowerCase()) ||
    f.a.toLowerCase().includes(query.toLowerCase())
  );

  return (
    <div>
      <InfoBoxX c={c}>
        Preguntas comunes sobre fermentación casera. Si tienes dudas más específicas: foros como HomeBrewTalk, r/homebrewing, o el subreddit /r/mead son recursos excelentes.
      </InfoBoxX>

      <div style={{ fontSize: "13px", fontWeight: "bold", color: c.textBright, marginBottom: "8px", letterSpacing: "1px" }}>📊 TABLA ABV — RANGOS POR BEBIDA</div>
      <div style={{ background: c.bg2, border: `1px solid ${c.border1}`, borderRadius: "10px", padding: "14px", marginBottom: "16px" }}>
        <div style={{ fontSize: "11px", color: c.accent2, marginBottom: "10px", lineHeight: "1.5" }}>
          ABV depende de azúcar inicial + levadura + tiempo. Estos rangos son típicos en lotes caseros bien hechos. Calcular exacto: (DI - DF) × 131.25 con hidrómetro.
        </div>
        {[
          { b: "🍯 Hidromiel seco", abv: "10-12%", dens: "DI 1.080-1.090 → DF 0.995-1.000", notas: "Levadura champagne EC-1118. Azúcar fermentado todo. Sabor seco como vino blanco." },
          { b: "🍯 Hidromiel semi-seco", abv: "11-13%", dens: "DI 1.090-1.100 → DF 1.005-1.010", notas: "Levadura D47/71B. Azúcar residual ligero. Equilibrado, más fácil de empezar." },
          { b: "🍯 Hidromiel dulce", abv: "12-14%", dens: "DI 1.110-1.130 → DF 1.020-1.030", notas: "Más miel inicial. Detener fermentación con frío + sulfitos para preservar dulzor." },
          { b: "🍺 Cerveza tipo Pale Ale", abv: "4-6%", dens: "DI 1.045-1.055 → DF 1.010-1.015", notas: "ALE a 18-22°C. Lúpulo notable. Buen estilo para empezar." },
          { b: "🍺 Cerveza IPA", abv: "5-7%", dens: "DI 1.055-1.070 → DF 1.010-1.015", notas: "Más malta + lúpulo en dry hop. Amargor alto." },
          { b: "🍺 Cerveza Stout", abv: "4-6%", dens: "DI 1.045-1.060 → DF 1.012-1.018", notas: "Maltas tostadas. Cuerpo denso. Color negro." },
          { b: "🍺 Lager (pilsner)", abv: "4-5%", dens: "DI 1.045-1.052 → DF 1.008-1.012", notas: "Levadura lager 8-12°C (necesita nevera dedicada). 6-8 sem total." },
          { b: "🍎 Sidra seca", abv: "5-7%", dens: "DI 1.045-1.055 → DF 0.995-1.005", notas: "Manzanas variedad sidra (no postre). Levadura champagne o silvestre." },
          { b: "🍎 Sidra semi-dulce", abv: "4-6%", dens: "DI 1.050-1.060 → DF 1.010-1.015", notas: "Detener fermentación con frío + sulfitos cuando alcance dulzor deseado." },
        ].map((r, i) => (
          <div key={i} style={{ borderBottom: i < 8 ? `1px solid ${c.border1}` : "none", padding: "8px 0" }}>
            <div style={{ display: "flex", justifyContent: "space-between", marginBottom: "3px" }}>
              <div style={{ fontSize: "12px", fontWeight: "bold", color: c.textBright }}>{r.b}</div>
              <div style={{ fontSize: "11px", color: c.accent1, fontWeight: "bold" }}>{r.abv}</div>
            </div>
            <div style={{ fontSize: "11px", color: c.accent2, lineHeight: "1.5", marginBottom: "2px" }}>{r.dens}</div>
            <div style={{ fontSize: "11px", color: c.accent3, lineHeight: "1.5" }}>{r.notas}</div>
          </div>
        ))}
      </div>

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

function BIBLIO_FERMENT() {
  const c = FERMENT_COLORS;
  return <BibliografiaBlock c={c}
    intro="Bibliografía para guía de fermentaciones (hidromiel, cerveza, sidra). Combina manuales clásicos modernos + recursos online actualizados + comunidad activa de homebrewers."
    libros={[
      { titulo: "The Compleat Meadmaker", autor: "Ken Schramm", año: "2003", nota: "Manual definitivo de hidromiel casero. Recetas, ciencia, troubleshoot. Indispensable para mead." },
      { titulo: "How to Brew", autor: "John Palmer", año: "4ª ed. 2017", nota: "Manual de cerveza casera más usado en mundo. Versión online completa GRATUITA en howtobrew.com (1ª edición)." },
      { titulo: "Brewing Classic Styles", autor: "Jamil Zainasheff & John Palmer", año: "2007", nota: "80+ recetas de cerveza por estilo BJCP. Para cuando quieres replicar estilos clásicos." },
      { titulo: "The New Cider Maker's Handbook", autor: "Claude Jolicoeur", año: "2013", nota: "Definitivo para sidra. Variedades manzana, prensado, fermentación, embotellado." },
      { titulo: "Wild Fermentation", autor: "Sandor Katz", año: "2003", nota: "Filosofía + recetas de fermentaciones salvajes. Inspirador para meterse en el tema." },
      { titulo: "The Art of Fermentation", autor: "Sandor Katz", año: "2012", nota: "Continuación enciclopédica. 500+ páginas sobre todo tipo de fermentaciones." },
      { titulo: "Yeast: The Practical Guide to Beer Fermentation", autor: "Chris White & Jamil Zainasheff", año: "2010", nota: "Profundo sobre levaduras — selección, propagación, salud." },
      { titulo: "Designing Great Beers", autor: "Ray Daniels", año: "2000", nota: "Para diseñar tus propias recetas. Análisis estilo por estilo." },
      { titulo: "Mead Science", autor: "B. Moriarty", año: "actual", nota: "Referencia científica moderna sobre hidromiel. Complemento técnico al Schramm." },
      { titulo: "Libro de Hidromiel 2024 (en español)", autor: "varios", año: "2024", nota: "Recurso PDF circulante en español sobre hidromiel. Disponible en Scribd y comunidad ACE." },
    ]}
    web={[
      { nombre: "How to Brew (Palmer online)", url: "http://howtobrew.com", nota: "Primera edición gratuita online. Excelente referencia para empezar cerveza." },
      { nombre: "HomeBrewTalk", url: "https://www.homebrewtalk.com", nota: "Foro de homebrew más grande del mundo. Recetas, troubleshoot, calculadoras." },
      { nombre: "BeerSmith Blog & Software", url: "https://beersmith.com", nota: "Software de recetas + blog técnico. Cálculos automáticos ABV, IBU, color." },
      { nombre: "Brulosophy", url: "https://brulosophy.com", nota: "Experimentos cervezeros — comparativas A/B con resultados estadísticos. Mata mitos." },
      { nombre: "BJCP Style Guidelines (página oficial)", url: "https://www.bjcp.org/style", nota: "Guía oficial estilos cerveza/mead/sidra. Imprescindible. Cerveza/mead = ed. 2021. Sidra = ed. 2025 (rewrite mayor)." },
      { nombre: "BJCP 2025 Cider Style Guidelines (PDF)", url: "https://www.bjcp.org/wp-content/uploads/2025/01/2025_Guidelines_Cider.pdf", nota: "Rewrite mayor de la guía de sidra (reemplaza 2015). 4 categorías: Traditional/Strong/Specialty/Perry. Reemplaza referencias a la edición 2015." },
      { nombre: "BJCP downloads (auto-actualizado)", url: "https://www.bjcp.org/download/", nota: "Página de descargas oficial — versión más reciente disponible siempre." },
      { nombre: "Got Mead?", url: "https://www.gotmead.com", nota: "Sitio dedicado a hidromiel. Recetas + foro." },
      { nombre: "Cider Workshop", url: "https://www.ciderworkshop.com", nota: "Recurso británico sobre sidra artesanal." },
      { nombre: "Brewer's Friend Calculators", url: "https://www.brewersfriend.com", nota: "Calculadoras de ABV, atenuación, IBU, mash, agua, etc." },
      { nombre: "ACE / Asociación de Cerveceros Caseros (España)", url: "https://www.cervecerosaficionados.es", nota: "Comunidad española. Foros + ferias + cursos." },
      { nombre: "Asociación de Cerveceros Caseros Españoles — Hidromiel docs técnicos (ES)", url: "https://www.cerveceros-caseros.com/documentos-tecnicos/hidromiel-i-fermentacion-y-nutrientes/", nota: "Documentación en castellano sobre hidromiel (fermentación + nutrientes)." },
    ]}
    comunidad={[
      { nombre: "r/Homebrewing (Reddit)", nota: "Comunidad principal. Wiki muy completa. Activa para preguntas." },
      { nombre: "r/mead (Reddit)", nota: "Específico hidromiel. Recetas + troubleshooting." },
      { nombre: "r/cider (Reddit)", nota: "Específico sidra. Variedades manzana + métodos." },
      { nombre: "r/firstbrew (Reddit)", nota: "Para principiantes. Buenos hilos sobre primer lote." },
      { nombre: "Homebrewers Association forums", url: "https://www.homebrewersassociation.org", nota: "Foro de la asociación USA. Acceso a competiciones." },
    ]}
    ciencia={[
      { nombre: "Master Brewers Association (MBAA)", url: "https://www.mbaa.com", nota: "Industria cerveza profesional. Papers técnicos sobre química/microbiología." },
      { nombre: "Journal of the Institute of Brewing", url: "https://onlinelibrary.wiley.com/journal/20500416", nota: "Journal científico peer-review sobre cerveza/malta." },
      { nombre: "American Society of Brewing Chemists (ASBC)", url: "https://www.asbcnet.org", nota: "Estándares de análisis cerveza/levaduras/malta." },
      { nombre: "'Quantitative Analysis of Stress Tolerance in Kveik Yeast' (JASBC 2025)", url: "https://brewingscience.com/kveik-yeast-versatile-for-brewing/", nota: "Estudio reciente sobre kveik. Co-pitch con Lactobacillus alcanza pH 3.3-3.5 + 70-80% atenuación en 48h (técnica low-ABV sour rápida)." },
    ]}
    harm={[
      { nombre: "Asociación Española de Cerveceros Caseros — guía higiene", nota: "Recursos en castellano sobre sanitización." },
      { nombre: "BeerSmith podcast (Brad Smith)", url: "https://beersmith.com/podcast/", nota: "Episodios sobre seguridad alimentaria, contaminaciones." },
      { nombre: "Brulosophy 'exBEERiments' on contamination", nota: "Datos reales sobre cómo y cuándo se contaminan los lotes." },
      { nombre: "Wild Fermentation FAQ (Sandor Katz)", url: "https://www.wildfermentation.com", nota: "Para fermentaciones espontáneas — qué es seguro y qué no." },
    ]}
  />;
}

// ──────────────────────────────────────────────
// FERMENTACIONES NO ALCOHÓLICAS / PROBIÓTICAS
// Kombucha, kéfir, encurtidos, kimchi, chucrut, tempeh, masa madre
// ──────────────────────────────────────────────

function KOMBUCHA() {
  const c = FERMENT_COLORS;
  return (
    <div>
      <InfoBoxX c={c}>
        Kombucha = té fermentado por una colonia simbiótica de bacterias y levaduras (SCOBY). El SCOBY transforma el té azucarado en una bebida ligeramente ácida, efervescente y llena de probióticos, ácidos orgánicos y enzimas. Sabor: entre sidra suave y té frío, con un punto avinagrado refrescante. Alcohol residual &lt;0.5% (no recreativo). Una vez que tienes tu SCOBY, cada lote cuesta ~1€ en ingredientes.
      </InfoBoxX>

      <div style={{ display: "grid", gap: "6px", marginBottom: "16px" }}>
        {[
          { label: "Dificultad", value: "Fácil — ideal primera fermentación" },
          { label: "Tiempo total", value: "10-20 días (primaria 7-14d + secundaria 2-5d)" },
          { label: "Equipo necesario", value: "Jarra vidrio 3L, SCOBY, tela + goma, botellas" },
          { label: "Rendimiento", value: "~2.5 L por lote" },
        ].map((s, i) => (
          <StatBoxX key={i} c={c} label={s.label} value={s.value} />
        ))}
      </div>

      <SectionTitleX c={c}>🛒 Ingredientes</SectionTitleX>
      <StepX c={c} num={1} text="Té negro o verde (4-6 bolsitas o 8-12g de té en hebras). El té negro da sabor más intenso, el verde más suave. Evita tés con aceites esenciales (Earl Grey, aromatizados) — dañan el SCOBY." />
      <StepX c={c} num={2} text="Azúcar blanco (200g para 2.5L). El azúcar NO es para ti — es comida para el SCOBY. La mayor parte se consume en la fermentación. No uses miel, panela ni edulcorantes (la miel tiene compuestos antimicrobianos que frenan el SCOBY)." />
      <StepX c={c} num={3} text="SCOBY + líquido starter (200ml de kombucha anterior o vinagre blanco). El SCOBY es el disco gelatinoso. El starter acidifica el lote nuevo y protege contra moho." />
      <StepX c={c} num={4} text="Agua sin cloro (2.5L). El cloro mata el SCOBY. Usa agua mineral, filtrada o deja agua del grifo reposar 24h en jarra abierta." />

      <SectionTitleX c={c}>🔧 Equipo</SectionTitleX>
      <StepX c={c} num={1} text="Jarra de vidrio de boca ancha (3-4 litros). El vidrio es imprescindible — el plástico retiene olores, el metal reacciona con la acidez. Boca ancha = más oxígeno para el SCOBY." />
      <StepX c={c} num={2} text="Tela transpirable (muselina, gasa, paño de cocina limpio) + goma elástica. Cubre la boca de la jarra para que respire pero no entren insectos ni polvo." />
      <StepX c={c} num={3} text="Botellas de vidrio con cierre hermético (swing-top). Para la fermentación secundaria con gas. Botellas de kombucha comercial reutilizadas también valen." />
      <StepX c={c} num={4} text="Embudo de plástico, cuchara de madera o silicona (nunca metal). El metal puede reaccionar con los ácidos de la kombucha." />

      <SectionTitleX c={c}>📋 Proceso paso a paso</SectionTitleX>
      <StepX c={c} num={1} text="Preparar el té: hierve 500ml de agua, añade el té y deja infusionar 15-20 minutos. Retira las bolsitas/hebras. Añade el azúcar y remueve hasta disolver completamente." />
      <StepX c={c} num={2} text="Enfriar: añade los 2L de agua fría restantes al té concentrado. La temperatura final debe ser 20-25°C. Si está caliente = matas el SCOBY." />
      <StepX c={c} num={3} text="Verter en la jarra de vidrio limpia. Añade el SCOBY + el líquido starter (200ml). El SCOBY puede flotar, hundirse o quedar de lado — las tres posiciones son normales." />
      <StepX c={c} num={4} text="Cubrir la boca con la tela y fijar con goma. Colocar en un sitio cálido (22-26°C), sin luz directa, sin corrientes de aire. Ideal: encima de la nevera." />
      <StepX c={c} num={5} text="Fermentación primaria (F1): 7-14 días. Prueba a partir del día 7 con una pajita o cuchara limpia. Debe saber ácido pero aún ligeramente dulce. Más tiempo = más ácido/avinagrado. Menos tiempo = más dulce." />
      <StepX c={c} num={6} text="Cuando el sabor te gusta: retira el SCOBY con manos limpias y resérvalo en un bol con un poco de kombucha. En la superficie se habrá formado un SCOBY nuevo — puedes usar cualquiera de los dos para el siguiente lote." />
      <StepX c={c} num={7} text="Fermentación secundaria (F2) — embotellado con sabor: vierte la kombucha en botellas, dejando 3-4cm de espacio. Añade saborizante: 10-15% de zumo de fruta, trocitos de fruta, jengibre rallado, o hierbas." />
      <StepX c={c} num={8} text="Cerrar botellas herméticamente. Dejar 2-5 días a temperatura ambiente para que carbonate. Abrir una botella al día 2 para comprobar gas — si está muy efervescente, meter todas a la nevera." />
      <StepX c={c} num={9} text="Nevera: detiene la fermentación. Consumir en 2-4 semanas. Guardar SIEMPRE en nevera tras F2 o las botellas pueden explotar por exceso de presión." />

      <SectionTitleX c={c}>🏨 SCOBY HOTEL — mantenimiento</SectionTitleX>
      <InfoBoxX c={c}>
        Cada lote produce un SCOBY nuevo. No necesitas quedártelos todos. Mantén un "hotel" con los SCOBYs extra en un tarro con kombucha sin saborizar + un poco de té dulce fresco cada 2-3 semanas. Se pueden regalar a amigos. Un hotel sano puede durar meses sin atención.
      </InfoBoxX>

      <SectionTitleX c={c}>⏱️ Timeline</SectionTitleX>
      <StepX c={c} num="1" text="Día 1: preparar té dulce + inocular con SCOBY." />
      <StepX c={c} num="2" text="Días 3-7: el SCOBY nuevo empieza a formarse en la superficie (capa fina transparente). Burbujas visibles. Aroma ácido agradable." />
      <StepX c={c} num="3" text="Día 7-10: probar. Si el dulzor ha bajado y el ácido está equilibrado → listo para F2." />
      <StepX c={c} num="4" text="Día 10-14: embotellado + F2 con sabor. 2-5 días a temperatura ambiente." />
      <StepX c={c} num="5" text="Día 12-19: nevera. A beber. Sabor mejora tras 2-3 días en frío." />
      <StepX c={c} num="6" text="Día 14-20: lote totalmente terminado. Empezar siguiente lote inmediatamente (o guardar SCOBY en hotel)." />

      <SectionTitleX c={c}>🐛 Problemas comunes</SectionTitleX>
      <ErrorCardX c={c}
        error="Moho en el SCOBY (puntos verdes, negros o blancos secos y peludos)"
        consecuencia="Moho = contaminación fúngica. NO es seguro consumir. El SCOBY está muerto."
        fix="Tirar TODO (líquido + SCOBY). Sanitizar jarra y empezar con SCOBY nuevo. Causa: temperatura baja (&lt;18°C), poca acidez inicial (falta starter), o exposición a contaminantes."
      />
      <ErrorCardX c={c}
        error="SCOBY se hunde y no se forma nuevo"
        consecuencia="Puede ser normal (SCOBYs viejos se hunden) o indicar temperatura demasiado baja."
        fix="Subir temperatura a 24-26°C. Añadir más starter (200ml). Si tras 5-7 días no hay capa nueva en superficie → el SCOBY está muerto, comprar uno nuevo."
      />
      <ErrorCardX c={c}
        error="Gusanos o larvas en el SCOBY (moscas de vinagre)"
        consecuencia="La tela NO era suficientemente tupida o la goma no sellaba bien. Las moscas del vinagre ponen huevos que eclosionan en larvas."
        fix="Tirar todo. Para próximo lote: usa tela de trama MUY fina (muselina doble capa o filtro de café) + goma bien ajustada. NUNCA uses gasa suelta — las moscas la atraviesan."
      />
      <ErrorCardX c={c}
        error="Kombucha demasiado avinagrada"
        consecuencia="Inbebible como refresco, pero perfecta como vinagre de cocina o starter para siguiente lote."
        fix="Embotella antes la próxima vez (día 5-7 en lugar de 14). Puedes diluir este lote con té dulce nuevo para balancear."
      />
      <ErrorCardX c={c}
        error="Botella explota durante F2"
        consecuencia="Demasiada presión. Fruta con mucho azúcar + mucho tiempo = CO₂ acumulado hasta reventar vidrio."
        fix="Abrir botellas cada 24h en F2 para liberar presión ('burping'). No llenar más de 80% de la botella. Usar botellas diseñadas para presión (swing-top, no botellas de agua finas)."
      />

      <SectionTitleX c={c}>🍽️ Sabores para F2</SectionTitleX>
      <div style={{ display: "grid", gap: "8px", marginBottom: "16px" }}>
        {[
          { sabor: "🍓 Fresa + albahaca", rec: "50ml puré de fresas maduras + 3 hojas de albahaca fresca por botella de 500ml." },
          { sabor: "🫚 Jengibre + limón", rec: "2 rodajas finas de jengibre fresco + zumo de ½ limón por botella. Clásico infalible." },
          { sabor: "🍑 Melocotón + vainilla", rec: "¼ melocotón maduro en trocitos + 2 gotas de extracto de vainilla puro." },
          { sabor: "🫐 Arándanos + romero", rec: "30g de arándanos frescos aplastados + 1 ramita pequeña de romero." },
          { sabor: "🍇 Uva + canela", rec: "50ml de zumo de uva blanca + ¼ rama de canela." },
          { sabor: "🌺 Hibisco (flor de Jamaica)", rec: "50ml de infusión concentrada de hibisco. Color rojo intenso." },
          { sabor: "🥭 Mango + chile", rec: "40g de mango maduro triturado + punta de cuchillo de chile en polvo." },
        ].map((f, i) => (
          <div key={i} style={{ background: c.bg2, border: `1px solid ${c.border1}`, borderRadius: "8px", padding: "10px" }}>
            <div style={{ fontSize: "12px", fontWeight: "bold", color: c.textBright, marginBottom: "3px" }}>{f.sabor}</div>
            <div style={{ fontSize: "11px", color: c.accent3, lineHeight: "1.5" }}>{f.rec}</div>
          </div>
        ))}
      </div>

      <SectionTitleX c={c}>📦 Conservación</SectionTitleX>
      <StepX c={c} num={1} text="Kombucha embotellada en nevera (4°C): 2-4 semanas. La fermentación se ralentiza pero no para del todo — con el tiempo se vuelve más avinagrada." />
      <StepX c={c} num={2} text="SCOBY en hotel: meses. Alimentar con 200ml de té dulce cada 2-3 semanas. Tapado con tela, temperatura ambiente." />
      <StepX c={c} num={3} text="SCOBY de backup: guardar un SCOBY sumergido en kombucha fuerte en un tarro pequeño en la nevera — aguanta 3-6 meses sin alimentar." />
      <StepX c={c} num={4} text="Deshidratar SCOBY: colocar en plato a temperatura ambiente hasta que seque completamente (2-3 días). Guardar en bolsa ziploc. Rehidratar con té dulce para reactivar." />

      <LegalHealthBox c={c}
        legal={<>✅ Kombucha casera para consumo propio: 100% LEGAL España y UE.<br/>⚠️ Comercializar kombucha requiere registro sanitario (contiene microorganismos vivos).<br/>ℹ️ Alcohol residual siempre &lt;0.5% — legalmente considerado bebida NO alcohólica.</>}
        salud="La kombucha contiene ácidos orgánicos (acético, glucónico, láctico), probióticos vivos, enzimas y polifenoles del té. Efectos reportados: mejora digestión, energía, desintoxicación hepática (no hay ensayos clínicos grandes que lo confirmen). Tomar 200-400ml/día máximo al principio — el exceso puede causar malestar digestivo. Embarazo/lactancia: consultar médico (bebida fermentada viva, riesgo teórico bajo pero no estudiado)."
        contraindicaciones="Embarazo/lactancia (consultar médico) · Inmunodeprimidos · Acidosis metabólica · Exceso (&gt;500ml/día) puede causar acidosis láctica · Interacción teórica con medicación hepática"
        recursos="r/kombucha · The Big Book of Kombucha (Hannah Crum) · KombuchaKamp.com · Fermentation podcast (Sandor Katz)"
      />
    </div>
  );
}

function KEFIR_AGUA() {
  const c = FERMENT_COLORS;
  return (
    <div>
      <InfoBoxX c={c}>
        Kéfir de agua (tíbicos) = granos gelatinosos que fermentan agua azucarada en una bebida probiótica ligeramente efervescente. Los granos son colonias de bacterias lácticas + levaduras que viven en simbiosis. Sabor: refresco natural con un toque ácido, similar a una limonada fermentada. Los granos se multiplican — empiezas con 50g y en meses tienes para regalar. Rápido, barato y sin alcohol significativo (&lt;0.5%).
      </InfoBoxX>

      <div style={{ display: "grid", gap: "6px", marginBottom: "16px" }}>
        {[
          { label: "Dificultad", value: "Muy fácil — el más simple de todos" },
          { label: "Tiempo total", value: "2-4 días (24-48h F1 + 24h F2)" },
          { label: "Equipo necesario", value: "Jarra vidrio, colador plástico, tela, botellas" },
          { label: "Rendimiento", value: "~1.5-2 L por lote con 50g de granos" },
        ].map((s, i) => (
          <StatBoxX key={i} c={c} label={s.label} value={s.value} />
        ))}
      </div>

      <SectionTitleX c={c}>🛒 Ingredientes</SectionTitleX>
      <StepX c={c} num={1} text="Granos de kéfir de agua (tíbicos) — 50g para empezar. Se consiguen regalados de otros fermentadores (grupos Facebook, Wallapop), o comprados deshidratados en herbolarios (~5-10€). Los granos hidratados son mejor que los secos para empezar." />
      <StepX c={c} num={2} text="Azúcar blanco (60g por litro de agua). Los tíbicos comen sacarosa. No uses miel (antimicrobiana), panela (demasiados minerales = estrés), ni edulcorantes (no comen). Azúcar blanco normal de supermercado funciona perfecto." />
      <StepX c={c} num={3} text="Agua sin cloro (1.5-2 L). El cloro mata los granos. Agua mineral o filtrada. Si usas agua del grifo: hervir 10 min y enfriar, o dejar reposar 24h en jarra abierta." />
      <StepX c={c} num={4} text="Limón (½ limón ecológico por litro) + higo seco (1 por litro) — aportan minerales y nitrógeno que los granos necesitan. Alternativas al higo: pasas, orejones de albaricoque, dátiles. Alternativas al limón: cáscara de naranja ecológica." />
      <StepX c={c} num={5} text="Para F2 (secundaria): zumo de fruta natural (100%), trocitos de fruta, jengibre, hierbas. 10-15% del volumen de la botella." />

      <SectionTitleX c={c}>🔧 Equipo</SectionTitleX>
      <StepX c={c} num={1} text="Jarra de vidrio de 2L. El vidrio es ideal. Puedes usar plástico food-grade pero evita metal." />
      <StepX c={c} num={2} text="Colador de plástico (nunca metal). Los granos se estresan con el contacto metálico. Colador de plástico de cocina normal." />
      <StepX c={c} num={3} text="Tela transpirable + goma para cubrir la jarra durante F1." />
      <StepX c={c} num={4} text="Botellas con cierre hermético (swing-top) para F2 con gas." />
      <StepX c={c} num={5} text="Embudo de plástico y cuchara de madera/silicona." />

      <SectionTitleX c={c}>📋 Proceso paso a paso</SectionTitleX>
      <StepX c={c} num={1} text="Disolver el azúcar: en la jarra, añade 60g de azúcar por litro de agua a temperatura ambiente. Remueve hasta disolver totalmente. Los granos no pueden masticar cristales de azúcar — si hay azúcar sin disolver, pueden dañarse." />
      <StepX c={c} num={2} text="Añadir los granos de kéfir. Proporción: 50g de granos para 1.5-2L de agua azucarada. Ellos flotan y se hunden — normal." />
      <StepX c={c} num={3} text="Añadir ½ limón ecológico en rodajas (con cáscara) + 1 higo seco por litro. El limón aporta ácido cítrico (baja pH) + minerales. El higo aporta nitrógeno (proteína). Sin esto, los granos se debilitan tras 2-3 lotes." />
      <StepX c={c} num={4} text="Cubrir con tela + goma. Dejar a temperatura ambiente (20-26°C), sin luz solar directa. La fermentación es aeróbica (los granos respiran)." />
      <StepX c={c} num={5} text="Fermentación primaria (F1): 24-48 horas. En verano (25°C+): 24h bastan. En invierno (18-20°C): 48h. Señales de que está listo: líquido turbio, burbujas visibles, sabor ligeramente ácido y ya no dulce, los higos flotan." />
      <StepX c={c} num={6} text="Colar: vierte el líquido a través del colador de plástico a otra jarra. Los granos se quedan en el colador. El líquido colado ya es kéfir de agua bebible — sencillo y refrescante." />
      <StepX c={c} num={7} text="Enjuagar los granos: opcional pero recomendado. Pasa agua sin cloro por el colador para limpiar residuos de azúcar. Los granos deben verse translúcidos, no opacos." />
      <StepX c={c} num={8} text="F2 con sabor: embotella el kéfir colado + añade 10-15% de zumo de fruta. Cierra hermético. Deja 24h a temperatura ambiente para que carbonate. Después: nevera." />
      <StepX c={c} num={9} text="Siguiente lote: los granos vuelven a la jarra con nueva agua azucarada + limón + higo. Empieza inmediatamente o guarda los granos en nevera." />

      <SectionTitleX c={c}>🌱 Multiplicación de granos</SectionTitleX>
      <InfoBoxX c={c}>
        Los tíbicos se duplican cada 7-10 días si están bien alimentados. Cuando tengas más de 100g, puedes: (1) hacer lotes más grandes, (2) dividir y regalar 50g a un amigo con instrucciones, (3) deshidratar el excedente para backup. Para deshidratar: extender sobre papel de horno a temperatura ambiente 2-3 días hasta que estén duros y translúcidos → guardar en bote hermético en lugar oscuro (duran 6-12 meses).
      </InfoBoxX>

      <SectionTitleX c={c}>⏱️ Timeline</SectionTitleX>
      <StepX c={c} num="1" text="Día 1, mañana: preparar agua azucarada + añadir granos + limón + higos." />
      <StepX c={c} num="2" text="Día 1, noche (12h): empiezan burbujas, líquido se enturbia, higos empiezan a subir." />
      <StepX c={c} num="3" text="Día 2 (24h): probar. Si aún muy dulce → esperar 12-24h más. Si ácido agradable → colar." />
      <StepX c={c} num="4" text="Día 2-3: colar + embotellar con zumo para F2. Dejar 24h a temperatura ambiente." />
      <StepX c={c} num="5" text="Día 3-4: nevera. Listo para beber. Empezar lote nuevo con los granos colados." />

      <SectionTitleX c={c}>🐛 Problemas comunes</SectionTitleX>
      <ErrorCardX c={c}
        error="Granos se deshacen o se vuelven 'babosos'"
        consecuencia="Los granos están estresados por falta de minerales. Se vuelven opacos y pierden estructura."
        fix="Añadir más limón + higo al lote. Alternar una vez al mes con azúcar moreno claro (más minerales que el blanco). Si persiste: ½ cucharadita de bicarbonato sódico alimentario en el agua para subir minerales."
      />
      <ErrorCardX c={c}
        error="Los granos no crecen ni burbujean"
        consecuencia="Agua clorada, temperatura demasiado baja, o azúcar insuficiente."
        fix="Usar agua mineral. Subir a 22-26°C (encima nevera). Verificar proporción: mínimo 50g azúcar por litro. Si llevan 3-4 lotes sin crecer: añadir una pasa o dátil (nitrógeno extra)."
      />
      <ErrorCardX c={c}
        error="Moho en la superficie del líquido"
        consecuencia="Contaminación fúngica — suele ser por higos/pasas que flotan y se enmohecen."
        fix="Tirar todo (granos + líquido). Para próximos lotes: usar fruta deshidratada de buena calidad, y sumergir los higos bajo los granos para que no floten expuestos al aire."
      />
      <ErrorCardX c={c}
        error="Kéfir con olor a 'huevo podrido' (sulfuroso)"
        consecuencia="Exceso de levaduras vs bacterias. Los granos están desequilibrados."
        fix="Reducir tiempo de fermentación. Añadir una pizca de sal marina sin yodo (minerales para bacterias). Dejar los granos 24h en nevera con agua azucarada (el frío favorece bacterias sobre levaduras)."
      />

      <SectionTitleX c={c}>🍽️ Sabores para F2</SectionTitleX>
      <div style={{ display: "grid", gap: "8px", marginBottom: "16px" }}>
        {[
          { sabor: "🍋 Limón + jengibre", rec: "Zumo de ½ limón + 2 rodajas de jengibre por 500ml." },
          { sabor: "🍇 Uva blanca", rec: "100ml de zumo de uva natural por 500ml." },
          { sabor: "🍎 Manzana + canela", rec: "50ml zumo de manzana + ¼ rama canela." },
          { sabor: "🌺 Hibisco", rec: "50ml de infusión concentrada de flor de Jamaica. Color rosa intenso." },
          { sabor: "🍑 Melocotón", rec: "½ melocotón triturado por botella. Verano." },
          { sabor: "🫐 Frutos rojos", rec: "30g de frambuesas/arándanos/moras frescas aplastadas." },
          { sabor: "🌿 Hierbabuena + lima", rec: "5 hojas de hierbabuena fresca + zumo de ½ lima." },
        ].map((f, i) => (
          <div key={i} style={{ background: c.bg2, border: `1px solid ${c.border1}`, borderRadius: "8px", padding: "10px" }}>
            <div style={{ fontSize: "12px", fontWeight: "bold", color: c.textBright, marginBottom: "3px" }}>{f.sabor}</div>
            <div style={{ fontSize: "11px", color: c.accent3, lineHeight: "1.5" }}>{f.rec}</div>
          </div>
        ))}
      </div>

      <SectionTitleX c={c}>📦 Conservación</SectionTitleX>
      <StepX c={c} num={1} text="Kéfir embotellado en nevera: 1-2 semanas. Abrir cada 2-3 días para liberar presión — sigue fermentando lentamente." />
      <StepX c={c} num={2} text="Granos en nevera (descanso): sumergir en agua azucarada + tapar. Aguantan 2-4 semanas sin alimentar. Al reactivar: escurrir, hacer un lote normal — el primer lote tras descanso puede tardar 48-72h." />
      <StepX c={c} num={3} text="Granos deshidratados: duran 6-12 meses en bote hermético, lugar oscuro y seco. Para reactivar: hidratar 24h en agua azucarada, luego hacer lote normal." />
      <StepX c={c} num={4} text="Granos congelados: NO recomendado. Los cristales de hielo rompen las estructuras bacterianas. Pierden viabilidad." />

      <LegalHealthBox c={c}
        legal={<>✅ Totalmente legal. Bebida no alcohólica (&lt;0.5% ABV).<br/>✅ Los granos de kéfir son un alimento tradicional, no requieren registro sanitario para consumo propio.</>}
        salud="El kéfir de agua contiene bacterias lácticas (Lactobacillus, Leuconostoc) + levaduras beneficiosas. Probiótico natural que apoya la flora intestinal. Bajo en calorías (~30kcal/200ml, la mayor parte del azúcar se consume en la fermentación). Tomar 200-400ml/día."
        contraindicaciones="Inmunodeprimidos (microorganismos vivos) · Embarazo/lactancia (consultar médico) · Introducir gradualmente para evitar gases"
        recursos="r/Kefir · r/WaterKefir · Cultures for Health · The Art of Fermentation (Sandor Katz)"
      />
    </div>
  );
}

function KEFIR_LECHE() {
  const c = FERMENT_COLORS;
  return (
    <div>
      <InfoBoxX c={c}>
        Kéfir de leche = leche fermentada por granos de kéfir (colonias de bacterias lácticas + levaduras). Sabor: ácido, cremoso, similar al yogur pero más líquido y complejo. Textura: entre yogur bebible y leche cortada. Contiene 30-50 cepas diferentes de microorganismos (el yogur comercial solo tiene 2-4). Se hace en 24h a temperatura ambiente. Los granos duran toda la vida si los cuidas.
      </InfoBoxX>

      <div style={{ display: "grid", gap: "6px", marginBottom: "16px" }}>
        {[
          { label: "Dificultad", value: "Muy fácil — solo colar cada 24h" },
          { label: "Tiempo total", value: "24h por lote (más 12-24h opcional de F2)" },
          { label: "Equipo necesario", value: "Jarra vidrio, colador plástico, tela" },
          { label: "Rendimiento", value: "1L de kéfir por litro de leche" },
        ].map((s, i) => (
          <StatBoxX key={i} c={c} label={s.label} value={s.value} />
        ))}
      </div>

      <SectionTitleX c={c}>🛒 Ingredientes</SectionTitleX>
      <StepX c={c} num={1} text="Leche fresca entera (1L). La leche entera da mejor textura y sabor. Puedes usar semi-desnatada pero el kéfir será más líquido. Leche UHT también funciona (aunque tiene menos flora natural). La leche fresca de granja o del día es la mejor." />
      <StepX c={c} num={2} text="Granos de kéfir de leche: 20-30g (1-2 cucharadas). Se consiguen igual que los de agua: regalados en grupos de Facebook, herbolarios, Wallapop. Los granos hidratados son mejor que los liofilizados." />
      <StepX c={c} num={3} text="Nada más. Literalmente solo leche + granos. Sin azúcar, sin cultivos añadidos." />

      <SectionTitleX c={c}>🔧 Equipo</SectionTitleX>
      <StepX c={c} num={1} text="Jarra de vidrio de 1L. Boca ancha ideal para facilitar el colado." />
      <StepX c={c} num={2} text="Colador de plástico (nunca metal). Malla fina — los granos son pequeños." />
      <StepX c={c} num={3} text="Tela transpirable, filtro de café, o papel de cocina + goma para cubrir la jarra." />
      <StepX c={c} num={4} text="Cuchara de madera o silicona para remover." />
      <StepX c={c} num={5} text="Botella o tarro de vidrio para guardar el kéfir terminado en nevera." />

      <SectionTitleX c={c}>📋 Proceso paso a paso</SectionTitleX>
      <StepX c={c} num={1} text="Añadir los granos a la jarra de vidrio limpia (no necesita sanitización agresiva como en hidromiel — el kéfir de leche es muy resistente)." />
      <StepX c={c} num={2} text="Verter 1L de leche fresca sobre los granos. Temperatura ideal de la leche: 20-25°C. Si la leche está fría de nevera, déjala templar 30 min antes." />
      <StepX c={c} num={3} text="Remover suavemente con cuchara de madera/silicona para distribuir los granos. Cubrir la boca de la jarra con tela transpirable o filtro de café + goma. NO cerrar hermético — los granos producen CO₂." />
      <StepX c={c} num={4} text="Dejar a temperatura ambiente (20-25°C) durante 24 horas. En verano: 18-20h bastan. En invierno (&lt;20°C): hasta 30-36h." />
      <StepX c={c} num={5} text="Señales de que está listo: la leche ha espesado, se ven pequeñas bolsas de suero separándose, el olor es ácido y láctico (como yogur). Al inclinar la jarra: el kéfir se despega de la pared en una masa coherente." />
      <StepX c={c} num={6} text="Colar: vierte el contenido en el colador de plástico sobre otro recipiente. Remueve suavemente los granos en el colador con cuchara de madera para que el kéfir pase. Los granos quedan retenidos." />
      <StepX c={c} num={7} text="El líquido colado ya es kéfir bebible. Mételo en nevera — se espesa más en frío. Los granos que quedan en el colador van directos a la jarra limpia con 1L de leche fresca para el siguiente lote." />
      <StepX c={c} num={8} text="Segunda fermentación opcional (F2): deja el kéfir colado 12-24h en nevera o temperatura ambiente en tarro tapado. Desarrolla sabor más complejo y efervescencia." />

      <SectionTitleX c={c}>🌱 Multiplicación y mantenimiento de granos</SectionTitleX>
      <InfoBoxX c={c}>
        Los granos de kéfir de leche crecen ~10-20% por lote. Se duplican cada 2-3 semanas. Cuando tengas exceso: (1) regala a amigos con instrucciones, (2) cómetelos (son comestibles, saben a queso ácido), (3) deshidrata para backup, (4) congela. Para deshidratar: enjuagar con leche fresca, extender sobre papel a temperatura ambiente 2-3 días → guardar en bote hermético (duran 6-12 meses). Para congelar: escurrir, meter en bolsa ziploc al congelador (duran 3-6 meses).
      </InfoBoxX>

      <SectionTitleX c={c}>⏱️ Timeline</SectionTitleX>
      <StepX c={c} num="1" text="Día 1, mañana: leche + granos en jarra. Tapar con tela." />
      <StepX c={c} num="2" text="Día 1, noche (12h): leche empieza a espesar, se ven primeras burbujas." />
      <StepX c={c} num="3" text="Día 2, mañana (24h): colar. Kéfir a nevera. Granos a nueva leche." />
      <StepX c={c} num="4" text="Día 2, noche: kéfir espeso y ácido, listo para beber." />

      <SectionTitleX c={c}>🐛 Problemas comunes</SectionTitleX>
      <ErrorCardX c={c}
        error="Separación: suero abajo, sólidos arriba"
        consecuencia="Sobre-fermentación. Demasiado tiempo o temperatura alta. La leche se ha cortado en cuajada + suero."
        fix="Bebible y seguro — solo agitar para re-emulsionar. Para próximos lotes: reducir tiempo a 16-20h o bajar temperatura. Si hace calor (&gt;28°C): fermentar en zona más fresca o reducir a 12h."
      />
      <ErrorCardX c={c}
        error="Los granos no crecen o se encogen"
        consecuencia="Falta de nutrientes, leche demasiado procesada (UHT muy tratada), o temperatura baja."
        fix="Usar leche entera fresca. Mantener a 22-25°C. Cada pocos lotes, hacer un lote con leche fresca de pastoreo (más minerales). Si persiste: añadir un trocito de cáscara de limón ecológica al lote."
      />
      <ErrorCardX c={c}
        error="Kéfir con sabor a 'levadura' o 'pan' demasiado intenso"
        consecuencia="Desequilibrio levaduras/bacterias — las levaduras dominan."
        fix="Reducir temperatura de fermentación (18-20°C en lugar de 25°C). Añadir una pizca de sal marina al lote (favorece bacterias lácticas). Fermentar en nevera 48h un lote (el frío selecciona bacterias)."
      />
      <ErrorCardX c={c}
        error="Moho en la superficie (puntos verdes o rosas)"
        consecuencia="Contaminación fúngica. Poco común en kéfir de leche porque acidifica rápido, pero posible con leche muy tratada o jarra sucia."
        fix="Tirar TODO. Para próximos lotes: usar leche fresca de mejor calidad, limpiar bien la jarra con agua caliente + vinagre (sin jabón)."
      />

      <SectionTitleX c={c}>🍽️ Usos del kéfir de leche</SectionTitleX>
      <div style={{ display: "grid", gap: "8px", marginBottom: "16px" }}>
        {[
          { uso: "🥛 Bebido solo", nota: "Fresco de nevera, tal cual. Opcional: endulzar con miel, fruta troceada, o canela." },
          { uso: "🥤 Batido de frutas", nota: "200ml kéfir + plátano + fresas + miel. Licuar. Desayuno probiótico completo." },
          { uso: "🧀 Queso fresco / labneh", nota: "Colar kéfir en filtro de café o tela fina 12-24h en nevera. El suero gotea y queda queso cremoso. Añadir sal + hierbas." },
          { uso: "🍞 Sustituto de buttermilk", nota: "En recetas de bizcochos, pancakes, pan. Aporta acidez + esponjosidad." },
          { uso: "🥣 Con granola", nota: "Alternativa probiótica al yogur con cereales." },
          { uso: "🧴 Mascarilla facial", nota: "Aplicar kéfir en rostro 10 min, aclarar. Ácido láctico = exfoliante natural suave." },
        ].map((f, i) => (
          <div key={i} style={{ background: c.bg2, border: `1px solid ${c.border1}`, borderRadius: "8px", padding: "10px" }}>
            <div style={{ fontSize: "12px", fontWeight: "bold", color: c.textBright, marginBottom: "3px" }}>{f.uso}</div>
            <div style={{ fontSize: "11px", color: c.accent3, lineHeight: "1.5" }}>{f.nota}</div>
          </div>
        ))}
      </div>

      <SectionTitleX c={c}>📦 Conservación</SectionTitleX>
      <StepX c={c} num={1} text="Kéfir terminado en nevera: 1-2 semanas. Se vuelve más ácido con el tiempo — normal." />
      <StepX c={c} num={2} text="Granos en leche fresca en nevera (descanso): hasta 2 semanas sin alimentar. Al reactivar: colar, poner con leche fresca a temperatura ambiente. El primer lote puede tardar 36-48h." />
      <StepX c={c} num={3} text="Granos deshidratados: 6-12 meses en lugar oscuro y seco. Reactivar: rehidratar en leche 24h, luego lote normal." />
      <StepX c={c} num={4} text="Granos congelados: 3-6 meses. Descongelar en nevera lentamente, luego reactivar con leche fresca." />

      <LegalHealthBox c={c}
        legal={<>✅ Totalmente legal. Lácteo fermentado tradicional, mismo estatus que yogur casero.<br/>✅ No requiere registro sanitario para consumo propio.</>}
        salud="El kéfir de leche contiene 30-50 cepas de bacterias lácticas y levaduras, frente a las 2-4 del yogur comercial. Probiótico con evidencia de mejora digestiva, tolerancia a la lactosa (las bacterias la predigieren), y modulación inmune. Rico en calcio, magnesio, vitaminas B y K. Tomar 200-400ml/día. Introducir gradualmente en dieta — la primera semana puede producir gases."
        contraindicaciones="Alergia a proteína láctea (no intolerancia a lactosa — el kéfir tiene poca lactosa) · Inmunodeprimidos (consultar médico) · Bebés &lt;1 año (no recomendado)"
        recursos="r/Kefir · Dom's Kefir (users.sa.chariot.net.au) · The Art of Fermentation (Sandor Katz) · Cultures for Health"
      />
    </div>
  );
}

function ENCURTIDOS() {
  const c = FERMENT_COLORS;
  return (
    <div>
      <InfoBoxX c={c}>
        Encurtidos lacto-fermentados = vegetales sumergidos en salmuera donde las bacterias lácticas (Lactobacillus) transforman los azúcares en ácido láctico. El resultado: vegetales crujientes, ácidos y llenos de probióticos. Sin vinagre añadido — la acidez es 100% natural. Es la forma más antigua de conservar verduras (6000+ años). Sabor: entre pepinillo y chucrut, con el carácter de la verdura fresca.
      </InfoBoxX>

      <div style={{ display: "grid", gap: "6px", marginBottom: "16px" }}>
        {[
          { label: "Dificultad", value: "Muy fácil — principiante absoluto" },
          { label: "Tiempo total", value: "7-30 días según temperatura y verdura" },
          { label: "Equipo necesario", value: "Tarros herméticos, peso para sumergir" },
          { label: "Rendimiento", value: "El volumen del tarro que uses" },
        ].map((s, i) => (
          <StatBoxX key={i} c={c} label={s.label} value={s.value} />
        ))}
      </div>

      <SectionTitleX c={c}>🛒 Ingredientes</SectionTitleX>
      <StepX c={c} num={1} text="Vegetales frescos y firmes: pepinos (baby o normales en rodajas), zanahorias, coliflor, cebollas, rábanos, judías verdes, ajos tiernos, remolacha, pimientos. La verdura debe estar en su punto — ni pasada ni verde. Los pepinos deben ser de variedad para encurtir (más firmes, menos agua)." />
      <StepX c={c} num={2} text="Sal SIN yodo y SIN antiaglomerantes. La mejor: sal marina pura o sal de roca. La sal con yodo puede inhibir bacterias lácticas y decolorar los vegetales. Proporción: 2-5% del peso del agua (20-50g de sal por litro)." />
      <StepX c={c} num={3} text="Agua sin cloro. El cloro mata las bacterias lácticas que necesitas. Mineral, filtrada, o hervida y enfriada." />
      <StepX c={c} num={4} text="Especias aromáticas: eneldo fresco o seco, ajo, semillas de mostaza, granos de pimienta negra, hojas de laurel, semillas de cilantro, guindilla seca. Las especias aportan sabor + taninos para mantener el crujiente." />
      <StepX c={c} num={5} text="Taninos para el crujiente: hoja de parra, hoja de cerezo, hoja de roble, o corteza de roble. Una hoja por tarro = vegetales más crujientes. El té negro también sirve (½ bolsita por tarro)." />

      <SectionTitleX c={c}>🧮 La salmuera — proporciones</SectionTitleX>
      <InfoBoxX c={c}>
        Regla: 2% para fermentación rápida en verano (5-7 días), 3.5% para fermentación estándar (1-2 semanas), 5% para fermentación larga o conservación (3-4 semanas). Más sal = más tiempo pero vegetales más firmes. Menos sal = más rápido pero riesgo de blandura. La proporción se calcula sobre el PESO del agua: 35g de sal en 1L de agua = 3.5%.
      </InfoBoxX>

      <SectionTitleX c={c}>🔧 Equipo</SectionTitleX>
      <StepX c={c} num={1} text="Tarros de vidrio herméticos (tipo Mason jar, botes de conserva, o tarros con cierre de palanca). Limpiar con agua caliente y jabón — no hace falta sanitización agresiva." />
      <StepX c={c} num={2} text="Peso para sumergir los vegetales: plato pequeño, vaso de chupito, piedra limpia hervida, hoja de col doblada, bolsa ziploc llena de agua. ESENCIAL — la verdura debe estar SIEMPRE sumergida." />
      <StepX c={c} num={3} text="Balanza de cocina para pesar la sal con precisión." />

      <SectionTitleX c={c}>📋 Proceso paso a paso</SectionTitleX>
      <StepX c={c} num={1} text="Lavar los vegetales, NO pelar (la piel tiene bacterias lácticas naturales). Cortar como prefieras: pepinos enteros baby, zanahorias en bastones, coliflor en arbolitos, cebolla en cuartos." />
      <StepX c={c} num={2} text="Preparar la salmuera: disolver la sal en el agua (sin calentar — disuelve a temperatura ambiente removiendo). 35g sal / 1L agua = 3.5%." />
      <StepX c={c} num={3} text="Colocar los vegetales en el tarro, bien apretados pero sin aplastar. Intercalar especias: eneldo, ajo laminado, mostaza en grano, hoja de laurel, guindilla." />
      <StepX c={c} num={4} text="Añadir la hoja de parra/roble (para taninos, opcional pero recomendado). Verter la salmuera hasta cubrir los vegetales completamente. Dejar 2-3cm de espacio hasta la boca del tarro." />
      <StepX c={c} num={5} text="Colocar el peso para sumergir. VERIFICAR que no hay vegetales flotando — cualquier trozo expuesto al aire = moho seguro." />
      <StepX c={c} num={6} text="Cerrar el tarro, pero NO apretar del todo. Dejar que pueda escapar un poco de gas (semi-hermético). O usar una tapa de fermentación con airlock si tienes." />
      <StepX c={c} num={7} text="Colocar en un plato o bandeja (la fermentación puede rebosar). Sitio a temperatura ambiente (18-22°C ideal), fuera de luz solar directa." />
      <StepX c={c} num={8} text="Fermentación: 1-4 semanas. Empezar a probar a partir del día 5-7. Los pepinos pierden el color verde intenso y se vuelven verde-oliva. La salmuera se enturbia = NORMAL (bacterias lácticas trabajando)." />
      <StepX c={c} num={9} text="Cuando el sabor ácido te gusta: cerrar hermético y a la nevera. La fermentación se frena en frío. Consumir en los siguientes 2-3 meses." />

      <SectionTitleX c={c}>⏱️ Timeline de cata</SectionTitleX>
      <StepX c={c} num="1" text="Día 3-4: empieza actividad visible (burbujas diminutas, salmuera se enturbia)." />
      <StepX c={c} num="2" text="Día 5-7: probar. Sabor ligeramente ácido, vegetal aún bastante fresco. Ya es comestible — tipo 'medio-encurtido'." />
      <StepX c={c} num="3" text="Día 7-14: acidez más marcada. Textura crujiente. Punto óptimo para la mayoría de vegetales." />
      <StepX c={c} num="4" text="Día 14-21: sabor intenso y ácido. Los pepinos pequeños pueden empezar a ablandarse — mejor pasarlos a nevera antes." />
      <StepX c={c} num="5" text="Día 21-30: máxima acidez. Verduras duras (zanahoria, remolacha) aún crujientes. Pepinos pueden estar blandos. Nevera imprescindible ya." />

      <SectionTitleX c={c}>🐛 Problemas comunes</SectionTitleX>
      <ErrorCardX c={c}
        error="Vegetales blandos, sin crujiente"
        consecuencia="Falta de taninos, demasiada temperatura, o poca sal."
        fix="Añadir hoja de parra/roble/té negro. Usar al menos 3.5% de sal. Bajar temperatura a 18-20°C. Elegir vegetales firmes y frescos. Los pepinos deben ser variedad para encurtir."
      />
      <ErrorCardX c={c}
        error="Moho blanco en la superficie de la salmuera"
        consecuencia="Alguna parte de vegetal flotaba expuesta al aire. El moho de superficie es común y normalmente inofensivo si se retira pronto."
        fix="Retirar el moho con cuchara limpia. Verificar que TODO esté sumergido. Añadir más peso. Si el moho es negro o verde oscuro → tirar el lote."
      />
      <ErrorCardX c={c}
        error="Salmuera turbia y blanquecina (como leche)"
        consecuencia="NORMAL — es el sedimento de bacterias lácticas muertas + minerales. Inofensivo. Al revés: si la salmuera está CRISTALINA tras una semana = algo va mal."
        fix="No hacer nada. Es signo de fermentación activa saludable. El sedimento se asienta en el fondo del tarro."
      />
      <ErrorCardX c={c}
        error="Olor a podrido o sabor a 'tierra mojada'"
        consecuencia="Contaminación por bacterias no deseables. Puede deberse a vegetales sucios o temperatura demasiado alta."
        fix="Tirar el lote. Para próximos: lavar bien vegetales, mantener temperatura 18-22°C, asegurar que todo esté sumergido."
      />

      <SectionTitleX c={c}>🍽️ Variaciones</SectionTitleX>
      <div style={{ display: "grid", gap: "8px", marginBottom: "16px" }}>
        {[
          { tipo: "🥒 Pepinillos clásicos (dill pickles)", rec: "Pepinos baby enteros + eneldo fresco + ajo + pimienta negra + hoja de parra. 3.5% salmuera. 7-14 días." },
          { tipo: "🥕 Zanahorias + jengibre", rec: "Zanahorias en bastones + rodajas de jengibre fresco + ajo + semillas de cilantro. 3% salmuera. 5-10 días." },
          { tipo: "🥦 Coliflor + curry", rec: "Arbolitos de coliflor + cúrcuma en polvo (1 cucharadita) + comino + ajo. Color amarillo intenso. 3% salmuera. 7-14 días." },
          { tipo: "🧅 Cebollas lacto-fermentadas", rec: "Cebolla roja en rodajas finas + pimienta negra + laurel. 3.5% salmuera. 5-7 días. Color rosa intenso." },
          { tipo: "🫙 Giardiniera (mezcla italiana)", rec: "Coliflor + zanahoria + apio + cebolla + pimiento + guindilla + orégano. 3.5% salmuera. 10-14 días." },
          { tipo: "🫘 Judías verdes + eneldo", rec: "Judías verdes enteras (puntas recortadas) + eneldo + ajo + guindilla. Escaldar 1 min antes de fermentar. 3.5% salmuera. 7-14 días." },
        ].map((f, i) => (
          <div key={i} style={{ background: c.bg2, border: `1px solid ${c.border1}`, borderRadius: "8px", padding: "10px" }}>
            <div style={{ fontSize: "12px", fontWeight: "bold", color: c.textBright, marginBottom: "3px" }}>{f.tipo}</div>
            <div style={{ fontSize: "11px", color: c.accent3, lineHeight: "1.5" }}>{f.rec}</div>
          </div>
        ))}
      </div>

      <SectionTitleX c={c}>📦 Conservación</SectionTitleX>
      <StepX c={c} num={1} text="Nevera (4°C): 6-12 meses. La fermentación prácticamente se detiene. Los vegetales se mantienen crujientes los primeros 3-4 meses, luego se ablandan gradualmente." />
      <StepX c={c} num={2} text="Despensa fresca (&lt;15°C): 2-3 meses. Sigue fermentando lentamente = sabor más intenso con el tiempo." />
      <StepX c={c} num={3} text="Congelador: NO recomendado. Los cristales de hielo destruyen la textura crujiente." />
      <StepX c={c} num={4} text="Al abrir un tarro para consumir: usar utensilios limpios. No dejar el tarro fuera de la nevera más de lo necesario." />

      <LegalHealthBox c={c}
        legal={<>✅ Totalmente legal. Alimento tradicional, mismo estatus que aceitunas o pepinillos comerciales.</>}
        salud="Los encurtidos lacto-fermentados contienen probióticos vivos (Lactobacillus plantarum, L. brevis, etc.), enzimas digestivas, y vitaminas (especialmente C y K). Ayudan a la digestión, mejoran la flora intestinal y refuerzan el sistema inmune. Son bajos en calorías. Tomar 1-2 raciones al día (50-100g). La salmuera también se bebe como 'shot' probiótico matutino."
        contraindicaciones="Hipertensión (contienen sal — enjuagar antes de comer reduce sodio) · Insuficiencia renal · Dieta baja en sodio · Inmunodeprimidos graves"
        recursos="Wild Fermentation (Sandor Katz) · r/fermentation · The Noma Guide to Fermentation · Fermented Vegetables (Kirsten Shockey)"
      />
    </div>
  );
}

function KIMCHI() {
  const c = FERMENT_COLORS;
  return (
    <div>
      <InfoBoxX c={c}>
        Kimchi = col china fermentada con pasta de guindilla coreana (gochugaru), ajo, jengibre y salsa de pescado. El plato nacional de Corea, consumido en cada comida. Sabor: ácido, picante, umami, ligeramente dulce y efervescente. Contiene probióticos (Lactobacillus kimchii y otras cepas únicas). Hay cientos de variantes — esta es la receta clásica de col china (baechu-kimchi).
      </InfoBoxX>

      <div style={{ display: "grid", gap: "6px", marginBottom: "16px" }}>
        {[
          { label: "Dificultad", value: "Media — muchos pasos pero todos fáciles" },
          { label: "Tiempo total", value: "3-7 días (2h trabajo activo + fermentación)" },
          { label: "Equipo necesario", value: "Tarros grandes, guantes, bol grande" },
          { label: "Rendimiento", value: "2-3 kg de kimchi por col china grande" },
        ].map((s, i) => (
          <StatBoxX key={i} c={c} label={s.label} value={s.value} />
        ))}
      </div>

      <SectionTitleX c={c}>🛒 Ingredientes (para 1 col china grande ~2kg)</SectionTitleX>
      <StepX c={c} num={1} text="Col china (baechu) — 1 cabeza grande, ~2kg. Debe ser firme, hojas crujientes. Buscar en supermercados asiáticos o grandes superficies." />
      <StepX c={c} num={2} text="Sal gruesa sin yodo — ½ taza (80g). La sal para el proceso de salazón inicial. La más tradicional: sal marina coreana (cheonilyeom), pero cualquier sal marina gruesa sirve." />
      <StepX c={c} num={3} text="Gochugaru (guindilla coreana en polvo) — ½ taza (40g). Es el ingrediente clave: copos de guindilla roja coreana, sabor afrutado y picante medio. NO sustituir por cayena o pimentón picante — el sabor es distinto. Buscar en tiendas asiáticas o Amazon." />
      <StepX c={c} num={4} text="Ajo — 10-12 dientes (unos 50g), picados finos o en pasta." />
      <StepX c={c} num={5} text="Jengibre fresco — trozo de 3-4cm (15g), rallado." />
      <StepX c={c} num={6} text="Cebolleta (cebolla verde) — 5-6 tallos, cortados en trozos de 4-5cm." />
      <StepX c={c} num={7} text="Salsa de pescado coreana (aekjeot / jeotgal) — 3-4 cucharadas. Alternativa vegana: 2 cucharadas de miso blanco + 1 cucharada de salsa de soja + 1 cucharada de agua." />
      <StepX c={c} num={8} text="Harina de arroz glutinoso (opcional) — 2 cucharadas. Se cocina con agua para hacer una 'papilla' que ayuda a que la pasta se adhiera a las hojas. Da textura más untuosa. Se puede omitir." />
      <StepX c={c} num={9} text="Azúcar — 1 cucharada (ayuda a arrancar la fermentación)." />

      <SectionTitleX c={c}>🔧 Equipo</SectionTitleX>
      <StepX c={c} num={1} text="Tarros de vidrio grandes (1.5-2L). El kimchi se expande al fermentar — llenar solo hasta 70% de la capacidad del tarro." />
      <StepX c={c} num={2} text="Guantes de cocina desechables. El gochugaru + ajo pican y tiñen las manos. Imprescindibles para manejar la pasta." />
      <StepX c={c} num={3} text="Bol grande o barreño para mezclar. Cuchillo grande y tabla de cortar." />
      <StepX c={c} num={4} text="Peso para prensar dentro del tarro (vaso pequeño, bolsa con agua)." />

      <SectionTitleX c={c}>📋 Proceso paso a paso</SectionTitleX>
      <StepX c={c} num={1} text="Cortar la col china: partir en cuartos longitudinales (desde la base a las hojas). Luego cortar cada cuarto en trozos de 5-7cm de ancho. Enjuagar brevemente bajo agua fría." />
      <StepX c={c} num={2} text="Salazón: en el bol grande, espolvorear sal entre las capas de la col, asegurando que llegue a las partes gruesas (el tronco blanco). Dejar reposar 2 horas, volteando cada 30 minutos. La col debe ablandarse — al doblar una hoja gruesa, debe doblarse sin romperse." />
      <StepX c={c} num={3} text="Enjuagar: lavar la col 3 veces bajo agua fría para quitar exceso de sal. Escurrir bien. Probar un trozo: debe estar salado pero comestible, no como agua de mar. Dejar escurrir en colador 30 min." />
      <StepX c={c} num={4} text="Preparar la papilla de arroz (opcional): mezclar harina de arroz + ½ taza de agua en cazo. Calentar a fuego medio, removiendo, hasta que espese como pegamento translúcido (~2 min). Enfriar." />
      <StepX c={c} num={5} text="Preparar la pasta de kimchi: en bol, mezclar gochugaru + papilla de arroz fría + ajo + jengibre + salsa de pescado + azúcar. Formar una pasta roja espesa." />
      <StepX c={c} num={6} text="PONERSE GUANTES. Añadir la cebolleta troceada a la pasta. Luego añadir la col escurrida. Mezclar con las manos, frotando la pasta entre cada hoja para que todas queden bien cubiertas." />
      <StepX c={c} num={7} text="Empaquetar en tarros: meter la col con pasta en los tarros, presionando fuerte para eliminar bolsas de aire. Dejar 4-5cm de espacio arriba. La presión sacará líquido de la col — ese líquido debe cubrir las hojas." />
      <StepX c={c} num={8} text="Sellar: cerrar el tarro (no hermético del todo — semi-cerrado). Colocar en plato/bandeja para recoger posibles rebosamientos." />
      <StepX c={c} num={9} text="Fermentación rápida (1-2 días a temperatura ambiente, 20-22°C): el kimchi burbujea, desprende aroma intenso, la salmuera se enturbia. Probar al día 1 — si ya está ácido al gusto, pasar a nevera." />
      <StepX c={c} num={10} text="Fermentación lenta (nevera 4°C): el kimchi sigue fermentando lentamente. Sabor mejora con 1-2 semanas en nevera. Cuanto más tiempo, más ácido y complejo." />

      <SectionTitleX c={c}>⏱️ Timeline</SectionTitleX>
      <StepX c={c} num="1" text="Mañana: cortar col + salazón 2h." />
      <StepX c={c} num="2" text="Mediodía: enjuagar + preparar pasta + mezclar + empaquetar." />
      <StepX c={c} num="3" text="Día 1-2: fermentación a temperatura ambiente. Burbujas visibles, olor a kimchi llena la cocina." />
      <StepX c={c} num="4" text="Día 2-3: probar. Si ácido + picante + sabroso → nevera. Si aún muy dulce/salado → 1 día más fuera." />
      <StepX c={c} num="5" text="Día 3-7: kimchi en nevera, mejorando cada día. A partir del día 5 está en su punto óptimo." />

      <SectionTitleX c={c}>🐛 Problemas comunes</SectionTitleX>
      <ErrorCardX c={c}
        error="Kimchi demasiado salado"
        consecuencia="La salazón fue excesiva o no se enjuagó lo suficiente."
        fix="Para este lote: al servir, enjuagar brevemente la porción bajo agua fría. Reduce pérdidas. Para próximo lote: enjuagar 4-5 veces y probar antes de añadir la pasta."
      />
      <ErrorCardX c={c}
        error="Moho blanco en superficie"
        consecuencia="Vegetal expuesto al aire + temperatura alta. Similar a encurtidos."
        fix="Retirar la capa superior afectada (1-2cm). El resto es seguro si el kimchi huele bien. Prensar mejor la próxima vez, añadir hoja de col entera como 'tapa' bajo el peso."
      />
      <ErrorCardX c={c}
        error="Kimchi con sabor 'amargo' o 'metálico'"
        consecuencia="Demasiado jengibre, o fermentación demasiado larga a temperatura alta."
        fix="El amargor del jengibre se suaviza con tiempo en nevera. Para próximo lote: reducir jengibre a la mitad."
      />
      <ErrorCardX c={c}
        error="El tarro rebosa y mancha toda la nevera"
        consecuencia="Llenaste demasiado el tarro. El kimchi produce mucho gas."
        fix="Abrir el tarro cada 1-2 días para liberar presión ('burping'). Llenar solo 70% del tarro. Poner siempre un plato debajo."
      />

      <SectionTitleX c={c}>🍽️ Variaciones de kimchi</SectionTitleX>
      <div style={{ display: "grid", gap: "8px", marginBottom: "16px" }}>
        {[
          { tipo: "🥒 Oi-sobagi (kimchi de pepino)", rec: "Pepinos baby cortados en cruz sin llegar al final + relleno de pasta. Listo en 24h." },
          { tipo: "🌱 Gat-kimchi (kimchi de mostaza verde)", rec: "Hojas de mostaza verde en lugar de col china. Sabor más intenso y amargo." },
          { tipo: "🥬 Kkakdugi (kimchi de rábano en cubos)", rec: "Rábano daikon coreano (mu) en cubos de 2cm + misma pasta. Textura crujiente." },
          { tipo: "⚪ Baek-kimchi (kimchi blanco, sin picante)", rec: "Sin gochugaru. Pasta con pera asiática, piñones, dátiles y jengibre. Sabor suave." },
          { tipo: "🥕 Kimchi vegano", rec: "Sustituir salsa de pescado por 2 cucharadas miso + 1 salsa soja + 1 agua. Mismo proceso." },
          { tipo: "🌿 Mak-kimchi (kimchi rápido troceado)", rec: "Col ya troceada antes de salar + fermentación corta (1-2 días). El más práctico para casa." },
        ].map((f, i) => (
          <div key={i} style={{ background: c.bg2, border: `1px solid ${c.border1}`, borderRadius: "8px", padding: "10px" }}>
            <div style={{ fontSize: "12px", fontWeight: "bold", color: c.textBright, marginBottom: "3px" }}>{f.tipo}</div>
            <div style={{ fontSize: "11px", color: c.accent3, lineHeight: "1.5" }}>{f.rec}</div>
          </div>
        ))}
      </div>

      <SectionTitleX c={c}>🍳 Usos culinarios del kimchi</SectionTitleX>
      <StepX c={c} num={1} text="Kimchi fresco (1-2 semanas): como acompañamiento (banchan) en cada comida coreana. Directo del tarro." />
      <StepX c={c} num={2} text="Kimchi maduro (3-4 semanas, muy ácido): ideal para cocinar. Kimchi jjigae (estofado), kimchi bokkeumbap (arroz frito con kimchi), kimchi jeon (tortitas). El kimchi viejo es el TESORO de la cocina coreana." />
      <StepX c={c} num={3} text="Zumo de kimchi: aderezo para ensaladas, sopas, arroces. Potenciador de sabor umami natural." />

      <SectionTitleX c={c}>📦 Conservación</SectionTitleX>
      <StepX c={c} num={1} text="Nevera (4°C): 6-12 meses. El kimchi no se estropea — se transforma. Con meses se vuelve muy ácido = perfecto para cocinar." />
      <StepX c={c} num={2} text="Congelador: 3-6 meses. Pierde textura crujiente pero conserva sabor. Ideal para cocinar después (jjigae, arroz frito)." />
      <StepX c={c} num={3} text="Despensa fresca (&lt;15°C): 2-4 semanas. Sigue fermentando más rápido que en nevera." />
      <StepX c={c} num={4} text="Truco coreano: tener 2 tarros — uno para comer fresco y otro para envejecer. Así siempre tienes ambos estilos." />

      <LegalHealthBox c={c}
        legal={<>✅ Totalmente legal. Alimento tradicional coreano, patrimonio UNESCO (2013). Mismo estatus que chucrut o encurtidos caseros.</>}
        salud="El kimchi contiene cepas únicas de Lactobacillus (kimchii, sakei, plantarum) + vitaminas A, B, C + capsaicina (antiinflamatoria del gochugaru) + alicina (del ajo). Evidencia de mejora de colesterol, glucemia y microbiota intestinal. Tomar 50-100g al día como acompañamiento. Las variedades con salsa de pescado contienen histamina — personas con intolerancia a histamina: elegir versión vegana."
        contraindicaciones="Intolerancia a histamina · Gastritis/úlcera activa (picante) · Hipertensión (contiene sal) · Alergia al marisco (si lleva salsa de camarón fermentada)"
        recursos="r/kimchi · r/KoreanFood · Maangchi (YouTube) · The Kimchi Cookbook (Lauryn Chun) · Korean Bapsang blog"
      />
    </div>
  );
}

function CHUCRUT() {
  const c = FERMENT_COLORS;
  return (
    <div>
      <InfoBoxX c={c}>
        Chucrut (sauerkraut) = col blanca fermentada con sal. El fermento más simple y antiguo de Europa, base de la alimentación invernal durante siglos. Solo 2 ingredientes: col + sal. Las bacterias lácticas de la col transforman sus azúcares en ácido láctico, creando un alimento probiótico, crujiente y ácido. Sabor: ácido láctico puro, con fondo dulce de la col. Textura: crujiente en boca. 
      </InfoBoxX>

      <div style={{ display: "grid", gap: "6px", marginBottom: "16px" }}>
        {[
          { label: "Dificultad", value: "Muy fácil — solo col + sal + paciencia" },
          { label: "Tiempo total", value: "14-42 días (2-6 semanas)" },
          { label: "Equipo necesario", value: "Tarros o crock, peso, manos limpias" },
          { label: "Rendimiento", value: "~1.5kg chucrut por 2kg de col fresca" },
        ].map((s, i) => (
          <StatBoxX key={i} c={c} label={s.label} value={s.value} />
        ))}
      </div>

      <SectionTitleX c={c}>🛒 Ingredientes</SectionTitleX>
      <StepX c={c} num={1} text="Col blanca (repollo) — 2kg. Debe ser firme, densa y pesada para su tamaño. La col de invierno tiene más azúcar = mejor fermentación. Evitar coles con hojas mustias o signos de podredumbre." />
      <StepX c={c} num={2} text="Sal SIN yodo — 2% del peso de la col (40g para 2kg). Sal marina pura o sal de roca. Proporción estricta: demasiada sal = inhibes bacterias lácticas. Demasiado poca = se pudre. 2% es el punto dulce." />
      <StepX c={c} num={3} text="Nada más. Opcional: semillas de alcaravea (comino de prado, 1 cucharadita), bayas de enebro (5-6), o zanahoria rallada para color." />

      <SectionTitleX c={c}>🔧 Equipo</SectionTitleX>
      <StepX c={c} num={1} text="Tarros de vidrio grandes (1-2L) o crock de cerámica tradicional. El vidrio es perfecto. Evitar plástico para fermentaciones largas." />
      <StepX c={c} num={2} text="Balanza de cocina precisa (para pesar el 2% de sal)." />
      <StepX c={c} num={3} text="Bol o barreño grande para masajear la col." />
      <StepX c={c} num={4} text="Peso para prensar: hoja de col entera guardada + peso encima (bolsa con agua, vaso, piedra limpia)." />

      <SectionTitleX c={c}>📋 Proceso paso a paso</SectionTitleX>
      <StepX c={c} num={1} text="Quitar las 2-3 hojas exteriores de la col (reservar una hoja grande y limpia para usar como tapa natural). Lavar la cabeza restante bajo agua fría. Secar." />
      <StepX c={c} num={2} text="Cortar la col en cuartos, quitar el corazón duro del centro. Cortar en tiras finas (3-5mm) con cuchillo afilado o mandolina. La uniformidad del corte = uniformidad de fermentación." />
      <StepX c={c} num={3} text="Pesar la col cortada. Calcular 2% de sal: si son 2000g → 40g de sal." />
      <StepX c={c} num={4} text="En el barreño grande: añadir la sal a la col cortada. MASSAJEAR con las manos limpias durante 5-10 minutos. La col empieza a soltar agua. El objetivo: que la col quede blanda y suelte suficiente líquido para cubrirse a sí misma al prensar." />
      <StepX c={c} num={5} text="Test de líquido: al apretar un puñado de col en la mano, debe gotear líquido. Si tras 10 minutos de masaje no suelta suficiente → añadir 1-2 cucharadas de agua con 2% de sal disuelta." />
      <StepX c={c} num={6} text="Empaquetar en el tarro: ir metiendo puñados de col, presionando FUERTE con el puño o un pisón después de cada capa. Deben quedar sin bolsas de aire. El líquido subirá y cubrirá la col." />
      <StepX c={c} num={7} text="Cuando el tarro esté lleno hasta 75% (dejar espacio): doblar la hoja de col reservada y colocarla como 'tapa' sobre la col prensada. Poner el peso encima. Verificar que el líquido cubre la hoja — todo debe estar sumergido." />
      <StepX c={c} num={8} text="Cerrar el tarro (no hermético del todo — semi-cerrado para que escape gas). Colocar en plato hondo para recoger posibles rebosamientos los primeros días." />
      <StepX c={c} num={9} text="Fermentación: temperatura ideal 18-22°C. Duración: 2-6 semanas. Empezar a probar a partir del día 10. El chucrut está listo cuando tiene acidez agradable y la col está crujiente." />

      <SectionTitleX c={c}>⏱️ Timeline</SectionTitleX>
      <StepX c={c} num="1" text="Día 1-3: mayor actividad. Burbujas visibles subiendo, líquido puede rebosar (normal). Olor a col cocida + ligero ácido." />
      <StepX c={c} num="2" text="Día 4-10: fermentación activa. Burbujeo constante pero más lento. El olor se vuelve más ácido." />
      <StepX c={c} num="3" text="Día 10-14: primeras catas. El sabor ya es ácido pero aún con dulzor de col. Comestible — tipo 'chucrut joven'." />
      <StepX c={c} num="4" text="Día 14-21: punto óptimo. Acidez pronunciada, crujiente, complejo. Para la mayoría de gustos." />
      <StepX c={c} num="5" text="Día 21-42: chucrut maduro. Acidez intensa, la col pierde algo de crujiente. Estilo alsaciano tradicional." />

      <SectionTitleX c={c}>🐛 Problemas comunes</SectionTitleX>
      <ErrorCardX c={c}
        error="La col no suelta suficiente líquido"
        consecuencia="La col no queda sumergida → se oxida → puede enmohecerse."
        fix="Masajear más tiempo y más fuerte (10-15 min). Si aún así no suelta: añadir salmuera al 2% (20g sal / 1L agua) hasta cubrir. Esto NO arruina el lote."
      />
      <ErrorCardX c={c}
        error="Moho blanco o gris en la superficie del líquido"
        consecuencia="La hoja-tapa no sellaba bien o algo flotaba expuesto al aire."
        fix="Retirar con cuchara limpia. Retirar la hoja-tapa afectada y poner una nueva. Añadir más peso. Si el moho es negro/verde/rosa → TIRAR el lote."
      />
      <ErrorCardX c={c}
        error="Capa blanquecina en la superficie (no peluda, como polvo blanco)"
        consecuencia="Kahm yeast (levadura kahm). Inofensiva pero da sabor ligeramente amargo/terroso."
        fix="Retirar con cuchara. Aumentar sal al 2.5% en el próximo lote. Mantener temperatura más baja (&lt;20°C)."
      />
      <ErrorCardX c={c}
        error="Chucrut blando, sin crujiente"
        consecuencia="Demasiada temperatura (&gt;25°C), poca sal, o col vieja."
        fix="Usar col fresca de temporada. Mantener 18-20°C. Usar mínimo 2% de sal. Añadir hoja de parra o té negro para taninos (ayudan al crujiente)."
      />
      <ErrorCardX c={c}
        error="Color rosado o grisáceo en la col"
        consecuencia="Oxidación por exposición al aire o exceso de sal."
        fix="Comestible pero aspecto feo. Asegurar que TODO esté sumergido en el próximo lote. Usar sal sin yodo (la sal yodada puede decolorar)."
      />

      <SectionTitleX c={c}>🍽️ Variaciones</SectionTitleX>
      <div style={{ display: "grid", gap: "8px", marginBottom: "16px" }}>
        {[
          { tipo: "🥕 Chucrut con zanahoria", rec: "Añadir 200g de zanahoria rallada gruesa a la col + ½ cucharadita de comino. Color naranja, sabor más dulce." },
          { tipo: "🍎 Chucrut con manzana", rec: "Añadir 1 manzana ácida rallada (Granny Smith). Dulzor que contrasta con acidez." },
          { tipo: "🌿 Chucrut alsaciano clásico", rec: "Semillas de alcaravea (1 cucharadita) + bayas de enebro (6-8). El sabor tradicional." },
          { tipo: "🧄 Chucrut con ajo y eneldo", rec: "4-5 dientes de ajo laminados + eneldo fresco picado. Para acompañar pescados." },
          { tipo: "🎨 Chucrut de col lombarda", rec: "Sustituir col blanca por col lombarda. Igual proceso. Color púrpura intenso que tiñe todo." },
          { tipo: "🌶️ Curtido (estilo salvadoreño)", rec: "Col + zanahoria + cebolla + orégano + guindilla. Salmuera 2.5% con vinagre. Fermentación rápida 3-5 días." },
        ].map((f, i) => (
          <div key={i} style={{ background: c.bg2, border: `1px solid ${c.border1}`, borderRadius: "8px", padding: "10px" }}>
            <div style={{ fontSize: "12px", fontWeight: "bold", color: c.textBright, marginBottom: "3px" }}>{f.tipo}</div>
            <div style={{ fontSize: "11px", color: c.accent3, lineHeight: "1.5" }}>{f.rec}</div>
          </div>
        ))}
      </div>

      <SectionTitleX c={c}>📦 Conservación</SectionTitleX>
      <StepX c={c} num={1} text="Nevera (4°C): 6-12 meses. El frío detiene la fermentación y mantiene el crujiente." />
      <StepX c={c} num={2} text="Bodega/sótano fresco (&lt;10-15°C): 3-6 meses en crock con peso. Tradicionalmente se conservaba así todo el invierno." />
      <StepX c={c} num={3} text="Congelador: 6 meses. Pierde crujiente (se ablanda al descongelar) pero conserva sabor. Sirve para cocinar." />
      <StepX c={c} num={4} text="Al servir: usar utensilios limpios. No dejar el tarro abierto fuera de la nevera. El chucrut que queda en el tarro debe seguir sumergido." />

      <LegalHealthBox c={c}
        legal={<>✅ Totalmente legal. Alimento tradicional europeo consumido durante siglos.</>}
        salud="El chucrut es uno de los alimentos probióticos más potentes — contiene hasta 10¹³ UFC/g de Lactobacillus plantarum, brevis, y otras cepas. Rico en vitamina C (los marineros lo llevaban para prevenir escorbuto), vitamina K2, fibra y minerales. Tomar 50-150g al día. Las embarazadas alemanas lo consumen tradicionalmente (seguro en cantidades culinarias). El zumo de chucrut es un 'shot' probiótico excelente."
        contraindicaciones="Hipertensión (contiene sal — lavar antes de consumir reduce sodio) · Intolerancia a histamina (fermentado) · Síndrome intestino irritable (FODMAPs)"
        recursos="Wild Fermentation (Sandor Katz) · r/fermentation · The Art of Fermentation · German Food Guide"
      />
    </div>
  );
}

function TEMPEH() {
  const c = FERMENT_COLORS;
  return (
    <div>
      <InfoBoxX c={c}>
        Tempeh = soja fermentada por el hongo Rhizopus oligosporus. Originario de Indonesia, donde es la principal fuente de proteína desde hace siglos. El hongo crea una red de micelio blanco que une los granos en una torta compacta con sabor a nuez, terroso y umami. Textura: firme, carnosa. A diferencia del tofu (sin fermentar), el tempeh es más nutritivo — la fermentación predigiere proteínas y reduce antinutrientes de la soja.
      </InfoBoxX>

      <div style={{ display: "grid", gap: "6px", marginBottom: "16px" }}>
        {[
          { label: "Dificultad", value: "Media — requiere control de temperatura" },
          { label: "Tiempo total", value: "36-60h (12h remojo + 24-48h incubación)" },
          { label: "Equipo necesario", value: "Incubadora 30°C, bolsas perforadas" },
          { label: "Rendimiento", value: "~600-700g tempeh por 400g soja seca" },
        ].map((s, i) => (
          <StatBoxX key={i} c={c} label={s.label} value={s.value} />
        ))}
      </div>

      <SectionTitleX c={c}>🛒 Ingredientes</SectionTitleX>
      <StepX c={c} num={1} text="Soja amarilla seca descascarillada (400g). La soja DEBE estar descascarillada — si no, el micelio no penetra. Buscar 'soja descascarillada para tempeh' en herbolarios o tiendas online. La soja con piel no funciona." />
      <StepX c={c} num={2} text="Vinagre blanco o de arroz (2 cucharadas). Acidifica ligeramente la superficie de la soja, inhibiendo bacterias no deseadas mientras el Rhizopus (que tolera pH ácido) coloniza." />
      <StepX c={c} num={3} text="Starter de tempeh (Rhizopus oligosporus en polvo) — 1 cucharadita (2-3g). Se compra en tiendas online de fermentación (~5-8€). Un sobre de 10g dura para 5-6 lotes. Marcar: Tempeh Starter, Raprima, o similar." />

      <SectionTitleX c={c}>🔧 Equipo</SectionTitleX>
      <StepX c={c} num={1} text="Incubadora: yogurtera, deshidratador con temperatura regulable, horno con luz piloto, o caja de poliespán con manta calefactora. Necesitas mantener 30-32°C constante durante 24-48h." />
      <StepX c={c} num={2} text="Bolsas de plástico perforadas (tipo zip) o bandeja de plástico. Hacer agujeros cada 2-3cm con una aguja o palillo. El hongo necesita oxígeno para respirar." />
      <StepX c={c} num={3} text="Termómetro (para verificar los 30°C)." />
      <StepX c={c} num={4} text="Olla grande para cocción + colador grande + paño limpio para secar." />

      <SectionTitleX c={c}>📋 Proceso paso a paso</SectionTitleX>
      <StepX c={c} num={1} text="Remojo: lavar la soja descascarillada y cubrir con 3x su volumen de agua. Remojar 12 horas (noche). La soja duplica su tamaño." />
      <StepX c={c} num={2} text="Descascarillar (si quedan pieles): tras el remojo, frotar la soja entre las manos bajo agua. Las pieles sueltas flotan. Retirarlas con colador. Repetir hasta que casi no queden pieles. Este paso es el más tedioso pero ESENCIAL." />
      <StepX c={c} num={3} text="Cocción: hervir la soja en agua fresca durante 30-45 minutos. La soja debe estar tierna al morder pero no deshacerse (al dente). Espumar durante la cocción." />
      <StepX c={c} num={4} text="Escurrir y secar: colar la soja. Extender sobre paño limpio y secar bien — la superficie de los granos debe estar SECA al tacto. La humedad superficial = proliferación de bacterias en lugar de Rhizopus." />
      <StepX c={c} num={5} text="Enfriar a 35-40°C (tibio al tacto). Añadir el vinagre y mezclar bien. Luego espolvorear el starter de Rhizopus y mezclar MUY bien para que cada grano quede cubierto con el polvo blanco." />
      <StepX c={c} num={6} text="Empaquetar: meter la soja inoculada en las bolsas perforadas, formando una capa de 2-3cm de grosor (no más — el interior necesita oxígeno). Cerrar la bolsa. Los agujeros permiten respirar." />
      <StepX c={c} num={7} text="Incubar a 30-32°C durante 24-48 horas. Pasadas 12-15h el micelio empieza a aparecer como pelusa blanca. La fermentación genera calor — vigilar que no suba de 35°C (abrir la incubadora para ventilar si hace falta)." />
      <StepX c={c} num={8} text="Cosecha: a las 24h ya debería haber micelio blanco uniendo los granos. A las 36-48h la torta es compacta y blanca, con aroma a champiñón y nuez. Si aparecen manchas negras o grises = esporulación (normal, seguro, pero sabor más intenso)." />

      <SectionTitleX c={c}>⏱️ Timeline</SectionTitleX>
      <StepX c={c} num="1" text="Noche anterior, 22h: poner soja a remojo." />
      <StepX c={c} num="2" text="Mañana, 10h: descascarillar, hervir 30min, secar, inocular, empaquetar." />
      <StepX c={c} num="3" text="Noche (~12h después): primeros signos de micelio blanco." />
      <StepX c={c} num="4" text="Día siguiente, 24h: micelio cubriendo casi todo. Subida de temperatura a 33-35°C (vigilar)." />
      <StepX c={c} num="5" text="36-48h: torta compacta y blanca. Cosechar y refrigerar." />

      <SectionTitleX c={c}>🐛 Problemas comunes</SectionTitleX>
      <ErrorCardX c={c}
        error="El tempeh huele a amoníaco o podrido"
        consecuencia="Contaminación bacteriana — temperatura demasiado alta (&gt;35°C) o humedad excesiva en los granos."
        fix="Tirar. Para próximo lote: secar mejor la soja, ventilar incubadora a las 12-15h cuando empieza a generar calor. Mantener 30°C constante."
      />
      <ErrorCardX c={c}
        error="Micelio blanco pero también manchas negras/grises"
        consecuencia="El Rhizopus ha empezado a esporular. NORMAL y seguro — solo significa que se ha pasado un poco de tiempo. Sabor más terroso."
        fix="Cosechar antes la próxima vez (a las 24-30h en lugar de 48h). El tempeh con esporas es perfectamente comestible."
      />
      <ErrorCardX c={c}
        error="No crece micelio tras 24h"
        consecuencia="Temperatura demasiado baja (&lt;25°C), starter caducado o mal distribuido, o soja con pieles."
        fix="Subir temperatura a 30-32°C. Si el starter tiene +6 meses: usar el doble de cantidad. Verificar que la soja está descascarillada."
      />
      <ErrorCardX c={c}
        error="El centro del tempeh está húmedo y sin micelio"
        consecuencia="Capa demasiado gruesa (&gt;3cm) = el centro no respira. O temperatura demasiado alta en el centro."
        fix="Hacer capas más finas (2cm máximo). Perforar más agujeros en la bolsa. Si la incubadora calienta de abajo: girar las bolsas a mitad de fermentación."
      />

      <SectionTitleX c={c}>🍽️ Cómo cocinar tempeh</SectionTitleX>
      <StepX c={c} num={1} text="El tempeh NO se come crudo. Siempre cocinar antes. Métodos: cortar en lonchas y freír en aceite hasta dorado (4-5 min por lado), marinar en soja + jengibre y hornear, desmenuzar y saltear como carne picada." />
      <StepX c={c} num={2} text="Al vapor 10 minutos antes de marinar: abre los poros y absorbe mejor los sabores. Truco indonesio." />
      <StepX c={c} num={3} text="Sabor base: a nuez, champiñón, terroso. Combina bien con soja, jengibre, ajo, lima, curry, salsas de cacahuete." />

      <SectionTitleX c={c}>🍽️ Variaciones</SectionTitleX>
      <div style={{ display: "grid", gap: "8px", marginBottom: "16px" }}>
        {[
          { tipo: "🌾 Tempeh de garbanzos", rec: "Sustituir soja por garbanzos secos pelados. Remojo 12h, cocción 45-60min. Sabor más dulce y suave." },
          { tipo: "🫘 Tempeh de lentejas", rec: "Lentejas peladas (lenteja roja o amarilla partida). Cocción 10-15min. Rápido. Micelio muy compacto." },
          { tipo: "🌻 Tempeh de semillas", rec: "Semillas de girasol peladas + calabaza. Sin cocción previa, solo remojo 8h. Textura crujiente." },
          { tipo: "🥜 Tempeh mixto", rec: "50% soja + 25% garbanzos + 25% lentejas. Lo que tengas a mano." },
        ].map((f, i) => (
          <div key={i} style={{ background: c.bg2, border: `1px solid ${c.border1}`, borderRadius: "8px", padding: "10px" }}>
            <div style={{ fontSize: "12px", fontWeight: "bold", color: c.textBright, marginBottom: "3px" }}>{f.tipo}</div>
            <div style={{ fontSize: "11px", color: c.accent3, lineHeight: "1.5" }}>{f.rec}</div>
          </div>
        ))}
      </div>

      <SectionTitleX c={c}>📦 Conservación</SectionTitleX>
      <StepX c={c} num={1} text="Fresco en nevera (4°C): 5-7 días. Guardar en recipiente transpirable (bolsa papel o tupper semiabierto) — si se condensa humedad se acelera la esporulación." />
      <StepX c={c} num={2} text="Cocido en nevera: 1 semana. Freír todo el lote al cosechar y guardar cocido = más práctico para el día a día." />
      <StepX c={c} num={3} text="Congelador: 3 meses (crudo o cocido). Congelar en porciones individuales. Al descongelar: cocinar desde congelado directamente." />
      <StepX c={c} num={4} text="Deshidratado (tradicional indonesio): cortar en finas lonchas, secar al sol o deshidratador. Freír después. Snack crujiente tipo 'krupuk tempeh'." />

      <LegalHealthBox c={c}
        legal={<>✅ Totalmente legal. Alimento fermentado tradicional indonesio, mismo estatus que pan o yogur casero.</>}
        salud="El tempeh es la forma más nutritiva de consumir soja. La fermentación con Rhizopus: (1) predigiere proteínas haciéndolas más asimilables, (2) reduce ácido fítico (antinutriente) en 50%, (3) produce vitamina B12 (raro en alimentos vegetales), (4) genera antioxidantes y compuestos bioactivos. 100g de tempeh = 19g proteína completa + 8g fibra + hierro + calcio. Especialmente valioso en dietas veganas/vegetarianas."
        contraindicaciones="Alergia a la soja · Sensibilidad a fermentados fúngicos (poco común) · Consumir siempre cocinado, NUNCA crudo"
        recursos="r/Tempeh · The Tempeh Cookbook · tempeh.info (culturas, recetas) · Indonesian Tempeh Movement"
      />
    </div>
  );
}

function MASA_MADRE() {
  const c = FERMENT_COLORS;
  return (
    <div>
      <InfoBoxX c={c}>
        Masa madre (sourdough starter) = cultivo simbiótico de levaduras salvajes + bacterias lácticas que viven en la harina. Con solo harina + agua, creas un ecosistema que fermenta y leuda el pan de forma natural. Sin levadura comercial, sin aditivos. El pan de masa madre tiene mejor digestibilidad (las bacterias predigieren el gluten), sabor más complejo y se conserva más tiempo. Un starter bien mantenido dura décadas — hay panaderías con starters de 100+ años.
      </InfoBoxX>

      <div style={{ display: "grid", gap: "6px", marginBottom: "16px" }}>
        {[
          { label: "Dificultad", value: "Fácil de crear, media de mantener" },
          { label: "Tiempo total", value: "7-14 días para starter maduro" },
          { label: "Equipo necesario", value: "Tarros vidrio, balanza, harina, agua" },
          { label: "Rendimiento", value: "Starter permanente — dura décadas" },
        ].map((s, i) => (
          <StatBoxX key={i} c={c} label={s.label} value={s.value} />
        ))}
      </div>

      <SectionTitleX c={c}>🛒 Ingredientes</SectionTitleX>
      <StepX c={c} num={1} text="Harina integral de centeno o trigo integral (500g para crear el starter). La harina integral contiene más microorganismos salvajes + más nutrientes (el salvado alimenta las bacterias). El centeno fermenta más rápido. Si no tienes centeno: trigo integral funciona." />
      <StepX c={c} num={2} text="Harina blanca de fuerza (para alimentar a diario una vez establecido). Más barata y funciona perfecto para mantenimiento." />
      <StepX c={c} num={3} text="Agua sin cloro. Mineral, filtrada o reposada 24h. El cloro mata las bacterias que intentas cultivar." />
      <StepX c={c} num={4} text="Nada más. Literalmente harina + agua. Las levaduras y bacterias ya están en la harina — solo necesitas darles el ambiente adecuado." />

      <SectionTitleX c={c}>🔧 Equipo</SectionTitleX>
      <StepX c={c} num={1} text="Tarros de vidrio (2-3). Uno para el starter activo, otro de respaldo en nevera. Boca ancha ideal. No necesitan cierre hermético." />
      <StepX c={c} num={2} text="Balanza digital de cocina con precisión de 1g. IMPRESCINDIBLE. La masa madre funciona con ratios, no con tazas." />
      <StepX c={c} num={3} text="Espátula de silicona o cuchara de madera para mezclar." />
      <StepX c={c} num={4} text="Goma elástica para marcar el nivel inicial y ver cuánto sube." />

      <SectionTitleX c={c}>📋 Crear el starter — Día a día</SectionTitleX>
      <StepX c={c} num={1} text="Día 1 (mañana): mezclar 50g de harina integral de centeno + 50g de agua en el tarro. Remover hasta que no quede harina seca. Textura: pasta espesa. Tapar sin apretar (dejar que respire). Colocar goma al nivel de la mezcla." />
      <StepX c={c} num={2} text="Día 2: observar. Puede que no pase nada visible — normal. Puede que haya subido un poco y burbujas. Olor a harina mojada. NO alimentar todavía. Dejar 24h más." />
      <StepX c={c} num={3} text="Día 3: puede haber actividad (burbujas, ha subido). O puede haber un olor DESAGRADABLE (vómito, queso fuerte, calcetín). Ambos son NORMALES — es la 'batalla' entre bacterias buenas y malas. Alimentar: desechar la mitad (~50g), añadir 50g harina integral + 50g agua. Remover." />
      <StepX c={c} num={4} text="Día 4: alimentar igual: desechar mitad + 50g harina + 50g agua. El olor empieza a mejorar. Burbujas más visibles." />
      <StepX c={c} num={5} text="Día 5: alimentar igual. Debería doblar volumen en 4-8h tras alimentar. Olor ácido agradable (láctico)." />
      <StepX c={c} num={6} text="Día 6: alimentar igual. Si dobla en 4-6h de forma consistente, el starter está listo para usar." />
      <StepX c={c} num={7} text="Día 7+: alimentar igual cada 24h. El starter se vuelve más fuerte y fiable con cada semana." />

      <SectionTitleX c={c}>🥖 Usar el starter — hacer levain</SectionTitleX>
      <InfoBoxX c={c}>
        El starter que alimentas a diario es la 'madre'. Para hacer pan, construyes un 'levain': tomas una porción del starter y la alimentas con más harina + agua en una proporción específica para el pan que vas a hornear. Ejemplo: 50g starter + 200g harina + 200g agua = 450g de levain para un pan de 500g de harina. Esto mantiene tu starter madre pequeño y manejable.
      </InfoBoxX>

      <SectionTitleX c={c}>🧪 Float test — ¿está listo?</SectionTitleX>
      <StepX c={c} num={1} text="Llena un vaso con agua. Coge una cucharadita de starter y déjala caer. Si FLOTA = está listo para usar (lleno de gas). Si se hunde = necesita más fermentación." />
      <StepX c={c} num={2} text="Hacer el test cuando el starter está en su pico (ha doblado volumen, no ha empezado a bajar). Un starter que ya ha bajado puede hundirse aunque esté sano." />

      <SectionTitleX c={c}>🧊 Mantenimiento en nevera</SectionTitleX>
      <StepX c={c} num={1} text="Una vez el starter es fuerte (2-3 semanas de alimentación diaria): puedes pasarlo a la nevera. Alimentar, dejar 1-2h a temperatura ambiente para que empiece actividad, y meter a la nevera." />
      <StepX c={c} num={2} text="En nevera: necesita alimentación cada 7-10 días. Sacar, desechar la mitad, alimentar 1:1:1 (starter:harina:agua), esperar 2h, volver a la nevera." />
      <StepX c={c} num={3} text="Para hornear: sacar de la nevera 24-48h antes, alimentar cada 12h para reactivarlo. Hacer levain la noche antes de hornear." />
      <StepX c={c} num={4} text="Starter en nevera puede sobrevivir 3-4 semanas sin alimentar (capa líquida oscura en superficie = normal, es 'hooch'). Más de 4 semanas: riesgo de que muera." />

      <SectionTitleX c={c}>⏱️ Timeline resumen</SectionTitleX>
      <StepX c={c} num="1" text="Día 1-3: mezcla inicial. Poca actividad. Posible mal olor." />
      <StepX c={c} num="2" text="Día 4-6: actividad creciente. Burbujas, sube de volumen. Olor mejora." />
      <StepX c={c} num="3" text="Día 7-10: starter maduro. Dobla en 4-6h. Listo para pan." />
      <StepX c={c} num="4" text="Día 14+: starter fuerte y estable. Puede ir a nevera." />

      <SectionTitleX c={c}>🐛 Problemas comunes</SectionTitleX>
      <ErrorCardX c={c}
        error="Líquido oscuro en la superficie (hooch)"
        consecuencia="El starter tiene hambre — ha consumido todo el alimento disponible. El líquido es alcohol + subproductos de fermentación."
        fix="NO es moho y NO está muerto. Verter el líquido (o mezclarlo — da sabor más ácido). Alimentar inmediatamente. En nevera es normal cada 1-2 semanas si no alimentas."
      />
      <ErrorCardX c={c}
        error="Moho en la superficie (verde, negro, rosa)"
        consecuencia="Contaminación por esporas del ambiente. Starter en temperatura alta + mucho tiempo sin alimentar."
        fix="Tirar todo. Empezar de nuevo. Para evitar: alimentar más frecuentemente, tapar el tarro (aunque sin apretar), usar harina fresca (no caducada)."
      />
      <ErrorCardX c={c}
        error="El starter no sube (no dobla volumen)"
        consecuencia="Harina débil (sin suficiente gluten/proteína), agua clorada, temperatura baja."
        fix="Usar agua mineral. Mantener a 24-28°C (encima de la nevera, dentro del horno con luz piloto). Cambiar a harina integral de centeno (la más activa). Añadir 1 cucharadita de zumo de piña o manzana (baja pH y favorece bacterias)."
      />
      <ErrorCardX c={c}
        error="Mal olor persistente (vómito, queso podrido)"
        consecuencia="Bacterias no deseables (Clostridium, enterobacterias) dominan. Normal en días 2-3, pero si persiste más allá del día 5-6, algo va mal."
        fix="Continuar alimentando — las bacterias lácticas (buenas) acaban acidificando el medio y eliminando a las malas. Para acelerar: usar zumo de piña o manzana en lugar de agua en 1-2 alimentaciones (pH ácido = selectivo para bacterias buenas)."
      />
      <ErrorCardX c={c}
        error="El starter estaba fuerte y de repente deja de subir"
        consecuencia="Posible: contaminación bacteriana que mató las levaduras, o cambio brusco de harina, o agua clorada."
        fix="Volver a alimentar con harina de centeno integral 2-3 días. Si no revive: coger 10g del starter viejo e inocular en mezcla nueva de harina + agua (ratio 1:10:10) — a veces la dilución elimina la bacteria problemática."
      />

      <SectionTitleX c={c}>🍞 Recetas con descarte de starter</SectionTitleX>
      <InfoBoxX c={c}>
        Cada vez que alimentas, desechas una porción del starter. En lugar de tirarla, úsala para recetas. El descarte NO leuda (demasiado ácido, levaduras cansadas) pero aporta sabor y acidez. Aquí algunas ideas:
      </InfoBoxX>
      <div style={{ display: "grid", gap: "8px", marginBottom: "16px" }}>
        {[
          { receta: "🥞 Pancakes de descarte", rec: "200g descarte + 1 huevo + 50g harina + 1 cucharadita bicarbonato + pizca sal + leche hasta textura. Sabor a crepe ácido." },
          { receta: "🍕 Crackers finos", rec: "200g descarte + 50g mantequilla derretida + sal + semillas de sésamo. Extender MUY fino sobre papel horno. Hornear 180°C 10-12 min hasta dorar." },
          { receta: "🍌 Banana bread", rec: "Sustituir parte de la harina + líquido por descarte de starter en tu receta favorita de banana bread." },
          { receta: "🧇 Waffles", rec: "Igual que los pancakes pero en waflera. El ácido del descarte reacciona con bicarbonato = esponjosidad." },
          { receta: "🍪 Galletas de avena", rec: "150g descarte + 100g copos de avena + 50g mantequilla + 50g azúcar + 1 huevo + chips de chocolate. Hornear 180°C 12-15 min." },
        ].map((f, i) => (
          <div key={i} style={{ background: c.bg2, border: `1px solid ${c.border1}`, borderRadius: "8px", padding: "10px" }}>
            <div style={{ fontSize: "12px", fontWeight: "bold", color: c.textBright, marginBottom: "3px" }}>{f.receta}</div>
            <div style={{ fontSize: "11px", color: c.accent3, lineHeight: "1.5" }}>{f.rec}</div>
          </div>
        ))}
      </div>

      <SectionTitleX c={c}>📦 Conservación</SectionTitleX>
      <StepX c={c} num={1} text="Nevera (4°C): indefinidamente si alimentas cada 7-10 días. Este es el método estándar para panaderos caseros." />
      <StepX c={c} num={2} text="Temperatura ambiente (20-25°C): requiere alimentación cada 12-24h. Solo práctico si horneas a diario." />
      <StepX c={c} num={3} text="Deshidratado como backup: extender starter fino sobre papel de horno. Dejar secar 2-3 días. Romper en trozos y guardar en bote hermético. DURA AÑOS. Reactivar: pulverizar, mezclar 10g polvo + 50g harina + 50g agua." />
      <StepX c={c} num={4} text="Congelado: 6-12 meses. Descongelar en nevera lentamente, luego alimentar 2-3 días para reactivar." />

      <LegalHealthBox c={c}
        legal={<>✅ Totalmente legal. Cultivo de levaduras salvajes, mismo estatus que hacer pan casero con levadura comercial.</>}
        salud="El pan de masa madre tiene ventajas sobre el pan con levadura comercial: (1) las bacterias lácticas predigieren parte del gluten — mejor tolerado por personas con sensibilidad al gluten (NO para celíacos), (2) reduce ácido fítico (antinutriente) aumentando absorción de minerales, (3) menor índice glucémico (la acidez ralentiza digestión de almidones), (4) se conserva más días sin endurecerse. El starter en sí es un probiótico, pero las bacterias mueren al hornear el pan (el beneficio está en la predigestión, no en comer bacterias vivas)."
        contraindicaciones="Celíacos (contiene gluten) · Alergia al trigo · Personas con sensibilidad a fermentados"
        recursos="r/Sourdough · r/Breadit · The Perfect Loaf (blog + libro) · Tartine Bread (Chad Robertson) · Flour Water Salt Yeast (Ken Forkish)"
      />
    </div>
  );
}
