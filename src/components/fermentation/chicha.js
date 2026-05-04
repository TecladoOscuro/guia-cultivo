// FERMENTACIONES — CHICHA DE JORA

function COMPRA_CHICHA() {
  const c = FERMENT_COLORS;
  const items = [
    { item: "🌽 Maíz seco morado o amarillo (1kg)", precio: "1-3€", donde: "Supermercado latin/chino", nota: "Punto de partida si quieres hacer la jora (malteo) tú mismo. Maíz morado (variedad peruana) da color púrpura intenso y más antocianinas. El amarillo da sabor más neutro. Busca en tiendas latinas, africanas o chinas — suelen tenerlo a granel.", prioridad: "ESENCIAL", tipo: "Consumible" },
    { item: "🌽 Jora premalteada (harina de maíz malteado, 500g)", precio: "5-15€", donde: "Internet/tiendas latinas", nota: "Opción directa si no quieres maltar en casa. Busca 'jora', 'maíz jora', 'harina de jora' en tiendas latinoamericanas o Amazon. Con jora comprada te saltas los pasos de germinación y secado (que tardan 1 semana).", prioridad: "ALTERNATIVA", tipo: "Consumible" },
    { item: "🍬 Panela o piloncillo (200-300g)", precio: "2-4€", donde: "Tiendas latinas/bio", nota: "Azúcar de caña sin refinar, prensada en bloques. Da el dulzor necesario para que la chicha alcance 2-4% ABV y aporta notas caramelizadas. Alternativa: azúcar blanca (funciona, menos compleja). Busca 'panela', 'piloncillo', 'raspadura' o 'chancaca' según país.", prioridad: "ESENCIAL", tipo: "Consumible" },
    { item: "💧 Agua mineral o filtrada (8-10L)", precio: "1-3€", donde: "Supermercado", nota: "No usar agua del grifo sin filtrar — el cloro inhibe la fermentación natural. Agua mineral de botella es la opción más fácil. Alternativa: filtro de carbón activo para quitar el cloro del grifo.", prioridad: "ESENCIAL", tipo: "Consumible" },
    { item: "🌿 Especias: canela (2 ramas) + clavo de olor (4-6 piezas) + pimienta negra entera (opcional)", precio: "1-3€", donde: "Supermercado", nota: "Opcional pero clásico. La receta tradicional varía mucho por región: en Perú a veces se usa sin especias; en Ecuador se añade hierba luisa. Canela y clavo son los más comunes. NO usar en polvo — polvos dan sabor amargo y turbian demasiado el líquido.", prioridad: "ÚTIL", tipo: "Consumible" },
    { item: "🫙 Recipiente fermentación 5-10L (boca ancha)", precio: "5-15€", donde: "Ferretería/internet", nota: "Cubo de plástico food-grade con tapa, garrafa de vidrio, o incluso una olla grande tapada con tela. La chicha es fermentación ABIERTA (semicubierta, no hermética), así que no necesitas airlock — basta con tela o un trapo limpio.", prioridad: "ESENCIAL", tipo: "Equipo" },
    { item: "🥄 Olla grande (10L o más)", precio: "15-40€", donde: "Tienda física", nota: "Para la cocción larga (2-6 horas) de la jora. Si ya tienes olla de cerveza casera, perfecta. Importante que sea grande — la chicha hace mucha espuma al cocer.", prioridad: "ESENCIAL", tipo: "Equipo" },
    { item: "🧺 Colador de malla fina o tela (muselina, gasa)", precio: "3-8€", donde: "Tienda física/internet", nota: "Para filtrar el líquido del sólido de maíz cocido. La tela de muselina es la más eficiente — permite apretar los sólidos para extraer todo el jugo. Alternativa: colador muy fino de cocina (menos eficiente).", prioridad: "ESENCIAL", tipo: "Equipo" },
    { item: "🍾 Botellas o jarras para guardar chicha", precio: "0-10€", donde: "Reutilizadas", nota: "La chicha se consume FRESCA en 1-5 días, no se embotella para larga maduración. Sirven botellas PET reutilizadas de refresco, jarras de agua, o servir directo desde el recipiente. Si embotellas en vidrio con tapa hermética: refrigerar siempre.", prioridad: "ESENCIAL", tipo: "Equipo" },
  ];
  const [filterPrio, setFilterPrio] = React.useState([]);
  const [filterTipo, setFilterTipo] = React.useState([]);
  const togglePrio = (p) => setFilterPrio(s => s.includes(p) ? s.filter(x => x !== p) : [...s, p]);
  const toggleTipo = (t) => setFilterTipo(s => s.includes(t) ? s.filter(x => x !== t) : [...s, t]);
  const filtered = items.filter(i =>
    (filterPrio.length === 0 || filterPrio.includes(i.prioridad)) &&
    (filterTipo.length === 0 || filterTipo.includes(i.tipo))
  );
  const prioColor = { "ESENCIAL": "#e8755a", "IMPORTANTE": "#dfb578", "ÚTIL": "#c08040", "ALTERNATIVA": "#7a9e7e" };
  const tipoColor = { "Equipo": "#8a5e30", "Consumible": "#c08040" };

  return (
    <div>
      <InfoBoxX c={c}>
        Lista para ~5L de chicha de jora. Coste total: 10-25€ (primer lote con equipo). Con equipo ya disponible: 5-10€ solo en ingredientes. La bebida más antigua de América — 4000+ años en los Andes.
      </InfoBoxX>

      <SectionTitleX c={c}>FILTRAR POR PRIORIDAD</SectionTitleX>
      <div style={{ display: "flex", gap: "6px", marginBottom: "12px", flexWrap: "wrap" }}>
        {["ESENCIAL", "IMPORTANTE", "ÚTIL", "ALTERNATIVA"].map(p => {
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

      <SectionTitleX c={c}>LISTA DE COMPRA CHICHA ({filtered.length}/{items.length})</SectionTitleX>
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
    </div>
  );
}

function PREP_CHICHA() {
  const c = FERMENT_COLORS;
  return (
    <div>
      <InfoBoxX c={c}>
        Preparar chicha tiene dos rutas: (A) hacer la jora desde cero — germinar, secar y moler el maíz (1 semana extra, más auténtico), o (B) comprar jora ya lista y empezar directamente con la cocción (mucho más rápido). Ambas dan buen resultado.
      </InfoBoxX>

      <SectionTitleX c={c}>RUTA A — HACER JORA DESDE CERO (MALTEO CASERO)</SectionTitleX>
      <InfoBoxX c={c}>
        La "jora" es maíz germinado y secado. Durante la germinación, el maíz produce enzimas amilasas que rompen el almidón en azúcares fermentables. Sin esta conversión, las levaduras no pueden fermentar el maíz. Este proceso se llama "malteado" y es exactamente lo mismo que la cebada malteada de la cerveza.
      </InfoBoxX>
      <StepX c={c} num={1} text="Lavar 1kg de maíz seco. Poner en remojo en agua durante 48 horas, cubierto." why="El maíz absorbe agua y activa los procesos biológicos que inician la germinación." />
      <StepX c={c} num={2} text="Escurrir y extender el maíz húmedo en capas finas sobre un trapo o tela en un lugar cálido y con algo de luz (20-28°C). Cubrir ligeramente con otro trapo húmedo." />
      <StepX c={c} num={3} text="Revisar cada día y humedecer ligeramente si se seca. Esperar 3-5 días hasta que aparezcan brotes blancos de 0.5-1cm en cada grano." why="El brote visible confirma que las enzimas amilasas están activas. Brotes más largos no mejoran — el maíz empieza a usar sus azúcares para crecer." />
      <StepX c={c} num={4} text="Extender el maíz germinado en una bandeja y secar al sol durante 2-3 días (o en horno a 50°C durante 4-6 horas, puerta entreabierta)." why="El secado detiene la germinación y concentra los azúcares. El maíz debe quedar seco y duro para poder moler." />
      <StepX c={c} num={5} text="Moler el maíz seco en robot de cocina, molinillo o mortero hasta obtener una harina gruesa (no muy fina — partículas gruesas filtran mejor después)." />

      <SectionTitleX c={c}>RUTA B — JORA COMPRADA (OPCIÓN RÁPIDA)</SectionTitleX>
      <InfoBoxX c={c}>
        Busca 'harina de jora' o 'jora' en tiendas latinoamericanas, peruanas, o Amazon. La jora premalteada ya tiene las enzimas activas. Saltar directamente al paso de cocción.
      </InfoBoxX>

      <SectionTitleX c={c}>COCCIÓN DEL MOSTO (AMBAS RUTAS)</SectionTitleX>
      <StepX c={c} num={1} text="Poner a hervir 8-10L de agua mineral o filtrada en la olla grande." />
      <StepX c={c} num={2} text="Cuando hierva, añadir la jora (harina de maíz malteado) poco a poco, removiendo para evitar grumos. Reducir a fuego medio-bajo." />
      <StepX c={c} num={3} text="Cocer a fuego suave removiendo ocasionalmente durante 2-6 horas (tradicional: hasta 12 horas para máximo sabor). El mosto se vuelve espeso, oscuro y aromático." why="La cocción larga extrae todos los azúcares y sabores del maíz. A más tiempo, más color, más cuerpo y más complejidad. Para primer intento, 3-4 horas son suficientes." />
      <StepX c={c} num={4} text="En los últimos 30 minutos de cocción: añadir las ramas de canela, clavos de olor y la panela o azúcar. Remover hasta que la panela se disuelva completamente." />
      <StepX c={c} num={5} text="Retirar del fuego. Colar el mosto caliente a través de tela de muselina o colador fino hacia el recipiente de fermentación. Apretar bien los sólidos para extraer todo el líquido." />
      <StepX c={c} num={6} text="Dejar enfriar el mosto a temperatura ambiente (25-28°C). Cubrir el recipiente con un trapo limpio mientras enfría para evitar contaminación." why="El mosto muy caliente mataría la levadura. La temperatura correcta para inocular es 25-28°C — lo que se siente tibio pero no caliente al tacto." />

      <SectionTitleX c={c}>ERRORES COMUNES EN PREPARACIÓN</SectionTitleX>
      <ErrorCardX c={c}
        error="Usar maíz sin maltar (maíz normal crudo)"
        consecuencia="El almidón del maíz no se convierte en azúcar. Las levaduras no pueden fermentarlo — resultado: mosto sin alcohol, agrio por bacterias."
        fix="Asegurarte de que el maíz está germinado (jora) antes de cocer. Si no lo malteaste tú, comprar harina de jora ya preparada."
      />
      <ErrorCardX c={c}
        error="Inocular con el mosto todavía caliente"
        consecuencia="La levadura muere. No hay fermentación. El mosto se vuelve agrio y malo."
        fix="Esperar siempre a que el mosto baje de 30°C antes de añadir levadura o chicha madre."
      />
      <ErrorCardX c={c}
        error="Colar con colador demasiado grueso"
        consecuencia="Partículas sólidas grandes en suspensión. La chicha queda muy turbia y el sedimento excesivo afecta el sabor."
        fix="Usar tela de muselina o pasar por el colador dos veces."
      />
    </div>
  );
}

function FERMENTACION_CHICHA() {
  const c = FERMENT_COLORS;
  return (
    <div>
      <InfoBoxX c={c}>
        La chicha fermenta rápido: 2-5 días a temperatura ambiente. Es bebida fresca — no busca 6 meses de maduración. La tradición andina la bebe durante el propio proceso de fermentación, cuando está fresca y ligeramente efervescente.
      </InfoBoxX>

      <SectionTitleX c={c}>OPCIONES DE INOCULACIÓN</SectionTitleX>
      <div style={{ display: "grid", gap: "8px", marginBottom: "16px" }}>
        {[
          { opcion: "🌽 Chicha madre (tradicional)", det: "Si tienes un lote anterior: reservar 100-200ml de chicha activa (turbio, burbujeante) como inoculante del nuevo lote. Es la forma más auténtica — cada lote 'enseña' al siguiente. Las levaduras y bacterias se adaptan al maíz local con el tiempo." },
          { opcion: "🦠 Levadura de pan (opción rápida)", det: "1g de levadura de panadería seca (Saccharomyces cerevisiae) por cada 5L. Hidratar 10 minutos en agua tibia. Añadir al mosto enfriado. Fermentación arranca en 12-24h." },
          { opcion: "🍻 Fermentación salvaje (solo superficies del maíz)", det: "No añadir nada — las levaduras naturales que quedan en la superficie del maíz inician la fermentación solas. Más lento (2-3 días para arrancar) e impredecible, pero el resultado puede ser más complejo. Funciona mejor en verano (temperaturas más altas)." },
        ].map((o, i) => (
          <div key={i} style={{ background: c.bg2, border: `1px solid ${c.border1}`, borderRadius: "8px", padding: "10px" }}>
            <div style={{ fontSize: "12px", fontWeight: "bold", color: c.textBright, marginBottom: "3px" }}>{o.opcion}</div>
            <div style={{ fontSize: "11px", color: c.accent3, lineHeight: "1.5" }}>{o.det}</div>
          </div>
        ))}
      </div>

      <SectionTitleX c={c}>PROCESO DÍA A DÍA</SectionTitleX>
      <StepX c={c} num={1} text="Verter el mosto enfriado en el recipiente de fermentación. Añadir el inoculante elegido (chicha madre, levadura de pan, o nada). Remover bien." />
      <StepX c={c} num={2} text="Cubrir el recipiente con una tela o trapo limpio (NO tapar herméticamente). Dejar en lugar cálido (22-28°C), fuera del sol directo." why="La chicha es fermentación semicubierta — necesita respirar. Tapar hermético acumularía CO₂ y podría presurizar el recipiente." />
      <StepX c={c} num={3} text="Día 1-2: aparece burbujeo suave en la superficie, ligero olor afrutado-fermento. Si usaste levadura de pan: burbujeo fuerte en 12-24h." />
      <StepX c={c} num={4} text="Día 2-3: fermentación activa. La chicha está turbio-rosada (si es morado) o amarillo-marrón (si es amarillo). Burbujeo constante. PROBAR: sabor dulce-ácido, ligeramente efervescente. Esta es chicha 'fresca' — la tradicional para beber." why="La chicha de día 2 es el equivalente a cómo se sirve en Perú y Bolivia: fresca, baja en alcohol (1-2%), refrescante." />
      <StepX c={c} num={5} text="Día 3-5: la chicha se vuelve más seca (menos dulce), más ácida y más alcohólica (2-4% ABV). Si prefieres menos dulce y más potente: espera más." />
      <StepX c={c} num={6} text="Día 5+: la chicha empieza a volverse muy ácida (vinagre de maíz). A partir de aquí conviene refrigerar si aún no se ha consumido." />

      <SectionTitleX c={c}>SEÑALES DE FERMENTACIÓN SANA</SectionTitleX>
      <div style={{ display: "grid", gap: "8px", marginBottom: "16px" }}>
        {[
          { señal: "✅ Burbujeo visible en superficie", det: "Normal. Indica actividad de levaduras (producción de CO₂)." },
          { señal: "✅ Olor afrutado-ácido agradable", det: "Normal. Mezcla de ésteres de levadura + ácido láctico." },
          { señal: "✅ Líquido turbio de color rosado/marrón", det: "Normal. Las partículas de maíz en suspensión dan turbidez. Se asienta con el tiempo." },
          { señal: "✅ Capa blanca fina en superficie", det: "Normal. Son levaduras activas (krausen). Desaparece sola." },
          { señal: "⚠️ Moho verde/negro en superficie", det: "Señal de alerta. Retirar la capa y verificar sabor. Si solo es superficie y el líquido huele bien: continuar. Si hay olor a moho en todo el lote: descartar." },
          { señal: "❌ Olor a acetona o a barniz", det: "Fermentación a temperatura demasiado alta. Baja la temperatura o busca lugar más fresco. El sabor será ligeramente raro pero no peligroso." },
        ].map((s, i) => (
          <div key={i} style={{ background: c.bg2, border: `1px solid ${c.border1}`, borderRadius: "8px", padding: "10px" }}>
            <div style={{ fontSize: "12px", fontWeight: "bold", color: c.textBright, marginBottom: "3px" }}>{s.señal}</div>
            <div style={{ fontSize: "11px", color: c.accent3, lineHeight: "1.5" }}>{s.det}</div>
          </div>
        ))}
      </div>

      <SectionTitleX c={c}>ERRORES COMUNES EN FERMENTACIÓN</SectionTitleX>
      <ErrorCardX c={c}
        error="Tapar herméticamente durante fermentación activa"
        consecuencia="Acumulación de CO₂ — riesgo de que el recipiente explote o deforme si es plástico."
        fix="Siempre cubrir con tela, no tapar a presión durante los primeros 3-4 días activos."
      />
      <ErrorCardX c={c}
        error="Fermentar en lugar frío (menos de 18°C)"
        consecuencia="Fermentación muy lenta o que no arranca. El mosto se agria por bacterias antes de que la levadura domine."
        fix="Buscar lugar cálido: encima de electrodomésticos que generan calor, dentro de armario, etc. Temperatura ideal: 22-28°C."
      />
    </div>
  );
}

function CATA_CHICHA() {
  const c = FERMENT_COLORS;
  return (
    <div>
      <InfoBoxX c={c}>
        La chicha de jora no es una bebida de guarda — es una bebida VIVA que se consume fresca. Cuanto antes se beba después de fermentar, más auténtica es la experiencia andina. El perfil de sabor cambia cada día.
      </InfoBoxX>

      <SectionTitleX c={c}>PERFIL DE SABOR POR DÍA</SectionTitleX>
      <div style={{ display: "grid", gap: "8px", marginBottom: "20px" }}>
        {[
          { tiempo: "Día 1-2 (chicha fresca)", sabor: "Dulce, ligeramente ácido, efervescente. Olor a maíz cocido, especias. 1-2% ABV. Refrescante — así se sirve en mercados peruanos y bolivianos." },
          { tiempo: "Día 3 (punto óptimo)", sabor: "Equilibrio dulce-ácido. Más gas natural. Notas de maíz tostado, canela, leve fermentado. 2-3% ABV. Recomendado para primer intento." },
          { tiempo: "Día 4-5 (chicha adulta)", sabor: "Más seca, más ácida, más alcohólica (3-4% ABV). Notas a ácido láctico más pronunciadas. Sabor más complejo pero más adquirido." },
          { tiempo: "Día 6+ (acidificando)", sabor: "Muy ácido. Recuerda al vinagre de maíz. A partir de aquí: mover al frío para frenar la fermentación o usar como inoculante de siguiente lote." },
        ].map((t, i) => (
          <div key={i} style={{ background: c.bg2, border: `1px solid ${c.border1}`, borderRadius: "8px", padding: "10px" }}>
            <div style={{ fontSize: "11px", color: c.accent1, fontWeight: "bold", letterSpacing: "1px", marginBottom: "3px" }}>{t.tiempo.toUpperCase()}</div>
            <div style={{ fontSize: "12px", color: c.accent3, lineHeight: "1.5" }}>{t.sabor}</div>
          </div>
        ))}
      </div>

      <SectionTitleX c={c}>CÓMO SERVIR</SectionTitleX>
      <InfoBoxX c={c}>
        🥤 <strong>Temperatura:</strong> fría o a temperatura ambiente. Nunca caliente.<br/>
        🫙 <strong>Vaso:</strong> tradicional en vaso de arcilla o calabaza. Cualquier vaso sirve.<br/>
        🌽 <strong>Presentación:</strong> agitar suavemente antes de servir para distribuir los sedimentos (o dejar sedimentar y servir la parte clara — ambas son válidas).<br/>
        🍹 <strong>Mezclas:</strong> en fiestas peruanas se mezcla con zumo de maracuyá o limón para balancear la acidez.
      </InfoBoxX>

      <SectionTitleX c={c}>VARIANTES REGIONALES</SectionTitleX>
      <div style={{ display: "grid", gap: "8px", marginBottom: "16px" }}>
        {[
          { variante: "🟣 Chicha morada (no fermentada)", det: "Bebida peruana no alcohólica. Se hace cociendo maíz morado con frutas (piña, membrillo, guindas) y especias, sin fermentar. Es un refresco, no chicha fermentada. No confundir." },
          { variante: "🌽 Chicha de jora amarilla", det: "La más común en Perú. Maíz amarillo, color dorado. Sabor más neutro y suave." },
          { variante: "🟣 Chicha de jora morada", det: "Maíz morado peruano. Color rojo-violeta intenso, más antocianinas, sabor ligeramente más frutal y terroso." },
          { variante: "🫚 Chicha con quinoa", det: "Variante boliviana: se añade quinoa tostada al mosto. Más proteína, sabor a nuez, más cuerpo." },
          { variante: "🌶️ Chicha huarpe (Mendoza)", det: "Argentina, sin especias. Solo jora + agua + azúcar. Sabor más limpio, más simple." },
        ].map((v, i) => (
          <div key={i} style={{ background: c.bg2, border: `1px solid ${c.border1}`, borderRadius: "8px", padding: "10px" }}>
            <div style={{ fontSize: "12px", fontWeight: "bold", color: c.textBright, marginBottom: "3px" }}>{v.variante}</div>
            <div style={{ fontSize: "11px", color: c.accent3, lineHeight: "1.5" }}>{v.det}</div>
          </div>
        ))}
      </div>

      <SectionTitleX c={c}>CONSERVACIÓN</SectionTitleX>
      <div style={{ display: "grid", gap: "6px", marginBottom: "16px" }}>
        {[
          { label: "Temperatura ambiente", value: "1-3 días (sigue fermentando)" },
          { label: "Refrigerada (4°C)", value: "3-7 días (fermentación muy lenta)" },
          { label: "Maduración larga", value: "No aplica — consumir fresca" },
        ].map((s, i) => (
          <StatBoxX key={i} c={c} label={s.label} value={s.value} />
        ))}
      </div>

      <LegalHealthBox c={c}
        legal={<>✅ Fermentación de chicha para consumo propio: 100% LEGAL en España y UE.<br/>✅ ABV 1-4% — similar a una cerveza floja o una sidra.<br/>❌ Venta sin licencia ni registro sanitario: ilegal.<br/>📜 Patrimonio cultural andino — reconocida como parte de la identidad culinaria de Perú, Bolivia y Ecuador.</>}
        salud="ABV bajo (1-4%) pero sigue siendo alcohol. Consumo responsable. La chicha fresca (día 1-2) tiene casi el mismo alcohol que la kombucha o el kéfir de agua — muy apto para consumo cotidiano con moderación."
        contraindicaciones="Embarazo/lactancia · Intolerancia al maíz (poco común) · Medicación incompatible con alcohol"
        recursos="YouTube: 'chicha de jora casera' (canales peruanos) · r/homebrewing · Libro: 'The Oxford Companion to Beer' capítulo Chicha · Museos de Lima (Larco, Pachacámac) para contexto histórico"
      />
    </div>
  );
}
