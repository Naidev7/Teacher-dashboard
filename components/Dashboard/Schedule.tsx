"use client";
import { useRouter } from "next/navigation";

function Schedule() {
const router = useRouter();

const handleNav = (evt:React.MouseEvent<HTMLButtonElement> )=>{
  evt.preventDefault();
  const evtId = (evt.target as HTMLButtonElement).id;
  console.log('evtId ', evtId)

  if(evtId === 'add') return router.push("/pages/add");

}
  return (
    <section className="mt-12 px-4 lg:px-0">
      <article className="flex flex-col lg:flex-row gap-y-4 lg:gap-y-0 lg:gap-x-9">
        <button className="lg:border-b-2 lg:rounded-sm lg:border-indigo-700 flex-1 lg:flex-none">
          <p className="text-indigo-700 text-sm font-semibold leading-6 mb-2 lg:mb-0 lg:mr-6 ">
            Horas lectivas
          </p>
        </button>

        <button className="flex-1 lg:flex-none font-semibold text-sm leading-6 text-gray-700">
          Horas complementarias
        </button>
      </article>

      <button id="add" onClick={handleNav} className="addBtn mt-8 bg-indigo-600 p-2 rounded-lg text-white font-medium text-sm leading-5 lg:ml-[80%] sm:m-auto cursor-pointer">
        + Añadir Assgnatura
      </button>

    </section>
  );
}

export default Schedule;