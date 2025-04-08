import React from "react";
import { motion } from "framer-motion";
import { ShieldCheck, Video, Smile } from "lucide-react";

const AiSecurity = () => {
    return (
        <div className="bg-green-100 py-10 px-4 sm:px-6 lg:px-8">
            <div className="max-w-6xl mx-auto">
                <motion.h2
                    className="text-4xl font-bold text-center text-gray-800 mb-6"
                    initial={{ opacity: 0, y: -20 }}
                    animate={{ opacity: 1, y: 0 }}
                    transition={{ duration: 0.8 }}
                >
                    AI-Powered Security for Your Real Estate
                </motion.h2>

                <motion.p
                    className="text-center text-gray-600 max-w-3xl mx-auto mb-12"
                    initial={{ opacity: 0 }}
                    animate={{ opacity: 1 }}
                    transition={{ delay: 0.4, duration: 0.6 }}
                >
                    Protect your properties with advanced AI solutions like real-time CCTV surveillance, smart alerts, and facial recognition systems — ensuring top-level security around the clock.
                </motion.p>

                <div className="grid gap-8 sm:grid-cols-2 lg:grid-cols-3">
                    {/* CCTV Surveillance */}
                    <motion.div
                        className="bg-white shadow-xl rounded-2xl p-6 text-center hover:shadow-2xl transition duration-300"
                        whileHover={{ scale: 1.05 }}
                    >
                        <Video className="mx-auto h-12 w-12 text-blue-600" />
                        <h3 className="text-xl font-semibold mt-4 mb-2">CCTV Surveillance</h3>
                        <p className="text-gray-600 text-sm">
                            24/7 HD surveillance powered by AI to detect unusual activities and alert authorities in real-time.
                        </p>
                    </motion.div>

                    {/* Facial Recognition */}
                    <motion.div
                        className="bg-white shadow-xl rounded-2xl p-6 text-center hover:shadow-2xl transition duration-300"
                        whileHover={{ scale: 1.05 }}
                    >
                        <Smile className="mx-auto h-12 w-12 text-green-600" />
                        <h3 className="text-xl font-semibold mt-4 mb-2">Facial Recognition</h3>
                        <p className="text-gray-600 text-sm">
                            Verify residents and visitors using facial recognition for enhanced entry control and safety.
                        </p>
                    </motion.div>

                    {/* Smart AI Alerts */}
                    <motion.div
                        className="bg-white shadow-xl rounded-2xl p-6 text-center hover:shadow-2xl transition duration-300"
                        whileHover={{ scale: 1.05 }}
                    >
                        <ShieldCheck className="mx-auto h-12 w-12 text-purple-600" />
                        <h3 className="text-xl font-semibold mt-4 mb-2">Smart AI Alerts</h3>
                        <p className="text-gray-600 text-sm">
                            Instant alerts sent to your mobile for any suspicious activity detected within your premises.
                        </p>
                    </motion.div>
                </div>

                <motion.div
                    className="mt-12 text-center"
                    initial={{ opacity: 0 }}
                    animate={{ opacity: 1 }}
                    transition={{ delay: 0.6 }}
                >
                    <button className="bg-blue-600 hover:bg-blue-700 text-white font-semibold py-3 px-6 rounded-full transition duration-300">
                        Learn More About Our Security Systems
                    </button>
                </motion.div>
            </div>
        </div>
    );
};

export default AiSecurity;