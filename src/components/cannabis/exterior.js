// Cannabis exterior cultivation components

function COMPRA_EXT() {
  const priorityColor = { "ESENCIAL": "#e63946", "IMPORTANTE": "#f4a261", "ÚTIL": "#52b788" };
  const sections = [
    {
      title: "SEMILLAS",
      items: [
        { name: "Semillas feminizadas fotoperiodo (3–5 unidades)", price: "30–80€", priority: "ESENCIAL", detail: "Para exterior en zona mediterránea, el fotoperiodo es la mejor opción — plantas enormes que florecen solas en agosto cuando los días se acortan. Busca variedades resistentes al moho. Marcas fiables: Royal Queen Seeds, FastBuds, Barney's Farm.", duracion: "1 temporada por semilla" },
      ]
    },
    {
      title: "SUSTRATO Y MACETAS",
      items: [
        { name: "BioBizz Light Mix — saco 50L", price: "12–25€", priority: "ESENCIAL", detail: "Para mezclar con la tierra del spot al 50/50 al rellenar el hoyo de plantación. El Light Mix mejora cualquier suelo forestal dándole mejor estructura y nutrientes de arranque sin quemar las raíces.", duracion: "1 temporada" },
        { name: "Maceta biodegradable 11cm (x5)", price: "5–15€", priority: "ESENCIAL", detail: "Para la fase de plántula en casa antes de trasplantar al exterior. Las biodegradables permiten enterrar la maceta entera sin sacar la planta, eliminando el estrés de trasplante. Alternativa gratuita: vasos de yogur con agujeros.", duracion: "1 uso" },
        { name: "Maceta de tela 20–30L (opcional)", price: "10–20€", priority: "ÚTIL", detail: "Solo si el suelo del spot es muy pedregoso o poco profundo. Plantar directamente en suelo con buen hoyo siempre es mejor — las raíces crecen sin límite y la planta puede ser enorme.", duracion: "Reutilizable" },
      ]
    },
    {
      title: "NUTRIENTES",
      items: [
        { name: "BioBizz Bio·Grow — 1L", price: "15–20€", priority: "ESENCIAL", detail: "Fertilizante orgánico para la fase vegetativa (crecimiento). Rico en nitrógeno. Dosis: 2–4ml/L de agua. Empieza en la semana 3 desde que la planta está en el exterior. 1L da para toda una temporada con 3 plantas.", duracion: "1 temporada (3 plantas)" },
        { name: "BioBizz Bio·Bloom — 1L", price: "15–20€", priority: "ESENCIAL", detail: "Fertilizante orgánico para la fase de floración. Rico en fósforo y potasio para desarrollar cogollos. Dosis: 2–4ml/L. Se usa desde que aparecen los primeros pistilos hasta 2 semanas antes de cosechar (lavado de raíces).", duracion: "1 temporada (3 plantas)" },
        { name: "Bacillus thuringiensis (Bt) — 250ml", price: "10–20€", priority: "ESENCIAL", detail: "Bacteria natural que elimina orugas sin dañar la planta ni el ecosistema. El tratamiento preventivo más importante en exterior — en cualquier bosque hay orugas. Busca 'Dipel' o 'Bacillus thuringiensis var. kurstaki'. En growshop o jardinería.", duracion: "1 temporada" },
        { name: "Jabón potásico — 500ml", price: "5–10€", priority: "IMPORTANTE", detail: "Para pulgones y ácaros si aparecen. Producto ecológico y no tóxico. Diluye 5ml/L y aplica al atardecer sobre el envés de las hojas, nunca con sol directo.", duracion: "1 temporada" },
      ]
    },
    {
      title: "CONTROL DE pH",
      items: [
        { name: "pH Down — 500ml", price: "8–15€", priority: "ESENCIAL", detail: "Para bajar el pH del agua del grifo (suele estar en 7–8). Las plantas solo absorben nutrientes entre pH 6.0 y 6.8. Unas pocas gotas por litro son suficientes. 500ml te dura años.", duracion: "Años" },
        { name: "pHmetro digital", price: "15–30€", priority: "ESENCIAL", detail: "Mide el pH del agua antes de cada riego. Sin él cultivas a ciegas. Guárdalo siempre con la punta húmeda en su solución de almacenamiento. Calibra una vez al mes con solución de calibración.", duracion: "Permanente" },
        { name: "Solución de calibración pH 7 — 250ml", price: "5–10€", priority: "IMPORTANTE", detail: "Para calibrar el pHmetro y asegurarte de que mide bien. Sin calibración el aparato pierde precisión con el tiempo.", duracion: "Años" },
      ]
    },
    {
      title: "HERRAMIENTAS DE CULTIVO",
      items: [
        { name: "Pala de jardinería", price: "8–20€", priority: "ESENCIAL", detail: "Para hacer el hoyo de plantación de mínimo 50×50×50cm. El tamaño del hoyo es el factor que más impacta en el rendimiento final — cuanto más grande y con mejor sustrato, más grande la planta.", duracion: "Permanente" },
        { name: "Estacas de bambú (pack) + cuerda suave de jardín", price: "5–10€", priority: "IMPORTANTE", detail: "Para sujetar ramas en floración cuando los cogollos pesan. Clava la estaca a 5cm del tallo, ata con lazo en forma de 8 para que no corte la circulación. Alternativa gratuita: ramas rectas del bosque.", duracion: "Reutilizable" },
        { name: "Spray de 1L vacío", price: "2–5€", priority: "ESENCIAL", detail: "Para aplicar tratamientos foliares (Bt, jabón potásico). Puedes reutilizar cualquier spray vacío de limpieza bien lavado.", duracion: "Permanente" },
        { name: "Guantes de nitrilo (caja)", price: "5–10€", priority: "IMPORTANTE", detail: "Para la cosecha y manicura. La resina de los cogollos es extremadamente pegajosa y difícil de quitar sin disolvente.", duracion: "Varias cosechas" },
      ]
    },
    {
      title: "AGUA Y RIEGO",
      items: [
        { name: "Garrafas o bidón de transporte 20L", price: "5–20€", priority: "ESENCIAL", detail: "Para llevar agua al spot. En julio una planta grande puede necesitar 5–10L al día. Calcula cuánto puedes llevar por visita y con qué frecuencia puedes ir. Es el factor logístico más importante del cultivo exterior.", duracion: "Permanente" },
        { name: "Sistema riego por goteo (opcional)", price: "15–40€", priority: "ÚTIL", detail: "Tubos, goteros y temporizador a pilas conectados a un bidón elevado. Permite espaciar las visitas al spot de días a semanas. En exterior funciona por gravedad — el bidón debe estar 50–80cm por encima de los goteros.", duracion: "Permanente" },
      ]
    },
    {
      title: "COSECHA Y CURADO",
      items: [
        { name: "Tijeras de punta fina (manicura)", price: "10–20€", priority: "ESENCIAL", detail: "Para recortar las hojas pequeñas alrededor de los cogollos en la cosecha. Limpia con alcohol isopropílico cada 15 minutos — la resina las atasca rápido.", duracion: "Permanente" },
        { name: "Botes Mason jar herméticos 1L (x4–6)", price: "15–25€", priority: "ESENCIAL", detail: "Para el curado de los cogollos. Deben ser de cristal hermético. Llénalos al 75%. Mínimo 2 semanas de curado — 4 semanas es notablemente mejor.", duracion: "Permanente" },
        { name: "Higrómetros mini para botes (x2–3)", price: "6–12€", priority: "IMPORTANTE", detail: "Van dentro de los botes durante el curado. La humedad dentro del bote debe estar entre 58–65%. Sin higrómetro el curado es a ciegas.", duracion: "Permanente" },
        { name: "Alcohol isopropílico 99% — 250ml", price: "4–8€", priority: "IMPORTANTE", detail: "Para limpiar las tijeras de manicura de la resina. También para limpiar el pHmetro y cualquier herramienta.", duracion: "Mucho tiempo" },
        { name: "Bolsas herméticas grandes (x5)", price: "3–5€", priority: "ESENCIAL", detail: "Para transportar la cosecha desde el bosque. El olor en cosecha es muy intenso — sin bolsas herméticas es un problema real en el coche.", duracion: "1 cosecha" },
      ]
    },
  ];

  return (
    <div>
      <InfoBox>
        Cultivo exterior en bosque: sin armario, sin electricidad, sin extractor. El sol hace todo el trabajo. Una planta de fotoperiodo bien cuidada puede dar 200–500g — mucho más que cualquier armario doméstico. El coste inicial es mínimo comparado con el interior.
      </InfoBox>
      <div style={{ background: "#1a2a10", border: "1px solid #4a7a20", borderRadius: "10px", padding: "14px", marginBottom: "20px" }}>
        <div style={{ fontSize: "10px", letterSpacing: "2px", color: "#74c69d", marginBottom: "10px" }}>PRESUPUESTO ESTIMADO EXTERIOR</div>
        {[
          { label: "Inversión inicial total", value: "~150–300€", bold: true },
          { label: "Semillas (3–5 unidades)", value: "30–80€" },
          { label: "Sustrato + nutrientes", value: "60–80€" },
          { label: "Herramientas y accesorios", value: "40–80€" },
          { label: "Cosecha y curado", value: "30–60€" },
          { label: "Gasto eléctrico", value: "0€" },
          { label: "Rendimiento estimado (3 plantas)", value: "300–900g" },
          { label: "Coste temporada siguiente", value: "~40–60€ (solo semillas y nutrientes)" },
        ].map((row, i) => (
          <div key={i} style={{ display: "flex", justifyContent: "space-between", padding: "5px 0", borderBottom: i < 7 ? "1px solid #1b4332" : "none" }}>
            <span style={{ fontSize: "12px", color: "#74c69d" }}>{row.label}</span>
            <span style={{ fontSize: "12px", color: "#d8f3dc", fontWeight: row.bold ? "bold" : "normal" }}>{row.value}</span>
          </div>
        ))}
      </div>
      <div style={{ display: "flex", gap: "12px", marginBottom: "20px" }}>
        {[["ESENCIAL", "#e63946"], ["IMPORTANTE", "#f4a261"], ["ÚTIL", "#52b788"]].map(([label, color]) => (
          <div key={label} style={{ display: "flex", alignItems: "center", gap: "5px" }}>
            <div style={{ width: "8px", height: "8px", borderRadius: "50%", background: color }} />
            <span style={{ fontSize: "10px", color: "#74c69d" }}>{label}</span>
          </div>
        ))}
      </div>
      {sections.map((section, si) => (
        <div key={si} style={{ marginBottom: "24px" }}>
          <div style={{ fontSize: "10px", letterSpacing: "2px", color: "#52b788", marginBottom: "10px", paddingBottom: "6px", borderBottom: "1px solid #1b4332" }}>
            {section.title}
          </div>
          {section.items.map((item, ii) => (
            <div key={ii} style={{
              background: "#0d1f14", border: "1px solid #1b4332",
              borderLeft: `3px solid ${priorityColor[item.priority]}`,
              borderRadius: "10px", padding: "14px", marginBottom: "10px",
            }}>
              <div style={{ display: "flex", justifyContent: "space-between", marginBottom: "8px" }}>
                <div style={{ fontSize: "14px", color: "#d8f3dc", flex: 1, paddingRight: "10px" }}>{item.name}</div>
                <div style={{ textAlign: "right", flexShrink: 0 }}>
                  <div style={{ fontSize: "13px", fontWeight: "bold", color: "#95d5b2" }}>{item.price}</div>
                  <div style={{ fontSize: "9px", color: priorityColor[item.priority], marginTop: "2px" }}>{item.priority}</div>
                </div>
              </div>
              <div style={{ fontSize: "12px", color: "#74c69d", lineHeight: "1.5", marginBottom: "4px" }}>{item.detail}</div>
              <div style={{ fontSize: "11px", color: "#40916c" }}>⏳ {item.duracion}</div>
            </div>
          ))}
        </div>
      ))}
    </div>
  );
}

function SEMILLAS_EXT() {
  return (
    <div>
      <InfoBox>
        En exterior con fotoperiodo la planta crece de primavera a verano ganando tamaño máximo. En agosto-septiembre florece sola cuando los días se acortan por debajo de 14 horas de luz. Más tamaño en vegetativa = más rendimiento en floración. Es el ciclo más natural y eficiente.
      </InfoBox>

      <SectionTitle>FOTOPERIODO VS AUTOFLORECIENTE EN EXTERIOR</SectionTitle>
      {[
        { tipo: "✅ Fotoperiodo — Recomendado para exterior", color: "#52b788", puntos: [
          "Florece sola en agosto sin que hagas nada — los días cortos lo activan",
          "Vegetativa larga (mayo-julio): la planta alcanza su máximo potencial de tamaño",
          "Rendimiento: 200–500g+ por planta bien cuidada",
          "Plantas de 1–2 metros o más según variedad",
          "Una cosecha al año — pero de mucho volumen",
          "Necesita empezar en primavera para aprovechar toda la vegetativa",
        ]},
        { tipo: "⚠️ Autofloreciente — Válida con matices", color: "#f4a261", puntos: [
          "Ciclo corto de 70-80 días — puedes cosechar en julio antes del calor/lluvia",
          "Rendimiento menor: 50–150g por planta",
          "Plantas de 60–100cm: más discretas",
          "Válida si tienes prisa, el spot tiene limitaciones de altura, o quieres evitar el otoño húmedo",
          "Puedes hacer 2 cosechas en temporada si empiezas pronto",
        ]},
      ].map((op, i) => (
        <div key={i} style={{ background: "#0d1f14", border: `1px solid ${op.color}33`, borderLeft: `3px solid ${op.color}`, borderRadius: "10px", padding: "14px", marginBottom: "12px" }}>
          <div style={{ fontSize: "13px", fontWeight: "bold", color: op.color, marginBottom: "10px" }}>{op.tipo}</div>
          {op.puntos.map((p, j) => (
            <div key={j} style={{ fontSize: "12px", color: "#b7e4c7", marginBottom: "5px" }}>→ {p}</div>
          ))}
        </div>
      ))}

      <SectionTitle>QUÉ BUSCAR AL ELEGIR UNA SEMILLA EXTERIOR</SectionTitle>
      <Step num={1} text="Feminizada — imprescindible para principiante." why="Las plantas macho no producen cogollos y polinizan a las hembras arruinando la cosecha. Sin experiencia, identificar machos a tiempo es difícil. Las feminizadas eliminan ese riesgo — todas son hembra." />
      <Step num={2} text="Resistente al moho — busca esta característica en la descripción de la variedad." why="En otoño las noches son húmedas. La Botrytis (moho gris) puede destruir los cogollos en días desde dentro. Una variedad resistente es el seguro más importante para el exterior mediterráneo." />
      <Step num={3} text="Indica o indica-dominante — más compacta, más densa y ciclo de floración más corto." why="Las sativas pueden llegar a 3+ metros y necesitan 12+ semanas de floración — no encajan bien en exterior mediterráneo. Las indicas son más manejables." />
      <Step num={4} text="Floración de 8-9 semanas máximo — para cosechar antes de las lluvias de octubre." />
      <Step num={5} text="Adaptada al clima mediterráneo — muchas marcas etiquetan esto explícitamente." />

      <SectionTitle>VARIEDADES RECOMENDADAS PARA EXTERIOR MEDITERRÁNEO</SectionTitle>
      {[
        { name: "🏆 Critical (Royal Queen Seeds)", indica: "80%", thc: "20%", floracion: "7–8 semanas", rendimiento: "400–500g/planta", moho: "Alta ✅", nota: "La variedad más cultivada en exterior mediterráneo. Robusta, rápida, altísima resistencia al moho. Producción enorme para el tiempo de floración. La más recomendada para principiantes." },
        { name: "Northern Lights (Royal Queen Seeds)", indica: "90%", thc: "18%", floracion: "7–8 semanas", rendimiento: "200–300g/planta", moho: "Alta ✅", nota: "La indica clásica. Muy compacta para ser de fotoperiodo, discreta en el bosque, muy resistente al moho y las plagas. Efecto sedante y relajante. Ideal para zonas con menos sol." },
        { name: "Purple Punch (Barney's Farm)", indica: "80%", thc: "22%", floracion: "8–9 semanas", rendimiento: "300–400g/planta", moho: "Media-alta", nota: "Cogollos morados espectaculares. Sabor a frutas del bosque. Algo más sensible al moho que las anteriores — requiere más atención en septiembre. Muy popular en exterior." },
        { name: "OG Kush Auto (FastBuds) — si prefieres auto", indica: "75%", thc: "21%", floracion: "8 semanas (auto)", rendimiento: "100–200g/planta", moho: "Media", nota: "La mejor autofloreciente para exterior si quieres cosechar en julio y evitar el otoño. Mucho menos rendimiento que el fotoperiodo pero más sencilla de gestionar en tiempo." },
      ].map((v, i) => (
        <div key={i} style={{ background: "#0d1f14", border: "1px solid #1b4332", borderLeft: `3px solid ${i === 0 ? "#52b788" : "#2d6a4f"}`, borderRadius: "10px", padding: "14px", marginBottom: "10px" }}>
          {i === 0 && <div style={{ fontSize: "9px", color: "#52b788", letterSpacing: "2px", marginBottom: "6px" }}>⭐ RECOMENDADA PRINCIPAL</div>}
          <div style={{ fontSize: "14px", color: "#d8f3dc", fontWeight: "bold", marginBottom: "8px" }}>{v.name}</div>
          <div style={{ display: "grid", gridTemplateColumns: "1fr 1fr", gap: "6px", marginBottom: "8px" }}>
            {[["Genética", v.indica + " indica"], ["THC", v.thc], ["Floración", v.floracion], ["Rendimiento", v.rendimiento], ["Resist. moho", v.moho]].map(([k, val]) => (
              <div key={k} style={{ fontSize: "11px" }}>
                <span style={{ color: "#40916c" }}>{k}: </span>
                <span style={{ color: "#95d5b2" }}>{val}</span>
              </div>
            ))}
          </div>
          <div style={{ fontSize: "12px", color: "#74c69d", lineHeight: "1.5" }}>{v.nota}</div>
        </div>
      ))}

      <SectionTitle>CUÁNTAS SEMILLAS PLANTAR</SectionTitle>
      <Step num={1} text="Primera temporada: 2–3 plantas máximo." why="Con más plantas tienes más trabajo de riego, más tratamientos, más visitas. Para aprender el proceso 2-3 plantas es suficiente y manejable. Con experiencia puedes escalar." />
      <Step num={2} text="Germina siempre 1-2 semillas extra de reserva." why="La tasa de germinación incluso con buenas semillas es del 80-90%. Tener reservas evita quedarte sin plantas si alguna falla en la germinación o en las primeras semanas." />
      <Step num={3} text="Guarda las semillas sobrantes en bote de cristal hermético con sílica gel en la nevera. Aguantan 2-5 años perfectamente." />

      <SectionTitle color="#e63946">⚠️ HERMAFRODITAS — QUÉ SON Y QUÉ HACER</SectionTitle>
      <div style={{ background: "#1a0a0a", border: "1px solid #4a1010", borderRadius: "10px", padding: "14px", marginBottom: "12px" }}>
        <div style={{ fontSize: "13px", fontWeight: "bold", color: "#ff6b6b", marginBottom: "8px" }}>Definición</div>
        <div style={{ fontSize: "12px", color: "#c9a0a0", marginBottom: "12px", lineHeight: "1.5" }}>
          Una planta hermafrodita desarrolla tanto pistilos (órgano sexual femenino) como sacos de polen (órgano sexual masculino) en la misma planta. Aunque las semillas sean feminizadas, bajo estrés pueden hermafroditar. Cuando hermafroditan, polinizan sus propios cogollos y generan semillas — arruinando la cosecha.
        </div>
        <div style={{ fontSize: "13px", fontWeight: "bold", color: "#ff6b6b", marginBottom: "8px" }}>Causas del hermafroditismo</div>
        <div style={{ fontSize: "12px", color: "#c9a0a0", marginBottom: "12px", lineHeight: "1.5" }}>
          <strong>Genética débil:</strong> algunas variedades tendentes a hermafroditar bajo estrés (es raro pero pasa).<br/>
          <strong>Calor extremo:</strong> temperaturas {'>'}30°C sostenidas en floración pueden disparar el estrés.<br/>
          <strong>Falta de agua:</strong> sequía extrema en plena floración causa estrés severo.<br/>
          <strong>Luz nocturna:</strong> si la planta recibe ráfagas de luz durante la noche en floración, interpreta que el ciclo se rompió y puede hermafroditar como reacción evolutiva (crear semillas antes de morir).
        </div>
        <div style={{ fontSize: "13px", fontWeight: "bold", color: "#ff6b6b", marginBottom: "8px" }}>Cómo detectarlos</div>
        <div style={{ fontSize: "12px", color: "#c9a0a0", marginBottom: "12px", lineHeight: "1.5" }}>
          Observa el cogollo durante la floración. Los sacos de polen parecen <strong>pequeños plátanos o conos</strong> entre los pistilos blancos y normales. Están en las axilas y nudos. Si ves estas estructuras, la planta es hermafrodita.
        </div>
        <div style={{ fontSize: "13px", fontWeight: "bold", color: "#ff6b6b", marginBottom: "8px" }}>Qué hacer si encuentras uno</div>
        <div style={{ fontSize: "12px", color: "#c9a0a0", marginBottom: "8px", lineHeight: "1.5" }}>
          <strong>Opción 1 — Eliminar la planta (más seguro):</strong> si es temprano (semana 2–4 de floración), elimina toda la planta inmediatamente. Un solo saco que suelte polen puede polinizar todas tus plantas y todo el bosque cercano. No merece la pena.
        </div>
        <div style={{ fontSize: "12px", color: "#c9a0a0", marginBottom: "12px", lineHeight: "1.5" }}>
          <strong>Opción 2 — Remover sacos manualmente (alto riesgo):</strong> si está muy avanzada la floración (semana 8+) y los sacos son pocos, puedes intentar retirarlos manualmente cada día con unas pinzas, con guantes gruesos, en las visitas. El riesgo es que se rompa un saco sin verlo y hagas más daño. Solo si tienes mucha experiencia.
        </div>
        <div style={{ fontSize: "13px", fontWeight: "bold", color: "#ff6b6b", marginBottom: "8px" }}>Consecuencia de no actuar</div>
        <div style={{ fontSize: "12px", color: "#c9a0a0", lineHeight: "1.5" }}>
          Si no actúas y los sacos liberan polen, toda tu cosecha estará llena de semillas. Los cogollos serán inutilizables — cada bocado tiene una semilla. Meses de trabajo por nada. Es la peor forma de perder una cosecha.
        </div>
      </div>
    </div>
  );
}

function UBICACION() {
  return (
    <div>
      <InfoBox>
        Elegir bien el spot es la decisión más importante de todo el cultivo exterior. Un buen spot puede doblar el rendimiento respecto a uno mediocre. No plantes en el primer sitio que encuentres — dedica tiempo a explorar y analizar antes de comprometerte.
      </InfoBox>

      <SectionTitle>CRITERIOS PARA UN BUEN SPOT — POR ORDEN DE IMPORTANCIA</SectionTitle>
      <Step num={1} text="Sol directo mínimo 6 horas al día — cuantas más mejor. Orientación sur o sureste." why="El cannabis es una de las plantas que más luz necesita. Menos de 6h de sol directo y el rendimiento cae drásticamente — la planta no puede fotosintentizar suficiente energía para desarrollar cogollos densos. Comprueba el spot a diferentes horas del día antes de plantar." />
      <Step num={2} text="Acceso a agua — cerca de río, arroyo, manantial o con acceso cómodo para llevar garrafas." why="Una planta grande en julio necesita 5–10L al día. Sin agua cerca tendrás que cargar garrafas en cada visita. En pleno verano esto puede ser insostenible — planifica bien la logística del agua antes de elegir el spot." />
      <Step num={3} text="Suelo profundo y bien drenado — sin encharcamiento. Clava un palo 50cm: si sale muy mojado en días sin lluvia, busca otro sitio." why="El suelo encharcado pudre las raíces igual que el exceso de riego en interior. Las raíces necesitan oxígeno para absorber nutrientes." />
      <Step num={4} text="Protección del viento fuerte — idealmente un claro rodeado de árboles que actúen como cortavientos." why="El viento fuerte en floración (agosto-septiembre) rompe ramas cargadas de cogollos. Perder una rama principal en plena floración es un rendimiento perdido." />
      <Step num={5} text="Discreción — mínimo 100-200m de caminos frecuentados. No visible desde senderos." />
      <Step num={6} text="Acceso cómodo para ti — valorando que visitarás el spot regularmente durante 5 meses." />

      <SectionTitle>CÓMO PREPARAR EL HOYO</SectionTitle>
      <Step num={7} text="Mínimo 50×50×50cm. Si puedes hacer 60×60×60cm, mejor." why="Las raíces en exterior crecen sin límite. Un hoyo grande lleno de buen sustrato es lo que más impacta en el tamaño final de la planta. No escatimes aquí — es el trabajo más importante que harás en todo el cultivo." />
      <Step num={8} text="Mezcla la tierra del hoyo con Light Mix al 50/50. Rellena el hoyo con esa mezcla." why="La tierra de bosque puede ser ácida, pobre en nutrientes o muy arcillosa. Mezclarla con Light Mix da a las raíces un arranque óptimo sin exceso de nutrientes que queme." />
      <Step num={9} text="Riega el hoyo preparado abundantemente 24-48h antes de plantar para que el sustrato se asiente." />
      <Step num={10} text="Si el suelo es muy pedregoso o poco profundo, planta en maceta de 20-30L apoyada en el suelo." />

      <SectionTitle>CAMUFLAJE Y DISCRECIÓN</SectionTitle>
      <Step num={11} text="Planta entre arbustos y vegetación existente — no en claro despejado visible desde lejos." />
      <Step num={12} text="Rodea la planta con plantas aromáticas si es posible: romero, lavanda, menta. Ayudan a enmascarar el olor en floración." />
      <Step num={13} text="Varía el acceso cada visita — no crees un camino marcado hacia el spot." />
      <Step num={14} text="En floración (agosto-octubre) el olor es muy intenso. En bosque con brisa se dispersa rápido, pero los días sin viento es notable." />

      <SectionTitle color="#e63946">🚫 ERRORES QUE ARRUINAN EL SPOT</SectionTitle>
      <ErrorCard error="No verificar las horas reales de sol" consecuencia="Un spot con sombra parcial puede tener 3-4h de sol — la mitad de lo necesario. Rendimiento mínimo." fix="Visita el spot a las 10h, 13h y 16h en un día despejado. Si el sol no llega directo en esas horas, busca otro." />
      <ErrorCard error="Hoyo demasiado pequeño" consecuencia="Las raíces se quedan sin espacio en semanas. La planta se estresa y el rendimiento cae a la mitad." fix="50×50×50cm es el mínimo absoluto. 60×60×60cm si puedes." />
      <ErrorCard error="Spot demasiado cerca de caminos" consecuencia="Alguien la puede encontrar durante los 5 meses que está creciendo." fix="Mínimo 100-200m de cualquier sendero frecuentado. En bosque denso con buena vegetación, menos distancia puede ser suficiente." />

      <SectionTitle>🔒 SEGURIDAD Y DISCRECIÓN — PROTOCOLO COMPLETO</SectionTitle>

      <div style={{ background: "#0d1f14", border: "1px solid #1b4332", borderRadius: "10px", padding: "14px", marginBottom: "12px" }}>
        <div style={{ fontSize: "13px", fontWeight: "bold", color: "#74c69d", marginBottom: "10px" }}>Cómo elegir el acceso al spot</div>
        {[
          { num: 1, text: "Nunca aparques el coche en el mismo punto siempre. Varía entre 2-3 puntos de acceso distintos.", why: "Un coche aparcado repetidamente en el mismo sitio en días concretos llama la atención de senderistas y vecinos de la zona." },
          { num: 2, text: "Evita acceder al spot en horas punta de senderismo — entre las 9h y las 12h los fines de semana hay mucha gente en el bosque.", why: "El anochecer o la madrugada son el momento con menos tráfico de personas en el monte." },
          { num: 3, text: "Nunca vayas en grupo si no es necesario. Una persona sola llama menos la atención que un grupo.", why: null },
          { num: 4, text: "Cambia el camino de acceso al spot en cada visita. No sigas siempre el mismo rastro.", why: "Un sendero marcado en la vegetación que lleva a ningún camino oficial es la señal más obvia de que hay algo al final." },
          { num: 5, text: "Lleva ropa neutra sin logos llamativos. Una mochila de senderismo normal pasa desapercibida.", why: null },
        ].map((s, i) => (
          <div key={i} style={{ marginBottom: "10px" }}>
            <div style={{ display: "flex", gap: "8px", marginBottom: s.why ? "6px" : "0" }}>
              <div style={{ color: "#52b788", flexShrink: 0, fontSize: "12px", fontWeight: "bold" }}>{s.num}.</div>
              <div style={{ fontSize: "12px", color: "#b7e4c7", lineHeight: "1.5" }}>{s.text}</div>
            </div>
            {s.why && (
              <div style={{ marginLeft: "20px", background: "#162a1e", borderLeft: "3px solid #40916c", padding: "6px 10px", borderRadius: "0 6px 6px 0", fontSize: "11px", color: "#74c69d", lineHeight: "1.4" }}>
                <span style={{ color: "#52b788", fontWeight: "bold" }}>¿Por qué? </span>{s.why}
              </div>
            )}
          </div>
        ))}
      </div>

      <div style={{ background: "#0d1f14", border: "1px solid #1b4332", borderRadius: "10px", padding: "14px", marginBottom: "12px" }}>
        <div style={{ fontSize: "13px", fontWeight: "bold", color: "#74c69d", marginBottom: "10px" }}>Camuflaje activo de la planta</div>
        {[
          { num: 1, text: "Planta siempre dentro de vegetación existente, nunca en claro abierto visible.", why: "Una planta verde brillante en medio de un claro marrón-ocre de verano destaca a metros de distancia." },
          { num: 2, text: "Rodea la planta con plantas aromáticas: romero, lavanda, tomillo, menta. Crecen solas en el mediterráneo.", why: "Los aromas fuertes confunden el olfato de quien pasa cerca. También mejoran el ecosistema del spot." },
          { num: 3, text: "En floración, cuando la planta crece y puede sobresalir de la vegetación circundante, usa LST para mantenerla horizontal y baja.", why: "Una planta de 1.5m vertical es visible desde lejos. La misma planta en abanico horizontal a 80cm de altura es invisible entre arbustos." },
          { num: 4, text: "Evita cortar ramas o vegetación alrededor para hacer espacio. Adapta la planta a lo que hay, no al revés.", why: "Los claros artificiales en el bosque son señales evidentes. La vegetación alrededor es tu mejor camuflaje." },
          { num: 5, text: "No dejes herramientas, bolsas, garrafas ni ningún objeto humano cerca del spot.", why: "Cualquier objeto artificial en el bosque es señal de presencia humana reciente. Limpia cada visita." },
        ].map((s, i) => (
          <div key={i} style={{ marginBottom: "10px" }}>
            <div style={{ display: "flex", gap: "8px", marginBottom: s.why ? "6px" : "0" }}>
              <div style={{ color: "#52b788", flexShrink: 0, fontSize: "12px", fontWeight: "bold" }}>{s.num}.</div>
              <div style={{ fontSize: "12px", color: "#b7e4c7", lineHeight: "1.5" }}>{s.text}</div>
            </div>
            {s.why && (
              <div style={{ marginLeft: "20px", background: "#162a1e", borderLeft: "3px solid #40916c", padding: "6px 10px", borderRadius: "0 6px 6px 0", fontSize: "11px", color: "#74c69d", lineHeight: "1.4" }}>
                <span style={{ color: "#52b788", fontWeight: "bold" }}>¿Por qué? </span>{s.why}
              </div>
            )}
          </div>
        ))}
      </div>

      <div style={{ background: "#0d1f14", border: "1px solid #1b4332", borderRadius: "10px", padding: "14px", marginBottom: "12px" }}>
        <div style={{ fontSize: "13px", fontWeight: "bold", color: "#74c69d", marginBottom: "10px" }}>Control del olor — el mayor riesgo exterior</div>
        {[
          { num: 1, text: "En floración (agosto-octubre) el olor es muy intenso. Visita el spot en días con brisa — el viento lo dispersa. Los días de calma y sin viento el olor se queda estático.", why: null },
          { num: 2, text: "Las visitas más largas (riego, revisión) hazlas de madrugada o muy temprano — menos paseantes.", why: null },
          { num: 3, text: "No te quedes en el spot más tiempo del necesario en floración avanzada.", why: "El olor se impregna en la ropa. Sal del spot, ventila bien y no vayas a sitios concurridos directamente después." },
          { num: 4, text: "En la cosecha, trabaja con bolsas herméticas desde el primer corte. El olor al cortar los cogollos es muy intenso.", why: null },
        ].map((s, i) => (
          <div key={i} style={{ marginBottom: "8px" }}>
            <div style={{ display: "flex", gap: "8px", marginBottom: s.why ? "6px" : "0" }}>
              <div style={{ color: "#52b788", flexShrink: 0, fontSize: "12px", fontWeight: "bold" }}>{s.num}.</div>
              <div style={{ fontSize: "12px", color: "#b7e4c7", lineHeight: "1.5" }}>{s.text}</div>
            </div>
            {s.why && (
              <div style={{ marginLeft: "20px", background: "#162a1e", borderLeft: "3px solid #40916c", padding: "6px 10px", borderRadius: "0 6px 6px 0", fontSize: "11px", color: "#74c69d", lineHeight: "1.4" }}>
                <span style={{ color: "#52b788", fontWeight: "bold" }}>¿Por qué? </span>{s.why}
              </div>
            )}
          </div>
        ))}
      </div>

      <div style={{ background: "#0d1f14", border: "1px solid #1b4332", borderRadius: "10px", padding: "14px", marginBottom: "12px" }}>
        <div style={{ fontSize: "13px", fontWeight: "bold", color: "#74c69d", marginBottom: "10px" }}>Qué hacer si alguien te cruza cerca del spot</div>
        {[
          "Comportamiento normal — saluda, no te escondas ni cambies de dirección bruscamente.",
          "Si te preguntan qué haces: senderismo, setas, fotografía, observación de aves. Respuestas naturales que no requieren explicación.",
          "No vuelvas al spot el mismo día si has tenido un encuentro cercano.",
          "Si sospechas que alguien ha encontrado el spot — no vuelvas durante al menos 2-3 semanas.",
        ].map((item, i) => (
          <div key={i} style={{ display: "flex", gap: "10px", marginBottom: "8px" }}>
            <div style={{ color: "#52b788", flexShrink: 0 }}>→</div>
            <div style={{ fontSize: "12px", color: "#b7e4c7", lineHeight: "1.5" }}>{item}</div>
          </div>
        ))}
      </div>

      <div style={{ background: "#1a2a10", border: "1px solid #4a7a20", borderRadius: "10px", padding: "14px" }}>
        <div style={{ fontSize: "13px", fontWeight: "bold", color: "#74c69d", marginBottom: "10px" }}>📱 Seguridad digital</div>
        {[
          { tip: "No hagas fotos al spot con el móvil normal", detail: "Las fotos del móvil llevan metadatos GPS incrustados. Si la foto sale del dispositivo por cualquier motivo, la localización exacta va con ella. Si quieres documentar el crecimiento, desactiva la ubicación en la cámara." },
          { tip: "No compartas la ubicación del spot con nadie", detail: "Aunque sea alguien de confianza. La regla más básica y la que más se ignora. La mayoría de spots que se pierden es por comentario entre conocidos, no por encontrarse por casualidad." },
          { tip: "No busques el spot en Google Maps con el móvil personal", detail: "El historial de ubicaciones y búsquedas queda registrado. Usa modo incógnito o simplemente no lo busques digitalmente." },
          { tip: "No hables del spot en redes sociales ni mensajería", detail: "WhatsApp, Telegram, Instagram — cualquier comunicación digital deja rastro. Lo que no se dice no existe." },
        ].map((item, i) => (
          <div key={i} style={{ background: "#0d2a14", border: "1px solid #2d6a4f", borderRadius: "8px", padding: "10px 12px", marginBottom: "8px" }}>
            <div style={{ fontSize: "12px", fontWeight: "bold", color: "#d8f3dc", marginBottom: "4px" }}>→ {item.tip}</div>
            <div style={{ fontSize: "11px", color: "#74c69d", lineHeight: "1.5" }}>{item.detail}</div>
          </div>
        ))}
      </div>
    </div>
  );
}

function GERMINACION_EXT() {
  return (
    <div>
      <div style={{ background: "#1a2a10", border: "1px solid #4a7a20", borderRadius: "10px", padding: "14px", marginBottom: "20px" }}>
        <p style={{ margin: "0 0 6px", fontSize: "13px", color: "#d8f3dc", fontWeight: "bold" }}>🗓️ Cuándo empezar</p>
        <p style={{ margin: 0, fontSize: "13px", color: "#95d5b2", lineHeight: "1.6" }}>
          En zona mediterránea: germina entre marzo y mayo. La planta pasará 2-3 semanas en casa antes de ir al exterior. Para cuando esté lista, las noches deben superar los 12-13°C de forma consistente. En zonas más frías del interior, espera hasta mayo-junio.
        </p>
      </div>

      <SectionTitle>FASE 1 — GERMINACIÓN (Días 1–7)</SectionTitle>
      <Step num={1} text="Prepara los vasitos o macetas biodegradables con Light Mix ligeramente húmedo." />
      <Step num={2} text="Pon cada semilla en un vaso con agua mineral a temperatura ambiente durante 12-18h." why="El agua mineral activa los procesos internos de la semilla. El cloro del agua del grifo puede inhibir la germinación." />
      <Step num={3} text="Transfiere cada semilla a papel de cocina húmedo (no chorreando) dentro de un tupper. Ciérralo y ponlo en un sitio oscuro y cálido a ~22°C." why="El calor constante y la oscuridad imitan el estado natural de una semilla bajo tierra. Encima de un router WiFi funciona perfectamente." />
      <Step num={4} text="Revisa cada 12h. En 3-5 días verás salir una raíz blanca (radícula)." />
      <Step num={5} text="Cuando la raíz mida 1-2cm, planta en el vasito con la raíz hacia abajo. Cubre con 1cm de sustrato suavemente." why="Si la raíz supera 3cm se dobla al plantarla. 1-2cm es el momento exacto." />

      <SectionTitle>FASE 2 — PLÁNTULA EN CASA (Días 7–21)</SectionTitle>
      <Step num={6} text="Pon el vasito en la ventana con más sol de casa. Rota el vaso cada día para que la planta crezca recta." />
      <Step num={7} text="Riega solo cuando el sustrato esté seco al tacto (dedo 2cm). Usa spray para las primeras semanas." why="La sobreirrigación mata más plántulas que cualquier otra cosa. En un vasito pequeño el sustrato se seca rápido — pero comprueba siempre antes de añadir agua." />
      <Step num={8} text="Sin nutrientes las primeras 2 semanas. Solo agua con pH 6.2–6.5." why="El Light Mix ya tiene nutrientes de base. Añadir más encima quema las raíces jóvenes y la planta muere." />
      <Step num={9} text="Las primeras hojas que ves (cotiledones) son redondeadas y no parecen cannabis. Es normal. Las hojas características salen a partir del día 5-7." />
      <Step num={10} text="Si la planta crece muy estirada buscando luz, acércala más a la ventana. Una planta estirada no es grave — se recupera con sol directo en el exterior." />
      <Step num={11} text="Cuando tenga 10-15cm y 3-4 pares de hojas reales está lista para ir al exterior." />

      <SectionTitle>FASE 3 — TRASPLANTE AL EXTERIOR</SectionTitle>
      <Step num={12} text="Asegúrate de que las mínimas nocturnas sean consistentemente por encima de 12-13°C en tu zona. Consulta el pronóstico antes de salir." why="El frío nocturno estresa las plántulas jóvenes y puede matarlas. Mejor esperar una semana más que arriesgar las plantas." />
      <Step num={13} text="Riega bien el vasito el día anterior para que el sustrato esté cohesionado." why="El sustrato húmedo mantiene la forma del cepellón al sacarlo. Si está seco se deshace y dañas las raíces." />
      <Step num={14} text="Si usas maceta biodegradable: entiérrala entera en el hoyo. Las raíces atravesarán el material solas. Cero estrés de trasplante." />
      <Step num={15} text="Si usas vasito plástico: aprieta suavemente los lados y saca la planta con todo el cepellón intacto. Ponla en el centro del hoyo y rellena los lados." />
      <Step num={16} text="Riega abundantemente justo después del trasplante — hasta empapar bien todo el hoyo." why="El riego post-trasplante elimina bolsas de aire alrededor de las raíces y las pone en contacto directo con el nuevo sustrato." />
      <Step num={17} text="Si el sol es muy fuerte los primeros 2-3 días, pon sombra provisional con una rama o cartón." why="La planta pasa de la luz indirecta del alféizar al sol directo. El cambio brusco puede quemar las hojas. La adaptación progresiva evita el problema." />

      <SectionTitle color="#e63946">🚫 ERRORES EN GERMINACIÓN Y TRASPLANTE</SectionTitle>
      <ErrorCard error="Regar el vasito cada día por rutina" consecuencia="La radícula se ahoga. Es la causa nº1 de muerte en plántula." fix="Dedo en el sustrato siempre. Si está húmedo, no riegas." />
      <ErrorCard error="Trasplantar con frío nocturno" consecuencia="La plántula se estresa, para de crecer y puede morir." fix="Espera a que las mínimas superen 12-13°C de forma consistente." />
      <ErrorCard error="Romper el cepellón al trasplantar" consecuencia="Las raíces quedan expuestas. La planta entra en estrés severo durante semanas." fix="Aprieta los lados del vasito suavemente antes de sacar. Sale entero si el sustrato está húmedo." />
      <ErrorCard error="No regar después del trasplante" consecuencia="Bolsas de aire alrededor de las raíces — la planta no puede absorber agua ni nutrientes." fix="Riego abundante inmediatamente después de plantar. Empapa bien." />
    </div>
  );
}

function FASES_EXT() {
  return (
    <div>
      <InfoBox>
        El calendario exterior es la naturaleza haciendo su trabajo. Tú solo riegas, alimentas y vigilas. El sol controla el crecimiento y el acortamiento de días activa la floración automáticamente en agosto. No hay que hacer nada para que florezca.
      </InfoBox>

      <SectionTitle>CALENDARIO MES A MES</SectionTitle>
      {[
        { mes: "MARZO–MAYO", icono: "🌱", fase: "Germinación y trasplante al exterior", color: "#40916c", pasos: [
          "Germina en casa según fase anterior.",
          "Trasplanta al hoyo cuando tenga 10-15cm y las noches superen 12°C.",
          "Primeras semanas: riego suave cada 2-3 días. Solo agua con pH 6.2-6.5.",
          "Sin nutrientes las primeras 2 semanas en exterior — el sustrato ya tiene lo que necesita.",
          "Protege de posibles heladas tardías con tela de jardín si las temperaturas bajan inesperadamente.",
        ]},
        { mes: "JUNIO", icono: "🌿", fase: "Vegetativa temprana — arranque fuerte", color: "#52b788", pasos: [
          "La planta crece rápido con los días largos de junio (15-16h de luz).",
          "Empieza Bio·Grow: 2ml/L en cada riego. Ajusta siempre el pH del agua a 6.2-6.5.",
          "Riega cuando el suelo esté seco a 3-4cm de profundidad.",
          "Primera aplicación de Bacillus thuringiensis (Bt) en spray sobre las hojas — prevención de orugas.",
          "Si crece muy vertical, empieza LST (doblar ramas hacia fuera) para que la luz llegue a más puntos.",
          "Pon acolchado (hojas secas, corteza) alrededor de la base para retener humedad.",
        ]},
        { mes: "JULIO", icono: "🌿", fase: "Vegetativa máxima — pico de crecimiento y calor", color: "#74c69d", pasos: [
          "La planta puede crecer 5-10cm al día. Es el mes de mayor crecimiento.",
          "Riego más frecuente — puede ser diario en días muy calurosos. Nunca entre las 12h y 16h.",
          "Sube Bio·Grow a 3-4ml/L si la planta se ve sana y verde oscuro.",
          "Aplica Bt cada 2 semanas. Revisa el envés de las hojas en cada visita.",
          "Pon tutores (estacas de bambú o ramas del bosque) en las ramas principales.",
          "El acolchado es crítico este mes — reduce el riego a la mitad.",
        ]},
        { mes: "AGOSTO", icono: "🌸", fase: "Inicio de floración automática", color: "#b7e4c7", pasos: [
          "A principios de agosto los días bajan de 14h y la planta empieza a florecer sola.",
          "Señal: aparecen pelos blancos (pistilos) en los nudos entre ramas. No tienes que hacer nada.",
          "Cambia a Bio·Bloom 2-3ml/L. Mantén Bio·Grow a 0.5ml/L.",
          "El olor empieza a ser notable. En bosque con brisa se dispersa bien.",
          "Baja la frecuencia de riego ligeramente — los cogollos en formación no quieren tanta agua como la vegetativa.",
        ]},
        { mes: "SEPTIEMBRE", icono: "🌸", fase: "Floración avanzada — mes más crítico", color: "#95d5b2", pasos: [
          "Los cogollos engordan rápido. Aumenta las visitas a 2 veces por semana.",
          "LAVADO DE RAÍCES: semana 4-5 de floración, solo agua con pH 6.2 los últimos 10-14 días antes de cosechar.",
          "Revisa en cada visita que no haya Botrytis: abre cogollos con cuidado y busca manchas grises o textura blanda.",
          "Si aparece moho: corta la rama afectada 5cm por debajo de la zona visible. Bolsa hermética. Desinfecta tijeras con alcohol entre cortes.",
          "Añade tutores adicionales — los cogollos pesan mucho y pueden doblar o romper ramas.",
          "Revisa el estado de los tricomas con la lupa 60x semanalmente.",
        ]},
        { mes: "OCTUBRE", icono: "✂️", fase: "Cosecha", color: "#d8f3dc", pasos: [
          "Tricomas 70-80% lechosos con alguno ámbar = punto óptimo de cosecha.",
          "Con riesgo de lluvia o moho: puedes adelantar al 60% lechosos. Mejor cosechar antes que perderlo por moho.",
          "Cosecha de madrugada o al amanecer — menos calor, más resina, más discreción.",
          "Lleva: mochila, bolsas herméticas dobles, tijeras limpias, guantes.",
          "Limpia el spot completamente — recoge raíces, ramas y cualquier rastro.",
        ]},
      ].map((m, i) => (
        <div key={i} style={{ background: "#0d1f14", border: "1px solid #1b4332", borderRadius: "10px", padding: "14px", marginBottom: "12px" }}>
          <div style={{ display: "flex", alignItems: "center", gap: "10px", marginBottom: "10px" }}>
            <div style={{ fontSize: "20px" }}>{m.icono}</div>
            <div>
              <div style={{ fontSize: "13px", fontWeight: "bold", color: m.color }}>{m.mes}</div>
              <div style={{ fontSize: "11px", color: "#52b788" }}>{m.fase}</div>
            </div>
          </div>
          {m.pasos.map((p, j) => (
            <div key={j} style={{ display: "flex", gap: "8px", marginBottom: "6px" }}>
              <div style={{ color: m.color, flexShrink: 0, fontSize: "12px" }}>{j + 1}.</div>
              <div style={{ fontSize: "12px", color: "#b7e4c7", lineHeight: "1.5" }}>{p}</div>
            </div>
          ))}
        </div>
      ))}
    </div>
  );
}

function RIEGO_EXT() {
  return (
    <div>
      <InfoBox>
        El riego en exterior es el trabajo más constante de toda la temporada. En julio puede ser diario. Planifica bien la logística del agua antes de empezar — es el factor limitante real del cultivo exterior.
      </InfoBox>

      <SectionTitle>EL AGUA — QUÉ USAR Y CÓMO PREPARARLA</SectionTitle>
      {[
        { tipo: "💧 Agua del grifo", ph: "7.0–8.5 (varía por zona)", ajuste: "Sí — mide siempre", color: "#f4a261", detail: "La opción más práctica y barata. Prepárala en casa: llena el bidón, añade nutrientes si toca, mide el pH con el pHmetro y ajusta con unas gotas de pH Down hasta 6.2-6.5. Todo en 5 minutos. Lleva el bidón ya preparado al spot." },
        { tipo: "🏔️ Agua de manantial o río cercano", ph: "6.0–7.5 (varía)", ajuste: "Mide antes de usar", color: "#52b788", detail: "Si hay agua natural cerca del spot, úsala — es gratis y evita cargar peso. El pH del agua natural suele ser más favorable. Mide siempre con el pHmetro. Si está entre 6.0 y 7.0 puedes usarla directamente. Por encima de 7.5 añade unas gotas de pH Down." },
        { tipo: "🛒 Agua mineral embotellada", ph: "6.5–7.4 (suele estar bien)", ajuste: "Generalmente no", color: "#74c69d", detail: "Funciona bien y raramente necesita ajuste de pH. El problema es el coste — una temporada completa con 3 plantas son 900-1.000L, lo que sale muy caro. Úsala solo en las primeras semanas mientras la planta es pequeña si no tienes otra opción." },
      ].map((agua, i) => (
        <div key={i} style={{ background: "#162a1e", border: `1px solid ${agua.color}44`, borderRadius: "8px", padding: "12px", marginBottom: "8px" }}>
          <div style={{ display: "flex", justifyContent: "space-between", marginBottom: "6px" }}>
            <div style={{ fontSize: "13px", color: "#d8f3dc", fontWeight: "bold" }}>{agua.tipo}</div>
            <div style={{ fontSize: "10px", color: agua.color, fontWeight: "bold" }}>{agua.ajuste}</div>
          </div>
          <div style={{ fontSize: "11px", color: "#52b788", marginBottom: "4px" }}>pH habitual: {agua.ph}</div>
          <div style={{ fontSize: "12px", color: "#74c69d", lineHeight: "1.5" }}>{agua.detail}</div>
        </div>
      ))}

      <SectionTitle>CÓMO REGAR CORRECTAMENTE A MANO</SectionTitle>
      <Step num={1} text="Prepara el agua en casa: llena el bidón, añade nutrientes si toca, ajusta el pH a 6.2-6.5." />
      <Step num={2} text="Vierte lentamente alrededor de la base de la planta — nunca encima de las hojas ni del tallo." why="El agua en las hojas con sol directo actúa como lupa y puede quemarlas. El agua en el tallo puede causar podredumbre en la base. Siempre al suelo, alrededor de la planta." />
      <Step num={3} text="Riega hasta que el suelo no absorba más y quede agua en la superficie. Para, espera que se absorba. Si sigue seco, añade más." why="Una riega profunda y completa es mejor que varias superficiales. El agua debe llegar a las raíces más profundas, no solo mojar los primeros centímetros." />
      <Step num={4} text="Nunca riegues entre las 12h y las 16h en verano." why="El agua se evapora antes de llegar a las raíces y las gotas en las hojas pueden quemar con el sol de mediodía." />
      <Step num={5} text="En exterior con macetas (vs tierra): observa el agua de drenaje que sale por los agujeros de abajo si riegas con abundancia. Si es turbia o tiene olor, puede haber acumulación de sales — significa que el pH interior está bloqueando nutrientes." why="Menos crítico que interior porque el agua de lluvia lava el sustrato naturalmente. Pero si los síntomas no claaran (amarilleo sin razón), la raíz puede estar en bloqueo de nutrientes acumulados." />

      <SectionTitle>FRECUENCIA DE VISITAS SIN RIEGO AUTOMÁTICO</SectionTitle>
      <div style={{ background: "#0d1f14", border: "1px solid #1b4332", borderRadius: "10px", padding: "14px", marginBottom: "12px" }}>
        {[
          { mes: "Marzo–Mayo", visitas: "2x semana", agua: "3-8L por visita (3 plantas)", nota: "" },
          { mes: "Junio", visitas: "2-3x semana", agua: "8-15L por visita", nota: "" },
          { mes: "Julio ⚠️", visitas: "Cada 1-2 días", agua: "15-25L por visita", nota: "El mes más exigente — sin agua las plantas mueren en 2-3 días de calor extremo." },
          { mes: "Agosto", visitas: "Cada 2 días", agua: "12-18L por visita", nota: "" },
          { mes: "Septiembre", visitas: "2-3x semana", agua: "8-12L por visita", nota: "Menos calor pero más vigilancia de moho — visitas más importantes que nunca." },
          { mes: "Octubre", visitas: "1-2x semana", agua: "5-8L por visita", nota: "Cosecha próxima. Reducir riego en las 2 últimas semanas (lavado de raíces)." },
        ].map((row, i) => (
          <div key={i} style={{ padding: "8px 0", borderBottom: i < 5 ? "1px solid #1b4332" : "none" }}>
            <div style={{ display: "flex", justifyContent: "space-between", marginBottom: "3px" }}>
              <span style={{ fontSize: "12px", color: "#d8f3dc", fontWeight: "bold" }}>{row.mes}</span>
              <span style={{ fontSize: "11px", color: "#95d5b2" }}>{row.visitas}</span>
            </div>
            <div style={{ fontSize: "11px", color: "#74c69d" }}>{row.agua}</div>
            {row.nota && <div style={{ fontSize: "11px", color: "#f4a261", marginTop: "2px" }}>{row.nota}</div>}
          </div>
        ))}
      </div>

      <SectionTitle>RIEGO AUTOMÁTICO POR GRAVEDAD — SIN ELECTRICIDAD</SectionTitle>
      <div style={{ background: "#0d1f14", border: "1px solid #1b4332", borderRadius: "10px", padding: "14px", marginBottom: "12px" }}>
        <div style={{ fontSize: "13px", fontWeight: "bold", color: "#74c69d", marginBottom: "10px" }}>Cómo funciona</div>
        <div style={{ fontSize: "12px", color: "#95d5b2", lineHeight: "1.6", marginBottom: "10px" }}>
          Bidón elevado 50-80cm → tubo principal → goteros regulables en cada planta. La gravedad mueve el agua sin necesidad de bomba ni electricidad. Un temporizador a pilas entre el bidón y el tubo abre y cierra el paso automáticamente.
        </div>
        {[
          { num: 1, text: "Instala un conector de depósito (racor pasante) en la parte baja del bidón haciendo un agujero." },
          { num: 2, text: "Conecta tubo flexible de 4-6mm al conector. Lleva el tubo hasta las plantas con ramales de 1 para cada planta." },
          { num: 3, text: "Pincha un gotero regulable al final de cada ramal. Regula al mínimo caudal — la gravedad tiene poca presión." },
          { num: 4, text: "Eleva el bidón 50-80cm con piedras, ramas o cualquier soporte estable." },
          { num: 5, text: "Añade temporizador a pilas (15-25€) entre el bidón y el tubo para programar riegos automáticos." },
          { num: 6, text: "Con 20L y goteros bien regulados puedes cubrir 3-4 días en julio sin visitar el spot." },
        ].map((s, i) => (
          <div key={i} style={{ display: "flex", gap: "8px", marginBottom: "8px" }}>
            <div style={{ color: "#52b788", flexShrink: 0, fontSize: "12px", fontWeight: "bold" }}>{s.num}.</div>
            <div style={{ fontSize: "12px", color: "#b7e4c7", lineHeight: "1.5" }}>{s.text}</div>
          </div>
        ))}
      </div>

      <div style={{ background: "#1a2a10", border: "1px solid #4a7a20", borderRadius: "10px", padding: "14px", marginBottom: "12px" }}>
        <div style={{ fontSize: "13px", fontWeight: "bold", color: "#74c69d", marginBottom: "8px" }}>🍂 Acolchado (Mulching) — truco clave para reducir riego</div>
        <div style={{ fontSize: "12px", color: "#95d5b2", lineHeight: "1.6" }}>
          Cubre el suelo alrededor de cada planta con 5-10cm de hojas secas, corteza o hierba del propio bosque. Coste: cero. Resultado: retiene la humedad del suelo evitando que el calor la evapore. Puede reducir la frecuencia de riego a la mitad en julio. Aplícalo desde junio.
        </div>
      </div>

      <SectionTitle>🎋 TUTORES — CÓMO Y CUÁNDO USARLOS</SectionTitle>
      <Step num={1} text="Las plantas de fotoperiodo en exterior pueden llegar a 1.5-2m. En floración los cogollos pesan mucho y las ramas se doblan o rompen." />
      <Step num={2} text="Cuándo ponerlos: a partir de agosto cuando los cogollos empiezan a engordar. No es necesario antes." />
      <Step num={3} text="Clava la estaca a 5cm del tallo de la rama que necesita soporte." why="Más cerca puede pinchar raíces principales. 5cm es la distancia de seguridad." />
      <Step num={4} text="Ata la rama con cuerda suave en lazo de 8 — un nudo entre la rama y la estaca para que no toque directamente." why="La cuerda directa sobre la rama puede cortar la circulación de savia y matar esa parte." />
      <Step num={5} text="Alternativa gratuita: ramas largas y rectas del propio bosque. Funcionan igual de bien." />
    </div>
  );
}

function PLAGAS() {
  return (
    <div>
      <InfoBox>
        En exterior las plagas son inevitables — el bosque está lleno de vida. La clave es prevención constante desde el principio, no reaccionar cuando ya es tarde. Con el protocolo correcto no perderás la cosecha.
      </InfoBox>

      <SectionTitle>CHECKLIST DE CADA VISITA</SectionTitle>
      {[
        "Mira el envés de las hojas jóvenes — pulgones y ácaros viven ahí.",
        "Busca agujeros irregulares en hojas — señal de orugas activas de noche.",
        "Comprueba que los tutores aguantan el peso de las ramas.",
        "Mira la base del tallo — caracoles y babosas atacan aquí.",
        "En septiembre: abre cogollos con cuidado y busca manchas grises — Botrytis.",
        "Aplica Bt si hace más de 2 semanas desde la última aplicación.",
        "Riega si el suelo está seco a 3-4cm de profundidad.",
      ].map((item, i) => (
        <div key={i} style={{ display: "flex", gap: "10px", background: "#0d1f14", border: "1px solid #1b4332", borderRadius: "8px", padding: "10px 12px", marginBottom: "6px" }}>
          <div style={{ color: "#52b788", flexShrink: 0 }}>☐</div>
          <div style={{ fontSize: "12px", color: "#b7e4c7", lineHeight: "1.5" }}>{item}</div>
        </div>
      ))}

      <SectionTitle>LAS 4 AMENAZAS PRINCIPALES</SectionTitle>
      {[
        {
          nombre: "🐛 Orugas y larvas", nivel: "ALTO", color: "#e63946",
          descripcion: "Comen las hojas de noche dejando agujeros irregulares. Con infestación fuerte pueden defoliar una planta en días.",
          deteccion: "Agujeros irregulares en hojas. Excrementos negros pequeños sobre las hojas. Las propias orugas visibles por la noche con linterna.",
          prevencion: "Bacillus thuringiensis (Bt) en spray sobre todas las hojas cada 2 semanas desde junio. Es la prevención más importante de todo el cultivo exterior.",
          tratamiento: "Aumenta Bt a cada semana. Revisa manualmente y elimina orugas con guantes. Si la infestación es muy grande, Spinosad (insecticida natural) como refuerzo.",
        },
        {
          nombre: "🐌 Caracoles y babosas", nivel: "MEDIO", color: "#f4a261",
          descripcion: "Atacan plántulas y plantas jóvenes de noche o con tiempo húmedo. Menos problema cuando la planta es grande y el tallo está lignificado.",
          deteccion: "Rastro de baba plateada en el suelo y la planta. Bordes de hojas comidos en semicírculos regulares.",
          prevencion: "Pon una capa de ceniza de madera o tierra de diatomeas alrededor de la base. Los caracoles no cruzan estas barreras.",
          tratamiento: "Trampa de cerveza: vaso enterrado a nivel del suelo con cerveza dentro — los atrae y ahoga. Recógelos manualmente en las visitas nocturnas.",
        },
        {
          nombre: "🍄 Botrytis — moho gris", nivel: "CRÍTICO EN SEPTIEMBRE-OCTUBRE", color: "#9b2226",
          descripcion: "El mayor peligro del exterior mediterráneo. Ataca los cogollos desde dentro en noches húmedas de otoño. Puede destruir una cosecha entera en 5-7 días. No hay tratamiento — solo prevención y eliminación rápida.",
          deteccion: "Manchas grises o marrones dentro de los cogollos. Micelio gris al separar las hojas del cogollo. Textura blanda o esponjosa donde debería haber firmeza.",
          prevencion: "Elige variedades resistentes. Visita 2 veces por semana en septiembre. No riegues en exceso en floración. Buena circulación de aire alrededor de la planta.",
          tratamiento: "Corta la rama afectada con tijeras limpias 5cm por debajo de la zona visible. Mete en bolsa hermética sin tocar otras partes. Desinfecta las tijeras con alcohol entre cada corte. Hay que actuar el mismo día que lo detectas.",
        },
        {
          nombre: "🌿 Pulgones y ácaros", nivel: "BAJO-MEDIO", color: "#f4a261",
          descripcion: "Insectos pequeños que chupan la savia. Debilitan la planta y pueden transmitir enfermedades. En exterior los depredadores naturales del bosque los controlan bastante bien.",
          deteccion: "Pulgones: racimos de insectos verdes o negros en el envés de hojas jóvenes. Ácaros: puntos amarillos en hojas, telaraña fina en el envés con lupa.",
          prevencion: "No uses insecticidas de amplio espectro — matas también a las mariquitas y otros predadores que te ayudan a controlarlos. El ecosistema del bosque se autorregula.",
          tratamiento: "Jabón potásico 5ml/L en spray al atardecer cubriendo bien el envés. 2-3 aplicaciones cada 3 días. Si no mejora, añade aceite de neem 2ml/L.",
        },
        {
          nombre: "🍯 Oídio — moho blanco", nivel: "ALTO (sept-oct)", color: "#f4a261",
          descripcion: "Hongo muy común en clima mediterráneo en otoño. Florece cuando hay noches frías (10-15°C) y días cálidos (20-25°C). Se ve como polvo blanco harinoso en hojas y cogollos.",
          deteccion: "Polvo blanco harinoso en el envés de hojas y en las sugar leaves alrededor de los cogollos. Empieza en hojas bajas y sube. Puede cubrir el cogollo entero si no actúas.",
          prevencion: "Elige variedades resistentes desde la compra. Buena circulación de aire entre las ramas. Evita regar las hojas por la noche. Visitas semanales en septiembre para detectarlo temprano.",
          tratamiento: "Bicarbonato sódico 5g/L + jabón potásico 5ml/L en spray aplicado al atardecer. Cubre todas las hojas bien. Aplica cada 5-7 días hasta desaparecer. Elimina hojas muy afectadas manualmente. En último recurso, azufre en polvo (solo antes de floración avanzada, no al final).",
        },
      ].map((plaga, i) => (
        <div key={i} style={{ background: "#0d1f14", border: `1px solid ${plaga.color}44`, borderRadius: "10px", padding: "14px", marginBottom: "12px" }}>
          <div style={{ display: "flex", justifyContent: "space-between", alignItems: "center", marginBottom: "8px" }}>
            <div style={{ fontSize: "14px", fontWeight: "bold", color: "#d8f3dc" }}>{plaga.nombre}</div>
            <div style={{ fontSize: "9px", color: plaga.color, letterSpacing: "1px", fontWeight: "bold" }}>{plaga.nivel}</div>
          </div>
          <div style={{ fontSize: "12px", color: "#74c69d", lineHeight: "1.5", marginBottom: "10px" }}>{plaga.descripcion}</div>
          {[["🔍 Cómo detectar", plaga.deteccion], ["🛡️ Prevención", plaga.prevencion], ["💊 Tratamiento", plaga.tratamiento]].map(([titulo, texto]) => (
            <div key={titulo} style={{ marginBottom: "8px" }}>
              <div style={{ fontSize: "10px", color: "#52b788", letterSpacing: "1px", marginBottom: "3px" }}>{titulo}</div>
              <div style={{ fontSize: "12px", color: "#b7e4c7", lineHeight: "1.5" }}>{texto}</div>
            </div>
          ))}
        </div>
      ))}
    </div>
  );
}

function COSECHA_EXT() {
  return (
    <div>
      <InfoBox>
        El proceso de secado y curado es idéntico al cultivo interior. La única diferencia es la logística previa — cosechar en el bosque y transportar de forma discreta. No te precipites: la cosecha antes de tiempo puede reducir el rendimiento un 30-40%.
      </InfoBox>

      <SectionTitle>CUÁNDO COSECHAR — LOS INDICADORES</SectionTitle>
      <Step num={1} text="Lupa 60x sobre los tricomas de los cogollos (no de las hojas) — el único indicador fiable." why="El calendario es orientativo. Los tricomas son la realidad. Sin lupa estás adivinando el momento más importante de todo el cultivo." />
      <Step num={2} text="Tricomas transparentes → aún no. Necesita más tiempo." />
      <Step num={3} text="Tricomas blancos lechosos (turbios) → punto óptimo. Efecto más activo y equilibrado." />
      <Step num={4} text="Tricomas ámbar → efecto más sedante y corporal. Muchos ámbar = al límite, cosecha ya." />
      <Step num={5} text="Para primera cosecha: busca 70-80% lechosos con alguno ámbar." />
      <Step num={6} text="Con lluvia prevista y 60% lechosos: cosecha ya. Mejor perder algo de potencial que perder todo por moho." why="En exterior el clima manda. Una semana de lluvia en octubre puede destruir la cosecha entera. El pragmatismo es parte del cultivo exterior." />

      <SectionTitle>SEÑALES ADICIONALES DE MADUREZ</SectionTitle>
      {[
        "Los pistilos (pelos) han cambiado de blanco a naranja/marrón en un 70-80% del cogollo.",
        "Las hojas grandes (fan leaves) empiezan a amarillear y caer — la planta está usando sus reservas.",
        "El olor es muy intenso y característico de la variedad.",
        "Los cogollos han dejado de crecer en tamaño y se han vuelto más densos y duros.",
      ].map((item, i) => (
        <div key={i} style={{ display: "flex", gap: "10px", background: "#0d1f14", border: "1px solid #1b4332", borderRadius: "8px", padding: "10px 12px", marginBottom: "6px" }}>
          <div style={{ color: "#52b788", flexShrink: 0 }}>→</div>
          <div style={{ fontSize: "12px", color: "#b7e4c7", lineHeight: "1.5" }}>{item}</div>
        </div>
      ))}

      <SectionTitle>LOGÍSTICA EN EL BOSQUE</SectionTitle>
      <Step num={7} text="Cosecha de madrugada o al amanecer — menor temperatura, más resina, más discreción." why="La resina está más concentrada con temperaturas frescas. Las madrugadas tienen menos movimiento de personas en el bosque." />
      <Step num={8} text="Material necesario: mochila grande, bolsas herméticas dobles, tijeras limpias, guantes de nitrilo, bolsas de basura para restos." />
      <Step num={9} text="Quita las hojas grandes (fan leaves) en el spot antes de meter en las bolsas — reduce el volumen y el olor." />
      <Step num={10} text="Corta rama a rama. Mete en bolsa hermética inmediatamente al cortar." why="El olor en cosecha es muy intenso. Las bolsas herméticas contienen el olor durante el transporte." />
      <Step num={11} text="Limpia el spot completamente al terminar — raíces, ramas, tierra removida. No dejes rastro visible." />

      <SectionTitle>SECADO</SectionTitle>
      <Step num={12} text="Cuelga las ramas boca abajo en un lugar oscuro, 18-20°C, 45-55% humedad. Airflow suave en la habitación pero sin ventilador apuntando directamente a las ramas." why="La oscuridad protege los cannabinoides. El aire directo seca el exterior demasiado rápido mientras el interior sigue húmedo — eso provoca moho dentro aunque por fuera parezca seco." />
      <Step num={13} text="Duración: 10-14 días habitualmente. En ambientes húmedos puede ser más." />
      <Step num={14} text="Test de secado: dobla una ramita fina. Si craquea limpiamente, está lista. Si se dobla sin romperse, necesita más tiempo." why="Este test detecta si el interior sigue húmedo — que es más lento que el exterior. Es más fiable que mirar el color o tocar el cogollo." />

      <SectionTitle>MANICURA Y CURADO</SectionTitle>
      <Step num={15} text="Recorta las hojas pequeñas (sugarleaves) que rodean cada cogollo con tijeras de punta fina. Limpia las tijeras con alcohol cada 15 minutos." />
      <Step num={16} text="Guarda los recortes (trim) — sirven para hacer extractos, aceite o mantequilla." />
      <Step num={17} text="Mete los cogollos en botes Mason jar herméticos al 75% de capacidad. Un higrómetro dentro de cada bote." why="Muy llenos: la humedad no circula. Muy vacíos: se secan en exceso en el bote." />
      <Step num={18} text="Primeras 2 semanas: abre los botes 15 minutos al día (burping) para liberar humedad residual." why="El material sigue liberando humedad aunque parezca seco. Sin burping aparece moho en el bote y pierdes la cosecha en los últimos días." />
      <Step num={19} text="Humedad objetivo dentro del bote: 58-65%. Si supera el 70%, deja el bote abierto 1-2 horas. Si baja del 55%, cierra y no abras hasta mañana." />
      <Step num={20} text="Mínimo 2 semanas de curado. 4 semanas es notablemente mejor. 8 semanas es lo ideal." why="El curado no es esperar. Ocurren reacciones químicas que descomponen la clorofila (sabor vegetal amargo) y desarrollan los terpenos (aroma y sabor final). No hay atajos." />

      <SectionTitle color="#e63946">🚫 ERRORES EN COSECHA Y CURADO</SectionTitle>
      <ErrorCard error="Cosechar demasiado pronto por impaciencia" consecuencia="Rendimiento reducido 30-40% y efecto muy inferior al potencial de la planta." fix="Lupa 60x siempre. Espera al 70-80% de tricomas lechosos." />
      <ErrorCard error="Esperar demasiado en octubre con riesgo de lluvia" consecuencia="La Botrytis puede destruir la cosecha entera en una semana de lluvia." fix="Con lluvia prevista y 60% lechosos: cosecha ya." />
      <ErrorCard error="Transportar sin bolsas herméticas" consecuencia="El olor en el coche es intensísimo. Muy poco discreto." fix="Bolsas herméticas dobles para el transporte. Siempre." />
      <ErrorCard error="Meter en bote antes de que esté bien seco" consecuencia="Moho en el curado. Pierdes toda la cosecha en los últimos días." fix="Test de la ramita sin excepción. Si dobla, espera más." />
      <ErrorCard error="No hacer el curado o acortarlo" consecuencia="Sabor vegetal, efecto brusco. Meses de trabajo con resultado pobre." fix="Mínimo 2 semanas. 4 semanas es la diferencia entre mediocre y excelente." />

      <SectionTitle>📦 CONSERVACIÓN — especialmente importante en exterior por el volumen</SectionTitle>
      <div style={{ background: "#162a1e", border: "1px solid #2d6a4f", borderRadius: "10px", padding: "14px", marginBottom: "12px" }}>
        <p style={{ margin: 0, fontSize: "12px", color: "#95d5b2", lineHeight: "1.6" }}>
          Una planta de fotoperiodo en exterior puede dar 200-500g. Es mucho más de lo que puedes consumir a corto plazo — la conservación correcta es esencial. Los cuatro enemigos: <span style={{ color: "#d8f3dc", fontWeight: "bold" }}>luz, oxígeno, humedad y calor</span>.
        </p>
      </div>
      {[
        { metodo: "🫙 Botes cristal herméticos", duracion: "6–12 meses", nota: "Método estándar post-curado. Humedad 58-65%, lugar oscuro y fresco (15-21°C). Suficiente para consumo habitual." },
        { metodo: "🔵 Envasado al vacío", duracion: "12–18 meses", nota: "Solo después del curado completo (4+ semanas). Congela 20-30 min antes de envasar para que los cogollos aguanten la presión sin aplastarse y romper tricomas." },
        { metodo: "❄️ Congelación", duracion: "1–2 años", nota: "Para excedentes grandes. Los tricomas fríos son frágiles — no toques los cogollos congelados. Descongela siempre dentro del bote cerrado hasta temperatura ambiente antes de abrir." },
        { metodo: "🏆 Vacío + congelación", duracion: "2+ años", nota: "El mejor método para grandes volúmenes de exterior. Curado completo → congela 30 min → envasa al vacío → congelador. Para consumir: descongela sin abrir 2-3 horas." },
      ].map((m, i) => (
        <div key={i} style={{ background: "#0d1f14", border: "1px solid #1b4332", borderRadius: "8px", padding: "12px", marginBottom: "8px", display: "flex", gap: "12px", justifyContent: "space-between" }}>
          <div>
            <div style={{ fontSize: "13px", color: "#d8f3dc", fontWeight: "bold", marginBottom: "4px" }}>{m.metodo}</div>
            <div style={{ fontSize: "12px", color: "#74c69d", lineHeight: "1.5" }}>{m.nota}</div>
          </div>
          <div style={{ fontSize: "11px", color: "#52b788", fontWeight: "bold", flexShrink: 0 }}>{m.duracion}</div>
        </div>
      ))}
    </div>
  );
}

