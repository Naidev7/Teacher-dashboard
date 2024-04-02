export const getHours = async () => {
    try {
      const res = await fetch("http://localhost:3000/api/subjects", {
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
  

async function Hours() {
    const { data } = await getHours();

    const totalHours= data.reduce((total: number, data: any)=>  total + data.hours, 0);


  return (
   <section className="flex flex-col items-center gap-y-12 border-b-2">

    <article className="flex justify-around bg-gray-200 mt-6 p-3 w-[30%] h-12 items-center rounded-xl">
        <button className="bg-white p-3 rounded-xl w-[50%] font-medium text-sm leading-5 cursor-pointer">Semanal</button>
        <button className="text-gray-700 font-normal text-sm leading-5 cursor-pointer"> Anual</button>
    </article>


    <article className="flex flex-col md:flex-row gap-x-0 gap-y-3 md:gap-x-24 mb-8">
        <div className="bg-white p-6 rounded-xl">
            <p className="custom-hours-P">Horas Totales</p>
            <h4 className="font-bold text-lg leading-12 text-gray-900">{totalHours} Horas</h4>
        </div>
        <div  className="bg-white p-6 rounded-xl">
            <p className="custom-hours-P">Horas Lectivas</p>
            <h4 className="font-bold text-lg leading-12 text-gray-900">{totalHours} Horas</h4>
        </div>
        <div  className="bg-white p-6 rounded-xl">
            <p className="custom-hours-P">Horas Complementarias</p>
            <h4 className="font-bold text-lg leading-12  text-gray-900">0 Horas</h4>
        </div>
    </article>
   </section>
  )
}

export default Hours