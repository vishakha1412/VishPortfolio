import React from 'react'
 
import { AuraList } from './AuraList'
import { NavLink } from 'react-router'
import { MyntraClon } from './MyntraClon'

export const Project = () => {
  return (
     <>
     <div className="min-h-screen flex flex-col justify-center items-center bg-gradient-to-br from-indigo-600 via-purple-700 to-pink-600 px-6 text-white ">
       <div className='grid lg:grid-cols-3 md:grid-cols-2 sm:grid-cols-1 space-x-2 gap-4 text-center '>
      <NavLink  to='https://aura-list.vercel.app/'> <AuraList /></NavLink> 
      <NavLink to ='https://myntraclone-sigma.vercel.app/'><MyntraClon/></NavLink>
       
       </div>
     </div>
     </>
  )
}
