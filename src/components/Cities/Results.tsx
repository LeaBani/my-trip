import { getCitiesByCountryAction } from "../../app/_actions";
import { CityItem } from "./Cities";

export default async function GetCitiesByCountryResults(countryNameSelected : string|null | undefined | object) {
   const cities = await getCitiesByCountryAction(countryNameSelected)
   // console.log('result', cities)

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