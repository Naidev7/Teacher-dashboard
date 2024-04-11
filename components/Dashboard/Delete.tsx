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
        const res = await fetch(`https://teacher-dashboard-gamma.vercel.app/api/subjects/?id=${id}`, {
          method: "DELETE",
        });

        if (res.ok) {
          router.refresh();
        }
      }
    } catch (error) {
      console.log(error);
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
