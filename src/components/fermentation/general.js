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
