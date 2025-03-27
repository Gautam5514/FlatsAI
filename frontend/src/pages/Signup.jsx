import React, { useState } from "react";
import { useNavigate } from "react-router-dom";
import { signup } from "../../api";

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

    const handleChange = (e) =>
        setFormData({ ...formData, [e.target.name]: e.target.value });

    const handleSubmit = async (e) => {
        e.preventDefault();
        const res = await signup(formData);
        if (res.message === "Signup successful, please login") navigate("/login");
    };

    return (
        <div className="flex items-center justify-center min-h-screen bg-gradient-to-br from-blue-50 to-green-100">
            <div className="w-96 bg-white p-10 rounded-2xl shadow-xl">
                <h2 className="text-2xl font-bold text-center text-green-700 mb-6">
                    Create an Account
                </h2>

                <form onSubmit={handleSubmit} className="space-y-4">
                    <div className="grid grid-cols-2 gap-4">
                        <input
                            type="text"
                            name="firstName"
                            placeholder="First Name"
                            className="border border-gray-300 rounded-lg p-3 focus:ring-2 focus:ring-green-500"
                            onChange={handleChange}
                            required
                        />
                        <input
                            type="text"
                            name="lastName"
                            placeholder="Last Name"
                            className="border border-gray-300 rounded-lg p-3 focus:ring-2 focus:ring-green-500"
                            onChange={handleChange}
                            required
                        />
                    </div>

                    <input
                        type="text"
                        name="address"
                        placeholder="Address"
                        className="border border-gray-300 rounded-lg w-full p-3 focus:ring-2 focus:ring-green-500"
                        onChange={handleChange}
                        required
                    />

                    <div className="grid grid-cols-2 gap-4">
                        <input
                            type="text"
                            name="district"
                            placeholder="District"
                            className="border border-gray-300 rounded-lg p-3 focus:ring-2 focus:ring-green-500"
                            onChange={handleChange}
                            required
                        />
                        <input
                            type="text"
                            name="state"
                            placeholder="State"
                            className="border border-gray-300 rounded-lg p-3 focus:ring-2 focus:ring-green-500"
                            onChange={handleChange}
                            required
                        />
                    </div>

                    <input
                        type="number"
                        name="pincode"
                        placeholder="Pincode"
                        className="border border-gray-300 rounded-lg w-full p-3 focus:ring-2 focus:ring-green-500"
                        onChange={handleChange}
                        required
                    />

                    <input
                        type="email"
                        name="email"
                        placeholder="Email"
                        className="border border-gray-300 rounded-lg w-full p-3 focus:ring-2 focus:ring-green-500"
                        onChange={handleChange}
                        required
                    />

                    <input
                        type="password"
                        name="password"
                        placeholder="Password"
                        className="border border-gray-300 rounded-lg w-full p-3 focus:ring-2 focus:ring-green-500"
                        onChange={handleChange}
                        required
                    />

                    <button
                        type="submit"
                        className="w-full bg-green-600 text-white py-3 rounded-lg font-semibold hover:bg-green-700 transition-all"
                    >
                        Sign Up
                    </button>
                </form>

                <div className="text-center mt-4">
                    <p className="text-gray-600 text-sm">Already have an account?</p>
                    <button
                        onClick={() => navigate("/login")}
                        className="mt-2 w-full bg-gray-200 text-green-700 py-2 rounded-lg hover:bg-gray-300 transition-all"
                    >
                        Login
                    </button>
                </div>
            </div>
        </div>
    );
};

export default Signup;
