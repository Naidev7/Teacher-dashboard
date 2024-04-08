import Menu from "@/components/Dashboard/Menu"
import SubjectsList from "@/components/Dashboard/SubjectsList"

function page() {
  return (
  <div className="flex">
  <Menu/>
  <div className="flex w-full flex-col text-center ml-9 mt-9">
    <h1 className="font-medium text-lg leading-8">Tabla de asignaturas</h1>
  <SubjectsList/>
  </div>
  </div>
)
}

export default page