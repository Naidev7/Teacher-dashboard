import Link from "next/link";

const getSubjects = async () => {
  try {
    const res = await fetch("http://localhost:3000/api/subjects", {
      cache: "no-store",
    });

    if (!res.ok) {
      throw new Error("Failed to fetch subjects");
    }

    return res.json();
  } catch (error) {
    console.log("Error loading subjects: ", error);
  }
};

export default async function TopicsList() {
  const { data } = await getSubjects();

  return (
    <>
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
        {data.map((s, i) => (
          <tr key={i} className="text-center">
            <td className="p-3 text-sm leading-5 font-medium">{s.name}</td>
            <td className="p-3 text-sm leading-5 font-medium">{s.type}</td>
            <td className="p-3 text-sm leading-5 font-medium">
              {s.course}
            </td>
            <td className="p-3 text-sm leading-5 font-medium">{s.group}</td>
            <td className="p-3 text-sm leading-5 font-medium">{s.hours}</td>
            <td className="p-3 text-sm leading-5 font-medium">
              {s.spaces}
            </td>
            <td className="flex p-3 gap-x-4">
              <Link href={`/pages/detail/${s._id}`}
                id="detail"
                className="text-indigo-700 text-sm leading-5 font-medium"
              >
                Ver
              </Link>


              <Link href={`/pages/edit/${s._id}`}
                id="edit"
                className="text-indigo-700 text-sm leading-5 font-medium"
              >
                Editar
              </Link>
              <Link href={`/pages/delate/${s._id}`}
                id="delate"
                className="text-red-600 leading-5 text-sm font-medium"
              >
                Eliminar
              </Link>
            </td>
          </tr>
        ))}
      </table>
    </>
  );
}
