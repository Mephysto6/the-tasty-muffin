import { Base, Variations } from './ingredients.json';
const CookiesFiles = require.context('./', false, /\.(png|jpe?g|svg)$/);
export var Images : Array<any> = [] ;
export var Title = "Cookies";
export var Ingredients = {"Base": Base, "Variations": Variations};
CookiesFiles.keys().forEach((key) => {
    const module = CookiesFiles(key);
    console.log("\n\n -- module : " + module) ;
    Images.push(module);
})

