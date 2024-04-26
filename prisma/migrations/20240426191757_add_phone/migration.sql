/*
  Warnings:

  - You are about to drop the column `Email` on the `Data` table. All the data in the column will be lost.
  - Added the required column `Guests` to the `Data` table without a default value. This is not possible if the table is not empty.
  - Added the required column `Phone` to the `Data` table without a default value. This is not possible if the table is not empty.

*/
-- AlterTable
ALTER TABLE "Data" DROP COLUMN "Email",
ADD COLUMN     "Guests" INTEGER NOT NULL,
ADD COLUMN     "Phone" TEXT NOT NULL;
