"use client";
import { useSession } from "next-auth/react";
import EditUser from "./EditUser";

function Profile() {
  const { data: session } = useSession();

  const firstNameInitial = session?.user?.name ? session.user.name[0] : "";
  const lastNameInitial = session?.user?.name?.split(" ")[1]?.[0] || "";

  return (
    <section className="flex w-full flex-col gap-y-2 mt-2">
      <h4 className="text-center md:text-start lg:text-start font-medium text-lg leading-8">
        Profesores
      </h4>
      <p className="text-center md:text-start lg:text-start font-normal leading-5 text-sm text-gray-500 mb-4">
        Crea y gestiona los profesores
      </p>
      <article className="flex m-auto md:ml-0 md:mr-0 md:justify-around lg:justify-around p-6 border-t-2 border-b-2 border-solid border-gray-200">
        <div className="flex flex-col lg:flex-row gap-y-6 lg:gap-x-4 ">
          <div className="profile-gradient p-2 rounded-2xl w-[96px] h-[96px] lg:w-[96px] lg:h-[96px] text-center">
            <p className="text-white leading-12 font-medium text-4xl mt-5 uppercase">
              {firstNameInitial + lastNameInitial}
            </p>
          </div>
          <span className="flex flex-col justify-center lg:items-start gap-y-2  text-gray-500 text-sm">
            <h1 className="leading-7 text-lg font-medium text-gray-900 capitalize">
              {session?.user?.name}
            </h1>
            <a href={`mailto:${session?.user?.email}`} className="underline ">
              {session?.user?.email}
            </a>
          </span>
        </div>
        <EditUser />
      </article>
    </section>
  );
}

export default Profile;
