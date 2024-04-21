"use server";
import { revalidatePath } from "next/cache";
import { redirect } from "next/navigation";
import prisma from "@/prisma/client";
import { z } from "zod";

const FormSchema = z.object({
  name: z.string(),
  email: z.string(),
  status: z.enum([
    "Hindu",
    "Christian",
    "HinduChristian",
    "No"
  ]),
  message: z.string(),
});
export async function createProduct(formData:FormData) {
    const {name, email, status, message} = FormSchema.parse({
      name: formData.get("name"),
      email: formData.get("email"),
      status: formData.get("ceremony"),
      message: formData.get("message"),
    });
    const reserversation = await prisma.data.create({
        data: {
          Name: name,
          Email:email,
          Status:status,
          Message:message
        },
      })
    revalidatePath("/home");
    redirect("/");
    // Test it out:
  }