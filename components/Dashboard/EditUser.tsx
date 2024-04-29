'use client';
import { useSession } from "next-auth/react";
import React, { useState } from "react";

function EditUser() {
  const [showAdd, setShowAdd] = useState(false);
  const [ newName, setNewName ] = useState("");
  const [ newEmail, setNewEmail ] = useState("");

  const [error, setError] = useState("");

  const { data: session } = useSession();

  const handleShowModal = (e: React.MouseEvent<HTMLButtonElement>) => {
    e.preventDefault();
    setShowAdd(true);
  };
  const updateUser = async (e: React.MouseEvent<HTMLButtonElement>)=>{
    e.preventDefault();
    if(newName != "" || newEmail != ""){
        try {
          const res = await fetch(`http://localhost:3000/api/updateUser?session=${session?.user?.email}`,{
            method: 'PUT',
            headers: {
              "Content-type": "application/json",
            },
            body: JSON.stringify({
              name: newName,
              email: newEmail
            }),
          });

          if(res.ok){
          setShowAdd(false)
            console.log("lo conseguimos")
          }


          if (!res.ok) {
            throw new Error("Failed to update subject.");
          }
        } catch (error) {
            console.log( error)
        }
    } else{
        setError('Rellene los campos antes de actualizar sus datos.')
    }
  };


  return (
    <>
      <div className="md:ml-[40%] lg:ml-[40%] mt-3 lg:mt-0 ">
        <button
          onClick={handleShowModal}
          className="text-indigo-700 font-medium text-sm leanding-4 cursor-pointer"
        >
          Editar
        </button>
      </div>
      {showAdd && (
        <div className="fixed inset-0 flex flex-col gap-y-16 justify-center items-center bg-white bg-opacity-95 z-50">
          <h1 className="font-semibold lg:text-5xl sm:text-4xl text-3xl text-indigo-700 text-center capitalize leading-6">
            Editar usuario
          </h1>
          <form className="flex flex-col gap-y-12 gap-x-5">
            <input
            id="name"
              onChange={(e) => setNewName(e.target.value)}
              type="text"
              placeholder={session?.user?.name}
              className="border-2 text-normal rounded-lg p-2 text-gray-600 text-center text-sm w-[70%] m-auto sm:text-base lg:text-lg sm:w-full lg:w-full"
            />
            <input
              id="email"
              onChange={(e) => setNewEmail( e.target.value)}
              type="text"
              placeholder={session?.user?.email}
              className="border-2 text-normal rounded-lg p-2 text-gray-600 text-center text-sm w-[70%] m-auto sm:text-base lg:text-lg sm:w-full lg:w-full"
            />
            <button onClick={updateUser} className="px-4 m-auto w-[60%] sm:w-[70%] lg:w-[80%] py-2 capitalize  bg-indigo-700 text-white rounded-md hover:bg-gray-600">
              Editar
            </button>
            <button  onClick={(e) => setShowAdd(false)} className="bg-red-600 text-s m-auto w-[50%] text-white rounded-md hover:bg-gray-600 px-4 py-2">
              Cancelar
            </button>
            <p className="text-center text-red-600">{error}</p>
          </form>
        </div>
      )}
    </>
  );
}

export default EditUser;
