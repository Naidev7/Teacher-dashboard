
import Menu from "@/components/Dashboard/Menu";
import Dashboard from "@/components/Dashboard/Dashboard";
import SubjectsList from "@/components/Dashboard/SubjectsList";


export default function Main() {

  return (
    <main className="md:flex lg:flex">
      <section className="">
      <Menu />
      </section>
      <section className=" flex flex-col  w-full p-6 h-full  bg-gray-50 ">
      <Dashboard />
      <SubjectsList/>
      </section>
    </main>
  );
}
