import { connectDB } from "@/libs/connectionDB";
import SubjectsM from "@/models/SubjectsM";
import { NextResponse, NextRequest } from "next/server";

interface Params {
  id: string;
}

export async function GET(
  request: NextRequest,
  { params }: { params: Params }
) {
  try {
    const { id } = params;
    await connectDB();
    const detailData = await SubjectsM.findOne({ _id: id });
    return NextResponse.json({ detailData }, { status: 200 });
  } catch (error) {
    console.log(error);
  }
}

export async function PUT(
  request: NextRequest,
  { params }: { params: Params }
) {
  const { id } = params;

  const {
    newName: name,
    newType: type,
    newCourse: course,
    newGroup: group,
    newHours: hours,
    newSpaces: spaces,
  } = await request.json();
  await connectDB();
  await SubjectsM.findByIdAndUpdate({_id: id}, { name, type, course, group, hours, spaces });
  return NextResponse.json({ message: "Subject updated" }, { status: 200 });
}
