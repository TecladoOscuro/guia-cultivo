// ============================================================
//  TOXICAS GUIDE — Plantas Tóxicas & Venenos Botánicos
//  Cada planta: intro, toxicología, cultivo, extracción hist.,
//  usos etnobotánicos, identificación, harm reduction
// ============================================================

function INTRO_TOXICAS() {
  const c = TOXICAS_COLORS;
  return (
    <div>
      <InfoBoxX c={c}>
        Guía documental de plantas altamente tóxicas: alcaloides tropánicos (Brugmansia), glucósidos cardiacos (Adelfa, Dedalera, Tejo, Lirio del Valle), alcaloides variados (Acónito, Cicuta, Cólquico), lectinas (Ricino) y más. Información para reconocerlas, entender su toxicología, su historia y cultivarlas de forma segura como ornamentales con respeto absoluto.
      </InfoBoxX>

      <div style={{ display: "grid", gridTemplateColumns: "1fr 1fr", gap: "10px", marginBottom: "16px" }}>
        <StatBoxX c={c} label="☠️ TIER ROJO MAX" value="Acónito, Cicuta, Ricino" />
        <StatBoxX c={c} label="⚠️ TIER ROJO" value="Brugmansia, Adelfa, Tejo, Dedalera, Cólquico" />
        <StatBoxX c={c} label="🧬 Familias" value="Solanáceas, Apocináceas, Ranunculáceas, Euforbiáceas, Liliáceas" />
        <StatBoxX c={c} label="📍 España" value="Todas presentes — adelfa y tejo omnipresentes" />
      </div>

      <SectionTitleX c={c} title="⚠️ Por qué documentar plantas venenosas" />
      <StepX c={c} n="1" title="Identificación = seguridad" desc="Cicuta maculatum se confunde con perejil silvestre. Dedalera con borraja. Acónito con rábano rusticano. Conocer estas plantas salva vidas — las tuyas y las de otros." />
      <StepX c={c} n="2" title="Historia etnobotánica real" desc="Estas plantas han formado la historia: atropina (Belladona) en oftalmología, digoxina (Dedalera) en cardiología, colchicina (Cólquico) en gota, taxol (Tejo) en quimioterapia. El veneno y el remedio son la misma molécula a distinta dosis." />
      <StepX c={c} n="3" title="Cultivo ornamental responsable" desc="Adelfa en autopistas, Brugmansia en jardines, Tejo en cementerios, Dedalera en bordes de bosque — las tenemos en todas partes. Saber qué son y cómo comportarse es esencial, especialmente si tienes niños o mascotas." />
      <StepX c={c} n="4" title="Primera ayuda básica" desc="Ante sospecha de ingestión de cualquier planta de esta guía: URGENCIAS INMEDIATO. Teléfono Toxicología España: 91 562 04 20 (24h). NO inducir vómito sin indicación médica — en algunos casos empeora. Llevar muestra o foto de la planta." />

      <SectionTitleX c={c} title="🧬 Tiers de toxicidad" />
      <StepX c={c} n="☠️" title="TIER ROJO MÁXIMO — Riesgo vital con cantidades mínimas" desc="Acónito (aconitina — bloqueo canales Na+): 2-3 hojas pueden matar un adulto. Cicuta (coniina — bloqueo nAChR): la planta del veneno de Sócrates. Ricino (ricina — inhibición síntesis proteica irreversible): semilla más tóxica del mundo (DL50 ~1 μg/kg)." />
      <StepX c={c} n="⚠️" title="TIER ROJO — Tóxico severo, potencialmente letal" desc="Brugmansia y solanáceas tropánicas (atropina, escopolamina): síndrome anticolinérgico. Adelfa y Dedalera (glucósidos cardiacos): arritmia. Tejo (taxina): PCR. Cólquico (colchicina): fallo multiorgánico lento." />
      <StepX c={c} n="🌿" title="Cultivo ornamental: prácticas seguras" desc="GUANTES siempre al manipular. Etiqueta VENENO visible. Lejos de niños, mascotas. No compostar partes — bolsa residuos sólidos. No quemar (humo tóxico). No meter en la boca. Lavar manos después." />
    </div>
  );
}

function COMPRA_TOXICAS() {
  const c = TOXICAS_COLORS;
  const items = [
    // Comunes en viveros
    { item: "🌺 Adelfa (Nerium oleander) — planta", precio: "3-15€", donde: "Vivero / Leroy Merlin", nota: "La más fácil de encontrar. Cualquier vivero la tiene. Colores: rosa, blanco, rojo, salmón. NO siempre etiquetan la toxicidad — pregunta al encargado.", planta: "Adelfa", fuente: "Vivero físico" },
    { item: "🌲 Tejo (Taxus baccata) — arbolito topiaria", precio: "8-25€", donde: "Vivero / Leroy Merlin", nota: "Muy usado para setos y bolas topiaria. Viveros lo tienen habitualmente. Crecimiento lento — el de 40cm tiene ya 3-5 años.", planta: "Tejo", fuente: "Vivero físico" },
    { item: "🤍 Lirio del Valle (Convallaria majalis) — rizoma o maceta", precio: "3-10€", donde: "Vivero / Floristería", nota: "Disponible en primavera (marzo-mayo) en floristerías y viveros. Rizomas en bolsas (5-10 unidades) en grandes superficies. Fuera de temporada: buscar online.", planta: "Lirio del Valle", fuente: "Vivero físico" },
    { item: "❄️ Eléboro (Helleborus niger / orientalis) — maceta", precio: "5-18€", donde: "Vivero especializado", nota: "Disponible otoño-invierno (su temporada de floración). H. orientalis tiene más variedades de color. H. niger (rosa de Navidad) florece en diciembre.", planta: "Eléboro", fuente: "Vivero físico" },
    { item: "🫐 Laureola / Torvisco (Daphne) — arbolito", precio: "8-22€", donde: "Vivero especializado", nota: "D. mezereum y D. laureola en viveros de planta forestal y jardinería. A veces bajo 'Dafne'. Floración invernal muy ornamental.", planta: "Laureola", fuente: "Vivero físico" },
    // Online semillas
    { item: "🔴 Ricino (Ricinus communis) — semillas", precio: "1-3€ / sobre", donde: "Tienda online semillas", nota: "Buscar en Seeds Gallery, Kiepenkerl, Sativa. Variedades decorativas: 'Carmencita Red' (hojas rojas), 'Impala' (compacta), 'Zanzibar' (gigante). Germinación muy fácil.", planta: "Ricino", fuente: "Online semillas" },
    { item: "💜 Dedalera (Digitalis purpurea) — semillas", precio: "2-5€ / sobre", donde: "Tienda online semillas", nota: "Muy fácil de germinar, bienal. Sembrar julio-agosto para florecer siguiente año. También en tiendas de flores silvestres (wildflower seeds). Variedades: blanca, rosa, púrpura moteada.", planta: "Dedalera", fuente: "Online semillas" },
    { item: "💙 Acónito (Aconitum napellus) — semillas", precio: "3-8€ / sobre", donde: "Tienda online semillas", nota: "Seeds Gallery, Plant World Seeds. Necesita estratificación fría: humedecer + nevera 4 semanas antes de germinar. Germinación lenta (3-6 semanas).", planta: "Acónito", fuente: "Online semillas" },
    { item: "🌸 Cólquico (Colchicum autumnale) — cormos", precio: "4-10€ / 5 cormos", donde: "Tienda online bulbos", nota: "Comprar agosto-septiembre para floración otoñal. Bakker, Van Meuwen, DutchGrown (envío a España). También DeBollen.com. Plantar rápido — florece solo semanas después.", planta: "Cólquico", fuente: "Online bulbos" },
    { item: "🎺 Brugmansia — esqueje enraizado", precio: "15-40€", donde: "Online tropicales / eBay", nota: "Viveros de plantas tropicales y bonsai. eBay jardín. Variedades: B. suaveolens (blanca/amarilla, más común), B. arborea (blanca), B. sanguinea (naranja-roja). Esqueje enraizado preferible a semilla.", planta: "Brugmansia", fuente: "Online tropical" },
    // Seguridad
    { item: "🧤 Guantes nitrilo — caja 100ud (talla L/M)", precio: "12-20€", donde: "Farmacia / Amazon", nota: "IMPRESCINDIBLE antes de comprar ninguna planta. Nitrilo (no látex — puede ser permeable a aconitina). Usar siempre al manipular, regar, podar o trasplantar cualquier planta de esta guía.", planta: "Seguridad", fuente: "Farmacia / Amazon" },
    { item: "🏷️ Etiquetas 'VENENO - NO TOCAR' adhesivas", precio: "3-6€", donde: "Papelería / Amazon", nota: "Etiquetar cada maceta visible. Especialmente importante si hay visitas con niños o mascotas. No asumir que la gente sabe de la toxicidad por el aspecto.", planta: "Seguridad", fuente: "Papelería" },
    { item: "📱 App iNaturalist", precio: "Gratis", donde: "App Store / Google Play", nota: "Para identificación botánica con foto. Antes de comprar una planta desconocida online — verificar que recibes lo que pediste. Foto de la planta recibida + iNaturalist = confirmación.", planta: "Seguridad", fuente: "App" },
  ];

  const plantas = ["Adelfa", "Tejo", "Lirio del Valle", "Eléboro", "Laureola", "Ricino", "Dedalera", "Acónito", "Cólquico", "Brugmansia", "Seguridad"];
  const [filterPlanta, setFilterPlanta] = React.useState([]);
  const [filterFuente, setFilterFuente] = React.useState([]);
  const fuentes = ["Vivero físico", "Online semillas", "Online bulbos", "Online tropical", "Farmacia / Amazon", "Papelería", "App"];

  const togglePlanta = (p) => setFilterPlanta(s => s.includes(p) ? s.filter(x => x !== p) : [...s, p]);
  const toggleFuente = (f) => setFilterFuente(s => s.includes(f) ? s.filter(x => x !== f) : [...s, f]);

  const filtered = items.filter(i =>
    (filterPlanta.length === 0 || filterPlanta.includes(i.planta)) &&
    (filterFuente.length === 0 || filterFuente.includes(i.fuente))
  );

  return (
    <div>
      <InfoBoxX c={c}>
        Lista completa de compra para las plantas tóxicas documentadas en esta guía: dónde comprar plantas ornamentales, semillas, bulbos y equipo de seguridad imprescindible.
      </InfoBoxX>

      <div style={{ background: c.bg2, border: `2px solid ${c.accent1}`, borderRadius: "10px", padding: "14px", marginBottom: "16px" }}>
        <div style={{ fontSize: "13px", fontWeight: "bold", color: c.accent1, marginBottom: "8px" }}>🧤 ANTES DE COMPRAR: seguridad primero</div>
        <div style={{ fontSize: "12px", color: c.accent3, lineHeight: "1.6" }}>
          1. <strong>Guantes nitrilo</strong> — tener antes de que llegue cualquier planta<br/>
          2. <strong>Etiquetas VENENO</strong> — poner el día que plantas/trasplantas<br/>
          3. <strong>Avisar a convivientes</strong> — explicar el riesgo<br/>
          4. <strong>Teléfono guardado:</strong> Toxicología 91 562 04 20 · Urgencias 112
        </div>
      </div>

      <SectionTitleX c={c} title="FILTRAR POR PLANTA" />
      <div style={{ display: "flex", gap: "6px", marginBottom: "10px", flexWrap: "wrap" }}>
        {plantas.map(p => {
          const active = filterPlanta.includes(p);
          return (
            <button key={p} onClick={() => togglePlanta(p)} style={{
              background: active ? c.accent1 : "transparent",
              color: active ? c.bg : c.accent2,
              border: `1.5px solid ${c.accent1}`,
              borderRadius: "16px", padding: "4px 10px",
              fontSize: "11px", fontWeight: "bold", transition: "all 0.15s",
            }}>{p}</button>
          );
        })}
      </div>

      <SectionTitleX c={c} title="FILTRAR POR FUENTE" />
      <div style={{ display: "flex", gap: "6px", marginBottom: "14px", flexWrap: "wrap" }}>
        {fuentes.map(f => {
          const active = filterFuente.includes(f);
          return (
            <button key={f} onClick={() => toggleFuente(f)} style={{
              background: active ? c.border2 : "transparent",
              color: active ? c.textBright : c.accent2,
              border: `1.5px solid ${c.border2}`,
              borderRadius: "16px", padding: "4px 10px",
              fontSize: "11px", transition: "all 0.15s",
            }}>{f}</button>
          );
        })}
      </div>

      {(filterPlanta.length > 0 || filterFuente.length > 0) && (
        <button onClick={() => { setFilterPlanta([]); setFilterFuente([]); }} style={{
          background: "transparent", color: c.accent2, border: "none",
          fontSize: "11px", marginBottom: "14px", textDecoration: "underline", padding: 0,
        }}>✕ Limpiar filtros</button>
      )}

      <SectionTitleX c={c} title={`LISTA COMPRA (${filtered.length}/${items.length})`} />
      {filtered.map((item, i) => (
        <div key={i} style={{ background: c.bg2, border: `1px solid ${c.border1}`, borderLeft: `3px solid ${c.accent1}`, borderRadius: "10px", padding: "12px", marginBottom: "8px" }}>
          <div style={{ display: "flex", justifyContent: "space-between", marginBottom: "6px" }}>
            <div style={{ fontSize: "13px", fontWeight: "bold", color: c.textBright }}>{item.item}</div>
            <div style={{ fontSize: "11px", color: c.accent1, fontWeight: "bold", whiteSpace: "nowrap", marginLeft: "8px" }}>{item.precio}</div>
          </div>
          <div style={{ fontSize: "10px", padding: "2px 8px", borderRadius: "10px", background: c.bg3, color: c.accent2, display: "inline-block", marginBottom: "6px" }}>{item.fuente}</div>
          <div style={{ fontSize: "12px", color: c.accent3, lineHeight: "1.5" }}>{item.nota}</div>
        </div>
      ))}

      <InfoBoxX c={c}>
        💡 <strong>Vendors online recomendados semillas ornamentales ES/EU:</strong><br/>
        Seeds Gallery (ES): semillas Digitalis, Aconitum, Ricinus<br/>
        DutchGrown / Bakker Spalding: bulbos Colchicum, Convallaria<br/>
        Plant World Seeds (UK): acónito, dedalera variedades raras<br/>
        eBay Jardín: Brugmansia, plantas tropicales raras<br/>
        Viveros locales: Adelfa, Tejo, Eléboro — mejor en persona para ver calidad
      </InfoBoxX>
    </div>
  );
}

function BRUGMANSIA() {
  const c = TOXICAS_COLORS;
  return (
    <div>
      <InfoBoxX c={c}>
        Brugmansia suaveolens / arborea — Floripondio. Solanácea arbustiva de flores trompeta colgantes, espectacular, frecuente en jardines de Barcelona y zonas cálidas. Prima hermana de Datura: mismo mecanismo tropánico, efectos similares pero planta mucho más grande y visual.
      </InfoBoxX>

      <div style={{ display: "grid", gridTemplateColumns: "1fr 1fr", gap: "10px", marginBottom: "16px" }}>
        <StatBoxX c={c} label="☠️ Toxicidad" value="TIER ROJO — tropano (atropina, escopolamina, hiosciamina)" />
        <StatBoxX c={c} label="🌺 Apariencia" value="Arbusto 2-5m, flores trompeta blancas/amarillas/rosas 20-30cm colgantes" />
        <StatBoxX c={c} label="📍 Origen" value="Andes tropicales (Ecuador, Perú). Extinguida en estado silvestre" />
        <StatBoxX c={c} label="🏙️ España" value="Jardines y parques zonas cálidas — Barcelona, Valencia, Canarias. Común" />
      </div>

      <SectionTitleX c={c} title="🧬 Toxicología" />
      <StepX c={c} n="1" title="Alcaloides tropánicos" desc="Toda la planta: hojas, flores, semillas, raíz. Mismo mecanismo que Datura/Estramonio — antagonistas muscarínicos (bloqueo acetilcolina). Síndrome anticolinérgico: boca seca extrema, pupila midriásica fija, taquicardia, retención urinaria, confusión, delirio real (no trip controlable), hipertermia, convulsiones, coma. Semillas: mayor concentración." />
      <StepX c={c} n="2" title="Sin dosis psicoactiva segura" desc="No existe dosis recreativa. La diferencia entre efecto leve y toxicidad grave es mínima y varía entre plantas e incluso entre hojas de la misma planta según temporada. Hospitalizaciones en países andinos donde se usa chamánicamente son frecuentes incluso con guías experimentados." />
      <StepX c={c} n="3" title="Inhalación vapor nocturna" desc="Floripondio libera alcaloides por las noches especialmente. Dormir bajo un floripondio en flor en espacio cerrado puede producir síntomas leves. Ventilación obligatoria." />

      <SectionTitleX c={c} title="🌱 Cultivo ornamental BCN" />
      <StepX c={c} n="1" title="Clima y sustrato" desc="Subtropical adaptado a BCN perfectamente. Exterior protegido de heladas (aguanta hasta -2°C puntual). Macetón 25L+ o suelo bien drenado. Sustrato rico, pH 6-7. Sol pleno o semisombra." />
      <StepX c={c} n="2" title="Reproducción" desc="Esqueje (más fácil): rama 20-30cm, enraíza en agua o perlita en 3-6 semanas. Semillas: viable pero lento (2-3 meses germinación). Crece rápido en verano — puede alcanzar 2m en primera temporada en BCN." />
      <StepX c={c} n="3" title="Cuidados" desc="Riego abundante en verano — bebe mucho. Fertilizante NPK cada 2 semanas durante crecimiento. Poda post-floración. En invierno BCN: reducir riego, puede perder hojas. Proteger heladas con tela anti-helada si necesario." />
      <StepX c={c} n="4" title="Seguridad en el jardín" desc="ETIQUETA VISIBLE: 'VENENO — No tocar sin guantes'. Especialmente peligrosa para niños (flores atractivas). En jardín privado con supervisión = seguro. En jardín público con paso de niños: NO plantar." />

      <SectionTitleX c={c} title="📜 Historia etnobotánica" />
      <StepX c={c} n="1" title="Uso andino chamánico" desc="Brugmansia ha sido usada durante milenios por chamanes andinos (curanderos) como planta de poder para diagnóstico y adivinación. El ritual requiere años de aprendizaje con guías experimentados. Muerte por uso sin guía = registrado en múltiples comunidades." />
      <StepX c={c} n="2" title="Extracción histórica de escopolamina" desc="Escopolamina aislada de Brugmansia y otras solanáceas. Usada médicamente como antiemético, parche transdérmico para mareo y (controvertidamente) como 'suero de la verdad' en interrogatorios. Extracción: proceso de laboratorio con solventes orgánicos — solo a nivel industrial o laboratorio controlado." />

      <SectionTitleX c={c} title="🧪 Extracción y uso" />
      <StepX c={c} n="1" title="Compuestos activos" desc="Atropina, escopolamina, hiosciamina (alcaloides tropánicos). Concentración en flores > hojas > tallos." />
      <StepX c={c} n="2" title="Extracción histórica" desc="Chamanes andinos maceraban flores en agua o alcohol para ungüentos de absorción cutánea (práctica extremadamente peligrosa). Escopolamina aislada en laboratorio (1901) mediante extracción ácido-base con solventes orgánicos." />
      <StepX c={c} n="3" title="Usos médicos/farmacéuticos" desc="Parches transdérmicos de escopolamina (cinetosis, postoperatorio). Atropina en oftalmología (dilatación pupilar) y emergencias (bradicardia). Antiespasmódico gastrointestinal histórico." />
      <InfoBoxX c={c}>⚠️ Esta información es EXCLUSIVAMENTE documental y educativa. NO realizar extracciones caseras — estas plantas pueden ser letales en dosis ínfimas y requieren equipo de laboratorio profesional, protocolos de seguridad y conocimiento experto en química y toxicología.</InfoBoxX>

      <SectionTitleX c={c} title="🚨 Antídotos y tratamiento específico" />
      <StepX c={c} n="1" title="Fisostigmina IV — antídoto específico" desc="Inhibidor reversible de acetilcolinesterasa. Aumenta acetilcolina disponible → contrarresta el bloqueo muscarínico de los tropanos. Dosis: 0.5-2mg IV lento (adultos), bajo monitorización cardiaca. Contraindicado en asma, bradiarritmias, bloqueo AV. Solo en urgencias bajo supervisión médica." />
      <StepX c={c} n="2" title="Manejo síndrome anticolinérgico" desc="Ambiente fresco (hipertermia = emergencia). Vía IV para hidratación y diazepam si convulsiones. Catéter urinario si retención. Benzodiazepinas para agitación severa (NO antipsicóticos — empeoran). Monitorización cardiaca continua. UCI si síntomas graves." />
      <StepX c={c} n="3" title="Descontaminación" desc="Carbón activado (50g adultos) si ingestión reciente (<1h) y paciente consciente y sin convulsiones. Piel: lavado con agua y jabón abundante. NO inducir vómito — riesgo de aspiración + broncoespasmo con tropanos." />

      <SectionTitleX c={c} title="🌱 Cultivo detallado — paso a paso completo" />
      <StepX c={c} n="1" title="Material de propagación" desc="Esqueje semileñoso 15-25cm cortado bajo un nudo. Retirar hojas inferiores, dejar 2-3 pares superiores. Aplicar hormona enraizante (AIB 0.3%) en el corte. Clavar en perlita húmeda o mezcla perlita+turba 1:1. Cubrir con bolsa plástica para mantener humedad (mini-invernadero). Raíces en 3-6 semanas a 22-25°C." />
      <StepX c={c} n="2" title="Sustrato definitivo" desc="Mezcla: 40% tierra de jardín + 30% perlita + 20% mantillo maduro + 10% fibra de coco. pH 6-7. Macetón mínimo 25L para ejemplar de 1m+ (necesita suelo profundo para las raíces). Drenaje obligatorio." />
      <StepX c={c} n="3" title="Fertilización y crecimiento" desc="Primavera-verano: NPK 10-10-10 cada 2 semanas + potasio extra (favorece floración). En floración: cambiar a fórmula con alto fósforo (10-30-10). Otoño-invierno: parar fertilización. La planta puede crecer 1-2m en primera temporada en BCN con cuidados óptimos." />
      <StepX c={c} n="4" title="Floración" desc="Florece en verano, a veces también en otoño. Las trompetas duran 3-5 días individualmente pero se van renovando semanas. Para maximizar floración: poda suave post-floración (cortar justo sobre un par de hojas), fertilizante potásico. La fragancia nocturna puede ser intensa en espacio cerrado — ventilar." />
      <StepX c={c} n="5" title="Invierno en BCN" desc="Exterior protegido: reducir riego al mínimo (solo para que no se seque la tierra). Puede perder hojas parcialmente — normal. Proteger de heladas con tela anti-helada si se prevén <0°C. Si hace >-2°C continuado: llevar dentro o a zona protegida. Rebrota vigorosamente en primavera." />
      <StepX c={c} n="6" title="Plagas comunes" desc="Araña roja (típica verano seco): pulverizar con agua o jabón potásico. Pulgones en brotes tiernos: neem o jabón insecticida. Mosca blanca: trampas amarillas + neem. Generalmente resistente a enfermedades fúngicas si hay buen drenaje." />
    </div>
  );
}

function ADELFA() {
  const c = TOXICAS_COLORS;
  return (
    <div>
      <InfoBoxX c={c}>
        Nerium oleander — Adelfa. El arbusto ornamental más ubicuo de España y el Mediterráneo. Autovías, jardines, parques. Extremadamente tóxica — todas las partes, incluyendo el humo al quemarla. La planta que más intoxicaciones graves causa en España por ser tan común y aparentemente inofensiva.
      </InfoBoxX>

      <div style={{ display: "grid", gridTemplateColumns: "1fr 1fr", gap: "10px", marginBottom: "16px" }}>
        <StatBoxX c={c} label="☠️ Toxicidad" value="TIER ROJO — oleandrina (glucósido cardiaco). Toda la planta + humo" />
        <StatBoxX c={c} label="🌸 Apariencia" value="Arbusto 2-6m, hojas lanceoladas coriáceas, flores rosa/blanco/rojo en corimbos" />
        <StatBoxX c={c} label="📍 Distribución" value="Mediterráneo, autovías de toda España. Miles de millones de plantas" />
        <StatBoxX c={c} label="⚡ Mecanismo" value="Inhibe Na+/K+-ATPasa cardiaca → arritmia → paro cardiaco" />
      </div>

      <SectionTitleX c={c} title="🧬 Toxicología" />
      <StepX c={c} n="1" title="Oleandrina — glucósido cardiaco" desc="Inhibe la bomba Na+/K+-ATPasa del músculo cardiaco. Aumenta calcio intracelular → contracción excesiva → arritmias ventriculares fatales. Dosis letal: hojas frescas 1-5g en niños pequeños, 15-25g en adultos. Inicio síntomas: 2-6 horas. Sin antídoto específico — tratamiento de soporte más anticuerpos antidigitálicos (Digifab) en casos graves." />
      <StepX c={c} n="2" title="Toda la planta" desc="Hojas, flores, tallos, semillas, raíz, néctar, savia — TODO tóxico. El agua donde se han puesto flores de adelfa: tóxica. Humo al quemar: tóxico por vía respiratoria (intoxicaciones documentadas en asados con ramas). Savia en piel: irritante, dermatitis de contacto." />
      <StepX c={c} n="3" title="Síntomas" desc="Digestivos: náuseas, vómitos, dolor abdominal. Cardiacos: bradicardia, arritmias, paro cardiaco. Neurológicos: confusión, visión borrosa/amarilla (xantopsia como con digoxina), convulsiones. Tiempo de acción: horas. Monitorización cardiaca obligatoria en urgencias." />

      <SectionTitleX c={c} title="🌱 Cultivo ornamental" />
      <StepX c={c} n="1" title="Resistencia extrema" desc="Prácticamente indestructible en clima mediterráneo. Aguanta sequía, contaminación, poda severa. Ideal para autovías y espacios difíciles. Mediterráneo y subtropical." />
      <StepX c={c} n="2" title="Propagación" desc="Esqueje en agua o sustrato en verano — enraíza fácilmente en 4-6 semanas. Semillas menos habitual." />
      <StepX c={c} n="3" title="Seguridad" desc="GUANTES siempre. NO quemar (humo tóxico). NO compostar. NO usar para asados. Etiquetar si tienes niños/mascotas. Cortar con tijeras dedicadas exclusivamente a ella." />

      <SectionTitleX c={c} title="📜 Usos históricos y médicos" />
      <StepX c={c} n="1" title="Insecticida y raticida" desc="Históricamente usada como raticida y para matar pulgas. Extracto acuoso como insecticida de contacto en agricultura tradicional mediterránea." />
      <StepX c={c} n="2" title="Oleandrina en investigación" desc="Investigación oncológica activa: oleandrina muestra actividad antitumoral in vitro (inhibición proliferación) y propiedades antivirales. No hay tratamiento humano aprobado — aún en fase preclínica. El interés científico es real pero no justifica consumo." />

      <SectionTitleX c={c} title="🧪 Extracción y uso" />
      <StepX c={c} n="1" title="Compuestos activos" desc="Oleandrina, neriina, digitoxigenina (glucósidos cardiacos). Todas las partes tóxicas, incluyendo humo al quemar." />
      <StepX c={c} n="2" title="Extracción histórica" desc="Oleandrina aislada por primera vez en 1840. Uso tradicional en la India como veneno para flechas (extracto acuoso concentrado). Investigación reciente como posible anticancerígeno (PBI-05204 en fase clínica)." />
      <StepX c={c} n="3" title="Usos médicos/farmacéuticos" desc="Anumati (extracto estandarizado) en medicina tradicional china para insuficiencia cardiaca. Derivados semisintéticos en investigación oncológica (glioblastoma)." />
      <InfoBoxX c={c}>⚠️ Esta información es EXCLUSIVAMENTE documental y educativa. NO realizar extracciones caseras — estas plantas pueden ser letales en dosis ínfimas y requieren equipo de laboratorio profesional, protocolos de seguridad y conocimiento experto en química y toxicología.</InfoBoxX>

      <SectionTitleX c={c} title="🚨 Antídotos y tratamiento específico" />
      <StepX c={c} n="1" title="Digifab — anticuerpos antidigitálicos" desc="DigiFab (fragmentos Fab antidigitálicos): se une a la oleandrina circulante → complejo inactivo excretado por riñón. Revertir intoxicación grave. Disponible en UCI hospitalaria. Dosis calculada según cantidad estimada ingerida y niveles séricos. También activo contra convalatoxina (Lirio del Valle) y convallótoxol." />
      <StepX c={c} n="2" title="Soporte cardiaco hasta UCI" desc="Monitorización ECG continua desde llegada a urgencias. Bradicardia severa: atropina 0.5-1mg IV. Arritmias ventriculares: lidocaína o amiodarona (NO cardioversión eléctrica hasta dar Digifab — riesgo de precipitar fibrilación). Hipotensión: fluidos IV, vasopresores si necesario. Corregir hipokaliemia (la hipokaliemia empeora la toxicidad digitálica)." />
      <StepX c={c} n="3" title="Descontaminación" desc="Carbón activado oral si ingestión reciente (<2h) y sin arritmias. NO inducir vómito — aumenta tono vagal y riesgo arrítmico. Lavado gástrico solo si ingestión masiva reciente (<30min) en urgencias." />

      <SectionTitleX c={c} title="🌱 Cultivo ornamental completo" />
      <StepX c={c} n="1" title="Variedades disponibles" desc="Nerium oleander variedades: flores simples (más rústicas) o dobles (más decorativas). Colores: blanco (Petite Blanc), rosa (Petite Pink), rojo (Cardinal Red), salmón (Luteum), amarillo (Calypso). Dobles: Emile Sahut (salmón), Mrs Roeding (rosa doble). Mismo perfil de toxicidad en todas." />
      <StepX c={c} n="2" title="Propagación en casa" desc="Esqueje de 20-30cm cortado en verano. Meter el tallo en vaso con agua en ventana soleada. Raíces visibles en 3-5 semanas. Trasplantar cuando raíces tengan 3-5cm. Método más fácil de las plantas de esta guía." />
      <StepX c={c} n="3" title="Suelo y riego" desc="Extremadamente resistente a suelo pobre, sequía y contaminación urbana. En maceta: sustrato universal con algo de arena. Riego: solo cuando la tierra esté seca (1-2 veces semana en verano, quincenal en invierno). Aguanta mejor la sequía que el encharcamiento." />
      <StepX c={c} n="4" title="Poda y mantenimiento" desc="Poda en invierno o post-floración (septiembre). Cortar hasta 1/3 de los tallos — rebrota vigorosamente. Poda severa si está muy grande. SIEMPRE guantes y mascarilla (polvo del corte puede irritar). Limpiar tijeras con alcohol tras usar en adelfa." />
    </div>
  );
}

function DEDALERA() {
  const c = TOXICAS_COLORS;
  return (
    <div>
      <InfoBoxX c={c}>
        Digitalis purpurea — Dedalera. Una de las plantas medicinales más importantes de la historia: fuente de la digoxina, usada hoy para insuficiencia cardiaca y fibrilación auricular. Wildflower de bosques europeos atlánticos, espectacular en flor. Toda la planta tóxica — la dosis hace el veneno.
      </InfoBoxX>

      <div style={{ display: "grid", gridTemplateColumns: "1fr 1fr", gap: "10px", marginBottom: "16px" }}>
        <StatBoxX c={c} label="☠️ Toxicidad" value="TIER ROJO — glucósidos cardiacos (digitoxina, digoxina)" />
        <StatBoxX c={c} label="💊 Uso médico" value="Digoxina: ICC, fibrilación auricular. Primer fármaco botánico moderno (1785)" />
        <StatBoxX c={c} label="🌸 Apariencia" value="Bienal 1-2m. Flores tubulares púrpura con manchas, racimo terminal. Hojas grandes aterciopeladas" />
        <StatBoxX c={c} label="📍 España" value="Galicia, Pirineos, Cantábrico. Naturalizada zonas húmedas atlánticas" />
      </div>

      <SectionTitleX c={c} title="🧬 Toxicología y farmacología" />
      <StepX c={c} n="1" title="Glucósidos cardiacos digitálicos" desc="Digitoxina y digoxina: inhiben Na+/K+-ATPasa cardiaca. A dosis terapéutica: inotrópico positivo (más fuerza cardiaca), cronotrópico negativo (menos frecuencia). A dosis tóxica: arritmias letales. Ventana terapéutica extremadamente estrecha — razón por la que se usan formas purificadas en medicina, no extractos." />
      <StepX c={c} n="2" title="Síntomas toxicidad" desc="Náuseas, vómitos, diarrea → bradicardia, arritmias (todas las formas), visión amarilla/verde/halos, confusión → fibrilación ventricular, paro cardiaco. Inicio: 2-6h oral. Tratamiento: Digifab (fragmentos anticuerpo antidigitálico) IV en urgencias." />
      <StepX c={c} n="3" title="Confusión con borraja" desc="Digitalis purpurea (VENENO) puede confundirse con Borago officinalis (comestible) en estado vegetativo antes de florecer. Ambas tienen hojas grandes aterciopeladas. Diferencia: borraja huele a pepino, dedalera sin olor o desagradable. Flor diferentísima al florecer." />

      <SectionTitleX c={c} title="🌱 Cultivo ornamental" />
      <StepX c={c} n="1" title="Bienal — ciclo de 2 años" desc="Año 1: roseta de hojas basales. Año 2: flor espectacular. Después muere pero se auto-siembra agresivamente. En jardín: plantar semillas en verano, florecen primavera-verano siguiente año." />
      <StepX c={c} n="2" title="Clima y sustrato" desc="Prefiere climas atlánticos, semi-sombra, suelo ácido bien drenado con humus. En BCN: zona húmeda con sombra. Riego moderado. No tolera calor extremo (>35°C prolongado)." />
      <StepX c={c} n="3" title="Seguridad" desc="GUANTES. NO consumir ninguna parte. Hojas secas siguen siendo tóxicas. No confundir con otras plantas. Etiquetar en jardín." />

      <SectionTitleX c={c} title="📜 Historia médica" />
      <StepX c={c} n="1" title="William Withering — 1785" desc="Médico inglés que sistematizó el uso de la dedalera en insuficiencia cardiaca (dropsy/hidropesía) tras observar remedios populares. Su monografía 'Account of the Foxglove' (1785) establece las bases de la farmacología moderna basada en plantas." />
      <StepX c={c} n="2" title="Extracción industrial" desc="Digoxina se extrae industrialmente de hojas de Digitalis lanata (especie más rica en digoxina). Proceso: extracción con etanol → purificación cromatográfica → cristalización. Los principios básicos son los mismos que se usan en síntesis orgánica — hojas frescas nunca se usan directamente por variabilidad de concentración." />

      <SectionTitleX c={c} title="🧪 Extracción y uso" />
      <StepX c={c} n="1" title="Compuestos activos" desc="Digitoxina, digoxina, gitoxina (glucósidos cardiacos). Concentración en hojas del segundo año." />
      <StepX c={c} n="2" title="Extracción histórica" desc="William Withering (1785) documentó el uso de infusiones de hojas para hidropesía. Digoxina aislada pura en 1930. Extracción industrial desde Digitalis lanata cultivada (mayor rendimiento que D. purpurea)." />
      <StepX c={c} n="3" title="Usos médicos/farmacéuticos" desc="Digoxina = medicamento esencial OMS para insuficiencia cardiaca congestiva y fibrilación auricular. Digitoxina histórica (hoy menos usada por margen terapéutico estrecho)." />
      <InfoBoxX c={c}>⚠️ Esta información es EXCLUSIVAMENTE documental y educativa. NO realizar extracciones caseras — estas plantas pueden ser letales en dosis ínfimas y requieren equipo de laboratorio profesional, protocolos de seguridad y conocimiento experto en química y toxicología.</InfoBoxX>

      <SectionTitleX c={c} title="🚨 Antídotos y tratamiento específico" />
      <StepX c={c} n="1" title="Digifab — mismo antídoto que para adelfa" desc="Fragmentos anticuerpo antidigitálico activos contra digitoxina y digoxina. Cálculo de dosis: número de viales = (peso corporal en kg × concentración sérica estimada) / 100. Disponible en UCI. Revertir completamente si se administra pronto." />
      <StepX c={c} n="2" title="Manejo urgencias" desc="ECG inmediato. Hipokaliemia frecuente y empeora la toxicidad — corregir con potasio IV lentamente. Bradicardia: atropina. Bloqueo AV: marcapasos externo temporal si refractario. Sin Digifab: evitar cardioversión eléctrica. Carbón activado si ingestión reciente." />

      <SectionTitleX c={c} title="🌱 Cultivo ornamental completo" />
      <StepX c={c} n="1" title="Ciclo bienal — planificación" desc="Año 1 (desde semilla sembrada en julio-agosto): roseta basal de hojas grandes aterciopeladas — sin flores. Año 2: espiga floral espectacular de 1-2m en mayo-julio. La planta muere tras florecer pero se auto-siembra agresivamente. Plantar nuevas semillas cada verano para tener flores cada año." />
      <StepX c={c} n="2" title="Siembra y sustrato" desc="Semillas muy pequeñas — no cubrir con tierra, solo presionar sobre superficie húmeda de sustrato universal fino. Germinan en 2-3 semanas a 18-22°C. Trasplantar cuando tengan 3-4 hojas. Suelo ácido-neutro (pH 5.5-7), rico en humus, semisombra." />
      <StepX c={c} n="3" title="Cuidados año 2" desc="Regar regularmente en primavera cuando empieza a subir. Tutor si la espiga se inclina con el viento (puede llegar a 2m). Fertilizar con N-P-K cada 3 semanas durante el crecimiento. Deadheading (cortar flores gastadas): prolonga floración." />
      <StepX c={c} n="4" title="Auto-siembra" desc="Si se dejan algunas espigas sin cortar, la dedalera se siembra sola. Una planta puede generar 50-200 semillas. Al año siguiente aparecerán plántulas alrededor — elegir las más vigorosas y trasplantar. Método para perpetuar el cultivo sin comprar más semillas." />
    </div>
  );
}

function ACONITO() {
  const c = TOXICAS_COLORS;
  return (
    <div>
      <InfoBoxX c={c}>
        Aconitum napellus — Acónito, Matalobos, Napelo. La planta más tóxica de Europa según muchos toxicólogos. Usada históricamente como veneno de flechas, en asesinatos políticos de la antigua Roma, y por brujas medievales. Hoy: ornamental de jardín y fuente de aconitina en investigación farmacológica.
      </InfoBoxX>

      <div style={{ display: "grid", gridTemplateColumns: "1fr 1fr", gap: "10px", marginBottom: "16px" }}>
        <StatBoxX c={c} label="☠️ Toxicidad" value="TIER ROJO MÁXIMO — aconitina. 2-3mg = dosis letal adulto" />
        <StatBoxX c={c} label="💙 Apariencia" value="1-1.5m, flores azul-violeta en forma de casco/capucha, hojas palmadas" />
        <StatBoxX c={c} label="📍 España" value="Pirineos, montaña cantábrica, Sierra Nevada. Zonas húmedas montaña alta" />
        <StatBoxX c={c} label="⚡ Mecanismo" value="Activa canales Na+ voltaje-dependientes → no puede repolarizarse → parálisis, PCR" />
      </div>

      <SectionTitleX c={c} title="🧬 Toxicología" />
      <StepX c={c} n="1" title="Aconitina — veneno de flechas" desc="Activa permanentemente canales de sodio voltaje-dependientes en nervios y músculo. Resultado: despolarización continua → parálisis flácida ascendente (como en botulismo pero mecanismo opuesto), arritmias fatales, insuficiencia respiratoria. No hay antídoto específico. Tratamiento de soporte + atropina para arritmias vagotónicas. DL50 en humanos estimada ~2-3mg de aconitina pura. Una hoja fresca contiene 1-8mg de alcaloides totales." />
      <StepX c={c} n="2" title="Absorción transdérmica" desc="La aconitina se absorbe a través de la piel. Casos documentados de intoxicación por simple contacto sin guantes durante jardinería. Síntomas cutáneos primero: hormigueo, entumecimiento en punto de contacto. Siempre guantes de nitrilo (no látex, que puede ser permeable)." />
      <StepX c={c} n="3" title="Síntomas" desc="Inicio rápido (minutos-1h): hormigueo/entumecimiento labios, lengua, extremidades. Salivación excesiva. Náuseas, vómitos. Después: arritmias, hipotensión, debilidad muscular severa, dificultad respiratoria. Muerte por fallo cardiaco o respiratorio. Supervivencia: UCI con monitorización continua 24h mínimo." />
      <StepX c={c} n="4" title="Confusión peligrosa" desc="Raíz de acónito puede confundirse con rábano rusticano (horseradish) o remolacha. Hojas jóvenes se confunden con perejil o apio silvestre. NUNCA comer raíces o plantas de montaña desconocidas." />

      <SectionTitleX c={c} title="🌱 Cultivo ornamental" />
      <StepX c={c} n="1" title="Montaña y frescor" desc="Planta de alta montaña — necesita inviernos fríos y veranos frescos. En BCN: difícil en clima cálido, mejor en zonas altas (Collserola superior, zona montaña). Sustrato húmedo, semisombra, suelo rico en humus." />
      <StepX c={c} n="2" title="Floración espectacular" desc="Flores azul-violeta intenso en espiga. Muy ornamental. Florece julio-agosto en altura. Planta madura y florece en 2-3 años desde semilla." />
      <StepX c={c} n="3" title="Seguridad extrema" desc="GUANTES DE NITRILO siempre. Lavar manos inmediatamente. NO oler flores de cerca. NO cultivar donde hay niños. Las raíces en otoño son especialmente peligrosas (mayor concentración alcaloides)." />

      <SectionTitleX c={c} title="📜 Historia" />
      <StepX c={c} n="1" title="Wolfsbane — veneno de lobos" desc="Nombre vernáculo inglés 'wolfsbane' por su uso tradicional para envenenar cebos contra lobos y otros depredadores. 'Aconitum' puede derivar de Aconae (ciudad griega de Ponto) o de 'acontia' (dardos). Usado para envenenar flechas en Grecia, Roma y Asia Central." />
      <StepX c={c} n="2" title="Aconitina en medicina" desc="A dosis sub-tóxicas: analgésico tópico (preparaciones de farmacia homeopática — Aconitum 4CH, 9CH, etc.). También investigado como agente antiarrítmico paradójico. Hoy obsoleto en medicina convencional dada la ventana terapéutica ínfima." />

      <SectionTitleX c={c} title="🧪 Extracción y uso" />
      <StepX c={c} n="1" title="Compuestos activos" desc="Aconitina, mesaconitina, hipaconitina (alcaloides diterpenoides). Raíz/tubérculo = parte más tóxica (2-3 mg pueden matar)." />
      <StepX c={c} n="2" title="Extracción histórica" desc="Usado como veneno de flechas en Asia (Aconitum ferox) e India (bish). Extracto alcohólico concentrado aplicado a puntas de flecha. Aconitina aislada pura en 1833 (Geiger y Hesse)." />
      <StepX c={c} n="3" title="Usos médicos/farmacéuticos" desc="Uso actual CERO en medicina occidental — margen terapéutico inexistente. Homeopatía: diluciones extremas (discutible eficacia). Investigación como analgésico tópico (bloqueo canales Na+) con derivados modificados menos tóxicos." />
      <InfoBoxX c={c}>⚠️ Esta información es EXCLUSIVAMENTE documental y educativa. NO realizar extracciones caseras — estas plantas pueden ser letales en dosis ínfimas y requieren equipo de laboratorio profesional, protocolos de seguridad y conocimiento experto en química y toxicología.</InfoBoxX>

      <SectionTitleX c={c} title="🚨 Antídotos y tratamiento específico" />
      <StepX c={c} n="1" title="Sin antídoto específico — soporte vital" desc="No existe antídoto para la aconitina. UCI con monitorización cardiaca continua. Arritmias ventriculares: amiodarona o flecainida (lidocaína menos efectiva para aconitina). Bradiarritmias severas: atropina IV. Marcapasos externo si bloqueo AV completo. ECMO (membrana extracorpórea) en casos de colapso cardiovascular — casos supervividos en China documentados." />
      <StepX c={c} n="2" title="Descontaminación urgente" desc="Carbón activado (50g) oral si ingestión reciente (<30 min) — la aconitina se absorbe extremadamente rápido. Lavado gástrico en urgencias si <30min. Piel: lavar con agua y jabón inmediatamente — la absorción transdérmica es real aunque más lenta que la oral." />
      <StepX c={c} n="3" title="Pronóstico" desc="Las primeras 6 horas son críticas. Si el paciente pasa las 6h en UCI estable: pronóstico generalmente favorable. Las muertes ocurren típicamente en las primeras 4-6h. Intoxicaciones por armas (flechas envenenadas en historia, crímenes documentados) por vía IV o IM son las más graves." />

      <SectionTitleX c={c} title="🌱 Cultivo ornamental completo" />
      <StepX c={c} n="1" title="División de tubérculos" desc="Método preferido para reproducir acónito establecido. En otoño: desenterrar el nabo-tubérculo cuando la planta está en reposo. Separar los tubérculos hijos (se forman lateralmente). Replantear inmediatamente a 20-30cm de profundidad. Cada tubérculo hijo = nueva planta en 2 años." />
      <StepX c={c} n="2" title="Semillas — estratificación" desc="Semillas requieren estratificación fría: humedecer en papel húmedo + bolsa + nevera 4-8 semanas antes de sembrar. Sembrar en superficie de sustrato húmedo a 15-18°C. Germinación lenta (4-8 semanas). Plántulas delicadas — trasplantar cuando tengan 3+ hojas." />
      <StepX c={c} n="3" title="Variedades ornamentales" desc="A. napellus (azul clásico). A. carmichaelii (azul intenso, florece en otoño — excelente para BCN). A. lycoctonum (amarillo, 'wolfsbane amarillo'). A. volubile (trepador, atípico). Las variedades de floración otoñal son más tolerantes al calor mediterráneo que las típicas de montaña." />
      <StepX c={c} n="4" title="Manejo invierno y reposo" desc="Planta herbácea: muere hasta el suelo en otoño. Los tubérculos permanecen vivos bajo tierra. NO desenterrar ni tirar pensando que está muerta. Rebrota en primavera. En clima mediterráneo cálido: el reposo es más corto. Mulching (capa de compost) sobre los tubérculos en invierno." />
    </div>
  );
}

function CICUTA() {
  const c = TOXICAS_COLORS;
  return (
    <div>
      <InfoBoxX c={c}>
        Conium maculatum — Cicuta común. La planta que envenenó a Sócrates en 399 a.C. Una umbelífera (familia del perejil) que crece en zonas húmedas de toda Europa. Su parecido con el perejil silvestre, el cerfeuil y la zanahoria silvestre la hace extremadamente peligrosa. El veneno: coniina, alcaloide que bloquea receptores nicotínicos.
      </InfoBoxX>

      <div style={{ display: "grid", gridTemplateColumns: "1fr 1fr", gap: "10px", marginBottom: "16px" }}>
        <StatBoxX c={c} label="☠️ Toxicidad" value="TIER ROJO MÁXIMO — coniina (alcaloide nicotínico). Parálisis ascendente" />
        <StatBoxX c={c} label="🌿 Apariencia" value="Umbelífera 1-3m. Tallo hueco con manchas púrpura, olor ratón/desagradable al frotar" />
        <StatBoxX c={c} label="📍 España" value="Riberas, caminos, campos. Toda España. Muy común" />
        <StatBoxX c={c} label="⚡ Mecanismo" value="Bloqueo nAChR neuromuscular → parálisis flácida ascendente → paro respiratorio" />
      </div>

      <SectionTitleX c={c} title="🔍 Identificación: la planta más peligrosa de confundir" />
      <StepX c={c} n="1" title="Confusión mortal con umbelíferas comestibles" desc="Conium maculatum (VENENO) vs Anthriscus sylvestris (perifollo silvestre, comestible) vs Daucus carota (zanahoria silvestre, comestible) vs Petroselinum crispum (perejil, comestible). REGLA DE ORO: si huele a ratones/desagradable al frotar la hoja = CICUTA. Si es agradable/aromático = probablemente segura. Pero mejor: NUNCA comer umbelífera silvestre si no estás 100% seguro." />
      <StepX c={c} n="2" title="Manchas en el tallo" desc="Tallo verde con manchas o rayas púrpura/rojo-vino irregulares (aspecto 'sangre salpicada'). Hueco por dentro. En perejil y zanahoria: tallo sólido o fistuloso sin manchas púrpura prominentes." />
      <StepX c={c} n="3" title="Cicuta acuática (Cicuta virosa)" desc="Especie diferente, igualmente letal — cicutoxina en lugar de coniina. Crece literalmente en agua o bordes de río. Raíz a seccionar = cámaras con líquido amarillo (diagnóstico definitivo). No confundir con berro." />

      <SectionTitleX c={c} title="🧬 Toxicología — la muerte de Sócrates" />
      <StepX c={c} n="1" title="Coniina — descripción de Platón" desc="El Fedón de Platón describe detalladamente la muerte de Sócrates: frialdad y entumecimiento que asciende desde los pies, parlisis progresiva, pérdida de conciencia mantenida. Descripción perfectamente compatible con toxicidad de coniina: bloqueo receptores nicotínicos acetilcolina en unión neuromuscular → parálisis flácida ascendente → paro respiratorio con conciencia preservada (sin sedación central)." />
      <StepX c={c} n="2" title="Mecanismo y tratamiento" desc="Coniina: agonista parcial/antagonista de nAChR en placa neuromuscular. Síntomas: sensación quemante boca, salivación, náuseas → debilidad muscular → parálisis ascendente → insuficiencia respiratoria. Conciencia conservada hasta el final. Sin antídoto específico — soporte vital (ventilación mecánica)." />

      <SectionTitleX c={c} title="🌱 Distribución y hábitat" />
      <StepX c={c} n="1" title="Terrenos alterados húmedos" desc="Bordes de caminos, riberas, campos abandonados, cunetas. No necesita cultivo — crece sola en toda España. Bienal: roseta año 1, florece año 2 en primavera-verano. Frutos redondeados costillados cuando madura." />
      <StepX c={c} n="2" title="Seguridad en campo" desc="Nunca recolectar umbelíferas silvestres sin identificación botánica experta. Lavar manos tras contacto (coniina se absorbe por piel en menor medida). Los animales en general la evitan por el olor — si el ganado está muerto cerca de una planta: cicuta." />

      <SectionTitleX c={c} title="🧪 Extracción y uso" />
      <StepX c={c} n="1" title="Compuestos activos" desc="Coniina, γ-coniceína (alcaloides piperidínicos). Concentración en frutos verdes > raíz > hojas." />
      <StepX c={c} n="2" title="Extracción histórica" desc="Veneno oficial del estado ateniense (Sócrates, 399 a.C.). Extracto acuoso de frutos frescos ('veneno de cicuta'). Coniina aislada en 1827. Primer alcaloide sintetizado artificialmente (Ladenburg, 1886)." />
      <StepX c={c} n="3" title="Usos médicos/farmacéuticos" desc="NINGÚN uso médico actual. Interés histórico y toxicológico. Antagonista nAChR irreversible — estudio como modelo de bloqueo neuromuscular en investigación farmacológica." />
      <InfoBoxX c={c}>⚠️ Esta información es EXCLUSIVAMENTE documental y educativa. NO realizar extracciones caseras — estas plantas pueden ser letales en dosis ínfimas y requieren equipo de laboratorio profesional, protocolos de seguridad y conocimiento experto en química y toxicología.</InfoBoxX>

      <SectionTitleX c={c} title="🚨 Antídotos y tratamiento específico" />
      <StepX c={c} n="1" title="Sin antídoto — ventilación mecánica" desc="No existe antídoto para coniina. La parálisis ascendente por bloqueo nicotínico puede llegar al diafragma → paro respiratorio manteniendo la conciencia (como describió Platón). Ventilación mecánica en UCI es el tratamiento. La toxina se metaboliza y elimina — con soporte respiratorio, el pronóstico puede ser bueno si no hay hipoxia prolongada." />
      <StepX c={c} n="2" title="Soporte cardiaco y neurológico" desc="Monitorización ECG. Posible bradicardia por estimulación vagal. NO fisostigmina (ni anticolinesterásicos) — la coniina actúa en receptores nicotínicos, no muscarínicos. Benzodiazepinas si convulsiones. Calentamiento activo si hipotermia por parálisis muscular y falta de actividad." />
      <StepX c={c} n="3" title="No cultivar — crece silvestre" desc="Conium maculatum crece espontáneamente y no se cultiva ornamentalmente. Esta sección es educativa. Conocerla es importante para NO confundirla con plantas comestibles al recolectar en el campo. La amenaza real es la identificación errónea, no el cultivo intencional." />
    </div>
  );
}

function RICINO() {
  const c = TOXICAS_COLORS;
  return (
    <div>
      <InfoBoxX c={c}>
        Ricinus communis — Ricino, Higuereta. Planta ornamental tropical muy común en España y jardines mediterráneos. Produce el aceite de ricino (uso médico/cosmético, completamente seguro). Las semillas también contienen ricina — una de las toxinas más potentes conocidas (DL50 ~22μg/kg). La misma planta, dos productos completamente distintos.
      </InfoBoxX>

      <div style={{ display: "grid", gridTemplateColumns: "1fr 1fr", gap: "10px", marginBottom: "16px" }}>
        <StatBoxX c={c} label="☠️ Toxicidad" value="TIER ROJO MAX — ricina (lectina tóxica). Semilla más tóxica del mundo" />
        <StatBoxX c={c} label="🌿 Apariencia" value="Arbusto tropical 1-5m. Hojas palmeadas grandes, rojo/verde. Frutos espinosos 3-4cm" />
        <StatBoxX c={c} label="💊 Aceite" value="Aceite de ricino (cold-pressed): ricinoleico, NO contiene ricina. Laxante, cosmético, lubricante industrial" />
        <StatBoxX c={c} label="📍 España" value="Naturalizada toda España. Parques, bordes de carretera, zonas cálidas" />
      </div>

      <SectionTitleX c={c} title="🧬 Toxicología — ricina" />
      <StepX c={c} n="1" title="Mecanismo: inhibición síntesis proteica" desc="Ricina es una lectina tipo II (ribosoma-inactivating protein, RIP). Compuesta de cadena A (toxina) y cadena B (lectina que facilita entrada celular). Cadena A inactiva irreversiblemente los ribosomas — la célula no puede sintetizar más proteínas → muerte celular. Sin antídoto. DL50 estimada humanos: 1-10 μg/kg vía inyección; 1-20 mg/kg vía oral (cobertura de la semilla reduce absorción parcialmente)." />
      <StepX c={c} n="2" title="Por qué las semillas son tan peligrosas" desc="Una semilla de ricino contiene 1-5mg de ricina (varía con variedad/condiciones). Potencialmente letal, especialmente para niños. La cobertura (tegumento) actúa de barrera parcial — semilla entera tragada: parte ricina no se absorbe. Semilla masticada o extraído: absorción completa. 3-5 semillas masticadas = potencialmente letal para un niño." />
      <StepX c={c} n="3" title="Síntomas — 2-12h tras ingestión" desc="Ardor boca y garganta, náuseas, vómitos, dolor abdominal, diarrea sanguinolenta. Después: deshidratación severa, daño hepático, renal, fallo multiorgánico. Muerte posible 36-72h. Sin antídoto específico — descontaminación + soporte. En urgencias: carbón activado si ingesta reciente." />
      <StepX c={c} n="4" title="Aceite de ricino — seguro" desc="Aceite de ricino (Ricinus communis oil): extracción en frío desnaturaliza y elimina la ricina. No contiene ricina. GRAS (FDA). Usos: laxante (aceite puro 15-45ml), industria cosmética (emoliente), lubricante industrial, biodiesel. No confundir la seguridad del aceite con la toxicidad de las semillas." />

      <SectionTitleX c={c} title="🌱 Cultivo ornamental" />
      <StepX c={c} n="1" title="Crecimiento espectacular" desc="Planta tropical de crecimiento muy rápido. En BCN outdoor puede alcanzar 2-3m en una temporada. Hojas rojas o verdes según variedad — muy decorativas. Requiere sol pleno, riego moderado, sustrato bien drenado." />
      <StepX c={c} n="2" title="Semillas — etiquetado crítico" desc="Cuando los frutos maduran, las semillas son una amenaza especialmente para niños. OPCIONES: (a) eliminar frutos antes de madurar; (b) guardar semillas en recipiente etiquetado VENENO bajo llave; (c) no cultivar si hay niños pequeños. Los frutos espinosos son atractivos visualmente para niños." />
      <StepX c={c} n="3" title="Usos naturales no-tóxicos" desc="Aceite de ricino del fruto (siempre cold-pressed, sin calor): cosmético capilar, nutritivo cuero cabelludo. Cultivar para obtener aceite propio es posible pero complejo — prensado en frío requiere equipo específico para extraer sin generar calor." />

      <SectionTitleX c={c} title="🧪 Extracción y uso" />
      <StepX c={c} n="1" title="Compuestos activos" desc="Ricina (lectina tóxica, inhibe síntesis proteica). 1 semilla mascada = dosis letal potencial para un niño. Aceite de ricino = seguro (ricina no es liposoluble)." />
      <StepX c={c} n="2" title="Extracción histórica" desc="Aceite de ricino prensado en frío desde el antiguo Egipto (laxante, lubricante industrial). Ricina purificada a partir de la pasta residual del prensado (NO del aceite). Proceso: extracción acuosa + precipitación con sulfato de amonio. Altamente regulado." />
      <StepX c={c} n="3" title="Usos médicos/farmacéuticos" desc="Aceite de ricino (laxante, cosmética, biodiésel, lubricante industrial). Ricina = SIN USO MÉDICO. Investigación como inmunotoxina conjugada con anticuerpos para terapia dirigida contra cáncer (ensayos clínicos fase I/II)." />
      <InfoBoxX c={c}>⚠️ Esta información es EXCLUSIVAMENTE documental y educativa. NO realizar extracciones caseras — estas plantas pueden ser letales en dosis ínfimas y requieren equipo de laboratorio profesional, protocolos de seguridad y conocimiento experto en química y toxicología.</InfoBoxX>

      <SectionTitleX c={c} title="🚨 Antídotos y tratamiento específico" />
      <StepX c={c} n="1" title="Sin antídoto para ricina — soporte intensivo" desc="No existe antídoto aprobado para intoxicación por ricina. Investigación activa: anticuerpos monoclonales anti-ricina (en desarrollo militar/CBRN). Tratamiento: carbón activado si ingestión reciente, hidratación agresiva IV, soporte multiorgánico UCI. El daño es irreversible en células afectadas — la clave es evitar la absorción." />
      <StepX c={c} n="2" title="Carbón activado — ventana estrecha" desc="Carbón activado (50g en 400ml agua) solo si ingestión reciente (<1h) y paciente consciente. La ricina se absorbe rápido — pasada 1h el carbón es menos efectivo. Provoca vómito abundante (puede expulsar parte de la ricina mecánicamente)." />
      <StepX c={c} n="3" title="Vigilancia multiorgánica" desc="Hospitalización obligatoria 72h mínimo aunque síntomas sean leves al inicio — el daño por ricina se manifiesta con retraso. Análisis periódicos: hemograma, transaminasas, creatinina, coagulación. Hemodiálisis si fallo renal. El periodo 24-72h post-ingestión es el más crítico." />

      <SectionTitleX c={c} title="🌱 Cultivo ornamental completo" />
      <StepX c={c} n="1" title="Variedades decorativas" desc="Carmencita Red / Pink: hojas rojo-bronce intenso, muy ornamental. Impala: compacta (60-80cm), ideal para macetas. Zanzibar: gigante (3-4m en una temporada), verde brillante. New Zealand Purple: hojas morado-oscuro. Mismo perfil de toxicidad en todas." />
      <StepX c={c} n="2" title="Siembra directa" desc="Semillas grandes — escarificar ligeramente con lija fina y remojar 24h en agua tibia para acelerar germinación. Sembrar directamente en maceta definitiva (no aguanta trasplante bien) a 1-2cm de profundidad. Germina en 7-14 días a 20-25°C. Una semilla por maceta de al menos 20L para ejemplar grande." />
      <StepX c={c} n="3" title="Crecimiento rápido" desc="Crecimiento explosivo en verano: puede ganar 20-30cm/semana con calor, riego y fertilización. NPK equilibrado cada 2 semanas en temporada activa. Regar cuando la superficie esté seca. En maceta grande + sol + abono = espectacular en agosto." />
      <StepX c={c} n="4" title="Gestión de semillas" desc="CRÍTICO: Si no quieres reproducción, eliminar cápsulas espinosas ANTES de que maduren y se abran (cuando aún están verdes). Si maduran: las semillas caen solas y germinan en tierra cercana. Semillas recolectadas: guardar en frasco cerrado etiquetado VENENO bajo llave." />
    </div>
  );
}

function COLCHICO() {
  const c = TOXICAS_COLORS;
  return (
    <div>
      <InfoBoxX c={c}>
        Colchicum autumnale — Cólquico, Azafrán de otoño, Narciso de otoño. Bulbosa mediterránea que florece en otoño SIN hojas (aparecen en primavera). Su confusión con cebolla silvestre o ajo ha causado muertes. Fuente de la colchicina — usada en medicina para tratar la gota y en botánica para inducir poliploidía.
      </InfoBoxX>

      <div style={{ display: "grid", gridTemplateColumns: "1fr 1fr", gap: "10px", marginBottom: "16px" }}>
        <StatBoxX c={c} label="☠️ Toxicidad" value="TIER ROJO — colchicina (veneno del huso mitótico). Sin antídoto" />
        <StatBoxX c={c} label="🌸 Apariencia" value="Flores lila/blancas en otoño SIN hojas. Hojas grandes verdes en primavera. Fruto cápsula verano" />
        <StatBoxX c={c} label="💊 Uso médico" value="Colchicina: tratamiento gota, fiebre mediterránea, pericarditis. Ventana terapéutica estrecha" />
        <StatBoxX c={c} label="🔬 Uso científico" value="Colchicina induce poliploidía en mejora genética vegetal — herramienta estándar en fitogenética" />
      </div>

      <SectionTitleX c={c} title="🧬 Toxicología — colchicina" />
      <StepX c={c} n="1" title="Inhibición del huso mitótico" desc="Colchicina se une a tubulina, impidiendo la formación del huso acromático durante la mitosis. Todas las células que se dividen se ven afectadas. Efecto clínico: fallo multiorgánico lento y progresivo (2-7 días post-ingestión). Inicio: náuseas, vómitos, diarrea (primeras 24h). Después: leucopenia, trombopenia, fallo hepático, renal, cardiaco. Sin antídoto específico." />
      <StepX c={c} n="2" title="Ventana letal lenta" desc="Característica única: entre ingestión y síntomas graves pasan 2-7 días. La víctima puede creer que se ha recuperado (náuseas iniciales ceden) mientras el daño orgánico progresa internamente. Intoxicación grave: UCI hematológica + soporte multiorgánico." />
      <StepX c={c} n="3" title="Confusión mortal" desc="Hojas en primavera: confusión con ajo silvestre (Allium ursinum) o cebolla silvestre. Diferencia: Allium ursinum huele intensamente a ajo al frotar. Colchicum sin olor. El bulbo-cormo de Colchicum se puede confundir con cebolla. NUNCA recolectar bulbosas silvestres sin expertise botánico." />

      <SectionTitleX c={c} title="🌱 Cultivo ornamental" />
      <StepX c={c} n="1" title="Ciclo inusual" desc="Flores en otoño (sept-nov) sin hojas presentes — solo tallos florales saliendo del suelo. Hojas grandes en primavera que amarillean y desaparecen en verano. Plantar cormos en agosto para floración otoñal. Bulbosas de bajo mantenimiento." />
      <StepX c={c} n="2" title="Clima BCN" desc="Mediterráneo ideal. Sol o semisombra, suelo drenado. Reproducción vegetativa (cormos hijos) y por semilla. Cada año más cormos." />
      <StepX c={c} n="3" title="Seguridad" desc="GUANTES siempre. Etiquetar cormos almacenados (se pueden confundir con cebollas). No cerca de huerto comestible. Avisar a la familia del riesgo." />

      <SectionTitleX c={c} title="📜 Colchicina en ciencia" />
      <StepX c={c} n="1" title="Inducción de poliploidía" desc="Técnica estándar en mejora vegetal: tratar semillas/ápices con solución de colchicina al 0.1-0.5% bloquea la separación cromosómica durante una división → células con el doble de cromosomas (tetraploides). Así se obtienen variedades más grandes y vigorosas. Muchas variedades comerciales de sandía sin pepitas, fresa y otros son tetraploides inducidos con colchicina." />
      <StepX c={c} n="2" title="Tratamiento de la gota (con precaución)" desc="Colchicina (Colchicine Takeda, 0.5mg comprimido) es fármaco de primera línea para gota aguda. Dosis muy controladas — el margen entre dosis terapéutica y tóxica es estrecho. Jamás usar extractos caseros de cólquico para automedicarse la gota — la variabilidad de concentración haría imposible dosificar correctamente." />

      <SectionTitleX c={c} title="🧪 Extracción y uso" />
      <StepX c={c} n="1" title="Compuestos activos" desc="Colchicina (alcaloide antimitótico). Bulbo > semillas > flores." />
      <StepX c={c} n="2" title="Extracción histórica" desc="Usado desde el antiguo Egipto (papiro Ebers, 1500 a.C.) para gota. Extracto de semillas estandarizado en el s. XIX. Colchicina aislada pura en 1820 (Pelletier y Caventou)." />
      <StepX c={c} n="3" title="Usos médicos/farmacéuticos" desc="Colchicina = tratamiento estándar para ataques agudos de gota (antiinflamatorio por inhibición de microtúbulos). Fiebre mediterránea familiar. Investigación en pericarditis y COVID-19 (efecto antiinflamatorio). Derivados como anticancerígenos (inhibidores mitóticos)." />
      <InfoBoxX c={c}>⚠️ Esta información es EXCLUSIVAMENTE documental y educativa. NO realizar extracciones caseras — estas plantas pueden ser letales en dosis ínfimas y requieren equipo de laboratorio profesional, protocolos de seguridad y conocimiento experto en química y toxicología.</InfoBoxX>

      <SectionTitleX c={c} title="🚨 Antídotos y tratamiento específico" />
      <StepX c={c} n="1" title="Sin antídoto — soporte hematológico" desc="No existe antídoto específico para colchicina. La ventana letal lenta (2-7 días) hace que muchos pacientes subestimen la gravedad inicial. Hospitalización obligatoria incluso si síntomas leves en las primeras horas. G-CSF (factor estimulante colonias granulocíticas) puede reducir la leucopenia severa. Trasplante de médula ósea en casos extremos." />
      <StepX c={c} n="2" title="Carbón activado y lavado gástrico" desc="Si ingestión <1h: carbón activado oral. La colchicina tiene circulación enterohepática — carbón activado repetido cada 4-6h puede reducir la reabsorción intestinal. Hemoperfusión con carbón activado o hemodiálisis: eficacia limitada pero usados en casos graves." />
      <StepX c={c} n="3" title="Vigilancia diferida obligatoria" desc="Analítica cada 12-24h los primeros 5 días: hemograma completo (leucocitos, plaquetas), transaminasas, creatinina, coagulación. El nadir de leucopenia ocurre típicamente día 4-7. Sepsis por leucopenia profunda = causa frecuente de muerte. Aislamiento protector en UCI hematológica." />
    </div>
  );
}

function TEJO() {
  const c = TOXICAS_COLORS;
  return (
    <div>
      <InfoBoxX c={c}>
        Taxus baccata — Tejo. Uno de los árboles más longevos de Europa (>2000 años) y el único cuyas bayas rojas (arilos) no son tóxicas — la semilla que contienen sí lo es, junto con el resto de la planta. En cementerios europeos desde tiempos inmemoriales. Fuente del taxol (paclitaxel) — uno de los agentes quimioterápicos más usados.
      </InfoBoxX>

      <div style={{ display: "grid", gridTemplateColumns: "1fr 1fr", gap: "10px", marginBottom: "16px" }}>
        <StatBoxX c={c} label="☠️ Toxicidad" value="TIER ROJO — taxina A y B. Toda la planta excepto arilo rojo (la 'carne' de la baya)" />
        <StatBoxX c={c} label="🌲 Apariencia" value="Conífera de hoja perenne. Hojas aciculares planas verde oscuro. Bayas rojas (arilos) con semilla negra" />
        <StatBoxX c={c} label="💊 Taxol" value="Paclitaxel: quimioterápico clave en cáncer ovario, mama, pulmón. Derivado de la corteza" />
        <StatBoxX c={c} label="📍 España" value="Montaña y cementerios. Cantábrico, Pirineos. Plantado como ornamental ampliamente" />
      </div>

      <SectionTitleX c={c} title="🧬 Toxicología" />
      <StepX c={c} n="1" title="Taxina — arritmia cardiaca" desc="Taxinas A y B: bloquean canales Na+ y Ca2+ cardiacos. Resultado: bradiarritmias, bloqueo AV, parada cardiaca. Toda la planta excepto el arilo rojo. Semillas: muy tóxicas (protegidas por el arilo, pero si masticadas liberan taxina). Hojas secas siguen siendo tóxicas — caballos muertos por pastar ramas de tejo de poda. Inicio toxicidad: 30min-3h." />
      <StepX c={c} n="2" title="El arilo rojo — la única parte segura" desc="La carne roja del 'fruto' (arilo) es dulce y NO tóxica — es la estrategia de la planta para que los pájaros dispersen las semillas. Pero la semilla negra dentro es muy tóxica. Riesgo real: niños comen el arilo rojo y tragan la semilla. Si solo tragaron arilo sin masticar semilla: baja absorción de toxina. Si masticaron semilla: urgencias inmediato." />
      <StepX c={c} n="3" title="Tratamiento" desc="Sin antídoto. Soporte cardiovascular, monitorización continua. La toxicidad cardiaca puede ser rápida e impredecible. UCI." />

      <SectionTitleX c={c} title="🌱 Cultivo ornamental" />
      <StepX c={c} n="1" title="Crecimiento lento, extremada longevidad" desc="Árbol de crecimiento lento — 5-20cm/año. Vive 2000+ años. Tolerante a la sombra. Resistente al frío. Muy plástico — admite poda intensa (topiaria). Ideal para setos bajos en jardines formales." />
      <StepX c={c} n="2" title="Propagación" desc="Semillas necesitan estratificación fría larga (12-18 meses). Esqueje de madera semidura en otoño: más práctico. Enraíza lentamente (3-6 meses)." />
      <StepX c={c} n="3" title="Seguridad" desc="PELIGROSO PARA CABALLOS Y GANADO — accidente común con podas. NO tirar podas en zonas de pastoreo. Niños: avisar del riesgo de las bayas/semillas. Hojas: GUANTES al podar." />

      <SectionTitleX c={c} title="📜 Taxol y quimioterapia" />
      <StepX c={c} n="1" title="Descubrimiento del paclitaxel" desc="1960s: programa de screening de plantas del NCI (EEUU). Corteza de Taxus brevifolia (tejo del Pacífico) muestra actividad antitumoral. 1971: Wani et al. aíslan paclitaxel. Mecanismo único: estabiliza microtúbulos (opuesto a la colchicina) → impide división celular. Aprobado FDA 1992 para cáncer ovario." />
      <StepX c={c} n="2" title="Obtención industrial" desc="Inicialmente de corteza (sacrificaba el árbol). Crisis de suministro en 90s → síntesis semisintética desde 10-deacetilbacatina III (hoja de Taxus baccata, no destruye el árbol). Hoy también síntesis total. El tejo europeo (T. baccata) es fuente sostenible de precursores." />

      <SectionTitleX c={c} title="🧪 Extracción y uso" />
      <StepX c={c} n="1" title="Compuestos activos" desc="Taxol/paclitaxel (taxano), taxina (cardiotóxico). Corteza > hojas > semilla. El arilo rojo = única parte no tóxica." />
      <StepX c={c} n="2" title="Extracción histórica" desc="Taxol descubierto en 1960s (programa de screening NCI). Extracción original de corteza de Tejo del Pacífico (Taxus brevifolia) — 1 árbol para 1 dosis. Ahora: semisíntesis desde precursores de hojas de Tejo europeo cultivado (Taxus baccata) = sostenible." />
      <StepX c={c} n="3" title="Usos médicos/farmacéuticos" desc="Paclitaxel = quimioterapia esencial para cáncer de ovario, mama, pulmón. Docetaxel análogo semisintético. Ambos en lista de medicamentos esenciales de la OMS. El compuesto que ha salvado más vidas en oncología." />
      <InfoBoxX c={c}>⚠️ Esta información es EXCLUSIVAMENTE documental y educativa. NO realizar extracciones caseras — estas plantas pueden ser letales en dosis ínfimas y requieren equipo de laboratorio profesional, protocolos de seguridad y conocimiento experto en química y toxicología.</InfoBoxX>

      <SectionTitleX c={c} title="🚨 Antídotos y tratamiento específico" />
      <StepX c={c} n="1" title="Sin antídoto — UCI cardiaca urgente" desc="No hay antídoto para taxinas. La toxicidad cardiaca puede ser rápida — horas desde ingestión. UCI cardiológica. Arritmias: amiodarona, lidocaína. Bloqueo AV: marcapasos externo urgente. ECMO si colapso cardiovascular. Carbón activado si ingestión reciente (<1h)." />
      <StepX c={c} n="2" title="Semillas vs arilo — urgencias diferenciales" desc="Si niño comió solo el arilo rojo SIN mascar la semilla: bajo riesgo, monitorizar síntomas 4h. Si masticó la semilla: urgencias inmediato independientemente de cantidad. Si ingestión de hojas o ramas: urgencias. Las hojas secas de poda siguen siendo tóxicas — no dejar al alcance de caballos o ganado." />

      <SectionTitleX c={c} title="🌱 Cultivo ornamental completo" />
      <StepX c={c} n="1" title="Topiaria y setos" desc="Taxus baccata es el árbol de topiaria por excelencia en jardinería clásica europea. Aguanta poda intensa sin problema. Para setos: plantar a 50-80cm de separación. Para formas topiaria (bolas, espirales, pirámides): necesita 10+ años para forma definida. Tolera sombra casi completa — único árbol ornamental de hoja perenne que aguanta bajo dosel." />
      <StepX c={c} n="2" title="Estratificación de semillas" desc="Semillas necesitan doble estratificación: (1) 3 meses cálida-húmeda + (2) 3-4 meses fría. Total ~6 meses antes de germinar. En práctica: sembrar en otoño al exterior en maceta, esperar primavera del año siguiente. Esqueje semileñoso otoño: más rápido, enraíza en 3-6 meses con hormona enraizante." />
      <StepX c={c} n="3" title="Crecimiento y longevidad" desc="5-10cm/año de altura. Lo que parece un crecimiento lento se convierte en un árbol extraordinario con décadas. Tejo de 20 años: árbol de 2-3m bien formado. De 100 años: árbol imponente. Muy longevo en la propiedad — plantar con intención de perdurar generaciones." />
    </div>
  );
}

function FAQ_TOXICAS() {
  const c = TOXICAS_COLORS;
  const [query, setQuery] = React.useState("");
  const faqs = [
    { q: "¿Qué hago si sospecho que alguien ha ingerido una planta de esta guía?", a: "URGENCIAS INMEDIATO: llama al 112 o ve a urgencias más cercana. Lleva muestra de la planta (foto si no puedes llevar trozo físico). Teléfono específico Toxicología España 24h: 91 562 04 20. NO inducir vómito sin indicación médica (en intoxicación por acónito o digitálicos puede empeorar). Indica: qué planta, qué parte, cantidad estimada, tiempo transcurrido." },
    { q: "¿Cuál es la más peligrosa si se ingiere una pequeña cantidad?", a: "Acónito (aconitina, 2-3 hojas = letal adulto), Ricino semillas masticadas (ricina, 3-5 semillas = letal niño), Cicuta acuática (cicutoxina, más aguda que cicuta común). En términos de frecuencia de intoxicación grave en España: Adelfa es la más frecuente por ser la más común." },
    { q: "¿Las bayas del tejo son peligrosas?", a: "La carne roja (arilo) NO es tóxica. La semilla negra dentro SÍ es muy tóxica. Si un niño comió bayas de tejo: urgencias. Si solo comió el arilo escupiendo la semilla: monitorizar síntomas. Si masticó la semilla: urgencias urgentes." },
    { q: "¿Es seguro el aceite de ricino si la planta es tan tóxica?", a: "SÍ. El aceite de ricino se extrae en frío — la ricina (proteína) se destruye durante el proceso de extracción (es termolábil y también se inactiva mecánicamente). El aceite de ricino comercial no contiene ricina. GRAS (FDA). Usado como laxante, cosmético, lubricante. Las semillas SIGUEN siendo tóxicas — no confundir." },
    { q: "¿La dedalera es la misma que la digital del médico?", a: "Sí. Digitalis purpurea es la fuente de los glucósidos digitálicos (digitoxina). Digitalis lanata es la fuente industrial de digoxina (purificada farmacéuticamente). No uses extractos caseros de dedalera para autotratar problemas cardiacos — la variabilidad de concentración por planta, estación y parte es enorme. Solo digoxina farmacéutica calibrada." },
    { q: "¿Puedo tener una adelfa en mi jardín si tengo perro?", a: "Riesgo real. Perros y gatos pueden masticar hojas o flores. Oleandrina es letal para mascotas. Casos veterinarios frecuentes con adelfa. Si tienes mascotas: (a) no plantar o (b) aislar con malla el acceso. Vigilar activamente. Síntomas en mascotas: vómitos, letargia, arritmia → urgencias veterinaria." },
    { q: "¿El acónito se absorbe solo con tocarlo?", a: "SÍ. Aconitina tiene absorción transdérmica. Casos documentados de hormigueo y entumecimiento en personas que podaron acónito sin guantes. Gloves de NITRILO siempre (el látex puede ser permeable). Lavar manos inmediatamente con agua y jabón después." },
    { q: "¿Puedo confundir la cicuta con el perejil al recolectar?", a: "Es una de las confusiones más letales de Europa. Diferencias clave: (1) Cicuta huele a ratón/orina al frotar — perejil huele aromático. (2) Tallo de cicuta: hueco con manchas púrpura irregulares. (3) Raíz cicuta: chambered (si la cortas transversalmente hay cámaras con líquido amarillo). REGLA: si tienes la mínima duda sobre una umbelífera silvestre, NO la consumas." },
    { q: "¿Brugmansia es lo mismo que Datura?", a: "Mismo género histórico, ahora separados taxonómicamente. Brugmansia: flores colgantes (trompetas hacia abajo), planta arbustiva/arborescente, extinguida en silvestre (solo cultivada), perenne en clima cálido. Datura (estramonio, inoxia): flores erguidas, anual, maleza cosmopolita. Mismo mecanismo tropánico — igualmente peligrosas en uso interno." },
    { q: "¿El tejo es el árbol más longevo de Europa?", a: "Es candidato firme. El Tejo de Fortingall (Escocia) se estima con 2000-5000 años. El Tejo del Valle del Genar (España) también milenario. La longevidad extrema del tejo se relaciona con su metabolismo lento y capacidad de regenerar desde la base tras incendios. Símbolo de inmortalidad en tradición celta." },
    { q: "¿Puedo cultivar colchico si tengo un huerto de cebollas cerca?", a: "Riesgo serio. Los cormos de Colchicum se parecen a cebollas pequeñas. Las hojas en primavera se parecen a Allium silvestre. Separa físicamente (valla, zona diferente del jardín) y etiqueta claramente. Nunca confundas ni coloques donde alguien los pueda cosechar sin saber." },
    { q: "¿Para qué se usan realmente estas plantas hoy?", a: "Dedalera → digoxina (cardiología). Tejo → paclitaxel/taxol (quimioterapia cáncer). Cólquico → colchicina (gota, fiebre mediterránea). Brugmansia/solanáceas → escopolamina (parche antimareo, midriasis oftalmológica). Acónito → preparados homeopáticos (dosis ultra-diluidas). Ricino → aceite medicinal/industrial. Adelfa → investigación antitumoral. La farmacología moderna nació literalmente de estas plantas." },
    { q: "¿El curare solo funciona con flechas o también por ingestión?", a: "El curare (tubocurarina) NO se absorbe por vía oral — se degrada en el tracto digestivo. Solo es efectivo por vía parenteral (inyección, flecha que penetra la piel). Por eso los cazadores amazónicos podían comer tranquilamente la carne del animal cazado con flecha envenenada. En medicina: los derivados del curare (pancuronio, vecuronio, cisatracurio) se administran por vía intravenosa en quirófano." },
    { q: "¿Qué diferencia hay entre la parálisis del curare y la de la cicuta?", a: "Curare (tubocurarina): bloquea nAChR postsináptico en placa neuromuscular → parálisis flácida. Conciencia intacta. Sin convulsiones. Coniina (cicuta): bloqueo parcial nAChR también → parálisis ascendente. Ambas matan por insuficiencia respiratoria cuando llega al diafragma. Diferencia clave: el curare actúa rápido (minutos) y solo si entra al torrente sanguíneo. La cicuta actúa por ingestión." },
    { q: "¿La estricnina produce convulsiones pero no parálisis — por qué?", a: "Mecanismo opuesto al curare. La estricnina bloquea los receptores de glicina (neurotransmisor INHIBITORIO espinal) → hiperexcitabilidad → cada estímulo dispara contracción masiva de todos los músculos. No es parálisis sino tetania convulsiva. El resultado final (muerte por insuficiencia respiratoria) es similar, pero el proceso es radicalmente diferente: el cuerpo se contrae en lugar de relajarse." },
    { q: "¿La fisostigmina es veneno o antídoto?", a: "Ambas cosas. Como veneno: inhibe acetilcolinesterasa → exceso de acetilcolina → síndrome colinérgico (sudoración, diarrea, broncoespasmo, convulsiones, parálisis). Como antídoto: a dosis médicas precisas, revierte el síndrome anticolinérgico causado por tropanos (Brugmansia, Datura) aumentando la acetilcolina disponible para competir con los alcaloides tropánicos. La misma molécula, dosis opuestas, efectos opuestos." },
    { q: "¿Qué plantas paralizantes están representadas en esta guía?", a: "Parálisis flácida por bloqueo nAChR: Curare (tubocurarina, acción rápida parenteral) y Cicuta (coniina, oral). Tetania por bloqueo receptor glicina: Nuez vómica (estricnina). Parálisis + efectos muscarínicos por inhibición AChE: Calabar bean (fisostigmina). Otros efectos 'paralizantes' (cardiacos): acónito (bloqueo Na+), dedalera/adelfa/tejo/lirio del valle (glucósidos cardiacos)." },
  ];

  const filtered = faqs.filter(f =>
    f.q.toLowerCase().includes(query.toLowerCase()) ||
    f.a.toLowerCase().includes(query.toLowerCase())
  );

  return (
    <div>
      <InfoBoxX c={c}>
        Primeros auxilios, identificación y dudas frecuentes sobre plantas tóxicas. Teléfono Toxicología España 24h: <strong>91 562 04 20</strong>. Urgencias: 112.
      </InfoBoxX>

      <input type="text" placeholder="🔍 Buscar pregunta o planta..." value={query} onChange={(e) => setQuery(e.target.value)} style={{
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

function BIBLIO_TOXICAS() {
  const c = TOXICAS_COLORS;
  return <BibliografiaBlock c={c}
    intro="Bibliografía de toxicología botánica, farmacognosia y historia de venenos vegetales. Cubre identificación segura, mecanismos toxicológicos, historia etnobotánica y usos médicos derivados."
    libros={[
      { titulo: "Poisonous Plants of California", autor: "Fuller & McClintock", año: "1986", nota: "Referencia para solanáceas, umbelíferas tóxicas, acónito. Toxicología clara por especie." },
      { titulo: "Handbook of Plant and Fungal Toxicants", autor: "J. P. F. D'Mello (ed.)", año: "1997", nota: "Glucósidos cardiacos, coniina, taxina, colchicina, ricina. Química + efectos + tratamiento." },
      { titulo: "Plants That Poison", autor: "Ervin M. Schmutz & Lucretia Breazeale Hamilton", año: "1979", nota: "Identificación botánica + toxicología. Ilustraciones." },
      { titulo: "Deadly Doses: A Writer's Guide to Poisons", autor: "Serita Deborah Stevens", año: "1990", nota: "Venenos históricos incluyendo vegetales — perspectiva médico-forense." },
      { titulo: "The Sinister Garden (Toxic Garden History)", autor: "varios autores", nota: "Historia de jardines de venenos — Medici, Borgia, jardines europeos medievales. Plantas como herramientas políticas." },
      { titulo: "Taxol: A Fragile Discovery", autor: "Jordan & Wilson", nota: "Historia del descubrimiento del paclitaxel desde la corteza del tejo del Pacífico." },
      { titulo: "A Modern Herbal", autor: "Maud Grieve", año: "1931", nota: "Tejo, Dedalera, Adelfa, Cicuta — historia y usos medicinales tradicionales. Online gratis." },
      { titulo: "Pharmacotheon", autor: "Jonathan Ott", año: "1996", nota: "Capítulos sobre solanáceas tropánicas (Brugmansia incluida). Historia shamánica." },
    ]}
    web={[
      { nombre: "Erowid Datura / Belladona / Brugmansia Vault", url: "https://erowid.org/plants/datura/", nota: "Reportes de toxicidad + historia + harm reduction." },
      { nombre: "PubMed — 'aconitine toxicity'", url: "https://pubmed.ncbi.nlm.nih.gov/?term=aconitine+toxicity", nota: "Papers académicos sobre intoxicación por acónito — mecanismo + tratamiento." },
      { nombre: "PubMed — 'Nerium oleander poisoning'", url: "https://pubmed.ncbi.nlm.nih.gov/?term=nerium+oleander+poisoning", nota: "Casos clínicos intoxicación adelfa. Especialmente frecuente en India y Mediterráneo." },
      { nombre: "PubMed — 'colchicine poisoning'", url: "https://pubmed.ncbi.nlm.nih.gov/?term=colchicine+poisoning", nota: "Toxicidad colchicina — lenta, fallo multiorgánico diferido." },
      { nombre: "INTOX / WHO — Poisoning Prevention", url: "https://www.who.int/publications/i/item/9789240026469", nota: "OMS. Poisoning Prevention and Management." },
      { nombre: "Toxibase / VigiPlante (Francia)", url: "https://www.centres-antipoison.net", nota: "Red europea centros antivenenos. Recursos en francés pero sólidos." },
      { nombre: "ASPCA — Toxic Plants for Pets", url: "https://www.aspca.org/pet-care/animal-poison-control/toxic-and-non-toxic-plants", nota: "Lista completa plantas tóxicas para perros y gatos. Útil para propietarios con mascotas." },
      { nombre: "NCPC — National Capital Poison Center (USA)", url: "https://www.poison.org/articles/plant", nota: "Guías por planta con síntomas + primeros auxilios. En inglés." },
    ]}
    comunidad={[
      { nombre: "r/whatsthisplant (Reddit)", nota: "Identificación botánica de plantas desconocidas. Miles de expertos. Foto = identificación rápida." },
      { nombre: "r/botany / r/biology (Reddit)", nota: "Preguntas sobre taxonomía y bioquímica de plantas tóxicas." },
      { nombre: "Foros de horticultura España", nota: "Foro HorticulturaColegio, TiendaVerde, etc. Cultivo de ornamentales incluyendo las tóxicas." },
    ]}
    ciencia={[
      { nombre: "Withering — 'An Account of the Foxglove' (1785)", nota: "El paper original de la digitalis. Fundacional para farmacología moderna." },
      { nombre: "Wani et al. — 'Plant antitumor agents VI. Isolation and structure of taxol' (J Am Chem Soc, 1971)", nota: "Descubrimiento del paclitaxel. Paper seminal." },
      { nombre: "Fusco et al. — 'Aconitum poisoning: clinical features and treatment' (varios)", nota: "Buscar PubMed. Revisiones del síndrome tóxico por aconitina." },
      { nombre: "Chan — 'Aconitum alkaloid poisoning' (Med Toxicol, 2009)", nota: "Revisión completa del manejo clínico de intoxicaciones por acónito." },
      { nombre: "Franz — 'Ricin and saporin' en Lectins reviews", nota: "Mecanismo de acción de ricina + antídotos experimentales." },
    ]}
    harm={[
      { nombre: "⚠️ TELÉFONO TOXICOLOGÍA ESPAÑA 24h: 91 562 04 20", nota: "Instituto Nacional de Toxicología. Consultas de intoxicación — disponible 24h para médicos y público." },
      { nombre: "112 — Urgencias", nota: "Ante síntomas de intoxicación vegetal: 112 inmediatamente. No esperar." },
      { nombre: "PsychonautWiki — Datura / Belladona / Brugmansia", url: "https://psychonautwiki.org/wiki/Datura", nota: "Harm reduction tropanos — resumen de riesgos." },
      { nombre: "ASPCA Poison Control (animales): +1-888-426-4435", nota: "Si tu mascota ha ingerido una planta de esta guía. También online: aspca.org/pet-care/animal-poison-control" },
      { nombre: "Flora Vascular España (floravascular.com)", url: "https://www.floravascular.com", nota: "Identificación botánica española con fotos. Verificar nombre antes de cualquier contacto con planta desconocida." },
    ]}
  />;
}

function LIRIO_VALLE() {
  const c = TOXICAS_COLORS;
  return (
    <div>
      <InfoBoxX c={c}>
        Convallaria majalis — Lirio del Valle, Muguet. Planta ornamental de primavera, fragancia exquisita, símbolo de la buena suerte en Francia (1 de mayo). Completamente tóxica: flores, hojas, bayas, incluso el agua del jarrón. Glucósidos cardiacos similares a la digoxina. Muy común en jardines de Europa.
      </InfoBoxX>

      <div style={{ display: "grid", gridTemplateColumns: "1fr 1fr", gap: "10px", marginBottom: "16px" }}>
        <StatBoxX c={c} label="☠️ Toxicidad" value="TIER ROJO — convalatoxina, convalósido. Toda la planta incl. agua" />
        <StatBoxX c={c} label="🌸 Apariencia" value="Bulbosa 15-25cm. Flores blancas campanuladas colgantes, perfume intenso. Bayas rojas otoño" />
        <StatBoxX c={c} label="📍 España" value="Montaña húmeda (Pirineos, Cantábrico). Cultivada como ornamental en toda España" />
        <StatBoxX c={c} label="⚡ Mecanismo" value="Glucósidos cardiacos: inhibe Na+/K+-ATPasa → arritmia. Similar a digoxina" />
      </div>

      <SectionTitleX c={c} title="🧬 Toxicología" />
      <StepX c={c} n="1" title="Convalatoxina — todo es tóxico" desc="Convalatoxina, convalósido, convallotoxol: glucósidos cardiacos similares a digitálicos pero más potentes por kg. Inhiben Na+/K+-ATPasa cardiaca → acumulación Ca2+ intracelular → arritmias. Concentración alta en flores y frutos rojos. El agua del jarrón donde se han puesto flores: tóxica. Intoxicaciones infantiles frecuentes (flores bonitas + bayas rojas atractivas)." />
      <StepX c={c} n="2" title="Síntomas" desc="Náuseas, vómitos, dolor abdominal, diarrea. Bradiarritmias. Hipotensión. Confusión. Similar a intoxicación por digoxina. Sin antídoto específico — Digifab puede usarse en casos graves (misma diana molecular). UCI con monitorización cardiaca." />
      <StepX c={c} n="3" title="No confundir con ajo de oso" desc="Allium ursinum (ajo de oso, comestible, delicioso) también tiene hojas similares en bosques húmedos de primavera. Diferencia: ajo de oso huele intensamente a ajo al frotar. Lirio del Valle: fragancia floral dulce, sin olor a ajo. Vital no confundir al recolectar ajo silvestre." />

      <SectionTitleX c={c} title="🌱 Cultivo ornamental" />
      <StepX c={c} n="1" title="Rizoma en sombra húmeda" desc="Planta de bosque templado. Necesita sombra o semisombra, suelo húmedo rico en humus, pH ligeramente ácido. Se propaga por rizomas horizontales — crea colonias densas. En BCN: zona norte de jardín, humedad alta, dificultosa en clima cálido." />
      <StepX c={c} n="2" title="Floración y perfume" desc="Florece en abril-mayo. Perfume icónico usado en perfumería (Dior Poison original). Después bayas rojas en verano. Hojas amarillean y desaparecen en verano." />
      <StepX c={c} n="3" title="Seguridad" desc="GUANTES al manipular. ETIQUETAR. Especialmente peligrosa para niños y mascotas (bayas rojas atractivas). No compostar. Mantener separada de zonas de paso frecuente." />

      <SectionTitleX c={c} title="📜 Historia y cultura" />
      <StepX c={c} n="1" title="1 de mayo en Francia" desc="Regalar lirios del valle el 1 de mayo es tradición francesa (día de la suerte). El 1 de mayo de 1561, el rey Carlos IX recibió un ramo y desde entonces regaló muguet cada año a las damas de la corte. Hoy: millones de manojos vendidos ese día." />
      <StepX c={c} n="2" title="Convalatoxina en investigación" desc="Investigación reciente sugiere que la convalatoxina tiene actividad antitumoral (inhibición topoisomerasa) y antiviral. También se ha explorado como alternativa a la digoxina en insuficiencia cardiaca. No hay preparado farmacológico aprobado actualmente." />

      <SectionTitleX c={c} title="🧪 Extracción y uso" />
      <StepX c={c} n="1" title="Compuestos activos" desc="Convalatoxina, convalamarina (glucósidos cardiacos). Toda la planta." />
      <StepX c={c} n="2" title="Extracción histórica" desc="Convalatoxina aislada en 1929. Uso tradicional en la URSS como tónico cardiaco (gotas de Convalaria). Infusiones de hojas secas en medicina popular europea (corregidas por digital)." />
      <StepX c={c} n="3" title="Usos médicos/farmacéuticos" desc="Obsoleto en medicina occidental (reemplazado por digoxina — farmacocinética más predecible). Perfumería (aroma característico, sintetizado ahora sin extracto vegetal)." />
      <InfoBoxX c={c}>⚠️ Esta información es EXCLUSIVAMENTE documental y educativa. NO realizar extracciones caseras — estas plantas pueden ser letales en dosis ínfimas y requieren equipo de laboratorio profesional, protocolos de seguridad y conocimiento experto en química y toxicología.</InfoBoxX>

      <SectionTitleX c={c} title="🚨 Antídotos y tratamiento específico" />
      <StepX c={c} n="1" title="Digifab — anticuerpos antidigitálicos" desc="La convalatoxina comparte mecanismo con la digoxina (inhibición Na+/K+-ATPasa). Digifab (fragmentos Fab) puede neutralizarla en casos graves, aunque la dosificación es menos precisa que para digoxina por falta de inmunoensayo específico. Disponible en UCI. Uso empírico en intoxicaciones graves con arritmias." />
      <StepX c={c} n="2" title="Urgencias inmediato — incluso agua del jarrón" desc="Si alguien bebió el agua del jarrón donde estaban las flores: urgencias. La concentración puede ser suficiente para síntomas cardiacos. ECG inmediato. Monitorización 12-24h. Carbón activado si ingestión reciente. Especial atención en niños — los frutos rojos de otoño son muy atractivos." />

      <SectionTitleX c={c} title="🌱 Cultivo ornamental completo" />
      <StepX c={c} n="1" title="Rizoma y división" desc="Se propaga por división de rizomas en otoño o post-floración. Desenterrar el rizoma horizontal, separar con cuchillo limpio en secciones con al menos 1 yema cada una. Replantear a 5cm profundidad en zona de sombra con suelo húmedo y rico. Una mata se convierte en colonia densa en 3-5 años." />
      <StepX c={c} n="2" title="Forzado para flor interior" desc="Los rizomas se pueden 'forzar' para florecer en interior en Navidad: sacar de tierra en noviembre, meter en maceta con sustrato, llevar a interior cálido (18-20°C) con luz indirecta. Florecen en 3-6 semanas. CUIDADO: el agua del plato bajo la maceta también contiene toxinas." />
      <StepX c={c} n="3" title="BCN — dificultad" desc="Convallaria prefiere climas fríos y húmedos. En BCN: solo viable en zona norte del jardín con sombra + riego frecuente + suelo muy enmendado con compost. El calor estival mediterráneo es el mayor problema. Puede sobrevivir pero no proliferará como en norte de España o climas atlánticos." />
    </div>
  );
}

function ELEBORO() {
  const c = TOXICAS_COLORS;
  return (
    <div>
      <InfoBoxX c={c}>
        Helleborus niger — Eléboro negro, Rosa de Navidad, Hierba de los locos. Florece en invierno (diciembre-febrero), a menudo bajo la nieve. Ornamental de jardines europeos muy apreciada. Toda la planta tóxica: helleborina, ranunculósidos. Historia médica antigua — usada como purgante violento, emético y "cura de la locura".
      </InfoBoxX>

      <div style={{ display: "grid", gridTemplateColumns: "1fr 1fr", gap: "10px", marginBottom: "16px" }}>
        <StatBoxX c={c} label="☠️ Toxicidad" value="TIER ROJO — helleborina, ranunculósidos. Toda la planta" />
        <StatBoxX c={c} label="🌸 Apariencia" value="15-30cm. Flores blancas/rosadas en invierno, sépalos persistentes verdes. Hojas palmeadas persistentes" />
        <StatBoxX c={c} label="📍 España" value="Pirineos y montaña norte. Cultivada como ornamental de invierno muy extendida" />
        <StatBoxX c={c} label="⚡ Mecanismo" value="Helleborina: glucósido cardiaco + acción sobre SNC. Saponinas irritantes GI" />
      </div>

      <SectionTitleX c={c} title="🧬 Toxicología" />
      <StepX c={c} n="1" title="Helleborina y bufadienólidos" desc="Compuestos cardioactivos (helleborina, desglucohelleborina) + saponinas triterpénicas (helleborosina). Efectos: cardiotónicos, emenagogos, irritantes GI severos. Históricamente: vómitos, diarrea explosiva, hipotensión, bradicardia, confusión, convulsiones, muerte en dosis altas. Savia fresca: irritante de piel y mucosas — dermatitis de contacto frecuente." />
      <StepX c={c} n="2" title="Raíz — parte más tóxica" desc="Rizoma y raíces: mayor concentración de toxinas. Histórico: raíz seca en polvo usada como 'purgante heroico' en medicina medieval — evacuaba humores. Dosis purgante = próximo a dosis tóxica. NO usar internamente." />

      <SectionTitleX c={c} title="🌱 Cultivo ornamental" />
      <StepX c={c} n="1" title="Planta de invierno resistente" desc="Uno de los pocos ornamentales que florecen en invierno. Semisombra, suelo calizo bien drenado, tolera frío. Longeva (10-15 años). Floración diciembre-marzo. Varias especies y variedades: H. orientalis (más fácil, flores coloridas), H. foetidus (hojas divididas, olor desagradable)." />
      <StepX c={c} n="2" title="Seguridad" desc="GUANTES — savia irrita piel especialmente ojos. Lavar manos tras manipular. Flores y hojas atractivas pero tóxicas. Etiquetar en jardines con visitas de niños." />

      <SectionTitleX c={c} title="📜 Eléboro en la historia" />
      <StepX c={c} n="1" title="Cura de la locura en la antigüedad" desc="El eléboro negro fue el tratamiento estándar de la 'melancolía' (depresión) y 'manía' (psicosis) en Grecia clásica y Roma. Hipócrates lo prescribía. El santuario de Asclepio en Anticira (Grecia) era famoso por sus curas de eléboro — 'ir a Anticira' = ser tratado de locura. La cura consistía en purgas violentas que supuestamente expulsaban los humores malos." />
      <StepX c={c} n="2" title="Veneno de flechas y guerra química" desc="En la Primera Guerra Sagrada (595 a.C.), los atenienses envenenaron el suministro de agua de Cirra con raíz de eléboro — uno de los primeros usos documentados de guerra química/biológica. Las tropas de Cirra sufrieron diarrea masiva." />

      <SectionTitleX c={c} title="🧪 Extracción y uso" />
      <StepX c={c} n="1" title="Compuestos activos" desc="Helleborina, heleborígeno (glucósidos). Raíz = parte más tóxica." />
      <StepX c={c} n="2" title="Extracción histórica" desc="Usado en la antigua Grecia como purgante drástico y vermífugo (extracto de raíz en vino). Asedio de Cirra (590 a.C.): leyenda de envenenamiento de agua con eléboro. Polvo de raíz como insecticida casero histórico." />
      <StepX c={c} n="3" title="Usos médicos/farmacéuticos" desc="SIN USO MÉDICO MODERNO. Investigación como fuente de análogos de esteroides cardiacos con ventana terapéutica más amplia. Horticultura: variedades ornamentales populares (Helleborus × hybridus) — bellas pero mantienen toxicidad." />
      <InfoBoxX c={c}>⚠️ Esta información es EXCLUSIVAMENTE documental y educativa. NO realizar extracciones caseras — estas plantas pueden ser letales en dosis ínfimas y requieren equipo de laboratorio profesional, protocolos de seguridad y conocimiento experto en química y toxicología.</InfoBoxX>

      <SectionTitleX c={c} title="🚨 Antídotos y tratamiento específico" />
      <StepX c={c} n="1" title="Descontaminación digestiva y cutánea" desc="Ingestión: carbón activado si reciente. Piel: lavado abundante con agua (savia vesicante). Ojos: irrigación ocular urgente 15-20 min con suero fisiológico → oftalmólogo. Síntomas GI: antieméticos, hidratación IV. Arritmias: soporte cardiaco. Sin antídoto específico." />
      <StepX c={c} n="2" title="Dermatitis por savia" desc="La savia irrita mucosas y puede causar ampollas en piel sensible. Si exposición cutánea: lavar inmediatamente con agua y jabón. Si ampollas: NO reventar, cubrir con apósito limpio y urgencias dermatológicas. Contaminación ocular: lavar abundantemente y urgencias oftalmológicas — riesgo de lesión corneal." />

      <SectionTitleX c={c} title="🌱 Cultivo ornamental — Helleborus" />
      <StepX c={c} n="1" title="Variedades más cultivadas" desc="H. orientalis (Helleborus orientalis hybrids): las más fáciles y disponibles. Flores en todos los colores (blanco, rosa, rojo, negro-morado, manchadas). Perenne robusta. H. niger (rosa de Navidad): flores blancas diciembre-enero. H. foetidus: hojas muy divididas, flores verde-amarillas, olor desagradable pero muy resistente." />
      <StepX c={c} n="2" title="Multiplicación por semillas' propias" desc="H. orientalis hibrida se reproduce fácilmente por semilla, aunque no mantiene características exactas del padre (variedades cruzadas). Sembrar semillas FRESCAS (recién recogidas julio-agosto) directamente en exterior — estratificación natural en invierno, germina en primavera. Si se esperan mucho tiempo, la semilla pierde viabilidad." />
      <StepX c={c} n="3" title="Cuidados generales" desc="Poca agua en verano (semidormante). Fertilización con abono lento-liberación en primavera. Cortar hojas viejas en enero para que se vean mejor las flores. Proteger de babosas/caracoles (devoran plantas jóvenes). Muy longeva — un eléboro establecido puede vivir 20+ años." />
    </div>
  );
}

function VERATRUM() {
  const c = TOXICAS_COLORS;
  return (
    <div>
      <InfoBoxX c={c}>
        Veratrum album — Eléboro blanco, Cebadilla. Planta de alta montaña (Pirineos, Alpes) responsable de numerosas intoxicaciones mortales por confusión con Gentiana lutea (genciana amarilla, comestible). Misma zona, misma apariencia en estado vegetativo. Protoveratrina y otros alcaloides de Veratrum — activan masivamente canales de sodio.
      </InfoBoxX>

      <div style={{ display: "grid", gridTemplateColumns: "1fr 1fr", gap: "10px", marginBottom: "16px" }}>
        <StatBoxX c={c} label="☠️ Toxicidad" value="TIER ROJO MAX — protoveratrina A y B. Dosis letal baja" />
        <StatBoxX c={c} label="🌿 Apariencia" value="1-1.8m. Hojas ovales acanaladas alternas. Flores verde-blancas en panícula. Rizoma grisáceo" />
        <StatBoxX c={c} label="📍 España" value="Pirineos, montaña cantábrica. Meadows alpinos 1000-2400m" />
        <StatBoxX c={c} label="⚠️ CONFUSIÓN" value="Con Gentiana lutea (genciana) — MORTAL. Misma zona, aspecto similar antes de florecer" />
      </div>

      <SectionTitleX c={c} title="🔍 Identificación vs Gentiana lutea" />
      <StepX c={c} n="1" title="Diferencias clave" desc="Veratrum album: hojas alternas (en espiral), nervios paralelos muy marcados en hoja, olor desagradable suave al frotar. Gentiana lutea: hojas OPUESTAS (en pares), nervios menos marcados, olor aromático-amargo. Florecidas: completamente distintas. El peligro es en estado vegetativo (mayo-junio) antes de florecer — los recolectores de genciana confunden los rizomas." />
      <StepX c={c} n="2" title="Rizoma — la confusión letal" desc="Rizoma de Veratrum: similar en tamaño y aspecto al de genciana. Diferencia: Veratrum huele desagradable, corte expone color diferente. Casos mortales: Europa Central y Alpes, principalmente recolectores de hierbas que usan raíz de genciana para aperitivos (Enzian)." />

      <SectionTitleX c={c} title="🧬 Toxicología" />
      <StepX c={c} n="1" title="Protoveratrina — activación masiva canales Na+" desc="Protoveratrina A y B: activan canales de sodio voltaje-dependientes y los mantienen abiertos → despolarización continua de nervios y músculos. Bradiarritmias profundas, hipotensión severa, náuseas y vómitos explosivos (inicio muy rápido, 30min-1h). Contrariamente a la aconitina (que también activa Na+ pero en músculo cardiaco), Veratrum provoca reflejo de Bezold-Jarisch — bradicardia + vasodilatación paradójica. Sin antídoto. Atropina IV para bradicardia." />
      <StepX c={c} n="2" title="Alcaloides hipotensores — uso médico histórico" desc="Años 40-50: extractos de Veratrum como antihipertensivos. Protoveratrina utilizada en crisis hipertensivas severas. Abandonada por ventana terapéutica ínfima y náuseas severas. Hoy reemplazada por fármacos con mejor perfil." />

      <SectionTitleX c={c} title="🌱 Hábitat y distribución" />
      <StepX c={c} n="1" title="Prados alpinos húmedos" desc="Especie de alta montaña: prados subalpinos y alpinos húmedos, laderas norte. Pirineos (500-2400m), Cordillera Cantábrica. No cultivada habitualmente — aparece en jardines alpinos de especialidad. Fotografiar en hábitat natural = OK. Recolectar sin expertise botánico = peligroso." />

      <SectionTitleX c={c} title="🧪 Extracción y uso" />
      <StepX c={c} n="1" title="Compuestos activos" desc="Protoveratrina, jervina (alcaloides esteroideos). Raíz/rizoma concentrados." />
      <StepX c={c} n="2" title="Extracción histórica" desc="Usado en la antigüedad como insecticida y parasiticida externo. Extracto alcohólico de rizoma como hipotensor histórico (efectos secundarios impredecibles — abandonado). Jervina como precursor de la síntesis de corticosteroides." />
      <StepX c={c} n="3" title="Usos médicos/farmacéuticos" desc="SIN USO MÉDICO ACTUAL. La protoveratrina es herramienta de investigación en neurofisiología (activación irreversible de canales Na+). Jervina = materia prima histórica para síntesis de hormonas esteroideas (hoy reemplazada por fuentes vegetales más seguras como Dioscorea)." />
      <InfoBoxX c={c}>⚠️ Esta información es EXCLUSIVAMENTE documental y educativa. NO realizar extracciones caseras — estas plantas pueden ser letales en dosis ínfimas y requieren equipo de laboratorio profesional, protocolos de seguridad y conocimiento experto en química y toxicología.</InfoBoxX>

      <SectionTitleX c={c} title="🚨 Antídotos y tratamiento específico" />
      <StepX c={c} n="1" title="Atropina para bradicardia + soporte" desc="Bradicardia severa por reflejo Bezold-Jarisch: atropina IV 0.5-2mg. Hipotensión: posición Trendelenburg + fluidos IV. Náuseas/vómitos (síntoma más precoz y frecuente): antieméticos IV. Sin antídoto específico para protoveratrina. UCI con monitorización cardiaca continua." />
      <StepX c={c} n="2" title="Carbón activado urgente" desc="Ingestión reciente (<1h): carbón activado 50g oral. Lavado gástrico si ingestión masiva (<30min). La protoveratrina se absorbe rápidamente — el tiempo importa. Identificación botánica de la planta implicada es esencial para el médico: Veratrum vs Gentiana vs especie desconocida." />
      <StepX c={c} n="3" title="Confusión genciana → intoxicación accidental" desc="Vigilar en zonas de montaña cuando alguien prepara bebidas con 'genciana silvestre': Enzian (licor austriaco), infusiones digestivas de montaña. Si persona de montaña presenta vómitos + bradicardia tras consumir preparado de 'genciana': sospechar Veratrum. Urgencias con muestra de la planta usada." />
    </div>
  );
}

function LAUREOLA() {
  const c = TOXICAS_COLORS;
  return (
    <div>
      <InfoBoxX c={c}>
        Daphne laureola / Daphne mezereum — Laureola / Torvisco. Arbustos leñosos de bosques europeos, muy decorativos con sus bayas rojas o negras. Toda la planta extremadamente tóxica: dafnetoxina y mezerein (diterpenos ésteres). Las bayas son especialmente atractivas y peligrosas para niños. La savia produce ampollas severas en piel.
      </InfoBoxX>

      <div style={{ display: "grid", gridTemplateColumns: "1fr 1fr", gap: "10px", marginBottom: "16px" }}>
        <StatBoxX c={c} label="☠️ Toxicidad" value="TIER ROJO — dafnetoxina, mezerein. Baya: 12 = dosis letal adulto" />
        <StatBoxX c={c} label="🌸 Apariencia" value="Arbusto 0.5-1.5m. D. mezereum: flores rosas en ramas desnudas (invierno). Bayas rojas/negras" />
        <StatBoxX c={c} label="📍 España" value="Bosques montaña húmeda. Pirineos, norte peninsular, sierras Sistema Central" />
        <StatBoxX c={c} label="⚡ Mecanismo" value="Diterpenoides: irritación severa mucosas, nefrotóxico, hepatotóxico. Mezerein: activador PKC tumorigénico" />
      </div>

      <SectionTitleX c={c} title="🧬 Toxicología" />
      <StepX c={c} n="1" title="Dafnetoxina y mezerein" desc="Diterpenoides de tipo tiglano y dafnano. Irritantes de mucosas extremadamente potentes. Ingestión: ardor intenso boca/garganta inmediato, edema, dificultad para tragar, náuseas, vómitos, diarrea hemorrágica, daño renal, hepático. Contacto piel/savia: dermatitis ampollosa severa (vesicante). Mezerein es activador de proteína quinasa C — promotor tumoral en estudios animales." />
      <StepX c={c} n="2" title="Bayas rojas atractivas" desc="Daphne mezereum: bayas rojas o anaranjadas brillantes en ramas sin hojas → extremadamente atractivas para niños. 12 bayas = dosis letal estimada adulto. 2-3 bayas: hospitalización pediátrica. Ardor inmediato boca suele actuar como disuasor natural, pero no siempre. Urgencias inmediato si ingestión cualquier cantidad." />
      <StepX c={c} n="3" title="Dermatitis de contacto" desc="Savia de todas las especies Daphne: vesicante potente. Nunca manipular sin guantes. Contacto con piel/ojos: ampollas, edema, potencialmente ceguera si en ojos. Enjuagar con agua abundante y urgencias si oculares." />

      <SectionTitleX c={c} title="🌱 Cultivo ornamental" />
      <StepX c={c} n="1" title="Valor ornamental — peligro oculto" desc="D. mezereum: muy ornamental (flores en invierno, fragrantes, en ramas sin hojas). D. laureola: sombra densa, hojas perennes verde brillante. Vendidas en viveros como ornamentales. Comprador frecuentemente no sabe de la toxicidad. Pedir siempre información al vivero sobre toxicidad de plantas compradas." />
      <StepX c={c} n="2" title="Condiciones de cultivo" desc="Suelo calizo bien drenado. D. laureola: sombra o semisombra, resistente. D. mezereum: semisombra, más exigente en humedad. Crecimiento lento. GUANTES siempre al podar/trasplantar." />
      <StepX c={c} n="3" title="Propagación desde semillas" desc="Daphne mezereum: semillas maduras (bayas) en julio-agosto. Limpiar la pulpa con guantes. Estratificación cálida 3 meses + fría 3 meses antes de germinar. Alternativa: esquejes semileñosos en verano con hormona enraizante. Daphne en general es difícil de enraizar — paciencia." />

      <SectionTitleX c={c} title="🧪 Extracción y uso" />
      <StepX c={c} n="1" title="Compuestos activos" desc="Dafnetoxina, mezereína (ésteres diterpénicos). Corteza y frutos = más tóxicos." />
      <StepX c={c} n="2" title="Extracción histórica" desc="Corteza machacada como vejigatorio y rubefaciente en medicina medieval (aplicación cutánea para 'sacar el mal humor'). Extracto de frutos como veneno para peces (práctica tradicional en ríos)." />
      <StepX c={c} n="3" title="Usos médicos/farmacéuticos" desc="SIN USO EN MEDICINA MODERNA. Mezereína investigada como activador de PKC (modelo de diferenciación celular y apoptosis en laboratorio). Planta ornamental ocasional en jardines." />
      <InfoBoxX c={c}>⚠️ Esta información es EXCLUSIVAMENTE documental y educativa. NO realizar extracciones caseras — estas plantas pueden ser letales en dosis ínfimas y requieren equipo de laboratorio profesional, protocolos de seguridad y conocimiento experto en química y toxicología.</InfoBoxX>

      <SectionTitleX c={c} title="🚨 Antídotos y tratamiento específico" />
      <StepX c={c} n="1" title="Lavado gastro-intestinal y soporte" desc="Ingestión: carbón activado si reciente. Lavado gástrico solo si ingestión masiva reciente (<30min). El ardor bucal inmediato suele disuadir la ingestión masiva, pero en niños pequeños puede no ser suficiente. Hidratación IV agresiva. Protección renal y hepática. Sin antídoto específico." />
      <StepX c={c} n="2" title="Lesiones cutáneas" desc="Contacto con savia: lavado inmediato agua abundante. Ampollas (vesículas): NO reventar, apósitos limpios, urgencias dermatológicas. Ojos: irrigación inmediata 15+ min y urgencias oftalmológicas — la savia puede causar lesión corneal severa." />
      <StepX c={c} n="3" title="Mezerein en investigación" desc="Mezerein: activador de proteína quinasa C — ha sido estudiado como agente antileucémico (paradójicamente, el promotor tumoral en bajas dosis puede inducir diferenciación en células leucémicas). Solo en contexto de investigación oncológica controlada. No hay aplicación clínica actual." />
    </div>
  );
}

// ============================================================
//  PLANTAS PARALIZANTES — Curare, Estricnina, Calabar bean
// ============================================================

function CURARE() {
  const c = TOXICAS_COLORS;
  return (
    <div>
      <InfoBoxX c={c}>
        Curare — veneno de flechas amazónico preparado de múltiples plantas, principalmente <em>Strychnos toxifera</em> y <em>Chondrodendron tomentosum</em>. El compuesto activo tubocurarina bloquea los receptores nicotínicos de acetilcolina en la unión neuromuscular → parálisis flácida total manteniendo la conciencia. Ha salvado millones de vidas: hoy se usan relajantes musculares derivados en cirugía y anestesiología.
      </InfoBoxX>

      <div style={{ display: "grid", gridTemplateColumns: "1fr 1fr", gap: "10px", marginBottom: "16px" }}>
        <StatBoxX c={c} label="☠️ Tipo de parálisis" value="Flácida completa — conciencia preservada. Paro respiratorio" />
        <StatBoxX c={c} label="🌿 Fuentes" value="Strychnos toxifera, Chondrodendron tomentosum, otras Menispermáceas amazónicas" />
        <StatBoxX c={c} label="📍 Origen" value="Amazonia (Venezuela, Ecuador, Perú, Colombia). Preparado por chamanes." />
        <StatBoxX c={c} label="💉 Uso médico" value="Tubocurarina → pancuronio, vecuronio, cisatracurio: relajantes musculares cirugía/anestesia" />
      </div>

      <SectionTitleX c={c} title="🧬 Mecanismo — el veneno que salvó vidas" />
      <StepX c={c} n="1" title="Bloqueo nAChR neuromuscular" desc="Tubocurarina compite con la acetilcolina por los receptores nicotínicos (nAChR) de la placa motora. Sin activación del nAChR: el músculo no se contrae → parálisis flácida. Efecto progresivo: músculos pequeños primero (párpados, dedos), músculos grandes después, diafragma al final → paro respiratorio. La conciencia se MANTIENE completamente — la víctima está consciente pero incapaz de moverse o respirar." />
      <StepX c={c} n="2" title="Solo por vía parenteral" desc="La tubocurarina NO se absorbe por vía oral — se degrada en el tracto digestivo. El curare solo es tóxico si entra al torrente sanguíneo directamente: flecha (barba de palmera o bambú untada con el preparado), herida, IV. Por eso los cazadores amazónicos podían comer la carne del animal cazado con flechas envenenadas." />
      <StepX c={c} n="3" title="Preparación tradicional" desc="El 'urari' o 'woorali' es preparado de múltiples plantas — fórmulas secretas de cada grupo étnico (Tucano, Macuna, Waorani). Base: corteza de Strychnos toxifera (contiene toxiferina) y/o rizomas de Chondrodendron tomentosum (contiene d-tubocurarina). Hervido durante horas en ollas de barro hasta obtener pasta pegajosa negra. Conservado en calabazas (curare 'calabash') o tubos de bambú." />
      <StepX c={c} n="4" title="Potencia específica" desc="El curare de los Waorani de Ecuador (yopo negro) es considerado de los más potentes: 3-5 minutos para parálisis completa en animales de caza medianos (tapir, mono). Caza de animales de dosel arborícola con cerbatana (bodoquera): alcance 30-40m, silencioso, eficaz." />

      <SectionTitleX c={c} title="💊 Revolución médica — relajantes musculares" />
      <StepX c={c} n="1" title="1942 — Harold Griffith y la anestesia moderna" desc="En 1942, Harold Griffith (Montreal) usa por primera vez tubocurarina purificada en cirugía. El resultado fue revolucionario: cirujanos podían operar con anestesia superficial (menos riesgo), músculos relajados completamente, ventilación controlada. Antes de curare: la anestesia profunda necesaria para relajar músculos era muy peligrosa." />
      <StepX c={c} n="2" title="De veneno a fármaco" desc="Tubocurarina (Intocostrin, 1942). Pancuronio (1967). Vecuronio (1980). Cisatracurio (1995). Rocuronio (1994, reversible con sugammadex). Todos son bloqueantes neuromusculares no despolarizantes derivados conceptualmente del curare. Hoy se usan en cada intubación endotraqueal, cada operación abdominal mayor, cada UCI con ventilación mecánica. El veneno de flecha amazónico es uno de los fármacos más utilizados en medicina moderna." />
      <StepX c={c} n="3" title="Sugammadex — antídoto específico" desc="Rocuronio y vecuronio tienen antídoto moderno: sugammadex (Bridion). Molécula cíclica que 'atrapa' el bloqueante neuromuscular → revertir parálisis en 2-3 minutos. Un hito farmacológico — el primer antídoto de encapsulamiento molecular aprobado. Disponible en todos los quirófanos modernos." />

      <SectionTitleX c={c} title="🧪 Extracción y uso" />
      <StepX c={c} n="1" title="Compuestos activos" desc="D-tubocurarina (alcaloide bisbencilisoquinolínico). Corteza de Strychnos toxifera y Chondrodendron tomentosum." />
      <StepX c={c} n="2" title="Extracción histórica" desc="Preparación tradicional amazónica: corteza hervida y reducida a pasta concentrada. Aplicación en dardos de cerbatana. Tubocurarina aislada en 1935 (King). Extracción moderna por partición ácido-base." />
      <StepX c={c} n="3" title="Usos médicos/farmacéuticos" desc="Revolucionó la anestesiología: primer relajante muscular no despolarizante para cirugía (1942). Permitió cirugías que antes eran imposibles por la tensión muscular. Hoy reemplazada por análogos sintéticos (atracurio, rocuronio) con mejor perfil de seguridad. Sigue en la lista OMS de medicamentos esenciales." />
      <InfoBoxX c={c}>⚠️ Esta información es EXCLUSIVAMENTE documental y educativa. NO realizar extracciones caseras — estas plantas pueden ser letales en dosis ínfimas y requieren equipo de laboratorio profesional, protocolos de seguridad y conocimiento experto en química y toxicología.</InfoBoxX>

      <SectionTitleX c={c} title="🌱 Plantas fuente — cultivo e identificación" />
      <StepX c={c} n="1" title="Strychnos toxifera — liana amazónica" desc="Liana de selva tropical amazónica. Hojas opuestas ovales, espinas circinadas (zarcillos en espiral). Fruto baya esférica 5-8cm. Misma familia (Loganiáceas) que Strychnos nux-vomica (nuez vómica). Cultivo: solo viable en invernadero tropical húmedo (no práctico en España). Planta de jardín botánico o colección especializada." />
      <StepX c={c} n="2" title="Chondrodendron tomentosum — liana menispermácea" desc="Liana de Andes tropicales occidentales (Ecuador, Perú). Hojas grandes ovales con pelusa tomentosa (de ahí 'tomentosum'). Fuente de d-tubocurarina. Cultivo tropical, no viable en condiciones europeas normales. Se puede encontrar en jardines botánicos tropicales y colecciones especializadas de etnobotánica." />

      <SectionTitleX c={c} title="🚨 Antídoto específico" />
      <StepX c={c} n="1" title="Ventilación mecánica + neostigmina" desc="Para tubocurarina y bloqueantes no despolarizantes similares: neostigmina (inhibidor AChE) revierte parcialmente el bloqueo aumentando la acetilcolina disponible. Para rocuronio/vecuronio: sugammadex es el antídoto de elección (más completo y rápido). Mientras tanto: ventilación manual/mecánica OBLIGATORIA." />
      <StepX c={c} n="2" title="Parálisis con conciencia — clave psicológica" desc="La víctima de curare está plenamente consciente y puede oír y entender pero no moverse ni pedir ayuda. Esto fue documentado en experimentos voluntarios (pioneros médicos del siglo XIX se dejaron inyectar tubocurarina en hospitales). La muerte por curare sin tratamiento es por asfixia, consciente. El aspecto psicológico es parte del impacto del veneno en contextos de caza ritual." />
    </div>
  );
}

function NUEZ_VOMICA() {
  const c = TOXICAS_COLORS;
  return (
    <div>
      <InfoBoxX c={c}>
        <em>Strychnos nux-vomica</em> — Nuez vómica, Falso Ashoka. Árbol tropical asiático. Sus semillas contienen estricnina, uno de los venenos más dramáticos conocidos: produce convulsiones tetánicas espectaculares manteniendo la conciencia. A dosis bajas: estimulante del SNC con efectos curiosos. Ha sido veneno de ratas, adulterate de drogas y tema de novelas policiacas (Agatha Christie, Arthur Conan Doyle).
      </InfoBoxX>

      <div style={{ display: "grid", gridTemplateColumns: "1fr 1fr", gap: "10px", marginBottom: "16px" }}>
        <StatBoxX c={c} label="☠️ Toxicidad" value="TIER ROJO MAX — estricnina. DL50 ~1-2mg/kg oral. Tetania convulsiva" />
        <StatBoxX c={c} label="🌳 Planta" value="Árbol 12-15m. Hojas brillantes ovales. Bayas naranja-amarillas con semillas grises" />
        <StatBoxX c={c} label="📍 Origen" value="Asia tropical (India, Sri Lanka, SE Asia). Cultivado en zonas tropicales" />
        <StatBoxX c={c} label="⚡ Mecanismo" value="Antagonista glicina (receptor inhibitorio espinal) → hiperexcitabilidad → convulsiones tetánicas" />
      </div>

      <SectionTitleX c={c} title="🧬 Toxicología — la tetania convulsiva" />
      <StepX c={c} n="1" title="Bloqueo de receptores de glicina" desc="Estricnina bloquea los receptores de glicina en la médula espinal y tronco encefálico. La glicina es el neurotransmisor inhibitorio principal de las motoneuronas espinales. Sin inhibición: cualquier estímulo sensorial (luz, sonido, tacto) dispara una descarga motora masiva → contracción simultánea de todos los músculos (agonistas y antagonistas). Resultado: opistótonos (arco hacia atrás), trismus (mandíbula bloqueada), risa sardónica." />
      <StepX c={c} n="2" title="Conciencia completamente preservada" desc="La estricnina NO afecta centros superiores cerebrales. La víctima está completamente lúcida durante los episodios convulsivos — oye, ve, piensa, recuerda. Las convulsiones duran 30 segundos a 2 minutos cada una, con intervalos de relajación. Muerte por fatiga muscular → insuficiencia respiratoria o hipoxia durante las convulsiones." />
      <StepX c={c} n="3" title="DL50 y síntomas" desc="DL50 humana estimada: 1-2mg/kg oral. Inicio síntomas: 15-30 minutos post-ingestión. Primer síntoma: hiperreflexia (reflejos hiperactivos), rigidez cervical. Las convulsiones se desencadenan por cualquier estímulo. Entre episodios: cianosis, acidosis metabólica por contracciones masivas. Sin tratamiento: muerte en 2-3h." />
      <StepX c={c} n="4" title="Historia como veneno clásico" desc="Veneno de ratas (Rattenkonig en alemán): estricnina fue el raticida más común del siglo XIX-XX antes de warfarina. Adulterante de cocaína, heroína y otras drogas (aumenta el efecto estimulante a bajas dosis). Christie y Conan Doyle lo usaron en sus novelas. Nux vomica era también medicamento homeopático (Nux vomica 9CH) — 'para digestión pesada'." />

      <SectionTitleX c={c} title="🌱 Cultivo ornamental (climas tropicales)" />
      <StepX c={c} n="1" title="Árbol tropical — no para España continental" desc="S. nux-vomica es árbol de bosque tropical caducifolio (India, Sri Lanka). Requiere temperatura >18°C todo el año, sin heladas. Viable solo en Canarias (subtropical) o invernadero climatizado. Árbol grande (12-15m) — no práctico en interiores. Interés principalmente colección botánica o jardín tropical de gran tamaño." />
      <StepX c={c} n="2" title="Germinar semillas" desc="Semillas de las bayas naranja (limpiar bien la pulpa con guantes). Escarificación mecánica + remojo 24h. Sustrato caliente (25-30°C) + humedad alta. Germinación en 3-6 semanas. Crecimiento lento los primeros años. Las semillas son las más tóxicas — manipular con guantes de nitrilo." />

      <SectionTitleX c={c} title="🧪 Extracción y uso" />
      <StepX c={c} n="1" title="Compuestos activos" desc="Estricnina, brucina (alcaloides indólicos). Semillas concentradas." />
      <StepX c={c} n="2" title="Extracción histórica" desc="Semillas pulverizadas y maceradas en alcohol diluido con ácido. Extracción ácido-base para purificar estricnina. Históricamente usada como rodenticida y 'tónico' (abandonado por toxicidad acumulativa)." />
      <StepX c={c} n="3" title="Usos médicos/farmacéuticos" desc="SIN USO MÉDICO. Estricnina retirada como rodenticida por toxicidad secundaria a depredadores. Investigación como antagonista de glicina (modelo experimental). Brucina usada como estándar de amargor en análisis sensorial y como agente de resolución quiral en síntesis orgánica." />
      <InfoBoxX c={c}>⚠️ Esta información es EXCLUSIVAMENTE documental y educativa. NO realizar extracciones caseras — estas plantas pueden ser letales en dosis ínfimas y requieren equipo de laboratorio profesional, protocolos de seguridad y conocimiento experto en química y toxicología.</InfoBoxX>

      <SectionTitleX c={c} title="🚨 Antídotos y tratamiento específico" />
      <StepX c={c} n="1" title="Benzodiacepinas — controlar convulsiones" desc="Diazepam IV o midazolam: primera línea para controlar las convulsiones. Mecanismo: potencian receptores GABA-A → compensan parcialmente la falta de inhibición glicinérgica. Dosis altas pueden ser necesarias. Si refractario: propofol o barbitúricos en UCI." />
      <StepX c={c} n="2" title="Ambiente silencioso y oscuro" desc="CRÍTICO: minimizar estimulación sensorial para prevenir disparar nuevas convulsiones. Habitación oscura y silenciosa. Manipulación mínima. Evitar luces brillantes, ruidos, tacto no necesario. Antes de llegar al hospital: mantener al paciente tranquilo, minimizar estímulos." />
      <StepX c={c} n="3" title="Carbón activado y ventilación" desc="Carbón activado si ingestión reciente (<30min). Ventilación mecánica si convulsiones no controladas o hipoxia. Lavado gástrico solo en condiciones controladas con paciente sedado y tubo endotraqueal (riesgo de desencadenar convulsiones con el procedimiento). Acidosis metabólica: bicarbonato IV." />
    </div>
  );
}

function CALABAR_BEAN() {
  const c = TOXICAS_COLORS;
  return (
    <div>
      <InfoBoxX c={c}>
        <em>Physostigma venenosum</em> — Calabar bean, Judía de Calabar, Haba del Ordalia. Leguminosa africana usada en el siglo XIX como 'ordalia' (juicio divino) en Nigeria: el acusado bebía extracto y si sobrevivía era inocente. Su compuesto activo, la fisostigmina, es hoy medicamento fundamental en anestesiología, oftalmología y como antídoto para intoxicaciones por anticolinérgicos (tropanos).
      </InfoBoxX>

      <div style={{ display: "grid", gridTemplateColumns: "1fr 1fr", gap: "10px", marginBottom: "16px" }}>
        <StatBoxX c={c} label="☠️ Toxicidad" value="Alta — fisostigmina. Convulsiones, bradicardia, broncoespasmo, parálisis" />
        <StatBoxX c={c} label="🌿 Planta" value="Enredadera perenne. Semillas grandes marrón-rojizas. Vaina legumbre 15-17cm" />
        <StatBoxX c={c} label="📍 Origen" value="Golfo de Guinea, Nigeria. Ecosistemas de manglares tropicales" />
        <StatBoxX c={c} label="💊 Uso médico" value="Fisostigmina: antídoto tropanos, glaucoma (colirios), Alzheimer leve (investigación)" />
      </div>

      <SectionTitleX c={c} title="🧬 Mecanismo — inhibición acetilcolinesterasa" />
      <StepX c={c} n="1" title="Fisostigmina — inhibidor reversible AChE" desc="Inhibe la acetilcolinesterasa (enzima que degrada acetilcolina). Resultado: acumulación de acetilcolina en todas las sinapsis colinérgicas. A dosis bajas: miosis, bradicardia, broncoconstricción, sialorrea, aumento motilidad intestinal (efectos muscarínicos). A dosis tóxicas: fase muscarínica + nicotínica (fasciculaciones musculares, debilidad, parálisis) + SNC (convulsiones, coma). La fisostigmina cruza la barrera hematoencefálica (a diferencia del neostigmina)." />
      <StepX c={c} n="2" title="La ordalia de Calabar" desc="Práctica judicial en Calabar (Nigeria): el acusado bebía una dosis alta de decocción de la semilla. Si vomitaba o sobrevivía = inocente (el vómito expulsaba la toxina). Si moría = culpable. Paradoja: quien no había cometido el crimen bebía con confianza despacio (absorbiendo más toxina → muerte más probable). Quien sí era culpable bebía rápido con ansiedad → vomitaba más → sobrevivía. La dosis y velocidad de ingesta determinaban el resultado." />
      <StepX c={c} n="3" title="Fisostigmina vs neostigmina" desc="Fisostigmina: penetra barrera hematoencefálica → efectos SNC (antídoto para síndromes anticolinérgicos centrales). Neostigmina: NO penetra BHE → solo efectos periféricos (reversión relajantes musculares en quirófano, tratamiento miastenia gravis). Esta diferencia es crítica en medicina." />

      <SectionTitleX c={c} title="💊 Fisostigmina en medicina moderna" />
      <StepX c={c} n="1" title="Antídoto síndrome anticolinérgico" desc="Fisostigmina IV: antídoto de elección para intoxicaciones graves por tropanos (Brugmansia, Datura, Belladona, Estramonio). 1-2mg IV lento → revertir delirio, taquicardia, retención urinaria. La 'haba del ordalia' cura el envenenamiento por 'hierbas de brujas' — poética ironía etnobotánica." />
      <StepX c={c} n="2" title="Glaucoma — colirios históricos" desc="Primeros colirios para glaucoma en siglo XIX: extracto de Physostigma venenosum. La miosis (constricción pupilar) reduce la presión intraocular. Hoy reemplazado por pilocarpina sintética y análogos de prostaglandinas más seguros, pero abrió el campo de la farmacología oftalmológica." />
      <StepX c={c} n="3" title="Alzheimer — eserina e inhibidores AChE" desc="La fisostigmina (también llamada eserina) fue el primer inhibidor AChE estudiado para Alzheimer (años 80). Demostró que aumentar acetilcolina mejoraba la cognición. Llevó directamente al desarrollo de donepezilo (Aricept), rivastigmina (Exelon) y galantamina — los medicamentos para Alzheimer leve-moderado actuales." />

      <SectionTitleX c={c} title="🧪 Extracción y uso" />
      <StepX c={c} n="1" title="Compuestos activos" desc="Fisostigmina/eserina (alcaloide inhibidor de acetilcolinesterasa). Semilla del Physostigma venenosum." />
      <StepX c={c} n="2" title="Extracción histórica" desc="Usada tradicionalmente en África occidental como 'judía del juicio' (ordalía). Fisostigmina aislada en 1864 (Jobst y Hesse). Primera evidencia de inhibición enzimática como mecanismo farmacológico." />
      <StepX c={c} n="3" title="Usos médicos/farmacéuticos" desc="Fisostigmina = tratamiento para glaucoma (reducción presión intraocular) y antídoto para intoxicación por anticolinérgicos (atropina, escopolamina). Permitió el descubrimiento del sistema colinérgico. Hoy: uso limitado pero crítico en urgencias toxicológicas y oftalmología. Precursor conceptual de los inhibidores de colinesterasa usados en Alzheimer." />
      <InfoBoxX c={c}>⚠️ Esta información es EXCLUSIVAMENTE documental y educativa. NO realizar extracciones caseras — estas plantas pueden ser letales en dosis ínfimas y requieren equipo de laboratorio profesional, protocolos de seguridad y conocimiento experto en química y toxicología.</InfoBoxX>

      <SectionTitleX c={c} title="🌱 Cultivo — liana tropical" />
      <StepX c={c} n="1" title="Enredadera tropical húmeda" desc="Physostigma venenosum crece en ecosistemas de manglares y selva tropical húmeda (Golfo de Guinea). Requiere temperatura constante >20°C, humedad alta, mucha lluvia. NO viable en España continental. Posible en invernadero tropical especializado. Semillas germinan bien en condiciones cálidas y húmedas en 2-3 semanas." />
      <StepX c={c} n="2" title="Identificación semillas" desc="Semillas (habas de Calabar): ovoides, marrón-rojizas, 2-3cm, con una hendidura longitudinal prominente. Las semillas son las más utilizadas en experimentos etnobotánicos documentados. Extractos no deben intentarse — la fisostigmina tiene margen terapéutico estrecho." />

      <SectionTitleX c={c} title="🚨 Antídoto y tratamiento" />
      <StepX c={c} n="1" title="Atropina — antagonista muscarínico" desc="Atropina IV: contrarresta los efectos muscarínicos (broncoespasmo, bradicardia, secreciones). Dosis: 2-4mg IV iniciales, repetir según síntomas. Para los efectos nicotínicos periféricos (fasiculaciones, parálisis): no hay antídoto específico — ventilación mecánica si necesario." />
      <StepX c={c} n="2" title="Pralidoxima — regenera AChE si llega a tiempo" desc="Pralidoxima (2-PAM): regenera la acetilcolinesterasa inhibida si se administra en las primeras horas. Estándar en intoxicaciones por organofosforados (pesticidas) y gases nerviosos que tienen mecanismo similar. Útil también en sobredosis grave de fisostigmina u otros inhibidores AChE. Disponible en hospitales referencia." />
    </div>
  );
}

function GLOSARIO_TOXICAS() {
  const c = TOXICAS_COLORS;
  const [query, setQuery] = React.useState("");
  const terminos = [
    { t: "Glucósido cardiaco", d: "Molécula con azúcar unido a un esteroide cardioactivo. Inhibe Na+/K+-ATPasa → aumenta Ca²⁺ intracelular → contracción cardiaca más fuerte. A dosis tóxica: arritmias letales. Ejemplos: digoxina (Dedalera), oleandrina (Adelfa), convalatoxina (Lirio del Valle), taxina (Tejo)." },
    { t: "Alcaloide tropánico", d: "Familia de alcaloides con núcleo tropano. Antagonistas muscarínicos (bloquean receptor de acetilcolina M1-M5). Producen síndrome anticolinérgico: midriasis, taquicardia, boca seca, retención urinaria, hipertermia, delirio. Ejemplos: atropina, escopolamina, hiosciamina — en Brugmansia, Datura, Belladona, Estramonio, Beleño." },
    { t: "Síndrome anticolinérgico", d: "Cuadro clínico por bloqueo de receptores muscarínicos. Mnemotecnia inglesa: 'Red as a beet (vasodilatación), Dry as a bone (anhidrosis), Blind as a bat (midriasis), Hot as a hare (hipertermia), Mad as a hatter (delirio, alucinaciones reales, amnesia)'. Tratamiento: fisostigmina IV." },
    { t: "Na⁺/K⁺-ATPasa", d: "Bomba proteíca de membrana celular que mantiene gradiente de sodio y potasio entre interior y exterior de la célula. Inhibida por glucósidos cardiacos → acumulación Ca²⁺ intracelular → efectos cardiotónicos a dosis terapéutica, arritmias a dosis tóxica." },
    { t: "Aconitina", d: "Alcaloide diterpénico de Aconitum (acónito). Activa canales de sodio voltaje-dependientes y los mantiene abiertos → despolarización continua → parálisis, arritmias. DL50 humana estimada ~2-3mg. Se absorbe transdérmicamente. Sin antídoto. Una de las toxinas vegetales más potentes de Europa." },
    { t: "Coniina", d: "Alcaloide simple de Conium maculatum (cicuta). Agonista parcial/antagonista de receptores nicotínicos de acetilcolina (nAChR) en placa neuromuscular → parálisis flácida ascendente. Mecanismo que describió Platón en la muerte de Sócrates. Sin antídoto — soporte ventilatorio." },
    { t: "Ricina", d: "Lectina tipo II (ribosoma-inactivating protein, RIP) de semillas de Ricinus communis. Cadena A inactiva irreversiblemente los ribosomas → la célula no puede sintetizar proteínas → muerte celular. DL50 humana ~1-10μg/kg IV. Sin antídoto. El aceite de ricino (extracción en frío) NO contiene ricina." },
    { t: "Colchicina", d: "Alcaloide de Colchicum autumnale. Se une a tubulina libre impidiendo formación del huso mitótico → las células no pueden dividirse. Toxicidad lenta (fallo multiorgánico diferido 2-7 días). Uso médico: gota, fiebre mediterránea. Uso científico: inducción de poliploidía en mejora vegetal." },
    { t: "Taxina", d: "Alcaloides diterpénicos (taxina A, B) de Taxus baccata (tejo). Bloquean canales Na⁺ y Ca²⁺ cardiacos → bradiarritmias y paro cardiaco. Precursor del paclitaxel (taxol): principio activo antitumoral obtenido de la corteza. Toda la planta tóxica excepto el arilo rojo (carne de la baya)." },
    { t: "Paclitaxel (Taxol)", d: "Agente quimioterápico obtenido de Taxus brevifolia y semisintéticamente desde T. baccata. Mecanismo único: estabiliza microtúbulos (opuesto a la colchicina) → impide despolimerización → célula no puede completar mitosis → apoptosis. Aprobado FDA 1992. Uno de los fármacos anticancerígenos más usados (cáncer ovario, mama, pulmón)." },
    { t: "Digifab", d: "Fragmentos de anticuerpo antidigitálico (Fab). Antídoto para intoxicación grave por glucósidos cardiacos (digoxina, digitoxina, oleandrina, convalatoxina). Se une a la toxina circulante → complejo inactivo excretado por riñón. Disponible en UCI." },
    { t: "Fisostigmina", d: "Inhibidor reversible de la acetilcolinesterasa. Antídoto para síndrome anticolinérgico severo (tropanos). Aumenta acetilcolina disponible → contrarresta el bloqueo muscarínico. Administrado IV en urgencias bajo monitorización. Contraindicado en asma, cardiopatías graves." },
    { t: "DL50", d: "Dosis Letal 50: concentración de una sustancia que mata al 50% de la población de prueba (generalmente ratas). Medida estándar de toxicidad aguda. Ejemplo: aconitina DL50 rata oral ~0.7mg/kg; ricina DL50 rata IP ~0.1mg/kg. Solo comparativa — no aplicar directamente a humanos." },
    { t: "Vesicante", d: "Sustancia que causa ampollas al contacto con piel/mucosas. Ejemplos vegetales: savia de Daphne (laureola), Euphorbia, ranunculáceas frescas. Diferente de irritante simple — el vesicante produce destrucción real del tejido epidérmico." },
    { t: "Ranunculáceas", d: "Familia botánica que incluye acónito, eléboro, ranúnculos (botones de oro). Muchas especies productoras de alcaloides y glucósidos tóxicos. Nombre: Ranunculus (ranita pequeña) por preferencia de hábitats húmedos." },
    { t: "Solanáceas", d: "Familia botánica: tomates, patatas, pimientos (comestibles) + Datura, Belladona, Mandrágora, Brugmansia, Estramonio (tóxicas). Las comestibles también contienen solanina (hojas verdes de tomate/patata = leve toxicidad)." },
    { t: "Alkaloid screening (rápido)", d: "Teste de Dragendorff: ácido tartárico + bismuto + yoduro potásico — presencia de alcaloides = precipitado naranja-rojo. Disponible como kit en laboratorios de química. Útil para identificación rápida de presencia alcaloidea en planta desconocida." },
    { t: "Identificación botánica segura", d: "Proceso de 4 pasos: (1) Foto planta completa (hábitat, tamaño). (2) Foto hoja (haz, envés, base, ápice, bordes). (3) Foto flor o fruto. (4) Foto tallo (sólido/hueco, manchas, sección). Subir a Flora Vascular España, iNaturalist, o r/whatsthisplant para identificación experta. NUNCA consumir planta no identificada 100%." },
    { t: "Tubocurarina", d: "Alcaloide del curare (Chondrodendron tomentosum). Bloqueante neuromuscular no despolarizante: compite con acetilcolina por receptores nicotínicos (nAChR) en la placa motora → parálisis flácida completa. Conciencia completamente preservada. Solo tóxico por vía parenteral (IV, IM) — se degrada en tracto digestivo. Base de los relajantes musculares quirúrgicos modernos (pancuronio, vecuronio, cisatracurio, rocuronio)." },
    { t: "Estricnina", d: "Alcaloide de Strychnos nux-vomica. Antagonista competitivo de los receptores de glicina en médula espinal y tronco encefálico. La glicina es el principal neurotransmisor inhibitorio de las motoneuronas espinales. Sin inhibición: hiperexcitabilidad → convulsiones tetánicas (opistótonos, trismus, risa sardónica). Conciencia preservada. DL50 ~1-2mg/kg. Antídoto: benzodiacepinas IV + ambiente oscuro-silencioso." },
    { t: "Fisostigmina (eserina)", d: "Alcaloide de Physostigma venenosum (Calabar bean). Inhibidor reversible de la acetilcolinesterasa que cruza la barrera hematoencefálica. Usos médicos: antídoto síndrome anticolinérgico (tropanos), históricamente glaucoma. Paradoja etnobotánica: el veneno de la 'haba del ordalia' africana es el antídoto para el veneno de las solanáceas tropánicas." },
    { t: "Bloqueo neuromuscular", d: "Interrupción de la transmisión entre neurona motora y músculo esquelético. Tipos: (1) Despolarizante: succinilcolina — abre el canal nAChR y lo mantiene abierto. (2) No despolarizante (curariformes): compiten con acetilcolina sin activar el receptor. La parálisis flácida resultante mantiene la conciencia — el SNC no está afectado." },
    { t: "Opistótonos", d: "Postura de hiperextensión severa del cuerpo en arco, con la cabeza hacia atrás y los talones hacia los glúteos. Causada por contracción simultánea de músculos extensores (más potentes que flexores). Signo clásico de intoxicación por estricnina, tétanos, meningitis severa. También puede ocurrir en encefalopatía hipóxica neonatal." },
    { t: "Sugammadex", d: "Ciclodextrina modificada que encapsula específicamente rocuronio y vecuronio (bloqueantes neuromusculares no despolarizantes). Primer antídoto de encapsulamiento molecular aprobado en medicina. Revertir parálisis quirúrgica completa en 2-3 minutos. Disponible en todos los quirófanos modernos como parte del estándar de seguridad en anestesia." },
    { t: "Parálisis flácida vs espástica", d: "Flácida: músculo sin tono, sin reflejos (lesión motoneurona inferior o bloqueo nAChR — curare, coniina). Espástica: músculo rígido con reflejos aumentados (lesión motoneurona superior — ictus, esclerosis múltiple). Los venenos botánicos paralizantes producen preferentemente parálisis flácida. Excepción: estricnina → hipertonía/tetania (ni flácida ni espástica sino hiperexcitable)." },
  ];

  const filtered = terminos.filter(t =>
    t.t.toLowerCase().includes(query.toLowerCase()) ||
    t.d.toLowerCase().includes(query.toLowerCase())
  );

  return (
    <div>
      <InfoBoxX c={c}>
        Glosario de toxicología botánica — términos técnicos, mecanismos de acción, familias químicas y conceptos clave para entender las plantas tóxicas documentadas en esta guía.
      </InfoBoxX>

      <input type="text" placeholder="🔍 Buscar término..." value={query} onChange={(e) => setQuery(e.target.value)} style={{
        width: "100%", padding: "10px 14px", fontSize: "13px",
        background: c.bg2, color: c.textBright, border: `1px solid ${c.border1}`,
        borderRadius: "8px", marginBottom: "12px", fontFamily: "inherit", outline: "none",
      }} />
      <div style={{ fontSize: "11px", color: c.accent2, marginBottom: "12px" }}>
        {filtered.length}/{terminos.length} términos {query && `· "${query}"`}
      </div>

      {filtered.map((term, i) => (
        <div key={i} style={{ background: c.bg2, border: `1px solid ${c.border1}`, borderRadius: "10px", padding: "14px", marginBottom: "10px" }}>
          <div style={{ fontSize: "13px", fontWeight: "bold", color: c.accent1, marginBottom: "6px" }}>{term.t}</div>
          <div style={{ fontSize: "12px", color: c.accent3, lineHeight: "1.6" }}>{term.d}</div>
        </div>
      ))}
    </div>
  );
}
