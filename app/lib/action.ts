"use server";
import { revalidatePath } from "next/cache";
import { redirect } from "next/navigation";
import prisma from "@/prisma/client";
import { z } from "zod";
import { ReservationData } from "./definition";

const FormSchema = z.object({
  name: z.string(),
  phone: z.string(),
  status: z.enum([
    "Hindu",
    "Christian",
    "HinduChristian",
    "No"
  ]),
  guests:z.number(),
  message: z.string(),
});
export async function createProduct(formData:ReservationData) {
  const guestsCount = parseInt(formData.Guests.toString());
    const {name, phone, status,guests, message} = FormSchema.parse({
      name: formData.Name,
      phone: formData.Phone,
      status: formData.Status,
      guests:guestsCount,
      message: formData.Message,
    });
    const reserversation = await prisma.data.create({
        data: {
          Name: name,
          Phone:phone,
          Status:status,
          Guests:guests,
          Message:message
        },
      })
    revalidatePath("/");
    return true;
    // Test it out:
  }