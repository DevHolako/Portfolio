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
      Credentials: false,
      image: oldP,
      description: "Old Portfolio",
      list: ["React", "CSS"],
      github: "https://github.com/DevHolako/old-portfolio",
      livelink: "https://old.holako.tech/",
    },
    {
      title: "Centre Dentaire Gueliz",
      image: Fcdg,
      description: "BackOffice of a Dental Clinic",
      list: ["React + Redux", "CSS"],
      github: "https://github.com/DevHolako/Centre-Dentaire-Gueliz",
      livelink: "https://cdg.holako.tech/",
    },
    {
      title: "CDG API",
      Credentials: false,
      image: Bcdg,
      description: "Api for the Dental Clinic app",
      list: ["Laravel + Sanctum", "Mysql"],
      github: "https://github.com/DevHolako/cdg-backend",
      livelink: "https://api-cdg.holako.tech",
    },
    {
      title: "Rock Paper Scissors",
      Credentials: false,
      image: game,
      description: "Rock Paper Scissors Game",
      list: ["HTML + CSS", "JavaScript"],
      github: "https://github.com/DevHolako/rock-paper-scissors",
      livelink: "https://game.holako.tech/",
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
