import { Text, View, StyleSheet, ScrollView } from "react-native";
import { Link } from "expo-router";
import { styles } from "@/global" ;
import ImageViewer from "@/components/ImageViewer";
import Button from "@/components/Button";
import React, { useEffect } from "react";
// import { Link as scrollLink, animateScroll as scroll } from "react-scroll";
import { DessertList } from "@/assets/images/desserts/index"

const path = "@/assets/images/react-logo.png" ;
const PlaceholderImage = require(path);

export default function Index() {
  useEffect(() => {
    document.title = "The Tasty Muffin";
  }, []);
  const dessert_list:string[] = ["cookies", "muffins"] ;
  const dessert_images = [] ;
  
  for (let i=0 ; i < DessertList.length ; i++) {
    dessert_images.push(
      <View style={styles.imageContainer}>
        <ImageViewer imgSource={DessertList[i]} />
      </View>
    )
  }

  return (
    <ScrollView style={styles.container}>

      <Text style={styles.title}>
        The Tasty Muffin
      </Text>
      <Text style={styles.text}>
        This website serves as a portfolio of my desserts. Feel free to browse.<br/>
        /!\ very much still under construction /!\
        {/* , and when you feel like it, add some to your cart and order ! */}
      </Text>

      {dessert_images}
      
    

      {/* <View style={styles.footerContainer}>
        <Button theme="primary" label="Choose a photo" />
        <Button label="Use this photo" />
      </View> */}
    </ScrollView>
  );
}
