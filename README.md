# 📚 Student Mate

⚠️ Student Mate is a fictitious app and does not reflect or is based on any real world app. ⚠️

**Student Mate** is a fictitious mobile app designed for university students to manage their academic life efficiently. Built with **React Native**, **Expo**, and **TypeScript**, it offers features like class schedules, assignment tracking, and profile management. The idea is just to use a real use case, such as an university app, to illustrate mobile development concepts.

---

## 🚀 Features

- **Tab Navigation**: Seamless navigation between Home, Classes, Assignments, and Profile screens using Expo Router.
- **Dynamic Routing**: View detailed pages for individual assignments and classes.
- **Modal Screens**: Add new assignments through modal overlays.
- **Authentication Flow**: Secure login and logout functionality.
- **Data Persistence**: Store user data and preferences using `AsyncStorage` and `SecureStore`.
- **Theming**: Toggle between light and dark themes based on user preference.

---

## 🛠️ Installation

1. **Clone the Repository**:

   ```bash
   git clone https://github.com/yourusername/student-mate.git
   cd student-mate
   ```

2. **Install Dependencies**:

   ```bash
   npm install
   ```

3. **Start the Development Server**:

   ```bash
   npm start
   ```

   Use the Expo Go app on your device or an emulator to view the app.

---

## 📁 Project Structure

```bash
student-mate/
├── app/
│   ├── (tabs)/
│   │   ├── index.tsx          # Home Screen
│   │   ├── classes.tsx        # Classes Screen
│   │   ├── assignments.tsx    # Assignments Screen
│   │   └── profile.tsx        # Profile Screen
│   ├── assignments/
│   │   └── [id].tsx           # Assignment Details (Dynamic Route)
│   ├── classes/
│   │   └── [classId].tsx      # Class Details (Dynamic Route)
│   ├── (modals)/
│   │   └── add-assignment.tsx # Add Assignment Modal
│   └── _layout.tsx            # Root Layout with Providers
├── context/
│   └── AuthContext.tsx        # Authentication Context
├── themes/
│   └── theme.ts               # Light and Dark Theme Definitions
├── assets/
│   └── ...                    # Images and other assets
├── app.json                   # Expo Configuration
└── package.json
```

---

## 🔐 Authentication

Authentication is managed using React Context API. The `AuthContext` provides methods for signing in and out, and the user's authentication state is persisted using `AsyncStorage`.

---

## 💾 Data Persistence

- **AsyncStorage**: Used for storing non-sensitive data like theme preferences.
- **SecureStore**: Utilized for securely storing sensitive information such as authentication tokens.

---

## 🎨 Theming

The app supports both light and dark themes. The current theme is determined based on the user's system preferences and can be toggled within the app. Theming is implemented using React Native's `useColorScheme` hook and custom theme definitions.

---

## 🧪 Testing

To test the app:

1. Start the development server:

   ```bash
   npm start
   ```

2. Use the Expo Go app to scan the QR code and launch the app on your device.

3. Navigate through the app to test various features like navigation, authentication, and theming.

---

## 📄 License

This project is licensed under the MIT License.
