import { PrismaClient } from "@prisma/client";
import { NextResponse } from "next/server";

const prisma = new PrismaClient();

export async function PUT(request, { params }) {
    try {
        const data = await request.json();
        console.log(data);
        const {
            emp_fname,
            emp_lname,
            emp_gender,
            emp_village,
            emp_district,
            emp_provine,
            emp_image,
            emp_tel,
        } = data;
        const id = parseInt(params.id);

        const upDateStaff = await prisma.bg_employee.update({
            where: { id },
            data: {
                emp_fname,
                emp_lname,
                emp_gender,
                emp_village,
                emp_district,
                emp_provine,
                emp_image,
                emp_tel,
            }
        });
        return NextResponse.json(upDateStaff);
    } catch (error) {
        console.error("Error creating Staff:", error);
        return NextResponse.error("Internal Server Error", 500);
    }
}

export async function PATCH(request, { params }) {
    try {
        const data = await request.json();
        console.log("Received data:", data);

        const {
            emp_fname,
            emp_lname,
            emp_gender,
            emp_village,
            emp_district,
            emp_provine,
            emp_image,
            emp_tel,
        } = data;

        const id = parseInt(params.id);

        // Perform a partial update on the employee record
        const updatedStaff = await prisma.bg_employee.update({
            where: { id },
            data: {
                ...(emp_fname && { emp_fname }),
                ...(emp_lname && { emp_lname }),
                ...(emp_gender && { emp_gender }),
                ...(emp_village && { emp_village }),
                ...(emp_district && { emp_district }),
                ...(emp_provine && { emp_provine }),
                ...(emp_image && { emp_image }),
                ...(emp_tel && { emp_tel }),
            }
        });

        return NextResponse.json(updatedStaff);
    } catch (error) {
        console.error("Error updating Staff:", error);
        return NextResponse.json({ error: "Internal Server Error" }, { status: 500 });
    }
}



export async function DELETE(request, { params }) {
    try {
        const id = parseInt(params.id);
        const deletedemployee = await prisma.bg_employee.delete({ where: { id } });
        return NextResponse.json(deletedemployee);
    } catch (error) {
        console.error("Error Deleteing employee:", error);
        return NextResponse.error("Internal Server Error", 500);
    }
}



