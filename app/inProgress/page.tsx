import Menu from "@/components/Dashboard/Menu";
import Image from "next/image";


function page() {
  return (
   <div className="flex  gap-x-9">
    <span className="mx-w-[30%] bg-white">
    <Menu/>
    </span>
    <div className="flex flex-col w-full items-center mt-9 h-screen gap-y-12">
    <Image className="" src="/building.png" alt="heroImage" width={500} height={500} />
    <h1 className="font-medium text-lg leading-8">Página en construcción.</h1>
    </div>
    </div>
  )
}

export default page