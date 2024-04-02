import { connectDB } from "@/libs/connectionDB";
import SubjectsM from "@/models/SubjectsM";
import { NextResponse, NextRequest } from "next/server";

export async function GET(request, { params }){
    try {
        const { id } = params;
        await connectDB();
        const detailData = await SubjectsM.findOne({ _id: id });
        return NextResponse.json({ detailData }, { status: 200 });
    } catch (error) {
        console.log( error)
    }    
  }
  