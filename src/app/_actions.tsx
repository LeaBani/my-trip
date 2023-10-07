'use server'
import { prisma } from "../lib";

export default async function changeInputValue(data: FormData | null | undefined){
  if (!data) {
    console.log('null');
    return <div>TEST NULL</div>;
  } else if (data instanceof FormData) {
    let inputval = data.get("inputValue")?.valueOf() as string;
    console.log('input val', inputval);
    getCitiesByCountryAction(inputval);
  } else {
    console.log('data is not a valid FormData object');
  }
}

export async function getCitiesByCountryAction(countryNameSelected: string) {
    const allCitiesByCountry = await prisma.cityList.findMany({
      where: {
        countryName: countryNameSelected,
      }
    });
    console.log('test', allCitiesByCountry)
    return allCitiesByCountry;
  }


export async function getAllCitiesAction() {
    const allCities = await prisma.cityList.findMany();
    return allCities;
}