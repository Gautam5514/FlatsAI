// src/LoginForm.js
import React, { useState } from 'react';

const LoginForm = () => {
    const [formData, setFormData] = useState({
        firstName: '',
        lastName: '',
        address: '',
        district: '',
        state: '',
        pincode: '',
        email: '',
        password: '',
    });

    const handleChange = (e) => {
        const { name, value } = e.target;
        setFormData({ ...formData, [name]: value });
    };

    const handleSubmit = (e) => {
        e.preventDefault();
        console.log(formData);
        // Handle form submission logic here
    };

    return (
        <div className="flex items-center justify-center min-h-screen bg-green-100">
            <form
                onSubmit={handleSubmit}
                className="bg-green-50 p-8 rounded-lg shadow-lg w-96 transition-transform transform hover:scale-105"
            >
                <h2 className="text-2xl font-bold mb-6 text-center">Login</h2>
                {Object.keys(formData).map((key) => (
                    <div key={key} className="mb-4">
                        <label className="block text-sm font-medium text-gray-700" htmlFor={key}>
                            {key.charAt(0).toUpperCase() + key.slice(1)}
                        </label>
                        <input
                            type={key === 'password' ? 'password' : 'text'}
                            name={key}
                            id={key}
                            value={formData[key]}
                            onChange={handleChange}
                            placeholder={`Enter your ${key}`}
                            className="mt-1 block w-full p-2 border border-gray-300 rounded-md focus:outline-none focus:ring-2 focus:ring-blue-500 transition duration-150 ease-in-out"
                            required
                        />
                    </div>
                ))}
                <button
                    type="submit"
                    className="w-full bg-blue-600 text-white py-2 rounded-md hover:bg-blue-700 transition duration-200"
                >
                    Submit
                </button>
            </form>
        </div>
    );
};

export default LoginForm;