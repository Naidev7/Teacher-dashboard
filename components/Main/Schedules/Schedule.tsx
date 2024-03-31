"use client";
import { useRouter } from "next/navigation";
import {Table} from "../Table/Table";

function Schedule() {
const router = useRouter();

const handleNav = (evt:React.MouseEvent<HTMLButtonElement> )=>{
  evt.preventDefault();
  const evtId = evt.target.id;
  console.log('evtId ', evtId)

  if(evtId === 'add') return router.push("/pages/add");

}


  return (
    <section className="mt-12 relative ">
      <article className="flex gap-x-9">

        <button className="border-b-2 rounded-sm border-indigo-700">
          <p className="text-indigo-700 text-sm font-semibold leading-6 mb-2 ">
            Horas lectivas
          </p>
        </button>

        <button className="font-semibold text-sm leading-6 text-gray-700">
          Horas complementarias
        </button>
      </article>

      <button id="add" onClick={handleNav} className="mt-8 bg-indigo-600 p-2 rounded-lg text-white font-medium text-sm leading-5 ml-[80%] cursor-pointer">
        + Añadir Assgnatura
      </button>

      <Table/>
    </section>
  );
}

export default Schedule;
