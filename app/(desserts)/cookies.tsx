import { Text, View, StyleSheet } from "react-native";

export default function Cookies() {
  return (
    <View style={styles.container}>
      <Text style={styles.text}>I love cookies</Text>
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
});
