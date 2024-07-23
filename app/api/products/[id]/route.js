import { PrismaClient } from "@prisma/client";
import { NextResponse } from "next/server";

const prisma = new PrismaClient();

export async function PUT(request, { params }) {
    try {
        const data = await request.json();
        console.log(data);
        // const priceAsInt = parseInt(bgp_price);
        // const stockAsInt = parseInt(bgp_stock);
        const {
            bgp_name,
            bgp_imageid,
            bgp_price,
            bgp_description,
            bgp_stock,
         
        } = data;
        const id = parseInt(params.id);

        const updatedProducts = await prisma.bg_product.update({
            where: { id },
            data: {
                bgp_name,
                bgp_imageid,
                bgp_price,
                bgp_description,
                bgp_stock,
             
            }
        });
        return NextResponse.json(updatedProducts);
    } catch (error) {
        console.error("Error creating Products:", error);
        return NextResponse.error("Internal SerVer Error", 500);
    }
}
export async function DELETE(request, { params }) {
    try {
        const id = parseInt(params.id);
        const deletedProducts = await prisma.bg_product.delete({ where: { id } });
        return NextResponse.json(deletedProducts);
    } catch (error) {
        console.error("Error Deleteing Products:", error);
        return NextResponse.error("Internal SerVer Error", 500);
    }
}



