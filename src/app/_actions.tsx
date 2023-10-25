'use server'
import { prisma } from "../lib";

// export default async function changeInputValue(data: FormData | null | undefined){
//   if (!data) {
//     console.log('null');
//   } else if (data instanceof FormData) {
//     let inputval = data.get("inputValue")?.valueOf() as string;
//     // console.log('input val', inputval);
//     getCitiesByCountryAction(inputval);
//   } else {
//     console.log('data is not a valid FormData object');
//   }
// }

export async function getCitiesByCountryAction(countryNameSelected: string | null | undefined | object) {
  const allCitiesByCountry = await prisma.cityList.findMany({
    where: {
      countryName: countryNameSelected,
    }
  });
    // console.log('all cities selected', allCitiesByCountry)
    return allCitiesByCountry;
}

export async function getCityById(id: number) {
  const allCitiesByCountry = await prisma.cityList.findMany({
    where: {
      id: id,
    }
  });
    // console.log('all cities selected', allCitiesByCountry)
    return allCitiesByCountry;
}



export async function getAllCitiesAction() {
    const allCities = await prisma.cityList.findMany();
    return allCities;
}

export async function getOneTripAction(id: number) {
  const oneTrip = await prisma.itinerary.findMany({
    where: {
      cityId: id,
    },
    orderBy: [
      {
        typeName: 'asc', // Tri par typeName en ordre alphabétique ascendant
      },
      {
        activity: 'asc', // Ensuite, tri par activity en ordre alphabétique ascendant
      },
    ],
  });
  
  return oneTrip;
}