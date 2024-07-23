import { PrismaClient } from "@prisma/client";
import { NextResponse } from "next/server";

const prisma = new PrismaClient();

export async function PUT(request, { params }) {
    try {
        const data = await request.json();
        console.log(data);
        const { bgt_name, bgt_image } = data;
        const id = parseInt(params.id);

        const updatedType = await prisma.bg_type.update({
            where: { id },
            data: {
                bgt_name,
                bgt_image
            }
        });
        return NextResponse.json(updatedType);
    } catch (error) {
        console.error("Error creating type:", error);
        return NextResponse.error("Internal SerVer Error", 500);
    }
}
export async function DELETE(request, { params }) {
    try {
        const id = parseInt(params.id);
        const deletedType = await prisma.bg_type.delete({ where: { id } });
        return NextResponse.json(deletedType);
    } catch (error) {
        console.error("Error Deleteing types:", error);
        return NextResponse.error("Internal SerVer Error", 500);
    }
}



