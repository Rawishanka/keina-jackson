"use server";
import { revalidatePath } from "next/cache";
import { redirect } from "next/navigation";
import prisma from "@/prisma/client";
import { z } from "zod";
import { ReservationData } from "./definition";

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
export async function createProduct(formData:ReservationData) {
    const {name, email, status, message} = FormSchema.parse({
      name: formData.Name,
      email: formData.Email,
      status: formData.Status,
      message: formData.Message,
    });
    const reserversation = await prisma.data.create({
        data: {
          Name: name,
          Email:email,
          Status:status,
          Message:message
        },
      })
    revalidatePath("/");
    return true;
    // Test it out:
  }