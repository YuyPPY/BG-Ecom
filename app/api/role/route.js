
import { NextResponse } from "next/server";
import { PrismaClient } from "@prisma/client";
const prisma = new PrismaClient();
export async function POST(request) {
    try {
        const data = await request.json();
        console.log(data);
        const {
            role_name,
            password,
            ower_name,
            status

        } = data;
        const newRoles = await prisma.bg_role.create({
            data: {
                role_name,
                password,
                ower_name,
                status
            }
        });
        return NextResponse.json(newRoles);

    } catch (error) {
        console.error("Error Creating Roles:", error);
        return NextResponse.error("Internal Server Error", 500);
    }
}
export async function GET() {
    try {
        const bg_role = await prisma.bg_role.findMany();
        return NextResponse.json(bg_role);
    } catch (error) {
        console.error("Error Fatching Roles:", error);
        return NextResponse.error("Internal Server Error", 500);
    }
}




