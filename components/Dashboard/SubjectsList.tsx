import Link from "next/link";
import Delete from "./Delete";
import { getServerSession } from "next-auth";
import { authOptions } from "@/app/api/auth/[...nextauth]/route";

export const getSubjects = async (userEmail) => {
  try {
    const res = await fetch(`http://localhost:3000/api/subjects?session=${userEmail}`, {
      method: 'GET',
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

  const session = await getServerSession(authOptions);
  const { user } = session;
  const userEmail = user.email;
  console.log('user email', userEmail)

  const { data } = await getSubjects(userEmail);

  return (
    <>
    <div className="overflow-x-auto">
     <table className=" mt-8 lg:w-full sm:w-auto  border-gray-300 m-auto shadow-lg rounded-2xl">
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
              <Link href={`/pages/edit/${s._id}`}
                id="edit"
                className="text-indigo-700 text-sm leading-5 font-medium"
              >
                Editar
              </Link>
              <Delete id={s._id}/>
            </td>
          </tr>
        ))}
        </tbody>
      </table> 
      </div>
    </>
  );
}
