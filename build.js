#!/usr/bin/env node

const fs = require('fs');

// Read HTML template
const htmlTemplate = fs.readFileSync('html-template.html', 'utf-8');

// List of source files to concatenate in order
const sourceFiles = [
  'src/app/colors.js',
  'src/app/phases.js',
  'src/helpers/components.js',
  'src/components/cannabis/interior.js',
  'src/components/cannabis/exterior.js',
  'src/components/cannabis/general.js',
  'src/components/mushroom/kit.js',
  'src/components/mushroom/friendly.js',
  'src/components/mushroom/advanced.js',
  'src/components/mushroom/general.js',
  'src/components/cactus/general.js',
  'src/components/fermentation/general.js',
  'src/components/fermentation/hidromiel.js',
  'src/components/fermentation/cerveza.js',
  'src/components/plantas/general.js',
  'src/components/amanita/general.js',
  'src/components/ayahuasca/general.js',
  'src/components/dmt/general.js',
  'src/app/gui-cultivo.js',
];

// Start with React destructuring
let combinedJs = '    const { useState } = React;\n\n';

// Read and concatenate each source file
for (const file of sourceFiles) {
  try {
    const content = fs.readFileSync(file, 'utf-8');
    combinedJs += content + '\n\n';
  } catch (err) {
    console.error(`⚠️  Could not read ${file}: ${err.message}`);
  }
}

// Add React render code
combinedJs += `    const root = ReactDOM.createRoot(document.getElementById('root'));
    root.render(<GuiaCultivo />);`;

// Replace placeholder in template
const finalHtml = htmlTemplate.replace('{/*INSERT_CONTENT_HERE*/}', combinedJs);

// Write final index.html
fs.writeFileSync('index.html', finalHtml, 'utf-8');
console.log('✓ index.html generated successfully');
console.log(`  Files concatenated: ${sourceFiles.length}`);
console.log(`  Total lines: ${combinedJs.split('\n').length}`);
