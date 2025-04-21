// app/about.tsx
import { View, Text } from "react-native";
import { useSafeAreaInsets } from "react-native-safe-area-context";

export default function AboutScreen() {
  const insets = useSafeAreaInsets();

  return (
    <View style={{ marginTop: insets.top }}>
      <Text style={{ color: "pink" }}>About Us 🌟</Text>
    </View>
  );
}
