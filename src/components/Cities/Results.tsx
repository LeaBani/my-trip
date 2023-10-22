import { getCitiesByCountryAction } from "../../app/_actions";
import { CityItem } from "./Cities";

export default async function GetCitiesByCountryResults({value}) {
    // console.log('input val in results', value)
    const cities = await getCitiesByCountryAction(value);
    // console.log('result', cities)
    // console.log('result', value)
    


    return (

        <ul className="flex"> 
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