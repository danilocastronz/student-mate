import { createContext, ReactNode, useContext, useState } from "react";

// This defines the shape of our context
interface AuthContextType {
  user: string | null;
  signIn: (username: string) => void;
  signOut: () => void;
}

// We create a Context with this type (initially undefined)
const AuthContext = createContext<AuthContextType | undefined>(undefined);

// The AuthProvider makes user data available throughout the app
export const AuthProvider = ({ children }: { children: ReactNode }) => {
  const [user, setUser] = useState<string | null>(null);

  const signIn = (username: string) => setUser(username); // sets the logged-in user
  const signOut = () => setUser(null); // clears the user state

  return (
    <AuthContext.Provider value={{ user, signIn, signOut }}>
      {children}
    </AuthContext.Provider>
  );
};

// This hook gives components access to the context
export const useAuth = () => {
  const context = useContext(AuthContext);
  if (!context) throw new Error("useAuth must be used within AuthProvider");
  return context;
};
