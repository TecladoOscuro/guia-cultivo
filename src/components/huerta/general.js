// HUERTA — Guía completa de cultivo de verduras y hortalizas en clima mediterráneo (Barcelona)
// Cada planta = phase. Siembra + cultivo + cosecha + variedades + asociación.

function INTRO_HUERTA() {
  const c = HUERTA_COLORS;
  return (
    <div>
      <InfoBoxX c={c}>
        Guía práctica de huerto urbano y de balcón para el clima mediterráneo de Barcelona. De las solanáceas de verano a las aromáticas perennes: 30 plantas con instrucciones detalladas de siembra, cultivo, plagas, asociación, cosecha y variedades recomendadas. Todo probado en clima real de BCN. Para principiantes que quieren comer de su propio balcón o terraza.
      </InfoBoxX>

      <SectionTitleX c={c}>POR QUÉ UN HUERTO EN CASA</SectionTitleX>
      <div style={{ display: "grid", gap: "10px", marginBottom: "20px" }}>
        {[
          { titulo: "🍅 Comida de verdad", desc: "Un tomate de tu balcón NO sabe igual que uno de supermercado. Cultivas sabor, no logística." },
          { titulo: "💰 Ahorro real", desc: "4 tomateras producen 20-40kg en verano. A 3-5€/kg en tienda, son 60-200€ ahorrados." },
          { titulo: "🧠 Salud mental", desc: "Cuidar plantas reduce cortisol, ansiedad y depresión. El huerto es terapia gratuita." },
          { titulo: "🌍 Impacto cero", desc: "Sin plásticos, sin transporte, sin cadena de frío. Tu comida recorre 5 metros." },
          { titulo: "👶 Educativo", desc: "Los niños que cultivan verduras las COMEN. Adiós a la guerra del brócoli." },
        ].map((item, i) => (
          <div key={i} style={{ background: c.bg2, border: `1px solid ${c.border1}`, borderRadius: "10px", padding: "12px" }}>
            <div style={{ fontSize: "14px", fontWeight: "bold", color: c.textBright, marginBottom: "4px" }}>{item.titulo}</div>
            <div style={{ fontSize: "12px", color: c.accent3, lineHeight: "1.5" }}>{item.desc}</div>
          </div>
        ))}
      </div>

      <SectionTitleX c={c}>CALENDARIO ANUAL DEL HUERTO EN BCN</SectionTitleX>
      <InfoBoxX c={c}>
        Barcelona = clima mediterráneo litoral. Inviernos suaves (rara vez bajo 2°C), veranos calurosos (30-35°C), humedad alta. Esto permite cultivar TODO EL AÑO. Julio-agosto = PARÓN (solo berenjenas, pimientos, calabacines, okra aguantan el calor fuerte). Octubre-marzo = cultivos de invierno (coles, habas, guisantes, espinacas, ajos).
      </InfoBoxX>
      <div style={{ display: "grid", gap: "10px", marginBottom: "20px" }}>
        {[
          { mes: "ENE-FEB", siembra: "Tomate, pimiento, berenjena (interior). Habas, guisantes (exterior).", cosecha: "Coles de invierno, acelgas, espinacas, kale." },
          { mes: "MAR-ABR", siembra: "Lechuga, zanahoria, rábano, remolacha, judía, calabacín, pepino. Trasplantar tomate.", cosecha: "Habas, guisantes, últimas coles." },
          { mes: "MAY-JUN", siembra: "Calabacín, pepino, judía (segunda tanda). Melón, sandía.", cosecha: "Lechugas, rábanos, primeras judías." },
          { mes: "JUL-AGO", siembra: "Kale, brócoli, coliflor (semillero para otoño).", cosecha: "Tomates, pimientos, berenjenas, calabacines, pepinos. COSECHA GRANDE." },
          { mes: "SEP-OCT", siembra: "Espinaca, lechuga de otoño, acelga. Ajos (finales oct).", cosecha: "Últimos tomates, melones, sandías." },
          { mes: "NOV-DIC", siembra: "Habas, guisantes, ajos. Cebolla de día corto.", cosecha: "Kale, acelgas, espinacas. Puerros." },
        ].map((m, i) => (
          <div key={i} style={{ background: c.bg2, border: `1px solid ${c.border1}`, borderRadius: "10px", padding: "12px" }}>
            <div style={{ fontSize: "13px", fontWeight: "bold", color: c.accent1, marginBottom: "6px" }}>{m.mes}</div>
            <div style={{ fontSize: "12px", color: c.accent3, lineHeight: "1.5", marginBottom: "4px" }}>🌱 <strong>Siembra:</strong> {m.siembra}</div>
            <div style={{ fontSize: "12px", color: c.accent3, lineHeight: "1.5" }}>🧺 <strong>Cosecha:</strong> {m.cosecha}</div>
          </div>
        ))}
      </div>

      <SectionTitleX c={c}>CONSEJOS PARA PRINCIPIANTES</SectionTitleX>
      <StepX c={c} num={1} text="Empieza con 3-4 plantas fáciles: lechuga, rábano, albahaca y una tomatera cherry. No montes un huerto de 30m² el primer año." why="El huerto escala rápido. Mejor dominar pocas plantas que frustrarte con 20." />
      <StepX c={c} num={2} text="Compra buen sustrato, no tierra de jardín. El sustrato universal + compost (70/30) es la base de todo. Macetas: mínimo 20L para tomates, 10-15L para lechugas." />
      <StepX c={c} num={3} text="Sol, sol, sol. Un balcón orientado sur recibe 8-10h de sol en verano = producción máxima. Con menos de 4h de sol directo, cultiva solo hoja verde (lechuga, espinaca, kale)." />
      <StepX c={c} num={4} text="Riego: por la mañana temprano o al atardecer, NUNCA al mediodía. Mejor riego profundo cada 2-3 días que poco cada día. Toca la tierra: si está seca a 2cm, riega." />
      <StepX c={c} num={5} text="NO te obsesiones con las plagas. En huerto ecológico siempre hay pulgones, orugas, caracoles. Una planta sana aguanta. Intervenir solo si ves daño real." />

      <SectionTitleX c={c}>HERRAMIENTAS BÁSICAS</SectionTitleX>
      <InfoBoxX c={c}>
        🪴 <strong>Imprescindibles:</strong> regadera o manguera con pistola, paleta de mano, guantes, tijeras de podar pequeñas, tutores (cañas de bambú), rafia o cuerda suave.<br/>
        🧪 <strong>Recomendables:</strong> medidor de pH del suelo (más importante de lo que parece), pulverizador para plagas, semillero con tapa (crea mini invernadero), etiquetas para identificar plantas.<br/>
        🛒 <strong>Prescindibles al principio:</strong> todo lo eléctrico, sistemas de riego automático, macetas de diseño. Empieza con lo básico.
      </InfoBoxX>

      <WarningBoxX c={c}>
        🌡️ <strong>El mayor error de principiante en BCN:</strong> plantar tomates en marzo en exterior. Las noches frescas de marzo-abril (<10°C) frenan el crecimiento para siempre. Espera a mayo para plantar fuera. Mientras, tenlos en interior junto a una ventana soleada.
      </WarningBoxX>
    </div>
  );
}

function COMPRA_HUERTA() {
  const c = HUERTA_COLORS;
  const items = [
    { item: "🪴 Sustrato universal 50L", precio: "8-15€", donde: "Leroy Merlin, Bauhaus, garden online", nota: "Base para todo. Comprar saco grande (más barato). Evitar los baratos (puro turba sin nutrientes).", categoria: "Sustratos" },
    { item: "🪴 Compost o humus de lombriz 20L", precio: "5-10€", donde: "Viveros, Amazon", nota: "Mezclar 30% con sustrato universal. O hacer compost casero (gratis a largo plazo).", categoria: "Sustratos" },
    { item: "🪴 Perlita o vermiculita 10L", precio: "5-8€", donde: "Amazon, garden centers", nota: "Mejora drenaje y aireación. Imprescindible para semilleros. Añadir 10-20% a la mezcla.", categoria: "Sustratos" },
    { item: "🌰 Semillas — kit principiante", precio: "15-30€", donde: "Battle, Semillas Fito, Rocalba, Les Refardes", nota: "Mejor comprar 10-15 sobres que un kit pre-hecho. Variedades locales de Cataluña en Les Refardes (ecológicas).", categoria: "Semillas" },
    { item: "🌰 Semillas — tomate cherry", precio: "2-4€", donde: "Cualquier garden", nota: "La variedad más fácil y productiva. 1 sobre = 20-50 plantas. Compartir con amigos.", categoria: "Semillas" },
    { item: "🌰 Semillas — albahaca genovesa", precio: "1-3€", donde: "Cualquier garden", nota: "Crece sola. 1 sobre = albahaca para todo el verano.", categoria: "Semillas" },
    { item: "🌰 Semillas — lechuga mezcla", precio: "2-4€", donde: "Battle, Fito, Les Refardes", nota: "Sobres con mezcla de variedades. Siembra escalonada cada 2-3 semanas.", categoria: "Semillas" },
    { item: "🌰 Semillas — rábano", precio: "1-3€", donde: "Cualquier garden", nota: "Germina en 3-5 días. Listo en 25-30. Ideal para principiantes impacientes.", categoria: "Semillas" },
    { item: "🪴 Macetas 20-30L (x3)", precio: "15-30€", donde: "Leroy, IKEA, viveros", nota: "Para tomates, pimientos, berenjenas. Mejor plástico (retiene humedad) que terracota (se seca rápido en BCN).", categoria: "Macetas" },
    { item: "🪴 Macetas 10-15L (x5)", precio: "10-20€", donde: "Leroy, IKEA", nota: "Para lechugas, espinacas, aromáticas. Reciclar cubos de pintura o garrafas (agujeros abajo).", categoria: "Macetas" },
    { item: "🪴 Maceta 40-50L (x1)", precio: "10-15€", donde: "Leroy, Amazon", nota: "Para calabacín o melón/sandía. 1 por planta. O usar saco de cultivo de tela geotextil (mejor para raíces).", categoria: "Macetas" },
    { item: "🪴 Semillero con tapa transparente", precio: "5-10€", donde: "Amazon, garden", nota: "Crea efecto invernadero. Imprescindible para germinar solanáceas en enero-febrero.", categoria: "Semilleros" },
    { item: "🪴 Pastillas de turba (Jiffy)", precio: "5-8€ / 50uds", donde: "Amazon", nota: "Más fácil imposible: hidratas, metes semilla, tapas. Trasplante directo sin dañar raíces.", categoria: "Semilleros" },
    { item: "🎋 Cañas de bambú 1.5-2m (x10)", precio: "5-10€", donde: "Garden, Amazon", nota: "Entutorar tomates, judías, pepinos. Reutilizables año tras año.", categoria: "Tutores" },
    { item: "🧶 Rafia o cuerda suave", precio: "2-4€", donde: "Cualquier bazar", nota: "Atar plantas al tutor SIN apretar (la planta crece y se estrangula si aprietas).", categoria: "Tutores" },
    { item: "🪣 Regadera 5-10L", precio: "5-10€", donde: "Cualquier bazar", nota: "Con roseta (alcachofa) para no erosionar la tierra al regar. O manguera con pistola.", categoria: "Riego" },
    { item: "🧪 Kit medidor pH tierra", precio: "10-20€", donde: "Amazon", nota: "La mayoría de hortalizas quieren pH 6-7. El sustrato universal suele ser 5.5-6. Corregir con cal agrícola.", categoria: "Accesorios" },
    { item: "🐞 Jabón potásico 250ml", precio: "5-8€", donde: "Amazon, garden", nota: "Control de pulgón ecológico. Pulverizar cada 5-7 días si hay plaga. No daña abejas.", categoria: "Plagas" },
    { item: "🐞 Aceite de neem 100ml", precio: "8-15€", donde: "Amazon, herboristería", nota: "Insecticida + fungicida natural. Diluir 3-5ml/L de agua. No aplicar en floración (afecta abejas).", categoria: "Plagas" },
    { item: "🧤 Guantes de jardinería", precio: "3-8€", donde: "Cualquier bazar", nota: "Mejor los de nitrilo (ajustados). Los de tela se mojan y ensucian rápido.", categoria: "Accesorios" },
    { item: "✂️ Tijeras de podar pequeñas", precio: "5-15€", donde: "Leroy, Amazon", nota: "Para cosechar, podar chupones, cortar hojas enfermas. Desinfectar con alcohol entre plantas.", categoria: "Accesorios" },
  ];
  const [filterCat, setFilterCat] = React.useState([]);
  const toggleCat = (cat) => setFilterCat(s => s.includes(cat) ? s.filter(x => x !== cat) : [...s, cat]);
  const categorias = [...new Set(items.map(i => i.categoria))];
  const filtered = filterCat.length === 0 ? items : items.filter(i => filterCat.includes(i.categoria));
  const catColor = { "Sustratos": "#6ba34a", "Semillas": "#8bc06a", "Macetas": "#a8d48c", "Semilleros": "#4e7a3c", "Tutores": "#c5e3af", "Riego": "#6ba34a", "Accesorios": "#8bc06a", "Plagas": "#e88a6a" };

  return (
    <div>
      <InfoBoxX c={c}>
        Lista de compra para montar un huerto en terraza/balcón en Barcelona. Precios orientativos 2026. Empieza con lo marcado como ESENCIAL (sustrato, macetas, 3-4 sobres de semillas, regadera) — inversión inicial ~60-100€.
      </InfoBoxX>

      <SectionTitleX c={c}>FILTRAR POR CATEGORÍA</SectionTitleX>
      <div style={{ display: "flex", gap: "6px", marginBottom: "12px", flexWrap: "wrap" }}>
        {categorias.map(cat => {
          const active = filterCat.includes(cat);
          const cc = catColor[cat] || c.accent1;
          return (
            <button key={cat} onClick={() => toggleCat(cat)} style={{
              background: active ? cc : "transparent",
              color: active ? c.bg : cc,
              border: `1.5px solid ${cc}`,
              borderRadius: "16px", padding: "5px 12px",
              fontSize: "11px", fontWeight: "bold", letterSpacing: "0.5px",
              transition: "all 0.15s",
            }}>{cat}</button>
          );
        })}
      </div>
      {filterCat.length > 0 && (
        <button onClick={() => setFilterCat([])} style={{
          background: "transparent", color: c.accent2, border: "none",
          fontSize: "11px", marginBottom: "16px", textDecoration: "underline", padding: 0,
        }}>✕ Limpiar filtros</button>
      )}

      <SectionTitleX c={c}>LISTA DE COMPRA ({filtered.length}/{items.length})</SectionTitleX>
      {filtered.map((item, i) => (
        <div key={i} style={{ background: c.bg2, border: `1px solid ${c.border1}`, borderLeft: `3px solid ${catColor[item.categoria] || c.accent1}`, borderRadius: "10px", padding: "12px", marginBottom: "8px" }}>
          <div style={{ display: "flex", justifyContent: "space-between", marginBottom: "6px" }}>
            <div style={{ fontSize: "13px", fontWeight: "bold", color: c.textBright }}>{item.item}</div>
            <div style={{ fontSize: "11px", color: c.accent1, fontWeight: "bold" }}>{item.precio}</div>
          </div>
          <div style={{ fontSize: "10px", color: c.accent2, marginBottom: "4px" }}>📍 {item.donde}</div>
          <div style={{ fontSize: "12px", color: c.accent3 }}>{item.nota}</div>
        </div>
      ))}

      <InfoBoxX c={c}>
        💡 <strong>Dónde comprar en Barcelona:</strong><br/>
        🌱 <strong>Les Refardes</strong> (Mura, online) — semillas ecológicas de variedades catalanas tradicionales. La mejor opción calidad/precio.<br/>
        🏬 <strong>Leroy Merlin / Bauhaus</strong> — sustratos, macetas, herramientas. Precios competitivos.<br/>
        🛒 <strong>Amazon</strong> — semilleros, perlita, tutores. Cómodo pero apoya al comercio local si puedes.<br/>
        🌿 <strong>Viveros de barrio</strong> — plantel ya crecido (tomateras, pimientos) por 1-3€/planta. Atajo para quien no quiere sembrar.<br/>
        📦 <strong>Battle / Semillas Fito</strong> — disponibles en cualquier garden center. Buena germination, precio justo.
      </InfoBoxX>
    </div>
  );
}

// ============================================================
// SOLANÁCEAS DE VERANO
// ============================================================

function TOMATE() {
  const c = HUERTA_COLORS;
  return (
    <div>
      <InfoBoxX c={c}>
        <strong>Tomate (Lycopersicon esculentum)</strong> — el rey del huerto. Planta de verano que con buenos cuidados da 5-15kg por planta. Necesita sol, riego regular, entutorado y poda de chupones. En Barcelona se siembra en interior en febrero y se trasplanta al exterior en mayo. Recompensa el esfuerzo con sabor que no existe en supermercados.
      </InfoBoxX>

      <SectionTitleX c={c}>FICHA RÁPIDA</SectionTitleX>
      <div style={{ display: "grid", gridTemplateColumns: "1fr 1fr", gap: "10px", marginBottom: "16px" }}>
        <StatBoxX c={c} label="Dificultad" value="Media (entutorar + podar)" />
        <StatBoxX c={c} label="Días a cosecha" value="80-100 desde trasplante" />
        <StatBoxX c={c} label="Sol" value="Pleno sol (mín 6h)" />
        <StatBoxX c={c} label="Agua" value="Riego regular profundo" />
        <StatBoxX c={c} label="Siembra" value="Feb-Mar (interior)" />
        <StatBoxX c={c} label="Trasplante" value="Abril-Mayo (exterior)" />
        <StatBoxX c={c} label="Espaciado" value="50-70cm entre plantas" />
        <StatBoxX c={c} label="Maceta" value="Sí, mínimo 20L" />
      </div>

      <SectionTitleX c={c}>🌱 SIEMBRA</SectionTitleX>
      <StepX c={c} num={1} text="Siembra en interior: febrero-marzo. Usa semillero con tapa o macetitas junto a ventana soleada. Temperatura ideal de germinación: 20-25°C." />
      <StepX c={c} num={2} text="Profundidad: 0.5cm. Cubrir ligeramente con sustrato fino. Mantener húmedo pero no encharcado. Germinan en 5-10 días." />
      <StepX c={c} num={3} text="Cuando la plántula tiene 2-4 hojas verdaderas (no los cotiledones), trasplantar a maceta individual de 8-10cm. Enterrar el tallo hasta las primeras hojas — el tomate emite raíces del tallo enterrado." why="Más raíces = planta más fuerte. El tallo enterrado desarrolla raíces adventicias que mejoran absorción de agua y nutrientes." />
      <StepX c={c} num={4} text="Endurecer las plantas 7-10 días antes del trasplante definitivo: sacarlas al exterior 2-3h el primer día, ir aumentando gradualmente." why="El cambio brusco interior→exterior quema las hojas. La aclimatación gradual evita el shock." />

      <SectionTitleX c={c}>🌿 CULTIVO</SectionTitleX>
      <StepX c={c} num={1} text="Trasplante definitivo: mayo (cuando las noches NO bajan de 12°C). En Barcelona esto suele ser a partir de la 2ª quincena de abril en años cálidos, pero mejor esperar a mayo para ir seguro." />
      <StepX c={c} num={2} text="Sustrato rico: mezcla de sustrato universal 60% + compost 30% + perlita 10%. Añadir un puñado de humus de lombriz en el hoyo de plantación." />
      <StepX c={c} num={3} text="Entutorado OBLIGATORIO desde el día 1. Caña de bambú de 1.5-2m clavada a 5cm del tallo. Atar la planta cada 20-30cm de crecimiento con cuerda suave (nunca apretar — la planta engorda)." />
      <StepX c={c} num={4} text="Poda de chupones: cada 7-10 días, quitar los brotes que salen en la axila (entre el tallo principal y las hojas). Se quitan con los dedos cuando miden 2-5cm. NO cortar con tijera (heridas grandes = entrada de hongos)." why="Los chupones crecen como tallos secundarios y roban energía a la producción de fruto. Si no se podan, tienes una selva con muchos tomates pequeños en vez de pocos y gordos." />
      <StepX c={c} num={5} text="Riego: profundo y regular. En verano BCN, 3-4 litros por planta cada 2 días. Mejor por la mañana. Evitar mojar las hojas (hongos). Riego por goteo casero con botella agujereada = excelente." />
      <StepX c={c} num={6} text="Fertilización: cada 15-20 días con fertilizante rico en potasio (K) una vez aparecen las flores. El exceso de nitrógeno (N) da muchas hojas y pocos frutos." />

      <SectionTitleX c={c}>🪴 MACETA</SectionTitleX>
      <StepX c={c} num={1} text="Mínimo 20 litros por planta. Una maceta de 30-40L es ideal. Las variedades cherry pueden ir en 15L." />
      <StepX c={c} num={2} text="Maceta profunda (30cm+). El tomate desarrolla raíces profundas. Una maceta ancha y poco profunda limita el crecimiento." />
      <StepX c={c} num={3} text="Plato bajo la maceta en verano: mantiene humedad disponible. En invierno, quitar plato para evitar encharcamiento." />
      <StepX c={c} num={4} text="Sustrato se agota en 1 temporada. NO reutilizar sustrato de tomate para otra solanácea (rotación de cultivos — evita enfermedades del suelo)." />

      <SectionTitleX c={c}>🐛 PLAGAS Y ENFERMEDADES</SectionTitleX>
      <StepX c={c} num={1} text="Pulgón: colonias en brotes tiernos y envés de hojas. Solución: jabón potásico (5ml/L agua) pulverizado cada 5 días. O mariquitas (depredador natural)." />
      <StepX c={c} num={2} text="Orugas (Helicoverpa): agujeros en hojas y frutos. Solución: Bacillus thuringiensis (BT) — bacteria ecológica que solo afecta orugas. Pulverizar al atardecer." />
      <StepX c={c} num={3} text="Mildiu (Phytophthora): manchas marrones en hojas, podredumbre del fruto. Típico en otoño con humedad alta. Prevención: no mojar hojas al regar, buena circulación de aire, pulverizar con cola de caballo (fungicida natural)." />
      <StepX c={c} num={4} text="Podredumbre apical (culillo negro): mancha negra en la base del fruto. NO es enfermedad — es deficiencia de calcio por riego irregular. Solución: riego constante, añadir cáscaras de huevo trituradas al sustrato." />
      <StepX c={c} num={5} text="Araña roja: hojas amarillentas con telaraña fina en el envés. Aparece con calor seco. Solución: pulverizar agua en el envés (no le gusta la humedad), aceite de neem (3ml/L)." />

      <SectionTitleX c={c}>🤝 ASOCIACIÓN</SectionTitleX>
      <StepX c={c} num={1} text="Beneficiosas: albahaca (mejora sabor + repele mosca blanca y pulgón), caléndula (atrae polinizadores + repele nematodos), cebolla y ajo (repele ácaros), zanahoria (aprovecha espacio entre tomateras)." />
      <StepX c={c} num={2} text="Perjudiciales: NO plantar con patata (misma familia = mismas plagas y enfermedades). NO con hinojo (inhibe crecimiento de casi todo). NO con maíz (comparte plaga: Helicoverpa)." />

      <SectionTitleX c={c}>✂️ COSECHA Y CONSERVACIÓN</SectionTitleX>
      <StepX c={c} num={1} text="Cosecha: julio a septiembre en BCN. El tomate está listo cuando cede ligeramente al apretar y tiene color uniforme. Mejor cortar con tijeras dejando un poco de pedúnculo." />
      <StepX c={c} num={2} text="NO guardar tomates en nevera — pierden sabor y textura. Conservar a temperatura ambiente, con el pedúnculo hacia abajo. Duran 5-10 días." />
      <StepX c={c} num={3} text="Conservas para el invierno: salsa de tomate casera (cocer y envasar al vacío), tomates secos en aceite (cortar por la mitad, salar, horno 80°C 4-6h, cubrir con aceite de oliva), tomate triturado congelado en bolsas zip." />
      <StepX c={c} num={4} text="Tomates verdes al final de temporada (octubre): recoger antes de que bajen de 10°C. Envolver individualmente en papel de periódico en lugar oscuro — maduran en 1-3 semanas." />

      <SectionTitleX c={c}>🍽️ VARIEDADES RECOMENDADAS PARA BCN</SectionTitleX>
      <StepX c={c} num={1} text="Cherry (Solanum lycopersicum var. cerasiforme): la más fácil y productiva. Racimos de 10-20 frutos. Ideal para principiantes. Variedades: Cherry Pera, Cherry Negro, Yellow Pear." />
      <StepX c={c} num={2} text="Pera (Roma): forma alargada, carne densa, pocas semillas. Perfecta para salsas y conservas. Muy productiva en BCN." />
      <StepX c={c} num={3} text="Corazón de Buey (Cuore di Bue): frutos grandes (200-400g), forma acorazonada, carne carnosa. Para ensaladas y comer crudo. Necesita más calor." />
      <StepX c={c} num={4} text="Raf (Marmande): tomate tradicional español, acanalado, sabor intenso. Algo más delicado pero el sabor compensa. Necesita riego con un punto de salinidad para expresar todo su sabor." />
      <StepX c={c} num={5} text="Montserrat / Rosa de Barbastro: variedades catalanas y aragonesas tradicionales. Huecas por dentro (ideales para rellenar). Muy adaptadas al clima local. Consíguelas en Les Refardes." />
    </div>
  );
}

function PIMIENTO() {
  const c = HUERTA_COLORS;
  return (
    <div>
      <InfoBoxX c={c}>
        <strong>Pimiento (Capsicum annuum)</strong> — misma familia que el tomate pero más lento y amante del calor. En Barcelona se siembra en interior en febrero y se trasplanta en mayo. Necesita 60-90 días desde trasplante hasta cosecha. Menos exigente en poda que el tomate pero más sensible al frío.
      </InfoBoxX>

      <SectionTitleX c={c}>FICHA RÁPIDA</SectionTitleX>
      <div style={{ display: "grid", gridTemplateColumns: "1fr 1fr", gap: "10px", marginBottom: "16px" }}>
        <StatBoxX c={c} label="Dificultad" value="Media-fácil" />
        <StatBoxX c={c} label="Días a cosecha" value="60-90" />
        <StatBoxX c={c} label="Sol" value="Pleno sol" />
        <StatBoxX c={c} label="Agua" value="Regular, no encharcar" />
        <StatBoxX c={c} label="Siembra" value="Feb-Mar (interior)" />
        <StatBoxX c={c} label="Trasplante" value="Mayo" />
        <StatBoxX c={c} label="Espaciado" value="40-50cm" />
        <StatBoxX c={c} label="Maceta" value="Sí, mínimo 15L" />
      </div>

      <SectionTitleX c={c}>🌱 SIEMBRA</SectionTitleX>
      <StepX c={c} num={1} text="Siembra en interior: febrero-marzo. El pimiento necesita más calor que el tomate para germinar: 25-28°C ideal. Usar semillero con tapa o bolsa de plástico para crear efecto invernadero." />
      <StepX c={c} num={2} text="Germinación lenta: 10-20 días. No desesperes. Mantener el sustrato húmedo y cálido. Un truco: poner el semillero encima del router o nevera (calor suave constante)." />
      <StepX c={c} num={3} text="Trasplantar a maceta individual de 10cm cuando tenga 4-6 hojas verdaderas. El pimiento NO se debe enterrar profundo como el tomate — mantener al mismo nivel que estaba." />

      <SectionTitleX c={c}>🌿 CULTIVO</SectionTitleX>
      <StepX c={c} num={1} text="Trasplante definitivo: mediados de mayo en BCN, cuando las temperaturas nocturnas superan 14-15°C. Más sensible al frío que el tomate. Si trasplantas pronto y refresca, la planta se para y tarda semanas en recuperarse." />
      <StepX c={c} num={2} text="Sustrato: rico en materia orgánica pero bien drenado. El pimiento odia el encharcamiento. Añadir un puñado de humus de lombriz en el hoyo." />
      <StepX c={c} num={3} text="Entutorado: opcional pero recomendable. Una caña fina para sujetar el tallo principal. Las variedades de fruto grande (California, morrón) necesitan soporte — las ramas se parten con el peso." />
      <StepX c={c} num={4} text="Poda: mucho menos exigente que el tomate. Quitar solo hojas amarillas/enfermas y los primeros brotes bajos que tocan el suelo." />
      <StepX c={c} num={5} text="Riego: regular pero SIN encharcar. Dejar secar ligeramente la superficie entre riegos. En verano BCN, cada 2-3 días. Menos agua = pimientos más picantes (en variedades que pican)." />
      <StepX c={c} num={6} text="Fertilización: abono equilibrado NPK cada 3-4 semanas. Cuando aparecen flores, cambiar a fertilizante rico en K (potasio) y P (fósforo)." />

      <SectionTitleX c={c}>🪴 MACETA</SectionTitleX>
      <StepX c={c} num={1} text="Mínimo 15 litros. 20-25L ideal. Maceta profunda (25cm+). El pimiento tiene sistema radicular más superficial que el tomate pero necesita volumen." />
      <StepX c={c} num={2} text="Buen drenaje: agujeros en la base + capa de 2-3cm de grava o arlita. El pimiento MUERE por encharcamiento." />
      <StepX c={c} num={3} text="En maceta, las variedades de fruto pequeño (Padrón, italiano dulce) funcionan mejor que las de fruto grande (morrón)." />

      <SectionTitleX c={c}>🐛 PLAGAS Y ENFERMEDADES</SectionTitleX>
      <StepX c={c} num={1} text="Pulgón: colonias en brotes tiernos. Misma solución que tomate: jabón potásico cada 5-7 días." />
      <StepX c={c} num={2} text="Mosca blanca: pequeñas moscas blancas en el envés de las hojas. Solución: trampas cromáticas amarillas + aceite de neem." />
      <StepX c={c} num={3} text="Orugas: agujeros en hojas y frutos. Solución: Bacillus thuringiensis (BT)." />
      <StepX c={c} num={4} text="Podredumbre apical: igual que tomate. Mancha negra en la punta del fruto por deficiencia de calcio y riego irregular." />

      <SectionTitleX c={c}>🤝 ASOCIACIÓN</SectionTitleX>
      <StepX c={c} num={1} text="Beneficiosas: albahaca (repele mosca blanca), zanahoria (aprovecha espacio entre plantas), cebolla (repele ácaros), caléndula (atrae polinizadores)." />
      <StepX c={c} num={2} text="Perjudiciales: NO con hinojo. NO con otras solanáceas si hubo enfermedades el año anterior (rotación). El pimiento y la berenjena comparten plagas — separar si es posible." />

      <SectionTitleX c={c}>✂️ COSECHA Y CONSERVACIÓN</SectionTitleX>
      <StepX c={c} num={1} text="Cosecha: julio a octubre. Los pimientos se pueden recoger verdes (más amargos, planta sigue produciendo) o maduros (rojos/amarillos — más dulces, pero la planta ralentiza producción)." />
      <StepX c={c} num={2} text="Cortar con tijeras, dejando 1-2cm de pedúnculo. NO tirar del fruto — dañas la rama." />
      <StepX c={c} num={3} text="Conservación: en nevera aguantan 1-2 semanas. Para conservar meses: asar al horno, pelar, envasar en aceite de oliva con ajo. O congelar crudos troceados." />

      <SectionTitleX c={c}>🍽️ VARIEDADES RECOMENDADAS PARA BCN</SectionTitleX>
      <StepX c={c} num={1} text="Italiano dulce (Corno di toro): alargado, dulce, paredes finas. Perfecto para freír o asar. Muy productivo en clima mediterráneo." />
      <StepX c={c} num={2} text="Padrón: pequeño, verde, algunos pican. Cosecha rápida (60 días). Ideal para aperitivo. Gallego de origen pero se adapta perfectamente." />
      <StepX c={c} num={3} text="California Wonder: el clásico pimiento verde→rojo de supermercado. Frutos grandes, cuadrados, paredes gruesas. Más exigente en nutrientes." />
      <StepX c={c} num={4} text="Piquillo / Cristal: pequeño, triangular, dulce. Perfecto para asar y envasar. Variedad tradicional española muy adaptada." />
    </div>
  );
}

function BERENJENA() {
  const c = HUERTA_COLORS;
  return (
    <div>
      <InfoBoxX c={c}>
        <strong>Berenjena (Solanum melongena)</strong> — la solanácea más exigente en calor. Necesita temperaturas altas constantes para prosperar. En Barcelona se siembra en enero-febrero con calor de fondo (manta térmica o radiador) y se trasplanta en mayo. La recompensa: producción continua de julio a octubre.
      </InfoBoxX>

      <SectionTitleX c={c}>FICHA RÁPIDA</SectionTitleX>
      <div style={{ display: "grid", gridTemplateColumns: "1fr 1fr", gap: "10px", marginBottom: "16px" }}>
        <StatBoxX c={c} label="Dificultad" value="Media (necesita calor)" />
        <StatBoxX c={c} label="Días a cosecha" value="70-90" />
        <StatBoxX c={c} label="Sol" value="Pleno sol, mucho calor" />
        <StatBoxX c={c} label="Agua" value="Regular, mantener húmedo" />
        <StatBoxX c={c} label="Siembra" value="Ene-Feb (interior con calor)" />
        <StatBoxX c={c} label="Trasplante" value="Mayo" />
        <StatBoxX c={c} label="Espaciado" value="50-60cm" />
        <StatBoxX c={c} label="Maceta" value="Sí, mínimo 20L" />
      </div>

      <SectionTitleX c={c}>🌱 SIEMBRA</SectionTitleX>
      <StepX c={c} num={1} text="Siembra temprana: enero-febrero en interior. La berenjena necesita MUCHO calor para germinar: 25-30°C. Si no tienes manta térmica, pon el semillero encima del router, la nevera o un radiador (con protección)." />
      <StepX c={c} num={2} text="Germinación: 10-21 días. Más lenta que tomate y pimiento. No desesperes. Mantener humedad constante con film transparente." />
      <StepX c={c} num={3} text="Trasplantar a maceta individual de 10cm cuando tenga 3-4 hojas verdaderas. Mantener en interior cálido hasta mayo." />

      <SectionTitleX c={c}>🌿 CULTIVO</SectionTitleX>
      <StepX c={c} num={1} text="Trasplante definitivo: segunda quincena de mayo en BCN. La berenjena SUFRE por debajo de 15°C. Si refresca después del trasplante, cúbrela con botella de plástico cortada (mini invernadero)." />
      <StepX c={c} num={2} text="Sustrato: MUY rico en materia orgánica. Mezcla: 50% sustrato universal + 30% compost + 20% humus de lombriz. La berenjena es muy golosa en nutrientes." />
      <StepX c={c} num={3} text="Entutorado: OBLIGATORIO. Caña de 1-1.5m. La planta puede alcanzar 1m de altura y las ramas se parten con el peso de los frutos." />
      <StepX c={c} num={4} text="Poda: quitar hojas amarillas y chupones bajos. Cuando la planta tiene 5-6 frutos en desarrollo, despuntar el tallo principal para que la energía vaya a los frutos, no a seguir creciendo." />
      <StepX c={c} num={5} text="Riego: mantener el sustrato HÚMEDO. La berenjena sufre más por sequía que el tomate. En verano BCN, riego diario o cada 2 días. Acolchar (cubrir la tierra con paja) ayuda a retener humedad." />
      <StepX c={c} num={6} text="Fertilización: MUY exigente. Abono rico en K cada 15 días desde la floración. Si las hojas amarillean entre los nervios = falta de magnesio (sulfato de magnesio diluido)." />

      <SectionTitleX c={c}>🪴 MACETA</SectionTitleX>
      <StepX c={c} num={1} text="Mínimo 20 litros. 30L ideal. Maceta profunda (30cm+)." />
      <StepX c={c} num={2} text="En maceta negra al sol = raíces se cuecen. Forrar la maceta con tela blanca o poner otra maceta más grande alrededor (doble maceta) para aislar del calor." />
      <StepX c={c} num={3} text="Variedades de fruto pequeño (Mini Black, Thai) funcionan mejor en macetas <25L." />

      <SectionTitleX c={c}>🐛 PLAGAS Y ENFERMEDADES</SectionTitleX>
      <StepX c={c} num={1} text="Escarabajo de la patata (también ataca berenjena): devora hojas. Solución: recoger manualmente (son visibles), Bacillus thuringiensis variedad tenebrionis." />
      <StepX c={c} num={2} text="Araña roja: favorecida por calor seco. Solución: pulverizar agua en el envés regularmente + aceite de neem si hay plaga." />
      <StepX c={c} num={3} text="Pulgón: en brotes tiernos. Jabón potásico cada 5 días." />
      <StepX c={c} num={4} text="Oídio: polvo blanco en hojas con humedad alta y poca circulación de aire. Solución: pulverizar con leche diluida al 10% (fungicida casero eficaz) o azufre en polvo." />

      <SectionTitleX c={c}>🤝 ASOCIACIÓN</SectionTitleX>
      <StepX c={c} num={1} text="Beneficiosas: judía (fija nitrógeno que la berenjena agradece), caléndula (atrae polinizadores), albahaca (repele mosca blanca), lechuga (aprovecha sombra ligera de la berenjena en verano)." />
      <StepX c={c} num={2} text="Perjudiciales: NO con patata (mismas plagas), NO con hinojo. Separar de tomate y pimiento si hubo enfermedades de solanáceas el año anterior." />

      <SectionTitleX c={c}>✂️ COSECHA Y CONSERVACIÓN</SectionTitleX>
      <StepX c={c} num={1} text="Cosecha: julio a octubre. La berenjena está lista cuando tiene color brillante y la piel cede ligeramente al apretar. Si está opaca y dura = aún verde. Si está blanda y marrón = pasada (semillas duras y sabor amargo)." />
      <StepX c={c} num={2} text="Cortar con tijeras dejando 2-3cm de pedúnculo. NO arrancar." />
      <StepX c={c} num={3} text="Conservación: nevera 5-7 días. Para conservar meses: cortar en rodajas, asar a la plancha, congelar en capas separadas con papel de horno. O hacer escalivada y envasar al vacío." />

      <SectionTitleX c={c}>🍽️ VARIEDADES RECOMENDADAS PARA BCN</SectionTitleX>
      <StepX c={c} num={1} text="Black Beauty: la clásica berenjena negra-alargada. Productiva, sabor suave. La más fácil para empezar." />
      <StepX c={c} num={2} text="Listada de Gandía: variedad tradicional valenciana. Blanca y morada en franjas. Muy productiva en clima mediterráneo." />
      <StepX c={c} num={3} text="Jaspeada / Graffiti: piel jaspeada blanca y morada. Menos semillas, sabor más dulce. Menos productiva pero más bonita." />
      <StepX c={c} num={4} text="Mini Black / Thai Green: variedades de fruto pequeño. Ideales para maceta. Producen muchos frutos pequeños ideales para salteados asiáticos." />
    </div>
  );
}

// ============================================================
// HOJA VERDE
// ============================================================

function LECHUGA() {
  const c = HUERTA_COLORS;
  return (
    <div>
      <InfoBoxX c={c}>
        <strong>Lechuga (Lactuca sativa)</strong> — el cultivo de hoja más gratificante para principiantes. En el clima de Barcelona se puede cultivar TODO EL AÑO (excepto julio-agosto, cuando el calor la hace espigar). En 30-60 días tienes una lechuga entera. Siembra escalonada cada 2-3 semanas = cosecha continua.
      </InfoBoxX>

      <SectionTitleX c={c}>FICHA RÁPIDA</SectionTitleX>
      <div style={{ display: "grid", gridTemplateColumns: "1fr 1fr", gap: "10px", marginBottom: "16px" }}>
        <StatBoxX c={c} label="Dificultad" value="Muy fácil" />
        <StatBoxX c={c} label="Días a cosecha" value="30-60" />
        <StatBoxX c={c} label="Sol" value="Sol o semi-sombra" />
        <StatBoxX c={c} label="Agua" value="Frecuente, superficial" />
        <StatBoxX c={c} label="Siembra" value="Todo el año (evitar jul-ago)" />
        <StatBoxX c={c} label="Profundidad" value="0.5cm" />
        <StatBoxX c={c} label="Espaciado" value="20-25cm" />
        <StatBoxX c={c} label="Maceta" value="Sí, mínimo 5L" />
      </div>

      <SectionTitleX c={c}>🌱 SIEMBRA</SectionTitleX>
      <StepX c={c} num={1} text="Siembra directa: espolvorear semillas sobre el sustrato y cubrir con 0.5cm de tierra fina. Las semillas de lechuga necesitan LUZ para germinar — si las entierras mucho no nacen." />
      <StepX c={c} num={2} text="Germinación rápida: 3-7 días. Mantener húmedo (pulverizar, no regar a chorro)." />
      <StepX c={c} num={3} text="Raleo: cuando las plántulas tienen 3-4 hojas, dejar una cada 20-25cm. Las que quitas se pueden trasplantar a otro sitio o comer como baby greens." />
      <StepX c={c} num={4} text="Siembra escalonada: cada 2-3 semanas, siembra una nueva tanda. Así tendrás lechuga continua, no 12 lechugas maduras la misma semana." />

      <SectionTitleX c={c}>🌿 CULTIVO</SectionTitleX>
      <StepX c={c} num={1} text="Riego: frecuente y superficial. La lechuga tiene raíces superficiales — no necesita riego profundo pero sí constante. En verano, pulverizar hojas al atardecer (baja temperatura y la mantiene tierna)." />
      <StepX c={c} num={2} text="En verano BCN (julio-agosto): protege la lechuga del sol directo de 12:00-17:00. Ponla a la sombra de una tomatera o usa malla de sombreo 30-50%. Sin esto, espiga (se sube a flor) y amarga." />
      <StepX c={c} num={3} text="Sustrato: rico en materia orgánica. La lechuga agradece nitrógeno para formar hojas grandes. Añadir compost en superficie cada 3-4 semanas." />
      <StepX c={c} num={4} text="Temperatura ideal: 15-22°C. Tolera frío (hasta -2°C) mejor que calor (>28°C la estresa y espiga). En BCN, las mejores lechugas son las de otoño y primavera." />

      <SectionTitleX c={c}>🪴 MACETA</SectionTitleX>
      <StepX c={c} num={1} text="Mínimo 5 litros. Una maceta de 10L puede tener 2 lechugas. Profundidad: 15cm mínimo (raíces superficiales)." />
      <StepX c={c} num={2} text="Ideal para jardineras de balcón (20x60cm): 4-5 lechugas en hilera. O maceta individual por lechuga." />
      <StepX c={c} num={3} text="Las variedades de hoja suelta (hoja de roble, lollo rosso) se pueden cosechar hoja por hoja durante semanas — cortas las externas y la planta sigue produciendo." />

      <SectionTitleX c={c}>🐛 PLAGAS Y ENFERMEDADES</SectionTitleX>
      <StepX c={c} num={1} text="Caracoles y babosas: el enemigo #1 de la lechuga. Solución: ceniza o cáscaras de huevo trituradas alrededor de la planta (no les gusta arrastrarse sobre superficies rugosas), trampa de cerveza (plato con cerveza al nivel del suelo — se ahogan), o recogida manual nocturna." />
      <StepX c={c} num={2} text="Pulgón: en el cogollo de la lechuga. Solución: jabón potásico. Si la lechuga está cerca de cosecharse, mejor lavar bien que tratar." />
      <StepX c={c} num={3} text="Mildiu: manchas amarillas en hojas con humedad alta y poca ventilación. Prevención: no mojar hojas al regar, espaciado adecuado." />
      <StepX c={c} num={4} text="Pájaros (en terraza): picotean hojas tiernas. Solución: malla anti-pájaros o CD colgados (reflejos los espantan)." />

      <SectionTitleX c={c}>🤝 ASOCIACIÓN</SectionTitleX>
      <StepX c={c} num={1} text="Beneficiosas: zanahoria (aprovecha espacio entre lechugas y se protegen mutuamente de plagas), rábano (crece rápido y marca la hilera), fresa (cubre el suelo y mantiene humedad), cebolla (repele pulgón)." />
      <StepX c={c} num={2} text="Perjudiciales: NO con apio (comparten plagas). NO con perejil (inhibe crecimiento de lechuga según algunos horticultores)." />

      <SectionTitleX c={c}>✂️ COSECHA Y CONSERVACIÓN</SectionTitleX>
      <StepX c={c} num={1} text="Cosecha: cortar la lechuga entera por la base con cuchillo, por la mañana temprano (máxima turgencia). Si es de hoja suelta, cosechar hojas externas dejando el cogollo." />
      <StepX c={c} num={2} text="Lavar bien (tierra y posibles bichos). Secar con centrifugadora de lechuga o con paño. Nevera: 5-7 días en bolsa perforada." />
      <StepX c={c} num={3} text="NO congelar (se convierte en papilla). La lechuga se consume fresca." />

      <SectionTitleX c={c}>🍽️ VARIEDADES RECOMENDADAS PARA BCN</SectionTitleX>
      <StepX c={c} num={1} text="Romana: la más resistente al calor. Hojas alargadas, crujientes, sabor ligeramente amargo. La variedad tradicional catalana (Llengua de bou) es excelente." />
      <StepX c={c} num={2} text="Hoja de roble: hojas rizadas, verdes o rojas. Muy decorativa. Cosecha hoja por hoja. Ideal para principiantes." />
      <StepX c={c} num={3} text="Maravilla (Butterhead): hojas suaves y mantecosas. La más tierna pero también la más delicada al calor." />
      <StepX c={c} num={4} text="Iceberg: la del supermercado. Crujiente, aguanta más en nevera. Necesita más espacio y tiempo (60-70 días)." />
      <StepX c={c} num={5} text="Mezcla de baby leaves: sembrar denso y cortar a los 20-30 días con tijeras. Rebrota 1-2 veces. La ensalada más rápida posible." />
    </div>
  );
}

function ESPINACA() {
  const c = HUERTA_COLORS;
  return (
    <div>
      <InfoBoxX c={c}>
        <strong>Espinaca (Spinacia oleracea)</strong> — cultivo de otoño-invierno por excelencia. No soporta el calor (espiga inmediatamente). En Barcelona se siembra septiembre-noviembre y febrero-marzo. Rica en hierro, vitaminas y minerales. Cosecha de hojas externas = producción continua durante semanas.
      </InfoBoxX>

      <SectionTitleX c={c}>FICHA RÁPIDA</SectionTitleX>
      <div style={{ display: "grid", gridTemplateColumns: "1fr 1fr", gap: "10px", marginBottom: "16px" }}>
        <StatBoxX c={c} label="Dificultad" value="Fácil" />
        <StatBoxX c={c} label="Días a cosecha" value="40-50" />
        <StatBoxX c={c} label="Sol" value="Sol o semi-sombra" />
        <StatBoxX c={c} label="Agua" value="Regular, mantener húmedo" />
        <StatBoxX c={c} label="Siembra" value="Sep-Nov / Feb-Mar" />
        <StatBoxX c={c} label="Profundidad" value="1-2cm" />
        <StatBoxX c={c} label="Espaciado" value="15-20cm" />
        <StatBoxX c={c} label="Maceta" value="Sí, mínimo 5L" />
      </div>

      <SectionTitleX c={c}>🌱 SIEMBRA</SectionTitleX>
      <StepX c={c} num={1} text="Siembra directa: semillas a 1-2cm de profundidad. Germinación en 7-14 días. Las semillas de espinaca germinan mejor en suelo fresco (10-18°C)." />
      <StepX c={c} num={2} text="Truco: remojar las semillas en agua 24h antes de sembrar. Acelera la germinación." />
      <StepX c={c} num={3} text="Raleo: dejar una planta cada 15-20cm. Las plántulas que quitas se comen como baby espinacas." />

      <SectionTitleX c={c}>🌿 CULTIVO</SectionTitleX>
      <StepX c={c} num={1} text="Temporada: otoño-invierno es la MEJOR en BCN. Sembrar septiembre para cosecha noviembre-enero. Segunda siembra en febrero para cosecha marzo-abril. En mayo la espinaca ya empieza a espigar con el calor." />
      <StepX c={c} num={2} text="Riego: mantener el sustrato húmedo pero no encharcado. Riego regular, la espinaca sufre si pasa sed." />
      <StepX c={c} num={3} text="Sustrato: rico en nitrógeno para hojas grandes y verdes. Añadir compost o humus de lombriz en superficie cada 3 semanas." />
      <StepX c={c} num={4} text="Sol: en otoño-invierno, pleno sol. Si cultivas en primavera, mejor semi-sombra para retrasar la espigada." />

      <SectionTitleX c={c}>🪴 MACETA</SectionTitleX>
      <StepX c={c} num={1} text="Mínimo 5 litros. Profundidad 15cm. Las raíces de la espinaca son superficiales pero densas." />
      <StepX c={c} num={2} text="Ideal para jardineras rectangulares. Sembrar en hileras separadas 15cm." />

      <SectionTitleX c={c}>🐛 PLAGAS Y ENFERMEDADES</SectionTitleX>
      <StepX c={c} num={1} text="Caracoles y babosas: como la lechuga, son el principal problema. Mismas soluciones: ceniza, trampa de cerveza, recogida manual." />
      <StepX c={c} num={2} text="Mildiu: manchas amarillas en hojas. Aparece con humedad alta y poca ventilación. Prevención: espaciado adecuado, regar sin mojar hojas." />
      <StepX c={c} num={3} text="Pulgón: ocasionalmente en el envés. Jabón potásico si es necesario." />

      <SectionTitleX c={c}>✂️ COSECHA Y CONSERVACIÓN</SectionTitleX>
      <StepX c={c} num={1} text="Cosecha de hojas externas: cuando las hojas miden 8-10cm, cortar las externas con tijeras. La planta sigue produciendo desde el centro durante 4-8 semanas." />
      <StepX c={c} num={2} text="O cosecha de planta entera: cortar por la base a los 40-50 días." />
      <StepX c={c} num={3} text="Conservación: nevera 3-5 días en bolsa perforada. Para congelar: escaldar 1-2 min en agua hirviendo, enfriar en hielo, escurrir y congelar en porciones. La espinaca congelada aguanta 6-12 meses." />

      <SectionTitleX c={c}>🍽️ VARIEDADES RECOMENDADAS PARA BCN</SectionTitleX>
      <StepX c={c} num={1} text="Gigante de invierno (Viroflay): hojas grandes, resistente al frío. La mejor para siembra de otoño." />
      <StepX c={c} num={2} text="Butterflay: hojas suaves, sabor dulce. Crece rápido. Buena para primavera." />
      <StepX c={c} num={3} text="Matador / Viking: resistente a espigado prematuro. Buena elección si cultivas en primavera tardía." />
    </div>
  );
}

function KALE() {
  const c = HUERTA_COLORS;
  return (
    <div>
      <InfoBoxX c={c}>
        <strong>Kale (Brassica oleracea var. sabellica)</strong> — posiblemente el cultivo más fácil y agradecido del huerto. Tolera frío, tolera algo de calor, aguanta plagas mejor que otras coles, produce durante 8-10 MESES seguidos. Si solo pudieras cultivar una cosa, que sea kale. En Barcelona se siembra en julio-agosto para cosechar de octubre a mayo.
      </InfoBoxX>

      <SectionTitleX c={c}>FICHA RÁPIDA</SectionTitleX>
      <div style={{ display: "grid", gridTemplateColumns: "1fr 1fr", gap: "10px", marginBottom: "16px" }}>
        <StatBoxX c={c} label="Dificultad" value="Muy fácil" />
        <StatBoxX c={c} label="Días a cosecha" value="50-70" />
        <StatBoxX c={c} label="Sol" value="Sol o semi-sombra" />
        <StatBoxX c={c} label="Agua" value="Regular" />
        <StatBoxX c={c} label="Siembra" value="Jul-Ago (para otoño)" />
        <StatBoxX c={c} label="Profundidad" value="1cm" />
        <StatBoxX c={c} label="Espaciado" value="40-50cm" />
        <StatBoxX c={c} label="Maceta" value="Sí, mínimo 15L" />
      </div>

      <SectionTitleX c={c}>🌱 SIEMBRA</SectionTitleX>
      <StepX c={c} num={1} text="Siembra en semillero: julio-agosto. El kale se siembra en verano para crecer en otoño. También se puede sembrar en febrero-marzo para cosecha de primavera temprana." />
      <StepX c={c} num={2} text="Germinación: 5-10 días. Profundidad 1cm. Mantener húmedo." />
      <StepX c={c} num={3} text="Trasplantar cuando la plántula tiene 4-5 hojas verdaderas (4-6 semanas después de siembra)." />

      <SectionTitleX c={c}>🌿 CULTIVO</SectionTitleX>
      <StepX c={c} num={1} text="Trasplante definitivo: agosto-septiembre. Espaciado generoso: 40-50cm entre plantas. El kale se hace GRANDE (60-80cm de altura)." />
      <StepX c={c} num={2} text="Sustrato: rico en materia orgánica y nitrógeno. El kale es un monstruo que devora nutrientes. Compost en superficie cada 4-6 semanas." />
      <StepX c={c} num={3} text="Riego: regular. En otoño BCN, con la lluvia ocasional, casi no necesita riego. En invierno seco, regar cada 4-5 días." />
      <StepX c={c} num={4} text="El frío MEJORA el kale: las heladas ligeras convierten almidones en azúcares. El kale de enero es más dulce que el de noviembre." />
      <StepX c={c} num={5} text="Producción continua: cosechar hojas externas y la planta sigue produciendo desde el centro. Una planta de kale bien cuidada produce 8-10 MESES." />

      <SectionTitleX c={c}>🪴 MACETA</SectionTitleX>
      <StepX c={c} num={1} text="Mínimo 15 litros. 20L ideal. Maceta profunda (25cm+)." />
      <StepX c={c} num={2} text="En maceta grande, el kale se convierte en una palmera comestible — tronco desnudo abajo y corona de hojas arriba. Muy decorativo." />

      <SectionTitleX c={c}>🐛 PLAGAS Y ENFERMEDADES</SectionTitleX>
      <StepX c={c} num={1} text="Orugas de mariposa de la col (Pieris): agujeros en hojas. El principal problema. Solución: malla anti-insectos desde el trasplante (barrera física) + Bacillus thuringiensis si ya hay orugas." />
      <StepX c={c} num={2} text="Pulgón ceroso (Brevicoryne): colonias grises en el envés de hojas tiernas. Jabón potásico cada 5 días. O mariquitas (devoran pulgón)." />
      <StepX c={c} num={3} text="Hernia de la col (Plasmodiophora): deformación de raíces, planta mustia. No tiene cura — arrancar y NO replantar coles en ese sustrato durante 4-5 años." />

      <SectionTitleX c={c}>🤝 ASOCIACIÓN</SectionTitleX>
      <StepX c={c} num={1} text="Beneficiosas: remolacha y acelga (misma familia pero distinto nivel de raíces), cebolla y ajo (repele pulgón), eneldo (atrae avispas parasitoides que controlan orugas)." />
      <StepX c={c} num={2} text="Perjudiciales: NO con fresa (inhibe crecimiento), NO con otras coles si hay riesgo de hernia." />

      <SectionTitleX c={c}>✂️ COSECHA Y CONSERVACIÓN</SectionTitleX>
      <StepX c={c} num={1} text="Cosecha: cortar hojas externas con tijeras cuando miden 15-20cm. Dejar las hojas del centro (cogollo) para que siga produciendo." />
      <StepX c={c} num={2} text="En nevera: 5-7 días en bolsa perforada. Para congelar: escaldar 2 min, enfriar, escurrir y congelar. Aguanta 6-12 meses." />
      <StepX c={c} num={3} text="Chips de kale (receta fácil): lavar, secar, quitar el tallo central, trocear, mezclar con aceite de oliva y sal, hornear 10-15 min a 150°C. Adictivas y saludables." />

      <SectionTitleX c={c}>🍽️ VARIEDADES RECOMENDADAS PARA BCN</SectionTitleX>
      <StepX c={c} num={1} text="Kale rizado verde (Winterbor / Starbor): el clásico de hojas muy rizadas. Muy resistente al frío. Aguanta todo el invierno." />
      <StepX c={c} num={2} text="Cavolo nero / Lacinato / Dinosaur kale: hojas largas y estrechas, textura rugosa (piel de dinosaurio). Sabor más suave. Tradicional de Toscana — clima similar al mediterráneo." />
      <StepX c={c} num={3} text="Red Russian: hojas planas, bordes dentados, tallo morado. La más tierna para ensalada. Tolera mejor el calor que otras." />
    </div>
  );
}

function ACELGA() {
  const c = HUERTA_COLORS;
  return (
    <div>
      <InfoBoxX c={c}>
        <strong>Acelga (Beta vulgaris var. cicla)</strong> — prima de la remolacha y la espinaca. Más resistente al calor que la espinaca y produce durante meses. Se siembra en primavera y otoño. Las hojas se cosechan externamente y la planta sigue produciendo. Pencas blancas, amarillas o rojas — decorativa y comestible.
      </InfoBoxX>

      <SectionTitleX c={c}>FICHA RÁPIDA</SectionTitleX>
      <div style={{ display: "grid", gridTemplateColumns: "1fr 1fr", gap: "10px", marginBottom: "16px" }}>
        <StatBoxX c={c} label="Dificultad" value="Muy fácil" />
        <StatBoxX c={c} label="Días a cosecha" value="50-70" />
        <StatBoxX c={c} label="Sol" value="Sol o semi-sombra" />
        <StatBoxX c={c} label="Agua" value="Regular" />
        <StatBoxX c={c} label="Siembra" value="Primavera y otoño" />
        <StatBoxX c={c} label="Profundidad" value="1-2cm" />
        <StatBoxX c={c} label="Espaciado" value="25-30cm" />
        <StatBoxX c={c} label="Maceta" value="Sí, mínimo 10L" />
      </div>

      <SectionTitleX c={c}>🌱 SIEMBRA</SectionTitleX>
      <StepX c={c} num={1} text="Siembra directa: primavera (marzo-mayo) y otoño (septiembre-octubre). Profundidad 1-2cm. Germinación en 7-14 días." />
      <StepX c={c} num={2} text="Truco: las semillas de acelga son en realidad glomérulos (varias semillas juntas). De cada glomérulo salen 2-4 plantas. Ralear dejando la más fuerte." />
      <StepX c={c} num={3} text="Raleo: dejar una planta cada 25-30cm. La acelga se hace grande — necesita espacio." />

      <SectionTitleX c={c}>🌿 CULTIVO</SectionTitleX>
      <StepX c={c} num={1} text="Sustrato: rico en materia orgánica. Similar a la espinaca. La acelga es menos exigente pero agradece compost en superficie." />
      <StepX c={c} num={2} text="Riego: regular, mantener el sustrato húmedo. En verano BCN, cada 2 días. Tolera mejor la sequía que la espinaca." />
      <StepX c={c} num={3} text="Sol: tolera sol directo mejor que la espinaca. En pleno verano BCN, agradece algo de sombra por la tarde." />
      <StepX c={c} num={4} text="Producción larga: una planta de acelga bien cuidada produce durante 4-6 meses. Cosecha de hojas externas continuamente." />

      <SectionTitleX c={c}>🪴 MACETA</SectionTitleX>
      <StepX c={c} num={1} text="Mínimo 10 litros. 15-20L ideal. Maceta profunda (25cm+)." />
      <StepX c={c} num={2} text="Las variedades de penca fina (Baby Chard) funcionan bien en macetas de 10L." />

      <SectionTitleX c={c}>🐛 PLAGAS Y ENFERMEDADES</SectionTitleX>
      <StepX c={c} num={1} text="Caracoles y babosas: como todas las hojas tiernas. Soluciones estándar: ceniza, trampa de cerveza." />
      <StepX c={c} num={2} text="Pulgón: ocasional. Jabón potásico." />
      <StepX c={c} num={3} text="Minador de hojas (Liriomyza): túneles dentro de las hojas. Solución: quitar hojas afectadas. La planta produce nuevas rápido." />

      <SectionTitleX c={c}>🤝 ASOCIACIÓN</SectionTitleX>
      <StepX c={c} num={1} text="Beneficiosas: judía (fija nitrógeno), lechuga (aprovecha espacio entre acelgas), cebolla (repele plagas)." />
      <StepX c={c} num={2} text="Perjudiciales: NO con maíz (compite por nutrientes). NO con otras quenopodiáceas (espinaca) en el mismo espacio — se transmiten enfermedades." />

      <SectionTitleX c={c}>✂️ COSECHA Y CONSERVACIÓN</SectionTitleX>
      <StepX c={c} num={1} text="Cosecha de hojas externas: cuando las hojas miden 20-25cm, cortar las externas con tijeras por la base de la penca. Las hojas internas siguen creciendo." />
      <StepX c={c} num={2} text="Conservación: nevera 3-5 días. Las pencas y las hojas se pueden cocinar juntas o separadas (las pencas necesitan más cocción)." />
      <StepX c={c} num={3} text="Congelar: escaldar 2 min las hojas, 3-4 min las pencas (troceadas). Enfriar, escurrir y congelar. Aguanta 6-8 meses." />

      <SectionTitleX c={c}>🍽️ VARIEDADES RECOMENDADAS PARA BCN</SectionTitleX>
      <StepX c={c} num={1} text="Verde de penca blanca: la clásica. Penca blanca ancha y hoja verde oscura. Muy productiva y resistente." />
      <StepX c={c} num={2} text="Amarilla de Lyon: penca amarilla dorada, hoja verde clara. Más decorativa, sabor más suave." />
      <StepX c={c} num={3} text="Roja / Rainbow chard: pencas de colores (rojo, naranja, amarillo, rosa). Visualmente espectacular en el huerto. Sabor igual que la verde." />
      <StepX c={c} num={4} text="Baby Chard: variedad enana para macetas pequeñas. Hojas y pencas más finas. Cosecha rápida." />
    </div>
  );
}

// ============================================================
// CUCURBITÁCEAS
// ============================================================

function CALABACIN() {
  const c = HUERTA_COLORS;
  return (
    <div>
      <InfoBoxX c={c}>
        <strong>Calabacín (Cucurbita pepo)</strong> — si quieres resultados RÁPIDOS, esto es lo tuyo. Crece a velocidad absurda: 40-50 días a cosecha. 1-2 plantas alimentan una familia todo el verano. Siembra directa abril-mayo. Clave: recolectar a 15-20cm (si engordan demasiado, pierden sabor y la planta deja de producir).
      </InfoBoxX>
      <SectionTitleX c={c}>FICHA RÁPIDA</SectionTitleX>
      <div style={{ display: "grid", gridTemplateColumns: "1fr 1fr", gap: "10px", marginBottom: "16px" }}>
        <StatBoxX c={c} label="Dificultad" value="Fácil" />
        <StatBoxX c={c} label="Días a cosecha" value="40-50" />
        <StatBoxX c={c} label="Sol" value="Pleno sol" />
        <StatBoxX c={c} label="Agua" value="Abundante, regular" />
        <StatBoxX c={c} label="Siembra" value="Abr-May (directa)" />
        <StatBoxX c={c} label="Profundidad" value="2-3cm" />
        <StatBoxX c={c} label="Espaciado" value="80-100cm" />
        <StatBoxX c={c} label="Maceta" value="Sí, mínimo 30L" />
      </div>
      <SectionTitleX c={c}>🌱 SIEMBRA</SectionTitleX>
      <StepX c={c} num={1} text="Siembra directa: abril-mayo, suelo caliente (18°C+). 2-3 semillas por hoyo a 2-3cm. Dejar la más fuerte." />
      <StepX c={c} num={2} text="Germinación: 5-10 días. Crece a velocidad de vértigo. También se puede sembrar en interior en marzo con cuidado al trasplantar." />
      <SectionTitleX c={c}>🌿 CULTIVO</SectionTitleX>
      <StepX c={c} num={1} text="Espacio: 1m² por planta. Hojas gigantes (30-40cm). Sustrato muy rico, devora nutrientes. Compost generoso." />
      <StepX c={c} num={2} text="Riego ABUNDANTE: 5-10L por planta cada 1-2 días en verano BCN. Si pasa sed, frutos pequeños y amargos." />
      <StepX c={c} num={3} text="Polinización manual si no hay abejas: flor masculina (tallo fino) pelada y frotada dentro de flor femenina (con mini calabacín)." />
      <SectionTitleX c={c}>🐛 PLAGAS Y ENFERMEDADES</SectionTitleX>
      <StepX c={c} num={1} text="Oídio: problema #1. Polvo blanco en hojas. Prevención: leche diluida 10% o azufre. No mojar hojas." />
      <StepX c={c} num={2} text="Mosca blanca (trampas amarillas), pulgón (jabón potásico), caracoles (barreras de ceniza)." />
      <SectionTitleX c={c}>🤝 ASOCIACIÓN</SectionTitleX>
      <StepX c={c} num={1} text="Judía (nitrógeno), maíz (Tres Hermanas), caléndula (polinizadores). NO con patata." />
      <SectionTitleX c={c}>✂️ COSECHA Y CONSERVACIÓN</SectionTitleX>
      <StepX c={c} num={1} text="Cosecha: 15-20cm. RECOLECTAR CADA 2-3 DÍAS o la planta deja de producir. Nevera 5-7 días." />
      <StepX c={c} num={2} text="Flores masculinas: rebozadas en tempura — manjar italiano." />
      <SectionTitleX c={c}>🍽️ VARIEDADES RECOMENDADAS PARA BCN</SectionTitleX>
      <StepX c={c} num={1} text="Black Beauty: verde oscuro clásico, muy productivo." />
      <StepX c={c} num={2} text="Blanco libanés: verde claro casi blanco, dulce, mediterráneo tradicional." />
      <StepX c={c} num={3} text="Redondo de Niza: esférico, para rellenar." />
    </div>
  );
}

function PEPINO() {
  const c = HUERTA_COLORS;
  return (
    <div>
      <InfoBoxX c={c}>
        <strong>Pepino (Cucumis sativus)</strong> — crecimiento rápido, necesita riego CONSTANTE (si pasa sed, amarga). Entutorado vertical ahorra espacio y da frutos rectos. Siembra abril-mayo. 50-70 días a cosecha.
      </InfoBoxX>
      <SectionTitleX c={c}>FICHA RÁPIDA</SectionTitleX>
      <div style={{ display: "grid", gridTemplateColumns: "1fr 1fr", gap: "10px", marginBottom: "16px" }}>
        <StatBoxX c={c} label="Dificultad" value="Fácil-media" />
        <StatBoxX c={c} label="Días a cosecha" value="50-70" />
        <StatBoxX c={c} label="Sol" value="Pleno sol" />
        <StatBoxX c={c} label="Agua" value="Abundante, constante" />
        <StatBoxX c={c} label="Siembra" value="Abr-May (directa)" />
        <StatBoxX c={c} label="Profundidad" value="1-2cm" />
        <StatBoxX c={c} label="Espaciado" value="40-50cm" />
        <StatBoxX c={c} label="Maceta" value="Sí, mínimo 15L" />
      </div>
      <SectionTitleX c={c}>🌱 SIEMBRA</SectionTitleX>
      <StepX c={c} num={1} text="Siembra directa: abril-mayo, suelo 18°C+. 2-3 semillas por hoyo a 1-2cm. Germinación 5-10 días." />
      <SectionTitleX c={c}>🌿 CULTIVO</SectionTitleX>
      <StepX c={c} num={1} text="Entutorado VERTICAL con malla, red o cañas en V. Pepino trepador. Sin tutor = frutos torcidos." />
      <StepX c={c} num={2} text="Riego CONSTANTE. 96% agua. Riego irregular = amargor. Mejor riego diario en verano BCN." />
      <StepX c={c} num={3} text="Poda: despuntar tallo principal a 1.5-2m para estimular ramas laterales con flores femeninas." />
      <StepX c={c} num={4} text="Acolchar con paja: mantiene humedad, evita frutos podridos." />
      <SectionTitleX c={c}>🐛 PLAGAS Y ENFERMEDADES</SectionTitleX>
      <StepX c={c} num={1} text="Oídio (polvo blanco), mosca blanca, araña roja. Virus del mosaico: sin cura, arrancar." />
      <SectionTitleX c={c}>🤝 ASOCIACIÓN</SectionTitleX>
      <StepX c={c} num={1} text="Judía, maíz, girasol, eneldo. NO con patata ni salvia." />
      <SectionTitleX c={c}>✂️ COSECHA Y CONSERVACIÓN</SectionTitleX>
      <StepX c={c} num={1} text="Cosecha: 15-20cm para español, 10-12cm para pepinillo. CADA 2-3 DÍAS. Nevera 5-7 días. Pepinillos en vinagre duran meses." />
      <SectionTitleX c={c}>🍽️ VARIEDADES RECOMENDADAS PARA BCN</SectionTitleX>
      <StepX c={c} num={1} text="Corto español / Marketmore: adaptado al clima mediterráneo exterior." />
      <StepX c={c} num={2} text="Pepinillo (Gherkin): cosechar 5-8cm, para encurtidos." />
    </div>
  );
}

function MELON() {
  const c = HUERTA_COLORS;
  return (
    <div>
      <InfoBoxX c={c}>
        <strong>Melón (Cucumis melo)</strong> — necesita espacio (1m² por planta), calor y paciencia. Siembra interior marzo-abril, trasplante mayo. Cosecha cuando el zarcillo opuesto al fruto se seca. Piel de Sapo, Cantalupo, Galia.
      </InfoBoxX>
      <SectionTitleX c={c}>FICHA RÁPIDA</SectionTitleX>
      <div style={{ display: "grid", gridTemplateColumns: "1fr 1fr", gap: "10px", marginBottom: "16px" }}>
        <StatBoxX c={c} label="Dificultad" value="Media" />
        <StatBoxX c={c} label="Días a cosecha" value="80-100" />
        <StatBoxX c={c} label="Sol" value="Pleno sol, máximo calor" />
        <StatBoxX c={c} label="Agua" value="Abundante, luego reducir" />
        <StatBoxX c={c} label="Siembra" value="Mar-Abr (interior)" />
        <StatBoxX c={c} label="Trasplante" value="Mayo" />
        <StatBoxX c={c} label="Espaciado" value="100cm+" />
        <StatBoxX c={c} label="Maceta" value="Sí, mínimo 40L" />
      </div>
      <SectionTitleX c={c}>🌱 SIEMBRA</SectionTitleX>
      <StepX c={c} num={1} text="Interior marzo-abril. Macetita individual. Odia el trasplante — cuidado con el cepellón." />
      <SectionTitleX c={c}>🌿 CULTIVO</SectionTitleX>
      <StepX c={c} num={1} text="Trasplante: mediados mayo. Necesita noches >15°C. 1m² por planta. Sustrato muy rico con arena." />
      <StepX c={c} num={2} text="Poda: despuntar tallo principal a 4-5 hojas. Ramas laterales con frutos, podar a 3-4 hojas tras el fruto." />
      <StepX c={c} num={3} text="Riego: abundante al crecer. Reducir progresivamente al engordar frutos para concentrar azúcares." />
      <StepX c={c} num={4} text="Proteger frutos del suelo con teja, tabla o paja." />
      <SectionTitleX c={c}>🐛 PLAGAS Y ENFERMEDADES</SectionTitleX>
      <StepX c={c} num={1} text="Oídio (leche diluida, azufre), Fusarium (sin cura, rotación)." />
      <SectionTitleX c={c}>🤝 ASOCIACIÓN</SectionTitleX>
      <StepX c={c} num={1} text="Maíz, judía, caléndula, eneldo. NO con patata ni otras cucurbitáceas." />
      <SectionTitleX c={c}>✂️ COSECHA Y CONSERVACIÓN</SectionTitleX>
      <StepX c={c} num={1} text="Agosto-septiembre. 3 señales: zarcillo seco, cambio de color, base cede. Aguanta 5-10 días a temperatura ambiente." />
      <SectionTitleX c={c}>🍽️ VARIEDADES RECOMENDADAS PARA BCN</SectionTitleX>
      <StepX c={c} num={1} text="Piel de Sapo: clásico español, 2-4kg, muy dulce. Bien adaptado." />
      <StepX c={c} num={2} text="Cantalupo / Charentais: pequeño (1-1.5kg), piel reticulada, aromático intenso." />
      <StepX c={c} num={3} text="Galia: pequeño-mediano, piel amarilla, aromático. Buena opción para maceta." />
    </div>
  );
}

function SANDIA() {
  const c = HUERTA_COLORS;
  return (
    <div>
      <InfoBoxX c={c}>
        <strong>Sandía (Citrullus lanatus)</strong> — la que más calor necesita. Siembra directa abril-mayo. MUCHO espacio (2-3m²). Señal de cosecha: sonido hueco + mancha amarilla en base.
      </InfoBoxX>
      <SectionTitleX c={c}>FICHA RÁPIDA</SectionTitleX>
      <div style={{ display: "grid", gridTemplateColumns: "1fr 1fr", gap: "10px", marginBottom: "16px" }}>
        <StatBoxX c={c} label="Dificultad" value="Media-difícil" />
        <StatBoxX c={c} label="Días a cosecha" value="80-100" />
        <StatBoxX c={c} label="Sol" value="Pleno sol, MUCHO calor" />
        <StatBoxX c={c} label="Agua" value="Muy abundante, luego reducir" />
        <StatBoxX c={c} label="Siembra" value="Abr-May (directa)" />
        <StatBoxX c={c} label="Profundidad" value="2-3cm" />
        <StatBoxX c={c} label="Espaciado" value="150-200cm" />
        <StatBoxX c={c} label="Maceta" value="Sí, mínimo 40L" />
      </div>
      <SectionTitleX c={c}>🌱 SIEMBRA</SectionTitleX>
      <StepX c={c} num={1} text="Directa: finales abril-mayo, suelo 20°C+. Semillas a 2-3cm. Germinación 5-12 días." />
      <SectionTitleX c={c}>🌿 CULTIVO</SectionTitleX>
      <StepX c={c} num={1} text="Espacio ENORME: 2-3m². Sustrato profundo y rico con arena. Poda: despuntar a 4-5 hojas, limitar 2-3 frutos." />
      <StepX c={c} num={2} text="Riego: abundante durante crecimiento. Reducir drásticamente al madurar para concentrar azúcar." />
      <SectionTitleX c={c}>🐛 PLAGAS Y ENFERMEDADES</SectionTitleX>
      <StepX c={c} num={1} text="Oídio, mosca blanca, araña roja. Fusarium: sin cura." />
      <SectionTitleX c={c}>🤝 ASOCIACIÓN</SectionTitleX>
      <StepX c={c} num={1} text="Maíz (tutor natural), judía (nitrógeno) — Tres Hermanas. NO con patata." />
      <SectionTitleX c={c}>✂️ COSECHA Y CONSERVACIÓN</SectionTitleX>
      <StepX c={c} num={1} text="Agosto-septiembre. Zarcillo seco + mancha amarilla en base + sonido hueco. Entera: 1-2 semanas a temperatura ambiente." />
      <SectionTitleX c={c}>🍽️ VARIEDADES RECOMENDADAS PARA BCN</SectionTitleX>
      <StepX c={c} num={1} text="Sugar Baby: pequeña (3-5kg), carne roja intensa. La MEJOR para maceta. 75-80 días." />
      <StepX c={c} num={2} text="Crimson Sweet: mediana (5-8kg), rayas verdes. Necesita más espacio." />
    </div>
  );
}

// ============================================================
// RAÍCES Y TUBÉRCULOS
// ============================================================

function ZANAHORIA() {
  const c = HUERTA_COLORS;
  return (
    <div>
      <InfoBoxX c={c}>
        <strong>Zanahoria (Daucus carota)</strong> — REGLA DE ORO: NUNCA trasplantar. Siembra directa. Suelo suelto, profundo, sin piedras. Escalonar cada 3 semanas de febrero a julio. Asociación mágica con cebolla/puerro: se protegen mutuamente de las moscas.
      </InfoBoxX>
      <SectionTitleX c={c}>FICHA RÁPIDA</SectionTitleX>
      <div style={{ display: "grid", gridTemplateColumns: "1fr 1fr", gap: "10px", marginBottom: "16px" }}>
        <StatBoxX c={c} label="Dificultad" value="Fácil" />
        <StatBoxX c={c} label="Días a cosecha" value="60-80" />
        <StatBoxX c={c} label="Sol" value="Pleno sol" />
        <StatBoxX c={c} label="Agua" value="Regular, mantener húmedo" />
        <StatBoxX c={c} label="Siembra" value="Feb-Jul (escalonado)" />
        <StatBoxX c={c} label="Profundidad" value="0.5-1cm" />
        <StatBoxX c={c} label="Espaciado" value="5-8cm (tras raleo)" />
        <StatBoxX c={c} label="Maceta" value="Sí, mínimo 20cm profundo" />
      </div>
      <SectionTitleX c={c}>🌱 SIEMBRA</SectionTitleX>
      <StepX c={c} num={1} text="Siembra DIRECTA. NUNCA semillero: zanahorias trasplantadas se bifurcan. Suelo MUY suelto, sin piedras." />
      <StepX c={c} num={2} text="Germinación LENTA: 10-21 días. Mantener húmedo. Cartón encima los primeros días mantiene humedad." />
      <StepX c={c} num={3} text="Raleo CRÍTICO a 5-8cm cuando miden 3-5cm. Sin raleo = zanahorias finas como lápices." />
      <SectionTitleX c={c}>🌿 CULTIVO</SectionTitleX>
      <StepX c={c} num={1} text="Siembra escalonada cada 3-4 semanas. Riego constante. NO exceso de N (raíces peludas). Coronas que asoman: cubrir con tierra." />
      <SectionTitleX c={c}>🐛 PLAGAS Y ENFERMEDADES</SectionTitleX>
      <StepX c={c} num={1} text="Mosca de la zanahoria: prevención MÁGICA plantando cebolla o puerro al lado. Pulgón y nemátodos: estándar." />
      <SectionTitleX c={c}>🤝 ASOCIACIÓN</SectionTitleX>
      <StepX c={c} num={1} text="MÁGICA con cebolla/puerro (protección mutua). Romero, salvia, lechuga. NO con eneldo ni hinojo." />
      <SectionTitleX c={c}>✂️ COSECHA Y CONSERVACIÓN</SectionTitleX>
      <StepX c={c} num={1} text="60-80 días. Regar el día antes. Nevera 2-4 semanas sin hojas. En arena húmeda: 3-6 meses." />
      <SectionTitleX c={c}>🍽️ VARIEDADES RECOMENDADAS PARA BCN</SectionTitleX>
      <StepX c={c} num={1} text="Nantesa: cilíndrica, 15-18cm, la más fácil y versátil." />
      <StepX c={c} num={2} text="Parisina: redonda, ideal para macetas y suelos poco profundos." />
      <StepX c={c} num={3} text="Morada (Purple Haze): piel morada, interior naranja." />
    </div>
  );
}

function RABANO() {
  const c = HUERTA_COLORS;
  return (
    <div>
      <InfoBoxX c={c}>
        <strong>Rábano (Raphanus sativus)</strong> — el cultivo MÁS RÁPIDO: 20-30 días. Ideal para niños y principiantes impacientes. Siembra directa todo el año (evitar julio-agosto). Si lo dejas espigar, produce vainas comestibles.
      </InfoBoxX>
      <SectionTitleX c={c}>FICHA RÁPIDA</SectionTitleX>
      <div style={{ display: "grid", gridTemplateColumns: "1fr 1fr", gap: "10px", marginBottom: "16px" }}>
        <StatBoxX c={c} label="Dificultad" value="Muy fácil" />
        <StatBoxX c={c} label="Días a cosecha" value="20-30" />
        <StatBoxX c={c} label="Sol" value="Sol o semi-sombra" />
        <StatBoxX c={c} label="Agua" value="Regular" />
        <StatBoxX c={c} label="Siembra" value="Todo el año (evitar jul-ago)" />
        <StatBoxX c={c} label="Profundidad" value="1cm" />
        <StatBoxX c={c} label="Espaciado" value="3-5cm" />
        <StatBoxX c={c} label="Maceta" value="Sí, mínimo 10cm prof." />
      </div>
      <SectionTitleX c={c}>🌱 SIEMBRA</SectionTitleX>
      <StepX c={c} num={1} text="Directa: semillas a 1cm. Germinación 3-7 días. Escalonar cada 2 semanas." />
      <StepX c={c} num={2} text="Truco: mezclar semillas de rábano con zanahoria. Los rábanos marcan la hilera y se cosechan antes." />
      <SectionTitleX c={c}>🌿 CULTIVO</SectionTitleX>
      <StepX c={c} num={1} text="Riego constante. Evitar julio-agosto (espigan). NO exceso de N. Vainas de rábanos maduros son comestibles." />
      <SectionTitleX c={c}>🐛 PLAGAS</SectionTitleX>
      <StepX c={c} num={1} text="Pulgón ocasional. Cultivo tan rápido que las plagas no se establecen." />
      <SectionTitleX c={c}>🤝 ASOCIACIÓN</SectionTitleX>
      <StepX c={c} num={1} text="Zanahoria (marcador), lechuga, pepino. NO con coles (misma familia)." />
      <SectionTitleX c={c}>✂️ COSECHA</SectionTitleX>
      <StepX c={c} num={1} text="20-30 días. Cuando asoma 2-3cm. Nevera 1-2 semanas sin hojas." />
      <SectionTitleX c={c}>🍽️ VARIEDADES</SectionTitleX>
      <StepX c={c} num={1} text="Cherry Belle / Saxa: rojo redondo clásico. 22-25 días." />
      <StepX c={c} num={2} text="Daikon: blanco japonés largo, suave, 50-60 días." />
    </div>
  );
}

function REMOLACHA() {
  const c = HUERTA_COLORS;
  return (
    <div>
      <InfoBoxX c={c}>
        <strong>Remolacha (Beta vulgaris)</strong> — dos cultivos en uno: raíz dulce + hojas comestibles. Siembra directa marzo-junio. 55-70 días. Variedades: roja, dorada, Chioggia (anillos concéntricos).
      </InfoBoxX>
      <SectionTitleX c={c}>FICHA RÁPIDA</SectionTitleX>
      <div style={{ display: "grid", gridTemplateColumns: "1fr 1fr", gap: "10px", marginBottom: "16px" }}>
        <StatBoxX c={c} label="Dificultad" value="Fácil" />
        <StatBoxX c={c} label="Días a cosecha" value="55-70" />
        <StatBoxX c={c} label="Sol" value="Pleno sol" />
        <StatBoxX c={c} label="Agua" value="Regular" />
        <StatBoxX c={c} label="Siembra" value="Mar-Jun" />
        <StatBoxX c={c} label="Profundidad" value="1-2cm" />
        <StatBoxX c={c} label="Espaciado" value="10-15cm" />
        <StatBoxX c={c} label="Maceta" value="Sí, mínimo 20cm prof." />
      </div>
      <SectionTitleX c={c}>🌱 SIEMBRA</SectionTitleX>
      <StepX c={c} num={1} text="Directa: marzo-junio. Glomérulos (varias semillas juntas) — ralear a 10-15cm. Remojar 24h acelera." />
      <SectionTitleX c={c}>🌿 CULTIVO</SectionTitleX>
      <StepX c={c} num={1} text="Suelo suelto, profundo, bien drenado. Rico en K y P, no exceso de N. Riego constante." />
      <SectionTitleX c={c}>🐛 PLAGAS</SectionTitleX>
      <StepX c={c} num={1} text="Pulgón, minador de hojas, caracoles. Tratamientos estándar." />
      <SectionTitleX c={c}>🤝 ASOCIACIÓN</SectionTitleX>
      <StepX c={c} num={1} text="Cebolla, lechuga, coles. NO con espinaca o acelga (misma familia)." />
      <SectionTitleX c={c}>✂️ COSECHA</SectionTitleX>
      <StepX c={c} num={1} text="55-70 días. Raíz de 5-8cm de diámetro. Hojas comestibles (máx 1/3). Nevera 2-4 semanas." />
      <SectionTitleX c={c}>🍽️ VARIEDADES</SectionTitleX>
      <StepX c={c} num={1} text="Detroit Dark Red: roja clásica, dulce, productiva." />
      <StepX c={c} num={2} text="Dorada (Golden): raíz dorada, sabor suave. No mancha." />
      <StepX c={c} num={3} text="Chioggia: anillos concéntricos rojos y blancos." />
    </div>
  );
}

function PATATA() {
  const c = HUERTA_COLORS;
  return (
    <div>
      <InfoBoxX c={c}>
        <strong>Patata (Solanum tuberosum)</strong> — se cultiva de patata de siembra certificada (NO supermercado). Plantar febrero-marzo. Aporcar cuando miden 20cm. Cosecha 90-120 días. Cultivo en saco posible en terraza.
      </InfoBoxX>
      <SectionTitleX c={c}>FICHA RÁPIDA</SectionTitleX>
      <div style={{ display: "grid", gridTemplateColumns: "1fr 1fr", gap: "10px", marginBottom: "16px" }}>
        <StatBoxX c={c} label="Dificultad" value="Fácil" />
        <StatBoxX c={c} label="Días a cosecha" value="90-120" />
        <StatBoxX c={c} label="Sol" value="Pleno sol" />
        <StatBoxX c={c} label="Agua" value="Regular" />
        <StatBoxX c={c} label="Siembra" value="Feb-Mar" />
        <StatBoxX c={c} label="Profundidad" value="10-15cm" />
        <StatBoxX c={c} label="Espaciado" value="30-40cm" />
        <StatBoxX c={c} label="Maceta" value="Sí, saco 40L+" />
      </div>
      <SectionTitleX c={c}>🌱 SIEMBRA</SectionTitleX>
      <StepX c={c} num={1} text="Patatas de siembra certificadas (viveros). Greening: 2-3 semanas en sitio luminoso para que broten." />
      <StepX c={c} num={2} text="Plantar febrero-marzo a 10-15cm, brotes hacia arriba. Grandes: cortar en trozos con 2-3 ojos." />
      <SectionTitleX c={c}>🌿 CULTIVO</SectionTitleX>
      <StepX c={c} num={1} text="Sustrato suelto: 50% universal + 30% compost + 20% arena. Aporcar cuando miden 20cm (cubrir tallos)." />
      <StepX c={c} num={2} text="Riego regular. Dejar de regar 2-3 semanas antes. NO exponer tubérculos al sol (solanina tóxica)." />
      <SectionTitleX c={c}>🪴 SACO</SectionTitleX>
      <StepX c={c} num={1} text="Saco 40-60L: 10-15cm sustrato, 3-4 patatas, cubrir 5cm. Ir añadiendo sustrato al crecer. Cosechar volcando." />
      <SectionTitleX c={c}>🐛 PLAGAS</SectionTitleX>
      <StepX c={c} num={1} text="Escarabajo de la patata (recoger manual), mildiu (no mojar hojas), pulgón." />
      <SectionTitleX c={c}>🤝 ASOCIACIÓN</SectionTitleX>
      <StepX c={c} num={1} text="Judía, maíz, col, caléndula. NO con tomate, pimiento o berenjena (mismas enfermedades)." />
      <SectionTitleX c={c}>✂️ COSECHA</SectionTitleX>
      <StepX c={c} num={1} text="90-120 días. Hojas amarillas = listas. Curado 2-3 días al aire. Conservar oscuro 5-10°C. NUNCA nevera." />
      <SectionTitleX c={c}>🍽️ VARIEDADES</SectionTitleX>
      <StepX c={c} num={1} text="Kennebec: versátil, muy productiva, resistente a mildiu." />
      <StepX c={c} num={2} text="Monalisa / Spunta: amarilla, ciclo medio." />
      <StepX c={c} num={3} text="Red Pontiac: piel roja, excelente para freír." />
    </div>
  );
}

// ============================================================
// ALIÁCEAS
// ============================================================

function CEBOLLA() {
  const c = HUERTA_COLORS;
  return (
    <div>
      <InfoBoxX c={c}>
        <strong>Cebolla (Allium cepa)</strong> — ciclo largo, bajo mantenimiento. Siembra diciembre-enero, trasplante febrero-marzo. Variedades de día intermedio para España. Cosecha junio-julio cuando el tallo se dobla solo.
      </InfoBoxX>
      <SectionTitleX c={c}>FICHA RÁPIDA</SectionTitleX>
      <div style={{ display: "grid", gridTemplateColumns: "1fr 1fr", gap: "10px", marginBottom: "16px" }}>
        <StatBoxX c={c} label="Dificultad" value="Fácil" />
        <StatBoxX c={c} label="Días a cosecha" value="150-180" />
        <StatBoxX c={c} label="Sol" value="Pleno sol" />
        <StatBoxX c={c} label="Agua" value="Moderada, reducir al final" />
        <StatBoxX c={c} label="Siembra" value="Dic-Ene (interior)" />
        <StatBoxX c={c} label="Trasplante" value="Feb-Mar" />
        <StatBoxX c={c} label="Espaciado" value="10-15cm" />
        <StatBoxX c={c} label="Maceta" value="Sí, mínimo 15cm prof." />
      </div>
      <SectionTitleX c={c}>🌱 SIEMBRA</SectionTitleX>
      <StepX c={c} num={1} text="Semillero diciembre-enero. Alternativa fácil: bulbillos en primavera directos al suelo." />
      <SectionTitleX c={c}>🌿 CULTIVO</SectionTitleX>
      <StepX c={c} num={1} text="Sustrato suelto, bien drenado. Rico en P y K, pobre en N. Reducir riego al engordar bulbo." />
      <StepX c={c} num={2} text="Día intermedio (12-14h) para España. Las de día largo producen cebollas pequeñas aquí." />
      <SectionTitleX c={c}>🐛 PLAGAS</SectionTitleX>
      <StepX c={c} num={1} text="Mosca de la cebolla: prevención con zanahoria al lado. Mildiu: no mojar hojas." />
      <SectionTitleX c={c}>🤝 ASOCIACIÓN</SectionTitleX>
      <StepX c={c} num={1} text="MÁGICA con zanahoria (protección mutua). Lechuga, remolacha, tomate. NO con judía o guisante." />
      <SectionTitleX c={c}>✂️ COSECHA</SectionTitleX>
      <StepX c={c} num={1} text="Junio-julio. 50-70% tallos doblados. Secar al sol 3-5 días. Conservar fresco, seco y oscuro." />
      <SectionTitleX c={c}>🍽️ VARIEDADES</SectionTitleX>
      <StepX c={c} num={1} text="Babosa / Valenciana: tradicional española, grande y dulce." />
      <StepX c={c} num={2} text="Morada de Amposta: cebolla morada catalana." />
      <StepX c={c} num={3} text="Blanca dulce de Fuentes: muy dulce, para crudo." />
    </div>
  );
}

function AJO() {
  const c = HUERTA_COLORS;
  return (
    <div>
      <InfoBoxX c={c}>
        <strong>Ajo (Allium sativum)</strong> — el cultivo más fácil. Plantar dientes noviembre-diciembre, cosechar junio-julio. Casi sin cuidados. Trenzado para almacenar.
      </InfoBoxX>
      <SectionTitleX c={c}>FICHA RÁPIDA</SectionTitleX>
      <div style={{ display: "grid", gridTemplateColumns: "1fr 1fr", gap: "10px", marginBottom: "16px" }}>
        <StatBoxX c={c} label="Dificultad" value="Muy fácil" />
        <StatBoxX c={c} label="Días a cosecha" value="180-210" />
        <StatBoxX c={c} label="Sol" value="Pleno sol" />
        <StatBoxX c={c} label="Agua" value="Poca, reducir al final" />
        <StatBoxX c={c} label="Plantación" value="Nov-Dic" />
        <StatBoxX c={c} label="Profundidad" value="3-5cm" />
        <StatBoxX c={c} label="Espaciado" value="10-15cm" />
        <StatBoxX c={c} label="Maceta" value="Sí, mínimo 15cm prof." />
      </div>
      <SectionTitleX c={c}>🌱 PLANTACIÓN</SectionTitleX>
      <StepX c={c} num={1} text="Cabezas de ajo (vivero, no supermercado). Separar dientes. Clavar punta arriba, 3-5cm. Noviembre-diciembre." />
      <SectionTitleX c={c}>🌿 CULTIVO</SectionTitleX>
      <StepX c={c} num={1} text="Suelo drenado. Invierno: casi sin riego (lluvia BCN basta). Dejar de regar 3-4 semanas antes." />
      <SectionTitleX c={c}>🐛 PLAGAS</SectionTitleX>
      <StepX c={c} num={1} text="Roya (pústulas naranjas). En general, muy pocas plagas." />
      <SectionTitleX c={c}>🤝 ASOCIACIÓN</SectionTitleX>
      <StepX c={c} num={1} text="Zanahoria (protección mutua), lechuga, tomate. NO con judía o guisante." />
      <SectionTitleX c={c}>✂️ COSECHA</SectionTitleX>
      <StepX c={c} num={1} text="Junio-julio. 2/3 hojas secas. Curado 2-4 semanas al aire. Trenzados duran 6-8 meses." />
      <SectionTitleX c={c}>🍽️ VARIEDADES</SectionTitleX>
      <StepX c={c} num={1} text="Ajo blanco común: 10-14 dientes, buena conservación." />
      <StepX c={c} num={2} text="Ajo morado / Violeta de Cadours: dientes grandes, sabor intenso." />
      <StepX c={c} num={3} text="Ajo elefante: dientes enormes, sabor suave." />
    </div>
  );
}

function PUERRO() {
  const c = HUERTA_COLORS;
  return (
    <div>
      <InfoBoxX c={c}>
        <strong>Puerro (Allium porrum)</strong> — la aliácea más resistente. Aguanta heladas y abandono. Siembra febrero-abril, trasplante a los 3 meses en surco profundo (15cm). Cosecha desde otoño hasta final de invierno.
      </InfoBoxX>
      <SectionTitleX c={c}>FICHA RÁPIDA</SectionTitleX>
      <div style={{ display: "grid", gridTemplateColumns: "1fr 1fr", gap: "10px", marginBottom: "16px" }}>
        <StatBoxX c={c} label="Dificultad" value="Fácil" />
        <StatBoxX c={c} label="Días a cosecha" value="150-200" />
        <StatBoxX c={c} label="Sol" value="Pleno sol" />
        <StatBoxX c={c} label="Agua" value="Regular" />
        <StatBoxX c={c} label="Siembra" value="Feb-Abr" />
        <StatBoxX c={c} label="Trasplante" value="May-Jul" />
        <StatBoxX c={c} label="Espaciado" value="15-20cm" />
        <StatBoxX c={c} label="Maceta" value="Sí, mínimo 25cm prof." />
      </div>
      <SectionTitleX c={c}>🌱 SIEMBRA</SectionTitleX>
      <StepX c={c} num={1} text="Semillero febrero-abril. Plántulas finas como hierba. Trasplantar a los 2-3 meses (grosor de lápiz)." />
      <SectionTitleX c={c}>🌿 CULTIVO</SectionTitleX>
      <StepX c={c} num={1} text="Surco profundo de 15cm. Plantar en el fondo, ir rellenando al crecer. Blanquea el tallo." />
      <StepX c={c} num={2} text="Cosecha escalonada octubre-marzo. Aguanta en la tierra todo el invierno. Nevera natural." />
      <SectionTitleX c={c}>🐛 PLAGAS</SectionTitleX>
      <StepX c={c} num={1} text="Mosca de la cebolla (zanahoria al lado previene). Roya (cortar hojas)." />
      <SectionTitleX c={c}>🤝 ASOCIACIÓN</SectionTitleX>
      <StepX c={c} num={1} text="Zanahoria (protección mutua), apio, lechuga. NO con judía." />
      <SectionTitleX c={c}>✂️ COSECHA</SectionTitleX>
      <StepX c={c} num={1} text="Arrancar con paleta. Nevera 1-2 semanas. Congelar: trocear y escaldar 2 min." />
      <SectionTitleX c={c}>🍽️ VARIEDADES</SectionTitleX>
      <StepX c={c} num={1} text="Monstruoso de Carentan: grueso (3-4cm), tallo blanco largo." />
      <StepX c={c} num={2} text="Largo de Mezières: tallo muy largo y blanco." />
    </div>
  );
}

// ============================================================
// LEGUMBRES
// ============================================================

function JUDIA_VERDE() {
  const c = HUERTA_COLORS;
  return (
    <div>
      <InfoBoxX c={c}>
        <strong>Judía verde (Phaseolus vulgaris)</strong> — legumbre de verano, crecimiento rápido. Enana (sin tutor) o de enrame (trepadora con cañas). Siembra directa abril-julio. 50-70 días. Fija nitrógeno. Recolectar cada 2-3 días estimula más producción.
      </InfoBoxX>
      <SectionTitleX c={c}>FICHA RÁPIDA</SectionTitleX>
      <div style={{ display: "grid", gridTemplateColumns: "1fr 1fr", gap: "10px", marginBottom: "16px" }}>
        <StatBoxX c={c} label="Dificultad" value="Fácil" />
        <StatBoxX c={c} label="Días a cosecha" value="50-70" />
        <StatBoxX c={c} label="Sol" value="Pleno sol" />
        <StatBoxX c={c} label="Agua" value="Regular, no mojar hojas" />
        <StatBoxX c={c} label="Siembra" value="Abr-Jul (directa)" />
        <StatBoxX c={c} label="Profundidad" value="2-3cm" />
        <StatBoxX c={c} label="Espaciado" value="15-20cm (enana) / 30-40cm (enrame)" />
        <StatBoxX c={c} label="Maceta" value="Sí, mínimo 10L" />
      </div>
      <SectionTitleX c={c}>🌱 SIEMBRA</SectionTitleX>
      <StepX c={c} num={1} text="Directa abril-julio. 2-3 semillas por hoyo a 2-3cm. Remojar 12-24h acelera. Germinación 5-10 días." />
      <SectionTitleX c={c}>🌿 CULTIVO</SectionTitleX>
      <StepX c={c} num={1} text="Enana: 40-60cm, sin tutor, ideal macetas. Enrame: cañas 2-3m en tipi, más productiva por m²." />
      <StepX c={c} num={2} text="REGLA DE ORO: NO mojar hojas (hongos). Regar por la mañana a pie de planta. No fertilizar con N." />
      <SectionTitleX c={c}>🐛 PLAGAS</SectionTitleX>
      <StepX c={c} num={1} text="Pulgón negro en brotes (jabón potásico). Araña roja con calor seco." />
      <SectionTitleX c={c}>🤝 ASOCIACIÓN</SectionTitleX>
      <StepX c={c} num={1} text="Maíz (Tres Hermanas), calabacín, zanahoria, patata. NO con ajo o cebolla." />
      <SectionTitleX c={c}>✂️ COSECHA</SectionTitleX>
      <StepX c={c} num={1} text="Vainas de 12-15cm. CADA 2-3 DÍAS. Nevera 5-7 días. Congelar: escaldar 2-3 min." />
      <SectionTitleX c={c}>🍽️ VARIEDADES</SectionTitleX>
      <StepX c={c} num={1} text="Contender (enana): 40-50cm, vainas 15cm, muy productiva." />
      <StepX c={c} num={2} text="Buenos Aires / Helda (enrame): trepadora, vainas planas 20-25cm." />
      <StepX c={c} num={3} text="Manteca / Roc d'Or (amarilla): sabor mantecoso." />
    </div>
  );
}

function GUISANTE() {
  const c = HUERTA_COLORS;
  return (
    <div>
      <InfoBoxX c={c}>
        <strong>Guisante (Pisum sativum)</strong> — cultivo de INVIERNO. Siembra octubre-febrero, tolera heladas. Necesita tutor. 70-90 días. Tirabeques: vaina entera comestible.
      </InfoBoxX>
      <SectionTitleX c={c}>FICHA RÁPIDA</SectionTitleX>
      <div style={{ display: "grid", gridTemplateColumns: "1fr 1fr", gap: "10px", marginBottom: "16px" }}>
        <StatBoxX c={c} label="Dificultad" value="Fácil" />
        <StatBoxX c={c} label="Días a cosecha" value="70-90" />
        <StatBoxX c={c} label="Sol" value="Pleno sol (invierno)" />
        <StatBoxX c={c} label="Agua" value="Regular, no encharcar" />
        <StatBoxX c={c} label="Siembra" value="Oct-Feb" />
        <StatBoxX c={c} label="Profundidad" value="2-3cm" />
        <StatBoxX c={c} label="Espaciado" value="5-8cm" />
        <StatBoxX c={c} label="Maceta" value="Sí, mínimo 15L" />
      </div>
      <SectionTitleX c={c}>🌱 SIEMBRA</SectionTitleX>
      <StepX c={c} num={1} text="Directa octubre-febrero. Germinan en frío (5-10°C). Proteger de pájaros con malla." />
      <SectionTitleX c={c}>🌿 CULTIVO</SectionTitleX>
      <StepX c={c} num={1} text="Tutor OBLIGATORIO con malla o cañas. En invierno BCN la lluvia basta. No fertilizar con N." />
      <SectionTitleX c={c}>🐛 PLAGAS</SectionTitleX>
      <StepX c={c} num={1} text="Oídio en primavera. Pulgón en brotes. Frío y lluvia reducen plagas naturalmente." />
      <SectionTitleX c={c}>🤝 ASOCIACIÓN</SectionTitleX>
      <StepX c={c} num={1} text="Zanahoria, lechuga, rábano. NO con ajo o cebolla." />
      <SectionTitleX c={c}>✂️ COSECHA</SectionTitleX>
      <StepX c={c} num={1} text="70-90 días. Vainas llenas pero tiernas. Pierden dulzor rápido. Congelar tras escaldar 1-2 min." />
      <SectionTitleX c={c}>🍽️ VARIEDADES</SectionTitleX>
      <StepX c={c} num={1} text="Enano de Provenza: mata baja 40-50cm, dulce, rápido (60-70 días)." />
      <StepX c={c} num={2} text="Tirabeque (mange-tout): vaina entera comestible. Oro verde en cocina." />
      <StepX c={c} num={3} text="Lincoln: enrame, 8-10 guisantes por vaina." />
    </div>
  );
}

function HABA() {
  const c = HUERTA_COLORS;
  return (
    <div>
      <InfoBoxX c={c}>
        <strong>Haba (Vicia faba)</strong> — el cultivo más rústico de invierno. Aguanta -5°C. Fija nitrógeno como ninguna otra. Siembra octubre-noviembre, cosecha abril-mayo. Despuntar al cuajar primeras vainas evita pulgón negro.
      </InfoBoxX>
      <SectionTitleX c={c}>FICHA RÁPIDA</SectionTitleX>
      <div style={{ display: "grid", gridTemplateColumns: "1fr 1fr", gap: "10px", marginBottom: "16px" }}>
        <StatBoxX c={c} label="Dificultad" value="Muy fácil" />
        <StatBoxX c={c} label="Días a cosecha" value="150-180" />
        <StatBoxX c={c} label="Sol" value="Pleno sol (invierno)" />
        <StatBoxX c={c} label="Agua" value="Moderada" />
        <StatBoxX c={c} label="Siembra" value="Oct-Nov" />
        <StatBoxX c={c} label="Profundidad" value="3-5cm" />
        <StatBoxX c={c} label="Espaciado" value="20-25cm" />
        <StatBoxX c={c} label="Maceta" value="Sí, mínimo 15L" />
      </div>
      <SectionTitleX c={c}>🌱 SIEMBRA</SectionTitleX>
      <StepX c={c} num={1} text="Directa octubre-noviembre. Semillas grandes, fáciles. A 3-5cm, ojo hacia abajo." />
      <SectionTitleX c={c}>🌿 CULTIVO</SectionTitleX>
      <StepX c={c} num={1} text="Poco exigente en suelo. MEJORA el suelo (excelente fijadora de N). Invierno: casi sin riego." />
      <StepX c={c} num={2} text="Despuntado CRÍTICO: al cuajar primeras vainas, cortar punta (últimos 10-15cm). Elimina pulgón negro." />
      <SectionTitleX c={c}>🐛 PLAGAS</SectionTitleX>
      <StepX c={c} num={1} text="Pulgón negro en puntas: DESPUNTAR. Sitona (mordiscos en U): no grave." />
      <SectionTitleX c={c}>🤝 ASOCIACIÓN</SectionTitleX>
      <StepX c={c} num={1} text="Patata (fija N que la patata aprovecha), col, lechuga. NO con ajo o cebolla." />
      <SectionTitleX c={c}>✂️ COSECHA</SectionTitleX>
      <StepX c={c} num={1} text="Abril-mayo. Vainas tiernas (10-15cm) comer entera. Maduras para desgranar. Secas duran años." />
      <SectionTitleX c={c}>🍽️ VARIEDADES</SectionTitleX>
      <StepX c={c} num={1} text="Aguadulce / Muchamiel: tradicional española. Vainas grandes (20-25cm), 6-8 habas." />
      <StepX c={c} num={2} text="Reina Mora: habas de color morado oscuro." />
    </div>
  );
}

// ============================================================
// CRUCÍFERAS
// ============================================================

function BROCOLI() {
  const c = HUERTA_COLORS;
  return (
    <div>
      <InfoBoxX c={c}>
        <strong>Brócoli (Brassica oleracea var. italica)</strong> — siembra junio-agosto para cosecha otoño-invierno. Cabeza central primero, luego brotes laterales durante semanas. Necesita suelo rico en N. Más fácil que la coliflor.
      </InfoBoxX>
      <SectionTitleX c={c}>FICHA RÁPIDA</SectionTitleX>
      <div style={{ display: "grid", gridTemplateColumns: "1fr 1fr", gap: "10px", marginBottom: "16px" }}>
        <StatBoxX c={c} label="Dificultad" value="Media" />
        <StatBoxX c={c} label="Días a cosecha" value="80-100" />
        <StatBoxX c={c} label="Sol" value="Pleno sol" />
        <StatBoxX c={c} label="Agua" value="Regular, abundante" />
        <StatBoxX c={c} label="Siembra" value="Jun-Ago" />
        <StatBoxX c={c} label="Trasplante" value="Jul-Sep" />
        <StatBoxX c={c} label="Espaciado" value="40-50cm" />
        <StatBoxX c={c} label="Maceta" value="Sí, mínimo 20L" />
      </div>
      <SectionTitleX c={c}>🌱 SIEMBRA</SectionTitleX>
      <StepX c={c} num={1} text="Semillero junio-agosto. Trasplantar con 4-6 hojas (4-5 semanas)." />
      <SectionTitleX c={c}>🌿 CULTIVO</SectionTitleX>
      <StepX c={c} num={1} text="Sustrato MUY rico en N. Compost + humus. Fertilizar cada 3-4 semanas. Riego regular y abundante." />
      <StepX c={c} num={2} text="Cosechar cabeza central cuando floretes compactos, ANTES de abrirse. Luego brotes laterales 6-10 semanas." />
      <SectionTitleX c={c}>🐛 PLAGAS</SectionTitleX>
      <StepX c={c} num={1} text="Orugas de mariposa de la col (malla + BT), pulgón ceroso (jabón potásico), hernia de la col (sin cura)." />
      <SectionTitleX c={c}>🤝 ASOCIACIÓN</SectionTitleX>
      <StepX c={c} num={1} text="Eneldo (avispas parasitoides), manzanilla, remolacha, cebolla. NO con fresa." />
      <SectionTitleX c={c}>🍽️ VARIEDADES</SectionTitleX>
      <StepX c={c} num={1} text="Calabrese: cabeza verde clásica, buenos brotes laterales." />
      <StepX c={c} num={2} text="Romanesco: cabeza fractal verde lima, espectacular." />
      <StepX c={c} num={3} text="Bimi / Tenderstem: tallo largo, ideal salteados." />
    </div>
  );
}

function COLIFLOR() {
  const c = HUERTA_COLORS;
  return (
    <div>
      <InfoBoxX c={c}>
        <strong>Coliflor (Brassica oleracea var. botrytis)</strong> — similar al brócoli pero más exigente. Suelo muy rico, riego constante. Atar hojas sobre la pella para blanquearla. Siembra junio-agosto.
      </InfoBoxX>
      <SectionTitleX c={c}>FICHA RÁPIDA</SectionTitleX>
      <div style={{ display: "grid", gridTemplateColumns: "1fr 1fr", gap: "10px", marginBottom: "16px" }}>
        <StatBoxX c={c} label="Dificultad" value="Media-difícil" />
        <StatBoxX c={c} label="Días a cosecha" value="90-120" />
        <StatBoxX c={c} label="Sol" value="Pleno sol" />
        <StatBoxX c={c} label="Agua" value="Abundante, constante" />
        <StatBoxX c={c} label="Siembra" value="Jun-Ago" />
        <StatBoxX c={c} label="Trasplante" value="Jul-Sep" />
        <StatBoxX c={c} label="Espaciado" value="50-60cm" />
        <StatBoxX c={c} label="Maceta" value="Sí, mínimo 25L" />
      </div>
      <SectionTitleX c={c}>🌱 SIEMBRA</SectionTitleX>
      <StepX c={c} num={1} text="Semillero junio-agosto. Trasplante a los 30-40 días." />
      <SectionTitleX c={c}>🌿 CULTIVO</SectionTitleX>
      <StepX c={c} num={1} text="Sustrato extremadamente rico. La más exigente de las coles. Riego CONSTANTE." />
      <StepX c={c} num={2} text="Blanqueo: atar hojas exteriores sobre la pella cuando tiene 5-8cm. Sin blanqueo = amarilla y amarga." />
      <SectionTitleX c={c}>🐛 PLAGAS</SectionTitleX>
      <StepX c={c} num={1} text="Igual que brócoli. Mosca de la col: collar de cartón alrededor del tallo." />
      <SectionTitleX c={c}>🍽️ VARIEDADES</SectionTitleX>
      <StepX c={c} num={1} text="Blanca común: pella blanca compacta, 90-100 días." />
      <StepX c={c} num={2} text="Morada de Sicilia: pella morada intensa, sabor dulce." />
    </div>
  );
}

// ============================================================
// AROMÁTICAS
// ============================================================

function ALBAHACA() {
  const c = HUERTA_COLORS;
  return (
    <div>
      <InfoBoxX c={c}>
        <strong>Albahaca (Ocimum basilicum)</strong> — la joya aromática del verano. Calor y sol. Asociación mágica con tomate: mejora sabor + repele plagas. Despuntar flores para mantener producción. Variedades: genovesa, tailandesa, morada.
      </InfoBoxX>
      <SectionTitleX c={c}>FICHA RÁPIDA</SectionTitleX>
      <div style={{ display: "grid", gridTemplateColumns: "1fr 1fr", gap: "10px", marginBottom: "16px" }}>
        <StatBoxX c={c} label="Dificultad" value="Fácil" />
        <StatBoxX c={c} label="Días a cosecha" value="30-40" />
        <StatBoxX c={c} label="Sol" value="Pleno sol, calor" />
        <StatBoxX c={c} label="Agua" value="Regular, no mojar hojas" />
        <StatBoxX c={c} label="Siembra" value="Mar-May (interior)" />
        <StatBoxX c={c} label="Profundidad" value="0.5cm" />
        <StatBoxX c={c} label="Espaciado" value="20-25cm" />
        <StatBoxX c={c} label="Maceta" value="Sí, mínimo 3L" />
      </div>
      <SectionTitleX c={c}>🌱 SIEMBRA</SectionTitleX>
      <StepX c={c} num={1} text="Interior marzo-mayo. Necesita CALOR (20-25°C). Semillas pequeñas, cubrir 0.5cm." />
      <SectionTitleX c={c}>🌿 CULTIVO</SectionTitleX>
      <StepX c={c} num={1} text="TROPICAL: crece mayo-octubre en BCN. NO sacar hasta mayo. Despuntar botones florales inmediatamente." />
      <StepX c={c} num={2} text="Riego: no mojar hojas. Mañana a pie de planta." />
      <SectionTitleX c={c}>🐛 PLAGAS</SectionTitleX>
      <StepX c={c} num={1} text="Mildiu (humedad), caracoles. Tratamientos estándar." />
      <SectionTitleX c={c}>🤝 ASOCIACIÓN</SectionTitleX>
      <StepX c={c} num={1} text="MÁGICA con tomate. Beneficiosa con pimiento, berenjena, orégano. NO con salvia." />
      <SectionTitleX c={c}>✂️ COSECHA</SectionTitleX>
      <StepX c={c} num={1} text="Cortar tallos enteros por encima de un par de hojas. Pesto congelado en cubitera. Secar ramilletes." />
      <SectionTitleX c={c}>🍽️ VARIEDADES</SectionTitleX>
      <StepX c={c} num={1} text="Genovesa: hoja grande, sabor intenso. La del pesto." />
      <StepX c={c} num={2} text="Tailandesa: tallo morado, sabor anisado. Más resistente al calor." />
      <StepX c={c} num={3} text="Morada (Dark Opal): hoja morada, sabor suave." />
    </div>
  );
}

function PEREJIL() {
  const c = HUERTA_COLORS;
  return (
    <div>
      <InfoBoxX c={c}>
        <strong>Perejil (Petroselinum crispum)</strong> — bianual, siembra todo el año. Germinación LENTA (2-3 semanas). Mejor sembrar en lugar definitivo. Cosecha de hojas externas. Rico en vitamina C.
      </InfoBoxX>
      <SectionTitleX c={c}>FICHA RÁPIDA</SectionTitleX>
      <div style={{ display: "grid", gridTemplateColumns: "1fr 1fr", gap: "10px", marginBottom: "16px" }}>
        <StatBoxX c={c} label="Dificultad" value="Fácil (lento)" />
        <StatBoxX c={c} label="Días a cosecha" value="40-60" />
        <StatBoxX c={c} label="Sol" value="Sol o semi-sombra" />
        <StatBoxX c={c} label="Agua" value="Regular" />
        <StatBoxX c={c} label="Siembra" value="Todo el año" />
        <StatBoxX c={c} label="Profundidad" value="0.5-1cm" />
        <StatBoxX c={c} label="Espaciado" value="15-20cm" />
        <StatBoxX c={c} label="Maceta" value="Sí, mínimo 3L" />
      </div>
      <SectionTitleX c={c}>🌱 SIEMBRA</SectionTitleX>
      <StepX c={c} num={1} text="Directa. Germinación MUY lenta: 14-21 días. Remojar semillas 24h. Mantener húmedo sin falta." />
      <SectionTitleX c={c}>🌿 CULTIVO</SectionTitleX>
      <StepX c={c} num={1} text="Sol o semi-sombra. Bianual: primer año hojas, segundo año florece. Dejar algunas para semillas." />
      <SectionTitleX c={c}>🤝 ASOCIACIÓN</SectionTitleX>
      <StepX c={c} num={1} text="Tomate (atrae sírfidos), espárrago. Posible inhibición de lechuga." />
      <SectionTitleX c={c}>✂️ COSECHA</SectionTitleX>
      <StepX c={c} num={1} text="Cortar tallos externos. Nevera en agua 1 semana. Congelar picado en cubitera. NO secar." />
      <SectionTitleX c={c}>🍽️ VARIEDADES</SectionTitleX>
      <StepX c={c} num={1} text="Liso / Italian Giant: hoja plana, sabor intenso. El de cocinar." />
      <StepX c={c} num={2} text="Rizado / Moss Curled: decorativo, sabor suave." />
    </div>
  );
}

function CILANTRO() {
  const c = HUERTA_COLORS;
  return (
    <div>
      <InfoBoxX c={c}>
        <strong>Cilantro (Coriandrum sativum)</strong> — odia el calor (espiga rápido). Siembra otoño-invierno en BCN. Macerar semillas 24h mejora germinación. Dejar espigar para semillas de coriandro.
      </InfoBoxX>
      <SectionTitleX c={c}>FICHA RÁPIDA</SectionTitleX>
      <div style={{ display: "grid", gridTemplateColumns: "1fr 1fr", gap: "10px", marginBottom: "16px" }}>
        <StatBoxX c={c} label="Dificultad" value="Fácil (temporada justa)" />
        <StatBoxX c={c} label="Días a cosecha" value="30-40" />
        <StatBoxX c={c} label="Sol" value="Sol (invierno) / semi-sombra" />
        <StatBoxX c={c} label="Agua" value="Regular" />
        <StatBoxX c={c} label="Siembra" value="Sep-Feb" />
        <StatBoxX c={c} label="Profundidad" value="0.5-1cm" />
        <StatBoxX c={c} label="Espaciado" value="10-15cm" />
        <StatBoxX c={c} label="Maceta" value="Sí, mínimo 3L" />
      </div>
      <SectionTitleX c={c}>🌱 SIEMBRA</SectionTitleX>
      <StepX c={c} num={1} text="Directa septiembre-febrero. Macerar semillas 24h. Siembra escalonada cada 3-4 semanas." />
      <SectionTitleX c={c}>🌿 CULTIVO</SectionTitleX>
      <StepX c={c} num={1} text="Cilantro + calor = espiga. En BCN, solo otoño-invierno. Flores blancas atraen sírfidos. Semillas de coriandro." />
      <SectionTitleX c={c}>🤝 ASOCIACIÓN</SectionTitleX>
      <StepX c={c} num={1} text="Entre habas o guisantes. Atrae insectos beneficiosos. NO con hinojo." />
      <SectionTitleX c={c}>✂️ COSECHA</SectionTitleX>
      <StepX c={c} num={1} text="Hojas frescas: consumir enseguida (nevera 2-3 días). Semillas de coriandro: dejar secar en planta." />
      <SectionTitleX c={c}>🍽️ VARIEDADES</SectionTitleX>
      <StepX c={c} num={1} text="Santo / Slow Bolt: resiste más el espigado. Ideal para mediterráneo." />
    </div>
  );
}

function MENTA() {
  const c = HUERTA_COLORS;
  return (
    <div>
      <InfoBoxX c={c}>
        <strong>Menta (Mentha sp.)</strong> — REGLA DE ORO: SIEMPRE en maceta (invasiva vía rizomas). Sombra parcial, mucha agua. Poda frecuente = más producción. Hierbabuena, piperita, chocolate.
      </InfoBoxX>
      <SectionTitleX c={c}>FICHA RÁPIDA</SectionTitleX>
      <div style={{ display: "grid", gridTemplateColumns: "1fr 1fr", gap: "10px", marginBottom: "16px" }}>
        <StatBoxX c={c} label="Dificultad" value="Muy fácil (invasiva)" />
        <StatBoxX c={c} label="Días a cosecha" value="20-30 (desde esqueje)" />
        <StatBoxX c={c} label="Sol" value="Sombra parcial" />
        <StatBoxX c={c} label="Agua" value="Abundante" />
        <StatBoxX c={c} label="Siembra" value="Esqueje o planta" />
        <StatBoxX c={c} label="Espaciado" value="30cm (maceta propia)" />
        <StatBoxX c={c} label="Maceta" value="SIEMPRE en maceta" />
        <StatBoxX c={c} label="Semilla" value="No recomendable" />
      </div>
      <SectionTitleX c={c}>🌱 PLANTACIÓN</SectionTitleX>
      <StepX c={c} num={1} text="Comprar planta (2-4€) o esqueje en agua. Enraíza en 7-14 días. NO sembrar semillas." />
      <SectionTitleX c={c}>🌿 CULTIVO</SectionTitleX>
      <StepX c={c} num={1} text="SIEMPRE EN MACETA. Sombra parcial (este ideal). Mucha agua, plato bajo maceta. Poda frecuente." />
      <SectionTitleX c={c}>🐛 PLAGAS</SectionTitleX>
      <StepX c={c} num={1} text="Roya y oídio con humedad. Cortar tallos afectados." />
      <SectionTitleX c={c}>🤝 ASOCIACIÓN</SectionTitleX>
      <StepX c={c} num={1} text="Sola en su maceta. Cerca de coles repele mariposa de la col." />
      <SectionTitleX c={c}>✂️ COSECHA</SectionTitleX>
      <StepX c={c} num={1} text="Cortar tallos por encima de un nudo. Fresca en agua 5-7 días. Secar ramilletes colgados boca abajo." />
      <SectionTitleX c={c}>🍽️ VARIEDADES</SectionTitleX>
      <StepX c={c} num={1} text="Hierbabuena (Mentha spicata): mojito, té moruno." />
      <StepX c={c} num={2} text="Menta piperita: sabor intenso, para infusiones." />
      <StepX c={c} num={3} text="Menta chocolate: aroma a chocolate, postres." />
    </div>
  );
}

function ROMERO() {
  const c = HUERTA_COLORS;
  return (
    <div>
      <InfoBoxX c={c}>
        <strong>Romero (Rosmarinus officinalis)</strong> — perenne mediterránea por excelencia. Pleno sol, poca agua, suelo pobre. Esqueje enraíza fácil. Aguanta sequía extrema. Ideal para el rincón donde todo se muere.
      </InfoBoxX>
      <SectionTitleX c={c}>FICHA RÁPIDA</SectionTitleX>
      <div style={{ display: "grid", gridTemplateColumns: "1fr 1fr", gap: "10px", marginBottom: "16px" }}>
        <StatBoxX c={c} label="Dificultad" value="Muy fácil" />
        <StatBoxX c={c} label="Días a cosecha" value="30-40 (desde esqueje)" />
        <StatBoxX c={c} label="Sol" value="Pleno sol" />
        <StatBoxX c={c} label="Agua" value="Muy poca" />
        <StatBoxX c={c} label="Siembra" value="Esqueje (fácil)" />
        <StatBoxX c={c} label="Espaciado" value="40-50cm" />
        <StatBoxX c={c} label="Maceta" value="Sí, mínimo 5L" />
        <StatBoxX c={c} label="Perenne" value="Años" />
      </div>
      <SectionTitleX c={c}>🌱 PLANTACIÓN</SectionTitleX>
      <StepX c={c} num={1} text="Esqueje de 10-15cm en agua o tierra. Enraíza en 2-3 semanas. O comprar planta por 2-5€." />
      <SectionTitleX c={c}>🌿 CULTIVO</SectionTitleX>
      <StepX c={c} num={1} text="Sol CUANTO MÁS MEJOR. Riego MUY POCO. Sustrato pobre con 30% arena. NO abonar. Poda ligera tras floración." />
      <SectionTitleX c={c}>🐛 PLAGAS</SectionTitleX>
      <StepX c={c} num={1} text="Prácticamente inmune. Exceso de agua = pudrición de raíces." />
      <SectionTitleX c={c}>🤝 ASOCIACIÓN</SectionTitleX>
      <StepX c={c} num={1} text="Coles (repele mariposa), zanahoria (repele mosca), salvia." />
      <SectionTitleX c={c}>✂️ COSECHA</SectionTitleX>
      <StepX c={c} num={1} text="Cortar ramitas según necesidad. Secar ramilletes colgados boca abajo en oscuro." />
      <SectionTitleX c={c}>🍽️ VARIEDADES</SectionTitleX>
      <StepX c={c} num={1} text="Común: el de toda la vida, flores azules." />
      <StepX c={c} num={2} text="Rastrero / Postrado: cubresuelos para colgar." />
      <StepX c={c} num={3} text="Rosado / Majorca Pink: flores rosadas." />
    </div>
  );
}

function TOMILLO() {
  const c = HUERTA_COLORS;
  return (
    <div>
      <InfoBoxX c={c}>
        <strong>Tomillo (Thymus vulgaris)</strong> — como el romero pero en pequeño. Sol, poca agua, suelo pobre. Excelente cubresuelos. Floración atrae abejas. Poda tras floración.
      </InfoBoxX>
      <SectionTitleX c={c}>FICHA RÁPIDA</SectionTitleX>
      <div style={{ display: "grid", gridTemplateColumns: "1fr 1fr", gap: "10px", marginBottom: "16px" }}>
        <StatBoxX c={c} label="Dificultad" value="Muy fácil" />
        <StatBoxX c={c} label="Días a cosecha" value="30-40" />
        <StatBoxX c={c} label="Sol" value="Pleno sol" />
        <StatBoxX c={c} label="Agua" value="Muy poca" />
        <StatBoxX c={c} label="Siembra" value="Esqueje o planta" />
        <StatBoxX c={c} label="Espaciado" value="20-25cm" />
        <StatBoxX c={c} label="Maceta" value="Sí, mínimo 3L" />
        <StatBoxX c={c} label="Perenne" value="Años" />
      </div>
      <SectionTitleX c={c}>🌱 PLANTACIÓN</SectionTitleX>
      <StepX c={c} num={1} text="Comprar planta (2-4€) o esqueje en agua. Semillas posibles pero lentas." />
      <SectionTitleX c={c}>🌿 CULTIVO</SectionTitleX>
      <StepX c={c} num={1} text="Mismas reglas que romero: sol directo, poca agua, suelo pobre y drenado. Poda tras floración." />
      <SectionTitleX c={c}>🤝 ASOCIACIÓN</SectionTitleX>
      <StepX c={c} num={1} text="Coles (repele mariposa), rosal. Atrae abejas y polinizadores." />
      <SectionTitleX c={c}>✂️ COSECHA</SectionTitleX>
      <StepX c={c} num={1} text="Cortar antes de floración (máximo aroma). Secar ramilletes colgados boca abajo." />
      <SectionTitleX c={c}>🍽️ VARIEDADES</SectionTitleX>
      <StepX c={c} num={1} text="Tomillo común: aroma intenso, flores lilas." />
      <StepX c={c} num={2} text="Tomillo limón (Thymus citriodorus): aroma cítrico, para pescados." />
      <StepX c={c} num={3} text="Serpol (Thymus serpyllum): rastrero, flores rosadas, cubresuelos." />
    </div>
  );
}

function OREGANO() {
  const c = HUERTA_COLORS;
  return (
    <div>
      <InfoBoxX c={c}>
        <strong>Orégano (Origanum vulgare)</strong> — mismas condiciones que tomillo. Mejor sabor si sufre (poco riego, suelo pobre). Rebrota cada primavera. Cosechar antes de floración. Imprescindible en cocina mediterránea.
      </InfoBoxX>
      <SectionTitleX c={c}>FICHA RÁPIDA</SectionTitleX>
      <div style={{ display: "grid", gridTemplateColumns: "1fr 1fr", gap: "10px", marginBottom: "16px" }}>
        <StatBoxX c={c} label="Dificultad" value="Muy fácil" />
        <StatBoxX c={c} label="Días a cosecha" value="30-40" />
        <StatBoxX c={c} label="Sol" value="Pleno sol" />
        <StatBoxX c={c} label="Agua" value="Muy poca" />
        <StatBoxX c={c} label="Siembra" value="Esqueje o planta" />
        <StatBoxX c={c} label="Espaciado" value="25-30cm" />
        <StatBoxX c={c} label="Maceta" value="Sí, mínimo 3L" />
        <StatBoxX c={c} label="Perenne" value="Años" />
      </div>
      <SectionTitleX c={c}>🌱 PLANTACIÓN</SectionTitleX>
      <StepX c={c} num={1} text="Comprar planta (2-4€) o esqueje en agua. Semillas posibles pero lentas." />
      <SectionTitleX c={c}>🌿 CULTIVO</SectionTitleX>
      <StepX c={c} num={1} text="Sol directo. Muy poca agua. Sustrato pobre. El orégano 'sufrido' sabe mejor. Rebrota cada primavera." />
      <SectionTitleX c={c}>🐛 PLAGAS</SectionTitleX>
      <StepX c={c} num={1} text="Prácticamente inmune. Exceso de agua = pudrición." />
      <SectionTitleX c={c}>🤝 ASOCIACIÓN</SectionTitleX>
      <StepX c={c} num={1} text="La mayoría de hortalizas. Su aroma confunde plagas." />
      <SectionTitleX c={c}>✂️ COSECHA</SectionTitleX>
      <StepX c={c} num={1} text="Cortar tallos justo antes de floración. Secar ramilletes. Orégano seco tiene MÁS sabor que fresco." />
      <SectionTitleX c={c}>🍽️ VARIEDADES</SectionTitleX>
      <StepX c={c} num={1} text="Orégano común (vulgare): clásico mediterráneo, sabor intenso." />
      <StepX c={c} num={2} text="Orégano griego (hirtum): más picante, el de las pizzas." />
      <StepX c={c} num={3} text="Mejorana (Origanum majorana): prima del orégano, sabor dulce y floral." />
    </div>
  );
}

// ============================================================
// FAQ · BIBLIOGRAFÍA · GLOSARIO
// ============================================================

function FAQ_HUERTA() {
  const c = HUERTA_COLORS;
  const faqs = [
    { q: "Nunca he cultivado nada. ¿Por dónde empiezo?", a: "3 plantas: lechuga, rábano y albahaca. Las tres crecen rápido, no necesitan cuidados especiales y te darán confianza. Compra 1 saco de sustrato universal, 3 macetas de 10L y 3 sobres de semillas. Inversión: ~30€. En 30 días comerás tu primera ensalada." },
    { q: "Mi terraza/balcón tiene poca luz, ¿qué puedo cultivar?", a: "Con 3-4h de sol directo puedes cultivar lechuga, espinaca, kale, acelga, perejil y menta. Las plantas de hoja necesitan menos sol que las de fruto. Evita tomates, pimientos y berenjenas — necesitan 6h+." },
    { q: "¿Es necesario usar fertilizantes químicos?", a: "NO. Un huerto ecológico funciona perfectamente con: compost casero, humus de lombriz, té de plátano (potasio), purín de ortiga (nitrógeno), y cáscaras de huevo trituradas (calcio). Todo natural y gratuito." },
    { q: "Me voy de vacaciones en agosto, ¿qué hago con el huerto?", a: "Agosto es el mes más duro. Opciones: (1) sistema de riego por goteo con programador (30-50€), (2) vecino/amigo, (3) botellas de agua boca abajo clavadas en la tierra (riego por goteo casero), (4) para cultivos de primavera ya habrás cosechado antes." },
    { q: "¿Puedo usar tierra del parque o del jardín?", a: "NO para macetas. La tierra de jardín en maceta se compacta como cemento y ahoga las raíces. Usa sustrato universal (8-15€/saco 50L). Para el suelo del jardín, sí puedes usar la tierra mezclándola con compost." },
    { q: "¿Cómo sé si estoy regando demasiado o muy poco?", a: "Mete el dedo en la tierra 2-3cm. Si está seco = riega. Si está húmedo = espera. Hojas amarillas y mustias pueden ser ambas cosas. Exceso de agua = hojas blandas y puntas marrones. Falta de agua = hojas secas y crujientes." },
    { q: "¿Qué hago con las plagas sin usar insecticidas?", a: "El 90% se soluciona con: (1) jabón potásico (5ml/L) para pulgón y mosca blanca, (2) Bacillus thuringiensis para orugas, (3) aceite de neem (3ml/L) para araña roja, (4) cerveza en plato para caracoles. Y atrae biodiversidad: caléndula y eneldo atraen insectos beneficiosos." },
    { q: "Mis tomates tienen una mancha negra en la base. ¿Qué es?", a: "Podredumbre apical (culillo negro). NO es enfermedad — es deficiencia de calcio por riego IRREGULAR. Solución: riego constante (cada 2 días), añadir cáscaras de huevo trituradas al sustrato." },
    { q: "¿Puedo guardar semillas de mis plantas para el año siguiente?", a: "Sí, de variedades NO híbridas (F1). Las más fáciles: tomate, pimiento, lechuga, judía, guisante, haba, calabaza. Las cucurbitáceas se cruzan fácilmente — mejor comprar semillas. Busca 'polinización abierta' o 'tradicional' en el sobre." },
    { q: "¿Rotación de cultivos en macetas? ¿Es necesaria?", a: "SÍ. No plantes el mismo cultivo en el mismo sustrato 2 años seguidos. Regla: no repetir familia botánica en la misma maceta durante 2-3 años. Donde hubo tomate (solanácea), al año siguiente pon judía (legumbre, fija nitrógeno)." },
    { q: "¿Cuánto produce una planta de tomate?", a: "Una tomatera cherry bien cuidada en maceta de 30L: 5-10kg por temporada (julio-septiembre). Una de tomate grande (Corazón de Buey, Raf): 10-20kg. Con 3-4 tomateras tienes tomates para una familia todo el verano." },
    { q: "¿Se puede cultivar en invierno en Barcelona?", a: "Rotundamente SÍ. El invierno en BCN (mínimas 3-5°C) permite cultivar: habas, guisantes, ajos, cebollas, puerros, kale, espinacas, acelgas, lechugas de invierno, coles, zanahorias. El huerto de invierno es el secreto mejor guardado del horticultor mediterráneo." },
  ];
  const [query, setQuery] = React.useState("");
  const filtered = query.trim() === "" ? faqs : faqs.filter(f => f.q.toLowerCase().includes(query.toLowerCase()) || f.a.toLowerCase().includes(query.toLowerCase()));
  return (
    <div>
      <InfoBoxX c={c}>
        Preguntas frecuentes de principiantes en huerto urbano. Respuestas directas y prácticas basadas en cultivo real en Barcelona.
      </InfoBoxX>
      <div style={{ marginBottom: "16px" }}>
        <input type="text" placeholder="Buscar en FAQ..." value={query} onChange={e => setQuery(e.target.value)} style={{
          width: "100%", padding: "10px 14px", borderRadius: "8px", border: `1px solid ${c.border1}`,
          background: c.bg2, color: c.textBright, fontSize: "13px", boxSizing: "border-box",
        }} />
      </div>
      <div style={{ fontSize: "11px", color: c.accent2, marginBottom: "12px" }}>{filtered.length}/{faqs.length} preguntas{query && ` · "${query}"`}</div>
      {filtered.map((f, i) => (
        <div key={i} style={{ background: c.bg2, border: `1px solid ${c.border1}`, borderRadius: "10px", padding: "14px", marginBottom: "10px" }}>
          <div style={{ fontSize: "13px", fontWeight: "bold", color: c.textBright, marginBottom: "6px" }}>❓ {f.q}</div>
          <div style={{ fontSize: "12px", color: c.accent3, lineHeight: "1.6" }}>{f.a}</div>
        </div>
      ))}
    </div>
  );
}

function BIBLIO_HUERTA() {
  const c = HUERTA_COLORS;
  return <BibliografiaBlock c={c}
    intro="Bibliografía y recursos para horticultura ecológica mediterránea. Libros clásicos + canales actuales + comunidades activas."
    libros={[
      { titulo: "El huerto urbano: Manual de cultivo ecológico en balcones y terrazas", autor: "Josep M. Vallès", año: "2014", nota: "Barcelona. Referencia definitiva para huerto en terraza en clima mediterráneo." },
      { titulo: "Huerto urbano para principiantes", autor: "Matías de Paz", nota: "Muy visual, paso a paso. Ideal para empezar de cero." },
      { titulo: "El calendario del horticultor", autor: "Mariano Bueno", nota: "Referencia española en agricultura ecológica. Calendario por meses y regiones." },
      { titulo: "La revolución de una brizna de paja", autor: "Masanobu Fukuoka", año: "1975", nota: "Filosofía de no-hacer en agricultura. Inspirador." },
      { titulo: "Plagas y enfermedades en hortalizas", autor: "Xavier Fontanet", nota: "Identificación visual + tratamientos ecológicos para clima mediterráneo." },
    ]}
    web={[
      { nombre: "Planeta Huerto", url: "https://www.planetahuerto.es", nota: "Blog + tienda. Artículos muy completos por cultivo. Referencia #1 en español." },
      { nombre: "La Huertina de Toni", url: "https://www.lahuertinadetoni.es", nota: "Canal YouTube + web. El más grande en español. Práctico, cercano." },
      { nombre: "Les Refardes", url: "https://www.lesrefardes.com", nota: "Semillas ecológicas de variedades tradicionales catalanas. Cooperativa en Mura." },
      { nombre: "Semillas Batlle", url: "https://www.semillasbatlle.es", nota: "Catálogo extenso, disponibles en cualquier garden center." },
    ]}
    comunidad={[
      { nombre: "r/UrbanGardening (Reddit)", nota: "Comunidad global de huerto urbano. Ideas y soluciones creativas." },
      { nombre: "r/vegetablegardening (Reddit)", nota: "La comunidad más grande de horticultura." },
      { nombre: "Grupos FB: 'Huerto Urbano Barcelona'", nota: "Intercambio de semillas, plantas, consejos locales." },
      { nombre: "Mercado de la Terra (Slow Food Barcelona)", nota: "Productores locales, semillas tradicionales." },
    ]}
  />;
}

function GLOSARIO_HUERTA() {
  const c = HUERTA_COLORS;
  const terminos = [
    { term: "Aclareo / Raleo", def: "Eliminar plántulas sobrantes para dar espacio a las que quedan. Crítico en zanahorias, lechugas y rábanos." },
    { term: "Acolchar / Mulching", def: "Cubrir el suelo con paja, corteza u hojas para retener humedad, evitar malas hierbas y proteger del frío/calor." },
    { term: "Aporcar", def: "Cubrir los tallos con tierra. Esencial en patatas (estimula más tubérculos) y puerros (blanquea el tallo)." },
    { term: "Asociación de cultivos", def: "Plantar especies juntas que se benefician mutuamente. Ej: tomate + albahaca, zanahoria + cebolla." },
    { term: "Bulbillo", def: "Pequeña cebolla o ajo usado como material de plantación. Más rápido y fiable que sembrar semillas." },
    { term: "Compost", def: "Materia orgánica descompuesta. El mejor fertilizante natural. Aporta nutrientes y mejora estructura del suelo." },
    { term: "Cotiledones", def: "Las primeras 'hojas' al germinar. Distintas de las hojas verdaderas. Alimentan la plántula." },
    { term: "Chupón", def: "Brote que sale entre el tallo principal y una hoja. En tomate se eliminan para concentrar energía en los frutos." },
    { term: "Despuntar", def: "Cortar la punta de un tallo para frenar crecimiento vertical y estimular ramas laterales. Se aplica en habas, melón, albahaca." },
    { term: "Endurecer", def: "Aclimatar plántulas del interior al exterior gradualmente. Evita shock térmico y quemaduras." },
    { term: "Entutorar", def: "Guiar la planta con cañas, cuerdas o mallas para crecimiento vertical. Obligatorio en tomates, pepinos, judías de enrame." },
    { term: "Escalonar (siembra)", def: "Sembrar la misma especie en tandas separadas 2-4 semanas para cosecha continua, no todo a la vez." },
    { term: "Espigar / Subida a flor", def: "La planta abandona producción de hojas/raíces y se centra en flores y semillas. Provocado por calor o fin de ciclo." },
    { term: "Hojas verdaderas", def: "Las hojas DESPUÉS de los cotiledones, con la forma de la especie. Señal de que la plántula está lista para trasplante." },
    { term: "Humus de lombriz", def: "Excremento de lombrices. Fertilizante natural concentrado. El oro negro del horticultor." },
    { term: "Jabón potásico", def: "Insecticida ecológico para pulgón y mosca blanca. 5ml/L agua. No daña abejas." },
    { term: "Nemátodos", def: "Microorganismos del suelo. Algunos beneficiosos, otros forman nódulos en raíces." },
    { term: "Perenne", def: "Planta que vive varios años (romero, tomillo, orégano). Opuesto a anual (muere tras producir semillas)." },
    { term: "pH del suelo", def: "Mide acidez/alcalinidad. La mayoría de hortalizas prefieren pH 6-7 (ligeramente ácido a neutro)." },
    { term: "Rotación de cultivos", def: "Cambiar de familia botánica en cada maceta/parcela cada año. Evita agotar nutrientes y acumular patógenos." },
    { term: "Solanáceas", def: "Familia botánica que incluye tomate, pimiento, berenjena y patata. Comparten plagas y enfermedades." },
    { term: "Sustrato", def: "Tierra preparada para macetas. Distinto a tierra de jardín. Retiene agua y nutrientes sin compactarse." },
  ];
  const [query, setQuery] = React.useState("");
  const filtered = query.trim() === "" ? terminos : terminos.filter(t => t.term.toLowerCase().includes(query.toLowerCase()) || t.def.toLowerCase().includes(query.toLowerCase()));
  return (
    <div>
      <InfoBoxX c={c}>
        Glosario de términos de horticultura. Conceptos que aparecen en las fichas de cultivo explicados de forma sencilla.
      </InfoBoxX>
      <div style={{ marginBottom: "16px" }}>
        <input type="text" placeholder="Buscar término..." value={query} onChange={e => setQuery(e.target.value)} style={{
          width: "100%", padding: "10px 14px", borderRadius: "8px", border: `1px solid ${c.border1}`,
          background: c.bg2, color: c.textBright, fontSize: "13px", boxSizing: "border-box",
        }} />
      </div>
      <div style={{ fontSize: "11px", color: c.accent2, marginBottom: "12px" }}>{filtered.length}/{terminos.length} términos{query && ` · "${query}"`}</div>
      {filtered.map((t, i) => (
        <div key={i} style={{ background: c.bg2, border: `1px solid ${c.border1}`, borderRadius: "10px", padding: "12px", marginBottom: "8px" }}>
          <div style={{ fontSize: "13px", fontWeight: "bold", color: c.textBright, marginBottom: "4px" }}>📖 {t.term}</div>
          <div style={{ fontSize: "12px", color: c.accent3, lineHeight: "1.6" }}>{t.def}</div>
        </div>
      ))}
    </div>
  );
}
