// GUÍA SETAS - MODO KIT
// Componentes para cultivo con kit SGFC (Easy Mode - 2-3 semanas)

function COMPRA_SETAS_KIT() {
  return (
    <div>
      <InfoBoxM>
        Kit Psilocybe cubensis. Todo incluido para empezar. La opción más autónoma y fácil para principiantes — no requiere equipo de esterilización ni conocimientos microbiológicos avanzados.
      </InfoBoxM>

      <SectionTitleM>LISTA DE COMPRA — KIT BÁSICO</SectionTitleM>
      {[
        { item: "🍄 Pan de micelio (Psilocybe cubensis)", precio: "35-60€", donde: "Zamnesia / Grow shops", nota: "Span totalmente colonizado. Listo para fructificar." },
        { item: "📦 SGFC (Still Air Fruit Chamber) - KIT", precio: "45-80€", donde: "Amazon / eBay", nota: "Cámara de plástico 55L, perlita, rejilla, spray. O compra cada pieza por separado (más barato)." },
        { item: "💧 Perlita", precio: "8-12€", donde: "Amazon / Grow shops", nota: "Sostrato para mantener humedad en la cámara. 5L es suficiente." },
        { item: "🌡️ Termómetro/Higrómetro digital", precio: "8-15€", donde: "Amazon", nota: "Monitorear temperatura 20-25°C y humedad 90-95%." },
        { item: "💨 Spray de agua destilada", precio: "3-8€", donde: "Cualquier farmacia", nota: "Usar agua destilada para nebulizar. El grifo tiene minerales que bloquean." },
        { item: "🧴 Agua destilada (10L)", precio: "4-8€", donde: "Cualquier supermercado", nota: "Para nebulizar el span 2-3 veces diarias." },
        { item: "🧤 Guantes de nitrilo", precio: "3-5€", donde: "Amazon / farmacia", nota: "Evitar contaminar con bacterias de la piel. 100 uds bastante." },
        { item: "📍 Alcohol isopropílico 70%", precio: "5-10€", donde: "Farmacia", nota: "Desinfectar superficies. Opcional pero recomendado." },
        { item: "📦 Bolsas herméticas", precio: "2-4€", donde: "Cualquier tienda", nota: "Para almacenar setas secas a largo plazo." },
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
        <div style={{ fontSize: "12px", color: MUSHROOM_COLORS.textBright, lineHeight: "1.6" }}>
          <span style={{ fontWeight: "bold" }}>Costo total estimado: 150-250€ (reutilizable para múltiples flushes)</span>
        </div>
      </div>
    </div>
  );
}

function SETUP_SETAS_KIT() {
  return (
    <div>
      <InfoBoxM>
        Montaje de la cámara <GlossaryLink term="SGFC (Still Air Fruit Chamber)">SGFC</GlossaryLink>. Setup correcto = 90% del éxito. Temperatura, <GlossaryLink term="Humedad">humedad</GlossaryLink>, <GlossaryLink term="FAE (Fresh Air Exchange)">FAE</GlossaryLink> (intercambio aire). Todo paso a paso.
      </InfoBoxM>

      <SectionTitleM>MONTAR LA CÁMARA SGFC</SectionTitleM>
      <StepM num={1} text="Rellena el fondo con perlita hasta 5cm de altura. Moja ligeramente (no encharcada). La perlita mantiene humedad por evaporación." why="La humedad que sube por evaporación es lo que los hongos necesitan. Perlita seca = cámara seca." />
      <StepM num={2} text="Coloca la rejilla de plástico sobre la perlita. El span va EN CIMA de la rejilla, no en la perlita." />
      <StepM num={3} text="Posiciona el termómetro/higrómetro en la misma altura que el span, visibles desde la puerta." />
      <StepM num={4} text="Cierra la cámara. Comprueba que no hay fugas de aire por sellos." />
      <StepM num={5} text="Monta spray con agua destilada. Todos los días / 2-3 veces diarias una vez que salgan primordios." why="La humedad sube y baja pero siempre oscila alrededor de 90-95%. Sin esto los frutos se marchitan." />

      <SectionTitleM>CONDICIONES IDEALES</SectionTitleM>
      <div style={{ display: "grid", gridTemplateColumns: "1fr 1fr", gap: "10px", marginBottom: "20px" }}>
        <StatBoxM label="Temperatura" value="20–25°C" />
        <StatBoxM label="Humedad" value="90–95%" />
        <StatBoxM label="Luz" value="Luz indirecta" />
        <StatBoxM label="FAE" value="Cada 6–12h" />
      </div>

      <SectionTitleM>QUÉ ES FAE (Fresh Air Exchange)</SectionTitleM>
      <div style={{ background: MUSHROOM_COLORS.bg2, border: `1px solid ${MUSHROOM_COLORS.border1}`, borderRadius: "10px", padding: "12px", marginBottom: "12px" }}>
        <div style={{ fontSize: "13px", color: MUSHROOM_COLORS.textBright, lineHeight: "1.6" }}>
          Los hongos respiran. Necesitan oxígeno. FAE = abrir la cámara 10-20 segundos para que salga CO2 y entre aire fresco. Hazlo cada 6-12 horas. En SGFC es manual.
        </div>
      </div>

      <SectionTitleM color="#e63946">🚫 ERRORES SETUP</SectionTitleM>
      <ErrorCardM error="Perlita seca" consecuencia="Humedad cae a 40-50%. Primordios no salen o se marchitan." fix="Rocía perlita diariamente. Mantén al 80%+ mojada." />
      <ErrorCardM error="No hacer FAE" consecuencia="CO2 se acumula. Hongos crecen deformes o no salen." fix="Abre 10-20s cada 6-12h. Simple pero crítico." />
      <ErrorCardM error="Temperatura >28°C" consecuencia="Trichoderma (moho verde) crece rápido y mata el span." fix="Mantén 20-25°C. Si pasa: refrigera o cambia ubicación." />
    </div>
  );
}

function INCUBACION_SETAS_KIT() {
  return (
    <div>
      <InfoBoxM>
        Primeros 7-10 días desde que sacas el pan del frigorífico. El span espera en la <GlossaryLink term="SGFC (Still Air Fruit Chamber)">SGFC</GlossaryLink> a que salgan los primeros <GlossaryLink term="Primordio / Pinhead">pinheads (primordios)</GlossaryLink>. Rutina simple.
      </InfoBoxM>

      <SectionTitleM>DÍA 1-2: POST-SETUP</SectionTitleM>
      <StepM num={1} text="Sacas el pan de micelio del frigorífico. Déjalo a temperatura ambiente 2-3h antes de meterlo en la SGFC." why="Cambio de temperatura brusco = estrés = retraso en fructificación." />
      <StepM num={2} text="Colócalo en la SGFC sobre la rejilla. Rocía el span ligeramente (no empapado)." />
      <StepM num={3} text="Verifica temp/HR. Deben estar en rango (20-25°C, 90-95%)." />
      <StepM num={4} text="Cierra la cámara. Ahora entra en modo 'waiting'." />

      <SectionTitleM>DÍA 3-7: ESPERA + RUTINA</SectionTitleM>
      <StepM num={1} text="Rocía 2-3 veces al día — aspergea la perlita, no directamente el span." />
      <StepM num={2} text="FAE cada 6-12h — abre 10-20 segundos, cierra." />
      <StepM num={3} text="Monitorea temp/HR — mantén en rango." />
      <StepM num={4} text="Inspecciona el span — busca cambios en la superficie (color, textura)." />

      <SectionTitleM>SEÑALES NORMALES (no te asustes)</SectionTitleM>
      <div style={{ background: MUSHROOM_COLORS.bg2, border: `1px solid ${MUSHROOM_COLORS.border1}`, borderRadius: "10px", padding: "12px", marginBottom: "12px" }}>
        <div style={{ fontSize: "12px", color: MUSHROOM_COLORS.accent3, lineHeight: "1.6" }}>
          ✓ Condensación dentro (gotitas en las paredes) = humedad perfecta<br/>
          ✓ Cambios mínimos en el span primeros días = normal<br/>
          ✓ Olor ligero a tierra = esperado<br/>
          ✓ Período de incubación largo (7-14 días) = varía por temperatura
        </div>
      </div>

      <SectionTitleM color="#e63946">⚠️ SEÑALES DE CONTAMINACIÓN</SectionTitleM>
      <ErrorCardM error="Moho verde (Trichoderma)" consecuencia="Crece rápido y mata el span. Fin del proyecto." fix="Si aparece: aumenta temperatura a 28°C para acelerar Psilocybe o descarta span. Es raro en kits pre-colonizados." />
      <ErrorCardM error="Manchas negras/grises" consecuencia="Podría ser contaminación bacteriana o temprana Botrytis." fix="Si es pequeña: intenta secar zona con papel. Si se expande: descarta." />
      <ErrorCardM error="Olor fuerte/pútrido" consecuencia="Descomposición del sustrato. Bacteria." fix="Descarta el span. Limpia la SGFC antes del siguiente." />
    </div>
  );
}

function FRUCTIFICACION_SETAS_KIT() {
  return (
    <div>
      <InfoBoxM>
        Los primeros <GlossaryLink term="Primordio / Pinhead">pinheads</GlossaryLink> aparecen (días 7-12). Ahora cambia todo — más nebulización, <GlossaryLink term="FAE (Fresh Air Exchange)">FAE</GlossaryLink> frecuente, espectador. Toma 5-7 días hasta cosecha.
      </InfoBoxM>

      <SectionTitleM>PRIMEROS PINHEADS — CAMBIO DE FASE</SectionTitleM>
      <StepM num={1} text="Cuando veas los primeros pelotitos (pinheads) en la superficie, aumenta nebulización a 4-5 veces al día." why="Los hongos crecen rápido ahora. Necesitan más agua evaporada para expandir." />
      <StepM num={2} text="FAE sigue cada 6-12h. No cambies." />
      <StepM num={3} text="Mantén humedad 90-95% constante. Es crítico." />

      <SectionTitleM>CRECIMIENTO — DÍAS 1-4 FRUCTIFICACIÓN</SectionTitleM>
      <div style={{ background: MUSHROOM_COLORS.bg2, border: `1px solid ${MUSHROOM_COLORS.border1}`, borderRadius: "10px", padding: "12px", marginBottom: "12px" }}>
        <div style={{ fontSize: "12px", color: MUSHROOM_COLORS.accent3, lineHeight: "1.6" }}>
          Los pinheads crecen visiblemente. Cada día son 2-3x más grandes. El sombrero se abre. Los pies se alargan. Nebuliza frecuentemente pero no empaques (gota creciente causa problemas).
        </div>
      </div>

      <SectionTitleM>EL VELO — PUNTO CRÍTICO</SectionTitleM>
      <StepM num={1} text="El hongo tiene una membrana bajo el sombrero (velo). Cuando está intacto = óptimo de potencia." why="El velo significa que los esporangios aún liberan esporas, máxima concentración de psilocina." />
      <StepM num={2} text="Cuando el velo se rompe (el sombrero se separa del pie) = pasaste el punto ideal pero aún bueno." />
      <StepM num={3} text="Cosecha ANTES de que se rompa el velo o JUSTO cuando lo hace. Evita cosechar después (esporas negras)." why="Esporas = polvo negro que mancha el siguiente flush si se deposita en el sustrato." />

      <SectionTitleM>SEÑALES DE LISTO PARA COSECHAR</SectionTitleM>
      <div style={{ background: MUSHROOM_COLORS.bg3, borderRadius: "10px", padding: "12px", marginBottom: "12px" }}>
        <div style={{ fontSize: "12px", color: MUSHROOM_COLORS.accent2, lineHeight: "1.6" }}>
          ✓ Sombrero aún abovedado (no plano)<br/>
          ✓ Velo intacto o justo roto<br/>
          ✓ Pie gordo y resistente<br/>
          ✓ Tamaño: 2-5cm de diámetro típico<br/>
          ✗ Sombrero girado hacia abajo = pasado<br/>
          ✗ Esporas negras = muy tarde
        </div>
      </div>

      <SectionTitleM color="#e63946">⚠️ PROBLEMAS EN FRUCTIFICACIÓN</SectionTitleM>
      <ErrorCardM error="Hongos muy pequeños / no crecen" consecuencia="Humedad muy baja o FAE insuficiente." fix="Aumenta nebulización a 5-6 veces/día y FAE cada 4h." />
      <ErrorCardM error="Hongos deformes (cuerpos largos, sombreros planos)" consecuencia="Muy poco FAE (acumula CO2)." fix="Aumenta FAE cada 4h. El hongo busca aire." />
      <ErrorCardM error="Manchas oscuras en el sombrero" consecuencia="Agua de nebulización con mala calidad o moho temprano." fix="Usa solo agua destilada. Si avanza: corta esa zona." />
    </div>
  );
}

function COSECHA_SETAS_KIT() {
  return (
    <div>
      <InfoBoxM>
        Técnica giro-tirón. Es brutalmente simple. El hongo se separa del <GlossaryLink term="Sustrato">sustrato</GlossaryLink> limpiamente si lo haces bien. Múltiples <GlossaryLink term="Flush">flushes</GlossaryLink> después = <GlossaryLink term="Cold shock">cold shock</GlossaryLink>.
      </InfoBoxM>

      <SectionTitleM>TÉCNICA GIRO-TIRÓN</SectionTitleM>
      <StepM num={1} text="Agarra el hongo por la base (donde toca el span). Nunca por el sombrero." why="Sombrero es frágil y se rompe. Base es resistente." />
      <StepM num={2} text="Gira suavemente en círculos (1-2 vueltas). El pie se va despegando del sustrato." />
      <StepM num={3} text="Tira hacia afuera con decisión. El hongo se sale limpiamente con un pequeño 'pop'." />
      <StepM num={4} text="Limpia la base: raspa con un cuchillo pequeño cualquier sustrato pegado." why="Sustrato que queda pudrece y contamina el siguiente flush." />

      <SectionTitleM>COSECHAR TODO O POR ONDAS</SectionTitleM>
      <div style={{ background: MUSHROOM_COLORS.bg2, border: `1px solid ${MUSHROOM_COLORS.border1}`, borderRadius: "10px", padding: "12px", marginBottom: "12px" }}>
        <div style={{ fontSize: "12px", color: MUSHROOM_COLORS.accent3, lineHeight: "1.6" }}>
          <strong>Opción A (más fácil):</strong> Cosecha TODA la oleada en 24h. Todos maduran similar, cosechas al mismo tiempo.<br/>
          <strong>Opción B (máximo):</strong> Cosecha por madurez — primero los grandes, espera 6-12h más para pequeños. Requiere más cuidado pero +5-10% extra.
        </div>
      </div>

      <SectionTitleM>DESPUÉS DE COSECHAR — PREP PARA SIGUIENTE FLUSH</SectionTitleM>
      <StepM num={1} text="Inspecciona el span — busca hongos que quedaron pequeños o deformes. Retíralos con la uña." />
      <StepM num={2} text="Humedece el span completamente — anega agua hasta que esté 100% empapado. Déjalo así 6-12h." why="El span necesita rehidratarse. Sin agua no da siguiente flush." />
      <StepM num={3} text="Escurre el exceso — tira agua del fondo de la cámara si hay acumulada." />
      <StepM num={4} text="Vuelve a la rutina: nebulizar 4-5x/día, FAE cada 6-12h. Los pinheads salen en 3-5 días." />

      <SectionTitleM>FLUSHES TOTALES</SectionTitleM>
      <div style={{ background: MUSHROOM_COLORS.bg3, borderRadius: "10px", padding: "12px", marginBottom: "12px" }}>
        <div style={{ fontSize: "12px", color: MUSHROOM_COLORS.accent2, lineHeight: "1.6" }}>
          Flush 1: 70-150g (mejor rendimiento)<br/>
          Flush 2: 50-100g<br/>
          Flush 3: 30-60g<br/>
          Flush 4+: 10-30g (decrece, menos rentable)<br/>
          <strong>Total típico: 200-300g de span de 1kg</strong>
        </div>
      </div>
    </div>
  );
}

function SECADO_SETAS_KIT() {
  return (
    <div>
      <InfoBoxM>
        Secado correcto = conservación larga. <GlossaryLink term="Cracker dry">Cracker dry</GlossaryLink> es el estándar. Los hongos deben quebrarse como galleta sin dejar huella digital. Empieza con <GlossaryLink term="Presecado">presecado</GlossaryLink>.
      </InfoBoxM>

      <SectionTitleM>PRESECADO — PRIMERAS 2-3 HORAS</SectionTitleM>
      <StepM num={1} text="Coloca los hongos frescos en una bandeja limpia (no papel — mojado)." />
      <StepM num={2} text="A temperatura ambiente, luz indirecta, aire circulando (ventilador bajo sin soplar directo)." />
      <StepM num={3} text="Quítales la humedad superficial. El agua que cae por evaporación es lo que buscas." />

      <SectionTitleM>SECADO PRINCIPAL — DESECADOR + SILICA GEL (24h)</SectionTitleM>
      <StepM num={1} text="Coloca silica gel en el fondo de un desecador o tupperware hermético." why="Silica gel absorbe humedad. Sin ella = secado lento o moho." />
      <StepM num={2} text="Coloca una bandeja o rejilla ENCIMA del silica (no en contacto directo)." />
      <StepM num={3} text="Pon los hongos presecados ahí. Cierra hermético." />
      <StepM num={4} text="Espera 24h. El silica absorberá el último ~10% de humedad." />

      <SectionTitleM>TEST CRACKER DRY</SectionTitleM>
      <div style={{ background: MUSHROOM_COLORS.bg2, border: `1px solid ${MUSHROOM_COLORS.border1}`, borderRadius: "10px", padding: "12px", marginBottom: "12px" }}>
        <div style={{ fontSize: "12px", color: MUSHROOM_COLORS.accent3, lineHeight: "1.6" }}>
          Agarra un hongo y dóblalo. Debe quebrarse completamente sin flexibilidad. Si se dobla = aún mojado. Vuelve al desecador 12h más.
        </div>
      </div>

      <SectionTitleM>ALMACENAJE — LARGO PLAZO</SectionTitleM>
      <StepM num={1} text="Bolsa hermética (bolsa mylar opaca, mejor)." />
      <StepM num={2} text="Silica gel DENTRO de la bolsa (pequeña cantidad)." />
      <StepM num={3} text="Sella herméticamente." />
      <StepM num={4} text="Guardar en lugar frío, oscuro, seco." />
      <StepM num={5} text="Congelador = duración 2+ años sin pérdida de potencia." why="El frío detiene toda degradación. Descongelación sin abrir bolsa (evita condensación)." />

      <SectionTitleM>DURACIÓN ALMACENADO</SectionTitleM>
      <div style={{ background: MUSHROOM_COLORS.bg3, borderRadius: "10px", padding: "12px", marginBottom: "12px" }}>
        <div style={{ fontSize: "12px", color: MUSHROOM_COLORS.accent2, lineHeight: "1.6" }}>
          🌡️ Temperatura ambiente (20-25°C): 6-12 meses<br/>
          ❄️ Frigorífico (4°C): 1-2 años<br/>
          🧊 Congelador (-18°C): 2-5 años<br/>
          🧊+💨 Congelador + bolsa mylar: 5+ años
        </div>
      </div>

      <SectionTitleM color="#e63946">🚫 ERRORES SECADO</SectionTitleM>
      <ErrorCardM error="Secar con calor (horno, secador)" consecuencia="Degrada psilocina. Menor potencia, posible degradación." fix="Nunca >50°C. Silica gel a temp ambiente es mejor." />
      <ErrorCardM error="No es cracker dry pero lo guardas" consecuencia="Moho en la bolsa hermética en 1-2 semanas." fix="Espera a quiebre total sin flexión." />
      <ErrorCardM error="Guardar sin silica en bolsa cerrada" consecuencia="Pequeña humedad residual no tiene dónde ir. Moho." fix="Siempre silica dentro, aunque sea poco." />
    </div>
  );
}
