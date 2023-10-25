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
    console.log('input val')
  }
}

export default async function GetCitiesByCountry(value : any) {
  console.log('Valeur en dehors de la fonction :', value);

    return (

        <div className="border-t border-light pt-10 sm:mt-16 sm:pt-16 lg:mx-0 lg:max-w-none">
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
                <button type="submit" className="text-secondary text-[10px] font-medium w-[67px] h-7 bg-light rounded-[40px] border border-secondary">Rechercher</button>

                </form>

              </div>
            </div>

            <GetCitiesByCountryResults value={value} />

        </div>


    );
  }