import { CityItem } from "../../components/Cities";
import { getAllCitiesAction } from "../_actions";

export default async function AllCities() {
    const cities = await getAllCitiesAction();
    console.log('composant all ciities');

    return (
        <ul className="flex justify-center flex-wrap gap-2 max-w-xs min-w-full">
        {cities
            ? cities.map(elem => (
                <CityItem key={elem.id} {...elem}/>
            ))
            : 
                <p>Aucune donnée</p>
              }
        </ul>
    );
  }