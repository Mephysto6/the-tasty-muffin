import { Base, Variations } from './ingredients.json';
const MuffinsFiles = require.context('./', false, /\.(png|jpe?g|svg)$/);
export var MuffinsImgs : Array<any> = [] ;
export var testing_muffins = "";
export var ingredients_muffins = {"Base": Base, "Variations": Variations};
MuffinsFiles.keys().forEach((key) => {
    const module = MuffinsFiles(key);
    console.log("\n\n -- module : " + module) ;
    MuffinsImgs.push(module);
    testing_muffins += " - " + module ;
})

