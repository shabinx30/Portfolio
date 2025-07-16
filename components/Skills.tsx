"use client";

import { useAppContext } from "@/context/AppContext";
import SkillItem from "./skill/SkillItem";

const Skill = () => {
    const skills = {
        frontend: ["html", "css", "react", "next", "tailwind", "bootstrap", "materialui"],
        backend: ["nodejs", "express", "mongodb", "postgres", "firebase"],
        toolsLaguages: ["git", "github", "figma" , {name: "javascript", icon: "js"}, {name: "typescript", icon: "ts"}],
        cloudDeployment: ["vercel", "aws"],
    };

    const { skillsRef } = useAppContext();

    return (
        <div
            ref={skillsRef}
            className="mt-[7em] flex flex-col items-center gap-2 w-full"
        >
            <h2 className="font-semibold">Frontend</h2>
            <div className="flex gap-4 flex-wrap">
                {skills.frontend.map((skill, index) => (
                    <SkillItem key={index} skill={skill} />
                ))}
            </div>
            <h2 className="font-semibold mt-6">Backend & Databases</h2>
            <div className="flex gap-4 flex-wrap">
                {skills.backend.map((skill, index) => (
                    <SkillItem key={index} skill={skill} />
                ))}
            </div>
            <h2 className="font-semibold mt-6">Tools & Languages</h2>
            <div className="flex gap-4 flex-wrap">
                {skills.toolsLaguages.map((skill, index) => (
                    <SkillItem key={index} skill={skill} />
                ))}
            </div>
            <h2 className="font-semibold mt-6">Cloud & Deployment</h2>
            <div className="flex gap-4 flex-wrap">
                {skills.cloudDeployment.map((skill, index) => (
                    <SkillItem key={index} skill={skill} />
                ))}
            </div>
        </div>
    );
};

export default Skill;
