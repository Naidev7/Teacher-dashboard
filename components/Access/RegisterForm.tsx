"use client";

import Link from "next/link";
import { useState } from "react";
import { useRouter } from "next/navigation";

export default function RegisterForm() {
  const [name, setName] = useState("");
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [error, setError] = useState("");

  const router = useRouter();

  const handleSubmit = async (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault();

    if (!name || !email || !password) {
      setError("Todos los campos son necesarios.");
      return;
    }

    try {
      const resUserExists = await fetch("https://teacher-dashboard-gamma.vercel.app/api/userExist", {
        method: "POST",
        headers: {
          "Content-Type": "application/json",
        },
        body: JSON.stringify({ email }),
      });

      const { user } = await resUserExists.json();

      if (user) {
        setError("Usuario ya existente.");
        return;
      }

      const res = await fetch("api/register", {
        method: "POST",
        headers: {
          "Content-Type": "application/json",
        },
        body: JSON.stringify({
          name,
          email,
          password,
        }),
      });

      if (res.ok) {
        router.push("/");
      } else {
        console.log("User registration failed.");
      }
    } catch (error) {
      console.log("Error during registration: ", error);
    }
  };

  return (
    <div className="grid place-items-center h-screen">
      <div className="shadow-lg space-y-16 p-12 rounded-lg border-t-4 border-indigo-400">
        <h1 className="font-bold text-center text-2xl leading-6 text-gray-900 ">
          Registro
        </h1>

        <form onSubmit={handleSubmit} className="flex flex-col gap-3 space-y-6">
          <input
            onChange={(e) => setName(e.target.value)}
            type="text"
            placeholder="Susana Blanco"
            className="block w-full rounded-lg shadow-base p-4 border-2 border-gray-100   focus:border-blue-300 focus:ring focus:ring-blue-200 focus:ring-opacity-50 font-normal text-sm leading-4 text-gray-600 cursor-pointer"
          />
          <input
            onChange={(e) => setEmail(e.target.value)}
            type="email"
            pattern="^[\w-\.]+@([\w-]+\.)+[\w-]{2,4}$"
            placeholder="susaBlanco@gmail.com"
            className="block w-full rounded-lg shadow-base p-4 border-2 border-gray-100   focus:border-blue-300 focus:ring focus:ring-blue-200 focus:ring-opacity-50 font-normal text-sm leading-4 text-gray-600 cursor-pointer"
          />
          <input
            onChange={(e) => setPassword(e.target.value)}
            type="password"
            placeholder="Contraseña"
            pattern="^(?=.*\d)(?=.*[a-z])(?=.*[A-Z])(?=.*[a-zA-Z]).{8,}$"
            className="block w-full rounded-lg shadow-base p-4 border-2 border-gray-100   focus:border-blue-300 focus:ring focus:ring-blue-200 focus:ring-opacity-50 font-normal text-sm leading-4 text-gray-600 cursor-pointer"
          />
           <p className="text-slate-500 text-xs text-center">La contraseña debe tener almenos 8 caracteres, con letras y mayúsculas incluidas</p>
          <button className="bg-indigo-700 text-white p-4 m-auto rounded-lg w-[50%] font-medium text-sm leading-5 cursor-pointer">
            Registro
          </button>

          {error && (
            <div className="text-red-500 text-center text-sm py-1 px-3 rounded-md mt-2">
              {error}
            </div>
          )}

          <Link className="text-sm mt-3 text-center" href={"/"}>
            Ya tienes cuenta? <span className="underline">Acceso</span>
          </Link>
        </form>
      </div>
    </div>
  );
}
