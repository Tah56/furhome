
; // Make sure path is correct
import AddPet from '@/component/AddPet';
import React from 'react';

const AddPetsPage = () => {
  return (
    <div className="min-h-screen bg-gray-50 py-10">
      <div className="max-w-5xl mx-auto px-6">
        
        {/* Page Header */}
        <div className="mb-10">
          <div className="flex items-center gap-3 mb-3">
            <div className="w-10 h-10 bg-purple-100 rounded-2xl flex items-center justify-center text-3xl">
              🐾
            </div>
            <div>
              <h1 className="text-4xl font-bold text-gray-900">Add New Pet</h1>
              <p className="text-gray-500 mt-1">Give a loving home to a new furry friend</p>
            </div>
          </div>
          <div className="h-1 w-16 bg-purple-600 rounded-full"></div>
        </div>

        {/* Main Content Card */}
        <div className="bg-white rounded-3xl shadow-sm border border-gray-100 overflow-hidden">
          <AddPet />
        </div>

        {/* Help Text */}
        <div className="mt-8 text-center text-sm text-gray-500">
          All listed pets will be reviewed before going live. 
          Make sure to add clear photos and accurate details.
        </div>
      </div>
    </div>
  );
};

export default AddPetsPage;