"use client";
import Link from "next/link";
import { useRouter } from "next/navigation";
import React, { useState } from "react";


function Add() {
  const [subject, setSubject] = useState();
  const [ added, setAdded ] = useState();
  const router = useRouter();

  const saveValues = (key: string, value: String | Number) => {
    setSubject({...subject, [key]: value});
  };

  const handleSend = async (evt:React.MouseEvent<HTMLButtonElement>)=>{
    evt.preventDefault();

    try {
      const res = await fetch('http://localhost:3000/api/addSubject',{
        method: 'POST',
        headers: {
          "Content-type": "application/json"
        },
        body: JSON.stringify({
          subject
        })
      });

      if(res.ok){
        console.log('Añadido con exito')
        router.push("/");

      }

    } catch (error) {
      console.log('Error during the fetch: ', error)
    }
  }

  return (
    <section className="flex flex-col justify-center p-12">
      <div className="flex m-auto justify-around w-[90%]">
        <h1 className="font-medium text-base leading-6 text-gray-900 ">
          Añadir asignatura
        </h1>
        <Link href="/" className="text-gray-600 cursor-pointer">
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
          className="block w-full rounded-lg shadow-base p-4 border-2 border-gray-100   focus:border-blue-300 focus:ring focus:ring-blue-200 focus:ring-opacity-50 font-normal text-sm leading-4 text-gray-600 cursor-pointer"
        >
          <option>Matemáticas</option>
          <option value="Ciéncias">Ciéncias</option>
          <option value="Biología">Biología</option>
          <option value="História">História</option>
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
          className="block w-full rounded-lg shadow-base p-4 border-2 border-gray-100   focus:border-blue-300 focus:ring focus:ring-blue-200 focus:ring-opacity-50 font-normal text-sm leading-4  text-gray-600 cursor-pointer"
        >
          <option value="Obligatoria">Obligatoria</option>
          <option value="Optativa">Optativa</option>
        </select>

        <label htmlFor="course" className="text-sm text-gray-900">
          Curso
        </label>
        <select
        onChange={(evt) => saveValues(evt.target.id, evt.target.value)}
          name="course"
          id="curse"
          className="block w-full rounded-lg shadow-base p-4 border-2 border-gray-100   focus:border-blue-300 focus:ring focus:ring-blue-200 focus:ring-opacity-50 font-normal text-sm leading-4  text-gray-600 cursor-pointer"
        >
          <option value="1º">1º de Bachillerato</option>
          <option value="2ndº">2ndº de Bachillerato</option>
          <option value="3rtº">3rtº de Bachillerato</option>
          <option value="4rtº">4rtº de Bachillerato</option>
        </select>

        <label htmlFor="group" className="text-sm text-gray-900">
          Grupo
        </label>
        <select
        onChange={(evt) => saveValues(evt.target.id, evt.target.value)}
          name="group"
          id="group"
          className="block w-full rounded-lg shadow-base p-4 border-2 border-gray-100   focus:border-blue-300 focus:ring focus:ring-blue-200 focus:ring-opacity-50 font-normal text-sm leading-4  text-gray-600 cursor-pointer"
        >
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
          className="block w-full rounded-lg shadow-base p-4 border-2 border-gray-100   focus:border-blue-300 focus:ring focus:ring-blue-200 focus:ring-opacity-50 font-normal text-sm leading-4  text-gray-600 cursor-pointer"
        >
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
          className="block w-full rounded-lg shadow-base p-4 border-2 border-gray-100   focus:border-blue-300 focus:ring focus:ring-blue-200 focus:ring-opacity-50 font-normal text-sm leading-4  text-gray-600 cursor-pointer"
        >
          <option value="1º Bach-Grupo A">1º Bach-Grupo A</option>
          <option value="1º Bach-Grupo B">1º Bach-Grupo B</option>
          <option value="1º Bach-Grupo C">1º Bach-Grupo C</option>
        </select>

        <button onClick={handleSend} className="bg-indigo-700 text-white p-4 ml-[60%] rounded-lg w-[40%] font-medium text-sm leading-5 cursor-pointer">
          Añadir asignaturas
        </button>
      </form>
      {
        added && <h3>{added}</h3>
      }
    </section>
  );
}

export default Add;
