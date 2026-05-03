// DMT — N,N-Dimetiltriptamina
// Cultivo de Mimosa hostilis = LEGAL. Extracción química = ILEGAL en España.
// Esta guía cubre cultivo + información educativa. NO da recetas paso-a-paso de extracción.

function INTRO_DMT() {
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
      <div style={{ display: "grid", gap: "8px" }}>
        {[
          { tiempo: "Día 0", evento: "🛒 Comprar semillas/esquejes Mimosa hostilis" },
          { tiempo: "Mes 1-3", evento: "🌱 Germinación + plantación inicial" },
          { tiempo: "Año 1-2", evento: "🌳 Crecimiento (climas cálidos rápido, fríos lento)" },
          { tiempo: "Año 3-5", evento: "🪵 Cosecha de corteza posible (raíz)" },
          { tiempo: "Atajo:", evento: "🛒 Comprar corteza Mimosa Hostilis (MHRB) seca online (legal en EU)" },
        ].map((t, i) => (
          <div key={i} style={{ background: c.bg2, border: `1px solid ${c.border1}`, borderRadius: "8px", padding: "10px" }}>
            <div style={{ fontSize: "11px", color: c.accent1, fontWeight: "bold", letterSpacing: "1px", marginBottom: "3px" }}>{t.tiempo.toUpperCase()}</div>
            <div style={{ fontSize: "12px", color: c.accent3 }}>{t.evento}</div>
          </div>
        ))}
      </div>

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
        ⚠️ <strong>SECCIÓN EDUCATIVA SOLAMENTE.</strong> La extracción casera de DMT es ILEGAL en España. Esta guía explica el proceso a alto nivel para entender la química involucrada, NO da recetas paso-a-paso. Para uso real: ayahuasca tradicional (legal gris) o ceremonia con grupo religioso reconocido.
      </InfoBoxX>

      <SectionTitleX c={c}>PROCESO BÁSICO — EXTRACCIÓN ÁCIDO/BASE (A/B)</SectionTitleX>
      <InfoBoxX c={c}>
        El método "A/B" es el estándar amateur. Idea: el DMT es soluble en solventes no polares (como heptano, naftas), pero solo en su forma de "base libre". En medio ácido está en forma de sal soluble en agua. En medio básico (NaOH/lejía) se convierte a base libre.<br/><br/>
        Pasos generales (educativos):<br/>
        1. <strong>Acidificación:</strong> mezclar polvo de planta con agua + vinagre. Hervir varias horas. Cola → líquido ácido con DMT como sal disuelta.<br/>
        2. <strong>Basificación:</strong> añadir NaOH (lejía sólida) hasta pH muy alto (13+). El DMT cambia a base libre.<br/>
        3. <strong>Extracción:</strong> añadir solvente no polar (heptano farmacéutico). Agitar. El DMT migra al solvente.<br/>
        4. <strong>Separación:</strong> capa solvente arriba (con DMT), capa acuosa abajo (sin DMT). Separar.<br/>
        5. <strong>Cristalización:</strong> congelar el solvente. El DMT precipita como cristales blancos/amarillos.<br/>
        6. <strong>Filtrado:</strong> recoger cristales con filtro café. Re-cristalizar para purificar.
      </InfoBoxX>

      <WarningBoxX c={c}>
        ⚠️ <strong>RIESGOS REALES (otra razón para no hacer):</strong><br/>
        🧪 NaOH (sosa cáustica) = quemaduras químicas graves al contacto con piel/ojos<br/>
        💨 Solventes inflamables = riesgo de incendio/explosión si calor cerca<br/>
        ⚗️ Sin equipo de laboratorio (campana extractora, gafas, guantes nitrilo) = inhalación tóxica<br/>
        ⚖️ ILEGAL = problemas con la ley si te detectan<br/>
        💩 Producto impuro = mucha gente que extrae casero termina con DMT contaminado con yuck (otros alcaloides, restos de planta)
      </WarningBoxX>

      <SectionTitleX c={c}>ALTERNATIVAS LEGALES</SectionTitleX>
      <InfoBoxX c={c}>
        Si el objetivo es experimentar con DMT, opciones legales/grises:<br/>
        🍵 <strong>Ayahuasca casera:</strong> brebaje legal gris. Misma molécula activa, experiencia distinta (más larga, oral, contemplativa). Ver guía Ayahuasca.<br/>
        🕯️ <strong>Ceremonia con grupo religioso:</strong> Santo Daime, UDV. Brebaje preparado por especialistas, contexto seguro.<br/>
        🌳 <strong>Cultivar Mimosa hostilis sin extraer:</strong> placer botánico de tener un árbol con poder. Algunas tradiciones (Jurema en Brasil) consumen el brebaje de Mimosa sin IMAO (efecto distinto, más sutil).<br/>
        🚫 <strong>Comprar DMT cristal:</strong> NO hacer. Mercado negro = pureza/contaminación impredecible + ilegalidad.
      </InfoBoxX>

      <SectionTitleX c={c}>ESTAFAS COMUNES EN MERCADO NEGRO</SectionTitleX>
      <ErrorCardX c={c}
        error="Comprar 'DMT' a desconocido"
        consecuencia="Polvo blanco vendido como DMT puede ser cualquier cosa: 5-MeO-DMT (mucho más intenso/peligroso), 4-AcO-DMT, 2C-B, anfetamina, fentanilo."
        fix="No comprar. La única forma de saber qué consumes es: cultivar tú o ceremonia con grupo confiable. Si compras: usar test kit de reactivos (Marquis, Mecke) y/o servicio de testing como Energy Control."
      />
    </div>
  );
}

function CONSUMO_DMT() {
  const c = DMT_COLORS;
  return (
    <div>
      <InfoBoxX c={c}>
        Información sobre cómo se consume DMT en sus diferentes formas. Sólo educativo — la posesión de DMT cristal es ilegal en España.
      </InfoBoxX>

      <SectionTitleX c={c}>FUMADO — CRISTAL PURO</SectionTitleX>
      <InfoBoxX c={c}>
        Forma más intensa. Pipa de vidrio o vaporizador. Dosis (educativo): 25-50mg para experiencia completa. La temperatura es crítica — DMT se vaporiza a 250-300°C, se quema (destruye) a 400°C+. Vaporizadores tipo "TerpPen" o pipa con malla de acero son los métodos comunes.<br/><br/>
        <strong>Experiencia:</strong> efectos en SEGUNDOS. Pico a los 30-60s. Total 5-15 min. "Breakthrough" = pérdida total de la realidad consensual.
      </InfoBoxX>

      <SectionTitleX c={c}>CHANGA</SectionTitleX>
      <InfoBoxX c={c}>
        Mezcla DIY: hojas/hierbas (caapi seca, ruda siria, mate, menta, salvia divinorum) + DMT impregnado. Se fuma como mezcla.<br/><br/>
        Ventaja: la hierba alarga el efecto (20-40 min en lugar de 5-15) gracias al IMAO de las plantas. Más manejable, menos brutal que cristal puro.<br/><br/>
        Desventaja: requiere DMT cristalizado primero. La preparación es DIY.
      </InfoBoxX>

      <SectionTitleX c={c}>RAPÉ YOPO (SNORTADO)</SectionTitleX>
      <InfoBoxX c={c}>
        Tradicional indígena. Polvo de semillas tostadas y trituradas de Anadenanthera peregrina, soplado por la nariz con un tubo. Contiene DMT + <GlossaryLink term="Bufotenina (5-HO-DMT)">bufotenina (5-HO-DMT)</GlossaryLink> + <GlossaryLink term="5-MeO-DMT">5-MeO-DMT</GlossaryLink>.<br/><br/>
        Efecto: muy intenso, dura 30-60 min. Picazón nasal extrema, lágrimeo, posibles náuseas. Visión cerrada profunda.<br/><br/>
        Solo experimentados. Cultivo del árbol posible pero MUY lento.
      </InfoBoxX>

      <SectionTitleX c={c}>VAPORIZADORES MODERNOS</SectionTitleX>
      <InfoBoxX c={c}>
        Pens de vape con cartuchos de DMT (e-liquid mezclado con propileno glicol o glicerina vegetal): forma popular reciente en mercado clandestino. Más fácil de dosificar que pipa de vidrio. Pero CALIDAD VARIABLE — muchos cartuchos están adulterados.
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
          { tiempo: "12-15 min", fase: "REGRESO. Realidad consensual vuelve. Sensación de afterglow, asombro, posible necesidad de procesar." },
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
