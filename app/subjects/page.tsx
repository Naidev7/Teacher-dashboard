import Menu from "@/components/Dashboard/Menu";
import SubjectsList from "@/components/Dashboard/SubjectsList";

function page() {
  return (
    <div className="flex">
      <div >
        <Menu />
      </div>
      <div className="flex w-full flex-col text-center p-6 bg-gray-50 h-screen ">
        <SubjectsList />
      </div>
    </div>
  );
}

export default page;
