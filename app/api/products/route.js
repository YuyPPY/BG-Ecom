
import { NextResponse } from "next/server";
import { PrismaClient } from "@prisma/client";
const prisma = new PrismaClient();
export async function POST(request) {
    try {
        const data = await request.json();
        console.log(data);

        const {
            bgp_name,
            bgp_imageid,
            bgp_price,
            bgp_description,
            bgp_stock,
            bgp_status
        } = data;
        const priceAsInt = parseInt(bgp_price);
        const stockAsInt = parseInt(bgp_stock);
        const newProduct = await prisma.bg_product.create({
            data: {
                bgp_name,
                bgp_imageid,
                bgp_price:priceAsInt,
                bgp_description,
                bgp_stock:stockAsInt,
                bgp_status
            }
        });
        return NextResponse.json(newProduct);
    } catch (error) {
        console.error("Error Creating Product:", error);
        return NextResponse.error("Internal SerVer Error", 500);
    }
}
export async function GET() {
    try {
        const bg_product = await prisma.bg_product.findMany();
        return NextResponse.json(bg_product);
    } catch (error) {
        console.error("Error Fatching Products:", error);
        return NextResponse.error("Internal SerVer Error", 500);
    }
}




