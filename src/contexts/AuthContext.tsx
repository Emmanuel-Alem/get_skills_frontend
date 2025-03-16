// /contexts/AuthContext.tsx
import { createContext, useContext, useState, useEffect, ReactNode } from 'react';
import { login as loginService, logout as logoutService, fetchUser } from '../services/authService';

// Define a type for the User based on your backend response.
interface User {
  id: number;
  name: string;
  email: string;
}

// Define the shape of the authentication context.
interface AuthContextProps {
  user: User | null;
  login: (email: string, password: string) => Promise<void>;
  logout: () => Promise<void>;
  loading: boolean;
}

// Create a React Context with default values.
const AuthContext = createContext<AuthContextProps>({
  user: null,
  login: async () => {},
  logout: async () => {},
  loading: true,
});

/**
 * AuthProvider component that wraps your application and provides authentication state.
 *
 * @param children - The React components that will have access to the auth state.
 */
export const AuthProvider = ({ children }: { children: ReactNode }) => {
  const [user, setUser] = useState<User | null>(null);
  const [loading, setLoading] = useState(true);

  // Initialize user authentication state when the component mounts.
  useEffect(() => {
    const initializeUser = async () => {
      try {
        // Fetch the authenticated user's details.
        const userData = await fetchUser();
        setUser(userData);
      } catch (error) {
        setUser(null);
      } finally {
        setLoading(false);
      }
    };

    initializeUser();
  }, []);

  /**
   * Handles user login.
   *
   * @param email - The user's email address.
   * @param password - The user's password.
   */
  const login = async (email: string, password: string) => {
    // Call the login service with provided credentials.
    await loginService({ email, password });
    // After login, fetch and update the authenticated user's data.
    const userData = await fetchUser();
    setUser(userData);
  };

  /**
   * Handles user logout.
   */
  const logout = async () => {
    await logoutService();
    setUser(null);
  };

  return (
    <AuthContext.Provider value={{ user, login, logout, loading }}>
      {children}
    </AuthContext.Provider>
  );
};

/**
 * Custom hook to access the authentication context.
 *
 * @returns The authentication context value.
 */
export const useAuth = () => useContext(AuthContext);
