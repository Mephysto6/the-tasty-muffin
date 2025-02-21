import { Text, View, StyleSheet, ScrollView } from "react-native";
import { styles } from "@/global" ;
import { MuffinsImgs } from "@/assets/images/desserts/muffins" ;
import DessertImage from "@/components/DessertImage";
import ImageViewer from "@/components/ImageViewer";

export default function Muffins() {

  var dessert_images : Array<any> = [];
  for (var image of MuffinsImgs) {
    dessert_images.push(
      <ImageViewer imgSource={image} />
    )
  }

  return (
    <ScrollView style={styles.container}>
      <Text style={styles.text}>I love cookies</Text>
      {dessert_images}
    </ScrollView>
  );
}

