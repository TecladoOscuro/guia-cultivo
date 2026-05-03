// AMANITA MUSCARIA — forrajeo + preparación
// NO se cultiva (micorriza con árboles). Solo se recoge en bosque + procesa.
// IMPORTANTE: muscimol activo, NO psilocibina. Diferente a Psilocybe.

function INTRO_AMANITA() {
  const c = AMANITA_COLORS;
  return (
    <div>
      <InfoBoxX c={c}>
        <strong>Amanita muscaria</strong> — el hongo rojo con motas blancas de los cuentos. Activos: <GlossaryLink term="Muscimol">muscimol</GlossaryLink> + <GlossaryLink term="Ácido iboténico">ácido iboténico</GlossaryLink>. Efectos disociativos/oníricos, MUY DIFERENTES a Psilocybe (no es serotonérgico, es GABAérgico). Conocido por chamanes siberianos durante miles de años.
      </InfoBoxX>

      <SectionTitleX c={c}>POR QUÉ ESTA SECCIÓN ES DIFERENTE</SectionTitleX>
      <InfoBoxX c={c}>
        Amanita muscaria NO se cultiva — vive en simbiosis con raíces de árboles (<GlossaryLink term="Micorriza">micorriza</GlossaryLink> con abedules, pinos, abetos). Imposible reproducir esa relación en casa. La única forma de conseguirlo es <GlossaryLink term="Forrajeo">forrajeo</GlossaryLink> — recogerlo en bosque otoño. Esta guía cubre identificación, recolección, secado, <GlossaryLink term="Decarboxilación / Decarbox">decarboxilación</GlossaryLink> y consumo seguro.
      </InfoBoxX>

      <SectionTitleX c={c}>EFECTOS — QUÉ ESPERAR</SectionTitleX>
      <InfoBoxX c={c}>
        Comienzo: 1-2h tras consumo (lento, paciencia).<br/>
        Duración: 6-10h (largo).<br/>
        Sensaciones: relajación profunda, euforia ligera, distorsión del tamaño (macropsia/micropsia — "Alicia en el país de las maravillas"), sueños vívidos en duermevela, posibles náuseas las primeras horas.<br/>
        <br/>
        NO es como Psilocybe. NO da "viajes" psicodélicos visuales típicos. Más bien estado disociativo/onírico, "estar entre dos mundos".
      </InfoBoxX>

      <WarningBoxX c={c}>
        ⚠️ <strong>RIESGOS REALES:</strong><br/>
        • IDENTIFICACIÓN ERRÓNEA = MUERTE. Hay otras Amanitas mortales (Amanita phalloides — Death Cap). Si no estás 100% seguro, NO comas.<br/>
        • Sin decarboxilación: ácido iboténico causa malestar GI severo (vómitos, diarrea) y experiencia confusa.<br/>
        • Dosis variable: cada hongo tiene cantidad diferente de activos (factor 10x según condiciones).<br/>
        • NO conducir, NO mezclar con alcohol/depresores.
      </WarningBoxX>

      <SectionTitleX c={c}>LEGALIDAD</SectionTitleX>
      <InfoBoxX c={c}>
        En España: 100% legal recolectar, poseer, consumir Amanita muscaria. NO está en listas de sustancias controladas. La psilocibina sí, pero el muscimol no. Curiosamente más legal que las otras Amanitas peligrosas.
      </InfoBoxX>
    </div>
  );
}

function COMPRA_AMANITA() {
  const c = AMANITA_COLORS;
  const items = [
    { item: "🧺 Cesta de mimbre", precio: "10-25€", donde: "Tienda física", nota: "Permite que las esporas se dispersen mientras caminas (siembra el bosque). Bolsa plástico = setas se aplastan + sin esporulación. En cualquier ferretería rural o tiendas de productos del campo.", prioridad: "ESENCIAL", tipo: "Equipo" },
    { item: "🔪 Cuchillo plegable afilado", precio: "10-25€", donde: "Tienda física", nota: "Para cortar a nivel del suelo sin arrancar el micelio. Hoja 5-8cm. Marcas: Opinel #8 (clásico, ~15€), Victorinox. Mantener afilado.", prioridad: "ESENCIAL", tipo: "Equipo" },
    { item: "🪥 Cepillo pequeño de cerdas suaves", precio: "3-8€", donde: "Tienda física", nota: "Para limpiar tierra del pie ANTES de meter en cesta. Reduce contaminación del cesto. Cualquier cepillo de pelo viejo sirve.", prioridad: "ESENCIAL", tipo: "Equipo" },
    { item: "📚 Guía micológica regional", precio: "15-30€", donde: "Tienda física", nota: "Imprescindible primera vez. Recomendados: 'Setas de la Península Ibérica' (Pascual García Rollán), 'Setas y Hongos' (Régis Courtecuisse). En librerías o webs como Casa del Libro.", prioridad: "ESENCIAL", tipo: "Consumible" },
    { item: "📱 App identificación setas", precio: "Gratis-10€", donde: "Internet", nota: "Picture Mushroom (gratuita), Mushroom Identifier, iNaturalist. AUXILIAR — nunca como única fuente. Doble check con experto siempre primera vez.", prioridad: "IMPORTANTE", tipo: "Consumible" },
    { item: "📷 Cámara o móvil", precio: "0€", donde: "Tienes ya", nota: "Foto de cada espécimen ANTES de cortar: vista superior, vista inferior (láminas), corte longitudinal, base con bulbo, hábitat alrededor. Documentación crítica para verificación.", prioridad: "ESENCIAL", tipo: "Equipo" },
    { item: "🗺️ GPS / app navegación", precio: "Gratis", donde: "Tienes ya", nota: "Bosques de coníferas se ven todos iguales. Marca tu coche o sendero al entrar. Apps gratuitas: Maps.me, OsmAnd, Google Maps offline.", prioridad: "ESENCIAL", tipo: "Consumible" },
    { item: "👥 Sociedad micológica local", precio: "20-50€/año cuota", donde: "Internet (busca por provincia)", nota: "Casi todas las provincias tienen una. Salidas guiadas, identificación gratuita primera vez, cursos. La forma MÁS SEGURA de aprender. Buscar 'sociedad micológica [tu provincia]'.", prioridad: "IMPORTANTE", tipo: "Consumible" },
    { item: "🥾 Botas + chubasquero", precio: "30-80€", donde: "Tienda física", nota: "Para forrajeo en otoño tras lluvia. Bosque húmedo + frío = imprescindibles. Cualquier tienda de montaña.", prioridad: "ESENCIAL", tipo: "Equipo" },
    { item: "🍃 Bandeja con rejilla para secado", precio: "5-15€", donde: "Tienda física", nota: "Para secar las setas en casa. Cualquier rejilla de cocina sobre bandeja sirve. Permite circular aire por debajo.", prioridad: "ESENCIAL", tipo: "Equipo" },
    { item: "🫙 Frascos vidrio oscuro hermético (2-3 uds)", precio: "10-20€", donde: "Tienda física", nota: "Para conservar Amanita seca. Tamaño 250-500ml. Oscuro = protege de luz UV.", prioridad: "ESENCIAL", tipo: "Equipo" },
    { item: "🌿 Sílica gel desecante (sobrecitos)", precio: "5-10€", donde: "Internet", nota: "Para meter dentro de los frascos. Mantiene seco + alarga vida útil. Sobrecitos pequeños o gel granular para reutilizar.", prioridad: "IMPORTANTE", tipo: "Consumible" },
    { item: "🍋 Limones / vinagre blanco", precio: "2-5€", donde: "Tienda física", nota: "Para acidificar el agua durante preparación de té (acelera decarboxilación iboténico → muscimol).", prioridad: "ESENCIAL", tipo: "Consumible" },
    { item: "🔥 Mechero o cocina", precio: "0€", donde: "Tienes ya", nota: "Para cocer el té de Amanita. 30-45 min hervor suave.", prioridad: "ESENCIAL", tipo: "Equipo" },
    { item: "⚖️ Báscula digital de precisión", precio: "10-20€", donde: "Internet", nota: "CRÍTICA para dosificación. Precisión ±0.1g. Cualquier báscula digital de cocina con precisión decimal.", prioridad: "ESENCIAL", tipo: "Equipo" },
  ];
  const [filterPrio, setFilterPrio] = React.useState([]);
  const [filterTipo, setFilterTipo] = React.useState([]);
  const togglePrio = (p) => setFilterPrio(s => s.includes(p) ? s.filter(x => x !== p) : [...s, p]);
  const toggleTipo = (t) => setFilterTipo(s => s.includes(t) ? s.filter(x => x !== t) : [...s, t]);
  const filtered = items.filter(i =>
    (filterPrio.length === 0 || filterPrio.includes(i.prioridad)) &&
    (filterTipo.length === 0 || filterTipo.includes(i.tipo))
  );
  const prioColor = { "ESENCIAL": "#c25b6e", "IMPORTANTE": "#dc8e9c", "ÚTIL": "#e7adb7" };
  const tipoColor = { "Equipo": "#783545", "Consumible": "#9b4555" };

  return (
    <div>
      <InfoBoxX c={c}>
        Equipo para forrajeo + procesado + conservación de Amanita muscaria. Inversión total: 100-200€ (mayor parte reutilizable años). Lo crítico: cesta de mimbre + cuchillo + guía + báscula precisión.
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

      <SectionTitleX c={c}>EQUIPO AMANITA ({filtered.length}/{items.length})</SectionTitleX>
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

      <InfoBoxX c={c}>
        💡 <strong>¿Comprar Amanita muscaria seca?</strong> Sí, es legal en España. Vendedores etnobotánicos UE: 15-40€ por 50-100g. Si NO quieres forrajear: opción válida. Verificar reputación del vendedor (origen + secado correctos importan).
      </InfoBoxX>
    </div>
  );
}

function IDENTIFICACION_AMANITA() {
  const c = AMANITA_COLORS;
  return (
    <div>
      <InfoBoxX c={c}>
        Identificación correcta es CRÍTICA. Confundirla con otras Amanitas puede ser MORTAL. Esta guía te ayuda a confirmar al 100%, pero la primera vez consigue la confirmación de un experto en setas (sociedad micológica local, foro online con fotos).
      </InfoBoxX>

      <SectionTitleX c={c}>CARACTERÍSTICAS DE A. MUSCARIA</SectionTitleX>
      <div style={{ display: "grid", gap: "8px", marginBottom: "20px" }}>
        {[
          { c: "🔴 Sombrero rojo brillante", det: "10-25cm de diámetro. Color rojo intenso (a veces naranja-rojo en var. formosa). De joven es esférico, abre con la edad." },
          { c: "⚪ Verrugas blancas", det: "Sobre el sombrero, motas/verrugas blancas (restos del velo universal). Pueden caer con lluvia. SI NO HAY MOTAS pero es rojo, puede ser una Amanita lavada por la lluvia O una especie distinta." },
          { c: "⚪ Láminas blancas libres", det: "Bajo el sombrero, láminas BLANCAS, no unidas al pie. Crítico verificarlo." },
          { c: "🦴 Pie blanco con anillo", det: "Pie blanco grueso. Anillo blanco con flecos colgando. Base bulbosa con varios anillos concéntricos (escamas)." },
          { c: "🌳 Bajo abedul / pino / abeto", det: "Crece SIEMPRE en simbiosis con estos árboles. Si encuentras 'amanita roja' bajo otro árbol = NO es muscaria, es OTRA cosa." },
          { c: "🍂 Otoño tras lluvia", det: "Septiembre-noviembre típico. Tras lluvias seguidas. En cualquier momento del año puede salir tras lluvia + temperatura suave." },
        ].map((item, i) => (
          <div key={i} style={{ background: c.bg2, border: `1px solid ${c.border1}`, borderRadius: "8px", padding: "10px" }}>
            <div style={{ fontSize: "12px", fontWeight: "bold", color: c.textBright, marginBottom: "3px" }}>{item.c}</div>
            <div style={{ fontSize: "11px", color: c.accent3, lineHeight: "1.5" }}>{item.det}</div>
          </div>
        ))}
      </div>

      <SectionTitleX c={c}>⚠️ AMANITAS MORTALES — NO CONFUNDIR</SectionTitleX>
      <ErrorCardX c={c}
        error="Amanita phalloides (Death Cap)"
        consecuencia="MORTAL. Veneno (amatoxinas) destruye el hígado. Sin tratamiento médico inmediato = muerte segura en 5-10 días."
        fix="Death Cap es VERDE-OLIVA o blanca AMARILLENTA, NUNCA roja. Si es roja con motas, no es phalloides. Pero VERIFICAR todas las características antes de consumir."
      />
      <ErrorCardX c={c}
        error="Amanita pantherina (Panther Cap)"
        consecuencia="Tiene MÁS muscimol que muscaria pero también más alcaloides tóxicos. Causa intoxicaciones graves. Algunos la consumen pero requiere experiencia avanzada."
        fix="Pantherina tiene sombrero MARRÓN (no rojo) con motas blancas. Si dudas entre las dos: NO comas. Empieza solo con muscaria roja."
      />
      <ErrorCardX c={c}
        error="Amanita virosa (Destroying Angel)"
        consecuencia="MORTAL como phalloides. Misma destrucción hepática."
        fix="Virosa es 100% blanca, pie alto y delgado. Si es blanca = NO comas."
      />

      <SectionTitleX c={c}>VERIFICACIÓN ANTES DE CONSUMIR</SectionTitleX>
      <StepX c={c} num={1} text="Saca varias fotos: vista superior, vista inferior (láminas), corte longitudinal, base con bulbo." />
      <StepX c={c} num={2} text="Sube a foro especializado: r/mycology (inglés), grupos Facebook de micología España, app 'Picture Mushroom' (auxiliar, no fiable como única fuente)." />
      <StepX c={c} num={3} text="PRIMERA VEZ: contacta sociedad micológica local. Casi todas las provincias en España tienen una. Te confirman gratis." />
      <StepX c={c} num={4} text="SI HAY DUDA: NO COMAS. Toxicología por Amanita = ingreso UCI mínimo. No vale la pena." warning />
    </div>
  );
}

function RECOLECCION_AMANITA() {
  const c = AMANITA_COLORS;
  return (
    <div>
      <InfoBoxX c={c}>
        Forrajeo en bosque. Otoño tras lluvia. Equipo mínimo. Ética: cosecha sostenible.
      </InfoBoxX>

      <SectionTitleX c={c}>CUÁNDO Y DÓNDE</SectionTitleX>
      <StepX c={c} num={1} text="Temporada: SEPTIEMBRE - NOVIEMBRE. En zonas frías puede aparecer hasta diciembre. En España: ideal sierra de la Cordillera Cantábrica, Pirineos, Sistema Central." />
      <StepX c={c} num={2} text="Tras 3-5 días de lluvia + temperaturas 10-18°C = condiciones óptimas. Visita 2-4 días después de lluvia significativa." />
      <StepX c={c} num={3} text="Bosques con: ABEDULES, pinos silvestres, abetos, hayedos. NO en encinares puros (necesita árboles micorrícicos compatibles)." />
      <StepX c={c} num={4} text="Espacios abiertos del bosque, claros, bordes de caminos forestales. Crece en grupos a veces. Puede aparecer años seguidos en mismo sitio." />

      <SectionTitleX c={c}>EQUIPO DE FORRAJEO</SectionTitleX>
      <div style={{ display: "grid", gap: "8px", marginBottom: "20px" }}>
        {[
          { item: "🧺 Cesta de mimbre", uso: "Permite que las esporas se dispersen mientras caminas (ayuda al ecosistema). Bolsa plástico = setas se aplastan y deterioran." },
          { item: "🔪 Cuchillo pequeño afilado", uso: "Para cortar a nivel del suelo sin arrancar el micelio. NUNCA arrancar con la mano." },
          { item: "🪥 Cepillo pequeño", uso: "Limpiar tierra del pie antes de meter en cesta. Reduce contaminación del cesto." },
          { item: "📱 GPS o brújula", uso: "Bosques de coníferas se ven todos iguales. Marca tu coche o sendero al entrar." },
          { item: "📷 Cámara/móvil", uso: "Foto de cada espécimen ANTES de cortar — documenta hábitat, vista superior, etc. Útil para verificación post-recolección." },
        ].map((item, i) => (
          <div key={i} style={{ background: c.bg2, border: `1px solid ${c.border1}`, borderRadius: "8px", padding: "10px" }}>
            <div style={{ fontSize: "12px", fontWeight: "bold", color: c.textBright, marginBottom: "3px" }}>{item.item}</div>
            <div style={{ fontSize: "11px", color: c.accent3, lineHeight: "1.5" }}>{item.uso}</div>
          </div>
        ))}
      </div>

      <SectionTitleX c={c}>PROTOCOLO DE RECOLECCIÓN</SectionTitleX>
      <StepX c={c} num={1} text="Cuando encuentres uno: PARA. Verifica TODAS las características de identificación antes de cortar. Foto." />
      <StepX c={c} num={2} text="Corta a nivel del suelo con cuchillo. NO arrancar — daña el micelio subterráneo." why="El micelio puede dar más setas la próxima temporada si no lo destruyes." />
      <StepX c={c} num={3} text="Limpia tierra del pie con cepillo. Coloca en cesta con láminas hacia abajo (las esporas caen, se siembra el bosque)." />
      <StepX c={c} num={4} text="Recolecta con MODERACIÓN: deja siempre 50% de las setas que ves intactas. Solo coge las que estás seguro de procesar." />
      <StepX c={c} num={5} text="No mezcles con otras setas en el mismo cesto si no estás 100% seguro de identificación." />
      <StepX c={c} num={6} text="VOLVER A IDENTIFICAR en casa con luz adecuada antes de procesar. Foto enviada a experto si hay duda." />

      <SectionTitleX c={c}>ÉTICA Y LEGISLACIÓN</SectionTitleX>
      <InfoBoxX c={c}>
        Algunas comunidades autónomas requieren permiso de recolección de setas en montes públicos (Castilla y León, Cataluña). Verifica antes de ir. Recolección personal "razonable" (1-2kg) suele tolerarse sin permiso. Recolección comercial = sí o sí permiso.<br/><br/>
        Ética micológica: NO arrasar, NO recoger ejemplares juveniles (no han esporulado), NO destruir madera con hongos, dejar sitio limpio.
      </InfoBoxX>
    </div>
  );
}

function SECADO_AMANITA() {
  const c = AMANITA_COLORS;
  return (
    <div>
      <InfoBoxX c={c}>
        El secado en Amanita NO es solo para conservar — es CRÍTICO PSICOACTIVAMENTE. El secado prolongado convierte ácido iboténico (tóxico, causa náuseas) en muscimol (psicoactivo deseado). Esta conversión = "decarboxilación".
      </InfoBoxX>

      <SectionTitleX c={c}>POR QUÉ SECAR ES IMPRESCINDIBLE</SectionTitleX>
      <InfoBoxX c={c}>
        🍄 <strong>Setas frescas:</strong> 80% ácido iboténico (causa malestar) + 20% muscimol (psicoactivo). Comer fresco = vómitos + experiencia confusa.<br/>
        🌬️ <strong>Setas secas (decarbox):</strong> 80% muscimol + 20% iboténico. Mucho más limpio y predecible.<br/>
        <br/>
        Tradicional siberiano: secado 2-4 semanas + tratamiento con calor suave (chamán fumando junto a las setas).
      </InfoBoxX>

      <SectionTitleX c={c}>MÉTODO 1 — SECADO LENTO (TRADICIONAL, MEJOR)</SectionTitleX>
      <StepX c={c} num={1} text="Limpiar las setas: eliminar tierra restante con pincel SECO. NO LAVAR con agua (las pudre)." />
      <StepX c={c} num={2} text="Cortar en rebanadas de 5-8mm de grosor. Mantener separadas sombrero y pie si quieres dosificar exacto (sombrero tiene más activos)." />
      <StepX c={c} num={3} text="Extender en bandeja con rejilla en sitio oscuro y ventilado. NO sol directo (degrada activos)." />
      <StepX c={c} num={4} text="Temperatura ideal: 20-30°C. Humedad ambiente baja-media." />
      <StepX c={c} num={5} text="Tiempo: 5-15 días según humedad ambiente. Listo cuando quebradizo (cracker dry — se rompe limpio al doblarse)." why="Mientras se secan, ocurre la decarboxilación natural. Más tiempo seco antes de consumir = mejor conversión iboténico→muscimol." />

      <SectionTitleX c={c}>MÉTODO 2 — DECARBOXILACIÓN ACELERADA (HORNO)</SectionTitleX>
      <StepX c={c} num={1} text="Secar primero al aire 5-7 días (paso 1)." />
      <StepX c={c} num={2} text="Una vez SECAS, meter en horno a 70-80°C durante 90-120 minutos." why="Calor suave acelera la decarboxilación. NO superar 90°C — destruye muscimol también." warning />
      <StepX c={c} num={3} text="Dejar enfriar. Conservar." />

      <SectionTitleX c={c}>MÉTODO 3 — DECARBOXILACIÓN EN AGUA (ANTES DE CONSUMO)</SectionTitleX>
      <StepX c={c} num={1} text="Si vas a hacer té: añade ácido (limón, vinagre) al agua mientras hierve las setas — el medio ácido + calor = decarboxilación al momento. 1 cucharada de zumo de limón por taza de agua." />

      <SectionTitleX c={c}>CONSERVACIÓN</SectionTitleX>
      <StepX c={c} num={1} text="Una vez completamente secas: frasco hermético opaco." />
      <StepX c={c} num={2} text="Lugar fresco y oscuro. Sílica gel ayuda a mantener seco." />
      <StepX c={c} num={3} text="Duran 2-3 años manteniendo potencia. Después: degradación gradual de activos." />
    </div>
  );
}

function PREPARACION_AMANITA() {
  const c = AMANITA_COLORS;
  return (
    <div>
      <InfoBoxX c={c}>
        Cómo preparar las Amanitas secas para consumo. Té es lo más común y suave. Comer directo es posible pero más fuerte y con más náuseas.
      </InfoBoxX>

      <SectionTitleX c={c}>MÉTODO 1 — TÉ (RECOMENDADO PARA EMPEZAR)</SectionTitleX>
      <StepX c={c} num={1} text="Pesar dosis (ver fase 'Seguridad'). Empieza BAJA — 1-3g de seta seca para primera vez." />
      <StepX c={c} num={2} text="Triturar las setas secas con mortero o molinillo. Polvo grueso." />
      <StepX c={c} num={3} text="En cazo: 300ml de agua + zumo de medio limón (acidifica para decarbox). Llevar a hervor suave." />
      <StepX c={c} num={4} text="Añadir el polvo de seta. Hervir suave 30-45 minutos." why="Tiempo + calor + ácido = conversión iboténico → muscimol durante la cocción." />
      <StepX c={c} num={5} text="Colar con tela fina o filtro café. Beber el té (sabor amargo, peludo). Puedes añadir miel + jengibre." />
      <StepX c={c} num={6} text="No comer el residuo de hongos colados — ahí queda algo de iboténico que no convertiste." />

      <SectionTitleX c={c}>MÉTODO 2 — POLVO DIRECTO EN CÁPSULAS</SectionTitleX>
      <StepX c={c} num={1} text="Setas BIEN decarboxiladas (horno previamente). Triturar a polvo fino." />
      <StepX c={c} num={2} text="Rellenar cápsulas vacías (00 size). Cada cápsula contiene ~0.5g." />
      <StepX c={c} num={3} text="Tragar cápsulas con agua. Más rápido absorción que té." />
      <StepX c={c} num={4} text="Riesgo: si no decarboxilaste bien previamente = vómitos." />

      <SectionTitleX c={c}>MÉTODO 3 — TINTURA (CONSERVACIÓN A LARGO PLAZO)</SectionTitleX>
      <StepX c={c} num={1} text="50g de Amanita seca y triturada en 250ml de alcohol 40-50% (vodka). Cerrar frasco oscuro." />
      <StepX c={c} num={2} text="Macerar 4-6 semanas, agitando cada día. Filtrar." />
      <StepX c={c} num={3} text="Tintura concentrada. Dosis: 1-3 ml bajo lengua (sublingual, absorción rápida). Sabor MUY fuerte." />
      <StepX c={c} num={4} text="Conservar en frasco oscuro. Dura años." />
    </div>
  );
}

function CONSERVACION_AMANITA() {
  const c = AMANITA_COLORS;
  return (
    <div>
      <InfoBoxX c={c}>
        Setas decarboxiladas y bien secas duran AÑOS. Conservación correcta = mantienes potencia + evitas hongos contaminantes en el frasco. Tres métodos según tiempo de almacenaje.
      </InfoBoxX>

      <SectionTitleX c={c}>MÉTODOS DE CONSERVACIÓN</SectionTitleX>
      <div style={{ display: "grid", gap: "10px", marginBottom: "20px" }}>
        {[
          { tipo: "🫙 Frasco hermético + sílica gel", duracion: "1-2 años", coste: "5€", det: "Frasco vidrio opaco con junta goma + sobrecito de sílica gel dentro. Lugar fresco oscuro. Verificar humedad cada 6 meses (si la sílica cambia color = sustituir)." },
          { tipo: "❄️ Bolsa al vacío + nevera", duracion: "2-3 años", coste: "30€ (máquina)", det: "Selladora al vacío doméstica. Eliminar oxígeno = mucha más durabilidad. Mantener en nevera para temperatura constante baja." },
          { tipo: "🧊 Bolsa al vacío + congelador", duracion: "5+ años", coste: "30€", det: "Combina vacío + frío profundo. La opción más larga conservación. Descongelar a temperatura ambiente sin abrir." },
          { tipo: "🍶 Tintura alcohólica", duracion: "Indefinida (años)", coste: "10€", det: "Setas trituradas en alcohol 40-50% (vodka). Macerar 4-6 semanas. Filtrar. Conservar en frasco oscuro. Dosis: 1-3ml sublingual. NO degrada con el tiempo." },
        ].map((m, i) => (
          <div key={i} style={{ background: c.bg2, border: `1px solid ${c.border1}`, borderRadius: "10px", padding: "12px" }}>
            <div style={{ display: "flex", justifyContent: "space-between", marginBottom: "4px" }}>
              <div style={{ fontSize: "13px", fontWeight: "bold", color: c.textBright }}>{m.tipo}</div>
              <div style={{ fontSize: "11px", color: c.accent1, fontWeight: "bold" }}>{m.duracion}</div>
            </div>
            <div style={{ fontSize: "11px", color: c.accent2, marginBottom: "4px" }}>💰 {m.coste}</div>
            <div style={{ fontSize: "12px", color: c.accent3, lineHeight: "1.5" }}>{m.det}</div>
          </div>
        ))}
      </div>

      <SectionTitleX c={c}>QUÉ EVITA LA POTENCIA</SectionTitleX>
      <ErrorCardX c={c}
        error="Luz directa (especialmente UV)"
        consecuencia="Muscimol e iboténico se degradan con luz. Pérdida progresiva de potencia."
        fix="Frascos opacos o envueltos en papel aluminio. Lugar oscuro siempre."
      />
      <ErrorCardX c={c}
        error="Humedad ambiente alta"
        consecuencia="Setas absorben humedad → moho dentro del frasco → todo el lote inservible y posiblemente tóxico."
        fix="Sílica gel SIEMPRE. Verificar cada 6 meses. Lugar seco (no baño, no cocina activa)."
      />
      <ErrorCardX c={c}
        error="Calor (cerca de radiador, cocina)"
        consecuencia="Acelera degradación de alcaloides. También reactiva enzimas residuales."
        fix="Lugar fresco (10-18°C ideal). Despensa, sótano, nevera."
      />

      <SectionTitleX c={c}>VERIFICACIÓN PERIÓDICA</SectionTitleX>
      <StepX c={c} num={1} text="Cada 3-6 meses: abrir frasco, verificar olor (debe oler a setas secas, NO a moho/podrido)." />
      <StepX c={c} num={2} text="Verificar consistencia: deben estar quebradizas (cracker dry). Si flexibles = humedad entró, secar de nuevo + sílica nueva." />
      <StepX c={c} num={3} text="Verificar color: pueden oscurecer ligeramente con tiempo. Si negro/verde/blanco peludo = MOHO, descartar todo." warning />
      <StepX c={c} num={4} text="Si todo OK: cerrar bien y devolver a su lugar." />
    </div>
  );
}

function HARM_REDUCTION_AMANITA() {
  const c = AMANITA_COLORS;
  return (
    <div>
      <InfoBoxX c={c}>
        Sección crítica. Amanita es legal y "natural" pero NO es inocua. Información de dosis + qué hacer si algo va mal + cuándo NO usarla.
      </InfoBoxX>

      <SectionTitleX c={c}>DOSIFICACIÓN (SETA SECA, BIEN DECARBOXILADA)</SectionTitleX>
      <div style={{ display: "grid", gap: "8px", marginBottom: "20px" }}>
        {[
          { dosis: "💊 Microdosis (sub-perceptual)", peso: "0.5-1g", efecto: "Cambios sutiles en estado de ánimo. Algunos lo usan para ansiedad/sueño." },
          { dosis: "🌱 Dosis baja (test inicial)", peso: "1-3g", efecto: "Relajación notable, ligero estado alterado, algo de macropsia. RECOMENDADO PARA PRIMERA VEZ." },
          { dosis: "🍄 Dosis media", peso: "3-5g", efecto: "Estado disociativo claro, sueños vívidos en duermevela, distorsiones perceptivas. Náuseas posibles primera hora." },
          { dosis: "⚠️ Dosis alta", peso: "5-10g", efecto: "Estado profundo. NO recomendado sin experiencia previa con dosis menores. Náuseas casi seguras. Solo con sitter." },
          { dosis: "🛑 Dosis intensa", peso: "10g+", efecto: "Solo experimentados. Posibles experiencias muy alteradas o desagradables. NO HACER sin supervisión." },
        ].map((d, i) => (
          <div key={i} style={{ background: c.bg2, border: `1px solid ${c.border1}`, borderRadius: "8px", padding: "10px" }}>
            <div style={{ display: "flex", justifyContent: "space-between", marginBottom: "3px" }}>
              <div style={{ fontSize: "12px", fontWeight: "bold", color: c.textBright }}>{d.dosis}</div>
              <div style={{ fontSize: "11px", color: c.accent1, fontWeight: "bold" }}>{d.peso}</div>
            </div>
            <div style={{ fontSize: "11px", color: c.accent3, lineHeight: "1.5" }}>{d.efecto}</div>
          </div>
        ))}
      </div>

      <WarningBoxX c={c}>
        ⚠️ Variabilidad: cada hongo y cada lote tiene CONCENTRACIÓN DIFERENTE de muscimol (puede variar 10x entre setas). Lo que fue dosis baja en un lote puede ser dosis alta en otro. SIEMPRE empezar bajo con cada lote nuevo.
      </WarningBoxX>

      <SectionTitleX c={c}>CONTRAINDICACIONES — NO TOMAR SI...</SectionTitleX>
      <ErrorCardX c={c}
        error="Embarazo o lactancia"
        consecuencia="Sin estudios de seguridad. Asumir riesgo para el bebé."
        fix="No tomar."
      />
      <ErrorCardX c={c}
        error="Toma medicación con depresores SNC (benzos, opioides, antiepilépticos)"
        consecuencia="Muscimol es agonista GABA-A. Sumar con otros depresores GABA = depresión respiratoria, sedación profunda, riesgo cardíaco."
        fix="No mezclar. Espacio mínimo 24h entre Amanita y medicación SNC."
      />
      <ErrorCardX c={c}
        error="Historial psiquiátrico (esquizofrenia, bipolar)"
        consecuencia="Posible activación de episodios psicóticos. La experiencia disociativa puede gatillar problemas."
        fix="Consultar con profesional antes. NO tomar sin evaluación."
      />
      <ErrorCardX c={c}
        error="Bajo efectos de alcohol u otras drogas"
        consecuencia="Combinaciones impredecibles. Riesgo aumentado de eventos adversos."
        fix="Sobrio antes y durante. Esperar 24h+ desde otras sustancias."
      />

      <SectionTitleX c={c}>SET & SETTING</SectionTitleX>
      <StepX c={c} num={1} text="SET (mental): No tomar si estás triste/ansioso/estresado. Esperar momento neutral o positivo." />
      <StepX c={c} num={2} text="SETTING (entorno): Casa, tranquilo, oscuro, cómodo. Tener cama, mantas, agua, baño cerca. Posible cubo cerca por si vómitos." />
      <StepX c={c} num={3} text="SITTER: persona sobria primera vez. Idealmente alguien con experiencia." />
      <StepX c={c} num={4} text="DURACIÓN: bloquea 12-15h. No tienes que estar disponible para nada (trabajo, conducir, hijos)." />
      <StepX c={c} num={5} text="HIDRATACIÓN: agua/jugo a mano. Posible boca seca." />

      <SectionTitleX c={c}>SI ALGO VA MAL</SectionTitleX>
      <InfoBoxX c={c}>
        🤢 <strong>Náuseas/vómitos primera hora:</strong> NORMAL. Significa decarbox no fue completa. Tumbarte de lado, beber agua a sorbitos, esperar.<br/>
        😰 <strong>Ansiedad/pánico:</strong> Cambiar de habitación, música suave, recordar "esto va a pasar en horas". Si no mejora: 911 NO necesario salvo síntomas físicos graves.<br/>
        💔 <strong>Síntomas físicos extremos</strong> (palpitaciones violentas, dificultad respirar, pérdida de consciencia): URGENCIAS YA. Llevar muestra del hongo si posible.<br/>
        ⏰ Llamada anti-tóxicos España: <strong>915 620 420</strong> (24h).
      </InfoBoxX>
    </div>
  );
}

function FAQ_AMANITA() {
  const c = AMANITA_COLORS;
  const [query, setQuery] = React.useState("");
  const faqs = [
    { q: "¿Cuándo es la mejor temporada?", a: "Septiembre a noviembre en España. Pico en octubre tras lluvias seguidas + temperaturas suaves. Apunta los lugares donde encuentres — vuelven año tras año." },
    { q: "¿Por qué no se puede cultivar?", a: "Amanita muscaria es micorrícica — vive en simbiosis OBLIGADA con raíces de árboles (intercambio: el árbol da azúcares, el hongo da minerales del suelo). Reproducir esto en casa = imposible. Forrajeo es la única vía." },
    { q: "¿Pueden venderlas legalmente?", a: "Sí, en España es legal vender Amanita muscaria seca. Algunas tiendas online especializadas en etnobotánica las venden (15-40€ por 50-100g). Verifica reputación del vendedor — origen y secado correctos importan." },
    { q: "¿Diferencia muscaria fresca vs seca?", a: "Frescas: dominan ácido iboténico (tóxico, vómitos). Secas y bien decarbiladas: dominan muscimol (psicoactivo). NUNCA consumir frescas. Secado mínimo 5-10 días." },
    { q: "¿Es adictiva?", a: "No físicamente. No psicológicamente como tal. La experiencia es lo suficientemente intensa/extraña que la mayoría no quiere repetir constantemente." },
    { q: "¿Cuánto tarda en hacer efecto?", a: "Té: 1-2h hasta sentir efecto inicial, pico a las 3-4h, declive 6-10h total. Es LENTO comparado con otras sustancias. NO tomar más antes de que pase el efecto inicial." },
    { q: "¿Se puede comer entera (cocinada)?", a: "Tradicionalmente algunas culturas la cocinan como alimento (parboiling 15min, cambiar agua, hervir otros 15min — elimina iboténico y muscimol). Resultado: ya no es psicoactiva, es solo seta comestible. Para mantener psicoactividad NO hervir tan agresivo — usar el método de té descrito." },
    { q: "¿Qué hacer con setas que recogí pero parecen dudosas?", a: "TIRARLAS. NO consumir. Una experiencia mala = nunca más. Una intoxicación grave = hospital. La duda es razón suficiente para descartar." },
    { q: "¿Por qué Papá Noel se asocia con Amanita?", a: "Teoría popular (no confirmada científicamente): chamanes siberianos consumían Amanita muscaria, vestían rojo y blanco (colores de la seta), entraban por la chimenea (única entrada cuando había nieve). Folklore evolucionó al Santa Claus moderno. Curiosidad cultural." },
    { q: "¿Es legal en otros países UE?", a: "Mayoría UE: legal. Excepciones: Holanda regula como 'planta tóxica', Reino Unido ilegal desde 2005, Australia ilegal. España: 100% legal." },
    { q: "¿Qué pasa si la cocino bien (parboiled)?", a: "Hervir 15min en agua + descartar agua + hervir otros 15min = elimina iboténico y muscimol. Resultado: seta comestible NO psicoactiva (cocina tradicional rusa/báltica)." },
    { q: "¿Microdosis es segura?", a: "0.5-1g de seta seca 2-3 veces/semana es protocolo común. Reportes anecdóticos: mejora ánimo, reducción ansiedad, mejor sueño. Investigación científica limitada — evidencia mayormente personal." },
  ];

  const filtered = faqs.filter(f =>
    f.q.toLowerCase().includes(query.toLowerCase()) ||
    f.a.toLowerCase().includes(query.toLowerCase())
  );

  return (
    <div>
      <InfoBoxX c={c}>
        Preguntas comunes sobre Amanita muscaria. Recursos útiles: Erowid (sección Amanita), foros r/Amanitamuscaria, libros de Andy Letcher (Shroom).
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
