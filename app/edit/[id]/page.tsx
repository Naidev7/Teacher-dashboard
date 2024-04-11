import EditSubject from "@/components/Dashboard/EditSubject";

const getSpecificSubject = async (id: string): Promise<any> => {
  try {
    const res = await fetch(`https://teacher-dashboard-gamma.vercel.app/api/subjects/${id}`, {
      cache: "no-store",
    });

    if (!res.ok) {
      throw new Error("Failed to fetch topic");
    }

    return res.json();
  } catch (error) {
    console.log(error);
  }
};

async function page({ params }: { params: { id: string } }) {
  const { id } = params;
  const { detailData } = await getSpecificSubject(id);
  const { name, type, course, group, hours, spaces } = detailData;

  return (
    <EditSubject
      id={id}
      name={name}
      type={type}
      course={course}
      group={group}
      hours={hours}
      spaces={spaces}
    />
  );
}

export default page;
