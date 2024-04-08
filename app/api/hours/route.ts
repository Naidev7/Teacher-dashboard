import { connectDB } from "@/libs/connectionDB";
import ComplementH  from "@/models/ComplementH";
import { NextResponse, NextRequest } from "next/server";

export async function POST(req: NextRequest, response: NextResponse) {
  const res = await req.json();
  console.log("res: ", res);

  const  hours  = res.hours;
  console.log('hours: ', hours)
  const email = res.email;
  try {
    await connectDB();

    const createComplHour = await ComplementH.create({
       hours,
      teacherEmail: email,
    });
    if (createComplHour)
      return NextResponse.json({
        success: true,
        mesasge: "Horas complementarias añadidas correctamente.",
      });
  } catch (error) {
    console.log("error durante la creación de horas: ", error);
  }
}

export async function GET(request: NextRequest) {
  const searchParams = request.nextUrl.searchParams.get("session");
  await connectDB();
  const complement = await ComplementH.find({ teacherEmail: searchParams });
  return NextResponse.json({ complement });
}
