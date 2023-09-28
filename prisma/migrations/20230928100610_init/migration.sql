-- CreateTable
CREATE TABLE "CountryList" (
    "id" SERIAL NOT NULL,
    "countryName" TEXT NOT NULL,
    "createdAt" TIMESTAMP(3) NOT NULL DEFAULT CURRENT_TIMESTAMP,
    "updatedAt" TIMESTAMP(3) NOT NULL,

    CONSTRAINT "CountryList_pkey" PRIMARY KEY ("id")
);

-- CreateTable
CREATE TABLE "CityList" (
    "id" SERIAL NOT NULL,
    "countryName" TEXT NOT NULL,
    "cityName" TEXT NOT NULL,
    "description" TEXT,
    "monthName" TEXT NOT NULL,
    "durationName" TEXT NOT NULL,
    "picture" TEXT,
    "createdAt" TIMESTAMP(3) NOT NULL DEFAULT CURRENT_TIMESTAMP,
    "updatedAt" TIMESTAMP(3) NOT NULL,

    CONSTRAINT "CityList_pkey" PRIMARY KEY ("id")
);

-- CreateTable
CREATE TABLE "Duration" (
    "id" SERIAL NOT NULL,
    "durationName" TEXT NOT NULL,
    "createdAt" TIMESTAMP(3) NOT NULL DEFAULT CURRENT_TIMESTAMP,
    "updatedAt" TIMESTAMP(3) NOT NULL,

    CONSTRAINT "Duration_pkey" PRIMARY KEY ("id")
);

-- CreateTable
CREATE TABLE "MonthList" (
    "id" SERIAL NOT NULL,
    "monthName" TEXT NOT NULL,
    "createdAt" TIMESTAMP(3) NOT NULL DEFAULT CURRENT_TIMESTAMP,
    "updatedAt" TIMESTAMP(3) NOT NULL,

    CONSTRAINT "MonthList_pkey" PRIMARY KEY ("id")
);

-- CreateTable
CREATE TABLE "Itinerary" (
    "id" SERIAL NOT NULL,
    "cityId" INTEGER NOT NULL,
    "typeName" TEXT NOT NULL,
    "activity" TEXT,
    "duration" TEXT,
    "price" INTEGER,
    "priceConverted" INTEGER,
    "link" TEXT,
    "gallery" TEXT,
    "numberOfPersons" INTEGER,
    "createdAt" TIMESTAMP(3) NOT NULL DEFAULT CURRENT_TIMESTAMP,
    "updatedAt" TIMESTAMP(3) NOT NULL,

    CONSTRAINT "Itinerary_pkey" PRIMARY KEY ("id")
);

-- CreateTable
CREATE TABLE "TypeOfItinerary" (
    "id" SERIAL NOT NULL,
    "typeName" TEXT NOT NULL,
    "createdAt" TIMESTAMP(3) NOT NULL DEFAULT CURRENT_TIMESTAMP,
    "updatedAt" TIMESTAMP(3) NOT NULL,

    CONSTRAINT "TypeOfItinerary_pkey" PRIMARY KEY ("id")
);

-- CreateIndex
CREATE UNIQUE INDEX "CountryList_countryName_key" ON "CountryList"("countryName");

-- CreateIndex
CREATE UNIQUE INDEX "Duration_durationName_key" ON "Duration"("durationName");

-- CreateIndex
CREATE UNIQUE INDEX "MonthList_monthName_key" ON "MonthList"("monthName");

-- CreateIndex
CREATE UNIQUE INDEX "TypeOfItinerary_typeName_key" ON "TypeOfItinerary"("typeName");

-- AddForeignKey
ALTER TABLE "CityList" ADD CONSTRAINT "CityList_countryName_fkey" FOREIGN KEY ("countryName") REFERENCES "CountryList"("countryName") ON DELETE RESTRICT ON UPDATE CASCADE;

-- AddForeignKey
ALTER TABLE "CityList" ADD CONSTRAINT "CityList_monthName_fkey" FOREIGN KEY ("monthName") REFERENCES "MonthList"("monthName") ON DELETE RESTRICT ON UPDATE CASCADE;

-- AddForeignKey
ALTER TABLE "CityList" ADD CONSTRAINT "CityList_durationName_fkey" FOREIGN KEY ("durationName") REFERENCES "Duration"("durationName") ON DELETE RESTRICT ON UPDATE CASCADE;

-- AddForeignKey
ALTER TABLE "Itinerary" ADD CONSTRAINT "Itinerary_cityId_fkey" FOREIGN KEY ("cityId") REFERENCES "CityList"("id") ON DELETE RESTRICT ON UPDATE CASCADE;

-- AddForeignKey
ALTER TABLE "Itinerary" ADD CONSTRAINT "Itinerary_typeName_fkey" FOREIGN KEY ("typeName") REFERENCES "TypeOfItinerary"("typeName") ON DELETE RESTRICT ON UPDATE CASCADE;
