/*
  Warnings:

  - You are about to drop the `Reservation` table. If the table is not empty, all the data it contains will be lost.

*/
-- DropTable
DROP TABLE "Reservation";

-- CreateTable
CREATE TABLE "Data" (
    "Id" SERIAL NOT NULL,
    "Name" TEXT NOT NULL,
    "Email" TEXT NOT NULL,
    "Status" "Status" NOT NULL,
    "Message" TEXT NOT NULL DEFAULT ' ',

    CONSTRAINT "Data_pkey" PRIMARY KEY ("Id")
);
