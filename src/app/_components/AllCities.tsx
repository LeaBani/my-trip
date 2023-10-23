import { CityItem } from "../../components/Cities";
import { getAllCitiesAction } from "../_actions";

export default async function GetAllCities() {
    const cities = await getAllCitiesAction();
    console.log('composant all ciities');
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