// DMT — N,N-Dimetiltriptamina
// Cultivo de Mimosa hostilis = LEGAL. Extracción química = ILEGAL en España.
// Esta guía cubre cultivo + información educativa. NO da recetas paso-a-paso de extracción.

function INTRO_DMT({ setPhase }) {
  const c = DMT_COLORS;
  return (
    <div>
      <InfoBoxX c={c}>
        DMT (N,N-Dimetiltriptamina) = molécula psicodélica natural presente en cientos de plantas y animales. Endógena al cuerpo humano (la pineal puede producirla). Cuando se fuma cristal aislado: experiencia 5-15 min de "breakthrough" visionario extremo. Cuando se toma oral con IMAO (ayahuasca): 4-6h.
      </InfoBoxX>

      <SectionTitleX c={c}>FORMAS DE CONSUMO DE DMT</SectionTitleX>
      <div style={{ display: "grid", gap: "10px", marginBottom: "20px" }}>
        {[
          { forma: "💨 Fumado (cristal)", duracion: "5-15 min", intensidad: "EXTREMA — breakthrough", legal: "Cristal puro = ILEGAL" },
          { forma: "🌿 Changa (planta + DMT)", duracion: "20-40 min", intensidad: "ALTA pero más manejable", legal: "Misma sustancia" },
          { forma: "🍵 Ayahuasca (oral con IMAO)", duracion: "4-6 h", intensidad: "MEDIA-ALTA, contemplativa", legal: "Brebaje = zona gris" },
          { forma: "👃 Snortado (rapé Yopo)", duracion: "30-60 min", intensidad: "ALTA, corta", legal: "Polvo = puede ser ilegal" },
        ].map((f, i) => (
          <div key={i} style={{ background: c.bg2, border: `1px solid ${c.border1}`, borderRadius: "10px", padding: "12px" }}>
            <div style={{ fontSize: "13px", fontWeight: "bold", color: c.textBright, marginBottom: "4px" }}>{f.forma}</div>
            <div style={{ fontSize: "11px", color: c.accent2, marginBottom: "3px" }}>⏱️ {f.duracion}</div>
            <div style={{ fontSize: "11px", color: c.accent2, marginBottom: "3px" }}>💊 {f.intensidad}</div>
            <div style={{ fontSize: "11px", color: c.accent2 }}>⚖️ {f.legal}</div>
          </div>
        ))}
      </div>

      <SectionTitleX c={c}>LEGALIDAD ESPAÑA</SectionTitleX>
      <InfoBoxX c={c}>
        ✅ Cultivar plantas con DMT (Mimosa hostilis, Acacia, etc.): LEGAL como ornamentales<br/>
        ✅ Poseer plantas secas: LEGAL<br/>
        🟡 Brebaje ayahuasca uso personal: zona gris<br/>
        ❌ Extracción química casera de DMT puro: ILEGAL (Lista I sustancias controladas)<br/>
        ❌ Posesión de DMT cristalizado: ILEGAL<br/>
        ❌ Comercialización: ILEGAL<br/><br/>
        Esta guía cubre lo legal: cultivo de plantas y referencia educativa al proceso. NO da recetas químicas.
      </InfoBoxX>

      <WarningBoxX c={c}>
        ⚠️ <strong>DMT FUMADO ES INTENSO.</strong> Es probablemente la experiencia psicodélica más fuerte conocida. NO recreativo en sentido fiestero. Requiere preparación mental, <GlossaryLink term="Set & Setting">set/setting</GlossaryLink>, y MUCHO respeto. Primera vez = posible <GlossaryLink term="Breakthrough">"breakthrough"</GlossaryLink> que muchos describen como "encontrarse con entidades". No es para todo el mundo. Investiga antes en Erowid.
      </WarningBoxX>

      <SectionTitleX c={c}>TIMELINE PROYECTO COMPLETO</SectionTitleX>
       <TimelineList c={c} onClick={(node) => setPhase(node.phase)} nodes={[
        { tiempo: "Día 0", evento: "🛒 Comprar semillas/esquejes Mimosa hostilis", phase: "compra_dmt", color: c.accent1 },
        { tiempo: "Mes 1-3", evento: "🌱 Germinación + plantación inicial", phase: "cultivo_mimosa", color: c.accent2 },
        { tiempo: "Año 1-2", evento: "🌳 Crecimiento (climas cálidos rápido, fríos lento)", phase: "cultivo_mimosa", color: c.accent3 },
        { tiempo: "Año 3-5", evento: "🪵 Cosecha de corteza posible (raíz)", phase: "cultivo_mimosa", color: c.accent4, highlight: true },
        { tiempo: "Atajo:", evento: "🛒 Comprar corteza Mimosa Hostilis (MHRB) seca online (legal en EU)", phase: "compra_dmt", color: c.accent5 },
      ]} />

      <LegalHealthBox c={c}
        legal={<>✅ Cultivo de Mimosa hostilis, Acacia confusa: 100% LEGAL como ornamentales.<br/>✅ Posesión de plantas/corteza secas: LEGAL (MHRB se vende como tinte natural).<br/>🟡 Brebaje ayahuasca uso personal: zona gris.<br/>❌ Extracción química DMT puro: ILEGAL (Lista I).<br/>❌ Posesión cristal DMT: ILEGAL.<br/>❌ Comercializar: ILEGAL.</>}
        salud={<>Experiencia 5-15 min fumado, intensidad EXTREMA. Posible <GlossaryLink term="Breakthrough">breakthrough</GlossaryLink> abrumador. Bad trips/pánico real si no preparado. <GlossaryLink term="HPPD">HPPD</GlossaryLink> raro con uso frecuente. Físicamente seguro (no daña órganos) pero PSICOLÓGICAMENTE DEMANDANTE.</>}
        contraindicaciones={<>SSRI/IMAO/antidepresivos · Esquizofrenia/bipolar/paranoia (riesgo episodios psicóticos) · Embarazo/lactancia · Estado mental inestable · Otras drogas mismo día · Mezclar con cannabis si propenso a paranoia</>}
        recursos="Erowid (DMT) · 'DMT: The Spirit Molecule' (Strassman) · Hamilton's Pharmacopeia · MAPS · Anti-tóxicos: 915 620 420"
      />
    </div>
  );
}

function FUENTES_DMT() {
  const c = DMT_COLORS;
  return (
    <div>
      <InfoBoxX c={c}>
        DMT está en cientos de plantas. Las más usadas: <GlossaryLink term="Mimosa hostilis (Jurema)">Mimosa hostilis</GlossaryLink> (corteza, brasileña), Acacia confusa (corteza, taiwanesa), <GlossaryLink term="Psychotria viridis (chacruna)">Chacruna</GlossaryLink> (hojas, amazónica). Concentración varía mucho por especie.
      </InfoBoxX>

      <SectionTitleX c={c}>PRINCIPALES FUENTES VEGETALES</SectionTitleX>
      <div style={{ display: "grid", gap: "10px", marginBottom: "20px" }}>
        {[
          { nombre: "🌳 Mimosa hostilis (tenuiflora)", parte: "Corteza de raíz (MHRB)", concent: "0.5-1.5% DMT (alta)", origen: "Brasil/México", recomendado: "✅ MEJOR para extracción casera. Más concentración por gramo. Cultivable en clima cálido. Corteza seca legal de comprar online en EU como tinte natural." },
          { nombre: "🌳 Acacia confusa", parte: "Corteza de raíz (ACRB)", concent: "1-2% DMT (alta)", origen: "Taiwán", recomendado: "Alternativa similar a Mimosa. Más difícil de conseguir en EU. Cultivo posible pero menos común." },
          { nombre: "🍃 Psychotria viridis (chacruna)", parte: "Hojas", concent: "0.1-0.6% DMT (media)", origen: "Amazonas", recomendado: "Para ayahuasca tradicional. Cultivo difícil (humedad altísima). Para extracción: necesitas mucho material." },
          { nombre: "🌿 Diplopterys cabrerana (chaliponga)", parte: "Hojas", concent: "1-2% DMT + 5-MeO-DMT (alta)", origen: "Amazonas", recomendado: "Cultivo más fácil que chacruna. Contiene también 5-MeO-DMT (más intenso, controvertido)." },
          { nombre: "🌾 Phalaris arundinacea/aquatica", parte: "Hierba (pasto)", concent: "0.1-1% DMT + gramina TÓXICA", origen: "Mediterráneo", recomendado: "❌ NO RECOMENDADO. La gramina y otros alcaloides son tóxicos. Crece silvestre pero no vale la pena el riesgo." },
          { nombre: "🌳 Phalaris brachystachys", parte: "Hierba", concent: "Variable, también gramina", origen: "Europa Sur", recomendado: "❌ Mismo problema." },
          { nombre: "🌳 Anadenanthera peregrina", parte: "Semillas (Yopo)", concent: "Bufotenina + DMT", origen: "Sudamérica", recomendado: "Tradicional rapé. Cultivo árbol grande. Snortado es muy intenso. Solo experimentados." },
        ].map((p, i) => (
          <div key={i} style={{ background: c.bg2, border: `1px solid ${c.border1}`, borderRadius: "10px", padding: "12px" }}>
            <div style={{ fontSize: "13px", fontWeight: "bold", color: c.textBright, marginBottom: "4px" }}>{p.nombre}</div>
            <div style={{ fontSize: "11px", color: c.accent2 }}>🌿 Parte usada: {p.parte}</div>
            <div style={{ fontSize: "11px", color: c.accent2 }}>💊 Concentración: {p.concent}</div>
            <div style={{ fontSize: "11px", color: c.accent2, marginBottom: "5px" }}>🌎 Origen: {p.origen}</div>
            <div style={{ fontSize: "12px", color: c.accent3, lineHeight: "1.5" }}>{p.recomendado}</div>
          </div>
        ))}
      </div>

      <SectionTitleX c={c}>RECOMENDACIÓN PARA NOVATOS</SectionTitleX>
      <InfoBoxX c={c}>
        🥇 <strong>Mimosa hostilis</strong> — la mejor opción si quieres seriamente investigar. Alta concentración (eficiente), planta legal cultivar, corteza seca legal de comprar como "tinte natural" (busca "MHRB tinte natural" en EU). El árbol es bonito y rápido en clima cálido.
      </InfoBoxX>
    </div>
  );
}

function COMPRA_DMT() {
  const c = DMT_COLORS;
  const items = [
    { item: "🌰 Semillas Mimosa hostilis (50-100 sem)", precio: "5-15€", donde: "Internet", nota: "Vendedores etnobotánicos UE: Avalon Magic Plants, World Seed Supply, viveros especializados. Buscar 'Mimosa hostilis seeds' o 'Jurema preta semillas'. Las semillas necesitan escarificación antes de germinar.", prioridad: "ESENCIAL", tipo: "Consumible" },
    { item: "🌱 Esquejes/plántulas Mimosa (alternativa)", precio: "20-40€", donde: "Internet", nota: "Más rápido que semillas. Plantas pequeñas ya enraizadas. Suelen llegar en macetas pequeñas. Atajo recomendado si quieres ver crecimiento desde el primer mes.", prioridad: "IMPORTANTE", tipo: "Consumible" },
    { item: "🪵 Corteza MHRB seca (atajo cosecha)", precio: "25-50€ / 100g", donde: "Internet", nota: "Si no quieres esperar 3+ años: comprar corteza ya seca como 'tinte natural' (legal en EU). Vendedores: Avalon, herbalistics, eBay (buscar 'Mimosa hostilis bark powder' o 'MHRB tinte natural'). Calidad variable — leer reviews.", prioridad: "ÚTIL", tipo: "Consumible" },
    { item: "🪴 Maceta grande (40-50L)", precio: "15-30€", donde: "Tienda física", nota: "Para plantar la Mimosa. Los árboles jóvenes necesitan espacio para raíces que producirán la corteza activa. Maceta con drenaje generoso.", prioridad: "ESENCIAL", tipo: "Equipo" },
    { item: "🪨 Sustrato bien drenado", precio: "5-12€", donde: "Tienda física", nota: "Mezcla 50% turba + 30% perlita + 20% mantillo. PH 5-6 ácido. Mimosa crece bien en suelos pobres pero requiere drenaje extremo.", prioridad: "ESENCIAL", tipo: "Consumible" },
    { item: "🔥 Hormona de enraizamiento (gel/polvo)", precio: "5-10€", donde: "Tienda física", nota: "Para escarificación + activación de semillas. También útil si haces esquejes.", prioridad: "IMPORTANTE", tipo: "Consumible" },
    { item: "🌡️ Termómetro/higrómetro digital", precio: "8-15€", donde: "Internet", nota: "Para monitorizar germinación (25-28°C constante). Imprescindible para germinación predecible.", prioridad: "ESENCIAL", tipo: "Equipo" },
    { item: "🪥 Manta térmica para reptiles", precio: "15-30€", donde: "Internet", nota: "Si vives en zona fría: manta térmica bajo la maceta de germinación. Mantiene calor constante 25-28°C que las semillas necesitan.", prioridad: "ÚTIL", tipo: "Equipo" },
    { item: "✂️ Cuchillo afilado + alcohol 70%", precio: "5-10€", donde: "Tienda física", nota: "Para cosechar corteza de raíz cuando esté lista. Cuchillo limpio = corte sano que cicatriza.", prioridad: "ESENCIAL", tipo: "Equipo" },
    { item: "🫙 Frasco vidrio oscuro hermético", precio: "5-15€", donde: "Tienda física", nota: "Para conservar corteza seca y triturada. Oscuro = protege de luz UV que degrada alcaloides.", prioridad: "ESENCIAL", tipo: "Equipo" },
    { item: "📚 Libro 'DMT: The Spirit Molecule' (R. Strassman)", precio: "15-25€", donde: "Internet", nota: "Lectura recomendada antes de cualquier experiencia. Investigación clínica completa sobre DMT.", prioridad: "ÚTIL", tipo: "Consumible" },
  ];
  const [filterPrio, setFilterPrio] = React.useState([]);
  const [filterTipo, setFilterTipo] = React.useState([]);
  const togglePrio = (p) => setFilterPrio(s => s.includes(p) ? s.filter(x => x !== p) : [...s, p]);
  const toggleTipo = (t) => setFilterTipo(s => s.includes(t) ? s.filter(x => x !== t) : [...s, t]);
  const filtered = items.filter(i =>
    (filterPrio.length === 0 || filterPrio.includes(i.prioridad)) &&
    (filterTipo.length === 0 || filterTipo.includes(i.tipo))
  );
  const prioColor = { "ESENCIAL": "#a094c5", "IMPORTANTE": "#bcb1d8", "ÚTIL": "#d4cce6" };
  const tipoColor = { "Equipo": "#605e8a", "Consumible": "#8579b0" };

  return (
    <div>
      <InfoBoxX c={c}>
        Lista para cultivo de <GlossaryLink term="Mimosa hostilis (Jurema)">Mimosa hostilis</GlossaryLink>. Inversión inicial 50-100€ (equipo reutilizable). Atajo: comprar corteza seca lista (25-50€) si no quieres esperar 3+ años de cultivo.
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

      <SectionTitleX c={c}>LISTA DE COMPRA DMT/MIMOSA ({filtered.length}/{items.length})</SectionTitleX>
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

function CULTIVO_MIMOSA() {
  const c = DMT_COLORS;
  return (
    <div>
      <InfoBoxX c={c}>
        Mimosa hostilis (también llamada Mimosa tenuiflora, Jurema Preta) = árbol caducifolio brasileño/mexicano. Crece RÁPIDO en clima cálido (1-3m/año). En España: posible exterior en zonas mediterráneas, interior necesario en zonas frías.
      </InfoBoxX>

      <SectionTitleX c={c}>CONDICIONES IDEALES</SectionTitleX>
      <div style={{ display: "grid", gridTemplateColumns: "1fr 1fr", gap: "10px", marginBottom: "20px" }}>
        <StatBoxX c={c} label="Temperatura" value="20-35°C ideal" />
        <StatBoxX c={c} label="Humedad" value="40-70% (tolerante)" />
        <StatBoxX c={c} label="Luz" value="Pleno sol" />
        <StatBoxX c={c} label="Suelo" value="Pobre, drenado, ácido" />
      </div>

      <SectionTitleX c={c}>GERMINACIÓN — DESDE SEMILLA</SectionTitleX>
      <StepX c={c} num={1} text="Comprar semillas Mimosa hostilis online. 5-10€ por sobre con 50-100 semillas. Vendedores etnobotánicos UE." />
      <StepX c={c} num={2} text="Escarificación: las semillas tienen capa dura. Lijarlas suavemente con papel de lija o hacer un pequeño corte con cuchillo." why="Sin escarificación, la semilla puede tardar meses en germinar o no germinar nunca." />
      <StepX c={c} num={3} text="Hidratación: poner semillas en agua templada (40°C) durante 24h. Las que se hinchen están viables." />
      <StepX c={c} num={4} text="Siembra: en bandeja con sustrato semillero (turba + perlita 1:1). Enterrar 0.5cm. Mantener húmedo y cálido (25-28°C)." />
      <StepX c={c} num={5} text="Germinación: 7-21 días a 25°C. Las plántulas son delicadas las primeras semanas." />

      <SectionTitleX c={c}>CRECIMIENTO INICIAL</SectionTitleX>
      <StepX c={c} num={1} text="Mes 1-3: plántulas en macetas pequeñas. Riego moderado, semi-sol. Crecimiento lento al principio." />
      <StepX c={c} num={2} text="Mes 3-6: trasplantar a macetas medianas (5-10L). Empieza el crecimiento explosivo si calor + sol." />
      <StepX c={c} num={3} text="Mes 6-12: árbol joven de 30-100cm. Trasplante a maceta grande (20-50L) o exterior si clima permite." />
      <StepX c={c} num={4} text="Año 1: 1-2m de altura en clima cálido. La mitad en frío." />
      <StepX c={c} num={5} text="Año 2-3: árbol de 2-4m. Ya empieza a tener corteza significativa en raíces." />

      <SectionTitleX c={c}>CULTIVO EN ESPAÑA POR ZONAS</SectionTitleX>
      <InfoBoxX c={c}>
        🌞 <strong>Mediterráneo (Andalucía, Murcia, Valencia, Baleares):</strong> exterior posible todo el año. Riego moderado, sol pleno. Se puede plantar en jardín directamente.<br/>
        🍃 <strong>Centro/Norte:</strong> exterior solo mayo-octubre. Maceta grande para meter dentro en invierno (no soporta heladas — muere por debajo de -2°C).<br/>
        ❄️ <strong>Galicia/Cantábrico:</strong> mejor invernadero o interior con ventana sur. Climas húmedos demasiado para mimosa que prefiere seco-cálido.
      </InfoBoxX>

      <SectionTitleX c={c}>RIEGO DETALLADO — TABLA NOVATO (MACETA 40-50L)</SectionTitleX>
      <div style={{ background: c.bg2, border: `1px solid ${c.border1}`, borderRadius: "10px", padding: "14px", marginBottom: "16px" }}>
        <div style={{ fontSize: "11px", color: c.accent1, letterSpacing: "1px", marginBottom: "10px", fontWeight: "bold" }}>💧 RIEGO MIMOSA POR ETAPA</div>
        {[
          { etapa: "Plántula (mes 1-3)", agua: "100-200ml", freq: "cada 3-4 días", nota: "Sustrato húmedo pero no empapado. Mimosa joven sensible — encharcamiento mata raíces." },
          { etapa: "Joven (mes 4-12)", agua: "300-500ml", freq: "cada 3-4 días verano · 7 días invierno", nota: "Tolera mejor sequía que humedad. Esperar 2cm seco superficie antes de regar." },
          { etapa: "Año 1-3 (árbol creciendo)", agua: "1-2L", freq: "cada 3-4 días verano · 10-14 días invierno", nota: "Mimosa establecida. Riego abundante en verano + sol pleno = crecimiento explosivo." },
          { etapa: "Adulto (3+ años)", agua: "2-4L", freq: "cada 3-5 días verano · 14-21 días invierno", nota: "Árbol grande con raíces profundas. Si en jardín: riego deep, menos frecuente." },
        ].map((row, i) => (
          <div key={i} style={{ borderBottom: i < 3 ? `1px solid ${c.border1}` : "none", padding: "8px 0" }}>
            <div style={{ fontSize: "12px", fontWeight: "bold", color: c.textBright, marginBottom: "3px" }}>{row.etapa}</div>
            <div style={{ fontSize: "11px", color: c.accent2 }}>💧 <strong>{row.agua}</strong> · ⏱️ {row.freq}</div>
            <div style={{ fontSize: "11px", color: c.accent3, marginTop: "3px", lineHeight: "1.5" }}>{row.nota}</div>
          </div>
        ))}
      </div>

      <SectionTitleX c={c}>SEÑALES VISUALES MIMOSA</SectionTitleX>
      <InfoBoxX c={c}>
        ✅ Hojas plumosas verde brillante, copa densa = perfecto<br/>
        🟡 Hojas se cierran de noche (movimiento natural) = NORMAL (Mimosa = "mimosa pudica" a veces, hojas sensibles)<br/>
        🟡 Hojas amarillas y caen = falta agua, exceso o frío. Verifica los 3.<br/>
        🔴 Tronco blando o pudriéndose = MAL drenaje, encharcamiento. Trasplante con sustrato más drenante (más perlita).<br/>
        🔴 Hojas con manchas marrones bordes secos = aire muy seco/calor extremo. Pulverizar.<br/>
        ❄️ Por debajo de 5°C: hojas se ennegrecen rápidamente = entrar dentro YA o cubrir.
      </InfoBoxX>

      <SectionTitleX c={c}>COSECHA DE CORTEZA DE RAÍZ (MHRB)</SectionTitleX>
      <StepX c={c} num={1} text="Esperar mínimo 3 años para tener raíces significativas. Antes = cosecha muy pequeña." />
      <StepX c={c} num={2} text="Hay 2 métodos: (a) sacrificar el árbol (sacar entero, recolectar todas las raíces), (b) cosecha sostenible (excavar parcialmente, cortar algunas raíces, tapar). Sostenible mejor." />
      <StepX c={c} num={3} text="La parte activa es la corteza ROJIZA externa de las raíces. Lavarlas, dejar secar 1-2 días. Pelar la corteza con cuchillo (1-2mm de grosor)." />
      <StepX c={c} num={4} text="Secar la corteza al aire (sombra ventilada) 2-4 semanas hasta crujiente." />
      <StepX c={c} num={5} text="Triturar a polvo en molinillo. Conservar en frasco hermético oscuro. Dura años." />

      <SectionTitleX c={c}>RENDIMIENTO</SectionTitleX>
      <InfoBoxX c={c}>
        Árbol de 3-5 años: 100-300g de corteza seca por cosecha sostenible. Para extracción amateur (ya extraída por terceros, info educativa): 100g de MHRB pueden rendir teóricamente 0.5-1.5g de DMT.<br/><br/>
        <strong>Compra alternativa:</strong> 100g de MHRB triturada de vendedor reputado online en EU (legal como tinte): 25-50€. Mucho más rápido que cultivar 3 años.
      </InfoBoxX>

      <ErrorCardX c={c}
        error="Frío bajo cero"
        consecuencia="Mimosa muere. No tolera heladas."
        fix="En zonas frías: maceta para mover dentro en invierno. O invernadero. Por debajo de 5°C riesgo, bajo 0°C muerte."
      />
      <ErrorCardX c={c}
        error="Trasplante de árbol grande"
        consecuencia="Mimosa tiene raíces frágiles. Trasplante grande = posible muerte."
        fix="Decidir ubicación final temprano (año 1-2). Si tienes que trasplantar grande: hacerlo en invierno (dormancia) con cepellón intacto y MUCHA agua después."
      />
    </div>
  );
}

function CULTIVO_CHALIPONGA() {
  const c = DMT_COLORS;
  return (
    <div>
      <InfoBoxX c={c}>
        <strong>Diplopterys cabrerana (Chaliponga / Chacropanga / Yagé)</strong> — vid amazónica usada como sustituto de Chacruna en ayahuasca. Hojas con DMT (0.4-1.7%) <strong>+ pequeñas cantidades de 5-MeO-DMT</strong>. Más fácil de cultivar que Chacruna.
      </InfoBoxX>

      <SectionTitleX c={c}>POR QUÉ CHALIPONGA EN VEZ DE CHACRUNA</SectionTitleX>
      <InfoBoxX c={c}>
        ✅ MÁS FÁCIL de cultivar (humedad 60-80% vs 80-95% de Chacruna)<br/>
        ✅ Crecimiento más rápido (vid trepadora vs arbusto)<br/>
        ✅ Concentración DMT mayor por gramo<br/>
        ⚠️ Contiene 5-MeO-DMT — más intenso, posible giro distinto en ayahuasca<br/>
        🌿 En la tradición ecuatoriana se usa para una variante de ayahuasca llamada "yagé"
      </InfoBoxX>

      <SectionTitleX c={c}>CONDICIONES IDEALES</SectionTitleX>
      <div style={{ display: "grid", gridTemplateColumns: "1fr 1fr", gap: "10px", marginBottom: "16px" }}>
        <StatBoxX c={c} label="Temperatura" value="22-30°C" />
        <StatBoxX c={c} label="Humedad" value="60-80% (aceptable)" />
        <StatBoxX c={c} label="Luz" value="Indirecta brillante" />
        <StatBoxX c={c} label="Sustrato" value="Drenado, ácido (pH 5-6)" />
      </div>

      <SectionTitleX c={c}>PRECIOS ORIENTATIVOS</SectionTitleX>
      <InfoBoxX c={c}>
        🌱 Esqueje enraizado: <strong>30-60€</strong> · 🍃 Hojas secas: <strong>20-40€/25g</strong>. Semillas casi imposibles. Inversión cultivo: ~50-80€ con tutor + maceta.
      </InfoBoxX>

      <SectionTitleX c={c}>CULTIVO</SectionTitleX>
      <StepX c={c} num={1} text="Comprar esqueje enraizado de vendedor etnobotánico UE. Hidratar 24h en agua templada al recibir." />
      <StepX c={c} num={2} text="Maceta 30L+, sustrato similar a Caapi: 50% turba + 30% perlita + 20% mantillo." />
      <StepX c={c} num={3} text="Tutor obligatorio: vid trepadora, necesita 1-2m de soporte vertical." />
      <StepX c={c} num={4} text="Luz indirecta brillante. NO sol directo intenso (le quema)." why="En selva crece bajo dosel — luz filtrada. Sol directo = hojas amarillas." />
      <StepX c={c} num={5} text="Humedad 60-80% (más tolerante que Chacruna). Pulverizar hojas 1x/día." />
      <StepX c={c} num={6} text="Temperatura 22-28°C. Por debajo de 15°C = ralentización. Bajo 10°C = muerte." />
      <StepX c={c} num={7} text="En España: SOLO interior junto a ventana sur o invernadero climatizado. Mediterráneo costero: posible verano exterior (mayo-octubre)." />

      <SectionTitleX c={c}>COSECHA</SectionTitleX>
      <StepX c={c} num={1} text="Esperar 1-2 años desde plantar. Vid madura tiene 3-5m de tallo." />
      <StepX c={c} num={2} text="Cosechar hojas grandes y maduras (8cm+). Dejar 50% de la planta intacta." />
      <StepX c={c} num={3} text="Una planta de 2 años: 30-80g de hojas secas/año. Suficiente para 2-4 brebajes." />
      <StepX c={c} num={4} text="Secar al aire en sombra 7-10 días. Conservar en frasco hermético oscuro." />

      <SectionTitleX c={c}>USO EN AYAHUASCA</SectionTitleX>
      <InfoBoxX c={c}>
        Sustituye o se mezcla con Chacruna en el brebaje. Misma proporción aproximada: 15-25g de hojas Chaliponga por sesión. Ver guía Ayahuasca > Preparación brebaje. La presencia de 5-MeO-DMT puede dar experiencias distintas — más intensas en algunas reportes, más rápidas en peak.
      </InfoBoxX>
    </div>
  );
}

function CULTIVO_ACACIA() {
  const c = DMT_COLORS;
  return (
    <div>
      <InfoBoxX c={c}>
        <strong>Acacia confusa</strong> — árbol taiwanés/vietnamita. Su corteza de raíz (ACRB) tiene <strong>1-2% DMT + harmalina trazas</strong>. Concentración mayor que Mimosa. Alternativa cuando no se consigue Mimosa.
      </InfoBoxX>

      <SectionTitleX c={c}>POR QUÉ ACACIA CONFUSA</SectionTitleX>
      <InfoBoxX c={c}>
        ✅ Concentración DMT más alta que Mimosa (1-2% vs 0.5-1.5%)<br/>
        ✅ Crece más alto y robusto en clima templado<br/>
        ❌ Menos común — más difícil encontrar semillas/esquejes<br/>
        ❌ ACRB seca no tan disponible como MHRB<br/>
        🌿 También presente en algunas variantes asiáticas de ayahuasca
      </InfoBoxX>

      <SectionTitleX c={c}>CONDICIONES IDEALES</SectionTitleX>
      <div style={{ display: "grid", gridTemplateColumns: "1fr 1fr", gap: "10px", marginBottom: "16px" }}>
        <StatBoxX c={c} label="Temperatura" value="15-35°C tolerante" />
        <StatBoxX c={c} label="Humedad" value="40-70% (flexible)" />
        <StatBoxX c={c} label="Luz" value="Pleno sol" />
        <StatBoxX c={c} label="Sustrato" value="Drenado, tolerante" />
      </div>

      <SectionTitleX c={c}>PRECIOS ORIENTATIVOS</SectionTitleX>
      <InfoBoxX c={c}>
        🌰 Semillas: <strong>5-15€/sobre</strong> (germinación 50-70%) · 🪵 ACRB seca importada: <strong>30-60€/100g</strong> (más cara que MHRB). Inversión cultivo: ~40-80€ con maceta grande.
      </InfoBoxX>

      <SectionTitleX c={c}>CULTIVO — DESDE SEMILLA</SectionTitleX>
      <StepX c={c} num={1} text="Escarificación: lijar suavemente la cubierta dura de la semilla con papel de lija. Sin escarificar puede tardar meses." />
      <StepX c={c} num={2} text="Hidratar 24h en agua a 40-45°C (calor activa la germinación). Las viables se hinchan." />
      <StepX c={c} num={3} text="Plantar a 1cm de profundidad en mezcla 50% turba + 30% perlita + 20% mantillo." />
      <StepX c={c} num={4} text="Germinación: 5-21 días a 25-28°C. Plántulas crecen rápido." />

      <SectionTitleX c={c}>CRECIMIENTO</SectionTitleX>
      <StepX c={c} num={1} text="Mes 1-6: plántulas en macetas pequeñas. Crecimiento moderado." />
      <StepX c={c} num={2} text="Año 1: 1-2m altura. Trasplante a maceta grande (40-50L) o jardín." />
      <StepX c={c} num={3} text="Año 2-3: árbol joven 2-4m. Resistente al frío hasta -2°C (mejor que Mimosa)." />
      <StepX c={c} num={4} text="Año 3-5: cosecha de corteza de raíz posible. Menos rendimiento por planta que Mimosa pero más concentrada." />

      <SectionTitleX c={c}>EN ESPAÑA POR ZONAS</SectionTitleX>
      <InfoBoxX c={c}>
        🌞 <strong>Mediterráneo costero:</strong> exterior posible. Tolera mejor el frío que Mimosa.<br/>
        🍃 <strong>Centro/Norte España:</strong> interior obligatorio en invierno, exterior verano.<br/>
        ❄️ <strong>Galicia/Cantábrico:</strong> demasiado húmedo. Solo invernadero.
      </InfoBoxX>

      <SectionTitleX c={c}>COSECHA</SectionTitleX>
      <StepX c={c} num={1} text="Esperar 4+ años para cosecha significativa. Antes = raíces muy pequeñas." />
      <StepX c={c} num={2} text="Excavar parcialmente alrededor del árbol. Cortar raíces secundarias (no la principal)." />
      <StepX c={c} num={3} text="Lavar, pelar la corteza rojiza externa con cuchillo. Esa es la parte activa." />
      <StepX c={c} num={4} text="Secar 2-4 semanas en sombra. Conservar en frasco oscuro hermético — años." />

      <SectionTitleX c={c}>RENDIMIENTO</SectionTitleX>
      <InfoBoxX c={c}>
        Árbol de 5 años: 80-200g de ACRB seca por cosecha sostenible. Mayor concentración por gramo que MHRB compensa el rendimiento menor.
      </InfoBoxX>

      <SectionTitleX c={c}>USO</SectionTitleX>
      <InfoBoxX c={c}>
        Mismo método que Mimosa hostilis: extracción A/B (ilegal en España), o uso oral combinado con IMAO en variante de ayahuasca. Ver sección Extracción para info educativa.
      </InfoBoxX>
    </div>
  );
}

function EXTRACCION_DMT() {
  const c = DMT_COLORS;
  return (
    <div>
      <InfoBoxX c={c}>
        ⚠️ <strong>AVISO LEGAL.</strong> La extracción de DMT es ilegal en España y la mayoría de países. Esta guía tiene fines puramente educativos — entender la química no es delito. El conocimiento salva vidas: saber cómo se hace ayuda a detectar productos mal hechos o peligrosos en el mercado negro. Quien decide actuar lo hace bajo su propia responsabilidad.
      </InfoBoxX>

      <SectionTitleX c={c}>QUÍMICA BÁSICA — POR QUÉ FUNCIONA</SectionTitleX>
      <InfoBoxX c={c}>
        El DMT en la planta está como <strong>sal</strong> (DMT-tanato en Mimosa, DMT-fosfato en otras). Es soluble en agua pero NO en solventes no-polares (heptano, nafta, xileno, éter de petróleo).<br/><br/>
        <strong>En medio ácido (pH 2-4):</strong> el DMT se disuelve en agua como sal protonada (DMT-H⁺). Las grasas/aceites de la planta NO se disuelven en agua ácida — se quedan en el material vegetal.<br/><br/>
        <strong>En medio básico (pH 12-14):</strong> se añade NaOH (hidróxido de sodio) y el DMT se convierte en <strong>base libre</strong> (DMT⌀). La base libre NO es soluble en agua pero SÍ en solventes no-polares. Al añadir heptano/nafta, el DMT migra al solvente — dejando atrás la sopa básica con el resto de la planta.<br/><br/>
        <strong>Congelación:</strong> el DMT es poco soluble en heptano frío. Al meter el solvente cargado de DMT en el congelador (-18°C), el DMT precipita como cristales. El solvente se separa por decantación y los cristales se secan.
      </InfoBoxX>

      <SectionTitleX c={c}>MATERIAL VEGETAL — FUENTES DE DMT</SectionTitleX>
      <div style={{ display: "grid", gap: "8px", marginBottom: "16px" }}>
        {[
          { planta: "Mimosa hostilis (MHRB)", dmt: "1-3% corteza raíz", notas: "La fuente más común. 100g MHRB = 1-3g DMT teórico. Rendimiento real: 0.5-2% (pérdidas en proceso). Comprar corteza en polvo o triturar tú.", precio: "25-50€/100g" },
          { planta: "Acacia confusa (ACRB)", dmt: "1-2% corteza raíz + NMT", notas: "Contiene NMT además de DMT (experiencia ligeramente distinta, más 'suave'). Misma técnica que MHRB.", precio: "30-60€/100g" },
          { planta: "Diplopterys cabrerana (Chaliponga)", dmt: "0.2-1.7% hojas", notas: "Usada en ayahuasca tradicional. Menor rendimiento que MHRB. Contiene 5-MeO-DMT además de DMT.", precio: "20-40€/25g hojas secas" },
          { planta: "Psychotria viridis (Chacruna)", dmt: "0.1-0.6% hojas", notas: "La otra mitad de la ayahuasca. Rendimiento muy bajo para extracción. Mejor para brebaje tradicional.", precio: "15-30€/30g hojas secas" },
          { planta: "Phalaris arundinacea (alpiste)", dmt: "0.1-0.2% (muy variable)", notas: "Gramínea común en España. Contiene gramina (tóxica) además de DMT. NO RECOMENDADA para principiantes. Requiere purificación avanzada.", precio: "Gratis (forrajeo)" },
        ].map((f, i) => (
          <div key={i} style={{ background: c.bg2, borderRadius: "8px", padding: "10px", border: `1px solid ${c.border1}` }}>
            <div style={{ fontWeight: "bold", fontSize: "13px", color: c.accent1, marginBottom: "4px" }}>{f.planta}</div>
            <div style={{ fontSize: "11px", color: c.text }}>DMT: {f.dmt} · {f.notas}</div>
            <div style={{ fontSize: "10px", color: c.border1, marginTop: "2px" }}>Precio: {f.precio}</div>
          </div>
        ))}
      </div>

      <SectionTitleX c={c}>MÉTODO STB (Straight-To-Base) — EL MÁS SIMPLE</SectionTitleX>
      <InfoBoxX c={c}>
        El STB es el método más directo para principiantes. Se salta la etapa ácida (sin hervir, sin reducir volumen). Solo necesitas: polvo de corteza, agua, NaOH y solvente. La desventaja es que extrae más grasas (producto final más amarillo/marrón) y usa más solvente. Pero es el más sencillo y rápido para empezar.<br/><br/>
        <strong>Material necesario:</strong><br/>
        • 100g polvo MHRB (finamente molido, como harina)<br/>
        • 100g NaOH (sosa cáustica en perlas — ferretería, droguería, ~3€/kg)<br/>
        • 750ml agua destilada/desmineralizada<br/>
        • 150ml heptano puro (farmacéutico) o nafta ligera (Zippo, Waschbenzin). NUNCA gasolina de coche.<br/>
        • Recipiente vidrio borosilicato 1L (Erlenmeyer o tarro de conservas grueso)<br/>
        • 2 bandejas Pyrex (para congelación)<br/>
        • Pipeta/turkey baster de vidrio (NO plástico — el solvente disuelve el plástico)<br/>
        • Gafas de seguridad + guantes nitrilo largos (NaOH quema gravemente)<br/>
        • Ventilación: ventana abierta + ventilador. MEJOR: cocina con campana extractora o exterior (balcón)<br/>
        • Papel pH o tiras indicadoras (rango 0-14)<br/>
        • Filtro de café sin blanquear<br/>
        • Congelador (-18°C o más frío)
      </InfoBoxX>

      <SectionTitleX c={c}>PASO A PASO — EXTRACCIÓN STB</SectionTitleX>
      <StepX c={c} num={1} text="PREPARAR SOLUCIÓN BÁSICA" why="La base convierte el DMT en su forma extraíble." />
      <div style={{ marginLeft: "24px", marginBottom: "12px" }}>
        <p style={{ fontSize: "12px", color: c.text, lineHeight: "1.6", margin: "0 0 6px" }}>
          En recipiente de vidrio, añadir 750ml agua destilada. Añadir 100g NaOH LENTAMENTE (nunca al revés — el NaOH al agua, no agua al NaOH). <strong style={{ color: c.error }}>Reacción exotérmica: el tarro se calentará MUCHO.</strong> Remover con varilla de vidrio hasta disolución total. Dejar enfriar a temperatura ambiente (30-40°C máximo). El pH debe estar 13+.
        </p>
      </div>

      <StepX c={c} num={2} text="AÑADIR CORTEZA" why="El DMT en la planta necesita contacto con la base para liberarse." />
      <div style={{ marginLeft: "24px", marginBottom: "12px" }}>
        <p style={{ fontSize: "12px", color: c.text, lineHeight: "1.6", margin: "0 0 6px" }}>
          Añadir los 100g de polvo MHRB a la solución básica ya fría. Tapar y agitar vigorosamente 1-2 minutos hasta que todo el polvo esté humedecido (se vuelve una pasta negra/púrpura espesa). Dejar reposar 1 hora. Agitar otra vez. Este paso se llama "lisis celular" — la base rompe las paredes celulares liberando el DMT.
        </p>
      </div>

      <StepX c={c} num={3} text="PRIMERA EXTRACCIÓN (PULL)" why="El solvente recoge el DMT de la sopa básica." />
      <div style={{ marginLeft: "24px", marginBottom: "12px" }}>
        <p style={{ fontSize: "12px", color: c.text, lineHeight: "1.6", margin: "0 0 6px" }}>
          Añadir 70-80ml de heptano/nafta al tarro. Tapar. Agitar suavemente (no agitar como coctelera — se forman emulsiones imposibles de separar). Método correcto: girar el tarro boca abajo y arriba, rodar sobre la mesa. Hacer esto durante 30-60 segundos cada 3-5 minutos, durante 30-45 minutos. Entre agitaciones, dejar reposar para que las capas se separen.<br/><br/>
          <strong>La capa de solvente (heptano/nafta) flota arriba</strong> — es transparente/amarillenta. La capa acuosa básica está abajo — negra/púrpura. Separación tarda 5-15 minutos. Si no se separa (emulsión): añadir más NaOH, añadir sal no yodada (30g), baño maría templado, o simplemente esperar más tiempo.
        </p>
      </div>

      <StepX c={c} num={4} text="SEPARAR (DECANTAR) EL SOLVENTE" why="Recuperar el solvente cargado de DMT dejando atrás la sopa básica." />
      <div style={{ marginLeft: "24px", marginBottom: "12px" }}>
        <p style={{ fontSize: "12px", color: c.text, lineHeight: "1.6", margin: "0 0 6px" }}>
          Con pipeta de vidrio o turkey baster, aspirar CUIDADOSAMENTE la capa superior de solvente (sin chupar nada de la capa negra de abajo). Transferir a bandeja Pyrex. Es normal que quede un poco de solvente en el tarro — se recupera en pulls posteriores.<br/><br/>
          Cerrar la bandeja Pyrex con film transparente (que el film NO toque el solvente). Meter al congelador a -18°C mínimo. Dejar 12-24 horas. Cuanto más frío, mejor (algunos usan -25°C o hielo seco).
        </p>
      </div>

      <StepX c={c} num={5} text="PULLS ADICIONALES (×3-5)" why="Un solo pull no extrae todo el DMT. Se necesitan 3-5 pulls para recoger >90%." />
      <div style={{ marginLeft: "24px", marginBottom: "12px" }}>
        <p style={{ fontSize: "12px", color: c.text, lineHeight: "1.6", margin: "0 0 6px" }}>
          Añadir otros 50-70ml de solvente FRESCO al tarro original. Repetir agitación suave 30-45 min. Separar solvente a OTRA bandeja Pyrex (o a la misma si ya has recogido los cristales del primer pull). Repetir hasta 3-5 pulls totales. El pull 1 suele ser el más puro (blanco). Pulls 3-5 son más amarillos (más grasas vegetales, igual de activos pero menos estéticos).
        </p>
      </div>

      <StepX c={c} num={6} text="RECOGER CRISTALES" why="El DMT ha precipitado en el frío. Toca recogerlo." />
      <div style={{ marginLeft: "24px", marginBottom: "12px" }}>
        <p style={{ fontSize: "12px", color: c.text, lineHeight: "1.6", margin: "0 0 6px" }}>
          Sacar bandeja del congelador. Trabajar RÁPIDO (el solvente se calienta y el DMT se redisuelve). Verter el solvente a través de un filtro de café colocado sobre un tarro limpio (para reutilizar el solvente en futuros pulls). Los cristales se quedan pegados a la bandeja y en el filtro.<br/><br/>
          Dejar la bandeja boca abajo inclinada durante 30-60 minutos para que escurra TODO el solvente. Poner un ventilador SUAVE (sin calefacción) apuntando a la bandeja para evaporar restos de solvente. Los cristales deben oler a flores/plástico/zapatilla nueva — NO a gasolina/disolvente (si huelen a solvente, necesitan más secado).
        </p>
      </div>

      <StepX c={c} num={7} text="PURIFICACIÓN OPCIONAL — RE-X (RECRISTALIZACIÓN)" why="Para DMT más puro — cristales blancos en lugar de amarillos." />
      <div style={{ marginLeft: "24px", marginBottom: "12px" }}>
        <p style={{ fontSize: "12px", color: c.text, lineHeight: "1.6", margin: "0 0 6px" }}>
          Disolver el DMT en MÍNIMA cantidad de heptano caliente (baño maría, NUNCA fuego directo — solvente inflamable). Dejar enfriar lentamente a temperatura ambiente y luego al congelador 12h. Los cristales que precipitan ahora son más puros — las impurezas/grasas se quedan en el heptano. Repetir si se quiere más pureza (cada re-x pierde un 5-10% de peso).
        </p>
      </div>

      <SectionTitleX c={c}>RENDIMIENTO ESPERADO</SectionTitleX>
      <div style={{ display: "grid", gridTemplateColumns: "1fr 1fr", gap: "8px", marginBottom: "16px" }}>
        <StatBoxX c={c} label="MHRB (1-3% teórico)" value="0.5-2% real" />
        <StatBoxX c={c} label="Primera extracción" value="0.5-1g de 100g" />
        <StatBoxX c={c} label="Con práctica" value="1-2g de 100g" />
        <StatBoxX c={c} label="Color" value="Blanco→amarillo→naranja (pureza vs grasas)" />
      </div>

      <SectionTitleX c={c}>SEGURIDAD — LO QUE PUEDE SALIR MAL</SectionTitleX>
      <ErrorCardX c={c}
        error="NaOH en piel u ojos"
        consecuencia="Quemadura química grave. En ojos: ceguera permanente posible."
        fix="GUANTES NITRILO + GAFAS SIEMPRE. Si contacto: lavar con agua abundante 15 minutos. Si ojos: urgencias inmediato."
      />
      <ErrorCardX c={c}
        error="Solvente cerca de llama/fuente de calor"
        consecuencia="Heptano y nafta son EXTREMADAMENTE inflamables. Vapores pueden viajar metros hasta una llama piloto y explotar."
        fix="CERO llamas, cigarrillos, cerillas, chispas eléctricas en la habitación. Ventilación máxima. NUNCA al fuego — solo baño maría eléctrico o agua caliente del grifo."
      />
      <ErrorCardX c={c}
        error="Inhalación de vapores de solvente"
        consecuencia="Mareo, dolor de cabeza, náusea, daño neurológico por exposición crónica."
        fix="Ventilación: ventana abierta + ventilador. Ideal: campana extractora de cocina o exterior (balcón/terraza). Si sientes mareo: salir a respirar aire fresco inmediatamente."
      />
      <ErrorCardX c={c}
        error="Solvente en plástico"
        consecuencia="Heptano/nafta disuelven muchos plásticos (PVC, poliestireno, goma). El DMT se contamina con plastificantes y ftalatos — tóxicos al fumar."
        fix="Solo VIDRIO borosilicato (Pyrex, Erlenmeyer) y tapas de HDPE (polietileno de alta densidad, reciclaje #2) o PTFE. Pipetas de VIDRIO, nunca plástico."
      />
      <ErrorCardX c={c}
        error="No evaporar todo el solvente"
        consecuencia="Fumar DMT con restos de heptano/nafta = daño pulmonar químico agudo. Sabe a gasolina, quema la garganta."
        fix="Secar cristales mínimo 2-4 horas con ventilador. Olor debe ser floral/plástico — CERO olor a gasolina. Si huele a solvente: seguir secando. Paciencia."
      />
      <ErrorCardX c={c}
        error="Usar gasolina de coche, aguarrás o disolvente de pinturas"
        consecuencia="Estos contienen aditivos tóxicos (benceno, tolueno, antidetonantes) que NO se evaporan completamente. Fumar producto contaminado con esto = cáncer y daño neurológico."
        fix="SOLO usar solventes de grado farmacéutico/reactivo: heptano puro, nafta ligera (Zippo, Waschbenzin — evaporan sin residuos), éter de petróleo 40-60°C. Hacer 'test de evaporación' antes: poner unas gotas del solvente en un espejo limpio. Debe evaporar SIN dejar residuo ni olor."
      />

      <SectionTitleX c={c}>ALTERNATIVAS LEGALES Y SEGURAS</SectionTitleX>
      <InfoBoxX c={c}>
        Si el objetivo es experimentar con DMT, opciones legales/grises:<br/><br/>
        🍵 <strong>Ayahuasca casera:</strong> brebaje con Mimosa/Chacruna + IMAO (ruda siria, Caapi). Misma molécula, experiencia 4-6h oral. Sin solventes, sin riesgo químico. Ver guía Ayahuasca.<br/>
        🕯️ <strong>Ceremonia con grupo religioso:</strong> Santo Daime, UDV. Brebaje preparado por especialistas. Contexto seguro, apoyo comunitario.<br/>
        🌳 <strong>Cultivar tu propia planta:</strong> Mimosa hostilis, Acacia confusa, Chaliponga. Satisfacción botánica + posibilidad de hacer ayahuasca casera con tu propio material. Ver secciones de cultivo en esta guía.<br/>
        🚫 <strong>Comprar DMT cristal en mercado negro:</strong> NO recomendado. Pureza desconocida, posible contaminación con opioides/fentanilo, riesgo legal alto.
      </InfoBoxX>

      <SectionTitleX c={c}>ESTAFAS COMUNES EN MERCADO NEGRO</SectionTitleX>
      <ErrorCardX c={c}
        error="Comprar 'DMT' a desconocido"
        consecuencia="Polvo blanco vendido como DMT puede ser cualquier cosa: 5-MeO-DMT (mucho más intenso/peligroso a dosis de NN-DMT), 4-AcO-DMT, 2C-B, anfetamina, fentanilo."
        fix="Si compras: usar test kit de reactivos (Marquis, Mecke, Ehrlich). Servicio testing anónimo: Energy Control (España). Si no puedes testear, no consumas. La extracción propia desde planta te da control total sobre pureza."
      />
    </div>
  );
}

function CONSUMO_DMT() {
  const c = DMT_COLORS;
  return (
    <div>
      <InfoBoxX c={c}>
        Guía detallada de métodos de consumo de DMT en sus diferentes formas. La posesión de DMT cristal es ilegal en España — esta información es educativa para reducción de daños. Conocer las técnicas y dosis correctas previene accidentes.
      </InfoBoxX>

      <SectionTitleX c={c}>DOSIS — TABLA ORIENTATIVA</SectionTitleX>
      <div style={{ display: "grid", gap: "8px", marginBottom: "16px" }}>
        {[
          { nivel: "Microdosis", dosis: "3-8mg", efecto: "Sub-perceptual. Cambios leves en percepción, estado de ánimo.", duracion: "— (sin viaje)" },
          { nivel: "Dosis baja (test)", dosis: "10-15mg", efecto: "Geometría suave ojos cerrados. Euforia corporal. Buen punto de inicio.", duracion: "5-8 min" },
          { nivel: "Dosis media", dosis: "15-25mg", efecto: "Viaje completo para la mayoría. Geometría intensa, posible contacto entidades. Realidad externa distorsionada.", duracion: "8-12 min" },
          { nivel: "Dosis breakthrough", dosis: "25-40mg", efecto: "Pérdida total de la realidad consensual. Breakthrough. Esperar lo inesperado.", duracion: "10-20 min" },
          { nivel: "Dosis alta", dosis: "40-60mg", efecto: "Solo para muy experimentados. Amnesia parcial posible. Puede ser abrumador.", duracion: "15-25 min" },
        ].map((d, i) => (
          <div key={i} style={{ background: c.bg2, borderRadius: "8px", padding: "10px", border: `1px solid ${c.border1}` }}>
            <div style={{ fontWeight: "bold", fontSize: "13px", color: c.accent1, marginBottom: "4px" }}>{d.nivel} — {d.dosis}</div>
            <div style={{ fontSize: "11px", color: c.text }}>{d.efecto}</div>
            <div style={{ fontSize: "10px", color: c.border1, marginTop: "2px" }}>Duración: {d.duracion}</div>
          </div>
        ))}
      </div>
      <InfoBoxX c={c}>
        <strong>IMPORTANTE:</strong> estas dosis son para NN-DMT en cristal/base libre fumado/vaporizado. Para 5-MeO-DMT las dosis son MUCHO menores (5-15mg para breakthrough). Para ayahuasca oral no aplica (se mide en gramos de planta).<br/><br/>
        <strong>Regla de oro:</strong> empezar siempre con dosis test (10-15mg) con cada nuevo lote. La pureza varía enormemente. Un DMT amarillo puede ser 60% puro, uno blanco 90%+.
      </InfoBoxX>

      <SectionTitleX c={c}>VAPORIZACIÓN — EL ARTE DE NO QUEMARLO</SectionTitleX>
      <InfoBoxX c={c}>
        El DMT se <strong>vaporiza</strong> a ~160-180°C y se <strong>quema/destruye</strong> a partir de ~250-300°C. La diferencia entre un viaje completo y nada es la técnica de calentamiento. El error más común de principiantes es quemar el DMT (aplica demasiado calor directo) — sabe a plástico quemado horrible y no hace efecto.<br/><br/>
        <strong>Principio general:</strong> calor INDIRECTO. La llama nunca debe tocar el DMT directamente. El calor debe transferirse a través de vidrio/metal para vaporizar, no combustionar.
      </InfoBoxX>

      <SectionTitleX c={c}>MÉTODO 1 — PIPA DE VIDRIO (OIL BURNER / METH PIPE)</SectionTitleX>
      <InfoBoxX c={c}>
        La pipa de vidrio con bombilla es el método clásico. Barata (5-10€ en grow shop), efectiva cuando se domina la técnica.<br/><br/>
        <strong>Técnica:</strong><br/>
        1. Cargar dosis (25-35mg) en el bol de la pipa.<br/>
        2. Sostener la llama de un mechero Bic NORMAL (no soplete — demasiado calor) a 3-5cm DEBAJO del vidrio, SIN tocar.<br/>
        3. Mover la llama en círculos pequeños. El vidrio se calienta, el DMT se funde en un charco transparente.<br/>
        4. Cuando empieza a salir vapor blanco del tubo: inhalar LENTA y CONSTANTEMENTE. Mantener la llama moviéndose.<br/>
        5. Llenar pulmones al 80%. Aguantar la respiración 10-15 segundos (crítico para absorción). Exhalar.<br/>
        6. Repetir 2-3 caladas si se puede (los efectos empiezan durante la primera calada — la segunda y tercera son difíciles de coordinar).<br/><br/>
        <strong>Truco:</strong> tener a alguien que te sujete la pipa y el mechero para la tercera calada. En solitario: dejar pipa y mechero en una mesa/bandeja al alcance antes de exhalar la primera.
      </InfoBoxX>

      <SectionTitleX c={c}>MÉTODO 2 — VAPORIZADOR ELÉCTRICO (E-MESH / YOCAN / APX VOLT)</SectionTitleX>
      <InfoBoxX c={c}>
        Los vaporizadores modernos son la mejor opción: control preciso de temperatura, sin llama, sin técnica compleja, eficiencia casi 100%.<br/><br/>
        <strong>Opciones recomendadas:</strong><br/>
        • <strong>E-mesh (RDA + mod con TC):</strong> el estándar oro. Malla de acero inoxidable calentada por control de temperatura. 190-200°C. Una calada = breakthrough con 25-30mg. Requiere montaje (RDA + mod con TC + malla SS316L). ~40-60€ total.<br/>
        • <strong>APX Volt 3.0:</strong> vaporizador de concentrados. Vaso de cuarzo. Setting 3 (2.8V). Cargar dosis en el vaso frío. Pulsar botón, esperar 2-3 segundos a que se funda, inhalar largamente. ~50€.<br/>
        • <strong>Yocan Evolve Plus con donut de cerámica:</strong> económico. Cargar dosis en la bobina de cerámica. Pulsos cortos (2-3 seg) con inhalación continua. La bobina original de cuarzo doble quema el DMT — comprar la de cerámica aparte. ~25-35€.<br/>
        • <strong>Divine Tribe v4/v5:</strong> crisol de cuarzo/SiC con control de temperatura. Excelente pero más caro. ~80-100€.<br/><br/>
        <strong>Ventaja de los vaporizadores:</strong> una sola calada larga = dosis completa. Sin malabares con mechero y pipa mientras el universo se disuelve.
      </InfoBoxX>

      <SectionTitleX c={c}>MÉTODO 3 — "THE MACHINE" (BOTELLA CASERA)</SectionTitleX>
      <InfoBoxX c={c}>
        El método DIY más popular. Una botella de vidrio pequeña (mini whisky, licor) con un agujero en la base y lana de acero en el cuello.<br/><br/>
        <strong>Construcción:</strong><br/>
        1. Botella de vidrio pequeña (50-200ml). Hacer un agujero de ~5-8mm en la base (taladro para vidrio o girar un clavo/tornillo con presión).<br/>
        2. Meter lana de acero INOXIDABLE (estropajo de acero inox, sin jabón) en el cuello de la botella. Compacta pero que pase aire.<br/>
        3. Cargar dosis en la lana de acero. Fundirla con mechero suave para que el DMT líquido impregne la lana (esto evita que el polvo se aspire).<br/>
        4. Tapar agujero de la base con el dedo. Aplicar llama suave al cuello (donde está la lana con DMT) mientras inhalas por el agujero de la base. El aire pasa por la lana caliente → vaporiza el DMT → entra en tus pulmones.<br/><br/>
        <strong>Cuesta 0€</strong> (materiales caseros). Muy efectiva cuando se pilla la técnica. La lana de acero distribuye el calor uniformemente evitando quemar el DMT.
      </InfoBoxX>

      <SectionTitleX c={c}>CHANGA — DMT + HIERBAS (FUMABLE)</SectionTitleX>
      <InfoBoxX c={c}>
        La changa es DMT impregnado en hojas/hierbas que contienen IMAO (inhibidores de la monoamino oxidasa). Al fumar la mezcla, el IMAO alarga y suaviza la experiencia. Duración: 20-40 min (vs 5-15 del DMT puro).<br/><br/>
        <strong>Hierbas base (portadoras):</strong><br/>
        • Hojas de Caapi seca (Banisteriopsis caapi) — tradicional, contiene harmina/harmalina (IMAO)<br/>
        • Ruda siria (Peganum harmala) — contiene harmina/harmalina, más potente que Caapi<br/>
        • Menta, hierbabuena — suave, sin IMAO, solo para sabor<br/>
        • Salvia divinorum — añade efecto disociativo (solo experimentados)<br/>
        • Damiana, pétalos de rosa, lavanda — aromáticas, sinérgicas<br/><br/>
        <strong>Preparación (método de impregnación):</strong><br/>
        1. Disolver 500mg-1g de DMT en ~10-20ml de alcohol de alta graduación (etanol 96%, vodka no sirve — demasiada agua) o acetona pura. NUNCA isopropílico (tóxico).<br/>
        2. Añadir 500mg-1g de mezcla de hierbas secas trituradas (proporción 1:1 DMT:hierba para changa fuerte, 1:2 o 1:3 para más suave).<br/>
        3. Remover para que todas las hierbas se empapen. Dejar evaporar el alcohol/acetona COMPLETAMENTE (12-24h en plato extendido, ventilación).<br/>
        4. Cuando esté completamente seco (sin olor a solvente), guardar en frasco hermético.<br/>
        5. Fumar en pipa normal, bong o liar en cigarrillo (aunque en papel se pierde algo).<br/><br/>
        <strong>Dosis:</strong> 50-100mg de mezcla (contiene 25-50mg de DMT si la proporción es 1:1). Empezar con 50mg de mezcla como test.
      </InfoBoxX>

      <SectionTitleX c={c}>RAPÉ YOPO (ANADENANTHERA) — TRADICIONAL INDÍGENA</SectionTitleX>
      <InfoBoxX c={c}>
        Tradición indígena amazónica y del Caribe. Polvo de semillas tostadas y trituradas de Anadenanthera peregrina (yopo) o Anadenanthera colubrina (vilca/cebil), soplado por la nariz con un tubo (kuripe para auto-administración, tepi para que te sople otra persona).<br/><br/>
        Las semillas contienen DMT + <GlossaryLink term="Bufotenina (5-HO-DMT)">bufotenina (5-HO-DMT)</GlossaryLink> + <GlossaryLink term="5-MeO-DMT">5-MeO-DMT</GlossaryLink> en proporciones variables.<br/><br/>
        <strong>Preparación tradicional:</strong> tostar semillas hasta que exploten/crujan. Triturar en mortero hasta polvo fino. Mezclar con cal (ceniza de caracol o cal viva en pequeña cantidad) para basificar y activar los alcaloides.<br/><br/>
        <strong>Dosis:</strong> 2-5g de polvo por fosa nasal. Efecto: muy intenso, 30-60 min. Picazón nasal extrema, lagrimeo, posibles náuseas/vómito. Visión cerrada profunda con geometría compleja. Solo para experimentados. El dolor nasal es parte de la experiencia tradicional (se considera purga).
      </InfoBoxX>

      <SectionTitleX c={c}>PHARMAHUASCA — DMT ORAL + IMAO SINTÉTICO</SectionTitleX>
      <InfoBoxX c={c}>
        Versión "farmacéutica" de la ayahuasca. En lugar de brebaje de plantas, se toma DMT cristalino puro + un IMAO sintético (moclobemida, harmina/harmalina purificada) o IMAO natural (extracto de ruda siria).<br/><br/>
        <strong>Protocolo típico:</strong><br/>
        1. Ayunar 6-8h antes.<br/>
        2. Tomar IMAO: 100-200mg harmina/harmalina o 150-300mg moclobemida. Esperar 30-60 minutos.<br/>
        3. Tomar DMT: 50-100mg DMT cristal disuelto en zumo/zumo de naranja (la acidez ayuda a disolver).<br/>
        4. Efectos: onset 30-45 min, pico 1-2h, total 4-6h.<br/><br/>
        <strong>Ventajas sobre ayahuasca tradicional:</strong> sin náuseas del brebaje, dosis precisas, sin sabor horrible, logística más simple. <strong>Desventajas:</strong> requiere DMT puro extraído (ilegal), se pierde el contexto ceremonial/vegetal.<br/><br/>
        <strong>⚠️ MISMA DIETA QUE AYAHUASCA:</strong> evitar alimentos ricos en tiramina (quesos curados, embutidos, vino, soja fermentada) 24h antes y después. SSRI/IMAO antidepresivos: 4-6 semanas off-med.
      </InfoBoxX>

      <SectionTitleX c={c}>VAPORIZADORES MODERNOS (CARTRIDGE / E-LIQUID)</SectionTitleX>
      <InfoBoxX c={c}>
        Método popular reciente: DMT disuelto en propilenglicol (PG) o mezcla PG/VG (vegetable glycerin) en cartuchos de vape estándar (tipo CCELL).<br/><br/>
        <strong>Preparación DIY:</strong> disolver 500mg-1g DMT en 1-2ml de PG (calentar suavemente al baño maría para ayudar a disolver). NO usar solo VG (el DMT precipita). Proporción típica: 1:1 (500mg DMT + 0.5ml PG). Cargar en cartucho CCELL de cerámica. Usar batería a 2.8-3.2V (potencia baja).<br/><br/>
        <strong>Dosis:</strong> cada calada de 3-5 segundos entrega ~3-5mg DMT (variable según concentración y potencia). 5-8 caladas para breakthrough con cartucho 1:1.<br/><br/>
        <strong>⚠️ PRECAUCIÓN:</strong> los cartuchos de mercado negro a menudo están adulterados (vitamina E, PG contaminado, otros psicodélicos). Si no lo has hecho tú, no sabes qué contiene.
      </InfoBoxX>
    </div>
  );
}

function EXPERIENCIA_DMT() {
  const c = DMT_COLORS;
  return (
    <div>
      <InfoBoxX c={c}>
        DMT fumado es probablemente la experiencia psicodélica más intensa conocida por el ser humano. Difícil de describir — la mayoría coinciden: "indescriptible, hay que vivirlo". Aquí intento dar una idea general.
      </InfoBoxX>

      <SectionTitleX c={c}>FASES TÍPICAS (5-15 MIN)</SectionTitleX>
      <div style={{ display: "grid", gap: "8px", marginBottom: "20px" }}>
        {[
          { tiempo: "0-30 segundos", fase: "Inhalación. Sabor intenso (plástico, chamuscado). Empuje rápido — sensación de aceleración corporal." },
          { tiempo: "30-90 segundos", fase: "ENTRADA. Patrones geométricos vivos, colores intensos, sensación de 'subir' o ser absorbido. Posible pánico inicial." },
          { tiempo: "90-180 segundos", fase: "BREAKTHROUGH (si dosis fue suficiente). Pérdida total de la realidad. Geometría imposible, 'entidades', sensación de estar en otro 'lugar'. Tiempo se distorsiona o desaparece." },
          { tiempo: "3-8 min", fase: "PICO. La experiencia varía enormemente: viajes interdimensionales, encuentros con seres, paisajes alienígenas, mensajes." },
          { tiempo: "8-12 min", fase: "DESCENSO. Vuelta gradual a la realidad. Visiones se desvanecen pero geometría sigue." },
          { tiempo: "12-15 min", fase: <>REGRESO. Realidad consensual vuelve. Sensación de <GlossaryLink term="Afterglow">afterglow</GlossaryLink>, asombro, posible necesidad de procesar.</> },
          { tiempo: "1-24 horas", fase: "INTEGRACIÓN. Reflexión sobre lo experimentado. Algunos reportan cambios de perspectiva profundos. Otros: solo memoria viva." },
        ].map((t, i) => (
          <div key={i} style={{ background: c.bg2, border: `1px solid ${c.border1}`, borderRadius: "8px", padding: "10px" }}>
            <div style={{ fontSize: "11px", color: c.accent1, fontWeight: "bold", letterSpacing: "1px", marginBottom: "3px" }}>{t.tiempo.toUpperCase()}</div>
            <div style={{ fontSize: "12px", color: c.accent3, lineHeight: "1.5" }}>{t.fase}</div>
          </div>
        ))}
      </div>

      <SectionTitleX c={c}>"ENTIDADES" — UN FENÓMENO COMÚN</SectionTitleX>
      <InfoBoxX c={c}>
        Una de las características más reportadas: encuentro con "entidades" o "seres". Pueden ser:<br/>
        🤖 Geometrías vivas, "elfos del DMT" (descritos por Terence McKenna)<br/>
        👁️ Ojos, formas humanoides, criaturas insectoides<br/>
        ✨ Seres de luz, ángeles, dioses<br/>
        🛸 Aliens, "la Reina del DMT"<br/><br/>
        Investigación de Rick Strassman ("DMT: La Molécula del Espíritu") documentó estos encuentros sistemáticamente. Si son "reales" o producto de la mente es debate filosófico/científico abierto. Lo que sí es real: la EXPERIENCIA es coherente entre miles de personas que nunca han hablado entre sí.
      </InfoBoxX>

      <SectionTitleX c={c}>EFECTOS POSITIVOS REPORTADOS</SectionTitleX>
      <InfoBoxX c={c}>
        ✨ Sensación de unión cósmica<br/>
        ✨ Pérdida de miedo a la muerte<br/>
        ✨ Insights sobre uno mismo / la realidad<br/>
        ✨ Resolución de traumas (uso terapéutico, en estudios)<br/>
        ✨ Apreciación profunda de la vida<br/>
        ✨ Curiosidad espiritual/filosófica
      </InfoBoxX>

      <SectionTitleX c={c}>EFECTOS NEGATIVOS POSIBLES</SectionTitleX>
      <ErrorCardX c={c}
        error="Bad trip / pánico"
        consecuencia="Si no estás preparado mentalmente, puede ser experiencia aterradora. Sensación de morir, de no volver, de estar atrapado."
        fix="Set/setting. Sitter. Recordar 'esto pasa en 15 min'. Respiración lenta. La experiencia siempre termina."
      />
      <ErrorCardX c={c}
        error={<><GlossaryLink term="HPPD">HPPD</GlossaryLink> (trastorno persistente de percepción)</>}
        consecuencia="Raro pero posible: alteraciones visuales persistentes después de la experiencia (motas, halos, geometría leve)."
        fix="Más común con uso frecuente. Espaciar experiencias mínimo 1 mes."
      />
      <ErrorCardX c={c}
        error="Disociación / desrealización persistente"
        consecuencia="Sensación duradera (días/semanas) de que la realidad no es real."
        fix="Integración con terapeuta especializado en psicodélicos. Auto-cuidado, dormir bien, journaling. Si dura más de un mes: profesional."
      />
    </div>
  );
}

function HARM_REDUCTION_DMT() {
  const c = DMT_COLORS;
  return (
    <div>
      <InfoBoxX c={c}>
        DMT es seguro físicamente (LD50 muy alto, no daña órganos). El riesgo es PSICOLÓGICO. Set/setting + harm reduction = experiencia transformadora. Sin estas precauciones = trauma persistente posible.
      </InfoBoxX>

      <SectionTitleX c={c}>CONTRAINDICACIONES</SectionTitleX>
      <ErrorCardX c={c}
        error="Diagnóstico psiquiátrico (esquizofrenia, bipolar, paranoia)"
        consecuencia="DMT puede activar episodios psicóticos. Algunas personas no recuperan estabilidad."
        fix="No tomar. Aunque tengas curiosidad. Especialmente si hay antecedentes familiares."
      />
      <ErrorCardX c={c}
        error="SSRI / antidepresivos"
        consecuencia="Reducción de efectos (DMT actúa en mismos receptores). También riesgo serotonérgico si combinado con IMAO (changa, ayahuasca)."
        fix="Off-meds 4-6 semanas (consultar médico). NUNCA mezclar."
      />
      <ErrorCardX c={c}
        error="Embarazo y lactancia"
        consecuencia="Sin estudios. Riesgo desconocido para feto/bebé."
        fix="No tomar."
      />
      <ErrorCardX c={c}
        error="Estado mental inestable / crisis emocional"
        consecuencia="DMT amplifica el estado mental. Si entras mal, sales peor."
        fix="Solo en momentos de estabilidad emocional. Esperar tras eventos traumáticos."
      />

      <SectionTitleX c={c}>SET (PREPARACIÓN MENTAL)</SectionTitleX>
      <StepX c={c} num={1} text="Investigar a fondo — leer experiencias en Erowid, ver videos de gente describiendo (Hamilton's Pharmacopeia es buen recurso)." />
      <StepX c={c} num={2} text="Definir intención: ¿curiosidad? ¿exploración espiritual? ¿procesar algo? Tener claro." />
      <StepX c={c} num={3} text="Estado emocional estable. Última semana sin grandes conflictos personales." />
      <StepX c={c} num={4} text="Aceptar la experiencia: 'lo que pase, pasará'. Resistir = pánico. Soltar = exploración." />

      <SectionTitleX c={c}>SETTING (ENTORNO)</SectionTitleX>
      <StepX c={c} num={1} text="Lugar tranquilo, oscuro o luz tenue. Cómodo (sofá, cama). Acostado o reclinado — DMT puede causar pérdida de control corporal." />
      <StepX c={c} num={2} text="SIN distracciones: móvil apagado, sin TV, sin ruido externo." />
      <StepX c={c} num={3} text="Música opcional: ambient suave, tambores, naturaleza. NO familiar. Auriculares ayudan a inmersión." />
      <StepX c={c} num={4} text="Bloquear 1-2h después para integración." />

      <SectionTitleX c={c}>SITTER OBLIGATORIO PRIMERA VEZ</SectionTitleX>
      <InfoBoxX c={c}>
        Una persona SOBRIA presente. Funciones:<br/>
        🤝 Si pides ayuda durante la experiencia, está ahí<br/>
        🚨 Si haces algo peligroso (caminar, dejar caer pipa caliente), interviene<br/>
        🚰 Después: agua, manta si frío, conversación tranquila<br/>
        👁️ NO interrumpir activamente. Solo presencia silenciosa<br/><br/>
        Idealmente: alguien con experiencia previa con DMT o psicodélicos.
      </InfoBoxX>

      <SectionTitleX c={c}>FRECUENCIA RECOMENDADA</SectionTitleX>
      <InfoBoxX c={c}>
        DMT no genera tolerancia (puedes "breakthrough" varias veces el mismo día). Pero PSICOLÓGICAMENTE: cada experiencia requiere integración. Recomendación:<br/>
        🗓️ Primera vez: SOLO una. Esperar mínimo 1 mes para reflexionar.<br/>
        🗓️ Después: máximo 1 vez al mes. Espaciar experiencias permite integrar insights.<br/>
        🗓️ Uso frecuente (varias veces a la semana) = riesgo de alienación, desrealización persistente.
      </InfoBoxX>

      <SectionTitleX c={c}>SI ALGO VA MAL</SectionTitleX>
      <InfoBoxX c={c}>
        😰 <strong>Pánico durante la experiencia:</strong> recordar "esto pasa en 15 min". Respiración lenta. Sitter habla suave. Cambiar música si ayuda.<br/>
        🤕 <strong>Mareo/náuseas después:</strong> normal en algunas personas. Hidratación, descanso.<br/>
        💔 <strong>Síntomas físicos extremos</strong> (taquicardia severa, dolor de pecho, dificultad respirar): muy raro pero llamar 112 si grave.<br/>
        🧠 <strong>Persistencia de efectos psicológicos &gt; 24h:</strong> contactar terapeuta especializado en psicodélicos. Servicios de integración existen (KAP, MAPS).<br/>
        ⏰ Anti-tóxicos España: <strong>915 620 420</strong>. Emergencias: <strong>112</strong>.
      </InfoBoxX>
    </div>
  );
}

function FAQ_DMT() {
  const c = DMT_COLORS;
  const [query, setQuery] = React.useState("");
  const faqs = [
    { q: "¿DMT es lo mismo que ayahuasca?", a: "Misma molécula psicoactiva (DMT), experiencias muy distintas. DMT fumado: 5-15 min, intenso, breakthrough. Ayahuasca: 4-6h, oral, IMAO + DMT, contemplativo. Lee guía Ayahuasca para más detalle." },
    { q: "¿Es legal cultivar Mimosa hostilis?", a: "Sí. Es planta ornamental sin restricciones legales en España. Comprar semillas, plantar, cultivar = todo legal. Lo que es ilegal es la extracción química del DMT y la posesión de DMT puro." },
    { q: "¿Puedo comprar corteza de Mimosa hostilis?", a: "Sí. La corteza seca (MHRB) se vende legalmente en EU como 'tinte natural' (es marrón-rojizo, tradicionalmente usado para teñir tejidos). Vendedores etnobotánicos UE. ~25-50€ por 100g." },
    { q: "¿Por qué DMT está prohibido si nuestro cuerpo lo produce?", a: "La paradoja legal famosa. La pineal produce trazas de DMT (estudios de Rick Strassman). Pero la regulación se hizo en los 70s (UN Convention 1971) sin tener en cuenta la endogenicidad. Hay reformas pendientes en algunos países." },
    { q: "¿Cuánto dura el efecto del DMT fumado?", a: "5-15 min total. Pico 3-8 min. Es la psicodélica más corta conocida. Por eso es atractiva — experiencia profunda en breve." },
    { q: "¿Genera adicción?", a: "No físicamente. La intensidad de la experiencia + la 'rareza' suele desincentivar uso frecuente. Algunas personas se obsesionan y abusan, pero raro." },
    { q: "¿Es mejor solo o con sitter?", a: "Primera vez: SIEMPRE con sitter. Después: depende de tu experiencia y comodidad. Solo es posible para experimentados pero pierdes red de seguridad si algo va mal." },
    { q: "¿Diferencia entre N,N-DMT, 5-MeO-DMT y 4-HO-DMT?", a: "Tres moléculas distintas:\n- N,N-DMT (esto): clásica, Mimosa, ayahuasca, intensa pero terrenal\n- 5-MeO-DMT: del sapo Bufo alvarius, MUCHO más intenso, 'unión cósmica', riesgo cardíaco real, NO recomendado\n- 4-HO-DMT (psilocina): es la molécula activa de las setas Psilocybe, oral, 4-6h" },
    { q: "¿Puedo hacer extracción casera?", a: "ILEGAL en España. Riesgos químicos reales (NaOH, solventes inflamables). Para uso personal de DMT, alternativas legales: ayahuasca casera o ceremonia con grupo religioso. Ver guía Ayahuasca." },
    { q: "¿Qué hago si quiero probar DMT pero todo es ilegal?", a: "Opciones:\n1. Cultivar Mimosa + ayahuasca casera (legal gris)\n2. Ceremonia con Santo Daime/UDV (legal en algunos contextos)\n3. Viajar a país donde sea legal (Brasil, Perú — turismo ayahuasquero)\n4. Esperar reformas legales (varios países están reconsiderando)" },
    { q: "¿Qué relación tiene el DMT con la pineal?", a: "Estudios de Rick Strassman (años 90) encontraron trazas de DMT en líquido cefalorraquídeo humano y mostraron que la pineal puede sintetizarlo. Hipótesis especulativa: liberación masiva de DMT al morir podría explicar near-death experiences. Ciencia aún no resuelta — investigación abierta." },
    { q: "¿Diferencia ayahuasca vs DMT vapeable?", a: "Ayahuasca: oral, 4-6h, contemplativa, con purga (vómito), ceremonial. DMT vapeable: 5-15 min, breakthrough total, intenso, sin preparación tan ritual. Mismas moléculas, experiencias funcionalmente distintas." },
    { q: "¿Compatible con cannabis?", a: "Algunos potencia el DMT (mezcla en changa). Cuidado: cannabis amplifica ansiedad — si propenso a paranoia, mejor sin cannabis. Investigar antes." },
    { q: "¿Por qué algunas personas no tienen breakthrough en su primera vez?", a: "Causas comunes: (1) dosis insuficiente — DMT necesita 30-50mg vaporizado bien para breakthrough completo, (2) técnica de inhalación pobre — debe inhalar lentamente y mantener 10+ segundos, (3) temperatura del vape mal — 250-300°C ideal, (4) miedo/ansiedad subconsciente que limita el surrender. Repetir con dosis correcta + mejor entorno suele funcionar." },
    { q: "¿Qué hago durante un mal viaje de DMT?", a: "Solo dura 5-15 min. Recordar: 'esto es DMT, va a pasar pronto'. Acostarse, ojos cerrados, respiración profunda lenta. Sitter habla calmado. La resistencia EMPEORA el viaje — soltar y observar es mejor. Tras 15 min volverás a la realidad." },
    { q: "¿Qué hace que el DMT sea tan visual?", a: "DMT activa receptores 5-HT2A en córtex visual con intensidad extrema. Patrones geométricos (mandala, fractales) son característicos del agonismo 5-HT2A — también se ven con LSD y setas en menor grado. Estructuras matemáticas reportadas son consistentes entre miles de usuarios sin contacto entre sí." },
    { q: "¿Existe el 'efecto Mantis' u otras entidades específicas?", a: "Sí, hay arquetipos consistentes en reportes: 'Machine Elves' (Terence McKenna), insectos/mantis, geometrías vivas, 'la Reina del DMT'. Estudios de Andrew Gallimore documentaron esto sistemáticamente. Si son 'reales' o construcciones de la mente está abierto a debate. Lo que sí es real: la coherencia entre reportes de usuarios independientes." },
    { q: "¿Puedo usar DMT terapéuticamente?", a: "Investigación clínica activa con DMT (Imperial College London, MAPS) para depresión resistente y ansiedad. Resultados preliminares prometedores. Pero ILEGAL en España fuera de ensayos. Alternativa: ayahuasca con grupo religioso reconocido (Santo Daime) tiene precedente de uso terapéutico." },
    { q: "¿Es peor que LSD/setas?", a: "MÁS INTENSO sí. PEOR no. Más corto (15 min vs 8h) lo hace más accesible para integración. Físicamente más seguro (no daño documentado). Mentalmente más demandante por la velocidad de la experiencia. No es 'malo' o 'bueno' — es DIFERENTE." },
    { q: "¿Funciona el DMT vaporizador?", a: "Sí, los vaporizadores tipo TerpPen o Volcano son más eficientes que pipa de cristal. Temperatura 250-300°C óptima. Dosis más controlada. Ventaja: menos pérdida por combustión vs pipa. Para principiantes: pipa con malla acero más barata pero menos eficiente." },
    { q: "¿Cómo afecta DMT al cuerpo durante la experiencia?", a: "Aumento moderado de presión arterial (10-30mmHg sistólica), taquicardia leve (10-20bpm extra), midriasis (pupilas dilatadas), posible vasoconstricción periférica. Sin daño documentado en personas sanas. Cardiopatía grave = NO." },
  ];

  const filtered = faqs.filter(f =>
    f.q.toLowerCase().includes(query.toLowerCase()) ||
    f.a.toLowerCase().includes(query.toLowerCase())
  );

  return (
    <div>
      <InfoBoxX c={c}>
        Preguntas comunes sobre DMT. Recursos: Erowid, libro "DMT: The Spirit Molecule" (Rick Strassman), documental "DMT: The Spirit Molecule" (Mitch Schultz), Hamilton's Pharmacopeia (Vice TV, episodio sobre DMT).
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

function BIBLIO_DMT() {
  const c = DMT_COLORS;
  return <BibliografiaBlock c={c}
    intro="Bibliografía consultada para guía DMT (Mimosa hostilis, Acacia, Chaliponga + extracción + uso). Mezcla literatura clásica (Strassman, Ott) + comunidad técnica DMT-Nexus + investigación neurociencia reciente."
    libros={[
      { titulo: "DMT: The Spirit Molecule", autor: "Rick Strassman", año: "2001", nota: "Único estudio clínico moderno con DMT IV. Entrevistas + farmacología + filosofía. Lectura obligada." },
      { titulo: "Pharmacotheon: Entheogenic Drugs, Their Plant Sources and History", autor: "Jonathan Ott", año: "2ª ed. 1996", nota: "Capítulo profundo sobre triptaminas y plantas-DMT. Química, dosificación, fuentes." },
      { titulo: "DMT and the Soul of Prophecy", autor: "Rick Strassman", año: "2014", nota: "Continuación con marco teológico-judaico. Más especulativo que el primero." },
      { titulo: "TIHKAL: Tryptamines I Have Known and Loved", autor: "Alexander & Ann Shulgin", año: "1997", nota: "Química y experiencias con triptaminas. DMT y análogos." },
      { titulo: "Ayahuasca Analogues: Pangean Entheogens", autor: "Jonathan Ott", año: "1994", nota: "Específico sobre pharmahuasca (DMT + MAOI fuera de Banisteriopsis tradicional)." },
      { titulo: "Plants of the Gods", autor: "Schultes & Hofmann", año: "1979", nota: "Capítulo sobre yopo, vilca, otras fuentes amerindias de DMT." },
      { titulo: "My Altered States", autor: "Rick Strassman", año: "2024", nota: "Narrativa personal ilustrada del autor de 'DMT: The Spirit Molecule'. Reflexión madura sobre la investigación temprana." },
    ]}
    web={[
      { nombre: "DMT-Nexus Wiki", url: "https://wiki.dmt-nexus.me", nota: "Recurso técnico #1 mundial. Extracciones (STB, A/B), química, plantas, harmalas. Base imprescindible." },
      { nombre: "DMT-Nexus Forum", url: "https://www.dmt-nexus.me", nota: "Foro activo. Reportes, troubleshoot extracciones, identificación de plantas." },
      { nombre: "Erowid DMT Vault", url: "https://erowid.org/chemicals/dmt/", nota: "Reportes + farmacología + history + legalidad." },
      { nombre: "The Nexian (revista PDF descargable)", nota: "Revista de la comunidad DMT-Nexus. PDFs gratuitos con artículos profundos." },
      { nombre: "Ott's Pharmacotheon (online supplements)", nota: "Material complementario online del libro." },
    ]}
    comunidad={[
      { nombre: "r/DMT (Reddit)", nota: "Comunidad grande de experiencias y dosificación. Cuidado: muchos posts no técnicos." },
      { nombre: "DMT-Nexus", nota: "Foro técnico de referencia. Threads sobre extracciones STB, A/B, freebase, NN-DMT vs 5-MeO-DMT." },
      { nombre: "r/AyahuascaCircle / r/Ayahuasca", nota: "Para análogos pharmahuasca y MAOIs (harmalas)." },
      { nombre: "Mulga Nation Forums", nota: "Foco en Acacia spp. de Australia (alternativas Mimosa)." },
    ]}
    ciencia={[
      { nombre: "Strassman Lab publications", url: "https://www.rickstrassman.com", nota: "Página personal de Rick Strassman. Papers descargables." },
      { nombre: "Cogent Society", url: "https://cottagesociety.org", nota: "Investigación independiente sobre psicodélicos." },
      { nombre: "MAPS DMT papers", url: "https://maps.org", nota: "Repositorio + actualizaciones de research." },
      { nombre: "Imperial College Psychedelic Research (extended-state DMT)", url: "https://www.imperial.ac.uk/psychedelic-research-centre/", nota: "Estudios recientes con infusión continua DMT." },
      { nombre: "Algernon Pharmaceuticals (DMT for stroke trials)", nota: "Aplicación médica DMT — fase clínica." },
      { nombre: "Luan et al. (2024) — 'Psychological and physiological effects of extended DMT' (J. Psychopharmacology)", url: "https://journals.sagepub.com/doi/10.1177/02698811231196877", nota: "Estudio piloto Imperial College con infusión IV continua de DMT. Seguro y bien tolerado. Cita fundamental para extended-state." },
      { nombre: "Imperial — 'Bendy X-rays and DMT infusions' (2024)", url: "https://www.imperial.ac.uk/news/249434/bendy-x-rays-dmt-infusions-news-from/", nota: "Update sobre el programa de infusión continua. Disclosure: Algernon advisory + consultoría Nutt." },
      { nombre: "Imperial — DMT Brain Imaging (2025)", url: "https://www.imperial.ac.uk/news/243893/advanced-brain-imaging-study-hints-dmt/", nota: "Imaging avanzado sobre cómo DMT altera percepción." },
    ]}
    harm={[
      { nombre: "PsychonautWiki — DMT", url: "https://psychonautwiki.org/wiki/N,N-DMT", nota: "Documento técnico. Dosis vape vs IV, interacciones, duración." },
      { nombre: "TripSit DMT", url: "https://drugs.tripsit.me/dmt", nota: "Resumen harm reduction." },
      { nombre: "Erowid DMT Reports", url: "https://erowid.org/chemicals/dmt/dmt_experience.shtml", nota: "Reportes de experiencias por dosis y método." },
      { nombre: "DMT-Nexus Welcome / Newcomers Guide", url: "https://wiki.dmt-nexus.me/Newcomer", nota: "Guía completa para principiantes — set/setting, dosis, qué esperar." },
      { nombre: "Energy Control", url: "https://energycontrol.org", nota: "Análisis sustancias en España. Confirman pureza de extractos." },
      { nombre: "'Best practices for first psychedelic experiences' — Harm Reduction Journal (2025)", url: "https://link.springer.com/article/10.1186/s12954-025-01337-2", nota: "Estudio comunitario (n=581) que advierte explícitamente: ayahuasca/DMT NO recomendados para principiantes. Citable directo." },
    ]}
  />;
}
