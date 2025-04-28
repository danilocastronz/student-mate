// app/(tabs)/assignments.tsx
import { View, Text, StyleSheet, Pressable } from "react-native";
import { router } from "expo-router";

const assignments = [
  { id: "1", title: "Math Homework" },
  { id: "2", title: "Science Project" },
  { id: "3", title: "History Essay" },
];

export default function AssignmentsScreen() {
  return (
    <View style={styles.container}>
      <Text style={styles.title}>Upcoming Assignments 📑</Text>

      {assignments.map((assignment) => (
        <Pressable
          key={assignment.id}
          style={styles.item}
          onPress={() => router.push(`/assignments/${assignment.id}`)}
        >
          <Text style={styles.itemText}>{assignment.title}</Text>
        </Pressable>
      ))}
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    justifyContent: "center",
    alignItems: "center",
    padding: 20,
  },
  title: { fontSize: 24, marginBottom: 20, color: "grey" },
  item: {
    marginVertical: 10,
    padding: 10,
    backgroundColor: "grey",
    width: "100%",
    borderRadius: 8,
  },
  itemText: { fontSize: 18, color: "blue" },
});
