import axios from "axios";
import { useState } from "react";
import {toast} from "react-toastify";

export default function Login() {
  // State for email and password
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");

  const handleSubmit = async (e) => {
    e.preventDefault();
    try {
      const response = await axios.post("http://localhost:8000/api/auth/login", {
        email,
        password,
      });
      const token = response.data.token;
      if(token){
        toast.success("Sucessfully Loggedin!!")
        localStorage.setItem("token",token);
          }else{
            toast.error("Something went wrong");
          }
        console.log(response)
      // You might want to save token to localStorage or navigate to another page
    } catch (error) {
      console.error("Login failed:", error.response?.data?.message || error.message);
    }
  };

  return (
    <div className="min-h-screen bg-gray-100 flex items-center justify-center">
      <div className="w-full max-w-sm bg-white rounded-md shadow-md p-8">
        <div className="text-center text-xl font-medium text-gray-800 mb-6">👤</div>

        <div className="text-center text-xl font-medium text-gray-800 mb-6">HRMS Login</div>

        <form onSubmit={handleSubmit}>
          <div className="mb-4">
            <label className="block text-sm text-gray-700 mb-1">Email</label>
            <input
              type="email"
              placeholder="admin@example.com"
              value={email}
              onChange={(e) => setEmail(e.target.value)}
              className="w-full border border-gray-300 rounded-md px-3 py-2 text-sm text-gray-900"
              required
            />
          </div>

          <div className="mb-6">
            <label className="block text-sm text-gray-700 mb-1">Password</label>
            <input
              type="password"
              placeholder="••••••••"
              value={password}
              onChange={(e) => setPassword(e.target.value)}
              className="w-full border border-gray-300 rounded-md px-3 py-2 text-sm text-gray-900"
              required
            />
          </div>

          <div>
            <button
              type="submit"
              className="w-full text-center bg-black text-white py-2 px-4 rounded-md hover:bg-gray-800 transition"
            >
              Login
            </button>
          </div>
        </form>
      </div>
    </div>
  );
}
