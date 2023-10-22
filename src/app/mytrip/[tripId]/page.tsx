import React from "react";
import { getOneTripAction } from "../../_actions";

async function OneTrip({
  params,
  searchParams,
}: {
  params: { tripId: string }
  searchParams: { [key: string]: string | string[] | undefined }
}) {
  
  
  const paramsId = Number(params.tripId)
  console.log('page id', paramsId)
  const oneTrip = await getOneTripAction(paramsId);
  console.log('one trip', oneTrip)
    return (
      <main>
            
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
  