import React from "react";
import { CityItem } from "../../components/Cities/Cities";
import { prisma } from "../../lib";

/**
 * This function gets all avaiable Cities of our database
 * @returns the data from the cityList table from Prisma
 */
function getAllCities() { 
  return prisma.cityList.findMany();
}

async function MyTripList() {

  const allCities = await getAllCities();  

    return (
      <main>
         <div className="bg-white py-24 sm:py-32">
      <div className="mx-auto max-w-7xl px-6 lg:px-8">
        <div className="mx-auto max-w-2xl lg:mx-0">
          <h2 className="text-3xl font-bold tracking-tight text-purple sm:text-4xl">Les villes visitées</h2>
          <p className="mt-2 text-lg leading-8 text-purple">
            Ici, tu trouveras la liste des toutes les villes visitée à...
          </p>
        </div>

        <ul className="mx-auto mt-10 grid max-w-2xl grid-cols-1 gap-x-8 gap-y-16 border-t border-purple pt-10 sm:mt-16 sm:pt-16 lg:mx-0 lg:max-w-none lg:grid-cols-3">
          {allCities.map(city => (
            <CityItem key={city.id} {...city}/>))}
        </ul>
        </div>
        </div>
      </main>
    )
  }

  export default MyTripList;
  