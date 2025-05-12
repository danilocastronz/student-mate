// app/(modals)/add-assignment.tsx
import { router } from "expo-router";
import { Button, StyleSheet, Text, TextInput, View } from "react-native";

/**
 * AddAssignmentModal:
 * - Overlay screen for adding a new assignment.
 * - Part of the navigation flow (not just a UI popup).
 */
export default function AddAssignmentModal() {
  return (
    <View style={styles.modal}>
      <Text style={styles.title}>➕ Add New Assignment</Text>
      <TextInput placeholder="Title" style={styles.input} />
      <TextInput placeholder="Due Date" style={styles.input} />
      <Button
        title="Save & Close"
        onPress={() => router.back()} // Closes the modal
      />
    </View>
  );
}

const styles = StyleSheet.create({
  modal: {
    flex: 1,
    justifyContent: "center",
    backgroundColor: "rgba(0,0,0,0.5)", // Semi-transparent backdrop
    padding: 20,
  },
  title: { fontSize: 24, color: "#fff", marginBottom: 20 },
  input: {
    backgroundColor: "#fff",
    padding: 10,
    marginBottom: 15,
    borderRadius: 6,
  },
});
