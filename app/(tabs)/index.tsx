import { Text, View, StyleSheet } from "react-native";
import { Link } from "expo-router";
import { styles } from "../../global" ;

export default function Index() {
  return (
    <View style={styles.container}>
      <Text style={styles.text}>
        The Tasty Muffin
      </Text>
      <Link href="/search" style={styles.button}>
        Go to search for a dessert !
      </Link>
    </View>
  );
}
