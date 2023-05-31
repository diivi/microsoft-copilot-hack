/*
  Warnings:

  - Changed the type of `cardNumber` on the `Card` table. No cast exists, the column would be dropped and recreated, which cannot be done if there is data, since the column is required.

*/
-- AlterTable
ALTER TABLE "Card" DROP COLUMN "cardNumber",
ADD COLUMN     "cardNumber" INTEGER NOT NULL;
