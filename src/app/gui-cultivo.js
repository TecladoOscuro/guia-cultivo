function GuiaCultivo() {

  const [guide, setGuide] = useState("cannabis"); // "cannabis" | "mushroom" | "cactus" | "ayahuasca" | "dmt" | "ferment" | "plantas" | "amanita" | "toxicas" | "hongos" | "huerta" | "frutales"

  // Cannabis state
  const [mode, setMode] = useState("interior");
  const [activePhase, setActivePhase] = useState("compra");
  const [activePhaseExt, setActivePhaseExt] = useState("compra_ext");
  const [activePhaseGen, setActivePhaseGen] = useState("timeline");

  // Mushroom state
  const [mushroomMode, setMushroomMode] = useState("kit");
  const [activeMushroomKit, setActiveMushroomKit] = useState("compra_kit");
  const [activeMushroomFriendly, setActiveMushroomFriendly] = useState("compra_friendly");
  const [activeMushroomAdvanced, setActiveMushroomAdvanced] = useState("compra_advanced");
  const [activeMushroomGen, setActiveMushroomGen] = useState("timeline_setas");

  // Cactus state (single mode)
  const [activeCactus, setActiveCactus] = useState("intro_cactus");

  // Ferment state (7 modes: hidromiel, cerveza, sidra, chicha, pulque, balche, general)
  const [fermentMode, setFermentMode] = useState("general");
  const [activeFermentHidromiel, setActiveFermentHidromiel] = useState("compra_hidromiel");
  const [activeFermentCerveza, setActiveFermentCerveza] = useState("compra_cerveza");
  const [activeFermentSidra, setActiveFermentSidra] = useState("compra_sidra");
  const [activeFermentChicha, setActiveFermentChicha] = useState("compra_chicha");
  const [activeFermentPulque, setActiveFermentPulque] = useState("compra_pulque");
  const [activeFermentBalche, setActiveFermentBalche] = useState("compra_balche");
  const [activeFermentGen, setActiveFermentGen] = useState("intro_ferment");

  // Plantas state (single mode)
  const [activePlantas, setActivePlantas] = useState("intro_plantas");

  // Toxicas state (single mode)
  const [activeToxicas, setActiveToxicas] = useState("intro_toxicas");

  // Amanita state (single mode)
  const [activeAmanita, setActiveAmanita] = useState("intro_amanita");

  // Trufas state (single mode)
  const [activeTrufas, setActiveTrufas] = useState("intro_trufas");

  // Ayahuasca state (single mode)
  const [activeAyahuasca, setActiveAyahuasca] = useState("intro_aya");

  // DMT state (single mode)
  const [activeDmt, setActiveDmt] = useState("intro_dmt");

  // Hongos medicinales state (single mode)
  const [activeHongos, setActiveHongos] = useState("intro_hongos");

  // Huerta state (single mode)
  const [activeHuerta, setActiveHuerta] = useState("intro_huerta");

  // Frutales state (single mode)
  const [activeFrutales, setActiveFrutales] = useState("intro_frutales");

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

  // Deep linking via URL params: ?guide=X&mode=Y&phase=Z
  React.useEffect(() => {
    const params = new URLSearchParams(window.location.search);
    const g = params.get("guide");
    const m = params.get("mode");
    const p = params.get("phase");
    if (!g) return;

    const validGuides = ["cannabis", "mushroom", "cactus", "ayahuasca", "dmt", "ferment", "plantas", "amanita", "trufas", "toxicas", "hongos", "huerta", "frutales"];
    if (!validGuides.includes(g)) return;
    setGuide(g);

    if (g === "cannabis") {
      if (m && ["interior", "exterior", "general"].includes(m)) setMode(m);
      if (p) {
        if (m === "interior" || (!m && p && !p.includes("ext") && !p.includes("gen"))) setActivePhase(p);
        else if (m === "exterior") setActivePhaseExt(p);
        else if (m === "general") setActivePhaseGen(p);
      }
    } else if (g === "mushroom") {
      if (m && ["kit", "friendly", "advanced", "general"].includes(m)) setMushroomMode(m);
      if (p) {
        if (m === "kit") setActiveMushroomKit(p);
        else if (m === "friendly") setActiveMushroomFriendly(p);
        else if (m === "advanced") setActiveMushroomAdvanced(p);
        else if (m === "general") setActiveMushroomGen(p);
      }
    } else if (g === "cactus" && p) setActiveCactus(p);
    else if (g === "ayahuasca" && p) setActiveAyahuasca(p);
    else if (g === "dmt" && p) setActiveDmt(p);
    else if (g === "amanita" && p) setActiveAmanita(p);
    else if (g === "trufas" && p) setActiveTrufas(p);
    else if (g === "toxicas" && p) setActiveToxicas(p);
    else if (g === "plantas" && p) setActivePlantas(p);
    else if (g === "ferment") {
      if (m && ["hidromiel", "cerveza", "sidra", "chicha", "pulque", "balche", "general"].includes(m)) setFermentMode(m);
      if (p) {
        if (m === "hidromiel") setActiveFermentHidromiel(p);
        else if (m === "cerveza") setActiveFermentCerveza(p);
        else if (m === "sidra") setActiveFermentSidra(p);
        else if (m === "chicha") setActiveFermentChicha(p);
        else if (m === "pulque") setActiveFermentPulque(p);
        else if (m === "balche") setActiveFermentBalche(p);
        else if (m === "general") setActiveFermentGen(p);
      }
    } else if (g === "hongos" && p) setActiveHongos(p);
    else if (g === "huerta" && p) setActiveHuerta(p);
    else if (g === "frutales" && p) setActiveFrutales(p);
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
          case "biblio_cannabis": return <BIBLIO_CANNABIS />;
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
          case "biblio_setas": return <BIBLIO_SETAS />;
          default: return <TIMELINE_SETAS navigate={navigateMushroom} />;
        }
      }
    } else if (guide === "cactus") {
      switch (activeCactus) {
        case "intro_cactus": return <INTRO_CACTUS setPhase={setActiveCactus} />;
        case "compra_cactus": return <COMPRA_CACTUS />;
        case "germinacion_cactus": return <GERMINACION_CACTUS />;
        case "cuidados_cactus": return <CUIDADOS_CACTUS />;
        case "crecimiento_cactus": return <CRECIMIENTO_CACTUS />;
        case "cosecha_cactus": return <COSECHA_CACTUS />;
        case "preparacion_cactus": return <PREPARACION_CACTUS />;
        case "faq_cactus": return <FAQ_CACTUS />;
        case "biblio_cactus": return <BIBLIO_CACTUS />;
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
      } else if (fermentMode === "sidra") {
        switch (activeFermentSidra) {
          case "compra_sidra": return <COMPRA_SIDRA />;
          case "prep_sidra": return <PREP_SIDRA />;
          case "fermentacion_sidra": return <FERMENTACION_SIDRA />;
          case "embotellado_sidra": return <EMBOTELLADO_SIDRA />;
          case "cata_sidra": return <CATA_SIDRA />;
          default: return <COMPRA_SIDRA />;
        }
      } else if (fermentMode === "chicha") {
        switch (activeFermentChicha) {
          case "compra_chicha": return <COMPRA_CHICHA />;
          case "prep_chicha": return <PREP_CHICHA />;
          case "fermentacion_chicha": return <FERMENTACION_CHICHA />;
          case "cata_chicha": return <CATA_CHICHA />;
          default: return <COMPRA_CHICHA />;
        }
      } else if (fermentMode === "pulque") {
        switch (activeFermentPulque) {
          case "compra_pulque": return <COMPRA_PULQUE />;
          case "prep_pulque": return <PREP_PULQUE />;
          case "fermentacion_pulque": return <FERMENTACION_PULQUE />;
          case "cata_pulque": return <CATA_PULQUE />;
          default: return <COMPRA_PULQUE />;
        }
      } else if (fermentMode === "balche") {
        switch (activeFermentBalche) {
          case "compra_balche": return <COMPRA_BALCHE />;
          case "preparacion_balche": return <PREPARACION_BALCHE />;
          case "fermentacion_balche": return <FERMENTACION_BALCHE />;
          case "cata_balche": return <CATA_BALCHE />;
          default: return <COMPRA_BALCHE />;
        }
      } else {
        switch (activeFermentGen) {
          case "intro_ferment": return <INTRO_FERMENT />;
          case "higiene_ferment": return <HIGIENE_FERMENT />;
          case "glosario_ferment": return <GLOSARIO_FERMENT />;
          case "faq_ferment": return <FAQ_FERMENT />;
          case "biblio_ferment": return <BIBLIO_FERMENT />;
          default: return <INTRO_FERMENT />;
        }
      }
    } else if (guide === "plantas") {
      switch (activePlantas) {
        case "intro_plantas": return <INTRO_PLANTAS />;
        case "compra_plantas": return <COMPRA_PLANTAS />;
        case "salvia": return <SALVIA />;
        case "damiana": return <DAMIANA />;
        case "blue_lotus": return <BLUE_LOTUS />;
        case "wild_lettuce": return <WILD_LETTUCE />;
        case "calea": return <CALEA />;
        case "kava": return <KAVA />;
        case "kanna": return <KANNA />;
        case "sinicuichi": return <SINICUICHI />;
        case "mucuna": return <MUCUNA />;
        case "lupulo": return <LUPULO />;
        case "pasiflora": return <PASIFLORA />;
        case "valeriana": return <VALERIANA />;
        case "adormidera_cal": return <ADORMIDERA_CALIFORNIA />;
        case "catnip": return <CATNIP />;
        case "wild_dagga": return <WILD_DAGGA />;
        case "ruda_siria": return <RUDA_SIRIA />;
        case "calamo": return <CALAMO />;
        case "tabaco_rustico": return <TABACO_RUSTICO />;
        case "lobelia": return <LOBELIA />;
        case "coleus": return <COLEUS />;
        case "sasafras": return <SASAFRAS />;
        case "mormon_tea": return <MORMON_TEA />;
        case "escoba_canaria": return <ESCOBA_CANARIA />;
        case "chicalote": return <CHICALOTE />;
        case "woodrose": return <WOODROSE />;
        case "morning_glory": return <MORNING_GLORY />;
        case "beleno": return <BELENO />;
        case "belladona": return <BELLADONA />;
        case "mandragora": return <MANDRAGORA />;
        case "datura_inoxia": return <DATURA_INOXIA />;
        case "estramonio": return <ESTRAMONIO />;
        case "kratom": return <KRATOM />;
        case "iboga": return <IBOGA />;
        case "yopo": return <YOPO />;
        case "glosario_plantas": return <GLOSARIO_PLANTAS />;
        case "faq_plantas": return <FAQ_PLANTAS />;
        case "biblio_plantas": return <BIBLIO_PLANTAS />;
        default: return <INTRO_PLANTAS />;
      }
    } else if (guide === "toxicas") {
      switch (activeToxicas) {
        case "intro_toxicas": return <INTRO_TOXICAS />;
        case "compra_toxicas": return <COMPRA_TOXICAS />;
        case "brugmansia": return <BRUGMANSIA />;
        case "adelfa": return <ADELFA />;
        case "dedalera": return <DEDALERA />;
        case "aconito": return <ACONITO />;
        case "cicuta": return <CICUTA />;
        case "ricino": return <RICINO />;
        case "colchico": return <COLCHICO />;
        case "tejo": return <TEJO />;
        case "lirio_valle": return <LIRIO_VALLE />;
        case "eleboro": return <ELEBORO />;
        case "veratrum": return <VERATRUM />;
        case "laureola": return <LAUREOLA />;
        case "curare": return <CURARE />;
        case "nuez_vomica": return <NUEZ_VOMICA />;
        case "calabar_bean": return <CALABAR_BEAN />;
        case "glosario_toxicas": return <GLOSARIO_TOXICAS />;
        case "faq_toxicas": return <FAQ_TOXICAS />;
        case "biblio_toxicas": return <BIBLIO_TOXICAS />;
        default: return <INTRO_TOXICAS />;
      }
    } else if (guide === "amanita") {
      switch (activeAmanita) {
        case "intro_amanita": return <INTRO_AMANITA setPhase={setActiveAmanita} />;
        case "compra_amanita": return <COMPRA_AMANITA />;
        case "identificacion_amanita": return <IDENTIFICACION_AMANITA />;
        case "recoleccion_amanita": return <RECOLECCION_AMANITA />;
        case "secado_amanita": return <SECADO_AMANITA />;
        case "preparacion_amanita": return <PREPARACION_AMANITA />;
        case "conservacion_amanita": return <CONSERVACION_AMANITA />;
        case "harm_reduction_amanita": return <HARM_REDUCTION_AMANITA />;
        case "faq_amanita": return <FAQ_AMANITA />;
        case "biblio_amanita": return <BIBLIO_AMANITA />;
        default: return <INTRO_AMANITA />;
      }
    } else if (guide === "trufas") {
      switch (activeTrufas) {
        case "intro_trufas": return <INTRO_TRUFAS setPhase={setActiveTrufas} />;
        case "compra_trufas": return <COMPRA_TRUFAS />;
        case "inoculacion_trufas": return <INOCULACION_TRUFAS />;
        case "incubacion_trufas": return <INCUBACION_TRUFAS />;
        case "cosecha_trufas": return <COSECHA_TRUFAS />;
        case "preparacion_trufas": return <PREPARACION_TRUFAS />;
        case "conservacion_trufas": return <CONSERVACION_TRUFAS />;
        case "harm_reduction_trufas": return <HARM_REDUCTION_TRUFAS />;
        case "faq_trufas": return <FAQ_TRUFAS />;
        case "biblio_trufas": return <BIBLIO_TRUFAS />;
        default: return <INTRO_TRUFAS />;
      }
    } else if (guide === "ayahuasca") {
      switch (activeAyahuasca) {
        case "intro_aya": return <INTRO_AYA setPhase={setActiveAyahuasca} />;
        case "compra_aya": return <COMPRA_AYA />;
        case "cultivo_caapi": return <CULTIVO_CAAPI />;
        case "cultivo_chacruna": return <CULTIVO_CHACRUNA />;
        case "cuidados_aya": return <CUIDADOS_AYA />;
        case "preparacion_brebaje": return <PREPARACION_BREBAJE />;
        case "ceremonia_aya": return <CEREMONIA_AYA />;
        case "harm_reduction_aya": return <HARM_REDUCTION_AYA />;
        case "faq_aya": return <FAQ_AYA />;
        case "biblio_aya": return <BIBLIO_AYA />;
        default: return <INTRO_AYA />;
      }
    } else if (guide === "dmt") {
      switch (activeDmt) {
        case "intro_dmt": return <INTRO_DMT setPhase={setActiveDmt} />;
        case "fuentes_dmt": return <FUENTES_DMT />;
        case "compra_dmt": return <COMPRA_DMT />;
        case "cultivo_mimosa": return <CULTIVO_MIMOSA />;
        case "cultivo_chaliponga": return <CULTIVO_CHALIPONGA />;
        case "cultivo_acacia": return <CULTIVO_ACACIA />;
        case "extraccion_dmt": return <EXTRACCION_DMT />;
        case "consumo_dmt": return <CONSUMO_DMT />;
        case "experiencia_dmt": return <EXPERIENCIA_DMT />;
        case "harm_reduction_dmt": return <HARM_REDUCTION_DMT />;
        case "faq_dmt": return <FAQ_DMT />;
        case "biblio_dmt": return <BIBLIO_DMT />;
        default: return <INTRO_DMT />;
      }
    } else if (guide === "hongos") {
      switch (activeHongos) {
        case "intro_hongos": return <INTRO_HONGOS setPhase={setActiveHongos} />;
        case "lions_mane": return <LIONS_MANE />;
        case "reishi": return <REISHI />;
        case "chaga": return <CHAGA />;
        case "cordyceps": return <CORDYCEPS />;
        case "glosario_hongos": return <GLOSARIO_HONGOS />;
        case "faq_hongos": return <FAQ_HONGOS />;
        case "biblio_hongos": return <BIBLIO_HONGOS />;
        default: return <INTRO_HONGOS />;
      }
    } else if (guide === "huerta") {
      switch (activeHuerta) {
        case "intro_huerta": return <INTRO_HUERTA setPhase={setActiveHuerta} />;
        case "compra_huerta": return <COMPRA_HUERTA />;
        case "tomate": return <TOMATE />;
        case "pimiento": return <PIMIENTO />;
        case "berenjena": return <BERENJENA />;
        case "lechuga": return <LECHUGA />;
        case "espinaca": return <ESPINACA />;
        case "kale": return <KALE />;
        case "acelga": return <ACELGA />;
        case "calabacin": return <CALABACIN />;
        case "pepino": return <PEPINO />;
        case "melon": return <MELON />;
        case "sandia": return <SANDIA />;
        case "zanahoria": return <ZANAHORIA />;
        case "rabano": return <RABANO />;
        case "remolacha": return <REMOLACHA />;
        case "patata": return <PATATA />;
        case "cebolla": return <CEBOLLA />;
        case "ajo": return <AJO />;
        case "puerro": return <PUERRO />;
        case "judia_verde": return <JUDIA_VERDE />;
        case "guisante": return <GUISANTE />;
        case "haba": return <HABA />;
        case "brocoli": return <BROCOLI />;
        case "coliflor": return <COLIFLOR />;
        case "albahaca": return <ALBAHACA />;
        case "perejil": return <PEREJIL />;
        case "cilantro": return <CILANTRO />;
        case "menta": return <MENTA />;
        case "romero": return <ROMERO />;
        case "tomillo": return <TOMILLO />;
        case "oregano": return <OREGANO />;
        case "faq_huerta": return <FAQ_HUERTA />;
        case "biblio_huerta": return <BIBLIO_HUERTA />;
        case "glosario_huerta": return <GLOSARIO_HUERTA />;
        default: return <INTRO_HUERTA />;
      }
    } else if (guide === "frutales") {
      switch (activeFrutales) {
        case "intro_frutales": return <INTRO_FRUTALES setPhase={setActiveFrutales} />;
        case "compra_frutales": return <COMPRA_FRUTALES />;
        case "fresa": return <FRESA />;
        case "frambuesa": return <FRAMBUESA />;
        case "arandano": return <ARANDANO />;
        case "mora": return <MORA />;
        case "limonero": return <LIMONERO />;
        case "naranjo": return <NARANJO />;
        case "mandarino": return <MANDARINO />;
        case "melocotonero": return <MELOCOTONERO />;
        case "ciruelo": return <CIRUELO />;
        case "cerezo": return <CEREZO />;
        case "albaricoquero": return <ALBARICOQUERO />;
        case "manzano": return <MANZANO />;
        case "peral": return <PERAL />;
        case "higuera": return <HIGUERA />;
        case "vid": return <VID />;
        case "kiwi": return <KIWI />;
        case "granado": return <GRANADO />;
        case "faq_frutales": return <FAQ_FRUTALES />;
        case "biblio_frutales": return <BIBLIO_FRUTALES />;
        case "glosario_frutales": return <GLOSARIO_FRUTALES />;
        default: return <INTRO_FRUTALES />;
      }
    }
  };

  // Maps for current phases / active / setter per guide
  const mushroomPhasesMap = { kit: mushroomKitPhases, friendly: mushroomFriendlyPhases, advanced: mushroomAdvancedPhases, general: mushroomGeneral };
  const mushroomActiveMap = { kit: activeMushroomKit, friendly: activeMushroomFriendly, advanced: activeMushroomAdvanced, general: activeMushroomGen };
  const mushroomSetterMap = { kit: setActiveMushroomKit, friendly: setActiveMushroomFriendly, advanced: setActiveMushroomAdvanced, general: setActiveMushroomGen };

  const fermentPhasesMap = { hidromiel: fermentHidromielPhases, cerveza: fermentCervezaPhases, sidra: fermentSidraPhases, chicha: fermentChichaPhases, pulque: fermentPulquePhases, balche: fermentBalchePhases, general: fermentGeneralPhases };
  const fermentActiveMap = { hidromiel: activeFermentHidromiel, cerveza: activeFermentCerveza, sidra: activeFermentSidra, chicha: activeFermentChicha, pulque: activeFermentPulque, balche: activeFermentBalche, general: activeFermentGen };
  const fermentSetterMap = { hidromiel: setActiveFermentHidromiel, cerveza: setActiveFermentCerveza, sidra: setActiveFermentSidra, chicha: setActiveFermentChicha, pulque: setActiveFermentPulque, balche: setActiveFermentBalche, general: setActiveFermentGen };

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
      { id: "sidra", label: "🍎 Sidra", sub: "Manzana otoño" },
      { id: "chicha", label: "🌽 Chicha", sub: "Maíz andino" },
      { id: "pulque", label: "🌵 Pulque", sub: "Agave mexicano" },
      { id: "balche", label: "🌿 Balché", sub: "Corteza maya" },
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
  } else if (guide === "toxicas") {
    currentPhases = toxicasPhases;
    currentActive = activeToxicas;
    setCurrentActive = setActiveToxicas;
    colors = TOXICAS_COLORS;
    title = "☠️ Plantas Tóxicas & Venenos";
    modeOptions = null;
    currentMode = null; setCurrentMode = null;
  } else if (guide === "amanita") {
    currentPhases = amanitaPhases;
    currentActive = activeAmanita;
    setCurrentActive = setActiveAmanita;
    colors = AMANITA_COLORS;
    title = "🍄 Amanita Muscaria";
    modeOptions = null;
    currentMode = null; setCurrentMode = null;
  } else if (guide === "trufas") {
    currentPhases = trufasPhases;
    currentActive = activeTrufas;
    setCurrentActive = setActiveTrufas;
    colors = TRUFAS_COLORS;
    title = "🍯 Trufas Mágicas";
    modeOptions = null;
    currentMode = null; setCurrentMode = null;
  } else if (guide === "ayahuasca") {
    currentPhases = ayahuascaPhases;
    currentActive = activeAyahuasca;
    setCurrentActive = setActiveAyahuasca;
    colors = AYAHUASCA_COLORS;
    title = "🌿 Ayahuasca";
    modeOptions = null;
    currentMode = null; setCurrentMode = null;
  } else if (guide === "hongos") {
    currentPhases = hongosMedicinalesPhases;
    currentActive = activeHongos;
    setCurrentActive = setActiveHongos;
    colors = HONGOS_COLORS;
    title = "🌿 Hongos Medicinales";
    modeOptions = null;
    currentMode = null; setCurrentMode = null;
  } else if (guide === "huerta") {
    currentPhases = huertaPhases;
    currentActive = activeHuerta;
    setCurrentActive = setActiveHuerta;
    colors = HUERTA_COLORS;
    title = "🥬 Huerta Mediterránea";
    modeOptions = null;
    currentMode = null; setCurrentMode = null;
  } else if (guide === "frutales") {
    currentPhases = frutalesPhases;
    currentActive = activeFrutales;
    setCurrentActive = setActiveFrutales;
    colors = FRUTALES_COLORS;
    title = "🍎 Frutales Mediterráneos";
    modeOptions = null;
    currentMode = null; setCurrentMode = null;
  } else { // dmt
    currentPhases = dmtPhases;
    currentActive = activeDmt;
    setCurrentActive = setActiveDmt;
    colors = DMT_COLORS;
    title = "🌌 DMT";
    modeOptions = null;
    currentMode = null; setCurrentMode = null;
  }

  // Guías agrupadas: Cultivo / Visionarias / Otras
  // Cada guía tiene su paleta para mantener identidad visual incluso agrupada
  const guides = [
    // 🌱 CULTIVAR PLANTAS
    { id: "cannabis", emoji: "🌿", label: "Cannabis", grupo: "🌱 Cultivar plantas", accent: CANNABIS_COLORS.accent1 },
    { id: "cactus", emoji: "🌵", label: "Cactus", grupo: "🌱 Cultivar plantas", accent: CACTUS_COLORS.accent1 },
    { id: "ayahuasca", emoji: "🌿", label: "Ayahuasca", grupo: "🌱 Cultivar plantas", accent: AYAHUASCA_COLORS.accent1 },
    { id: "dmt", emoji: "🌌", label: "DMT", grupo: "🌱 Cultivar plantas", accent: DMT_COLORS.accent1 },
    { id: "plantas", emoji: "🪷", label: "Plantas suaves", grupo: "🌱 Cultivar plantas", accent: PLANTAS_COLORS.accent1 },
    { id: "toxicas", emoji: "☠️", label: "Plantas tóxicas", grupo: "🌱 Cultivar plantas", accent: TOXICAS_COLORS.accent1 },
    { id: "huerta", emoji: "🥬", label: "Huerta", grupo: "🌱 Cultivar plantas", accent: HUERTA_COLORS.accent1 },
    { id: "frutales", emoji: "🍎", label: "Frutales", grupo: "🌱 Cultivar plantas", accent: FRUTALES_COLORS.accent1 },
    // 🍄 CULTIVAR/FORRAJEAR HONGOS
    { id: "mushroom", emoji: "🍄", label: "Setas", grupo: "🍄 Cultivar / forrajear hongos", accent: MUSHROOM_COLORS.accent1 },
    { id: "trufas", emoji: "🍯", label: "Trufas mágicas", grupo: "🍄 Cultivar / forrajear hongos", accent: TRUFAS_COLORS.accent1 },
    { id: "amanita", emoji: "🟥", label: "Amanita", grupo: "🍄 Cultivar / forrajear hongos", accent: AMANITA_COLORS.accent1 },
    { id: "hongos", emoji: "🌿", label: "Hongos medicinales", grupo: "🍄 Cultivar / forrajear hongos", accent: HONGOS_COLORS.accent1 },
    // 🫙 FERMENTAR
    { id: "ferment", emoji: "🍯", label: "Fermentar", grupo: "🫙 Fermentar", accent: FERMENT_COLORS.accent1 },
  ];

  // Agrupar guías por grupo manteniendo orden de declaración
  const grupos = guides.reduce((acc, g) => {
    if (!acc[g.grupo]) acc[g.grupo] = [];
    acc[g.grupo].push(g);
    return acc;
  }, {});

  const [dropdownOpen, setDropdownOpen] = useState(false);
  const currentGuide = guides.find(g => g.id === guide);

  return (
    <div className="app-layout" style={{ background: colors.bg, minHeight: "100vh", color: colors.text }}>
      <div className="app-header" style={{ background: colors.gradient, padding: "24px 24px 20px", textAlign: "center", borderBottom: `2px solid ${colors.borderAccent}` }}>
        {/* MOBILE: dropdown compacto */}
        <div className="guides-dropdown" style={{ marginBottom: "16px", position: "relative", maxWidth: "320px", margin: "0 auto 16px" }}>
          <button onClick={() => setDropdownOpen(!dropdownOpen)} style={{
            width: "100%", padding: "10px 14px", fontSize: "13px", fontWeight: "bold",
            borderRadius: "8px", cursor: "pointer",
            background: currentGuide.accent, color: "#0a0a0a",
            border: `1.5px solid ${currentGuide.accent}`,
            display: "flex", justifyContent: "space-between", alignItems: "center",
          }}>
            <span>{currentGuide.emoji} {currentGuide.label}</span>
            <span style={{ fontSize: "10px" }}>{dropdownOpen ? "▲" : "▼"}</span>
          </button>
          {dropdownOpen && (
            <div style={{
              position: "absolute", top: "100%", left: 0, right: 0, marginTop: "4px",
              background: colors.bg2, border: `1px solid ${colors.border1}`,
              borderRadius: "8px", padding: "8px", zIndex: 100,
              boxShadow: "0 4px 12px rgba(0,0,0,0.4)",
              maxHeight: "70vh", overflowY: "auto",
            }}>
              {Object.entries(grupos).map(([grupoLabel, gs]) => (
                <div key={grupoLabel} style={{ marginBottom: "8px" }}>
                  <div style={{
                    fontSize: "9px", letterSpacing: "1.5px", color: colors.accent2, opacity: 0.6,
                    padding: "4px 8px", textTransform: "uppercase", fontWeight: "bold",
                  }}>{grupoLabel}</div>
                  {gs.map(g => {
                    const active = guide === g.id;
                    return (
                      <button key={g.id} onClick={() => { setGuide(g.id); setDropdownOpen(false); }} style={{
                        display: "block", width: "100%", textAlign: "left",
                        padding: "8px 12px", fontSize: "12px", fontWeight: active ? "bold" : "normal",
                        borderRadius: "6px", cursor: "pointer", border: "none",
                        background: active ? g.accent : "rgba(0,0,0,0.3)",
                        color: active ? "#0a0a0a" : g.accent,
                        marginBottom: "2px",
                      }}>
                        {g.emoji} {g.label}
                      </button>
                    );
                  })}
                </div>
              ))}
            </div>
          )}
        </div>

        {/* DESKTOP: 3 filas, una por grupo. Bloque centrado, labels left-aligned al mismo X */}
        <div className="guides-row" style={{ marginBottom: "16px", display: "none", flexDirection: "column", gap: "6px", width: "fit-content", margin: "0 auto 16px" }}>
          {Object.entries(grupos).map(([grupoLabel, gs]) => (
            <div key={grupoLabel} style={{ display: "flex", alignItems: "center", gap: "8px", flexWrap: "wrap" }}>
              <span style={{
                fontSize: "9px", letterSpacing: "1.5px", color: colors.accent2, opacity: 0.6,
                textTransform: "uppercase", fontWeight: "bold", minWidth: "230px", textAlign: "left",
              }}>{grupoLabel}</span>
              {gs.map(g => {
                const active = guide === g.id;
                return (
                  <button key={g.id} onClick={() => setGuide(g.id)} style={{
                    padding: "5px 10px", fontSize: "11px", fontWeight: "bold",
                    borderRadius: "6px", cursor: "pointer", transition: "all 0.2s",
                    background: active ? g.accent : "rgba(0,0,0,0.4)",
                    color: active ? "#0a0a0a" : g.accent,
                    border: `1.5px solid ${g.accent}`,
                  }}>
                    {g.emoji} {g.label}
                  </button>
                );
              })}
            </div>
          ))}
        </div>
        <h1 className="heading-serif" style={{ fontSize: "22px", fontWeight: "bold", margin: "0 0 16px", color: colors.textBright }}>
          {title}
        </h1>
        {modeOptions && (
          <div className="mode-switcher" style={{ display: "flex", background: colors.bg2, borderRadius: "12px", padding: "4px", gap: "4px", maxWidth: "440px", margin: "0 auto", overflowX: "auto" }}>
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
            🍯 Hidromiel 4-8 sem ⎜ 🍺 Cerveza 4-6 sem ⎜ 🍎 Sidra 3-6 sem ⎜ Equipo reutilizable
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
        {guide === "trufas" && (
          <div style={{ textAlign: "center", color: colors.accent1, fontSize: "12px", padding: "8px" }}>
            🍯 Esclerocios subterráneos · 8-16 semanas · MÁS FÁCIL que setas (sin fructificación)
          </div>
        )}
        {guide === "ayahuasca" && (
          <div style={{ textAlign: "center", color: colors.accent1, fontSize: "12px", padding: "8px" }}>
            🌿 Caapi (vid IMAO) + Chacruna (DMT). Brebaje 4-6h. DIETA previa OBLIGATORIA.
          </div>
        )}
        {guide === "dmt" && (
          <div style={{ textAlign: "center", color: colors.accent1, fontSize: "12px", padding: "8px" }}>
            🌌 Mimosa hostilis cultivable. Cristal puro = ILEGAL en España. Ayahuasca = alternativa legal gris.
          </div>
        )}
        {guide === "huerta" && (
          <div style={{ textAlign: "center", color: colors.accent1, fontSize: "12px", padding: "8px" }}>
            🥬 35 verduras y aromáticas · Huerto mediterráneo todo el año · Cosecha tu propia comida
          </div>
        )}
        {guide === "frutales" && (
          <div style={{ textAlign: "center", color: colors.accent1, fontSize: "12px", padding: "8px" }}>
            🍎 19 frutales adaptados al clima de Barcelona · De fresa en maceta a limonero productivo
          </div>
        )}
      </div>
    </div>
  );
}
