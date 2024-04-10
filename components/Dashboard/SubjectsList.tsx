import Link from "next/link";
import Delete from "./Delete";
import { getServerSession } from "next-auth";
import { authOptions } from "@/app/api/auth/[...nextauth]/route";

export const getSubjects = async (userEmail) => {
  try {
    const res = await fetch(
      `https://teacher-dashboard-gamma.vercel.app/api/subjects?session=${userEmail}`,
      {
        method: "GET",
        cache: "no-store",
      }
    );

    if (!res.ok) {
      throw new Error("Failed to fetch subjects");
    }

    return res.json();
  } catch (error) {
    console.log(error);
  }
};

export default async function SubjectsList() {
  const session = await getServerSession(authOptions);
  const { user } = session;
  const userEmail = user.email;

  const { data } = await getSubjects(userEmail);

  return (
    <>
      <div className="w-[90%] mb-8  tabla-desktop">
        <div className="min-w-full">
          <table className=" mt-6 ml-6 lg:w-full sm:w-auto sm:min-w-full m-auto shadow-lg divide-y divide-gray-200">
            <thead className="bg-sky-950">
              <tr>
                <th className="custom-th rounded-l-2xl">Nombre</th>
                <th className="custom-th">Tipo</th>
                <th className="custom-th">Curso</th>
                <th className="custom-th">Grupo</th>
                <th className="custom-th">Horas Semana</th>
                <th className="custom-th">Espacio Regular</th>
                <th className="custom-th rounded-r-2xl">Acciones</th>
              </tr>
            </thead>
            <tbody>
              {data.map((s: any, i: number) => (
                <tr key={i} className="text-start pl-6">
                  <td className="custom-td">{s.name}</td>
                  <td className="custom-td">{s.type}</td>
                  <td className="custom-td">{s.course}</td>
                  <td className="custom-td">{s.group}</td>
                  <td className="custom-td">{`${s.hours} h`}</td>
                  <td className="custom-td">{s.spaces}</td>
                  <td className="flex p-3 gap-x-4">
                    <Link
                      href={`/${s._id}`}
                      id="detail"
                      className="text-indigo-700 text-sm leading-5 font-medium"
                    >
                      Ver
                    </Link>
                    <Link
                      href={`/edit/${s._id}`}
                      id="edit"
                      className="text-indigo-700 text-sm leading-5 font-medium"
                    >
                      Editar
                    </Link>
                    <Delete id={s._id} />
                  </td>
                </tr>
              ))}
            </tbody>
          </table>
        </div>
      </div>

      <div className="flex flex-col tabla-mobile">
        <div className="shadow overflow-hidden sm:rounded-lg">
          <div className="grid grid-cols-2 md:grid-cols-3 gap-4">
            <div className="p-4 border border-gray-200 rounded">
              <div className="text-sm font-medium text-gray-500">Nombre</div>
              {data.map((s: any, i: number) => (
                <div key={i} className="text-lg mt-1 font-semibold">
                  {s.name}
                </div>
              ))}
            </div>
            <div className="p-4 border border-gray-200 rounded">
              <div className="text-sm font-medium text-gray-500">Tipo</div>
              {data.map((s: any, i: number) => (
                <div key={i} className="text-lg mt-1 font-semibold">
                  {s.type}
                </div>
              ))}
            </div>
            <div className="p-4 border border-gray-200 rounded">
              <div className="text-sm font-medium text-gray-500">Curso</div>
              {data.map((s: any, i: number) => (
                <div key={i} className="text-lg mt-1 font-semibold">
                  {s.course}
                </div>
              ))}
            </div>
            <div className="p-4 border border-gray-200 rounded">
              <div className="text-sm font-medium text-gray-500">Grupo</div>
              {data.map((s: any, i: number) => (
                <div key={i} className="text-lg mt-1 font-semibold">
                  {s.group}
                </div>
              ))}
            </div>
            <div className="p-4 border border-gray-200 rounded">
              <div className="text-sm font-medium text-gray-500">
                Horas semana
              </div>
              {data.map((s: any, i: number) => (
                <div key={i} className="text-lg mt-1 font-semibold">
                  {s.hours}
                </div>
              ))}
            </div>
            <div className="p-4 border border-gray-200 rounded">
              <div className="text-sm font-medium text-gray-500">
                Espacio Regular
              </div>
              {data.map((s: any, i: number) => (
                <div key={i} className="text-lg mt-1 font-semibold">
                  {s.spaces}
                </div>
              ))}
            </div>
            <div className="p-4 border border-gray-200 rounded col-span-2">
              <div className="text-sm font-medium text-gray-500">Acciones</div>
              {data.map((s: any, i: number) => (
                <div key={i} className="flex mt-1">
                  <Link
                    href={`/${s._id}`}
                    className="text-indigo-600 hover:text-indigo-900 mr-4"
                  >
                    Ver
                  </Link>
                  <Link
                    href={`/edit/${s._id}`}
                    className="text-indigo-600 hover:text-indigo-900 mr-4"
                  >
                    Editar
                  </Link>
                  <Delete id={s._id} />
                </div>
              ))}
            </div>
          </div>
        </div>
      </div>
    </>
  );
}
