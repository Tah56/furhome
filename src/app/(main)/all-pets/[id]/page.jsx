
import PetDetails from '@/component/PetDetails';
import { FloppyDisk } from '@gravity-ui/icons';
import { Button, Description, FieldError, FieldGroup, Fieldset, Form, Input, Label, Modal, Surface, TextArea, TextField } from '@heroui/react';
import Image from 'next/image';
import React, { Suspense } from 'react';

const detailsPage = async({params}) => {

   
    const {id}= await  params
    const res = await fetch(`http://localhost:8000/list-pets/${id}`)
    const pets =await res.json()
    console.log(pets);
    
    return (
        <div>
            <Image src={pets?.imageUrl}
                width={400}
                height={100}
                alt={pets?.name}
            />
            <Suspense>
            

           <PetDetails pets={pets} ></PetDetails>
              
            </Suspense>
        </div>
    );
};

export default detailsPage;