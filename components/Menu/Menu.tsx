import HeaderMenu from "./headerMenu/HeaderMenu";
import SectionsMenu from "./sectionsMenu/Sections";


function Menu() {
  return (
    <article className="flex flex-col gap-y-4 w-[20%]">
    <HeaderMenu/>      
    <SectionsMenu/>
    </article>
  );
}

export default Menu;
