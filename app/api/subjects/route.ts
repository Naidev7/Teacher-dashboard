import { connectDB } from "@/libs/connectionDB";
import SubjectsM from "@/models/SubjectsM";
import { NextResponse, NextRequest } from "next/server";

export async function POST(req: NextRequest) {
  const res = await req.json();

  const { name, type, course, group, hours, spaces } = res.newSubj;
  const email = res.email;

  try {
    await connectDB();

    const createdSubj = await SubjectsM.create({
      name,
      type,
      course,
      group,
      hours,
      spaces,
      teacherEmail: email,
    });
    if (createdSubj)
      return NextResponse.json({
        success: true,
        mesasge: "Assignatura creada correctamente.",
      });
  } catch (error) {
    console.log("error during creation subject: ", error);
  }
}

export async function GET(request: NextRequest) {

  console.log('hola')

  const searchParams = request.nextUrl.searchParams.get("session");
  console.log("searchParams: ", searchParams);

  await connectDB();
  const data = await SubjectsM.find();
  console.log('data in route: ', data)
  return NextResponse.json({ data });
}

export async function DELETE(request: NextRequest) {
  const id = request.nextUrl.searchParams.get("id");
  await connectDB();
  await SubjectsM.findByIdAndDelete(id);
  return NextResponse.json({ mesage: "Subject deleted." }, { status: 200 });
}
