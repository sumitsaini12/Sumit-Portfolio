import React from "react";
import ProjectCard from "./ProjectCard";
import { ProjectList } from "./ProjectData";

function Project() {
  console.log("ProjectList", ProjectList);
  return (
    <div name="Projects" className="w-full my-32">
      <div className="max-w-[1240px] mx-auto px-2">
        <h2 className="text-5xl font-bold text-center text-purple-600">
          My Recent Works
        </h2>
        <p className="text-2xl py-8 text-gray-500 text-center">
          Here are a few projects I've worked on recently.
        </p>

        <div className="grid items-center justify-center sm:grid-cols-2 lg:grid-cols-4 gap-4 pt-4">

          {ProjectList.map(List => {
            return <ProjectCard {...List} key={List.id} />;
          })}

        </div>

      </div>
    </div>
  );
}

export default Project
