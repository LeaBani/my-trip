import React from "react";
import GetCitiesByCountry from "../_components/ChangeInput";

function MyTripList() {
  
    return (
            
      <main className="w-[800px] bg-primary border border-light border-opacity-30 p-6">

      <div className="mx-auto max-w-7xl px-6 lg:px-8">
        <div className="mx-auto max-w-2xl lg:mx-0">
          <h2 className="text-3xl font-bold tracking-tight text-light sm:text-4xl">Les villes visitées</h2>
          <p className="mt-2 text-lg leading-8 text-light">
            Ici, tu trouveras la liste des toutes les villes visitée à...
          </p>
        </div>


        <GetCitiesByCountry />
          
       </div>
      </main>
    )
  }

  export default MyTripList;
  