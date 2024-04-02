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

const sectionsData = [
  { icon: <IconStart />, href: "/", text: "Inicio" },
  { icon: <SchedulesIcon />, href: "/schedule", text: "Horarios" },
  { icon: <TeachersIcon />, href: "/teachers", text: "Profesores" },
  { icon: <FamiliesIcon />, href: "/families", text: "Familias" },
  { icon: <SpacesIcon />, href: "/spaces", text: "Espacios" },
  { icon: <SubjectsIcon />, href: "/subjects", text: "Assignaturas" },
  { icon: <BellIcon />, href: "/notifications", text: "Notificaciones" },
  { icon: <SettingsIcon />, href: "/settings", text: "Settings" },
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
    </section>
  );
}

export default Sections;
