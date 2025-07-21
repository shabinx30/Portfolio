"use client";

import React, { useEffect, useRef } from "react";
import { motion, useInView } from "framer-motion";
import { FaLinkedin, FaGithub } from "react-icons/fa";
import { SiGmail } from "react-icons/si";
import Link from "next/link";
import { useAppContext } from "@/context/AppContext";
import gsap from "gsap";

const Hero = () => {
    const { homeRef } = useAppContext();
    const greRef = useRef(null);
    const nameRef = useRef(null);
    const disRef = useRef(null);
    const skillsRef = useRef(null);
    const isSkillsInView = useInView(skillsRef, {
        amount: 0.5,
        once: true,
    });

    // Animation variants for the "Recent Projects" text
    const skillsVariants = {
        hidden: { opacity: 0, y: 50 },
        visible: { opacity: 1, y: 0, transition: { duration: 0.6 } },
    };

    useEffect(() => {
        gsap.from(greRef.current, {
            yPercent: 130,
            opacity: 0,
            duration: 1.2,
            ease: "power4.out",
            stagger: 0.1,
            delay: 0.1,
        });

        gsap.from(nameRef.current, {
            yPercent: 130,
            opacity: 0,
            duration: 1.2,
            ease: "power4.out",
            stagger: 0.1,
            delay: 0.15,
        });

        gsap.from(disRef.current, {
            yPercent: 130,
            opacity: 0,
            duration: 1.2,
            ease: "power4.out",
            stagger: 0.1,
            delay: 0.2,
        });
    }, []);

    return (
        <section
            ref={homeRef}
            className="relative h-[100dvh] w-[100vw] bg-white dark:bg-black"
        >
            <div className="absolute flex justify-center pt-[14%] dark:bg-black/30 z-40 backdrop-blur-[50px] h-[114dvh] w-[100vw]">
                <div className="text-center pt-[30%] md:p-0 w-[90%] lg:w-[47%]">
                    <motion.div
                        initial={{ opacity: 0 }}
                        animate={{ opacity: 1 }}
                        className="overflow-hidden"
                    >
                        <h1
                            ref={greRef}
                            className="text-2xl lg:text-4xl HN-medium mb-2 dark:text-transparent bg-clip-text text-black dark:bg-gradient-to-b from-[#C2FF78] to-[#C2FF78]/30"
                        >
                            Hello,
                        </h1>
                    </motion.div>
                    <motion.div
                        initial={{ opacity: 0 }}
                        animate={{ opacity: 1 }}
                        className="overflow-hidden"
                    >
                        <h1
                            ref={nameRef}
                            className="text-3xl lg:text-[4em] dark:text-transparent HN-medium font-extralight bg-clip-text text-black dark:bg-gradient-to-r to-white/30 via-white from-white/30"
                        >
                            I&apos;m Shabeen Sharih
                        </h1>
                    </motion.div>
                    <motion.div
                        initial={{ opacity: 0 }}
                        animate={{ opacity: 1 }}
                        className="overflow-hidden"
                    >
                        <p
                            ref={disRef}
                            className="text-[#7b7b7b] dark:text-[#AEAEAE] text-[0.65em] font-semibold lg:text-[0.825em] mt-8"
                        >
                            A Passionate{" "}
                            <span className="dark:text-[#C2FF78] text-black font-bold">
                                Full Stack Web Developer
                            </span>
                            , specializing in the MERN stack, with expertise in
                            MongoDB, Express.js, React, and Node.js.
                        </p>
                    </motion.div>
                    <motion.div
                        initial={{ opacity: 0 }}
                        animate={{ opacity: 1}}
                        transition={{delay: 0.25}}
                        className="flex gap-7 justify-center mt-6 text-black/60 dark:text-white/50 hover:text-black dark:hover:text-white duration-200"
                    >
                        <Link
                            href="https://www.linkedin.com/in/shabeen-sharih/"
                            target="_blank"
                        >
                            <FaLinkedin size={20} />
                        </Link>
                        <Link
                            href="https://github.com/shabinx30"
                            target="_blank"
                        >
                            <FaGithub size={20} />
                        </Link>
                        <Link
                            href="mailto:shabeensharih@gmail.com"
                            target="_blank"
                        >
                            <SiGmail size={20} />
                        </Link>
                    </motion.div>
                </div>
            </div>

            <motion.div
                ref={skillsRef}
                className="absolute flex w-full justify-center bottom-[-3em] z-50"
                initial="hidden"
                animate={isSkillsInView ? "visible" : "hidden"}
                variants={skillsVariants}
            >
                <h1 className="text-2xl HN-medium lg:text-[1.6em]">Skills</h1>
            </motion.div>

            {/* Animated Circles */}
            <div
                className="absolute bottom-[22%] right-[10%] lg:right-[0%] rotate-[20deg] bg-[#8CFF00] w-[10%] h-[25%] lg:h-[50%] rounded-full"
                // {...floatYAnimation}
            />
            <div className="absolute bottom-[-2%] right-[3em] rotate-[75deg] bg-[#8CFF00] w-[20%] lg:w-[14em] h-[22%] lg:h-[50%] rounded-full" />
            <div
                className="absolute bottom-0 right-[26%] rotate-[-25deg] bg-[#8CFF00] w-[18%] h-[40%] rounded-full"
                // {...floatAnimation(0.2)}
            />
            <div className="absolute bottom-0 right-[20%] bg-[#8CFF00] w-[8em] h-[30%] rounded-full" />
            <div
                className="absolute bottom-8 left-0 rotate-[65deg] bg-[#8CFF00] w-[20%] h-[30%] rounded-full"
                // {...floatAnimation(0.6)}
            />
            <div className="absolute bottom-8 left-0 rotate-[-30deg] bg-[#8CFF00] w-[20%] h-[20%] rounded-full" />
            <div className="absolute bottom-4 left-[16%] rotate-[10deg] bg-[#8CFF00] w-[20%] h-[10%] rounded-full" />
            <div
                className="absolute bottom-2 left-[40%] bg-[#8CFF00] w-[20%] h-[15%] rounded-full"
                // {...floatAnimation(0.4)}
            />
        </section>
    );
};

export default Hero;
