'use client'
import Link from "next/link";
import IconStart from "./icons/IconStart";
import SchedulesIcon from "./icons/SchedulesIcon";
import TeachersIcon from "./icons/TeachersIcon";
import FamiliesIcon from "./icons/FamiliesIcon";
import SpacesIcon from "./icons/SpacesIcon";
import SubjectsIcon from "./icons/SubjectsIcon";
import BellIcon from "./icons/BellIcon";
import SettingsIcon from "./icons/SettingsIcon";
import { usePathname } from "next/navigation";
import { CiLogout } from "react-icons/ci";
import { signOut } from "next-auth/react";

const sectionsData = [
  { icon: <IconStart />, href: "/dashboard", text: "Inicio" },
  { icon: <SchedulesIcon />, href: "#", text: "Horarios" },
  { icon: <TeachersIcon />, href: "#", text: "Profesores" },
  { icon: <FamiliesIcon />, href: "#", text: "Familias" },
  { icon: <SpacesIcon />, href: "#", text: "Espacios" },
  { icon: <SubjectsIcon />, href: "#", text: "Assignaturas" },
  { icon: <BellIcon />, href: "#", text: "Notificaciones" },
  { icon: <SettingsIcon />, href: "#", text: "Settings" },
];

function Sections() {
  const pathname = usePathname();
  return (
    <section className="flex flex-col gap-y-6 items-start  p-4 cursor-pointer">
      {sectionsData.map((section, index) => (
        <article key={index} className={`flex gap-x-5 hover:scale-90 ${
          pathname === section.href ? 'bg-gray-100 w-full h-full rounded-lg p-1' : ''
        }`}>
          <div className="w-5">{section.icon}</div>
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
