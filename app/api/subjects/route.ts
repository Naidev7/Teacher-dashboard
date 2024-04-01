import { connectDB } from "@/libs/connectionDB";
import SubjectsM from "@/models/SubjectsM";
import { NextResponse, NextRequest } from "next/server";

export async function POST(req: NextRequest) {
  const res = await req.json() // res now contains body

  console.log("body: ", res.newSubj)
  const { name, type, course, group, hours, spaces } = res.newSubj;
  try {
    await connectDB();

    const createdSubj = await SubjectsM.create({
      name,
      type,
      course,
      group,
      hours,
      spaces
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
