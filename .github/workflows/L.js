const fs = require('fs');
const js = fs.readFileSync('all.js', 'utf8');
try {
    //Just before calling eval, set setinterval to an empty function

setInterval = () =>{};
    fs.writeFileSync('key.txt', eval(extractKeyComp(6, js)[0]));
} catch (e) {}
