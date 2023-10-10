'use server'
import { revalidatePath } from "next/cache";
import { prisma } from "../lib";

export default async function changeInputValue(data: FormData | null | undefined){
  if (!data) {
    console.log('null');
  } else if (data instanceof FormData) {
    let inputval = data.get("inputValue")?.valueOf() as string;
    // console.log('input val', inputval);
    getCitiesByCountryAction(inputval);
  } else {
    console.log('data is not a valid FormData object');
  }
}

export async function getCitiesByCountryAction(countryNameSelected: string |null | undefined | object) {
    const allCitiesByCountry = await prisma.cityList.findMany({
      where: {
        countryName: countryNameSelected,
      }
    });
    console.log('all cities selected', allCitiesByCountry)
    revalidatePath("/mytrip");
    return allCitiesByCountry;
  }


export async function getAllCitiesAction() {
    const allCities = await prisma.cityList.findMany();
    return allCities;
}