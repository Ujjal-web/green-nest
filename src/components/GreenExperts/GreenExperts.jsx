import React from "react";


const experts = [
    {
        id: 1,
        name: "Kunal",
        role: "Indoor Plant Specialist",
        image:
            "https://images.pexels.com/photos/3763188/pexels-photo-3763188.jpeg?auto=compress&cs=tinysrgb&w=800",
    },
    {
        id: 2,
        name: "Monir",
        role: "Soil & Fertilizer Expert",
        image:
            "https://images.pexels.com/photos/3824771/pexels-photo-3824771.jpeg?auto=compress&cs=tinysrgb&w=800",
    },
    {
        id: 3,
        name: "Khalid",
        role: "Tropical Plant Care Advisor",
        image:
            "https://images.pexels.com/photos/450212/pexels-photo-450212.jpeg?auto=compress&cs=tinysrgb&w=800",
    },
    {
        id: 4,
        name: "Evan",
        role: "Succulent & Cactus Expert",
        image:
            "https://images.pexels.com/photos/3824774/pexels-photo-3824774.jpeg?auto=compress&cs=tinysrgb&w=800",
    },
];

const GreenExperts = () => {
    return (
        <section className="py-14 px-4 bg-white">
            <div className="max-w-11/12 mx-auto text-center">
                <h2 className="text-2xl md:text-3xl font-semibold text-green-800 mb-10">
                    Meet Our Green Experts
                </h2>

                <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-8">
                    {experts.map((expert) => (
                        <div
                            key={expert.id}
                            className="bg-green-50 rounded-2xl shadow-md hover:shadow-lg transition-all duration-300 p-6 flex flex-col items-center"
                        >
                            <img
                                src={expert.image}
                                alt={expert.name}
                                className="w-28 h-28 object-cover rounded-full border-4 border-green-600 mb-4"
                            />
                            <h3 className="text-lg font-semibold text-gray-800">
                                {expert.name}
                            </h3>
                            <p className="text-sm text-gray-600 mt-1">{expert.role}</p>
                        </div>
                    ))}
                </div>
            </div>
        </section>
    );
};

export default GreenExperts;
