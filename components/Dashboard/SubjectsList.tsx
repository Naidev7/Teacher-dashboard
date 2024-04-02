import Link from "next/link";

export const getSubjects = async () => {
  try {
    const res = await fetch("https://https://teacher-dashboard-l367-c9lqzs26h-naidalys-projects.vercel.app/subjects", {
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

export default async function SubjectsList() {
  const { data } = await getSubjects();

  return (
    <>
     <table className="mt-8 w-full  border-gray-300 m-auto shadow-lg rounded-2xl">
      <thead className="bg-gray-100 border-b-2">
        <tr>
          <th className="custom-th rounded-l-2xl">
            Nombre
          </th>
          <th className="custom-th">
            Tipo
          </th>
          <th className="custom-th">
            Curso
          </th>
          <th className="custom-th">
            Grupo
          </th>
          <th className="custom-th">
            Horas Semana
          </th>
          <th className="custom-th">
            Espacio Regular
          </th>
          <th className="custom-th rounded-r-2xl">
            Acciones
          </th>
        </tr>
        </thead>
        <tbody>
        {data.map((s: any, i: number) => (
          <tr key={i} className="text-start pl-6">
            <td className="custom-td">{s.name}</td>
            <td className="custom-td">{s.type}</td>
            <td className="custom-td">
              {s.course}
            </td>
            <td className="custom-td">{s.group}</td>
            <td className="custom-td">{`${s.hours} h`}</td>
            <td className="custom-td">
              {s.spaces}
            </td>
            <td className="flex p-3 gap-x-4">
              <Link href={`/pages/${s._id}`}
                id="detail"
                className="text-indigo-700 text-sm leading-5 font-medium"
              >
                Ver
              </Link>
              <button
                id="edit"
                className="text-indigo-700 text-sm leading-5 font-medium"
              >
                Editar
              </button>
              <button 
                id="delate"
                className="text-red-600 leading-5 text-sm font-medium"
              >
                Eliminar
              </button>
            </td>
          </tr>
        ))}
        </tbody>
      </table> 

    </>
  );
}
