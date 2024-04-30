"use client";
import { useSession } from "next-auth/react";
import { useRouter } from "next/navigation";
import { useState } from "react";


interface AddHoursProps {
  setDinamycBorder: (value: boolean) => void;
  dinamycBorder: boolean;
}

function AddHours({ setDinamycBorder, dinamycBorder }: AddHoursProps) {
  const [showAdd, setShowAdd] = useState(false);
  const [hours, setHours] = useState(0);
  const { data: session } = useSession();
  const [error, setError] = useState("");
  const router = useRouter();

  const handleExtraH = async (e: React.MouseEvent<HTMLButtonElement>) => {
    e.preventDefault();
    setDinamycBorder(false)
    setShowAdd(true);
  };

  const handleCreate = async (e: React.MouseEvent<HTMLButtonElement>) => {
    e.preventDefault();
    if (hours > 0) {
      try {
        const res = await fetch(
          "https://teacher-dashboard-gamma.vercel.app/api/hours",
          {
            method: "POST",
            headers: {
              "Content-type": "application/json",
            },
            body: JSON.stringify({
              hours,
              email: session?.user?.email,
            }),
          }
        );

        if (res.ok) {
          setShowAdd(false);
          console.log('show add: ', showAdd)
          router.push("/dashboard");
        }
      } catch (error) {
        console.log(error);
      }
    } else {
      setError("Debe añadir alguna hora complementaria.");
    }
  };

  

  return (
    <>
      <button
        onClick={handleExtraH}
        className={` ${ !dinamycBorder && 'lg:border-b-2 lg:rounded-sm lg:border-indigo-700 text-indigo-700' } ${!showAdd && 'flex-1 lg:flex-none font-semibold text-sm leading-6 text-gray-700'} `}
      >
        Horas complementarias
      </button>
      {showAdd && (
        <div className="fixed inset-0 flex flex-col gap-y-16 justify-center items-center bg-white bg-opacity-95 z-50">
          <span className="flex lg:gap-x-12">
            <h1 className="font-medium lg:text-4xl sm:text-2xl leading-6 text-gray-900 ">
              Añadir Horas Complementarias
            </h1>
            
          </span>
          <form className="flex flex-col gap-y-12 gap-x-5">
            <input
              onChange={(e) => setHours(parseInt(e.target.value))}
              type="text"
              placeholder="Añadir horas"
              className="border-2 rounded-lg p-1 text-center  "
            />
            <button
              className="px-4 text-sm m-auto py-2 w-[50%] bg-indigo-700 text-white rounded-md hover:bg-gray-600"
              onClick={handleCreate}
            >
              Añadir
            </button>
            <button
              onClick={(e) => setShowAdd(false)}
              className="bg-red-600 text-s m-auto w-[50%] text-white rounded-md hover:bg-gray-600 px-4 py-2 "
            >
              Cancelar
            </button>

            <p className="text-center text-red-600">{error}</p>
          </form>
        </div>
      )}
    </>
  );
}

export default AddHours;
