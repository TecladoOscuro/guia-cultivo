// FERMENTACIONES — modo SIDRA
// Manzanas + levadura natural o cultivada. Producto otoñal tradicional. Más fácil que vino.

function COMPRA_SIDRA() {
  const c = FERMENT_COLORS;
  const items = [
    { item: "🍎 Manzanas (10-15 kg)", precio: "8-25€", donde: "Tienda física", nota: "Mejor: variedades sidreras (Asturias, País Vasco) si las consigues. Alternativa: mezcla de manzanas DULCES (60%) + ÁCIDAS (30%) + AMARGAS/tánicas (10%). Evitar manzanas demasiado dulces solas (sidra empalagosa). En otoño hay variedades en mercados/fruterías de barrio.", prioridad: "ESENCIAL", tipo: "Consumible" },
    { item: "🦠 Levadura sidrera o vínica seca (5g)", precio: "2-5€", donde: "Internet", nota: "Recomendadas: Lalvin EC-1118 (limpia, alta tolerancia alcohol), Safcider AC-4 (específica sidra). 1 sobre basta para 10L. Alternativa TRADICIONAL: levadura natural de la propia manzana — no añadir nada, esperar a que arranque sola (más arriesgado pero más auténtico).", prioridad: "IMPORTANTE", tipo: "Consumible" },
    { item: "🫙 Garrafa vidrio 10L con boca ancha", precio: "12-20€", donde: "Tienda física", nota: "Vidrio para fermentar 8-10L de mosto. Garrafa de vino vacía vale. Boca ancha facilita meter manzanas si fermentas con frutas enteras.", prioridad: "ESENCIAL", tipo: "Equipo" },
    { item: "🔓 Airlock + tapón con agujero", precio: "3-6€", donde: "Internet", nota: "Imprescindible. Deja salir CO₂ sin entrar oxígeno/bacterias.", prioridad: "ESENCIAL", tipo: "Equipo" },
    { item: "🥤 Prensa de manzanas o licuadora potente", precio: "0-150€", donde: "Tienda física", nota: "Opciones: (a) prensa hidráulica casera 80-150€ (mejor rendimiento), (b) licuadora potente + colador 50-100€ (más fácil para principiante), (c) método casero: triturar con rodillo + escurrir con tela (gratis, mucho trabajo).", prioridad: "ESENCIAL", tipo: "Equipo" },
    { item: "🧴 Sanitizante (Star San)", precio: "10-15€", donde: "Internet", nota: "Mismo que para hidromiel/cerveza. Sanitizar TODO equipo antes de usar.", prioridad: "ESENCIAL", tipo: "Consumible" },
    { item: "📏 Hidrómetro + probeta", precio: "10-15€", donde: "Internet", nota: "Para calcular % alcohol final. La densidad inicial del mosto de sidra suele estar 1.045-1.055.", prioridad: "IMPORTANTE", tipo: "Equipo" },
    { item: "🧪 Metabisulfito potásico (50g)", precio: "5-8€", donde: "Internet", nota: "Para sulfitar el mosto y evitar fermentaciones salvajes (1g por 10L). Opcional pero recomendado para principiante para más control.", prioridad: "ÚTIL", tipo: "Consumible" },
    { item: "🥄 Embudo + cuchara larga", precio: "3-8€", donde: "Tienda física", nota: "Imprescindible para verter el mosto.", prioridad: "ESENCIAL", tipo: "Equipo" },
    { item: "🍾 Botellas vidrio 0.5-0.75L (12-15 uds)", precio: "0-15€", donde: "Tienda física", nota: "Botellas reutilizadas de cerveza/vino o swing-top tipo Grolsch. Para sidra espumosa: SIEMPRE swing-top o botellas champaneras (las normales pueden explotar con presión).", prioridad: "ESENCIAL", tipo: "Equipo" },
  ];
  const [filterPrio, setFilterPrio] = React.useState([]);
  const [filterTipo, setFilterTipo] = React.useState([]);
  const togglePrio = (p) => setFilterPrio(s => s.includes(p) ? s.filter(x => x !== p) : [...s, p]);
  const toggleTipo = (t) => setFilterTipo(s => s.includes(t) ? s.filter(x => x !== t) : [...s, t]);
  const filtered = items.filter(i =>
    (filterPrio.length === 0 || filterPrio.includes(i.prioridad)) &&
    (filterTipo.length === 0 || filterTipo.includes(i.tipo))
  );
  const prioColor = { "ESENCIAL": "#e8755a", "IMPORTANTE": "#dfb578", "ÚTIL": "#c08040" };
  const tipoColor = { "Equipo": "#8a5e30", "Consumible": "#c08040" };

  return (
    <div>
      <InfoBoxX c={c}>
        Lista para 8-10L de sidra (~10-15 botellas). Inversión 50-200€ según prensa. Si reutilizas equipo de hidromiel/cerveza: solo gastas en manzanas + levadura (~20€/lote). Producto típico otoñal — manzanas frescas en oct-nov.
      </InfoBoxX>

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

      <SectionTitleX c={c}>LISTA DE COMPRA SIDRA ({filtered.length}/{items.length})</SectionTitleX>
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

function PREP_SIDRA() {
  const c = FERMENT_COLORS;
  return (
    <div>
      <InfoBoxX c={c}>
        Convertir 12kg de manzanas en 8L de mosto. La parte más laboriosa de hacer sidra. 2-3 horas de trabajo.
      </InfoBoxX>

      <SectionTitleX c={c}>SELECCIÓN DE MANZANAS</SectionTitleX>
      <InfoBoxX c={c}>
        🍎 <strong>Mezcla ideal (sidra balanceada):</strong> 60% dulces (Reineta, Golden, Fuji), 30% ácidas (Granny Smith, Reineta gris), 10% amargas/tánicas (silvestres si encuentras, manzana de monte).<br/>
        🍏 <strong>Calidad:</strong> sin podredumbre. Pequeños golpes y manchas SÍ — la fermentación los neutraliza. Manzanas perfectas no son necesarias.<br/>
        🌳 <strong>Recogida:</strong> tras una semana de tiempo seco, recolectar del suelo o del árbol. Mejor maduras (la dulzura = azúcar = alcohol).
      </InfoBoxX>

      <SectionTitleX c={c}>PASO A PASO</SectionTitleX>
      <StepX c={c} num={1} text="Lavar las manzanas con agua. NO usar jabón. Quitar tallos, hojas y partes claramente podridas (marrón blando)." />
      <StepX c={c} num={2} text="Cortar cada manzana en cuartos. NO quitar piel ni semillas — la piel tiene levadura natural y aporta sabor; las semillas son inertes (cantidades pequeñas no son tóxicas)." />
      <StepX c={c} num={3} text="Triturar las manzanas. Opciones:" />
      <div style={{ display: "grid", gap: "8px", marginBottom: "12px" }}>
        {[
          { metodo: "🥤 Licuadora potente", det: "La opción más rápida. Triturar lotes pequeños hasta puré fino. Después colar con tela." },
          { metodo: "🔨 Mortero/rodillo + tabla", det: "Tradicional rural. Aplastar las manzanas en lotes con un rodillo o piedra plana. Lento pero gratis." },
          { metodo: "🏗️ Prensa de sidra", det: "Equipo dedicado (80-150€). Mejor rendimiento y trabajo más limpio. Recomendado si haces sidra cada año." },
        ].map((m, i) => (
          <div key={i} style={{ background: c.bg2, border: `1px solid ${c.border1}`, borderRadius: "8px", padding: "10px" }}>
            <div style={{ fontSize: "12px", fontWeight: "bold", color: c.textBright, marginBottom: "3px" }}>{m.metodo}</div>
            <div style={{ fontSize: "11px", color: c.accent3, lineHeight: "1.5" }}>{m.det}</div>
          </div>
        ))}
      </div>
      <StepX c={c} num={4} text="Prensar/colar el puré para extraer el zumo: usar tela de muselina o gasa de cocina. Apretar fuerte." />
      <StepX c={c} num={5} text="Repetir lotes hasta tener todo el zumo. Rendimiento típico: 1kg manzanas = 0.5-0.7L mosto." />
      <StepX c={c} num={6} text="Verter el mosto en garrafa sanitizada con embudo. Deja 10-15cm de espacio arriba (para espuma de fermentación)." />
      <StepX c={c} num={7} text="(OPCIONAL pero recomendado) Sulfitar: añadir 0.5g de metabisulfito potásico por cada 5L de mosto. Esperar 24h antes de inocular levadura." why="Mata bacterias y levaduras salvajes para que la levadura que tú añades domine la fermentación. Más control y resultado predecible." />
      <StepX c={c} num={8} text="Si NO sulfitas: pasar directamente a inoculación de levadura O dejar fermentación espontánea (con la levadura natural de la piel)." />
    </div>
  );
}

function FERMENTACION_SIDRA() {
  const c = FERMENT_COLORS;
  return (
    <div>
      <InfoBoxX c={c}>
        3-6 semanas. La levadura come azúcares de la manzana → alcohol + CO₂. Más rápida que vino, más lenta que cerveza.
      </InfoBoxX>

      <SectionTitleX c={c}>INOCULACIÓN</SectionTitleX>
      <StepX c={c} num={1} text="Si sulfitaste: esperar 24h después del sulfitado para que el SO₂ se evapore." />
      <StepX c={c} num={2} text="Hidratar la levadura: 5g en 100ml agua templada (35-40°C). Esperar 15 min." />
      <StepX c={c} num={3} text="Verificar temperatura del mosto: debe estar 15-22°C para fermentación de sidra (más fría que cerveza)." why="Sidra fermentada en frío (15°C) sale más limpia y aromática. A temperatura ambiente (22°C+) sale más rústica." />
      <StepX c={c} num={4} text="Verter levadura en la garrafa. Tapar con airlock (con agua hasta la línea)." />
      <StepX c={c} num={5} text="Lugar oscuro y fresco (15-22°C). Etiquetar con fecha." />

      <SectionTitleX c={c}>SEMANA 1 — FERMENTACIÓN PRIMARIA</SectionTitleX>
      <StepX c={c} num={1} text="Días 1-2: empieza burbujeo en 12-24h. Espuma blanca arriba (krausen). Olor afrutado intenso." />
      <StepX c={c} num={2} text="Días 3-7: actividad MÁXIMA. Burbujeo cada pocos segundos. El mosto está turbio." />

      <SectionTitleX c={c}>SEMANAS 2-4 — FERMENTACIÓN SECUNDARIA</SectionTitleX>
      <StepX c={c} num={1} text="Burbujeo se ralentiza gradualmente. La espuma desaparece. El mosto se aclara desde arriba." />
      <StepX c={c} num={2} text="NO ABRIR la garrafa. El sedimento (lías) cae al fondo." />
      <StepX c={c} num={3} text="Mantener temperatura constante. Variaciones bruscas pueden parar la fermentación." />

      <SectionTitleX c={c}>SEMANAS 4-6 — FINAL</SectionTitleX>
      <StepX c={c} num={1} text="Burbujeo se reduce a casi nada. El líquido es transparente arriba." />
      <StepX c={c} num={2} text="Verificar con hidrómetro: si la densidad lleva 3 días igual = fermentación TERMINADA. Densidad final típica: 0.995-1.005." why="Sin hidrómetro: si llevas 7+ días sin ver burbujas = listo." />
      <StepX c={c} num={3} text="Sabor en este punto: sidra seca, ligeramente afrutada. Si quieres más dulce: añadir azúcar al embotellar (ver siguiente fase)." />

      <SectionTitleX c={c}>ERRORES COMUNES</SectionTitleX>
      <ErrorCardX c={c}
        error="Manzanas demasiado dulces solas"
        consecuencia="Sidra empalagosa, sin balance. Falta acidez y taninos."
        fix="Mezclar tipos: dulces + ácidas + amargas. Si solo tienes dulces: añadir ácido málico (5-10g por 10L) o un poco de zumo de limón."
      />
      <ErrorCardX c={c}
        error="Temperatura por encima de 25°C"
        consecuencia="Fermentación rápida pero sabores raros (vinagre, plástico, banana)."
        fix="15-22°C ideal. En verano: garrafa en sitio fresco o nevera dedicada con controlador."
      />
      <ErrorCardX c={c}
        error="Olvidarse de tapar con airlock"
        consecuencia="Acetobacter (bacterias del vinagre) entran. Tras 1-2 semanas tienes vinagre de manzana en lugar de sidra."
        fix="Airlock SIEMPRE desde día 1. Si el mosto se vuelve agrio = vinagre, descartar (o usar como vinagre — útil en cocina)."
      />
    </div>
  );
}

function EMBOTELLADO_SIDRA() {
  const c = FERMENT_COLORS;
  return (
    <div>
      <InfoBoxX c={c}>
        Trasiego (sacar líquido limpio dejando sedimento) y embotellado. Decides si quieres SIDRA NATURAL (sin gas) o ESPUMOSA (con gas).
      </InfoBoxX>

      <SectionTitleX c={c}>TRASIEGO</SectionTitleX>
      <StepX c={c} num={1} text="Sanitizar otra garrafa de 10L y un sifón." />
      <StepX c={c} num={2} text="Garrafa con sidra encima de mesa, garrafa nueva en suelo. Sifón aprovecha la gravedad." />
      <StepX c={c} num={3} text="Insertar sifón sin tocar el sedimento. Trasvasar el líquido a la garrafa nueva, dejando los últimos 2cm con lías." why="El sedimento da sabor amargo. Trasiego limpio = sidra más clara y agradable." />
      <StepX c={c} num={4} text="(Opcional) Reposar 1-2 semanas más en la garrafa nueva con airlock para clarificar más. La sidra natural se aclara más con tiempo." />

      <SectionTitleX c={c}>OPCIÓN A — SIDRA NATURAL (SIN GAS)</SectionTitleX>
      <StepX c={c} num={1} text="Embotellar tal cual. Sin priming sugar." />
      <StepX c={c} num={2} text="Tapar con corcho o tapón rosca. Cualquier botella de vidrio sirve." />
      <StepX c={c} num={3} text="Conservar en frasco horizontal (corcho hidratado) o vertical (tapón rosca). Lugar fresco." />

      <SectionTitleX c={c}>OPCIÓN B — SIDRA ESPUMOSA (CON GAS)</SectionTitleX>
      <StepX c={c} num={1} text="Calcular priming sugar: 5-7g de azúcar blanca por litro. Para 8L = 40-56g." />
      <StepX c={c} num={2} text="Disolver el azúcar en 100ml de agua hirviendo. Enfriar. Añadir al cubo con cuidado, removiendo gentilmente." why="La levadura residual come ese azúcar y produce CO₂ atrapado en la botella = burbujas naturales." />
      <StepX c={c} num={3} text="Embotellar en BOTELLAS RESISTENTES A PRESIÓN: swing-top tipo Grolsch o botellas champaneras. NO usar botellas de vino normales — pueden EXPLOTAR." warning />
      <StepX c={c} num={4} text="Dejar a temperatura ambiente 14 días para carbonatación. Después al frío." />

      <SectionTitleX c={c}>OPCIÓN C — SIDRA SEMI-DULCE (PASTEURIZADA)</SectionTitleX>
      <StepX c={c} num={1} text="Si quieres sidra dulce: detener la fermentación cuando aún haya azúcar residual." />
      <StepX c={c} num={2} text="Método: trasvasar y pasteurizar en baño maría a 60°C durante 20 min. Esto mata la levadura, deteniendo fermentación." why="Sin pasteurizar, la levadura sigue trabajando en la botella, eliminando el azúcar y aumentando presión." />
      <StepX c={c} num={3} text="Embotellar (botellas resistentes — siempre hay algo de presión residual)." />
    </div>
  );
}

function CATA_SIDRA() {
  const c = FERMENT_COLORS;
  return (
    <div>
      <InfoBoxX c={c}>
        Sidra recién embotellada (1-2 semanas) ya es bebible. Mejora considerablemente con 2-6 meses de maduración. Aguanta 1-2 años en buena conservación.
      </InfoBoxX>

      <SectionTitleX c={c}>EVOLUCIÓN DEL SABOR</SectionTitleX>
      <div style={{ display: "grid", gap: "8px", marginBottom: "20px" }}>
        {[
          { tiempo: "1-2 semanas", sabor: "Bebible. Sabor a manzana fermentada, posible toque a levadura. Más rústica." },
          { tiempo: "1-2 meses", sabor: "Más limpia. La levadura se asienta. Aparecen notas afrutadas." },
          { tiempo: "3-6 meses", sabor: "RICA. Equilibrada, aromática. Mejor momento para muchas sidras caseras." },
          { tiempo: "6-12 meses", sabor: "Profundidad. Notas más complejas. Sidra que parece artesanal." },
          { tiempo: "1-2 años", sabor: "Si guardada bien (frío, oscuro): increíble. Notas a sidra Asturiana de calidad. Después: empieza a oxidarse." },
        ].map((t, i) => (
          <div key={i} style={{ background: c.bg2, border: `1px solid ${c.border1}`, borderRadius: "8px", padding: "10px" }}>
            <div style={{ fontSize: "11px", color: c.accent1, fontWeight: "bold", letterSpacing: "1px", marginBottom: "3px" }}>{t.tiempo.toUpperCase()}</div>
            <div style={{ fontSize: "12px", color: c.accent3, lineHeight: "1.5" }}>{t.sabor}</div>
          </div>
        ))}
      </div>

      <SectionTitleX c={c}>CATA RITUAL ASTURIANA — EL ESCANCIADO</SectionTitleX>
      <InfoBoxX c={c}>
        Sidra natural se sirve TIRÁNDOLA desde altura (botella elevada, vaso bajo). Esto oxigena y libera aromas (la sidra es plana, esto le da burbuja temporal). Servir 1-2 dedos en el vaso, beber RÁPIDO antes de que pierda la efervescencia. Sirve persona a persona, vaso a vaso. Ritual social, no técnica esnob.
      </InfoBoxX>

      <SectionTitleX c={c}>VARIACIONES PARA PRÓXIMOS LOTES</SectionTitleX>
      <InfoBoxX c={c}>
        🍐 <strong>Pera:</strong> mezclar 30% peras con manzanas — sidra más suave y dulce.<br/>
        🌿 <strong>Hierbas:</strong> añadir manzanilla, lúpulo o jengibre durante secundario para perfiles raros.<br/>
        🍯 <strong>Cyser:</strong> mezcla manzana + miel — fusión sidra/hidromiel.<br/>
        🌶️ <strong>Especias:</strong> canela, clavo, cardamomo en cantidad pequeña para sidra invernal.
      </InfoBoxX>
    </div>
  );
}
