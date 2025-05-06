"use client"

import React from "react";
import { useAppContext } from "@/context/AppContext";

const Project = () => {
    const { projectRef } = useAppContext();

    return (
        <section ref={projectRef} className="w-[100vw] h-[50vh] bg-black"></section>
    );
};

export default Project;
