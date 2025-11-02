/*
  Warnings:

  - Changed the type of `sport` on the `Team` table. No cast exists, the column would be dropped and recreated, which cannot be done if there is data, since the column is required.

*/
-- CreateEnum
CREATE TYPE "Sport" AS ENUM ('FOOT', 'BASKET', 'TENNIS');

-- AlterTable
ALTER TABLE "Team" DROP COLUMN "sport",
ADD COLUMN     "sport" "Sport" NOT NULL;
