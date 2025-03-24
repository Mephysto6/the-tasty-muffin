import { Stack } from "expo-router";
import { Text, View, StyleSheet, ScrollView } from "react-native";
import { styles } from "@/global" ;

export default function RootLayout() {
  return (
    <Stack>
      <Stack.Screen name="cookies" options={{ title: "Cookies" }} />
      <Stack.Screen name="muffins" options={{ title: "Muffins" }} />
    </Stack>
  );
}

export function Show_Ingredients(ingredients: {Base: string[]; Variations: string[];}) {
  var ingredient_list : string = "";
  ingredient_list += "Ingredients de base : \n";
  for (var base_ingr of ingredients.Base) {
    ingredient_list += base_ingr + "\n";
  }
  ingredient_list += "\nIngredients optionnels : \n";
  for (var base_ingr of ingredients.Variations) {
    ingredient_list += base_ingr + "\n";
  }
  return ingredient_list
}

export function ReturnFunction(
  title: string, ingredients: {Base: string[]; Variations: string[];}, img_list: Array<any>
) {
  return (
    <View style={styles.container}>
  
        {/* Title */}
        <Text style={styles.page_title}>{title}</Text>
  
        {/* flex horizontal 2 : images | ingredients */}
        <View style={styles.dessertContainer} >
          {/* */}
  
          {/* images on the left */}
          <View style={styles.container}>
            <ScrollView>
              <View style={styles.dessertImageList}>
                {img_list}
              </View>
            </ScrollView>
          </View>

          {/* ingredients on the right */}
          <View>
            <ScrollView>
              <Text style={[styles.dessertIngredients, styles.text]}>
                {Show_Ingredients(ingredients)}
              </Text>
            </ScrollView>
          </View>
  
        </View>
        
      </View>
    )
}