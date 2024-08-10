/*
  Warnings:

  - You are about to drop the column `updatedAt` on the `eo` table. All the data in the column will be lost.
  - You are about to drop the column `updatedAt` on the `event` table. All the data in the column will be lost.
  - You are about to drop the column `updatedAt` on the `transaction` table. All the data in the column will be lost.
  - You are about to drop the column `updatedAt` on the `user` table. All the data in the column will be lost.

*/
-- AlterTable
ALTER TABLE `eo` DROP COLUMN `updatedAt`;

-- AlterTable
ALTER TABLE `event` DROP COLUMN `updatedAt`;

-- AlterTable
ALTER TABLE `transaction` DROP COLUMN `updatedAt`;

-- AlterTable
ALTER TABLE `user` DROP COLUMN `updatedAt`;
