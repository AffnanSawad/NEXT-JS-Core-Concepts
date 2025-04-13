import React from 'react';



const IdPage = ({ params }) => {
 
    console.log(params.id)

    const DevData = [
        {
          id: 1,
          title: "Junior Software Engineer",
          company: "TechNova Inc.",
          location: "New York, NY",
          skills: ["JavaScript", "React", "HTML", "CSS"],
          experienceLevel: "Entry-Level",
          salary: 91193,
          currency: "USD",
          remote: true
        },
        {
          id: 2,
          title: "Junior Backend Developer",
          company: "CloudCore Solutions",
          location: "New York, NY",
          skills: ["Node.js", "Express", "MongoDB"],
          experienceLevel: "Entry-Level",
          salary: 91193,
          currency: "USD",
          remote: false
        },
        {
          id: 3,
          title: "Junior Full Stack Developer",
          company: "InnoTech Labs",
          location: "New York, NY",
          skills: ["React", "Node.js", "TypeScript"],
          experienceLevel: "Entry-Level",
          salary: 91193,
          currency: "USD",
          remote: true
        },
        {
          id: 4,
          title: "Junior Web Developer",
          company: "PixelPoint",
          location: "New York, NY",
          skills: ["HTML", "CSS", "JavaScript", "Tailwind CSS"],
          experienceLevel: "Entry-Level",
          salary: 91193,
          currency: "USD",
          remote: false
        }
      ];


  const dev = DevData.find(dev => dev.id == params.id);

  if (!dev) {
    return <div>Developer not found</div>;
  }

  return (
    <div>
      <h1 className='text-2xl font-bold my-5 ml-20 mt-20'>{dev.title}</h1>
      <h2 className='text-2xl font-bold my-5 ml-20 '>${dev.salary}</h2>
      <h3 className='text-2xl font-bold my-5 ml-20'>Skills: {dev.skills.join(', ')}</h3>
    </div>
  );
};

export default IdPage;
