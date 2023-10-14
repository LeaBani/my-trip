import React from "react";
import GetCitiesByCountry from "../../components/Cities/ChangeInput";

function MyTripList() {
  
    return (
      <main>
            
        <div className="bg-white py-24 sm:py-32">

      <div className="mx-auto max-w-7xl px-6 lg:px-8">
        <div className="mx-auto max-w-2xl lg:mx-0">
          <h2 className="text-3xl font-bold tracking-tight text-purple sm:text-4xl">Les villes visitées</h2>
          <p className="mt-2 text-lg leading-8 text-purple">
            Ici, tu trouveras la liste des toutes les villes visitée à...
          </p>
        </div>

        <ul className="border-t border-purple pt-10 sm:mt-16 sm:pt-16 lg:mx-0 lg:max-w-none">

        <GetCitiesByCountry />
          
=       </ul>
        </div>
        </div>
      </main>
    )
  }

  export default MyTripList;
  