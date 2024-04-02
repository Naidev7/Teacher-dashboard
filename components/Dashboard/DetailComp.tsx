"use client";

import Menu from "../Menu/Menu";

function DetailComp({ detailData }) {
  const { name, type, course, group, hours, spaces } = detailData;

  return (
    <section className="flex">
      <Menu/>
    <section className="flex flex-col w-full p-6 items-center justify-center h-screen bg-gray-50">

      <article className="bg-white flex flex-col flex-wrap gap-x-8 p-9 rounded-xl shadow-sm justify-center items-center gap-y-4 text-start w-[40%]">
        <h2 className="font-semibold text-2xl leading-8 text-indigo-700">{name}</h2>
        <h3 className="font-normal leading-8 text-sm text-gray-500">Tipo: {type}</h3>
        <h3 className="font-normal leading-8 text-sm text-gray-500">Curso: {course}</h3>
        <h3 className="font-normal leading-8 text-sm text-gray-500">Grupo: {group}</h3>
        <h3 className="font-normal leading-8 text-sm text-gray-500">Horas Semanales: {hours}</h3>
        <h3 className="font-normal leading-8 text-sm text-gray-500">Espacio Regular{spaces}</h3>
      </article>
    </section>
    </section>
  );
}

export default DetailComp;
