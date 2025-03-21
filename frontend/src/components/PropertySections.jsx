import React from 'react';

const PropertyCategories = () => {
    // Property category data
    const categories = [
        {
            id: 1,
            title: "Town House",
            count: 2,
            image: "./background.webp",
            bgColor: "bg-blue-200",
        },
        {
            id: 2,
            title: "Modern Villa",
            count: 10,
            image: "./background.webp",
            bgColor: "bg-blue-300",
        },
        {
            id: 3,
            title: "Apartment",
            count: 3,
            image: "./background.webp",
            bgColor: "bg-blue-200",
        },
        {
            id: 4,
            title: "Single Family",
            count: 5,
            image: "./background.webp",
            bgColor: "bg-blue-200",
        },
        {
            id: 5,
            title: "Office",
            count: 3,
            image: "./background.webp",
            bgColor: "bg-blue-200",
        },
    ];

    return (
        <section className="py-16 px-4">
            <div className="max-w-6xl mx-auto">
                {/* Section Header */}
                <div className="text-center mb-12">
                    <h2 className="text-3xl font-bold text-gray-800 mb-2">Explore Our Properties</h2>
                    <p className="text-gray-600">Lorem ipsum dolor sit amet</p>
                </div>

                {/* Property Categories Grid */}
                <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-5 gap-6">
                    {categories.map((category) => (
                        <div
                            key={category.id}
                            className={`rounded-lg overflow-hidden cursor-pointer transition-transform hover:scale-105 shadow-md ${category.bgColor}`}
                        >
                            <div className="p-4">
                                <h3 className="font-bold text-gray-800">{category.title}</h3>
                                <p className="text-sm text-gray-600">{category.count} Properties</p>
                            </div>
                            <div className="h-48 relative">
                                <img
                                    src={category.image}
                                    alt={category.title}
                                    className="w-full h-full object-cover"
                                />
                            </div>
                        </div>
                    ))}
                </div>
            </div>
        </section>
    );
};

export default PropertyCategories;