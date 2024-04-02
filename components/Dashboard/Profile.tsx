import React from "react";

function Profile() {
  return (
    <section className="flex flex-col gap-y-6 mt-2">
      <h4 className="font-medium text-lg leading-8">Profesores</h4>
      <p className="font-normal leading-5 text-sm text-gray-500">
        Crea y gestiona los profesores
      </p>
      <article className="flex gap-x-12 p-6 border-t-2 border-b-2 border-solid border-gray-200">
        <div className="bg-gradient-to-b from-purple-200 to-indigo-300 p-2 rounded-lg w-[96px] h-[96px] text-center">
          <p className="text-indigo-700 font-medium text-4xl mt-5">MM</p>
        </div>
        <span className="flex flex-col gap-y-3  text-gray-500 text-sm">
          <h1 className="leading-7 text-lg font-medium text-gray-900">Marta Martínez</h1>
          <a href="mailto:profesora123@gmailc.com" className="underline">profesora123@gmailc.com</a>
          <p>+34 666 555 444</p>
        </span>
        <div className="ml-[40%] mt-7 ">
          <p className="text-indigo-700 font-medium text-sm leanding-4 cursor-pointer">Editar</p>
        </div>
      </article>
    </section>
  );
}

export default Profile;
