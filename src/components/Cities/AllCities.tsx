import { CityItem } from "./Cities";
import { getAllCitiesAction } from "../../app/_actions";

export default async function GetAllCities() {
    const cities = await getAllCitiesAction();
    // console.log('Villes récupérées :', cities);
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