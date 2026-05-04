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
