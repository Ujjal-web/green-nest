import React from 'react';
import { FaMapMarkerAlt, FaPhone, FaEnvelope } from 'react-icons/fa';

const ContactUs = () => {
    // State management for form (optional, but good practice for a real form)
    const [formData, setFormData] = React.useState({
        name: '',
        email: '',
        subject: '',
        message: ''
    });

    const handleChange = (e) => {
        setFormData({ ...formData, [e.target.name]: e.target.value });
    };

    const handleSubmit = (e) => {
        e.preventDefault();
        // Handle form submission logic here (e.g., API call)
        console.log("Form submitted:", formData);
        alert('Thank you for contacting GreenNest! We will be in touch shortly.');
        setFormData({ name: '', email: '', subject: '', message: '' }); // Reset form
    };

    return (
        <section className="max-w-11/12 mx-auto px-4 py-16 lg:py-24">

            {/* Header Section */}
            <header className="text-center mb-12">
                <h1 className="text-4xl md:text-5xl font-extrabold text-green-800 georama-font mb-4">
                    Get in Touch with GreenNest
                </h1>
                <p className="text-xl text-gray-700 max-w-3xl mx-auto">
                    We're here to help you grow! Whether you have a question about a plant or an order, reach out to us.
                </p>
            </header>

            {/* --- Contact Content Grid --- */}
            <div className="grid lg:grid-cols-2 gap-12">

                {/* Left Column: Contact Information & Location */}
                <div className="bg-green-50 p-8 md:p-10 rounded-3xl shadow-lg border-l-4 border-green-700 h-full">
                    <h2 className="text-3xl font-bold text-green-800 mb-6">Reach Our Support Team</h2>
                    <p className="text-gray-700 mb-8">
                        Our dedicated team is ready to assist with care tips, order inquiries, or product information.
                    </p>

                    {/* Contact Details */}
                    <div className="space-y-6">
                        <div className="flex items-center gap-4">
                            <FaPhone className="text-green-700 text-2xl flex-shrink-0" />
                            <div>
                                <h3 className="font-semibold text-gray-800">Call Us</h3>
                                <p className="text-gray-600">(123) 456-7890</p>
                            </div>
                        </div>
                        <div className="flex items-center gap-4">
                            <FaEnvelope className="text-green-700 text-2xl flex-shrink-0" />
                            <div>
                                <h3 className="font-semibold text-gray-800">Email Us</h3>
                                <p className="text-gray-600">support@greennest.com</p>
                            </div>
                        </div>
                        <div className="flex items-start gap-4">
                            <FaMapMarkerAlt className="text-green-700 text-2xl flex-shrink-0 mt-1" />
                            <div>
                                <h3 className="font-semibold text-gray-800">Visit Us</h3>
                                <p className="text-gray-600">
                                    123 Green Way, Suite 400<br />
                                    Plantopia, CA 90210
                                </p>
                            </div>
                        </div>
                    </div>
                </div>

                {/* Right Column: Contact Form */}
                <div className="bg-white p-8 md:p-10 rounded-3xl shadow-xl border border-green-100">
                    <h2 className="text-3xl font-bold text-green-800 mb-6">Send Us a Message</h2>

                    <form onSubmit={handleSubmit} className="space-y-4">

                        {/* Name Input */}
                        <div>
                            <label htmlFor="name" className="block text-sm font-medium text-gray-700 mb-1">
                                Your Name
                            </label>
                            <input
                                type="text"
                                id="name"
                                name="name"
                                value={formData.name}
                                onChange={handleChange}
                                required
                                className="w-full input input-bordered border-green-300 focus:outline-none focus:border-green-700 rounded-xl px-4 py-2"
                            />
                        </div>

                        {/* Email Input */}
                        <div>
                            <label htmlFor="email" className="block text-sm font-medium text-gray-700 mb-1">
                                Email Address
                            </label>
                            <input
                                type="email"
                                id="email"
                                name="email"
                                value={formData.email}
                                onChange={handleChange}
                                required
                                className="w-full input input-bordered border-green-300 focus:outline-none focus:border-green-700 rounded-xl px-4 py-2"
                            />
                        </div>

                        {/* Subject Input */}
                        <div>
                            <label htmlFor="subject" className="block text-sm font-medium text-gray-700 mb-1">
                                Subject
                            </label>
                            <input
                                type="text"
                                id="subject"
                                name="subject"
                                value={formData.subject}
                                onChange={handleChange}
                                required
                                className="w-full input input-bordered border-green-300 focus:outline-none focus:border-green-700 rounded-xl px-4 py-2"
                            />
                        </div>

                        {/* Message Textarea */}
                        <div>
                            <label htmlFor="message" className="block text-sm font-medium text-gray-700 mb-1">
                                Your Message
                            </label>
                            <textarea
                                id="message"
                                name="message"
                                value={formData.message}
                                onChange={handleChange}
                                required
                                rows="4"
                                className="w-full textarea textarea-bordered border-green-300 focus:outline-none focus:border-green-700 rounded-xl px-4 py-2"
                            ></textarea>
                        </div>

                        {/* Submit Button */}
                        <button
                            type="submit"
                            className="w-full mt-4 bg-green-700 text-white text-lg font-bold px-8 py-3 rounded-xl hover:bg-green-900 transition-colors"
                        >
                            Send Message
                        </button>
                    </form>
                </div>
            </div>

        </section>
    );
};

export default ContactUs;