// app/(tabs)/classes.tsx
import { View, Text, StyleSheet } from "react-native";

export default function ClassesScreen() {
  return (
    <View style={styles.container}>
      <Text style={styles.title}>Your Class Schedule 📚</Text>
    </View>
  );
}

const styles = StyleSheet.create({
  container: { flex: 1, justifyContent: "center", alignItems: "center" },
  title: { fontSize: 24, color: "grey" },
});
