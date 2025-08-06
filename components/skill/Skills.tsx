"use client";

import { useAppContext } from "@/context/AppContext";
import SkillItem from "./SkillItem";
import Image from "next/image";
import { motion, useInView } from "framer-motion";
import { skills } from "@/libs/skills";

const Skill = () => {
    const { skillsRef } = useAppContext();

    const isSkillsInView = useInView(skillsRef, {
        amount: 0.5,
        once: true,
    });

    // Animation variants for the "Recent Projects" text
    const skillsVariants = {
        hidden: { opacity: 0, y: 50 },
        visible: { opacity: 1, y: 0, transition: { duration: 0.6 } },
    };

    return (
        <>
            <motion.div
                ref={skillsRef}
                className="mt-[7em] flex w-full justify-center"
                initial="hidden"
                animate={isSkillsInView ? "visible" : "hidden"}
                variants={skillsVariants}
            >
                <svg viewBox="0 0 600 40" className="w-full h-auto">
                    <defs>
                        <linearGradient
                            id="strokeGradient"
                            x1="0%"
                            y1="0%"
                            x2="0%"
                            y2="100%"
                        >
                            <stop offset="0%" stopColor="#C2FF78" />
                            <stop offset="40%" stopColor="#C2FF78" />
                            <stop offset="100%" stopColor="#0000" />
                        </linearGradient>
                    </defs>

                    <text
                        x="50%"
                        y="50%"
                        textAnchor="middle"
                        dominantBaseline="middle"
                        fontSize="16"
                        fontWeight="bold"
                        fill="transparent"
                        stroke="url(#strokeGradient)"
                        strokeWidth="0.6"
                        paintOrder="stroke"
                    >
                        SKILLS
                    </text>
                </svg>
            </motion.div>
            <section
                // ref={skillsRef}
                className="flex flex-col items-center gap-2 w-full"
            >
                <h2 className="font-semibold">Frontend</h2>
                <div className="flex gap-4 flex-wrap justify-center">
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
                <div className="flex gap-4 flex-wrap justify-center">
                    {skills.backend.map((skill, index) => (
                        <SkillItem key={index} skill={skill} />
                    ))}
                </div>
                <h2 className="font-semibold mt-6">Tools & Languages</h2>
                <div className="flex gap-4 flex-wrap justify-center">
                    {skills.toolsLaguages.map((skill, index) => (
                        <SkillItem key={index} skill={skill} />
                    ))}
                </div>
                <h2 className="font-semibold mt-6">Cloud & Deployment</h2>
                <div className="flex gap-4 flex-wrap justify-center">
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
            </section>
        </>
    );
};

export default Skill;
