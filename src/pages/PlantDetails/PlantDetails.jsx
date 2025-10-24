import React from "react";
import { FaStar } from "react-icons/fa";
import BookConsultation from "../../components/BookConsultation/BookConsultation";
import { useLoaderData, useParams } from "react-router";


const PlantDetails = () => {

    const { id } = useParams();
    const plants = useLoaderData();

    const plant = plants.find((a) => Number(a.plantId) === Number(id));
    if (!plant) {
        return <div><h1 className="text-5xl text-center">Plant Not Found</h1></div>;
    }

    return (
        <section className="bg-green-50 max-w-7xl mx-auto px-6 py-20">
            <div className="grid grid-cols-1 md:grid-cols-2 gap-12 items-center">
                <div className="relative">
                    <img
                        src={plant.image}
                        alt={plant.plantName}
                        className="w-full h-[500px] object-cover rounded-3xl shadow-lg"
                    />
                    <span className="absolute top-4 left-4 bg-green-600 text-white text-2xl font-medium px-4 py-1 rounded-full">
                        {plant.category}
                    </span>
                </div>

                <div>
                    <h2 className="text-4xl font-bold text-green-800 mb-2">
                        {plant.plantName}
                    </h2>
                    <p className="text-lg text-gray-500 mb-4">by {plant.providerName}</p>

                    <div className="flex items-center justify-between mb-6">
                        <p className="text-3xl font-semibold text-green-700">
                            Price: ${plant.price}
                        </p>
                        <div className="flex items-center justify-center text-yellow-400 text-xl">

                            <span className="text-gray-700 font-medium">Rating:{plant.rating}</span>
                            <FaStar className="mr-1" />
                        </div>
                    </div>

                    <p className="text-gray-700 text-lg leading-relaxed mb-8">
                        {plant.description}
                    </p>


                    <div className="flex flex-col sm:flex-row sm:items-center sm:gap-10 text-lg text-gray-800">
                        <p>
                            <span className="font-semibold">Available Stock:</span>{" "}
                            {plant.availableStock}
                        </p>

                    </div>
                </div>
            </div>

            <BookConsultation></BookConsultation>
        </section>
    );
};

export default PlantDetails;
