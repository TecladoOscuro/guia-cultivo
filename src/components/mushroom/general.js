// GUÍA SETAS - CONTENIDO GENERAL
// Glosario, FAQ y términos aplicables a ambos modos (Kit + Manual)

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
