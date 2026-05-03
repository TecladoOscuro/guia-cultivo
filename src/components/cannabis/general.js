// Cannabis general/shared components (works for interior + exterior)

function MIS_SEMILLAS() {
  const semillas = [
    {
      nombre: "Strawberry Banana Auto",
      marca: "FastBuds",
      tipo: "Autofloreciente",
      cantidad: "1 semilla",
      genetica: "70% indica / 30% sativa",
      thc: "25%",
      cbd: "<1%",
      altura_indoor: "80–120cm",
      altura_outdoor: "80–150cm",
      ciclo: "8–9 semanas desde semilla",
      rendimiento_indoor: "400–600g/m²",
      rendimiento_outdoor: "50–200g/planta",
      efecto: "Relajante y eufórico. Cuerpo y mente. Sabor intenso a fresa madura y plátano dulce.",
      color: "#e63946",
      donde: "🏠 Interior (prioritario) · 🌲 Exterior posible",
      notas_indoor: [
        "Puede crecer bastante para ser auto — hasta 120cm. Aplica LST desde semana 2-3 para mantenerla en rango.",
        "Muy aromática durante la floración — asegúrate de que el filtro de carbón esté bien sellado.",
        "Produce mucha resina — las tijeras se pegarán rápido en la cosecha. Alcohol isopropílico a mano.",
        "Ciclo algo más largo que otras autos — no la coseches antes de tiempo. Espera a los tricomas.",
        "Responde muy bien al LST — con buena técnica puede doblar el rendimiento esperado.",
      ],
      notas_outdoor: [
        "En exterior puede desarrollarse mucho más — hasta 150cm en condiciones óptimas.",
        "Al ser auto, florece sola sin importar el ciclo de luz. Puedes plantarla en mayo y cosechar en julio.",
        "Resistencia media a hongos — vigila la Botrytis en septiembre si la dejas hasta entonces.",
        "Buen rendimiento en exterior mediterráneo. Más discreta en tamaño que el fotoperiodo.",
      ],
    },
    {
      nombre: "White Widow",
      marca: "Desconocida / Feminizada",
      tipo: "Fotoperiodo feminizada",
      cantidad: "3 semillas",
      genetica: "60% indica / 40% sativa",
      thc: "18–20%",
      cbd: "<1%",
      altura_indoor: "60–100cm",
      altura_outdoor: "100–150cm",
      ciclo: "8–9 semanas de floración (tras cambio a 12/12h)",
      rendimiento_indoor: "400–500g/m²",
      rendimiento_outdoor: "200–400g/planta",
      efecto: "Equilibrado y versátil. Eufórico y relajante. La clásica por excelencia — robusta y muy resistente.",
      color: "#95d5b2",
      donde: "🏠 Interior · 🌲 Exterior ambas válidas",
      notas_indoor: [
        "Fotoperiodo: NO florece sola. Cuando llegue a 40-50cm cambia el temporizador a 12h/12h.",
        "Muy robusta y resistente — perfecta para principiantes. Perdona errores de riego y nutrientes mejor que otras.",
        "Compacta para ser fotoperiodo — en 120×120 caben 4 plantas cómodamente con margen.",
        "Muy resinosa — los cogollos se cubren de tricomas blancos (de ahí el nombre). Fácil de saber cuándo cosechar.",
        "Tienes 3 semillas — germina 2 y guarda 1 de reserva. Si las dos funcionan bien, perfecto.",
      ],
      notas_outdoor: [
        "En exterior florece sola en agosto cuando los días se acortan. No tienes que hacer nada.",
        "Excelente para exterior mediterráneo — resistente al moho y las plagas.",
        "Puede llegar a 150cm en exterior con buena vegetativa. Pon tutores en agosto.",
        "Cosecha en octubre. Con suerte antes de las lluvias fuertes.",
        "La más recomendada de tus semillas para el bosque — robustez y rendimiento garantizados.",
      ],
    },
    {
      nombre: "Zkittlez OG Auto",
      marca: "Barney's Farm",
      tipo: "Autofloreciente",
      cantidad: "Muestra exclusiva (1–3 semillas)",
      genetica: "Indica dominante",
      thc: "22–24%",
      cbd: "<1%",
      altura_indoor: "70–100cm",
      altura_outdoor: "80–130cm",
      ciclo: "8–9 semanas desde semilla",
      rendimiento_indoor: "450–550g/m²",
      rendimiento_outdoor: "50–150g/planta",
      efecto: "Muy relajante y sedante. Sabor afrutado intenso a caramelo y frutos del bosque.",
      color: "#f4a261",
      donde: "🏠 Interior (ideal) · 🌲 Exterior posible",
      notas_indoor: [
        "Barney's Farm hace semillas de primera calidad — esta muestra es premium.",
        "Tamaño compacto y manejable — ideal para el 120×120 sin necesidad de LST agresivo.",
        "Como es muestra exclusiva, tienes pocas semillas — germínala cuando ya tengas experiencia de una cosecha anterior.",
        "Muy alta producción de resina — cogollos densos y muy aromáticos en floración.",
        "El sabor final mejora mucho con curado largo — mínimo 4 semanas para esta variedad.",
      ],
      notas_outdoor: [
        "Al ser auto, florece sola. Puedes plantarla en mayo para cosechar en julio.",
        "Tamaño discreto — buena opción si el spot tiene restricciones de altura o visibilidad.",
        "Resistencia media — vigila bien en septiembre si hay humedad nocturna alta.",
      ],
    },
    {
      nombre: "Watermelon Zkittlez Auto",
      marca: "Barney's Farm",
      tipo: "Autofloreciente",
      cantidad: "Muestra exclusiva (1–3 semillas)",
      genetica: "Indica dominante",
      thc: "22%",
      cbd: "<1%",
      altura_indoor: "70–100cm",
      altura_outdoor: "80–120cm",
      ciclo: "8–9 semanas desde semilla",
      rendimiento_indoor: "400–500g/m²",
      rendimiento_outdoor: "50–130g/planta",
      efecto: "Relajante y sedante. Sabor a sandía fresca y frutas tropicales muy marcado.",
      color: "#52b788",
      donde: "🏠 Interior (ideal) · 🌲 Exterior posible",
      notas_indoor: [
        "Hermana de la Zkittlez OG — misma calidad Barney's Farm pero con perfil de sandía.",
        "Muy aromática durante la floración — una de las más llamativas en olor. Filtro de carbón imprescindible.",
        "Compacta y manejable en el 120×120.",
        "Como la Zkittlez OG, guárdala para cuando ya tengas experiencia — es una semilla premium para aprovecharla bien.",
        "El curado largo (4-6 semanas) hace que el sabor a sandía se exprese al máximo.",
      ],
      notas_outdoor: [
        "Discreta en tamaño — buena para spots con poca altura disponible.",
        "Mismas consideraciones que la Zkittlez OG en exterior.",
      ],
    },
  ];

  return (
    <div>
      <InfoBox>
        Estas son las semillas que tienes actualmente. Para cada una encontrarás sus características reales, notas específicas para cultivo indoor y outdoor, y recomendaciones sobre cuándo y cómo usarlas según tu nivel de experiencia.
      </InfoBox>

      <div style={{ background: "#1a2a10", border: "1px solid #4a7a20", borderRadius: "10px", padding: "14px", marginBottom: "20px" }}>
        <div style={{ fontSize: "10px", letterSpacing: "2px", color: "#74c69d", marginBottom: "10px" }}>ORDEN RECOMENDADO DE USO</div>
        {[
          { num: "1ª", semilla: "White Widow (fotoperiodo)", cuando: "Cuando tengas el armario listo. Tienes 3 semillas — margen para aprender.", porq: "La más robusta y que más perdona errores. Ideal para primera cosecha." },
          { num: "2ª", semilla: "Strawberry Banana Auto (FastBuds)", cuando: "Segunda o tercera cosecha.", porq: "Autofloreciente de alta calidad. Más sencilla pero algo más exigente que la White Widow." },
          { num: "3ª", semilla: "Zkittlez OG Auto o Watermelon Zkittlez (Barney's Farm)", cuando: "Cuando ya controles el proceso.", porq: "Son muestras exclusivas — pocas semillas sin segunda oportunidad. Aprovéchalas con experiencia." },
        ].map((r, i) => (
          <div key={i} style={{ display: "flex", gap: "12px", padding: "8px 0", borderBottom: i < 2 ? "1px solid #1b4332" : "none" }}>
            <div style={{ fontSize: "14px", fontWeight: "bold", color: "#52b788", flexShrink: 0, width: "28px" }}>{r.num}</div>
            <div>
              <div style={{ fontSize: "13px", color: "#d8f3dc", marginBottom: "3px" }}>{r.semilla}</div>
              <div style={{ fontSize: "11px", color: "#52b788", marginBottom: "2px" }}>Cuándo: {r.cuando}</div>
              <div style={{ fontSize: "11px", color: "#74c69d" }}>Por qué: {r.porq}</div>
            </div>
          </div>
        ))}
      </div>

      {semillas.map((s, i) => (
        <div key={i} style={{ background: "#0d1f14", border: `1px solid ${s.color}33`, borderLeft: `4px solid ${s.color}`, borderRadius: "12px", padding: "16px", marginBottom: "20px" }}>
          <div style={{ marginBottom: "12px" }}>
            <div style={{ fontSize: "16px", fontWeight: "bold", color: "#d8f3dc", marginBottom: "3px" }}>{s.nombre}</div>
            <div style={{ fontSize: "11px", color: s.color, marginBottom: "2px" }}>{s.marca} · {s.tipo} · {s.cantidad}</div>
            <div style={{ fontSize: "12px", color: "#74c69d" }}>{s.donde}</div>
          </div>

          <div style={{ display: "grid", gridTemplateColumns: "1fr 1fr", gap: "6px", marginBottom: "12px" }}>
            {[["Genética", s.genetica], ["THC", s.thc], ["Altura indoor", s.altura_indoor], ["Altura outdoor", s.altura_outdoor], ["Ciclo", s.ciclo], ["Rend. indoor", s.rendimiento_indoor]].map(([k, v]) => (
              <div key={k} style={{ fontSize: "11px" }}>
                <span style={{ color: "#40916c" }}>{k}: </span>
                <span style={{ color: "#95d5b2" }}>{v}</span>
              </div>
            ))}
          </div>

          <div style={{ background: "#162a1e", borderRadius: "8px", padding: "10px 12px", marginBottom: "12px" }}>
            <div style={{ fontSize: "11px", color: s.color, marginBottom: "3px" }}>Efecto y sabor</div>
            <div style={{ fontSize: "12px", color: "#95d5b2", lineHeight: "1.5" }}>{s.efecto}</div>
          </div>

          <div style={{ marginBottom: "10px" }}>
            <div style={{ fontSize: "10px", letterSpacing: "2px", color: "#52b788", marginBottom: "8px" }}>🏠 NOTAS PARA INDOOR</div>
            {s.notas_indoor.map((n, j) => (
              <div key={j} style={{ display: "flex", gap: "8px", marginBottom: "6px" }}>
                <div style={{ color: s.color, flexShrink: 0, fontSize: "12px" }}>→</div>
                <div style={{ fontSize: "12px", color: "#b7e4c7", lineHeight: "1.5" }}>{n}</div>
              </div>
            ))}
          </div>

          <div>
            <div style={{ fontSize: "10px", letterSpacing: "2px", color: "#74c69d", marginBottom: "8px" }}>🌲 NOTAS PARA OUTDOOR</div>
            {s.notas_outdoor.map((n, j) => (
              <div key={j} style={{ display: "flex", gap: "8px", marginBottom: "6px" }}>
                <div style={{ color: "#74c69d", flexShrink: 0, fontSize: "12px" }}>→</div>
                <div style={{ fontSize: "12px", color: "#95d5b2", lineHeight: "1.5" }}>{n}</div>
              </div>
            ))}
          </div>
        </div>
      ))}
    </div>
  );
}


function COSECHA() {
  return (
    <div>
      <div style={{ display: "grid", gridTemplateColumns: "1fr 1fr", gap: "10px", marginBottom: "20px" }}>
        <StatBox label="Secado" value="10–14 días" />
        <StatBox label="Temp. secado" value="18–20°C" />
        <StatBox label="Humedad secado" value="45–55%" />
        <StatBox label="Curado mínimo" value="2–4 semanas" />
      </div>

      <InfoBox>
        Cosechar = cortar la planta cuando los <GlossaryLink guide="cannabis" term="Tricoma">tricomas</GlossaryLink> están en su punto óptimo. Antes de cortar haz <GlossaryLink guide="cannabis" term="Lavado de raíces">lavado de raíces</GlossaryLink> los últimos 10-14 días. Después: <GlossaryLink guide="cannabis" term="Secado">secado</GlossaryLink> + <GlossaryLink guide="cannabis" term="Curado">curado</GlossaryLink> + <GlossaryLink guide="cannabis" term="Manicura / Trim">manicura</GlossaryLink>.
      </InfoBox>

      <SectionTitle>EL DÍA DE LA COSECHA</SectionTitle>
      <Step num={1} text="48h antes de cortar: apaga la luz y déjala en oscuridad total." why="Muchos growers lo hacen creyendo que dispara la producción de resina en las últimas horas. No está 100% demostrado, pero no cuesta nada y muchos ven mejoras. Es el último empujón antes de cosechar." />
      <Step num={2} text="Ponte guantes de nitrilo antes de tocar los cogollos." why="La resina es muy pegajosa y difícil de quitar de la piel. Además, el calor de las manos puede degradarla." />
      <Step num={3} text="Corta la planta a nivel del sustrato con tijeras limpias. Puedes cortar entera o rama a rama." />
      <Step num={4} text="Quita las hojas grandes (fan leaves, las hojas grandes sin resina) con los dedos o tijeras." why="Tienen poco valor, ralentizan el secado y si las dejas pueden acumular humedad. Las hojas pequeñas que rodean los cogollos se dejan para la manicura posterior." />

      <SectionTitle>EL SECADO</SectionTitle>
      <Step num={5} text="Cuelga las ramas boca abajo en un lugar oscuro, 18–20°C, 45–55% humedad. Airflow suave en la habitación pero sin ventilador apuntando directamente." why="La oscuridad protege los cannabinoides de la degradación por la luz. El aire directo seca el exterior demasiado rápido mientras el interior sigue húmedo — eso provoca moho dentro del cogollo aunque por fuera parezca seco." />
      <Step num={6} text="No toques ni muevas las ramas durante el secado." />
      <Step num={7} text="TEST de secado listo: coge una ramita fina. Dóblala. Si craquea (se parte limpio y seco), está lista. Si se dobla sin romperse, necesita más tiempo." why="Este test es más fiable que mirar el color o tocar el cogollo con los dedos. El interior seca más lento que el exterior y este test lo detecta perfectamente." />
      <Step num={8} text="Duración habitual: 10–14 días. En julio con calor puede ser algo menos." />

      <SectionTitle>LA MANICURA</SectionTitle>
      <Step num={9} text="Una vez seco, recorta con tijeras de punta fina las hojas pequeñas que rodean cada cogollo (sugarleaves)." why="Son material de menor calidad. Retirarlas mejora el aspecto, el sabor y la experiencia final." />
      <Step num={10} text="Guarda los recortes (trim) aparte en una bolsa. Sirven para hacer aceite, mantequilla u otros usos." />

      <SectionTitle>EL CURADO — EL PASO QUE MÁS DIFERENCIA EL RESULTADO</SectionTitle>
      <Step num={11} text="Mete los cogollos en botes de cristal herméticos (Mason jars). Llénalos al 75%." why="Muy llenos: la humedad no circula bien. Muy vacíos: se seca demasiado rápido en el bote." />
      <Step num={12} text="Pon un higrómetro pequeño dentro de cada bote." why="La humedad dentro del bote debe estar entre 58–65%. Sin higrómetro estás completamente a ciegas." />
      <Step num={13} text="Las primeras 2 semanas: abre cada bote 15 minutos al día. Se llama 'burping'." why="El material sigue liberando humedad residual después de parecer seco. Si no la liberas, se acumula y aparece moho aunque el cogollo pareciera listo al meterlo." />
      <Step num={14} text="Si el higrómetro marca más de 70%: deja el bote abierto 1–2 horas. Si marca menos de 55%: ciérralo hasta mañana." />
      <Step num={15} text="Mínimo 2 semanas de curado. 4 semanas es notablemente mejor. 8 semanas es lo ideal." why="El curado no es solo esperar. Durante ese tiempo ocurren reacciones químicas que descomponen la clorofila (que da sabor vegetal amargo) y desarrollan los terpenos (el aroma y sabor final). No hay atajos posibles." />

      <SectionTitle color="#e63946">🚫 ERRORES QUE CUESTAN GRAMOS</SectionTitle>
      <ErrorCard error="Secar con ventilador directo encima de las ramas" consecuencia="Exterior seco, interior húmedo. Moho invisible dentro del cogollo." fix="Airflow indirecto. El aire circula en la habitación pero no apunta a las ramas." />
      <ErrorCard error="Meter en bote antes de hacer el test de la ramita" consecuencia="Moho en el curado. Pierdes toda la cosecha después de meses de trabajo, en los últimos días." fix="Test de la ramita sin excepción. Si dobla sin romperse, espera más días." />
      <ErrorCard error="Saltarse el curado o hacerlo solo 3–4 días" consecuencia="Sabor vegetal, efecto brusco. Todo el trabajo de meses con un resultado pobre." fix="El curado es parte del cultivo, no un extra. 2 semanas mínimo, 4 ideal." />
      <ErrorCard error="No hacer burping diario las primeras semanas" consecuencia="Moho en el bote. Todo perdido en la recta final." fix="15 minutos al día abriendo el bote. Con el higrómetro dentro sabes exactamente qué pasa." />

      <SectionTitle>📦 CONSERVACIÓN A LARGO PLAZO</SectionTitle>
      <div style={{ background: "#162a1e", border: "1px solid #2d6a4f", borderRadius: "10px", padding: "14px", marginBottom: "12px" }}>
        <p style={{ margin: "0 0 8px", fontSize: "12px", color: "#95d5b2", lineHeight: "1.6" }}>
          Los cuatro enemigos del producto son: <span style={{ color: "#d8f3dc", fontWeight: "bold" }}>luz, oxígeno, humedad y calor</span>. Cualquier método de conservación busca eliminar alguno de estos cuatro factores.
        </p>
      </div>

      {[
        {
          metodo: "🫙 Botes de cristal herméticos + oscuridad",
          duracion: "6–12 meses",
          color: "#52b788",
          recomendado: "✅ Método estándar",
          pasos: [
            "Botes Mason jar de cristal al 75% de capacidad, humedad interior 58-65%, lugar oscuro y fresco.",
            "La luz UV degrada los cannabinoides — no uses botes transparentes en zonas con luz. Los de cristal ámbar o guardarlos en caja oscura.",
            "Temperatura ideal: 15-21°C. Por encima de 25°C los terpenos se evaporan y el producto pierde aroma.",
            "Con estas condiciones mantienes calidad completa hasta 12 meses.",
          ],
        },
        {
          metodo: "🔵 Envasado al vacío",
          duracion: "12–18 meses",
          color: "#74c69d",
          recomendado: "✅ Recomendado para excedente",
          pasos: [
            "Elimina el oxígeno que oxida y degrada los cannabinoides. Extiende la vida útil considerablemente.",
            "IMPORTANTE: solo después del curado completo (mínimo 4 semanas). Si envásas al vacío antes de que el curado haya terminado, el proceso se interrumpe.",
            "Problema: las máquinas de vacío domésticas pueden aplastar los cogollos y romper los tricomas. Solución: mete los cogollos en el congelador 20-30 minutos antes de envasar — se quedan rígidos y aguantan la presión sin aplastarse.",
            "Una vez envasado al vacío, guarda en lugar oscuro y fresco.",
          ],
        },
        {
          metodo: "❄️ Congelación",
          duracion: "1–2 años",
          color: "#95d5b2",
          recomendado: "⚠️ Solo para largo plazo — con precauciones",
          pasos: [
            "Funciona bien para conservación muy larga pero requiere cuidado. Los tricomas congelados son extremadamente frágiles — se rompen con el mínimo contacto y pierdes potencia.",
            "Nunca toques los cogollos cuando están fríos o recién sacados del congelador.",
            "Descongela siempre dentro del bote cerrado y hermético. Espera a temperatura ambiente antes de abrir. La condensación es el mayor riesgo — si el vapor de agua toca los cogollos directamente aparece moho.",
            "No congeles y descongeles repetidamente. Descongela solo lo que vayas a consumir próximamente.",
          ],
        },
        {
          metodo: "🏆 Vacío + congelación",
          duracion: "2+ años",
          color: "#d8f3dc",
          recomendado: "✅ Mejor método para largo plazo",
          pasos: [
            "La combinación más efectiva: sin oxígeno y sin temperatura. Mínima degradación posible.",
            "Proceso: curado completo (4+ semanas) → congelación 30 min para endurecer → envasado al vacío → congelador.",
            "Para consumir: saca del congelador, deja descongelar sin abrir 2-3 horas a temperatura ambiente, abre solo cuando el bote esté a temperatura ambiente.",
            "Ideal si tienes una cosecha exterior grande (200-500g) y no puedes consumirlo todo en 12 meses.",
          ],
        },
      ].map((m, i) => (
        <div key={i} style={{ background: "#0d1f14", border: `1px solid ${m.color}33`, borderLeft: `3px solid ${m.color}`, borderRadius: "10px", padding: "14px", marginBottom: "10px" }}>
          <div style={{ display: "flex", justifyContent: "space-between", alignItems: "flex-start", marginBottom: "8px" }}>
            <div style={{ fontSize: "14px", color: "#d8f3dc", fontWeight: "bold" }}>{m.metodo}</div>
            <div style={{ textAlign: "right", flexShrink: 0, marginLeft: "10px" }}>
              <div style={{ fontSize: "11px", color: m.color, fontWeight: "bold" }}>{m.duracion}</div>
              <div style={{ fontSize: "10px", color: "#74c69d", marginTop: "2px" }}>{m.recomendado}</div>
            </div>
          </div>
          {m.pasos.map((p, j) => (
            <div key={j} style={{ display: "flex", gap: "8px", marginBottom: "6px" }}>
              <div style={{ color: m.color, flexShrink: 0, fontSize: "11px" }}>{j + 1}.</div>
              <div style={{ fontSize: "12px", color: "#74c69d", lineHeight: "1.5" }}>{p}</div>
            </div>
          ))}
        </div>
      ))}

      <div style={{ background: "#1b4332", borderRadius: "10px", padding: "14px" }}>
        <div style={{ fontSize: "12px", color: "#d8f3dc", lineHeight: "1.6" }}>
          <span style={{ fontWeight: "bold" }}>Recomendación práctica: </span>
          Con 3 cosechas de interior al año (80-150g cada una) el consumo y producción suelen equilibrarse. Los botes de cristal bien curados son más que suficientes. Usa el vacío solo si acumulas más de lo que consumes, y la congelación solo para el excedente de una gran cosecha exterior.
        </div>
      </div>
    </div>
  );
}


function CONSERVACION() {
  return (
    <div>
      <InfoBox>
        Los cuatro enemigos del producto cosechado son: <span style={{ color: "#d8f3dc", fontWeight: "bold" }}>luz, oxígeno, humedad y calor</span>. Cualquier método de conservación busca eliminar alguno de estos cuatro factores. Esta sección aplica igual si has cultivado en interior o en exterior.
      </InfoBox>

      {[
        {
          metodo: "🫙 Botes de cristal herméticos + oscuridad",
          duracion: "6–12 meses",
          color: "#52b788",
          recomendado: "✅ Método estándar — lo que usarás normalmente",
          pasos: [
            "Botes Mason jar de cristal al 75% de capacidad, humedad interior 58-65%, lugar oscuro y fresco.",
            "La luz UV degrada los cannabinoides — guarda los botes en un cajón oscuro o en caja. Si los botes son transparentes, que no les dé luz directa.",
            "Temperatura ideal: 15-21°C. Por encima de 25°C los terpenos se evaporan y el producto pierde aroma y sabor.",
            "Con estas condiciones mantienes calidad completa hasta 12 meses.",
          ],
        },
        {
          metodo: "🔵 Envasado al vacío",
          duracion: "12–18 meses",
          color: "#74c69d",
          recomendado: "✅ Recomendado para guardar excedente",
          pasos: [
            "Elimina el oxígeno que oxida y degrada los cannabinoides. Extiende la vida útil considerablemente.",
            "IMPORTANTE: solo después del curado completo (mínimo 4 semanas). Si envasas antes de terminar el curado, el proceso se interrumpe.",
            "Problema: las máquinas de vacío domésticas pueden aplastar los cogollos y romper los tricomas. Solución: mete los cogollos en el congelador 20-30 minutos antes — se quedan rígidos y aguantan la presión sin aplastarse.",
            "Una vez envasado al vacío, guarda en lugar oscuro y fresco.",
          ],
        },
        {
          metodo: "❄️ Congelación",
          duracion: "1–2 años",
          color: "#95d5b2",
          recomendado: "⚠️ Solo para largo plazo — con precauciones",
          pasos: [
            "Los tricomas congelados son extremadamente frágiles — se rompen con el mínimo contacto y pierdes potencia. Nunca toques los cogollos cuando están fríos.",
            "Descongela siempre dentro del bote cerrado y hermético. Espera a temperatura ambiente antes de abrir. La condensación es el mayor riesgo — el vapor de agua sobre los cogollos puede causar moho.",
            "No congeles y descongeles repetidamente. Solo descongela lo que vayas a consumir pronto.",
          ],
        },
        {
          metodo: "🏆 Vacío + congelación",
          duracion: "2+ años",
          color: "#d8f3dc",
          recomendado: "✅ El mejor método para grandes cosechas de exterior",
          pasos: [
            "La combinación más efectiva: sin oxígeno y sin temperatura. Mínima degradación posible.",
            "Proceso: curado completo (4+ semanas) → congela 30 min para endurecer → envasa al vacío → congelador.",
            "Para consumir: saca del congelador, deja descongelar sin abrir 2-3 horas a temperatura ambiente, abre solo cuando el bote esté a temperatura ambiente.",
            "Ideal si tienes una cosecha exterior grande (200-500g) y no puedes consumirla en 12 meses.",
          ],
        },
      ].map((m, i) => (
        <div key={i} style={{ background: "#0d1f14", border: `1px solid ${m.color}33`, borderLeft: `3px solid ${m.color}`, borderRadius: "10px", padding: "14px", marginBottom: "12px" }}>
          <div style={{ display: "flex", justifyContent: "space-between", alignItems: "flex-start", marginBottom: "8px" }}>
            <div style={{ fontSize: "14px", color: "#d8f3dc", fontWeight: "bold" }}>{m.metodo}</div>
            <div style={{ textAlign: "right", flexShrink: 0, marginLeft: "10px" }}>
              <div style={{ fontSize: "11px", color: m.color, fontWeight: "bold" }}>{m.duracion}</div>
            </div>
          </div>
          <div style={{ fontSize: "11px", color: m.color, marginBottom: "10px" }}>{m.recomendado}</div>
          {m.pasos.map((p, j) => (
            <div key={j} style={{ display: "flex", gap: "8px", marginBottom: "6px" }}>
              <div style={{ color: m.color, flexShrink: 0, fontSize: "11px" }}>{j + 1}.</div>
              <div style={{ fontSize: "12px", color: "#74c69d", lineHeight: "1.5" }}>{p}</div>
            </div>
          ))}
        </div>
      ))}

      <div style={{ background: "#1b4332", borderRadius: "10px", padding: "14px" }}>
        <div style={{ fontSize: "12px", color: "#d8f3dc", lineHeight: "1.6" }}>
          <span style={{ fontWeight: "bold" }}>Recomendación práctica: </span>
          Con 3 cosechas de interior al año los botes de cristal herméticos son más que suficientes. Usa el vacío solo si acumulas más de lo que consumes. La congelación solo para el excedente de una gran cosecha exterior.
        </div>
      </div>
    </div>
  );
}

function CONCEPTOS() {
  const categories = [
    {
      cat: "🌿 TÉCNICAS DE CULTIVO",
      color: "#52b788",
      terms: [
        { term: "LST (Low Stress Training)", def: "Técnica de doblar las ramas de la planta hacia fuera y fijarlas con clips o cuerdas para que crezca en forma de abanico horizontal en vez de vertical. El objetivo es que la luz llegue a más puntos de la planta al mismo tiempo, aumentando el rendimiento. Se hace en vegetativa, semana 2-3, cuando las ramas aún son flexibles. No se corta nada — solo se doblan y sujetan. Es la técnica más recomendada para principiantes porque si la haces mal, la planta simplemente vuelve a su posición.", visual: "🌿→📐 Planta vertical → Planta en abanico horizontal" },
        { term: "Topping", def: "Cortar la punta principal de la planta para que en vez de un solo cola principal crezcan dos. Genera más cogollos pero estresa a la planta — no recomendado para autoflorecientes ni para principiantes.", visual: "✂️ Corte en la punta → 2 ramas principales" },
        { term: "FIM", def: "Similar al topping pero pellizcando en vez de cortando limpiamente. Genera 4 puntas en vez de 2. Técnica avanzada — no recomendada para empezar.", visual: null },
        { term: "Defoliación", def: "Quitar hojas grandes que hacen sombra a los cogollos que están creciendo debajo. Solo 2-3 hojas por sesión máximo, con días de descanso entre sesiones. Solo en vegetativa o inicio de floración, nunca en floración avanzada.", visual: null },
        { term: "SOG (Sea of Green)", def: "Poner muchas plantas pequeñas juntas para que formen un 'mar verde' uniforme. Técnica para maximizar rendimiento en poco espacio. No recomendada para empezar.", visual: null },
        { term: "ScrOG (Screen of Green)", def: "Poner una red horizontal sobre las plantas y pasar las ramas por los agujeros para tener una capa uniforme de cogollos a la misma altura. Maximiza el uso de la luz. Técnica intermedia.", visual: null },
        { term: "Acolchado / Mulching", def: "Cubrir el suelo alrededor de la planta con hojas secas, corteza o hierba. Retiene la humedad del suelo evitando que el calor la evapore. En exterior reduce el riego a la mitad en verano. Coste cero — usas lo que hay en el bosque.", visual: null },
      ]
    },
    {
      cat: "🌱 LA PLANTA",
      color: "#74c69d",
      terms: [
        { term: "Vegetativa (fase)", def: "La primera etapa de vida de la planta. Solo crece en tamaño — raíces, tallo y hojas. No hay cogollos todavía. En interior con luz 18h/6h. En autoflorecientes dura 3-4 semanas. En fotoperiodo dura hasta que cambias el ciclo de luz.", visual: null },
        { term: "Floración (fase)", def: "La segunda etapa, cuando la planta deja de crecer en altura y empieza a producir cogollos. En autoflorecientes empieza sola a los 30-35 días. En fotoperiodo empieza cuando cambias el temporizador a 12h/12h.", visual: null },
        { term: "Autofloreciente", def: "Variedad que florece sola según su edad, sin importar las horas de luz. Ciclo corto de 70-80 días desde semilla. Perfecta para principiantes. No puedes controlar cuándo florece.", visual: null },
        { term: "Fotoperiodo", def: "Variedad que solo florece cuando cambias el temporizador a 12h de luz / 12h de oscuridad. Tú decides cuándo empieza a florecer. Más producción pero más compleja. Tus White Widow son fotoperiodo.", visual: null },
        { term: "Feminizada", def: "Semilla modificada para producir solo plantas hembra (las que dan cogollos). Sin feminizar, el 50% de plantas serían macho y no producirían cogollos. Todas tus semillas son feminizadas.", visual: null },
        { term: "Pistilo", def: "Los pelos blancos que aparecen en la planta cuando empieza a florecer. Al principio son blancos y se van volviendo naranjas/marrones conforme madura. Cuando el 70-80% son naranjas, la cosecha se acerca.", visual: "🔍 Pelo blanco fino que sale de los nudos de la planta" },
        { term: "Tricoma", def: "Las pequeñas 'gotitas' de resina que cubren los cogollos. Contienen los cannabinoides y terpenos. Su color indica el punto de madurez: transparentes = pronto, lechosos = óptimo, ámbar = maduro.", visual: "🔬 Necesitas lupa 60x para verlos bien" },
        { term: "Cola / Cogollo", def: "La flor de la planta hembra. Es lo que se cosecha y cura. Se forma durante la fase de floración.", visual: null },
        { term: "Cotiledones", def: "Las dos primeras hojitas redondeadas que salen cuando la semilla germina. No parecen cannabis — son redondas y simples. Son normales. Las hojas características aparecen a partir del día 5-7.", visual: "🌱 Las dos primeras hojas redondeadas = normales" },
        { term: "Fan leaves", def: "Las hojas grandes y características de la planta. No tienen resina. Se retiran en la cosecha porque no tienen valor y ralentizan el secado.", visual: null },
        { term: "Sugarleaves", def: "Las hojas pequeñas que rodean los cogollos, cubiertas de resina (tricomas). Se recortan en la manicura post-cosecha. Sirven para hacer extractos o mantequilla.", visual: null },
        { term: "Nudo", def: "El punto del tallo donde sale una rama. En floración, los pistilos aparecen primero en los nudos. Cuantos más nudos tiene una planta, más potencial de producción.", visual: null },
        { term: "Ápice", def: "La punta más alta de la planta. La que crece hacia la luz. Es el punto de referencia para medir la distancia entre la planta y el LED.", visual: "☝️ La punta más alta = ápice" },
        { term: "Radícula", def: "La primera raíz blanca que sale de la semilla cuando germina. Cuando mide 1-2cm es el momento de plantarla.", visual: "🌱 Raíz blanca que sale de la semilla" },
      ]
    },
    {
      cat: "🧪 NUTRIENTES Y SUSTRATO",
      color: "#95d5b2",
      terms: [
        { term: "Sustrato", def: "La tierra donde crece la planta. No es tierra de jardín normal — está formulado específicamente para cannabis con la estructura, pH y nutrientes adecuados. BioBizz Light Mix es el más recomendado para principiantes.", visual: null },
        { term: "Nutrientes / Fertilizantes", def: "Los 'alimentos' que le das a la planta diluidos en el agua de riego. Los básicos son nitrógeno (N) para crecer y fósforo-potasio (P-K) para florecer. Bio Grow = crecimiento, Bio Bloom = floración.", visual: null },
        { term: "pH", def: "Medida de acidez del agua en escala del 1 al 14. 7 es neutro. Las plantas en sustrato necesitan que el agua esté entre 6.0 y 6.8 para poder absorber los nutrientes. Fuera de ese rango, los nutrientes están ahí pero la planta no puede tomarlos — como tener comida en un bote con tapa.", visual: "💧 pH 6.0-6.8 = agua correcta para regar" },
        { term: "pH Down", def: "Líquido ácido que añades al agua para bajar el pH. El agua del grifo suele estar en pH 7-8. Unas pocas gotas llevan el agua al rango correcto.", visual: null },
        { term: "pHmetro", def: "Aparato digital que metes en el agua y te dice exactamente el pH. Imprescindible — sin él cultivas a ciegas.", visual: "📏 Aparato pequeño con pantalla y punta metálica" },
        { term: "EC / TDS", def: "Medida de la concentración de sales minerales (nutrientes) en el agua. A mayor EC, más nutrientes. Herramienta avanzada — no imprescindible para empezar con sustratos.", visual: null },
        { term: "Lavado de raíces", def: "Los últimos 10-14 días antes de cosechar, dejas de dar nutrientes y solo riegas con agua con pH correcto. La planta consume sus propias reservas y el producto final tiene mejor sabor. Sin lavado, los cogollos saben a químico.", visual: null },
        { term: "Quemar (plantas)", def: "Cuando das demasiados nutrientes y las raíces se 'queman' por el exceso de sales. Síntoma: puntas de hojas marrones. La solución es reducir la dosis, no añadir más.", visual: "🍂 Puntas de hojas marrones = exceso de nutrientes" },
        { term: "Cepellón", def: "El bloque compacto de tierra con raíces que se forma dentro de la maceta. En el trasplante hay que sacarlo intacto para no dañar las raíces.", visual: null },
      ]
    },
    {
      cat: "🏠 SETUP E INSTALACIÓN",
      color: "#b7e4c7",
      terms: [
        { term: "Armario de cultivo / Tienda", def: "La estructura de tela reflectante donde viven las plantas. Interior reflectante para aprovechar la luz. Con cremalleras, aperturas para tubos y cables. Se monta con varillas metálicas.", visual: null },
        { term: "LED", def: "Tipo de iluminación de bajo consumo para cultivo. El estándar actual — más eficiente que las lámparas de sodio antiguas (HPS). Genera menos calor por watt de luz producido.", visual: null },
        { term: "HPS (High Pressure Sodium)", def: "Tipo de iluminación antigua de sodio de alta presión. Más calor y más consumo que LED para el mismo resultado. Aún muy usada pero en retirada.", visual: null },
        { term: "Extractor", def: "Ventilador en línea que aspira el aire del interior del armario y lo expulsa hacia el exterior. Crea la presión negativa y controla la temperatura y humedad. Siempre conectado al filtro de carbón para eliminar el olor.", visual: "💨 Aspirador de aire que va conectado al filtro" },
        { term: "Extractor en línea (TT)", def: "El tipo correcto de extractor para uso con filtro de carbón. Cilíndrico, se instala en el tubo entre el filtro y la salida al exterior. Compatible con filtros anti-olor.", visual: null },
        { term: "Extractor helicoidal", def: "Tipo de ventilador barato que NO es compatible con filtro de carbón. Si el kit lo incluye, el sistema anti-olor no funcionará correctamente.", visual: "❌ No sirve para control de olores" },
        { term: "Filtro de carbón", def: "Cilindro relleno de carbón activo que absorbe las moléculas de olor antes de que el aire salga al exterior. Dura 12-18 meses. El elemento más importante para el control de olores.", visual: "🛢️ Cilindro negro que va dentro del armario en la parte alta" },
        { term: "Presión negativa", def: "Estado del armario cuando el extractor aspira más de lo que entra por las aperturas inferiores. Las paredes del armario se 'chupan' ligeramente hacia dentro. Significa que todo el aire sale por el filtro.", visual: "📦 Paredes hundidas hacia dentro = correcto" },
        { term: "Temporizador", def: "Enchufe programable que enciende y apaga la luz automáticamente. Se programa con el ciclo de luz deseado: 18/6h para vegetativa, 12/12h para forzar floración en fotoperiodo.", visual: null },
        { term: "Higrómetro", def: "Aparato que mide la humedad relativa del ambiente y la temperatura. Se coloca a la altura de las plantas dentro del armario.", visual: "📊 Pantalla pequeña con temperatura y % de humedad" },
        { term: "Controlador de clima", def: "Aparato que regula automáticamente la velocidad del extractor según la temperatura y/o humedad. Mantiene el clima del armario estable sin que tengas que ajustar nada manualmente.", visual: null },
        { term: "Polea de cuerda", def: "Sistema de cuerda con trinquete que se engancha al techo del armario para colgar el LED. Permite subir y bajar la luz fácilmente según crece la planta.", visual: "🪝 Cuerda con trinquete para regular la altura del LED" },
        { term: "Maceta de tela", def: "Maceta de material poroso que permite que el aire entre por los laterales. Las raíces se 'autopodán' al llegar al borde — la planta desarrolla más raíces secundarias y crece mejor que en maceta de plástico.", visual: null },
        { term: "Setup", def: "Todo el conjunto de equipamiento instalado y configurado. Cuando alguien dice 'mi setup' se refiere a su armario con todo lo que lleva.", visual: null },
      ]
    },
    {
      cat: "✂️ COSECHA Y CURADO",
      color: "#d8f3dc",
      terms: [
        { term: "Cosecha", def: "El momento de cortar la planta. Se hace cuando los tricomas están en el punto óptimo (70-80% lechosos). Incluye cortar, secar, manicurar y curar.", visual: null },
        { term: "Secado", def: "Fase de 10-14 días donde las ramas cuelgan boca abajo en lugar oscuro, fresco y con algo de circulación de aire. El agua se evapora lentamente. Listo cuando las ramitas finas craquean al doblarlas.", visual: null },
        { term: "Manicura / Trim", def: "Recortar las hojas pequeñas (sugarleaves) que rodean los cogollos después del secado. Se hace con tijeras de punta fina. Los recortes (trim) sirven para extractos.", visual: "✂️ Recortar las hojitas alrededor del cogollo" },
        { term: "Curado", def: "Guardar los cogollos en botes herméticos de cristal durante semanas o meses después del secado. Ocurren reacciones químicas que eliminan el sabor vegetal y desarrollan el aroma. Sin curado el resultado es notablemente peor.", visual: null },
        { term: "Burping", def: "Abrir los botes de curado 15 minutos al día durante las primeras semanas para liberar la humedad residual que siguen soltando los cogollos. Sin burping puede aparecer moho en el bote.", visual: "🫙 Abrir el bote 15 min al día" },
        { term: "Botrytis", def: "Moho gris que ataca los cogollos desde dentro, especialmente con humedad alta en otoño o en armarios con poca ventilación. Cuando lo ves ya hay daño importante. Prevención: humedad por debajo del 55% en floración.", visual: "🔍 Manchas grises/marrones dentro del cogollo" },
        { term: "Terpenos", def: "Los compuestos que dan el aroma y sabor característico de cada variedad. Se desarrollan y se potencian durante el curado. Por eso el curado largo (4-8 semanas) marca tanta diferencia en el resultado final.", visual: null },
      ]
    },
    {
      cat: "📐 MEDIDAS Y TÉRMINOS TÉCNICOS",
      color: "#f4a261",
      terms: [
        { term: "g/m² (gramos por metro cuadrado)", def: "La medida estándar de producción en interior. Si ves 'rendimiento 400g/m²' significa que en 1 metro cuadrado de superficie se pueden producir 400 gramos. Tu armario 120×120 tiene 1.44m² de superficie.", visual: null },
        { term: "Ciclo 18/6", def: "18 horas de luz encendida y 6 horas de oscuridad. El ciclo estándar para la fase vegetativa en interior. Simula los días largos de verano.", visual: "💡 18h luz + 🌑 6h oscuridad = vegetativa" },
        { term: "Ciclo 12/12", def: "12 horas de luz y 12 horas de oscuridad. Simula los días otoñales. Las plantas fotoperiodo reciben esta señal y empiezan a florecer. Se cambia manualmente en el temporizador.", visual: "💡 12h luz + 🌑 12h oscuridad = floración fotoperiodo" },
        { term: "Humedad relativa (HR / RH)", def: "Porcentaje de humedad en el aire. En vegetativa: 50-70%. En floración: 40-50%. Por encima del 60% en floración, riesgo alto de Botrytis.", visual: "💧 % de agua en el aire — mide el higrómetro" },
        { term: "THC", def: "El principal cannabinoide psicoactivo del cannabis. A mayor %, mayor potencia del efecto. Tus semillas tienen entre 20-25% THC.", visual: null },
        { term: "CBD", def: "Cannabinoide no psicoactivo con propiedades medicinales. Las variedades estándar tienen menos del 1%. Las variedades CBD tienen altos niveles de CBD y muy bajo THC.", visual: null },
        { term: "Indica", def: "Tipo genético de cannabis. Plantas más compactas, hojas anchas, efecto relajante y sedante, ciclo de floración más corto. Ideal para uso nocturno.", visual: null },
        { term: "Sativa", def: "Tipo genético de cannabis. Plantas más altas, hojas finas, efecto más energético y cerebral, ciclo de floración más largo. Ideal para uso diurno.", visual: null },
        { term: "Híbrido", def: "Cruce de indica y sativa. La mayoría de variedades modernas son híbridos con porcentaje variable de cada una. Ejemplo: '70% indica / 30% sativa'.", visual: null },
        { term: "Muestra exclusiva (Exclusive Sample)", def: "Pack promocional de pocas semillas (1-3) que los bancos de semillas dan como regalo o muestra. Las de Barney's Farm que tienes son muestras — probablemente 1-2 semillas cada una. Úsalas con cuidado.", visual: null },
      ]
    },
  ];

  const [searchTerm, setSearchTerm] = React.useState('');
  const allTerms = categories.flatMap(c => c.terms.map(t => ({...t, cat: c.cat, color: c.color})));
  const filtered = searchTerm.length > 1
    ? allTerms.filter(t => t.term.toLowerCase().includes(searchTerm.toLowerCase()) || t.def.toLowerCase().includes(searchTerm.toLowerCase()))
    : null;

  return (
    <div>
      <InfoBox>
        Aquí encontrarás todos los términos técnicos explicados en lenguaje de cero conocimiento. Usa la búsqueda para encontrar cualquier palabra que no entiendas de la guía.
      </InfoBox>

      {/* Buscador */}
      <div style={{ marginBottom: "20px" }}>
        <input
          type="text"
          placeholder="🔍 Buscar término... (ej: LST, pH, tricoma)"
          value={searchTerm}
          onChange={e => setSearchTerm(e.target.value)}
          style={{
            width: "100%", padding: "12px 16px", fontSize: "14px",
            background: "#0d1f14", border: "1px solid #2d6a4f",
            borderRadius: "8px", color: "#d8f3dc", outline: "none",
          }}
        />
      </div>

      {/* Resultados de búsqueda */}
      {filtered && (
        <div style={{ marginBottom: "20px" }}>
          <div style={{ fontSize: "10px", letterSpacing: "2px", color: "#52b788", marginBottom: "10px" }}>
            {filtered.length} RESULTADO{filtered.length !== 1 ? 'S' : ''}
          </div>
          {filtered.length === 0 && (
            <div style={{ fontSize: "13px", color: "#74c69d", padding: "12px" }}>No encontrado. Escríbelo en la siguiente cosulta a Claude 😉</div>
          )}
          {filtered.map((item, i) => (
            <div key={i} style={{ background: "#0d1f14", border: `1px solid ${item.color}44`, borderLeft: `3px solid ${item.color}`, borderRadius: "8px", padding: "12px 14px", marginBottom: "8px" }}>
              <div style={{ fontSize: "13px", fontWeight: "bold", color: item.color, marginBottom: "4px" }}>{item.term}</div>
              {item.visual && <div style={{ fontSize: "11px", color: "#52b788", marginBottom: "6px" }}>{item.visual}</div>}
              <div style={{ fontSize: "13px", color: "#b7e4c7", lineHeight: "1.5" }}>{item.def}</div>
            </div>
          ))}
        </div>
      )}

      {/* Categorías completas */}
      {!filtered && categories.map((cat, ci) => (
        <div key={ci} style={{ marginBottom: "28px" }}>
          <div style={{ fontSize: "11px", letterSpacing: "2px", color: cat.color, marginBottom: "12px", paddingBottom: "6px", borderBottom: `1px solid ${cat.color}33` }}>
            {cat.cat}
          </div>
          {cat.terms.map((item, i) => (
            <div key={i} style={{ background: "#0d1f14", border: "1px solid #1b4332", borderLeft: `3px solid ${cat.color}`, borderRadius: "8px", padding: "12px 14px", marginBottom: "8px" }}>
              <div style={{ fontSize: "13px", fontWeight: "bold", color: cat.color, marginBottom: "4px" }}>{item.term}</div>
              {item.visual && (
                <div style={{ fontSize: "11px", color: "#52b788", background: "#162a1e", padding: "4px 8px", borderRadius: "4px", marginBottom: "6px", display: "inline-block" }}>{item.visual}</div>
              )}
              <div style={{ fontSize: "13px", color: "#b7e4c7", lineHeight: "1.5" }}>{item.def}</div>
            </div>
          ))}
        </div>
      ))}
    </div>
  );
}


function PODA() {
  return (
    <div>
      <div style={{ background: "#1a2a10", border: "1px solid #4a7a20", borderRadius: "10px", padding: "14px", marginBottom: "20px" }}>
        <p style={{ margin: "0 0 8px", fontSize: "13px", color: "#c5e8a0", lineHeight: "1.6", fontWeight: "bold" }}>
          ⚠️ Regla de oro para autoflorecientes: menos es más.
        </p>
        <p style={{ margin: 0, fontSize: "13px", color: "#95d5b2", lineHeight: "1.6" }}>
          Las <GlossaryLink guide="cannabis" term="Autofloreciente">autoflorecientes</GlossaryLink> tienen un ciclo de vida fijo — no pueden "recuperar tiempo perdido" como las de <GlossaryLink guide="cannabis" term="Fotoperiodo">fotoperiodo</GlossaryLink>. Cualquier estrés (cortes, daños) come días de su vida útil. La poda agresiva en autos puede reducir el rendimiento final. Técnicas seguras: <GlossaryLink guide="cannabis" term="LST (Low Stress Training)">LST</GlossaryLink>, <GlossaryLink guide="cannabis" term="Defoliación">defoliación</GlossaryLink> ligera. A evitar: <GlossaryLink guide="cannabis" term="Topping">topping</GlossaryLink>, <GlossaryLink guide="cannabis" term="FIM">FIM</GlossaryLink>.
        </p>
      </div>

      <SectionTitle color="#4a7a20">✅ LO QUE SÍ PUEDES HACER</SectionTitle>

      <div style={{ background: "#0d1f14", border: "1px solid #1b4332", borderRadius: "10px", padding: "14px", marginBottom: "12px" }}>
        <div style={{ fontSize: "14px", fontWeight: "bold", color: "#74c69d", marginBottom: "8px" }}>LST — Low Stress Training (doblar, no cortar)</div>
        <div style={{ fontSize: "13px", color: "#b7e4c7", lineHeight: "1.6", marginBottom: "10px" }}>
          La técnica más recomendada para principiantes con autos. Consiste en doblar suavemente las ramas hacia fuera y fijarlas con clips o cuerdas para que la planta crezca más horizontal. Así la luz llega a más puntos y produces más cogollos sin cortar nada.
        </div>
        <div style={{ fontSize: "10px", letterSpacing: "2px", color: "#52b788", marginBottom: "8px" }}>CÓMO HACERLO</div>
        <Step num={1} text="Semana 2–3 de vegetativa: cuando la planta tenga 4–5 nudos y unos 15cm." />
        <Step num={2} text="Dobla suavemente la rama principal hacia un lado, en ángulo de ~45°. No fuerces — si notas resistencia, para." why="Las ramas jóvenes son flexibles. Si intentas doblar una rama leñosa y gruesa se rompe. Hazlo temprano cuando aún son flexibles." />
        <Step num={3} text="Fija la rama doblada con un clip de bonsái, una pinza de ropa pequeña, o cuerda suave atada a la maceta." />
        <Step num={4} text="En 24–48h verás que las ramas laterales empiezan a crecer hacia arriba buscando la luz. Eso es exactamente lo que quieres." />
        <Step num={5} text="Repite con las ramas laterales si se vuelven a poner verticales. El objetivo es una planta en forma de abanico, no de árbol." />
        <div style={{ background: "#162a1e", borderLeft: "3px solid #40916c", padding: "8px 10px", borderRadius: "0 6px 6px 0", fontSize: "12px", color: "#74c69d", lineHeight: "1.5", marginTop: "8px" }}>
          <span style={{ color: "#52b788", fontWeight: "bold" }}>Qué necesitas comprar: </span>Clips de bonsái (pack 20 uds, ~5€) o simplemente cuerda de jardín suave (~3€). Nada más.
        </div>
      </div>

      <div style={{ background: "#0d1f14", border: "1px solid #1b4332", borderRadius: "10px", padding: "14px", marginBottom: "12px" }}>
        <div style={{ fontSize: "14px", fontWeight: "bold", color: "#74c69d", marginBottom: "8px" }}>ScrOG — Screen of Green (para fotoperiodo)</div>
        <div style={{ fontSize: "13px", color: "#b7e4c7", lineHeight: "1.6", marginBottom: "10px" }}>
          Red de cultivo horizontal que mantiene la altura bajo control y maximiza los puntos de floración bajo una luz. Solo viable para fotoperiodo — tienes tiempo para entrenar. No para autoflorecientes.
        </div>
        <div style={{ fontSize: "10px", letterSpacing: "2px", color: "#52b788", marginBottom: "8px" }}>CÓMO HACERLO</div>
        <Step num={1} text="Fotoperiodo: cuando la planta llegue a semana 3–4 de vegetativa (20–30cm de altura), instala la red a 20–25cm por encima de la planta." why="Necesitas espacio bajo la red para que crezca. Demasiado alta = desperdicio de la zona; demasiado baja = la planta no cabe." />
        <Step num={2} text="Red: malla elástica 5×5cm o hilo de jardinería formando una rejilla. Cuesta ~20-30€ o hazla tú con cuerda." />
        <Step num={3} text="Cuando las ramas crecen hacia la luz, pasa cada rama que sale de la red por debajo de ella, horizontalmente. El objetivo es llenar toda la red de puntas de crecimiento a la misma altura." />
        <Step num={4} text="A medida que las ramas nuevas crecen hacia arriba, mételas bajo la red también. Al final tendrás una planta plana como una sábana." />
        <Step num={5} text="Cuando el 80% de la red está llena de puntas verdes, cambia a 12/12h." why="Ahora todos los puntos están a la misma distancia de la luz y florecerán uniformemente. El rendimiento es 30-40% mayor que sin ScrOG." />
        <div style={{ background: "#162a1e", borderLeft: "3px solid #40916c", padding: "8px 10px", borderRadius: "0 6px 6px 0", fontSize: "12px", color: "#74c69d", lineHeight: "1.5", marginTop: "8px" }}>
          <span style={{ color: "#52b788", fontWeight: "bold" }}>Material: </span>Red de ScrOG (20-30€) o cuerda de jardinería y dos soportes, o simplemente clips fijando hilo a los lados del armario. No es complicado.
        </div>
      </div>

      <div style={{ background: "#0d1f14", border: "1px solid #1b4332", borderRadius: "10px", padding: "14px", marginBottom: "12px" }}>
        <div style={{ fontSize: "14px", fontWeight: "bold", color: "#74c69d", marginBottom: "8px" }}>Defoliación leve (quitar hojas que bloquean luz)</div>
        <div style={{ fontSize: "13px", color: "#b7e4c7", lineHeight: "1.6", marginBottom: "10px" }}>
          Consiste en quitar hojas grandes que hacen sombra a los cogollos que están creciendo debajo. No es cortar ramas — solo quitar hojas individualmente.
        </div>
        <Step num={1} text="Solo en vegetativa o inicio de floración — nunca en floración avanzada." why="En floración avanzada la planta ya no puede recuperarse del estrés y cada hoja quitada es energía que pierde." />
        <Step num={2} text="Quita solo las hojas grandes (fan leaves) que estén tapando completamente un punto de crecimiento." />
        <Step num={3} text="Máximo 2–3 hojas por sesión. Espera 3–4 días entre sesiones." why="Quitar demasiadas hojas a la vez es un estrés importante. Las hojas son los paneles solares de la planta — quitarlas reduce su capacidad de fotosíntesis." />
        <Step num={4} text="Corta la hoja desde la base del peciolo (el rabillo). Con tijeras limpias, corte limpio." />
        <div style={{ background: "#162a1e", borderLeft: "3px solid #40916c", padding: "8px 10px", borderRadius: "0 6px 6px 0", fontSize: "12px", color: "#74c69d", lineHeight: "1.5", marginTop: "8px" }}>
          <span style={{ color: "#52b788", fontWeight: "bold" }}>Material: </span>Tijeras de punta fina. Limpia con alcohol isopropílico antes de usar.
        </div>
      </div>

      <SectionTitle color="#e63946">❌ LO QUE NO DEBES HACER CON AUTOFLORECIENTES</SectionTitle>

      <ErrorCard
        error="Topping (cortar la punta principal)"
        consecuencia="En fotoperiodo genera dos puntas principales. En autos come 1–2 semanas de vida que no recupera nunca. Rendimiento final peor."
        fix="Con autos nunca hagas topping. Es técnica de fotoperiodo."
      />
      <ErrorCard
        error="FIM (técnica similar al topping)"
        consecuencia="Mismo problema. Las autos no tienen tiempo de recuperación."
        fix="Reserva estas técnicas para cuando tengas experiencia con fotoperiodo."
      />
      <ErrorCard
        error="Defoliación agresiva (quitar muchas hojas a la vez)"
        consecuencia="La planta entra en estrés severo y para de crecer durante varios días — días que con autos no puedes recuperar."
        fix="Máximo 2–3 hojas cada 3–4 días. Si tienes dudas, no quites nada."
      />
      <ErrorCard
        error="Podar en floración avanzada (semana 4+)"
        consecuencia="Los cogollos están en pleno desarrollo. Cualquier estrés reduce el rendimiento final directamente."
        fix="Toda la poda y LST en vegetativa o primeras 2 semanas de floración. Después, manos fuera."
      />

      <SectionTitle>PARA TU PRIMERA VEZ — RECOMENDACIÓN HONESTA</SectionTitle>
      <div style={{ background: "#1b4332", borderRadius: "10px", padding: "14px" }}>
        <p style={{ margin: "0 0 8px", fontSize: "13px", color: "#d8f3dc", lineHeight: "1.6" }}>
          En la primera cosecha, haz solo LST si te apetece experimentar. Si no, no hagas nada de poda — una planta sin tocar con buena luz, buen riego y buenos nutrientes da mejor resultado que una planta podada incorrectamente.
        </p>
        <p style={{ margin: 0, fontSize: "13px", color: "#95d5b2", lineHeight: "1.6" }}>
          El LST es la única técnica que no penaliza si la haces mal — en el peor caso la rama vuelve a su posición. Empieza por ahí en la segunda o tercera ronda cuando ya controles el resto.
        </p>
      </div>
    </div>
  );
}

// ─── EXTERIOR COMPONENTS ─────────────────────────────────────────────────────


function DIAGNOSTICO() {
  return (
    <div>
      <InfoBox>
        Cuando tu planta empieza a mostrar síntomas (hojas amarillas, manchas, puntas quemadas), el primer paso es diagnosticar correctamente. Estos síntomas pueden venir de 5 fuentes: pH incorrecto, deficiencia de nutrientes, exceso de nutrientes, riego, o luz. Esta guía te ayuda a identificar cuál es el problema real.
      </InfoBox>

      <SectionTitle color="#52b788">🔑 REGLA DE ORO</SectionTitle>
      <div style={{ background: "#162a1e", border: "1px solid #2d6a4f", borderRadius: "10px", padding: "14px", marginBottom: "20px" }}>
        <p style={{ margin: 0, fontSize: "13px", color: "#95d5b2", lineHeight: "1.7" }}>
          Antes de añadir o restar nutrientes, <span style={{ color: "#d8f3dc", fontWeight: "bold" }}>mide el pH del agua que entra y el runoff (agua que sale)</span>. Muchos problemas que parecen "falta de nutrientes" son en realidad pH incorrecto que bloquea los nutrientes. Si el pH está mal, añadir más nutrientes empeora el problema.
        </p>
      </div>

      <SectionTitle>DEFICIENCIAS DE NUTRIENTES — GUÍA VISUAL</SectionTitle>
      {[
        { elemento: "🔴 Nitrógeno (N)", zona: "Hojas bajas/viejas", sintoma: "Amarilleo progresivo, empezando por las hojas más viejas. El tallo puede ponerse rojo/morado.", causa: "Dosis de nutrientes insuficiente o pH fuera del rango 6.0-7.0 (bloquea N).", solucion: "Aumenta Bio Grow a 1ml/L más. Mide pH — si está >7.0, bájalo con pH Down. Espera 3-5 días para ver mejora." },
        { elemento: "🟠 Fósforo (P)", zona: "Toda la planta", sintoma: "Hojas moradas, rojas o rojizas. Pecíolos (tallos de hojas) muy rojos. Crecimiento ralentizado.", causa: "Baja temperatura (<15°C) o pH incorrecto (mejor a 6.5). Exterior en otoño temprano.", solucion: "Mide pH ajusta a 6.2-6.5. Si ya estás en floración y es otoño, es normal — espera a que suba temperatura. Si es interior, sube temp a 22°C mínimo." },
        { elemento: "🟡 Potasio (K)", zona: "Hojas viejas", sintoma: "Bordes de hojas viejas se vuelven marrones y se tuercen hacia arriba. Parece quemadura desde los bordes.", causa: "Deficiencia de K o pH bloqueado (mejor 6.2-6.5). Común al final de floración.", solucion: "Aumenta Bio Bloom a 1ml/L más. Mide pH. Si está al final de floración, es normal — el plant está terminando. Reduce dosis agua sola las 2 últimas semanas." },
        { elemento: "💚 Magnesio (Mg)", zona: "Hojas medias", sintoma: "Clorosis intervenal: venas verdes pero el espacio entre las venas se vuelve amarillo. Las venas siguen siendo verdes oscuro.", causa: "Deficiencia de Mg o pH incorrecto. Puede ocurrir si cambias el nivel de EC (concentración de sales) demasiado rápido.", solucion: "Solución rápida: 1ml/L sulfato de magnesio (MgSO4) en el riego. O aumenta dosis de Bio Grow/Bloom que ya llevan Mg. En 3-7 días debería mejorar." },
        { elemento: "⚪ Calcio (Ca)", zona: "Hojas nuevas/ápice", sintoma: "Manchitas marrones o negras en hojas nuevas. Los nuevos brotes pueden deformarse. Aspecto de 'quemadura leve' en el ápice.", causa: "Deficiencia de Ca (raro si usas agua grifo decente) o pH demasiado bajo (<6.0).", solucion: "Sube pH a 6.2-6.5. Si sigue así 1 semana, añade cal agrícola (0.5g/L) al agua. Raramente necesario con BioBizz." },
        { elemento: "🔸 Hierro (Fe)", zona: "Hojas nuevas", sintoma: "Amarilleo entre venas en hojas nuevas (opuesto a Mg). Las venas nuevas siguen verdes pero el resto amarilla.", causa: "pH demasiado alto (>7.0) — bloquea la absorción de Fe aunque esté presente.", solucion: "Baja pH a 6.2-6.5 con pH Down. El Fe debería desbloquearse en 3-5 días. Rara vez necesitas añadir Fe extras si el pH es correcto." },
      ].map((def, i) => (
        <div key={i} style={{ background: "#0d1f14", border: "1px solid #1b4332", borderRadius: "10px", padding: "14px", marginBottom: "12px" }}>
          <div style={{ fontSize: "14px", fontWeight: "bold", color: "#d8f3dc", marginBottom: "8px" }}>{def.elemento}</div>
          {[["Dónde aparece", def.zona], ["Síntoma", def.sintoma], ["Causa probable", def.causa], ["Solución", def.solucion]].map(([k, v]) => (
            <div key={k} style={{ marginBottom: "8px" }}>
              <div style={{ fontSize: "10px", color: "#52b788", letterSpacing: "1px", marginBottom: "2px" }}>{k.toUpperCase()}</div>
              <div style={{ fontSize: "12px", color: "#b7e4c7", lineHeight: "1.5" }}>{v}</div>
            </div>
          ))}
        </div>
      ))}

      <SectionTitle>TOXICIDAD — EXCESO DE NUTRIENTES</SectionTitle>
      {[
        { problema: "🔥 Quemadura de nutrientes (Nutrient burn)", sintoma: "Puntas de hojas marrones y crujientes. Empieza en hojas viejas, sube hacia las nuevas. Bordes quemados como si tocara fuego.", causa: "Dosis de nutrientes demasiado alta. Acumulación de sales en el sustrato (EC muy alto).", solucion: "FLUSH INMEDIATAMENTE: riega con agua sola a pH 6.3 sin nutrientes durante 2-3 riegos consecutivos. Reduce la dosis de nutrientes 30-50%. Espera 7 días para volver a nutrientes normales." },
        { problema: "🚫 Bloqueo de nutrientes (Nutrient lockout)", sintoma: "Múltiples síntomas a la vez: hojas amarillas, moradas, puntas quemadas. Aspecto general de 'algo anda mal' pero sin patrón claro.", causa: "pH completamente incorrecto (fuera del rango 5.8-7.0). Aunque los nutrientes estén ahí, la planta no puede tomarlos.", solucion: "MIDE INMEDIATAMENTE el pH del agua que entra y el runoff. Ajusta a 6.2-6.5. Flush con agua a pH 6.3 durante 2-3 riegos. En 5-10 días debería recuperarse si el pH era el problema." },
      ].map((tox, i) => (
        <div key={i} style={{ background: "#1a0a0a", border: "1px solid #4a1010", borderRadius: "10px", padding: "14px", marginBottom: "12px" }}>
          <div style={{ fontSize: "14px", fontWeight: "bold", color: "#ff6b6b", marginBottom: "8px" }}>{tox.problema}</div>
          {[["Síntoma", tox.sintoma], ["Causa", tox.causa], ["Solución", tox.solucion]].map(([k, v]) => (
            <div key={k} style={{ marginBottom: "8px" }}>
              <div style={{ fontSize: "10px", color: "#e63946", letterSpacing: "1px", marginBottom: "2px" }}>{k.toUpperCase()}</div>
              <div style={{ fontSize: "12px", color: "#c9a0a0", lineHeight: "1.5" }}>{v}</div>
            </div>
          ))}
        </div>
      ))}

      <SectionTitle>PROBLEMAS DE RIEGO</SectionTitle>
      {[
        { problema: "💧 Overwatering (exceso de agua)", sintoma: "Hojas caídas y mustias aunque el sustrato esté mojado. Olor desagradable en maceta/sustrato. Crecimiento lento.", causa: "Riego demasiado frecuente. Las raíces se ahogan sin oxígeno.", solucion: "Deja de regar. Espera 3-5 días a que el sustrato se seque completamente. Exterior: asegúrate de que hay buen drenaje en el hoyo. Interior: airea el sustrato si es posible (abre ventilador). La planta se recupera en 5-7 días." },
        { problema: "💀 Underwatering (falta de agua)", sintoma: "Hojas caídas pero el sustrato está SECO. Bordes de hojas secas y crujientes. Crecimiento lentísimo.", causa: "No riegas lo suficiente. La planta no llega a agua.", solucion: "Riega abundantemente hasta que salga agua por los agujeros. Espera a que el sustrato se seque un poco (superficie seca, 2-3cm dentro húmedo) antes de regar de nuevo. Interior: aumenta frecuencia. Exterior: julio puede ser cada 1-2 días." },
      ].map((prob, i) => (
        <div key={i} style={{ background: "#0d1f14", border: "1px solid #1b4332", borderRadius: "10px", padding: "14px", marginBottom: "12px" }}>
          <div style={{ fontSize: "14px", fontWeight: "bold", color: "#d8f3dc", marginBottom: "8px" }}>{prob.problema}</div>
          {[["Síntoma", prob.sintoma], ["Causa", prob.causa], ["Solución", prob.solucion]].map(([k, v]) => (
            <div key={k} style={{ marginBottom: "8px" }}>
              <div style={{ fontSize: "10px", color: "#52b788", letterSpacing: "1px", marginBottom: "2px" }}>{k.toUpperCase()}</div>
              <div style={{ fontSize: "12px", color: "#b7e4c7", lineHeight: "1.5" }}>{v}</div>
            </div>
          ))}
        </div>
      ))}

      <SectionTitle>PROBLEMAS DE LUZ</SectionTitle>
      {[
        { problema: "📏 Luz demasiado cerca", sintoma: "Quemadura de hojas: manchas blancas/grises en el centro de las hojas altas. Hojas crujientes.", causa: "LED/HPS a menos de 20-25cm. El calor quema el tejido.", solucion: "Sube la luz inmediatamente. Prueba con la mano: si quema tu mano, quema la planta. Distancia mínima 25-30cm para LED. Espera 7 días a que se recupere." },
        { problema: "🌱 Luz demasiado lejos", sintoma: "Planta muy alta y delgada. Tallos largos y débiles. Entrenudos grandes (distancia entre nudos).", causa: "LED/HPS a más de 70cm. La planta se estira buscando luz.", solucion: "Baja la luz a 50-60cm. La planta se recupera en 1-2 semanas y los nuevos brotes crecen más compactos. Mejor control de altura." },
      ].map((luz, i) => (
        <div key={i} style={{ background: "#0d1f14", border: "1px solid #1b4332", borderRadius: "10px", padding: "14px", marginBottom: "12px" }}>
          <div style={{ fontSize: "14px", fontWeight: "bold", color: "#d8f3dc", marginBottom: "8px" }}>{luz.problema}</div>
          {[["Síntoma", luz.sintoma], ["Causa", luz.causa], ["Solución", luz.solucion]].map(([k, v]) => (
            <div key={k} style={{ marginBottom: "8px" }}>
              <div style={{ fontSize: "10px", color: "#52b788", letterSpacing: "1px", marginBottom: "2px" }}>{k.toUpperCase()}</div>
              <div style={{ fontSize: "12px", color: "#b7e4c7", lineHeight: "1.5" }}>{v}</div>
            </div>
          ))}
        </div>
      ))}
    </div>
  );
}

function EXTRACCIONES() {
  return (
    <div>
      <InfoBox>
        El trim (recortes de sugar leaves sin resina) no es basura — es material de valor que puedes transformar en hash, mantequilla, aceite u otros productos. Esta guía cubre los métodos más prácticos y seguros para aprovechar tu trim.
      </InfoBox>

      <SectionTitle>ANTES DE EMPEZAR</SectionTitle>
      <Step num={1} text="Guarda el trim en bolsas herméticas en el congelador desde el momento que lo separas." why="El frío conserva los cannabinoides intactos. El trim a temperatura ambiente pierde potencia rápidamente." />
      <Step num={2} text="Solo usa métodos sin solventes químicos (seguridad)." />
      <Step num={3} text="Todas estas técnicas requieren decarboxilación si vas a hacer edibles (mantequilla, aceite)." />

      <SectionTitle>MÉTODO 1: HASH EN SECO (Dry Sift)</SectionTitle>
      <div style={{ background: "#0d1f14", border: "1px solid #1b4332", borderRadius: "10px", padding: "14px", marginBottom: "12px" }}>
        <div style={{ fontSize: "13px", fontWeight: "bold", color: "#74c69d", marginBottom: "10px" }}>La técnica más simple: tamiz + movimiento + frío</div>
        <Step num={1} text="Necesitas: tamiz de malla 73–120µm (puedes comprarlo en Amazon, ~10€), bolsa grande, y el trim congelado." />
        <Step num={2} text="Mete el trim congelado en una bolsa grande. Ciérrala." />
        <Step num={3} text="Coloca el tamiz sobre una bandeja o plato blanco limpio." />
        <Step num={4} text="Sobre el tamiz, pon el trim congelado. Haz movimientos circulares suaves con los dedos — frota el trim contra la malla." />
        <Step num={5} text="Los tricomas (cabezas de resina) caen a través de la malla a la bandeja. El trim se queda arriba." why="El frío mantiene los tricomas quebradizos — se desprenden fácilmente. A temperatura ambiente son pegajosos y se quedan en el trim." />
        <Step num={6} text="Recoge el polvo blanco que cae (eso es kief casi puro). La proporción es típicamente 1-2g de hash por cada 10g de trim seco." />
        <Step num={7} text="Prensa el kief ligeramente con una cuchara caliente (dabber) o con una pequeña prensa manual — forme una bola o pastilla compacta." />
        <Step num={8} text="Cura en bote hermético a oscuridad durante 1-2 semanas. El hash seco se vuelve más potente con el tiempo." why="Durante el curado ocurren conversiones químicas que suavizan el sabor y estabilizan la estructura." />
        <div style={{ background: "#162a1e", borderLeft: "3px solid #40916c", padding: "8px 10px", borderRadius: "0 6px 6px 0", fontSize: "12px", color: "#74c69d", lineHeight: "1.5", marginTop: "8px" }}>
          <span style={{ color: "#52b788", fontWeight: "bold" }}>Resultado: </span>Hash en seco color marrón claro, sabor fuerte, se puede fumar o vaporizar. Muy fácil de hacer.
        </div>
      </div>

      <SectionTitle>MÉTODO 2: HASH DE AGUA (Bubble Hash)</SectionTitle>
      <div style={{ background: "#0d1f14", border: "1px solid #1b4332", borderRadius: "10px", padding: "14px", marginBottom: "12px" }}>
        <div style={{ fontSize: "13px", fontWeight: "bold", color: "#74c69d", marginBottom: "10px" }}>Más trabajo pero resultado más limpio y potente</div>
        <Step num={1} text="Necesitas: dos baldes (5-10L), hielo, agua, bolsas de burbujas (bubble bags, ~30€ un set), colador de tela." />
        <Step num={2} text="Llena un balde con agua fría (2L) y hielo (mucho hielo). Pon el trim congelado dentro." />
        <Step num={3} text="Agita vigorosamente durante 15-20 minutos. El hielo y el movimiento hacen que los tricomas se desprendan y caigan al agua." />
        <Step num={4} text="Mete las bubble bags en orden de micrones (empezando por la más gruesa) dentro del segundo balde vacío. Vierte lentamente el agua con trim en las bolsas." why="Las bolsas retienen diferentes tamaños de partículas. Cada bolsa recoge hash de diferente calidad (pureza)." />
        <Step num={5} text="El material más fino y puro queda en las bolsas más finas (última bolsa). Eso es el hash." />
        <Step num={6} text="Recoge el hash de cada bolsa con una espátula. Aprieta suavemente para eliminar agua." />
        <Step num={7} text="Deja secar en una bandeja en lugar oscuro y con airflow durante 2-3 semanas. Remueve cada 2-3 días para secar uniformemente." />
        <div style={{ background: "#162a1e", borderLeft: "3px solid #40916c", padding: "8px 10px", borderRadius: "0 6px 6px 0", fontSize: "12px", color: "#74c69d", lineHeight: "1.5", marginTop: "8px" }}>
          <span style={{ color: "#52b788", fontWeight: "bold" }}>Resultado: </span>Hash de agua color marrón oscuro/negro, muy puro y potente, sabor limpio. Se fuma, vaporiza o derrite (rosin).
        </div>
      </div>

      <SectionTitle>MÉTODO 3: MANTEQUILLA CANNÁBICA (Edibles)</SectionTitle>
      <div style={{ background: "#0d1f14", border: "1px solid #1b4332", borderRadius: "10px", padding: "14px", marginBottom: "12px" }}>
        <div style={{ fontSize: "13px", fontWeight: "bold", color: "#74c69d", marginBottom: "10px" }}>Convierte trim en mantequilla para brownies, galletas, etc.</div>
        <Step num={1} text="PASO IMPRESCINDIBLE - Decarboxilación: calienta el trim en el horno a 110°C durante 45 minutos en una bandeja forrada con papel." why="Sin decarboxilación los cannabinoides THCA y CBDA no se activan — no tendrías efecto. La decarb convierte THCA → THC." />
        <Step num={2} text="Necesitas: mantequilla (200g por cada 30g de trim), una olla, un termómetro (importante), colador de tela fina." />
        <Step num={3} text="Derrite la mantequilla a fuego bajo (máximo 90°C, no debe humear)." />
        <Step num={4} text="Añade el trim decarboxilado a la mantequilla derretida. Mezcla bien." />
        <Step num={5} text="Mantén a 75-85°C durante 2-4 horas (lento y bajo = mejor). Remueve cada 15-20 minutos." why="La infusión a baja temperatura es clave — el calor alto degrada los cannabinoides. Un termómetro es vital." />
        <Step num={6} text="Cuela con la tela fina en un recipiente limpio. Exprime bien el trim para extraer toda la mantequilla." />
        <Step num={7} text="Deja reposar en la nevera hasta que la mantequilla se solidifique. La sustancia oscura que cae al fondo es agua + impurezas — descártala." />
        <Step num={8} text="La mantequilla clara de arriba es tu 'cannabutter' lista. Úsala en cualquier receta de repostería (chocolate, brownies, galletas)." why="Funciona mejor en recetas con grasa (mantequilla, chocolate). En bebidas calientes (té) funciona pero el sabor es fuerte." />
        <div style={{ background: "#162a1e", borderLeft: "3px solid #40916c", padding: "8px 10px", borderRadius: "0 6px 6px 0", fontSize: "12px", color: "#74c69d", lineHeight: "1.5", marginTop: "8px" }}>
          <span style={{ color: "#52b788", fontWeight: "bold" }}>Resultado: </span>Mantequilla infusionada lista para edibles. Sabor más suave que fumar. Efecto más duradero (4-6h vs 2-3h al fumar).
        </div>
      </div>

      <SectionTitle color="#e63946">⚠️ PRECAUCIONES DE SEGURIDAD</SectionTitle>
      <div style={{ background: "#1a0a0a", border: "1px solid #4a1010", borderRadius: "10px", padding: "14px" }}>
        <div style={{ fontSize: "12px", color: "#c9a0a0", lineHeight: "1.6" }}>
          <strong>NO uses solventes:</strong> butano, hexano, acetona — son tóxicos, explosivos y dejan residuos peligrosos.<br/>
          <strong>Ventilación:</strong> si decarboxilas, pon el horno en ventilación buena — tendrá olor fuerte.<br/>
          <strong>Temperatura:</strong> nunca expongas cannabis a más de 110°C sin estar en agua/grasa (riesgo de quemar cannabinoides).<br/>
          <strong>Almacenaje:</strong> guarda edibles y extracciones fuera del alcance de niños y mascotas.
        </div>
      </div>
    </div>
  );
}

function FAQ() {
  return (
    <div>
      <InfoBox>
        Preguntas comunes de cultivadores principiantes. Si tu situación no está aquí, navega al Diagnóstico para síntomas más específicos.
      </InfoBox>

      <SectionTitle>PROBLEMAS DE CRECIMIENTO</SectionTitle>
      {[
        { q: "Mi planta está amarilla. ¿Qué hago?", r: "Tres causas principales: 1) Deficiencia de N (hojas bajas amarillas) — aumenta Bio Grow. 2) pH incorrecto — mide pH, ajusta a 6.2-6.5. 3) Edad (últimas semanas floración) — es normal. Primero mide pH, luego añade nutrientes si hace falta." },
        { q: "La planta no crece nada. Está parada hace 2 semanas.", r: "Causa #1: Overwatering — deja secar completamente 3-5 días. Causa #2: Luz demasiado lejos — bájala a 50-60cm. Causa #3: Temperatura <18°C — sube a 22°C mínimo. Causa #4: Suelo encharcado/sin drenaje — en exterior verifica que el hoyo drena bien." },
        { q: "¿Cuándo cosechar? ¿Cómo sé que está lista?", r: "Interior: mira los tricomas con lupa de aumento. 60-70% lechosos (blancos) = primer punto de cosecha, efecto energético. 80-90% lechosos = punto ideal. Algunos ámbar = más sedante. Exterior: espera a 70-80% lechosos, o cosecha antes si lluvia inminente." },
        { q: "Las hojas están rizadas hacia arriba. ¿Qué es?", r: "Calor o falta de agua. Mide temperatura — si está >28°C, sube extractor. Si el sustrato está seco, riega. Si es exterior, es normal en días muy calurosos — se recupera por la noche." },
        { q: "Las hojas están colgando/droopy. Acababa de regar.", r: "Overwatering. El sustrato está muy mojado y las raíces sin oxígeno. Deja de regar 5 días. Abre ventilador si es interior. La planta se recupera." },
      ].map((item, i) => (
        <div key={i} style={{ background: "#0d1f14", border: "1px solid #1b4332", borderRadius: "10px", padding: "14px", marginBottom: "12px" }}>
          <div style={{ fontSize: "13px", fontWeight: "bold", color: "#d8f3dc", marginBottom: "8px" }}>❓ {item.q}</div>
          <div style={{ fontSize: "12px", color: "#b7e4c7", lineHeight: "1.6" }}>{item.r}</div>
        </div>
      ))}

      <SectionTitle>PROBLEMAS DE NUTRIENTES Y pH</SectionTitle>
      {[
        { q: "¿Debo medir el pH? ¿Es realmente necesario?", r: "SÍ. Es la causa raíz de 50% de los problemas. Si el pH está mal, los nutrientes están ahí pero bloqueados. El pHmetro cuesta 20€ y vale cada céntimo. Interior: 6.2-6.5. Exterior: 6.0-7.0. Sin medidor estarás disparando a ciegas." },
        { q: "¿Qué es el runoff? ¿Debo medirlo?", r: "Agua que drena por los agujeros de abajo cuando riegas. Mide su pH con tu pHmetro. Si difiere >0.5 puntos del agua que entraste, hay bloqueo de nutrientes (acumulación de sales). Solución: flush 2-3 días con agua sola a pH 6.3." },
        { q: "Añadí nutrientes y empeó todo. ¿Qué hago?", r: "Probablemente nutrient burn. PARA de añadir nutrientes inmediatamente. Haz un flush: riega con agua sola a pH 6.3 durante 2-3 riegos consecutivos. Luego vuelve a nutrientes con dosis 50% menor." },
        { q: "En exterior el pH sube solo en el depósito. ¿Qué es?", r: "Algas. El agua llena en un depósito abierto y expuesto a luz crece algas — cambiar pH. Solución: cubre el depósito con tapa opaca o bolsa negra. Las algas mueren sin luz. O: cambia el agua cada 2-3 días." },
        { q: "¿Qué hago si no tengo acceso a pH Down en exterior?", r: "Urgencia: usa zumo de limón (ácido cítrico) — baja pH naturalmente. 2-3 gotas por litro. No es exacto pero funciona. Para la próxima: lleva pH Down de casa en una botella pequeña (cuesta 5€)." },
      ].map((item, i) => (
        <div key={i} style={{ background: "#0d1f14", border: "1px solid #1b4332", borderRadius: "10px", padding: "14px", marginBottom: "12px" }}>
          <div style={{ fontSize: "13px", fontWeight: "bold", color: "#d8f3dc", marginBottom: "8px" }}>❓ {item.q}</div>
          <div style={{ fontSize: "12px", color: "#b7e4c7", lineHeight: "1.6" }}>{item.r}</div>
        </div>
      ))}

      <SectionTitle>PROBLEMAS DE SETUP Y CLIMA</SectionTitle>
      {[
        { q: "El extractor no crea presión negativa. ¿Por qué?", r: "Causas: 1) Tubo no sellado bien — revisa que no haya fugas de aire. 2) Filtro de carbón saturado — cámbialo. 3) Extractor muy débil — actualiza a uno más potente. 4) Entrada de aire obstruida — asegúrate que entra aire (rejilla abierta en la puerta o pared)." },
        { q: "La humedad es demasiado baja (30%). ¿Qué hago?", r: "Interior: cuelga toallas mojadas en las esquinas (se evaporan). O: apaga el extractor 1-2 horas. O: moja el suelo y las paredes. Exterior: es normal en julio — no hay mucho que hacer. Asegúrate de riego frecuente." },
        { q: "Llueve mucho (exterior). ¿Protejo la planta?", r: "Un poco de lluvia es bueno (agua gratis). Demasiada lluvia = Botrytis en floración. Si llueve días seguidos en septiembre-octubre: abre cogollos para ver si hay moho. Toldo temporal sobre la planta si puedes sin bloquear luz/aire." },
        { q: "¿Luz 24h o 18/6 en interior para autos?", r: "Autos florecen solas, no dependen del fotoperiodo. 20/4 es estándar (20h luz, 4h oscuridad) — menos gasto eléctrico que 24h. 18/6 también funciona. La mayoría usa 20/4." },
        { q: "¿Puedo cultivar con luz natural exterior en febrero?", r: "No. Los días en febrero son demasiado cortos (<12h). Las plantas fotoperiodo florecen sola sin querer. Espera a marzo-mayo para germinar. Si quieres en invierno: cultiva autos o usa luz artificial interior." },
      ].map((item, i) => (
        <div key={i} style={{ background: "#0d1f14", border: "1px solid #1b4332", borderRadius: "10px", padding: "14px", marginBottom: "12px" }}>
          <div style={{ fontSize: "13px", fontWeight: "bold", color: "#d8f3dc", marginBottom: "8px" }}>❓ {item.q}</div>
          <div style={{ fontSize: "12px", color: "#b7e4c7", lineHeight: "1.6" }}>{item.r}</div>
        </div>
      ))}

      <SectionTitle>PROBLEMAS MENOS COMUNES</SectionTitle>
      {[
        { q: "¿Puedo reutilizar el sustrato del año pasado?", r: "No recomendado. El sustrato se compacta y agota sus nutrientes. Para una nueva temporada compra sustrato fresco (BioBizz Light Mix). Si quieres reutilizar: mezcla 50% sustrato viejo + 50% nuevo y añade bacteria benéfica (Mycorrhizae)." },
        { q: "Me olvidé de regar 5 días. ¿Está muerta?", r: "Probablemente no. Aunque parecer marchita, las raíces pueden estar vivas. Riega abundantemente y espera 2-3 días. Si recupera turgencia (hojas firmes) está salvada. Si sigue marchita tras 5 días, está muerta." },
        { q: "¿Puedo dejar las plantas solas 2 semanas en julio?", r: "NO en julio (pico de calor). Las plantas mueren sin agua en 2-3 días. Con riego automático a goteros: sí, funciona. Sin automático: pide a alguien que visite cada 1-2 días, o escurza las plantas." },
        { q: "¿Qué hago con las plantas después de cosechar?", r: "Interior: limpia el armario (vacía, deja 24h con luz + extractor para secar). Sustrato viejo desecha o reutiliza mezclado 50/50. Exterior: limpia completamente el spot — no dejes trazas." },
      ].map((item, i) => (
        <div key={i} style={{ background: "#0d1f14", border: "1px solid #1b4332", borderRadius: "10px", padding: "14px", marginBottom: "12px" }}>
          <div style={{ fontSize: "13px", fontWeight: "bold", color: "#d8f3dc", marginBottom: "8px" }}>❓ {item.q}</div>
          <div style={{ fontSize: "12px", color: "#b7e4c7", lineHeight: "1.6" }}>{item.r}</div>
        </div>
      ))}
    </div>
  );
}


function TIMELINE({ navigate }) {
  const [tab, setTab] = useState("interior");

  const interiorNodes = [
    { semana: "Semana 0", titulo: "Preparación del armario", emoji: "📦", desc: "Monta el armario, instala el LED, extractor y filtro. Prueba 24h sin plantas. Verifica presión negativa.", mode: "interior", phase: "antes", color: "#2d6a4f" },
    { semana: "Semana 1", titulo: "Germinación", emoji: "🥚", desc: "Semilla en agua 12-18h, luego papel húmedo en tupper a 22°C. En 3-5 días sale la radícula. Planta cuando mide 1-2cm.", mode: "interior", phase: "germinacion", color: "#40916c" },
    { semana: "Semanas 1-3", titulo: "Plántula", emoji: "🌱", desc: "Solo agua con pH 6.2-6.5. Sin nutrientes. Riega solo cuando el sustrato esté seco. Luz a 60-70cm.", mode: "interior", phase: "vegetativa", color: "#52b788" },
    { semana: "Semanas 3-5", titulo: "Vegetativa", emoji: "🌿", desc: "Empieza con Bio Grow a 1ml/L. Baja la luz gradualmente. Riego cuando el sustrato esté seco a 2cm. Observa hojas para leer la planta.", mode: "interior", phase: "vegetativa", color: "#52b788" },
    { semana: "Semana 3-4", titulo: "LST (opcional)", emoji: "📐", desc: "Dobla las ramas hacia fuera y fíjalas con clips para que la planta crezca en abanico. Más luz = más cogollos.", mode: "interior", phase: "poda", color: "#74c69d", optional: true },
    { semana: "Semana 5\n(Fotoperiodo)", titulo: "Cambiar a 12/12h", emoji: "⏱️", desc: "SOLO si usas semillas fotoperiodo (White Widow): cuando la planta mida 40-50cm, cambia el temporizador a 12h/12h. Las auto florecen solas.", mode: "interior", phase: "floracion", color: "#95d5b2", highlight: true },
    { semana: "Semanas 5-12", titulo: "Floración", emoji: "🌸", desc: "Cambia a Bio Bloom. Baja la humedad al 40-50%. Mira los tricomas semanalmente con la lupa. Lavado de raíces las 2 últimas semanas.", mode: "interior", phase: "floracion", color: "#b7e4c7" },
    { semana: "Semana 12-13", titulo: "Cosecha y secado", emoji: "✂️", desc: "Cuando el 70-80% de tricomas sean lechosos. Cuelga ramas boca abajo 10-14 días. Test de la ramita antes del bote.", mode: "interior", phase: "cosecha", color: "#d8f3dc" },
    { semana: "Semanas 14-18", titulo: "Curado", emoji: "🫙", desc: "Mason jars al 75%. Burping 15 min al día. Higrómetro dentro: 58-65%. Mínimo 2 semanas, 4 es mucho mejor.", mode: "general", phase: "cosecha_gen", color: "#e8f5e9" },
  ];

  const exteriorNodes = [
    { semana: "Marzo-Mayo", titulo: "Germinación en casa", emoji: "🥚", desc: "Semilla en agua, luego papel húmedo. Plántula en vasito en el alféizar. 2-3 semanas hasta 10-15cm. Asegúrate de que las noches > 12°C antes de salir.", mode: "exterior", phase: "germinacion_ext", color: "#2d6a4f" },
    { semana: "Finales de mayo", titulo: "Trasplante al bosque", emoji: "🌲", desc: "Hoyo 50×50×50cm mínimo. Mezcla tierra + Light Mix 50/50. Riega abundantemente. Sombra los primeros 2-3 días.", mode: "exterior", phase: "ubicacion", color: "#40916c" },
    { semana: "Junio", titulo: "Vegetativa temprana", emoji: "🌿", desc: "Bio Grow 2ml/L. Riego cuando el suelo esté seco a 3-4cm. Primera aplicación de Bt. Pon acolchado alrededor de la base.", mode: "exterior", phase: "fases_ext", color: "#52b788" },
    { semana: "Julio", titulo: "Vegetativa máxima", emoji: "🌿", desc: "Pico de calor y crecimiento. Riego casi diario. Pon tutores. Aplica Bt cada 2 semanas. Vigilancia de plagas en cada visita.", mode: "exterior", phase: "riego_ext", color: "#52b788" },
    { semana: "Agosto", titulo: "Inicio floración automática", emoji: "🌸", desc: "Los días se acortan. La planta florece sola — verás pelos blancos en los nudos. Cambia a Bio Bloom. Reduce humedad si es alta.", mode: "exterior", phase: "fases_ext", color: "#b7e4c7" },
    { semana: "Septiembre", titulo: "Floración avanzada — MES CRÍTICO", emoji: "⚠️", desc: "Visita 2x/semana. Busca Botrytis abriendo cogollos. Lavado de raíces semanas 4-5. Añade tutores. Mira tricomas semanalmente.", mode: "exterior", phase: "plagas", color: "#f4a261", highlight: true },
    { semana: "Octubre", titulo: "Cosecha en el bosque", emoji: "✂️", desc: "70-80% tricomas lechosos = cosechar. Con lluvia prevista y 60% lechosos: cosecha ya. Bolsas herméticas. Limpia el spot.", mode: "exterior", phase: "cosecha_ext", color: "#d8f3dc" },
    { semana: "Octubre-Dic", titulo: "Secado y curado", emoji: "🫙", desc: "Idéntico al interior. 10-14 días secando. Test de la ramita. Mason jars, burping diario, higrómetro dentro. 4 semanas mínimo.", mode: "general", phase: "cosecha_gen", color: "#e8f5e9" },
  ];

  const nodes = tab === "interior" ? interiorNodes : exteriorNodes;

  return (
    <div>
      <InfoBox>
        El timeline te muestra el proceso completo de principio a fin. Haz clic en cualquier nodo para ir directamente a la sección correspondiente de la guía.
      </InfoBox>

      {/* Tab selector */}
      <div style={{ display: "flex", background: "#0d1f14", borderRadius: "10px", padding: "4px", gap: "4px", marginBottom: "24px" }}>
        {[{ id: "interior", label: "🏠 Interior" }, { id: "exterior", label: "🌲 Exterior" }].map(t => (
          <button key={t.id} onClick={() => setTab(t.id)} style={{
            flex: 1, padding: "10px", border: "none", borderRadius: "8px",
            background: tab === t.id ? "#2d6a4f" : "transparent",
            color: tab === t.id ? "#d8f3dc" : "#52b788",
            cursor: "pointer", fontSize: "13px", fontWeight: "bold",
            fontFamily: "Georgia, serif",
          }}>{t.label}</button>
        ))}
      </div>

      {/* Timeline */}
      <div style={{ position: "relative", paddingLeft: "20px" }}>
        {/* Línea vertical */}
        <div style={{ position: "absolute", left: "19px", top: "20px", bottom: "20px", width: "2px", background: "linear-gradient(to bottom, #2d6a4f, #52b788, #d8f3dc)", borderRadius: "1px" }} />

        {nodes.map((node, i) => (
          <div key={i} style={{ position: "relative", marginBottom: "6px" }}>
            {/* Nodo clickable */}
            <button
              onClick={() => navigate(node.mode, node.phase)}
              style={{
                width: "100%", textAlign: "left", border: "none", cursor: "pointer",
                background: "transparent", padding: 0, fontFamily: "Georgia, serif",
              }}
            >
              <div style={{
                display: "flex", gap: "14px", alignItems: "flex-start",
                background: node.highlight ? "#1a3a20" : "#0d1f14",
                border: `1px solid ${node.highlight ? node.color : "#1b4332"}`,
                borderRadius: "10px", padding: "12px 14px",
                marginLeft: "20px",
                transition: "all 0.2s",
              }}
                onMouseEnter={e => e.currentTarget.style.background = "#1b4332"}
                onMouseLeave={e => e.currentTarget.style.background = node.highlight ? "#1a3a20" : "#0d1f14"}
              >
                {/* Círculo del nodo */}
                <div style={{
                  position: "absolute", left: "-2px", top: "50%", transform: "translateY(-50%)",
                  width: "14px", height: "14px", borderRadius: "50%",
                  background: node.color, border: "2px solid #0a1a0f",
                  flexShrink: 0, zIndex: 1,
                }} />

                <div style={{ fontSize: "22px", flexShrink: 0, lineHeight: 1 }}>{node.emoji}</div>
                <div style={{ flex: 1 }}>
                  <div style={{ display: "flex", justifyContent: "space-between", alignItems: "flex-start", marginBottom: "4px" }}>
                    <div style={{ fontSize: "13px", fontWeight: "bold", color: node.color }}>{node.titulo}</div>
                    {node.optional && <div style={{ fontSize: "9px", color: "#52b788", background: "#1b4332", padding: "2px 6px", borderRadius: "4px", flexShrink: 0, marginLeft: "8px" }}>OPCIONAL</div>}
                  </div>
                  <div style={{ fontSize: "10px", color: "#40916c", marginBottom: "5px" }}>{node.semana}</div>
                  <div style={{ fontSize: "12px", color: "#74c69d", lineHeight: "1.5" }}>{node.desc}</div>
                  <div style={{ fontSize: "10px", color: "#2d6a4f", marginTop: "6px" }}>→ Ver sección completa</div>
                </div>
              </div>
            </button>
          </div>
        ))}
      </div>
    </div>
  );
}

