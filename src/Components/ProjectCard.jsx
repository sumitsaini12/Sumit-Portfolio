import React from "react";


function ProjectCard({ link, name, photo, detail}) {
    return (
        <div class="max-w-sm rounded-lg border border-gray-200 bg-white shadow-md dark:border-gray-700 dark:bg-gray-800">
            <a href={link} target="_blank">
                <img
                    class="rounded-t-lg"
                    src={photo}
                    alt=""
                />
            </a>
            <div class="p-5">
                <a href={link} target="_blank">
                    <h2 class="mb-2 text-2xl font-bold tracking-tight text-gray-900 dark:text-white">
                        {name}
                    </h2>
                </a>
                <p class="mb-3 font-normal text-gray-700 dark:text-gray-400">
                    {detail}
                </p>
                <a
                    href={link}
                    target="_blank"
                    class="inline-flex items-center rounded-lg bg-purple-700 py-2 px-3 text-center text-sm font-medium text-white hover:bg-indigo-500 focus:outline-none focus:ring-4 focus:ring-blue-300 dark:bg-blue-600 dark:hover:bg-blue-700 dark:focus:ring-blue-800"
                >
                    View Project
                </a>
            </div>
        </div>
    );
}

export default ProjectCard
