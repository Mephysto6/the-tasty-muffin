import { Text, View, StyleSheet, ScrollView, Pressable } from "react-native";
import { Link } from "expo-router";
import { styles } from "@/global" ;
import ImageViewer from "@/components/ImageViewer";
import Button from "@/components/Button";
import React, { useEffect } from "react";
// import { Link as scrollLink, animateScroll as scroll } from "react-scroll";
import { DessertPathList, DessertImgList } from "@/assets/images/desserts/index"
import DessertImage from "@/components/DessertImage"

// const path = "@/assets/images/react-logo.png" ;
// const PlaceholderImage = require(path);

export default function Index() {
  useEffect(() => {
    document.title = "The Tasty Muffin";
  }, []);

  const dessert_images = [] ;
  for (let i=0 ; i < DessertPathList.length ; i++) {
    dessert_images.push(
      <DessertImage name={DessertPathList[i]} image={DessertImgList[i]} />
    )
  }

  return (
    <ScrollView style={styles.container}>

      <Text style={styles.title}>
        The Tasty Muffin
      </Text>
      <Text style={styles.text}>
        This website serves as a portfolio of my desserts. Feel free to browse.<br/>
        {/* , and when you feel like it, add some to your cart and order ! */}
        /!\ very much still under construction /!\
      </Text>

      {dessert_images}
      
    

      {/* <View style={styles.footerContainer}>
        <Button theme="primary" label="Choose a photo" />
        <Button label="Use this photo" />
      </View> */}
    </ScrollView>
  );
}
