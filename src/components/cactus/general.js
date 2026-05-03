// CACTUS MESCALINA — San Pedro / Bolivian Torch / Peyote
// Cultivo casero. Cactus ornamentales legales en España; consumo = zona gris.

function INTRO_CACTUS() {
  const c = CACTUS_COLORS;
  return (
    <div>
      <InfoBoxX c={c}>
        Cactus columnares con <GlossaryLink term="Mescalina">mescalina</GlossaryLink> (<GlossaryLink term="Alcaloide">alcaloide</GlossaryLink> visionario tipo ayahuasca/peyote). Cultivar como ornamental es 100% legal en España; consumo entra en zona gris. Esta guía cubre cultivo + preparación. NO da recetas de extracción química.
      </InfoBoxX>

      <SectionTitleX c={c}>VARIEDADES PRINCIPALES</SectionTitleX>
      <div style={{ display: "grid", gap: "10px" }}>
        {[
          { nombre: "🌵 San Pedro (Echinopsis pachanoi)", crece: "Rapidísimo: 30-50cm/año", potencia: "Media-baja (0.05-0.12% mescalina)", recomendado: "✅ MEJOR PARA EMPEZAR. Crece rápido, fuerte, perdona errores, fácil de comprar como esqueje. En 2-3 años tienes columna útil." },
          { nombre: "🌵 Bolivian Torch (Echinopsis lageniformis)", crece: "Rápido: 20-40cm/año", potencia: "Alta (hasta 0.25% mescalina)", recomendado: "✅ Buena alternativa. Más potente que San Pedro pero crece algo más lento. Más resistente al frío." },
          { nombre: "🌵 Peruvian Torch (Echinopsis peruviana)", crece: "Medio: 15-30cm/año", potencia: "Alta (0.15-0.30% mescalina)", recomendado: "Buena potencia pero crece más lento y es más caro. Para cultivadores que ya tienen experiencia." },
          { nombre: "🌵 Peyote (Lophophora williamsii)", crece: "EXTREMADAMENTE lento: 1-3cm/año", potencia: "Alta (3-6% mescalina seca)", recomendado: "❌ NO PARA EMPEZAR. Tarda 10-30 años desde semilla. En España el cactus es legal cultivar pero dificilísimo encontrar plantas, y eticamente cuestionable (especie protegida CITES, sagrada para huicholes)." },
        ].map((v, i) => (
          <div key={i} style={{ background: c.bg2, border: `1px solid ${c.border1}`, borderRadius: "10px", padding: "12px" }}>
            <div style={{ fontSize: "14px", fontWeight: "bold", color: c.textBright, marginBottom: "6px" }}>{v.nombre}</div>
            <div style={{ fontSize: "11px", color: c.accent2, marginBottom: "3px" }}>📈 {v.crece}</div>
            <div style={{ fontSize: "11px", color: c.accent2, marginBottom: "6px" }}>💊 {v.potencia}</div>
            <div style={{ fontSize: "12px", color: c.accent3, lineHeight: "1.5" }}>{v.recomendado}</div>
          </div>
        ))}
      </div>

      <SectionTitleX c={c}>POR QUÉ CULTIVAR (Y POR QUÉ NO)</SectionTitleX>
      <InfoBoxX c={c}>
        ✅ <strong>Pros:</strong> planta ornamental legal, prácticamente inmortal (vive +50 años), produce continuamente sin tener que replantar, no requiere ciclo como cannabis. Una vez establecida = recurso para décadas.<br/><br/>
        ❌ <strong>Contras:</strong> ESPERA. Para tener cosecha decente necesitas 2-4 años desde esqueje, 5-8 años desde semilla. No es una experiencia "este año cosecho". Es plantar para futuro.
      </InfoBoxX>

      <WarningBoxX c={c}>
        ⚠️ <strong>Harm reduction obligatorio.</strong> La <GlossaryLink term="Mescalina">mescalina</GlossaryLink> causa experiencia visionaria de 8-12h. Dosis inadecuadas, contexto erróneo, problemas mentales preexistentes = riesgos serios. Investiga DOSIFICACIÓN RESPONSABLE, <GlossaryLink term="Set & Setting">SET & SETTING</GlossaryLink>, y considera tener un <GlossaryLink term="Sitter / Acompañante">sitter</GlossaryLink> la primera vez. Esta guía cubre cultivo, no protocolos de consumo.
      </WarningBoxX>

      <LegalHealthBox c={c}
        legal={<>✅ Cultivo de cactus columnares como ornamentales: 100% LEGAL. CITES no controla Trichocereus.<br/>🟡 Posesión de cactus seco/triturado: zona gris (no se persigue uso personal).<br/>❌ Extracción química de mescalina: ILEGAL (sustancia Lista I controlada).<br/>❌ Comercializar polvo/extracto: ILEGAL.</>}
        salud="Mescalina causa náuseas iniciales (1ª hora), hipertensión leve, taquicardia. Experiencia 8-12h muy larga. Riesgo: HPPD raro con uso frecuente. Sin riesgos físicos serios documentados en personas sanas."
        contraindicaciones="Cardiopatía / hipertensión grave · Esquizofrenia / bipolar / paranoia · Embarazo / lactancia · SSRI/IMAO/antidepresivos (off-meds 4-6 sem) · MDMA/cocaína mismo día"
      />
    </div>
  );
}

function COMPRA_CACTUS() {
  const c = CACTUS_COLORS;
  const items = [
    { item: "🌵 Esqueje San Pedro (15-30cm)", precio: "15-40€", donde: "Internet", nota: "MEJOR opción para empezar. Esqueje ya enraizado o sin enraizar (más barato). En España: viveros online de cactáceas. Empieza con 1-2 esquejes de variedades distintas.", prioridad: "ESENCIAL" },
    { item: "🌱 Semillas Trichocereus mix (50-100 sem)", precio: "5-15€", donde: "Internet", nota: "Alternativa barata pero LENTA. Tarda 3-5 años en alcanzar tamaño de un esqueje. Recomendado solo si quieres jugar a largo plazo o aprender desde cero.", prioridad: "ÚTIL" },
    { item: "🪴 Maceta terracota 25-30cm Ø con agujeros", precio: "8-15€", donde: "Tienda física", nota: "Terracota mejor que plástico — la tierra se seca más rápido (cactus odian humedad encharcada). Imprescindibles agujeros de drenaje generosos.", prioridad: "ESENCIAL" },
    { item: "🪨 Sustrato cactus (10L)", precio: "8-12€", donde: "Tienda física", nota: "Mezcla específica para cactáceas: arena gruesa + perlita + algo de mantillo. NO usar tierra de jardín — retiene mucha agua y los pudre. Marcas: Compo Sana Cactus, Westland.", prioridad: "ESENCIAL" },
    { item: "🪨 Perlita extra (5L)", precio: "5-8€", donde: "Tienda física", nota: "Para mezclar 30% más al sustrato comercial — los Trichocereus quieren MUY drenado. Mejor pasarse de drenaje que quedarse corto.", prioridad: "ESENCIAL" },
    { item: "🧴 Fertilizante cactus líquido (250ml)", precio: "5-10€", donde: "Tienda física", nota: "Bajo en nitrógeno. Usar SOLO en primavera/verano cada 3-4 semanas a media dosis. Sobrealimentación = etiolación (crecimiento débil y desproporcionado).", prioridad: "IMPORTANTE" },
    { item: "💧 Pulverizador agua", precio: "3-6€", donde: "Tienda física", nota: "Solo para nebulizar exterior en olas de calor. NO usar como riego principal.", prioridad: "ÚTIL" },
    { item: "✂️ Cuchillo afilado + alcohol 70%", precio: "5-10€", donde: "Tienda física", nota: "Para cortar esquejes en cosecha. Cuchillo MUY afilado (corte limpio = cicatriza mejor). Esterilizar con alcohol antes y después.", prioridad: "ESENCIAL" },
  ];
  const [filterPrio, setFilterPrio] = React.useState([]);
  const togglePrio = (p) => setFilterPrio(s => s.includes(p) ? s.filter(x => x !== p) : [...s, p]);
  const filtered = items.filter(i => filterPrio.length === 0 || filterPrio.includes(i.prioridad));
  const prioColor = { "ESENCIAL": "#e88a6a", "IMPORTANTE": "#dfb578", "ÚTIL": "#7eb0c3" };

  return (
    <div>
      <InfoBoxX c={c}>
        Coste inicial: 50-100€ (esqueje + sustrato + maceta). Después casi 0 mantenimiento durante años. La inversión real es TIEMPO (años de espera), no dinero.
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
      {filterPrio.length > 0 && (
        <button onClick={() => setFilterPrio([])} style={{
          background: "transparent", color: c.accent2, border: "none",
          fontSize: "11px", marginBottom: "16px", textDecoration: "underline", padding: 0,
        }}>✕ Limpiar filtros</button>
      )}

      <SectionTitleX c={c}>LISTA DE COMPRA ({filtered.length}/{items.length})</SectionTitleX>
      {filtered.map((item, i) => (
        <div key={i} style={{ background: c.bg2, border: `1px solid ${c.border1}`, borderLeft: `3px solid ${prioColor[item.prioridad]}`, borderRadius: "10px", padding: "12px", marginBottom: "8px" }}>
          <div style={{ display: "flex", justifyContent: "space-between", marginBottom: "6px" }}>
            <div style={{ fontSize: "13px", fontWeight: "bold", color: c.textBright }}>{item.item}</div>
            <div style={{ fontSize: "11px", color: c.accent1, fontWeight: "bold" }}>{item.precio}</div>
          </div>
          <span style={{ fontSize: "9px", padding: "2px 8px", borderRadius: "10px", background: prioColor[item.prioridad], color: c.bg, fontWeight: "bold", letterSpacing: "0.5px" }}>{item.prioridad}</span>
          <div style={{ fontSize: "11px", color: c.accent2, margin: "6px 0 4px" }}>📍 {item.donde}</div>
          <div style={{ fontSize: "12px", color: c.accent3 }}>{item.nota}</div>
        </div>
      ))}
    </div>
  );
}

function GERMINACION_CACTUS() {
  const c = CACTUS_COLORS;
  return (
    <div>
      <InfoBoxX c={c}>
        Solo aplica si compraste semillas (no esquejes). Germinación de cactáceas es delicada pero predecible. Usa el "método baggie" (bolsa cerrada) para crear microclima estable.
      </InfoBoxX>

      <SectionTitleX c={c}>MÉTODO BAGGIE — INVIERNO/PRIMAVERA</SectionTitleX>
      <StepX c={c} num={1} text="Esteriliza la mezcla: tierra cactus + arena + perlita (1:1:1). Mete en horno 120°C / 30min en bandeja húmeda." why="Mata hongos y semillas de hierba. Cactus pequeños son frágiles a contaminación." />
      <StepX c={c} num={2} text="Llena un tupper transparente con tapa hasta 4cm de altura. Riega bien hasta que la mezcla esté empapada (no encharcada). Deja escurrir 30min." />
      <StepX c={c} num={3} text="Esparce semillas en la superficie. NO enterrarlas — las cactáceas necesitan luz para germinar. Pulveriza ligeramente." />
      <StepX c={c} num={4} text="Cierra tapa hermética. Coloca en lugar luminoso pero SIN sol directo (junto a ventana orientada norte/este). Temperatura: 22-28°C constante." why="Sol directo dentro del tupper = invernadero, achicharrarías las semillas." />
      <StepX c={c} num={5} text="No abras durante 2-4 semanas. Verás germinaciones (puntitos verdes con espinas mínimas) entre día 7-14. Algunas tardan 3-6 semanas." />
      <StepX c={c} num={6} text="Cuando todas las semillas que iban a germinar lo hayan hecho (mes 1-2), abre el tupper UN MILÍMETRO. Aumenta la apertura cada 2 días gradualmente." why="Pasar de 100% HR a aire seco de golpe = mueren todos. Aclimatación gradual obligatoria." />
      <StepX c={c} num={7} text="Mes 3-6: las plántulas son del tamaño de un grano de pimienta. NO trasplantar todavía. Dejar en el mismo tupper destapado, regar con pulverizador cuando la superficie se seque." />
      <StepX c={c} num={8} text="Mes 6-12: cuando midan 1-2cm, trasplantar a maceta individual con sustrato cactus normal." />

      <SectionTitleX c={c}>ERRORES COMUNES</SectionTitleX>
      <ErrorCardX c={c}
        error="Enterrar las semillas"
        consecuencia="No germinan. Cactáceas necesitan luz directa sobre la semilla."
        fix="Solo presionar suavemente para contacto con sustrato. NO cubrir con tierra."
      />
      <ErrorCardX c={c}
        error="Abrir el tupper antes de tiempo"
        consecuencia="Plántulas micro-deshidratadas mueren en horas. Pierdes todo."
        fix="Espera al menos 4-6 semanas SIN abrir. La aclimatación es proceso de meses."
      />
      <ErrorCardX c={c}
        error="Usar tierra normal de jardín"
        consecuencia="Hongos + retención de agua = hongo del cuello → todas las plántulas se pudren a nivel de tierra."
        fix="Sustrato cactus + perlita ESTERILIZADO (horno 30min). No saltarse este paso."
      />
    </div>
  );
}

function CUIDADOS_CACTUS() {
  const c = CACTUS_COLORS;
  return (
    <div>
      <InfoBoxX c={c}>
        Cactus columnares son CASI INDESTRUCTIBLES. Las únicas formas de matarlos: regar de más, frío extremo, o sol directo en plántulas pequeñas. Sigue 4 reglas y vive feliz.
      </InfoBoxX>

      <SectionTitleX c={c}>LAS 4 REGLAS DE ORO</SectionTitleX>
      <div style={{ display: "grid", gap: "10px", marginBottom: "20px" }}>
        {[
          { num: "1", regla: "💧 Riego: solo cuando la maceta pesa LIGERA", det: "Mete el dedo 3cm en el sustrato. Si está SECO, riega abundante hasta que salga agua por abajo. Si está húmedo: NO riegas. En verano: cada 10-14 días. En invierno: cada 30-45 días o NUNCA." },
          { num: "2", regla: "☀️ Sol: máximo posible, gradual", det: "Adultos quieren sol directo 6-8h/día. Plántulas y esquejes recién enraizados necesitan aclimatación gradual (semi-sombra → sol pleno en 2-4 semanas) o se queman (manchas amarillas/marrones)." },
          { num: "3", regla: "🌡️ Temperatura: 10-35°C", det: "Aguantan calor mediterráneo sin problema. Por debajo de 5°C empiezan a sufrir. Por debajo de 0°C MUEREN. En invierno: meter dentro o cubrir con manta térmica si hiela." },
          { num: "4", regla: "🍃 Sustrato: drenaje extremo", det: "30% perlita mínimo. Maceta terracota con agujero generoso. Si el agua tarda más de 3 segundos en empezar a salir por abajo, el sustrato está mal." },
        ].map((r, i) => (
          <div key={i} style={{ background: c.bg2, border: `1px solid ${c.border1}`, borderRadius: "10px", padding: "12px" }}>
            <div style={{ display: "flex", gap: "10px", alignItems: "flex-start" }}>
              <div style={{ fontSize: "20px", fontWeight: "bold", color: c.accent1 }}>{r.num}</div>
              <div style={{ flex: 1 }}>
                <div style={{ fontSize: "13px", fontWeight: "bold", color: c.textBright, marginBottom: "4px" }}>{r.regla}</div>
                <div style={{ fontSize: "12px", color: c.accent3, lineHeight: "1.5" }}>{r.det}</div>
              </div>
            </div>
          </div>
        ))}
      </div>

      <SectionTitleX c={c}>CICLO ANUAL</SectionTitleX>
      <StepX c={c} num={1} text="🌸 Marzo-Abril: despertar. Primer riego abundante. Sacar al exterior gradualmente." />
      <StepX c={c} num={2} text="🌞 Mayo-Septiembre: temporada de crecimiento. Riego cada 10-14 días. Fertilizar cactáceas a media dosis cada 3-4 semanas. Sol pleno." />
      <StepX c={c} num={3} text="🍂 Octubre: reducir riego. Última fertilización antes del 20 sept." />
      <StepX c={c} num={4} text="❄️ Noviembre-Febrero: hibernación. NO regar. NO fertilizar. Mantener seco y fresco (10-15°C ideal)." why="La hibernación seca induce floración y crecimiento más vigoroso en primavera. Cactus regado en invierno = blando, podrido o etiolado." />

      <SectionTitleX c={c}>RIEGO DETALLADO POR TEMPORADA — TABLA NOVATO</SectionTitleX>
      <div style={{ background: c.bg2, border: `1px solid ${c.border1}`, borderRadius: "10px", padding: "14px", marginBottom: "16px" }}>
        <div style={{ fontSize: "11px", color: c.accent1, letterSpacing: "1px", marginBottom: "10px", fontWeight: "bold" }}>💧 RIEGO POR ÉPOCA — MACETA TERRACOTA 25-30CM</div>
        {[
          { epoca: "🌸 Marzo-Abril (despertar)", agua: "500-800ml", freq: "1 riego inicial + esperar 2-3 semanas seco", nota: "Primer riego del año tras el invierno seco. Regar abundante UNA vez. Después esperar a que se seque por completo." },
          { epoca: "🌞 Mayo-Junio (crecimiento)", agua: "500-800ml", freq: "cada 10-14 días", nota: "Tras temperaturas estables &gt;18°C noche. Esperar a que el sustrato esté COMPLETAMENTE seco (palillo seco al sacarlo)." },
          { epoca: "☀️ Julio-Agosto (pico calor)", agua: "800ml-1L", freq: "cada 7-10 días", nota: "El sol intenso evapora más rápido. Pulverizar exterior por la noche en olas de calor extremo (por encima 35°C) ayuda." },
          { epoca: "🍂 Septiembre", agua: "500-800ml", freq: "cada 10-14 días", nota: "Mantener riego como verano. Última fertilización antes del 20 sept." },
          { epoca: "🍁 Octubre", agua: "300-500ml", freq: "cada 14-21 días", nota: "Reducir gradualmente. La planta empieza a 'dormirse'." },
          { epoca: "❄️ Noviembre-Febrero (hibernación)", agua: "0ml — NO REGAR", freq: "Nunca", nota: "Riego en invierno = pudrición casi segura. Solo emergencia: si la planta está en interior con calefacción y se arruga visiblemente, 100ml en 4 meses." },
        ].map((row, i) => (
          <div key={i} style={{ borderBottom: i < 5 ? `1px solid ${c.border1}` : "none", padding: "8px 0" }}>
            <div style={{ fontSize: "12px", fontWeight: "bold", color: c.textBright, marginBottom: "3px" }}>{row.epoca}</div>
            <div style={{ fontSize: "11px", color: c.accent2 }}>💧 <strong>{row.agua}</strong> · ⏱️ {row.freq}</div>
            <div style={{ fontSize: "11px", color: c.accent3, marginTop: "3px", lineHeight: "1.5" }}>{row.nota}</div>
          </div>
        ))}
      </div>

      <SectionTitleX c={c}>EL pH DEL AGUA EN CACTUS</SectionTitleX>
      <InfoBoxX c={c}>
        🧪 <strong>pH objetivo: 5.5-6.5</strong> (ligeramente más ácido que cannabis). Cactus mescalina vienen de suelos volcánicos andinos con pH bajo. El agua del grifo española (pH 7-8) está demasiado alcalina — corregir.<br/><br/>
        💧 <strong>Cómo:</strong> dejar agua en jarra abierta 24h (cloro se evapora) → medir pH con pHmetro → añadir gota a gota de pH Down hasta llegar a 6.0. Si no tienes pHmetro: añade 1-2 gotas de zumo de limón por litro (no perfecto pero ayuda).
      </InfoBoxX>

      <SectionTitleX c={c}>SEÑALES VISUALES — QUÉ MIRAR EN TU CACTUS</SectionTitleX>
      <div style={{ background: c.bg2, border: `1px solid ${c.border1}`, borderRadius: "10px", padding: "14px", marginBottom: "16px" }}>
        <div style={{ fontSize: "11px", color: c.accent1, letterSpacing: "1px", marginBottom: "10px", fontWeight: "bold" }}>👀 LO QUE NOTAS EN EL CACTUS</div>
        {[
          { signo: "✅ Cuerpo firme, costillas pronunciadas, color verde uniforme", lectura: "PERFECTO. Cactus feliz, no tocar nada." },
          { signo: "🟡 Costillas se ven más profundas, cuerpo ligeramente arrugado", lectura: "FALTA AGUA. Riego ya. Tras 24-48h debería 'inflarse' otra vez." },
          { signo: "🔴 Cuerpo muy arrugado, columna delgada y caída", lectura: "MUY DESHIDRATADO. Riego abundante (1L). Si en 1 semana no recupera = revisar raíces." },
          { signo: "🔴 Base AMARILLA o MARRÓN, blanda al tacto", lectura: "PUDRICIÓN — emergencia. PARA de regar. Sacar de maceta, cortar parte podrida con cuchillo esterilizado, callusing 2-3 sem, replantar en sustrato seco." },
          { signo: "🟡 Manchas amarillentas en lados expuestos al sol", lectura: "QUEMADURA SOLAR. Mover a sombra parcial 1-2 sem para aclimatación gradual." },
          { signo: "🟡 Cuerpo PÁLIDO/AMARILLENTO general", lectura: "Posible exceso de sol O exceso de riego. Verifica ambos." },
          { signo: "🟡 Crecimiento delgado, débil, sin espinas robustas (etiolación)", lectura: "FALTA DE LUZ. Mover a posición con más sol directo (gradualmente)." },
          { signo: "✅ Crecimiento de 2-5cm/mes en verano (San Pedro)", lectura: "EXCELENTE. Cactus en pleno crecimiento. Sigue así." },
          { signo: "🟢 Hijos/hijuelos saliendo en la base", lectura: "MUY BIEN. Cactus maduro y feliz. Puedes separar los hijos para multiplicar." },
          { signo: "🌸 Flores blancas que se abren de noche", lectura: "Cactus maduro (4+ años). Marca de calidad. Polinización manual = semillas." },
        ].map((s, i) => (
          <div key={i} style={{ borderBottom: i < 9 ? `1px solid ${c.border1}` : "none", padding: "6px 0" }}>
            <div style={{ fontSize: "12px", color: c.textBright, marginBottom: "2px" }}>{s.signo}</div>
            <div style={{ fontSize: "11px", color: c.accent3, lineHeight: "1.5" }}>→ {s.lectura}</div>
          </div>
        ))}
      </div>

      <SectionTitleX c={c}>CÓMO REGAR — TÉCNICA</SectionTitleX>
      <StepX c={c} num={1} text="Verifica con palillo de madera: meterlo 5cm en el sustrato. Si sale SECO/limpio = regar. Si sale con tierra húmeda pegada = NO regar." why="El método más fiable para cactus. El dedo no llega lo suficiente profundo en macetas grandes." />
      <StepX c={c} num={2} text="Riega LENTO en círculos alrededor del cactus, sin mojar el cactus mismo." why="Agua sobre el cuerpo del cactus puede causar manchas marrones y favorecer pudrición de la base." />
      <StepX c={c} num={3} text="Cantidad: agua hasta que salga por debajo (~25% del volumen de la maceta). Para 25cm Ø ≈ 500-800ml." />
      <StepX c={c} num={4} text="ESPERA mínimo 2 semanas (verano) o 4 semanas (transición) antes del siguiente riego. Cactus prefieren la sequía a la humedad." warning />
      <StepX c={c} num={5} text="Vacía el plato 30 min después. NUNCA dejar maceta en agua estancada — ahogamiento garantizado." />
    </div>
  );
}

function CRECIMIENTO_CACTUS() {
  const c = CACTUS_COLORS;
  return (
    <div>
      <InfoBoxX c={c}>
        Realidad: necesitas paciencia. Esta sección te dice qué esperar realísticamente para no frustrarte. Los cactus crecen lento incluso cuando crecen "rápido".
      </InfoBoxX>

      <SectionTitleX c={c}>EXPECTATIVAS REALISTAS — DESDE ESQUEJE</SectionTitleX>
      <div style={{ display: "grid", gap: "8px", marginBottom: "20px" }}>
        {[
          { tiempo: "Año 0 (esqueje 20cm)", estado: "Esqueje recibido. Dejar callusing 2 semanas (cicatriza el corte)." },
          { tiempo: "Año 0.5", estado: "Plantar y enraizar. Primer crecimiento visible 2-3 meses después." },
          { tiempo: "Año 1", estado: "Esqueje crece 15-30cm en San Pedro. Aún flaco." },
          { tiempo: "Año 2", estado: "30-50cm de crecimiento total. Engrosa. Puedes empezar a cosechar puntas pequeñas." },
          { tiempo: "Año 3-4", estado: "Cactus de 1-1.5m, grueso. Cosecha decente posible (puntas grandes + ramificación)." },
          { tiempo: "Año 5+", estado: "Cactus columnar maduro. Cosechas regulares sin matar la planta. Empieza a echar hijos (clones gratis)." },
        ].map((t, i) => (
          <div key={i} style={{ background: c.bg2, border: `1px solid ${c.border1}`, borderRadius: "8px", padding: "10px" }}>
            <div style={{ fontSize: "11px", color: c.accent1, fontWeight: "bold", letterSpacing: "1px", marginBottom: "3px" }}>{t.tiempo.toUpperCase()}</div>
            <div style={{ fontSize: "12px", color: c.accent3 }}>{t.estado}</div>
          </div>
        ))}
      </div>

      <SectionTitleX c={c}>EXPECTATIVAS — DESDE SEMILLA</SectionTitleX>
      <InfoBoxX c={c}>
        Multiplica todo por 3-5x. Año 1 desde semilla = pelotita de 1cm. Año 5 = 15-20cm. Año 10 = quizás 50-80cm. Solo viable si ya tienes esquejes maduros y haces semillas como hobby a largo plazo.
      </InfoBoxX>

      <SectionTitleX c={c}>ACELERAR CRECIMIENTO</SectionTitleX>
      <StepX c={c} num={1} text="Maceta lo más grande posible — raíces más grandes = planta más grande. Cambia a maceta de tamaño superior cada 2-3 años." />
      <StepX c={c} num={2} text="Sol DIRECTO máximo. Rotar la planta 90° cada 2 semanas para crecimiento simétrico." />
      <StepX c={c} num={3} text="Calor: temperaturas 25-32°C en verano son ideales. Si vives en clima frío, considera invernadero o ventana orientada sur." />
      <StepX c={c} num={4} text="Fertilizar correctamente: alga marina + bajo NPK específico cactus, cada 3 semanas en temporada activa. NO sobrealimentar (etiolación)." />
      <StepX c={c} num={5} text="Injerto sobre Pereskiopsis (técnica avanzada): dispara crecimiento de plántulas 10x. Buscar tutoriales si te interesa." />
    </div>
  );
}

function COSECHA_CACTUS() {
  const c = CACTUS_COLORS;
  return (
    <div>
      <InfoBoxX c={c}>
        Cosechar = cortar la punta del cactus. La planta NO muere — sigue creciendo desde el corte (ramifica) y eventualmente echa hijos. Cosecha responsable = el cactus dura toda tu vida y la de tus hijos.
      </InfoBoxX>

      <SectionTitleX c={c}>CUÁNDO COSECHAR</SectionTitleX>
      <StepX c={c} num={1} text="Espera mínimo 2-3 años desde plantar el esqueje. Antes = cosecha ridícula y matas la planta." />
      <StepX c={c} num={2} text="Cosecha en final de verano / principio otoño (sept-oct). El cactus tiene máxima concentración de alcaloides después de la temporada activa." why="Estudios muestran picos de mescalina al final del periodo de crecimiento, antes de la dormancia invernal." />
      <StepX c={c} num={3} text="NUNCA cosechar más del 30-40% de altura total de la planta en un solo corte. Cortes más grandes pueden estresar a la planta hasta matarla." />

      <SectionTitleX c={c}>TÉCNICA DE CORTE</SectionTitleX>
      <StepX c={c} num={1} text="Esteriliza el cuchillo con alcohol 70%. Usa cuchillo MUY afilado (sierra dentada NO sirve, machaca el tejido)." />
      <StepX c={c} num={2} text="Decide dónde cortar. Marca con un rotulador. Recomendado: dejar mínimo 30-40cm desde el suelo en la planta madre." why="La planta necesita masa fotosintetica suficiente para sobrevivir y rebrotar. Cortar demasiado bajo = muere o tarda años en recuperar." />
      <StepX c={c} num={3} text="Corte horizontal LIMPIO de un solo movimiento. NO cortar en ángulo." why="El corte horizontal expone menos superficie a hongos y cicatriza más rápido." />
      <StepX c={c} num={4} text="Aplica canela en polvo o ceniza de cigarrillo (esterilizada) sobre la herida de la planta madre. Esto es opcional pero ayuda a cicatrizar y previene hongos." />
      <StepX c={c} num={5} text="La planta madre ahora se queda con el muñón. En 2-4 semanas la herida se sella formando una capa córnea. En meses, el cactus rebrota desde justo bajo el corte (ramifica) — duplicas las puntas." />

      <SectionTitleX c={c}>EL TROZO COSECHADO</SectionTitleX>
      <StepX c={c} num={1} text="Si quieres replantar: deja el corte secando al aire 2-3 semanas en sombra (callusing). Después puedes plantarlo y enraizará en 2-6 meses → 2 cactus por el precio de uno." />
      <StepX c={c} num={2} text="Si vas a procesarlo: continúa a fase 'Preparación'." />

      <WarningBoxX c={c}>
        ⚠️ <strong>Conserva una parte como esqueje.</strong> Cosechar = SIEMPRE quedarse al menos 1 punta de 20-30cm aparte para replantar. Garantía de continuidad. Nunca consumas el último que tengas.
      </WarningBoxX>
    </div>
  );
}

function PREPARACION_CACTUS() {
  const c = CACTUS_COLORS;
  return (
    <div>
      <InfoBoxX c={c}>
        Preparación = limpiar y secar el cactus para conservar y consumir como tradicional. Esta guía cubre PROCESADO BÁSICO casero (sin extracción química — eso es controlado y peligroso). Tradicionalmente se consume el cactus seco molido o en infusión.
      </InfoBoxX>

      <SectionTitleX c={c}>PASO A PASO — PROCESADO BÁSICO</SectionTitleX>
      <StepX c={c} num={1} text="Lavar la columna cosechada con agua fría. Quitar tierra y restos." />
      <StepX c={c} num={2} text="Quitar las espinas: pasar el cactus por llama de mechero girándolo (las espinas se queman al instante) O cortarlas con tijeras una a una." />
      <StepX c={c} num={3} text="Cortar la columna en rodajas de 1-2cm de grosor (como un calabacín)." />
      <StepX c={c} num={4} text="Pelar la piel verde EXTERIOR (donde está la mayor concentración de mescalina). Quita 1-2mm de la capa más interior verde-clara y descarta el corazón blanco." why="La piel y la capa verde clorofílica concentran los alcaloides. El corazón blanco es agua y fibra sin valor." />
      <StepX c={c} num={5} text="Desecha el corazón blanco. Conserva las tiras verdes." />
      <StepX c={c} num={6} text="Secado: extender en bandeja con rejilla, en sitio ventilado y oscuro (sin luz directa, degrada alcaloides). Tarda 1-3 semanas hasta que esté completamente seco y quebradizo." />
      <StepX c={c} num={7} text="Una vez seco, moler en molinillo de café/especias hasta polvo fino." />
      <StepX c={c} num={8} text="Conservar en frasco hermético opaco (oscuridad), zona seca. Dura 2-5 años manteniendo potencia si está bien seco." />

      <SectionTitleX c={c}>FORMAS TRADICIONALES DE CONSUMO</SectionTitleX>
      <InfoBoxX c={c}>
        🥛 <strong>Polvo seco directo:</strong> mezclado con yogur, miel, zumo (sabor MUY amargo).<br/>
        🍵 <strong>Cocción/decocción:</strong> hervir el polvo en agua 2-4h, colar, beber el líquido. Reduce volumen y suaviza un poco.<br/>
        💊 <strong>Cápsulas:</strong> rellenar cápsulas vacías con polvo. Más fácil de tragar, evita el sabor.
      </InfoBoxX>

      <WarningBoxX c={c}>
        ⚠️ <strong>Sobre dosificación:</strong> ESTA GUÍA NO DA DOSIS porque varía mucho según especie, edad, condiciones de cultivo y persona. Investiga DOSIFICACIÓN RESPONSABLE por tu cuenta — sitios de harm reduction como Energy Control, DanceSafe, Erowid. Mescalina es muy variable; "dosis estándar" no existe sin análisis. Empieza siempre con dosis MUY baja (test de tolerancia personal) y espera 6 semanas entre experiencias significativas.
      </WarningBoxX>
    </div>
  );
}

function FAQ_CACTUS() {
  const c = CACTUS_COLORS;
  const [query, setQuery] = React.useState("");
  const faqs = [
    { q: "¿Es legal en España?", a: "Cultivar el cactus como ornamental: SÍ, 100% legal. Poseer cactus seco/triturado: zona gris (no se persigue). Extracción química de mescalina: ILEGAL (sustancia controlada). Esta guía NO da recetas de extracción." },
    { q: "¿Cuándo florece?", a: "Trichocereus florecen alrededor de los 4-6 años desde esqueje, normalmente en verano. Flores blancas grandes y fragantes que se abren de noche. Después puedes hacer polinización cruzada para semillas." },
    { q: "¿Puedo clonar mi cactus?", a: "Sí — esa es la magia. Cada vez que cosechas una punta, puedes plantarla y crear una nueva planta clónica idéntica. Un cactus de 5 años puede convertirse en 5-10 cactus en otra década." },
    { q: "¿Por qué mi cactus se vuelve amarillo?", a: "Causa probable: exceso de sol sin aclimatación, o exceso de riego. Aclimata gradualmente al sol y reduce riego." },
    { q: "¿Por qué mi cactus se ablanda en la base?", a: "PROBABLEMENTE PUDRICIÓN. Causa: exceso de agua + mal drenaje. Acción: dejar de regar inmediatamente, sacar de la maceta, examinar raíces. Si están podridas: cortar la parte sana con cuchillo esterilizado, dejar callusing 2-3 semanas, replantar en sustrato seco. Posible que pierdas la base pero salves la parte superior." },
    { q: "¿Qué hago si hiela?", a: "Bajo riesgo: Trichocereus aguantan algo de frío si están secos. Si hace -5°C húmedo = mueren. Si hace -2°C secos = sobreviven. Cubrir con plástico o meter dentro si pronostica hielo. NUNCA regar antes de hielo." },
    { q: "¿Diferencia visual entre Trichocereus reales?", a: "MUY difícil sin experiencia — varias especies parecen idénticas. Compra siempre de vendedor reputado que garantice especie. Aspecto general: San Pedro tiene 6-9 costillas con espinas pequeñas, Bolivian Torch suele tener 4-7 costillas con espinas más largas y amarillas." },
    { q: "¿Puedo cultivar peyote?", a: "Técnicamente legal en España (no está específicamente prohibido el cactus). Pero: planta extremadamente lenta (1cm/año), CITES protegida (compra ética complicada), sagrada para pueblos huicholes. Recomendación: NO. Si quieres mescalina, San Pedro/Bolivian Torch son sostenibles, rápidos y abundantes." },
    { q: "¿Diferencia mescalina vs LSD/setas?", a: "Mescalina: experiencia más LARGA (8-12h vs 4-6h de setas), más CORPORAL, más enérgica/eufórica menos visual. Reportes: experiencia 'más amigable' que setas si te llevas bien con ella. Náuseas iniciales primera hora son comunes." },
    { q: "¿Puedo combinar San Pedro con otras psicodélicas?", a: "Tradicionalmente NO. La experiencia ya es larga e intensa. Combinar = imprevisible y no recomendado. Investigado tan poco que sería irresponsable mezclar." },
    { q: "¿Riesgos de salud reales?", a: "Náusea/vómito frecuente. Hipertensión leve durante el peak. Posible diarrea. Sin riesgos serios documentados en personas sanas. Contraindicaciones: cardiopatía, problemas psiquiátricos." },
    { q: "¿Cuánto crece un San Pedro al año?", a: "30-50cm en condiciones óptimas (sol pleno, mediterráneo, riego adecuado). Más lento en interior o clima frío. Año 1: lento. Años 2+: explosivo." },
    { q: "¿Puede florecer y dar semillas?", a: "Sí, a partir de 4-6 años. Flores blancas grandes que se abren de noche (aroma fuerte). Polinización manual (pincel entre flores) → frutos con miles de semillas. Permite multiplicar." },
    { q: "¿Puedo injertar cactus en Trichocereus?", a: "Sí, técnica avanzada para acelerar crecimiento de plántulas. Plántulas injertadas crecen 5-10x más rápido. Pereskiopsis es el porta-injerto más usado. Requiere precisión quirúrgica y experiencia." },
    { q: "¿Cuánto necesito esperar tras un riego antes de fertilizar?", a: "1-2 días. Fertilizar sobre sustrato seco quema raíces. Riega primero, espera, después aplica fertilizante diluido a media dosis." },
    { q: "¿Por qué no crece mi San Pedro?", a: "Causas comunes: maceta pequeña (raíces atrapadas — trasplantar), sol insuficiente (mover a más sol gradualmente), invierno (es normal — espera primavera), sustrato compactado/agotado (cambiar)." },
    { q: "¿Las espinas son indicador de salud?", a: "Sí. Espinas robustas, regulares y firmes = cactus feliz. Espinas débiles o ausentes en zonas nuevas = falta de luz o estrés. Cambio brusco de espinosidad = aclimatación." },
    { q: "¿Diferencia clave entre San Pedro y Bolivian Torch visual?", a: "San Pedro: 6-9 costillas, espinas pequeñas, color verde más claro. Bolivian Torch: 4-7 costillas, espinas más largas y amarillas, color verde-azulado. Sin experiencia: difícil. Comprar siempre de vendedor que garantice especie." },
    { q: "¿Puedo cultivar en interior con luz LED?", a: "Sí pero crecen 50-70% más lento. Necesitas LED full-spectrum 100W+ para uno mediano. Mejor: junto a ventana sur con sol directo + LED suplementario invierno. Puro interior LED: posible pero ineficiente." },
    { q: "¿Cuánto cuesta el agua/luz/fertilizante anual?", a: "Casi nada. Cactus = bajísimo mantenimiento. Fertilizante: ~5€/año. Agua: <5€/año. Luz: 0€ (interior junto ventana). Es la planta MÁS BARATA de mantener de toda esta guía." },
  ];

  const filtered = faqs.filter(f =>
    f.q.toLowerCase().includes(query.toLowerCase()) ||
    f.a.toLowerCase().includes(query.toLowerCase())
  );

  return (
    <div>
      <InfoBoxX c={c}>
        Preguntas comunes sobre cultivo y aspectos legales/prácticos del cactus mescalina.
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
