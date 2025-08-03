import React from 'react'
import { NavLink, useNavigate } from 'react-router';
 
export const Skills = () => {
  const navigate=useNavigate();
 

     const skills = [
         
    "React.js",
   "Redux Toolkit",
  "Tailwind CSS",
  "Responsive UI Design",
  "Git & Deployment",
  "Java Language",
  "HTML5","CSS","JavaScript","Express.js","Node.js","MongoDB","Mongoose"

  
];

   return (
    <section className=" ">
      <div className="max-w-5xl mx-auto">
        <h2 className="text-3xl sm:text-4xl font-bold text-center mb-6">🚀 Skills & Tech Stack</h2>
        <ul className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 gap-4 text-center space-x-4">
          {skills.map((skill, index) => (
            <li
              key={index}
               data-aos="fade-right"
              className="bg-white/10 backdrop-blur-md border border-white/20 py-4 px-4 shadow hover:scale-115 transition transform  rounded-full animation-spin curser-arrow" onClick={navigate('/')}
            >
              <NavLink to='/'>{skill}</NavLink>
            </li>
          ))}
        </ul>
      </div>
    </section>
  );

    
  
}
