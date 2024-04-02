import Logo from "./Logo";


function HeaderMenu() {
  return (
    <div className="flex gap-x-8 p-4 mt-8 ">
      <span className="flex items-center gap-x-4">
        <div className="w-6">
          <Logo />
        </div>
        <h4 className="font-medium text-sm leading-6">Tajamar </h4>
      </span>
      <span className="bg-gray-200 p-4 rounded-[50%] w-6 h-6 flex items-center relative">
        <p className="text-sm font-medium leading-5 text-gray-600 ">J</p>
        <div className="bg-white absolute top-5 w-4 h-4 rounded-[50%]">
        <span className="bg-green-400 absolute  top-1 left-1 w-2 h-2 rounded-[50%] text-transparent ">f</span>
        </div>
      </span>
    </div>
  );
}

export default HeaderMenu;
