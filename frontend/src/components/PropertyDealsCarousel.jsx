import React, { useState } from 'react';
import { MapPin, Bed, Bath, Square } from 'lucide-react';

const PropertyDealsCarousel = () => {
    const [currentSlide, setCurrentSlide] = useState(0);

    // Property listings data
    const properties = [
        {
            id: 1,
            title: "Skyper Pool Apartment",
            address: "Ace Starlit, Noida",
            type: "FOR SALE",
            featured: false,
            price: "$280,000",
            beds: 4,
            baths: 2,
            sqft: 450,
            image: "/noida.jpg"
        },
        {
            id: 2,
            title: "Samriddhi Park",
            address: "Ara Gate, Ranchi",
            type: "FOR RENT",
            featured: false,
            price: "$250",
            priceUnit: "/month",
            beds: 4,
            baths: 2,
            sqft: 400,
            image: "/ara.jpg"
        },
        {
            id: 3,
            title: "Eaton Garth Penthouse",
            address: "Savitri Enclave",
            type: "FOR SALE",
            featured: true,
            price: "$180,000",
            beds: 4,
            baths: 2,
            sqft: 450,
            image: "/samlong.jpg"
        },
        {
            id: 4,
            title: "Royal Residency",
            address: "pundag near IIM Ranchi",
            type: "FOR SALE",
            featured: false,
            price: "$320,000",
            beds: 3,
            baths: 2,
            sqft: 500,
            image: "/royal.jpg"
        }
    ];

    // Navigate to next slide
    const nextSlide = () => {
        setCurrentSlide((prev) => (prev === Math.ceil(properties.length / 3) - 1 ? 0 : prev + 1));
    };

    // Navigate to previous slide
    const prevSlide = () => {
        setCurrentSlide((prev) => (prev === 0 ? Math.ceil(properties.length / 3) - 1 : prev - 1));
    };

    // Get current visible properties
    const visibleProperties = properties.slice(currentSlide * 3, (currentSlide * 3) + 3);

    // Get badge color based on property type
    const getBadgeColor = (type) => {
        if (type === "FOR SALE") return "bg-green-800";
        if (type === "FOR RENT") return "bg-blue-800";
        return "bg-gray-800";
    };

    return (
        <section className="py-16 px-4">
            <div className="max-w-6xl mx-auto">
                {/* Section Header */}
                <div className="text-center mb-12">
                    <h2 className="text-3xl font-bold text-gray-800 mb-2">Discover Our Best Deals</h2>
                    <p className="text-gray-600">Lorem ipsum dolor sit amet</p>
                </div>

                {/* Property Listings */}
                <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
                    {visibleProperties.map((property) => (
                        <div key={property.id} className="bg-white rounded-lg overflow-hidden shadow-md hover:shadow-lg transition-shadow">
                            {/* Property Image */}
                            <div className="relative">
                                <img
                                    src={property.image}
                                    alt={property.title}
                                    className="w-full h-64 object-cover"
                                />
                                {/* Property Status Badge */}
                                <div className="absolute top-4 left-4 flex space-x-2">
                                    <span className={`${getBadgeColor(property.type)} text-white text-xs px-3 py-1 rounded-md font-medium`}>
                                        {property.type}
                                    </span>
                                    {property.featured && (
                                        <span className="bg-yellow-500 text-white text-xs px-3 py-1 rounded-md font-medium">
                                            FEATURED
                                        </span>
                                    )}
                                </div>
                            </div>

                            {/* Property Details */}
                            <div className="p-4">
                                <h3 className="font-bold text-xl mb-2">{property.title}</h3>
                                <div className="flex items-center text-gray-600 mb-4">
                                    <MapPin size={16} className="mr-1" />
                                    <span className="text-sm">{property.address}</span>
                                </div>

                                {/* Property Features */}
                                <div className="flex justify-between items-center">
                                    <div className="flex space-x-4">
                                        <div className="flex items-center text-gray-600">
                                            <Bed size={16} className="mr-1" />
                                            <span className="text-sm">{property.beds}</span>
                                        </div>
                                        <div className="flex items-center text-gray-600">
                                            <Bath size={16} className="mr-1" />
                                            <span className="text-sm">{property.baths}</span>
                                        </div>
                                        <div className="flex items-center text-gray-600">
                                            <Square size={16} className="mr-1" />
                                            <span className="text-sm">{property.sqft}</span>
                                        </div>
                                    </div>
                                    <div className="text-right">
                                        <span className="font-bold text-xl text-orange-500">
                                            {property.price}
                                            <span className="text-sm">{property.priceUnit || ""}</span>
                                        </span>
                                    </div>
                                </div>
                            </div>
                        </div>
                    ))}
                </div>

                {/* Pagination Dots */}
                <div className="flex justify-center mt-8 space-x-2">
                    {Array.from({ length: Math.ceil(properties.length / 3) }).map((_, index) => (
                        <button
                            key={index}
                            onClick={() => setCurrentSlide(index)}
                            className={`h-3 w-3 rounded-full ${currentSlide === index ? "bg-gray-800" : "bg-gray-300"
                                }`}
                            aria-label={`Go to slide ${index + 1}`}
                        />
                    ))}
                </div>
            </div>
        </section>
    );
};

export default PropertyDealsCarousel;