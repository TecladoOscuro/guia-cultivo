// TRUFAS MÁGICAS — Esclerocios de Psilocybe (tampanensis, mexicana, atlantis)
// Mismo activo (psilocibina + psilocina) que setas Psilocybe pero forma distinta:
// crecimiento subterráneo (esclerocios) en lugar de fructificación aérea (setas).

function INTRO_TRUFAS() {
  const c = TRUFAS_COLORS;
  return (
    <div>
      <InfoBoxX c={c}>
        Trufas mágicas = <strong>esclerocios</strong> de ciertas especies de <GlossaryLink term="Psilocibina">Psilocibe</GlossaryLink>. Mismo activo psicoactivo que las setas (psilocibina → psilocina), distinta forma física: en lugar de fructificar arriba como setas, el <GlossaryLink term="Micelio">micelio</GlossaryLink> compacta nutrientes en bolas duras subterráneas. Cultivo MÁS FÁCIL que setas (no necesita fructificación con humedad alta).
      </InfoBoxX>

      <SectionTitleX c={c}>QUÉ ES UN ESCLEROCIO</SectionTitleX>
      <InfoBoxX c={c}>
        🍯 <strong>Esclerocio</strong> = bola compacta de micelio que el hongo forma como reserva de supervivencia ante condiciones adversas (sequía, frío). En el frasco de cultivo se forman naturalmente sin necesidad de cámara de fructificación. Textura: dura por fuera, blanca por dentro, sabor neutro/avellana.<br/><br/>
        🍄 vs <strong>Seta (cuerpo fructífero)</strong>: la seta es el órgano reproductivo aéreo que dispersa esporas. El esclerocio es órgano de supervivencia subterráneo. Misma especie puede dar ambos en condiciones distintas.
      </InfoBoxX>

      <SectionTitleX c={c}>ESPECIES QUE PRODUCEN TRUFAS</SectionTitleX>
      <div style={{ display: "grid", gap: "10px", marginBottom: "20px" }}>
        {[
          { nombre: "🍯 Psilocybe tampanensis", potencia: "Media-alta (0.3-0.6% psilocibina seca)", origen: "Florida, USA", recomendado: "✅ MEJOR PARA EMPEZAR. La cepa más común y predecible. Cultivo bien documentado. 'Philosopher's stones' es su nombre comercial." },
          { nombre: "🌰 Psilocybe mexicana", potencia: "Media (0.2-0.4%)", origen: "México", recomendado: "Histórica — usada por María Sabina. Producción de trufas más lenta pero abundante. Buena alternativa a tampanensis." },
          { nombre: "💎 Psilocybe atlantis", potencia: "Alta (0.5-0.9%)", origen: "Georgia, USA", recomendado: "Más potente. Trufas más pequeñas pero MUY concentradas. Para experimentados." },
          { nombre: "🪨 Psilocybe galindoi", potencia: "Media-alta", origen: "México", recomendado: "Variante de mexicana, esclerocios más grandes y oscuros." },
          { nombre: "🍄 Psilocybe cubensis", potencia: "Variable", origen: "Tropical", recomendado: "❌ La cepa más común para SETAS NO produce esclerocios típicamente. Si quieres setas → guía Setas." },
        ].map((s, i) => (
          <div key={i} style={{ background: c.bg2, border: `1px solid ${c.border1}`, borderRadius: "10px", padding: "12px" }}>
            <div style={{ fontSize: "13px", fontWeight: "bold", color: c.textBright, marginBottom: "4px" }}>{s.nombre}</div>
            <div style={{ fontSize: "11px", color: c.accent2, marginBottom: "3px" }}>💊 {s.potencia}</div>
            <div style={{ fontSize: "11px", color: c.accent2, marginBottom: "5px" }}>🌎 {s.origen}</div>
            <div style={{ fontSize: "12px", color: c.accent3, lineHeight: "1.5" }}>{s.recomendado}</div>
          </div>
        ))}
      </div>

      <SectionTitleX c={c}>VS SETAS PSILOCYBE — VENTAJAS</SectionTitleX>
      <InfoBoxX c={c}>
        ✅ <strong>NO necesitas cámara de fructificación</strong> (SGFC, monotub) — todo crece dentro del frasco<br/>
        ✅ <strong>Menos contaminación</strong> — no abrir frascos durante crecimiento<br/>
        ✅ <strong>Menos atención diaria</strong> — solo esperar 8-16 semanas<br/>
        ✅ <strong>Más fácil para piso pequeño</strong> — solo necesitas espacio para frascos en armario<br/>
        ✅ <strong>Mismo efecto psicoactivo</strong> — psilocibina/psilocina idénticas a setas<br/><br/>
        ❌ <strong>Toma MÁS tiempo</strong> total (8-16 sem vs 4-8 sem para setas)<br/>
        ❌ <strong>Concentración variable</strong> — esclerocios pueden tener menos potencia por gramo
      </InfoBoxX>

      <SectionTitleX c={c}>LEGALIDAD</SectionTitleX>
      <InfoBoxX c={c}>
        🇳🇱 <strong>Holanda:</strong> 100% LEGAL — venta abierta en smartshops desde 2008 (cuando setas se prohibieron, las trufas siguieron legales por loophole legal).<br/>
        🇪🇸 <strong>España:</strong> mismo estado legal que setas Psilocybe = zona gris. Cultivo casero TOLERADO (uso personal, no comercial). Posesión: gris. Venta: ILEGAL.<br/>
        🇪🇺 <strong>EU general:</strong> varía. Verificar país antes de viajar con trufas.
      </InfoBoxX>

      <SectionTitleX c={c}>TIMELINE PROYECTO COMPLETO</SectionTitleX>
      <div style={{ display: "grid", gap: "8px" }}>
        {[
          { tiempo: "Día 0", evento: "🛒 Compra esporada + equipo" },
          { tiempo: "Día 1-2", evento: "🌾 Esterilizar grano (olla a presión 90 min)" },
          { tiempo: "Día 3", evento: "💉 Inoculación con esporada" },
          { tiempo: "Días 3-21", evento: "🔮 Colonización del grano (3 semanas)" },
          { tiempo: "Días 21-90", evento: "🍯 Formación de esclerocios subterráneos (8-12 semanas)" },
          { tiempo: "Días 90-110", evento: "✂️ Primera cosecha" },
          { tiempo: "Día 110+", evento: "🍯 Conservar / consumir" },
        ].map((t, i) => (
          <div key={i} style={{ background: c.bg2, border: `1px solid ${c.border1}`, borderRadius: "8px", padding: "10px", transition: "all 0.2s", cursor: "default" }}
            onMouseEnter={(e) => { e.currentTarget.style.borderColor = c.accent1; e.currentTarget.style.transform = "translateX(4px)"; }}
            onMouseLeave={(e) => { e.currentTarget.style.borderColor = c.border1; e.currentTarget.style.transform = "translateX(0)"; }}
          >
            <div style={{ fontSize: "11px", color: c.accent1, fontWeight: "bold", letterSpacing: "1px", marginBottom: "3px" }}>{t.tiempo.toUpperCase()}</div>
            <div style={{ fontSize: "12px", color: c.accent3 }}>{t.evento}</div>
          </div>
        ))}
      </div>

      <LegalHealthBox c={c}
        legal={<>🇳🇱 Holanda: 100% LEGAL — venta abierta en smartshops desde 2008.<br/>🇪🇸 España: zona gris (mismo estado que setas Psilocybe). Cultivo casero TOLERADO uso personal.<br/>❌ Comercializar/vender: ILEGAL.<br/>🇪🇺 Resto UE varía — verificar país antes de viajar.</>}
        salud={<>Mismo activo que setas (psilocibina/psilocina). Náuseas iniciales 1ª hora frecuentes. Experiencia 4-6h. NO mezclar con SSRI/IMAO/MDMA = riesgo síndrome serotonérgico. <GlossaryLink term="HPPD">HPPD</GlossaryLink> raro pero posible con uso muy frecuente.</>}
        contraindicaciones="SSRI/IMAO/antidepresivos serotonérgicos (off-meds 4-6 sem) · Esquizofrenia/bipolar/paranoia · Embarazo/lactancia · Cardiopatía grave · Otras drogas mismo día"
      />
    </div>
  );
}

function COMPRA_TRUFAS() {
  const c = TRUFAS_COLORS;
  const items = [
    { item: "🧫 Esporada Psilocybe tampanensis (jeringa)", precio: "20-40€", donde: "Internet", nota: "Vendedores etnobotánicos UE: Avalon Magic Plants, World Seed Supply, ethnopharm. Buscar 'spore syringe Psilocybe tampanensis'. Para empezar: tampanensis es la más fiable. 1 jeringa basta para 5-10 frascos.", prioridad: "ESENCIAL", tipo: "Consumible" },
    { item: "🫙 Frascos de vidrio con tapa filtro (0.5L o 1L) x 5-10", precio: "20-40€", donde: "Internet", nota: "Frascos específicos para cultivo de esclerocios — tapa con filtro micropore + puerto de inyección. O DIY: frascos normales + agujero en tapa con filtro de tela + cinta micropore. 5-10 frascos = 1-2 cosechas.", prioridad: "ESENCIAL", tipo: "Equipo" },
    { item: "🌾 Grano (centeno, mijo o avena) - 2kg", precio: "5-15€", donde: "Tienda física", nota: "Centeno (rye) es el más usado para esclerocios. Mijo más fácil de manipular. Cualquier tienda agrícola o tienda de cereales sin procesar. NO usar grano cocinado/precocido.", prioridad: "ESENCIAL", tipo: "Consumible" },
    { item: "🔥 Olla a presión 6-10L", precio: "40-80€", donde: "Tienda física", nota: "Imprescindible para esterilizar el grano (90min a 15 PSI). Mismo equipo que para guía Setas Avanzado — si ya la tienes, reutiliza. Marcas: Beltrán, Magefesa.", prioridad: "ESENCIAL", tipo: "Equipo" },
    { item: "🪜 SAB (Still Air Box) o espacio limpio", precio: "20-40€", donde: "Internet / DIY", nota: "Caja hermética con guantes para inocular sin contaminación. DIY: caja plástica grande + 2 agujeros para guantes de látex + alcohol antes de usar. CRÍTICO para evitar contaminación durante inoculación.", prioridad: "ESENCIAL", tipo: "Equipo" },
    { item: "🧴 Alcohol isopropílico 70% (1L)", precio: "8-12€", donde: "Farmacia", nota: "Para sanitizar SAB, manos, frascos, herramientas. Imprescindible.", prioridad: "ESENCIAL", tipo: "Consumible" },
    { item: "🧤 Guantes de nitrilo + mascarilla FFP2", precio: "5-10€", donde: "Farmacia", nota: "Reduce 90% riesgo de contaminación. Mascarilla evita que tu aliento contamine. Imprescindible durante inoculación.", prioridad: "ESENCIAL", tipo: "Consumible" },
    { item: "🌡️ Termómetro digital", precio: "5-12€", donde: "Internet", nota: "Para monitorizar 24-26°C durante incubación. Ideal con sonda externa para no abrir el armario.", prioridad: "ESENCIAL", tipo: "Equipo" },
    { item: "💨 Cinta micropore", precio: "3-6€", donde: "Farmacia", nota: "Para sellar puerto de inyección de los frascos tras inocular. 1 rollo basta para 5+ ciclos.", prioridad: "ESENCIAL", tipo: "Consumible" },
    { item: "🔥 Mechero o llama (para flameado)", precio: "0-5€", donde: "Tienda física", nota: "Esterilizar la aguja de la jeringa de esporada antes de cada inyección. Cualquier mechero sirve.", prioridad: "ESENCIAL", tipo: "Equipo" },
    { item: "⚖️ Báscula digital de precisión", precio: "10-20€", donde: "Internet", nota: "CRÍTICA para dosificación al consumir. Precisión ±0.1g. Trufas frescas pesan distinto que secas — báscula es imprescindible.", prioridad: "ESENCIAL", tipo: "Equipo" },
    { item: "🫙 Frascos pequeños vacío + sílica gel", precio: "5-15€", donde: "Tienda física", nota: "Para conservar las trufas tras cosecha. Tamaño según rendimiento (250-500ml).", prioridad: "IMPORTANTE", tipo: "Equipo" },
    { item: "🍯 Miel pura cruda (para conservación honey)", precio: "10-15€", donde: "Tienda física", nota: "Opcional. Trufas conservadas en miel duran 6-12 meses, sabor mucho mejor que frescas. Usar miel cruda sin pasteurizar.", prioridad: "ÚTIL", tipo: "Consumible" },
  ];
  const [filterPrio, setFilterPrio] = React.useState([]);
  const [filterTipo, setFilterTipo] = React.useState([]);
  const togglePrio = (p) => setFilterPrio(s => s.includes(p) ? s.filter(x => x !== p) : [...s, p]);
  const toggleTipo = (t) => setFilterTipo(s => s.includes(t) ? s.filter(x => x !== t) : [...s, t]);
  const filtered = items.filter(i =>
    (filterPrio.length === 0 || filterPrio.includes(i.prioridad)) &&
    (filterTipo.length === 0 || filterTipo.includes(i.tipo))
  );
  const prioColor = { "ESENCIAL": "#d4755b", "IMPORTANTE": "#bfc0a0", "ÚTIL": "#a4a785" };
  const tipoColor = { "Equipo": "#6e7256", "Consumible": "#8a8e6e" };

  return (
    <div>
      <InfoBoxX c={c}>
        Inversión inicial 80-180€ (incluye olla a presión que se reutiliza para muchos lotes). Si ya tienes equipo de guía Setas Avanzado: solo necesitas esporada + grano + frascos (~30-50€).
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

      <SectionTitleX c={c}>LISTA DE COMPRA TRUFAS ({filtered.length}/{items.length})</SectionTitleX>
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

function INOCULACION_TRUFAS() {
  const c = TRUFAS_COLORS;
  return (
    <div>
      <InfoBoxX c={c}>
        Esterilizar grano + inyectar esporas en condiciones limpias. Mismo proceso que Psilocybe avanzado pero con cepa específica para esclerocios. La <GlossaryLink term="Esterilización">esterilización</GlossaryLink> es el paso más crítico — sin ella, la <GlossaryLink term="Contaminación">contaminación</GlossaryLink> arruina el lote.
      </InfoBoxX>

      <SectionTitleX c={c}>PREPARAR EL GRANO (DÍA 1)</SectionTitleX>
      <StepX c={c} num={1} text="Pesa 200-300g de grano (centeno mejor) por frasco. Lava el grano 2-3 veces con agua fría hasta que salga clara." />
      <StepX c={c} num={2} text="Cocer el grano en olla normal con agua abundante 30-45 min. NO hervir hasta que se rompa — quieres grano hidratado pero entero." why="Grano demasiado blando se compacta y no permite que el micelio respire. Demasiado seco y no se hidrata el micelio." />
      <StepX c={c} num={3} text="Escurrir el grano. Dejar secar al aire 30-60 min sobre papel absorbente. El grano debe estar húmedo pero NO mojado al tacto." />
      <StepX c={c} num={4} text="Llenar cada frasco con 200-300g de grano. Dejar 2-3cm de espacio arriba (necesita aire para el micelio)." />
      <StepX c={c} num={5} text="Tapar con tapa de filtro (o tapa normal con agujero + cinta micropore). NO cerrar herméticamente." />

      <SectionTitleX c={c}>ESTERILIZAR (DÍA 1-2)</SectionTitleX>
      <StepX c={c} num={1} text="En olla a presión: añadir 5cm de agua al fondo + rejilla. Colocar los frascos en pie sobre la rejilla (NO en contacto con el agua)." />
      <StepX c={c} num={2} text="Cerrar y llevar a presión. Mantener 90 minutos a 15 PSI." why="Esterilización completa requiere 121°C durante mínimo 90 min para destruir esporas de bacterias termófilas. Menos = riesgo de contaminación tardía." warning />
      <StepX c={c} num={3} text="Apagar el fuego. NO abrir la olla. Dejar enfriar lentamente al menos 12 horas (ideal: durante la noche)." why="Enfriamiento lento evita que el aire del exterior entre con presión negativa al enfriar — eso traería contaminantes." />
      <StepX c={c} num={4} text="Día siguiente: abrir la olla solo si los frascos están a temperatura ambiente (no usar termómetro — sentir el frasco). Si están calientes, esperar más." />

      <SectionTitleX c={c}>INOCULACIÓN (DÍA 2-3)</SectionTitleX>
      <StepX c={c} num={1} text="En espacio limpio o SAB: ducha de vapor 5 min antes (cierra puerta, agua caliente, esperar). Limpiar superficie con alcohol 70%, esperar 1 min." />
      <StepX c={c} num={2} text="Sanitizar manos + ponerse guantes. Rocía guantes con alcohol. Mascarilla FFP2 puesta." warning />
      <StepX c={c} num={3} text="Sacar la jeringa de esporada. Quitar el capuchón con cuidado — NO tocar la aguja con nada." />
      <StepX c={c} num={4} text="Flamear la aguja con mechero hasta poner roja (3-5 segundos). Dejar enfriar AL AIRE 20 segundos antes de tocar el frasco." why="Si la inyectas caliente, el calor mata las esporas que estás inyectando." warning />
      <StepX c={c} num={5} text="Agitar la jeringa suavemente — las esporas tienden a sedimentarse." />
      <StepX c={c} num={6} text="Inyectar 1-2ml de esporada en cada frasco a través del puerto de inyección (cinta micropore). Hacer 2-3 puntos diferentes en cada frasco." why="Distribuir esporas en varios puntos = colonización más rápida y uniforme. 1ml = ~10,000 esporas, suficiente." />
      <StepX c={c} num={7} text="Sellar los puntos de inyección con cinta micropore extra." />
      <StepX c={c} num={8} text="Etiquetar cada frasco con fecha + cepa + número de lote." />

      <SectionTitleX c={c}>ERRORES COMUNES</SectionTitleX>
      <ErrorCardX c={c}
        error="Esterilizar menos de 90 min"
        consecuencia="Esporas de bacterias termófilas (Bacillus) sobreviven. Aparecen tras 1-2 semanas como pus amarillento dentro del frasco — todo el lote a la basura."
        fix="90 min mínimo a 15 PSI. NO escatimar tiempo."
      />
      <ErrorCardX c={c}
        error="Inyectar aguja recién flameada (caliente)"
        consecuencia="Calor mata las esporas. El frasco no germina aunque inyectaste."
        fix="Esperar 20 segundos al aire después de flamear. Tocar el frasco con la aguja para verificar temperatura — debe estar fría."
      />
      <ErrorCardX c={c}
        error="No usar mascarilla durante inoculación"
        consecuencia="Tu aliento contiene esporas y bacterias. Una sola contaminación arruina el lote entero (3+ meses perdidos)."
        fix="Mascarilla FFP2 SIEMPRE durante inoculación. NO hablar mientras inyectas."
      />
    </div>
  );
}

function INCUBACION_TRUFAS() {
  const c = TRUFAS_COLORS;
  return (
    <div>
      <InfoBoxX c={c}>
        8-16 semanas esperando. Las trufas se forman SIN tu intervención. Solo monitoreo de temperatura y vigilancia visual de contaminación. Más tranquilo que setas (no hay fructificación, no hay nebulizar, no hay FAE).
      </InfoBoxX>

      <SectionTitleX c={c}>FASE 1 — COLONIZACIÓN DEL GRANO (SEMANAS 1-3)</SectionTitleX>
      <StepX c={c} num={1} text="Días 1-7: NO debes ver nada visible. El micelio empieza a crecer microscópicamente desde los puntos de inyección." />
      <StepX c={c} num={2} text="Días 7-14: aparecen puntos blancos algodonosos creciendo desde los puntos de inyección. Bordes esféricos blancos." />
      <StepX c={c} num={3} text="Días 14-21: el blanco se extiende por todo el grano. Día 21: el frasco está 70-100% blanco con grano colonizado." why="Una vez 100% blanco, el micelio busca refugio para sobrevivir. Aquí empieza la formación de esclerocios." />

      <SectionTitleX c={c}>FASE 2 — FORMACIÓN DE ESCLEROCIOS (SEMANAS 4-12)</SectionTitleX>
      <StepX c={c} num={1} text="A partir de la semana 4: empiezan a aparecer pequeños puntos blancos compactos entre el grano. Estos son los primeros esclerocios formándose." />
      <StepX c={c} num={2} text="Semanas 5-8: los esclerocios crecen en tamaño y se vuelven más densos. Color blanco mate al principio, luego marrón claro al madurar." />
      <StepX c={c} num={3} text="Semanas 8-12: los esclerocios alcanzan tamaño final (1-3cm cada uno). Color marrón oscuro = madurez total + máxima potencia." />
      <StepX c={c} num={4} text="NO TOCAR ni abrir el frasco durante este período. Cualquier apertura introduce contaminantes." warning />

      <SectionTitleX c={c}>CONDICIONES IDEALES</SectionTitleX>
      <div style={{ display: "grid", gridTemplateColumns: "1fr 1fr", gap: "10px", marginBottom: "16px" }}>
        <StatBoxX c={c} label="Temperatura" value="22-26°C constante" />
        <StatBoxX c={c} label="Luz" value="OSCURIDAD total" />
        <StatBoxX c={c} label="Humedad" value="No relevante (frasco cerrado)" />
        <StatBoxX c={c} label="Posición" value="Vertical, sin mover" />
      </div>

      <SectionTitleX c={c}>SEÑALES NORMALES</SectionTitleX>
      <InfoBoxX c={c}>
        ✓ Crecimiento blanco algodonoso desde puntos de inyección<br/>
        ✓ Olor agradable a champiñón fresco / hongo si abres con cuidado<br/>
        ✓ Puntos compactos formándose entre el grano (esclerocios incipientes)<br/>
        ✓ Color blanco-cremoso → marrón claro → marrón oscuro (maduración)<br/>
        ✓ Pequeñas gotas amarillas (metabolitos del micelio): NORMAL
      </InfoBoxX>

      <SectionTitleX c={c}>SEÑALES DE CONTAMINACIÓN — DESCARTAR</SectionTitleX>
      <ErrorCardX c={c}
        error="Manchas verdes brillantes (Trichoderma)"
        consecuencia="El hongo contaminante #1. Mata el Psilocybe rápido."
        fix="Tirar el frasco SELLADO a basura. NO abrir dentro de casa (esporas contaminantes). Empezar de cero."
      />
      <ErrorCardX c={c}
        error="Manchas negras o azules oscuras"
        consecuencia="Moho contaminante (Aspergillus, Penicillium). Tóxico."
        fix="Descartar. Revisar protocolo de inoculación para próxima vez."
      />
      <ErrorCardX c={c}
        error="Olor a alcohol, vinagre, vómito o pies"
        consecuencia="Bacterias anaerobias. Frasco con exceso de agua o falta de oxígeno."
        fix="Descartar. Verificar que el grano no estaba demasiado mojado al meterlo en frasco."
      />
    </div>
  );
}

function COSECHA_TRUFAS() {
  const c = TRUFAS_COLORS;
  return (
    <div>
      <InfoBoxX c={c}>
        A partir de las 8-12 semanas de incubación, los esclerocios están listos. Color marrón oscuro + tamaño final = momento óptimo. Sacarlos del frasco y separar del grano.
      </InfoBoxX>

      <SectionTitleX c={c}>CUÁNDO COSECHAR</SectionTitleX>
      <InfoBoxX c={c}>
        ⏱️ <strong>Mínimo:</strong> 8 semanas desde inoculación (esclerocios pequeños, menor potencia)<br/>
        ✅ <strong>Óptimo:</strong> 10-12 semanas (esclerocios marrón oscuro, máxima potencia)<br/>
        ⚠️ <strong>Tarde:</strong> después de 16 semanas — esclerocios pueden empezar a degradarse<br/><br/>
        Inspección visual: si los esclerocios son <strong>marrón oscuro / casi negros</strong> y miden 1-3cm = listos. Si aún son blancos o cremosos = esperar más tiempo.
      </InfoBoxX>

      <SectionTitleX c={c}>PROCESO DE COSECHA</SectionTitleX>
      <StepX c={c} num={1} text="En espacio limpio (no necesita ser SAB ahora — los esclerocios no se contaminan al cosechar): preparar bandeja + cuchillo + frasco vacío + báscula." />
      <StepX c={c} num={2} text="Volcar el contenido del frasco sobre la bandeja. Verás una mezcla de grano colonizado + esclerocios marrones." />
      <StepX c={c} num={3} text="Separar manualmente los esclerocios del grano. Los esclerocios son DUROS al tacto, redondos/ovalados, marrones. El grano colonizado es más blando, irregular, blanco." why="Solo los esclerocios contienen psilocibina concentrada. El grano sí tiene algo, pero no merece la pena consumirlo (sabor desagradable)." />
      <StepX c={c} num={4} text="Limpiar los esclerocios con un cepillo seco — quitar restos de grano y micelio adherido." />
      <StepX c={c} num={5} text="Si están muy sucios: enjuagar brevemente con agua fría + secar inmediatamente con papel. NO empapar." why="El agua puede degradar la potencia y aumenta riesgo de moho durante conservación." />
      <StepX c={c} num={6} text="Pesar los esclerocios. Anotar peso fresco — necesario para dosificación." />
      <StepX c={c} num={7} text="Decidir conservación: frescas (nevera) o secas (cracker dry) o miel — ver fase Conservación." />

      <SectionTitleX c={c}>RENDIMIENTO TÍPICO</SectionTitleX>
      <InfoBoxX c={c}>
        Por frasco de 1L con 250g grano: <strong>15-40g de trufas frescas</strong> (depende de cepa y condiciones).<br/>
        - Tampanensis: 20-35g/frasco<br/>
        - Mexicana: 15-25g/frasco<br/>
        - Atlantis: 15-25g/frasco (más pequeñas pero más potentes)<br/><br/>
        Si has hecho 5 frascos: total típico 75-200g frescos = 7.5-20g secos.
      </InfoBoxX>

      <SectionTitleX c={c}>SEGUNDA COSECHA (FLUSH 2)</SectionTitleX>
      <StepX c={c} num={1} text="Después de la primera cosecha: NO tirar el grano colonizado todavía. Volverlo a poner en el frasco y dejar 2-4 semanas más en oscuridad." />
      <StepX c={c} num={2} text="Algunos lotes producen una segunda formación de esclerocios más pequeños. Rendimiento típico: 30-50% del primer flush." />
      <StepX c={c} num={3} text="Después del segundo flush, el sustrato se agota. Tirar y empezar lote nuevo." />
    </div>
  );
}

function PREPARACION_TRUFAS() {
  const c = TRUFAS_COLORS;
  return (
    <div>
      <InfoBoxX c={c}>
        Trufas se consumen FRESCAS tradicionalmente (más común en Holanda) o secas. Sabor: nuez/avellana ligeramente amargo. Mascar bien — la <GlossaryLink term="Psilocibina">psilocibina</GlossaryLink> empieza a absorberse en boca/estómago.
      </InfoBoxX>

      <SectionTitleX c={c}>FORMAS DE CONSUMO</SectionTitleX>
      <div style={{ display: "grid", gap: "10px", marginBottom: "20px" }}>
        {[
          { metodo: "🍯 Frescas masticadas", descripcion: "Forma tradicional. Mascar bien 2-3 minutos antes de tragar. Sabor neutro/nuez." },
          { metodo: "🍵 Té de trufas", descripcion: "Trocear + agua caliente (NO hirviendo, max 70°C) + zumo de limón. Reposo 15-20 min. Beber. Reduce náuseas, efecto en 15-20 min vs 30-45 min de frescas." },
          { metodo: "🍫 Mezcladas en chocolate", descripcion: "Trufas troceadas + chocolate derretido. Esconder sabor. Cuidado: dosis difícil de controlar por porción." },
          { metodo: "🥛 Smoothie/yogur", descripcion: "Trocear + batidora con yogur o frutas. Buena opción si te cuesta el sabor." },
          { metodo: "🍯 Honey-trufas", descripcion: "Trufas frescas en miel cruda. Conservación 6-12 meses. Sabor MUCHO mejor. Tradicional en Holanda." },
        ].map((m, i) => (
          <div key={i} style={{ background: c.bg2, border: `1px solid ${c.border1}`, borderRadius: "10px", padding: "12px" }}>
            <div style={{ fontSize: "13px", fontWeight: "bold", color: c.textBright, marginBottom: "4px" }}>{m.metodo}</div>
            <div style={{ fontSize: "12px", color: c.accent3, lineHeight: "1.5" }}>{m.descripcion}</div>
          </div>
        ))}
      </div>

      <SectionTitleX c={c}>DOSIFICACIÓN — TRUFAS FRESCAS</SectionTitleX>
      <div style={{ display: "grid", gap: "8px", marginBottom: "20px" }}>
        {[
          { nivel: "💊 Microdosis (sub-perceptual)", peso: "0.5-1g fresco", efecto: "Cambios sutiles en estado de ánimo. No experiencia psicodélica." },
          { nivel: "🌱 Dosis baja (test)", peso: "5-10g fresco", efecto: "Efectos suaves: ligera elevación, distorsión visual mínima, risas. Buena primera vez." },
          { nivel: "🍯 Dosis media", peso: "10-15g fresco", efecto: "Experiencia psicodélica clara: visuales, alteración del tiempo, introspección. Estándar." },
          { nivel: "🌌 Dosis fuerte", peso: "15-25g fresco", efecto: "Experiencia profunda. Visuales intensos, posibles ego dissolution. Solo para experimentados." },
          { nivel: "⚠️ Dosis alta (heroica)", peso: "25g+ fresco", efecto: "MUY intensa. Posible breakthrough. Solo experimentados con sitter." },
        ].map((d, i) => (
          <div key={i} style={{ background: c.bg2, border: `1px solid ${c.border1}`, borderRadius: "8px", padding: "10px" }}>
            <div style={{ display: "flex", justifyContent: "space-between", marginBottom: "3px" }}>
              <div style={{ fontSize: "12px", fontWeight: "bold", color: c.textBright }}>{d.nivel}</div>
              <div style={{ fontSize: "11px", color: c.accent1, fontWeight: "bold" }}>{d.peso}</div>
            </div>
            <div style={{ fontSize: "11px", color: c.accent3, lineHeight: "1.5" }}>{d.efecto}</div>
          </div>
        ))}
      </div>

      <WarningBoxX c={c}>
        ⚠️ Conversión: trufas frescas tienen ~80% agua. <strong>1g seco ≈ 5g fresco</strong>. Si tu báscula y receta dan en seco, multiplica por 5 para fresco.
      </WarningBoxX>

      <SectionTitleX c={c}>EFECTOS</SectionTitleX>
      <InfoBoxX c={c}>
        Comienzo: 30-60 min (frescas) o 15-30 min (té). Pico: 2-3h. Total: 4-6h.<br/>
        Sensaciones: alteración visual (geometría suave, colores intensos), distorsión del tiempo, introspección emocional, posibles risas, sensación de conexión. Idéntico a setas Psilocybe (mismo activo). NO mezclar con SSRI/MDMA.
      </InfoBoxX>
    </div>
  );
}

function CONSERVACION_TRUFAS() {
  const c = TRUFAS_COLORS;
  return (
    <div>
      <InfoBoxX c={c}>
        Trufas frescas se conservan poco (semanas). Hay 4 métodos según cuánto tiempo quieres guardarlas.
      </InfoBoxX>

      <SectionTitleX c={c}>MÉTODOS DE CONSERVACIÓN</SectionTitleX>
      <div style={{ display: "grid", gap: "10px", marginBottom: "20px" }}>
        {[
          { metodo: "❄️ Frescas en nevera", duracion: "4-8 semanas", det: "En tarro de cristal con tapa pero NO hermético (necesitan respirar un poco). Papel de cocina dentro absorbe humedad. La opción más simple — no requiere procesamiento." },
          { metodo: "🌬️ Secas (cracker dry)", duracion: "1-2 años", det: "Presecado al aire 24h + sílica gel desecador 24-48h hasta cracker dry (se rompen al doblar). Frasco hermético oscuro. Mismo método que setas Psilocybe — ver guía Setas para detalles." },
          { metodo: "🍯 En miel cruda", duracion: "6-12 meses", det: "Trufas frescas troceadas en miel cruda (sin pasteurizar) en frasco hermético. La miel preserva + mejora sabor. Tradición holandesa. 50g trufas en 250ml miel = pasta concentrada para microdosis." },
          { metodo: "🍫 En chocolate", duracion: "3-6 meses", det: "Trufas secas + chocolate negro derretido a baja temperatura (max 50°C — no destruir psilocibina). Verter en moldes. Cada bombón con dosis exacta. Frigorífico." },
        ].map((m, i) => (
          <div key={i} style={{ background: c.bg2, border: `1px solid ${c.border1}`, borderRadius: "10px", padding: "12px" }}>
            <div style={{ display: "flex", justifyContent: "space-between", marginBottom: "4px" }}>
              <div style={{ fontSize: "13px", fontWeight: "bold", color: c.textBright }}>{m.metodo}</div>
              <div style={{ fontSize: "11px", color: c.accent1, fontWeight: "bold" }}>{m.duracion}</div>
            </div>
            <div style={{ fontSize: "12px", color: c.accent3, lineHeight: "1.5" }}>{m.det}</div>
          </div>
        ))}
      </div>

      <SectionTitleX c={c}>QUÉ EVITA LA POTENCIA</SectionTitleX>
      <ErrorCardX c={c}
        error="Calor extremo (>50°C) durante secado"
        consecuencia="Psilocibina se degrada con calor. Setas/trufas con potencia muy reducida."
        fix="Solo aire ambiente o sílica gel. NUNCA horno o microondas."
      />
      <ErrorCardX c={c}
        error="Luz directa (UV)"
        consecuencia="Psilocibina se degrada con luz UV durante meses."
        fix="Frascos opacos o envueltos en papel aluminio. Lugar oscuro siempre."
      />
      <ErrorCardX c={c}
        error="Humedad ambiente alta"
        consecuencia="Trufas absorben humedad → moho dentro del frasco → todo perdido."
        fix="Sílica gel SIEMPRE. Verificar cada 6 meses. Lugar seco (no baño)."
      />
    </div>
  );
}

function HARM_REDUCTION_TRUFAS() {
  const c = TRUFAS_COLORS;
  return (
    <div>
      <InfoBoxX c={c}>
        Trufas tienen mismo activo que setas Psilocybe. Mismas precauciones aplican. Sección crítica para usar de forma segura.
      </InfoBoxX>

      <SectionTitleX c={c}>CONTRAINDICACIONES ABSOLUTAS</SectionTitleX>
      <ErrorCardX c={c}
        error="Antidepresivos SSRI / IMAO / SNRI"
        consecuencia="Síndrome serotonérgico. Riesgo grave."
        fix="Off-meds 4-6 semanas mínimo (consultar médico). NUNCA tomar trufas con medicación serotonérgica activa."
      />
      <ErrorCardX c={c}
        error="Diagnóstico psiquiátrico (esquizofrenia, bipolar)"
        consecuencia="Posible activación de episodios psicóticos. Algunas personas no recuperan estabilidad mental tras experiencia."
        fix="No tomar. Aunque tengas curiosidad."
      />
      <ErrorCardX c={c}
        error="Embarazo y lactancia"
        consecuencia="Sin estudios de seguridad. Riesgo desconocido para feto/bebé."
        fix="No tomar."
      />
      <ErrorCardX c={c}
        error="Otras drogas/alcohol mismo día"
        consecuencia="Combinaciones impredecibles. Mayor riesgo de eventos adversos."
        fix="Sobrio mínimo 24h antes. NO mezclar."
      />

      <SectionTitleX c={c}>SET & SETTING</SectionTitleX>
      <StepX c={c} num={1} text="SET (mental): No tomar si estás triste/ansioso/estresado. Esperar momento neutral o positivo. Definir intención antes." />
      <StepX c={c} num={2} text="SETTING (entorno): Casa, tranquilo, con sitio cómodo (sofá, cama). Tener cerca: cubo (por si náuseas iniciales), agua, manta, snacks suaves." />
      <StepX c={c} num={3} text="SITTER: persona sobria primera vez con dosis significativas. Idealmente alguien con experiencia." />
      <StepX c={c} num={4} text="DURACIÓN: bloquea 6-8h sin compromisos. No conducir, no trabajar, no decisiones grandes después." />

      <SectionTitleX c={c}>PRIMERA VEZ</SectionTitleX>
      <InfoBoxX c={c}>
        ✅ Empezar con DOSIS BAJA (5-7g frescas) la primera vez. Evaluar tolerancia personal.<br/>
        ✅ En casa, no en evento social. Compañía de máximo 1-2 personas conocidas.<br/>
        ✅ Día siguiente bloqueado para integración (reflexión, journaling).<br/>
        ✅ Mínimo 1 mes entre experiencias significativas (tolerancia + integración).
      </InfoBoxX>

      <SectionTitleX c={c}>SI ALGO VA MAL</SectionTitleX>
      <InfoBoxX c={c}>
        🤢 <strong>Náuseas iniciales (primera hora):</strong> normal. Tumbarte, beber agua a sorbitos. El té reduce este efecto.<br/>
        😰 <strong>Ansiedad/pánico:</strong> Cambiar entorno (otra habitación, música suave), sitter habla calmado, recordar "esto pasa en horas". Respiración lenta. NO 911 salvo síntomas físicos graves.<br/>
        💔 <strong>Síntomas físicos extremos</strong> (palpitaciones violentas, dificultad respirar): URGENCIAS YA. Llamar 112.<br/>
        ⏰ Anti-tóxicos España: <strong>915 620 420</strong> (24h).
      </InfoBoxX>
    </div>
  );
}

function FAQ_TRUFAS() {
  const c = TRUFAS_COLORS;
  const [query, setQuery] = React.useState("");
  const faqs = [
    { q: "¿Diferencia real entre trufas y setas Psilocybe?", a: "Activo idéntico (psilocibina + psilocina). Diferencia: forma del organismo. Setas = cuerpo fructífero aéreo (lo que normalmente comemos). Trufas = esclerocios subterráneos (reserva de supervivencia del hongo). Mismo efecto pero distinta forma de cultivo." },
    { q: "¿Cuáles especies dan trufas?", a: "Las principales: P. tampanensis (más usada), P. mexicana (clásica), P. atlantis (más potente), P. galindoi. NO P. cubensis (la más común para setas no produce esclerocios)." },
    { q: "¿Por qué Holanda las vende abiertamente?", a: "En 2008 Holanda prohibió las setas frescas y secas tras unos incidentes. Pero el legislador NO mencionó esclerocios — los olvidó. Resultado: las trufas siguieron legales por loophole. Smartshops las venden desde entonces." },
    { q: "¿Es legal en España?", a: "Mismo estado legal que setas Psilocybe = zona gris. Cultivo casero TOLERADO (uso personal). Posesión: gris. Venta/distribución: ILEGAL. Verifica si viajas con ellas — UE varía mucho." },
    { q: "¿Cuánto tarda todo el proceso?", a: "8-16 semanas total desde inoculación hasta cosecha. Más lento que setas (4-8 sem) pero MENOS trabajo activo (no fructificación, no nebulizar)." },
    { q: "¿Qué cepa para empezar?", a: "Tampanensis ('Philosopher's Stones'). Más predecible, mejor documentada, esclerocios grandes y robustos. Mexicana segunda opción." },
    { q: "¿Cuál es la potencia comparada con setas?", a: "Por gramo SECO, las trufas son ~50-70% de la potencia de setas Psilocybe cubensis secas. Por eso necesitas más cantidad (10-15g frescas vs 1-3g setas secas)." },
    { q: "¿Puedo combinarlas con otras psicodélicas?", a: "Mismas precauciones que setas: NO mezclar con SSRI/IMAO/MDMA (síndrome serotonérgico). Tolerancia cruzada con LSD/mescalina (1-2 semanas)." },
    { q: "¿Cuánto duran almacenadas?", a: "Frescas en nevera: 4-8 semanas. Secas (cracker dry) en frasco oscuro: 1-2 años. En miel cruda: 6-12 meses (mejor sabor). En chocolate: 3-6 meses." },
    { q: "¿Microdosis con trufas?", a: "Sí — protocolo común: 0.5-1g fresco cada 3-4 días. Menos amargo que setas secas para microdosis. Buenos para uso regular sin construir tolerancia." },
    { q: "¿Tras cosecha, puedo hacer un segundo lote?", a: "Sí — el grano colonizado puede dar un segundo flush (30-50% del primero) si lo dejas 2-4 semanas más. Después: tirar y empezar nuevo lote." },
    { q: "¿Diferencia con cultivo PF Tek?", a: "PF Tek es para SETAS Psilocybe cubensis (frasco con sustrato + abrir para fructificación). Trufas: frasco con grano + cerrado todo el tiempo. PF Tek requiere más etapas (fructificación con humedad), trufas son más sencillas." },
    { q: "¿Sabor?", a: "Frescas: neutro a avellana, ligeramente amargo. Texturas dura por fuera, blanca por dentro. NO repulsivo como setas secas. Más bebible que comestible." },
    { q: "¿Por qué se forman esclerocios?", a: "Mecanismo de supervivencia. El hongo, al sentir condiciones limitadas (sin acceso a aire abierto, sin estímulos para fructificar), compacta nutrientes en bolas duras para sobrevivir hasta condiciones mejores. En cultivo aprovechamos eso." },
    { q: "¿Puedo combinar trufas con cannabis?", a: "Tradicional en algunos contextos. Cannabis amplifica los visuales y profundiza la introspección. Cuidado: amplifica también ansiedad. Si propenso a paranoia con cannabis, mejor evitar la mezcla. Empezar sin cannabis primera vez." },
    { q: "¿Cuál es la dosis para microdosis exactamente?", a: "Tampanensis: 0.5-1g fresco (= 0.1-0.2g seco). Atlantis: 0.3-0.7g fresco (más potente). Tomar mañana en estómago vacío. Protocolo Stamets/Fadiman: 4 días sí 3 no, durante 4-8 semanas, descanso 2-4 semanas. Reportes anecdóticos: mejora ánimo, foco, creatividad." },
    { q: "¿Las trufas son alimentos o drogas en Holanda?", a: "Status legal único: clasificadas como producto natural NO regulado. Legal venta a mayores de 18 años en smartshops. Algunas marcas las certifican lab-tested para consistencia de potencia." },
    { q: "¿Necesito esterilizar el grano si tengo SAB perfecto?", a: "SÍ. SAB previene contaminación durante INOCULACIÓN, pero el grano cocido normal tiene esporas de bacterias termófilas (Bacillus) que crecen a temperatura de incubación. Olla a presión 90min @ 15PSI las mata. Sin esto = lote contaminado en 1-2 sem." },
    { q: "¿Puedo reutilizar el grano colonizado tras cosecha?", a: "Para 2do flush: sí (rendimiento 30-50%). Para nuevo lote independiente: NO recomendable — el grano agotado y posibles contaminantes acumulados. Mejor empezar con grano fresco para cada ciclo." },
    { q: "¿Por qué algunos esclerocios son más oscuros que otros?", a: "Color marrón oscuro = madurez + mayor concentración de psilocibina. Blancos = jóvenes (poco activos). Cosechar cuando 70%+ son marrones = potencia óptima. Si sigues esperando, no hay incremento significativo." },
    { q: "¿Conservación a largo plazo: trufas frescas vs secas?", a: "FRESCAS son la forma tradicional (4-8 sem nevera), pero pierden potencia. SECAS (cracker dry, 1-2 años) mantienen potencia mejor — pero sabor más amargo. MIEL (6-12 meses) = mejor de ambos: mantiene potencia + sabor agradable." },
    { q: "¿Puedo cultivar varios spawns en mismo frasco?", a: "NO recomendado. Diferentes especies en mismo frasco = competencia. Diferentes lotes en mismo frasco = mezclar potencia/edad confusa. Un frasco = una variedad/lote." },
  ];

  const filtered = faqs.filter(f =>
    f.q.toLowerCase().includes(query.toLowerCase()) ||
    f.a.toLowerCase().includes(query.toLowerCase())
  );

  return (
    <div>
      <InfoBoxX c={c}>
        Preguntas comunes sobre trufas mágicas. Recursos: r/MagicTruffles, foros holandeses, vendedores etnobotánicos UE.
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
          <div style={{ fontSize: "12px", color: c.accent3, lineHeight: "1.6", whiteSpace: "pre-line" }}>{f.a}</div>
        </div>
      ))}
    </div>
  );
}
