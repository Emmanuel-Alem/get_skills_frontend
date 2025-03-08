"use client"
import { useState } from 'react';
import { authService } from '../services/api';
import { Button } from "@/components/ui/button"

export default function RegisterForm() {
  const [formData, setFormData] = useState({
    first_name: '',
    last_name: '',
    phone_number: '',
    email: '',
    password: '',
  });
  const [error, setError] = useState<string | null>(null);
  const [loading, setLoading] = useState(false);

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    setLoading(true);
    setError(null);

    const response = await authService.register(formData);

    if (response.error) {
      setError(response.error);
      setLoading(false);
      return;
    }

    if (response.data?.token) {
      // Store token in localStorage or context
      localStorage.setItem('authToken', response.data.token);
      // Redirect user or update application state
      window.location.href = '/dashboard';
    }

    setLoading(false);
  };

  const handleChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    setFormData({
      ...formData,
      [e.target.name]: e.target.value,
    });
  };

return (
    <form onSubmit={handleSubmit} className="space-y-6 p-6 bg-white shadow-md rounded-md max-w-md mx-auto">
        <div className="flex flex-col">
            <label className="mb-2 text-sm font-medium text-gray-700">First Name</label>
            <input
                type="text"
                name="first_name"
                value={formData.first_name}
                onChange={handleChange}
                required
                className="p-2 border border-gray-300 rounded-md focus:outline-none focus:ring-2 focus:ring-blue-500"
            />
        </div>
        
        <div className="flex flex-col">
            <label className="mb-2 text-sm font-medium text-gray-700">Last Name</label>
            <input
                type="text"
                name="last_name"
                value={formData.last_name}
                onChange={handleChange}
                required
                className="p-2 border border-gray-300 rounded-md focus:outline-none focus:ring-2 focus:ring-blue-500"
            />
        </div>

        <div className="flex flex-col">
            <label className="mb-2 text-sm font-medium text-gray-700">Phone Number</label>
            <input
                type="text"
                name="phone_number"
                value={formData.phone_number}
                onChange={handleChange}
                required
                className="p-2 border border-gray-300 rounded-md focus:outline-none focus:ring-2 focus:ring-blue-500"
            />
        </div>

        <div className="flex flex-col">
            <label className="mb-2 text-sm font-medium text-gray-700">Email</label>
            <input
                type="email"
                name="email"
                value={formData.email}
                onChange={handleChange}
                required
                className="p-2 border border-gray-300 rounded-md focus:outline-none focus:ring-2 focus:ring-blue-500"
            />
        </div>

        <div className="flex flex-col">
            <label className="mb-2 text-sm font-medium text-gray-700">Password</label>
            <input
                type="password"
                name="password"
                value={formData.password}
                onChange={handleChange}
                required
                className="p-2 border border-gray-300 rounded-md focus:outline-none focus:ring-2 focus:ring-blue-500"
            />
        </div>

        {error && <div className="text-red-500 text-sm">{error}</div>}

        <Button
            type="submit"
            disabled={loading}
            className="w-full"
        >
            {loading ? 'Registering...' : 'Register'}
        </Button>
    </form>
);
}