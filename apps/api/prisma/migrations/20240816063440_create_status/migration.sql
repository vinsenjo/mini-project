/*
  Warnings:

  - The values [festival] on the enum `Event_category` will be removed. If these variants are still used in the database, this will fail.
  - Added the required column `updatedAt` to the `Event` table without a default value. This is not possible if the table is not empty.
  - Added the required column `updatedAt` to the `Transaction` table without a default value. This is not possible if the table is not empty.

*/
-- AlterTable
ALTER TABLE `event` ADD COLUMN `updatedAt` DATETIME(3) NOT NULL,
    MODIFY `category` ENUM('music', 'anime', 'game', 'sport') NOT NULL;

-- AlterTable
ALTER TABLE `transaction` ADD COLUMN `status` ENUM('pending', 'waiting', 'confirm', 'paid', 'decline') NOT NULL DEFAULT 'pending',
    ADD COLUMN `updatedAt` DATETIME(3) NOT NULL;
