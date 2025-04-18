import React, { useState } from "react";
import { useNavigate } from "react-router-dom";
import { signup } from "../../api";
import { FcGoogle } from "react-icons/fc";
import { ToastContainer, toast } from "react-toastify";
import "react-toastify/dist/ReactToastify.css";
import { signInWithPopup } from "firebase/auth";
import { auth, provider } from "../../firebase";

import { useDispatch } from "react-redux";
import { setUser } from "../redux/authSlice";

const Signup = () => {
    const [formData, setFormData] = useState({
        firstName: "",
        lastName: "",
        address: "",
        district: "",
        state: "",
        pincode: "",
        email: "",
        password: "",
    });

    const navigate = useNavigate();
    const dispatch = useDispatch();

    const handleChange = (e) =>
        setFormData({ ...formData, [e.target.name]: e.target.value });

    const handleSubmit = async (e) => {
        e.preventDefault();
        try {
            const res = await signup(formData);
            if (res.message === "Signup successful, please login") {
                toast.success("Signup successful! Redirecting to login...");
                navigate("/login");
            } else {
                toast.error(res.message || "Signup failed. Please try again.");
            }
        } catch (error) {
            console.error("Signup failed:", error);
            toast.error("Something went wrong. Please try again.");
        }
    };

    const handleGoogleSignup = async () => {
        try {
            const result = await signInWithPopup(auth, provider);
            const user = result.user;

            const userData = {
                name: user.displayName,
                email: user.email,
                photo: user.photoURL,
                uid: user.uid,
            };

            dispatch(setUser(userData)); // You can also call a backend API here to store user
            toast.success("Signup with Google successful!");
            navigate("/"); // or go to dashboard/home
        } catch (error) {
            console.error("Google Sign-up error:", error);
            toast.error("Google Sign-up failed.");
        }
    };

    return (
        <div className="flex items-center justify-center min-h-screen bg-gradient-to-br from-green-200 to-blue-400 p-5">
            <div className="w-full max-w-lg bg-white p-10 rounded-3xl shadow-2xl space-y-6">
                <h2 className="text-3xl font-bold text-center text-green-700">Create an Account</h2>

                {/* Google / Facebook Signup */}
                <div className="flex flex-col gap-3">
                    <button
                        onClick={handleGoogleSignup}
                        className="flex items-center justify-center w-full p-3 border border-gray-300 rounded-lg text-gray-700 hover:bg-gray-100 transition-all"
                    >
                        <FcGoogle className="text-2xl mr-2" /> Sign up with Google
                    </button>
                    {/* <button className="flex items-center justify-center w-full p-3 border border-gray-300 rounded-lg text-blue-600 hover:bg-blue-100 transition-all">
                        <FaFacebook className="text-2xl mr-2" /> Sign up with Facebook
                    </button> */}
                </div>

                <div className="text-center text-gray-500">or</div>

                {/* Manual Signup Form */}
                <form onSubmit={handleSubmit} className="space-y-4">
                    <div className="grid grid-cols-2 gap-4">
                        <input type="text" name="firstName" placeholder="First Name" className="input-style" onChange={handleChange} required />
                        <input type="text" name="lastName" placeholder="Last Name" className="input-style" onChange={handleChange} required />
                    </div>
                    <input type="text" name="address" placeholder="Address" className="input-style" onChange={handleChange} required />
                    <div className="grid grid-cols-2 gap-4">
                        <input type="text" name="district" placeholder="District" className="input-style" onChange={handleChange} required />
                        <input type="text" name="state" placeholder="State" className="input-style" onChange={handleChange} required />
                    </div>
                    <input type="number" name="pincode" placeholder="Pincode" className="input-style" onChange={handleChange} required />
                    <input type="email" name="email" placeholder="Email" className="input-style" onChange={handleChange} required />
                    <input type="password" name="password" placeholder="Password" className="input-style" onChange={handleChange} required />

                    <button type="submit" className="w-full bg-green-600 text-white py-3 rounded-lg font-semibold hover:bg-green-700 transition-all cursor-pointer">
                        Sign Up
                    </button>
                </form>

                <div className="text-center mt-4">
                    <p className="text-gray-600 text-sm">Already have an account?</p>
                    <button onClick={() => navigate("/login")} className="mt-2 w-full bg-gray-200 text-green-700 py-2 rounded-lg hover:bg-gray-300 transition-all cursor-pointer">
                        Login
                    </button>
                </div>
            </div>
            <ToastContainer />
        </div>
    );
};

export default Signup;
