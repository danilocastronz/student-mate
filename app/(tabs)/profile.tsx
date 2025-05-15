import { Text, View } from "react-native";
import { useAuth } from "../context/AuthContext";

export default function Profile() {
  const { user } = useAuth();

  if (!user) {
    return (
      <View>
        <Text>You must sign in to access this page.</Text>
      </View>
    );
  }

  return (
    <View>
      <Text>Welcome, {user}</Text>
    </View>
  );
}
