import React from "react";
import { Paintbrush, Hammer, Lightbulb, Sofa, Warehouse, Wrench } from "lucide-react";

const services = [
    {
        title: "Interior Decoration",
        icon: <Paintbrush className="w-10 h-10 text-indigo-600" />,
        description: "Stylish and modern interiors with expert design and customizable themes."
    },
    {
        title: "Construction Material",
        icon: <Hammer className="w-10 h-10 text-yellow-600" />,
        description: "Top-quality cement, sand, bricks, steel, and concrete supplies."
    },
    {
        title: "Electrical & Lighting",
        icon: <Lightbulb className="w-10 h-10 text-yellow-500" />,
        description: "All electrical fittings, smart lighting, and energy-efficient solutions."
    },
    {
        title: "Furniture & Fixtures",
        icon: <Sofa className="w-10 h-10 text-pink-500" />,
        description: "Premium furniture, modular kitchens, and built-in storage solutions."
    },
    {
        title: "Storage Solutions",
        icon: <Warehouse className="w-10 h-10 text-green-600" />,
        description: "Custom warehouse and garage fittings, including shelves and racks."
    },
    {
        title: "Plumbing & Sanitation",
        icon: <Wrench className="w-10 h-10 text-blue-600" />,
        description: "Pipes, taps, bathroom fittings, and complete plumbing services."
    }
];

const OtherServices = () => {
    return (
        <div className="bg-green-100 py-10 px-4 sm:px-6 lg:px-8">
            <div className="max-w-6xl mx-auto text-center">
                <h2 className="text-4xl font-bold text-gray-800 mb-6">Our Other Services</h2>
                <p className="text-gray-600 mb-10 max-w-2xl mx-auto">
                    In addition to buying and selling properties, we offer a range of supporting services to make your house truly a home.
                </p>
                <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-8">
                    {services.map((service, index) => (
                        <div
                            key={index}
                            className="bg-white rounded-2xl shadow-md p-6 hover:shadow-xl transition-all duration-300 ease-in-out transform hover:scale-105 hover:bg-gray-100"
                        >
                            <div className="mb-4 flex justify-center">{service.icon}</div>
                            <h3 className="text-xl font-semibold text-gray-800 mb-2">{service.title}</h3>
                            <p className="text-gray-600 text-sm">{service.description}</p>
                        </div>
                    ))}
                </div>
            </div>
        </div>
    );
};

export default OtherServices;
