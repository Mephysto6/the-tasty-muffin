
const MuffinsFiles = require.context('./', false, /\.(png|jpe?g|svg)$/);
export var MuffinsImgs : Array<any> = [] ;
export var testing_muffins = "";
MuffinsFiles.keys().forEach((key) => {
    const module = MuffinsFiles(key);
    console.log("\n\n -- module : " + module) ;
    MuffinsImgs.push(module);
    testing_muffins += " - " + module ;
})

