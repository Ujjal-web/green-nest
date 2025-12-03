import React, { useState, useEffect } from 'react';
import { FaStar, FaSearch } from 'react-icons/fa'; 
import { Link, useLoaderData } from 'react-router-dom';

const Plants = () => {
    const plantsData = useLoaderData();

    const [filteredPlants, setFilteredPlants] = useState(plantsData);
    const [searchQuery, setSearchQuery] = useState("");
    const [selectedCategory, setSelectedCategory] = useState("All");
    const [sortOption, setSortOption] = useState("default");

    // Extract unique categories from data for the dropdown
    const categories = ["All", ...new Set(plantsData.map(plant => plant.category))];

    //Main Filtering & Sorting Logic
    useEffect(() => {
        let tempPlants = [...plantsData];

        if (searchQuery) {
            tempPlants = tempPlants.filter(plant =>
                plant.plantName.toLowerCase().includes(searchQuery.toLowerCase())
            );
        }

        // Filter by Category
        if (selectedCategory !== "All") {
            tempPlants = tempPlants.filter(plant => plant.category === selectedCategory);
        }

        // Sort Data
        if (sortOption === "price-low-high") {
            tempPlants.sort((a, b) => a.price - b.price);
        } else if (sortOption === "price-high-low") {
            tempPlants.sort((a, b) => b.price - a.price);
        } else if (sortOption === "rating") {
            tempPlants.sort((a, b) => b.rating - a.rating);
        }

        setFilteredPlants(tempPlants);
    }, [plantsData, searchQuery, selectedCategory, sortOption]);

    const handleReset = () => {
        setSearchQuery("");
        setSelectedCategory("All");
        setSortOption("default");
    };

    return (
        <section className="max-w-11/12 mx-auto px-4 py-12">
            <h2 className="text-2xl md:text-3xl font-semibold text-center mb-8 text-green-800">
                Explore Our All Indoor Plants
            </h2>


            <div className="bg-green-50 p-6 rounded-2xl mb-10 shadow-sm border border-green-100">
                <div className="flex flex-col lg:flex-row gap-4 justify-between items-center">

                    {/* Search Input */}
                    <div className="relative w-full lg:w-1/3">
                        <input
                            type="text"
                            placeholder="Search plant name..."
                            className="input input-bordered w-full pl-10 border-green-300 focus:outline-none focus:border-green-600 rounded-xl py-2 px-4"
                            value={searchQuery}
                            onChange={(e) => setSearchQuery(e.target.value)}
                        />
                        <FaSearch className="absolute left-3 top-3 text-gray-400" />
                    </div>

                    {/* Filters Wrapper */}
                    <div className="flex flex-wrap gap-4 w-full lg:w-auto justify-end">

                        {/* Category Dropdown */}
                        <select
                            className="select select-bordered border-green-300 rounded-xl px-4 py-2 focus:outline-none"
                            value={selectedCategory}
                            onChange={(e) => setSelectedCategory(e.target.value)}
                        >
                            {categories.map((cat, index) => (
                                <option key={index} value={cat}>{cat}</option>
                            ))}
                        </select>

                        {/* Sort Dropdown */}
                        <select
                            className="select select-bordered border-green-300 rounded-xl px-4 py-2 focus:outline-none"
                            value={sortOption}
                            onChange={(e) => setSortOption(e.target.value)}
                        >
                            <option value="default">Sort by: Default</option>
                            <option value="price-low-high">Price: Low to High</option>
                            <option value="price-high-low">Price: High to Low</option>
                            <option value="rating">Top Rated</option>
                        </select>

                        {/* Reset Button */}
                        <button
                            onClick={handleReset}
                            className="bg-gray-200 hover:bg-gray-300 text-gray-700 font-semibold py-2 px-6 rounded-xl transition-colors"
                        >
                            Reset
                        </button>
                    </div>
                </div>
            </div>

            {/* --- Plants Grid --- */}
            {filteredPlants.length > 0 ? (
                <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-8">
                    {filteredPlants.map((plant) => (
                        <div
                            key={plant.plantId}
                            className="bg-white shadow-md rounded-2xl overflow-hidden hover:shadow-lg hover:-translate-y-1 transition-all duration-300 flex flex-col"
                        >
                            <div className="relative">
                                <img
                                    src={plant.image}
                                    alt={plant.plantName}
                                    className="w-full h-60 object-cover"
                                />
                                <span className="absolute top-3 right-3 bg-green-700 text-white text-sm font-bold px-3 py-1 rounded-full">
                                    {plant.category}
                                </span>
                            </div>

                            <div className="p-5 flex flex-col grow">
                                <h3 className="text-lg font-semibold text-gray-800 mb-1">
                                    {plant.plantName}
                                </h3>
                                <p className="text-sm text-gray-500 mb-3">{plant.providerName}</p>

                                <div className="flex items-center justify-between mb-3">
                                    <p className="text-green-700 font-semibold text-lg">
                                        ${plant.price}
                                    </p>
                                    <div className="flex items-center text-yellow-400">
                                        <FaStar />
                                        <span className="ml-1 text-sm text-gray-700">
                                            {plant.rating}
                                        </span>
                                    </div>
                                </div>

                                <p className="text-gray-600 text-sm grow line-clamp-3">
                                    {plant.description}
                                </p>

                                <Link to={`/details/${plant.plantId}`}>
                                    <button className="mt-5 w-full bg-green-700 text-white text-lg py-2 rounded-xl font-bold hover:bg-green-900 transition-colors">
                                        View Details
                                    </button>
                                </Link>
                            </div>
                        </div>
                    ))}
                </div>
            ) : (
                // Fallback UI if no items match filter
                <div className="text-center py-20">
                    <h3 className="text-2xl font-bold text-gray-400">No plants found</h3>
                    <p className="text-gray-500 mt-2">Try adjusting your search or filters.</p>
                    <button
                        onClick={handleReset}
                        className="mt-4 text-green-700 underline font-semibold"
                    >
                        Clear Filters
                    </button>
                </div>
            )}
        </section>
    );
};

export default Plants;