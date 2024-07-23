
import { NextResponse } from "next/server";
import {  PrismaClient } from "@prisma/client";
const prisma = new PrismaClient();
export async function POST(request){
    try {
        const data = await request.json();
        console.log(data);
        const { bgt_name, bgt_image } = data;
        const newType = await prisma.bg_type.create({
            data: {
                bgt_name,
                bgt_image
            }
        });
        return NextResponse.json(newType);
    } catch (error) {
        console.error("Error Creating type:",error);
        return NextResponse.error("Internal SerVer Error",500);
    }
}
export async function GET() {
    try {
        const types = await prisma.bg_type.findMany();
        return NextResponse.json(types);
    } catch (error) {
        console.error("Error Fetching types:", error);
        return NextResponse.json({ error: "Internal Server Error" }, { status: 500 });
    }
}




