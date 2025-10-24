import React, { useState } from "react";
import { ToastContainer, toast } from "react-toastify";
import "react-toastify/dist/ReactToastify.css";

const BookConsultation = () => {
    const [formData, setFormData] = useState({
        name: "",
        email: "",
    });

    const handleChange = (e) => {
        setFormData({
            ...formData,
            [e.target.name]: e.target.value,
        });
    };

    const handleSubmit = (e) => {
        e.preventDefault();

        if (!formData.name || !formData.email) {
            toast.error("Please fill out all fields.", {
                position: "top-center",
            });
            return;
        }

        toast.success("Your consultation has been booked successfully! ", {
            position: "top-center",
        });

        setFormData({ name: "", email: "" });
    };

    return (
        <section className=" py-16 px-4">
            <div className="max-w-md mx-auto text-center bg-white shadow-md rounded-2xl p-8">
                <h2 className="text-2xl md:text-3xl font-semibold text-green-800 mb-6">
                    Book a Consultation
                </h2>

                <form onSubmit={handleSubmit} className="space-y-5">
                    <div>
                        <label className="block text-left text-gray-700 font-medium mb-1">
                            Name
                        </label>
                        <input
                            type="text"
                            name="name"
                            value={formData.name}
                            onChange={handleChange}
                            placeholder="Enter your name"
                            className="w-full border border-gray-300 rounded-xl px-4 py-2 focus:ring-2 focus:ring-green-500 outline-none"
                        />
                    </div>

                    <div>
                        <label className="block text-left text-gray-700 font-medium mb-1">
                            Email
                        </label>
                        <input
                            type="email"
                            name="email"
                            value={formData.email}
                            onChange={handleChange}
                            placeholder="Enter your email"
                            className="w-full border border-gray-300 rounded-xl px-4 py-2 focus:ring-2 focus:ring-green-500 outline-none"
                        />
                    </div>

                    <button
                        type="submit"
                        className="w-full bg-green-600 text-white py-2 rounded-xl font-medium hover:bg-green-700 transition-colors"
                    >
                        Book Now
                    </button>
                </form>
            </div>

            <ToastContainer />
        </section>
    );
};

export default BookConsultation;