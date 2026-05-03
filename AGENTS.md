# AGENTS.md — Guía para modificar este proyecto con IA

Documento de referencia para que cualquier IA (Claude, GPT, etc.) o desarrollador entienda cómo está construido el proyecto y modifíquelo correctamente sin romper nada.

---

## 🎯 Qué es este proyecto

App web monolítica de una sola página (SPA) que enseña a cultivar/preparar 9 sustancias en casa: cannabis, setas Psilocybe, trufas mágicas, cactus mescalina, ayahuasca, DMT, Amanita muscaria, plantas suaves (Salvia/Damiana/etc.), fermentaciones (hidromiel/cerveza/sidra).

URL pública: https://tecladooscuro.github.io/guia-cultivo/

Estilo: educativo, harm reduction, contenido en español. Sin recetas de extracción química ilegal. Cubre legal + zonas grises.

---

## 🏗️ Arquitectura

**Sin bundler** — usa React + Babel via CDN. El navegador no entiende `import/export`, así que todo el JS va en UN solo `<script type="text/babel">` dentro de `index.html`.

```
src/                          ← FUENTE editable (modular)
├── app/
│   ├── colors.js             ← Paletas de color por guía (CANNABIS_COLORS, MUSHROOM_COLORS, etc.)
│   ├── phases.js             ← Definiciones de pestañas/phases por guía
│   └── gui-cultivo.js        ← Componente principal (state, navegación, render)
├── helpers/
│   └── components.js         ← Helpers compartidos: Step, InfoBox, GlossaryLink, etc.
└── components/
    ├── cannabis/
    │   ├── interior.js
    │   ├── exterior.js
    │   └── general.js        ← Incluye glosario + FAQ + TIMELINE
    ├── mushroom/
    │   ├── kit.js
    │   ├── friendly.js
    │   ├── advanced.js
    │   └── general.js        ← Incluye glosario psicoactivo (universal) + FAQ + TIMELINE_SETAS
    ├── trufas/general.js
    ├── cactus/general.js
    ├── ayahuasca/general.js
    ├── dmt/general.js
    ├── amanita/general.js
    ├── plantas/general.js
    └── fermentation/
        ├── hidromiel.js
        ├── cerveza.js
        ├── sidra.js
        └── general.js        ← Incluye glosario fermentación + FAQ + intro + higiene

build.js                      ← Concatena src/*.js en orden y los pega en html-template.html
html-template.html            ← Esqueleto HTML + CSS + scripts CDN
index.html                    ← ARTEFACTO GENERADO por build.js. NO EDITAR.
```

**Flujo de modificación:**
1. Editar archivos en `src/`
2. Ejecutar `node build.js`
3. `index.html` se regenera

---

## 🎨 Sistema de paletas

Cada guía tiene su paleta en `src/app/colors.js`. Estructura uniforme:

```js
const NOMBRE_COLORS = {
  bg, bg2, bg3, bg4,                    // Fondos (oscuro a claro)
  border1, border2, borderAccent,       // Bordes
  accent1, accent2, accent3, accent4, accent5,  // Acentos (oscuro a claro)
  text, textBright,                     // Textos
  gradient,                             // Gradient para header
  error, errorBg, errorBorder,          // Estados de error
};
```

Paletas existentes:
- `CANNABIS_COLORS` (verde bosque)
- `MUSHROOM_COLORS` (marrón cálido)
- `CACTUS_COLORS` (azul-desértico)
- `AYAHUASCA_COLORS` (verde-jungla)
- `DMT_COLORS` (púrpura-cristal)
- `FERMENT_COLORS` (dorado-ámbar)
- `PLANTAS_COLORS` (púrpura-malva)
- `AMANITA_COLORS` (rojo intenso)
- `TRUFAS_COLORS` (marrón-oliva subterráneo)

---

## 🧱 Helper components catalog

Helpers en `src/helpers/components.js`. Tres familias:

### 1. Cannabis-themed (verde, hardcoded colors)
- `<Step num={N} text="..." why="..." warning />`
- `<ErrorCard error="..." consecuencia="..." fix="..." />`
- `<SectionTitle color="...">TÍTULO</SectionTitle>`
- `<StatBox label="..." value="..." />`
- `<InfoBox>{children}</InfoBox>`

### 2. Mushroom-themed (marrón, usa MUSHROOM_COLORS)
- `<StepM ... />`
- `<ErrorCardM ... />`
- `<SectionTitleM>...</SectionTitleM>`
- `<StatBoxM ... />`
- `<InfoBoxM>...</InfoBoxM>`

### 3. Genéricos con prop `c={colors}` (NUEVAS GUÍAS USAN ESTOS)
- `<StepX num={N} text="..." why="..." warning c={c} />`
- `<ErrorCardX error="..." consecuencia="..." fix="..." c={c} />`
- `<SectionTitleX c={c}>TÍTULO</SectionTitleX>`
- `<StatBoxX label="..." value="..." c={c} />`
- `<InfoBoxX c={c}>...</InfoBoxX>`
- `<WarningBoxX c={c}>...</WarningBoxX>`
- `<LegalHealthBox c={c} legal={...} salud={...} contraindicaciones={...} recursos={...} />`

### 4. GlossaryLink (cross-guide)
```jsx
<GlossaryLink term="DMT">DMT</GlossaryLink>
<GlossaryLink guide="cannabis" term="LST (Low Stress Training)">LST</GlossaryLink>
```

Por defecto resuelve contra glosario `mushroom` (psicoactivo universal). Pasar `guide="cannabis"` para usar glosario cannabis. Click → navega al glosario de la guía respectiva con el término ya filtrado en el buscador.

---

## ➕ Cómo añadir una nueva guía

1. **Añadir paleta** en `src/app/colors.js`:
   ```js
   const NUEVA_COLORS = { bg: ..., bg2: ..., ..., gradient: ... };
   ```

2. **Añadir phases** en `src/app/phases.js`:
   ```js
   const nuevaPhases = [
     { id: "intro_nueva", emoji: "🌟", title: "Intro", subtitle: "..." },
     { id: "compra_nueva", emoji: "🛒", title: "Compra", subtitle: "..." },
     // ... más phases
     { id: "faq_nueva", emoji: "❓", title: "FAQ", subtitle: "..." },
   ];
   ```

3. **Crear componente** en `src/components/nueva/general.js`:
   ```js
   function INTRO_NUEVA() {
     const c = NUEVA_COLORS;
     return (
       <div>
         <InfoBoxX c={c}>...</InfoBoxX>
         <SectionTitleX c={c}>SECCIÓN</SectionTitleX>
         <StepX c={c} num={1} text="..." />
         <LegalHealthBox c={c} legal={...} salud="..." contraindicaciones="..." />
       </div>
     );
   }
   // Más componentes...
   ```

4. **Wire up en `gui-cultivo.js`**:
   - Añadir state: `const [activeNueva, setActiveNueva] = useState("intro_nueva");`
   - Añadir case en `renderContent()`: `} else if (guide === "nueva") { switch (activeNueva) { ... } }`
   - Añadir bloque de configuración en let `if (guide === "nueva") { currentPhases = nuevaPhases; ... }`
   - Añadir al array `guides` con grupo, emoji, accent, label

5. **Actualizar `build.js`** para incluir el archivo nuevo:
   ```js
   const sourceFiles = [..., 'src/components/nueva/general.js', ...];
   ```

6. **Verificar:**
   ```bash
   node build.js
   # debería decir "✓ index.html generated successfully"
   ```

---

## ➕ Cómo añadir una nueva phase a guía existente

1. **Añadir entry en phases array** en `src/app/phases.js`:
   ```js
   { id: "nueva_phase", emoji: "🆕", title: "Nueva", subtitle: "..." },
   ```

2. **Crear componente** en el archivo apropiado (mismo .js que otros componentes de esa guía):
   ```js
   function NUEVA_PHASE() {
     const c = MUSHROOM_COLORS; // o la paleta correspondiente
     return (...);
   }
   ```

3. **Añadir case** en `gui-cultivo.js` switch correspondiente:
   ```js
   case "nueva_phase": return <NUEVA_PHASE />;
   ```

4. Build + verify.

---

## ➕ Cómo añadir un término al glosario

**Glosario psicoactivo** (universal, en `src/components/mushroom/general.js`, función `CONCEPTOS_SETAS`):
```js
const terms = [
  ...,
  { term: "Nuevo término", def: "Definición clara y concisa explicando qué es." },
];
```

**Glosario cannabis** (en `src/components/cannabis/general.js`, función `CONCEPTOS`).

**Glosario fermentación** (en `src/components/fermentation/general.js`, función `GLOSARIO_FERMENT`).

Una vez añadido, puede usarse `<GlossaryLink term="Nuevo término">texto</GlossaryLink>` en cualquier componente de cualquier guía (default mushroom; pasar `guide="cannabis"` o `guide="ferment"` si aplica).

---

## 📋 Patrón estándar de un componente phase

```js
function NOMBRE_PHASE() {
  const c = COLORS_DE_LA_GUIA;
  return (
    <div>
      <InfoBoxX c={c}>
        Resumen breve de qué cubre esta phase. 1-2 líneas.
      </InfoBoxX>

      <SectionTitleX c={c}>CONDICIONES IDEALES</SectionTitleX>
      <div style={{ display: "grid", gridTemplateColumns: "1fr 1fr", gap: "10px", marginBottom: "16px" }}>
        <StatBoxX c={c} label="Temperatura" value="22-30°C" />
        <StatBoxX c={c} label="..." value="..." />
      </div>

      <SectionTitleX c={c}>PASO A PASO</SectionTitleX>
      <StepX c={c} num={1} text="..." why="..." />
      <StepX c={c} num={2} text="..." />

      <SectionTitleX c={c}>ERRORES COMUNES</SectionTitleX>
      <ErrorCardX c={c}
        error="..."
        consecuencia="..."
        fix="..."
      />
    </div>
  );
}
```

Para INTRO de guía: añadir al final `<LegalHealthBox c={c} legal={...} salud="..." contraindicaciones="..." />`.

---

## 📋 Patrón estándar de COMPRA con filtros

```js
function COMPRA_X() {
  const c = COLORS;
  const items = [
    { item: "...", precio: "X-Y€", donde: "Internet|Grow shop|Farmacia|Tienda física|Gratis", nota: "...", prioridad: "ESENCIAL|IMPORTANTE|ÚTIL", tipo: "Equipo|Consumible" },
    // ...
  ];
  const [filterPrio, setFilterPrio] = React.useState([]);
  const [filterTipo, setFilterTipo] = React.useState([]);
  const togglePrio = (p) => setFilterPrio(s => s.includes(p) ? s.filter(x => x !== p) : [...s, p]);
  const toggleTipo = (t) => setFilterTipo(s => s.includes(t) ? s.filter(x => x !== t) : [...s, t]);
  const filtered = items.filter(i =>
    (filterPrio.length === 0 || filterPrio.includes(i.prioridad)) &&
    (filterTipo.length === 0 || filterTipo.includes(i.tipo))
  );
  // ... renderizar pills + lista filtrada
}
```

---

## 📋 Patrón estándar de FAQ con buscador

```js
function FAQ_X() {
  const c = COLORS;
  const [query, setQuery] = React.useState("");
  const faqs = [
    { q: "¿Pregunta?", a: "Respuesta. Puede tener \\n\\nlíneas múltiples." },
    // ...
  ];
  const filtered = faqs.filter(f =>
    f.q.toLowerCase().includes(query.toLowerCase()) ||
    f.a.toLowerCase().includes(query.toLowerCase())
  );

  return (
    <div>
      <InfoBoxX c={c}>Intro al FAQ.</InfoBoxX>
      <input type="text" placeholder="🔍 Buscar..." value={query} onChange={(e) => setQuery(e.target.value)} style={{...}} />
      <div>{filtered.length}/{faqs.length} preguntas</div>
      {filtered.map((f, i) => (
        <div key={i} style={{ background: c.bg2, ... }}>
          <div>❓ {f.q}</div>
          <div>{f.a}</div>
        </div>
      ))}
    </div>
  );
}
```

---

## 🚦 Convenciones de contenido

1. **Idioma:** Español (España). Usar tú/tuyo, no usted.
2. **Tono:** directo, harm reduction first, sin moralizar.
3. **Términos técnicos:** envolver con `<GlossaryLink term="...">...</GlossaryLink>` la PRIMERA VEZ en cada componente que aparecen.
4. **Precios:** rangos en € (ej. "20-40€"), incluyendo desde dónde comprar (Internet/Grow shop/Farmacia/Tienda física).
5. **Avisos legales:** estado España + UE cuando varía. Usar ✅ legal · 🟡 gris · ❌ ilegal.
6. **Avisos salud:** contraindicaciones específicas (medicación SSRI/IMAO, embarazo, cardiopatía, esquizofrenia/bipolar).
7. **Recursos:** Erowid, TripSit, Energy Control, MAPS, Anti-tóxicos España (915 620 420), Emergencias (112).
8. **NO incluir:** recetas paso-a-paso de extracción química ilegal, síntesis, destilación de alcohol, sustancias deliberadamente excluidas (Datura, Iboga, Khat, coca, opiáceos).
9. **Fuentes:** harm reduction reputado (Erowid, TripSit, MAPS, libros como Stamets, Strassman). NO copiar de fuentes anti-drogas o pro-prohibición.

---

## 🛠️ Comandos útiles

```bash
# Build
node build.js

# Verificar parse de babel (necesita @babel/parser instalado en /tmp)
node -e "
const fs = require('fs');
const parser = require('/tmp/node_modules/@babel/parser');
const html = fs.readFileSync('index.html','utf-8');
const m = html.match(/<script type=\"text\/babel\">([\s\S]*?)<\/script>/);
try { parser.parse(m[1], { sourceType: 'script', plugins: ['jsx'] }); console.log('✓ clean'); }
catch (e) { console.log('✗', e.message); }
"

# Verificar phase IDs vs cases
node -e "
const fs = require('fs');
const gui = fs.readFileSync('src/app/gui-cultivo.js','utf-8');
const cases = [...gui.matchAll(/case\s+\"([^\"]+)\":/g)].map(m => m[1]);
const phasesJs = fs.readFileSync('src/app/phases.js','utf-8');
const ids = [...phasesJs.matchAll(/id:\s*\"([^\"]+)\"/g)].map(m => m[1]);
const orphan = ids.filter(id => !cases.includes(id));
console.log('Phase IDs sin case:', orphan.length ? orphan : 'none');
"

# Verificar GlossaryLink terms resuelven
node -e "
const fs = require('fs');
const cTerms = new Set([...fs.readFileSync('src/components/cannabis/general.js','utf-8').matchAll(/{ term: \"([^\"]+)\"/g)].map(m => m[1]));
const mTerms = new Set([...fs.readFileSync('src/components/mushroom/general.js','utf-8').matchAll(/{ term: \"([^\"]+)\"/g)].map(m => m[1]));
// itera src/components/**/*.js, encuentra <GlossaryLink term=\"X\" guide=\"Y\"/> y verifica que X está en cTerms o mTerms
"
```

---

## 🚀 Estado actual del proyecto (snapshot)

- **9 guías** activas en 3 grupos
- **129 phases** totales
- **120+ preguntas FAQ** con buscadores
- **3 glosarios:** cannabis (50+ terms) · psicoactivo universal (80+ terms) · fermentación (22 terms)
- **Build size:** ~9800 líneas en index.html

---

## ⚠️ Cuidados al modificar

1. **NO editar `index.html` a mano** — se sobreescribe en cada `node build.js`.
2. **Verificar todo `case` matches a un componente** (el verifier comando arriba lo chequea).
3. **Nuevo término en glosario** — verificar que las refs `<GlossaryLink term="X">` matchean exactamente.
4. **Nueva paleta:** añadir TODAS las propiedades (algunas funciones esperan `c.bg3`, `c.errorBg`, etc.).
5. **Mobile responsive:** el toggle de guías es dropdown mobile (`<900px`), filas desktop. Verificar en ambos viewports.
6. **Babel parser:** correr el verifier después de editar — un error JSX rompe la app entera.
7. **Sin emojis decorativos** en archivos de código (commits, comentarios) salvo cuando son parte del contenido del usuario.
8. **CAVEMAN MODE:** este proyecto se desarrolla con caveman mode activado en el AI assistant — respuestas user-facing son terse. NO afecta el contenido del producto (sigue siendo profesional).

---

## 📞 Para qué este documento

Si una IA o desarrollador toma este proyecto sin contexto:
1. Lee este AGENTS.md primero
2. Lee `README.md` para overview de usuario
3. Mira `src/components/cannabis/interior.js` como ejemplo canónico de componente
4. Sigue los patrones establecidos
5. Build + verify antes de commit
6. Commits descriptivos en español

---

## 🔄 Última actualización del documento

Mantener actualizado cuando se añadan nuevas guías, paletas o helpers. La fecha + cambio último abajo:

- 2026-05-03: Documento inicial. 9 guías, 129 phases, 3 glosarios, LegalHealthBox uniforme.
