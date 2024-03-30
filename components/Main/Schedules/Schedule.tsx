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

      <table className="mt-8  border-gray-300 m-auto shadow-lg rounded-2xl">
        <tr className="bg-gray-100  border-b-2">
          <th className="p-4 text-sm leading-5 font-normal text-gray-400 rounded-l-2xl">
            Nombre
          </th>
          <th className="p-4 text-sm leading-5 font-normal text-gray-400">
            Tipo
          </th>
          <th className="p-4 text-sm leading-5 font-normal text-gray-400">
            Curso
          </th>
          <th className="p-4 text-sm leading-5 font-normal text-gray-400">
            Grupo
          </th>
          <th className="p-4 text-sm leading-5 font-normal text-gray-400">
            Horas Semana
          </th>
          <th className="p-4 text-sm leading-5 font-normal text-gray-400">
            Espacio Regular
          </th>
          <th className="p-4 text-sm leading-5 font-normal text-gray-400 rounded-r-2xl">
            Acciones
          </th>
        </tr>
        <tr className="text-center">
          <td className="p-3 text-sm leading-5 font-medium">Matemáticas</td>
          <td className="p-3 text-sm leading-5 font-medium">Obligatoria</td>
          <td className="p-3 text-sm leading-5 font-medium">1º Bachillerato</td>
          <td className="p-3 text-sm leading-5 font-medium">B</td>
          <td className="p-3 text-sm leading-5 font-medium">5h</td>
          <td className="p-3 text-sm leading-5 font-medium">
            1º Bach- Grupo B
          </td>
          <td className="flex p-3 gap-x-4">
            <button id="detail" onClick={handleNav} className="text-indigo-700 text-sm leading-5 font-medium">Ver</button>
            <button id="edit" onClick={handleNav} className="text-indigo-700 text-sm leading-5 font-medium">Editar</button>
            <button id="delate" onClick={handleNav} className="text-red-600 leading-5 text-sm font-medium">Eliminar</button>
          </td>
        </tr>
      </table>
    </section>
  );
}

export default Schedule;
