import DetailComp from "@/components/Dashboard/DetailComp";


const getDetailById = async (id)=>{
  try {
    const res = await fetch(`http://localhost:3000/api/subjects/${id}`,{
      cache:"no-cache",
    });

    if(!res.ok){
      throw new Error("Failed to fetch detail")
    }

    return res.json();
  } catch (error) {
    console.log('Error en getDetailById: ', error)
  }
}

export default async function Detail({ params }: { params: { id: string } }) {
  const { id } = params;
  const { detailData } = await getDetailById(id);


  return <DetailComp detailData={detailData}/>;
}


