"use client";

import React, { useEffect } from "react";
import { useAppContext } from "@/context/AppContext";
import { useAnimation, useInView } from "framer-motion";
import ProjectItem from "./project/ProjectItem";

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

    const projects = [
        {
            name: "Flexwork",
            imageDark: "/Images/second_project(dark).png",
            imageLight: "/Images/second_project(light).png",
            git: "https://github.com/shabinx30/FLEX_WORK",
            live: "https://chat.tungstenz.online",
            description:
                "Developed a scalable freelancing platform connecting clients and freelancers through project listings, bidding, secure messaging, and escrow payments. Focused on smooth user experience, real-time interactions, and trust-driven workflows with modern tech stack.",
            techs: [
                "react.js",
                "socket.io",
                "tailewind",
                "typescript",
                "mongodb",
                "node.js",
                "express.js",
                "jwt",
                "redux",
                "pwa",
            ],
        },
        {
            name: "Tungsten",
            image: "/Images/first_project.png",
            git: "https://github.com/shabinx30/TUNGSTEN",
            live: "https://tungsten-9vxl.onrender.com/",
            description:
                "Architected and built an E-commerce platform from the ground up, providing an advanced shopping experience for users with full control over product management through an admin module",
            techs: [
                "node.js",
                "express.js",
                "mongodb",
                "razopay",
                "ejs",
                "mvc",
                "bootstrap",
                "node mailer",
                "aws",
                "google auth"
            ],
        },
        {
            name: "Convo",
            imageDark: "/Images/convo(dark).png",
            imageLight: "/Images/convo(light).png",
            git: "https://github.com/shabinx30/CHAT_APP",
            live: "https://chat.tungstenz.online",
            description:
                "Designed a feature-rich chat app with online/offline status, typing indicators, and file sharing. Built with a focus on real time performance and seamless user experience.",
            techs: [
                "react.js",
                "socket.io",
                "tailewind",
                "typescript",
                "mongodb",
                "node.js",
                "express.js",
                "jwt",
                "redux",
                "pwa",
                "cloudinary"
            ],
        },
        {
            name: "User Managment System",
            imageDark: "/Images/ums(dark).png",
            imageLight: "/Images/ums(light).png",
            git: "https://github.com/shabinx30/UMS-REACT-NODE",
            live: "https://ums.tungstenz.online",
            description:
                "Engineeredasecureusermanagement system with authentication, user registration, profile management, and admin controls. Implemented protected routes and role-based access control to manage user creation, editing, and deletion efficiently.",
            techs: [
                "react.js",
                "tailewind",
                "typescript",
                "postgres",
                "node.js",
                "express.js",
                "jwt",
                "redux",
            ],
        },
        {
            name: "Netflix",
            image: "/Images/netflix_clone.png",
            git: "https://github.com/shabinx30/Netflix_Clone",
            live: "https://netflix.tungstenz.online",
            description:
                "Crafted a dynamic video streaming platform with user authentication, movie browsing, trailer viewing, and a personalized favorites section. Focused on delivering a responsive and visually appealing user interface for enhanced user engagement.",
            techs: [
                "react.js",
                "tailewind",
                "firebase",
                "api"
            ],
        },
        {
            name: "OLX",
            image: "/Images/olx_clone.png",
            git: "https://github.com/shabinx30/OLX-Clone",
            live: "https://olx.tungstenz.online",
            description:
                "Created a responsive online marketplace with user login/signup and product listing capabilities. Prioritized user experience by delivering a sleek, easy-to-navigate interface.",
            techs: [
                "react.js",
                "tailewind",
                "firebase",
                "api"
            ],
        },
    ];

    return (
        <section ref={projectsRef} className="flex flex-col items-center mt-[8em]">
            <h1 className="text-2xl HN-medium lg:text-[1.6em]">
                Recent Projects
            </h1>
            <div className="px-[2em] grid justify-center grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-4 my-[4em]">
                {projects.map((project, index) => (
                    <ProjectItem key={index} project={project} />
                ))}
            </div>
        </section>
    );
};

export default Project;
