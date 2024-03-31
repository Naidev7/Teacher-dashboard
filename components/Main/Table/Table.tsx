import { useRouter } from "next/navigation";

async function getSubjects() {
  const res = await fetch("http://localhost:3000/api/getSubject");
  console.log('res: ', res)
  return res.json();
}
export const Table = async () => {
  const router = useRouter();

  const subjects = await getSubjects();
  //console.log("subjects: ", subjects);
  const mapSubj = subjects.map((eachSubj: any, i: number) => {
    return (
      <tr key={i} className="text-center">
        <td className="p-3 text-sm leading-5 font-medium">{eachSubj.name}</td>
        <td className="p-3 text-sm leading-5 font-medium">{eachSubj.type}</td>
        <td className="p-3 text-sm leading-5 font-medium">{eachSubj.course}</td>
        <td className="p-3 text-sm leading-5 font-medium">{eachSubj.group}</td>
        <td className="p-3 text-sm leading-5 font-medium">{eachSubj.hours}</td>
        <td className="p-3 text-sm leading-5 font-medium">{eachSubj.spaces}</td>
        <td className="flex p-3 gap-x-4">
          <button
            id="detail"
            onClick={handleNav}
            className="text-indigo-700 text-sm leading-5 font-medium"
          >
            Ver
          </button>
          <button
            id="edit"
            onClick={handleNav}
            className="text-indigo-700 text-sm leading-5 font-medium"
          >
            Editar
          </button>
          <button
            id="delate"
            onClick={handleNav}
            className="text-red-600 leading-5 text-sm font-medium"
          >
            Eliminar
          </button>
        </td>
      </tr>
    );
  });

  const handleNav = (evt: React.MouseEvent<HTMLButtonElement>) => {
    evt.preventDefault();
    const evtId = evt.target.id;
    console.log("evtId ", evtId);

    if (evtId === "detail") return router.push("/pages/detail/${id}");
    if (evtId === "edit") return router.push("/pages/edit/${id}");
    if (evtId === "delate") return router.push("/pages/delate/${id}");
  };

  return (
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
      {mapSubj}
    </table>
  );
}
