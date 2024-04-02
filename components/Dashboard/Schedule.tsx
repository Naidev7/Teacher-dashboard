
"use client";
import { useRouter } from "next/navigation";

function Schedule() {
const router = useRouter();



const handleNav = (evt:React.MouseEvent<HTMLButtonElement> )=>{
  evt.preventDefault();
  const evtId = evt.target.id;
  console.log('evtId ', evtId)

  if(evtId === 'add') return router.push("/pages/add");
  if(evtId === 'detail') return router.push("/pages/detail/${id}");
  if(evtId === 'edit') return router.push("/pages/edit/${id}");
  if(evtId === 'delate') return router.push("/pages/delate/${id}");



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

    </section>
  );
}

export default Schedule;