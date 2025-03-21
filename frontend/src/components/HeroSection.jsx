import React from "react";

const HeroSection = () => {
    return (
        <section className="text-center bg-gradient-to-b from-green-400 to-white py-16 px-6 md:py-24">
            <h1 className="text-3xl md:text-5xl font-bold text-gray-800">
                The <span className="text-red-500">#1</span> site real estate professionals trust*
            </h1>
            <p className="mt-4 text-gray-600 text-lg md:text-xl">
                From as low as $10 per day with limited-time offer discounts.
            </p>
        </section>
    );
};

export default HeroSection;
