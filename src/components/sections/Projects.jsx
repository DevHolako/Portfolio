import React from "react";
import ProjectItem from "../items/ProjectItem";

import game from "../../assets/images/RockPaperSisores.webp";
import Fcdg from "../../assets/images/Fcdg.webp";
import Bcdg from "../../assets/images/Bcdg.webp";
import oldP from "../../assets/images/oldP.webp";
function Projects() {
  const projectList = [
    {
      title: "OLD PORTOFLIO",
      status: "up",
      Credentials: false,
      image: oldP,
      description: "Old Portfolio",
      list: ["React", "CSS"],
      github: "https://github.com/DevHolako/old-portfolio",
      livelink: "https://oldpf.holako.dev/",
    },
    {
      title: "Centre Dentaire Gueliz",
      "status": "down",
      image: Fcdg,
      description: "BackOffice of a Dental Clinic",
      list: ["React + Redux", "CSS"],
      github: "https://github.com/DevHolako/Centre-Dentaire-Gueliz",
      livelink: "https://cdg.holako.dev/",
    },
    {
      title: "CDG API  ",
      status: "down",
      Credentials: false,
      image: Bcdg,
      description: "Api for the Dental Clinic app",
      list: ["Laravel + Sanctum", "Mysql"],
      github: "https://github.com/DevHolako/cdg-backend",
      livelink: "https://api-cdg.holako.dev",
    },
  ];

  return (
    <section className="flex flex-col items-start my-12 mx-auto">
      <p className="text-4xl md:text-6xl font-extrabold my-2">Projects</p>
      <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-x-8 gap-y-8 my-2 mx-auto md:mx-0 w-full">
        {projectList.map((data) => {
          return <ProjectItem data={data} key={data.title}></ProjectItem>;
        })}
      </div>
    </section>
  );
}

export default Projects;
