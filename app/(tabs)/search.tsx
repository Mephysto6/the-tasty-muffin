import { Text, View, StyleSheet } from "react-native";
import { Link } from "expo-router";
import { styles } from "@/global" ;

export default function Search() {
    return (
      <View style={styles.container}>
        <Text style={styles.text}>
          Search for a dessert
        </Text>
        <Link href="/cookies" style={styles.buttonS}>
          COOKIES
        </Link>
        <Link href="/muffins" style={styles.buttonS}>
          MUFFINS
        </Link>
      </View>
    );
  }
  