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

  const totalPrice = oneTrip.reduce((acc, trip) => acc + trip.price, 0);

    return (
      <main className="p-6">

       {cityInfos.map(elem => (
                <CityItem key={elem.id} {...elem}/>))}

       {/* <div>{JSON.stringify(searchParams)}</div> */}
        
        <p className="p-3">Le prix total est de : {totalPrice} €</p>

       <div className="container mx-auto p-6">
    <table className="min-w-full">
      <thead>
        <tr>
          <th className="border p-2 bg-secondary ">Etape</th>
          <th className="border p-2 bg-secondary">Durée</th>
          <th className="border p-2 bg-secondary">Activitée</th>
          <th className="border p-2 bg-secondary">Prix</th>
          <th className="border p-2 bg-secondary">Liens</th>
        </tr>
      </thead>
      <tbody>
      {oneTrip.map(elem => (
        <tr key={elem.id} className="text-center">
          <td className="border p-2">{elem.typeName}</td>
          <td className="border p-2">{elem.duration}</td>
          <td className="border p-2 text-justify">{elem.activity}</td>
          <td className="border p-2">{elem.price} €</td>
          <td className="border p-2"><a className="font-bold" href={elem.link}>+</a></td>
        </tr>

      ))        
        }
      </tbody>
    </table>
</div>


      </main>
    )
  }

  export default OneTrip;
  