import React from "react";

const propertyImages = [
    { id: 1, src: "/noida1.webp", title: "Luxury Apartment in Noida" },
    { id: 2, src: "/noida2.jpg", title: "Modern Condo in Gurugram" },
    { id: 3, src: "/noida3.jpg", title: "Villa near Faridabad" },
    { id: 4, src: "/noida4.webp", title: "Budget Flat in Ghaziabad" },
    { id: 5, src: "/noida5.jpg", title: "High-rise in Greater Noida" },
];



const Noida = () => {
    return (
        <div className="max-w-4xl mx-auto p-6">
            <h2 className="text-4xl font-bold text-gray-800 text-center">Noida Properties</h2>
            <p className="text-gray-600 mt-4 text-center">
                Noida is a well-planned city with modern infrastructure. It is known for its IT hubs, commercial centers, and residential projects.
            </p>

            <div className="mt-10 grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 gap-6">
                {propertyImages.map((property) => (
                    <div
                        key={property.id}
                        className="bg-white rounded-xl overflow-hidden shadow-md hover:shadow-xl transform hover:scale-[1.02] transition duration-300 ease-in-out">
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

export default Noida;
