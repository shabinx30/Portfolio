import Image from "next/image";
import Link from "next/link";
import React, { useEffect, useState } from "react";
import { FaGithub } from "react-icons/fa";
import { FaArrowRightLong } from "react-icons/fa6";

interface ProjectType {
    name: string;
    imageDark?: string;
    imageLight?: string;
    image?: string;
    git: string;
    live: string;
    description: string;
    techs: string[];
}

const ProjectItem = ({ project }: { project: ProjectType }) => {
    const [isDark, setIsDark] = useState(false);

    useEffect(() => {
        if (typeof window !== "undefined") {
            const mediaQuery = window.matchMedia(
                "(prefers-color-scheme: dark)"
            );
            setIsDark(mediaQuery.matches);

            const handler = (e: MediaQueryListEvent) => setIsDark(e.matches);
            mediaQuery.addEventListener("change", handler);

            return () => mediaQuery.removeEventListener("change", handler);
        }
    }, []);

    const image = isDark
        ? project.imageDark ?? project.image
        : project.imageLight ?? project.image;

    return (
        <div className="group bg-[#1b1b1b] dark:bg-[#2b2b2b] p-1 rounded-2xl">
            <div className="relative h-[14em] overflow-hidden rounded-2xl">
                <Link href={project.live} target="_blank">
                    <Image
                        className="w-full object-cover object-center transition-transform duration-500 ease-in-out group-hover:scale-[1.1]"
                        width={100}
                        height={100}
                        src={image || ""}
                        alt="project"
                    />
                </Link>
                <Link href={project.git} target="_blank">
                    <span className="absolute left-1 bottom-1 rounded-full shadow-[0_1px_10px] shadow-black/50 bg-black dark:bg-[#2b2b2b] text-white p-3 duration-200">
                        <FaGithub />
                    </span>
                </Link>
                <Link href={project.live} target="_blank">
                    <span className="absolute right-1 bottom-1 rounded-full shadow-[0_1px_10px] shadow-black/50 bg-black dark:bg-[#2b2b2b] text-white p-3 rotate-0 group-hover:rotate-[-45deg] duration-200">
                        <FaArrowRightLong />
                    </span>
                </Link>
            </div>
            <div className="px-3">
                <h2 className="HN-semi-bold py-2 text-white ">
                    {project.name}
                </h2>
                <p className="text-sm text-gray-300 ">{project.description}</p>
                <div className="flex flex-wrap gap-2 my-4 text-sm font-mono text-white ">
                    {project.techs.map((tech, index) => (
                        <span
                            key={index}
                            className="bg-white  text-black  rounded-full px-1.5"
                        >
                            {tech}
                        </span>
                    ))}
                </div>
            </div>
        </div>
    );
};

export default ProjectItem;
