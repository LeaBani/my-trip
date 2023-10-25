import React from "react";
import ResearchBar from "../_components/ResearchBar";
import AllCities from "../_components/AllCities";

function MyTripList() {
  
    return (
            
      <main className="bg-primary border border-light border-opacity-30 p-6 max-w-3xl m-4">

      <div className="mx-auto max-w-7xl px-6 lg:px-8">
        <div className="mx-auto max-w-2xl lg:mx-0">
          <h2 className="text-3xl font-bold tracking-tight text-light sm:text-4xl text-center mb-6">Ma liste de voyages</h2>
          <p className="mt-2 text-lg leading-8 text-light mb-2 text-center">
            Ici, tu trouveras la liste des toutes les villes visitées!
          </p>
        </div>


        <ResearchBar />
        
        <AllCities />
          
       </div>
      </main>
    )
  }

  export default MyTripList;
  