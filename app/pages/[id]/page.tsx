import DetailComp from "@/components/Dashboard/DetailComp";

type DetailParams = {
  id: string;
};

const getDetailById = async (id: string): Promise<any>=>{
  try {
    const res = await fetch(`http://localhost:3000/api/subjects/${id}`,{
      cache:"no-cache",
    });

    if(!res.ok){
      throw new Error("Failed to fetch detail")
    }

    return res.json();
  } catch (error) {
    throw new Error("Failed to fetch detail")
  }
}

export default async function Detail({ params }: { params: { id: string } }) {
  const { id } = params;
  const { detailData } = await getDetailById(id);


  return <DetailComp detailData={detailData}/>;
}


