import Image from "next/image";
import React from "react";
import logo from '../yosemite.jpg'

export interface CityItemProps {
  id: number
  countryName: string
  cityName: string 
  description: string
  monthName: string
  durationName: string
  picture: string
}

  
export async function CityItem({id, countryName, cityName, description, monthName, durationName, picture} : CityItemProps){
  
    return (
      <article className="flex max-w-xl flex-col items-start justify-between px-20">
              <div className="flex items-center gap-x-4 text-xs">
                <a
                  href={`mytrip/${id}`}
                  className="relative z-10 rounded-full bg-purple px-3 py-1.5 font-medium text-white hover:bg-midnight"
                >
                  {countryName}
                </a>
              </div>
              <div className="group relative">
                <h3 className="mt-3 text-lg font-semibold leading-6 text-midnight group-hover:text-purple">
                  <a href={`mytrip/${id}`}>
                    <span className="absolute inset-0" />
                    {cityName}
                  </a>
                </h3>
                <p className="mt-5 line-clamp-3 text-sm leading-6 text-purple">{description}</p>
              </div>
              <div className="relative mt-8 flex items-center gap-x-4">
              <Image src={logo} width='20' height={20} alt="avatar" className="h-10 w-10 rounded-full bg-white" />
                <div className="text-sm leading-6">
                  <p className="font-semibold text-midnight">
                    <a href={monthName}>
                      <span className="absolute inset-0" />
                      {monthName}
                    </a>
                  </p>
                  <p className="text-purple">{durationName}</p>
                </div>
              </div>
            </article>
    
  
    )
  }
