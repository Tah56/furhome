import React from 'react';

const PetAdopt = () => {
    return (
        <div>
            <div className="py-16 bg-white">
  <div className="max-w-6xl mx-auto px-6">
    <div className="text-center mb-12">
      <h2 className="text-4xl font-bold text-gray-900 mb-4">Why Adopt a Pet?</h2>
      <p className="text-gray-600 max-w-2xl mx-auto text-lg">
        Adopting a pet is more than just bringing an animal home — it's saving a life.
      </p>
    </div>

    <div className="grid md:grid-cols-3 gap-8">
      <div className="bg-gray-50 p-8 rounded-3xl text-center hover:shadow-xl transition-all">
        <div className="text-5xl mb-4">❤️</div>
        <h3 className="text-xl font-semibold mb-3">Save a Life</h3>
        <p className="text-gray-600">Give a deserving pet a second chance at a loving home.</p>
      </div>

      <div className="bg-gray-50 p-8 rounded-3xl text-center hover:shadow-xl transition-all">
        <div className="text-5xl mb-4">🏠</div>
        <h3 className="text-xl font-semibold mb-3">Find True Companionship</h3>
        <p className="text-gray-600">Pets bring unconditional love, joy, and emotional support.</p>
      </div>

      <div className="bg-gray-50 p-8 rounded-3xl text-center hover:shadow-xl transition-all">
        <div className="text-5xl mb-4">🌍</div>
        <h3 className="text-xl font-semibold mb-3">Fight Overpopulation</h3>
        <p className="text-gray-600">Help reduce shelter overcrowding and puppy mills.</p>
      </div>
    </div>
  </div>
</div>
        </div>
    );
};

export default PetAdopt;