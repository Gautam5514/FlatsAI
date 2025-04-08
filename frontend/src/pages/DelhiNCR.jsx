import React from "react";

const propertyImages = [
    { id: 1, src: "/delhi1.jpg", title: "Luxury Apartment in Noida" },
    { id: 2, src: "/delhi2.jpeg", title: "Modern Condo in Gurugram" },
    { id: 3, src: "/delhi3.jpg", title: "Villa near Faridabad" },
    { id: 4, src: "/delhi4.png", title: "Budget Flat in Ghaziabad" },
    { id: 5, src: "/delhi5.jpg", title: "High-rise in Greater Noida" },
];

const DelhiNCR = () => {
    return (
        <div className="max-w-6xl mx-auto p-6">
            <h2 className="text-4xl font-bold text-gray-800 text-center">Delhi-NCR Properties</h2>
            <p className="text-gray-600 mt-2 text-center max-w-xl mx-auto">
                Delhi-NCR is the metropolitan region surrounding India's capital, known for its real estate boom and modern amenities.
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

export default DelhiNCR;
