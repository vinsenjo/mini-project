/*
  Warnings:

  - A unique constraint covering the columns `[eventId]` on the table `Promotion` will be added. If there are existing duplicate values, this will fail.

*/
-- AlterTable
ALTER TABLE `eo` ADD COLUMN `role` ENUM('eventorganizer', 'user') NOT NULL DEFAULT 'eventorganizer';

-- AlterTable
ALTER TABLE `event` MODIFY `description` VARCHAR(191) NOT NULL DEFAULT '',
    MODIFY `price` DOUBLE NOT NULL DEFAULT 0,
    MODIFY `location` VARCHAR(191) NOT NULL DEFAULT '',
    MODIFY `image` VARCHAR(191) NULL,
    MODIFY `seats` INTEGER NOT NULL DEFAULT 0;

-- AlterTable
ALTER TABLE `transaction` MODIFY `totalDiscount` DOUBLE NOT NULL DEFAULT 0;

-- AlterTable
ALTER TABLE `user` ADD COLUMN `role` ENUM('eventorganizer', 'user') NOT NULL DEFAULT 'user';

-- CreateIndex
CREATE UNIQUE INDEX `Promotion_eventId_key` ON `Promotion`(`eventId`);
