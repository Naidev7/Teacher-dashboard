

function Hours() {
  return (
   <section className="flex flex-col items-center gap-y-12 border-b-2">

    <article className="flex justify-around bg-gray-200 mt-6 p-3 w-[30%] h-12 items-center rounded-xl">
        <button className="bg-white p-3 rounded-xl w-[50%] font-medium text-sm leading-5 cursor-pointer">Semanal</button>
        <button className="text-gray-700 font-normal text-sm leading-5 cursor-pointer"> Anual</button>
    </article>


    <article className="flex gap-x-24 mb-8">
        <div className="bg-white p-6 rounded-xl">
            <p className="font-medium text-sm leading-4 text-gray-700">Horas Totales</p>
            <h4 className="font-bold text-lg leading-12 text-gray-900">18 Horas</h4>
        </div>
        <div  className="bg-white p-6 rounded-xl">
            <p className="font-medium text-sm leading-4 text-gray-700">Horas Totales</p>
            <h4 className="font-bold text-lg leading-12  text-gray-900">18 Horas</h4>
        </div>
        <div  className="bg-white p-6 rounded-xl">
            <p className="font-medium text-sm leading-4 text-gray-700">Horas Totales</p>
            <h4 className="font-bold text-lg leading-12  text-gray-900">18 Horas</h4>
        </div>
    </article>
   </section>
  )
}

export default Hours