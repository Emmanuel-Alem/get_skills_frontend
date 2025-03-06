const API_BASE = process.env.NEXT_PUBLIC_API_BASE || 'http://localhost:8000/api/v1';

interface registerData {
    first_name: string;
    last_name: string;
    phone_number: string;
    email: string;
    password: string;  
}

interface loginData {
    email: string;
    password: string;
}

interface ApiRespose <T> {
    data?: T;
    error?: string;
    status: number

}

async function fetcher<T>(url: string, options: RequestInit = {}): Promise<ApiRespose<T>> {
  try {
    const response = await fetch(`${API_BASE}${url}`, {
        ...options,
        headers: {
            'Content-Type': 'application/json',
            'Accept': 'application/json',
            ...options.headers,
        },
    });

    const data = await response.json();

    if (!response.ok) {
        return { error: data.error || 'Something went wrong', status: response.status};
    }

    return { data, status: response.status};
  } catch (error){
    return { error: 'Network error occurred', status: 500};
  }
}


