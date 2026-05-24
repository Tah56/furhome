
import PetDetails from '@/component/PetDetails';
import { auth } from '@/lib/auth';
import { FloppyDisk } from '@gravity-ui/icons';
import { Button, Description, FieldError, FieldGroup, Fieldset, Form, Input, Label, Modal, Surface, TextArea, TextField } from '@heroui/react';
import { headers } from 'next/headers';
import Image from 'next/image';
import React, { Suspense } from 'react';

const detailsPage = async({params}) => {

   const {token} = await auth.api.getToken({
    headers: await headers( )
   })
   console.log(token);
   
    const {id}= await  params
    const res = await fetch(`http://localhost:8000/list-pets/${id}`,{
        headers:{
        authorization:`Bearer ${token}`
        }
    })
    const pets =await res.json()
    console.log(pets);
    
    return (
        <div >
           
           
            

           <PetDetails pets={pets} ></PetDetails>
              
          
        </div>
    );
};

export default detailsPage;