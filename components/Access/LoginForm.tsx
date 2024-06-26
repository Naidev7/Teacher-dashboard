"use client";
import Link from "next/link";
import { useState } from "react";
import { signIn } from "next-auth/react";
import { useRouter } from "next/navigation";

export default function LoginForm() {
  const [email, setEmail] = useState<String>("");
  const [password, setPassword] = useState<String>("");
  const [error, setError] = useState<String>("");

  const router = useRouter();

  const handleSubmit = async (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault();

    try {
      const res = await signIn("credentials", {
        email,
        password,
        redirect: false,
      });

      if (res.error) {
        setError("Credenciales inválidas");
        return;
      }

      router.replace("/dashboard");
    } catch (error: any) {
      console.log(error);
    }
  };

  return (
    <div className="flex justify-center items-center h-screen">
      <div className="shadow-lg space-y-16 p-12 rounded-lg border-t-4 border-indigo-400">
        <h1 className="font-bold text-center text-2xl leading-6 text-gray-900 ">Acceso</h1>

        <form onSubmit={handleSubmit} className="flex flex-col gap-3 space-y-6">
          <input
            onChange={(e) => setEmail(e.target.value)}
            type="email"
            placeholder="susaBlanco@gmail.com"
            className="block w-full rounded-lg shadow-base p-4 border-2 border-gray-100   focus:border-blue-300 focus:ring focus:ring-blue-200 focus:ring-opacity-50 font-normal text-sm leading-4 text-gray-600 cursor-pointer"
          />
          <input
            onChange={(e) => setPassword(e.target.value)}
            type="password"
            placeholder="Contraseña"
            className="block w-full rounded-lg shadow-base p-4 border-2 border-gray-100   focus:border-blue-300 focus:ring focus:ring-blue-200 focus:ring-opacity-50 font-normal text-sm leading-4 text-gray-600 cursor-pointer"
          />
          <button className="bg-indigo-700 text-white p-4 m-auto rounded-lg w-[50%] font-medium text-sm leading-5 cursor-pointer">
            Entrar
          </button>
          {error && (
            <div className="text-red-500 text-center  text-sm py-1 px-3 rounded-md mt-2">
              {error}
            </div>
          )}

          <Link className="text-sm mt-3 text-right" href={"/register"}>
            No tienes cuenta? <span className="underline">Regístrate</span>
          </Link>
        </form>
      </div>
    </div>
  );
}