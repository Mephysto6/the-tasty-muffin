import { Text, View, StyleSheet, ScrollView } from "react-native";
import { styles } from "@/global" ;
import { Images, Ingredients, Title } from "@/assets/images/desserts/cookies" ;
import DessertImage from "@/components/DessertImage";
import ImageViewer from "@/components/ImageViewer";
import { ReturnFunction } from "@/app/(desserts)/_layout"

function UnpackArray(packedList: Array<any>) {

  return
}

export default function Cookies() {
  
  // dessert_images is an Array of all the images
  var dessert_images : Array<any> = [];
  for (var image of Images) {
    dessert_images.push(
      <ImageViewer imgSource={image} />
    )
  }

  // dessert_images2 is a map result of all the images
  const dessert_images2 = Images.map(image =>
    <div><ImageViewer imgSource={image} /></div>
  )

  return ReturnFunction(Title, Ingredients, dessert_images2);
}

