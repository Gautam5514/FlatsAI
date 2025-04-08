import React from "react";

const propertyImages = [
    {id: 1, src: "/vrindavan1.jpeg", title: "Luxury Apartment in Vrindavan"},
    {id: 2, src: "/vrindavan2.jpg", title: "Modern Villa in Vrindavan"},
    {id: 3, src: "/vrindavan3.jpg", title: "bugdet Flat in Vrindavan"},
    {id: 4, src: "/vrindavan4.webp", title: "High-rise in Vrindavan"},
    {id: 5, src: "/vrindavan5.jpg", title: "Luxury Villa in Vrindavan"},
]

const Vrindavan = () => {
    return (
        <div className="max-w-4xl mx-auto p-6">
            <h2 className="text-4xl font-bold text-gray-800 text-center">Vrindavan Properties</h2>
            
            <p className="text-gray-600 mt-4 text-center">
                Vrindavan is a holy town associated with Lord Krishna, known for its beautiful temples and religious significance.
            </p>
            <div className="mt-10 grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 gap-6">
                {propertyImages.map((property) => (
                    <div 
                        key={property.id}
                        className="bg-white rounded-xl overflow-hidden shadow-md hover:shadow-xl transform hover:scale-[1.02] transition duration-300 ease-in-out"
                        >
                            <img
                                src={property.src}
                                alt={property.title}
                                className="w-full h-56 object-cover"
                            />
                            <div className="p-4">
                                <h3 className="text-lg font-semibold text-gray-800">{property.title}</h3>
                            </div>    
                    </div>
                ))}
            </div>
        </div>
    );
};

export default Vrindavan;
