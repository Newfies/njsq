// Easy console.log Alternative; I'm Lazy
function l(msg) {
  console.log(msg);
};

// Coloring Text
const colorRed = "\x1b[31m";
const colorGreen = "\x1b[32m";
const colorBlue = "\x1b[34m";
const colorYellow = "\x1b[33m";
const colorBlack = "\x1b[30m";
const colorMagenta = "\x1b[35m";
const colorCyan = "\x1b[36m";
const colorWhite = "\x1b[37m";
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
