import React from "react";

function SkillItem({ icon, skill }) {
  return (
    <div className="box py-2 px-2 sm:py-3 sm:px-4 gap-4 bg-v-white flex flex-row items-center justify-center">
      <img className="h-8 w-8" src={icon} alt={skill}></img>
      <p className="text-sm lg:text-xl">{skill}</p>
    </div>
  );
}

export default SkillItem;
