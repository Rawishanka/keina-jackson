-- CreateEnum
CREATE TYPE "Status" AS ENUM ('Hindu', 'Christian', 'HinduChristian', 'No');

-- CreateTable
CREATE TABLE "Reservation" (
    "Id" SERIAL NOT NULL,
    "Name" TEXT NOT NULL,
    "Email" TEXT NOT NULL,
    "Status" "Status" NOT NULL,
    "Message" TEXT NOT NULL DEFAULT ' ',

    CONSTRAINT "Reservation_pkey" PRIMARY KEY ("Id")
);
