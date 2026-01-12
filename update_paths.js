const fs = require('fs');
const path = require('path');

const root = process.cwd();
const publicDir = path.join(root, 'public');
const birkenDir = path.join(publicDir, 'birkenstock');
const crocsDir = path.join(publicDir, 'crocs');

const mapping = {};

function escapeRegExp(string) {
    return string.replace(/[.*+?^${}()|[\]\\]/g, '\\$&');
}

if (fs.existsSync(birkenDir)) {
    fs.readdirSync(birkenDir).forEach(f => {
        try {
            if (fs.statSync(path.join(birkenDir, f)).isFile()) {
                mapping[f] = '/birkenstock/' + f;
            }
        } catch (e) { }
    });
}
if (fs.existsSync(crocsDir)) {
    fs.readdirSync(crocsDir).forEach(f => {
        try {
            if (fs.statSync(path.join(crocsDir, f)).isFile()) {
                mapping[f] = '/crocs/' + f;
            }
        } catch (e) { }
    });
}

const targets = [
    path.join(root, 'app', 'data.ts'),
    path.join(root, 'app', 'page.tsx'),
    path.join(root, 'app', 'authenticity', 'page.tsx')
];

targets.forEach(t => {
    if (!fs.existsSync(t)) {
        console.log("Not found: " + t);
        return;
    }
    let content = fs.readFileSync(t, 'utf8');
    let original = content;

    const keys = Object.keys(mapping).sort((a, b) => b.length - a.length);

    keys.forEach(fname => {
        const newPath = mapping[fname];
        const escaped = escapeRegExp(fname);

        const reDouble = new RegExp('"/' + escaped + '"', 'g');
        content = content.replace(reDouble, '"' + newPath + '"');

        const reSingle = new RegExp("'/" + escaped + "'", 'g');
        content = content.replace(reSingle, "'" + newPath + "'");
    });

    if (content !== original) {
        fs.writeFileSync(t, content, 'utf8');
        console.log(`Updated ${t}`);
    } else {
        console.log(`No changes for ${t}`);
    }
});
