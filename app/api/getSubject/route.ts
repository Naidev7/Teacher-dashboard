import { connectDB } from "@/app/libs/connectionDB";
import SubjectsM from "@/models/SubjectsM";
import { NextResponse, NextRequest } from "next/server";


export async function GET() {

    try {
      await connectDB();
        const res = await SubjectsM.find();
        console.log('res: ', res);


        if(res){
            return NextResponse.json({ success: true, data: res});
        } else{
            return NextResponse.json({ success: false})
        };

    } catch (error) {
      console.log("error during creation subject: ", error);
    }
  }
  