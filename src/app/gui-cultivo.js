function GuiaCultivo() {

  const [guide, setGuide] = useState("cannabis"); // "cannabis" | "mushroom" | "cactus" | "ferment" | "plantas" | "amanita"

  // Cannabis state
  const [mode, setMode] = useState("interior");
  const [activePhase, setActivePhase] = useState("compra");
  const [activePhaseExt, setActivePhaseExt] = useState("compra_ext");
  const [activePhaseGen, setActivePhaseGen] = useState("mis_semillas");

  // Mushroom state
  const [mushroomMode, setMushroomMode] = useState("kit");
  const [activeMushroomKit, setActiveMushroomKit] = useState("compra_kit");
  const [activeMushroomFriendly, setActiveMushroomFriendly] = useState("compra_friendly");
  const [activeMushroomAdvanced, setActiveMushroomAdvanced] = useState("compra_advanced");
  const [activeMushroomGen, setActiveMushroomGen] = useState("timeline_setas");

  // Cactus state (single mode)
  const [activeCactus, setActiveCactus] = useState("intro_cactus");

  // Ferment state (3 modes: hidromiel, cerveza, general)
  const [fermentMode, setFermentMode] = useState("general");
  const [activeFermentHidromiel, setActiveFermentHidromiel] = useState("compra_hidromiel");
  const [activeFermentCerveza, setActiveFermentCerveza] = useState("compra_cerveza");
  const [activeFermentGen, setActiveFermentGen] = useState("intro_ferment");

  // Plantas state (single mode)
  const [activePlantas, setActivePlantas] = useState("intro_plantas");

  // Amanita state (single mode)
  const [activeAmanita, setActiveAmanita] = useState("intro_amanita");

  const navigate = (targetMode, targetPhase) => {
    setMode(targetMode);
    if (targetMode === "interior") setActivePhase(targetPhase);
    else if (targetMode === "exterior") setActivePhaseExt(targetPhase);
    else setActivePhaseGen(targetPhase);
    window.scrollTo({ top: 0, behavior: "smooth" });
  };

  const navigateMushroom = (targetMode, targetPhase) => {
    setGuide("mushroom");
    setMushroomMode(targetMode);
    if (targetMode === "kit") setActiveMushroomKit(targetPhase);
    else if (targetMode === "friendly") setActiveMushroomFriendly(targetPhase);
    else if (targetMode === "advanced") setActiveMushroomAdvanced(targetPhase);
    else setActiveMushroomGen(targetPhase);
    window.scrollTo({ top: 0, behavior: "smooth" });
  };

  const navigateToGlossary = (term, targetGuide = "mushroom") => {
    if (targetGuide === "cannabis") {
      setGuide("cannabis");
      setMode("general");
      setActivePhaseGen("conceptos");
    } else {
      setGuide("mushroom");
      setMushroomMode("general");
      setActiveMushroomGen("conceptos_setas");
    }
    window.scrollTo({ top: 0, behavior: "smooth" });
    setTimeout(() => {
      const searchInput = document.querySelector('input[placeholder*="Buscar"]');
      if (searchInput) {
        const nativeSetter = Object.getOwnPropertyDescriptor(window.HTMLInputElement.prototype, 'value').set;
        nativeSetter.call(searchInput, term);
        searchInput.dispatchEvent(new Event('input', { bubbles: true }));
        searchInput.focus();
      }
    }, 150);
  };

  React.useEffect(() => {
    window.navigateToGlossary = navigateToGlossary;
    return () => { delete window.navigateToGlossary; };
  }, []);

  const renderContent = () => {
    if (guide === "cannabis") {
      if (mode === "interior") {
        switch (activePhase) {
          case "compra": return <COMPRA />;
          case "semillas_int": return <SEMILLAS_INT />;
          case "antes": return <ANTES />;
          case "goteo": return <GOTEO />;
          case "germinacion": return <GERMINACION />;
          case "vegetativa": return <VEGETATIVA />;
          case "poda": return <PODA />;
          case "floracion": return <FLORACION />;
          case "cosecha": return <COSECHA />;
          case "plagas_int": return <PLAGAS_INT />;
          default: return null;
        }
      } else if (mode === "exterior") {
        switch (activePhaseExt) {
          case "compra_ext": return <COMPRA_EXT />;
          case "ubicacion": return <UBICACION />;
          case "germinacion_ext": return <GERMINACION_EXT />;
          case "semillas_ext": return <SEMILLAS_EXT />;
          case "fases_ext": return <FASES_EXT />;
          case "riego_ext": return <RIEGO_EXT />;
          case "plagas": return <PLAGAS />;
          case "cosecha_ext": return <COSECHA_EXT />;
          default: return null;
        }
      } else {
        switch (activePhaseGen) {
          case "timeline": return <TIMELINE navigate={navigate} />;
          case "mis_semillas": return <MIS_SEMILLAS />;
          case "poda_gen": return <PODA />;
          case "cosecha_gen": return <COSECHA />;
          case "conservacion": return <CONSERVACION />;
          case "diagnostico": return <DIAGNOSTICO />;
          case "extracciones": return <EXTRACCIONES />;
          case "faq": return <FAQ />;
          case "conceptos": return <CONCEPTOS />;
          default: return null;
        }
      }
    } else if (guide === "mushroom") {
      if (mushroomMode === "kit") {
        switch (activeMushroomKit) {
          case "compra_kit": return <COMPRA_SETAS_KIT />;
          case "setup_kit": return <SETUP_SETAS_KIT />;
          case "incubacion_kit": return <INCUBACION_SETAS_KIT />;
          case "fructificacion_kit": return <FRUCTIFICACION_SETAS_KIT />;
          case "cosecha_kit": return <COSECHA_SETAS_KIT />;
          case "secado_kit": return <SECADO_SETAS_KIT />;
          default: return <COMPRA_SETAS_KIT />;
        }
      } else if (mushroomMode === "friendly") {
        switch (activeMushroomFriendly) {
          case "compra_friendly": return <COMPRA_SETAS_FRIENDLY />;
          case "prep_friendly": return <PREP_SETAS_FRIENDLY />;
          case "inoculacion_friendly": return <INOCULACION_SETAS_FRIENDLY />;
          case "incubacion_friendly": return <INCUBACION_SETAS_FRIENDLY />;
          case "fructificacion_friendly": return <FRUCTIFICACION_SETAS_FRIENDLY />;
          case "cosecha_friendly": return <COSECHA_SETAS_FRIENDLY />;
          case "secado_friendly": return <SECADO_SETAS_FRIENDLY />;
          default: return <COMPRA_SETAS_FRIENDLY />;
        }
      } else if (mushroomMode === "advanced") {
        switch (activeMushroomAdvanced) {
          case "compra_advanced": return <COMPRA_SETAS_ADVANCED />;
          case "esterilizar_advanced": return <ESTERILIZACION_SETAS_ADVANCED />;
          case "inoculacion_advanced": return <INOCULACION_SETAS_ADVANCED />;
          case "incubacion_advanced": return <INCUBACION_SETAS_ADVANCED />;
          case "fructificacion_advanced": return <FRUCTIFICACION_SETAS_ADVANCED />;
          case "cosecha_advanced": return <COSECHA_SETAS_ADVANCED />;
          case "secado_advanced": return <SECADO_SETAS_ADVANCED />;
          default: return <COMPRA_SETAS_ADVANCED />;
        }
      } else {
        switch (activeMushroomGen) {
          case "timeline_setas": return <TIMELINE_SETAS navigate={navigateMushroom} />;
          case "conceptos_setas": return <CONCEPTOS_SETAS />;
          case "faq_setas": return <FAQ_SETAS />;
          default: return <TIMELINE_SETAS navigate={navigateMushroom} />;
        }
      }
    } else if (guide === "cactus") {
      switch (activeCactus) {
        case "intro_cactus": return <INTRO_CACTUS />;
        case "compra_cactus": return <COMPRA_CACTUS />;
        case "germinacion_cactus": return <GERMINACION_CACTUS />;
        case "cuidados_cactus": return <CUIDADOS_CACTUS />;
        case "crecimiento_cactus": return <CRECIMIENTO_CACTUS />;
        case "cosecha_cactus": return <COSECHA_CACTUS />;
        case "preparacion_cactus": return <PREPARACION_CACTUS />;
        case "faq_cactus": return <FAQ_CACTUS />;
        default: return <INTRO_CACTUS />;
      }
    } else if (guide === "ferment") {
      if (fermentMode === "hidromiel") {
        switch (activeFermentHidromiel) {
          case "compra_hidromiel": return <COMPRA_HIDROMIEL />;
          case "prep_hidromiel": return <PREP_HIDROMIEL />;
          case "fermentacion_hidromiel": return <FERMENTACION_HIDROMIEL />;
          case "embotellado_hidromiel": return <EMBOTELLADO_HIDROMIEL />;
          case "cata_hidromiel": return <CATA_HIDROMIEL />;
          default: return <COMPRA_HIDROMIEL />;
        }
      } else if (fermentMode === "cerveza") {
        switch (activeFermentCerveza) {
          case "compra_cerveza": return <COMPRA_CERVEZA />;
          case "macerado_cerveza": return <MACERADO_CERVEZA />;
          case "hervor_cerveza": return <HERVOR_CERVEZA />;
          case "fermentacion_cerveza": return <FERMENTACION_CERVEZA />;
          case "embotellado_cerveza": return <EMBOTELLADO_CERVEZA />;
          case "cata_cerveza": return <CATA_CERVEZA />;
          default: return <COMPRA_CERVEZA />;
        }
      } else {
        switch (activeFermentGen) {
          case "intro_ferment": return <INTRO_FERMENT />;
          case "higiene_ferment": return <HIGIENE_FERMENT />;
          case "faq_ferment": return <FAQ_FERMENT />;
          default: return <INTRO_FERMENT />;
        }
      }
    } else if (guide === "plantas") {
      switch (activePlantas) {
        case "intro_plantas": return <INTRO_PLANTAS />;
        case "salvia": return <SALVIA />;
        case "damiana": return <DAMIANA />;
        case "blue_lotus": return <BLUE_LOTUS />;
        case "wild_lettuce": return <WILD_LETTUCE />;
        case "calea": return <CALEA />;
        case "faq_plantas": return <FAQ_PLANTAS />;
        default: return <INTRO_PLANTAS />;
      }
    } else if (guide === "amanita") {
      switch (activeAmanita) {
        case "intro_amanita": return <INTRO_AMANITA />;
        case "identificacion_amanita": return <IDENTIFICACION_AMANITA />;
        case "recoleccion_amanita": return <RECOLECCION_AMANITA />;
        case "secado_amanita": return <SECADO_AMANITA />;
        case "preparacion_amanita": return <PREPARACION_AMANITA />;
        case "harm_reduction_amanita": return <HARM_REDUCTION_AMANITA />;
        case "faq_amanita": return <FAQ_AMANITA />;
        default: return <INTRO_AMANITA />;
      }
    }
  };

  // Maps for current phases / active / setter per guide
  const mushroomPhasesMap = { kit: mushroomKitPhases, friendly: mushroomFriendlyPhases, advanced: mushroomAdvancedPhases, general: mushroomGeneral };
  const mushroomActiveMap = { kit: activeMushroomKit, friendly: activeMushroomFriendly, advanced: activeMushroomAdvanced, general: activeMushroomGen };
  const mushroomSetterMap = { kit: setActiveMushroomKit, friendly: setActiveMushroomFriendly, advanced: setActiveMushroomAdvanced, general: setActiveMushroomGen };

  const fermentPhasesMap = { hidromiel: fermentHidromielPhases, cerveza: fermentCervezaPhases, general: fermentGeneralPhases };
  const fermentActiveMap = { hidromiel: activeFermentHidromiel, cerveza: activeFermentCerveza, general: activeFermentGen };
  const fermentSetterMap = { hidromiel: setActiveFermentHidromiel, cerveza: setActiveFermentCerveza, general: setActiveFermentGen };

  let currentPhases, currentActive, setCurrentActive, colors, title, modeOptions, currentMode, setCurrentMode;

  if (guide === "cannabis") {
    currentPhases = mode === "interior" ? phases : mode === "exterior" ? extPhases : generalPhases;
    currentActive = mode === "interior" ? activePhase : mode === "exterior" ? activePhaseExt : activePhaseGen;
    setCurrentActive = mode === "interior" ? setActivePhase : mode === "exterior" ? setActivePhaseExt : setActivePhaseGen;
    colors = CANNABIS_COLORS;
    title = "🌿 Guía Cannabis";
    modeOptions = [
      { id: "interior", label: "🏠 Interior", sub: "Armario" },
      { id: "exterior", label: "🌲 Exterior", sub: "Bosque" },
      { id: "general", label: "📋 General", sub: "Común" },
    ];
    currentMode = mode; setCurrentMode = setMode;
  } else if (guide === "mushroom") {
    currentPhases = mushroomPhasesMap[mushroomMode];
    currentActive = mushroomActiveMap[mushroomMode];
    setCurrentActive = mushroomSetterMap[mushroomMode];
    colors = MUSHROOM_COLORS;
    title = "🍄 Guía Setas";
    modeOptions = [
      { id: "kit", label: "🛒 Kit", sub: "Listo" },
      { id: "friendly", label: "🧼 Friendly", sub: "Pre-esteril." },
      { id: "advanced", label: "🧫 Avanzado", sub: "Desde lab" },
      { id: "general", label: "📋 General", sub: "Común" },
    ];
    currentMode = mushroomMode; setCurrentMode = setMushroomMode;
  } else if (guide === "cactus") {
    currentPhases = cactusPhases;
    currentActive = activeCactus;
    setCurrentActive = setActiveCactus;
    colors = CACTUS_COLORS;
    title = "🌵 Guía Cactus Mescalina";
    modeOptions = null;
    currentMode = null; setCurrentMode = null;
  } else if (guide === "ferment") {
    currentPhases = fermentPhasesMap[fermentMode];
    currentActive = fermentActiveMap[fermentMode];
    setCurrentActive = fermentSetterMap[fermentMode];
    colors = FERMENT_COLORS;
    title = "🍯 Guía Fermentaciones";
    modeOptions = [
      { id: "general", label: "📋 General", sub: "Intro/FAQ" },
      { id: "hidromiel", label: "🍯 Hidromiel", sub: "Miel + agua" },
      { id: "cerveza", label: "🍺 Cerveza", sub: "Malta + lúpulo" },
    ];
    currentMode = fermentMode; setCurrentMode = setFermentMode;
  } else if (guide === "plantas") {
    currentPhases = plantasPhases;
    currentActive = activePlantas;
    setCurrentActive = setActivePlantas;
    colors = PLANTAS_COLORS;
    title = "🌿 Plantas Psicoactivas Suaves";
    modeOptions = null;
    currentMode = null; setCurrentMode = null;
  } else { // amanita
    currentPhases = amanitaPhases;
    currentActive = activeAmanita;
    setCurrentActive = setActiveAmanita;
    colors = AMANITA_COLORS;
    title = "🍄 Amanita Muscaria";
    modeOptions = null;
    currentMode = null; setCurrentMode = null;
  }

  const guides = [
    { id: "cannabis", emoji: "🌿", label: "Cannabis" },
    { id: "mushroom", emoji: "🍄", label: "Setas" },
    { id: "cactus", emoji: "🌵", label: "Cactus" },
    { id: "ferment", emoji: "🍯", label: "Fermentar" },
    { id: "plantas", emoji: "🪷", label: "Plantas" },
    { id: "amanita", emoji: "🟥", label: "Amanita" },
  ];

  return (
    <div className="app-layout" style={{ background: colors.bg, minHeight: "100vh", color: colors.text }}>
      <div className="app-header" style={{ background: colors.gradient, padding: "24px 24px 20px", textAlign: "center", borderBottom: `2px solid ${colors.borderAccent}` }}>
        <div style={{ marginBottom: "16px" }}>
          <div style={{ display: "flex", gap: "4px", justifyContent: "center", marginBottom: "16px", flexWrap: "wrap" }}>
            {guides.map(g => (
              <button key={g.id} onClick={() => setGuide(g.id)} style={{
                padding: "8px 14px", fontSize: "12px", fontWeight: "bold", border: "none",
                borderRadius: "8px", cursor: "pointer", transition: "all 0.2s",
                background: guide === g.id ? colors.accent1 : colors.border1,
                color: guide === g.id ? colors.bg : colors.accent1,
              }}>
                {g.emoji} {g.label}
              </button>
            ))}
          </div>
        </div>
        <h1 className="heading-serif" style={{ fontSize: "22px", fontWeight: "bold", margin: "0 0 16px", color: colors.textBright }}>
          {title}
        </h1>
        {modeOptions && (
          <div className="mode-switcher" style={{ display: "flex", background: colors.bg2, borderRadius: "12px", padding: "4px", gap: "4px", maxWidth: "440px", margin: "0 auto" }}>
            {modeOptions.map((m) => (
              <button key={m.id} onClick={() => setCurrentMode(m.id)} style={{
                flex: 1, padding: "10px 6px", border: "none", borderRadius: "8px",
                background: currentMode === m.id ? colors.accent1 : "transparent",
                color: currentMode === m.id ? colors.bg : colors.accent1,
                cursor: "pointer", transition: "all 0.2s",
              }}>
                <div style={{ fontSize: "12px", fontWeight: "bold" }}>{m.label}</div>
                <div style={{ fontSize: "10px", color: currentMode === m.id ? colors.accent2 : colors.border1, marginTop: "2px" }}>{m.sub}</div>
              </button>
            ))}
          </div>
        )}
      </div>

      <div className="tabs-nav" style={{ display: "flex", overflowX: "auto", background: colors.bg2, borderBottom: `1px solid ${colors.border1}` }}>
        {currentPhases.map((phase) => (
          <button key={phase.id} onClick={() => setCurrentActive(phase.id)}
            className={currentActive === phase.id ? "active" : ""}
            style={{
              flex: "1 0 auto", minWidth: "65px", padding: "12px 6px",
              border: "none", background: currentActive === phase.id ? colors.bg3 : "transparent",
              color: currentActive === phase.id ? colors.textBright : colors.accent1,
              cursor: "pointer", fontSize: "10px", textAlign: "center",
              borderBottom: currentActive === phase.id ? `3px solid ${colors.accent1}` : "3px solid transparent",
              transition: "all 0.2s",
            }}>
            <div className="tab-emoji" style={{ fontSize: "18px", marginBottom: "3px" }}>{phase.emoji}</div>
            <div className="tab-title" style={{ fontWeight: currentActive === phase.id ? "bold" : "normal", lineHeight: "1.2" }}>{phase.title}</div>
            <div className="tab-sub" style={{ fontSize: "9px", color: colors.border1, marginTop: "2px" }}>{phase.subtitle}</div>
          </button>
        ))}
      </div>

      <div className="main-content" style={{ padding: "20px", maxWidth: "600px", margin: "0 auto", color: colors.text }}>
        {renderContent()}
      </div>

      <div className="footer-calendar" style={{ background: colors.bg2, borderTop: `1px solid ${colors.border1}`, padding: "20px" }}>
        {guide === "cannabis" && mode === "interior" && (
          <>
            <div style={{ fontSize: "10px", letterSpacing: "3px", color: colors.accent1, marginBottom: "12px", textAlign: "center" }}>PLANNING INTERIOR — 3 COSECHAS/AÑO (SIN VERANO)</div>
            <div style={{ display: "flex", gap: "6px", overflowX: "auto" }}>
              {[{mes:"RONDA 1",ev:"Sep-Oct: germina"},{mes:"DIC",ev:"Cosecha 1ª"},{mes:"RONDA 2",ev:"Ene-Feb: germina"},{mes:"ABR",ev:"Cosecha 2ª"},{mes:"RONDA 3",ev:"Mar-Abr: germina"},{mes:"JUN",ev:"Cosecha 3ª"},{mes:"⛔",ev:"Jul-Ago: pausa"}].map((m,i) => (
                <div key={i} style={{ flex:"1 0 60px", background:colors.border1, borderRadius:"8px", padding:"10px 6px", textAlign:"center" }}>
                  <div style={{ fontSize:"11px", fontWeight:"bold", color: colors.accent1, marginBottom:"4px" }}>{m.mes}</div>
                  <div style={{ fontSize:"10px", color: colors.accent2, lineHeight:"1.3" }}>{m.ev}</div>
                </div>
              ))}
            </div>
          </>
        )}
        {guide === "cannabis" && mode === "exterior" && (
          <>
            <div style={{ fontSize: "10px", letterSpacing: "3px", color: colors.accent1, marginBottom: "12px", textAlign: "center" }}>PLANNING EXTERIOR — FOTOPERIODO</div>
            <div style={{ display: "flex", gap: "6px", overflowX: "auto" }}>
              {[{mes:"MAR-MAY",ev:"🌱 Germina y planta"},{mes:"JUN",ev:"🌿 Veg. temprana"},{mes:"JUL",ev:"🌿 Veg. máxima"},{mes:"AGO",ev:"🌸 Inicio flor."},{mes:"SEP",ev:"🌸 Flor. avanzada"},{mes:"OCT",ev:"✂️ Cosecha"}].map((m,i) => (
                <div key={i} style={{ flex:"1 0 60px", background: colors.border1, borderRadius:"8px", padding:"10px 6px", textAlign:"center" }}>
                  <div style={{ fontSize:"11px", fontWeight:"bold", color: colors.accent1, marginBottom:"4px" }}>{m.mes}</div>
                  <div style={{ fontSize:"10px", color: colors.accent2, lineHeight:"1.3" }}>{m.ev}</div>
                </div>
              ))}
            </div>
          </>
        )}
        {guide === "cannabis" && mode === "general" && (
          <div style={{ textAlign: "center", color: colors.accent1, fontSize: "12px", padding: "8px" }}>
            📋 Secciones comunes a interior y exterior — siempre a mano
          </div>
        )}
        {guide === "mushroom" && (
          <div style={{ textAlign: "center", color: colors.accent1, fontSize: "12px", padding: "8px" }}>
            🍄 Ciclo típico setas: 2-6 semanas (Kit) ⎜ 4-8 semanas (Friendly) ⎜ 8-16 semanas (Avanzado)
          </div>
        )}
        {guide === "cactus" && (
          <div style={{ textAlign: "center", color: colors.accent1, fontSize: "12px", padding: "8px" }}>
            🌵 Cactus mescalina: planta para décadas. 2-4 años de espera primer cosecha desde esqueje.
          </div>
        )}
        {guide === "ferment" && (
          <div style={{ textAlign: "center", color: colors.accent1, fontSize: "12px", padding: "8px" }}>
            🍯 Hidromiel 4-8 semanas ⎜ 🍺 Cerveza 4-6 semanas ⎜ Equipo reutilizable indefinidamente
          </div>
        )}
        {guide === "plantas" && (
          <div style={{ textAlign: "center", color: colors.accent1, fontSize: "12px", padding: "8px" }}>
            🪷 5 plantas psicoactivas suaves, todas legales en España. Para uso responsable.
          </div>
        )}
        {guide === "amanita" && (
          <div style={{ textAlign: "center", color: colors.accent1, fontSize: "12px", padding: "8px" }}>
            🟥 Forrajeo otoño + decarboxilación. Identificación correcta es CRÍTICA.
          </div>
        )}
      </div>
    </div>
  );
}
