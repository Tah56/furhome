import AddPet from '@/component/AddPet';
import React from 'react';

const AddPetsPage = () => {
    return (
        <div className='w-full border border-red-300 mt-10'>
            <h2>addPage</h2>
            <div className=' max-w-5xl mx-auto   border border-red-500                '>

            <AddPet/>
            </div>
        </div>
    );
};

export default AddPetsPage;