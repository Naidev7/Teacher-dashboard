"use client";
import { useSession } from "next-auth/react";
import { useRouter } from "next/navigation";
import { useState } from "react";

function AddHours() {
  const [showAdd, setShowAdd] = useState(false);
  const [hours, setHours] = useState(0);
  const { data: session } = useSession();
  const [error, setError] = useState("");
  const router = useRouter();

  const handleExtraH = async (e: React.MouseEvent<HTMLButtonElement>) => {
    e.preventDefault();
    setShowAdd(true);
  };

  const handleCreate = async (e: React.MouseEvent<HTMLButtonElement>) => {
    e.preventDefault();
    if (hours > 0) {
      try {
        const res = await fetch("http://localhost:3000/api/hours", {
          method: "POST",
          headers: {
            "Content-type": "application/json",
          },
          body: JSON.stringify({
            hours,
            email: session?.user?.email,
          }),
        });

        if (res.ok) {
          setShowAdd(false);
          console.log("ok created");
          router.push("/dashboard");
        }
      } catch (error) {
        console.log("Error en añadir horas fecth.", error);
      }
    } else {
      setError("Debe añadir alguna hora complementaria.");
    }
  };

  return (
    <>
      <button
        onClick={handleExtraH}
        className="flex-1 lg:flex-none font-semibold text-sm leading-6 text-gray-700"
      >
        Horas complementarias
      </button>
      {showAdd && (
        <div className="fixed inset-0 flex flex-col gap-y-16 justify-center items-center bg-white bg-opacity-95 z-50">
          <span className="flex lg:gap-x-12">
            <h1 className="font-medium lg:text-4xl sm:text-sm leading-6 text-gray-900 ">
              Añadir Horas Complementarias
            </h1>
            <button
              onClick={(e) => setShowAdd(false)}
              className="text-gray-600 font-medium cursor-pointer lg:text-4xl sm:text-sm hover:text-indigo-900"
            >
              X
            </button>
          </span>
          <form className="flex  gap-y-12 gap-x-5">
            <input
              onChange={(e) => setHours(parseInt(e.target.value))}
              type="text"
              placeholder="Añadir horas"
              className="border-2 rounded-lg p-1 text-center  "
            />
            <button
              className="px-4 py-2  bg-indigo-700 text-white rounded-md hover:bg-gray-600"
              onClick={handleCreate}
            >
              Añadir
            </button>
            <p className="text-center text-red-600">{error}</p>
          </form>
        </div>
      )}
    </>
  );
}

export default AddHours;
