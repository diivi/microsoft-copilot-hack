/*
  Warnings:

  - Added the required column `bank` to the `Card` table without a default value. This is not possible if the table is not empty.
  - Added the required column `cardNumber` to the `Card` table without a default value. This is not possible if the table is not empty.

*/
-- AlterTable
ALTER TABLE "Card" ADD COLUMN     "bank" TEXT NOT NULL,
ADD COLUMN     "cardNumber" TEXT NOT NULL;
