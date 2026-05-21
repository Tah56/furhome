import AllPets from '@/component/AllPets';
import { Spinner } from '@heroui/react';
import React, { Suspense } from 'react';
import { PiPawPrintBold } from 'react-icons/pi';

const allPetsPage = () => {
    return (
        <div>
            <div className='container mx-auto border py-20'>
        <h2 className='font-extrabold text-center  text-4xl '>Find Your <span className='text-orange-400'>Pets</span></h2>
        <div className='border '>
            <h2>filter</h2>

        </div>
        <Suspense fallback={<div className="flex flex-col items-center justify-center gap-2">
        <Spinner size="xl" />
        <span className="text-xs text-muted">Loading..</span>
      </div>}>

        <AllPets/>
        </Suspense>

            </div>
        </div>
    );
};

export default allPetsPage;