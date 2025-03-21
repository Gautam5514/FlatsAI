import React from "react";

const HeroSection = () => {
    return (
        <section 
            className="text-center bg-gradient-to-b from-green-400 to-white py-16 px-6 md:py-24 bg-cover bg-center"
            style={{ backgroundImage: "url('/bg.jpg')" }}
        >
            <h1 className="text-3xl md:text-5xl font-bold text-red-600">
                Get Flats through AI on FlatsAI.com
            </h1>
            <p className="mt-4 text-black text-lg md:text-xl">
                Largest Real-Estate platform of India (by dimension) 
            </p>
        </section>
    );
};

export default HeroSection;
