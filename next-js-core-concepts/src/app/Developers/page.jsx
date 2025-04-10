import Link from 'next/link';
import React from 'react';

const Developerspage = () => {

   
    const DevData = [
        {
          "id": 1,
          "title": "Junior Software Engineer",
          "company": "TechNova Inc.",
          "location": "New York, NY",
          "skills": ["JavaScript", "React", "HTML", "CSS"],
          "experienceLevel": "Entry-Level",
          "salary": 91193,
          "currency": "USD",
          "remote": true
        },
        {
          "id": 2,
          "title": "Junior Backend Developer",
          "company": "CloudCore Solutions",
          "location": "New York, NY",
          "skills": ["Node.js", "Express", "MongoDB"],
          "experienceLevel": "Entry-Level",
          "salary": 91193,
          "currency": "USD",
          "remote": false
        },
        {
          "id": 3,
          "title": "Junior Full Stack Developer",
          "company": "InnoTech Labs",
          "location": "New York, NY",
          "skills": ["React", "Node.js", "TypeScript"],
          "experienceLevel": "Entry-Level",
          "salary": 91193,
          "currency": "USD",
          "remote": true
        },
        {
          "id": 4,
          "title": "Junior Web Developer",
          "company": "PixelPoint",
          "location": "New York, NY",
          "skills": ["HTML",  "CSS", "JavaScript", "Tailwind CSS"],
          "experienceLevel": "Entry-Level",
          "salary": 91193,
          "currency": "USD",
          "remote": false
        }
      ]
      



    return (
        <div>
           {
            DevData.map( dev => (<div key={dev.id}  className='grid grid-cols-1 p-10 m-10 border-2 border-black'>
          
          <h1 className="font-2xl font-bold"> Title :  {dev.title} </h1>
          <h1 className="font-2xl font-bold"> Requirement :  {dev.skills.join(' , ')} </h1>
          <h1 className="font-2xl font-bold"> Avg Salary :  ${dev.salary} </h1>

          <button className='bg-red-400 w-[200px] mt-10 font-bold text-xl border-black border-4'> <Link href={`/Developers/${dev.id}`}>  View Details </Link> </button>

            </div>))
           } 
        </div>
    );
};

export default Developerspage;