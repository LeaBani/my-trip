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

            
       <div>{oneTrip.typeName}</div>
       <div>{oneTrip.activity}</div>
       <div>{oneTrip.duration}</div>
       <div>{oneTrip.price}</div>
       <div>{oneTrip.link}</div>
       <div>{oneTrip.numberOfPersons}</div>
       {/* <div>{JSON.stringify(searchParams)}</div> */}


      </main>
    )
  }

  export default OneTrip;
  