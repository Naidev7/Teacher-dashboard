"use client";
import Link from "next/link";
import { useRouter } from "next/navigation";
import React, { useState } from "react";

function Add() {
  const [newSubj, setNewSubj] = useState({
    name: "",
    type: "",
    course: "",
    group: "",
    hours: "",
    spaces: ""
  });
  const [error, setError] = useState('')

  const router = useRouter();

  const saveValues = (key: string, value: String | Number) => {
    setNewSubj({ ...newSubj, [key]: value });
  };

  const handleSend = async (evt: React.MouseEvent<HTMLButtonElement>) => {
    evt.preventDefault();

    if(newSubj.name != "" && newSubj.type != "" && newSubj.course != "" && newSubj.group != "" && newSubj.hours != "" && newSubj.spaces != ""){
      try {
        const res = await fetch("https://teacher-dashboard-gamma.vercel.app/api/subjects", {
          method: "POST",
          headers: {
            "Content-type": "application/json",
          },
          body: JSON.stringify({
            newSubj,
          }),
        });
  
        if (res.ok) {
          router.push("/");
        }
      } catch (error) {
        console.log("Error during the fetch. ", error);
      }
    }else{
      setError('Todos los campos son necesarios.')
    }
  };

  return (
    <section className="flex flex-col justify-center p-12">
      <div className="flex m-auto justify-around w-[90%]">
        <h1 className="font-medium text-base leading-6 text-gray-900 ">
          Añadir asignatura
        </h1>
        <Link href="/" className="text-gray-600 cursor-pointer hover:text-indigo-900">
          X
        </Link>
      </div>

      <form className="mx-auto flex flex-col gap-y-6 mt-9 md:w-2/3 lg:w-1/2 ">
        <label htmlFor="name" className="text-sm text-gray-900">
          Seleciona la asignatura
        </label>
        <select
          onChange={(evt) => saveValues(evt.target.id, evt.target.value)}
          name="name"
          id="name"
          value={newSubj.name}
          className="block w-full rounded-lg shadow-base p-4 border-2 border-gray-100   focus:border-blue-300 focus:ring focus:ring-blue-200 focus:ring-opacity-50 font-normal text-sm leading-4 text-gray-600 cursor-pointer"
        >
          <option value="selecione" disabled>
            Selecione
          </option>
          <option value="Matemáticas">Matemáticas</option>
          <option value="Ciencias">Ciencias</option>
          <option value="Biología">Biología</option>
          <option value="Historia">Historia</option>
          <option value="Química">Química</option>
          <option value="Sociales">Sociales</option>
          <option value="Inglés">Inglés</option>
        </select>

        <label htmlFor="type" className="text-sm text-gray-900">
          Tipo de asignatura
        </label>
        <select
          onChange={(evt) => saveValues(evt.target.id, evt.target.value)}
          name="type"
          id="type"
          value={newSubj.type}
          className="block w-full rounded-lg shadow-base p-4 border-2 border-gray-100   focus:border-blue-300 focus:ring focus:ring-blue-200 focus:ring-opacity-50 font-normal text-sm leading-4  text-gray-600 cursor-pointer"
        >
          <option disabled>Selecione</option>
          <option value="Obligatoria">Obligatoria</option>
          <option value="Optativa">Optativa</option>
        </select>

        <label htmlFor="course" className="text-sm text-gray-900">
          Curso
        </label>
        <select
          onChange={(evt) => saveValues(evt.target.id, evt.target.value)}
          name="course"
          id="course"
          value={newSubj.course}
          className="block w-full rounded-lg shadow-base p-4 border-2 border-gray-100   focus:border-blue-300 focus:ring focus:ring-blue-200 focus:ring-opacity-50 font-normal text-sm leading-4  text-gray-600 cursor-pointer"
        >
          <option value="selecione" disabled>
            Selecione
          </option>
          <option value="1º">1º de Bachillerato</option>
          <option value="2ndº">2º de Bachillerato</option>
          <option value="3rtº">3º de Bachillerato</option>
          <option value="4rtº">4º rt de Bachillerato</option>
        </select>

        <label htmlFor="group" className="text-sm text-gray-900">
          Grupo
        </label>
        <select
          onChange={(evt) => saveValues(evt.target.id, evt.target.value)}
          name="group"
          id="group"
          value={newSubj.group}
          className="block w-full rounded-lg shadow-base p-4 border-2 border-gray-100   focus:border-blue-300 focus:ring focus:ring-blue-200 focus:ring-opacity-50 font-normal text-sm leading-4  text-gray-600 cursor-pointer"
        >
          <option value="selecione" disabled>
            Selecione
          </option>
          <option value="A">A</option>
          <option value="B">B</option>
          <option value="C">C</option>
        </select>

        <label htmlFor="hours" className="text-sm text-gray-900">
          Horas
        </label>
        <select
          onChange={(evt) => saveValues(evt.target.id, evt.target.value)}
          name="hours"
          id="hours"
          value={newSubj.hours}
          className="block w-full rounded-lg shadow-base p-4 border-2 border-gray-100   focus:border-blue-300 focus:ring focus:ring-blue-200 focus:ring-opacity-50 font-normal text-sm leading-4  text-gray-600 cursor-pointer"
        >
          <option value="selecione" disabled>
            Selecione
          </option>
          <option value="1">1</option>
          <option value="1.5">1.5</option>
          <option value="2">2</option>
          <option value="2.5">2.5</option>
          <option value="3">3</option>
          <option value="3.5">3.5</option>
        </select>

        <label htmlFor="spaces" className="text-sm text-gray-900">
          Espacio
        </label>
        <select
          onChange={(evt) => saveValues(evt.target.id, evt.target.value)}
          name="spaces"
          id="spaces"
          value={newSubj.spaces}
          className="block w-full rounded-lg shadow-base p-4 border-2 border-gray-100   focus:border-blue-300 focus:ring focus:ring-blue-200 focus:ring-opacity-50 font-normal text-sm leading-4  text-gray-600 cursor-pointer"
        >
          <option value="selecione" disabled>
            Selecione
          </option>
          <option value="1º Bach-Grupo A">1º Bach-Grupo A</option>
          <option value="1º Bach-Grupo B">1º Bach-Grupo B</option>
          <option value="1º Bach-Grupo C">1º Bach-Grupo C</option>
          <option value="1º Bach-Grupo A">2º Bach-Grupo A</option>
          <option value="1º Bach-Grupo B">2º Bach-Grupo B</option>
          <option value="1º Bach-Grupo C">2º Bach-Grupo C</option>
          <option value="1º Bach-Grupo A">3º Bach-Grupo A</option>
          <option value="1º Bach-Grupo B">3º Bach-Grupo B</option>
          <option value="1º Bach-Grupo C">3º Bach-Grupo C</option>
          <option value="1º Bach-Grupo A">4º Bach-Grupo A</option>
          <option value="1º Bach-Grupo B">4º Bach-Grupo B</option>
          <option value="1º Bach-Grupo C">º Bach-Grupo C</option>
        </select>
        <p className="text-red-700">
        { error }
        </p>
        <button
          onClick={handleSend}
          className="bg-indigo-700 text-white p-4 ml-[60%] rounded-lg w-[40%] font-medium text-sm leading-5 cursor-pointer"
        >
          Añadir asignaturas
        </button>
      </form>
    </section>
  );
}

export default Add;
