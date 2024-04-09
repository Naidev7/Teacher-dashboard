'use client';
import { useSession } from "next-auth/react";
import React, { useState } from "react";

function EditUser() {
  const [showAdd, setShowAdd] = useState(false);
  const [newData, setNewData] = useState({
    name: "",
    email: ""
  });
  const { data: session } = useSession();
  const [error, setError] = useState("");

  const handleShowModal = (e: React.MouseEvent<HTMLButtonElement>) => {
    e.preventDefault();
    setShowAdd(true);
  };

  const updateUser = async (e: React.MouseEvent<HTMLButtonElement>)=>{
    e.preventDefault();
    if(newData.name != "" || newData.email != ""){
        try {
          const res = await fetch(`http://localhost:3000/api/updateUser?session=${session?.user?.email}`,{
            method: 'PUT',
            headers: {
              "Content-type": "application/json",
            },
            body: JSON.stringify({
              name: newData.name,
              email: newData.email
            }),
          });

          if (!res.ok) {
            throw new Error("Failed to update subject.");
          }
          setNewData(false)
        } catch (error) {
            console.log('Error durante el fetch update user:', error)
        }
    } else{
        setError('Rellene los campos antes de actualizar sus datos.')
    }
  }

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
          <button
            onClick={(e) => setShowAdd(false)}
            className="text-gray-600 ml-[70%] font-medium cursor-pointer lg:text-2xl sm:text-sm hover:text-indigo-900"
          >
            X
          </button>
          <h1 className="font-semibold text-indigo-700 text-center capitalize lg:text-4xl sm:text-sm leading-6  ">
            Editar usuario
          </h1>
          <form className="flex flex-col gap-y-12 gap-x-5">
            <input
              onChange={(e) => setNewData(e.target.value)}
              type="text"
              placeholder={session?.user?.name}
              className="border-2 text-normal rounded-lg p-2 text-gray-600 text-center  "
            />
            <input
              onChange={(e) => setNewData(e.target.value)}
              type="text"
              placeholder={session?.user?.email}
              className="border-2 text-normal rounded-lg p-2 text-gray-600 text-center  "
            />
            <button onClick={updateUser} className="px-4 m-auto w-[80%] py-2 capitalize  bg-indigo-700 text-white rounded-md hover:bg-gray-600">
              Editar
            </button>
            <p className="text-center text-red-600">{error}</p>
          </form>
        </div>
      )}
    </>
  );
}

export default EditUser;
