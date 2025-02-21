import { Text, View, StyleSheet, ScrollView } from "react-native";
import { styles } from "@/global" ;
import { testing_cookies, CookiesImgs } from "@/assets/images/desserts/cookies" ;
import DessertImage from "@/components/DessertImage";
import ImageViewer from "@/components/ImageViewer";



export default function Cookies() {
  
  var dessert_images : Array<any> = [];
  for (var image of CookiesImgs) {
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

