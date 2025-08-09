"use client";

import React from "react";
import { useAppContext } from "@/context/AppContext";
import { useInView } from "framer-motion";
import ProjectItem from "./ProjectItem";
import { projects } from "@/libs/projects";
import { motion } from "framer-motion";

const Project = () => {
    const { projectsRef } = useAppContext();

    const isProjectsInView = useInView(projectsRef, {
        amount: 0.5,
    });

    // Animation variants for the "Recent Projects" text
    const projectVariants = {
        hidden: { opacity: 0, y: 50 },
        visible: { opacity: 1, y: 0, transition: { duration: 0.6 } },
    };

    return (
        <section className="flex flex-col items-center mt-[8em]">
            <motion.svg
                ref={projectsRef}
                initial="hidden"
                animate={isProjectsInView ? "visible" : "hidden"}
                variants={projectVariants}
                viewBox="0 0 600 25"
                className="w-full h-[40px] sm:h-[50px] md:h-[60px]"
            >
                <text
                    x="50%"
                    y="50%"
                    textAnchor="middle"
                    dominantBaseline="middle"
                    fontSize="20"
                    fontWeight="bold"
                    fill="transparent"
                    stroke="url(#strokeGradient)"
                    strokeWidth="0.6"
                    paintOrder="stroke"
                >
                    RECENT PROJECTS
                </text>
            </motion.svg>
            <div className="px-[2em] grid justify-center grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-4 my-[2em]">
                {projects.map((project, index) => (
                    <ProjectItem key={index} project={project} />
                ))}
            </div>
        </section>
    );
};

export default Project;
