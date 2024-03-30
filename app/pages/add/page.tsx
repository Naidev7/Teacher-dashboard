import React from "react";

function page() {
  return (
    <section className="flex flex-col justify-center p-12">
      <div className="flex justify-around">
      <h1 className="font-medium text-base leading-6 text-gray-900">Añadir asignatura</h1>
      <span className="text-gray-600">
        X
      </span>
      </div>
      <form className="flex m-auto flex-col gap-y-6 mt-9 w-[70%] ">

        <label htmlFor="subj" className="text-normal text-sm leading-5 text-gray-900"> </label>
          Seleciona la asignatura
          <select name="subj" id="subj">
            <option value="Matemáticas">Matemáticas</option>
            <option value="Ciéncias">Ciéncias</option>
            <option value="Biología">Biología</option>
            <option value="História">História</option>
            <option value="Química">Química</option>
            <option value="Sociales">Sociales</option>
            <option value="Inglés">Inglés</option>
          </select>
       

        <label htmlFor="type" className="text-normal text-sm leading-5 text-gray-900"> </label>
          Tipo de asignatura
          <select name="type" id="type">
            <option value="Obligatoria">Obligatoria</option>
            <option value="Optativa">Optativa</option>
          </select>
       

        <label htmlFor="curso" className="text-normal text-sm leading-5 text-gray-900"></label>
          Curso
          <select name="curso" id="curso">
          <option value="1º">1º de Bachillerato</option>
          <option value="2ndº">2ndº de Bachillerato</option>
          <option value="3rtº">3rtº de Bachillerato</option>
          <option value="4rtº">4rtº de Bachillerato</option>

          </select>
        

        <label htmlFor="grup" className="text-normal text-sm leading-5 text-gray-900"></label>
         Grupo
          <select name="grup" id="grup">
            <option value="A">A</option>
            <option value="B">B</option>
            <option value="C">C</option>
          </select>
        

        <label htmlFor="hours" className="text-normal text-sm leading-5 text-gray-900">    </label>
          Horas
          <select name="hours" id="hours">
            <option value="1">1</option>
            <option value="1,5">1,5</option>
            <option value="2">2</option>
            <option value="2,5">2,5</option>
            <option value="3">3</option>
            <option value="3,5">3,5</option>
          </select>
    

        <label htmlFor="spaces" className="text-normal text-sm leading-5 text-gray-900">     </label>
          Espacio
          <select name="spaces" id="spaces">
            <option value="1º Bach-Grupo A">1º Bach-Grupo A</option>
            <option value="1º Bach-Grupo B">1º Bach-Grupo B</option>
            <option value="1º Bach-Grupo C">1º Bach-Grupo C</option>

          </select>
   
        <button>
          Añadir asignaturas
        </button>
      </form>
    </section>
  );
}

export default page;
