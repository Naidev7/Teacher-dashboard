'use client';
import { useSession } from "next-auth/react";

function addHours() {
    const { data: session } = useSession();
    console.log('session: ', session)


    const handleExtraH = async (e: React.MouseEvent<HTMLButtonElement>)=>{
        e.preventDefault();
      
        try {
          const res = await fetch(`http://localhost:3000/hours`)
        } catch (error) {
          console.log('Error en añadir horas fecth.', error)
        }
      
      }

  return (
    <button onClick={handleExtraH} className="flex-1 lg:flex-none font-semibold text-sm leading-6 text-gray-700">
    Horas complementarias
  </button>
  )
}

export default addHours