import Image from "next/image";
import React from "react";
import logo from '../yosemite.jpg'
import Link from "next/link";

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
      <li className="flex max-w-xl flex-col items-start justify-between px-20 mb-8 bg-light bg-opacity-25 p-4 rounded-3xl">
              <div className="flex items-center gap-x-4 text-xs">
                <Link
                  href={`mytrip/${id}`}
                  className="rounded-full bg-secondary px-3 py-1.5 font-medium text-light hover:bg-primary"
                >
                  {countryName}
                </Link>
              </div>
              <div className="">
                <h3 className="mt-3 text-lg font-semibold leading-6 text-secondary group-hover:text-secondary">
                  <a href={`mytrip/${id}`}>
                    <span className="absolute inset-0" />
                    {cityName}
                  </a>
                </h3>
                <p className="mt-5 line-clamp-3 text-sm leading-6 text-secondary">{description}</p>
              </div>
              <div className="mt-8 flex items-center gap-x-4">
              <Image src={logo} width={20} height={20} alt="avatar" className="h-10 w-10 rounded-full bg-light" />
                <div className="text-sm leading-6">
                  <p className="font-semibold text-secondary">
                    <a href={monthName}>
                      <span className="absolute inset-0" />
                      {monthName}
                    </a>
                  </p>
                  <p className="text-secondary">{durationName}</p>
                </div>
              </div>
            </li>
    
  
    )
  }
