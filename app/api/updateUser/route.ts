import User from "@/models/User";
import { connectDB } from "@/libs/connectionDB";
import { NextRequest, NextResponse } from "next/server";


export async function PUT(request: NextRequest) {
  const session = request.nextUrl.searchParams.get("session");
  console.log("session: ", session);

  const userData = await request.json();
  const { name, email } = userData;
  
  console.log('name, email: ', name, email)
  await connectDB();

  const newUserData = await User.findOneAndUpdate(
    { email: session },
    { name, email }
  );
  return NextResponse.json({newUserData});
}
