'use server';
import { PrismaClient } from '@prisma/client';
import { revalidatePath } from 'next/cache';

const prisma = new PrismaClient();

export default async function addTodo(formData) {
  let title = formData.get('title');
  try {
    await prisma.todo.create({
      data: {
        title,
      },
    });
    revalidatePath('/');
    // document.getElementById('title').value = '';
    // return { message: 'Todo added successfully' };
  } catch (e) {
    console.error(e);
  }
}
