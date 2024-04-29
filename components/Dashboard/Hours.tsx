import { authOptions } from "@/app/api/auth/[...nextauth]/route";
import { getServerSession } from "next-auth";
import AnualHours from "./AnualHours";

export const getHours = async (userEmail) => {
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
    console.log("Error loading subjects: ", error);
  }
};

export const getComplH = async (userEmail) => {
  try {
    const res = await fetch(`https://teacher-dashboard-gamma.vercel.app/api/hours?session=${userEmail}`, {
      method: 'GET',
      cache: "no-store",
    });

    if (!res.ok) {
      throw new Error("Failed to fetch subjects");
    }

    return res.json();
  } catch (error) {
    console.log( error);
  }
};

async function Hours() {
  const session = await getServerSession(authOptions);
  const { user } = session;
  const userEmail = user.email;

  const { data } = await getHours(userEmail);
  const ordinaryHours = data.reduce(
    (total: number, data: any) => total + data.hours,
    0
  );

  const { complement } = await getComplH(userEmail);
  const totalExtra = complement.reduce(
    (total: number, complement: any) => total + complement.hours, 0
  );

const totalHours = ordinaryHours + totalExtra;

  return (
    <section className="flex flex-col items-center gap-y-12 border-b-2">
      <article className="hoursArticle flex justify-around bg-gray-200 mt-6 p-3 w-[30%] h-12 items-center sm:gap-x-3 rounded-xl text-sm">
        <button className="bg-white p-3 rounded-xl w-[50%] font-medium text-sm leading-5 cursor-pointer">
          Semanal
        </button>
        <AnualHours totalHours={totalHours} />
      </article>

      <article className="flex flex-col md:flex-row gap-x-0 gap-y-3 md:gap-x-24 mb-8">
        <div className="bg-white p-6 rounded-xl">
          <p className="custom-hours-P">Horas Totales</p>
          <h4 className="font-bold text-lg leading-12 text-gray-900">
            {totalHours}
          </h4>
        </div>
        <div className="bg-white p-6 rounded-xl">
          <p className="custom-hours-P">Horas Lectivas</p>
          <h4 className="font-bold text-lg leading-12 text-gray-900">
            {ordinaryHours} Horas
          </h4>
        </div>
        <div className="bg-white p-6 rounded-xl">
          <p className="custom-hours-P">Horas Complementarias</p>
          <h4 className="font-bold text-lg leading-12  text-gray-900">
            {totalExtra}
          </h4>
        </div>
      </article>
    </section>
  );
}

export default Hours;
