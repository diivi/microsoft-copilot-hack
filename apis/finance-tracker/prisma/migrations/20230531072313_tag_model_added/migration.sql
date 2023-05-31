/*
  Warnings:

  - You are about to drop the column `tags` on the `Transaction` table. All the data in the column will be lost.

*/
-- AlterTable
ALTER TABLE "Transaction" DROP COLUMN "tags";

-- CreateTable
CREATE TABLE "Tag" (
    "id" TEXT NOT NULL,
    "name" TEXT NOT NULL,
    "cap" DOUBLE PRECISION NOT NULL,

    CONSTRAINT "Tag_pkey" PRIMARY KEY ("id")
);

-- CreateTable
CREATE TABLE "_TagTransaction" (
    "A" TEXT NOT NULL,
    "B" TEXT NOT NULL
);

-- CreateIndex
CREATE UNIQUE INDEX "_TagTransaction_AB_unique" ON "_TagTransaction"("A", "B");

-- CreateIndex
CREATE INDEX "_TagTransaction_B_index" ON "_TagTransaction"("B");

-- AddForeignKey
ALTER TABLE "_TagTransaction" ADD CONSTRAINT "_TagTransaction_A_fkey" FOREIGN KEY ("A") REFERENCES "Tag"("id") ON DELETE CASCADE ON UPDATE CASCADE;

-- AddForeignKey
ALTER TABLE "_TagTransaction" ADD CONSTRAINT "_TagTransaction_B_fkey" FOREIGN KEY ("B") REFERENCES "Transaction"("id") ON DELETE CASCADE ON UPDATE CASCADE;
