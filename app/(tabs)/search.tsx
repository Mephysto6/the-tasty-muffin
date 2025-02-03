import { Text, View, StyleSheet } from "react-native";
import { Link } from "expo-router";

export default function Search() {
    return (
      <View style={styles.container}>
        <Text style={styles.text}>
          Search for a dessert
        </Text>
        <Link href="/cookies" style={styles.button}>
          COOKIES
        </Link>
        <Link href="/muffins" style={styles.button}>
          MUFFINS
        </Link>
      </View>
    );
  }
  
  const styles = StyleSheet.create({
    container: {
      flex: 1,
      backgroundColor: "#25292e",
      justifyContent: "center",
      alignItems: "center",
    },
    text: {
      color: "#49f",
      fontSize: 28,
    },
    button: {
      fontSize: 20,
      textDecorationLine: "underline",
      color: "#fff",
    },
  });
  