
const CookiesFiles = require.context('./', false, /\.(png|jpe?g|svg)$/);
export var CookiesImgs : Array<any> = [] ;
export var testing_cookies = "";
CookiesFiles.keys().forEach((key) => {
    const module = CookiesFiles(key);
    console.log("\n\n -- module : " + module) ;
    CookiesImgs.push(module);
    testing_cookies += " - " + module ;
})

