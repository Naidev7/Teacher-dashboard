"use client";
import { useRouter } from "next/navigation";
import AddHours from "./AddHours";
import { useState } from "react";

function Schedule() {
  const [ dinamycBorder, setDinamycBorder ] = useState(true)
const router = useRouter();

const handleNav = (evt:React.MouseEvent<HTMLButtonElement> )=>{
  evt.preventDefault();
  const evtId = (evt.target as HTMLButtonElement).id;
  if(evtId === 'add') return router.push("/add");
}
  return (
    <section className="flex flex-col items-center mt-12 px-4 lg:px-0">
      <article className="flex flex-col lg:flex-row gap-y-4 lg:gap-y-0 lg:gap-x-9">
        <button className={` ${ dinamycBorder ? ' lg:border-b-2 lg:rounded-sm lg:border-indigo-700 text-indigo-700' : null } flex-1 lg:flex-none`}>
          <p className=" w-full text-center text-sm font-semibold leading-6 mb-2 lg:mb-0 lg:mr-6 ">
            Horas lectivas
          </p>
        </button>

       <AddHours setDinamycBorder={setDinamycBorder} dinamycBorder={dinamycBorder}/>
      </article>

      <button id="add" onClick={handleNav} className="addBtn mt-8 mb-8 bg-indigo-600 p-2 rounded-lg text-white font-medium text-sm leading-5 lg:ml-[80%] sm:m-auto cursor-pointer">
        + Añadir Assgnatura
      </button>

    </section>
  );
}

export default Schedule;