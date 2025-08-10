import React from 'react'
import { NavLink, useNavigate } from 'react-router'
 


export const Social = () => {
  const navigate=useNavigate();
  return (
    <>
     <div className="min-h-screen flex flex-col justify-center items-center bg-gradient-to-br from-indigo-600 via-purple-700 to-pink-600 px-6 text-white">
       <div className="max-w-5xl mx-auto">
        <h2 className="text-3xl sm:text-4xl font-bold text-center mb-6">🚀 SOCIAL MEDIA </h2>
        <ul className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 gap-4 text-center space-x-4">
          
            
           <NavLink to= 'https://www.linkedin.com/in/vishakha-sharma-0a056032a/?trk=public_profile-settings_edit-profile-content&originalSubdomain=in' className='bg-white/10 shadow-white/20 rounded-2xl p-6'>LinkedIn</NavLink>
           <NavLink className='bg-white/10 shadow-white/20 rounded-2xl p-6'>Intsagram</NavLink>
           <NavLink className='bg-white/10 shadow-white/20 rounded-2xl p-6'>Github</NavLink>
           <NavLink className='bg-white/10 shadow-white/20 rounded-2xl p-6'>Email</NavLink>
           <NavLink  className='bg-white/10 shadow-white/20 rounded-2xl p-6'>Twitter</NavLink>
          
          
        </ul>
        

       

     </div>
     </div>
    </>
    

 
    
     
 
     
  )
}
