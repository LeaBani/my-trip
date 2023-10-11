import { revalidatePath } from "next/cache";
import GetCitiesByCountryResults from "./Results";

let inputVal : string;

async function changeInputValue(data: FormData | null | undefined){
  'use server'

  inputVal = data.get("inputValue")?.valueOf() as string;
  console.log('inputval', inputVal)
  // getCitiesByCountryAction(inputval);
  if (inputVal) {
    GetCitiesByCountry(inputVal);
  }
}

export default async function GetCitiesByCountry(value : any) {
  console.log('Valeur en dehors de la fonction :', value);

    return (

        <div>
            <div className="sm:col-span-3 mx-auto max-w-7xl px-6 lg:px-8">
              <label htmlFor="country" className="block text-sm font-medium leading-6 text-purple">
                Country
              </label>

              <div className="mt-2">

              <form 
                action={changeInputValue}
                className="flex mb-6">
                  
                <input
                placeholder='test'
                name="inputValue"
                type="text"
                className="block w-full rounded-md border-0 py-1.5 text-purple shadow-sm ring-1 ring-inset ring-purple focus:ring-2 focus:ring-inset focus:ring-midnight sm:max-w-xs sm:text-sm sm:leading-6"/>
                <button type="submit" className="flex-none rounded-md bg-purple px-3.5 py-2.5 text-sm font-semibold text-white shadow-sm hover:bg-midnight focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-purple">Rechercher</button>

                </form>

              </div>
            </div>

            <GetCitiesByCountryResults value={value} />

        </div>


    );
  }