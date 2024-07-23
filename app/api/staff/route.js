import { NextResponse } from "next/server";
import { PrismaClient } from "@prisma/client";

const prisma = new PrismaClient();

export async function POST(request) {
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
            rolename,
            password,
            status,
        } = data;

        // Search for an existing role with the provided criteria
        let role = await prisma.bg_role.findFirst({
            where: {
                role_name: rolename,
                password: password,
                status: status,
            },
        });

        // Log the result of the role search
        console.log("Role found:", role);

        // If the role does not exist, create a new one
        if (!role) {
            role = await prisma.bg_role.create({
                data: {
                    role_name: rolename,
                    password: password,
                    status: status,
                },
            });
            console.log("Created new role:", role);
        } else {
            console.log("Role found or created:", role);
        }

        // Check if role is still null
        if (!role) {
            throw new Error("Role could not be found or created.");
        }

        // Create a new employee and assign the role
        const newStaff = await prisma.bg_employee.create({
            data: {
                emp_fname,
                emp_lname,
                emp_gender,
                emp_village,
                emp_district,
                emp_provine,
                emp_tel,
                emp_image,
                emp_rolesId: role.id, // Use the role's id
            },
        });

        return NextResponse.json(newStaff);
    } catch (error) {
        console.error("Error Creating Roles:", error);
        return NextResponse.json({ error: "Internal Server Error" }, { status: 500 });
    }
}



export async function GET() {
    try {
        const staff = await prisma.bg_employee.findMany();
        return NextResponse.json(staff);
    } catch (error) {
        console.error("Error Fatching staff:", error);
        return NextResponse.error("Internal Server Error", 500);
    }
}




