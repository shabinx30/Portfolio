"use client";

import React, { useRef } from "react";
import { motion, useInView } from "framer-motion";

const Hero = () => {
    const sectionRef = useRef(null);
    const isInView = useInView(sectionRef, { margin: "-20% 0px", once: false });
    const projectsRef = useRef(null);
    const isProjectsInView = useInView(projectsRef, {
        amount: 0.5,
        once: true,
    });

    // Animation variants for the "Recent Projects" text
    const projectsVariants = {
        hidden: { opacity: 0, y: 50 },
        visible: { opacity: 1, y: 0, transition: { duration: 0.6 } },
    };

    // Common animation settings for floating circles
    const floatAnimation = (delay = 0) => ({
        animate: isInView ? { x: ["10%", "-10%", "10%"] } : { x: 0 },
        transition: { duration: 5, repeat: Infinity, ease: "easeIn", delay },
    });

    const floatYAnimation = {
        animate: isInView ? { y: ["10%", "-10%", "10%"] } : { y: 0 },
        transition: { duration: 5, repeat: Infinity, ease: "easeIn" },
    };

    return (
        <section
            ref={sectionRef}
            className="relative h-[100dvh] w-[100vw] bg-black"
        >
            <div className="absolute flex justify-center pt-[14%] bg-black/30 z-40 backdrop-blur-[50px] h-[114dvh] w-[100vw]">
                <div className="text-center pt-[30%] md:p-0 w-[90%] lg:w-[47%]">
                    <h1 className="text-2xl lg:text-4xl text-[#C2FF78] mb-2">
                        HELLO,
                    </h1>
                    <h1 className="text-3xl lg:text-5xl text-transparent bg-clip-text bg-gradient-to-r to-white/50 via-white from-white/50">
                        I'M SHABEEN SHARIH
                    </h1>
                    <p className="text-[#AEAEAE] text-[0.65em] font-mono lg:text-[0.825em] mt-8">
                        I'm a highly passionate{" "}
                        <span className="text-[#C2FF78]">web developer</span>,
                        constantly challenging my problem-solving skills and
                        striving for consistency. Every day, I work diligently
                        to enhance my abilities and grow in my craft.
                    </p>
                </div>
            </div>

            <motion.div
                ref={projectsRef}
                className="absolute bottom-[-3em] z-50"
                initial="hidden"
                animate={isProjectsInView ? "visible" : "hidden"}
                variants={projectsVariants}
            >
                <h1 className="text-white text-2xl lg:text-3xl px-[2em] md:px-[3em]">
                    RECENT PROJECTS
                </h1>
            </motion.div>

            {/* Animated Circles */}
            <motion.div
                className="absolute bottom-[22%] right-[10%] lg:right-[0%] rotate-[20deg] bg-[#8CFF00] w-[10%] h-[25%] lg:h-[50%] rounded-full"
                {...floatYAnimation}
            />
            <div className="absolute bottom-[-2%] right-[3em] rotate-[75deg] bg-[#8CFF00] w-[20%] lg:w-[14em] h-[22%] lg:h-[50%] rounded-full" />
            <motion.div
                className="absolute bottom-0 right-[26%] rotate-[-25deg] bg-[#8CFF00] w-[18%] h-[40%] rounded-full"
                {...floatAnimation(0.2)}
            />
            <div className="absolute bottom-0 right-[20%] bg-[#8CFF00] w-[8em] h-[30%] rounded-full" />
            <motion.div
                className="absolute bottom-8 left-0 rotate-[65deg] bg-[#8CFF00] w-[20%] h-[30%] rounded-full"
                {...floatAnimation(0.6)}
            />
            <div className="absolute bottom-8 left-0 rotate-[-30deg] bg-[#8CFF00] w-[20%] h-[20%] rounded-full" />
            <div className="absolute bottom-4 left-[16%] rotate-[10deg] bg-[#8CFF00] w-[20%] h-[10%] rounded-full" />
            <motion.div
                className="absolute bottom-2 left-[40%] bg-[#8CFF00] w-[20%] h-[15%] rounded-full"
                {...floatAnimation(0.4)}
            />
        </section>
    );
};

export default Hero;
