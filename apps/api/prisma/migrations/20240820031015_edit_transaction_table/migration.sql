/*
  Warnings:

  - You are about to drop the column `proof` on the `transaction` table. All the data in the column will be lost.
  - You are about to drop the column `totalPrice` on the `transaction` table. All the data in the column will be lost.
  - The values [waiting,confirm,decline] on the enum `Transaction_status` will be removed. If these variants are still used in the database, this will fail.
  - Added the required column `paymentLink` to the `Transaction` table without a default value. This is not possible if the table is not empty.
  - Added the required column `price` to the `Transaction` table without a default value. This is not possible if the table is not empty.

*/
-- AlterTable
ALTER TABLE `transaction` DROP COLUMN `proof`,
    DROP COLUMN `totalPrice`,
    ADD COLUMN `paymentLink` VARCHAR(191) NOT NULL,
    ADD COLUMN `price` DOUBLE NOT NULL,
    MODIFY `status` ENUM('pending', 'paid', 'cancel') NOT NULL DEFAULT 'pending';
