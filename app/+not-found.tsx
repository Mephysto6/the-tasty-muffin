import { View, StyleSheet } from "react-native";
import { Link, Stack } from "expo-router";
import React from "react";
import { styles } from "@/global";

export default function NotFoundScreen() {
  return (
    <>
      <Stack.Screen options={{ title: "Oops! Not Found" }} />
      <View style={styles.container}>
        <Link href="/" style={styles.buttonS}>
          Go back to Home screen!
        </Link>
      </View>
    </>
  );
}
