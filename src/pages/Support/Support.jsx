import React from 'react';
import { FaSearch, FaQuestionCircle, FaTruck, FaShoppingCart, FaEnvelope } from 'react-icons/fa';
import { Link } from 'react-router-dom';

const Support = () => {
    // FAQ data
    const faqs = [
        {
            q: "How do I know what plant care level is right for me?",
            a: "Every plant listing on GreenNest clearly shows a 'Care Level' (Easy, Medium, Hard). We recommend starting with 'Easy' plants like Snake Plants or ZZ Plants if you are new to indoor gardening. The 'Care Level' is also filterable on the All Plants page."
        },
        {
            q: "What is your shipping policy for live plants?",
            a: "We ship all live plants using specialized packaging designed to protect them from temperature fluctuations and physical damage. Standard shipping takes 3-7 business days, but expedited options are available at checkout. See our Shipping Policy for details."
        },
        {
            q: "How do I return a plant if it arrives damaged?",
            a: "We guarantee the health of our plants upon arrival. If your plant is damaged during transit, please take photos immediately and contact us within 48 hours of delivery at support@greennest.com. We will arrange for a replacement or a full refund."
        },
        {
            q: "Are the plants pet-safe?",
            a: "Each plant listing includes a 'Pet Friendly' flag (true/false). We highly recommend double-checking the status on the product page before purchasing if you have pets. If a plant is not marked as pet-friendly, please keep it out of reach."
        },
    ];

    return (
        <section className="max-w-11/12 mx-auto px-4 py-16 lg:py-24">

            {/* Header and Search Section */}
            <header className="text-center mb-16 bg-green-50 p-8 rounded-3xl shadow-md border-b-4 border-green-700">
                <h1 className="text-4xl md:text-5xl font-extrabold text-green-800 georama-font mb-4">
                    GreenNest Support Center
                </h1>
                <p className="text-xl text-gray-700 max-w-3xl mx-auto mb-6">
                    Find quick answers to common questions about plant care, shipping, and orders.
                </p>

                {/* Search Bar */}
                {/* <div className="relative max-w-xl mx-auto">
                    <input
                        type="text"
                        placeholder="Search our knowledge base, e.g., 'shipping damage' or 'aloe vera care'"
                        className="input input-bordered w-full pl-12 pr-4 border-green-300 focus:outline-none focus:border-green-700 rounded-xl py-3 text-lg"
                    />
                    <FaSearch className="absolute left-4 top-1/2 transform -translate-y-1/2 text-gray-400" />
                </div> */}
            </header>

            {/* --- Featured Help Topics / FAQs --- */}
            <h2 className="text-3xl font-bold text-green-800 mb-8 text-center">Frequently Asked Questions</h2>

            <div className="max-w-4xl mx-auto space-y-4">
                {faqs.map((faq, index) => (
                    <div key={index} className="collapse collapse-plus bg-white border border-green-200 rounded-xl shadow-sm">
                        <input type="checkbox" className="peer" />
                        <div className="collapse-title text-xl font-semibold text-gray-800 peer-checked:bg-green-100 peer-checked:text-green-700 transition-colors py-4 px-6 flex items-center gap-3">
                            <FaQuestionCircle className="text-green-700 peer-checked:text-green-900" />
                            {faq.q}
                        </div>
                        <div className="collapse-content bg-green-50/50 text-gray-700 py-4 px-6 border-t border-green-200">
                            <p>{faq.a}</p>
                        </div>
                    </div>
                ))}
            </div>

            {/* --- Additional Help Section --- */}
            <div className="mt-16 text-center pt-10 border-t border-green-200">
                <h2 className="text-3xl font-bold text-green-800 mb-6">Still Need Help?</h2>
                <div className="flex flex-col md:flex-row justify-center gap-6">

                    {/* Shipping & Orders */}
                    <div className="bg-white p-6 rounded-2xl shadow-lg border border-green-200 flex flex-col items-center hover:shadow-xl transition-shadow">
                        <FaTruck className="text-green-700 text-4xl mb-3" />
                        <h3 className="font-semibold text-xl text-gray-800 mb-2">Shipping & Orders</h3>
                        <p className="text-gray-600 mb-4 text-center">Track your package or inquire about returns.</p>
                        <Link to="/contact" className="text-green-700 font-bold hover:text-green-900">
                            Check Order Status
                        </Link>
                    </div>

                    {/* General Inquiry */}
                    <div className="bg-white p-6 rounded-2xl shadow-lg border border-green-200 flex flex-col items-center hover:shadow-xl transition-shadow">
                        <FaEnvelope className="text-green-700 text-4xl mb-3" />
                        <h3 className="font-semibold text-xl text-gray-800 mb-2">General Inquiry</h3>
                        <p className="text-gray-600 mb-4 text-center">For questions not covered in our FAQ.</p>
                        <Link to="/contact" className="text-green-700 font-bold hover:text-green-900">
                            Contact Us Directly
                        </Link>
                    </div>
                </div>
            </div>
        </section>
    );
};

export default Support;