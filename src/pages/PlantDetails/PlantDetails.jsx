import React, { useState } from "react";
import { FaStar } from "react-icons/fa";
import BookConsultation from "../../components/BookConsultation/BookConsultation";
import { useLoaderData, useParams } from "react-router";

const InfoRow = ({ label, value }) => (
  <div className="flex flex-col">
    <span className="text-gray-500 text-xs uppercase tracking-wide">
      {label}
    </span>
    <span className="font-medium text-gray-900">{value || "—"}</span>
  </div>
);

const PlantDetails = () => {
  const { id } = useParams();
  const plants = useLoaderData();
  const plant = plants.find((a) => Number(a.plantId) === Number(id));

  const [showFullDescription, setShowFullDescription] = useState(false);

  if (!plant) {
    return (
      <section className="bg-green-50 py-20">
        <h1 className="text-5xl text-center text-red-600">Plant Not Found</h1>
      </section>
    );
  }

  const MAX_DESC_LENGTH = 450;
  const shouldTruncate = plant.description.length > MAX_DESC_LENGTH;
  const displayedDescription =
    showFullDescription || !shouldTruncate
      ? plant.description
      : plant.description.slice(0, MAX_DESC_LENGTH) + "…";

  return (
    <section className="bg-green-50 py-16">
      <div className="max-w-7xl mx-auto px-4 md:px-6">
        {/* Top: image on left, details on right */}
        <div className="grid grid-cols-1 md:grid-cols-2 gap-10 items-start">
          {/* Left: Image block */}
          <div className="bg-white rounded-3xl shadow-lg overflow-hidden">
            <div className="relative">
              <img
                src={plant.image}
                alt={plant.plantName}
                className="w-full h-[420px] md:h-[480px] object-cover"
              />
              <span className="absolute top-4 left-4 bg-green-700 text-white text-xs md:text-sm font-semibold px-4 py-1 rounded-full">
                {plant.category}
              </span>
            </div>
          </div>

          {/* Right: fields (no description) */}
          <div className="bg-white rounded-3xl shadow-lg p-6 md:p-8">
            <h1 className="text-3xl md:text-4xl font-bold text-green-800 mb-1">
              {plant.plantName}
            </h1>
            <p className="text-gray-500 mb-4">
              by <span className="font-medium">{plant.providerName}</span>
            </p>

            <div className="flex flex-wrap items-center justify-between gap-4 mb-6">
              <p className="text-2xl md:text-3xl font-semibold text-green-700">
                ${plant.price}
              </p>
              <div className="flex items-center gap-1 text-yellow-400 text-xl">
                <FaStar />
                <span className="text-gray-700 font-medium">
                  {typeof plant.rating === "number"
                    ? plant.rating.toFixed(1)
                    : plant.rating}
                </span>
              </div>
            </div>

            {/* Info grid */}
            <div className="grid grid-cols-1 sm:grid-cols-2 gap-y-3 gap-x-8 text-sm md:text-base text-gray-800">
              <InfoRow label="Category" value={plant.category} />
              <InfoRow label="Care level" value={plant.careLevel} />
              <InfoRow label="Available stock" value={plant.availableStock} />
              <InfoRow
                label="Light requirement"
                value={plant.lightRequirement}
              />
              {plant.waterRequirement && (
                <InfoRow
                  label="Water requirement"
                  value={plant.waterRequirement}
                />
              )}
              {plant.petFriendly !== undefined && (
                <InfoRow
                  label="Pet friendly"
                  value={plant.petFriendly ? "Yes" : "No"}
                />
              )}
              {plant.airPurifying !== undefined && (
                <InfoRow
                  label="Air purifying"
                  value={plant.airPurifying ? "Yes" : "No"}
                />
              )}
              {plant.idealTemperatureC && (
                <InfoRow
                  label="Ideal temperature (°C)"
                  value={plant.idealTemperatureC}
                />
              )}
              {plant.humidityPreference && (
                <InfoRow
                  label="Humidity preference"
                  value={plant.humidityPreference}
                />
              )}
              {plant.soilType && (
                <InfoRow label="Soil type" value={plant.soilType} />
              )}
              {plant.originCountry && (
                <InfoRow label="Origin" value={plant.originCountry} />
              )}
              {/* {plant.sku && <InfoRow label="SKU" value={plant.sku} />} */}
              {plant.lastUpdated && (
                <InfoRow label="Last updated" value={plant.lastUpdated} />
              )}
            </div>
          </div>
        </div>

        {/* Bottom: full-width description */}
        <div className="mt-10 bg-white rounded-3xl shadow-lg p-6 md:p-8">
          <h2 className="text-2xl font-semibold text-green-800 mb-4">
            Description
          </h2>
          <p className="text-gray-700 leading-relaxed">
            {displayedDescription}
          </p>
          {shouldTruncate && (
            <button
              onClick={() => setShowFullDescription((prev) => !prev)}
              className="mt-4 text-green-700 font-semibold hover:text-green-900"
            >
              {showFullDescription ? "See less" : "See more"}
            </button>
          )}
        </div>

        <div className="mt-12">
          <BookConsultation />
        </div>
      </div>
    </section>
  );
};

export default PlantDetails;