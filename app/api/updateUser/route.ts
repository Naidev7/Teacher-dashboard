import User from "@/models/User";
import { connectDB } from "@/libs/connectionDB";
import { NextRequest, NextResponse } from "next/server";
import { error } from "console";


export async function PUT(request: NextRequest) {
  const session = request.nextUrl.searchParams.get("session");

  const userData = await request.json();
  const { name, email } = userData;
  
  await connectDB();

  const updatedUserData = await User.findOneAndUpdate(
    { email: session },
    { name, email, new: true }
  );

  if(updatedUserData){
  console.log('updated user: ', updatedUserData);
  return NextResponse.json({updatedUserData}, {status:200});
  }else{
    console.log('error, usuario no encontrado', error)
    return NextResponse.json({error: "Usuario no encontrado"}, {status:404});
  }
}
