// GUÍA SETAS - CONTENIDO GENERAL
// Timeline, glosario y FAQ. Aplica a ambos modos (Kit + Manual).

function TIMELINE_SETAS({ navigate }) {
  const [tab, setTab] = React.useState("kit");

  const kitNodes = [
    { dia: "Día 0", titulo: "Compra kit", emoji: "🛒", desc: "Pan de micelio + cámara SGFC + perlita + spray + termómetro. 150-250€ total. Llega en 3-7 días.", mode: "kit", phase: "compra_kit", color: "#8a6240" },
    { dia: "Día 1", titulo: "Setup cámara SGFC", emoji: "📦", desc: "Hidratar perlita en el fondo (5cm). Colocar pan de micelio sobre rejilla. Desinfectar interior con alcohol. Sellar.", mode: "kit", phase: "setup_kit", color: "#aa7c52" },
    { dia: "Días 1-14", titulo: "Incubación", emoji: "🔮", desc: "El span coloniza completamente. Mantener 24-26°C, oscuridad. Verificar humedad 90%+. NO abrir hasta ver primordios.", mode: "kit", phase: "incubacion_kit", color: "#c49a6c" },
    { dia: "Días 14-21", titulo: "Fructificación / Pinheads", emoji: "🍄", desc: "Aparecen primordios (puntos blancos). Nebulizar 3-4x/día. FAE cada 6-12h abriendo cámara. Crecimiento rápido.", mode: "kit", phase: "fructificacion_kit", color: "#dbb98c", highlight: true },
    { dia: "Días 21-25", titulo: "Primera cosecha", emoji: "✂️", desc: "Cosecha cuando velo a punto de romperse. Técnica giro-tirón. Rendimiento 70-150g fresco. Limpia bien la base.", mode: "kit", phase: "cosecha_kit", color: "#eed8b4" },
    { dia: "Días 25-50", titulo: "Flushes 2-4", emoji: "🔄", desc: "Cold shock (24h nevera) + rehidratar. Siguiente flush en 5-10 días. Cada flush 50-70% del anterior. Total 4-6 flushes.", mode: "kit", phase: "fructificacion_kit", color: "#f5e6d0" },
    { dia: "Días 50-55", titulo: "Secado final", emoji: "🌬️", desc: "Presecado + sílica gel hasta cracker dry. Total seco: 30-60g. Almacenamiento 6m-5años según método.", mode: "kit", phase: "secado_kit", color: "#fdf5ea" },
  ];

  const friendlyNodes = [
    { dia: "Día 0", titulo: "Compra friendly", emoji: "🛒", desc: "Spawn bag pre-esterilizado + cultura líquida + bulk substrate CVG + monotub. 100-180€. NO olla a presión, NO SAB.", mode: "friendly", phase: "compra_friendly", color: "#8a6240" },
    { dia: "Día 1", titulo: "Prep limpio + Inoculación", emoji: "💉", desc: "Ducha vapor, alcohol, mascarilla FFP2. Flameo aguja, inyección 2-3ml cultura líquida en spawn bag. 5 min.", mode: "friendly", phase: "inoculacion_friendly", color: "#aa7c52" },
    { dia: "Días 1-18", titulo: "Incubación spawn bag", emoji: "🔮", desc: "El micelio coloniza el grano. 24-26°C oscuro. Inspección visual diaria SIN abrir. Día 14-18 → 100% blanco.", mode: "friendly", phase: "incubacion_friendly", color: "#c49a6c" },
    { dia: "Día 18", titulo: "Mezcla S2B en monotub", emoji: "📦", desc: "En espacio limpio: romper spawn, mezclar 1:2 con bulk CVG en monotub (con 4-6 agujeros micropore). Casing layer opcional.", mode: "friendly", phase: "fructificacion_friendly", color: "#dbb98c" },
    { dia: "Días 18-25", titulo: "Colonización bulk", emoji: "⚪", desc: "Micelio se extiende por bulk. FAE cada 2 días. Día 25: superficie 95-100% blanca. NO nebulizar todavía.", mode: "friendly", phase: "fructificacion_friendly", color: "#dbb98c" },
    { dia: "Días 25-35", titulo: "Fructificación / Pinning", emoji: "🍄", desc: "Iniciar nebulización paredes 2x/día + FAE 2x/día. Luz 12/12. Pinheads aparecen día 28-30. Crecimiento rápido.", mode: "friendly", phase: "fructificacion_friendly", color: "#dbb98c", highlight: true },
    { dia: "Días 35-40", titulo: "Primera cosecha", emoji: "✂️", desc: "Cosechar antes de que el velo se rompa. Giro-tirón. Rendimiento 200-500g fresco. Retira pinheads abortados.", mode: "friendly", phase: "cosecha_friendly", color: "#eed8b4" },
    { dia: "Días 40-90", titulo: "Flushes 2-6 (dunk)", emoji: "🔄", desc: "Dunk: cubrir sustrato con agua fría 6-12h en nevera entre flushes. Vaciar, volver a rutina. 4-6 flushes totales.", mode: "friendly", phase: "cosecha_friendly", color: "#f5e6d0" },
    { dia: "Días 90-95", titulo: "Secado final", emoji: "🌬️", desc: "Total seco: 60-150g. Cracker dry obligatorio antes de almacenar. Frasco hermético + sílica gel.", mode: "friendly", phase: "secado_friendly", color: "#fdf5ea" },
  ];

  const advancedNodes = [
    { dia: "Día 0", titulo: "Compra equipo lab", emoji: "🛒", desc: "Olla a presión + frascos cristal + grano centeno + jeringa esporas + SAB DIY + alcohol + aguja. 200-350€. Equipo permanente para múltiples ciclos.", mode: "advanced", phase: "compra_advanced", color: "#8a6240" },
    { dia: "Días 1-2", titulo: "Cocer grano + Esterilizar", emoji: "🔥", desc: "Hidratar grano 24h. Cocer 90 min. Escurrir, secar. Llenar frascos. Olla presión 90 min @ 15 PSI. Enfriar 12h.", mode: "advanced", phase: "esterilizar_advanced", color: "#aa7c52" },
    { dia: "Día 3", titulo: "Inoculación SAB", emoji: "💉", desc: "Limpiar SAB con alcohol. Flameo aguja roja → enfriar. Agitar jeringa esporas. Inyectar 1ml por frasco a través del puerto micropore.", mode: "advanced", phase: "inoculacion_advanced", color: "#c49a6c" },
    { dia: "Días 3-24", titulo: "Incubación + agitar grano", emoji: "🔮", desc: "21 días @ 24-26°C oscuro. Día 8-10: agitar frascos para distribuir micelio. Día 20-24: 100% colonizado (todo blanco). Vigilar contaminación.", mode: "advanced", phase: "incubacion_advanced", color: "#dbb98c" },
    { dia: "Día 25", titulo: "Bulk tek + Mezcla S2B", emoji: "📦", desc: "Hidratar coco coir + perlita (campo capacidad). Pasteurizar 1h vapor. Enfriar. Mezclar spawn 1:2 con bulk en monotub. Aplanar superficie.", mode: "advanced", phase: "fructificacion_advanced", color: "#eed8b4" },
    { dia: "Días 25-35", titulo: "Colonización bulk + Pinning", emoji: "🍄", desc: "Bulk colonizado en 7-10 días. Iniciar fructificación: bajar temp 22-24°C, FAE, light shock, nebulizar paredes. Pinheads día 30-32.", mode: "advanced", phase: "fructificacion_advanced", color: "#eed8b4", highlight: true },
    { dia: "Días 35-45", titulo: "Cosecha primera oleada", emoji: "✂️", desc: "Cosechar antes de romper velo. Rendimiento 200-500g fresco (puede más con mejor cepa/manejo). Giro-tirón.", mode: "advanced", phase: "cosecha_advanced", color: "#f5e6d0" },
    { dia: "Días 45-110", titulo: "Flushes 2-6 + dunk", emoji: "🔄", desc: "Cold shock + rehidratar entre flushes. 4-6 flushes totales. Producción decreciente. Tras último flush: tirar bulk.", mode: "advanced", phase: "cosecha_advanced", color: "#fdf5ea" },
    { dia: "Días 110-115", titulo: "Secado final", emoji: "🌬️", desc: "Total seco: 80-200g. Cracker dry. Almacenar frascos herméticos + sílica.", mode: "advanced", phase: "secado_advanced", color: "#fdf5ea" },
  ];

  const nodes = tab === "kit" ? kitNodes : tab === "friendly" ? friendlyNodes : advancedNodes;

  return (
    <div>
      <InfoBoxM>
        Cronograma completo desde compra hasta secado final. Click en cualquier nodo para ir a su sección. Tiempos aproximados — variables ±20% según temperatura, cepa y manejo.
      </InfoBoxM>

      <div style={{ display: "flex", background: MUSHROOM_COLORS.bg2, borderRadius: "10px", padding: "4px", gap: "4px", marginBottom: "24px" }}>
        {[{ id: "kit", label: "📦 Kit (3-4 sem)" }, { id: "friendly", label: "🧼 Friendly (6-13 sem)" }, { id: "advanced", label: "🧫 Avanzado (12-16 sem)" }].map(t => (
          <button key={t.id} onClick={() => setTab(t.id)} style={{
            flex: 1, padding: "10px", border: "none", borderRadius: "8px",
            background: tab === t.id ? MUSHROOM_COLORS.border2 : "transparent",
            color: tab === t.id ? MUSHROOM_COLORS.textBright : MUSHROOM_COLORS.accent1,
            cursor: "pointer", fontSize: "13px", fontWeight: "bold",
            fontFamily: "Georgia, serif",
          }}>{t.label}</button>
        ))}
      </div>

      <div style={{ position: "relative", paddingLeft: "20px" }}>
        <div style={{
          position: "absolute", left: "5px", top: "10px", bottom: "10px",
          width: "2px", background: `linear-gradient(180deg, ${MUSHROOM_COLORS.accent1} 0%, ${MUSHROOM_COLORS.accent3} 100%)`,
        }} />
        {nodes.map((n, i) => (
          <div key={i} style={{ position: "relative", marginBottom: "16px" }}>
            {/* Bolita fija — alineada con línea (línea center=6px, bolita 16px → left=-2 desde wrapper interno) */}
            <div style={{
              position: "absolute", left: "-23px", top: "16px",
              width: "16px", height: "16px", borderRadius: "50%",
              background: n.color, border: `2px solid ${MUSHROOM_COLORS.bg}`,
              zIndex: 2,
            }} />
            {/* Card inner — se mueve en hover */}
            <div onClick={() => navigate && navigate(n.mode, n.phase)} style={{
              cursor: "pointer",
              background: MUSHROOM_COLORS.bg2,
              border: `1px solid ${n.highlight ? MUSHROOM_COLORS.accent2 : MUSHROOM_COLORS.border1}`,
              borderRadius: "10px", padding: "12px 14px",
              transition: "all 0.2s",
            }}
            onMouseEnter={(e) => { e.currentTarget.style.borderColor = MUSHROOM_COLORS.accent1; e.currentTarget.style.boxShadow = `0 4px 14px ${MUSHROOM_COLORS.accent1}55`; e.currentTarget.style.background = MUSHROOM_COLORS.bg3; e.currentTarget.style.transform = "translateX(6px)"; }}
            onMouseLeave={(e) => { e.currentTarget.style.borderColor = n.highlight ? MUSHROOM_COLORS.accent2 : MUSHROOM_COLORS.border1; e.currentTarget.style.boxShadow = "none"; e.currentTarget.style.background = MUSHROOM_COLORS.bg2; e.currentTarget.style.transform = "translateX(0)"; }}
            >
              <div style={{ display: "flex", alignItems: "center", gap: "8px", marginBottom: "4px" }}>
                <span style={{ fontSize: "20px" }}>{n.emoji}</span>
                <div>
                  <div style={{ fontSize: "10px", color: MUSHROOM_COLORS.accent1, letterSpacing: "1px", marginBottom: "2px" }}>{n.dia.toUpperCase()}</div>
                  <div style={{ fontSize: "14px", fontWeight: "bold", color: MUSHROOM_COLORS.textBright }}>{n.titulo}</div>
                </div>
              </div>
              <div style={{ fontSize: "12px", color: MUSHROOM_COLORS.accent3, lineHeight: "1.5", marginTop: "6px" }}>{n.desc}</div>
              <div style={{ fontSize: "10px", color: MUSHROOM_COLORS.accent1, marginTop: "6px", textTransform: "uppercase", letterSpacing: "1px" }}>→ Click para abrir sección</div>
            </div>
          </div>
        ))}
      </div>

      <div style={{ background: MUSHROOM_COLORS.bg3, borderRadius: "10px", padding: "14px", marginTop: "20px" }}>
        <div style={{ fontSize: "12px", color: MUSHROOM_COLORS.textBright, lineHeight: "1.6" }}>
          <strong>Diferencias clave entre los 3 modos:</strong><br/>
          📦 <strong>Kit:</strong> 3-4 semanas, 30-60g secos finales, 150-250€, fácil. Para empezar.<br/>
          🧼 <strong>Friendly:</strong> 6-13 semanas, 60-150g secos finales, 100-180€, dificultad media. Pre-esterilizado, sin lab.<br/>
          🧫 <strong>Avanzado:</strong> 12-16 semanas, 80-200g secos finales, 200-350€ (equipo reutilizable). Olla presión + SAB + esporada. Máximo control y rendimiento por ciclo.
        </div>
      </div>
    </div>
  );
}

function CONCEPTOS_SETAS() {
  const terms = [
    { term: "Micelio", def: "La 'raíz' del hongo. Red blanca de filamentos que colonizan el sustrato. El pan de micelio ya está completamente colonizado." },
    { term: "Primordio / Pinhead", def: "El brote más pequeño del hongo, casi invisible. Es el primer estadio visible del crecimiento de los frutos." },
    { term: "Flush", def: "Una cosecha de hongos de una misma oleada. Un span puede dar 3-6 flushes si se mantiene bien. Cada flush necesita 'cold shock' (24h en nevera) entre uno y otro." },
    { term: "FAE (Fresh Air Exchange)", def: "Intercambio de aire fresco. Los hongos necesitan O2. En SGFC se hace cada 6-12h abriendo la cámara. En monotub con ventilaciones pasivas ocurre automáticamente." },
    { term: "Humedad", def: "Los hongos necesitan 90-95% HR. Sin suficiente humedad los frutos se marchitan antes de madurar. De ahí la importancia de nebulizar frecuentemente." },
    { term: "SGFC (Still Air Fruit Chamber)", def: "Cámara de plástico estática usada para fructificación. Sin movimiento de aire (aún). Se usa perlita en el fondo para mantener humedad." },
    { term: "Monotub / Bulk tek", def: "Técnica donde se inocula un sustrato voluminoso en una caja de plástico, esperando a que colonice completamente (bulk), luego se frucciona en la misma caja. Más rendimiento que SGFC pero requiere más precisión." },
    { term: "Colonización", def: "El proceso de 7-21 días donde el micelio crece a través del sustrato/grano. Está completa cuando todo es blanco y rígido." },
    { term: "Contaminación", def: "Crecimiento de moho verdoso (Trichoderma) o bacterias. Ruina el proyecto. Se evita con asepsia durante inoculación." },
    { term: "Trichoderma", def: "Hongo contaminante verde. Es el enemigo #1. Crece rápido y mata el micelio de Psilocybe." },
    { term: "Cold shock", def: "Exponer el span a temperaturas 4-10°C durante 24h para inducir fructificación. Simula lluvias de otoño en la naturaleza." },
    { term: "Velo", def: "La membrana que conecta el sombrero (vela) al pie del hongo. Cuando se rompe es el pico de potencia máxima. Ideal cosechar justo antes o justo después." },
    { term: "Cracker dry", def: "Estado final de secado donde los hongos son tan secos que se quiebran al doblarse (como galleta). No deben dejar huella digital." },
    { term: "Spawn", def: "Grano colonizado con micelio. Es la 'semilla' para bulk tek. Típicamente 5-10 frascos (1-2kg) por un monotub." },
    { term: "Sustrato", def: "Material donde crece el hongo. En kit: pan de micelio. En manual: coco coir + perlita mezclado. Debe estar estéril." },
    { term: "SAB (Still Air Box)", def: "Caja hermética con guantes para inocular asépticamente. Reduce aire contaminado. Crítico en modo manual." },
    { term: "Perlita", def: "Mineral poroso que absorbe y evapora agua lentamente. Mantiene humedad en cámara sin encharcamiento." },
    { term: "Presecado", def: "Primera fase de secado a temperatura ambiente (2-3h). Elimina 50% del agua rápido antes de usar desecador." },
    { term: "Cultura líquida", def: "Micelio activo suspendido en agua nutritiva. Reemplaza la jeringa de esporas en el modo friendly: ya está en fase vegetativa (micelio), no esporas — coloniza más rápido (10-14 días vs 21) y resiste mejor la contaminación. Se inyecta igual que esporas pero con menos riesgo." },
    { term: "Spawn bag", def: "Bolsa de plástico transparente con grano de centeno (u otro cereal) ya cocido, esterilizado y sellado. Tiene un puerto de inyección con filtro micropore. En el modo friendly reemplaza la olla a presión + frascos: compras esterilizado, solo inyectas." },
    { term: "Bulk substrate CVG", def: "Coco coir + Vermiculita + Yeso (Gypsum) ya hidratado y pasteurizado. Listo para mezclar con spawn en monotub. Reemplaza el proceso manual de hidratar coco coir + pasteurizar." },
    { term: "FAE pasivo", def: "Fresh Air Exchange automático mediante agujeros con filtro micropore en el monotub. El intercambio de aire ocurre por difusión sin que tú abras nada. Alternativa al FAE activo (abrir la tapa)." },
    { term: "Casing layer", def: "Capa fina de vermiculita seca (1cm) sobre el sustrato colonizado. Mantiene humedad superficial sin encharcar y aumenta rendimiento 20-30%. Opcional pero recomendado en monotub." },
    { term: "Pinheads abortados", def: "Primordios que empezaron a crecer pero pararon (pequeños, marchitos, color marrón). Aparecen entre flushes. Hay que retirarlos antes del siguiente flush para evitar que pudran y contaminen." },
    { term: "Dunk", def: "Sumergir el sustrato del monotub en agua fría (nevera 6-12h) entre flushes. Cold shock + rehidratación. Induce el siguiente flush simulando lluvia + bajada de temperatura otoñal." },
    { term: "Flameado", def: "Pasar la aguja por la llama de un mechero hasta poner roja (3-5s). Mata cualquier bacteria. Esperar 20s para enfriar antes de inyectar (sino mata el micelio que estás inyectando)." },
    { term: "Esterilización", def: "Eliminar TODA forma de vida microbiana. Requiere olla a presión a 15 PSI durante 90 min. En el modo friendly te ahorras este paso comprando spawn bag y substrate ya esterilizados/pasteurizados." },
    { term: "Banisteriopsis caapi", def: "Vid amazónica (también llamada caapi, yagé, mariri). Contiene IMAOs (harmina, harmalina) que permiten que el DMT oral sea activo. Base del brebaje ayahuasca. Cultivable, crece rápido en clima cálido. Cepas: Cielo (visionaria), Trueno (intensa), Negro (clásica)." },
    { term: "Psychotria viridis (chacruna)", def: "Arbusto amazónico cuyas hojas contienen DMT. Combinada con caapi en ayahuasca tradicional. Cultivo difícil — necesita humedad altísima (80-95%) y temperatura cálida constante. Alternativas: Diplopterys cabrerana (chaliponga), Mimosa hostilis." },
    { term: "DMT", def: "N,N-Dimetiltriptamina. Molécula psicodélica natural presente en cientos de plantas (Mimosa hostilis, Acacia confusa, Chacruna) y endógena al cuerpo humano (la pineal puede producirla). Fumada: 5-15min de breakthrough visionario extremo. Oral con IMAO (ayahuasca): 4-6h contemplativo. Cristal puro = ILEGAL en España." },
    { term: "IMAO", def: "Inhibidor de la Monoamino Oxidasa. La enzima MAO en el estómago/intestino normalmente destruye el DMT y otras aminas (incluida la tiramina de quesos curados). Los IMAOs del Caapi bloquean esta enzima, permitiendo que el DMT oral funcione. Pero también permiten que la tiramina entre al torrente sanguíneo → riesgo de pico hipertensivo si dieta con tiramina." },
    { term: "Mimosa hostilis (Jurema)", def: "Árbol caducifolio brasileño/mexicano, también llamado Mimosa tenuiflora o Jurema Preta. Su corteza de raíz (MHRB) tiene 0.5-1.5% DMT. Cultivable en clima cálido (España mediterránea), crece rápido. La corteza seca es legal de comprar como tinte natural en EU." },
    { term: "MHRB", def: "Mimosa Hostilis Root Bark. Corteza de raíz seca de Mimosa hostilis. Vendido legalmente como tinte natural marrón-rojizo en EU. ~25-50€ por 100g. Para extracción amateur de DMT (ilegal en España) o uso tradicional Jurema brasileña." },
    { term: "Síndrome serotonérgico", def: "Reacción potencialmente MORTAL por exceso de serotonina. Causa: combinar IMAO (caapi/ayahuasca) con SSRI, SNRI, MDMA, triptanes. Síntomas: temblores, hipertermia, taquicardia, confusión, convulsiones. Prevención: 4-6 semanas off-medication antes de ayahuasca." },
    { term: "Tiramina", def: "Amina presente en alimentos fermentados/curados (queso azul, vino tinto, embutidos curados, pescado salazón). Normalmente la enzima MAO la descompone. Con IMAO bloqueada (ayahuasca, MAOI antidepresivo) → tiramina entra al torrente → pico hipertensivo → riesgo de accidente cerebrovascular. De ahí la dieta restrictiva pre-ayahuasca." },
    { term: "Changa", def: "Mezcla casera para fumar: hierbas (caapi seca, ruda siria, mate, salvia, menta) impregnadas con DMT cristalizado. La presencia de IMAO en las hierbas alarga el efecto del DMT a 20-40 min (vs 5-15 min de DMT puro fumado). Más manejable, menos brutal." },
    { term: "Breakthrough", def: "Término para la pérdida total de la realidad consensual durante experiencia con DMT. Pico de la experiencia (3-8 min después de inhalar). Visiones de 'otro lugar', encuentros con entidades, geometría imposible. No todos llegan a breakthrough en su primera vez — depende de dosis y técnica." },
    { term: "Set & Setting", def: "Concepto fundamental de psicodélicos. SET = estado mental/emocional con el que entras (intención, ánimo, expectativas). SETTING = entorno físico (lugar, gente, sonidos, luz). Más del 50% de la experiencia depende de set+setting más que de la sustancia. Set/setting malo = mala experiencia incluso con sustancia 'buena'." },
    { term: "Sitter / Acompañante", def: "Persona SOBRIA que te acompaña durante experiencia psicodélica. Funciones: tranquilizar si hay pánico, asegurar agua/manta/cubo, llamar emergencias si hay problema físico grave. NO interrumpe la experiencia — solo presencia silenciosa. Imprescindible primera vez con sustancias intensas (DMT, Salvia, Ayahuasca, dosis altas de hongos)." },
    { term: "Integración", def: "Proceso post-experiencia psicodélica de procesar lo vivido. Reflexión, journaling, hablar con sitter o terapeuta especializado. Días-semanas después. CRÍTICO para que la experiencia tenga valor terapéutico/insight duradero. Sin integración los insights se desvanecen rápido." },
    { term: "Microdosis", def: "Dosis sub-perceptual (10-20% de dosis recreativa) tomada de forma regular. NO da experiencia psicodélica notable, pero según reportes mejora estado de ánimo, creatividad, foco. Protocolos típicos: Fadiman (1 día sí, 2 no), Stamets (4 días sí, 3 no). Investigación científica aún limitada — evidencia mayoritariamente anecdótica." },
    { term: "Tolerancia", def: "Reducción de efectos por uso repetido. Psicodélicos clásicos (LSD, setas, mescalina) tienen tolerancia CRUZADA — usar uno reduce efecto del otro durante 1-2 semanas. DMT no genera tolerancia (puedes hacer breakthrough varias veces el mismo día). Cannabis sí (días-semanas). Recomendación: espaciar 1-4 semanas entre experiencias significativas." },
    { term: "Psicoactivo", def: "Sustancia que altera función cerebral — percepción, ánimo, conciencia, comportamiento. Engloba: psicodélicos (LSD, setas), disociativos (ketamina, salvia), estimulantes (cafeína), depresores (alcohol), entactógenos (MDMA). NO necesariamente alucinógenos — el café también es psicoactivo." },
    { term: "Alcaloide", def: "Familia química de compuestos de plantas que contienen nitrógeno. Muchos psicoactivos son alcaloides: nicotina, cafeína, morfina, mescalina, DMT, harmina. También en plantas no psicoactivas (atropina, quinina). El medio ácido extrae alcaloides eficientemente — de ahí el limón en preparaciones tradicionales." },
    { term: "Tintura", def: "Extracción de planta en alcohol (40-95%). Alcohol disuelve los activos, conserva indefinidamente. Macerar 4-6 semanas, filtrar. Dosis típica: 1-3ml sublingual (bajo lengua = absorción rápida sin pasar por estómago). Forma de conservación a largo plazo más eficiente para muchas plantas." },
    { term: "Macerar", def: "Sumergir material vegetal en líquido (alcohol, agua, vinagre, aceite) durante días-semanas para extraer activos. Tradicional en herboristería. Diferente a infusión (rápida, con calor) — la maceración es lenta y en frío." },
    { term: "Sublingual", def: "Vía de administración: poner sustancia bajo la lengua. La mucosa absorbe directamente al torrente sanguíneo, evitando el primer paso hepático del estómago. Inicio rápido (5-15 min). Usado para tinturas, microdosis, Kanna." },
    { term: "Mescalina", def: "Alcaloide visionario presente en cactus columnares (San Pedro, Bolivian Torch, Peyote). Estructuralmente similar a anfetamina. Experiencia 8-12h, visiones, introspección, euforia. La psicodélica natural más usada por chamanes mexicanos durante milenios. Ilegal aislada; cactus legales como ornamentales." },
    { term: "Muscimol", def: "Activo principal de Amanita muscaria. Agonista GABA-A (deprime sistema nervioso central). Causa estado disociativo/onírico, euforia ligera, distorsiones de tamaño. SE PRODUCE SECANDO el hongo (decarboxilación de ácido iboténico → muscimol). NO es psilocibina ni serotonérgico." },
    { term: "Ácido iboténico", def: "Compuesto presente en Amanita muscaria FRESCA. CAUSA NÁUSEAS y vómitos. Se convierte en muscimol (psicoactivo deseado) durante secado prolongado o cocción con limón. Por eso jamás consumir Amanita fresca." },
    { term: "Psilocibina", def: "Profármaco presente en setas Psilocybe. Tu cuerpo la convierte en psilocina (la verdaderamente activa). Estructuralmente similar a serotonina. Experiencia 4-6h. Estudios clínicos recientes en depresión resistente, ansiedad terminal, adicciones. Ilegal en España (Lista I) pero cultivo casero tolerado." },
    { term: "Psilocina", def: "Forma activa de la psilocibina (la psilocibina es profármaco — tu cuerpo la convierte). Agonista de receptores serotonérgicos 5-HT2A en cerebro. Es lo que produce la experiencia alterada con setas." },
    { term: "Harmina / Harmalina", def: "Alcaloides IMAO presentes en Banisteriopsis caapi (vid del ayahuasca). Bloquean enzima MAO en estómago/intestino, permitiendo que el DMT oral sea activo (sin IMAO el estómago lo destruye). También causan náuseas/purga característica de ayahuasca." },
    { term: "Salvinorina A", def: "Activo de Salvia divinorum. EL psicoactivo natural más POTENTE conocido (efectivo en mcg). Estructura única: kappa-opioide agonista (no serotonérgico como otros psicodélicos). Experiencia 5-15 min disociativa intensa. Se destruye con calor del agua — por eso infusión NO funciona." },
    { term: "Mesembrina", def: "Alcaloide principal de Kanna (Sceletium tortuosum). Inhibidor de recaptación de serotonina (SSRI natural) + ligero PDE4 inhibitor. Antidepresivo, ansiolítico. Por eso NO mezclar Kanna con SSRI/IMAO/MDMA = riesgo síndrome serotonérgico." },
    { term: "Kavalactona", def: "Familia de compuestos de Kava. ~18 kavalactonas distintas, las 6 principales (kavain, methysticin, etc) responsables del efecto. Activan GABA, dopamina, serotonina. Liposolubles — por eso preparación tradicional necesita masaje + emulsión, no se disuelven en agua sola." },
    { term: "L-DOPA", def: "Precursor natural de dopamina presente en semillas de Mucuna pruriens (4-7%). El cuerpo lo convierte en dopamina. Eufórica sutil, mejora motivación/libido. Usado clínicamente para Parkinson (Levodopa). NO mezclar con MAOI/SSRI." },
    { term: "5-MeO-DMT", def: "DMT modificado, presente en sapo Bufo alvarius y algunas plantas (Diplopterys cabrerana, Yopo). Diferente experiencia a N,N-DMT clásico: más 'unión cósmica' / disolución del ego, menos visuales geométricos. MUCHO más intenso. Riesgo cardiovascular real. NO recomendado." },
    { term: "Bufotenina (5-HO-DMT)", def: "Alcaloide presente en Yopo (Anadenanthera peregrina). Snortado tradicional indígena. Efectos similares a DMT pero con más componente físico (sudor, taquicardia)." },
    { term: "HPPD", def: "Hallucinogen Persisting Perception Disorder. Trastorno raro pero posible: alteraciones visuales persistentes después de uso de psicodélicos (motas, halos, geometría leve durante semanas-meses). Más común con uso muy frecuente. Sin tratamiento específico — suele desaparecer con el tiempo." },
    { term: "Adaptógeno", def: "Sustancia (planta o hongo) que ayuda al cuerpo a adaptarse al estrés. Ej: Reishi, Cordyceps, Ashwagandha, Rhodiola. NO psicoactivos pero modulan respuesta hormonal/inmune. Uso popular en biohacking moderno." },
    { term: "Etiolación", def: "Crecimiento débil y alargado de plantas por falta de luz. Tallos finos buscando luz, hojas pálidas/pequeñas. Problema común en cactus + cannabis interior con poca luz. Solución: aumentar exposición lumínica." },
    { term: "Callusing", def: "Cicatrización del corte en esquejes/cactus. Dejar el corte secar al aire 2-3 días (cactus) o 2 semanas (cactus columnares grandes) ANTES de plantar. Sin callusing = pudrición del corte al contactar con tierra húmeda." },
    { term: "Micorriza", def: "Simbiosis raíz de planta + hongo subterráneo. Hongo da minerales del suelo a la planta, planta da azúcares al hongo. Amanita muscaria es micorrícica obligatoria (necesita árboles compatibles — abedul, pino, abeto). Por eso NO se cultiva en casa." },
    { term: "Forrajeo", def: "Recolección de plantas/hongos silvestres para uso humano. Para Amanita: bosques de abedules/pinos en otoño tras lluvia. Requiere identificación experta — confusión con especies tóxicas puede ser MORTAL. Sociedad micológica local = mejor recurso." },
    { term: "Decarboxilación / Decarbox", def: "Reacción química que convierte una forma de molécula en otra activa. Cannabis: THCA → THC con calor (105°C+). Amanita: ácido iboténico → muscimol con secado prolongado. La decarboxilación es lo que activa el efecto psicoactivo en muchas sustancias." },
    { term: "Lemon tek", def: "Técnica para potenciar setas Psilocybe. Macerar setas trituradas en zumo de limón 15-20 min antes de tomar. El ácido convierte psilocibina → psilocina más rápido. Resultado: efecto en 15 min vs 30-60 min, viaje más intenso pero más corto (2-3h vs 4-6h)." },
    { term: "Cold shock", def: "Bajada brusca de temperatura para inducir fructificación de hongos. Setas Psilocybe: 24h en nevera entre flushes para estimular siguiente cosecha. Imita lluvias de otoño en naturaleza. También aplicable a Amanita y otros hongos." },
    { term: "Pinning", def: "Aparición de los primeros 'pinheads' (primordios pequeños) en cultivo de setas. Marca el inicio de la fructificación. Disparado por: humedad alta, FAE, light shock, bajada de temperatura. Ver Primordio/Pinhead." },
    { term: "S2B (Spawn-to-Bulk)", def: "Ratio de mezcla en bulk tek de setas. Típico 1:2 o 1:3 (1 parte spawn colonizado + 2-3 partes bulk substrate). Más spawn = colonización rápida pero menor rendimiento por gramo. Menos spawn = riesgo contaminación pero más eficiente." },
    { term: "PF Tek", def: "Técnica clásica para cultivar setas Psilocybe en frasco con sustrato (vermiculita + harina arroz integral + agua). Inventada por Robert McPherson 'Psilocybe Fanaticus'. Más simple que bulk tek pero menor rendimiento. Buena para empezar con setas." },
    { term: "Bulk substrate", def: "Sustrato voluminoso para fructificación de setas en monotub. Mezcla típica: coco coir + perlita + yeso (CVG) + agua. Pasteurizado pero no esterilizado. Sirve como base donde el spawn colonizado se expande para producir muchas más setas." },
    { term: "Pasteurización", def: "Calentar a 60-65°C 15-30 min para matar bacterias salvajes sin destruir esporas beneficiosas ni nutrientes. Usado en bulk substrate de setas, mosto de hidromiel, bebidas fermentadas. Distinto de esterilización (más agresivo, mata todo)." },
    { term: "Spore syringe / esporada", def: "Jeringa con esporas de hongo en solución estéril. Se inyecta en sustrato esterilizado para inocular cultivo. Para setas Psilocybe y trufas. 1 jeringa = inocular 5-10 frascos. Comprar de vendedor reputado (calidad varía)." },
    { term: "Spore print", def: "Esporulación de un hongo recogida en papel de aluminio o cristal. Color del spore print = útil para identificación de especies. Más estable y duradero que jeringa de esporas (años) — pero requiere paso extra de hidratar antes de inocular." },
    { term: "Body load", def: "Sensación FÍSICA de una sustancia. Setas: pesadez corporal, frío, posibles temblores. Mescalina: náusea + relajación profunda. DMT: ninguno significativo (todo psicológico). Ayahuasca: muy fuerte (purga, presión arterial). Importante saber qué esperar." },
    { term: "Comeup", def: "Fase de subida de una sustancia psicodélica. Primeros minutos-horas tras dosis hasta llegar al pico. Setas: 30-60 min. LSD: 30-90 min. Mescalina: 60-120 min. DMT fumado: 30 segundos. Sensación intensa de cambio inminente." },
    { term: "Plateau / Pico", def: "Fase de máxima intensidad de una experiencia psicodélica. Donde 'sucede' lo principal. Duración varía: setas 1-2h, LSD 4-6h, mescalina 4-6h, DMT 3-8 min." },
    { term: "Comedown", def: "Fase de bajada de una experiencia psicodélica. Tras el pico, el efecto se reduce gradualmente. Reflexión, integración inicial. Sin la 'resaca' del MDMA o alcohol." },
    { term: "Afterglow", def: "Período post-experiencia (24-72h después) caracterizado por estado de ánimo elevado, claridad mental, sensación de bienestar. Especialmente reportado con setas, ayahuasca, MDMA. Útil para procesar insights de la experiencia." },
    { term: "Tek (técnica)", def: "Jerga del mundo del cultivo psicoactivo. Significa 'technique' (técnica). Ej: PF Tek (Psilocybe Fanaticus technique), Bulk Tek, BRF Tek. Cada tek tiene sus particularidades de sustrato y método." },
    { term: "Auto-healing port / Puerto de inyección", def: "Disco de goma o filtro micropore en spawn bag o frasco que permite inyectar esporas/cultura líquida sin abrir el envase. La goma se 'cura' tras la inyección. Reduce riesgo de contaminación drásticamente vs abrir el frasco." },
    { term: "Field capacity", def: "Punto óptimo de hidratación de un sustrato para hongos: húmedo pero NO mojado. Si aprietas sustrato con la mano y solo gotean 1-3 gotas = field capacity. Demasiado seco = sin colonización. Demasiado mojado = bacterias/podredumbre." },
    { term: "Ego dissolution / Disolución del ego", def: "Pérdida temporal del sentido de 'yo' durante experiencias psicodélicas profundas. Reportado con setas dosis altas, DMT breakthrough, 5-MeO-DMT, ayahuasca. Puede ser liberador o aterrador según preparación. Reset psicológico potente." },
    { term: "Trip killer / Matatripsis", def: "Sustancia que reduce o termina experiencia psicodélica si va mal. Para setas/LSD: benzodiacepina (Xanax 1mg) o antipsicótico (olanzapina 5mg). NO cura el bad trip pero reduce intensidad. Usar solo si pánico severo no manejable. Mejor: cambiar set/setting primero." },
    { term: "Tincture / Tintura sublingual", def: "Extracción concentrada en alcohol (40-95%). Plantas trituradas en alcohol 4-6 semanas. Filtrar. Conservación años en frasco oscuro. Dosis típica: 1-3ml bajo lengua (sublingual) — absorción rápida sin pasar por estómago. Aplica a Damiana, Calea, Kanna, etc." },
    { term: "Cure / Curado", def: "Proceso post-cosecha para mejorar calidad. Cannabis: 2-4 semanas en frascos herméticos con humedad controlada (58-65%) + 'burping' diario. Mejora sabor, aroma, suavidad. Sin curado = cannabis 'verde' áspero." },
    { term: "Burping", def: "Abrir frascos de cannabis durante curado 15-30 min/día las primeras 2 semanas. Permite intercambio de gases, evita moho, equilibra humedad. Imprescindible para curado correcto." },
    { term: "Boveda / Higrómetro de bolsa", def: "Pequeñas bolsitas con sales reguladoras de humedad. 58%, 62%, 65% son comunes. Se ponen en frascos de cannabis curado para mantener humedad estable. Más fáciles que higrómetros analógicos. Reutilizables 1 año." },
    { term: "Terpeno", def: "Compuestos aromáticos volátiles en plantas. En cannabis: linalool (lavanda), myrceno (sedante), limoneno (cítrico), pineno (pino). Modulan los efectos del THC y dan sabor/aroma. En lúpulo, hierbas culinarias, cítricos." },
    { term: "Cannabinoide", def: "Familia de compuestos producidos por cannabis. THC (psicoactivo), CBD (no psicoactivo, medicinal), CBN (sedante), CBG (precursor), THCV. Más de 100 conocidos. Se generan por decarboxilación de THCA, CBDA, etc." },
    { term: "Trichomes / Tricomas", def: "Las pequeñas glándulas resinosas que cubren cogollos y hojas pequeñas de cannabis. Contienen toda la concentración de cannabinoides + terpenos. Color indica madurez: claro = inmaduro, lechoso = pico, ámbar = sedante. Se ven con lupa 60x." },
    { term: "Hash / BHO / Rosin", def: "Concentrados de cannabis. Hash: tricomas separados (kief prensado o ice-water hash). BHO (Butane Honey Oil): extracción con butano = potente pero riesgo solvente residual. Rosin: prensado con calor + presión, sin solventes (más seguro casero)." },
    { term: "Microdosing protocols", def: "Pautas para microdosis de psicodélicos. Fadiman: 1 día sí, 2 no (3 ciclos = 1 semana). Stamets: 4 días sí, 3 no (5-HT2A receptor desensibilización). Cada uno minimiza tolerancia. Duración típica del ciclo: 4-8 semanas." },
    { term: "Spawn run", def: "Período de colonización del spawn por el micelio. 7-21 días para setas, 3-5 semanas para trufas. Mantener oscuro, 24-26°C, sin abrir. Cuando spawn está 100% blanco = listo para fructificación o para pasar a bulk." },
  ];

  const [search, setSearch] = React.useState('');
  const filtered = search.length > 1 ? terms.filter(t => t.term.toLowerCase().includes(search.toLowerCase()) || t.def.toLowerCase().includes(search.toLowerCase())) : null;

  return (
    <div>
      <InfoBoxM>
        Términos técnicos específicos de la guía de setas. Búsqueda para encontrar rápido cualquier palabra.
      </InfoBoxM>

      <div style={{ marginBottom: "20px" }}>
        <input
          type="text"
          placeholder="🔍 Buscar término..."
          value={search}
          onChange={e => setSearch(e.target.value)}
          style={{
            width: "100%", padding: "12px 16px", fontSize: "14px",
            background: MUSHROOM_COLORS.bg2, border: `1px solid ${MUSHROOM_COLORS.border1}`,
            borderRadius: "8px", color: MUSHROOM_COLORS.textBright, outline: "none",
          }}
        />
      </div>

      {filtered ? (
        <>
          <div style={{ fontSize: "10px", letterSpacing: "2px", color: MUSHROOM_COLORS.accent1, marginBottom: "10px" }}>
            {filtered.length} RESULTADO{filtered.length !== 1 ? 'S' : ''}
          </div>
          {filtered.length === 0 ? (
            <div style={{ fontSize: "13px", color: MUSHROOM_COLORS.accent2, padding: "12px" }}>No encontrado.</div>
          ) : (
            filtered.map((item, i) => (
              <div key={i} style={{ background: MUSHROOM_COLORS.bg2, border: `1px solid ${MUSHROOM_COLORS.border1}`, borderRadius: "8px", padding: "12px 14px", marginBottom: "8px" }}>
                <div style={{ fontSize: "13px", fontWeight: "bold", color: MUSHROOM_COLORS.accent1, marginBottom: "4px" }}>{item.term}</div>
                <div style={{ fontSize: "13px", color: MUSHROOM_COLORS.accent3, lineHeight: "1.5" }}>{item.def}</div>
              </div>
            ))
          )}
        </>
      ) : (
        terms.map((item, i) => (
          <div key={i} style={{ background: MUSHROOM_COLORS.bg2, border: `1px solid ${MUSHROOM_COLORS.border1}`, borderRadius: "8px", padding: "12px 14px", marginBottom: "8px" }}>
            <div style={{ fontSize: "13px", fontWeight: "bold", color: MUSHROOM_COLORS.accent1, marginBottom: "4px" }}>{item.term}</div>
            <div style={{ fontSize: "13px", color: MUSHROOM_COLORS.accent3, lineHeight: "1.5" }}>{item.def}</div>
          </div>
        ))
      )}
    </div>
  );
}

function FAQ_SETAS() {
  const [query, setQuery] = React.useState("");
  const faqs = [
    { q: "¿Cuánto tiempo tarda todo el ciclo?", a: "Kit: 2-3 semanas desde que sacas el pan hasta la 1ª cosecha. Friendly: 6-13 semanas. Avanzado: 12-16 semanas (1-2 sem esterilización + inoculación, 2-3 sem incubación, 1-2 sem fructificación)." },
    { q: "¿Por qué se contamina?", a: "Bacterias o moho entran durante la inoculación. Una jeringa de esporas contaminada o una técnica SAB deficiente son causas. Avanzado requiere mucha más asepsia que kit." },
    { q: "¿Cuándo cosechar?", a: "Antes de que se rompa el velo (membrana bajo el sombrero). Justo antes o justo después es óptimo. Si esperas demasiado, suelta esporas negras en el sustrato (afecta próximos flushes)." },
    { q: "¿Qué hacer entre flushes?", a: "Cold shock: 24h en nevera. Luego sacas, dejas en SGFC, nebulizas y esperas a que salgan nuevos primordi (3-7 días). Puedes hacer 3-6 flushes totales." },
    { q: "¿Puedo secar los hongos en horno?", a: "NO a temperatura alta — degrada los compuestos activos. Usa presecado en bandeja (2-3h a temperatura ambiente) + desecador con silica gel (24h) = cracker dry sin calor." },
    { q: "¿Duran mucho tiempo almacenados?", a: "Cracker dry en bolsa hermética en lugar frío/oscuro dura años. Lo ideal: bolsa hermética + sílica gel + congelador = 2+ años sin perder potencia." },
    { q: "¿Kit, Friendly o Avanzado? ¿Cuál para empezar?", a: "Kit si quieres rápido y fácil (2-3 sem). Friendly si quieres más rendimiento sin equipo de laboratorio (sin olla a presión, sin SAB). Avanzado si eres paciente y quieres aprender microbiología completa (mucho mayor rendimiento)." },
    { q: "¿Qué temperatura exacta para incubación?", a: "Idealmente 24-28°C. Menos de 20°C = muy lento. Más de 30°C = Trichoderma aprovecha. Manta térmica es tu aliada si en tu casa hace frío." },
    { q: "¿Está legal cultivar setas?", a: "España: cultivo casero tolerado (gris legal). Psilocybe está en Lista I pero uso personal NO se persigue activamente. Comercializar = ilegal. Otros países UE varían." },
    { q: "¿Cuánto miligramo por hongo?", a: "Varía mucho (50-500mg dependiendo especie, tamaño, condiciones crecimiento). Empieza bajo (0.5-1g de seca) y titula. No hay dosis segura — educación es clave." },
    { q: "¿Se pone molido en algo o entero?", a: "Entero si es posible (absorción lenta, viaje prolongado). Molido en té (lemon tek) = efecto más rápido. Molido en chocolate = enmascarar sabor." },
    { q: "¿Pertenezco a algún grupo/comunidad?", a: "r/shrooms, Shroomery, Erowid son comunidades. Pero cultivo casero = responsabilidad personal. No hay garantías de seguridad." },
    { q: "¿Qué es 'lemon tek'?", a: "Macerar setas molidas en zumo de limón 15-20 min antes de tomar. El ácido convierte psilocibina → psilocina (la forma activa) más rápido. Resultado: efecto en 15 min vs 30-60 min, viaje más intenso pero más corto (2-3h vs 4-6h)." },
    { q: "¿Microdosis es seguro?", a: "0.1-0.3g de seta seca cada 3-4 días = protocolo Stamets/Fadiman. Reportes anecdóticos: mejora ánimo, creatividad, foco. Investigación científica aún limitada. Bajo riesgo si se respetan los descansos." },
    { q: "¿Se pueden combinar con otras psicodélicas?", a: "TÉCNICAMENTE sí, pero MUY arriesgado para principiantes. Tolerancia cruzada con LSD/mescalina (1-2 semanas). NUNCA mezclar con SSRI (síndrome serotonérgico). Investigar siempre antes." },
    { q: "¿Qué es Trichoderma?", a: "El hongo contaminante #1 en cultivo casero. Aparece como manchas verde brillante o blanco peludo. Crece más rápido que el micelio Psilocybe y lo mata. Solo se puede prevenir (asepsia), no se cura. Lote contaminado = tirar todo el sustrato." },
    { q: "¿Cuánto rinde un frasco/monotub típicamente?", a: "Frasco PF Tek (medio litro): 30-100g secos. Monotub bulk tek (40L): 200-500g secos primer flush + 50-70% en flushes 2-4. Total ciclo: 400-1000g secos." },
    { q: "¿Cuál es la mejor cepa para empezar con setas?", a: "B+, Golden Teacher, o Mazatapec. Las 3 son tolerantes a errores de novato, dan setas grandes, potencia media-alta. EVITAR primera vez: Penis Envy (potente pero exigente), Albino A+ (raro, caro)." },
    { q: "¿Cómo saber si las setas están bien secas (cracker dry)?", a: "Test del pie: dobla un pie. Si ROMPE limpio con sonido seco = listas. Si SE DOBLA sin romper = aún húmedas, más sílica gel + tiempo. NUNCA almacenar sin cracker dry — moho garantizado en semanas." },
    { q: "¿Se pueden tomar setas frescas?", a: "Sí pero NO recomendado. Frescas: 90% agua, sabor terroso fuerte, dosis difícil de calcular (peso fresco vs seco varía mucho). Mejor secar y dosificar exactamente. Conversión: 1g seco ≈ 10g fresco." },
    { q: "¿Compatible con antidepresivos?", a: "NO. SSRI/IMAO/SNRI bloquean los receptores 5-HT2A donde actúa la psilocibina = experiencia muy reducida o ausente. Además riesgo síndrome serotonérgico con IMAO. Off-meds 4-6 semanas antes (consultar médico)." },
    { q: "¿Diferencia entre PF Tek y Bulk Tek?", a: "PF Tek: frasco con sustrato pequeño (vermiculita+harina arroz). Más simple, rendimiento bajo (30-100g). Bulk Tek: spawn en grano + bulk substrate en monotub. Más complejo pero mucho mayor rendimiento (200-500g+)." },
    { q: "¿Puedo cultivar al aire libre?", a: "Algunas especies (P. cyanescens, azurescens) sí — en zonas frías sobre madera. P. cubensis (la más común) NO — necesita 24-26°C constante, demasiado frío para outdoor en mayoría España." },
    { q: "¿Cómo identificar contaminación temprana?", a: "Manchas de color (verde Trichoderma, negro Aspergillus, rojo bacterias) o olor extraño (vinagre, podrido, alcohol). El micelio Psilocybe es BLANCO algodonoso, olor a champiñón fresco. Cualquier desviación = sospechoso." },
  ];

  const filtered = faqs.filter(f =>
    f.q.toLowerCase().includes(query.toLowerCase()) ||
    f.a.toLowerCase().includes(query.toLowerCase())
  );

  return (
    <div>
      <InfoBoxM>
        Preguntas comunes sobre cultivo de setas. Situaciones reales que encuentran principiantes.
      </InfoBoxM>

      <input type="text" placeholder="🔍 Buscar pregunta o palabra clave..." value={query} onChange={(e) => setQuery(e.target.value)} style={{
        width: "100%", padding: "10px 14px", fontSize: "13px",
        background: MUSHROOM_COLORS.bg2, color: MUSHROOM_COLORS.textBright, border: `1px solid ${MUSHROOM_COLORS.border1}`,
        borderRadius: "8px", marginBottom: "12px", fontFamily: "inherit", outline: "none",
      }} />
      <div style={{ fontSize: "11px", color: MUSHROOM_COLORS.accent2, marginBottom: "12px" }}>
        {filtered.length}/{faqs.length} preguntas {query && `· "${query}"`}
      </div>

      {filtered.map((f, i) => (
        <div key={i} style={{ background: MUSHROOM_COLORS.bg2, border: `1px solid ${MUSHROOM_COLORS.border1}`, borderRadius: "10px", padding: "14px", marginBottom: "12px" }}>
          <div style={{ fontSize: "13px", fontWeight: "bold", color: MUSHROOM_COLORS.textBright, marginBottom: "8px" }}>❓ {f.q}</div>
          <div style={{ fontSize: "12px", color: MUSHROOM_COLORS.accent3, lineHeight: "1.6" }}>{f.a}</div>
        </div>
      ))}
    </div>
  );
}
