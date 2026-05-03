// GUÍA SETAS - MODO MANUAL
// Componentes para cultivo desde cero (Advanced Mode - 4-8 semanas)

function COMPRA_SETAS_MANUAL() {
  return (
    <div>
      <InfoBoxM>
        Todo lo necesario para cultivar desde cero: esterilizar grano, inocular, colonizar, fructificar. Máximo control, mayor rendimiento, pero requiere precisión microbiológica.
      </InfoBoxM>

      <SectionTitleM>LISTA DE COMPRA — MANUAL COMPLETO</SectionTitleM>
      {[
        { item: "🔥 Olla a presión (6-10L)", precio: "40-80€", donde: "Amazon / Electro", nota: "Imprescindible para esterilización. 15 PSI, 2+ horas. Marcas: Beltran, Magefesa." },
        { item: "🫙 Frascos de vidrio (500ml/1L)", precio: "15-30€", donde: "Ikea / Carrefour", nota: "12-15 frascos totales. Serán contenedores para grano inoculado. Reutilizable años." },
        { item: "🌾 Granos de cereal (kg)", precio: "5-15€", donde: "Tiendas agrícolas", nota: "Cebada, centeno, avena. Seco. Base del sustrato. Requiere cocción + esterilización." },
        { item: "🧫 Jeringa de esporas Psilocybe", precio: "20-40€", donde: "Spore vendors (Europa)", nota: "Contiene esporas en solución estéril. Crítico: compra de fuente fiable." },
        { item: "🪜 SAB (Still Air Box)", precio: "20-40€", donde: "DIY o Amazon", nota: "Caja hermética para inocular sin contaminación. DIY: caja + guantes de látex." },
        { item: "🔬 Alcohol isopropílico 70%", precio: "8-15€", donde: "Farmacia", nota: "Desinfectar SAB, herramientas, manos. 1L es suficiente." },
        { item: "🧪 Aguja 0.5mm x 25mm", precio: "3-8€", donde: "Farmacia", nota: "Inyectar esporas. Compra 2-3 (pueden romperse)." },
        { item: "💧 Coco coir / Vermiculita", precio: "8-15€", donde: "Grow shops / Amazon", nota: "Sustrato para bulk tek. 5L coco coir + 5L perlita + 5L agua." },
        { item: "📦 Cajas/contenedores plástico", precio: "10-20€", donde: "Ikea / Carrefour", nota: "Para monotub. Aprox 40L. Necesitarás 1-2." },
        { item: "🌡️ Termómetro digital", precio: "5-10€", donde: "Amazon", nota: "Monitorear 24-28°C durante incubación." },
        { item: "🪥 Bolsas de granos esterilizables", precio: "5-10€", donde: "Grow shops", nota: "Alternativa a frascos. Spawn bags reutilizables." },
        { item: "⚖️ Báscula digital", precio: "10-20€", donde: "Amazon", nota: "Pesar grano seco, sustrato. Precisión: ±1g." },
      ].map((item, i) => (
        <div key={i} style={{ background: MUSHROOM_COLORS.bg2, border: `1px solid ${MUSHROOM_COLORS.border1}`, borderRadius: "10px", padding: "12px", marginBottom: "8px" }}>
          <div style={{ display: "flex", justifyContent: "space-between", marginBottom: "6px" }}>
            <div style={{ fontSize: "13px", fontWeight: "bold", color: MUSHROOM_COLORS.textBright }}>{item.item}</div>
            <div style={{ fontSize: "11px", color: MUSHROOM_COLORS.accent1, fontWeight: "bold" }}>{item.precio}</div>
          </div>
          <div style={{ fontSize: "11px", color: MUSHROOM_COLORS.accent2, marginBottom: "4px" }}>📍 {item.donde}</div>
          <div style={{ fontSize: "12px", color: MUSHROOM_COLORS.accent3 }}>{item.nota}</div>
        </div>
      ))}

      <div style={{ background: MUSHROOM_COLORS.bg3, borderRadius: "10px", padding: "14px", marginTop: "20px" }}>
        <div style={{ fontSize: "12px", color: MUSHROOM_COLORS.textBright", lineHeight: "1.6" }}>
          <span style={{ fontWeight: "bold" }}>Costo total estimado: 200-350€ (reutilizable años, múltiples ciclos)</span>
        </div>
      </div>
    </div>
  );
}

function ESTERILIZACION() {
  return (
    <div>
      <InfoBoxM>
        Esterilizar el grano es el paso crítico. Matar todo lo vivo (hongos contaminantes, bacterias) sin arruinar el grano. Tiempo, temperatura, presión exactos.
      </InfoBoxM>

      <SectionTitleM>PREPARACIÓN GRANO (ANTES de olla)</SectionTitleM>
      <StepM num={1} text="Pesa 500g de grano seco. Lávalo 2-3 veces bajo agua corriente hasta que salga claro." why="Eliminar polvo y restos que podrían contaminar." />
      <StepM num={2} text="Vierte en olla. Añade 1L de agua. Hiérve 45min a fuego medio-alto." why="Cocción previa = blanda el grano y mata algunos contaminantes." />
      <StepM num={3} text="Cuela. Deja escurrir bien (no encharcado). El grano debe estar húmedo pero no goteando." />
      <StepM num={4} text="Distribuye en frascos (250-300g por frasco). Tapa suelta (no hermética aún)." />

      <SectionTitleM>ESTERILIZACIÓN EN OLLA A PRESIÓN</SectionTitleM>
      <StepM num={1} text="Vierte 2L agua en olla. Coloca trípode en el fondo. Dispón frascos sobre trípode." why="El trípode evita que los frascos toquen el fondo (se romperían). El agua no entra en los frascos." />
      <StepM num={2} text="Cierra la olla. Sube a fuego alto hasta que sale vapor (5min). Luego baja a medio-bajo." />
      <StepM num={3} text="Mantén 15 PSI durante 90 minutos. Usa regulador de presión." why="15 PSI = 121°C. 90min mata esporas de Trichoderma y bacterias. Menos tiempo = riesgo contaminación." />
      <StepM num={4} text="Apaga fuego. Deja enfriar naturalmente (NO abras rápido). Mínimo 4 horas, idealmente overnight." why="Abrir rápido = golpe de presión que abre frascos = entra aire contaminado." />
      <StepM num={5} text="Al día siguiente: saca frascos. Deben estar completamente fríos. Tápalos herméticamente." />

      <SectionTitleM>CONDICIONES ESTERILIZACIÓN</SectionTitleM>
      <div style={{ display: "grid", gridTemplateColumns: "1fr 1fr", gap: "10px", marginBottom: "20px" }}>
        <StatBoxM label="Presión" value="15 PSI" />
        <StatBoxM label="Temperatura" value="121°C" />
        <StatBoxM label="Tiempo" value="90 min" />
        <StatBoxM label="Enfriamiento" value="4h+ natural" />
      </div>

      <SectionTitleM color="#e63946">🚫 ERRORES ESTERILIZACIÓN</SectionTitleM>
      <ErrorCardM error="Presión baja (<15 PSI)" consecuencia="Temperatura insuficiente. Esporas de Trichoderma sobreviven. Contaminación casi segura." fix="Sube presión a 15 PSI mínimo. Usa manómetro si tienes." />
      <ErrorCardM error="Tiempo corto (<90min)" consecuencia="Bacterias esporuladas (especialmente Bacillus) sobreviven." fix="Nunca bajes de 90min. Si estás fuera, 100-120min es más seguro." />
      <ErrorCardM error="Abrir frasco caliente" consecuencia="Aire contaminado entra mientras se enfría. Futuro cultivo fallará." fix="Espera mínimo 4h. Hazlo overnight si puedes. Abre en SAB desinfectado." />
    </div>
  );
}

function INOCULACION() {
  return (
    <div>
      <InfoBoxM>
        Inyectar esporas en grano estéril. Aquí entra tu primero el hongo Psilocybe. La asepsia es 100% crítica — uno solo de bacteria = contaminación.
      </InfoBoxM>

      <SectionTitleM>PREPARAR SAB (Still Air Box)</SectionTitleM>
      <StepM num={1} text="Caja hermética (23L mínimo). Tapa con 2 agujeros. Guantes de látex largos. Algodón + alcohol en agujeros." why="SAB reduce movimiento de aire = menos contaminantes. Guantes = barrera bacteria piel." />
      <StepM num={2} text="Antes de usar: limpia interior con alcohol 70%. Deja secar 5min. Enciende luz interior (opcional pero útil)." />
      <StepM num={3} text="Coloca materiales dentro: jeringa esporas, aguja, alcohol, gasa, frascos fríos." />

      <SectionTitleM>PROTOCOLO INOCULACIÓN</SectionTitleM>
      <StepM num={1} text="Ponte guantes limpios. Fricciona manos con alcohol en SAB antes de meter las manos." />
      <StepM num={2} text="Limpia exterior del frasco con gasa + alcohol. Déjalo secar." />
      <StepM num={3} text="Carga jeringa con 1cc de solución de esporas. Agita bien la jeringa (esporas se sedimentan)." why="Si no agitas, inyectas solo agua. Esporas están en el fondo del vial." />
      <StepM num={4} text="Flameador/encendedor: calienta la aguja hasta rojo vivo (3-5seg). Deja enfriar 15seg." why="Mata bacteria en la aguja. Si entra caliente mata esporas." />
      <StepM num={5} text="Inyecta a través del sello/tapa del frasco. Presión suave. Deja 0.5cc en el frasco. Retira." />
      <StepM num={6} text="Si usas frascos sin sellos: usa micropore tape (cinta de carcelería). Saca aguja limpiamente." />

      <SectionTitleM>Post-INOCULACIÓN</SectionTitleM>
      <StepM num={1} text="Etiqueta frascos: variedad, fecha inoculación." />
      <StepM num={2} text="Coloca en oscuridad total, 24-28°C. Ideal: caja en armario, manta térmica si hace frío." />
      <StepM num={3} text="No los toquesaún. Espera colonización." />

      <SectionTitleM color="#e63946">🚫 ERRORES INOCULACIÓN</SectionTitleM>
      <ErrorCardM error="No flamear aguja" consecuencia="Bacteria entra directo. Contaminación en 3-5 días (color verde o amarillo)." fix="SIEMPRE flameador antes. Es el paso más crítico." />
      <ErrorCardM error="Jringa contaminada" consecuencia="Toda la solución de esporas = bacteria. Toda inoculación fallará." fix="Compra de vendor conocido. Si ves precipitado/turbiedad = no usar." />
      <ErrorCardM error="SAB sucia" consecuencia="Aire contaminado = cualquier asepsia falla." fix="Limpia SAB con alcohol antes SIEMPRE. Es tu barrera." />
    </div>
  );
}

function INCUBACION_SETAS_MANUAL() {
  return (
    <div>
      <InfoBoxM>
        Colonización del grano: 14-21 días esperando a que el micelio blanco crezca y colonice todo el grano. Los hongos son lentos pero imparables si hay asepsia.
      </InfoBoxM>

      <SectionTitleM>DÍA 1-7: PRIMER SIGNO</SectionTitleM>
      <StepM num={1} text="Día 3-5: mira los frascos. Busca topos blancos en el grano (micelio germinando). Es normal lento." />
      <StepM num={2} text="Temperatura: mantén 24-28°C (cuanto más cálido = más rápido, pero >28 riesgo Trichoderma)." />
      <StepM num={3} text="Oscuridad total: micelio crece sin luz." />
      <StepM num={4} text="Inspecciona visualmente: ¿color blanco? Bien. ¿Verde? Contaminación. ¿Amarillo/naranja? Bacteria." />

      <SectionTitleM>DÍA 8-14: COLONIZACIÓN ACTIVA</SectionTitleM>
      <StepM num={1} text="El micelio cubre cada vez más grano. Puede avanzar 10-15% por día." />
      <StepM num={2} text="Día 10 (aproximado): agita el frasco suavemente (3-5 segundos). Rompe colonias = micelio se propaga más rápido." why="El movimiento 'despierta' el micelio. Sin agitar tarda 5-7 días más." />
      <StepM num={3} text="Monitorea temp: si baja de 24°C, crecimiento se ralentiza. Si sube >28°C, Trichoderma aprovecha." />
      <StepM num={4} text="Mantén oscuridad." />

      <SectionTitleM>DÍA 15-21: COLONIZACIÓN FINAL</SectionTitleM>
      <StepM num={1} text="Día 18-21: el grano debe estar 80%+ blanco. Es el 'spawn' listo para usar." />
      <StepM num={2} text="Señal de éxito: grano compacto, blanco, sin toques de verde/amarillo." />
      <StepM num={3} text="Una vez 100% colonizado, puedes pasar a fructificación (bulk tek) o guardar en frío 2-3 meses." />

      <SectionTitleM>SEÑALES CONTAMINACIÓN (ABORTAR)</SectionTitleM>
      <div style={{ background: MUSHROOM_COLORS.bg2, border: `1px solid ${MUSHROOM_COLORS.border1}`, borderRadius: "10px", padding: "12px", marginBottom: "12px" }}>
        <div style={{ fontSize: "12px", color: MUSHROOM_COLORS.accent3, lineHeight: "1.6" }}>
          <strong>Verde oscuro/claro</strong> = Trichoderma (hongo contaminante). Abortar.<br/>
          <strong>Amarillo/naranja/rosa</strong> = Bacteria. Abortar inmediatamente.<br/>
          <strong>Negro</strong> = Moho negro (Aspergillus). Peligroso. Abortar, tira lejos.<br/>
          <strong>Olor extraño</strong> = Fermentación/bacteria. Abortar.
        </div>
      </div>

      <SectionTitleM color="#e63946">🚫 ERRORES INCUBACIÓN</SectionTitleM>
      <ErrorCardM error="Temperatura baja (<20°C)" consecuencia="Micelio crece lentísimo. 30+ días en lugar de 14-21. Alto riesgo contaminación." fix="Usa manta térmica o coloca en armario cerrado (calor corporal)." />
      <ErrorCardM error="No agitar" consecuencia="Colonización tarda 7-10 días más. Más tiempo = más riesgo." fix="Agita día 8-10 suavemente. 3-5 seg es suficiente." />
      <ErrorCardM error="Abrir frasco sin need" consecuencia="Aire contaminado entra. Colonización falla." fix="Abre solo si NECESITAS (ver contaminación clara). Mantén tapa cerrada." />
    </div>
  );
}

function FRUCTIFICACION_SETAS_MANUAL() {
  return (
    <div>
      <InfoBoxM>
        Bulk tek o monotub: mezclar spawn colonizado con sustrato, meter en caja, y dejar que fructifique. Rendimiento mucho mayor que kit (200-400g en 1ª cosecha).
      </InfoBoxM>

      <SectionTitleM>PREPARACIÓN SUSTRATO</SectionTitleM>
      <StepM num={1} text="Mezcla: 5L coco coir + 5L perlita + 5L agua (destilada si posible)." why="Proporción 1:1:1 (sustrato:perlita:agua) es estándar. Coco absorbe agua, perlita + humedad." />
      <StepM num={2} text="Mezcla bien. Debe quedar uniforme, húmedo pero no goteando. Si necesita, añade más agua gota a gota." />
      <StepM num={3} text="Compacta ligeramente en una bolsa o contenedor. Cubre con plástico. Puede estar 24h así (no es crítico esterilizar)." />

      <SectionTitleM>INOCULACIÓN BULK TEK</SectionTitleM>
      <StepM num={1} text="Coloca sustrato en monotub (caja 40L). Espesor 8-10cm." />
      <StepM num={2} text="Distribuye spawn colonizado (4-5 frascos = ~1.5-2kg) sobre el sustrato. Mezcla ligeramente (no agites como loco)." />
      <StepM num={3} text="Tapa el monotub. Mantén oscuridad 14-21 días. Temperatura 24-28°C." why="Fase de colonización del sustrato. Micelio se propaga por el bulk. Sin luz, sin necesidad de FAE aún." />
      <StepM num={4} text="Día 14-21: toda la surface debe estar blanca. Es el trigger para iniciar fructificación." />

      <SectionTitleM>FRUCTIFICACIÓN (PRIMORDIOS A COSECHA)</SectionTitleM>
      <StepM num={1} text="Retira la tapa. Abre los agujeros de ventilación (2-4 agujeros en lados, cubiertos con tela de filtro)." />
      <StepM num={2} text="Niebla 2-3 veces al día (rocía agua destilada sobre la surface blanca)." why="Humedad dispara primordios. Sin nebulización no salen hongos." />
      <StepM num={3} text="FAE (Fresh Air Exchange): abre monotub 30 seg cada 12h, o deja ventilaciones pasivas abiertas 24/7." />
      <StepM num={4} text="Luz indirecta: no luz directa solar, pero sí claridad ambiental (12h luz natural u 18h artificial)." />
      <StepM num={5} text="Espera 5-7 días: ves primordi (topos blancos), luego crecen rápido en 3-5 días." />

      <SectionTitleM>COSECHA READY</SectionTitleM>
      <div style={{ background: MUSHROOM_COLORS.bg2, border: `1px solid ${MUSHROOM_COLORS.border1}`, borderRadius: "10px", padding: "12px", marginBottom: "12px" }}>
        <div style={{ fontSize: "12px", color: MUSHROOM_COLORS.accent3, lineHeight: "1.6" }}>
          Busca <strong>velo roto</strong> o a punto de romperse. El velo = membrana bajo el sombrero.<br/>
          <strong>Óptimo</strong>: justo antes o justo después del velo.<br/>
          <strong>Rendimiento 1ª cosecha</strong>: 200-400g (peso fresco).
        </div>
      </div>

      <SectionTitleM color="#e63946">🚫 ERRORES FRUCTIFICACIÓN</SectionTitleM>
      <ErrorCardM error="Sin nebulización" consecuencia="Humedad baja. Primordi no emergen o mueren antes de crecer." fix="Niebla 2-3 veces día. Manten 85-95% HR." />
      <ErrorCardM error="Sin FAE" consecuencia="CO2 acumulado. Hongos crecen deformes (sin sombreros) o no salen." fix="Abre caja 30-60seg cada 12h. O usa 4 agujeros con tela." />
      <ErrorCardM error="Luz directa solar" consecuencia="Surface se seca. Quemaduras en hongos." fix="Luz indirecta/ambiental. Nada de sol directo." />
    </div>
  );
}

function COSECHA_SETAS_MANUAL() {
  return (
    <div>
      <InfoBoxM>
        Técnica giro-tirón, recolección limpia, y preparar para flushes siguientes. Un mismo monotub puede dar 4-6 flushes si lo tratas bien.
      </InfoBoxM>

      <SectionTitleM>TÉCNICA GIRO-TIRÓN</SectionTitleM>
      <StepM num={1} text="Con dos dedos (pulgar + índice), agarra la base del pie (donde toca el sustrato)." />
      <StepM num={2} text="Giro suave 180° (media vuelta). Luego tirón firme y ascendente." why="Esto desconecta el hongo del micelio sin dañar el sustrato. Si tiras sin girar, arrancas sustrato." />
      <StepM num={3} text="Deberías extraer el hongo entero (sombrerero + pie). Si se rompe el pie, tira de nuevo." />
      <StepM num={4} text="Coloca en bandeja. Cúbrelo con papel para que no se oscurezca." />

      <SectionTitleM>LIMPIAR HONGOS</SectionTitleM>
      <StepM num={1} text="Raspa suavemente el pie con cuchillo. Quita restos de sustrato (micelio blanco que se adhiere)." why="Sustrato sucio = difícil secar. Micelio en pie = se pudre en almacenaje." />
      <StepM num={2} text="No laves con agua — el hongo es esponja, se empaparía. Usa cepillo suave si necesitas." />

      <SectionTitleM>ENTRE FLUSHES (COLD SHOCK + REHYDRATION)</SectionTitleM>
      <StepM num={1} text="Después de cosechar: mete el monotub en nevera 24h a 4-10°C. Es el 'cold shock' que dispara siguiente flush." why="Imita invierno/lluvia en naturaleza. Dice al micelio: hora de reproducir de nuevo." />
      <StepM num={2} text="Pasadas 24h: saca del frío. Rocía sustrato abundantemente (casi como 'riego'). Deja 4-6h mojado." />
      <StepM num={3} text="Drena exceso de agua. Vuelve a FAE + nebulización cada 12h." />
      <StepM num={4} text="Espera 5-7 días para 2º flush. Rendimiento baja: ~60% del 1º (130-200g típico)." />

      <SectionTitleM>FLUSHES TÍPICOS</SectionTitleM>
      <div style={{ display: "grid", gridTemplateColumns: "1fr 1fr", gap: "10px", marginBottom: "20px" }}>
        <StatBoxM label="1º Flush" value="200-400g" />
        <StatBoxM label="2º Flush" value="120-200g" />
        <StatBoxM label="3º Flush" value="60-100g" />
        <StatBoxM label="Total Flushes" value="4-6" />
      </div>

      <SectionTitleM color="#e63946">🚫 ERRORES COSECHA</SectionTitleM>
      <ErrorCardM error="Tirar sin girar" consecuencia="Arrancas sustrato con el hongo. Micelio se daña. Flushes futuros fallan." fix="SIEMPRE giro primero. Luego tirón ascendente." />
      <ErrorCardM error="Cosechar tarde (esporas sueltas)" consecuencia="Esporas negras ensucian sustrato. Afecta siguiente flush (aspecto, contaminación)." fix="Cosecha antes del velo completamente. Justo antes/después es mejor." />
      <ErrorCardM error="No hacer cold shock" consecuencia="2º flush tarda mucho o no sale. Micelio agotado." fix="SIEMPRE 24h frío entre flushes. Es imprescindible." />
    </div>
  );
}

function SECADO_SETAS_MANUAL() {
  return (
    <div>
      <InfoBoxM>
        Secar sin calor excesivo. Presecado → desecador con silica → cracker dry = conservación años sin perder potencia.
      </InfoBoxM>

      <SectionTitleM>PRESECADO (2-3 HORAS)</SectionTitleM>
      <StepM num={1} text="Coloca hongos en bandeja/cloth a temperatura ambiente. Ventilado (cerca ventilador sin aire directo)." why="Elimina 50% del agua rápido. Sin esta fase = secado demasiado lento (risgo moho)." />
      <StepM num={2} text="Toca: si aún están 'blandos' como tofu = seguir presecando. Si empiezan a endurecerse en superficie = siguiente fase." />
      <StepM num={3} text="Idealmente: 1-2 horas a 20-25°C, HR 50-60%." />

      <SectionTitleM>DESECADOR + SILICA GEL (24 HORAS)</SectionTitleM>
      <StepM num={1} text="Caja hermética + 500g sílica gel (azul = seco, rosado = mojado). Cubre sílica con papel." />
      <StepM num={2} text="Coloca hongos presecados en bandeja DENTRO de desecador (no tocan sílica)." why="Silica absorbe humedad residual. 24h en desecador = casi completamente seco." />
      <StepM num={3} text="Cierra herméticamente. Déjalo 24h a temperatura ambiente." />
      <StepM num={4} text="Después: hongos deben ser tan secos que se quiebran al doblar. Es 'cracker dry'." />

      <SectionTitleM>VERIFICACIÓN CRACKER DRY</SectionTitleM>
      <div style={{ background: MUSHROOM_COLORS.bg2, border: `1px solid ${MUSHROOM_COLORS.border1}`, borderRadius: "10px", padding: "12px", marginBottom: "12px" }}>
        <div style={{ fontSize: "12px", color: MUSHROOM_COLORS.accent3, lineHeight: "1.6" }}>
          <strong>Test de flexión:</strong> Dobla el hongo. Si se quiebra = cracker dry ✓<br/>
          <strong>Test de peso:</strong> El peso debe ser 10% del peso fresco (100g fresco = 10g seco).<br/>
          <strong>Test dedo:</strong> No debe dejar huella si presionas. Si la deja = aún mojado, seguir secando.
        </div>
      </div>

      <SectionTitleM>ALMACENAJE LARGO PLAZO</SectionTitleM>
      <StepM num={1} text="Bolsa hermética pequeña + desiccant (sílica gel o cal viva). Sella bien." />
      <StepM num={2} text="Coloca en lugar frío, oscuro, seco. Freezer es óptimo (4+ años). Nevera = 2+ años. Armario oscuro = 6-12 meses." why="Frío detiene degradación. Oscuridad preserva potencia. Seco previene moho." />
      <StepM num={3} text="Revisa cada 3 meses: si sílica se vuelve rosada, cambia. Si ves moho = tira." />

      <SectionTitleM>ALTERNATIVA EXPRESS: Oven Drying (NO RECOMENDADO)</SectionTitleM>
      <div style={{ background: MUSHROOM_COLORS.errorBg, border: `1px solid ${MUSHROOM_COLORS.errorBorder}`, borderRadius: "10px", padding: "14px", marginBottom: "10px" }}>
        <div style={{ fontSize: "13px", color: MUSHROOM_COLORS.accent3, lineHeight: "1.6" }}>
          Algunos usan horno a 50-60°C. <strong>Alto riesgo</strong>: calor degrada psilocina/psilocibina. Si usas: máximo 2-3h a 50°C, bandeja en rejilla, puerta abierta. Método silica es mucho mejor.
        </div>
      </div>

      <SectionTitleM color="#e63946">🚫 ERRORES SECADO</SectionTitleM>
      <ErrorCardM error="Sin presecado" consecuencia="Secado lento (2+ días). Alto riesgo moho azul/verde. Potencia baja." fix="Presecado 2-3h es imprescindible. Acelera todo." />
      <ErrorCardM error="Calor excesivo (>70°C)" consecuencia="Degradación de psilocina/psilocibina. Menor potencia." fix="Nunca sobre 60°C. Silica + frío es el método superior." />
      <ErrorCardM error="Almacenaje a temperatura ambiente" consecuencia="Degradación lenta. 3 meses = potencia cae 30-50%." fix="Freezer o nevera SIEMPRE. Lugar oscuro + sílica gel + frío." />
    </div>
  );
}
