import { PrismaClient } from "@prisma/client";
import { NextResponse } from "next/server";

const prisma = new PrismaClient();

export async function PUT(request, { params }) {
    try {
        const data = await request.json();
        console.log(data);
        const {
            role_name,
            password,
            ower_name,
            status

        } = data;
        const id = parseInt(params.id);

        const upDateRoles = await prisma.bg_role.update({
            where: { id },
            data: {
                role_name,
                password,
                ower_name,
                status

            }
        });
        return NextResponse.json(upDateRoles);
    } catch (error) {
        console.error("Error creating Roles:", error);
        return NextResponse.error("Internal Server Error", 500);
    }
}

// export async function PATCH(request, { params }) {
//     try {
//       const data = await request.json();
//       const {role_id, newrole} = body;
//       if (!role_id || !newrole) {
//         return new NextResponse(
//             JSON.stringify({message:"ID or New role are reuired"}),
//             {
//                 status: 400,
//             }
//         )
//       }


//       const id = parseInt(params.id);
//       if (data.role_name) updateData.role_name = data.role_name;
//       if (data.password) updateData.password = data.password;
//       if (data.ower_name) updateData.ower_name = data.ower_name;
//       if (data.status) updateData.status = data.status;
  
//       const updatedRole = await prisma.bg_role.update({
//         where: { id },
//         data: updateData,
//       });
  
//       return NextResponse.json(updatedRole);
//     } catch (error) {
//       console.error("Error patching Roles:", error);
//       return NextResponse.error("Internal Server Error", 500);
//     }
//   }


export async function DELETE( request,{ params }) {
    try {
        const id = parseInt(params.id);
        const deletedRoles = await prisma.bg_role.delete({ where: { id } });
        return NextResponse.json(deletedRoles);
    } catch (error) {
        console.error("Error Deleteing Roles:", error);
        return NextResponse.error("Internal Server Error", 500);
    }
}



