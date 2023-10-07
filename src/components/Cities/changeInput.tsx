import { CityItem } from "./Cities";
import changeInputValue from "../../app/_actions";

export default async function GetCitiesByCountry(country) {
    
    const cities = await changeInputValue(country);
    console.log('Villes récupérées :', cities);
    return (
        <div>test</div>
        // <ul>
        // {cities
        //     ? cities.map(elem => (
        //         <li key={elem.id}><CityItem {...elem}/></li>
        //     ))
        //     : 
        //         <li>Aucune donnée</li>
        //       }
        // </ul>
    );
  }