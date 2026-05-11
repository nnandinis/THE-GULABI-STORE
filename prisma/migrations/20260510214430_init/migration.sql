-- AlterTable
ALTER TABLE "Product" ADD COLUMN     "artisanId" UUID;

-- CreateTable
CREATE TABLE "Artisan" (
    "id" UUID NOT NULL DEFAULT gen_random_uuid(),
    "name" TEXT NOT NULL,
    "craft" TEXT NOT NULL,
    "bio" TEXT NOT NULL,
    "location" TEXT NOT NULL,
    "profileImage" TEXT NOT NULL,
    "portfolioImages" TEXT[],
    "phone" TEXT,
    "email" TEXT,
    "instagramHandle" TEXT,
    "yearsOfExperience" INTEGER NOT NULL,
    "isFeatured" BOOLEAN NOT NULL DEFAULT false,
    "createdAt" TIMESTAMP(6) NOT NULL DEFAULT CURRENT_TIMESTAMP,

    CONSTRAINT "Artisan_pkey" PRIMARY KEY ("id")
);

-- AddForeignKey
ALTER TABLE "Product" ADD CONSTRAINT "Product_artisanId_fkey" FOREIGN KEY ("artisanId") REFERENCES "Artisan"("id") ON DELETE SET NULL ON UPDATE CASCADE;
