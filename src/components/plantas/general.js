// PLANTAS PSICOACTIVAS SUAVES — todas legales en España
// Cada planta = phase. Cultivo + uso + harm reduction.

function INTRO_PLANTAS() {
  const c = PLANTAS_COLORS;
  return (
    <div>
      <InfoBoxX c={c}>
        Plantas legales con efectos psicoactivos suaves. Todas se pueden cultivar en casa o conseguir en herboristería sin problemas. Efectos van de relajación profunda a cambios sutiles en percepción/sueños. NO sustituyen drogas controladas — son experiencias diferentes, más sutiles, más botánicas.
      </InfoBoxX>

      <SectionTitleX c={c}>QUÉ INCLUYE ESTA SECCIÓN</SectionTitleX>
      <div style={{ display: "grid", gap: "10px", marginBottom: "20px" }}>
        {[
          { nombre: "🍃 Salvia divinorum", tipo: "Visionario INTENSO (5-15 min)", legal: "Legal cultivo + posesión (España)", dif: "Difícil cultivo (humedad alta)" },
          { nombre: "🌿 Damiana (Turnera diffusa)", tipo: "Eufórico ligero, afrodisíaco", legal: "100% legal", dif: "Fácil cultivo interior cálido" },
          { nombre: "🪷 Blue Lotus (Nymphaea caerulea)", tipo: "Sedante onírico, leve euforia", legal: "100% legal", dif: "Acuático, requiere estanque/maceta agua" },
          { nombre: "🥬 Lechuga silvestre (Lactuca virosa)", tipo: "Analgésico suave, sedante", legal: "100% legal", dif: "Muy fácil exterior" },
          { nombre: "💭 Calea zacatechichi", tipo: "Sueños vívidos, oneirogenic", legal: "100% legal (excepto Polonia)", dif: "Fácil clima cálido" },
        ].map((p, i) => (
          <div key={i} style={{ background: c.bg2, border: `1px solid ${c.border1}`, borderRadius: "10px", padding: "12px" }}>
            <div style={{ fontSize: "14px", fontWeight: "bold", color: c.textBright, marginBottom: "4px" }}>{p.nombre}</div>
            <div style={{ fontSize: "11px", color: c.accent2, marginBottom: "3px" }}>💊 {p.tipo}</div>
            <div style={{ fontSize: "11px", color: c.accent2, marginBottom: "3px" }}>⚖️ {p.legal}</div>
            <div style={{ fontSize: "11px", color: c.accent2 }}>📈 {p.dif}</div>
          </div>
        ))}
      </div>

      <WarningBoxX c={c}>
        ⚠️ <strong>Harm reduction general:</strong> Aunque todas son legales y "suaves", siguen siendo psicoactivas. NO mezclar con alcohol u otras sustancias sin investigación previa. Empezar con dosis BAJAS para test de tolerancia personal. Algunas (Salvia especialmente) requieren sitter (acompañante sobrio) la primera vez.
      </WarningBoxX>

      <SectionTitleX c={c}>POR QUÉ ESTAS Y NO OTRAS</SectionTitleX>
      <InfoBoxX c={c}>
        Plantas excluidas a propósito:<br/>
        ❌ <strong>Datura / Brugmansia:</strong> legal pero MUY peligroso (deliriante real, causa intoxicaciones graves frecuentes)<br/>
        ❌ <strong>Belladona / Mandrágora:</strong> mismo problema que Datura<br/>
        ❌ <strong>Iboga:</strong> legal cultivar pero ibogaína controlada y riesgo cardíaco<br/>
        ❌ <strong>Khat:</strong> ilegal en EU<br/>
        ❌ <strong>Adormidera:</strong> cultivo legal ornamental, extracción de látex ilegal<br/>
        <br/>
        Las 5 incluidas son: <strong>seguras (en dosis razonables), legales y no adictivas</strong>.
      </InfoBoxX>
    </div>
  );
}

function SALVIA() {
  const c = PLANTAS_COLORS;
  return (
    <div>
      <InfoBoxX c={c}>
        <strong>Salvia divinorum</strong> — planta mexicana con salvinorina A, el psicoactivo natural más potente conocido. Experiencia disociativa intensa de 5-15 min. NO es como cannabis o setas — es completamente distinto, alienante, a veces aterrador. Solo para gente que entiende lo que va a hacer.
      </InfoBoxX>

      <WarningBoxX c={c}>
        ⚠️ <strong>Sobre la experiencia:</strong> Salvia produce experiencia DISOCIATIVA — sensación de salir del cuerpo, geometría imposible, "convertirse en objeto", risa incontrolable o pánico. NO es recreativo en sentido fiestero. NO conducir, no estar de pie, SIEMPRE con sitter sobrio. Algunas personas tienen mal viaje. Investigar Erowid antes.
      </WarningBoxX>

      <SectionTitleX c={c}>CULTIVO</SectionTitleX>
      <StepX c={c} num={1} text="Comprar esqueje (semillas casi imposibles): vendedores online europeos, 15-30€ por esqueje enraizado. Variedades: Bunk, Hofmann, Wasson — diferencias mínimas." />
      <StepX c={c} num={2} text="Sustrato: tierra de jardín + perlita + turba (1:1:1). Maceta drenada. NO usa cactus (necesita más humedad)." />
      <StepX c={c} num={3} text="Luz: indirecta. Ventana orientada norte/este. Luz directa la quema." why="En su hábitat natural (Oaxaca) crece bajo sombra de árboles altos. Luz directa = hojas amarillas y caídas." />
      <StepX c={c} num={4} text="Humedad: 60-80%. Esto es lo más difícil. Pulverizar 2-3x/día o usar humidificador. Bandeja con guijarros + agua bajo la maceta ayuda." />
      <StepX c={c} num={5} text="Temperatura: 18-26°C constante. Sensible al frío (<15°C la frena), al calor (>30°C la marchita)." />
      <StepX c={c} num={6} text="Riego: cuando la superficie del sustrato esté ligeramente seca. Salvia bebe MUCHO comparada con otras plantas." />

      <SectionTitleX c={c}>COSECHA Y PREPARACIÓN</SectionTitleX>
      <StepX c={c} num={1} text="Cortar hojas grandes y maduras (10cm+) con tijeras esterilizadas. La planta sigue produciendo más hojas." />
      <StepX c={c} num={2} text="Secar hojas en sitio oscuro y ventilado. 5-10 días hasta que estén crujientes." why="Luz degrada salvinorina. Calor también — NO usar horno." />
      <StepX c={c} num={3} text="Conservar en frasco hermético opaco. Dura años manteniendo potencia." />

      <SectionTitleX c={c}>USO TRADICIONAL — QUID</SectionTitleX>
      <InfoBoxX c={c}>
        Método tradicional Mazateco: masticar hojas FRESCAS (5-15 hojas) y mantenerlas en la boca 30 min sin tragar (la salvinorina se absorbe por la mucosa oral). Experiencia más suave y larga (45-60 min) que fumar.
      </InfoBoxX>

      <SectionTitleX c={c}>USO MODERNO — INFUSIÓN</SectionTitleX>
      <InfoBoxX c={c}>
        Hojas secas en infusión NO funciona bien — la salvinorina se destruye con el calor del agua. Mascar hojas secas tampoco — duras y poco efectivas. Para hojas secas, opción tradicional es extracto (consumo concentrado, NO recomendado para principiantes — requiere harm reduction extrema).
      </InfoBoxX>

      <ErrorCardX c={c}
        error="Probar primera vez sin sitter"
        consecuencia="Caídas, golpes, salir corriendo. Personas han hecho cosas peligrosas durante la disociación."
        fix="SIEMPRE con sitter sobrio la primera vez. Sentado en sofá o cama, no de pie. Dosis baja primera vez."
      />
      <ErrorCardX c={c}
        error="Mezclar con alcohol/otras sustancias"
        consecuencia="Salvia ya es disociativa. Mezclar empeora la confusión y aumenta riesgo de pánico."
        fix="Sobrio. Sin nada más en sangre. La salvia sola ya es lo suficientemente intensa."
      />
    </div>
  );
}

function DAMIANA() {
  const c = PLANTAS_COLORS;
  return (
    <div>
      <InfoBoxX c={c}>
        <strong>Damiana (Turnera diffusa)</strong> — arbusto aromático mexicano. Efecto: relajación + ligera euforia + afrodisíaco suave. La planta más "amigable" de esta lista. Sabor agradable, efectos suaves, buena para principiantes en plantas psicoactivas.
      </InfoBoxX>

      <SectionTitleX c={c}>CULTIVO</SectionTitleX>
      <StepX c={c} num={1} text="Semillas o esquejes. Semillas tardan 2-4 semanas en germinar a 20-25°C. Esquejes enraízan en agua en 2-3 semanas." />
      <StepX c={c} num={2} text="Sustrato: bien drenado, tipo suculenta. Tolera tierra pobre." />
      <StepX c={c} num={3} text="Luz: sol directo o semi-sombra. Adapta a ambos." />
      <StepX c={c} num={4} text="Riego: poco. Es planta semi-desértica. Solo cuando el sustrato esté muy seco." />
      <StepX c={c} num={5} text="Temperatura: 18-32°C ideal. Sensible al frío extremo (<5°C). En zona fría: cultivo interior junto a ventana sur." />

      <SectionTitleX c={c}>COSECHA</SectionTitleX>
      <StepX c={c} num={1} text="Cortar ramitas con hojas (5-10cm) en cualquier momento del año. La planta sigue produciendo." />
      <StepX c={c} num={2} text="Secar al aire (sombra ventilada) 5-7 días. Conservar en frasco." />

      <SectionTitleX c={c}>USOS</SectionTitleX>
      <InfoBoxX c={c}>
        🍵 <strong>Infusión:</strong> 2-3g de hojas secas por taza. Hervir 5-10 min. 1-3 tazas al día. Sabor herbal agradable.<br/>
        🚬 <strong>Mezclada con tabaco/cannabis:</strong> 30% damiana en blends. Efecto suaviza y aporta notas dulces.<br/>
        🍷 <strong>Licor:</strong> macerar 50g en 500ml de vodka 2 semanas. Filtrar. Licor afrodisíaco tradicional mexicano.
      </InfoBoxX>

      <SectionTitleX c={c}>EFECTOS</SectionTitleX>
      <InfoBoxX c={c}>
        Comienzo: 15-30 min. Duración: 2-4h. Sensaciones: relajación corporal, ligero "buzz" mental similar a kava o cannabis muy suave, calidez. Reportada como ayuda en ansiedad social. Sin "viaje" — solo bienestar.
      </InfoBoxX>
    </div>
  );
}

function BLUE_LOTUS() {
  const c = PLANTAS_COLORS;
  return (
    <div>
      <InfoBoxX c={c}>
        <strong>Blue Lotus (Nymphaea caerulea)</strong> — flor sagrada del antiguo Egipto. Sedante suave, leve euforia, sueños vívidos. Aspecto hermoso (flor azul). Cultivable solo si tienes estanque o maceta acuática.
      </InfoBoxX>

      <SectionTitleX c={c}>CULTIVO ACUÁTICO</SectionTitleX>
      <StepX c={c} num={1} text="Necesitas: estanque pequeño, barreño grande de plástico (50L+), o pecera GRANDE. Profundidad mínima 30cm." />
      <StepX c={c} num={2} text="Sustrato: tierra arcillosa pesada en una maceta acuática (8-15cm de profundidad de tierra). Encima poner gravilla para que el agua quede limpia." />
      <StepX c={c} num={3} text="Plantar tubérculo o semilla en la maceta de tierra. Cubrir todo con agua hasta 20-30cm sobre la maceta." />
      <StepX c={c} num={4} text="Luz: pleno sol 6h+ al día. Imprescindible para flor." />
      <StepX c={c} num={5} text="Temperatura agua: 22-28°C. Tropical. En España solo crece bien mayo-octubre exterior. En invierno: interior junto a ventana sur cálida o invernadero." />
      <StepX c={c} num={6} text="Fertilizar: pellets para plantas acuáticas cada 6 semanas en temporada activa." />

      <SectionTitleX c={c}>COSECHA</SectionTitleX>
      <StepX c={c} num={1} text="Recolectar las flores cuando se abren (a media mañana). Se abren 2-3 días, se cierran de noche." />
      <StepX c={c} num={2} text="Secar las flores enteras en sitio oscuro y ventilado. 1-2 semanas." />
      <StepX c={c} num={3} text="Conservar enteras o desmenuzadas en frasco hermético." />

      <SectionTitleX c={c}>USOS</SectionTitleX>
      <InfoBoxX c={c}>
        🍵 <strong>Infusión:</strong> 5-10g de flores secas en agua caliente (NO hirviendo, 80°C). Reposo 15 min. 1 taza por sesión.<br/>
        🍷 <strong>Vino macerado (uso egipcio antiguo):</strong> 30g de flores secas en 750ml de vino tinto seco. Macerar 2 semanas. Filtrar. Beber en copas pequeñas.<br/>
        🚬 <strong>Fumada:</strong> mezclada con tabaco, efecto sutil.
      </InfoBoxX>

      <SectionTitleX c={c}>EFECTOS</SectionTitleX>
      <InfoBoxX c={c}>
        Comienzo: 30 min - 1h. Duración: 2-4h. Sensaciones: relajación profunda corporal y mental, sueños vívidos si se toma antes de dormir, ligera euforia. NO es alucinógeno. Comparable a una copa de vino con efecto sedante extra.
      </InfoBoxX>
    </div>
  );
}

function WILD_LETTUCE() {
  const c = PLANTAS_COLORS;
  return (
    <div>
      <InfoBoxX c={c}>
        <strong>Lechuga silvestre (Lactuca virosa)</strong> — pariente de la lechuga común, pero con látex blanco que tiene propiedades analgésicas y sedantes. Conocida como "opio del pobre". NO contiene opiáceos reales — solo es sedante suave.
      </InfoBoxX>

      <SectionTitleX c={c}>CULTIVO — CASI INVASIVA</SectionTitleX>
      <StepX c={c} num={1} text="Semillas: cualquier vendedor de semillas medicinales. 1-3€ por sobre con cientos de semillas." />
      <StepX c={c} num={2} text="Plantar directamente en exterior en marzo-abril o septiembre. Suelo común, no requiere especial." />
      <StepX c={c} num={3} text="Sol directo 4-6h al día. Riego moderado." />
      <StepX c={c} num={4} text="Crece como una lechuga normal pero MÁS — hasta 2m de altura cuando florece. Hojas grandes, tallo grueso lleno de látex." />
      <StepX c={c} num={5} text="Listo para cosechar a los 3-4 meses, justo antes de florecer (concentración máxima de látex)." />

      <SectionTitleX c={c}>EXTRACCIÓN DEL LÁTEX (LACTUCARIO)</SectionTitleX>
      <StepX c={c} num={1} text="Cortar el tallo principal con cuchillo. Sale un líquido blanco lechoso (látex) — eso es lo activo." />
      <StepX c={c} num={2} text="Recoger el látex en cuchara o trapo limpio. Cada planta da 1-3g." />
      <StepX c={c} num={3} text="Hacer cortes superficiales adicionales en el tallo cada 2-3 días — se sigue regenerando látex hasta semanas." />
      <StepX c={c} num={4} text="Secar el látex al aire (oscuro). Se vuelve marrón oscuro y resinoso. Conservar en frasco." />

      <SectionTitleX c={c}>USOS</SectionTitleX>
      <InfoBoxX c={c}>
        🍵 <strong>Infusión de hojas:</strong> 5-10g de hojas secas (sin látex). Efecto suave. Tradicional para insomnio.<br/>
        🚬 <strong>Lactucario fumado:</strong> 0.5-1g del látex seco. Efecto más fuerte, sedante notable.<br/>
        💊 <strong>Cápsulas:</strong> rellenar cápsulas con polvo de hojas o lactucario. 200-400mg.
      </InfoBoxX>

      <SectionTitleX c={c}>EFECTOS</SectionTitleX>
      <InfoBoxX c={c}>
        Comienzo: 30 min - 1h. Duración: 3-6h. Sensaciones: somnolencia, alivio de dolor leve-moderado, relajación muscular. No euforia. Útil para insomnio o dolor de cabeza. NO es adictivo, NO contiene opiáceos.
      </InfoBoxX>
    </div>
  );
}

function CALEA() {
  const c = PLANTAS_COLORS;
  return (
    <div>
      <InfoBoxX c={c}>
        <strong>Calea zacatechichi</strong> — "hierba de los sueños" Maya. Oneirogenic = produce sueños VÍVIDOS, intensos, muchas veces lúcidos. Sabor MUY amargo. Para gente interesada en exploración onírica.
      </InfoBoxX>

      <SectionTitleX c={c}>CULTIVO</SectionTitleX>
      <StepX c={c} num={1} text="Semillas o esquejes. Más fácil esqueje (semillas son delicadas)." />
      <StepX c={c} num={2} text="Sustrato: bien drenado, mezcla universal + perlita." />
      <StepX c={c} num={3} text="Luz: pleno sol o semi-sombra. Adapta bien." />
      <StepX c={c} num={4} text="Riego: regular pero sin encharcar." />
      <StepX c={c} num={5} text="Temperatura: 18-30°C. Sensible al frío (<10°C). Cultivar interior si vives zona fría." />
      <StepX c={c} num={6} text="Crece como arbusto bajo (50cm-1m). Cosecha hojas individuales según necesidad — la planta sigue produciendo." />

      <SectionTitleX c={c}>USO TRADICIONAL — ANTES DE DORMIR</SectionTitleX>
      <StepX c={c} num={1} text="2-5g de hojas secas en infusión. Hervir 10 min. Sabor BRUTALMENTE amargo — añade miel/limón si quieres." />
      <StepX c={c} num={2} text="Beber 30 min antes de irse a la cama." />
      <StepX c={c} num={3} text="Adicional (potencia el efecto): fumar pipa pequeña con hojas secas justo antes de acostarse." />
      <StepX c={c} num={4} text="Tener libreta y bolígrafo en la mesilla — al despertar anotar sueños inmediatamente o se olvidan." />

      <SectionTitleX c={c}>EFECTOS</SectionTitleX>
      <InfoBoxX c={c}>
        Mientras te duermes: NO efecto consciente notable, quizás ligera somnolencia.<br/>
        Durante la noche: sueños MUY vívidos, larga duración, mucha imaginería. Algunas personas reportan sueños lúcidos (consciencia dentro del sueño).<br/>
        Al despertar: recuerdo VÍVIDO de sueños — más detalles que sin Calea. La sensación dura horas.<br/>
        <br/>
        <strong>NO es psicoactivo en estado de vigilia.</strong> Solo afecta al sueño. Lo más cercano a "soñar a propósito".
      </InfoBoxX>

      <SectionTitleX c={c}>HARM REDUCTION</SectionTitleX>
      <ErrorCardX c={c}
        error="Usarla todas las noches"
        consecuencia="Tolerancia se desarrolla rápido. Después de 1-2 semanas, no hace efecto. También puede afectar calidad del sueño profundo."
        fix="Máximo 2-3 veces por semana. Descansos de 1+ semana cada mes. Usar como herramienta, no como rutina."
      />
    </div>
  );
}

function FAQ_PLANTAS() {
  const c = PLANTAS_COLORS;
  const faqs = [
    { q: "¿Cuál es la más segura para empezar?", a: "Damiana. Efecto suave, sabor agradable, fácil cultivo, sin riesgos especiales. Después: Wild lettuce o Calea." },
    { q: "¿Cuál es la más intensa?", a: "Salvia divinorum, sin duda. Es la más potente psicoactivamente de toda la lista — pero también la más exigente en cultivo y la más arriesgada en uso (siempre con sitter)." },
    { q: "¿Puedo mezclar plantas?", a: "Algunas combinaciones son tradicionales: Damiana + Blue Lotus en infusión = sedante + eufórico. Wild lettuce + manzanilla = súper sedante para insomnio. NO mezclar Salvia con nada — su efecto disociativo es ya extremo." },
    { q: "¿Son adictivas?", a: "Ninguna de estas 5 produce dependencia física. Salvia incluso tiene 'sigma-mediated' anti-recompensa — la mayoría de gente NO repite a menudo. Damiana, Calea y Wild lettuce son no-adictivas como manzanilla." },
    { q: "¿Cuándo es mejor evitar?", a: "Embarazo y lactancia: TODAS contraindicadas. Medicación: consultar con médico — algunas pueden interactuar (especialmente Wild lettuce con sedantes y Damiana con antidepresivos). Conducir: nunca tras consumir cualquiera de estas." },
    { q: "¿Cuánto duran los efectos?", a: "Salvia: 5-15 min (intenso). Damiana: 2-4h. Blue Lotus: 2-4h. Wild lettuce: 3-6h. Calea: solo durante el sueño (8h aprox), efecto hipnagógico." },
    { q: "¿Dónde compro semillas/plantas en España?", a: "Online: vendedores especializados en etnobotánica (busca 'semillas etnobotánica España'). Damiana también en herboristerías como hojas secas. Salvia esquejes solo online. Blue Lotus rizomas en tiendas de plantas acuáticas." },
    { q: "¿Estas plantas son legales seguro?", a: "Sí, las 5 son legales en España (y en EU general): cultivo + posesión + uso personal. Calea está prohibida en Polonia (excepción rara). Salvia ha sido prohibida en algunos países (USA, Australia, varios EU) pero NO en España. Verifica si viajas." },
  ];

  return (
    <div>
      <InfoBoxX c={c}>
        Preguntas comunes sobre plantas psicoactivas suaves. Si quieres más info, recursos: Erowid.org (en inglés, biblioteca completa), TripSit, sitio español Ojos de Brujo.
      </InfoBoxX>

      {faqs.map((f, i) => (
        <div key={i} style={{ background: c.bg2, border: `1px solid ${c.border1}`, borderRadius: "10px", padding: "14px", marginBottom: "10px" }}>
          <div style={{ fontSize: "13px", fontWeight: "bold", color: c.textBright, marginBottom: "6px" }}>❓ {f.q}</div>
          <div style={{ fontSize: "12px", color: c.accent3, lineHeight: "1.6" }}>{f.a}</div>
        </div>
      ))}
    </div>
  );
}
