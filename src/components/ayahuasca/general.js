// AYAHUASCA — vid Banisteriopsis caapi + arbusto Psychotria viridis
// Cultivo plantas LEGAL en España. Brebaje ZONA GRIS legal (preparación oral DMT-MAOI).

function INTRO_AYA() {
  const c = AYAHUASCA_COLORS;
  return (
    <div>
      <InfoBoxX c={c}>
        Ayahuasca = brebaje amazónico de la <GlossaryLink term="Banisteriopsis caapi">vid Banisteriopsis caapi</GlossaryLink> + hojas con <GlossaryLink term="DMT">DMT</GlossaryLink> (típicamente <GlossaryLink term="Psychotria viridis (chacruna)">Psychotria viridis</GlossaryLink>). La vid contiene IMAOs que permiten que el DMT oral sea activo (sin IMAO el estómago lo destruye). Experiencia: 4-6h profunda, visionaria, con pirgar (vómito) como parte normal.
      </InfoBoxX>

      <SectionTitleX c={c}>QUÉ HACE QUÉ</SectionTitleX>
      <div style={{ display: "grid", gap: "10px", marginBottom: "20px" }}>
        {[
          { nombre: "🌿 Caapi (vid)", aporta: <><GlossaryLink term="IMAO">IMAOs</GlossaryLink> (<GlossaryLink term="Harmina / Harmalina">harmina, harmalina</GlossaryLink>) — bloquean la enzima MAO en el estómago para que el DMT pueda llegar al cerebro. También aportan efectos propios: estado meditativo, calma, purga (limpieza física)</> },
          { nombre: "🍃 Chacruna (hojas)", aporta: <>DMT — el psicoactivo visionario. Sin IMAO sería destruido en estómago. Combinado con Caapi = experiencia oral 4-6h</> },
          { nombre: "💧 Agua + cocción larga", aporta: <>Extrae alcaloides de ambas plantas. Cocción 6-12h, varias rondas, reducción a brebaje espeso</> },
        ].map((p, i) => (
          <div key={i} style={{ background: c.bg2, border: `1px solid ${c.border1}`, borderRadius: "10px", padding: "12px" }}>
            <div style={{ fontSize: "13px", fontWeight: "bold", color: c.textBright, marginBottom: "4px" }}>{p.nombre}</div>
            <div style={{ fontSize: "12px", color: c.accent3, lineHeight: "1.6" }}>{p.aporta}</div>
          </div>
        ))}
      </div>

      <SectionTitleX c={c}>DIFERENCIA CON DMT FUMADO</SectionTitleX>
      <InfoBoxX c={c}>
        🔥 <strong>DMT fumado:</strong> intenso 5-15min, sin IMAO, "breakthrough" visionario corto.<br/>
        🍵 <strong>Ayahuasca:</strong> larga 4-6h, con IMAO, contemplativo, terapéutico tradicional, vómito habitual ("la purga").<br/><br/>
        Misma molécula psicoactiva (DMT) pero experiencias muy distintas. Ayahuasca es ritual/medicinal, DMT es exploración cortita.
      </InfoBoxX>

      <SectionTitleX c={c}>LEGALIDAD (ESPAÑA)</SectionTitleX>
      <InfoBoxX c={c}>
        ✅ Cultivar Caapi y Chacruna: 100% LEGAL (plantas ornamentales, no controladas)<br/>
        ✅ Poseer plantas secas: LEGAL<br/>
        🟡 Preparar brebaje: zona gris (DMT está en Lista I, pero no se persigue uso personal/ritual)<br/>
        🟡 Consumo en ceremonia: tolerado (Santo Daime y UDV con sentencias favorables EU)<br/>
        ❌ Comercialización del brebaje: ILEGAL<br/>
        ❌ Importación de brebaje preparado: confiscable
      </InfoBoxX>

      <WarningBoxX c={c}>
        ⚠️ <strong>NO probar sin investigar a fondo.</strong> La combinación IMAO + DMT requiere DIETA estricta días antes (sin tiramina, sin SSRI, sin estimulantes). Mezclar con medicación = SÍNDROME SEROTONÉRGICO (potencialmente mortal). Esta guía cubre cultivo + preparación; si vas a consumir, lee CADA letra de la sección "Seguridad" + investiga en Erowid + considera ceremonia con curandero experimentado primera vez.
      </WarningBoxX>

      <SectionTitleX c={c}>TIMELINE PROYECTO COMPLETO (DESDE 0)</SectionTitleX>
      <div style={{ display: "grid", gap: "8px" }}>
        {[
          { tiempo: "Día 0", evento: "🛒 Compra esquejes/plantas o semillas" },
          { tiempo: "Mes 1-3", evento: "🌱 Establecer plantas en invernadero/interior cálido" },
          { tiempo: "Año 1-2", evento: "🌿 Caapi crece rápido (3-5m), Chacruna lenta (50cm)" },
          { tiempo: "Año 2-3", evento: "✂️ Primera cosecha mínima (Caapi). Chacruna aún pequeña" },
          { tiempo: "Año 3-5", evento: "🍃 Chacruna produce hojas suficientes para 1 brebaje" },
          { tiempo: "Año 4-5+", evento: "🍵 Producción regular sostenible" },
          { tiempo: "Atajo:", evento: "🛒 Comprar plantas secas online (10-30€) — listo para 1 brebaje" },
        ].map((t, i) => (
          <div key={i} style={{ background: c.bg2, border: `1px solid ${c.border1}`, borderRadius: "8px", padding: "10px" }}>
            <div style={{ fontSize: "11px", color: c.accent1, fontWeight: "bold", letterSpacing: "1px", marginBottom: "3px" }}>{t.tiempo.toUpperCase()}</div>
            <div style={{ fontSize: "12px", color: c.accent3 }}>{t.evento}</div>
          </div>
        ))}
      </div>

      <LegalHealthBox c={c}
        legal={<>✅ Cultivo de Caapi y Chacruna como ornamentales: 100% LEGAL.<br/>✅ Posesión de plantas secas: LEGAL.<br/>🟡 Brebaje preparado uso personal: zona gris (DMT en Lista I pero uso ritual no se persigue activamente).<br/>❌ Comercializar/distribuir: ILEGAL.<br/>🇪🇺 Sentencias favorables Santo Daime + UDV en algunos países UE.</>}
        salud={<><strong>SÍNDROME SEROTONÉRGICO POTENCIALMENTE MORTAL</strong> si combinas IMAO con SSRI/MDMA/triptanes. <strong>DIETA SIN TIRAMINA</strong> obligatoria 1 semana antes (sin queso curado, vino tinto, embutidos, soja fermentada, plátanos muy maduros). Vómito durante experiencia (purga) NORMAL.</>}
        contraindicaciones={<>SSRI/IMAO/SNRI/triptanes (off-meds 4-6 SEMANAS) · Esquizofrenia/bipolar · Embarazo/lactancia · Hipertensión grave/cardiopatía · Diabetes con tiramina sensible · Otras drogas/alcohol mismo día</>}
        recursos="Erowid (sección Ayahuasca) · 'La Serpiente Cósmica' (Jeremy Narby) · Santo Daime · UDV · Anti-tóxicos: 915 620 420 · Emergencias: 112"
      />
    </div>
  );
}

function COMPRA_AYA() {
  const c = AYAHUASCA_COLORS;
  const items = [
    { item: "🌿 Esqueje Banisteriopsis caapi (cepa)", precio: "20-50€", donde: "Internet", nota: "Cepas conocidas: 'Cielo' (más visionario), 'Trueno' (más intenso/purga), 'Negro' (clásico). Esquejes enraizados online de viveros etnobotánicos europeos. 1 planta basta para empezar.", prioridad: "ESENCIAL", tipo: "Consumible" },
    { item: "🍃 Esqueje/planta Psychotria viridis", precio: "30-60€", donde: "Internet", nota: "MÁS DIFÍCIL de encontrar. Algunos viveros UE la tienen. Alternativas: Diplopterys cabrerana (chaliponga, también tiene DMT), Mimosa hostilis (corteza). Si solo encuentras una, elige Chacruna.", prioridad: "ESENCIAL", tipo: "Consumible" },
    { item: "🌳 Plantas secas (atajo sin cultivo)", precio: "15-40€", donde: "Internet", nota: "Si no quieres esperar años: Caapi triturada (50-100g) + Chacruna seca (10-30g) = 1-2 brebajes. Vendedores etnobotánicos UE. Calidad variable — lee reviews.", prioridad: "IMPORTANTE", tipo: "Consumible" },
    { item: "🪴 Maceta grande (40L+) o tierra de jardín", precio: "10-25€", donde: "Tienda física", nota: "Caapi crece rápido y necesita espacio. En climas fríos: maceta grande para mover dentro en invierno. Climas cálidos: directamente en jardín.", prioridad: "ESENCIAL", tipo: "Equipo" },
    { item: "🌡️ Termómetro/higrómetro", precio: "8-15€", donde: "Internet", nota: "Caapi y Chacruna son tropicales: 22-30°C, 60-80% humedad. Sensible al frío bajo 15°C.", prioridad: "ESENCIAL", tipo: "Equipo" },
    { item: "💧 Pulverizador agua", precio: "3-8€", donde: "Tienda física", nota: "Para mantener humedad alta — esencial para Chacruna sobre todo.", prioridad: "ESENCIAL", tipo: "Equipo" },
    { item: "🧴 Fertilizante orgánico", precio: "5-15€", donde: "Tienda física", nota: "NPK equilibrado tipo 10-10-10. Caapi quiere nitrógeno alto en crecimiento. Aplicar primavera-verano cada 2-3 semanas.", prioridad: "IMPORTANTE", tipo: "Consumible" },
    { item: "🍋 Limones / vinagre blanco", precio: "2-5€", donde: "Tienda física", nota: "Para acidificar el agua durante cocción del brebaje. El medio ácido extrae mejor los alcaloides.", prioridad: "ESENCIAL", tipo: "Consumible" },
    { item: "🍲 Olla grande (5-8L) acero inox", precio: "15-30€", donde: "Tienda física", nota: "Para cocer el brebaje varias horas. NO aluminio (reacciona con ácidos). Acero inoxidable o esmaltado.", prioridad: "ESENCIAL", tipo: "Equipo" },
    { item: "🪨 Mortero / mazo madera", precio: "5-15€", donde: "Tienda física", nota: "Para machacar la vid Caapi antes de cocer. La fibra hay que romperla bien para liberar alcaloides.", prioridad: "ESENCIAL", tipo: "Equipo" },
    { item: "🧪 Filtro tela / muselina", precio: "3-8€", donde: "Tienda física", nota: "Para colar el brebaje final. Tela fina tipo muselina o gasa de cocina.", prioridad: "ESENCIAL", tipo: "Equipo" },
    { item: "🍶 Frascos vidrio oscuro", precio: "5-15€", donde: "Tienda física", nota: "Para conservar el brebaje resultante. Oscuro = protege de luz que degrada alcaloides. 250-500ml por frasco.", prioridad: "ESENCIAL", tipo: "Equipo" },
  ];
  const [filterPrio, setFilterPrio] = React.useState([]);
  const [filterTipo, setFilterTipo] = React.useState([]);
  const [filterDonde, setFilterDonde] = React.useState([]);
  const togglePrio = (p) => setFilterPrio(s => s.includes(p) ? s.filter(x => x !== p) : [...s, p]);
  const toggleTipo = (t) => setFilterTipo(s => s.includes(t) ? s.filter(x => x !== t) : [...s, t]);
  const toggleDonde = (d) => setFilterDonde(s => s.includes(d) ? s.filter(x => x !== d) : [...s, d]);
  const filtered = items.filter(i =>
    (filterPrio.length === 0 || filterPrio.includes(i.prioridad)) &&
    (filterTipo.length === 0 || filterTipo.includes(i.tipo)) &&
    (filterDonde.length === 0 || filterDonde.includes(i.donde))
  );
  const prioColor = { "ESENCIAL": "#e88a6a", "IMPORTANTE": "#a6d3b3", "ÚTIL": "#88be99" };
  const tipoColor = { "Equipo": "#4a7e5c", "Consumible": "#6aa57e" };
  const dondeColor = { "Internet": "#88be99", "Tienda física": "#a6d3b3", "Farmacia": "#6aa57e", "Grow shop": "#4a7e5c" };
  const availableDonde = [...new Set(items.map(i => i.donde))];

  return (
    <div>
      <InfoBoxX c={c}>
        Lista para proyecto completo: cultivo + preparación. Inversión inicial 80-200€ (equipo reutilizable años). Atajo: comprar plantas secas para hacer 1-2 brebajes sin esperar cultivo.
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
      <SectionTitleX c={c}>FILTRAR POR DÓNDE COMPRAR</SectionTitleX>
      <div style={{ display: "flex", gap: "6px", marginBottom: "12px", flexWrap: "wrap" }}>
        {availableDonde.map(d => {
          const cc = dondeColor[d] || "#888";
          const active = filterDonde.includes(d);
          return (
            <button key={d} onClick={() => toggleDonde(d)} style={{
              background: active ? cc : "transparent",
              color: active ? c.bg : cc,
              border: `1.5px solid ${cc}`,
              borderRadius: "16px", padding: "5px 12px",
              fontSize: "11px", fontWeight: "bold", letterSpacing: "0.5px",
              transition: "all 0.15s",
            }}>{d}</button>
          );
        })}
      </div>
      {(filterPrio.length || filterTipo.length || filterDonde.length) > 0 && (
        <button onClick={() => { setFilterPrio([]); setFilterTipo([]); setFilterDonde([]); }} style={{
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

function CULTIVO_CAAPI() {
  const c = AYAHUASCA_COLORS;
  return (
    <div>
      <InfoBoxX c={c}>
        <GlossaryLink term="Banisteriopsis caapi">Banisteriopsis caapi</GlossaryLink> = vid trepadora amazónica. Crece RÁPIDO en clima cálido y húmedo, lenta en clima frío. Necesita tutor (caña, pared, alambre) para trepar. Una planta puede dar 50-100m de tallo en 5 años.
      </InfoBoxX>

      <SectionTitleX c={c}>CONDICIONES IDEALES</SectionTitleX>
      <div style={{ display: "grid", gridTemplateColumns: "1fr 1fr", gap: "10px", marginBottom: "20px" }}>
        <StatBoxX c={c} label="Temperatura" value="22-30°C" />
        <StatBoxX c={c} label="Humedad" value="60-80%" />
        <StatBoxX c={c} label="Luz" value="Indirecta brillante" />
        <StatBoxX c={c} label="Riego" value="Constante (no encharcar)" />
      </div>

      <SectionTitleX c={c}>PASO A PASO — DESDE ESQUEJE</SectionTitleX>
      <StepX c={c} num={1} text="Recibes esqueje enraizado o tallo de 20-30cm. Sumerge la base en agua 24h." why="Hidrata bien y activa raíces. Si es tallo sin raíz: usa hormona de enraizamiento + medio cálido (24-28°C) para enraizar 4-6 semanas." />
      <StepX c={c} num={2} text="Maceta de 20-30L, sustrato bien drenado: 50% tierra normal + 30% turba + 20% perlita. PH 5.5-6.5 (ligeramente ácido)." />
      <StepX c={c} num={3} text="Planta sin enterrar el cuello. Riego abundante. Coloca en sitio con luz indirecta brillante (NO sol directo intenso, le quema)." />
      <StepX c={c} num={4} text="Coloca un tutor o caña de 1-2m al lado. Caapi va a trepar buscando soporte." />
      <StepX c={c} num={5} text="Mes 1-3: aclimatación. Riego regular, mantener humedad alrededor con pulverizador. Crecimiento lento al principio." />
      <StepX c={c} num={6} text="Mes 3-12: explosión de crecimiento. Tallo alarga 1-3cm/día en condiciones óptimas. Necesitarás más tutores y guiar la planta." />
      <StepX c={c} num={7} text="Año 2+: la planta ya tiene 5-15m de tallo enrollado. Listo para empezar a cosechar trozos pequeños sin matarla." />

      <SectionTitleX c={c}>CLIMA TEMPLADO (ESPAÑA)</SectionTitleX>
      <InfoBoxX c={c}>
        🌞 <strong>Zona mediterránea:</strong> exterior posible mayo-octubre. Riego abundante en verano (no aguanta sequía). Invierno: meter dentro o cubrir invernadero, no soporta heladas.<br/>
        ❄️ <strong>Zona fría/húmeda:</strong> SIEMPRE interior. Junto a ventana sur con calefactor o invernadero pequeño.<br/>
        🌡️ <strong>Por debajo de 10°C:</strong> la planta entra en dormancia. Por debajo de 5°C: muere.
      </InfoBoxX>

      <SectionTitleX c={c}>COSECHA</SectionTitleX>
      <StepX c={c} num={1} text="Espera mínimo 2 años desde plantar antes de la primera cosecha significativa." />
      <StepX c={c} num={2} text="Cortar trozos de 1-2cm de grosor del tallo basal/medio (no de las puntas en crecimiento). La planta sigue creciendo desde otros nodos." />
      <StepX c={c} num={3} text="Cosechar SIEMPRE menos del 30% de la masa total. Sostenibilidad." />
      <StepX c={c} num={4} text="Pelar la corteza marrón externa con cuchillo (es la parte más rica en alcaloides). Conservar también la parte interior fibrosa." />
      <StepX c={c} num={5} text="Secar al aire en sombra ventilada 2-4 semanas. Conservar en frasco oscuro." />

      <SectionTitleX c={c}>RENDIMIENTO TÍPICO</SectionTitleX>
      <InfoBoxX c={c}>
        Para 1 brebaje (1 dosis de 250ml): necesitas ~50-100g de Caapi seca. Una planta madura (3-5 años) puede dar 200-500g de cosecha sostenible al año = 2-5 brebajes/año por planta.
      </InfoBoxX>

      <SectionTitleX c={c}>ERRORES COMUNES</SectionTitleX>
      <ErrorCardX c={c}
        error="Sol directo intenso (mediodía verano)"
        consecuencia="Hojas amarillas, quemaduras, planta debilitada."
        fix="Sombra parcial o indirecta brillante. Si exterior: mover a zona con sombra entre 12-16h."
      />
      <ErrorCardX c={c}
        error="Suelo encharcado"
        consecuencia="Pudrición de raíces. Caapi quiere humedad pero no charco."
        fix="Drenaje bueno (perlita 20%+) y maceta con agujeros generosos. Verifica que el agua sale por abajo."
      />
      <ErrorCardX c={c}
        error="Cosechar antes de tiempo"
        consecuencia="Planta debilitada, posible muerte."
        fix="Mínimo 2 años de crecimiento antes de cosecha significativa. Para producción regular: 3-4 años."
      />
    </div>
  );
}

function CULTIVO_CHACRUNA() {
  const c = AYAHUASCA_COLORS;
  return (
    <div>
      <InfoBoxX c={c}>
        <GlossaryLink term="Psychotria viridis (chacruna)">Psychotria viridis</GlossaryLink> = arbusto bajo amazónico, hojas con DMT. MUCHO MÁS DIFÍCIL de cultivar que Caapi: necesita humedad altísima, calor constante, sombra. La planta más exigente de la lista.
      </InfoBoxX>

      <SectionTitleX c={c}>CONDICIONES IDEALES</SectionTitleX>
      <div style={{ display: "grid", gridTemplateColumns: "1fr 1fr", gap: "10px", marginBottom: "20px" }}>
        <StatBoxX c={c} label="Temperatura" value="22-28°C constante" />
        <StatBoxX c={c} label="Humedad" value="80-95% (alta)" />
        <StatBoxX c={c} label="Luz" value="Sombra parcial" />
        <StatBoxX c={c} label="Riego" value="Frecuente, agua templada" />
      </div>

      <SectionTitleX c={c}>SETUP NECESARIO</SectionTitleX>
      <StepX c={c} num={1} text="Sin invernadero o terrario propio: prácticamente IMPOSIBLE. La humedad española estándar (40-60%) la mata en semanas." warning />
      <StepX c={c} num={2} text="Opciones de setup: (a) terrario grande con humidificador y calentador, (b) invernadero pequeño dedicado, (c) baño con bañera convertido en mini-jungla, (d) bajo cúpula de plástico con bandejas de agua." />
      <StepX c={c} num={3} text="Sustrato: rico en materia orgánica + drenaje. Mezcla: 40% turba + 30% tierra de bosque + 20% perlita + 10% mantillo. PH 5-6 (ácido)." />
      <StepX c={c} num={4} text="Maceta de 20-40L. Las raíces son sensibles al transplante — comprar planta ya en maceta grande mejor que mover después." />

      <SectionTitleX c={c}>CRECIMIENTO</SectionTitleX>
      <StepX c={c} num={1} text="Mes 1-6: muy lento. Algunas hojas nuevas, planta delicada. Si pierde hojas = problema (humedad, calor o luz)." />
      <StepX c={c} num={2} text="Año 1-2: crecimiento estable si condiciones son buenas. Altura 30-50cm." />
      <StepX c={c} num={3} text="Año 2-3: arbusto pleno, 50cm-1m. Empieza a producir hojas suficientes para cosechar pequeñas cantidades." />
      <StepX c={c} num={4} text="Año 3-5: producción regular. Hojas grandes y oscuras = calidad alta." />

      <SectionTitleX c={c}>COSECHA</SectionTitleX>
      <StepX c={c} num={1} text="Cosechar hojas grandes y maduras (mínimo 8cm). Dejar las jóvenes." />
      <StepX c={c} num={2} text="Cortar con tijera limpia desde el peciolo. La planta produce más en su lugar (poda estimula crecimiento)." />
      <StepX c={c} num={3} text="Cosechar máximo 30% de las hojas en cada sesión. Esperar 4-8 semanas para próxima cosecha del mismo arbusto." />
      <StepX c={c} num={4} text="Secar inmediatamente: hojas frescas se degradan rápido. Extender en bandeja, sombra ventilada, 5-10 días." />

      <SectionTitleX c={c}>RENDIMIENTO TÍPICO</SectionTitleX>
      <InfoBoxX c={c}>
        Para 1 brebaje: necesitas 10-25g de hojas SECAS. Una Chacruna madura (3+ años) puede dar 30-60g de hojas secas al año en condiciones óptimas = 1-3 brebajes/año por planta.<br/><br/>
        <strong>Conclusión:</strong> Para autosuficiencia ayahuasca necesitas 2-4 plantas Chacruna mínimo + plantas Caapi. Inversión de espacio considerable.
      </InfoBoxX>

      <SectionTitleX c={c}>ALTERNATIVAS A CHACRUNA</SectionTitleX>
      <InfoBoxX c={c}>
        Si no puedes con Chacruna, fuentes de DMT alternativas en ayahuasca:<br/>
        🌿 <strong>Diplopterys cabrerana (Chaliponga):</strong> también tiene DMT + 5-MeO-DMT. Más fácil de cultivar que Chacruna.<br/>
        🌳 <strong>Mimosa hostilis (Jurema):</strong> corteza con altísima concentración de DMT. Árbol legal cultivar. Versión brasileña: "Jurema Preta" en lugar de ayahuasca.<br/>
        🌾 <strong>Phalaris (hierba):</strong> contiene DMT pero también gramina (tóxica). NO recomendado.
      </InfoBoxX>

      <ErrorCardX c={c}
        error="Aire seco interior con calefacción"
        consecuencia="Hojas se vuelven amarillas y caen. Planta entera muere en semanas."
        fix="Humidificador 24/7 o cubierta plástica con bandejas de agua. Verificar humedad con higrómetro >70%."
      />
      <ErrorCardX c={c}
        error="Trasplante después de plantarla"
        consecuencia="Raíces sensibles + cambio de medio = la planta se va. Frecuente al primer trasplante."
        fix="Comprar en maceta GRANDE definitiva. Evitar trasplantes. Si tienes que: hacerlo en invierno, raíz intacta con cepellón."
      />
    </div>
  );
}

function CUIDADOS_AYA() {
  const c = AYAHUASCA_COLORS;
  return (
    <div>
      <InfoBoxX c={c}>
        Sección de cuidados generales: rutina diaria/semanal/anual aplicable a Caapi y Chacruna juntas. Ambas plantas tropicales = exigentes pero predecibles.
      </InfoBoxX>

      <SectionTitleX c={c}>RUTINA SEMANAL</SectionTitleX>
      <StepX c={c} num={1} text="Verificar humedad de sustrato (dedo en tierra). Caapi: regar cuando 2cm superiores estén secos. Chacruna: nunca dejar secarse." />
      <StepX c={c} num={2} text="Pulverizar hojas 1-2x/día con agua templada. Especialmente en clima seco (calefacción)." />
      <StepX c={c} num={3} text="Inspeccionar plagas: cochinillas (motas blancas algodonosas en envés), arañas rojas (telarañas finas, hojas con motas amarillas), thrips (rayas plateadas en hojas)." />
      <StepX c={c} num={4} text="Rotar la maceta 90° cada 2 semanas para crecimiento simétrico." />

      <SectionTitleX c={c}>CICLO ANUAL</SectionTitleX>
      <StepX c={c} num={1} text="🌸 Marzo-Mayo: arranque. Aumentar riego, primer fertilización con orgánico." />
      <StepX c={c} num={2} text="🌞 Junio-Septiembre: crecimiento explosivo. Fertilizar cada 2-3 semanas. Trasplante posible si necesitas." />
      <StepX c={c} num={3} text="🍂 Octubre: reducir fertilizante. Última cosecha del año si vas a hacer." />
      <StepX c={c} num={4} text="❄️ Noviembre-Febrero: bajo crecimiento. Mantener cálido y húmedo. NO fertilizar. Riego mínimo (Caapi seco entre riegos, Chacruna ligeramente húmeda)." />

      <SectionTitleX c={c}>PROBLEMAS COMUNES</SectionTitleX>
      <ErrorCardX c={c}
        error="Hojas amarillas que caen"
        consecuencia="Síntoma de varios problemas: exceso/falta de agua, baja humedad, falta de nutrientes, raíces estresadas."
        fix="Diagnóstico: si tierra empapada → menos riego. Si seca → más riego. Si ambiente seco → pulverizar. Si lleva tiempo sin fertilizar → fertilizar."
      />
      <ErrorCardX c={c}
        error="Crecimiento parado en verano"
        consecuencia="Probablemente raíces atascadas en la maceta. La planta no puede crecer más sin más espacio."
        fix="Trasplante a maceta más grande. Caapi adulta puede necesitar maceta de 50-100L."
      />
      <ErrorCardX c={c}
        error="Cochinillas en hojas/tallos"
        consecuencia="Plaga chupadora que debilita la planta. Se reproducen rápido."
        fix="Limpiar cada cochinilla con bastoncillo + alcohol 70%. Tratamiento sistémico con jabón potásico (5ml/L) cada semana hasta eliminación. Aislar planta del resto."
      />
    </div>
  );
}

function PREPARACION_BREBAJE() {
  const c = AYAHUASCA_COLORS;
  return (
    <div>
      <InfoBoxX c={c}>
        Cocción tradicional. 6-12 horas, 2-4 rondas, reducción a brebaje espeso. Olor MUY intenso (vecinos pueden notar — abrir ventanas o cocinar al aire libre). Sabor amargo brutal.
      </InfoBoxX>

      <SectionTitleX c={c}>RECETA BASE — 1 DOSIS (250ml)</SectionTitleX>
      <InfoBoxX c={c}>
        🌿 50-100g de Caapi seca y machacada<br/>
        🍃 15-30g de Chacruna seca o 10-20g de Mimosa hostilis (corteza)<br/>
        💧 4-6L de agua<br/>
        🍋 Zumo de 1-2 limones (acidifica)<br/>
        ⏱️ Tiempo total: 8-12 horas (cocción + reducción)
      </InfoBoxX>

      <SectionTitleX c={c}>PASO A PASO</SectionTitleX>
      <StepX c={c} num={1} text="Machacar la Caapi: usar mortero o martillo + tabla. Romper la fibra del tallo en hilos pequeños. Cuanto más machacada, mejor extracción." />
      <StepX c={c} num={2} text="En la olla: poner la Caapi machacada. Cubrir con 2L de agua + zumo de 1 limón. Llevar a hervor suave." />
      <StepX c={c} num={3} text="Cocer la Caapi sola las primeras 2-3 horas. Mantener hervor suave (NO fuerte — destruye alcaloides). Tapa puesta para no perder agua." why="La cocción extrae los IMAOs (harmina, harmalina) de la fibra. Largo tiempo = más extracción." />
      <StepX c={c} num={4} text="A las 3 horas: añadir las hojas de Chacruna desmenuzadas + zumo de 1 limón más + 1L de agua. Continuar hervor suave 3-6 horas más." />
      <StepX c={c} num={5} text="Verificar nivel de agua cada 30 min. Si baja, añadir 250ml. Mantener volumen constante." />
      <StepX c={c} num={6} text="A las 8-9 horas totales: colar el contenido de la olla con muselina/gasa. Reservar el líquido en un cuenco." />
      <StepX c={c} num={7} text="Triple cocción (opcional pero recomendado): poner las plantas usadas de nuevo en la olla con 2L de agua nueva + medio limón. Cocer 2-3 horas más. Colar y juntar líquido con el anterior." why="Cada cocción extrae 30-40% de los alcaloides. Tres cocciones = ~90% extracción." />
      <StepX c={c} num={8} text="Reducción final: vierte todo el líquido en olla limpia. Hervir suave SIN tapa hasta que el volumen baje a 250-500ml total. Esto puede tardar 2-4 horas más." />
      <StepX c={c} num={9} text="Brebaje listo: líquido marrón oscuro espeso, casi como sirope. Olor herbal terroso." />
      <StepX c={c} num={10} text="Dejar enfriar. Verter en frascos vidrio oscuro. Conservar en nevera (1-2 semanas) o congelador (3-6 meses)." />

      <SectionTitleX c={c}>DOSIFICACIÓN</SectionTitleX>
      <InfoBoxX c={c}>
        ⚠️ Variabilidad ALTA — depende de cepa de Caapi, calidad de Chacruna, tu eficiencia de cocción. NO hay dosis "estándar".<br/><br/>
        🥄 <strong>Dosis novato:</strong> 50-100ml del brebaje preparado. Empieza BAJO. Evalúa efectos a las 2h.<br/>
        🥄 <strong>Dosis estándar:</strong> 100-200ml.<br/>
        🥄 <strong>Dosis fuerte:</strong> 200-300ml.<br/><br/>
        Si después de 90 min no sientes nada significativo, puedes tomar 50ml más. NO tomar más después de la primera hora si ya sientes efectos.
      </InfoBoxX>

      <ErrorCardX c={c}
        error="Hervir fuerte (burbujeo violento) durante horas"
        consecuencia="Destrucción de alcaloides por calor excesivo. Brebaje más débil de lo esperado."
        fix="Hervor SUAVE (burbujeo apenas perceptible). 80-90°C es suficiente para extraer."
      />
      <ErrorCardX c={c}
        error="Olla de aluminio"
        consecuencia="Aluminio reacciona con ácidos (limón) y libera al brebaje. Sabor metálico, posible toxicidad."
        fix="Solo acero inoxidable o esmaltado. Vidrio resistente al calor también."
      />
      <ErrorCardX c={c}
        error="Olvidar el limón / no acidificar"
        consecuencia="Extracción mucho menor. Brebaje débil."
        fix="El medio ácido es CRÍTICO para extraer alcaloides. Limón o vinagre obligatorio."
      />
    </div>
  );
}

function CEREMONIA_AYA() {
  const c = AYAHUASCA_COLORS;
  return (
    <div>
      <InfoBoxX c={c}>
        Ayahuasca tradicional NO es recreativa. Es ceremonial. La preparación previa (set, dieta) es tan importante como el brebaje. Ignorar esto = experiencia muy desagradable o peligrosa.
      </InfoBoxX>

      <SectionTitleX c={c}>DIETA PREVIA — 1 SEMANA ANTES</SectionTitleX>
      <WarningBoxX c={c}>
        ⚠️ <strong>SIN ESTOS ALIMENTOS</strong> (interactúan peligrosamente con IMAO):<br/>
        ❌ Quesos curados/añejos<br/>
        ❌ Embutidos/carne curada<br/>
        ❌ Pescado ahumado/salazón<br/>
        ❌ Vinos tintos/cerveza<br/>
        ❌ Soja fermentada (miso, salsa soja)<br/>
        ❌ Chucrut, kimchi, alimentos fermentados con tiramina<br/>
        ❌ Plátanos muy maduros, aguacate maduro<br/>
        ❌ Café/cafeína (al menos 24h antes)<br/>
        ❌ Chocolate negro<br/>
        ❌ Cualquier antidepresivo SSRI/IMAO/MAOI (mínimo 4-6 semanas off-meds antes)
      </WarningBoxX>

      <SectionTitleX c={c}>DIETA RECOMENDADA</SectionTitleX>
      <InfoBoxX c={c}>
        ✅ Verduras frescas no fermentadas<br/>
        ✅ Carne FRESCA (recién comprada, cocinada)<br/>
        ✅ Frutas FRESCAS (no muy maduras)<br/>
        ✅ Arroz, quinoa, legumbres frescas<br/>
        ✅ Agua, infusiones suaves (no té negro)<br/>
        ✅ Última comida 6-8h ANTES del brebaje (estómago vacío)
      </InfoBoxX>

      <SectionTitleX c={c}>SET (PREPARACIÓN MENTAL)</SectionTitleX>
      <InfoBoxX c={c}>
        El concepto de <GlossaryLink term="Set & Setting">set & setting</GlossaryLink> es fundamental — más del 50% de la experiencia depende de tu estado mental + entorno físico, más que del brebaje en sí.
      </InfoBoxX>
      <StepX c={c} num={1} text="Define tu intención: ¿por qué tomas ayahuasca? ¿Qué quieres procesar/explorar? Escríbelo." />
      <StepX c={c} num={2} text="Días previos: meditar, journaling, evitar conflictos, preparar mentalmente." />
      <StepX c={c} num={3} text="No tomar si: estás en crisis emocional aguda, depresión severa, paranoia activa, embarazo, lactancia, hay diagnóstico psiquiátrico (esquizofrenia, bipolar)." warning />

      <SectionTitleX c={c}>SETTING (ENTORNO)</SectionTitleX>
      <StepX c={c} num={1} text="Sitio: tranquilo, oscuro o luz tenue, cómodo (cojín, manta, colchón en suelo)." />
      <StepX c={c} num={2} text="Tener cerca: cubo para vómito (la 'purga' es habitual), papel/toallitas, agua, ropa cómoda extra." />
      <StepX c={c} num={3} text="Música: tradicional con icaros (cantos chamánicos amazónicos), música ambient, o silencio. NO música familiar/conocida (te saca de la experiencia)." />
      <StepX c={c} num={4} text="Sin distracciones: móvil apagado, redes off, sin TV, sin nada conocido." />
      <StepX c={c} num={5} text="Bloquear 8-10h sin compromisos. Idealmente fin de semana." />

      <SectionTitleX c={c}>SITTER (ACOMPAÑANTE)</SectionTitleX>
      <InfoBoxX c={c}>
        Una persona SOBRIA (<GlossaryLink term="Sitter / Acompañante">sitter</GlossaryLink>) durante toda la sesión. Funciones:<br/>
        🤝 Tranquilizar si hay pánico (recordar "esto pasa en horas")<br/>
        🚰 Asegurar agua, manta si frío, cubo si vómito<br/>
        🚨 Llamar emergencias si hay reacción física grave (ratísimo)<br/>
        👁️ NO interrumpir tu experiencia. NO conversar contigo. Solo presencia silenciosa.<br/><br/>
        Idealmente: alguien que ya haya tomado ayahuasca o que entienda harm reduction.
      </InfoBoxX>

      <SectionTitleX c={c}>FASES DE LA EXPERIENCIA</SectionTitleX>
      <div style={{ display: "grid", gap: "8px", marginBottom: "20px" }}>
        {[
          { tiempo: "0-30 min", fase: "Toma del brebaje. Sabor amargo intenso. Posible naúsea inicial." },
          { tiempo: "30-60 min", fase: "Inicio de efectos: estado meditativo, ligera distorsión. Posible primer vómito (purga)." },
          { tiempo: "1-2 h", fase: "PICO. Visiones cerradas (ojos cerrados), introspección profunda, posibles emociones intensas." },
          { tiempo: "2-4 h", fase: "Descenso gradual. Insights, integración. Estado contemplativo." },
          { tiempo: "4-6 h", fase: "Final. Cansancio físico, claridad mental, sensación de 'limpieza'." },
          { tiempo: "Día siguiente", fase: "Glow afterglow. Procesamiento de la experiencia. Importante journaling." },
          { tiempo: "Días 2-7", fase: "Integración profunda. Reflexionar sobre insights, hablar con sitter o terapeuta. Evitar grandes decisiones impulsivas." },
        ].map((t, i) => (
          <div key={i} style={{ background: c.bg2, border: `1px solid ${c.border1}`, borderRadius: "8px", padding: "10px" }}>
            <div style={{ fontSize: "11px", color: c.accent1, fontWeight: "bold", letterSpacing: "1px", marginBottom: "3px" }}>{t.tiempo.toUpperCase()}</div>
            <div style={{ fontSize: "12px", color: c.accent3 }}>{t.fase}</div>
          </div>
        ))}
      </div>

      <SectionTitleX c={c}>SOBRE LA PURGA (VÓMITO)</SectionTitleX>
      <InfoBoxX c={c}>
        Vomitar durante ayahuasca es NORMAL y considerado tradicional como "limpieza". NO significa que vaya mal. La harmina del Caapi es naturalmente emética. Se llama "la purga". Después de vomitar la mayoría siente alivio y profundización de la experiencia. Cubo cerca, esperar, después beber agua a sorbitos.
      </InfoBoxX>
    </div>
  );
}

function HARM_REDUCTION_AYA() {
  const c = AYAHUASCA_COLORS;
  return (
    <div>
      <InfoBoxX c={c}>
        Sección crítica. Ayahuasca tiene RIESGOS REALES por la combinación IMAO + DMT. La mayoría de muertes asociadas a ayahuasca son por interacciones con medicación o alimentos, NO por la sustancia en sí.
      </InfoBoxX>

      <WarningBoxX c={c}>
        ⚠️ <strong>SÍNDROME SEROTONÉRGICO</strong><br/>
        Causa: combinar ayahuasca con SSRI, IMAO, triptanes, MDMA, cocaína, opiáceos, etc.<br/>
        Síntomas: temblores incontrolables, hipertermia, taquicardia, confusión, convulsiones.<br/>
        Riesgo: <strong>POTENCIALMENTE MORTAL</strong>.<br/>
        Prevención: 4-6 SEMANAS off-medication antes de ayahuasca. Si tomas medicación = NO tomar ayahuasca sin consultar profesional.
      </WarningBoxX>

      <SectionTitleX c={c}>CONTRAINDICACIONES ABSOLUTAS</SectionTitleX>
      <ErrorCardX c={c}
        error="Antidepresivos SSRI / IMAO / SNRI"
        consecuencia="Síndrome serotonérgico. Riesgo grave."
        fix="Off-meds 4-6 semanas mínimo (consultar médico). NUNCA tomar ayahuasca con medicación serotonérgica activa."
      />
      <ErrorCardX c={c}
        error="Diagnóstico psiquiátrico (esquizofrenia, bipolar)"
        consecuencia="Posible activación de episodios psicóticos. Algunas personas no recuperan estabilidad mental tras experiencia."
        fix="No tomar. Aunque tengas curiosidad."
      />
      <ErrorCardX c={c}
        error="Embarazo y lactancia"
        consecuencia="Sin estudios de seguridad. Riesgo para feto/bebé."
        fix="No tomar."
      />
      <ErrorCardX c={c}
        error="Problemas cardiovasculares (hipertensión, arritmia)"
        consecuencia="Ayahuasca eleva presión arterial. Riesgo cardíaco."
        fix="Consultar cardiólogo. Si hipertensión controlada con medicación: NO tomar."
      />
      <ErrorCardX c={c}
        error="Otras drogas/alcohol mismo día"
        consecuencia="Combinaciones impredecibles, mayor riesgo de eventos adversos."
        fix="Sobrio mínimo 24h antes. NO mezclar."
      />

      <SectionTitleX c={c}>PRIMERA VEZ — RECOMENDACIONES</SectionTitleX>
      <StepX c={c} num={1} text="Considera ceremonia con curandero/facilitador con experiencia. Hay grupos en España que organizan (Santo Daime, UDV, ceremonias neo-chamánicas)." />
      <StepX c={c} num={2} text="Si haces casero: dosis BAJA (50-75ml). Sitter SOBRIO con experiencia." />
      <StepX c={c} num={3} text="Día siguiente y semana posterior: bloquear tiempo para integración. NO trabajo demandante, NO decisiones grandes." />
      <StepX c={c} num={4} text="Escribir journaling sobre la experiencia. Hablar con sitter sobre lo que viste/sentiste." />
      <StepX c={c} num={5} text="No repetir hasta MÍNIMO 1 mes. Idealmente 3 meses entre experiencias." why="Tolerancia + integración: la psique necesita tiempo para procesar. Repeticiones rápidas pierden efecto y pueden causar problemas." />

      <SectionTitleX c={c}>SI ALGO VA MAL</SectionTitleX>
      <InfoBoxX c={c}>
        🤢 <strong>Vómito intenso/diarrea:</strong> NORMAL. Hidratación a sorbitos, esperar.<br/>
        😰 <strong>Pánico/ansiedad:</strong> Cambio de música, sitter habla suave, recordar "pasará en horas". Respiración lenta.<br/>
        💔 <strong>Síntomas físicos extremos</strong> (rigidez muscular, fiebre alta, temblores violentos, dolor de pecho, dificultad respirar): URGENCIAS YA. Llevar info de qué tomó (ayahuasca + lista ingredientes).<br/>
        ⏰ Llamada anti-tóxicos España: <strong>915 620 420</strong> (24h).<br/>
        🆘 Emergencias: <strong>112</strong>.
      </InfoBoxX>
    </div>
  );
}

function FAQ_AYA() {
  const c = AYAHUASCA_COLORS;
  const [query, setQuery] = React.useState("");
  const faqs = [
    { q: "¿Es legal en España?", a: "Cultivo de plantas: SÍ. Posesión de plantas secas: SÍ. Brebaje preparado para uso personal: zona gris (DMT está en Lista I pero no se persigue uso ritual personal). Comercializar/distribuir: ILEGAL. Hay sentencias favorables al Santo Daime y la UDV (uso religioso) en algunos países EU." },
    { q: "¿Puedo ir a una ceremonia en España?", a: "Sí. Hay grupos: Santo Daime (registrado como religión en algunos países), UDV (União do Vegetal), y muchas ceremonias neo-chamánicas no oficiales. Buscar referencias de personas con buena reputación. CUIDADO con falsos chamanes — investiga antes." },
    { q: "¿Se puede combinar Caapi con setas Psilocybe?", a: "Tradicional en algunas tribus. Combinar potencia las setas (IMAO bloquea destrucción de psilocibina). Resultado: experiencia más larga, más visionaria. Riesgo: dosis difícil de controlar. NO recomendado para principiantes." },
    { q: "¿Qué pasa si tomo poco brebaje?", a: "Posible que no sientas efectos significativos. NO tomar más durante la primera hora — la curva de efectos es lenta. Si después de 90 min no sientes casi nada, puedes tomar 50ml extra. Después: esperar." },
    { q: "¿Por qué la dieta restrictiva es tan importante?", a: "Los IMAOs del Caapi bloquean la enzima MAO en tu estómago/intestino. Esa enzima normalmente descompone tiramina (en quesos curados, vinos, etc.). Sin MAO funcionando, la tiramina entra masivamente al torrente sanguíneo → pico hipertensivo → posible accidente cerebrovascular. NO ES UNA EXAGERACIÓN." },
    { q: "¿Cuánto dura el efecto comparado con otras psicodélicas?", a: "Ayahuasca: 4-6h. LSD: 8-12h. Setas: 4-6h. Mescalina: 8-12h. DMT fumado: 5-15 min. Ayahuasca tiene duración media pero ES DIFERENTE — más introspectiva, más terapéutica, con la purga característica." },
    { q: "¿Es adictiva?", a: "No físicamente. Tampoco psicológicamente típica — la experiencia es lo suficientemente intensa que la mayoría no quiere repetir frecuentemente. Hay 'turismo ayahuasquero' patológico (gente que va de ceremonia en ceremonia buscando insight) pero no es adicción química." },
    { q: "¿Puedo cultivar Caapi en piso pequeño?", a: "Difícil pero posible. Caapi necesita TUTOR vertical de 2m+. Una pared con alambres o caña vertical en una maceta puede bastar. Chacruna sí necesita más espacio + humedad alta." },
    { q: "¿Cómo conservo el brebaje preparado?", a: "Frasco vidrio oscuro hermético. Nevera: 1-2 semanas. Congelador: 3-6 meses (potencia se mantiene). Temperatura ambiente: 3-7 días si está MUY reducido (alta concentración de alcaloides actúa como conservante)." },
    { q: "¿Diferencia entre Caapi 'Cielo', 'Trueno' y 'Negro'?", a: "Cepas de Banisteriopsis caapi con diferente perfil:\n- Cielo: más visionario, suave, recomendado novatos\n- Trueno: más intenso, mayor purga, para experimentados\n- Negro: tradicional, equilibrado\nDifícil verificar autenticidad — comprar de vendedor reputado." },
    { q: "¿Por qué casi todos vomitan?", a: "La harmina del Caapi es naturalmente emética. La 'purga' es considerada parte sagrada en tradición — limpieza física + emocional. NO significa que vaya mal. Tras vomitar la mayoría siente alivio y la experiencia se profundiza." },
    { q: "¿Una sola experiencia me cambiará la vida?", a: "Probablemente NO. La experiencia da insights, pero el cambio real viene de la INTEGRACIÓN posterior — reflexión, journaling, posible terapia. Sin integración los insights se desvanecen en semanas." },
    { q: "¿Diferencia con yagé?", a: "Yagé = nombre indígena ecuatoriano/colombiano para ayahuasca, suele incluir Diplopterys cabrerana (Chaliponga) en lugar de Chacruna como fuente de DMT." },
    { q: "¿Niños indígenas la toman?", a: "En algunas tribus amazónicas sí, ceremonialmente, en pequeñas dosis. Distinto contexto cultural. NO recomendado para menores en contexto occidental." },
    { q: "¿Es la ayahuasca adictiva?", a: "No físicamente — sin dependencia documentada. Tampoco psicológicamente típica: la experiencia es lo suficientemente intensa que la mayoría no quiere repetir frecuentemente. Hay 'turismo ayahuasquero' patológico (gente que va de ceremonia en ceremonia buscando insight) pero no es adicción química." },
    { q: "¿Qué tan caro sale hacer una ceremonia en España?", a: "Ceremonias organizadas con curandero/facilitador: 100-300€ por sesión (incluye brebaje + acompañamiento). Casero (cultivo + brebaje): inversión inicial 80-200€, después 20-30€/dosis (recomprar plantas si no cultivas). Santo Daime/UDV: donaciones según grupo." },
    { q: "¿Hay diferencia entre 'ayahuasca' y 'yagé'?", a: "Yagé = nombre indígena ecuatoriano/colombiano. Suele incluir Diplopterys cabrerana (Chaliponga) en lugar de Chacruna como fuente de DMT. Misma idea (IMAO + DMT) pero perfil ligeramente distinto (más visual, más rápido peak). Ayahuasca = nombre quechua peruano." },
    { q: "¿Cuál es la base científica de los IMAOs naturales?", a: "Investigaciones desde 1957: harmina, harmalina, tetrahidroharmina son MAOI selectivos REVERSIBLES (a diferencia de los MAOIs farmacéuticos como fenelzina que son irreversibles). Esto explica que el efecto sea más manejable y predecible. La β-carbolina del Caapi también tiene actividad psicoactiva propia (sedante + antidepresiva)." },
    { q: "¿Por qué Chacruna específicamente y no otra planta?", a: "Tradición + biodisponibilidad. Chacruna tiene una proporción específica de alcaloides que combina bien con Caapi. Otras plantas con DMT (Mimosa, Acacia) requieren más cantidad y dan perfiles distintos. Chacruna es la opción 'clásica' por razones culturales + farmacológicas." },
    { q: "¿Es seguro mezclar ayahuasca con cannabis?", a: "GRIS. Cannabis amplifica ansiedad — durante peak puede gatillar pánico. Algunos lo combinan tras peak para integración. Si propenso a paranoia: NO mezclar. Si ya hace tiempo que usas ambos: empezar sin cannabis primera vez." },
    { q: "¿Qué hago durante el peak si estoy abrumado?", a: "(1) Aceptar la experiencia: 'lo que pase, pasará'. La resistencia empeora. (2) Respiración lenta profunda. (3) Cambiar entorno: música, luz tenue, posición. (4) Hablar con sitter: una palabra puede anclar. (5) Recordar: 'esto pasa en horas'. (6) Si pánico extremo: trip killer (benzodiacepina) — pero rara vez necesario." },
    { q: "¿Cómo elijo facilitador/curandero confiable?", a: "Buscar referencias de personas que ya hayan ido. Verificar formación en preparación de brebaje + acompañamiento. Chequear si ofrecen INTEGRACIÓN posterior (no solo ceremonia). Evitar grupos con sectarismo o que prohíben otros grupos. Investigar online (Reddit, foros). Idealmente probar primero ceremonia pequeña antes de retiro largo." },
    { q: "¿Puedo combinar Caapi con setas Psilocybe?", a: "Tradicional en algunas tribus. Combinar potencia las setas (IMAO bloquea destrucción de psilocibina). Resultado: experiencia más larga, más visionaria. Riesgo: dosis difícil de controlar. NO recomendado para principiantes." },
    { q: "¿Qué dieta exacta sigo antes?", a: "Día -7 hasta día 0: SIN tiramina (queso curado, vino tinto, embutidos curados, soja fermentada, pescado salazón, plátano muy maduro, aguacate maduro, chocolate negro, cacao). SIN café/cafeína 24h antes. Última comida 6-8h antes (estómago vacío). Sí: verduras frescas, carne fresca, frutas frescas, agua." },
    { q: "¿La ayahuasca cura depresión?", a: "Estudios clínicos preliminares (Brasil 2014-2020) mostraron resultados prometedores en depresión resistente. UN solo curso de ayahuasca + terapia de integración produjo mejoras significativas en escalas de depresión. NO es 'cura mágica' — funciona en contexto de psicoterapia, set/setting, integración. Investigación en curso." },
  ];

  const filtered = faqs.filter(f =>
    f.q.toLowerCase().includes(query.toLowerCase()) ||
    f.a.toLowerCase().includes(query.toLowerCase())
  );

  return (
    <div>
      <InfoBoxX c={c}>
        Preguntas comunes sobre ayahuasca. Recursos: Erowid (sección Ayahuasca), libros de Jeremy Narby ("La Serpiente Cósmica"), Santo Daime registros oficiales, foros r/ayahuasca.
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
