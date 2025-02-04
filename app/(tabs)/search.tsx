import { Text, View, StyleSheet, ScrollView } from "react-native";
import { Link } from "expo-router";
import { styles } from "@/global" ;
import { DessertPathList, DessertImgList, AllTags } from "@/assets/images/desserts/index"
import DessertButton from "@/components/DessertButton"

export default function Search() {

  const dessert_list = [] ;
  for (let i=0 ; i < DessertPathList.length ; i++) {
    dessert_list.push(
      <DessertButton name={DessertPathList[i]}/>
    )
  }

  return (
    <ScrollView style={styles.container}>
      <Text style={styles.text}>
        Search for a dessert by tag
      </Text>
      <Text style={styles.title}>
        Tags :<br/>
      </Text>
      {AllTags}
      <br/>

      <Text style={styles.title}>
      Results :<br/>
      </Text>
      {dessert_list}
      <br/>

    </ScrollView>
  );
}
