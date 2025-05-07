"use client"

import React from "react";
import { useAppContext } from "@/context/AppContext";

const Project = () => {
    const { projectRef } = useAppContext();

    return (
        <section ref={projectRef} className="w-[100vw] h-[150vh]">
            
        </section>
    );
};

export default Project;
