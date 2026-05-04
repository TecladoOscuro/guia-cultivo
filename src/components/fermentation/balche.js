// FERMENTACIONES — BALCHÉ (Mayan ceremonial)

function COMPRA_BALCHE() {
  const c = FERMENT_COLORS;
  const items = [
    { item: "🌿 Corteza de Lonchocarpus longistylus (corteza de balché)", precio: "15-30€", donde: "Tiendas etnobotánicas online (EU)", nota: "La corteza auténtica del árbol balché, nativo de Yucatán y América Central. Buscar 'balché bark', 'Lonchocarpus longistylus bark' en tiendas etnobotánicas europeas como Azarius, Zamnesia, o herbolarios especializados. Aspecto: tiras de corteza marrón-grisácea, olor resinoso suave.", prioridad: "ESENCIAL", tipo: "Consumible" },
    { item: "🌿 Corteza de roble (Quercus robur) — alternativa local", precio: "3-8€", donde: "Tiendas de fermentación/vino/herbolario", nota: "Si no encuentras corteza de balché: corteza de roble da taninos, amargo y estructura similar. No tiene el mismo perfil de compuestos pero aproxima el carácter amargo-resinoso. Buscar 'oak bark' para cerveza/vino casero.", prioridad: "ALTERNATIVA", tipo: "Consumible" },
    { item: "🍯 Miel cruda sin pasteurizar (300-500g)", precio: "8-20€", donde: "Mercados de agricultores/herbolario/internet", nota: "La miel RAW (cruda) es ESENCIAL — contiene levaduras silvestres y bacterias naturales que inician la fermentación sin añadir levadura comercial. La miel pasteurizada del supermercado no funciona igual (los microorganismos están muertos). Buscar 'miel cruda', 'miel sin filtrar', 'raw honey'. Variedades florales con aroma intenso son mejores.", prioridad: "ESENCIAL", tipo: "Consumible" },
    { item: "💧 Agua sin cloro (mineral, lluvia, filtrada, 2-3L)", precio: "1-2€", donde: "Supermercado", nota: "El agua de lluvia es la más tradicional (recolectada en recipiente limpio). Agua mineral es la alternativa práctica. El cloro del grifo inhibe las levaduras silvestres de la miel.", prioridad: "ESENCIAL", tipo: "Consumible" },
    { item: "🌶️ Achiote (semillas de Bixa orellana) — opcional", precio: "2-5€", donde: "Tiendas latinas/herbolario", nota: "Semillas de achiote o pasta de achiote dan color naranja-rojizo y aroma terroso suave. Ingrediente tradicional de la cocina maya, añade autenticidad al balché. Opcional pero interesante para color.", prioridad: "ÚTIL", tipo: "Consumible" },
    { item: "🌶️ Pimienta de Jamaica (allspice) y chile seco — opcional", precio: "1-3€", donde: "Supermercado/tiendas latinas", nota: "Algunas recetas mayas añaden pimienta de Jamaica (pimenta dioica), chile seco o vainilla de México. Todo opcional — el balché básico es solo corteza + miel + agua.", prioridad: "ÚTIL", tipo: "Consumible" },
    { item: "🫙 Recipiente de arcilla o cuenco amplio 3-5L", precio: "5-20€", donde: "Bazar/tienda cerámica/internet", nota: "Tradicional: tronco de árbol ahuecado o vasija de barro sin vidriar. En casa: cuenco de cerámica amplio, recipiente de plástico food-grade, o bol de vidrio. La boca ancha facilita la fermentación semiabierta.", prioridad: "ESENCIAL", tipo: "Equipo" },
    { item: "🧺 Tela de muselina o gasa para cubrir", precio: "2-5€", donde: "Tienda física/internet", nota: "Para cubrir el recipiente durante la fermentación. Permite que el CO₂ escape pero evita insectos y polvo.", prioridad: "ESENCIAL", tipo: "Equipo" },
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
        Lista para ~2L de balché. Coste: 25-50€ (primer lote con corteza auténtica). La corteza de balché es el ingrediente más difícil de encontrar — pero hay tiendas etnobotánicas europeas que la venden legalmente.
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

      <SectionTitleX c={c}>LISTA DE COMPRA BALCHÉ ({filtered.length}/{items.length})</SectionTitleX>
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

function PREPARACION_BALCHE() {
  const c = FERMENT_COLORS;
  return (
    <div>
      <InfoBoxX c={c}>
        El balché se prepara infusionando corteza de Lonchocarpus en agua, luego fermentando con miel cruda. La miel cruda aporta las levaduras silvestres que inician la fermentación de forma natural — similar a la elaboración de un hidromiel sin levadura comercial.
      </InfoBoxX>

      <SectionTitleX c={c}>CONTEXTO HISTÓRICO</SectionTitleX>
      <InfoBoxX c={c}>
        🌿 <strong>El árbol balché</strong> (Lonchocarpus longistylus) crece en la selva de Yucatán y Guatemala. Los sacerdotes mayas preparaban esta bebida para ceremonias de lluvia, fertilidad y toma de decisiones comunales. El consumo ritual estaba reservado a sacerdotes y élites — el pueblo no lo bebía cotidianamente.<br/>
        🐜 <strong>Inoculante tradicional:</strong> las hormigas de corteza del género Crematogaster que anidan en el árbol balché transportan levaduras silvestres específicas. No es práctico recrear esto — la miel cruda es el sustituto funcional moderno.<br/>
        🔬 <strong>Propiedades de la corteza:</strong> Lonchocarpus contiene rotenona (insecticida natural), flavonoides y algunos compuestos estudiados por etnobotánicos. La fermentación modifica estos compuestos. No es una planta psicoactiva en sentido moderno — el efecto ceremonial es principalmente alcohólico más el contexto ritual.
      </InfoBoxX>

      <SectionTitleX c={c}>PASO A PASO — INFUSIÓN DE CORTEZA</SectionTitleX>
      <StepX c={c} num={1} text="Tostar ligeramente la corteza de balché en sartén seca a fuego medio-bajo, 3-5 minutos, hasta que suelte aroma resinoso. Remover para que no se queme." why="El tostado suave abre los poros de la corteza y libera aceites esenciales y resinas que serían difíciles de extraer en frío. También esteriliza la superficie de la corteza." />
      <StepX c={c} num={2} text="Poner la corteza tostada en un recipiente amplio. Añadir 2L de agua sin cloro a temperatura ambiente (NO hirviendo)." why="El agua fría o tibia extrae los compuestos aromáticos sin degradar los terpenos más volátiles. El agua muy caliente puede dar una infusión demasiado amarga y astringente." />
      <StepX c={c} num={3} text="Remojar 24 horas a temperatura ambiente. La corteza se hincha y suelta un líquido marrón-oscuro con olor resinoso-terroso." />
      <StepX c={c} num={4} text="Al día siguiente: preparar el agua de miel. Calentar 500ml de agua a 35°C máximo (comprobar con termómetro o a ojo: debe sentirse cálida pero sin quemar la mano)." why="La temperatura debe ser baja para preservar las levaduras silvestres de la miel cruda. Por encima de 40°C empiezan a morir. Por encima de 50°C se destruyen casi todas. La miel pasteurizada NO tiene levaduras vivas — usar siempre miel cruda." />
      <StepX c={c} num={5} text="Disolver 300-500g de miel cruda en el agua tibia, removiendo hasta que no queden grumos. Resultado: agua dulce y aromática." />
      <StepX c={c} num={6} text="Mezclar el agua de corteza (con o sin la corteza dentro) + agua de miel en el recipiente de fermentación." />
      <StepX c={c} num={7} text="(Opcional) Añadir especias: semillas de achiote (5-6 semillas), pimienta de Jamaica (3-4 granos), o un chile seco pequeño sin semillas. Remover." />
      <StepX c={c} num={8} text="Probar la mezcla: debe saber dulce con amargor de fondo y aroma a resinas. Si es demasiado amargo: retirar parte de la corteza." />

      <SectionTitleX c={c}>SOBRE EL INOCULANTE</SectionTitleX>
      <InfoBoxX c={c}>
        🍯 <strong>Miel cruda como inoculante natural:</strong> la miel sin pasteurizar contiene levaduras silvestres (principalmente Saccharomyces cerevisiae, Torulaspora delbrueckii, Zygosaccharomyces bailii) que se activan en contacto con agua. Si la miel es fresca y de calidad, la fermentación arranca sola en 24-48h.<br/>
        🦠 <strong>Si la fermentación no arranca en 48h:</strong> añadir 50ml de agua de kefir activo o una pizca pequeña (0.3g) de levadura de pan para ayudar a iniciarla.
      </InfoBoxX>

      <SectionTitleX c={c}>ERRORES COMUNES EN PREPARACIÓN</SectionTitleX>
      <ErrorCardX c={c}
        error="Usar miel pasteurizada del supermercado"
        consecuencia="Sin levaduras vivas. La fermentación natural no arranca o tarda mucho y puede contaminarse con bacterias no deseadas."
        fix="Usar siempre miel cruda (raw honey) — la etiqueta debe decir 'cruda', 'sin pasteurizar' o 'raw'. Si solo tienes miel normal: añadir 0.5g de levadura de pan o 50ml de kefir activo como sustituto."
      />
      <ErrorCardX c={c}
        error="Añadir miel a agua hirviendo"
        consecuencia="Las levaduras silvestres y enzimas de la miel mueren. La fermentación no arranca de forma natural."
        fix="Esperar siempre a que el agua baje de 40°C antes de disolver la miel. Regla práctica: si puedes aguantar el dedo en el agua sin quemarte, está bien."
      />
    </div>
  );
}

function FERMENTACION_BALCHE() {
  const c = FERMENT_COLORS;
  return (
    <div>
      <InfoBoxX c={c}>
        2-4 días de fermentación en recipiente semiabierto. El balché fermenta más lentamente que la chicha o el pulque pero más rápido que el hidromiel. Las levaduras silvestres de la miel cruda son más lentas que la levadura comercial — la espera vale la pena.
      </InfoBoxX>

      <SectionTitleX c={c}>PROCESO DÍA A DÍA</SectionTitleX>
      <StepX c={c} num={1} text="Cubrir el recipiente con la tela de muselina o gasa. Dejar a temperatura ambiente 20-28°C, en lugar oscuro o con luz tenue." why="Las levaduras silvestres trabajan mejor sin luz directa. La tela permite escape de CO₂ y paso mínimo de aire pero bloquea insectos y polvo." />
      <StepX c={c} num={2} text="Día 1-2: el líquido parece inactivo. Normal — las levaduras silvestres de la miel cruda tienen una fase de latencia más larga que la levadura comercial. A veces se ven pequeñas burbujas aisladas." />
      <StepX c={c} num={3} text="Día 2 (12-48h): burbujeo suave en superficie, espuma fina en bordes. Olor a miel+resina+fermentación. La fermentación ha arrancado." />
      <StepX c={c} num={4} text="Día 2-3: fermentación activa. Burbujeo constante. Olor más intenso: miel fermentada, resinas, levaduras. PROBAR: dulce con amargor, efervescente. ABV estimado 2-3%." />
      <StepX c={c} num={5} text="Día 3-4: fermentación se ralentiza. Más seco, más amargo, más alcohólico (4-5% ABV). Sabor más complejo: miel vieja, taninos de corteza, especias." why="El balché tradicional maya se consumía en este punto — fermentado 3-4 días. El amargor de los taninos de la corteza se integra con el dulce residual de la miel." />
      <StepX c={c} num={6} text="Día 4+: si se deja más tiempo, se vuelve más seco y más alcohólico (hasta 6-7% ABV). Algunos prefieren este punto más potente." />

      <SectionTitleX c={c}>SEÑALES DE FERMENTACIÓN SANA</SectionTitleX>
      <div style={{ display: "grid", gap: "8px", marginBottom: "16px" }}>
        {[
          { señal: "✅ Burbujeo suave continuo", det: "CO₂ de las levaduras. Normal. En fermentación con levaduras silvestres es más lento que con levadura de pan." },
          { señal: "✅ Olor a miel vieja + resina + levaduras", det: "Perfil aromático correcto. El aroma resinoso de la corteza es parte del carácter." },
          { señal: "✅ Espuma fina marrón en superficie", det: "Krausen de levaduras silvestres. Más marrón que el krausen del hidromiel o cerveza por la corteza. Normal." },
          { señal: "✅ Líquido marrón oscuro, opaco", det: "Color normal — la corteza da tonos marrones-rojizos intensos. El achiote (si se añadió) da naranja-rojo." },
          { señal: "⚠️ Sin actividad en 72h con miel cruda", det: "Puede que la miel era pasteurizada o muy antigua. Añadir 0.3g de levadura de pan o 50ml de kefir activo." },
          { señal: "❌ Olor a acetona fuerte", det: "Temperatura demasiado alta (más de 30°C). Mover a lugar más fresco." },
        ].map((s, i) => (
          <div key={i} style={{ background: c.bg2, border: `1px solid ${c.border1}`, borderRadius: "8px", padding: "10px" }}>
            <div style={{ fontSize: "12px", fontWeight: "bold", color: c.textBright, marginBottom: "3px" }}>{s.señal}</div>
            <div style={{ fontSize: "11px", color: c.accent3, lineHeight: "1.5" }}>{s.det}</div>
          </div>
        ))}
      </div>

      <SectionTitleX c={c}>ERRORES COMUNES</SectionTitleX>
      <ErrorCardX c={c}
        error="Tapar herméticamente durante fermentación activa"
        consecuencia="Presión de CO₂ acumulada — riesgo de que el recipiente deforme o explote."
        fix="Siempre cubrir con tela o tapa con agujero (airlock), nunca cerrar herméticamente en los primeros 4 días."
      />
      <ErrorCardX c={c}
        error="Añadir demasiada corteza"
        consecuencia="Sabor extremadamente amargo y astringente que no se puede corregir. Los taninos en exceso dan un sabor medicinal desagradable."
        fix="Empezar con poca corteza (30-50g para 2L) y añadir más si se quiere más amargor. Es más fácil añadir que quitar."
      />
    </div>
  );
}

function CATA_BALCHE() {
  const c = FERMENT_COLORS;
  return (
    <div>
      <InfoBoxX c={c}>
        El balché es una bebida de sabor adquirido — su perfil amargo-resinoso-mielado no tiene paralelo en la fermentación occidental. Es una experiencia histórica: beber lo que bebían los sacerdotes mayas hace 2000 años.
      </InfoBoxX>

      <SectionTitleX c={c}>PERFIL SENSORIAL</SectionTitleX>
      <div style={{ display: "grid", gap: "6px", marginBottom: "16px" }}>
        {[
          { label: "Color", value: "Marrón-rojizo oscuro (más con achiote: naranja-rojo)" },
          { label: "Claridad", value: "Turbio — partículas de corteza en suspensión" },
          { label: "Aroma", value: "Resinas, miel vieja, especias, tierra" },
          { label: "Sabor", value: "Amargo-tónico de frente, dulce residual de miel, taninos, notas resinosas" },
          { label: "Textura", value: "Ligera, efervescencia natural suave" },
          { label: "ABV", value: "3-6% según tiempo de fermentación" },
          { label: "Final", value: "Seco y ligeramente astringente — los taninos dejan sensación de sequedad en boca" },
        ].map((s, i) => (
          <StatBoxX key={i} c={c} label={s.label} value={s.value} />
        ))}
      </div>

      <SectionTitleX c={c}>CONTEXTO CEREMONIAL MAYA</SectionTitleX>
      <InfoBoxX c={c}>
        🌧️ <strong>Ceremonia del Chaac (lluvia):</strong> el balché se ofrecía a Chaac, dios maya de la lluvia. Se vertía en la tierra y se bebía en círculo comunal.<br/>
        🌱 <strong>Ceremonia de fertilidad:</strong> los sacerdotes bebían balché para "ver" el futuro de las cosechas y comunicarse con los dioses.<br/>
        ⚖️ <strong>Toma de decisiones:</strong> en algunas comunidades yucatecas actuales, el balché todavía se bebe antes de tomar decisiones importantes comunitarias.<br/>
        🏺 <strong>Vasijas:</strong> el balché se servía y bebía en jícaras (vasos de calabaza Lagenaria) o vasijas de barro pintadas. La forma de servir — vaso a vaso, persona a persona — era parte del ritual.
      </InfoBoxX>

      <SectionTitleX c={c}>CÓMO SERVIR</SectionTitleX>
      <InfoBoxX c={c}>
        🥣 <strong>Temperatura:</strong> temperatura ambiente o ligeramente frío (no helado — el frío excesivo bloquea los aromas).<br/>
        🎯 <strong>Vaso:</strong> cuenco de barro, copa de madera, calabaza, o cualquier vaso amplio. La cerámica porosa absorbe parte de los taninos con el tiempo — el mismo vaso mejora con el uso.<br/>
        🌿 <strong>Sin filtrar:</strong> servir con algo de sedimento y pequeñas partículas de corteza es auténtico. Si prefieres más limpio: colar con tela fina antes de servir.<br/>
        🍋 <strong>Contraste:</strong> unas gotas de zumo de lima o naranja agria en el vaso reducen el amargor y aproximan el perfil a cómo se sirve en Yucatán.
      </InfoBoxX>

      <SectionTitleX c={c}>VARIANTES</SectionTitleX>
      <div style={{ display: "grid", gap: "8px", marginBottom: "16px" }}>
        {[
          { variante: "🌿 Balché con corteza de roble", det: "Sustituir corteza de balché por corteza de roble. Diferente perfil terpénico pero similar carácter amargo-tónico. Más astringente, menos tropical." },
          { variante: "🍯 Balché con miel de Melipona (abeja maya)", det: "La miel original. Las abejas sin aguijón Melipona beecheii producen miel más ácida y líquida que la abeja europea. Tiene levaduras silvestres distintas. Si se consigue en tiendas especializadas (€30-60/250g) la diferencia de sabor es notable." },
          { variante: "🌶️ Balché picante (con chile habanero)", det: "Algunas recetas yucatecas añaden un chile habanero seco durante la fermentación. El resultado: amargo + miel + picante suave. Muy adquirido pero característico." },
          { variante: "🫐 Balché con fruta tropical (maracuyá, guayaba)", det: "Variante contemporánea: añadir 100ml de zumo de maracuyá o guayaba al servir. Reduce el amargor y lo hace más accesible para quienes no están acostumbrados al perfil original." },
        ].map((v, i) => (
          <div key={i} style={{ background: c.bg2, border: `1px solid ${c.border1}`, borderRadius: "8px", padding: "10px" }}>
            <div style={{ fontSize: "12px", fontWeight: "bold", color: c.textBright, marginBottom: "3px" }}>{v.variante}</div>
            <div style={{ fontSize: "11px", color: c.accent3, lineHeight: "1.5" }}>{v.det}</div>
          </div>
        ))}
      </div>

      <SectionTitleX c={c}>CONSERVACIÓN</SectionTitleX>
      <div style={{ display: "grid", gap: "6px", marginBottom: "16px" }}>
        {[
          { label: "Temperatura ambiente", value: "1-3 días (fermentación continúa)" },
          { label: "Refrigerado (4°C)", value: "3-7 días (fermentación muy ralentizada)" },
          { label: "Maduración larga", value: "No recomendado — los taninos se intensifican con el tiempo y pueden hacerlo demasiado amargo" },
        ].map((s, i) => (
          <StatBoxX key={i} c={c} label={s.label} value={s.value} />
        ))}
      </div>

      <LegalHealthBox c={c}
        legal={<>✅ Fermentar miel + corteza de árbol para consumo propio: 100% LEGAL en España y UE.<br/>✅ La corteza de Lonchocarpus longistylus se vende libremente en tiendas etnobotánicas de la UE — no está en ninguna lista de sustancias controladas.<br/>✅ ABV 3-6% — equivalente legal a vino o cerveza artesanal casera.<br/>❌ Venta sin registro sanitario: ilegal.<br/>📜 Patrimonio cultural maya vivo — comunidades de Yucatán y Chiapas todavía lo preparan para ceremonias.</>}
        salud="ABV 3-6%, alcohol moderado. La corteza de Lonchocarpus contiene rotenona (insecticida natural) que en las cantidades usadas para infusión ceremonial no representan riesgo documentado para adultos sanos. La fermentación degrada parte de estos compuestos. No hay estudios clínicos sobre consumo humano regular — precaución ante uso excesivo o frecuente. No es una bebida psicoactiva más allá del efecto del alcohol."
        contraindicaciones="Embarazo/lactancia · Hepatopatía · Alergia a plantas de la familia Fabaceae (la corteza es de esta familia) · Medicación incompatible con alcohol · No consumir en dosis altas o frecuencia alta por precaución con compuestos de la corteza"
        recursos="r/mead (el más cercano en técnica) · Etnobotánica maya: 'Maya Medicine' (Arvigo, Balick) · Artículos académicos sobre balché: JSTOR, Google Scholar · YouTube: 'balché ceremony Yucatan' para contexto visual · Comunidades de Yucatán y Quintana Roo para recetas tradicionales actuales"
      />
    </div>
  );
}
