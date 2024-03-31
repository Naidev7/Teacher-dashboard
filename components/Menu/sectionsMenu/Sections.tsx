import Link from "next/link";
import IconStart from "./icons/IconStart";
import SchedulesIcon from "./icons/SchedulesIcon";
import TeachersIcon from "./icons/TeachersIcon";
import FamiliesIcon from "./icons/FamiliesIcon";
import SpacesIcon from "./icons/SpacesIcon";
import SubjectsIcon from "./icons/SubjectsIcon";
import BellIcon from "./icons/BellIcon";
import SettingsIcon from "./icons/SettingsIcon";

function Sections() {
  return (
    <section className="flex flex-col gap-y-6 items-start ml-4 p-4 cursor-pointer">
      <article className="flex gap-x-5">
        <div>
          <IconStart />
        </div>
        <Link href="/" className="menuLinks">
          Inicio
        </Link>
      </article>
      <article  className="flex gap-x-5">
        <div>
          <SchedulesIcon/>
        </div>
        <Link href="/schedule" className="menuLinks">
          Horarios
        </Link>
      </article>
      <article  className="flex gap-x-5">
        <div>
          <TeachersIcon/>
        </div>
        <Link href="/teachers" className="menuLinks">
          Profesores
        </Link>
      </article>
      <article  className="flex gap-x-5">
        <div>
          <FamiliesIcon/>
        </div>
        <Link href="families" className="menuLinks">
          Familias
        </Link>
      </article>
      <article  className="flex gap-x-5">
        <div>
          <SpacesIcon/>
        </div>
        <Link href="spaces" className="menuLinks">
          Espacios
        </Link>
      </article>
      <article  className="flex gap-x-5">
        <div>
          <SubjectsIcon/>
        </div>
        <Link href="/subjects" className="menuLinks">
          Assignaturas
        </Link>
      </article>
      <article  className="flex gap-x-5">
        <div>
        <BellIcon/>
        </div>
        <Link href="/notifications" className="menuLinks">
          Notificaciones
        </Link>
      </article>
      <article  className="flex gap-x-5">
        <nav>
          <SettingsIcon/>
        </nav>
        <Link href="/settings" className="menuLinks">
          Settings
        </Link>
      </article>
    </section>
  );
}

export default Sections;
