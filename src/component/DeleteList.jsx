"use client";

import {AlertDialog, Button} from "@heroui/react";

import { redirect } from "next/navigation";

export function DeleteList({list}) {
    console.log(list);
    const deleted = async()=>{
        
        const res = await fetch(`http://localhost:8000/list-pets/${list._id}`,{
                  method: "DELETE",
      headers: {
        "content-type": "application/json",
      },
        })
        const data = await res.json()
        console.log(data);
        if(data){
            redirect("/dashboard/listing")
        }
        
    }
  return (
    <AlertDialog>
      <Button variant="danger">Delete Project</Button>
      <AlertDialog.Backdrop>
        <AlertDialog.Container>
          <AlertDialog.Dialog className="sm:max-w-100">
            <AlertDialog.CloseTrigger />
            <AlertDialog.Header>
              <AlertDialog.Icon status="danger" />
              <AlertDialog.Heading >Delete project permanently?</AlertDialog.Heading>
            </AlertDialog.Header>
            <AlertDialog.Body>
              <p>
                This will permanently delete <strong>{list.name}</strong> and all of its
                data. This action cannot be undone.
              </p>
            </AlertDialog.Body>
            <AlertDialog.Footer>
              <Button slot="close" variant="tertiary">
                Cancel
              </Button>
              <Button onClick={deleted} slot="close" variant="danger">
                Delete Project
              </Button>
            </AlertDialog.Footer>
          </AlertDialog.Dialog>
        </AlertDialog.Container>
      </AlertDialog.Backdrop>
    </AlertDialog>
  );
}