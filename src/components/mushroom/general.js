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
          <div key={i} onClick={() => navigate && navigate(n.mode, n.phase)} style={{
            position: "relative", marginBottom: "16px", cursor: "pointer",
            background: MUSHROOM_COLORS.bg2,
            border: `1px solid ${n.highlight ? MUSHROOM_COLORS.accent2 : MUSHROOM_COLORS.border1}`,
            borderRadius: "10px", padding: "12px 14px",
            transition: "all 0.2s",
          }}
          onMouseEnter={(e) => { e.currentTarget.style.borderColor = MUSHROOM_COLORS.accent1; e.currentTarget.style.transform = "translateX(4px)"; }}
          onMouseLeave={(e) => { e.currentTarget.style.borderColor = n.highlight ? MUSHROOM_COLORS.accent2 : MUSHROOM_COLORS.border1; e.currentTarget.style.transform = "translateX(0)"; }}
          >
            <div style={{
              position: "absolute", left: "-25px", top: "12px",
              width: "16px", height: "16px", borderRadius: "50%",
              background: n.color, border: `2px solid ${MUSHROOM_COLORS.bg}`,
            }} />
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
  return (
    <div>
      <InfoBoxM>
        Preguntas comunes sobre cultivo de setas. Situaciones reales que encuentran principiantes.
      </InfoBoxM>

      {[
        { q: "¿Cuánto tiempo tarda todo el ciclo?", r: "Kit: 2-3 semanas desde que sacas el pan hasta la 1ª cosecha. Manual: 4-6 semanas (1-2 de esterilización + inoculación, 2-3 de incubación, 1-2 fructificación)." },
        { q: "¿Por qué se contamina?", r: "Bacterias o moho entran durante la inoculación. Una jeringa de esporas contaminada o una técnica SAB deficiente son causas. Manual requiere mucha más asepsia que kit." },
        { q: "¿Cuándo cosechar?", r: "Antes de que se rompa el velo (membrana bajo el sombrero). Justo antes o justo después es óptimo. Si esperas demasiado, suelta esporas negras en el sustrato (afecta próximos flushes)." },
        { q: "¿Qué hacer entre flushes?", r: "Cold shock: 24h en nevera. Luego sacas, dejas en SGFC, nebulizas y esperas a que salgan nuevos primordi (3-7 días). Puedes hacer 3-6 flushes totales." },
        { q: "¿Puedo secar los hongos en horno?", r: "NO a temperatura alta — degrada los compuestos activos. Usa presecado en bandeja (2-3h a temperatura ambiente) + desecador con silica gel (24h) = cracker dry sin calor." },
        { q: "¿Duran mucho tiempo almacenados?", r: "Cracker dry en bolsa hermética en lugar frío/oscuro dura años. Lo ideal: bolsa hermética + sílica gel + congelador = 2+ años sin perder potencia." },
        { q: "¿Kit o Manual? ¿Cuál para empezar?", r: "Kit si quieres rápido y fácil (2 semanas). Manual si eres paciente y quieres aprender microbiología (4-6 semanas, mucho mayor rendimiento). Kit es 80% autónomo. Manual requiere precisión." },
        { q: "¿Qué temperatura exacta para incubación?", r: "Idealmente 24-28°C. Menos de 20°C = muy lento. Más de 30°C = Trichoderma aprovecha. Manta térmica es tu aliada si en tu casa hace frío." },
        { q: "¿Está legal cultivar setas?", r: "Varía por país. Psilocybe es Schedule I en muchos lugares. Este contenido es puramente educativo. Verifica leyes locales." },
        { q: "¿Cuánto miligramo por hongo?", r: "Varía mucho (50-500mg dependiendo especie, tamaño, condiciones crecimiento). Empieza bajo (0.5-1g) y titula. No hay dosis segura — educación es clave." },
        { q: "¿Se pone molido en algo o entero?", r: "Entero si es posible (absorción lenta, viaje prolongado). Molido en té (lemon tek) = efecto más rápido. Molido en chocolate = enmascarar sabor." },
        { q: "¿Pertenezco a algún grupo/comunidad?", r: "r/shrooms, Shroomery, Erowid son comunidades. Pero cultivo casero = responsabilidad personal. No hay garantías de seguridad." },
      ].map((item, i) => (
        <div key={i} style={{ background: MUSHROOM_COLORS.bg2, border: `1px solid ${MUSHROOM_COLORS.border1}`, borderRadius: "10px", padding: "14px", marginBottom: "12px" }}>
          <div style={{ fontSize: "13px", fontWeight: "bold", color: MUSHROOM_COLORS.textBright, marginBottom: "8px" }}>❓ {item.q}</div>
          <div style={{ fontSize: "12px", color: MUSHROOM_COLORS.accent3, lineHeight: "1.6" }}>{item.r}</div>
        </div>
      ))}
    </div>
  );
}
