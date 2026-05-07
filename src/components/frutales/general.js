// FRUTALES — Guía completa de cultivo de frutales en clima mediterráneo (Barcelona)
// Fresas, bayas, cítricos, frutales de hueso, de pepita y otros. 17 frutales + intro + referencia.

// ============================================================
// INTRO & REFERENCIA
// ============================================================

function INTRO_FRUTALES() {
  const c = FRUTALES_COLORS;
  return (
    <div>
      <InfoBoxX c={c}>
        Guía completa de frutales adaptados al clima mediterráneo de Barcelona. Desde fresas en macetas colgantes hasta higueras casi indestructibles: 17 especies con instrucciones detalladas de plantación, cuidados, poda, plagas, cosecha y variedades recomendadas. Cultivar tu propia fruta en terraza, balcón o jardín es más fácil de lo que crees.
      </InfoBoxX>

      <SectionTitleX c={c}>POR QUÉ CULTIVAR FRUTALES EN CASA</SectionTitleX>
      <div style={{ display: "grid", gap: "10px", marginBottom: "20px" }}>
        {[
          { titulo: "🍓 Sabor imposible de comprar", desc: "Una fresa recién cogida, caliente de sol, no existe en ningún supermercado. La fruta de verdad madura en el árbol, no en cámara frigorífica." },
          { titulo: "💰 Ahorro a largo plazo", desc: "Un limonero productivo da 200-400 limones/año. A 0.30-0.50€/unidad, son 60-200€/año. Se paga solo en 2-3 temporadas." },
          { titulo: "🌍 Kilómetro cero real", desc: "Tu fruta recorre 5 metros del árbol a la mesa. Sin transporte, sin plásticos, sin cadena de frío." },
          { titulo: "🧠 Bienestar diario", desc: "Cuidar un frutal conecta con el ciclo de las estaciones. Ver florecer tu árbol en primavera y recoger fruta en verano es una satisfacción profunda." },
          { titulo: "🦋 Biodiversidad en tu terraza", desc: "Los frutales atraen abejas, mariposas y pájaros. Un mini-ecosistema productivo en plena ciudad." },
        ].map((item, i) => (
          <div key={i} style={{ background: c.bg2, border: `1px solid ${c.border1}`, borderRadius: "10px", padding: "12px" }}>
            <div style={{ fontSize: "14px", fontWeight: "bold", color: c.textBright, marginBottom: "4px" }}>{item.titulo}</div>
            <div style={{ fontSize: "12px", color: c.accent3, lineHeight: "1.5" }}>{item.desc}</div>
          </div>
        ))}
      </div>

      <SectionTitleX c={c}>CLIMA DE BARCELONA Y FRUTALES</SectionTitleX>
      <InfoBoxX c={c}>
        Barcelona = clima mediterráneo litoral. Inviernos suaves (mínimas 2-5°C, rara vez bajo cero), veranos calurosos (30-35°C), humedad ambiental alta, precipitaciones concentradas en otoño y primavera. Esto es EXCELENTE para cítricos, frutales de hueso tempranos y mediterráneos clásicos (higuera, granado). Limitante para frutales de clima frío (manzano, peral, cerezo) que necesitan horas-frío: elegir variedades de bajo requerimiento.
      </InfoBoxX>

      <SectionTitleX c={c}>CALENDARIO ANUAL DEL FRUTAL EN BCN</SectionTitleX>
      <div style={{ display: "grid", gap: "10px", marginBottom: "20px" }}>
        {[
          { mes: "ENE-FEB", accion: "Poda de invierno (frutales de pepita, vid, kiwi). Plantar a raíz desnuda. Tratamiento de cobre en melocotonero (lepra)." },
          { mes: "MAR-ABR", accion: "Floración de hueso y pepita. Abonado de primavera. Plantar cítricos y frutales en contenedor. Acolchar fresas." },
          { mes: "MAY-JUN", accion: "Aclareo de frutos (melocotón, manzana, pera). Cosecha de fresas, cerezas, brevas. Riego regular. Poda en verde (vid)." },
          { mes: "JUL-AGO", accion: "COSECHA GRANDE: melocotón, ciruela, albaricoque, higos, moras, frambuesas, arándanos. Riego profundo. Control de oídio." },
          { mes: "SEP-OCT", accion: "Cosecha de uva, granada, higos, kiwi, manzana, pera, cítricos tempranos. Plantar fresas. Abonado de otoño (potasio)." },
          { mes: "NOV-DIC", accion: "Cosecha de cítricos (naranja, mandarina, limón 4 estaciones). Poda ligera. Proteger cítricos jóvenes de heladas. Plantar frutales en otoño." },
        ].map((m, i) => (
          <div key={i} style={{ background: c.bg2, border: `1px solid ${c.border1}`, borderRadius: "10px", padding: "12px" }}>
            <div style={{ fontSize: "13px", fontWeight: "bold", color: c.accent1, marginBottom: "6px" }}>{m.mes}</div>
            <div style={{ fontSize: "12px", color: c.accent3, lineHeight: "1.5" }}>{m.accion}</div>
          </div>
        ))}
      </div>

      <SectionTitleX c={c}>CONSEJOS PARA PRINCIPIANTES</SectionTitleX>
      <StepX c={c} num={1} text="Empieza con 2-3 frutales fáciles: un limonero en maceta grande, fresas en jardinera, y una higuera enana si tienes terraza. No montes un huerto frutal de 10 árboles el primer año." why="Cada frutal tiene su ritmo. Dominar 2-3 especies te dará confianza para expandir." />
      <StepX c={c} num={2} text="La maceta MATA al frutal si es pequeña. Un frutal en maceta necesita mínimo 40-50L para árboles y 15-20L para arbustos (frambuesa, arándano). Si la maceta es pequeña, el árbol vivirá estresado y producirá poco." />
      <StepX c={c} num={3} text="El riego es la clave en maceta. En verano BCN, una maceta de 50L al sol directo se seca en 24-48h. Riego por goteo con programador o riego manual cada 1-2 días en pleno verano." />
      <StepX c={c} num={4} text="La polinización importa. Algunos frutales necesitan 2 variedades para dar fruto (arándano, manzano, cerezo, kiwi). Infórmate antes de comprar. En ciudad, los insectos polinizadores hacen maravillas." />
      <StepX c={c} num={5} text="Paciencia: un frutal no es un tomate. Un limonero tarda 2-3 años en dar fruta desde plantón. Un melocotonero, 2-3 años. Una higuera, 1-2 años. Las fresas y frambuesas dan fruta el primer año — empieza por ellas si eres impaciente." />

      <SectionTitleX c={c}>HERRAMIENTAS BÁSICAS PARA FRUTALES</SectionTitleX>
      <InfoBoxX c={c}>
        ✂️ <strong>Imprescindibles:</strong> tijeras de podar bypass (corte limpio), serrucho curvo de poda (ramas gruesas), pasta cicatrizante (para cortes &gt;2cm), pala de trasplante, tutores y rafia.<br/>
        🧪 <strong>Recomendables:</strong> pulverizador de presión (5L) para tratamientos, caldo bordelés (cobre) para hongos, aceite de neem, jabón potásico.<br/>
        📏 <strong>Útiles:</strong> medidor de pH, macetas grandes (40-60L), programador de riego, malla anti-pájaros.<br/>
        🛒 <strong>Prescindibles al principio:</strong> motosierra, herramientas eléctricas, sistemas complejos de riego.
      </InfoBoxX>

      <WarningBoxX c={c}>
        🌡️ <strong>El mayor error en frutales de terraza:</strong> comprar un árbol en vivero y dejarlo en la maceta de plástico negra de 5L que trae. Esa maceta es de TRANSPORTE. Trasplántalo en 48h a una maceta grande (40L+) o al suelo. Si no, el árbol se estrangula, no crece y muere en 1-2 años.
      </WarningBoxX>

      <SectionTitleX c={c}>PLANIFICAR UN PEQUEÑO HUERTO FRUTAL</SectionTitleX>
      <StepX c={c} num={1} text="Oriéntate al SUR. Los frutales necesitan mínimo 6h de sol directo para producir. Solo algunos (frambuesa, arándano, ciruelo) toleran semi-sombra." />
      <StepX c={c} num={2} text="Calcula espacio adulto, no tamaño de compra. Ese limonero de 60cm que compras será un árbol de 2-3m en 5 años. Plántalo donde tenga espacio para crecer." />
      <StepX c={c} num={3} text="Agrupa por necesidades de riego: cítricos y frutales de hueso (riego regular) juntos. Higuera y granado (sequía) en zona más seca. Fresas y frambuesas (riego frecuente) cerca del grifo." />
      <StepX c={c} num={4} text="Deja pasillos. Necesitas acceder a todos los árboles para podar, cosechar y tratar. Mínimo 80-100cm entre copas adultas." />
      <StepX c={c} num={5} text="En terraza, los frutales van en la zona más soleada y protegida del viento. Usa macetas con ruedas si necesitas moverlos en invierno." />
    </div>
  );
}


function COMPRA_FRUTALES() {
  const c = FRUTALES_COLORS;
  const items = [
    { item: "🍋 Plantón de cítrico (limonero, naranjo)", precio: "25-50€", donde: "Viveros locales, garden centers", nota: "Comprar en primavera. Buscar portainjerto Poncirus trifoliata (mejor para BCN). Tamaño: 1-1.5m.", categoria: "Plantas" },
    { item: "🍓 Plantones de fresa (x12-15)", precio: "8-15€", donde: "Viveros, Amazon, Leroy", nota: "Comprar en septiembre-octubre. Variedades recomendadas: 'Camarosa', 'Sabrina', 'Albion'. Para 1m².", categoria: "Plantas" },
    { item: "🫐 Planta de arándano (x2 variedades)", precio: "12-20€/ud", donde: "Viveros especializados, online", nota: "Necesitas 2 variedades distintas para polinización. 'Bluecrop' + 'Duke' buena combinación.", categoria: "Plantas" },
    { item: "🍇 Planta de frambuesa", precio: "8-15€", donde: "Viveros, garden centers", nota: "Variedades remontantes: 'Autumn Bliss', 'Heritage'. Dan 2 cosechas al año.", categoria: "Plantas" },
    { item: "🫒 Planta de mora sin espinas", precio: "10-18€", donde: "Viveros, online", nota: "Variedades: 'Thornfree', 'Loch Ness'. Vigor extremo — necesita espacio.", categoria: "Plantas" },
    { item: "🌳 Frutal de hueso a raíz desnuda", precio: "15-30€", donde: "Viveros en otoño-invierno", nota: "Melocotonero, ciruelo, cerezo. Mejor comprar en otoño que en primavera. Más baratos y mejor arranque.", categoria: "Plantas" },
    { item: "🍎 Frutal de pepita (manzano, peral)", precio: "20-40€", donde: "Viveros, garden centers", nota: "Necesitas polinizador (2 variedades). Variedades bajo frío para BCN.", categoria: "Plantas" },
    { item: "🌿 Higuera", precio: "15-30€", donde: "Viveros, esquejes (gratis)", nota: "La más fácil de propagar: un esqueje enraíza en agua en 2-3 semanas. Pide un esqueje a un vecino.", categoria: "Plantas" },
    { item: "🍇 Vid para uva de mesa", precio: "12-25€", donde: "Viveros", nota: "Variedades: 'Red Globe', 'Moscatel', 'Flame Seedless'. Necesita emparrado.", categoria: "Plantas" },
    { item: "🥝 Kiwi macho + hembra", precio: "15-25€/ud", donde: "Viveros especializados", nota: "1 macho poliniza hasta 5-8 hembras. Para terraza pequeña: 1 macho + 1 hembra mínimo.", categoria: "Plantas" },
    { item: "🍈 Granado", precio: "15-25€", donde: "Viveros", nota: "Variedad 'Wonderful'. Casi indestructible. Ideal para principiantes.", categoria: "Plantas" },
    { item: "🪴 Maceta grande 50-60L (x2-3)", precio: "15-25€/ud", donde: "Leroy, Amazon, viveros", nota: "Para cítricos y frutales grandes. Mejor plástico que terracota (retiene humedad y pesa menos).", categoria: "Macetas" },
    { item: "🪴 Maceta mediana 25-40L (x4-5)", precio: "8-15€/ud", donde: "Leroy, IKEA, garden", nota: "Para fresas, frambuesas, arándanos. Las de tela geotextil (air-pot) son excelentes para raíces.", categoria: "Macetas" },
    { item: "🪴 Jardinera alargada 60-80cm", precio: "15-30€", donde: "Leroy, garden centers", nota: "Para fresas en hilera. Caben 5-6 plantas. Con autorriego si es posible.", categoria: "Macetas" },
    { item: "🧶 Rafia o cinta de atar suave", precio: "3-6€", donde: "Cualquier bazar", nota: "Para entutorar frambuesas, vid, kiwi. Atar sin apretar (la planta engorda). Mejor cinta ancha que cordel fino.", categoria: "Tutores" },
    { item: "🎋 Cañas de bambú 2m (x10)", precio: "8-15€", donde: "Garden, Amazon", nota: "Para entutorar frambuesas, moras, tomates cherry asociados.", categoria: "Tutores" },
    { item: "🪜 Emparrado / celosía metálica", precio: "20-50€", donde: "Leroy, Amazon", nota: "Para vid y kiwi. Mínimo 1.5m ancho x 2m alto. Fijar bien — el kiwi pesa mucho con fruta.", categoria: "Estructuras" },
    { item: "🧪 Caldo bordelés (sulfato de cobre)", precio: "8-15€", donde: "Amazon, garden", nota: "Fungicida para lepra (melocotonero), mildiu (vid). Tratamiento preventivo en invierno.", categoria: "Tratamientos" },
    { item: "🧪 Azufre en polvo / mojable", precio: "5-10€", donde: "Amazon, garden", nota: "Para oídio (vid, frutales). Espolvorear o pulverizar diluido.", categoria: "Tratamientos" },
    { item: "🐞 Aceite de neem 250ml", precio: "10-15€", donde: "Amazon, herboristería", nota: "Insecticida + fungicida natural. Para pulgón, mosca blanca, araña roja.", categoria: "Tratamientos" },
    { item: "🐞 Jabón potásico 500ml", precio: "8-12€", donde: "Amazon, garden", nota: "Control de pulgón y cochinilla. Respetuoso con abejas.", categoria: "Tratamientos" },
    { item: "🕸️ Malla anti-pájaros 4x5m", precio: "10-20€", donde: "Amazon, garden", nota: "Para cerezos, higueras, frambuesas. Los pájaros detectan la fruta madura antes que tú.", categoria: "Protección" },
    { item: "🕸️ Manta térmica 2x5m", precio: "8-15€", donde: "Amazon, garden", nota: "Para proteger flores de heladas tardías en cerezo, almendro y albaricoquero.", categoria: "Protección" },
    { item: "🧪 Kit medidor pH tierra", precio: "10-20€", donde: "Amazon", nota: "Crítico para arándanos (pH 4.5-5.5). La mayoría de frutales quieren pH 6-7.", categoria: "Accesorios" },
    { item: "✂️ Tijeras de podar bypass", precio: "10-25€", donde: "Leroy, Amazon, Bahco", nota: "Invertir en buenas tijeras. Las baratas machacan la madera. Felco o Bahco son referencia.", categoria: "Herramientas" },
    { item: "🪚 Serrucho curvo de poda", precio: "15-30€", donde: "Leroy, Amazon", nota: "Para ramas >2cm. La hoja curva permite cortar en espacios estrechos. Bahco 396 es el estándar.", categoria: "Herramientas" },
    { item: "🧴 Pasta cicatrizante / mástic", precio: "5-10€", donde: "Amazon, garden", nota: "Sellar cortes de poda >2cm. Previene entrada de hongos. Alternativa natural: arcilla + cola de caballo.", categoria: "Accesorios" },
  ];
  const [filterCat, setFilterCat] = React.useState([]);
  const toggleCat = (cat) => setFilterCat(s => s.includes(cat) ? s.filter(x => x !== cat) : [...s, cat]);
  const categorias = [...new Set(items.map(i => i.categoria))];
  const filtered = filterCat.length === 0 ? items : items.filter(i => filterCat.includes(i.categoria));
  const catColor = { "Plantas": "#5e9c47", "Macetas": "#7bbd60", "Tutores": "#9ad47d", "Estructuras": "#bae0a3", "Tratamientos": "#4d7c3b", "Protección": "#7bbd60", "Accesorios": "#5e9c47", "Herramientas": "#9ad47d" };

  return (
    <div>
      <InfoBoxX c={c}>
        Lista de compra para montar un huerto frutal en terraza o jardín en Barcelona. Precios orientativos 2026. La inversión inicial para empezar con 3-4 frutales (limonero, fresas, frambuesa, higuera) + macetas + herramientas básicas es ~150-250€.
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
        🌳 <strong>Vivero de Can Borni</strong> (Collserola) — frutales mediterráneos, cítricos, asesoramiento experto.<br/>
        🌿 <strong>Vivero Tres Pins</strong> (Montjuïc) — gran variedad de frutales, plantas aromáticas.<br/>
        🏬 <strong>Leroy Merlin / Bauhaus</strong> — macetas, sustratos, herramientas. Precios competitivos.<br/>
        🛒 <strong>Amazon</strong> — tutores, mallas, tratamientos. Cómodo para accesorios.<br/>
        🌐 <strong>Planfor / Frutales Sánchez</strong> (online) — catálogo enorme de variedades, envío a domicilio.<br/>
        🌿 <strong>Mercado de la Terra</strong> (Slow Food BCN) — plantones ecológicos de variedades locales, intercambio de esquejes.
      </InfoBoxX>
    </div>
  );
}


// ============================================================
// FRESAS Y BAYAS
// ============================================================

function FRESA() {
  const c = FRUTALES_COLORS;
  return (
    <div>
      <InfoBoxX c={c}>
        <strong>Fresa / Fresón (Fragaria × ananassa)</strong> — la fruta más gratificante para principiantes. En Barcelona se planta en septiembre-noviembre y da cosecha de abril a junio. Ocupa poco espacio, crece en macetas colgantes, y el sabor de una fresa recién cogida es irreconocible comparado con las de supermercado. Ideal para terrazas y balcones.
      </InfoBoxX>

      <SectionTitleX c={c}>FICHA RÁPIDA</SectionTitleX>
      <div style={{ display: "grid", gridTemplateColumns: "1fr 1fr", gap: "10px", marginBottom: "16px" }}>
        <StatBoxX c={c} label="Dificultad" value="Muy fácil" />
        <StatBoxX c={c} label="Años a cosecha" value="6-8 meses desde plantón" />
        <StatBoxX c={c} label="Sol" value="Pleno sol (mín 6h)" />
        <StatBoxX c={c} label="Agua" value="Riego regular, no mojar hojas" />
        <StatBoxX c={c} label="Maceta posible" value="Sí — ideal en colgantes" />
        <StatBoxX c={c} label="Tamaño adulto" value="20-30cm alto, 30-40cm ancho" />
        <StatBoxX c={c} label="Polinización" value="Autofértil (insectos ayudan)" />
        <StatBoxX c={c} label="Densidad" value="12-15 plantas/m²" />
      </div>

      <SectionTitleX c={c}>🌱 Plantación</SectionTitleX>
      <StepX c={c} num={1} text="Época ideal: septiembre-noviembre. Los plantones de fresa se plantan en otoño para que desarrollen raíces durante el invierno y exploten en primavera. También se puede plantar en febrero-marzo pero la cosecha será menor." />
      <StepX c={c} num={2} text="Distancia: 25-30cm entre plantas y 35-40cm entre hileras. En macetas colgantes: 3-4 plantas por maceta de 25-30cm de diámetro. En jardinera: 5-6 plantas en hilera cada 20cm." />
      <StepX c={c} num={3} text="Plantar al nivel correcto: la corona (el punto de donde salen las hojas) debe quedar JUSTO a ras de tierra, ni enterrada (se pudre) ni fuera (se seca). Es el error más común: enterrar la corona." />
      <StepX c={c} num={4} text="Sustrato: rico en materia orgánica. Mezcla: 60% sustrato universal + 30% compost o humus de lombriz + 10% perlita. A las fresas les encanta el potasio — añadir ceniza de madera o harina de algas." />

      <SectionTitleX c={c}>🌿 Cuidados</SectionTitleX>
      <StepX c={c} num={1} text="Riego: regular y constante. La fresa tiene raíces superficiales y sufre si pasa sed. En primavera BCN, riego cada 2-3 días. En verano, cada 1-2 días. NUNCA mojar las flores ni los frutos (hongos). Riego por goteo o al pie." />
      <StepX c={c} num={2} text="Acolchado con paja: ESENCIAL. Cubrir el suelo alrededor de las plantas con una capa de 3-5cm de paja limpia. Esto evita que los frutos toquen la tierra (se pudren), mantiene la humedad, y reduce malas hierbas. La paja es el secreto de las fresas perfectas." />
      <StepX c={c} num={3} text="Fertilización: cada 3-4 semanas durante la floración y fructificación con abono rico en potasio (K). El exceso de nitrógeno da muchas hojas y pocas flores. Té de plátano (cáscaras hervidas en agua) = potasio natural gratuito." />
      <StepX c={c} num={4} text="Eliminar estolones durante la temporada de producción. Los estolones son esos tallos largos que emiten plantas hijas. Si quieres fruta, córtalos (consumen energía). Si quieres más plantas para el año siguiente, deja 1-2 estolones por planta después de la cosecha." />
      <StepX c={c} num={5} text="Renovación: las plantas de fresa pierden vigor drásticamente a partir del 3er año. Renovar cada 2-3 años con plantas nuevas o estolones enraizados. Las plantas viejas producen frutos pequeños y son más propensas a enfermedades." />

      <SectionTitleX c={c}>🪴 Maceta</SectionTitleX>
      <StepX c={c} num={1} text="La fresa es la REINA de las macetas colgantes. Una maceta colgante de 25-30cm con 3-4 plantas es productiva y decorativa. Los frutos cuelgan en el aire sin tocar el suelo = cero podredumbre." />
      <StepX c={c} num={2} text="Macetas verticales o torres de fresa: sistemas con bolsillos laterales. Muy eficientes en espacio. Caben 15-20 plantas en 0.25m² de suelo." />
      <StepX c={c} num={3} text="Volumen mínimo: 2-3 litros por planta. Las raíces de la fresa son superficiales pero necesitan espacio para expandirse." />
      <StepX c={c} num={4} text="En maceta, proteger del sol extremo de julio-agosto (poner a semi-sombra o usar maceta doble para aislar raíces). Las raíces se cuecen en maceta negra al sol de verano." />

      <SectionTitleX c={c}>🐛 Plagas</SectionTitleX>
      <StepX c={c} num={1} text="Caracoles y babosas: enemigo #1. Se comen los frutos maduros por la noche. Solución: ceniza o cáscaras de huevo trituradas alrededor, trampa de cerveza, o recogida manual nocturna con linterna." />
      <StepX c={c} num={2} text="Pulgón: en brotes tiernos y flores. Solución: jabón potásico (5ml/L) cada 5 días. O mariquitas (depredador natural de pulgón)." />
      <StepX c={c} num={3} text="Botrytis (podredumbre gris): moho gris sobre los frutos con humedad alta y poca ventilación. Prevención: acolchado para que los frutos no toquen tierra, buena circulación de aire entre plantas, no mojar flores ni frutos." />
      <StepX c={c} num={4} text="Araña roja: hojas amarillentas con telaraña fina en el envés, favorecida por calor seco. Solución: pulverizar el envés con agua frecuentemente, aceite de neem (3ml/L) si hay plaga." />
      <StepX c={c} num={5} text="Pájaros: picotean los frutos maduros. Solución: malla anti-pájaros sobre las plantas o túneles de malla. Los pájaros son rápidos detectando el rojo." />

      <SectionTitleX c={c}>✂️ Poda</SectionTitleX>
      <StepX c={c} num={1} text="Poda mínima. Quitar hojas viejas, amarillas o enfermas cada 2-3 semanas para mantener la planta ventilada y prevenir hongos." />
      <StepX c={c} num={2} text="Cortar estolones durante la temporada de producción (primavera-verano). Después de la cosecha, dejar 1-2 estolones si quieres plantas nuevas para el año siguiente." />
      <StepX c={c} num={3} text="Al final de la temporada (junio-julio), cortar todas las hojas a 3-5cm de la corona. Esto estimula un nuevo crecimiento sano y reduce plagas para la siguiente temporada." />

      <SectionTitleX c={c}>🧺 Cosecha</SectionTitleX>
      <StepX c={c} num={1} text="Época: abril a junio en BCN. La cosecha principal es mayo. Algunas variedades (día neutro) pueden dar fruto hasta octubre." />
      <StepX c={c} num={2} text="La fresa está lista cuando está COMPLETAMENTE roja (sin puntas blancas o verdes). Cosechar por la mañana temprano para mejor sabor y conservación. Cortar el pedúnculo con tijeras, NO tirar del fruto." />
      <StepX c={c} num={3} text="Conservación: lavar JUSTO antes de comer, nunca antes de guardar (la humedad acelera la podredumbre). Nevera: 2-3 días en tupper con papel de cocina. NO apilar (se aplastan). Congelar: lavar, quitar el pedúnculo, congelar en bandeja separadas, luego a bolsa zip." />

      <SectionTitleX c={c}>🍽️ Variedades para BCN</SectionTitleX>
      <StepX c={c} num={1} text="'Camarosa' — la más cultivada en España. Frutos grandes, rojo intenso, muy productiva. La más fácil para empezar. Planta vigorosa y resistente." />
      <StepX c={c} num={2} text="'Sabrina' — fruto dulce, aromático, piel brillante. Muy buena adaptación al clima mediterráneo. Resistente a enfermedades foliares." />
      <StepX c={c} num={3} text="'Fortuna' — precoz (cosecha en abril). Frutos grandes y firmes. Buena para clima cálido." />
      <StepX c={c} num={4} text="'Albion' (día neutro) — produce de mayo a octubre. Frutos medianos, sabor excelente. Ideal si quieres fresas todo el verano. Algo menos productiva que las de día corto." />
      <StepX c={c} num={5} text="'Mara des Bois' — fresa de bosque mejorada. Frutos pequeños, sabor y aroma intensos a fresa silvestre. Productividad más baja pero calidad gourmet." />
    </div>
  );
}


function FRAMBUESA() {
  const c = FRUTALES_COLORS;
  return (
    <div>
      <InfoBoxX c={c}>
        <strong>Frambuesa (Rubus idaeus)</strong> — la baya más productiva en clima mediterráneo. Un arbusto que con buen manejo da 2-4kg de fruta por planta. Raíz invasiva — ojo en jardín pequeño. Necesita entutorado con alambres. Variedades remontantes (2 cosechas/año) son ideales para alargar la temporada.
      </InfoBoxX>

      <SectionTitleX c={c}>FICHA RÁPIDA</SectionTitleX>
      <div style={{ display: "grid", gridTemplateColumns: "1fr 1fr", gap: "10px", marginBottom: "16px" }}>
        <StatBoxX c={c} label="Dificultad" value="Fácil" />
        <StatBoxX c={c} label="Años a cosecha" value="1 año (primavera siguiente)" />
        <StatBoxX c={c} label="Sol" value="Sol o semi-sombra" />
        <StatBoxX c={c} label="Agua" value="Riego regular, mantener húmedo" />
        <StatBoxX c={c} label="Maceta posible" value="Sí, mínimo 25-30L" />
        <StatBoxX c={c} label="Tamaño adulto" value="1.5-2m alto, colonia expansiva" />
        <StatBoxX c={c} label="Polinización" value="Autofértil" />
        <StatBoxX c={c} label="Vida útil" value="10-15 años la colonia" />
      </div>

      <SectionTitleX c={c}>🌱 Plantación</SectionTitleX>
      <StepX c={c} num={1} text="Época: otoño (octubre-noviembre, a raíz desnuda) o primavera (marzo-abril, en contenedor). La plantación de otoño es mejor: la planta desarrolla raíces durante el invierno y arranca con fuerza en primavera." />
      <StepX c={c} num={2} text="Distancia: 40-50cm entre plantas y 1.5-2m entre hileras. Las frambuesas se expanden por rizomas — en 2-3 años una planta se convierte en una colonia." />
      <StepX c={c} num={3} text="Sustrato: rico en materia orgánica, ligeramente ácido (pH 6-6.5), bien drenado. Añadir compost o estiércol bien descompuesto al hoyo de plantación." />
      <StepX c={c} num={4} text="Contención de raíces: la frambuesa es invasiva. En jardín, instalar barrera subterránea de plástico o chapa a 40-50cm de profundidad alrededor de la zona de cultivo. O plantar en maceta grande enterrada. Sin contención, tendrás frambuesas por todo el jardín." />

      <SectionTitleX c={c}>🌿 Cuidados</SectionTitleX>
      <StepX c={c} num={1} text="Entutorado con sistema de alambres horizontales: clavar postes cada 2-3m y tender 2-3 alambres horizontales a 60, 100 y 150cm de altura. Las cañas crecen entre los alambres y se atan suavemente. Esto mantiene la planta vertical, ventilada y facilita la cosecha." />
      <StepX c={c} num={2} text="Riego: regular, mantener el suelo húmedo pero no encharcado. La frambuesa tiene raíces superficiales y sufre con la sequía. En verano BCN, riego cada 2-3 días. Acolchar con paja o corteza para retener humedad." />
      <StepX c={c} num={3} text="Fertilización: en primavera, abono rico en nitrógeno para estimular nuevas cañas. Durante la fructificación, abono rico en potasio cada 3-4 semanas. Añadir compost en superficie en otoño." />
      <StepX c={c} num={4} text="Las frambuesas remontantes producen fruta en las cañas del año (verano-otoño) y también en las cañas del año anterior (principios de verano). Las no remontantes solo fructifican en cañas del año anterior (junio-julio)." />

      <SectionTitleX c={c}>🪴 Maceta</SectionTitleX>
      <StepX c={c} num={1} text="Mínimo 25-30 litros por planta. Maceta profunda (40cm+). La frambuesa desarrolla raíces profundas y necesita volumen." />
      <StepX c={c} num={2} text="Sustrato para maceta: 50% sustrato universal + 30% compost + 20% perlita. Mantener pH ligeramente ácido (6-6.5)." />
      <StepX c={c} num={3} text="En maceta el entutorado es más simple: 3-4 cañas de bambú clavadas alrededor y atar las cañas de frambuesa a ellas formando un manojo abierto." />
      <StepX c={c} num={4} text="Renovar sustrato cada 2-3 años. La frambuesa agota los nutrientes rápidamente en maceta." />

      <SectionTitleX c={c}>🐛 Plagas</SectionTitleX>
      <StepX c={c} num={1} text="Pulgón: en brotes tiernos. Solución: jabón potásico cada 5 días. Suelen aparecer en primavera con el crecimiento nuevo." />
      <StepX c={c} num={2} text="Araña roja: hojas amarillentas con telaraña en el envés, favorecida por sequedad. Solución: aumentar humedad ambiental pulverizando agua, aceite de neem si hay plaga." />
      <StepX c={c} num={3} text="Drosophila suzukii (mosca de la fruta): perfora frutos maduros y pone huevos dentro. Plaga emergente en España. Solución: trampas con vinagre de manzana, cosechar frutos puntualmente, no dejar fruta sobremadura en la planta." />
      <StepX c={c} num={4} text="Podredumbre de raíz (Phytophthora): hojas mustias y amarillas, muerte de cañas. Favorecido por encharcamiento. Prevención: buen drenaje, no regar en exceso." />
      <StepX c={c} num={5} text="Pájaros: adoran las frambuesas. Solución: malla anti-pájaros o túneles de malla durante la fructificación." />

      <SectionTitleX c={c}>✂️ Poda</SectionTitleX>
      <StepX c={c} num={1} text="Regla de oro: las cañas que han fructificado se cortan A RAS DE SUELO después de la cosecha. Una caña de frambuesa fructifica una vez y luego muere. Si no la cortas, se seca y ocupa espacio." />
      <StepX c={c} num={2} text="Variedades no remontantes (1 cosecha en junio-julio): después de la cosecha, cortar TODAS las cañas que han dado fruto. Dejar solo las cañas nuevas del año (verdes y vigorosas), que fructificarán el año siguiente. En invierno, reducir las cañas seleccionadas a 1.5-1.8m de altura." />
      <StepX c={c} num={3} text="Variedades remontantes (2 cosechas): opción fácil — en invierno, cortar TODAS las cañas a ras de suelo. En primavera saldrán cañas nuevas que darán una sola cosecha grande en agosto-septiembre. Opción doble cosecha — podar solo las puntas de las cañas que ya dieron fruto en otoño (esas mismas cañas darán fruto en la parte baja en junio)." />
      <StepX c={c} num={4} text="Aclareo de cañas: mantener 8-12 cañas vigorosas por metro lineal. Eliminar las más débiles, torcidas o enfermas. Más cañas = frutos más pequeños." />

      <SectionTitleX c={c}>🧺 Cosecha</SectionTitleX>
      <StepX c={c} num={1} text="Época: variedades no remontantes en junio-julio. Variedades remontantes en junio (cañas del año anterior) y agosto-octubre (cañas del año)." />
      <StepX c={c} num={2} text="La frambuesa está lista cuando se desprende del receptáculo blanco central con un tirón SUAVE. Si hay que forzar, no está madura. El color debe ser uniforme. Cosechar cada 2-3 días en plena temporada." />
      <StepX c={c} num={3} text="Manipular con cuidado extremo: la frambuesa es MUY delicada. Cosechar en recipientes pequeños y poco profundos (máximo 2-3 capas o se aplastan). No lavar hasta justo antes de consumir." />
      <StepX c={c} num={4} text="Conservación: nevera 2-3 días sin lavar. Congelar: extender en bandeja, congelar sueltas, luego pasar a bolsa zip. Duran 8-12 meses congeladas. Perfectas para batidos, mermeladas y repostería." />

      <SectionTitleX c={c}>🍽️ Variedades para BCN</SectionTitleX>
      <StepX c={c} num={1} text="'Autumn Bliss' (remontante) — la más fiable. Frutos rojos, dulces y aromáticos. Cosecha principal en agosto-septiembre. Muy resistente y vigorosa. La mejor para empezar." />
      <StepX c={c} num={2} text="'Heritage' (remontante) — fruto firme, dulce, color rojo intenso. Cosecha de agosto a octubre. Excelente para clima mediterráneo. Aguanta bien el calor." />
      <StepX c={c} num={3} text="'Glen Ample' (no remontante) — frutos grandes, excelente sabor. Cosecha en junio-julio. Muy productiva, cañas sin espinas. Necesita entutorado robusto." />
      <StepX c={c} num={4} text="'Polka' (remontante) — frutos muy grandes y firmes, excelente sabor. Cosecha desde julio. Buena resistencia a enfermedades." />
    </div>
  );
}


function ARANDANO() {
  const c = FRUTALES_COLORS;
  return (
    <div>
      <InfoBoxX c={c}>
        <strong>Arándano (Vaccinium corymbosum)</strong> — el frutal más exigente en cuanto a suelo: NECESITA pH ácido (4.5-5.5) sí o sí. En Barcelona, donde el agua del grifo es calcárea y el suelo tiende a alcalino, la solución es cultivar en maceta grande con sustrato especial (brezo + turba) y regar con agua de lluvia o acidulada. Con estos cuidados, es un arbusto bonito, longevo y muy productivo.
      </InfoBoxX>

      <SectionTitleX c={c}>FICHA RÁPIDA</SectionTitleX>
      <div style={{ display: "grid", gridTemplateColumns: "1fr 1fr", gap: "10px", marginBottom: "16px" }}>
        <StatBoxX c={c} label="Dificultad" value="Media (suelo ácido crítico)" />
        <StatBoxX c={c} label="Años a cosecha" value="2-3 años" />
        <StatBoxX c={c} label="Sol" value="Pleno sol o semi-sombra" />
        <StatBoxX c={c} label="Agua" value="Riego frecuente, SIN CAL" />
        <StatBoxX c={c} label="Maceta posible" value="Sí — RECOMENDADA en BCN" />
        <StatBoxX c={c} label="Tamaño adulto" value="1.5-2m alto, 1-1.5m ancho" />
        <StatBoxX c={c} label="Polinización" value="Necesita 2 variedades" />
        <StatBoxX c={c} label="pH suelo" value="4.5-5.5 (MUY ácido)" />
      </div>

      <SectionTitleX c={c}>🌱 Plantación</SectionTitleX>
      <StepX c={c} num={1} text="Época: otoño (octubre-noviembre) o primavera (marzo). En BCN, en maceta se puede plantar casi todo el año excepto pleno verano." />
      <StepX c={c} num={2} text="En BCN, cultivar en MACETA (mínimo 40-50L). La tierra de jardín de Barcelona es calcárea (pH 7.5-8.5) — el arándano moriría en 6 meses. En maceta controlas el medio." />
      <StepX c={c} num={3} text="Sustrato ácido específico: 50% sustrato de brezo + 30% turba rubia + 20% perlita o corteza de pino triturada. NO usar sustrato universal (pH 6-7, demasiado alto). NO usar compost (alcalino). En garden centers venden 'sustrato para acidófilas' — es lo correcto." />
      <StepX c={c} num={4} text="PLANTAR 2 VARIEDADES DISTINTAS. El arándano necesita polinización cruzada para dar fruto. Con una sola planta, la producción es mínima o nula. Buenos cruces: 'Bluecrop' + 'Duke', 'Bluecrop' + 'Patriot', 'Legacy' + 'Misty'." />

      <SectionTitleX c={c}>🌿 Cuidados</SectionTitleX>
      <StepX c={c} num={1} text="RIEGO: este es el factor crítico. El agua del grifo en BCN es muy calcárea (pH 8+, mucha cal). Si riegas con agua del grifo, el pH del sustrato subirá y el arándano se volverá clorótico (hojas amarillas). Soluciones: (A) agua de lluvia recogida — ideal y gratis, (B) agua acidulada: añadir vinagre blanco (10ml por litro de agua) o ácido cítrico (1g por litro), (C) agua de ósmosis o destilada." />
      <StepX c={c} num={2} text="Riego frecuente: el arándano tiene raíces superficiales y finas, muy sensibles a la sequía. En verano BCN, regar cada 1-2 días. Mantener el sustrato SIEMPRE húmedo (no empapado). Acolchar con corteza de pino o turba." />
      <StepX c={c} num={3} text="Fertilización: usar abono ESPECÍFICO para acidófilas (hortensias, azaleas, rododendros). NUNCA usar abono universal (contiene calcio que sube el pH). Fertilizar en marzo, mayo y julio. La planta te avisa: hojas amarillas con nervios verdes = clorosis férrica por pH alto." />
      <StepX c={c} num={4} text="Sol: en BCN, mejor pleno sol (produce más fruta) pero las hojas pueden quemarse en julio-agosto en maceta expuesta. Si ves bordes marrones en hojas, mover a semi-sombra en las horas centrales del verano." />

      <SectionTitleX c={c}>🪴 Maceta</SectionTitleX>
      <StepX c={c} num={1} text="Tamaño mínimo: 40-50 litros por planta. El arándano es un arbusto longevo que puede vivir 20-30 años — necesita espacio radicular. Las macetas de tela geotextil (air-pot) de 50L son excelentes." />
      <StepX c={c} num={2} text="Trasplante: cada 3-4 años, renovar parcialmente el sustrato (quitar el superior y añadir sustrato ácido nuevo). El sustrato se compacta y pierde acidez con el tiempo." />
      <StepX c={c} num={3} text="En maceta es más fácil controlar el pH que en tierra. Si un día ves las hojas amarillas, corriges el agua de riego y en 2-3 semanas la planta se recupera. En tierra es muy difícil bajar el pH." />

      <SectionTitleX c={c}>🐛 Plagas</SectionTitleX>
      <StepX c={c} num={1} text="Pulgón: ocasional en brotes tiernos. Jabón potásico soluciona. No es plaga principal del arándano." />
      <StepX c={c} num={2} text="Pájaros: ENEMIGO #1. Los pájaros adoran los arándanos y se comen la cosecha entera en 2-3 días. Solución: malla anti-pájaros sobre la planta durante la fructificación. Instalarla cuando los frutos empiezan a cambiar de verde a azul." />
      <StepX c={c} num={3} text="Clorosis férrica: NO es plaga, es deficiencia de hierro por pH del suelo demasiado alto. Síntoma: hojas amarillas con nervios verdes. Solución: bajar el pH del agua de riego y añadir quelato de hierro al sustrato." />
      <StepX c={c} num={4} text="Botrytis: moho gris en flores y frutos con humedad alta. Prevención: buena ventilación entre ramas, poda de aclareo, no mojar flores." />

      <SectionTitleX c={c}>✂️ Poda</SectionTitleX>
      <StepX c={c} num={1} text="Poda de formación (años 1-3): eliminar ramas débiles o mal orientadas. Dejar 4-6 ramas principales bien distribuidas. Quitar todas las flores los primeros 2 años para que la planta dedique energía a crecer." />
      <StepX c={c} num={2} text="Poda de producción (año 4 en adelante): cada invierno, cortar ramas viejas (más de 4-5 años, madera gris y agrietada) a ras de suelo para estimular nuevo crecimiento desde la base. El arándano fructifica mejor en ramas de 2-4 años." />
      <StepX c={c} num={3} text="Aclareo: mantener 6-8 ramas principales de diferentes edades. La planta debe estar abierta para que entre luz y aire al centro." />
      <StepX c={c} num={4} text="Cortar ramitas finas y débiles que no van a producir fruta de calidad. Mejor pocos arándanos grandes que muchos pequeños." />

      <SectionTitleX c={c}>🧺 Cosecha</SectionTitleX>
      <StepX c={c} num={1} text="Época: junio a agosto en BCN, según variedad. 'Duke' y 'Patriot' son más tempranas (junio-julio), 'Bluecrop' y 'Legacy' más tardías (julio-agosto)." />
      <StepX c={c} num={2} text="El arándano está listo cuando es COMPLETAMENTE azul (sin tonos rojizos o verdes). Esperar 3-5 días después de que se vuelva azul — en ese tiempo gana dulzor. El fruto debe desprenderse con un giro suave." />
      <StepX c={c} num={3} text="Cosechar cada 3-5 días. En una misma rama, los arándanos maduran escalonadamente. Un arbusto adulto produce 3-6kg por temporada." />
      <StepX c={c} num={4} text="Conservación: nevera 7-10 días sin lavar. Congelar: extender en bandeja, congelar sueltos, luego a bolsa zip. Perfectos congelados. NO lavar antes de congelar (se revientan) — lavar al descongelar." />

      <SectionTitleX c={c}>🍽️ Variedades para BCN</SectionTitleX>
      <StepX c={c} num={1} text="'Bluecrop' — la más popular del mundo por algo. Productiva, frutos grandes y firmes, excelente sabor. Muy resistente. Ideal como base de tu colección." />
      <StepX c={c} num={2} text="'Duke' — precoz (junio), frutos firmes y dulces. Buena para clima suave. Florece tarde = menos riesgo de heladas. Arbusto compacto." />
      <StepX c={c} num={3} text="'Legacy' — variedad de bajo frío, ideal para climas mediterráneos. Frutos muy dulces, cosecha escalonada. Necesita polinizador como 'Misty'." />
      <StepX c={c} num={4} text="'Misty' — compacta (1-1.2m), ideal para maceta. Frutos grandes, azul claro. Excelente polinizador para 'Legacy' y otras. Muy ornamental: follaje rojizo en otoño." />
    </div>
  );
}

function MORA() {
  const c = FRUTALES_COLORS;
  return (
    <div>
      <InfoBoxX c={c}>
        <strong>Mora / Zarzamora (Rubus fruticosus)</strong> — la baya más vigorosa. Una sola planta puede cubrir 3-5m² en 2 años. Poda anual obligatoria para contenerla. Frutos grandes, jugosos, muy productiva. Las variedades sin espinas ('Thornfree', 'Loch Ness') han hecho que la mora pase de ser una maleza pinchosa a un frutal de jardín muy agradecido.
      </InfoBoxX>

      <SectionTitleX c={c}>FICHA RÁPIDA</SectionTitleX>
      <div style={{ display: "grid", gridTemplateColumns: "1fr 1fr", gap: "10px", marginBottom: "16px" }}>
        <StatBoxX c={c} label="Dificultad" value="Muy fácil (vigor extremo)" />
        <StatBoxX c={c} label="Años a cosecha" value="1-2 años" />
        <StatBoxX c={c} label="Sol" value="Pleno sol o semi-sombra" />
        <StatBoxX c={c} label="Agua" value="Riego regular" />
        <StatBoxX c={c} label="Maceta posible" value="Sí, mínimo 40L" />
        <StatBoxX c={c} label="Tamaño adulto" value="3-5m de largo (guiada)" />
        <StatBoxX c={c} label="Polinización" value="Autofértil" />
        <StatBoxX c={c} label="Vida útil" value="15-20 años" />
      </div>

      <SectionTitleX c={c}>🌱 Plantación</SectionTitleX>
      <StepX c={c} num={1} text="Época: otoño (octubre-noviembre) o primavera. Como todas las bayas, la plantación de otoño es mejor." />
      <StepX c={c} num={2} text="Distancia: si plantas más de una, separar 2-3m. Una sola planta es más que suficiente para una familia. La mora es EXTREMADAMENTE vigorosa." />
      <StepX c={c} num={3} text="Sustrato: rico en materia orgánica, bien drenado. La mora no es exigente en pH (tolera 5.5-7.5) pero agradece suelo fértil. Añadir compost al hoyo de plantación." />
      <StepX c={c} num={4} text="SIEMPRE comprar variedades SIN ESPINAS. Las moras silvestres tienen espinas brutales que complican la poda y la cosecha. Las variedades modernas sin espinas son igual de productivas y mucho más manejables." />

      <SectionTitleX c={c}>🌿 Cuidados</SectionTitleX>
      <StepX c={c} num={1} text="Entutorado OBLIGATORIO: la mora es una planta sarmentosa (cañas largas y flexibles). Sin soporte se convierte en una maraña impenetrable. Sistema: postes cada 2-3m con 3 alambres horizontales a 60, 120 y 180cm. Guiar las cañas a lo largo de los alambres y atar." />
      <StepX c={c} num={2} text="Riego: regular, mantener el suelo húmedo. En verano BCN, riego profundo cada 2-3 días. La mora tolera algo de sequía pero los frutos serán más pequeños." />
      <StepX c={c} num={3} text="Fertilización: en primavera, abono rico en nitrógeno para el crecimiento de nuevas cañas. En verano (durante la fructificación), cambiar a abono rico en potasio. Añadir compost en otoño." />
      <StepX c={c} num={4} text="Acolchado con paja o corteza para retener humedad y evitar malas hierbas. La mora compite mal con las hierbas los primeros años." />
      <StepX c={c} num={5} text="Contención: la mora emite hijuelos (nuevos brotes desde la raíz) a distancia. Si no quieres que invada todo, arranca los hijuelos que salgan fuera del área asignada. O instala barrera subterránea como con la frambuesa." />

      <SectionTitleX c={c}>🪴 Maceta</SectionTitleX>
      <StepX c={c} num={1} text="Mínimo 40 litros. La mora desarrolla un sistema radicular extenso. Una maceta de 50-60L es ideal." />
      <StepX c={c} num={2} text="En maceta, guiar las cañas en espiral alrededor de 3-4 tutores verticales (tipo obelisco) o contra una pared con alambres horizontales." />
      <StepX c={c} num={3} text="En maceta el vigor se contiene algo, lo cual es BUENO. Una mora en maceta de 50L produce 2-4kg de fruta, más manejable que en tierra." />
      <StepX c={c} num={4} text="Renovar sustrato cada 2-3 años. Fertilizar más a menudo que en tierra (cada 3-4 semanas en temporada)." />

      <SectionTitleX c={c}>🐛 Plagas</SectionTitleX>
      <StepX c={c} num={1} text="Drosophila suzukii: igual que en frambuesa. Mosca de la fruta que ataca frutos maduros. Solución: trampas, cosecha puntual, no dejar fruta pasada." />
      <StepX c={c} num={2} text="Araña roja: en veranos secos. Solución: pulverizar el envés con agua regularmente, aceite de neem si hay plaga." />
      <StepX c={c} num={3} text="Oídio: polvo blanco en hojas. Más común en moras que en frambuesas. Prevención: buena ventilación con la poda y el entutorado." />
      <StepX c={c} num={4} text="Pájaros: adoran las moras. Malla durante la fructificación si ves que se las comen." />

      <SectionTitleX c={c}>✂️ Poda</SectionTitleX>
      <StepX c={c} num={1} text="Regla de oro (igual que frambuesa): las cañas que han fructificado se cortan A RAS DE SUELO. Una caña de mora fructifica una vez y muere. Cortar inmediatamente después de la cosecha para dejar espacio a las cañas nuevas." />
      <StepX c={c} num={2} text="Conducción: guiar las cañas nuevas del año (verdes y vigorosas) horizontalmente a lo largo de los alambres. Así se diferencian claramente de las viejas y facilitan la cosecha." />
      <StepX c={c} num={3} text="En invierno: seleccionar 6-8 cañas vigorosas por planta, eliminar el resto. Acortar las cañas seleccionadas a 2.5-3m de largo. Atar definitivamente a los alambres." />
      <StepX c={c} num={4} text="En verano: despuntar los brotes laterales de las cañas principales a 30-40cm. Esto estimula más ramas fructíferas y frutos más grandes." />

      <SectionTitleX c={c}>🧺 Cosecha</SectionTitleX>
      <StepX c={c} num={1} text="Época: julio a septiembre en BCN. La cosecha principal es agosto. Las moras maduran escalonadamente durante 4-6 semanas." />
      <StepX c={c} num={2} text="La mora está lista cuando es COMPLETAMENTE negra y se desprende con facilidad. Una mora roja o púrpura oscuro aún está ácida — esperar a negro intenso. Cosechar cada 2-3 días." />
      <StepX c={c} num={3} text="Cosechar con cuidado: las moras maduras son muy delicadas. Recipientes poco profundos, máximo 2-3 capas. Una planta adulta produce 5-10kg por temporada." />
      <StepX c={c} num={4} text="Conservación: nevera 2-3 días sin lavar. Congelar como las frambuesas: bandeja → sueltas → bolsa zip. Perfectas para mermelada, batidos y repostería." />

      <SectionTitleX c={c}>🍽️ Variedades para BCN</SectionTitleX>
      <StepX c={c} num={1} text="'Thornfree' — la variedad sin espinas más popular y probada. Frutos grandes, negros, sabor dulce. Muy productiva. Vigor extremo. La más fácil." />
      <StepX c={c} num={2} text="'Loch Ness' — frutos enormes, muy dulces y aromáticos. Cosecha desde finales de julio. Algo menos vigorosa que Thornfree (bueno para jardín pequeño). Excelente sabor." />
      <StepX c={c} num={3} text="'Triple Crown' — frutos muy grandes y dulces, sin espinas. Cosecha en agosto. Muy productiva y resistente a enfermedades." />
      <StepX c={c} num={4} text="'Black Satin' — frutos grandes, brillantes, sin espinas. Muy vigorosa y productiva. Buena resistencia al calor." />
    </div>
  );
}


// ============================================================
// CÍTRICOS
// ============================================================

function LIMONERO() {
  const c = FRUTALES_COLORS;
  return (
    <div>
      <InfoBoxX c={c}>
        <strong>Limonero (Citrus limon)</strong> — el cítrico rey. Árbol perenne que en clima mediterráneo da fruta TODO EL AÑO si eliges variedad 4 estaciones. En Barcelona crece perfectamente en maceta grande (40L+) en terraza soleada. Flores con aroma a azahar en primavera y otoño. El limón de tu propio árbol sabe completamente distinto al de supermercado.
      </InfoBoxX>

      <SectionTitleX c={c}>FICHA RÁPIDA</SectionTitleX>
      <div style={{ display: "grid", gridTemplateColumns: "1fr 1fr", gap: "10px", marginBottom: "16px" }}>
        <StatBoxX c={c} label="Dificultad" value="Fácil en BCN" />
        <StatBoxX c={c} label="Años a cosecha" value="2-3 años desde plantón" />
        <StatBoxX c={c} label="Sol" value="Pleno sol, protegido del viento" />
        <StatBoxX c={c} label="Agua" value="Riego profundo semanal (verano)" />
        <StatBoxX c={c} label="Maceta posible" value="Sí, mínimo 40-50L" />
        <StatBoxX c={c} label="Tamaño adulto" value="2-4m (en maceta 2-3m)" />
        <StatBoxX c={c} label="Polinización" value="Autofértil" />
        <StatBoxX c={c} label="Resistencia frío" value="Hasta -3°C, proteger &lt;0°C" />
      </div>

      <SectionTitleX c={c}>🌱 Plantación</SectionTitleX>
      <StepX c={c} num={1} text="Época: primavera (marzo-mayo) es ideal. Los cítricos son sensibles al frío y plantar en primavera les da toda la temporada cálida para establecerse." />
      <StepX c={c} num={2} text="Ubicación: pleno sol, orientación SUR, protegido del viento del norte (la tramontana). En Barcelona, una terraza orientada al sur es perfecta. Si hay viento fuerte, poner una barrera (seto, celosía, malla cortavientos)." />
      <StepX c={c} num={3} text="Sustrato: bien drenado, ligeramente ácido a neutro (pH 6-7). Mezcla: 50% sustrato universal + 30% tierra de jardín (si es buena) + 20% arena de río o perlita. El limonero ODIA el encharcamiento — el drenaje es crítico." />
      <StepX c={c} num={4} text="Plantar al MISMO nivel que venía en la maceta del vivero. NO enterrar el cuello (la zona donde el tronco se une a las raíces). Enterrar el cuello = asfixia y pudrición del árbol." />

      <SectionTitleX c={c}>🌿 Cuidados</SectionTitleX>
      <StepX c={c} num={1} text="Riego: en verano BCN, riego profundo 1-2 veces por semana (en maceta, cada 2-3 días). En invierno, reducir mucho (cada 15-20 días si no llueve). Regla práctica: dejar secar los primeros 3-5cm de sustrato entre riegos. El limonero tolera mejor la sequía que el encharcamiento." />
      <StepX c={c} num={2} text="Fertilización: los cítricos son MUY golosos. Usar abono específico para cítricos (NPK con micronutrientes: hierro, zinc, manganeso). Fertilizar cada 6-8 semanas de marzo a octubre. NO fertilizar en invierno (noviembre-febrero)." />
      <StepX c={c} num={3} text="Deficiencia de hierro (clorosis férrica): hojas nuevas amarillas con nervios verdes. Muy común en BCN por el agua calcárea. Solución: quelato de hierro en el riego (siguiendo dosis del envase)." />
      <StepX c={c} num={4} text="Acolchado: cubrir la base con corteza de pino o compost (5-8cm). Mantiene humedad, protege raíces del calor y frío, aporta nutrientes lentamente. NO pegar el acolchado al tronco (pudrición)." />

      <SectionTitleX c={c}>🪴 Maceta</SectionTitleX>
      <StepX c={c} num={1} text="Mínimo 40 litros. Ideal 50-60L. El limonero es un árbol — necesita volumen de raíces para producir fruta. Una maceta de 40L limita el árbol a unos 2m de altura. Una de 80-100L permite 3-4m." />
      <StepX c={c} num={2} text="Material: plástico (mejor que terracota para cítricos — retiene más humedad y aísla mejor las raíces). Las macetas de tela geotextil (air-pot) son excelentes: airean las raíces y evitan el espiralado." />
      <StepX c={c} num={3} text="Plato bajo la maceta en verano (mantiene reserva de agua para los días más calurosos). En invierno, quitar el plato para evitar encharcamiento." />
      <StepX c={c} num={4} text="Trasplante: cada 2-3 años a maceta ligeramente mayor. Cuando el árbol ha alcanzado el tamaño deseado, renovar solo los primeros 10-15cm de sustrato cada primavera." />
      <StepX c={c} num={5} text="Protección invernal en maceta: las raíces en maceta son más sensibles al frío que en tierra. Si bajan temperaturas de 0°C, envolver la maceta con plástico de burbujas o tela de arpillera." />

      <SectionTitleX c={c}>🐛 Plagas</SectionTitleX>
      <StepX c={c} num={1} text="Cochinilla (algodonosa y caparazón): escudos blancos o marrones en ramas y hojas. Chupan savia y segregan melaza que atrae negrilla. Solución: aceite de neem (5ml/L) + jabón potásico, pulverizar bien. En infestación fuerte, limpiar con cepillo y alcohol." />
      <StepX c={c} num={2} text="Pulgón: en brotes tiernos, especialmente en primavera. Atraídos por el nitrógeno. Solución: jabón potásico cada 5-7 días. Las mariquitas y crisopas son excelentes depredadores naturales." />
      <StepX c={c} num={3} text="Mosca blanca: pequeñas moscas blancas en el envés de las hojas. Solución: trampas cromáticas amarillas + aceite de neem." />
      <StepX c={c} num={4} text="Minador de los cítricos (Phyllocnistis citrella): galerías transparentes en hojas nuevas. Daño estético, rara vez grave. Solución: podar y destruir hojas afectadas, aceite de neem en brotes nuevos." />
      <StepX c={c} num={5} text="Negrilla (fumagina): polvo negro sobre hojas. NO es una enfermedad directa — crece sobre la melaza que segregan pulgones y cochinillas. Solución: eliminar primero los insectos que producen la melaza. Luego lavar las hojas con agua jabonosa." />

      <SectionTitleX c={c}>✂️ Poda</SectionTitleX>
      <StepX c={c} num={1} text="Poda ligera. Los cítricos NO necesitan poda intensa como los frutales de hueso. Podar solo para: eliminar ramas secas o enfermas, quitar chupones (brotes verticales muy vigorosos desde el interior), aclarar el centro para que entre luz y aire." />
      <StepX c={c} num={2} text="Época: finales de invierno (febrero) o después de la cosecha principal. NUNCA podar en otoño — los cortes no cicatrizan bien antes del frío." />
      <StepX c={c} num={3} text="Los limoneros tienden a crecer desgarbados y con ramas largas colgantes. Acortar las ramas excesivamente largas para mantener forma compacta, especialmente en maceta." />
      <StepX c={c} num={4} text="Sellar cortes &gt;2cm con pasta cicatrizante o mástic. Los cítricos son sensibles a hongos de madera que entran por cortes grandes." />

      <SectionTitleX c={c}>🧺 Cosecha</SectionTitleX>
      <StepX c={c} num={1} text="El limonero 4 estaciones da fruta escalonada todo el año. La cosecha principal es otoño-invierno (octubre-febrero) pero siempre hay limones en diferentes estados." />
      <StepX c={c} num={2} text="El limón está listo cuando tiene color amarillo uniforme y cede ligeramente al apretar. Un limón verde NO madurará fuera del árbol (no es climatérico). Cortar con tijeras dejando 1-2cm de pedúnculo. NO arrancar." />
      <StepX c={c} num={3} text="Los limones aguantan en el árbol semanas o incluso meses después de madurar. Esto es una VENTAJA: puedes cosechar según necesites, no todos a la vez. Con el tiempo, la piel se vuelve más gruesa y la pulpa pierde algo de jugo." />
      <StepX c={c} num={4} text="Conservación: a temperatura ambiente, 1-2 semanas. En nevera, 3-4 semanas. Para zumo: exprimir y congelar en cubiteras (cubitos de limón siempre a mano). La ralladura se puede congelar también." />

      <SectionTitleX c={c}>🍽️ Variedades para BCN</SectionTitleX>
      <StepX c={c} num={1} text="'Limonero 4 estaciones' (Eureka) — la mejor para cosecha continua. Frutos durante todo el año, con picos en otoño y primavera. Árbol vigoroso, pocas espinas. El estándar para huerto familiar." />
      <StepX c={c} num={2} text="'Lunero' — flores coincidiendo con luna nueva, frutos todo el año. Muy similar al 4 estaciones. Muy productivo y adaptado al mediterráneo." />
      <StepX c={c} num={3} text="'Verna' — variedad española tradicional. Cosecha principal en verano (junio-agosto). Frutos grandes, mucho zumo, pocas semillas. Árbol muy vigoroso." />
      <StepX c={c} num={4} text="'Meyer' — limón dulce, cruce de limón y mandarina. Frutos redondos, jugosos, menos ácidos. Ideal para cócteles y postres. Arbusto más compacto (1.5-2m), perfecto para maceta pequeña." />
    </div>
  );
}

function NARANJO() {
  const c = FRUTALES_COLORS;
  return (
    <div>
      <InfoBoxX c={c}>
        <strong>Naranjo (Citrus sinensis)</strong> — similar al limonero pero más resistente al frío (hasta -5°C) y con ciclo de cosecha más concentrado. En Barcelona es un árbol excelente para terraza grande o jardín. Buscar portainjerto Poncirus trifoliata para mejor adaptación a clima mediterráneo. Las naranjas de tu árbol tienen un dulzor y aroma que no existe en supermercado.
      </InfoBoxX>

      <SectionTitleX c={c}>FICHA RÁPIDA</SectionTitleX>
      <div style={{ display: "grid", gridTemplateColumns: "1fr 1fr", gap: "10px", marginBottom: "16px" }}>
        <StatBoxX c={c} label="Dificultad" value="Fácil en BCN" />
        <StatBoxX c={c} label="Años a cosecha" value="2-3 años desde plantón" />
        <StatBoxX c={c} label="Sol" value="Pleno sol" />
        <StatBoxX c={c} label="Agua" value="Riego regular, sin encharcar" />
        <StatBoxX c={c} label="Maceta posible" value="Sí, mínimo 50L" />
        <StatBoxX c={c} label="Tamaño adulto" value="2-4m (en maceta 2-3m)" />
        <StatBoxX c={c} label="Polinización" value="Autofértil" />
        <StatBoxX c={c} label="Resistencia frío" value="Hasta -5°C" />
      </div>

      <SectionTitleX c={c}>🌱 Plantación</SectionTitleX>
      <StepX c={c} num={1} text="Época: primavera (marzo-mayo), igual que el limonero. En zonas muy suaves de BCN también se puede plantar en otoño." />
      <StepX c={c} num={2} text="Portainjerto: Poncirus trifoliata o Citrange (Citrus sinensis × Poncirus trifoliata). Pregunta en el vivero — el portainjerto influye en vigor, resistencia al frío y adaptación al suelo. Poncirus trifoliata es el más resistente al frío y a suelos calcáreos." />
      <StepX c={c} num={3} text="Sustrato: bien drenado, pH 6-7. Igual que el limonero. Capa de grava en el fondo de la maceta para asegurar drenaje." />
      <StepX c={c} num={4} text="Sol: 6-8h mínimo de sol directo. A más sol, más dulce es la naranja. Ubicación sur o sureste." />

      <SectionTitleX c={c}>🌿 Cuidados</SectionTitleX>
      <StepX c={c} num={1} text="Riego: regular, mantener el suelo ligeramente húmedo pero NUNCA encharcado. En verano BCN, riego profundo 1-2 veces por semana. En maceta, comprobar humedad cada 2-3 días. El encharcamiento = asfixia radicular = muerte del árbol." />
      <StepX c={c} num={2} text="Fertilización: abono cítricos cada 6-8 semanas de marzo a octubre. El naranjo es especialmente exigente en nitrógeno y hierro. Hojas amarillas con nervios verdes = falta de hierro (quelato de hierro)." />
      <StepX c={c} num={3} text="Riego con agua acidulada (vinagre blanco 5ml/L cada 2-3 riegos) en BCN para contrarrestar la cal del agua del grifo. Esto previene la clorosis férrica." />
      <StepX c={c} num={4} text="Acolchado: corteza de pino, paja o compost en la base (sin tocar el tronco). Mantiene humedad y temperatura estable en las raíces." />
      <StepX c={c} num={5} text="La naranja necesita contraste de temperatura día/noche para colorear bien. En BCN, las noches frescas de otoño-invierno son perfectas para que las naranjas desarrollen color naranja intenso." />

      <SectionTitleX c={c}>🪴 Maceta</SectionTitleX>
      <StepX c={c} num={1} text="Mínimo 50 litros. Ideal 60-80L. El naranjo es más vigoroso que el limonero y necesita más volumen de raíces." />
      <StepX c={c} num={2} text="En maceta, limitar altura a 2-2.5m con poda. Un naranjo en maceta de 80L puede producir 20-50 naranjas al año." />
      <StepX c={c} num={3} text="Trasplante: cada 2-3 años a maceta mayor hasta alcanzar tamaño deseado. Luego, renovación superficial de sustrato cada primavera." />

      <SectionTitleX c={c}>🐛 Plagas</SectionTitleX>
      <StepX c={c} num={1} text="Mismas plagas que el limonero: cochinilla, pulgón, mosca blanca, minador de cítricos, negrilla. Ver ficha del limonero para tratamientos detallados." />
      <StepX c={c} num={2} text="Mosca de la fruta (Ceratitis capitata): perfora los frutos maduros. Solución: trampas de feromonas o trampas caseras con vinagre y miel. Cosechar frutos puntualmente." />
      <StepX c={c} num={3} text="Ácaro de las maravillas (Aceria sheldoni): deforma frutos y hojas. Solución: aceite mineral o azufre mojable en brotación." />
      <StepX c={c} num={4} text="Caracoles y babosas: pueden dañar frutos bajos que tocan el suelo. Solución: barreras (ceniza, cáscaras de huevo) y recogida nocturna." />

      <SectionTitleX c={c}>✂️ Poda</SectionTitleX>
      <StepX c={c} num={1} text="Poda ligera, igual que limonero. Los cítricos no necesitan poda de fructificación. Podar en febrero-marzo: eliminar ramas secas, enfermas, chupones verticales del interior, y ramas que se cruzan." />
      <StepX c={c} num={2} text="Aclareo del interior: los cítricos tienden a formar una maraña densa. Abrir el centro para que entre luz y aire — previene enfermedades y mejora la coloración del fruto." />
      <StepX c={c} num={3} text="En maceta, controlar altura despuntando ramas demasiado vigorosas." />

      <SectionTitleX c={c}>🧺 Cosecha</SectionTitleX>
      <StepX c={c} num={1} text="Varía según variedad. Navelinas: noviembre-enero. Valencia Late: marzo-junio. La naranja está lista cuando tiene color naranja uniforme y se desprende con un giro suave." />
      <StepX c={c} num={2} text="A diferencia del limón, la naranja sí madura mejor en el árbol pero NO aguanta tanto tiempo una vez madura (se vuelve seca). Cosechar en un plazo de 4-6 semanas desde que está lista." />
      <StepX c={c} num={3} text="Conservación: temperatura ambiente, 7-10 días. Nevera, 3-4 semanas. Para zumo: las naranjas para zumo se conservan mejor enteras que exprimidas." />

      <SectionTitleX c={c}>🍽️ Variedades para BCN</SectionTitleX>
      <StepX c={c} num={1} text="'Navelina' — naranja de ombligo, la más popular. Madura noviembre-enero. Frutos grandes, fáciles de pelar, sin semillas. Excelente para mesa." />
      <StepX c={c} num={2} text="'Valencia Late' — la naranja de zumo por excelencia. Madura marzo-junio. Muy jugosa, dulce, con algunas semillas. Alarga la temporada hasta verano." />
      <StepX c={c} num={3} text="'Salustiana' — naranja blanca, muy dulce y jugosa. Madura enero-marzo. Sin semillas. Excelente para zumo y mesa." />
      <StepX c={c} num={4} text="'Cara Cara' — naranja navel de pulpa ROSA (licopeno). Sabor dulce, ligeramente aframbuesado. Muy decorativa. Madura diciembre-febrero." />
    </div>
  );
}

function MANDARINO() {
  const c = FRUTALES_COLORS;
  return (
    <div>
      <InfoBoxX c={c}>
        <strong>Mandarino (Citrus reticulata)</strong> — el cítrico más resistente al frío (hasta -8°C algunos). Fruto pequeño, dulce, fácil de pelar. Ideal para niños. Mismas condiciones que naranjo y limonero pero con cosecha concentrada en octubre-febrero. La variedad 'Clementina' es la reina en España y en BCN.
      </InfoBoxX>

      <SectionTitleX c={c}>FICHA RÁPIDA</SectionTitleX>
      <div style={{ display: "grid", gridTemplateColumns: "1fr 1fr", gap: "10px", marginBottom: "16px" }}>
        <StatBoxX c={c} label="Dificultad" value="Fácil en BCN" />
        <StatBoxX c={c} label="Años a cosecha" value="2-3 años desde plantón" />
        <StatBoxX c={c} label="Sol" value="Pleno sol" />
        <StatBoxX c={c} label="Agua" value="Riego regular, sin encharcar" />
        <StatBoxX c={c} label="Maceta posible" value="Sí, mínimo 40L" />
        <StatBoxX c={c} label="Tamaño adulto" value="2-3m (más compacto que naranjo)" />
        <StatBoxX c={c} label="Polinización" value="Autofértil" />
        <StatBoxX c={c} label="Resistencia frío" value="Hasta -8°C (el más resistente)" />
      </div>

      <SectionTitleX c={c}>🌱 Plantación</SectionTitleX>
      <StepX c={c} num={1} text="Época: primavera, igual que los demás cítricos. El mandarino es más compacto — plantarlo con un espaciado de 3-4m en jardín (2-3m si se poda)." />
      <StepX c={c} num={2} text="Sustrato: bien drenado, pH 6-7. Añadir compost maduro al hoyo de plantación. El mandarino es algo más tolerante a suelos ligeramente calcáreos que el naranjo." />
      <StepX c={c} num={3} text="Sol: pleno sol para máxima dulzura. A más horas de sol, más azúcar acumula el fruto." />

      <SectionTitleX c={c}>🌿 Cuidados</SectionTitleX>
      <StepX c={c} num={1} text="Riego: mismo criterio que limonero y naranjo. Verano: 1-2 riegos profundos por semana. Invierno: reducir. El mandarino es ligeramente más tolerante a la sequía que el naranjo." />
      <StepX c={c} num={2} text="Fertilización: abono cítricos cada 6-8 semanas de marzo a octubre. El mandarino necesita un buen aporte de potasio para la maduración del fruto." />
      <StepX c={c} num={3} text="Aclareo de frutos: en años de gran cosecha, el mandarino puede cargarse tanto que las ramas se parten. Si ves racimos de 5-6 frutos juntos, aclarea dejando 2-3 por racimo." />

      <SectionTitleX c={c}>🪴 Maceta</SectionTitleX>
      <StepX c={c} num={1} text="Mínimo 40 litros. El mandarino es más compacto que el naranjo — se adapta bien a macetas de 40-60L." />
      <StepX c={c} num={2} text="En maceta, un mandarino adulto produce 15-30 frutos por temporada. Suficiente para una familia pequeña." />

      <SectionTitleX c={c}>🐛 Plagas</SectionTitleX>
      <StepX c={c} num={1} text="Mismas plagas que los demás cítricos: cochinilla, pulgón, mosca blanca, minador. Ver ficha del limonero para tratamientos detallados." />
      <StepX c={c} num={2} text="El mandarino es especialmente sensible a la mosca de la fruta por su piel fina y dulce. Trampas y cosecha puntual son clave." />

      <SectionTitleX c={c}>✂️ Poda</SectionTitleX>
      <StepX c={c} num={1} text="Poda muy ligera. El mandarino tiene un porte naturalmente redondeado y compacto. Limitarse a eliminar ramas secas, chupones y ramas interiores que impiden la entrada de luz." />
      <StepX c={c} num={2} text="Podar después de la cosecha (febrero-marzo). Sellar cortes &gt;2cm con pasta cicatrizante." />

      <SectionTitleX c={c}>🧺 Cosecha</SectionTitleX>
      <StepX c={c} num={1} text="Época: octubre a febrero, según variedad. Clementinas: octubre-diciembre. Híbridos tardíos (Fortune): enero-febrero." />
      <StepX c={c} num={2} text="La mandarina está lista cuando está completamente naranja y se desprende con facilidad. Cosechar con tijeras — si tiras del fruto, arrancas un trozo de piel y se pudre rápido." />
      <StepX c={c} num={3} text="Conservación: temperatura ambiente 5-7 días. Nevera: 2-3 semanas. Las mandarinas se conservan mejor que las naranjas." />

      <SectionTitleX c={c}>🍽️ Variedades para BCN</SectionTitleX>
      <StepX c={c} num={1} text="'Clementina Fina' — la más común en España. Frutos pequeños-medianos, muy dulces, sin semillas, fáciles de pelar. Cosecha noviembre-diciembre. La mejor para comer fresca." />
      <StepX c={c} num={2} text="'Clementina de Nules' — frutos más grandes que la Fina, sabor excelente. Cosecha noviembre-enero. Muy productiva." />
      <StepX c={c} num={3} text="'Fortune' — híbrido de mandarina, más tardío (enero-febrero). Frutos de piel fina y color intenso, sabor agridulce. Alarga la temporada." />
      <StepX c={c} num={4} text="'Satsuma' — variedad japonesa muy resistente al frío. Frutos sin semillas, fáciles de pelar. Madura octubre-noviembre. Árbol compacto, ideal para maceta." />
    </div>
  );
}


// ============================================================
// FRUTALES DE HUESO
// ============================================================

function MELOCOTONERO() {
  const c = FRUTALES_COLORS;
  return (
    <div>
      <InfoBoxX c={c}>
        <strong>Melocotonero (Prunus persica)</strong> — el frutal de hueso más popular. En Barcelona se adapta perfectamente. Necesita poda en vaso abierto, aclareo de frutos y tratamiento preventivo de lepra con cobre en invierno. La recompensa: melocotones de un dulzor y aroma que justifica todo el esfuerzo.
      </InfoBoxX>

      <SectionTitleX c={c}>FICHA RÁPIDA</SectionTitleX>
      <div style={{ display: "grid", gridTemplateColumns: "1fr 1fr", gap: "10px", marginBottom: "16px" }}>
        <StatBoxX c={c} label="Dificultad" value="Media (poda + aclareo)" />
        <StatBoxX c={c} label="Años a cosecha" value="2-3 años" />
        <StatBoxX c={c} label="Sol" value="Pleno sol" />
        <StatBoxX c={c} label="Agua" value="Riego regular, suelo drenado" />
        <StatBoxX c={c} label="Maceta posible" value="Sí, mínimo 50L (difícil)" />
        <StatBoxX c={c} label="Tamaño adulto" value="3-5m (con poda, 2-3m)" />
        <StatBoxX c={c} label="Polinización" value="Autofértil" />
        <StatBoxX c={c} label="Resistencia frío" value="Hasta -15°C (necesita frío)" />
      </div>

      <SectionTitleX c={c}>🌱 Plantación</SectionTitleX>
      <StepX c={c} num={1} text="Época ideal: otoño (octubre-noviembre) a raíz desnuda. La plantación de otoño es muy superior a la de primavera: el árbol desarrolla raíces durante todo el invierno y en primavera arranca con mucha más fuerza." />
      <StepX c={c} num={2} text="Suelo: BIEN DRENADO. El melocotonero es muy sensible al encharcamiento y a la asfixia radicular. Si tu suelo es arcilloso y pesado, plantar en caballón (montículo de tierra elevado 30-40cm)." />
      <StepX c={c} num={3} text="Sustrato: pH 6-7, rico en materia orgánica. Añadir compost o estiércol bien descompuesto al hoyo de plantación." />
      <StepX c={c} num={4} text="Distancia: 4-5m entre árboles. El melocotonero necesita espacio y sol." />

      <SectionTitleX c={c}>🌿 Cuidados</SectionTitleX>
      <StepX c={c} num={1} text="Riego: regular y profundo. En verano BCN, riego cada 5-7 días en tierra (cada 2-3 días en maceta). No mojar las hojas (favorece lepra y oídio). Riego por goteo o al pie." />
      <StepX c={c} num={2} text="Fertilización: en primavera (marzo), abono rico en nitrógeno para estimular el crecimiento. Después del aclareo de frutos (mayo), abono rico en potasio para engorde. En otoño, compost en superficie." />
      <StepX c={c} num={3} text="Aclareo de frutos: MUY IMPORTANTE. En mayo, cuando los frutos tienen el tamaño de una nuez, eliminar el exceso dejando 15-20cm entre frutos. Si no aclareas, tendrás muchos melocotones pequeños y sin sabor." />
      <StepX c={c} num={4} text="Tratamiento de invierno con cobre (caldo bordelés): pulverizar el árbol en enero (sin hojas) para prevenir lepra. Repetir en el momento de hinchado de yemas. ESENCIAL en clima mediterráneo." />

      <SectionTitleX c={c}>🪴 Maceta</SectionTitleX>
      <StepX c={c} num={1} text="Mínimo 50 litros. 60-80L ideal. El melocotonero en maceta es posible pero más exigente que los cítricos. Necesita riego y fertilización más frecuentes." />
      <StepX c={c} num={2} text="Elegir variedades de porte compacto o injertadas sobre patrón enanizante. Pregunta en el vivero por 'melocotonero para maceta'." />
      <StepX c={c} num={3} text="En maceta, limitar a 7-10 frutos por árbol para calidad sobre cantidad." />

      <SectionTitleX c={c}>🐛 Plagas</SectionTitleX>
      <StepX c={c} num={1} text="Lepra / Abolladura (Taphrina deformans): la enfermedad más grave. Hojas se deforman, abollan y enrojecen. Preventivo: cobre en invierno. Si aparece en primavera, quitar y destruir hojas afectadas inmediatamente." />
      <StepX c={c} num={2} text="Pulgón: colonias en brotes tiernos. Solución: jabón potásico. El melocotonero es muy propenso al pulgón verde." />
      <StepX c={c} num={3} text="Mosca de la fruta: perfora frutos maduros. Solución: trampas de feromonas, cosecha puntual." />
      <StepX c={c} num={4} text="Oídio: polvo blanco en hojas y frutos. Prevención: buena ventilación con la poda. Tratamiento: azufre en polvo." />
      <StepX c={c} num={5} text="Gusano cabezudo (Capnodis tenebrionis): larva que perfora raíces y tronco. Árbol se seca sin razón aparente. Prevención: mantener el árbol vigoroso. Sin tratamiento curativo eficaz — prevención es clave." />

      <SectionTitleX c={c}>✂️ Poda</SectionTitleX>
      <StepX c={c} num={1} text="Poda de formación en VASO ABIERTO: durante los primeros 3 años, formar 3-4 ramas principales que salgan del tronco a 60-80cm del suelo, abiertas en forma de copa. El centro debe quedar libre para que entre luz y aire." />
      <StepX c={c} num={2} text="Poda de fructificación (cada invierno): el melocotonero fructifica en ramas del año anterior. Cada invierno, renovar ramas fructíferas cortando las que ya produjeron. Dejar ramas jóvenes vigorosas." />
      <StepX c={c} num={3} text="Poda en verde (mayo-junio): eliminar chupones y brotes verticales que sombrean el interior. El melocotonero emite mucha vegetación — controlarla." />
      <StepX c={c} num={4} text="Cortar SIEMPRE dejando un tocón pequeño (2-3cm) en ramas gruesas — el melocotonero cicatriza mejor así. Sellar cortes &gt;3cm con pasta cicatrizante." />

      <SectionTitleX c={c}>🧺 Cosecha</SectionTitleX>
      <StepX c={c} num={1} text="Época: junio a agosto según variedad. 'Royal Glory': julio. 'Catherina': agosto. Variedades tempranas: junio." />
      <StepX c={c} num={2} text="El melocotón está listo cuando cede ligeramente al apretar, el color de fondo cambia de verde a amarillo, y se desprende con un giro suave. El aroma es un indicador fiable: si huele a melocotón, está listo." />
      <StepX c={c} num={3} text="Cosechar con cuidado — los melocotones se magullan fácilmente. Colocar en cestas poco profundas, máximo 2 capas. Temperatura ambiente: 2-3 días. Nevera: 5-7 días." />
      <StepX c={c} num={4} text="Un melocotonero adulto produce 20-60kg por temporada. Demasiado para una familia — compartir, hacer mermelada, congelar troceado." />

      <SectionTitleX c={c}>🍽️ Variedades para BCN</SectionTitleX>
      <StepX c={c} num={1} text="'Royal Glory' — fruto grande, rojo intenso, pulpa amarilla y dulce. Cosecha en julio. Muy productiva y fiable en clima mediterráneo." />
      <StepX c={c} num={2} text="'Catherina' — fruto muy grande, piel roja y amarilla. Cosecha en agosto. Excelente sabor, resistente a lepra." />
      <StepX c={c} num={3} text="'Red Haven' — la más cultivada del mundo. Fruto de tamaño medio, muy dulce y aromático. Cosecha en julio. Muy fiable." />
      <StepX c={c} num={4} text="'Baby Gold' — variedad de pulpa amarilla, excelente para conserva. Cosecha en agosto. Árbol vigoroso y productivo." />
    </div>
  );
}

function CIRUELO() {
  const c = FRUTALES_COLORS;
  return (
    <div>
      <InfoBoxX c={c}>
        <strong>Ciruelo (Prunus domestica)</strong> — el frutal de hueso más fácil. Tolera algo de sombra, es menos exigente en poda que el melocotonero, y produce abundantemente con pocos cuidados. Frutos versátiles: frescos, en mermelada, secos (ciruelas pasas). Ideal para principiantes.
      </InfoBoxX>

      <SectionTitleX c={c}>FICHA RÁPIDA</SectionTitleX>
      <div style={{ display: "grid", gridTemplateColumns: "1fr 1fr", gap: "10px", marginBottom: "16px" }}>
        <StatBoxX c={c} label="Dificultad" value="Fácil" />
        <StatBoxX c={c} label="Años a cosecha" value="2-3 años" />
        <StatBoxX c={c} label="Sol" value="Pleno sol o semi-sombra" />
        <StatBoxX c={c} label="Agua" value="Riego regular" />
        <StatBoxX c={c} label="Maceta posible" value="Sí, mínimo 40L" />
        <StatBoxX c={c} label="Tamaño adulto" value="3-5m (con poda, 2-3m)" />
        <StatBoxX c={c} label="Polinización" value="Autofértil (mayoría)" />
        <StatBoxX c={c} label="Resistencia frío" value="Hasta -20°C" />
      </div>

      <SectionTitleX c={c}>🌱 Plantación</SectionTitleX>
      <StepX c={c} num={1} text="Época: otoño (octubre-noviembre) a raíz desnuda. Como todos los frutales de hueso, mejor en otoño." />
      <StepX c={c} num={2} text="Suelo: se adapta a casi todo. Tolera suelos arcillosos (mucho mejor que el melocotonero). pH 6-7.5. Buen drenaje recomendable pero no tan crítico." />
      <StepX c={c} num={3} text="Distancia: 3-4m entre árboles. Si plantas varias variedades, puedes alargar la cosecha de julio a septiembre." />

      <SectionTitleX c={c}>🌿 Cuidados</SectionTitleX>
      <StepX c={c} num={1} text="Riego: regular pero sin exigencias. En verano, riego profundo cada 7-10 días en tierra (cada 3-4 días en maceta). Tolera mejor la sequía que el melocotonero." />
      <StepX c={c} num={2} text="Fertilización: primavera (nitrógeno) y verano (potasio). No es tan goloso como otros frutales. Compost en otoño." />
      <StepX c={c} num={3} text="Aclareo de frutos: opcional pero recomendable. Si el árbol carga mucho, aclarear dejando 8-12cm entre frutos. Evita ramas partidas y mejora el calibre." />

      <SectionTitleX c={c}>🪴 Maceta</SectionTitleX>
      <StepX c={c} num={1} text="Mínimo 40 litros. 50-60L ideal. El ciruelo se adapta bien a maceta." />
      <StepX c={c} num={2} text="Elegir variedades de porte compacto como 'Golden Japan'." />

      <SectionTitleX c={c}>🐛 Plagas</SectionTitleX>
      <StepX c={c} num={1} text="Pulgón: muy frecuente en brotes tiernos. Jabón potásico cada 5-7 días." />
      <StepX c={c} num={2} text="Mosca de la fruta: perfora frutos maduros. Trampas y cosecha puntual." />
      <StepX c={c} num={3} text="Monilia (podredumbre parda): frutos se pudren en el árbol con moho marrón-gris. Prevención: poda para ventilación, eliminar frutos afectados." />

      <SectionTitleX c={c}>✂️ Poda</SectionTitleX>
      <StepX c={c} num={1} text="Poda ligera. El ciruelo necesita menos poda que el melocotonero. Formación en vaso abierto (3-4 ramas principales) durante los primeros años." />
      <StepX c={c} num={2} text="Poda de invierno: eliminar ramas secas, enfermas, mal orientadas, y las que crecen hacia el interior. Aclarear para que entre luz." />
      <StepX c={c} num={3} text="NO podar en exceso — el ciruelo responde emitiendo muchas ramas verticales (chupones). Podar moderadamente cada año es mejor que poda drástica." />

      <SectionTitleX c={c}>🧺 Cosecha</SectionTitleX>
      <StepX c={c} num={1} text="Época: julio a septiembre según variedad. 'Golden Japan': julio. 'Reina Claudia': agosto. 'Santa Rosa': julio-agosto." />
      <StepX c={c} num={2} text="La ciruela está lista cuando cede ligeramente al apretar y tiene color uniforme. Cosechar con cuidado — la pruina (polvo blanco en la piel) es protección natural. Cosechar por la mañana." />
      <StepX c={c} num={3} text="Conservación: nevera 5-10 días. Para ciruelas pasas: cortar por la mitad, deshuesar, secar al sol con malla (3-5 días) o en horno a 60°C (8-12h)." />

      <SectionTitleX c={c}>🍽️ Variedades para BCN</SectionTitleX>
      <StepX c={c} num={1} text="'Golden Japan' — ciruela amarilla, muy dulce y jugosa. Cosecha en julio. Muy productiva. La más popular para clima mediterráneo." />
      <StepX c={c} num={2} text="'Reina Claudia' (Reine Claude) — ciruela verde-dorada, pulpa verde dulce y perfumada. La mejor para comer fresca. Cosecha en agosto." />
      <StepX c={c} num={3} text="'Santa Rosa' — ciruela roja-púrpura, pulpa roja, sabor intenso. Excelente polinizadora universal. Cosecha julio-agosto." />
      <StepX c={c} num={4} text="'President' — ciruela azul oscuro, grande. Tardía (septiembre). Ideal para alargar la temporada." />
    </div>
  );
}

function CEREZO() {
  const c = FRUTALES_COLORS;
  return (
    <div>
      <InfoBoxX c={c}>
        <strong>Cerezo (Prunus avium)</strong> — el frutal más delicado en clima mediterráneo. Necesita horas de frío invernal que en Barcelona no siempre se cumplen. Elegir variedades de BAJO requerimiento de frío (400-600 horas). La mayoría necesitan polinizador (2 variedades compatibles). Proteger de heladas tardías y pájaros. El esfuerzo se compensa con cerezas de árbol imposibles de comprar.
      </InfoBoxX>

      <SectionTitleX c={c}>FICHA RÁPIDA</SectionTitleX>
      <div style={{ display: "grid", gridTemplateColumns: "1fr 1fr", gap: "10px", marginBottom: "16px" }}>
        <StatBoxX c={c} label="Dificultad" value="Alta en BCN (falta frío)" />
        <StatBoxX c={c} label="Años a cosecha" value="3-5 años" />
        <StatBoxX c={c} label="Sol" value="Pleno sol" />
        <StatBoxX c={c} label="Agua" value="Riego regular, sensible a sequía" />
        <StatBoxX c={c} label="Maceta posible" value="Sí, mínimo 60L (difícil)" />
        <StatBoxX c={c} label="Tamaño adulto" value="4-8m (con poda, 3-4m)" />
        <StatBoxX c={c} label="Polinización" value="Necesita 2 variedades" />
        <StatBoxX c={c} label="Resistencia frío" value="Hasta -20°C (necesita frío)" />
      </div>

      <SectionTitleX c={c}>🌱 Plantación</SectionTitleX>
      <StepX c={c} num={1} text="Época: otoño-invierno (noviembre-febrero) a raíz desnuda. Plantar en zona protegida de heladas tardías (las flores de cerezo son muy sensibles)." />
      <StepX c={c} num={2} text="Polinización: la mayoría de variedades de cerezo NO son autofértiles. Necesitas plantar 2 variedades compatibles que florezcan al mismo tiempo. Consultar tablas de polinización antes de comprar. Variedades autofértiles para BCN: 'Stella', 'Lapins', 'Sunburst'." />
      <StepX c={c} num={3} text="Suelo: bien drenado, profundo, pH 6-7. El cerezo odia el encharcamiento y los suelos pesados. En BCN, si el suelo es arcilloso, plantar en caballón." />
      <StepX c={c} num={4} text="Proteger las flores de heladas tardías (febrero-marzo): cubrir el árbol con manta térmica las noches que se anuncien heladas. Las flores mueren a -2°C." />

      <SectionTitleX c={c}>🌿 Cuidados</SectionTitleX>
      <StepX c={c} num={1} text="Riego: el cerezo es sensible a la sequía. Riego regular y profundo, especialmente durante el engorde del fruto (abril-mayo). En verano BCN, riego semanal en tierra." />
      <StepX c={c} num={2} text="Fertilización: primavera (nitrógeno) y post-cosecha (potasio). No fertilizar en exceso — el cerezo vigoroso es más propenso a enfermedades." />
      <StepX c={c} num={3} text="Las horas-frío (<7°C) necesarias para florecer correctamente son el factor limitante en BCN. Las variedades de bajo frío (<600h) funcionan. Las de alto frío (>1000h) no florecerán bien." />

      <SectionTitleX c={c}>🪴 Maceta</SectionTitleX>
      <StepX c={c} num={1} text="Mínimo 60 litros. El cerezo es un árbol grande. En maceta es difícil conseguir buena producción — mejor plantar en tierra si es posible." />
      <StepX c={c} num={2} text="Si cultivas en maceta, elegir portainjerto enanizante (Gisela 5) y variedades compactas." />

      <SectionTitleX c={c}>🐛 Plagas</SectionTitleX>
      <StepX c={c} num={1} text="PÁJAROS: el enemigo #1. Se comen la cosecha entera en días. Solución: malla anti-pájaros sobre el árbol durante la fructificación. Es imprescindible." />
      <StepX c={c} num={2} text="Mosca de la fruta (Drosophila suzukii): perfora cerezas maduras. Solución: trampas, cosecha puntual, no dejar fruta en el suelo." />
      <StepX c={c} num={3} text="Monilia: frutos se pudren con moho gris. Prevención: buena ventilación, poda de aclareo." />
      <StepX c={c} num={4} text="Pulgón negro del cerezo: colonias en brotes tiernos. Solución: jabón potásico." />

      <SectionTitleX c={c}>✂️ Poda</SectionTitleX>
      <StepX c={c} num={1} text="Poda ligera. El cerezo cicatriza mal y es sensible a hongos de madera. Podar solo lo imprescindible: ramas secas, enfermas, mal orientadas." />
      <StepX c={c} num={2} text="Época de poda: después de la cosecha (junio-julio) o a finales de verano. NUNCA en invierno (riesgo de chancro bacteriano)." />
      <StepX c={c} num={3} text="Sellar SIEMPRE los cortes (incluso pequeños) con pasta cicatrizante. El cerezo es muy propenso a infecciones por cortes de poda." />

      <SectionTitleX c={c}>🧺 Cosecha</SectionTitleX>
      <StepX c={c} num={1} text="Época: mayo a junio en BCN. Las variedades de bajo frío suelen ser más tempranas." />
      <StepX c={c} num={2} text="La cereza está lista cuando tiene color uniforme (rojo intenso o negro según variedad) y está firme pero dulce. Cosechar con tijeras, cortando el pedúnculo (NO arrancar — daña la rama y el fruto no se conserva)." />
      <StepX c={c} num={3} text="Conservación: nevera 3-5 días. NO lavar hasta consumir. Congelar: lavar, secar, deshuesar, congelar en bandeja, luego a bolsa zip." />

      <SectionTitleX c={c}>🍽️ Variedades para BCN</SectionTitleX>
      <StepX c={c} num={1} text="'Stella' — autofértil, fruto rojo oscuro, dulce. Excelente polinizador universal. Bajo requerimiento de frío. La más recomendada para BCN." />
      <StepX c={c} num={2} text="'Lapins' — autofértil, fruto rojo muy grande y dulce. Cosecha tardía (junio). Muy productiva. Buen polinizador." />
      <StepX c={c} num={3} text="'Sunburst' — autofértil, fruto rojo intenso, grande. Maduración temprana (mayo). Muy dulce. Árbol compacto." />
      <StepX c={c} num={4} text="'Burlat' — variedad temprana (mayo), frutos grandes rojo intenso. Necesita polinizador. Muy popular en España." />
    </div>
  );
}

function ALBARICOQUERO() {
  const c = FRUTALES_COLORS;
  return (
    <div>
      <InfoBoxX c={c}>
        <strong>Albaricoquero (Prunus armeniaca)</strong> — frutal de hueso con floración muy temprana (febrero-marzo), lo que implica riesgo de heladas. En Barcelona, elegir variedades de floración tardía y plantar en zona protegida. Poda muy ligera. Los albaricoques de árbol maduros al sol no tienen nada que ver con los de supermercado.
      </InfoBoxX>

      <SectionTitleX c={c}>FICHA RÁPIDA</SectionTitleX>
      <div style={{ display: "grid", gridTemplateColumns: "1fr 1fr", gap: "10px", marginBottom: "16px" }}>
        <StatBoxX c={c} label="Dificultad" value="Media (floración temprana)" />
        <StatBoxX c={c} label="Años a cosecha" value="2-3 años" />
        <StatBoxX c={c} label="Sol" value="Pleno sol, protegido" />
        <StatBoxX c={c} label="Agua" value="Riego moderado, buen drenaje" />
        <StatBoxX c={c} label="Maceta posible" value="Sí, mínimo 50L" />
        <StatBoxX c={c} label="Tamaño adulto" value="3-5m (con poda, 2-3m)" />
        <StatBoxX c={c} label="Polinización" value="Autofértil (mayoría)" />
        <StatBoxX c={c} label="Resistencia frío" value="Hasta -20°C, flores a -2°C" />
      </div>

      <SectionTitleX c={c}>🌱 Plantación</SectionTitleX>
      <StepX c={c} num={1} text="Época: otoño (octubre-noviembre) a raíz desnuda. Plantar en zona protegida de vientos fríos y heladas (cerca de un muro orientado al sur, por ejemplo)." />
      <StepX c={c} num={2} text="Suelo: bien drenado, pH 6-7.5. El albaricoquero tolera suelos calcáreos y pobres mejor que otros frutales de hueso." />
      <StepX c={c} num={3} text="Elegir variedades de FLORACIÓN TARDÍA para evitar que las heladas de febrero-marzo maten las flores. En BCN las heladas son raras pero posibles." />
      <StepX c={c} num={4} text="En zona de riesgo de heladas, proteger el árbol con manta térmica las noches frías de febrero-marzo cuando está en flor." />

      <SectionTitleX c={c}>🌿 Cuidados</SectionTitleX>
      <StepX c={c} num={1} text="Riego: moderado. El albaricoquero tolera sequía mejor que el melocotonero. En verano, riego profundo cada 10-15 días en tierra (cada 3-4 días en maceta)." />
      <StepX c={c} num={2} text="Fertilización: primavera (nitrógeno con moderación) y post-cosecha (potasio). El exceso de nitrógeno provoca crecimiento excesivo y frutos de mala calidad." />
      <StepX c={c} num={3} text="Aclareo de frutos: MUY IMPORTANTE. Cuando los frutos tienen tamaño de avellana, dejar 8-12cm entre frutos. Si no aclareas, frutos pequeños y árbol agotado." />

      <SectionTitleX c={c}>🪴 Maceta</SectionTitleX>
      <StepX c={c} num={1} text="Mínimo 50 litros. Posible pero la producción es limitada (10-20 frutos por árbol). Elegir variedades compactas." />
      <StepX c={c} num={2} text="Proteger más del frío en maceta — las raíces son más sensibles que en tierra." />

      <SectionTitleX c={c}>🐛 Plagas</SectionTitleX>
      <StepX c={c} num={1} text="Lepra (abolladura): misma enfermedad que el melocotonero. Hojas deformes y rojizas. Preventivo: cobre en invierno." />
      <StepX c={c} num={2} text="Mosca de la fruta: perfora frutos maduros. Trampas y cosecha puntual." />
      <StepX c={c} num={3} text="Monilia: podredumbre de flores y frutos. Prevención: ventilación con poda." />
      <StepX c={c} num={4} text="Pulgón: en brotes tiernos. Jabón potásico." />

      <SectionTitleX c={c}>✂️ Poda</SectionTitleX>
      <StepX c={c} num={1} text="Poda MUY LIGERA. El albaricoquero fructifica mejor con poca intervención. Podar solo ramas secas, enfermas, mal orientadas o que se cruzan." />
      <StepX c={c} num={2} text="Formación en vaso abierto los primeros 3 años (3-4 ramas principales). Luego, poda de mantenimiento mínima." />
      <StepX c={c} num={3} text="Época de poda: después de la cosecha (junio-julio) o en otoño. Evitar podar en invierno (riesgo de chancro). Sellar cortes." />

      <SectionTitleX c={c}>🧺 Cosecha</SectionTitleX>
      <StepX c={c} num={1} text="Época: mayo a junio. El albaricoque madura rápido una vez empieza a colorear." />
      <StepX c={c} num={2} text="El albaricoque está listo cuando cede ligeramente al apretar, tiene color naranja uniforme y aroma dulce. Cosechar con cuidado — se magulla con facilidad." />
      <StepX c={c} num={3} text="Conservación: muy delicado. Temperatura ambiente: 1-2 días. Nevera: 3-5 días. Ideal para mermelada si hay excedente." />

      <SectionTitleX c={c}>🍽️ Variedades para BCN</SectionTitleX>
      <StepX c={c} num={1} text="'Canino' — variedad española tradicional. Floración tardía (marzo). Frutos medianos, muy aromáticos. Excelente adaptación al mediterráneo." />
      <StepX c={c} num={2} text="'Moniquí' — fruto grande, piel aterciopelada, sabor excelente. Floración temprana (febrero) — necesita zona protegida." />
      <StepX c={c} num={3} text="'Bulida' — variedad española. Frutos grandes, color naranja intenso. Floración media. Buena productividad." />
      <StepX c={c} num={4} text="'Goldrich' — frutos muy grandes, firmes, sabor dulce-ácido. Floración tardía (ideal para BCN). Muy resistente a enfermedades." />
    </div>
  );
}


// ============================================================
// FRUTALES DE PEPITA
// ============================================================

function MANZANO() {
  const c = FRUTALES_COLORS;
  return (
    <div>
      <InfoBoxX c={c}>
        <strong>Manzano (Malus domestica)</strong> — el clásico frutal de clima templado. En Barcelona, el principal desafío es la falta de horas-frío invernal. Elegir variedades de BAJO requerimiento de frío (300-600h). Necesita polinizador (2 variedades o manzano ornamental cerca). Poda en vaso. Con las variedades adecuadas, da manzanas excelentes.
      </InfoBoxX>

      <SectionTitleX c={c}>FICHA RÁPIDA</SectionTitleX>
      <div style={{ display: "grid", gridTemplateColumns: "1fr 1fr", gap: "10px", marginBottom: "16px" }}>
        <StatBoxX c={c} label="Dificultad" value="Media (necesita frío)" />
        <StatBoxX c={c} label="Años a cosecha" value="2-4 años" />
        <StatBoxX c={c} label="Sol" value="Pleno sol" />
        <StatBoxX c={c} label="Agua" value="Riego regular" />
        <StatBoxX c={c} label="Maceta posible" value="Sí, mínimo 50L" />
        <StatBoxX c={c} label="Tamaño adulto" value="3-5m (portainjerto enano 2-3m)" />
        <StatBoxX c={c} label="Polinización" value="Necesita polinizador" />
        <StatBoxX c={c} label="Horas frío" value="300-600h para BCN" />
      </div>

      <SectionTitleX c={c}>🌱 Plantación</SectionTitleX>
      <StepX c={c} num={1} text="Época: otoño (octubre-noviembre) a raíz desnuda. En BCN, elegir portainjerto enanizante (M9, M26) para limitar el tamaño y facilitar el manejo." />
      <StepX c={c} num={2} text="Polinización: el manzano NO es autofértil. Necesita al menos 2 variedades distintas que florezcan al mismo tiempo. Alternativa: si hay un manzano ornamental (Malus floribunda) cerca, poliniza variedades de manzana. Consultar tablas de compatibilidad." />
      <StepX c={c} num={3} text="Suelo: bien drenado, pH 6-7, rico en materia orgánica. Añadir compost al hoyo de plantación." />
      <StepX c={c} num={4} text="Distancia: 3-5m según portainjerto. Sobre patrón enanizante (M9), 2-3m entre árboles." />

      <SectionTitleX c={c}>🌿 Cuidados</SectionTitleX>
      <StepX c={c} num={1} text="Riego: regular, mantener humedad constante especialmente durante el engorde del fruto (junio-agosto). En verano BCN, riego semanal en tierra (cada 2-3 días en maceta)." />
      <StepX c={c} num={2} text="Fertilización: primavera (nitrógeno moderado) y verano (potasio). En otoño, compost en superficie. El exceso de nitrógeno favorece moteado." />
      <StepX c={c} num={3} text="Aclareo de frutos: en mayo-junio, dejar 1-2 frutos por racimo (eliminar el fruto central, más pequeño y deforme). Distancia final: 15-20cm entre frutos." />
      <StepX c={c} num={4} text="Protección contra moteado: pulverizar con decocción de cola de caballo (fungicida natural) en primavera. El moteado (manchas negras en hojas y frutos) es la enfermedad más común del manzano." />

      <SectionTitleX c={c}>🪴 Maceta</SectionTitleX>
      <StepX c={c} num={1} text="Mínimo 50 litros. Sobre portainjerto muy enanizante (M27), en maceta de 40-50L se puede mantener un manzano de 1.5-2m." />
      <StepX c={c} num={2} text="En maceta, limitar a 10-15 frutos por árbol para calidad. Fertilizar más frecuentemente que en tierra." />

      <SectionTitleX c={c}>🐛 Plagas</SectionTitleX>
      <StepX c={c} num={1} text="Moteado (Venturia inaequalis): manchas negras en hojas, frutos deformes y agrietados. Preventivo: cola de caballo, variedades resistentes. Tratamiento: cobre en invierno." />
      <StepX c={c} num={2} text="Pulgón lanígero: colonias algodonosas blancas en ramas y tronco. Difícil de erradicar. Solución: aceite de neem + jabón potásico, repetir. Limpiar con cepillo si es accesible." />
      <StepX c={c} num={3} text="Carpocapsa (gusano de la manzana): larva que perfora el fruto hasta el corazón. Solución: trampas de feromonas, Bacillus thuringiensis en momento de puesta." />
      <StepX c={c} num={4} text="Oídio: polvo blanco en hojas y brotes. Tratamiento: azufre en polvo. Prevención: poda para ventilación." />

      <SectionTitleX c={c}>✂️ Poda</SectionTitleX>
      <StepX c={c} num={1} text="Poda de formación en VASO ABIERTO (3-4 ramas principales) durante los primeros 3-4 años. El centro debe quedar abierto para entrada de luz." />
      <StepX c={c} num={2} text="Poda de invierno (diciembre-febrero): eliminar ramas verticales vigorosas (chupones), ramas que se cruzan, ramas que crecen hacia el centro. Acortar ramas excesivamente largas." />
      <StepX c={c} num={3} text="El manzano fructifica en ramas de 2-3 años (lamburdas y brindillas). No cortar estas ramas cortas y gruesas — son las fructíferas." />

      <SectionTitleX c={c}>🧺 Cosecha</SectionTitleX>
      <StepX c={c} num={1} text="Época: agosto a octubre según variedad. 'Anna': agosto. 'Dorsett Golden': septiembre. Variedades tradicionales: septiembre-octubre." />
      <StepX c={c} num={2} text="La manzana está lista cuando se desprende con un giro suave y las semillas son marrones. Cosechar con cuidado — los golpes producen manchas marrones en la pulpa." />
      <StepX c={c} num={3} text="Conservación: en lugar fresco y oscuro, las manzanas aguantan semanas o meses según variedad. En nevera, 1-3 meses. Envolver individualmente en papel para que no se contaminen (una manzana podrida pudre las demás)." />

      <SectionTitleX c={c}>🍽️ Variedades para BCN</SectionTitleX>
      <StepX c={c} num={1} text="'Anna' — variedad israelí de muy bajo frío (200-300h). Fruto verde-amarillo con rubor rojo, crujiente y dulce. Cosecha en agosto. POLINIZADOR: 'Dorsett Golden'. Ideal para clima mediterráneo." />
      <StepX c={c} num={2} text="'Dorsett Golden' — variedad de bajo frío (300-400h). Fruto amarillo-dorado, crujiente, dulce. Cosecha en septiembre. Excelente polinizador para 'Anna'." />
      <StepX c={c} num={3} text="'Granny Smith' — la manzana verde universal. Necesita más frío (600h) pero funciona en BCN en años normales. Muy ácida y crujiente. Excelente para cocinar y ensaladas." />
      <StepX c={c} num={4} text="'Fuji' — necesita 600h de frío, funciona en BCN. Muy dulce, crujiente, excelente conservación. Polinizador: 'Granny Smith' o 'Anna'." />
    </div>
  );
}

function PERAL() {
  const c = FRUTALES_COLORS;
  return (
    <div>
      <InfoBoxX c={c}>
        <strong>Peral (Pyrus communis)</strong> — generalmente más fácil que el manzano. En Barcelona funciona bien con menor exigencia en horas-frío. Poda en vaso o pirámide. Ojo al fuego bacteriano, enfermedad grave que requiere podar y quemar ramas afectadas inmediatamente. Las peras de árbol maduro tienen una textura de mantequilla imposible de encontrar en frutería.
      </InfoBoxX>

      <SectionTitleX c={c}>FICHA RÁPIDA</SectionTitleX>
      <div style={{ display: "grid", gridTemplateColumns: "1fr 1fr", gap: "10px", marginBottom: "16px" }}>
        <StatBoxX c={c} label="Dificultad" value="Media-fácil" />
        <StatBoxX c={c} label="Años a cosecha" value="3-5 años" />
        <StatBoxX c={c} label="Sol" value="Pleno sol" />
        <StatBoxX c={c} label="Agua" value="Riego regular" />
        <StatBoxX c={c} label="Maceta posible" value="Sí, mínimo 50L" />
        <StatBoxX c={c} label="Tamaño adulto" value="3-6m (según portainjerto)" />
        <StatBoxX c={c} label="Polinización" value="Necesita polinizador (mayoría)" />
        <StatBoxX c={c} label="Resistencia frío" value="Hasta -20°C" />
      </div>

      <SectionTitleX c={c}>🌱 Plantación</SectionTitleX>
      <StepX c={c} num={1} text="Época: otoño (octubre-noviembre). Sobre portainjerto de membrillero (EMC, BA29) para limitar el tamaño y mejorar adaptación a suelos." />
      <StepX c={c} num={2} text="Polinización: la mayoría de variedades NO son autofértiles. Necesitas 2 variedades compatibles. 'Conference' es parcialmente autofértil. Buenos cruces: 'Conference' + 'Limonera', 'Ercolini' + 'Conference'." />
      <StepX c={c} num={3} text="Suelo: profundo, bien drenado, pH 6-7. El peral tolera suelos algo más pesados que el manzano. Añadir compost al hoyo de plantación." />

      <SectionTitleX c={c}>🌿 Cuidados</SectionTitleX>
      <StepX c={c} num={1} text="Riego: regular. El peral es más tolerante a la sequía que el manzano. En verano BCN, riego cada 7-10 días en tierra (cada 3-4 días en maceta)." />
      <StepX c={c} num={2} text="Fertilización: primavera (nitrógeno moderado), verano (potasio). El peral no es tan goloso. Compost en otoño." />
      <StepX c={c} num={3} text="Aclareo de frutos: dejar 1-2 peras por racimo, separadas 15-20cm. El peral tiende a cargar demasiado y dar frutos pequeños." />
      <StepX c={c} num={4} text="Fuego bacteriano (Erwinia amylovora): enfermedad GRAVE. Síntomas: ramas se secan de repente como quemadas, hojas negras que no caen. Protocolo: podar 30-40cm por debajo de la zona afectada (con tijeras desinfectadas entre cortes), quemar el material podado. Notificar si es zona protegida." />

      <SectionTitleX c={c}>🪴 Maceta</SectionTitleX>
      <StepX c={c} num={1} text="Mínimo 50 litros. Elegir portainjerto enanizante de membrillero (EMC). Peral en maceta de 60-80L produce 15-30 peras al año." />

      <SectionTitleX c={c}>🐛 Plagas</SectionTitleX>
      <StepX c={c} num={1} text="Fuego bacteriano: descrito arriba. Es la enfermedad más grave. Prevención: no fertilizar en exceso (el vigor excesivo la favorece)." />
      <StepX c={c} num={2} text="Pulgón: en brotes tiernos. Jabón potásico. El peral es menos propenso que el manzano." />
      <StepX c={c} num={3} text="Carpocapsa: igual que en manzano. Larva que perfora el fruto." />
      <StepX c={c} num={4} text="Oídio: polvo blanco en hojas. Tratamiento: azufre." />

      <SectionTitleX c={c}>✂️ Poda</SectionTitleX>
      <StepX c={c} num={1} text="Poda de formación: se puede formar en vaso abierto o en PIRÁMIDE (un tronco central con ramas laterales en espiral). La pirámide ahorra espacio y es más productiva." />
      <StepX c={c} num={2} text="Poda de invierno: eliminar ramas verticales vigorosas (chupones), ramas que se cruzan, y ramas que crecen hacia el centro." />
      <StepX c={c} num={3} text="El peral fructifica en ramitas cortas (lamburdas) que viven varios años. Mantenerlas, no cortarlas." />

      <SectionTitleX c={c}>🧺 Cosecha</SectionTitleX>
      <StepX c={c} num={1} text="Época: julio a septiembre según variedad. 'Conference': agosto-septiembre. 'Limonera': julio-agosto. 'Ercolini': julio." />
      <StepX c={c} num={2} text="La pera se cosecha aún DURA y termina de madurar fuera del árbol (es climatérica). Cosechar cuando cambia de verde oscuro a verde claro y se desprende con un giro suave. Madurar a temperatura ambiente 3-7 días." />
      <StepX c={c} num={3} text="Conservación: en nevera, 2-4 semanas. La pera madura es delicada — consumir en 2-3 días." />

      <SectionTitleX c={c}>🍽️ Variedades para BCN</SectionTitleX>
      <StepX c={c} num={1} text="'Conference' — la más cultivada en Europa. Fruto alargado, piel verde-marrón, pulpa dulce y aromática. Parcialmente autofértil. Muy fiable en BCN." />
      <StepX c={c} num={2} text="'Limonera' (Dr. Jules Guyot) — fruto grande, amarillo limón, pulpa fundente y muy jugosa. Cosecha en julio. Excelente para clima suave." />
      <StepX c={c} num={3} text="'Ercolini' (Coscia) — fruto pequeño-mediano, verde-amarillo, muy precoz (julio). Muy dulce. Ideal para alargar temporada." />
      <StepX c={c} num={4} text="'Williams' (Bartlett) — la pera clásica amarilla. Muy dulce y aromática. Cosecha en agosto. Necesita polinizador ('Conference' funciona)." />
    </div>
  );
}

// ============================================================
// OTROS FRUTALES
// ============================================================

function HIGUERA() {
  const c = FRUTALES_COLORS;
  return (
    <div>
      <InfoBoxX c={c}>
        <strong>Higuera (Ficus carica)</strong> — el frutal mediterráneo casi indestructible. Tolera sequía extrema una vez establecida, suelos pobres y calor intenso. Raíces muy invasivas — NO plantar cerca de casa, tuberías o muros. Propagación por esqueje es ridículamente fácil. Da brevas en junio e higos en agosto-septiembre. Para principiantes y para gente sin tiempo.
      </InfoBoxX>

      <SectionTitleX c={c}>FICHA RÁPIDA</SectionTitleX>
      <div style={{ display: "grid", gridTemplateColumns: "1fr 1fr", gap: "10px", marginBottom: "16px" }}>
        <StatBoxX c={c} label="Dificultad" value="Muy fácil" />
        <StatBoxX c={c} label="Años a cosecha" value="1-2 años desde esqueje" />
        <StatBoxX c={c} label="Sol" value="Pleno sol" />
        <StatBoxX c={c} label="Agua" value="Muy poca una vez establecida" />
        <StatBoxX c={c} label="Maceta posible" value="Sí, mínimo 50L" />
        <StatBoxX c={c} label="Tamaño adulto" value="3-8m (en maceta 2-3m)" />
        <StatBoxX c={c} label="Polinización" value="Autofértil (variedades comunes)" />
        <StatBoxX c={c} label="Resistencia frío" value="Hasta -10°C" />
      </div>

      <SectionTitleX c={c}>🌱 Plantación</SectionTitleX>
      <StepX c={c} num={1} text="Propagación por esqueje: EXTREMADAMENTE FÁCIL. En invierno, cortar una rama de 20-30cm del grosor de un dedo, clavarla en tierra húmeda (2/3 enterrada), y en 3-4 semanas emite raíces. Sin hormonas, sin cuidados especiales." />
      <StepX c={c} num={2} text="Época: otoño o primavera. Evitar pleno verano en maceta." />
      <StepX c={c} num={3} text="UBICACIÓN: lejos de edificios, tuberías, piscinas y muros (a más de 5m). Las raíces de la higuera son agresivas y rompen hormigón y tuberías con los años." />
      <StepX c={c} num={4} text="Suelo: cualquier cosa. Tolera suelos pedregosos, calcáreos, pobres. Solo exige buen drenaje. Si plantas en hoyo, añadir grava al fondo." />

      <SectionTitleX c={c}>🌿 Cuidados</SectionTitleX>
      <StepX c={c} num={1} text="Riego: mínimo una vez establecida (2-3 años). En maceta, regar cuando el sustrato está seco (cada 7-15 días en verano). El exceso de agua da higos insípidos y rajados." />
      <StepX c={c} num={2} text="Fertilización: prácticamente innecesaria. Un puñado de compost en primavera si la ves débil. El exceso de nitrógeno da mucha hoja y pocos higos." />
      <StepX c={c} num={3} text="Acolchado: paja o corteza para mantener humedad los primeros años. Una vez establecida, olvídate." />

      <SectionTitleX c={c}>🪴 Maceta</SectionTitleX>
      <StepX c={c} num={1} text="Mínimo 50 litros. La higuera en maceta necesita riego más frecuente que en tierra. Una maceta de 80-100L permite un árbol de 2-3m productivo." />
      <StepX c={c} num={2} text="Ventaja en maceta: las raíces están contenidas — no romperán nada. Desventaja: necesita riego y fertilización." />
      <StepX c={c} num={3} text="Trasplante cada 2-3 años a maceta mayor hasta alcanzar tamaño deseado. Luego, renovación superficial de sustrato." />

      <SectionTitleX c={c}>🐛 Plagas</SectionTitleX>
      <StepX c={c} num={1} text="Mosca de la fruta: perfora higos maduros. Solución: trampas, cosechar puntualmente. Los higos abiertos son especialmente vulnerables." />
      <StepX c={c} num={2} text="Cochinilla: en ramas y base de hojas. Aceite de neem + jabón potásico." />
      <StepX c={c} num={3} text="Pájaros: adoran los higos maduros. Malla o espantapájaros si hay competencia intensa." />
      <StepX c={c} num={4} text="Podredumbre de higos: exceso de agua o lluvias en maduración. La única solución es preventiva: menos riego en maduración." />

      <SectionTitleX c={c}>✂️ Poda</SectionTitleX>
      <StepX c={c} num={1} text="Poda MÍNIMA. La higuera no necesita poda para producir. Podar solo: ramas secas, ramas que estorban (crecen hacia un camino), o para contener el tamaño." />
      <StepX c={c} num={2} text="Época: finales de invierno (febrero) cuando la savia está baja. NUNCA podar en primavera — la higuera 'sangra' látex abundantemente y se debilita." />
      <StepX c={c} num={3} text="En maceta, podar para limitar altura y anchura. La higuera responde bien a la poda de contención." />

      <SectionTitleX c={c}>🧺 Cosecha</SectionTitleX>
      <StepX c={c} num={1} text="Brevas: junio (se forman en otoño anterior en madera vieja). Higos principales: agosto-septiembre (se forman en brotes del año)." />
      <StepX c={c} num={2} text="El higo está listo cuando cuelga del pedúnculo (el rabillo se dobla), está blando al tacto y a veces suelta una gota de miel por el ojo. La piel se agrieta ligeramente. Cosechar con tijeras, dejando un poco de pedúnculo." />
      <StepX c={c} num={3} text="Conservación: MUY perecederos. Temperatura ambiente: 1-2 días. Nevera: 3-5 días. Para conservar: secar al sol en malla (3-5 días) o congelar enteros." />

      <SectionTitleX c={c}>🍽️ Variedades para BCN</SectionTitleX>
      <StepX c={c} num={1} text="'Cuello de Dama' — higo grande, piel amarilla-verdosa, pulpa roja y dulce. Excelente para fresco. Produce brevas e higos. Muy productiva." />
      <StepX c={c} num={2} text="'Col de Dam' (Coll de Dama) — higo negro-púrpura, pulpa roja intensa, sabor excepcional. La variedad premium. No produce brevas. Cosecha septiembre." />
      <StepX c={c} num={3} text="'Goina' — variedad mallorquina, bífera (brevas + higos). Muy resistente a la sequía y suelos pobres. Excelente adaptación mediterránea." />
      <StepX c={c} num={4} text="'Brown Turkey' — la más cultivada del mundo. Muy productiva, bífera, frutos medianos marrón-púrpura. La más fácil de todas." />
    </div>
  );
}

function VID() {
  const c = FRUTALES_COLORS;
  return (
    <div>
      <InfoBoxX c={c}>
        <strong>Vid para uva de mesa (Vitis vinifera)</strong> — la parra clásica mediterránea. En Barcelona se cultiva en emparrado o espaldera. Necesita poda de invierno rigurosa y poda en verde en verano. La uva de tu propia parra, caliente de sol en septiembre, es un placer antiguo. Oídio y mildiu son las enfermedades principales: prevenir con azufre y cobre.
      </InfoBoxX>

      <SectionTitleX c={c}>FICHA RÁPIDA</SectionTitleX>
      <div style={{ display: "grid", gridTemplateColumns: "1fr 1fr", gap: "10px", marginBottom: "16px" }}>
        <StatBoxX c={c} label="Dificultad" value="Media (poda rigurosa)" />
        <StatBoxX c={c} label="Años a cosecha" value="2-3 años" />
        <StatBoxX c={c} label="Sol" value="Pleno sol" />
        <StatBoxX c={c} label="Agua" value="Riego moderado" />
        <StatBoxX c={c} label="Maceta posible" value="Sí, mínimo 50L" />
        <StatBoxX c={c} label="Tamaño adulto" value="5-10m de largo (guiada)" />
        <StatBoxX c={c} label="Polinización" value="Autofértil" />
        <StatBoxX c={c} label="Resistencia frío" value="Hasta -15°C" />
      </div>

      <SectionTitleX c={c}>🌱 Plantación</SectionTitleX>
      <StepX c={c} num={1} text="Época: otoño-invierno (noviembre-febrero) a raíz desnuda. Plantar en hoyo profundo (50cm) con buen drenaje. Las raíces de la vid profundizan mucho." />
      <StepX c={c} num={2} text="Emparrado o espaldera: la vid necesita estructura. Emparrado horizontal (tipo pérgola) o espaldera vertical con alambres. Decidir ANTES de plantar." />
      <StepX c={c} num={3} text="Sustrato: la vid crece en casi cualquier suelo. Prefiere suelos calizos y pedregosos. En maceta: 60% sustrato universal + 20% arena + 20% perlita. Buen drenaje ESENCIAL." />

      <SectionTitleX c={c}>🌿 Cuidados</SectionTitleX>
      <StepX c={c} num={1} text="Riego: moderado. La vid tolera sequía extrema. En verano BCN, riego cada 10-15 días en tierra (cada 5-7 días en maceta). El exceso de agua da uvas insípidas y rajadas." />
      <StepX c={c} num={2} text="Fertilización: primavera (compost). La vid no es golosa. El exceso de nitrógeno favorece enfermedades y da uvas de baja calidad." />
      <StepX c={c} num={3} text="Tratamiento preventivo: azufre en polvo cada 3-4 semanas en primavera-verano para oídio. Cobre (caldo bordelés) preventivo para mildiu. Son los dos productos clásicos y efectivos." />

      <SectionTitleX c={c}>🪴 Maceta</SectionTitleX>
      <StepX c={c} num={1} text="Mínimo 50 litros. La vid en maceta es perfectamente posible. Necesita riego y fertilización regulares." />
      <StepX c={c} num={2} text="En maceta, formar una mini-pérgola o guiar contra una pared con alambres. Limitar a 2-3 brazos y 6-10 racimos." />

      <SectionTitleX c={c}>🐛 Plagas</SectionTitleX>
      <StepX c={c} num={1} text="Oídio (Uncinula necator): polvo blanco en hojas y racimos. La enfermedad más común. Preventivo: azufre en polvo desde brotación. Curativo: azufre mojable." />
      <StepX c={c} num={2} text="Mildiu (Plasmopara viticola): manchas amarillas en hojas, pelusa blanca en envés. Favorecido por lluvias primaverales. Preventivo: cobre (caldo bordelés) cada 10-14 días en primavera." />
      <StepX c={c} num={3} text="Polilla del racimo (Lobesia botrana): oruga que perfora uvas. Solución: Bacillus thuringiensis en momento de puesta." />
      <StepX c={c} num={4} text="Pájaros y avispas: atacan racimos maduros. Solución: bolsas de papel o malla sobre los racimos." />

      <SectionTitleX c={c}>✂️ Poda</SectionTitleX>
      <StepX c={c} num={1} text="Poda de invierno (diciembre-enero): ESENCIAL. La vid fructifica en brotes del año que salen de madera del año anterior. Dejar 2-3 yemas por brazo (poda corta). Eliminar el resto de madera. Sin poda = maraña improductiva." />
      <StepX c={c} num={2} text="Poda en verde (verano): eliminar brotes sin racimos (infructíferos), despuntar brotes fructíferos dejando 2-3 hojas después del último racimo, quitar hijuelos de las axilas. Esto concentra energía en los racimos." />
      <StepX c={c} num={3} text="Aclareo de racimos: si hay demasiados, dejar 1 racimo por brote fructífero. Más racimos = uvas más pequeñas y maduración desigual." />

      <SectionTitleX c={c}>🧺 Cosecha</SectionTitleX>
      <StepX c={c} num={1} text="Época: agosto a octubre según variedad. 'Moscatel': agosto-septiembre. 'Red Globe': septiembre-octubre." />
      <StepX c={c} num={2} text="La uva está lista cuando tiene color uniforme, la piel se vuelve translúcida, y el sabor es dulce. Probarlas es la mejor guía. Cosechar con tijeras, cortando el racimo entero." />
      <StepX c={c} num={3} text="Conservación: nevera 5-10 días. NO lavar hasta consumir. Para pasas: variedades sin semillas, secar al sol con malla (5-7 días)." />

      <SectionTitleX c={c}>🍽️ Variedades para BCN</SectionTitleX>
      <StepX c={c} num={1} text="'Moscatel de Alejandría' — la uva de mesa clásica mediterránea. Racimos grandes, uvas dulces y aromáticas con semillas. Cosecha agosto-septiembre. Muy resistente." />
      <StepX c={c} num={2} text="'Red Globe' — uva roja grande, crujiente, con semillas. Cosecha septiembre-octubre. Muy productiva y decorativa." />
      <StepX c={c} num={3} text="'Flame Seedless' — uva roja sin semillas, dulce y crujiente. Cosecha agosto. Ideal para niños. Necesita más calor que Moscatel." />
      <StepX c={c} num={4} text="'Italia' — uva blanca dorada, muy dulce y aromática (moscatel). Racimos grandes. Cosecha septiembre-octubre. Excelente para mesa." />
    </div>
  );
}

function KIWI() {
  const c = FRUTALES_COLORS;
  return (
    <div>
      <InfoBoxX c={c}>
        <strong>Kiwi (Actinidia deliciosa)</strong> — planta trepadora DIOICA: necesitas 1 macho + 1-2 hembras para tener fruto. Emparrado robusto tipo pérgola (soporta mucho peso). Riego abundante en verano. Poda de invierno y verano. Cosecha en octubre-noviembre. Sensible al viento fuerte. La variedad 'Hayward' es el estándar mundial.
      </InfoBoxX>

      <SectionTitleX c={c}>FICHA RÁPIDA</SectionTitleX>
      <div style={{ display: "grid", gridTemplateColumns: "1fr 1fr", gap: "10px", marginBottom: "16px" }}>
        <StatBoxX c={c} label="Dificultad" value="Media (emparrado + poda)" />
        <StatBoxX c={c} label="Años a cosecha" value="3-5 años (paciencia)" />
        <StatBoxX c={c} label="Sol" value="Pleno sol o semi-sombra" />
        <StatBoxX c={c} label="Agua" value="ABUNDANTE en verano" />
        <StatBoxX c={c} label="Maceta posible" value="Sí, mínimo 80L (difícil)" />
        <StatBoxX c={c} label="Tamaño adulto" value="5-8m de largo (guiada)" />
        <StatBoxX c={c} label="Polinización" value="DIOICA (macho + hembra)" />
        <StatBoxX c={c} label="Resistencia frío" value="Hasta -10°C" />
      </div>

      <SectionTitleX c={c}>🌱 Plantación</SectionTitleX>
      <StepX c={c} num={1} text="Época: otoño-invierno. Plantar 1 macho ('Tomuri' o 'Matua') + 1-2 hembras ('Hayward'). Un macho poliniza hasta 5-8 hembras. Distancia: 4-5m entre plantas." />
      <StepX c={c} num={2} text="Emparrado: pérgola robusta (postes de madera de 10-12cm de sección, altura 2m, con cables o cañizo horizontal). La planta adulta con fruta puede pesar 100kg+. La estructura debe ser fuerte." />
      <StepX c={c} num={3} text="Sustrato: profundo, rico en materia orgánica, pH 6-7, bien drenado. Añadir mucho compost al hoyo. El kiwi es muy goloso en nutrientes." />

      <SectionTitleX c={c}>🌿 Cuidados</SectionTitleX>
      <StepX c={c} num={1} text="Riego: ABUNDANTE y constante en verano. El kiwi es una planta de clima húmedo que sufre con la sequía. En BCN, riego cada 2-3 días en verano. Acolchar generosamente." />
      <StepX c={c} num={2} text="Fertilización: muy exigente. Abono rico en nitrógeno y potasio cada 4-6 semanas de marzo a septiembre. Añadir compost y humus de lombriz en primavera." />
      <StepX c={c} num={3} text="Protección del viento: las hojas del kiwi son grandes y frágiles — el viento las desgarra. Plantar en zona protegida o poner barrera cortavientos." />

      <SectionTitleX c={c}>🪴 Maceta</SectionTitleX>
      <StepX c={c} num={1} text="Mínimo 80 litros. El kiwi es una planta enorme. En maceta, limitar a 1 tronco principal y producción de 15-30 kiwis." />
      <StepX c={c} num={2} text="Solo para terrazas grandes con emparrado fuerte. En maceta pequeña (<50L), el kiwi sobrevive pero no produce fruta de calidad." />

      <SectionTitleX c={c}>🐛 Plagas</SectionTitleX>
      <StepX c={c} num={1} text="Araña roja: en verano seco. Solución: pulverizar el envés con agua frecuentemente, aceite de neem si hay plaga." />
      <StepX c={c} num={2} text="Pulgón: ocasional en brotes tiernos. Jabón potásico." />
      <StepX c={c} num={3} text="Podredumbre de raíz (Phytophthora): por encharcamiento. Prevención: excelente drenaje." />

      <SectionTitleX c={c}>✂️ Poda</SectionTitleX>
      <StepX c={c} num={1} text="Poda de invierno (enero-febrero): el kiwi fructifica en brotes del año que salen de madera del año anterior. Dejar un tronco principal con brazos horizontales sobre la pérgola. De esos brazos, dejar brotes fructíferos cada 30-40cm con 6-8 yemas." />
      <StepX c={c} num={2} text="Poda en verde (verano): acortar los brotes fructíferos dejando 4-6 hojas después del último fruto. Eliminar chupones y brotes vigorosos sin fruto." />

      <SectionTitleX c={c}>🧺 Cosecha</SectionTitleX>
      <StepX c={c} num={1} text="Época: octubre-noviembre. El kiwi se cosecha DURO y luego se madura." />
      <StepX c={c} num={2} text="Cosechar cuando la fruta alcanza tamaño completo y las semillas son negras. Madurar a temperatura ambiente junto a manzanas (emiten etileno). Tarda 1-3 semanas en estar blando." />
      <StepX c={c} num={3} text="Conservación: en nevera, los kiwis duros aguantan 2-3 meses. Sacar según necesites para madurar." />

      <SectionTitleX c={c}>🍽️ Variedades para BCN</SectionTitleX>
      <StepX c={c} num={1} text="'Hayward' (hembra) — el kiwi estándar mundial. Fruto grande, ovalado, piel marrón y pulpa verde. Excelente sabor. Necesita macho 'Tomuri'." />
      <StepX c={c} num={2} text="'Tomuri' (macho) — el polinizador estándar. Muy florífero. 1 macho para hasta 5 hembras." />
      <StepX c={c} num={3} text="'Soreli' (hembra) — kiwi amarillo (pulpa dorada). Más dulce y aromático que el verde. Necesita macho compatible." />
    </div>
  );
}

function GRANADO() {
  const c = FRUTALES_COLORS;
  return (
    <div>
      <InfoBoxX c={c}>
        <strong>Granado (Punica granatum)</strong> — arbusto/árbol mediterráneo casi indestructible. Tolera sequía, suelos pobres y calor extremo. Floración espectacular (rojo intenso) en primavera. Frutos en otoño. Ideal para principiantes y para quien no quiere preocuparse. La variedad 'Wonderful' es la comercial estándar.
      </InfoBoxX>

      <SectionTitleX c={c}>FICHA RÁPIDA</SectionTitleX>
      <div style={{ display: "grid", gridTemplateColumns: "1fr 1fr", gap: "10px", marginBottom: "16px" }}>
        <StatBoxX c={c} label="Dificultad" value="Muy fácil" />
        <StatBoxX c={c} label="Años a cosecha" value="2-3 años" />
        <StatBoxX c={c} label="Sol" value="Pleno sol (MÁXIMO sol)" />
        <StatBoxX c={c} label="Agua" value="Muy poca (sequía extrema)" />
        <StatBoxX c={c} label="Maceta posible" value="Sí, mínimo 40L" />
        <StatBoxX c={c} label="Tamaño adulto" value="2-5m (arbusto o arbolito)" />
        <StatBoxX c={c} label="Polinización" value="Autofértil" />
        <StatBoxX c={c} label="Resistencia frío" value="Hasta -12°C" />
      </div>

      <SectionTitleX c={c}>🌱 Plantación</SectionTitleX>
      <StepX c={c} num={1} text="Época: otoño o primavera. El granado prefiere climas cálidos — en BCN plantar en primavera para que tenga todo el verano." />
      <StepX c={c} num={2} text="Suelo: cualquier cosa. Tolera suelos calcáreos, pedregosos, pobres, salinos. Solo exige buen drenaje. El granado crece donde otros árboles mueren." />
      <StepX c={c} num={3} text="Sol: MÁXIMO sol. A más sol, más flores y más frutos. Las granadas necesitan calor para madurar bien." />

      <SectionTitleX c={c}>🌿 Cuidados</SectionTitleX>
      <StepX c={c} num={1} text="Riego: muy poco. En tierra, riego de establecimiento el primer año, luego casi olvidarse. En maceta, regar cuando el sustrato está seco. El exceso de agua revienta los frutos." />
      <StepX c={c} num={2} text="Fertilización: prácticamente innecesaria. Un puñado de compost en primavera. El granado produce más y mejor fruta en condiciones de cierto estrés." />
      <StepX c={c} num={3} text="Las flores son espectaculares (rojo intenso, 3-5cm). Si el árbol está feliz, produce flores durante semanas en mayo-junio. La floración es uno de los grandes atractivos." />

      <SectionTitleX c={c}>🪴 Maceta</SectionTitleX>
      <StepX c={c} num={1} text="Mínimo 40 litros. El granado se adapta muy bien a maceta. Una maceta de 60L produce 10-20 granadas al año." />
      <StepX c={c} num={2} text="En maceta, regar cada 7-15 días en verano (según tamaño). Menos agua = frutos más dulces y menos agrietados." />

      <SectionTitleX c={c}>🐛 Plagas</SectionTitleX>
      <StepX c={c} num={1} text="Pulgón: ocasional en brotes tiernos. Jabón potásico." />
      <StepX c={c} num={2} text="Mosca de la fruta: puede atacar frutos abiertos o agrietados. Cosechar puntualmente." />
      <StepX c={c} num={3} text="Agrietado de frutos: NO es plaga, es riego irregular. Si llueve o riegas tras una sequía, el fruto absorbe agua rápido y la piel se raja. Riego constante y moderado es la solución." />

      <SectionTitleX c={c}>✂️ Poda</SectionTitleX>
      <StepX c={c} num={1} text="Poda ligera. El granado tiende a ser arbustivo (varios troncos). Se puede formar como arbusto o como arbolito (un tronco principal). Elegir la forma y ser consistente." />
      <StepX c={c} num={2} text="Eliminar ramas secas, enfermas o chupones verticales del interior. El granado fructifica en ramitas cortas del año — preservarlas." />
      <StepX c={c} num={3} text="Época: finales de invierno (febrero) o después de la cosecha." />

      <SectionTitleX c={c}>🧺 Cosecha</SectionTitleX>
      <StepX c={c} num={1} text="Época: septiembre a noviembre en BCN. Las granadas maduran escalonadamente." />
      <StepX c={c} num={2} text="La granada está lista cuando la piel cambia de color (según variedad, rojo intenso o amarillo-rosado), suena a hueco al golpear suavemente, y la corona (cáliz) se abre ligeramente. Cosechar con tijeras — NO tirar." />
      <StepX c={c} num={3} text="Conservación: temperatura ambiente fresca, 2-4 semanas. Nevera: 1-2 meses. Las granadas son excelentes para conservación." />

      <SectionTitleX c={c}>🍽️ Variedades para BCN</SectionTitleX>
      <StepX c={c} num={1} text="'Wonderful' — la variedad comercial estándar. Fruto grande, piel roja intensa, granos rojos y dulces. Muy productiva. La más fácil de encontrar en viveros." />
      <StepX c={c} num={2} text="'Mollar de Elche' — variedad tradicional española. Granos dulces con semilla casi imperceptible (se puede comer entera). Piel amarilla-rosada. Muy adaptada al mediterráneo." />
      <StepX c={c} num={3} text="'Valenciana' — fruto grande, piel rosada, granos muy dulces. Temprana (septiembre). Muy adaptada al clima local." />
      <StepX c={c} num={4} text="'Nana' — variedad enana, ideal para maceta. Porte compacto (1-1.5m). Frutos pequeños pero muy decorativos. Perfecta para terraza pequeña." />
    </div>
  );
}


// ============================================================
// FAQ · BIBLIOGRAFÍA · GLOSARIO
// ============================================================

function FAQ_FRUTALES() {
  const c = FRUTALES_COLORS;
  const faqs = [
    { q: "Nunca he plantado un árbol frutal. ¿Por dónde empiezo?", a: "3 frutales: un limonero 4 estaciones en maceta de 50L, fresas en jardinera, y una higuera enana. Los tres son casi imposibles de matar, producen rápido y te enseñan lo básico de riego, poda y cosecha sin agobios. Inversión: ~100-150€. En 6 meses comerás tus primeras fresas." },
    { q: "Solo tengo un balcón, ¿puedo cultivar frutales?", a: "Perfectamente. Los frutales ideales para balcón en maceta: fresas (colgantes), frambuesa (en maceta de 30L), arándano (en maceta de 40L con sustrato ácido), limonero 4 estaciones (maceta de 40-50L), y granado enano. Todos producen fruta perfectamente en maceta si reciben al menos 6h de sol." },
    { q: "¿En serio puedo tener un limonero en una maceta?", a: "Sí, y es lo más normal en terrazas de Barcelona. Un limonero en maceta de 50-60L con buen sustrato, riego y fertilización produce 200-400 limones al año. Vive feliz 15-20 años. El secreto: maceta grande, abono cítricos cada 2 meses en temporada, y proteger del viento del norte." },
    { q: "Mi terraza tiene mucho viento. ¿Qué frutales aguantan?", a: "Los más resistentes al viento: granado, higuera (si la podas baja), cítricos enanos (poner barrera cortavientos), mora y frambuesa. Los más sensibles: kiwi (hojas grandes que se desgarran), cerezo, melocotonero. Solución universal: seto cortavientos o malla de ocultación." },
    { q: "¿Necesito 2 árboles de cada frutal para que den fruto?", a: "Depende del frutal. AUTOFÉRTILES (1 árbol basta): limonero, naranjo, mandarino, melocotonero, ciruelo (la mayoría), albaricoquero, higuera, vid, granado, mora, frambuesa, fresa. NECESITAN POLINIZADOR (2 variedades): arándano, manzano, peral (la mayoría), cerezo (la mayoría), kiwi (macho + hembra)." },
    { q: "¿Cuánto tardan en dar fruta desde que planto?", a: "Fresas: 6-8 meses. Frambuesas: 1 año. Higuera: 1-2 años. Melocotonero, ciruelo, limonero: 2-3 años. Manzano, peral, granado: 3-4 años. Cerezo, kiwi: 3-5 años. Paciencia — un frutal es una inversión a largo plazo." },
    { q: "¿Cómo evito que los pájaros se coman toda la fruta?", a: "Malla anti-pájaros sobre el árbol/cultivo durante la fructificación. Es la única solución efectiva para cerezas, arándanos, frambuesas, higos y uvas. Instalar cuando los frutos empiezan a cambiar de color. Métodos visuales (CDs, espantapájaros) funcionan 2-3 días y los pájaros se acostumbran." },
    { q: "Las hojas de mi limonero están amarillas con los nervios verdes. ¿Qué le pasa?", a: "Clorosis férrica: falta de hierro. Muy común en Barcelona por el agua calcárea del grifo. Solución: comprar quelato de hierro en garden center y aplicarlo según dosis. Para prevenirlo a largo plazo: regar con agua acidulada (vinagre blanco 5-10ml/L de agua) una vez al mes." },
    { q: "¿Puedo plantar frutales en verano?", a: "NO se recomienda. Los frutales plantados en pleno verano sufren estrés hídrico severo y la mayoría mueren o quedan muy debilitados. Las épocas ideales son: OTOÑO (octubre-noviembre) para frutales de hueso y pepita a raíz desnuda. PRIMAVERA (marzo-mayo) para cítricos y frutales en contenedor." },
    { q: "¿Qué hago con tanta fruta cuando el árbol produce de golpe?", a: "Problema típico de frutales: 50kg de ciruelas en 2 semanas. Soluciones: (1) Congelar — la mayoría de frutas se congelan bien troceadas, (2) Mermelada y conservas — tradición mediterránea, (3) Regalar a vecinos y amigos — crea comunidad, (4) Deshidratar — higos, ciruelas y uvas secas aguantan meses, (5) Plantar variedades de cosecha escalonada." },
    { q: "¿Los frutales necesitan productos químicos?", a: "NO. Un huerto frutal ecológico funciona perfectamente con: aceite de neem (insecticida natural), jabón potásico (pulgón y cochinilla), caldo bordelés/cobre (hongos preventivo), azufre (oídio), Bacillus thuringiensis (orugas), cola de caballo en decocción (moteado del manzano), y biodiversidad (mariquitas, crisopas, pájaros insectívoros)." },
    { q: "¿Puedo tener frutales si me voy de vacaciones en verano?", a: "Sí, pero necesita planificación. Soluciones: (1) Sistema de riego por goteo con programador (30-50€) — inversión que se amortiza sola, (2) Macetas con autorriego, (3) Vecino o amigo que riegue (ofrécele fruta a cambio). Los frutales en tierra establecidos aguantan 2-3 semanas sin riego en BCN (excepto julio-agosto). En maceta, máximo 3-5 días sin riego en verano." },
  ];
  const [query, setQuery] = React.useState("");
  const filtered = query.trim() === "" ? faqs : faqs.filter(f => f.q.toLowerCase().includes(query.toLowerCase()) || f.a.toLowerCase().includes(query.toLowerCase()));
  return (
    <div>
      <InfoBoxX c={c}>
        Preguntas frecuentes sobre frutales en clima mediterráneo. Respuestas directas basadas en experiencia real de cultivo en Barcelona y área metropolitana.
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

function BIBLIO_FRUTALES() {
  const c = FRUTALES_COLORS;
  return <BibliografiaBlock c={c}
    intro="Bibliografía y recursos para fruticultura mediterránea. Libros clásicos + canales actuales + comunidades activas en España y Cataluña."
    libros={[
      { titulo: "Frutales para el jardín y la terraza", autor: "Fausta Mainardi Fazio", nota: "Guía práctica y visual. Perfecta para principiantes con espacio limitado." },
      { titulo: "Cultivo de cítricos en maceta", autor: "Varios (Ed. De Vecchi)", nota: "Específico para cítricos en contenedor. Muy relevante para BCN." },
      { titulo: "La poda de los árboles frutales", autor: "Helmut Loose", nota: "Referencia visual para poda de todos los frutales. Paso a paso con dibujos." },
      { titulo: "El huerto familiar ecológico", autor: "Mariano Bueno", nota: "Incluye sección extensa de frutales. El referente español en cultivo ecológico." },
      { titulo: "Cultivar frutales en maceta", autor: "Alan Titchmarsh", nota: "Enfoque británico pero adaptable. Muy práctico." },
    ]}
    web={[
      { nombre: "Planfor (planfor.es)", url: "https://www.planfor.es", nota: "Catálogo enorme de frutales. Fichas detalladas por variedad. Envío a domicilio." },
      { nombre: "Frutales Sánchez", url: "https://www.frutalessanchez.com", nota: "Vivero español especializado. Variedades adaptadas al clima mediterráneo." },
      { nombre: "Agromática", url: "https://www.agromatica.es", nota: "Blog técnico agrícola español. Excelentes artículos sobre plagas y enfermedades de frutales." },
      { nombre: "Portal Frutícola", url: "https://www.portalfruticola.com", nota: "Portal profesional de fruticultura. Noticias, variedades, técnicas de cultivo." },
    ]}
    comunidad={[
      { nombre: "r/BackyardOrchard (Reddit)", nota: "Comunidad global de fruticultura de traspatio. Muy útil para resolver dudas concretas." },
      { nombre: "r/gardening (Reddit)", nota: "La comunidad más grande. Subforos por tipo de frutal." },
      { nombre: "Asociación de Vecinos con huerto urbano BCN", nota: "Intercambio de esquejes, plantones, consejos locales de Barcelona." },
      { nombre: "Mercado de la Terra (Slow Food Barcelona)", nota: "Productores locales, variedades tradicionales, intercambio de conocimientos." },
    ]}
  />;
}

function GLOSARIO_FRUTALES() {
  const c = FRUTALES_COLORS;
  const terminos = [
    { term: "A raíz desnuda", def: "Árbol que se vende sin tierra en las raíces, solo con la raíz envuelta. Más barato y mejor arranque. Se compra y planta en otoño-invierno (dormancia)." },
    { term: "Aclareo de frutos", def: "Eliminar frutos sobrantes cuando son pequeños para que los que quedan sean más grandes y de mejor calidad. Crítico en melocotonero, manzano y peral." },
    { term: "Autofértil", def: "Variedad que no necesita otra variedad distinta para polinizarse. Produce fruto con un solo árbol. Ej: limonero, melocotonero, higuera." },
    { term: "Bífero", def: "Frutal que produce dos cosechas al año (brevas + higos en higuera, o primavera + otoño en frambuesas remontantes)." },
    { term: "Breva", def: "Primera cosecha del año en la higuera (junio). Se forma en otoño anterior sobre madera vieja. Fruto más grande que el higo de verano." },
    { term: "Caballón", def: "Montículo de tierra elevado para plantar frutales en suelos con mal drenaje. Evita encharcamiento y asfixia radicular." },
    { term: "Caldo bordelés", def: "Fungicida a base de sulfato de cobre neutralizado con cal. Preventivo clásico para lepra (melocotonero), mildiu (vid) y moteado (manzano)." },
    { term: "Chupón", def: "Brote vertical muy vigoroso que sale del tronco o ramas principales. Consume mucha energía, no da fruta y desequilibra el árbol. Se elimina en poda." },
    { term: "Climatérico", def: "Fruto que sigue madurando después de ser cosechado (manzana, pera, kiwi, ciruela). Emite etileno. Opuesto a no climatérico (cítricos, cereza, uva)." },
    { term: "Clorosis férrica", def: "Amarilleo de hojas por falta de hierro. Común en cítricos en BCN por agua calcárea. Solución: quelato de hierro y acidular el agua de riego." },
    { term: "Corona (de la fresa)", def: "Punto central de la planta de fresa de donde salen las hojas. Debe quedar a ras de tierra al plantar — enterrarla la pudre, dejarla fuera la seca." },
    { term: "Dioico", def: "Planta con sexos separados: hay plantas macho y plantas hembra. Para obtener fruto necesitas al menos 1 macho + 1 hembra. Ej: kiwi." },
    { term: "Emparrado", def: "Estructura horizontal (tipo pérgola) para guiar plantas trepadoras como la vid y el kiwi." },
    { term: "Entutorado", def: "Guiar la planta con cañas, alambres o estructuras para mantenerla vertical y facilitar el manejo. Obligatorio en frambuesa, mora, vid y kiwi." },
    { term: "Espaldera", def: "Sistema de conducción del árbol en un plano vertical contra una pared o alambres. Ahorra espacio y maximiza exposición solar." },
    { term: "Estolón", def: "Tallo rastrero que emite la fresa para propagarse. De cada estolón nace una nueva planta hija. Se cortan durante la producción de fruta." },
    { term: "Floración tardía", def: "Variedad que florece más tarde que la media. Ventaja en zonas con riesgo de heladas primaverales. Importante en albaricoquero para BCN." },
    { term: "Fuego bacteriano", def: "Enfermedad grave del peral (Erwinia amylovora). Ramas se secan como quemadas. Se debe podar y quemar la madera afectada y desinfectar herramientas." },
    { term: "Horas-frío", def: "Número de horas con temperatura <7°C durante el invierno. Muchos frutales las necesitan para florecer correctamente. Factor limitante en BCN para manzano, peral y cerezo." },
    { term: "Lamburda", def: "Ramita corta y gruesa donde fructifican el manzano y el peral. Es productiva varios años — no se debe cortar en la poda." },
    { term: "Lepra / Abolladura", def: "Enfermedad fúngica del melocotonero (Taphrina deformans). Hojas se abollan y enrojecen. Preventivo con cobre en invierno. Muy común en clima mediterráneo." },
    { term: "Mildiu", def: "Enfermedad fúngica de la vid. Manchas amarillas en hojas y pelusa blanca en envés. Favorecido por lluvias. Preventivo con cobre." },
    { term: "Monilia", def: "Podredumbre parda de frutos de hueso. Frutos se pudren en el árbol con moho gris-marrón. Prevención con poda de ventilación." },
    { term: "Oídio", def: "Enfermedad fúngica (polvo blanco en hojas). Común en vid, melocotonero, mora. Tratamiento con azufre en polvo o mojable." },
    { term: "pH (del suelo)", def: "Mide acidez/alcalinidad. La mayoría de frutales prefieren pH 6-7. El arándano es la excepción: necesita pH 4.5-5.5 (muy ácido)." },
    { term: "Polinización cruzada", def: "Necesidad de que el polen de una variedad fecunde las flores de otra variedad distinta. Sin esto, el árbol no da fruto. Importante en manzano, peral, cerezo, arándano." },
    { term: "Portainjerto / Patrón", def: "La raíz y parte baja del tronco sobre la que se injerta la variedad deseada. Influye en tamaño final del árbol, resistencia a enfermedades y adaptación al suelo." },
    { term: "Poda en vaso abierto", def: "Sistema de formación con 3-4 ramas principales abiertas en copa, centro libre. Máxima entrada de luz. Estándar para melocotonero, ciruelo, albaricoquero y manzano." },
    { term: "Poda en verde", def: "Poda ligera durante el verano para eliminar brotes improductivos y controlar el vigor. Se aplica en vid, kiwi y melocotonero." },
    { term: "Pruina", def: "Capa de polvo blanco natural en la piel de ciruelas, uvas y arándanos. Protege el fruto. No se lava — es signo de frescura." },
    { term: "Pulgón lanígero", def: "Pulgón del manzano que forma colonias algodonosas blancas en ramas. Difícil de erradicar. Tratar con aceite de neem + jabón potásico y cepillar." },
    { term: "Remontante", def: "Variedad de frambuesa que produce fruta dos veces al año (junio y agosto-octubre) o de forma continua. Opuesto a no remontante (una sola cosecha)." },
    { term: "Rizoma", def: "Tallo subterráneo horizontal que emite raíces y brotes. Las frambuesas y moras se expanden por rizomas — de ahí su carácter invasivo." },
    { term: "Vaso abierto", def: "Sistema de formación con centro libre para entrada de luz y aire. Estándar para frutales de hueso." },
  ];
  const [query, setQuery] = React.useState("");
  const filtered = query.trim() === "" ? terminos : terminos.filter(t => t.term.toLowerCase().includes(query.toLowerCase()) || t.def.toLowerCase().includes(query.toLowerCase()));
  return (
    <div>
      <InfoBoxX c={c}>
        Glosario de términos de fruticultura mediterránea. Conceptos que aparecen en las fichas de cultivo explicados de forma sencilla.
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
