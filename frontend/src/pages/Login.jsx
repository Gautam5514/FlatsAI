import React, { useState } from "react";
import { useNavigate } from "react-router-dom";
import { useDispatch } from "react-redux";
import { setUser } from "../redux/authSlice.js";
import { login } from "../../api.js";

const Login = () => {
  const [formData, setFormData] = useState({ email: "", password: "" });
  const dispatch = useDispatch();
  const navigate = useNavigate();

  const handleSubmit = async (e) => {
    e.preventDefault();

    try {
      const res = await login(formData);
      console.log(res);
      if (res?.user) {
        dispatch(setUser(res.user));
        navigate("/");
      } else {
        alert("Invalid credentials. Please try again.");
      }
    } catch (error) {
      console.error("Login failed:", error);
      alert("Something went wrong. Please try again.");
    }
  };

  return (
    <div className="flex items-center justify-center min-h-screen bg-gradient-to-br from-blue-400 to-blue-700">
      <div className="w-96 bg-white p-8 rounded-2xl shadow-xl">
        <h2 className="text-2xl font-bold text-center text-blue-700 mb-6">
          Welcome Back!
        </h2>

        <form onSubmit={handleSubmit} className="space-y-4">
          <div>
            <label className="block text-gray-700 font-medium">Email</label>
            <input
              type="email"
              name="email"
              placeholder="Enter your email"
              className="border border-gray-300 rounded-lg w-full p-3 focus:outline-none focus:ring-2 focus:ring-blue-500"
              onChange={(e) => setFormData({ ...formData, email: e.target.value })}
              required
            />
          </div>

          <div>
            <label className="block text-gray-700 font-medium">Password</label>
            <input
              type="password"
              name="password"
              placeholder="Enter your password"
              className="border border-gray-300 rounded-lg w-full p-3 focus:outline-none focus:ring-2 focus:ring-blue-500"
              onChange={(e) => setFormData({ ...formData, password: e.target.value })}
              required
            />
          </div>

          <button
            type="submit"
            className="w-full bg-blue-600 text-white py-3 rounded-lg font-semibold hover:bg-blue-700 transition-all"
          >
            Login
          </button>

          <div className="flex justify-between text-sm mt-3">
            <a href="/forgot-password" className="text-blue-500 hover:underline">
              Forgot Password?
            </a>
            <a href="/signup" className="text-blue-500 hover:underline">
              Create an Account
            </a>
          </div>
        </form>

        <div className="text-center mt-6">
          <p className="text-gray-600 text-sm">Or Sign in with</p>
          <div className="flex justify-center mt-3 space-x-4">
            <button className="bg-red-500 text-white px-4 py-2 rounded-lg hover:bg-red-600 transition-all">
              Google
            </button>
            <button className="bg-blue-800 text-white px-4 py-2 rounded-lg hover:bg-blue-900 transition-all">
              Facebook
            </button>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Login;
