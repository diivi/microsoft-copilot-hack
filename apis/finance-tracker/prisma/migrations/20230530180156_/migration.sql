/*
  Warnings:

  - You are about to drop the column `Cap` on the `Card` table. All the data in the column will be lost.
  - You are about to drop the column `Current_Spent` on the `Card` table. All the data in the column will be lost.
  - You are about to drop the column `user_id` on the `Card` table. All the data in the column will be lost.
  - You are about to drop the column `Date` on the `Transaction` table. All the data in the column will be lost.
  - You are about to drop the column `Source` on the `Transaction` table. All the data in the column will be lost.
  - You are about to drop the column `Tags` on the `Transaction` table. All the data in the column will be lost.
  - You are about to drop the column `card_id` on the `Transaction` table. All the data in the column will be lost.
  - You are about to drop the column `user_id` on the `Transaction` table. All the data in the column will be lost.
  - You are about to drop the column `Total_Spent` on the `User` table. All the data in the column will be lost.
  - Added the required column `cap` to the `Card` table without a default value. This is not possible if the table is not empty.
  - Added the required column `currentSpent` to the `Card` table without a default value. This is not possible if the table is not empty.
  - Added the required column `userId` to the `Card` table without a default value. This is not possible if the table is not empty.
  - Added the required column `cardId` to the `Transaction` table without a default value. This is not possible if the table is not empty.
  - Added the required column `date` to the `Transaction` table without a default value. This is not possible if the table is not empty.
  - Added the required column `source` to the `Transaction` table without a default value. This is not possible if the table is not empty.
  - Added the required column `userId` to the `Transaction` table without a default value. This is not possible if the table is not empty.

*/
-- DropForeignKey
ALTER TABLE "Card" DROP CONSTRAINT "Card_user_id_fkey";

-- DropForeignKey
ALTER TABLE "Transaction" DROP CONSTRAINT "Transaction_card_id_fkey";

-- DropForeignKey
ALTER TABLE "Transaction" DROP CONSTRAINT "Transaction_user_id_fkey";

-- AlterTable
ALTER TABLE "Card" DROP COLUMN "Cap",
DROP COLUMN "Current_Spent",
DROP COLUMN "user_id",
ADD COLUMN     "cap" DOUBLE PRECISION NOT NULL,
ADD COLUMN     "currentSpent" DOUBLE PRECISION NOT NULL,
ADD COLUMN     "userId" TEXT NOT NULL;

-- AlterTable
ALTER TABLE "Transaction" DROP COLUMN "Date",
DROP COLUMN "Source",
DROP COLUMN "Tags",
DROP COLUMN "card_id",
DROP COLUMN "user_id",
ADD COLUMN     "cardId" TEXT NOT NULL,
ADD COLUMN     "date" TIMESTAMP(3) NOT NULL,
ADD COLUMN     "source" TEXT NOT NULL,
ADD COLUMN     "tags" TEXT[],
ADD COLUMN     "userId" TEXT NOT NULL;

-- AlterTable
ALTER TABLE "User" DROP COLUMN "Total_Spent",
ADD COLUMN     "totalSpent" DOUBLE PRECISION;

-- AddForeignKey
ALTER TABLE "Card" ADD CONSTRAINT "Card_userId_fkey" FOREIGN KEY ("userId") REFERENCES "User"("id") ON DELETE RESTRICT ON UPDATE CASCADE;

-- AddForeignKey
ALTER TABLE "Transaction" ADD CONSTRAINT "Transaction_cardId_fkey" FOREIGN KEY ("cardId") REFERENCES "Card"("id") ON DELETE RESTRICT ON UPDATE CASCADE;

-- AddForeignKey
ALTER TABLE "Transaction" ADD CONSTRAINT "Transaction_userId_fkey" FOREIGN KEY ("userId") REFERENCES "User"("id") ON DELETE RESTRICT ON UPDATE CASCADE;
