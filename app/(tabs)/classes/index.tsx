// app/(tabs)/classes.tsx
import { StyleSheet, Text, View } from "react-native";
import { useTheme } from "react-native-paper";

export default function ClassesScreen() {
  const { colors } = useTheme();

  return (
    <View style={(styles.container, { backgroundColor: colors.background })}>
      <Text style={(styles.title, { color: colors.primary })}>
        Your Class Schedule 📚
      </Text>
    </View>
  );
}

const styles = StyleSheet.create({
  container: { flex: 1, justifyContent: "center", alignItems: "center" },
  title: { fontSize: 24, color: "grey" },
});
