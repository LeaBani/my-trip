import { CityItem } from "./Cities";
import { getCitiesByCountryAction } from "../../app/_actions";
import changeInputValue from "../../app/_actions";


export default async function GetCitiesByCountry(data: FormData) {
    
    const country = await changeInputValue(data)
    const cities = await getCitiesByCountryAction(country);
    console.log('Villes récupérées :', cities);
    return (
        <ul>
        {cities
            ? cities.map(elem => (
                <li key={elem.id}><CityItem {...elem}/></li>
            ))
            : 
                <li>Aucune donnée</li>
              }
        </ul>
    );
  }