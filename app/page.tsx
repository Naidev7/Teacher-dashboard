import Menu from "@/components/Menu/Menu";
import Main from "@/components/Main/Main";
import SubjectsList from "@/components/Main/SubjectsList"

export default function Home() {
  return (
    <main className="flex ">
      <Menu />
      <section className="ml-9 w-full p-6  bg-gray-50 ">
      <Main />
      <SubjectsList/>
      </section>
    </main>
  );
}
