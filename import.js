// Your Using NodeJS Quick By Newfies On GitHub!
// const njsQ = require('https://github.com/Newfies/njsq/raw/main/import.js');

// Easy console.log Alternative; I'm Lazy
function l(msg) {
  console.log(msg);
}

// Coloring Text - Console
const colorRed = "\x1b[31m";
const colorGreen = "\x1b[32m";
const colorBlue = "\x1b[34m";
const colorYellow = "\x1b[33m";
const colorBlack = "\x1b[30m:";
const colorMagenta = "\x1b[35m:";
const colorCyan = "\x1b[36m:";
const colorWhite = "\x1b[37m:";
// Coloring Reset - Console
const colorReset = "\x1b[0m";

// Export Modules
module.exports = {
  l,
  colorRed,
  colorGreen,
  colorBlue,
  colorYellow,
  colorBlack,
  colorMagenta,
  colorCyan,
  colorWhite,
  colorReset
};
