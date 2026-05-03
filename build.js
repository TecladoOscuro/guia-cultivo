#!/usr/bin/env node

const fs = require('fs');
const path = require('path');

// Lee HTML template
const htmlTemplate = fs.readFileSync('html-template.html', 'utf-8');

// Lista de archivos a concatenar EN ORDEN
const sourceFiles = [
  'src/app/colors.js',
  'src/app/phases.js',
  // helpers y componentes vendrán después cuando se creen
];

// Lee y concatena cada archivo, removiendo duplicates de 'const'
let combinedJs = '    const { useState } = React;\n\n';

// Leer colors.js y extraer solo las definiciones
const colorsFile = fs.readFileSync('src/app/colors.js', 'utf-8');
const colorsContent = colorsFile
  .split('\n')
  .filter(line => !line.startsWith('//') && line.trim() !== '')
  .join('\n');
combinedJs += colorsContent + '\n\n';

// Leer phases.js y extraer solo las definiciones
const phasesFile = fs.readFileSync('src/app/phases.js', 'utf-8');
const phasesContent = phasesFile
  .split('\n')
  .filter(line => !line.startsWith('//') && line.trim() !== '')
  .join('\n');
combinedJs += phasesContent + '\n\n';

// Por ahora, mientras migramos helpers desde index.html:
// Leeremos index.html y extraeremos los helpers
const currentIndex = fs.readFileSync('index.html', 'utf-8');
const scriptContent = currentIndex.match(/<script type="text\/babel">([\s\S]*?)<\/script>/)[1];

// Extraer solo los helpers (Step, InfoBox, etc)
const helpersMatch = scriptContent.match(/const Step = \([\s\S]*?\);[\s\n]*const ErrorCard[\s\S]*?const InfoBox = \({[\s\S]*?\}\);/);
if (helpersMatch) {
  combinedJs += helpersMatch[0] + '\n\n';
}

// Extraer GlossaryLink component
const glossaryLinkMatch = scriptContent.match(/const GlossaryLink = \({[\s\S]*?\}\);/);
if (glossaryLinkMatch) {
  combinedJs += glossaryLinkMatch[0] + '\n\n';
}

// Extraer todos los componentes (funciones que empiezan con mayúsculas)
// Patrón: function NOMBRE() { ... }
const functionMatches = scriptContent.matchAll(/function ([A-Z_]+)\(\) {[\s\S]*?^  \);?$/gm);
for (const match of functionMatches) {
  const funcName = match[1];
  const fullMatch = match[0];
  combinedJs += fullMatch + '\n\n';
}

// Extraer GuiaCultivo component
const guiaCultivoMatch = scriptContent.match(/function GuiaCultivo\(\)[\s\S]*?^  \};?$/m);
if (guiaCultivoMatch) {
  combinedJs += guiaCultivoMatch[0] + '\n\n';
}

// Extraer ReactDOM
const reactDomMatch = scriptContent.match(/const root = ReactDOM[\s\S]*?root\.render/);
if (reactDomMatch) {
  combinedJs += reactDomMatch[0];
}

// Reemplazar en template
const finalHtml = htmlTemplate.replace('{/*INSERT_CONTENT_HERE*/}', combinedJs);

// Escribir index.html
fs.writeFileSync('index.html', finalHtml, 'utf-8');
console.log('✓ index.html generado');
