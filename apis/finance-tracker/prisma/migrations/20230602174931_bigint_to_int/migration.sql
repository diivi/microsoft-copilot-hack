/*
  Warnings:

  - You are about to alter the column `cardNumber` on the `Card` table. The data in that column could be lost. The data in that column will be cast from `BigInt` to `Integer`.

*/
-- AlterTable
ALTER TABLE "Card" ALTER COLUMN "cardNumber" SET DATA TYPE INTEGER;
