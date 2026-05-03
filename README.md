# 🌱 Guía de Cultivo

App web para cultivar y preparar **8 sustancias en casa**: cannabis, setas, cactus, ayahuasca, DMT, fermentaciones, plantas suaves y Amanita. Sin instalación, sin cuenta, funciona en el móvil.

**🌐 [Abre la guía aquí](https://tecladooscuro.github.io/guia-cultivo/)**

---

## Cómo funciona

1. **Elige guía** arriba (8 botones con emoji)
2. **Elige modo** debajo del título (las que tienen submodos: Cannabis, Setas, Fermentar)
3. **Navega phases** en pestañas (vertical en desktop, horizontal en móvil)
4. **Filtra listas de compra** con pills clickables (prioridad, tipo, dónde comprar)
5. **Click en azul** = enlace al glosario con búsqueda automática
6. **Footer** = info contextual de la sección activa

Funciona offline tras el primer load.

---

## Las 8 guías

### 🌿 Cannabis
**3 modos:** Interior · Exterior · General
Compra → semillas → setup → germinación → vegetativa → floración → cosecha → curado. Diagnóstico de deficiencias, extracciones (hash, mantequilla), 50+ términos en glosario.

### 🍯 Fermentaciones
**4 modos:** General · Hidromiel · Cerveza · Sidra
Bebidas alcohólicas caseras, 100% legales (sin destilación). Recetas paso-a-paso, troubleshooting, embotellado natural o con gas.
- 🍯 Hidromiel: miel + agua, 4-8 semanas
- 🍺 Cerveza: kit extracto o all-grain, 4-6 semanas
- 🍎 Sidra: manzana otoñal, 3-6 semanas, espumosa o natural

### 🍄 Setas Psilocybe
**4 modos:** Kit · Friendly · Avanzado · General
- Kit: pan de micelio + SGFC, 3-4 sem
- Friendly: spawn bag pre-esterilizado + cultura líquida, sin lab, 6-13 sem
- Avanzado: olla a presión + SAB + jeringa esporas, 12-16 sem
- Timeline visual comparando los 3 modos + glosario + FAQ

### 🌵 Cactus mescalina
San Pedro / Bolivian Torch / Peruvian Torch. Cultivo legal como ornamental. Inversión: TIEMPO (2-4 años para primera cosecha desde esqueje). Una planta dura décadas.

### 🌿 Ayahuasca
Vid Banisteriopsis caapi (IMAOs) + Psychotria viridis (DMT). Cultivo plantas + brebaje tradicional. Cocción 6-12h. **Requiere dieta previa estricta** (sin tiramina) por riesgo de síndrome serotonérgico.

### 🌌 DMT
Cultivo de Mimosa hostilis (legal). Visión general de extracción A/B (educativa, NO recetas — extracción ilegal en España). Información sobre experiencia, harm reduction, alternativas legales (ayahuasca casera, ceremonias).

### 🟥 Amanita muscaria
Forrajeo en bosque (no se cultiva — micorrícica). Identificación crítica vs Amanitas mortales. Secado + decarboxilación (iboténico → muscimol). Conservación 1-5 años según método. Tabla de dosificación con harm reduction completo.

### 🪷 Plantas suaves (8 plantas)
Salvia divinorum · Damiana · Blue Lotus · Lechuga silvestre · Calea zacatechichi · **Kava** · **Kanna** + FAQ.
Todas legales, cultivo casero o forrajeo, harm reduction por planta. Kanna se puede cultivar en guerrilla en zonas mediterráneas secas.

---

## Diseño

- **Cada guía con su paleta** (verde cannabis, marrón setas, dorado fermentar, etc.) — visual rápido para saber dónde estás
- **Inter** body + **Fraunces** headings (Google Fonts)
- **Dark mode** por defecto
- **Responsive**: sidebar vertical en desktop ≥900px, scroll horizontal en móvil
- **Tags coloridos** (ESENCIAL/IMPORTANTE/ÚTIL, Equipo/Consumible, Internet/Grow shop/Farmacia/Tienda física)

---

## Legalidad (España)

| Guía | Estado |
|---|---|
| Cannabis | ✅ Cultivo personal tolerado |
| Fermentaciones (sin destilar) | ✅ 100% legal |
| Setas Psilocybe | 🟡 Cultivo casero gris/tolerado |
| Cactus mescalina | ✅ Cultivo ornamental legal · 🟡 consumo gris |
| Ayahuasca | ✅ Plantas legales · 🟡 brebaje gris |
| DMT (Mimosa) | ✅ Planta legal · ❌ extracción cristal ilegal |
| Amanita muscaria | ✅ 100% legal recolectar/poseer/consumir |
| Plantas suaves | ✅ Las 7 listadas legales |

---

## Lo que NO hace esta guía

- Recetas paso-a-paso de extracción química de DMT (ilegal)
- Destilación de alcohol casero (ilegal)
- Síntesis de drogas controladas
- Sustancias deliberadamente excluidas: Datura/Brugmansia (peligro de muerte), Iboga (cardíaco), Khat (ilegal EU), Coca (ilegal)

---

## Para desarrollar local

```
src/
├── app/
│   ├── colors.js          # 8 paletas
│   ├── phases.js          # Pestañas por guía/modo
│   └── gui-cultivo.js     # Componente principal
├── helpers/
│   └── components.js      # Step, InfoBox, GlossaryLink + variantes
└── components/
    ├── cannabis/          # interior/exterior/general
    ├── mushroom/          # kit/friendly/advanced/general
    ├── fermentation/      # hidromiel/cerveza/sidra/general
    ├── cactus/            # general
    ├── ayahuasca/         # general
    ├── dmt/               # general
    ├── amanita/           # general
    └── plantas/           # general (8 plantas)
```

```bash
node build.js   # genera index.html desde src/
```

`html-template.html` = esqueleto. `index.html` = generado, no editar.

---

## Licencia

Educativo. Úsalo, comparte, aprende. Sin garantía.

---

[**👉 https://tecladooscuro.github.io/guia-cultivo/**](https://tecladooscuro.github.io/guia-cultivo/)
