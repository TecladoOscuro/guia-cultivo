// GUÍA SETAS - MODO MANUAL FRIENDLY
// Cultivo desde cero pero usando productos pre-esterilizados (sin olla a presión, sin SAB, sin esporada).
// Tiempo: 4-6 semanas. Dificultad: media. Ideal novatos que quieren más control que el kit pero no quieren microbiología.

function COMPRA_SETAS_FRIENDLY() {
  const items = [
    { item: "🌾 Spawn bag pre-esterilizado (1-2kg grano)", precio: "20-35€", donde: "Grow shop", nota: "Bolsa con grano de centeno ya cocido, esterilizado y sellado. Tiene puerto de inyección (filtro micropore). Es el reemplazo de la olla a presión + frascos. Compra 1 para empezar.", prioridad: "ESENCIAL", tipo: "Consumible" },
    { item: "💉 Cultura líquida Psilocybe cubensis", precio: "20-35€", donde: "Internet", nota: "Más fácil y FIABLE que la jeringa de esporas. Contiene micelio ya activo en líquido nutritivo — coloniza más rápido (10-14 días vs 21) y resiste mejor la contaminación. Cepas recomendadas para novatos: Golden Teacher, B+, Mazatapec.", prioridad: "ESENCIAL", tipo: "Consumible" },
    { item: "🪣 Bulk substrate CVG hidratado (5L)", precio: "15-25€", donde: "Grow shop", nota: "Coco coir + vermiculita + yeso ya mezclado, hidratado y pasteurizado. Listo para usar. NO confundir con el coco coir seco — busca 'manure-based bulk substrate' o 'CVG hydrated'.", prioridad: "ESENCIAL", tipo: "Consumible" },
    { item: "📦 Monotub (caja plástica 40-65L con tapa)", precio: "12-25€", donde: "Tienda física", nota: "Caja transparente con tapa. Tú haces 4-6 agujeros de 2.5cm en los lados (a 10cm del fondo) para FAE pasivo. Tape los agujeros con filtro micropore (incluido en algunos kits) o algodón.", prioridad: "ESENCIAL", tipo: "Equipo" },
    { item: "💨 Cinta micropore (tipo médica)", precio: "3-6€", donde: "Farmacia", nota: "Para tapar agujeros del monotub. Deja pasar aire pero no contaminantes. 1 rollo basta para 5+ ciclos.", prioridad: "ESENCIAL", tipo: "Consumible" },
    { item: "🧴 Alcohol isopropílico 70% (1L)", precio: "8-12€", donde: "Farmacia", nota: "Desinfectar superficies, guantes, herramientas. Imprescindible.", prioridad: "ESENCIAL", tipo: "Consumible" },
    { item: "🧤 Guantes de nitrilo + mascarilla FFP2", precio: "5-10€", donde: "Farmacia", nota: "Reduces 90% del riesgo de contaminación. Mascarilla evita que tu aliento contamine. NO toques nada con manos desnudas durante inoculación.", prioridad: "ESENCIAL", tipo: "Consumible" },
    { item: "🌡️ Termómetro/higrómetro digital", precio: "8-15€", donde: "Internet", nota: "Monitorear 24-26°C en incubación, 22-24°C en fructificación. Higrómetro para verificar 90%+ HR.", prioridad: "ESENCIAL", tipo: "Equipo" },
    { item: "💧 Spray de agua destilada", precio: "3-8€", donde: "Farmacia", nota: "Para nebulizar dentro del monotub durante fructificación.", prioridad: "ESENCIAL", tipo: "Equipo" },
    { item: "🪥 Vermiculita seca (2L) — opcional", precio: "5-10€", donde: "Grow shop", nota: "Para 'casing layer' (capa de remate sobre el sustrato). Mejora rendimiento pero no es estrictamente necesario en monotub.", prioridad: "ÚTIL", tipo: "Consumible" },
  ];
  const [filterPrio, setFilterPrio] = React.useState([]);
  const [filterTipo, setFilterTipo] = React.useState([]);
  const [filterDonde, setFilterDonde] = React.useState([]);
  const togglePrio = (p) => setFilterPrio(s => s.includes(p) ? s.filter(x => x !== p) : [...s, p]);
  const toggleTipo = (t) => setFilterTipo(s => s.includes(t) ? s.filter(x => x !== t) : [...s, t]);
  const toggleDonde = (d) => setFilterDonde(s => s.includes(d) ? s.filter(x => x !== d) : [...s, d]);
  const filtered = items.filter(i =>
    (filterPrio.length === 0 || filterPrio.includes(i.prioridad)) &&
    (filterTipo.length === 0 || filterTipo.includes(i.tipo)) &&
    (filterDonde.length === 0 || filterDonde.includes(i.donde))
  );
  const prioColor = { "ESENCIAL": "#d4755b", "IMPORTANTE": "#dbb98c", "ÚTIL": "#c49a6c" };
  const tipoColor = { "Equipo": "#aa7c52", "Consumible": "#8a6240" };
  const dondeColor = { "Internet": "#aa7c52", "Grow shop": "#c49a6c", "Farmacia": "#8a6240", "Tienda física": "#dbb98c" };
  const availableDonde = [...new Set(items.map(i => i.donde))];

  return (
    <div>
      <InfoBoxM>
        Versión friendly: NO necesitas olla a presión, NO necesitas <GlossaryLink term="SAB (Still Air Box)">SAB</GlossaryLink>, NO necesitas microscopio. Compras todo pre-esterilizado y solo inyectas. Más rendimiento que el kit, menos hardcore que el manual avanzado clásico.
      </InfoBoxM>

      <SectionTitleM>FILTRAR POR PRIORIDAD</SectionTitleM>
      <div style={{ display: "flex", gap: "6px", marginBottom: "12px", flexWrap: "wrap" }}>
        {["ESENCIAL", "IMPORTANTE", "ÚTIL"].map(p => {
          const active = filterPrio.includes(p);
          return (
            <button key={p} onClick={() => togglePrio(p)} style={{
              background: active ? prioColor[p] : "transparent",
              color: active ? MUSHROOM_COLORS.bg : prioColor[p],
              border: `1.5px solid ${prioColor[p]}`,
              borderRadius: "16px", padding: "5px 12px",
              fontSize: "11px", fontWeight: "bold", letterSpacing: "0.5px",
              transition: "all 0.15s",
            }}>{p}</button>
          );
        })}
      </div>
      <SectionTitleM>FILTRAR POR TIPO</SectionTitleM>
      <div style={{ display: "flex", gap: "6px", marginBottom: "12px", flexWrap: "wrap" }}>
        {["Equipo", "Consumible"].map(t => {
          const active = filterTipo.includes(t);
          return (
            <button key={t} onClick={() => toggleTipo(t)} style={{
              background: active ? tipoColor[t] : "transparent",
              color: active ? MUSHROOM_COLORS.bg : tipoColor[t],
              border: `1.5px solid ${tipoColor[t]}`,
              borderRadius: "16px", padding: "5px 12px",
              fontSize: "11px", fontWeight: "bold", letterSpacing: "0.5px",
              transition: "all 0.15s",
            }}>{t}</button>
          );
        })}
      </div>
      <SectionTitleM>FILTRAR POR DÓNDE COMPRAR</SectionTitleM>
      <div style={{ display: "flex", gap: "6px", marginBottom: "12px", flexWrap: "wrap" }}>
        {availableDonde.map(d => {
          const c = dondeColor[d] || "#888";
          const active = filterDonde.includes(d);
          return (
            <button key={d} onClick={() => toggleDonde(d)} style={{
              background: active ? c : "transparent",
              color: active ? MUSHROOM_COLORS.bg : c,
              border: `1.5px solid ${c}`,
              borderRadius: "16px", padding: "5px 12px",
              fontSize: "11px", fontWeight: "bold", letterSpacing: "0.5px",
              transition: "all 0.15s",
            }}>{d}</button>
          );
        })}
      </div>
      {(filterPrio.length > 0 || filterTipo.length > 0 || filterDonde.length > 0) && (
        <button onClick={() => { setFilterPrio([]); setFilterTipo([]); setFilterDonde([]); }} style={{
          background: "transparent", color: MUSHROOM_COLORS.accent2, border: "none",
          fontSize: "11px", marginBottom: "16px", textDecoration: "underline", padding: 0,
        }}>✕ Limpiar filtros</button>
      )}

      <SectionTitleM>LISTA DE COMPRA — MANUAL FRIENDLY ({filtered.length}/{items.length})</SectionTitleM>
      {filtered.map((item, i) => (
        <div key={i} style={{ background: MUSHROOM_COLORS.bg2, border: `1px solid ${MUSHROOM_COLORS.border1}`, borderLeft: `3px solid ${prioColor[item.prioridad]}`, borderRadius: "10px", padding: "12px", marginBottom: "8px" }}>
          <div style={{ display: "flex", justifyContent: "space-between", marginBottom: "6px" }}>
            <div style={{ fontSize: "13px", fontWeight: "bold", color: MUSHROOM_COLORS.textBright }}>{item.item}</div>
            <div style={{ fontSize: "11px", color: MUSHROOM_COLORS.accent1, fontWeight: "bold" }}>{item.precio}</div>
          </div>
          <div style={{ display: "flex", gap: "6px", marginBottom: "6px", flexWrap: "wrap" }}>
            <span style={{ fontSize: "9px", padding: "2px 8px", borderRadius: "10px", background: prioColor[item.prioridad], color: MUSHROOM_COLORS.bg, fontWeight: "bold", letterSpacing: "0.5px" }}>{item.prioridad}</span>
            <span style={{ fontSize: "9px", padding: "2px 8px", borderRadius: "10px", background: "transparent", color: tipoColor[item.tipo], border: `1px solid ${tipoColor[item.tipo]}`, fontWeight: "bold" }}>{item.tipo}</span>
          </div>
          <div style={{ fontSize: "11px", color: MUSHROOM_COLORS.accent2, marginBottom: "4px" }}>📍 {item.donde}</div>
          <div style={{ fontSize: "12px", color: MUSHROOM_COLORS.accent3 }}>{item.nota}</div>
        </div>
      ))}

      <div style={{ background: MUSHROOM_COLORS.bg3, borderRadius: "10px", padding: "14px", marginTop: "20px" }}>
        <div style={{ fontSize: "12px", color: MUSHROOM_COLORS.textBright, lineHeight: "1.6" }}>
          <span style={{ fontWeight: "bold" }}>Costo total estimado: 100-180€</span> · Reutilizable monotub + termómetro + spray para múltiples ciclos. Solo recompras spawn bag, cultura líquida y substrate (40-80€/ciclo).
        </div>
      </div>

      <SectionTitleM>POR QUÉ ES MÁS FÁCIL QUE EL MANUAL CLÁSICO</SectionTitleM>
      <InfoBoxM>
        <strong>Te ahorras:</strong><br/>
        ❌ Olla a presión (esterilizar grano tú mismo) → spawn bag ya viene estéril<br/>
        ❌ <GlossaryLink term="SAB (Still Air Box)">SAB</GlossaryLink> (caja con guantes) → inyectas por puerto, no necesitas ambiente sin aire<br/>
        ❌ Jeringa de esporas (esperar germinación) → cultura líquida ya tiene micelio activo<br/>
        ❌ Mezclar/hidratar/pasteurizar coco coir → bulk substrate CVG ya viene hidratado<br/>
        ❌ Cocción del grano (ratio agua, hervir 90 min) → spawn bag listo<br/>
        <br/>
        <strong>Mantienes:</strong> control sobre la cepa, mejor rendimiento que kit (200-500g vs 100-200g), múltiples flushes, posibilidad de hacer 2 monotubs simultáneos.
      </InfoBoxM>
    </div>
  );
}

function PREP_SETAS_FRIENDLY() {
  return (
    <div>
      <InfoBoxM>
        En el modo friendly NO esterilizas tú — todo viene esterilizado. Esta fase es preparar tu espacio de trabajo limpio antes de inocular. Reduce el riesgo de <GlossaryLink term="Contaminación">contaminación</GlossaryLink> al mínimo sin equipo de laboratorio.
      </InfoBoxM>

      <SectionTitleM>PREPARAR ESPACIO LIMPIO (1 hora antes de inocular)</SectionTitleM>
      <StepM num={1} text="Elige una habitación pequeña sin corrientes de aire. Baño es ideal: cierra puerta y ventana 30 min antes." why="Aire en movimiento = esporas de contaminantes flotando. Cuanto menos aire se mueva, menos riesgo." />
      <StepM num={2} text="Date una ducha de vapor caliente 5 minutos antes (ducha caliente con puerta cerrada, sin lavarte)." why="El vapor 'limpia' el aire — las esporas en suspensión caen al suelo con la humedad." />
      <StepM num={3} text="Limpia la superficie de trabajo con alcohol 70%: mesa, encimera, lo que vayas a usar. Espera 1 minuto a que se evapore." />
      <StepM num={4} text="Lávate manos y antebrazos con jabón 30 segundos. Sécate con toalla limpia o papel." />
      <StepM num={5} text="Ponte mascarilla FFP2, después guantes de nitrilo. Rocía guantes con alcohol y frótalos." why="Tu aliento, piel y pelo son las fuentes #1 de contaminación. Tapa todo." />
      <StepM num={6} text="No hables, no estornudes, no toques nada que no esté desinfectado. Si tocas algo sospechoso: re-rocía guantes." />

      <SectionTitleM>QUÉ NO HACER</SectionTitleM>
      <ErrorCardM
        error="Trabajar en cocina con ventana abierta o aire acondicionado"
        consecuencia="Esporas de moho del exterior caen sobre el spawn bag durante la inoculación. Contaminación garantizada."
        fix="Cierra todo. Apaga aire. Espera 30 min después de cocinar antes de inocular."
      />
      <ErrorCardM
        error="No usar mascarilla 'porque solo es 1 minuto'"
        consecuencia="Tu aliento contiene millones de bacterias y esporas. Una sola contaminación arruina el ciclo entero (4 semanas perdidas)."
        fix="Mascarilla FFP2 SIEMPRE durante inoculación. Cuesta 1€."
      />
      <ErrorCardM
        error="Reutilizar guantes sin desinfectar entre pasos"
        consecuencia="Tocaste el pomo de la puerta y luego el puerto de inyección. Bacterias entran al spawn bag."
        fix="Re-rocía guantes con alcohol cada vez que toques algo dudoso. Alcohol = barato, contaminación = cara."
      />
    </div>
  );
}

function INOCULACION_SETAS_FRIENDLY() {
  return (
    <div>
      <InfoBoxM>
        Inyectar la <GlossaryLink term="Cultura líquida">cultura líquida</GlossaryLink> en el spawn bag por el puerto de inyección. 5 minutos. Es lo más sencillo del modo friendly — no abres nada.
      </InfoBoxM>

      <SectionTitleM>PROTOCOLO DE INOCULACIÓN</SectionTitleM>
      <StepM num={1} text="Ya en espacio limpio (ver fase anterior), saca el spawn bag y déjalo plano sobre la mesa. Localiza el puerto de inyección — es un círculo pequeño con cinta micropore o un disco de goma autoreparable." why="No hace falta abrir el spawn bag. La inyección entra y sale del puerto, queda sellado." />
      <StepM num={2} text="Desinfecta el puerto: rocía alcohol y frota con paño limpio. Espera 30 segundos a que se evapore TODO." why="Si queda alcohol, mata el micelio cuando lo inyectes. Espera siempre." />
      <StepM num={3} text="Saca la cultura líquida de su envase. Quita el capuchón de la aguja con cuidado — NO toques la aguja." />
      <StepM num={4} text="Flamea brevemente la aguja con mechero (3-5 segundos hasta rojo) y deja enfriar 20 segundos en el aire." why="Mata cualquier bacteria de la aguja. Si la inyectas caliente, mata el micelio." warning />
      <StepM num={5} text="Agita la jeringa suavemente — la cultura líquida tiene micelio que se asienta abajo." />
      <StepM num={6} text="Inyecta a través del puerto: clava la aguja, empuja 2-3ml de cultura, retira." why="2-3ml = punto óptimo. Más no acelera nada, menos riesga colonización lenta." />
      <StepM num={7} text="Repite: si el spawn bag tiene varios puntos de inyección sugeridos, inyecta 2-3 puntos diferentes (1-1.5ml en cada uno). Distribución más rápida." />
      <StepM num={8} text="Etiqueta con fecha + cepa. Guarda en armario oscuro a 24-26°C. NO mezcles, NO agites, NO abras nada." />

      <SectionTitleM>DESPUÉS DE INOCULAR</SectionTitleM>
      <InfoBoxM>
        Verás puntos blancos crecer en 5-10 días desde cada punto de inyección. Ese es el <GlossaryLink term="Micelio">micelio</GlossaryLink> colonizando. En 14-21 días el bag estará 100% blanco — listo para fructificar. NO abras NUNCA durante incubación.
      </InfoBoxM>

      <SectionTitleM>ERRORES COMUNES</SectionTitleM>
      <ErrorCardM
        error="No flamear la aguja o flamear y inyectar inmediatamente"
        consecuencia="Sin flamear: bacterias entran al bag → contaminación. Caliente: mata el micelio que estás inyectando → no germina."
        fix="Flamea 3-5s, espera 20s al aire. Misma aguja se puede usar 2-3 puntos sin reflamearla."
      />
      <ErrorCardM
        error="Inyectar más de 4ml por punto"
        consecuencia="Exceso de líquido = grano demasiado húmedo = bacterias se reproducen mejor que el micelio."
        fix="2-3ml total por bag (distribuido en 1-3 puntos). Suficiente para colonizar 1-2kg de grano."
      />
      <ErrorCardM
        error="Abrir el bag para 'verificar' durante incubación"
        consecuencia="Cada apertura introduce esporas contaminantes. El micelio aún no es robusto y pierde fácilmente."
        fix="No abrir hasta que esté 100% colonizado (blanco). Inspecciona visualmente desde fuera."
      />
    </div>
  );
}

function INCUBACION_SETAS_FRIENDLY() {
  return (
    <div>
      <InfoBoxM>
        14-21 días esperando. El micelio coloniza el grano sin que tú hagas casi nada. Solo monitorear temperatura y buscar contaminación visualmente.
      </InfoBoxM>

      <SectionTitleM>RUTINA DIARIA</SectionTitleM>
      <StepM num={1} text="Verifica temperatura: 24-26°C es óptimo. Si tu casa baja de 22°C, usa una manta térmica para reptiles bajo el bag." why="Por debajo de 22°C colonización se ralentiza mucho. Por encima de 28°C riesgo de bacterias termófilas." />
      <StepM num={2} text="Inspecciona visualmente sin tocar: busca puntos blancos creciendo desde puntos de inyección." />
      <StepM num={3} text="Día 7-10: el bag debería tener 30-50% de blanco. Si nada, problema." />
      <StepM num={4} text="Día 14-18: 80-100% blanco — listo o casi. Si quedan zonas marrones de grano sin colonizar, espera 5 días más." />

      <SectionTitleM>SEÑALES NORMALES (TODO BIEN)</SectionTitleM>
      <InfoBoxM>
        ✓ Crecimiento blanco algodonoso desde puntos de inyección<br/>
        ✓ Olor agradable: a champiñón fresco, hongo, tierra<br/>
        ✓ <GlossaryLink term="Contaminación">Color uniforme</GlossaryLink> blanco/crema en zonas colonizadas<br/>
        ✓ Pequeñas gotas amarillentas (metabolitos del micelio): NORMAL — no contaminación
      </InfoBoxM>

      <SectionTitleM>CONTAMINACIÓN — SEÑALES DE ALARMA</SectionTitleM>
      <ErrorCardM
        error="Manchas verdes o azuladas (Trichoderma)"
        consecuencia="Hongo contaminante #1. Mata el micelio de Psilocybe rápido. Imposible salvarlo."
        fix="Tira el bag a la basura SELLADO. No abras dentro de casa (esporas se dispersan). Empieza de cero con bag nuevo."
      />
      <ErrorCardM
        error="Manchas negras o marrón oscuro con olor a podrido"
        consecuencia="Bacterias o moho negro. Tóxico, no consumible."
        fix="Descarta. Revisa qué hiciste en inoculación: ¿flameaste? ¿usaste mascarilla?"
      />
      <ErrorCardM
        error="Bag con olor a alcohol, pies o vómito"
        consecuencia="Bacterias anaerobias. Spawn bag con exceso de humedad o falta de oxígeno."
        fix="Descarta. Si recompras: revisa que el spawn bag no esté hinchado (mucha agua) al recibirlo."
      />
    </div>
  );
}

function FRUCTIFICACION_SETAS_FRIENDLY() {
  return (
    <div>
      <InfoBoxM>
        Spawn 100% colonizado + bulk substrate CVG = monotub. Mezclas, esperas a que se colonice todo (5-10 días), y empiezan a salir setas. Rendimiento 200-500g por flush.
      </InfoBoxM>

      <SectionTitleM>PREPARAR EL MONOTUB</SectionTitleM>
      <StepM num={1} text="Haz 4-6 agujeros de 2.5cm en los lados de la caja, a 10cm del fondo (2 en cada lado largo, 1-2 en los cortos)." why="Estos agujeros dan FAE pasivo durante fructificación. Sin ellos, las setas se asfixian con su propio CO₂." />
      <StepM num={2} text="Tapa los agujeros por dentro con cinta micropore (2 capas). Por fuera, la tapa queda lisa." why="Micropore deja pasar aire pero no esporas contaminantes." />
      <StepM num={3} text="Limpia el interior de la caja con alcohol 70%. Deja secar 5 min." />

      <SectionTitleM>MEZCLA SPAWN + SUSTRATO (S2B)</SectionTitleM>
      <StepM num={1} text="En espacio limpio (ducha vapor + alcohol + guantes + mascarilla, igual que inoculación), abre el spawn bag colonizado." />
      <StepM num={2} text="Rompe el bloque de spawn dentro del bag aplastándolo con las manos hasta separar todos los granos. NO saques aún." why="Granos separados colonizan el bulk uniformemente. Bloques compactos colonizan en partes." />
      <StepM num={3} text="Vuelca el spawn dentro del monotub. Encima, vuelca el bulk substrate CVG (2-3kg)." />
      <StepM num={4} text="Mezcla con manos enguantadas: 1 parte spawn por 2-3 partes bulk. Mezcla bien hasta que esté distribuido." why="Ratio 1:2 o 1:3 = punto óptimo. Más spawn = colonización rápida pero menos rendimiento. Menos spawn = riesgo contaminación." />
      <StepM num={5} text="Aplana la superficie con la mano enguantada. Altura final: 10-12cm de mezcla." />
      <StepM num={6} text="(Opcional) Casing layer: añade 1cm de vermiculita seca encima. Aumenta rendimiento 20-30%." />
      <StepM num={7} text="Cierra la tapa. Etiqueta. Mete en armario oscuro a 22-24°C." />

      <SectionTitleM>FASE COLONIZACIÓN BULK (5-10 DÍAS)</SectionTitleM>
      <StepM num={1} text="Cada 2 días: levanta tapa 30 segundos para FAE manual. Cierra." why="Aunque tienes FAE pasivo, los primeros días el micelio agradece refresco extra. NO nebulizar todavía — humedad excesiva favorece contaminación." />
      <StepM num={2} text="Día 5-7: deberías ver micelio blanco extendiéndose desde los granos hacia el bulk." />
      <StepM num={3} text="Día 7-10: superficie completamente blanca o casi. Es momento de iniciar fructificación." />

      <SectionTitleM>FASE FRUCTIFICACIÓN (PINNING)</SectionTitleM>
      <StepM num={1} text="Cuando 90%+ de superficie esté blanca: nebuliza paredes del monotub con spray (NO el sustrato directamente)." why="Sube humedad a 90-95% sin encharcar el sustrato. Encharcamiento = contaminación." />
      <StepM num={2} text="Abre tapa 1 minuto, cierra. Esto da FAE + light shock que estimula fructificación." />
      <StepM num={3} text="Mete el monotub en zona con luz indirecta (no sol directo). Ciclo 12h luz / 12h oscuridad." />
      <StepM num={4} text="Rutina diaria: nebulizar paredes 2x/día, FAE manual abriendo tapa 1 min 2x/día." />
      <StepM num={5} text="Día 3-7 desde inicio fructificación: aparecen <GlossaryLink term='Primordio / Pinhead'>pinheads</GlossaryLink> (puntos blancos pequeños)." />
      <StepM num={6} text="Día 8-12: pinheads crecen rápido. Setas listas cuando los sombreros estén abriéndose o el <GlossaryLink term='Velo'>velo</GlossaryLink> a punto de romperse." />

      <SectionTitleM>ERRORES EN ESTA FASE</SectionTitleM>
      <ErrorCardM
        error="Nebulizar el sustrato directamente"
        consecuencia="Encharcamiento → bacterias proliferan → contaminación tardía justo cuando ya casi cosechabas."
        fix="Nebulizar SOLO las paredes y tapa. La humedad se distribuye por el aire del monotub."
      />
      <ErrorCardM
        error="No hacer FAE — dejar tapa cerrada todo el tiempo"
        consecuencia="CO₂ se acumula → setas crecen alargadas, finas, con sombreros pequeños. Forma 'pies de elefante' = bajo rendimiento."
        fix="Mínimo 2 FAE/día abriendo tapa 1 min. Si tienes ventiladores micropore = aún mejor."
      />
      <ErrorCardM
        error="Pinear demasiado pronto (antes de colonización completa)"
        consecuencia="Si bajas humedad y das luz cuando aún hay zonas sin colonizar, el bulk no llega a colonizarse y las contaminaciones aprovechan."
        fix="Espera al 95-100% colonización antes de iniciar fructificación. Paciencia. Si dudas, espera 2 días más."
      />
    </div>
  );
}

function COSECHA_SETAS_FRIENDLY() {
  return (
    <div>
      <InfoBoxM>
        Múltiples flushes. Primer flush: 200-500g (depende de tamaño monotub y ratio). Segundo y tercer flush: 50-70% del primero. Total típico: 4-8 flushes en 6-10 semanas.
      </InfoBoxM>

      <SectionTitleM>CUÁNDO COSECHAR</SectionTitleM>
      <InfoBoxM>
        Cosecha justo ANTES de que el <GlossaryLink term="Velo">velo</GlossaryLink> se rompa. Señales:<br/>
        ✓ Sombrero todavía cerrado o ligeramente abriéndose<br/>
        ✓ Pie estirado al máximo<br/>
        ✓ Color marrón dorado en sombrero<br/>
        ✗ NO esperes a que el sombrero esté completamente plano y suelte esporas (esporas negras = pérdida de potencia + contamina el monotub)
      </InfoBoxM>

      <SectionTitleM>TÉCNICA GIRO-TIRÓN</SectionTitleM>
      <StepM num={1} text="Manos limpias + guantes + alcohol. Agarra el hongo por la base." />
      <StepM num={2} text="Gira suavemente 1-2 vueltas. El pie se desprende del sustrato con un 'pop'." />
      <StepM num={3} text="Tira hacia arriba con decisión. Sale entero." />
      <StepM num={4} text="Limpia la base: raspa con cuchillo pequeño cualquier resto de sustrato." why="Sustrato pegado pudre y contamina el siguiente flush." />

      <SectionTitleM>ENTRE FLUSHES (DUNK + REHIDRATAR)</SectionTitleM>
      <StepM num={1} text="Después de cosechar todas las setas maduras, retira con la uña los pinheads que no crecieron (abortados)." />
      <StepM num={2} text="Llena el monotub con agua fría de grifo hasta cubrir el sustrato. Déjalo así 6-12h en la nevera." why="Cold shock + rehidratación = induce el siguiente flush. Simula lluvia y bajada de temperatura." />
      <StepM num={3} text="Vacía el agua escurriendo el monotub (cuidado de no perder el sustrato). Puede inclinarse." />
      <StepM num={4} text="Vuelve a poner la tapa, vuelve a la rutina: nebulizar paredes 2x/día, FAE 2x/día." />
      <StepM num={5} text="Pinheads del siguiente flush salen en 5-10 días." />

      <SectionTitleM>RENDIMIENTO TÍPICO</SectionTitleM>
      <div style={{ display: "grid", gridTemplateColumns: "repeat(2, 1fr)", gap: "8px", marginBottom: "12px" }}>
        <StatBoxM label="Flush 1" value="200-500g fresco" />
        <StatBoxM label="Flush 2" value="150-300g fresco" />
        <StatBoxM label="Flush 3" value="80-200g fresco" />
        <StatBoxM label="Flush 4-6" value="30-100g cada uno" />
      </div>
      <InfoBoxM>
        Total seco final: 60-150g (las setas pierden 90% de peso al secarse). El monotub muere cuando los flushes son &lt;30g o aparece contaminación. Tira sustrato + abre uno nuevo.
      </InfoBoxM>
    </div>
  );
}

function SECADO_SETAS_FRIENDLY() {
  return (
    <div>
      <InfoBoxM>
        Igual que en el kit pero a mayor escala. Setas frescas duran 1 semana en la nevera. Setas secas duran años. Para conservar: secar bien hasta <GlossaryLink term="Cracker dry">cracker dry</GlossaryLink>.
      </InfoBoxM>

      <SectionTitleM>PROCESO DE SECADO</SectionTitleM>
      <StepM num={1} text="Presecado: extiende setas frescas sobre rejilla o papel en zona ventilada (ventilador apuntando suavemente). 4-12h hasta que pierdan ~50% peso y estén 'cuero' al tacto." why="Eliminar humedad superficial rápido. Setas húmedas se pudren." />
      <StepM num={2} text="Desecado final: pon en recipiente hermético con sílica gel (50-100g por cada 100g de setas)." why="Sílica gel absorbe la humedad restante. Sin él, las setas nunca llegan a 'cracker dry' y pueden enmohecer." />
      <StepM num={3} text="Espera 24-48h. Test: dobla un pie — debe romper limpio sin doblarse, como una galleta." />
      <StepM num={4} text="Si no rompe: más tiempo con sílica nueva (la usada se satura). Si rompe: listas." />

      <SectionTitleM>CONSERVACIÓN A LARGO PLAZO</SectionTitleM>
      <div style={{ display: "grid", gridTemplateColumns: "repeat(2, 1fr)", gap: "8px", marginBottom: "12px" }}>
        <StatBoxM label="Frasco hermético + sílica" value="6-12 meses" />
        <StatBoxM label="Bolsa al vacío + nevera" value="1-2 años" />
        <StatBoxM label="Bolsa al vacío + congelador" value="3-5 años" />
      </div>
      <InfoBoxM>
        En todos los casos: protegidas de luz (oscuridad). La luz UV degrada psilocibina. Botes de cristal opaco o frasco envuelto en papel de aluminio.
      </InfoBoxM>

      <SectionTitleM>ERRORES COMUNES</SectionTitleM>
      <ErrorCardM
        error="Guardar sin cracker dry"
        consecuencia="Setas con humedad residual → moho dentro del frasco → todo el lote inservible y potencialmente tóxico."
        fix="SIEMPRE test del pie antes de guardar. Si dudas, otras 24h con sílica fresca."
      />
      <ErrorCardM
        error="Secar al horno o microondas"
        consecuencia="Calor &gt;50°C degrada la psilocibina rápidamente. Setas con potencia muy reducida."
        fix="Solo aire ambiente o sílica gel. Nunca calor activo."
      />
      <ErrorCardM
        error="Almacenar en bolsa de plástico normal"
        consecuencia="Plástico no es hermético al 100%. Humedad ambiental se filtra → moho a las semanas."
        fix="Frasco de cristal con junta de goma + sílica gel, o bolsa al vacío real con máquina."
      />
    </div>
  );
}
