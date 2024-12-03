"use server"; 

import { PrismaClient } from '@prisma/client';
import { revalidatePath } from 'next/cache';

export default async function AddTodo(formData: FormData) {
  const prisma = new PrismaClient();
  const title = formData.get('todo') as string;

  try {
    await prisma.todo.create({
      data: {
        title
      }
    });
    revalidatePath("/")
  } catch (error) {
    console.log(error);
  } 
}

