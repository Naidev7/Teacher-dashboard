import { connectDB } from "@/libs/connectionDB";
import SubjectsM from "@/models/SubjectsM";
import { NextResponse, NextRequest } from "next/server";

export async function POST(req: NextRequest) {
  const res = await req.json() 

  const { id, name, type, course, group, hours, spaces } = res.newSubj;
 

  try {
    await connectDB();

    const createdSubj = await SubjectsM.create({
      name,
      type,
      course,
      group,
      hours,
      spaces,
      mat: id
    });
    if(createdSubj) return NextResponse.json({success:true, mesasge: 'Assignatura creada correctamente.' })
    
  } catch (error) {
    console.log("error during creation subject: ", error);
  }
}

export async function GET() {
  await connectDB();
  const data = await SubjectsM.find();
  return NextResponse.json({ data });
}

export async function DELETE(request:NextRequest){
  const id = request.nextUrl.searchParams.get("id");
  await connectDB();
  await SubjectsM.findByIdAndDelete(id);
  return NextResponse.json({ mesage: "Subject deleted." }, { status: 200 });
}
