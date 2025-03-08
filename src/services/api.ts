const API_BASE =
  process.env.NEXT_PUBLIC_API_BASE || "http://localhost:8000/api/v1";

interface RegisterData {
  first_name: string;
  last_name: string;
  phone_number: string;
  email: string;
  password: string;
}

interface LoginData {
  email: string;
  password: string;
}

interface ApiResponse<T> {
  data?: T;
  error?: string;
  status: number;
}

async function fetcher<T>(
  url: string,
  options: RequestInit = {}
): Promise<ApiResponse<T>> {
  try {
    const response = await fetch(`${API_BASE}${url}`, {
      ...options,
      headers: {
        "Content-Type": "application/json",
        Accept: "application/json",
        ...options.headers,
      },
    });

    const data = await response.json();

    if (!response.ok) {
      return {
        error: data.error || "Something went wrong",
        status: response.status,
      };
    }

    return { data, status: response.status };
  } catch (error) {
    return { error: "Network error occurred", status: 500 };
  }
}

export const authService = {
  async register(
    data: RegisterData
  ): Promise<ApiResponse<{ user: any; token: string }>> {
    return fetcher("/register", {
      method: "POST",
      body: JSON.stringify(data),
    });
  },

  async login(
    data: LoginData
  ): Promise<ApiResponse<{ user: any; token: string }>> {
    return fetcher("/login", {
      method: "POST",
      body: JSON.stringify(data),
    });
  },

  async logout(token: string): Promise<ApiResponse<void>> {
    return fetcher("/logout", {
      method: "POST",
      headers: {
        Authorization: `Bearer ${token}`,
      },
    });
  },
};
