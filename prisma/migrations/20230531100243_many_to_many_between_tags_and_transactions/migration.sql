/*
  Warnings:

  - You are about to drop the `_TagTransaction` table. If the table is not empty, all the data it contains will be lost.

*/
-- DropForeignKey
ALTER TABLE "_TagTransaction" DROP CONSTRAINT "_TagTransaction_A_fkey";

-- DropForeignKey
ALTER TABLE "_TagTransaction" DROP CONSTRAINT "_TagTransaction_B_fkey";

-- DropTable
DROP TABLE "_TagTransaction";

-- CreateTable
CREATE TABLE "TransactionsOnTags" (
    "tagId" TEXT NOT NULL,
    "transactionId" TEXT NOT NULL,

    CONSTRAINT "TransactionsOnTags_pkey" PRIMARY KEY ("tagId","transactionId")
);

-- AddForeignKey
ALTER TABLE "TransactionsOnTags" ADD CONSTRAINT "TransactionsOnTags_tagId_fkey" FOREIGN KEY ("tagId") REFERENCES "Tag"("id") ON DELETE RESTRICT ON UPDATE CASCADE;

-- AddForeignKey
ALTER TABLE "TransactionsOnTags" ADD CONSTRAINT "TransactionsOnTags_transactionId_fkey" FOREIGN KEY ("transactionId") REFERENCES "Transaction"("id") ON DELETE RESTRICT ON UPDATE CASCADE;
