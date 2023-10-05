import React from "react";
import { prisma } from "../../lib";
import { CityItem } from "../../components/Cities/Cities";
import { CityItemProps } from "../../components/Cities/Cities";
import { useEffect } from "react";
import changeInputValue from "../_actions";
import GetAllCities from "../../components/Cities/AllCities";


  
function MyTripList(allCitiesByCountry : Array<CityItemProps> = [], cities) {
    
  console.log('all cities by country', allCitiesByCountry)
  console.log(Array.isArray(allCitiesByCountry))
  
    return (
      <main>
            
        <div className="bg-white py-24 sm:py-32">
          <div className="sm:col-span-3 mx-auto max-w-7xl px-6 lg:px-8">
              <label htmlFor="country" className="block text-sm font-medium leading-6 text-purple">
                Country
              </label>
              <div className="mt-2">

              <form action={changeInputValue}>
                <input
                placeholder='test'
                name="inputValue"
                type="text"
                className="block w-full rounded-md border-0 py-1.5 text-purple shadow-sm ring-1 ring-inset ring-purple focus:ring-2 focus:ring-inset focus:ring-midnight sm:max-w-xs sm:text-sm sm:leading-6"/>
                <button type="submit" className="text-purple">Rechercher</button>

                </form>

              </div>
            </div>


      <div className="mx-auto max-w-7xl px-6 lg:px-8">
        <div className="mx-auto max-w-2xl lg:mx-0">
          <h2 className="text-3xl font-bold tracking-tight text-purple sm:text-4xl">Les villes visitées</h2>
          <p className="mt-2 text-lg leading-8 text-purple">
            Ici, tu trouveras la liste des toutes les villes visitée à...
          </p>
        </div>

        {/* <ul className="mx-auto mt-10 grid max-w-2xl grid-cols-1 gap-x-8 gap-y-16 border-t border-purple pt-10 sm:mt-16 sm:pt-16 lg:mx-0 lg:max-w-none lg:grid-cols-3"> */}
        <ul className="text-purple">

          <GetAllCities/>



        </ul>

        </div>
        </div>
      </main>
    )
  }

  export default MyTripList;
  