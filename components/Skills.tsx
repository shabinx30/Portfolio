"use client";

import { useAppContext } from "@/context/AppContext";
import SkillItem from "./skill/SkillItem";
import Image from "next/image";

const Skill = () => {
    const skills = {
        frontend: [
            "html",
            "css",
            "react",
            "next",
            "tailwind",
            "bootstrap",
            "materialui",
        ],
        backend: ["nodejs", "express", "mongodb", "postgres", "firebase"],
        toolsLaguages: [
            "git",
            "github",
            "figma",
            { name: "javascript", icon: "js" },
            { name: "typescript", icon: "ts" },
        ],
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
                <div className="bg-black dark:bg-[#fff] HN-semi-bold text-white dark:text-black pr-3 rounded-lg flex items-center gap-2">
                    <Image
                        width={100}
                        height={100}
                        className="w-[1.8em] rounded-md"
                        src={`/Images/framer_motion.jpg`}
                        alt={"framer motion"}
                    />
                    {"framer motion"}
                </div>
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
                <div className="bg-black dark:bg-[#fff] HN-semi-bold text-white dark:text-black pr-3 rounded-lg flex items-center gap-2">
                    <Image
                        width={100}
                        height={100}
                        className="w-[1.8em] dark:invert rounded-md"
                        src={`/Images/render_logo.png`}
                        alt={"render"}
                    />
                    {"render"}
                </div>
            </div>
        </div>
    );
};

export default Skill;
