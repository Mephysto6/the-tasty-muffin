import { Text, View, StyleSheet, ScrollView } from "react-native";
import { styles } from "@/global" ;
import { Images, Ingredients, Title } from "@/assets/images/desserts/muffins" ;
import DessertImage from "@/components/DessertImage";
import ImageViewer from "@/components/ImageViewer";
import { ReturnFunction } from "@/app/(desserts)/_layout"

export default function Muffins() {
  return ReturnFunction(Title, Ingredients, Images);
}

