import Menu from "@/components/Dashboard/Menu"
import SubjectsList from "@/components/Dashboard/SubjectsList"

function page() {
  return (
  <div className="flex">
  <Menu/>
  <div className="flex w-full flex-col text-center ml-9 bg-gray-50 h-screen ">
  <SubjectsList/>
  </div>
  </div>
)
}

export default page