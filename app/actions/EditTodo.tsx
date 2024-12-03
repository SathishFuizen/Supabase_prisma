// 'use server'
// import {  PrismaClient } from "@prisma/client";
// import { revalidatePath } from "next/cache";

// export default async function EditTodo(formData:FormData){
//     const prisma=new PrismaClient();

//     const id=  parseInt(formData.get('id') as string);
//     const title=formData.get('todo') as string;
//     try{
//         await prisma.todo.update({
//             where:{id},
//             data:{title}
//         })
//         revalidatePath('/')
//     }catch(error){
//         console.log(error)
//     }
// }




'use server'
import { PrismaClient } from "@prisma/client";
import { revalidatePath } from "next/cache";

export default async function EditTodo(formData: FormData) {
  const prisma = new PrismaClient();

  const id = parseInt(formData.get('id') as string);
  const title = formData.get('todo') as string;
  const action = formData.get('action') as string; // Get the action (edit/save)

  try {
    if (action === "edit") {
      // Set isEditable to true (you could implement a different approach if needed)
      await prisma.todo.update({
        where: { id },
        data: { isEditable: true },
      });
    } else if (action === "save") {
      // Update the title and set isEditable back to false
      await prisma.todo.update({
        where: { id },
        data: {
          title,
          isEditable: false,  // Reset isEditable after saving
        },
      });
    }

    revalidatePath('/'); // Revalidate the home path to reflect changes
  } catch (error) {
    console.log(error);
  }
}
