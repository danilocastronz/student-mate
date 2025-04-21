import React, { useEffect, useState } from "react";
import {
  View,
  Text,
  TextInput,
  TouchableOpacity,
  StyleSheet,
  useColorScheme,
  Alert,
} from "react-native";
import AsyncStorage from "@react-native-async-storage/async-storage";
import * as SecureStore from "expo-secure-store";

export default function App() {
  const [isLoggedIn, setIsLoggedIn] = useState(false);
  const [username, setUsername] = useState("");
  const [password, setPassword] = useState("");
  const colorScheme = useColorScheme();

  const isDark = colorScheme === "dark";
  const theme = isDark ? darkTheme : lightTheme;

  useEffect(() => {
    const checkLoginStatus = async () => {
      const user = await AsyncStorage.getItem("user");
      if (user) {
        const savedPassword = await SecureStore.getItemAsync("password");

        if (savedPassword) {
          setUsername(user);
          setPassword(savedPassword);
          setIsLoggedIn(true);
        }
      }
    };
    checkLoginStatus();
  }, []);

  const handleLogin = async () => {
    if (username && password) {
      await AsyncStorage.setItem("user", username);

      await SecureStore.setItemAsync("password", password);

      setIsLoggedIn(true);
    } else {
      Alert.alert("Username and Password required!");
    }
  };

  const handleLogout = async () => {
    await AsyncStorage.removeItem("user");

    await SecureStore.deleteItemAsync("password");

    setIsLoggedIn(false);
    setUsername("");
    setPassword("");
  };

  return (
    <View style={[styles.container, { backgroundColor: theme.background }]}>
      <Text style={[styles.title, { color: theme.text }]}>Student Mate</Text>
      {isLoggedIn ? (
        <View style={styles.innerContainer}>
          <Text style={[styles.welcomeText, { color: theme.text }]}>
            Welcome, {username}!
          </Text>
          <TouchableOpacity
            style={[styles.button, { backgroundColor: theme.primary }]}
            onPress={handleLogout}
          >
            <Text style={styles.buttonText}>Logout</Text>
          </TouchableOpacity>
        </View>
      ) : (
        <View style={styles.innerContainer}>
          <TextInput
            style={[
              styles.input,
              {
                backgroundColor: theme.inputBackground,
                color: theme.text,
                borderColor: theme.border,
              },
            ]}
            placeholder="Username"
            placeholderTextColor={theme.placeholder}
            value={username}
            onChangeText={setUsername}
          />
          <TextInput
            style={[
              styles.input,
              {
                backgroundColor: theme.inputBackground,
                color: theme.text,
                borderColor: theme.border,
              },
            ]}
            placeholder="Password"
            placeholderTextColor={theme.placeholder}
            value={password}
            onChangeText={setPassword}
            secureTextEntry
          />
          <TouchableOpacity
            style={[styles.button, { backgroundColor: theme.primary }]}
            onPress={handleLogin}
          >
            <Text style={styles.buttonText}>Login</Text>
          </TouchableOpacity>
        </View>
      )}
    </View>
  );
}

const lightTheme = {
  background: "#FFFFFF",
  text: "#222222",
  primary: "purple",
  inputBackground: "#F2F2F7",
  border: "#D1D1D6",
  placeholder: "#999999",
};

const darkTheme = {
  background: "#121212",
  text: "#FFFFFF",
  primary: "purple",
  inputBackground: "#1E1E1E",
  border: "#3A3A3C",
  placeholder: "#AAAAAA",
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    justifyContent: "center",
    alignItems: "center",
    padding: 24,
  },
  title: {
    fontSize: 28,
    fontWeight: "bold",
    marginBottom: 32,
  },
  innerContainer: {
    alignItems: "center",
    width: "100%",
  },
  welcomeText: {
    fontSize: 22,
    fontWeight: "600",
    marginBottom: 20,
  },
  input: {
    width: "100%",
    padding: 14,
    borderWidth: 1,
    borderRadius: 8,
    marginBottom: 16,
    fontSize: 16,
  },
  button: {
    width: "100%",
    padding: 14,
    borderRadius: 8,
    alignItems: "center",
  },
  buttonText: {
    color: "#FFFFFF",
    fontWeight: "600",
    fontSize: 16,
  },
});
