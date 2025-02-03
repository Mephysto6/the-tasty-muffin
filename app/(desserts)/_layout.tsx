import { Stack } from "expo-router";

export default function RootLayout() {
  return (
    <Stack>
      <Stack.Screen name="cookies" options={{ title: "Cookies" }} />
      <Stack.Screen name="muffins" options={{ title: "Muffins" }} />
    </Stack>
  );
}
