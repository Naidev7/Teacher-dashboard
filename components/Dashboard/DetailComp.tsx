"use client";
import Menu from "./Menu";

interface DetailData {
  name: string;
  type: string;
  course: string;
  group: string;
  hours: number;
  spaces: number;
}

function DetailComp({ detailData }: { detailData: DetailData }) {
  const { name, type, course, group, hours, spaces } = detailData;

  return (
    <section className=" bg-gray-50 md:flex lg:flex md:flex-row w-full">
      <span className="mx-w-[30%] bg-white">
      <Menu />
      </span>
      <section className="flex flex-col w-full p-4 md:p-6 items-center justify-center min-h-screen md:w-3/4 lg:w-2/3">
        <article className="bg-white flex flex-col gap-y-4 p-4 md:p-6 lg:p-9 rounded-xl shadow-sm text-start w-full md:w-[60%] lg:max-w-lg">
          <h2 className="font-semibold text-xl md:text-2xl lg:text-3xl leading-8 text-indigo-700">
            {name}
          </h2>
          <h3 className="custom-h3">Tipo: {type}</h3>
          <h3 className="custom-h3">Curso: {course}</h3>
          <h3 className="custom-h3">Grupo: {group}</h3>
          <h3 className="custom-h3">Horas Semanales: {hours}</h3>
          <h3 className="custom-h3">Espacio Regular{spaces}</h3>
        </article>
      </section>
    </section>
  );
}

export default DetailComp;
