import { getCitiesByCountryAction } from "../_actions";
import { CityItem } from "../../components/Cities";

export default async function GetCitiesByCountryResults({value}) {
    // console.log('input val in results', value)
    const cities = await getCitiesByCountryAction(value);
    // console.log('result', cities)
    // console.log('result', value)
    


    return (

        <ul className="flex justify-center"> 
        {cities
            ? cities.map(elem => (
                <CityItem key={elem.id} {...elem}/>
            ))
            : 
                <li>Aucune donnée</li>
              }
        </ul>


    );
  }