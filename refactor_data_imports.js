const fs = require('fs');
const path = require('path');

// Helper to generate import name
function getImportName(idx) {
    return `img_${idx}`;
}

// Map files to their locations
const crocsAssets = fs.readdirSync(path.join(__dirname, 'app/crocs_assets')).map(f => ({ file: f, path: './crocs_assets/' + f }));
const generalAssets = fs.readdirSync(path.join(__dirname, 'app/general_assets')).map(f => ({ file: f, path: './general_assets/' + f }));

// We need to match the exact order of img_0 to img_112 as in the current file
// The current mappings are specific. I will read the current file and extract the paths, then rewrite them as imports.

const dataPath = path.join(__dirname, 'app/data.ts');
const content = fs.readFileSync(dataPath, 'utf8');

// Regex to match "const img_X = { src: "PATH" };"
const regex = /const (img_\d+) = \{ src: "([^"]+)" \};/g;
let match;
const imports = [];
let maxIndex = -1;

while ((match = regex.exec(content)) !== null) {
    const varName = match[1];
    let oldPath = match[2]; // e.g., /crocs_assets/1crocs.jpeg

    // Convert web path to relative import path
    // oldPath starts with /crocs_assets/ or /general_assets/
    // We are in app/data.ts, so paths should be ./crocs_assets/... or ./general_assets/...

    let importPath = oldPath.replace(/^\//, './');

    imports.push(`import ${varName} from "${importPath}";`);
    maxIndex = Math.max(maxIndex, parseInt(varName.split('_')[1]));
}

// Generate the new content
// We need to replace the entire block of const img_X ... with the imports
// BUT wait, img_0 is an object { src: "..." } in the old code.
// The imported image (using next/image or file-loader) is usually an object with .src
// So `import img_0 from "..."` makes img_0 the object.
// The usage in the items array is `img: img_0.src`. 
// If img_0 is the imported module, it has a src property, so `img_0.src` is valid.
// HOWEVER, typically `import img from '...'` gives the object directly.
// So `const img_0 = { src: "/..." }` was simulating the imported object.
// If I replace it with `import img_0 from "..."`, then `img_0` IS the object.
// So `img_0.src` usage below remains valid.

const newImports = imports.join('\n');

// Find start and end of the block
const startMarker = 'const img_0 =';
const endMarker = `const img_${maxIndex} =`;

// We don't have a clean block end, but we know it ends at img_112 line.
// I will blindly replace the lines 1 to 113 based on line numbers from previous tool view?
// Actually I can just replace the whole top section using the regex matches range.

let newContent = content;
// We will use replace with a massive block? No, risky if order changes.
// Better to just reconstruct the top part.

// Find where "export interface ProductItem" starts
const interfaceStart = content.indexOf('export interface ProductItem');
const beforeInterface = content.substring(0, interfaceStart);
const afterInterface = content.substring(interfaceStart);

// Replacer
const replacedTop = newImports + '\n\n';

fs.writeFileSync(dataPath, replacedTop + afterInterface);
console.log('Updated app/data.ts');
