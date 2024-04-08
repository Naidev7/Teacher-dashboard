'use client'
import Link from "next/link";
import { usePathname } from "next/navigation";
import { CiLogout } from "react-icons/ci";
import { signOut } from "next-auth/react";
import { AiOutlineHome } from "react-icons/ai";
import { GrSchedules } from "react-icons/gr";
import { LiaChalkboardTeacherSolid } from "react-icons/lia";
import { HiOutlineUserGroup } from "react-icons/hi";
import { LuBox } from "react-icons/lu";
import { IoBookOutline } from "react-icons/io5";
import { FaRegBell } from "react-icons/fa6";
import { CiSettings } from "react-icons/ci";


const sectionsData = [
  { icon: <AiOutlineHome />, href: "/dashboard", text: "Inicio" },
  { icon: <GrSchedules />, href: "#", text: "Horarios" },
  { icon: <LiaChalkboardTeacherSolid />, href: "#", text: "Profesores" },
  { icon: <HiOutlineUserGroup />, href: "#", text: "Familias" },
  { icon: <LuBox />, href: "#", text: "Espacios" },
  { icon: <IoBookOutline />, href: "#", text: "Assignaturas" },
  { icon: <FaRegBell />, href: "#", text: "Notificaciones" },
  { icon: <CiSettings />, href: "#", text: "Settings" },
];

function Sections() {
  const pathname = usePathname();
  return (
    <section className="mt-6 flex flex-col gap-y-6 items-start  p-4 cursor-pointer">
      {sectionsData.map((section, index) => (
        <article key={index} className={`flex gap-x-5 hover:scale-90 ${
          pathname === section.href ? 'bg-gray-100 w-full h-full rounded-lg p-1' : ''
        }`}>
          <div className="text-xl">{section.icon}</div>
          <Link href={section.href} className="menuLinks">
            {section.text}
          </Link>
        </article>
      ))}

      <article onClick={(e)=> signOut()} className="flex gap-x-5 hover:scale-90">
        <div className="text-xl">
        <CiLogout />
        </div>
        <Link href="/" className="menuLinks">
        Log out
        </Link>
      </article>
    </section>
  );
}

export default Sections;