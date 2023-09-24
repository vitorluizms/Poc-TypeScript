-- CreateTable
CREATE TABLE "User" (
    "id" SERIAL NOT NULL,
    "name" VARCHAR(60) NOT NULL,
    "email" VARCHAR(100) NOT NULL,
    "password" VARCHAR(255) NOT NULL,
    "createdAt" TIMESTAMP(3) NOT NULL DEFAULT CURRENT_TIMESTAMP,

    CONSTRAINT "User_pkey" PRIMARY KEY ("id")
);

-- CreateTable
CREATE TABLE "gender" (
    "id" SERIAL NOT NULL,
    "name" VARCHAR(30) NOT NULL,

    CONSTRAINT "gender_pkey" PRIMARY KEY ("id")
);

-- CreateTable
CREATE TABLE "anime" (
    "id" SERIAL NOT NULL,
    "name" VARCHAR(100) NOT NULL,
    "genderId" INTEGER NOT NULL,
    "episodes" INTEGER NOT NULL,
    "seasons" INTEGER NOT NULL,

    CONSTRAINT "anime_pkey" PRIMARY KEY ("id")
);

-- CreateTable
CREATE TABLE "wish" (
    "id" SERIAL NOT NULL,
    "userId" INTEGER NOT NULL,
    "animeId" INTEGER NOT NULL,
    "createdAt" TIMESTAMP(3) NOT NULL DEFAULT CURRENT_TIMESTAMP,

    CONSTRAINT "wish_pkey" PRIMARY KEY ("id")
);

-- AddForeignKey
ALTER TABLE "anime" ADD CONSTRAINT "anime_genderId_fkey" FOREIGN KEY ("genderId") REFERENCES "gender"("id") ON DELETE RESTRICT ON UPDATE CASCADE;

-- AddForeignKey
ALTER TABLE "wish" ADD CONSTRAINT "wish_userId_fkey" FOREIGN KEY ("userId") REFERENCES "User"("id") ON DELETE RESTRICT ON UPDATE CASCADE;

-- AddForeignKey
ALTER TABLE "wish" ADD CONSTRAINT "wish_animeId_fkey" FOREIGN KEY ("animeId") REFERENCES "anime"("id") ON DELETE RESTRICT ON UPDATE CASCADE;
