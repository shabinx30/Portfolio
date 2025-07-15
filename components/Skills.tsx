"use client";

import { useAppContext } from "@/context/AppContext";
import SkillItem from "./skill/SkillItem";

const Skill = () => {
    const skills = {
        frontend: ["html", "css", "react", "next", "tailwind", "bootstrap"],
        backend: ["nodejs", "express", "mongodb", "postgres", "firebase"],
        toolsLaguages: ["git", "figma" , {name: "javascript", icon: "js"}, {name: "typescript", icon: "ts"}],
        cloudDeployment: ["vercel", "aws"],
    };

    const { skillsRef } = useAppContext();

    return (
        <div
            ref={skillsRef}
            className="mt-[7em] flex flex-col items-center gap-2 w-full"
        >
            <h2 className="font-semibold">FrontEnd</h2>
            <div className="flex gap-4">
                {skills.frontend.map((skill, index) => (
                    <SkillItem key={index} skill={skill} />
                ))}
            </div>
            <h2 className="font-semibold mt-6">BackEnd & Databases</h2>
            <div className="flex gap-4">
                {skills.backend.map((skill, index) => (
                    <SkillItem key={index} skill={skill} />
                ))}
            </div>
            <h2 className="font-semibold mt-6">Tools & Languages</h2>
            <div className="flex gap-4">
                {skills.toolsLaguages.map((skill, index) => (
                    <SkillItem key={index} skill={skill} />
                ))}
            </div>
            <h2 className="font-semibold mt-6">Cloud & Deployment</h2>
            <div className="flex gap-4">
                {skills.cloudDeployment.map((skill, index) => (
                    <SkillItem key={index} skill={skill} />
                ))}
            </div>
        </div>
    );
};

export default Skill;
