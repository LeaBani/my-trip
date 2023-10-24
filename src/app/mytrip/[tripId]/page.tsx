import React from "react";
import { getCityById, getOneTripAction } from "../../_actions";
import GetCitiesByCountry from "../../_components/ChangeInput";
import { CityItem } from "../../../components/Cities";

async function OneTrip({
  params,
  searchParams,
}: {
  params: { tripId: string }
  searchParams: { [key: string]: string | string[] | undefined }
}) {
  
  
  const paramsId = Number(params.tripId)
  // console.log('page id', paramsId)
  const oneTrip = await getOneTripAction(paramsId);
  // console.log('one trip', oneTrip)

  const cityInfos = await getCityById(paramsId);
  // console.log('cityInfos', cityInfos)

    return (
      <main>

       {cityInfos.map(elem => (
                <li key={elem.id}><CityItem {...elem}/></li>))}

       {/* <div>{JSON.stringify(searchParams)}</div> */}
        
       <div className="container mx-auto p-6">
    <table className="min-w-full">
      <thead>
        <tr>
          <th className="border p-2 ">Moyen de transport</th>
          <th className="border p-2">Activitée</th>
          <th className="border p-2">Durée</th>
          <th className="border p-2">Prix</th>
          <th className="border p-2">Liens</th>
          <th className="border p-2">Nombre de personnes</th>
        </tr>
      </thead>
      <tbody>
        <tr>
          <td className="border p-2">{oneTrip.typeName}</td>
          <td className="border p-2">{oneTrip.duration}</td>
          <td className="border p-2">{oneTrip.activity}</td>
          <td className="border p-2">{oneTrip.price}</td>
          <td className="border p-2">{oneTrip.link}</td>
          <td className="border p-2">{oneTrip.numberOfPersons}</td>
        </tr>
      </tbody>
    </table>
</div>


      </main>
    )
  }

  export default OneTrip;
  