'use server'
import { prisma } from "../lib";

export default async function changeInputValue(data: FormData){
    // get input value
    let inputval = data.get("inputValue")?.valueOf() as string;
    console.log('input val', inputval);
    
    if (!inputval || typeof inputval !== 'string') 
    return
    await getCitiesByCountry(inputval);
    
  }

export async function getCitiesByCountry(countryNameSelected: string) {
    const allCitiesByCountry = await prisma.cityList.findMany({
      where: {
        countryName: countryNameSelected,
      }
    });
    
    return allCitiesByCountry;
  }


export async function getAllCitiesAction() { 
    const allCities = await prisma.cityList.findMany();
    return allCities;
}