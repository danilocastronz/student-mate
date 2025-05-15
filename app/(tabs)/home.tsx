import { Link } from "expo-router";
import { StyleSheet, Text, View } from "react-native";
import { useTheme } from "react-native-paper";

export default function HomeScreen() {
  const { colors } = useTheme();

  return (
    <View style={(styles.container, { backgroundColor: colors.background })}>
      <Text style={[styles.title, { color: colors.primary }]}>
        Welcome to Student Mate 🎓
      </Text>
      <Text style={[styles.title, { color: colors.secondary }]}>
        Your university companion for managing classes and assignments.
      </Text>
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
  container: {
    flex: 1,
    justifyContent: "center",
    alignItems: "center",
  },
  title: { fontSize: 24, marginBottom: 20 },
  link: { marginTop: 10, color: "blue" },
});
