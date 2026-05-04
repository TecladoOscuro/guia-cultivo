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
