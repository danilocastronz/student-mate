import { router } from "expo-router";
import { Button, StyleSheet, Text, View } from "react-native";
import { useAuth } from "../context/AuthContext";

export default function Login() {
  const { signIn } = useAuth();

  return (
    <View style={styles.container}>
      <Text style={styles.title}>🔒 Login to Student Mate</Text>
      <Button
        title="Go to Home"
        onPress={() => {
          signIn("test_user");
          router.push("/home");
        }}
      />
      <Button
        title="Go to Register"
        onPress={() => {
          router.push("/register");
        }}
      />
    </View>
  );
}

const styles = StyleSheet.create({
  container: { flex: 1, justifyContent: "center", alignItems: "center" },
  title: { fontSize: 24, marginBottom: 20 },
});
