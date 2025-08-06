"use client";

import React, { useEffect } from "react";
import { useAppContext } from "@/context/AppContext";
import { useAnimation, useInView } from "framer-motion";
import ProjectItem from "./ProjectItem";
import { projects } from "@/libs/projects";

const Project = () => {
    const { projectsRef } = useAppContext();

    const inView = useInView(projectsRef, { amount: 0.25 });
    const controls = useAnimation();

    useEffect(() => {
        if (inView) {
            controls.start("visible");
        } else {
            controls.start("hidden");
        }
    }, [inView, controls]);

    return (
        <section
            ref={projectsRef}
            className="flex flex-col items-center mt-[8em]"
        >
            <svg viewBox="0 0 600 25" className="w-full h-auto">
                <text
                    x="50%"
                    y="50%"
                    textAnchor="middle"
                    dominantBaseline="middle"
                    fontSize="16"
                    fontWeight="bold"
                    fill="transparent"
                    stroke="url(#strokeGradient)"
                    strokeWidth="0.65"
                    paintOrder="stroke"
                >
                    RECENT PROJECTS
                </text>
            </svg>
            <div className="px-[2em] grid justify-center grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-4 my-[2em]">
                {projects.map((project, index) => (
                    <ProjectItem key={index} project={project} />
                ))}
            </div>
        </section>
    );
};

export default Project;
