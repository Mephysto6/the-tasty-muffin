// export each image
// TODO replace with import the list from each folder
//  + in each folder, import all images (with import all functions below)
export const Cookie0 = require("./cookies/0.png")
export const Muffin0 = require("./muffins/0.png")

// DessertImgList holds each representative (0.png of each folder)
export const DessertImgList = [Cookie0, Muffin0]
// the association of each dessert with tags
export var DessertTags = new Map<string, string[]>();
DessertTags.set("cookies", ["individual", "transportable"]) ;
DessertTags.set("muffins", ["individual", "fillings"]) ;

export const DessertPathList = Array.from( DessertTags.keys() ) ;
// DessertPathList will look like ["cookies", "muffins"]

const AllTags: string[] = [] ;
// console.log("\n\n -- DessertTestList :" + DessertPathList)
for (let i = 0 ; i < DessertPathList.length ; i++) {
    const one_dessert : string = DessertPathList[i];
    const one_dessert_tag_list = DessertTags.get(one_dessert);
    // console.log("\n\n -- i :" + i)
    // console.log("\n\n -- DessertTestList[i] : " + DessertPathList[i] + "\n should be the dessert")
    // console.log("\n\n -- DessertTags[cookies] :" + DessertTags["cookies"] + "\n should be individual, transportable")
    // console.log("\n\n -- DessertTags[one_dessert] :" + DessertTags[one_dessert] + "\n should be tags of that dessert")
    // console.log("\n\n -- DessertTags[DessertPathList[i]] :" + DessertTags[DessertPathList[i]] + "\n should be the same as just above")
    // console.log("\n\n -- one_dessert_tag_list :" + one_dessert_tag_list + "\n should be the same as just above")
    if (one_dessert_tag_list) {
       for (let j=0 ; j < one_dessert_tag_list.length ; j++) {
            if (AllTags.indexOf(one_dessert_tag_list[j]) < 0 ) {
                // if tag not present, then add it
                AllTags.push(one_dessert_tag_list[j])
            }
        } 
    }
    
}
export {AllTags} ;
// AllTags will look like ["individual", "transportable", "fillings"]


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
