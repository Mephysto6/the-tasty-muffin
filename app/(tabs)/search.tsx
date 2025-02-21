import { Text, View, StyleSheet, ScrollView } from "react-native";
import { Link } from "expo-router";
import { styles } from "@/global" ;
import { DessertsList, DessertImgList, AllTags } from "@/assets/images/desserts/index"
import DessertButton from "@/components/DessertButton"
import Button from "@/components/Button"

export var tagDict = new Map<string,boolean>() ;

export function SelectTag(tag: string) {
  var currentTagStatus = tagDict.get(tag) || false
  tagDict.set(tag, !currentTagStatus)
}

export default function Search() {

  console.log("\n\n --- DessertPathList received, length : " + DessertsList.length) ;

  var dessert_list = [] ;
  for (var dessert of DessertsList) {
    dessert_list.push(
      <DessertButton name={dessert}/>
    )
  }
  console.log("\n\n --- dessert_list built, length : " + dessert_list.length) ;

  var tag_list = [] ;
  for (var tag of AllTags) {
    tag_list.push(
      <Button label={tag} theme="tag"/>
    )
    tagDict.set(tag, false) ;
  }
  console.log("\n\n --- tag_list built, length : " + tag_list.length) ;

  var test_tagsDict:any[] = [] ;
  tagDict.forEach((value, key) => {
    test_tagsDict.push(
      <Text style={styles.text}>key : {key} value : {String(value)}</Text>
    )
  });

  return (
    <ScrollView style={styles.container}>
      <Text style={styles.text}>Search for a dessert by tag</Text>

      <Text style={styles.title}>Tags :</Text>
      <br/>
      {tag_list}
      <br/>
      <Text style={styles.text}>test_tagsDict :</Text>
      <br/>
      {test_tagsDict}
      <br/>
      <Text style={styles.title}>Results :<br/></Text>
      {dessert_list}
      <br/>

    </ScrollView>
  );
}
