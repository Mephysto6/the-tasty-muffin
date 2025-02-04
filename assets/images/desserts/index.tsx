export const Cookie0 = require("./cookies/0.png")
export const Muffin0 = require("./muffins/0.png")
// export const DessertPathList = ["cookies", "muffins"]
export const DessertImgList = [Cookie0, Muffin0]

export const DessertTags = {
    "cookies" : ["individual", "transportable"],
    "muffins" : ["individual", "fillings"],

}
const AllTags: string[] = [] ;
export const DessertPathList = Object.keys(DessertTags) ;
console.log("\n\n -- DessertTestList :" + DessertPathList)
for (let i = 0 ; i < DessertPathList.length ; i++) {
    console.log("\n\n -- i :" + i)
    console.log("\n\n -- DessertTestList[i] : " + DessertPathList[i])
    // console.log("\n\n -- DessertTags[cookies] :" + DessertTags["cookies"])
    const one_dessert : string = DessertPathList[i];
    console.log("\n\n -- DessertTags[one_dessert] :" + DessertTags[one_dessert])
    console.log("\n\n -- DessertTags[DessertPathList[i]] :" + DessertTags[DessertPathList[i]])
    const one_dessert_tag_list = DessertTags[DessertPathList[i]]
    for (let j=0 ; j < one_dessert_tag_list.length ; j++) {
        if (AllTags.indexOf(one_dessert_tag_list[j]) < 0 ) {
            // if tag not present, then add it
            AllTags.push(one_dessert_tag_list[j])
        }
    }
}

export {AllTags} ;
// ----------------------

// IMPORT ALL V1
// function importAll(r) {
//     let images = {};
//     r.keys().map((item, index) => { images[item.replace('./', '')] = r(item); });
//     return images;
//   }
  
//   const images = importAll(require.context('./', false, /\.(png|jpe?g|svg)$/));
//   <img src={images['doggy.png']} />

// ---------------------

// IMPORT ALL V2
// function importAll(r) {
//     return r.keys().map(r);
//   }
  
//   const images = importAll(require.context('./', false, /\.(png|jpe?g|svg)$/));
