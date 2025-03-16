"use client";
import {
  createContext,
  useContext,
  useState,
  useEffect,
  ReactNode,
} from "react";
import {
  login as loginService,
  register as registerService,
  logout as logoutService,
  fetchUser,
} from "../services/authService";

// Define a type for the User based on your backend response.
interface User {
  id: number;
  name: string;
  email: string;
}

// Define the shape of the authentication context.
interface AuthContextProps {
  user: User | null;
  token: string | null;
  login: (email: string, password: string) => Promise<void>;
  register: (data: {
    first_name: string;
    last_name: string;
    phone_number: string;
    email: string;
    password: string;
  }) => Promise<void>;
  logout: () => Promise<void>;
  loading: boolean;
}

// Create a React Context with default values.
const AuthContext = createContext<AuthContextProps>({
  user: null,
  token: null,
  login: async () => {},
  register: async () => {},
  logout: async () => {},
  loading: true,
});

/**
 * AuthProvider wraps the application and provides auth state.
 *
 * @param children - The React components that will have access to the auth state.
 */
export const AuthProvider = ({ children }: { children: ReactNode }) => {
  const [user, setUser] = useState<User | null>(null);
  const [token, setToken] = useState<string | null>(null);
  const [loading, setLoading] = useState(true);

  // on mount, check if the user is already authenticated
  useEffect(() => {
    const savedToken = localStorage.getItem("token");
    if (savedToken) {
      setToken(savedToken);

      fetchUser()
        .then((userData) => setUser(userData))
        .catch(() => {
          localStorage.removeItem("authToken");
          setToken(null);
        })
        .finally(() => setLoading(false));
    } else {
      setLoading(false);
    }
  }, []);

  /**
   *  user login.
   *
   * @param email - The user's email address.
   * @param password - The user's password.
   */

  const login = async (email: string, password: string) => {
    const data = await loginService({ email, password });
    // save token in localstorage [todo: use cookies]
    localStorage.setItem("authToken", data.token);
    setToken(data.token);
    setUser(data.user);
  };

  /**
   * Registers a new user.
   *
   * @param data - User registration data.
   */
  const register = async (data: {
    first_name: string;
    last_name: string;
    phone_number: string;
    email: string;
    password: string;
  }) => {
    const response = await registerService(data);
    localStorage.setItem("authToken", response.token);
    setToken(response.token);
    setUser(response.user);
  };

  /**
   * Logs out the user
   */
  const logout = async () => {
    if (token) {
      await logoutService(token);
      localStorage.removeItem("authToken");
      setToken(null);
      setUser(null);
    }
  };

  return (
    <AuthContext.Provider value={{ user, token, login, register, logout, loading }}>
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
