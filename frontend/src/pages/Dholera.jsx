import React from "react";

const propertyImages = [
    {id: 1, src: "/dholera1.png", title: "Luxury Apartment in Dholera"},
    {id: 2, src: "/dholera2.jpeg", title: "Modern Villa in Dholera"},
    {id: 3, src: "/dholera3.jpeg", title: "bugdet Flat in Dholera"},
    {id: 4, src: "/dholera4.jpeg", title: "High-rise in Dholera"},
    {id: 5, src: "/dholera5.jpg", title: "Luxury Villa in Dholera"},
]

const Dholera = () => {
    return (
        <div className="max-w-4xl mx-auto p-6">
            <h2 className="text-4xl font-bold text-gray-800 text-center">Dholera Properties</h2>
            <p className="text-gray-600 mt-4 text-center max-w-xl mx-auto">
                Dholera is India's first smart city, offering great investment opportunities in real estate.
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

export default Dholera;
