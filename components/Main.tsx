import Menu from "@/components/Dashboard/Menu";
import Dashboard from "@/components/Dashboard/Dashboard"
import SubjectsList from "@/components/Dashboard/SubjectsList"

export default function Main() {
  return (
    <main className="flex ">
      <section className="hidden sm:block">
      <Menu />
      </section>
      <section className=" flex flex-col lg:ml-9 w-full p-6 h-screen  bg-gray-50 ">
      <Dashboard />
      <SubjectsList/>
      </section>
    </main>
  );
}
