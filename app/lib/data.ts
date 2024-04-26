import prisma from "@/prisma/client";
import { unstable_noStore as noStore } from 'next/cache';

export async function fetchData(){
    noStore();
    const data = await prisma.data.findMany({
      select:{
        Id:true,
        Name:true,
        Phone:true,
        Status:true,
        Guests:true,
        Message:true
      },
      orderBy:{
        Id: 'asc',
      },
    });
    return data;
  }


