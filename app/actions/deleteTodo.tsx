"use server";

import { PrismaClient } from '@prisma/client';
import { revalidatePath } from 'next/cache';

export default async function DeleteTodo(formData: FormData) {
  const prisma = new PrismaClient();
  const id = parseInt(formData.get('id') as string);

  try {
    await prisma.todo.delete({
      where: { id }
    });
    revalidatePath("/")
  } catch (error) {
    console.log(error);
  }
}
