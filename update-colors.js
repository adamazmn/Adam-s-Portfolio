const fs = require('fs');
const path = require('path');

const cssPath = path.join(__dirname, 'src', 'app', 'app.css');
let cssContent = fs.readFileSync(cssPath, 'utf8');

cssContent = cssContent.replace(/168,\s*85,\s*247/g, 'var(--accent-rgb)');
cssContent = cssContent.replace(/124,\s*58,\s*237/g, 'var(--accent-rgb-dark)');

fs.writeFileSync(cssPath, cssContent, 'utf8');

const tsPath = path.join(__dirname, 'src', 'app', 'app.ts');
let tsContent = fs.readFileSync(tsPath, 'utf8');

tsContent = tsContent.replace(/#a855f7/g, 'var(--accent-2)');

// Also for any hardcoded purple hex values in the project data if any
// But actually Angular binds [style.color]="project.color" which expects hash codes!
// Wait, if it expects hash codes, `--accent-2` won't work perfectly unless `var(--accent-2)` is valid.
// Angular style binding: `[style.color]="'var(--accent-2)'"`
// Let's replace the hardcoded '#a855f7' inside `app.ts` with `'var(--accent-2)'`?
// No, the object is: `color: '#a855f7'` -> `color: 'var(--accent-2)'`.

fs.writeFileSync(tsPath, tsContent, 'utf8');

console.log('Replaced colors successfully!');
