import React from 'react';
import { FaLeaf, FaHandsHelping, FaSeedling } from 'react-icons/fa';
import { Link } from 'react-router-dom';

const AboutUs = () => {
    return (
        <section className="max-w-11/12 mx-auto px-4 py-16 lg:py-24">

            {/* Header Section */}
            <header className="text-center mb-16">
                <h1 className="text-4xl md:text-5xl font-extrabold text-green-800 georama-font mb-4">
                    Our Roots Run Deep
                </h1>
                <p className="text-xl text-gray-700 max-w-3xl mx-auto">
                    Welcome to GreenNest, where passion for plants meets sustainable living.
                </p>
            </header>

            {/* --- Our Mission Section --- */}
            <div className="bg-green-50 p-8 md:p-12 rounded-3xl shadow-lg mb-16 border-l-4 border-green-700">
                <div className="md:flex items-center gap-8">
                    <FaLeaf className="text-green-700 text-6xl mb-4 md:mb-0 md:flex-shrink-0" />
                    <div>
                        <h2 className="text-3xl font-bold text-green-800 mb-3">Our Mission</h2>
                        <p className="text-lg text-gray-700">
                            Our purpose is simple: to make **indoor gardening accessible and enjoyable** for everyone,
                            regardless of experience. We hand-select high-quality plants and provide the expert guidance
                            needed to help them thrive in your home, creating healthier, happier living spaces.
                        </p>
                    </div>
                </div>
            </div>

            {/* --- Our Story Section --- */}
            <div className="grid md:grid-cols-2 gap-12 items-center mb-16">

                {/* Image Placeholder */}
                <div className="rounded-2xl overflow-hidden shadow-xl">
                    <img
                        src="https://images.pexels.com/photos/1084188/pexels-photo-1084188.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1"
                        alt="Plant"
                        className="w-full h-60 object-cover"
                    />

                </div>

                {/* Story Content */}
                <div>
                    <h2 className="text-3xl font-bold text-green-800 mb-4">The GreenNest Story</h2>
                    <p className="text-gray-600 mb-6">
                        GreenNest began in a small apartment in 2020 with a handful of successful cuttings and a belief that
                        every home deserves a touch of nature. We grew from a local delivery service to an online hub,
                        all while maintaining our commitment to **sustainability, quality, and community**.
                    </p>

                    {/* Key Values */}
                    <div className="space-y-4">
                        <div className="flex items-start gap-3">
                            <FaSeedling className="text-green-700 text-xl flex-shrink-0 mt-1" />
                            <p className="text-gray-700">
                                **Sustainable Sourcing:** We partner with ethical, responsible growers who prioritize the planet.
                            </p>
                        </div>
                        <div className="flex items-start gap-3">
                            <FaHandsHelping className="text-green-700 text-xl flex-shrink-0 mt-1" />
                            <p className="text-gray-700">
                                **Expert Support:** We offer comprehensive care guides and personalized advice for every plant sold.
                            </p>
                        </div>
                    </div>
                </div>
            </div>

            {/* --- Call to Action --- */}
            <div className="text-center pt-8 border-t border-green-200">
                <h3 className="text-2xl font-semibold text-gray-800 mb-4">
                    Ready to start your green journey?
                </h3>
                <Link
                    to="/plants"
                    className="btn bg-green-700 text-white text-lg font-bold px-8 py-2 rounded-3xl hover:bg-green-900 transition-colors inline-block"
                >
                    Explore Our Plants
                </Link>
            </div>
        </section>
    );
};

export default AboutUs;