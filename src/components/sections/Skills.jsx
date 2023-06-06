import React from "react";
import SkillItem from "../items/SkillItem";
import react from "../../assets/icons/react-2.svg";
import html from "../../assets/icons/html.png";
import tailwind from "../../assets/icons/tailwind.svg";
import css from "../../assets/icons/css-3.png";
import js from "../../assets/icons/js.png";
import node from "../../assets/icons/node-js.png";
import laravel from "../../assets/icons/laravel.svg";

function Skills() {
  const skillList = [
    { icon: laravel, skill: "Laravel" },
    { icon: node, skill: "NodeJS" },
    { icon: react, skill: "React" },
    { icon: js, skill: "JavaScript" },
    { icon: tailwind, skill: "Tailwind" },
    { icon: css, skill: "CSS" },
    { icon: html, skill: "HTML" },
  ];

  return (
    <section className="flex flex-col items-start my-12 mx-auto">
      <p className="text-4xl md:text-6xl font-extrabold my-2">Skills</p>
      <div className="grid grid-cols-2 sm:grid-cols-3 md:grid-cols-4 gap-x-8 gap-y-8 my-2 mx-auto md:mx-0 w-full">
        {skillList.map(({ icon, skill }) => {
          return <SkillItem key={icon} icon={icon} skill={skill}></SkillItem>;
        })}
      </div>
    </section>
  );
}

export default Skills;
