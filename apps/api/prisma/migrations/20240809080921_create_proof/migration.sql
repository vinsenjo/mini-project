/*
  Warnings:

  - Added the required column `category` to the `Event` table without a default value. This is not possible if the table is not empty.
  - Added the required column `proof` to the `Transaction` table without a default value. This is not possible if the table is not empty.

*/
-- AlterTable
ALTER TABLE `event` ADD COLUMN `category` ENUM('music', 'anime', 'game', 'festival') NOT NULL;

-- AlterTable
ALTER TABLE `transaction` ADD COLUMN `proof` VARCHAR(191) NOT NULL;

-- AlterTable
ALTER TABLE `user` MODIFY `point` INTEGER NOT NULL DEFAULT 0;
