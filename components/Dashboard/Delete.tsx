"use client";

import { useRouter } from "next/navigation";

function Delete({ id }: { id: string }) {
  const router = useRouter();
  const removeSubject = async () => {
    const confirmed = confirm(
      "¿Estás seguro de querer eliminar la asignatura?"
    );

    try {
      if (confirmed) {
        const res = await fetch(`http://localhost:3000/api/subjects?id=${id}`, {
          method: "DELETE",
        });

        if (res.ok) {
          console.log("Amo a borra");
          router.refresh();
        }
      }
    } catch (error) {
      console.log("Error borrando... ", error);
    }
  };

  return (
    <button
      onClick={removeSubject}
      className="text-red-600 leading-5 text-sm font-medium"
    >
      Eliminar
    </button>
  );
}

export default Delete;