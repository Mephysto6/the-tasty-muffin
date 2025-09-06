import { Base, Variations } from './ingredients.json';
const MuffinsFiles = require.context('./', false, /\.(png|jpe?g|svg)$/);
export var Images : Array<any> = [] ;
export var Title = "Muffins";
export var Ingredients = {"Base": Base, "Variations": Variations};
MuffinsFiles.keys().forEach((key) => {
    const module = MuffinsFiles(key);
    console.log("\n\n -- module : " + module) ;
    Images.push(module);
})

