import React from "react";
import { FaTint, FaSun, FaLeaf } from "react-icons/fa"; // Water, Sunlight, Fertilizer icons

// ✅ Fake static JSON data
const careTips = [
    {
        id: 1,
        title: "Watering Tips",
        description:
            "Most indoor plants prefer their soil to dry slightly between waterings. Water thoroughly, allowing excess to drain away. Avoid letting plants sit in standing water.",
        icon: <FaTint className="text-blue-500 text-4xl mb-4" />,
    },
    {
        id: 2,
        title: "Sunlight Guidance",
        description:
            "Place plants near bright, indirect sunlight. Avoid harsh midday rays that can scorch leaves. Rotate your pots occasionally for even growth.",
        icon: <FaSun className="text-yellow-400 text-4xl mb-4" />,
    },
    {
        id: 3,
        title: "Fertilizing Advice",
        description:
            "Feed your plants once every 4–6 weeks during their growing season with a balanced liquid fertilizer diluted to half strength.",
        icon: <FaLeaf className="text-green-500 text-4xl mb-4" />,
    },
];

const PlantCareTips = () => {
    return (
        <section className="bg-green-50 py-12 px-4 mt-12">
            <div className="max-w-11/12 mx-auto text-center">
                <h2 className="text-2xl md:text-3xl font-semibold text-green-800 mb-8">
                    Plant Care Tips
                </h2>

                <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
                    {careTips.map((tip) => (
                        <div
                            key={tip.id}
                            className="bg-white rounded-2xl shadow-md p-6 hover:shadow-lg transition-shadow"
                        >
                            <div className="flex flex-col items-center text-center">
                                {tip.icon}
                                <h3 className="text-lg font-semibold text-gray-800 mb-2">
                                    {tip.title}
                                </h3>
                                <p className="text-gray-600 text-sm">{tip.description}</p>
                            </div>
                        </div>
                    ))}
                </div>
            </div>
        </section>
    );
};

export default PlantCareTips;
