import React from "react";

const PetCareTips = () => {
  return (
    <div className="py-16 bg-white">
      <div className="max-w-6xl mx-auto px-6">
        <div className="text-center mb-12">
          <h2 className="text-4xl font-bold text-gray-900 mb-4">
            Pet Care Tips
          </h2>
          <p className="text-gray-600">Helpful advice from pet lovers</p>
        </div>

        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
          <div className="border border-gray-100 rounded-3xl p-6 hover:border-purple-200 transition-all">
            <h3 className="font-semibold text-lg mb-3">🐶 Regular Exercise</h3>
            <p className="text-gray-600">
              Daily walks and playtime keep your dog healthy and happy.
            </p>
          </div>

          <div className="border border-gray-100 rounded-3xl p-6 hover:border-purple-200 transition-all">
            <h3 className="font-semibold text-lg mb-3">
              🐱 Balanced Nutrition
            </h3>
            <p className="text-gray-600">
              Feed age-appropriate, high-quality food and always provide fresh
              water.
            </p>
          </div>

          <div className="border border-gray-100 rounded-3xl p-6 hover:border-purple-200 transition-all">
            <h3 className="font-semibold text-lg mb-3">
              ❤️ Regular Vet Checkups
            </h3>
            <p className="text-gray-600">
              Annual vaccinations and health checkups are essential.
            </p>
          </div>
        </div>
      </div>
    </div>
  );
};

export default PetCareTips;
