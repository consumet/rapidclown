const fs = require('fs');
const js = fs.readFileSync('all.js', 'utf8');
try {
    setInterval = () => {};
    fs.writeFileSync('key.txt', eval(extractKeyComp(4, js)[0]));
} catch (e) {}
