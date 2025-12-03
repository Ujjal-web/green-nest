import React from "react";
import { FaStar } from "react-icons/fa";

const reviews = [
  {
    id: 1,
    name: "Sarah M.",
    role: "New plant parent",
    rating: 5,
    quote:
      "GreenNest made it so easy to choose plants for my low-light apartment. Every plant arrived healthy and beautifully packaged.",
  },
  {
    id: 2,
    name: "Daniel R.",
    role: "Busy professional",
    rating: 4.8,
    quote:
      "The care tips and recommendations are spot on. I finally have plants that actually thrive instead of dying after a week.",
  },
  {
    id: 3,
    name: "Priya K.",
    role: "Pet owner",
    rating: 4.9,
    quote:
      "Love their pet-friendly selection. I don’t have to worry about my cats, and my living room has never looked greener.",
  },
];

const CustomerReviews = () => {
  return (
    <section className="bg-white">
      <div className="max-w-11/12 mx-auto px-4 py-16">
        <h2 className="text-2xl md:text-3xl font-semibold text-center text-green-800 mb-2">
          What Our <span className="underline font-bold">Customers Say</span>
        </h2>
        <p className="text-center text-gray-600 mb-10 max-w-2xl mx-auto">
          Join thousands of happy plant lovers who trust GreenNest for healthier, happier homes.
        </p>

        <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
          {reviews.map((review) => (
            <div
              key={review.id}
              className="bg-green-50 rounded-2xl p-6 shadow-sm hover:shadow-md transition-shadow duration-200 flex flex-col h-full"
            >
              <div className="flex items-center gap-2 mb-3">
                <div className="flex text-yellow-400">
                  {Array.from({ length: 5 }).map((_, idx) => (
                    <FaStar key={idx} className="text-sm" />
                  ))}
                </div>
                <span className="text-sm text-gray-700 font-medium">
                  {review.rating.toFixed(1)}
                </span>
              </div>
              <p className="text-gray-700 text-sm mb-4 leading-relaxed">
                “{review.quote}”
              </p>
              <div className="mt-auto">
                <p className="font-semibold text-gray-900">{review.name}</p>
                <p className="text-xs text-gray-500">{review.role}</p>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default CustomerReviews;