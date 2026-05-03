// FERMENTACIONES — modo CERVEZA CASERA
// Receta básica con malta + lúpulo. Más complejo que hidromiel pero el resultado es cerveza real.

function COMPRA_CERVEZA() {
  const c = FERMENT_COLORS;
  const items = [
    { item: "📦 Kit cerveza completo (extracto)", precio: "60-90€", donde: "Internet", nota: "Para empezar: kit con extracto de malta + lúpulo + levadura + olla + fermentador. Marcas: Brewferm, Mr Beer, Coopers. Más caro pero TODO incluido. Recomendado para primer lote.", prioridad: "ESENCIAL", tipo: "Equipo" },
    { item: "🍺 Olla 12-15L con tapa", precio: "20-40€", donde: "Tienda física", nota: "Para hervir el mosto. Acero inoxidable mejor que aluminio. Si vas a hacer 5L de cerveza necesitas mínimo 8L de capacidad para hervor (subida de espuma).", prioridad: "ESENCIAL", tipo: "Equipo" },
    { item: "🫙 Fermentador 10-15L con airlock", precio: "20-35€", donde: "Internet", nota: "Cubo plástico food-grade con tapa hermética + airlock + grifo dispensador. Buscar 'fermentador cerveza 12L' en internet. Vidrio también vale pero es frágil y caro.", prioridad: "ESENCIAL", tipo: "Equipo" },
    { item: "🌾 Malta de cebada base (3-5 kg)", precio: "10-25€", donde: "Internet", nota: "Para cerveza desde cero (sin extracto). Pale Ale Maris Otter, Pilsner, etc. Si usas kit de extracto, no necesitas esto. Tiendas online especializadas en cerveza casera.", prioridad: "ESENCIAL", tipo: "Consumible" },
    { item: "🌿 Lúpulo (50-100g, varias variedades)", precio: "5-15€", donde: "Internet", nota: "Variedades para empezar: Cascade (cítrico, IPA), Saaz (suave, lager), Hallertau (clásico alemán). Mantener en nevera hasta usar — pierde aroma rápido.", prioridad: "ESENCIAL", tipo: "Consumible" },
    { item: "🦠 Levadura cervecera (1 sobre 11g)", precio: "3-8€", donde: "Internet", nota: "Ale (S-04, US-05): fermenta a 18-22°C, más fácil. Lager (S-23): requiere 8-12°C, más exigente. Para empezar: Safale US-05 (universal).", prioridad: "ESENCIAL", tipo: "Consumible" },
    { item: "🌡️ Termómetro digital (sonda)", precio: "8-15€", donde: "Internet", nota: "Crítico para macerado (66°C exactos) y verificación de fermentación.", prioridad: "ESENCIAL", tipo: "Equipo" },
    { item: "📏 Hidrómetro + probeta", precio: "10-15€", donde: "Internet", nota: "Para medir % alcohol final. Calcular ABV: (densidad inicial - densidad final) * 131.25.", prioridad: "IMPORTANTE", tipo: "Equipo" },
    { item: "🥄 Cuchara larga acero inox", precio: "5-10€", donde: "Tienda física", nota: "Mínimo 50cm para revolver el mosto en la olla.", prioridad: "ESENCIAL", tipo: "Equipo" },
    { item: "🧴 Sanitizante (Star San)", precio: "10-15€", donde: "Internet", nota: "Imprescindible. Mismo que para hidromiel.", prioridad: "ESENCIAL", tipo: "Consumible" },
    { item: "🍾 Botellas 0.33L o 0.5L (15-20 uds)", precio: "0-20€", donde: "Tienda física", nota: "Botellas de cerveza vacías reutilizadas (mejor con tapón corona, no rosca). Mínimo 10-15 botellas para 5L de cerveza.", prioridad: "ESENCIAL", tipo: "Equipo" },
    { item: "🔧 Chapadora + chapas corona", precio: "15-30€", donde: "Internet", nota: "Para sellar las botellas con chapa metálica. Las chapas son baratas (5€/100 uds).", prioridad: "ESENCIAL", tipo: "Equipo" },
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
        Para tu primer lote: KIT con extracto de malta es la mejor opción (60-90€ todo incluido). Más adelante puedes pasar a "all grain" (cerveza desde grano completo) que es más complejo y barato por lote.
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

      <SectionTitleX c={c}>LISTA DE COMPRA CERVEZA ({filtered.length}/{items.length})</SectionTitleX>
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

function MACERADO_CERVEZA() {
  const c = FERMENT_COLORS;
  return (
    <div>
      <InfoBoxX c={c}>
        El macerado (mash) es el primer paso si haces cerveza desde grano (all grain). Si usas KIT con extracto: SALTA esta fase, ve directo a "Hervor + Lúpulo".
      </InfoBoxX>

      <SectionTitleX c={c}>QUÉ ES EL MACERADO</SectionTitleX>
      <InfoBoxX c={c}>
        Mojar la malta machacada en agua caliente (66°C) durante 60 minutos. Las enzimas de la malta convierten el almidón del grano en azúcares fermentables. El líquido azucarado resultante = "mosto".
      </InfoBoxX>

      <SectionTitleX c={c}>RECETA BASE — PALE ALE 5L (~5% ABV)</SectionTitleX>
      <InfoBoxX c={c}>
        🌾 1 kg malta Pale Ale<br/>
        💧 4 L agua de macerado<br/>
        💧 2 L agua de aclarado<br/>
        🌿 15g lúpulo Cascade (60 min - amargor)<br/>
        🌿 10g lúpulo Cascade (15 min - sabor)<br/>
        🌿 10g lúpulo Cascade (1 min - aroma)<br/>
        🦠 11g levadura US-05<br/>
        ⏱️ Resultado: ~5L de Pale Ale a 4-5% ABV
      </InfoBoxX>

      <SectionTitleX c={c}>PASO A PASO — MACERADO</SectionTitleX>
      <StepX c={c} num={1} text="Calienta 4L de agua a 72°C en la olla. Cuidado: la temperatura tiene que ser EXACTA." why="Cuando añades el grano frío, la temperatura del conjunto baja. Empezar a 72°C resulta en ~66°C después de añadir el grano." />
      <StepX c={c} num={2} text="Añade la malta machacada al agua caliente. Remueve hasta que no haya grumos secos." />
      <StepX c={c} num={3} text="Verifica temperatura: debe estar entre 64-68°C. Si baja: enciende fuego mínimo. Si sube: añade chorrito de agua fría." why="Por debajo de 60°C las enzymas no trabajan. Por encima de 70°C se desnaturalizan." warning />
      <StepX c={c} num={4} text="Tapa la olla. Mantén 60-90 minutos a 66°C. Cada 15 min: revolver y verificar temp." />
      <StepX c={c} num={5} text="Test de yodo (opcional): mete una gota del mosto en yodo. Si vira a azul/negro = aún hay almidón, sigue macerando. Si queda amarillo = listo." />

      <SectionTitleX c={c}>ACLARADO (SPARGE)</SectionTitleX>
      <StepX c={c} num={1} text="Cala el mosto a través del grano (cuela con una bolsa fina o lautering tun). El líquido cae a otra olla limpia." />
      <StepX c={c} num={2} text="Hierve los 2L de agua adicionales a 75°C. Vierte lentamente sobre el grano para extraer los últimos azúcares." why="Esto enjuaga azúcares que quedaron pegados al grano. Sin sparge pierdes 20-30% de eficiencia." />
      <StepX c={c} num={3} text="El líquido total recogido (~5-6L de mosto) pasa a la olla para el hervor." />
    </div>
  );
}

function HERVOR_CERVEZA() {
  const c = FERMENT_COLORS;
  return (
    <div>
      <InfoBoxX c={c}>
        90 minutos hirviendo el mosto. Aquí se añade el lúpulo (amargor + sabor + aroma) y se esteriliza el mosto antes de fermentación.
      </InfoBoxX>

      <SectionTitleX c={c}>SI USAS KIT DE EXTRACTO</SectionTitleX>
      <StepX c={c} num={1} text="Mezcla 1.5kg de extracto de malta líquido (LME) o 1kg de extracto seco (DME) en 4L de agua caliente. Remueve hasta disolver completamente." />
      <StepX c={c} num={2} text="Lleva a hervor. Continúa con el protocolo de lúpulo abajo." />

      <SectionTitleX c={c}>HERVOR + LÚPULO (90 MIN)</SectionTitleX>
      <StepX c={c} num={1} text="Lleva los 5-6L de mosto a hervor enérgico (~100°C). CUIDADO: cuando empieza a hervir, la espuma sube rápidamente y se sale de la olla — vigila los primeros 5min y reduce fuego si es necesario." warning />
      <StepX c={c} num={2} text="Cuando hierve enérgicamente, empieza el cronómetro de 60min. Añade 15g de lúpulo Cascade (lúpulo de amargor)." why="Lúpulo añadido al inicio del hervor = más amargor (alfa ácidos isomerizados). Tiempo largo = más amargor." />
      <StepX c={c} num={3} text="A los 30 min restantes (faltan 30 min): añade 10g lúpulo Cascade (lúpulo de sabor)." why="Lúpulo a mitad de hervor = aporta sabor a lúpulo sin demasiado amargor adicional." />
      <StepX c={c} num={4} text="A los 15 min restantes (faltan 15 min): añade 10g lúpulo Cascade (lúpulo de aroma)." />
      <StepX c={c} num={5} text="Al minuto 59 (1 min restante): añade último lúpulo de aroma (whirlpool/flameout)." why="Tan poco tiempo = solo aroma volátil, sin amargor extra." />
      <StepX c={c} num={6} text="Al minuto 60: APAGA el fuego. La cerveza está hervida." />

      <SectionTitleX c={c}>ENFRIAMIENTO RÁPIDO</SectionTitleX>
      <StepX c={c} num={1} text="Necesitas enfriar el mosto de 100°C a 22°C lo más rápido posible (max 30 min)." why="Mosto caliente + tiempo = oxidación + posibles infecciones. Cuanto más rápido enfríes, más limpia será la cerveza." warning />
      <StepX c={c} num={2} text="Opciones (de mejor a peor): (a) Chiller de inmersión (serpentín cobre con agua fría dentro de la olla, 50€), (b) Olla en bañera con hielo, (c) Olla en pila con agua fría circulando." />
      <StepX c={c} num={3} text="Mientras enfría: NO TOQUES, NO ABRAS, no introduzcas nada no sanitizado." />
      <StepX c={c} num={4} text="Cuando llegue a 22°C: pasa al fermentador (cubo) y airea bien." why="Levadura necesita oxígeno PARA EMPEZAR. Una vez fermentando, oxígeno = malo. Esta es la única vez que quieres oxígeno." />

      <SectionTitleX c={c}>AÑADIR LEVADURA</SectionTitleX>
      <StepX c={c} num={1} text="Hidrata la levadura US-05: en 100ml de agua templada (25-30°C), espolvorea la levadura. Espera 15 min." />
      <StepX c={c} num={2} text="Vierte la levadura hidratada en el fermentador con el mosto. Tapa con airlock." />
      <StepX c={c} num={3} text="Etiqueta con fecha de inicio. Pon en lugar oscuro a 18-22°C." />
    </div>
  );
}

function FERMENTACION_CERVEZA() {
  const c = FERMENT_COLORS;
  return (
    <div>
      <InfoBoxX c={c}>
        1-2 semanas de fermentación. La cerveza es más rápida que el hidromiel — más azúcar = más rápida actividad inicial.
      </InfoBoxX>

      <SectionTitleX c={c}>QUÉ ESPERAR</SectionTitleX>
      <StepX c={c} num={1} text="Día 1: empezar burbujeo en 12-24h. Si después de 24h no hay actividad: hace mucho calor o frío, o levadura muerta." />
      <StepX c={c} num={2} text="Día 2-4: actividad MÁXIMA. Burbujeo cada 1-2 segundos. Mosto hierve interno con espuma (krausen) en la superficie." />
      <StepX c={c} num={3} text="Día 5-7: la actividad baja gradualmente. La espuma desaparece. El mosto empieza a clarificar." />
      <StepX c={c} num={4} text="Día 8-10: solo burbujeo ocasional. La cerveza está casi lista (fermentación primaria completa)." />
      <StepX c={c} num={5} text="Día 10-14: dejar 'reposar' permite que las levaduras decanten al fondo y los sabores se integren. La cerveza sale más limpia." />

      <SectionTitleX c={c}>VERIFICAR CON HIDRÓMETRO</SectionTitleX>
      <StepX c={c} num={1} text="Día 14: toma muestra con probeta sanitizada. Mide densidad. Anota." />
      <StepX c={c} num={2} text="Día 16-17: vuelve a medir. Si la densidad es la misma 2 días seguidos = fermentación COMPLETA." why="Si todavía cambia, no embotelles — sigue fermentando o explotarán las botellas." />
      <StepX c={c} num={3} text="Densidad final típica para Pale Ale 4-5% ABV: 1.010-1.014. Calcula ABV: (DI - DF) × 131.25." />

      <SectionTitleX c={c}>ERRORES COMUNES</SectionTitleX>
      <ErrorCardX c={c}
        error="Temperatura > 24°C"
        consecuencia="Sabores 'plástico' o 'banana' (esters fenolicos). Cerveza con notas raras."
        fix="Mantén 18-22°C. En verano: nevera dedicada o sitio fresco. Si superas 24°C un par de días = lote sale 'meh' pero bebible."
      />
      <ErrorCardX c={c}
        error="Embotellar antes de tiempo"
        consecuencia="Si fermentación no terminó, sigue produciendo CO₂ en la botella → BOTELLAS EXPLOTAN."
        fix="Verificar 2 días seguidos misma densidad antes de embotellar. Sin hidrómetro: mínimo 14 días + sin burbujeo 5 días = listo."
      />
      <ErrorCardX c={c}
        error="No oxigenar al inicio"
        consecuencia="Levadura sin oxígeno inicial = fermentación lenta y débil. Cerveza dulce o con sabores raros."
        fix="Al pasar el mosto al fermentador, agita bien o vierte de altura para airear. La levadura necesita ese oxígeno inicial para reproducirse."
      />
    </div>
  );
}

function EMBOTELLADO_CERVEZA() {
  const c = FERMENT_COLORS;
  return (
    <div>
      <InfoBoxX c={c}>
        Embotellar = el último paso. La cerveza necesita carbonatación natural en botella (priming). 2 semanas más después de embotellar para gas correcto.
      </InfoBoxX>

      <SectionTitleX c={c}>PRIMING — AÑADIR AZÚCAR PARA GAS</SectionTitleX>
      <StepX c={c} num={1} text="Calcula priming sugar: 6-8g de azúcar blanca por litro de cerveza. Para 5L = 30-40g." why="La levadura residual come ese azúcar y produce CO₂ atrapado en la botella = gas natural." />
      <StepX c={c} num={2} text="Disuelve el azúcar en 100ml de agua hirviendo. Deja enfriar. Añade al cubo de fermentación con cuidado, removiendo gentilmente para no oxigenar." />

      <SectionTitleX c={c}>EMBOTELLAR</SectionTitleX>
      <StepX c={c} num={1} text="Sanitiza TODAS las botellas + chapas + chapadora + tubos." />
      <StepX c={c} num={2} text="Trasiega la cerveza del fermentador a las botellas usando el grifo del cubo (o sifón). NO succionar el sedimento del fondo." />
      <StepX c={c} num={3} text="Llena cada botella dejando 3cm de espacio (cuello vacío)." why="Espacio = donde va el CO₂. Sin espacio: presión excesiva = botella explota." />
      <StepX c={c} num={4} text="Coloca chapa corona y prensa con la chapadora. Test: la chapa no debe girar." />
      <StepX c={c} num={5} text="Etiqueta con fecha + estilo + lote." />

      <SectionTitleX c={c}>CARBONATACIÓN EN BOTELLA</SectionTitleX>
      <StepX c={c} num={1} text="Deja botellas a temperatura AMBIENTE (18-22°C) durante 14 días. La levadura residual se activa y carbonata." why="A 22°C la levadura come el azúcar de priming en 7-14 días. En frío se ralentiza." />
      <StepX c={c} num={2} text="Cada 3-4 días, abre UNA botella de prueba. Si está plana: espera más. Si hay gas pero suave: casi. Si gas pleno: lista." />
      <StepX c={c} num={3} text="Cuando esté carbonatada: pasar al frío (nevera). El frío para la actividad de la levadura — la cerveza queda como está." />

      <WarningBoxX c={c}>
        ⚠️ <strong>Sobre 'bottle bombs':</strong> si añades demasiado priming sugar (más de 10g/L) o embotellas con fermentación incompleta, las botellas pueden ESTALLAR. En un sitio cerrado + verano = peligro real. Sigue las cantidades recomendadas y verifica que la fermentación terminó.
      </WarningBoxX>
    </div>
  );
}

function CATA_CERVEZA() {
  const c = FERMENT_COLORS;
  return (
    <div>
      <InfoBoxX c={c}>
        Cerveza recién embotellada y carbonatada (2 semanas) ya es bebible. Mejora con maduración 4-6 semanas más. Aguanta 6-12 meses dependiendo del estilo.
      </InfoBoxX>

      <SectionTitleX c={c}>EVOLUCIÓN POR ESTILO</SectionTitleX>
      <div style={{ display: "grid", gap: "8px", marginBottom: "20px" }}>
        {[
          { estilo: "🍺 Pale Ale / IPA", evol: "MEJOR JOVEN. Lúpulo es volátil — pierde aroma en meses. Beber dentro de 2-3 meses." },
          { estilo: "🍺 Lager / Pilsner", evol: "Mejora con maduración 4-6 semanas en frío (lagering). Aguanta 6 meses." },
          { estilo: "🍺 Stout / Porter", evol: "Mejora con MESES. Sabores tostados se integran. 3-12 meses ideal." },
          { estilo: "🍺 Belgian / Tripel", evol: "Igual que vinos. 6-24 meses madura espectacularmente. Requiere alcohol alto (8%+)." },
        ].map((e, i) => (
          <div key={i} style={{ background: c.bg2, border: `1px solid ${c.border1}`, borderRadius: "8px", padding: "10px" }}>
            <div style={{ fontSize: "12px", fontWeight: "bold", color: c.textBright, marginBottom: "3px" }}>{e.estilo}</div>
            <div style={{ fontSize: "11px", color: c.accent3, lineHeight: "1.5" }}>{e.evol}</div>
          </div>
        ))}
      </div>

      <SectionTitleX c={c}>SIGUIENTE NIVEL</SectionTitleX>
      <InfoBoxX c={c}>
        Después de 2-3 lotes con kit de extracto, considera saltar a "all grain" (cerveza desde grano completo): más control, más barato por lote, más complejo. Equipo extra: olla más grande (20L+), bolsa de macerado o sistema lautering. Vale la pena si te enganchas.<br/><br/>
        Otros estilos para probar después: Witbier (trigo + naranja + cilantro), Dry Stout (Guinness style), Saison (yeast belga, especiada), NEIPA (lúpulo a tope, baja amargor).
      </InfoBoxX>
    </div>
  );
}
