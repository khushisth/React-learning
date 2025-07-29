
import { useState } from "react";
export default function Login() {
    //email
    const[email,setEmail]=useState("");
    //password
    const[password,setPassword]=useState("");
    function handleSubmit(e){
        e.preventDefault();
       try{
        const response =await api.post('/login',{
          email,
          password,
        });
    }catch(error){
      console.error("login failed", error.response?.data?.message ||error.message);
    }
  return (
    <div className="min-h-screen bg-gray-100 flex items-center justify-center">
      <div className="w-full max-w-sm bg-white rounded-md shadow-md p-8">
        <div className="text-center text-xl font-medium text-gray-800 mb-6">
          👤
        </div>

        <div className="text-center text-xl font-medium text-gray-800 mb-6">
          HRMS Login
        </div>

        <div className="mb-4">
          <span className="block text-sm text-gray-700 mb-1">Email</span>
          <input
            type="email"
            placeholder="admin@example.com"
            value={email}
            onChange={(e)=> setEmail(e.target.value)}
            className="w-full border border-gray-300 rounded-md px-3 py-2 text-sm text-gray-900 "
          />
        </div>

        <div className="mb-6">
          <span className="block text-sm text-gray-700 mb-1">Password</span>
          <input
            type="password"
            placeholder="••••••••"
            value={password}
            onChange={(e)=> setPassword(e.target.value)}
            className="w-full border border-gray-300 rounded-md px-3 py-2 text-sm text-gray-900 "
          />
        </div>

        <div>
          <button onClick={handleSubmit} className="block text-center  cursor-pointer  bg-black text-white py-7 px-10 rounded-md ">
            Login
          </button>
        </div>
      </div>
    </div>
  );
    };
    
