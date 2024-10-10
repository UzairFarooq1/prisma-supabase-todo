import { PrismaClient } from '@prisma/client';
import Image from 'next/image';

const prisma = PrismaClient();
export default async function Home() {
  const todos = await prisma.todo.findmany();

  return (
    <div className="">
      <h1>ToDo List</h1>
    </div>
  );
}
