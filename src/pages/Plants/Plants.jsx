import React from 'react';
import { FaStar } from 'react-icons/fa';
import { useLoaderData } from 'react-router';

const Plants = () => {
    const plantsData = useLoaderData();

    return (
        <section className="max-w-11/12 mx-auto px-4 py-12">
            <h2 className="text-2xl md:text-3xl font-semibold text-center mb-8 text-green-800">
                Explore Our Top Rated Indoor Plants
            </h2>

            <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-8">
                {plantsData.map((plant) => (
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
                            <span className="absolute top-3 right-3 bg-green-700 text-white text-lg font-bold px-3 py-1 rounded-full">
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

                            <button className="mt-5 bg-green-700 text-white text-lg py-2 rounded-xl font-bold hover:bg-green-900 transition-colors">
                                View Details
                            </button>
                        </div>
                    </div>
                ))}
            </div>


        </section>
    );
};

export default Plants;