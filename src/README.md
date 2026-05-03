# Estructura Modular - Guía de Cultivo

## 📁 Organización

```
src/
├── app/
│   ├── colors.js          # Paletas CANNABIS_COLORS, MUSHROOM_COLORS
│   ├── phases.js          # Definiciones de tabs/fases para todas las guías
│   └── gui-cultivo.js     # (Pendiente) Componente principal GuiaCultivo
│
├── components/
│   ├── cannabis/
│   │   ├── interior/      # (Pendiente) Componentes modo interior
│   │   ├── exterior/      # (Pendiente) Componentes modo exterior
│   │   └── general/       # (Pendiente) Componentes generales
│   │
│   └── mushroom/
│       ├── kit.js         # Kit mode completo (6 tabs)
│       ├── manual.js      # Manual mode completo (7 tabs)
│       └── general.js     # Glosario + FAQ
│
└── helpers/
    └── (Pendiente) components.js - Step, InfoBox, ErrorCard, etc.
```

## 🎯 Estrategia

**Estado actual:**
- `index.html` es monolítico pero funcional (3766 líneas)
- `/src/app/colors.js` existe ✓
- `/src/app/phases.js` existe ✓
- `/src/components/mushroom/*` existe ✓
- Resto de módulos: pendientes

**Próximos pasos:**
1. Extraer helpers a `src/helpers/components.js`
2. Dividir componentes Cannabis por sección (interior, exterior, general)
3. Crear `src/app/gui-cultivo.js` con lógica principal
4. Mejorar `build.js` para concatenar en orden
5. Ejecutar build para generar index.html final
6. Eliminar index.html monolítico una vez validado

## 🔄 Build Process

```bash
node build.js
```

Concatena en orden:
1. html-template.html (estructura HTML)
2. src/app/colors.js
3. src/app/phases.js
4. src/helpers/components.js
5. src/components/cannabis/* (interior, exterior, general)
6. src/components/mushroom/* (kit, manual, general)
7. src/app/gui-cultivo.js
8. Footer React.createRoot

Genera: `index.html` (artifact final, desplegable)

## 📝 Notas

- **src/** = código fuente legible, fácil de mantener
- **index.html** = artifact generado, no editar directamente
- **html-template.html** = estructura base para build

Sin bundler (usando CDN React + Babel), la concatenación es simple.
Futuro: integrar con Vite/Webpack si necesario.

## 🔐 Cambios

Cuando hagas cambios:
1. Edita archivo en `/src/`
2. Ejecuta `npm run build` (cuando esté configurado)
3. Verifica `index.html` generado
4. Commit ambos (src/ + index.html)
