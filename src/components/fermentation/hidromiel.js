// FERMENTACIONES — modo HIDROMIEL
// Receta tradicional simple: miel + agua + levadura + tiempo. La fermentación más antigua del mundo.

function COMPRA_HIDROMIEL() {
  const c = FERMENT_COLORS;
  const items = [
    { item: "🍯 Miel cruda (1.5 kg)", precio: "15-30€", donde: "Tienda física", nota: "Miel pura, sin pasteurizar si es posible (la pasteurizada también vale). Cualquier variedad: brezo, romero, milflores. Evita miel ultra-procesada del supermercado más barata. La calidad de la miel = calidad final del hidromiel.", prioridad: "ESENCIAL", tipo: "Consumible" },
    { item: "💧 Agua mineral o filtrada (4 L)", precio: "1-3€", donde: "Tienda física", nota: "Agua del grifo tiene cloro que mata levadura. Usa mineral o deja agua del grifo en jarra abierta 24h para que se evapore el cloro.", prioridad: "ESENCIAL", tipo: "Consumible" },
    { item: "🦠 Levadura vínica seca (5g)", precio: "2-5€", donde: "Internet", nota: "Recomendadas para principiantes: Lalvin EC-1118 (sequita, sube hasta 18%), Lalvin 71B (más afrutada), Red Star Premier Cuvée (rápida y limpia). 1 sobre de 5g basta para 4-5L. Evita la levadura panadera (sabor a pan).", prioridad: "ESENCIAL", tipo: "Consumible" },
    { item: "🫙 Garrafa de vidrio 5L con boca ancha", precio: "8-15€", donde: "Tienda física", nota: "Imprescindible vidrio (el plástico transmite sabores, deja arañazos donde se esconden bacterias). Garrafa de 5L para fermentar 4L (deja espacio para espuma). En internet busca 'garrafa fermentación 5L' o 'demijohn 5L'.", prioridad: "ESENCIAL", tipo: "Equipo" },
    { item: "🔓 Airlock (válvula de fermentación) + tapón con agujero", precio: "3-6€", donde: "Internet", nota: "Tapón goma con agujero + airlock 'S' o 'tres piezas'. Deja salir CO₂ pero no entrar oxígeno/bacterias. Imprescindible.", prioridad: "ESENCIAL", tipo: "Equipo" },
    { item: "🌡️ Termómetro digital (sonda)", precio: "5-12€", donde: "Internet", nota: "Para medir temperatura del mosto (max 25°C al añadir levadura) y verificar fermentación a 18-22°C ideal.", prioridad: "ESENCIAL", tipo: "Equipo" },
    { item: "📏 Hidrómetro + probeta", precio: "10-18€", donde: "Internet", nota: "Mide densidad del líquido. Permite calcular % de alcohol final y saber cuándo terminó de fermentar. NO es estrictamente necesario pero MUY recomendado.", prioridad: "IMPORTANTE", tipo: "Equipo" },
    { item: "🧴 Sanitizante (Star San o metabisulfito)", precio: "8-15€", donde: "Internet", nota: "Star San 250ml dura años. Sanitizar TODO equipo antes de usar. Sin esto: 50% probabilidad contaminación.", prioridad: "ESENCIAL", tipo: "Consumible" },
    { item: "🥄 Embudo + cuchara larga", precio: "3-8€", donde: "Tienda física", nota: "Para verter el mosto en la garrafa y para revolver. Plástico food-grade o metal.", prioridad: "ESENCIAL", tipo: "Equipo" },
    { item: "🌿 Nutrientes para levadura (DAP)", precio: "5-10€", donde: "Internet", nota: "Fosfato diamónico — alimenta la levadura. La miel sola es pobre en nutrientes. 1g por litro 3 veces durante primera semana = mejora fermentación.", prioridad: "IMPORTANTE", tipo: "Consumible" },
    { item: "🍾 Botellas de cristal 0.75L (6-8 uds)", precio: "0-15€", donde: "Tienda física", nota: "Botellas de vino vacías reusadas + tapones de corcho/swing-top. O comprar nuevas. Sanitizar antes de embotellar.", prioridad: "ESENCIAL", tipo: "Equipo" },
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
        Lista para tu primer lote de hidromiel (4 litros, ~12% alcohol). Inversión inicial 50-100€ (equipo reutilizable indefinidamente). Cada lote nuevo: solo recomprar miel + levadura (~20€).
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

      <SectionTitleX c={c}>LISTA DE COMPRA HIDROMIEL ({filtered.length}/{items.length})</SectionTitleX>
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

function PREP_HIDROMIEL() {
  const c = FERMENT_COLORS;
  return (
    <div>
      <InfoBoxX c={c}>
        Preparar el "mosto" — la mezcla inicial de agua, miel y levadura que va a fermentar. ~30 minutos de trabajo activo.
      </InfoBoxX>

      <SectionTitleX c={c}>RECETA BASE (4 LITROS, ~12% ABV)</SectionTitleX>
      <InfoBoxX c={c}>
        🍯 1.2 kg de miel<br/>
        💧 3.5 L de agua<br/>
        🦠 5g de levadura vínica (1 sobre)<br/>
        🌿 1 g de DAP (nutriente) por litro = 4g total<br/>
        ⏱️ Resultado: 4L de hidromiel a ~12% alcohol después de 4-6 semanas
      </InfoBoxX>

      <SectionTitleX c={c}>PASO A PASO — DÍA 1</SectionTitleX>
      <StepX c={c} num={1} text="Sanitiza TODO el equipo: garrafa, embudo, cuchara, airlock, tapón. Star San o metabisulfito según instrucciones." why="Cualquier bacteria en el equipo arruina el lote. Es el paso más importante de toda la receta." />
      <StepX c={c} num={2} text="Calienta 1 L de agua en una olla a 60-65°C (NO hervir — destruye aromas de la miel). Apaga el fuego." />
      <StepX c={c} num={3} text="Vierte la miel en el agua caliente. Remueve hasta disolver completamente. Añade el DAP (nutriente) y remueve." why="Calor + agitación = miel se disuelve sin grumos. Si no calientas, la miel queda en el fondo y la levadura no la encuentra." />
      <StepX c={c} num={4} text="Añade los 2.5L de agua restantes (frías) a la mezcla. Esto enfría el mosto rápidamente. Verifica temperatura: debe estar 20-25°C antes de añadir levadura." warning />
      <StepX c={c} num={5} text="Vierte el mosto en la garrafa sanitizada usando el embudo. Deja unos 15-20cm de espacio arriba (la espuma de fermentación necesita sitio)." />
      <StepX c={c} num={6} text="Hidratar la levadura: en un vaso de agua templada (35-40°C), espolvorea la levadura. Espera 15 minutos. Removerla muy suavemente." why="Hidratar antes vs echar el polvo seco directamente = mejor activación. La levadura empieza fermentando antes." />
      <StepX c={c} num={7} text="Vierte la levadura hidratada en la garrafa con el mosto. Tapa con el airlock (con un poco de agua dentro del airlock, hasta la línea marcada)." />
      <StepX c={c} num={8} text="Coloca la garrafa en un sitio oscuro a 18-22°C. Etiqueta con fecha de inicio." />

      <SectionTitleX c={c}>QUÉ ESPERAR — PRIMERAS 24-48H</SectionTitleX>
      <InfoBoxX c={c}>
        ✓ <strong>Día 1:</strong> Empiezan a salir burbujas por el airlock (cada minuto al principio).<br/>
        ✓ <strong>Día 2-3:</strong> Burbujeo INTENSO (cada 5-10 segundos). Espuma blanca arriba (krausen).<br/>
        ✓ <strong>Olor:</strong> dulce, a pan/levadura. Si huele a vinagre o podrido = contaminación.
      </InfoBoxX>
    </div>
  );
}

function FERMENTACION_HIDROMIEL() {
  const c = FERMENT_COLORS;
  return (
    <div>
      <InfoBoxX c={c}>
        4-6 semanas de paciencia. La levadura come miel y produce alcohol + CO₂. Tu único trabajo: NO TOCAR. Vigilar de lejos.
      </InfoBoxX>

      <SectionTitleX c={c}>SEMANA 1 — FERMENTACIÓN PRIMARIA</SectionTitleX>
      <StepX c={c} num={1} text="Días 1-3: actividad MÁXIMA. Burbujeo cada pocos segundos. Espuma arriba. Mosto turbio." />
      <StepX c={c} num={2} text="Día 4: añade 1g de DAP más (segundo aporte de nutriente)." why="Nutrientes en etapas (staggered nutrient addition) ayuda a la levadura a fermentar más limpio y completo." />
      <StepX c={c} num={3} text="Día 7: añade el último gramo de DAP. La actividad de burbujeo empieza a bajar a este punto." />

      <SectionTitleX c={c}>SEMANAS 2-4 — FERMENTACIÓN SECUNDARIA</SectionTitleX>
      <StepX c={c} num={1} text="Burbujeo cada 30-60 segundos. La espuma desaparece, el mosto se aclara desde arriba. El sedimento (lías) se acumula en el fondo." />
      <StepX c={c} num={2} text="NO ABRAS la garrafa. Cada apertura introduce oxígeno y posibles contaminantes." />
      <StepX c={c} num={3} text="Mantén temperatura constante 18-22°C. Variaciones bruscas pueden parar la fermentación o crear sabores raros." />

      <SectionTitleX c={c}>SEMANAS 4-6 — FINAL</SectionTitleX>
      <StepX c={c} num={1} text="El burbujeo se ralentiza a cada 2-5 minutos, luego para casi por completo." />
      <StepX c={c} num={2} text="El líquido es transparente arriba (las levaduras se han ido al fondo)." />
      <StepX c={c} num={3} text="Toma medición con hidrómetro: si la densidad lleva 3 días igual = fermentación TERMINADA. Densidad típica final: 0.990-1.005." why="Sin hidrómetro: si llevas 5+ días sin ver burbujas = probablemente listo." />

      <SectionTitleX c={c}>ERRORES COMUNES</SectionTitleX>
      <ErrorCardX c={c}
        error="Abrir la garrafa para 'ver cómo va'"
        consecuencia="Cada apertura introduce oxígeno. La oxidación produce sabor a sidra/jerez (a veces deseable, a veces no). Mayor riesgo de contaminación bacteriana."
        fix="Confía en el airlock. Solo abrir cuando vayas a embotellar (final)."
      />
      <ErrorCardX c={c}
        error="Temperatura por encima de 25°C"
        consecuencia="Levadura estresada produce sabores fenólicos (a clavo, plástico). El hidromiel sale con notas raras."
        fix="Sitio fresco constante 18-22°C. Si vives en sitio caluroso: nevera dedicada (controlador de temperatura) o frío natural en sótano/garaje."
      />
      <ErrorCardX c={c}
        error="Olvidarse de añadir nutrientes"
        consecuencia="Fermentación lenta o estancada. Sabores 'sulfurosos' (huevo podrido, cebolla)."
        fix="DAP en 3 etapas (día 1, día 4, día 7) según receta. La miel sola es pobre en nitrógeno y la levadura sufre."
      />
    </div>
  );
}

function EMBOTELLADO_HIDROMIEL() {
  const c = FERMENT_COLORS;
  return (
    <div>
      <InfoBoxX c={c}>
        Trasiego (sacar el hidromiel limpio dejando el sedimento) y embotellado. Después: la magia del envejecimiento.
      </InfoBoxX>

      <SectionTitleX c={c}>TRASIEGO (SECUNDARIO)</SectionTitleX>
      <StepX c={c} num={1} text="Sanitiza otra garrafa de 5L y un tubo de silicona/sifón." />
      <StepX c={c} num={2} text="Coloca la garrafa con hidromiel encima de una mesa (alto), la garrafa vacía en el suelo (bajo). El sifón aprovecha la gravedad." />
      <StepX c={c} num={3} text="Inserta un extremo del sifón en el hidromiel SIN tocar el sedimento del fondo. Succiona suavemente desde el otro extremo (o usa sifón con bomba)." />
      <StepX c={c} num={4} text="Deja correr el líquido a la garrafa nueva. Para cuando llegues al sedimento — descártalo." why="El sedimento (lías) tiene levadura muerta + proteínas. Beberlo no es peligroso pero da sabor amargo." />
      <StepX c={c} num={5} text="Añade airlock nuevo a la garrafa con el hidromiel limpio. Deja 1-2 semanas más en lugar oscuro a 15-18°C." why="Esta segunda fermentación 'pule' sabores y permite que se asienten más sólidos." />

      <SectionTitleX c={c}>EMBOTELLADO</SectionTitleX>
      <StepX c={c} num={1} text="Sanitiza botellas y tapones." />
      <StepX c={c} num={2} text="Decide nivel de carbonatación:" />
      <div style={{ display: "grid", gap: "8px", marginBottom: "12px" }}>
        {[
          { tipo: "📿 Sin gas (still)", desc: "Embotella tal cual. Resultado: hidromiel quieto tipo vino. Más fácil, menor riesgo." },
          { tipo: "🫧 Con gas (sparkling)", desc: "Añade 5g de azúcar por litro antes de embotellar (priming sugar). La levadura residual lo come y produce CO₂ atrapado en la botella. Cuidado: presión = vidrio puede explotar si exceso." },
        ].map((s, i) => (
          <div key={i} style={{ background: c.bg2, border: `1px solid ${c.border1}`, borderRadius: "8px", padding: "10px" }}>
            <div style={{ fontSize: "12px", fontWeight: "bold", color: c.textBright, marginBottom: "3px" }}>{s.tipo}</div>
            <div style={{ fontSize: "11px", color: c.accent3, lineHeight: "1.5" }}>{s.desc}</div>
          </div>
        ))}
      </div>
      <StepX c={c} num={3} text="Llena cada botella dejando 2-3cm de espacio. Tapa con corcho o swing-top." />
      <StepX c={c} num={4} text="Etiqueta con fecha + tipo de miel + cualquier ingrediente extra." />
      <StepX c={c} num={5} text="Para gas: deja botellas a temperatura ambiente 2-3 semanas para que se carbonate. Después al frío. Para still: directo al frío." />
    </div>
  );
}

function CATA_HIDROMIEL() {
  const c = FERMENT_COLORS;
  return (
    <div>
      <InfoBoxX c={c}>
        Hidromiel joven (1-2 meses) sabe a "alcohol con miel". Hidromiel envejecido (6-12 meses) sabe RICO — desaparecen sabores duros, aparecen complejidad y suavidad. La paciencia es la clave.
      </InfoBoxX>

      <SectionTitleX c={c}>EVOLUCIÓN DEL SABOR</SectionTitleX>
      <div style={{ display: "grid", gap: "8px", marginBottom: "20px" }}>
        {[
          { tiempo: "1-2 meses", sabor: "Alcohol fuerte, dulzor crudo, posibles notas de levadura. Bebible pero crudo." },
          { tiempo: "3-4 meses", sabor: "El alcohol se integra. Aparece carácter de la miel. Más balanceado." },
          { tiempo: "6 meses", sabor: "RICO. Suavidad notable. Notas afrutadas, florales. La mayoría se bebe entre 6-12 meses." },
          { tiempo: "1-3 años", sabor: "Complejidad creciente. Notas a vino dulce, jerez. Hidromieles fuertes (15%+) mejoran muchísimo a este punto." },
          { tiempo: "5+ años", sabor: "Si aguanta sin oxidarse: hidromiel de colección. Caro de tiempo pero magnífico." },
        ].map((t, i) => (
          <div key={i} style={{ background: c.bg2, border: `1px solid ${c.border1}`, borderRadius: "8px", padding: "10px" }}>
            <div style={{ fontSize: "11px", color: c.accent1, fontWeight: "bold", letterSpacing: "1px", marginBottom: "3px" }}>{t.tiempo.toUpperCase()}</div>
            <div style={{ fontSize: "12px", color: c.accent3, lineHeight: "1.5" }}>{t.sabor}</div>
          </div>
        ))}
      </div>

      <SectionTitleX c={c}>CONSEJOS DE CONSERVACIÓN</SectionTitleX>
      <StepX c={c} num={1} text="Botellas en posición HORIZONTAL si tienen corcho — mantiene el corcho hidratado. Si swing-top o tapón rosca: vertical." />
      <StepX c={c} num={2} text="Lugar oscuro y fresco (10-15°C ideal). Sótano, despensa, garaje protegido del frío extremo." />
      <StepX c={c} num={3} text="Etiqueta y registra: fecha embotellado, miel, levadura, % ABV estimado, notas de cata." why="Después de un año tendrás varios lotes — sin etiqueta no recuerdas cuál era cuál." />
      <StepX c={c} num={4} text="Cata cada 2-3 meses. Anota cómo evoluciona. Decides cuándo está perfecto para ti." />

      <SectionTitleX c={c}>VARIACIONES PARA PRÓXIMOS LOTES</SectionTitleX>
      <InfoBoxX c={c}>
        🍓 <strong>Melomel:</strong> hidromiel + frutas (fresa, cereza, mora, manzana). Añade 500g-1kg de fruta congelada al trasiego secundario.<br/>
        🌿 <strong>Metheglin:</strong> hidromiel + especias (canela, jengibre, vainilla, lúpulo). Infusión durante secundario.<br/>
        🍷 <strong>Pyment:</strong> hidromiel + uva. Mitad mosto de uva, mitad miel.<br/>
        ☕ <strong>Bochet:</strong> miel caramelizada antes de hacer mosto. Sabor a caramelo y café tostado.
      </InfoBoxX>
    </div>
  );
}
