import React from "react";

export default function Home() {
  return (
    <main>
      <div id="#accueil" className="w-[544px] h-[507px] bg-primary border border-light border-opacity-30 p-9">
        <h1 className=" text-2xl mb-5 text-neutral-500 ">Bienvenue sur My trip ! </h1>
          <p className=" mb-5 w-4/5 lg:text-lg text-neutral-500">Ici tu trouveras mon carnet de voyagge.</p>
          <p className="lg:text-lg  text-neutral-500 mb-3 sm:w-4/5">Si tu souhaites participer au projet, nhésite pas à me contacter sur mes réseaux!</p>
      </div>
    </main>
  )
}
