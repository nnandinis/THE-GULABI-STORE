-- AlterTable
ALTER TABLE "User" ADD COLUMN     "city" TEXT,
ADD COLUMN     "craftInterests" TEXT[] DEFAULT ARRAY[]::TEXT[],
ADD COLUMN     "dateOfBirth" DATE,
ADD COLUMN     "gender" TEXT,
ADD COLUMN     "phone" TEXT;
