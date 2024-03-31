import { connectDB } from "@/app/libs/connectionDB";
import SubjectsM from "@/models/SubjectsM";
import { NextResponse, NextRequest } from "next/server";

export async function POST(req: NextRequest) {
  const res = await req.json() // res now contains body

  console.log("body: ", res.subject)
  const { name, type, course, group, hours, spaces } = res.subject;
  try {
    await connectDB();

    const newSubject = await SubjectsM.create({
      name,
      type,
      course,
      group,
      hours,
      spaces
    });
    if(newSubject) return NextResponse.json({success:true, mesasge: 'Assignatura creada correctamente.' })
    
  } catch (error) {
    console.log("error during creation subject: ", error);
  }
}
