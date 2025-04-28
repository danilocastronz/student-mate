// app/(tabs)/index.tsx
import { Link } from "expo-router";
import { View, Text, StyleSheet } from "react-native";

export default function HomeScreen() {
  return (
    <View style={styles.container}>
      <Text style={styles.title}>Welcome to Student Mate 🎓</Text>

      <Link href="/classes" style={styles.link}>
        View Your Classes
      </Link>
      <Link href="/assignments" style={styles.link}>
        View Assignments
      </Link>
      <Link href="/profile" style={styles.link}>
        Go to Profile
      </Link>
    </View>
  );
}

const styles = StyleSheet.create({
  container: { flex: 1, justifyContent: "center", alignItems: "center" },
  title: { fontSize: 24, marginBottom: 20, color: "grey" },
  link: { marginTop: 10, color: "blue" },
});
