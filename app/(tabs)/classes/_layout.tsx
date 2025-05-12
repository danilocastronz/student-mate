// app/(tabs)/classes/_layout.tsx
import { Stack } from "expo-router";

/**
 * ClassesLayout sets up a Stack navigator:
 * - index.tsx shows the list of classes.
 * - [classId].tsx shows details for one class.
 */
export default function ClassesLayout() {
  return (
    <Stack
      screenOptions={{
        headerStyle: { backgroundColor: "#f0f0f0" },
        headerTintColor: "#333",
      }}
    >
      {/* Main list of classes */}
      <Stack.Screen name="index" options={{ title: "Your Classes" }} />
      {/* Detail page for a selected class */}
      <Stack.Screen name="[id]" />
    </Stack>
  );
}
