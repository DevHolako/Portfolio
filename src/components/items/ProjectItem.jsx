import React from "react";
import { GitHub } from "react-feather";
import { Globe } from "react-feather";
function ProjectItem({ data }) {
  const { title, image, description, list, github, livelink, Credentials } =
    data;

  return (
    <div className="border-4 border-black drop-shadow-v-4 flex flex-col justify-around items-start bg-v-white px-4 py-6 gap-2">
      <p className="text-2xl  font-bold">{title}</p>
      <img
        className="box-2 object-cover w-full h-[200px]"
        src={image}
        alt={title}
      />

      <p className="text-2xl font-medium">{description}</p>
      <ul className="text-xl font-medium">
        {list.map((item) => {
          return <li key={item}>&bull; {item}</li>;
        })}
      </ul>
      <div className="flex flex-row items-center w-full justify-center gap-4">
        {github && (
          <a
            href={github}
            className="flex flex-row items-center box bg-v-blue p-2"
            target="_blank"
            rel="noreferrer"
            aria-label="github"
          >
            <GitHub></GitHub>
          </a>
        )}
        {livelink && (
          <span className="flex flex-row box items-center bg-v-blue p-2 gap-2 w-fit">
            <Globe></Globe>
            <a
              href={livelink}
              className="text-xl font-bold underline-hover-3"
              target="_blank"
              rel="noreferrer"
              aria-label="link"
            >
              Live Link
            </a>
          </span>
        )}
      </div>
    </div>
  );
}

export default ProjectItem;
