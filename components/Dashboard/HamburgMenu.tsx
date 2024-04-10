import { AiOutlineMenu } from "react-icons/ai";
import { useState } from "react";
import Menu from "./Menu";

function HamburgMenu() {
  const [menu, setMenu] = useState(false);

  const handleMenu = (e) => {
    e.preventDefault();
    setMenu(!menu);
  };

  return (
    <>
      <span>
        <AiOutlineMenu className="menu cursor-pointer" onClick={handleMenu} />
      </span>
      <div>{menu && <Menu />}</div>
    </>
  );
}

export default HamburgMenu;
