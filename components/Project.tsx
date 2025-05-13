"use client";

import React, { useEffect } from "react";
import Image from "next/image";
import { useAppContext } from "@/context/AppContext";
import { FaGithub } from "react-icons/fa";
import { HiOutlineExternalLink } from "react-icons/hi";
import { motion } from "framer-motion";
import { useAnimation, useInView } from "framer-motion";

const Project = () => {
    const { projectRef } = useAppContext();




    const inView = useInView(projectRef, { amount: 0.25 });
    const controls = useAnimation();

    useEffect(() => {
        if (inView) {
            controls.start("visible");
        } else {
            controls.start("hidden");
        }
    }, [inView, controls]);

    return (
        <motion.section
            id="projectsec"
            ref={projectRef}
            initial="hidden"
            animate={controls}
            variants={{
                hidden: { opacity: 0, y: 50 },
                visible: { opacity: 1, y: 0, transition: { duration: 0.6 } },
            }}
            className="w-[100dvw] relative h-[150vh] pt-[8em] "
        >
            <div
                data-scroll
                data-scroll-sticky
                data-scroll-target="#projectsec"
                className="absolute flex justify-center items-center w-[100dvw] h-[75dvh]"
            >
                <h1>background mone text</h1>
            </div>
            {/* projects */}
            <div className="absolute px-[2em] md:px-[4em]">
                <div className="block md:flex md:relative lg:justify-between gap-4">
                    <div className="block rounded-2xl md:w-[46%]">
                        <Image
                            loading="lazy"
                            className="w-full rounded-2xl"
                            src="/Images/second_project(dark).png"
                            alt="first_project"
                            width={100}
                            height={90}
                        />
                        <div className="flex justify-between py-3">
                            <button className="flex items-center gap-2 text-sm border border-white rounded-3xl px-4 cursor-pointer">
                                <HiOutlineExternalLink size={20} />
                                Live
                            </button>
                            <div className="text-center">
                                <p className="text-[#C2FF78]">Flex work</p>
                                <p className="text-[0.75em] text-[#909090]">
                                    Freelacing platform
                                </p>
                            </div>
                            <button className="flex items-center gap-2 text-sm border border-white rounded-3xl px-4 cursor-pointer">
                                <FaGithub size={20} />
                                Github
                            </button>
                        </div>
                    </div>
                    <div className="md:absolute rounded-3xl right-0 bottom-0 h-[80%] md:w-[36%] mt-[3em]">
                        <Image
                            loading="lazy"
                            className="w-full rounded-2xl"
                            src="/Images/netflix_clone.png"
                            alt="first_project"
                            width={100}
                            height={90}
                        />
                        <div className="flex justify-between py-3">
                            <button className="flex items-center gap-2 text-sm border border-white rounded-3xl px-4 cursor-pointer">
                                <HiOutlineExternalLink size={20} />
                                Live
                            </button>
                            <div className="text-center">
                                <p className="text-[#C2FF78]">
                                    Netflix Replica
                                </p>
                                <p className="text-[0.75em] text-[#909090]">
                                    Entertainment platform
                                </p>
                            </div>
                            <button className="flex items-center gap-2 text-sm border border-white rounded-3xl px-4 cursor-pointer">
                                <FaGithub size={20} />
                                Github
                            </button>
                        </div>
                    </div>
                </div>
                <div className="block md:flex md:relative lg:justify-between gap-4">
                    <div className="block rounded-2xl md:w-[46%]">
                        <Image
                            loading="lazy"
                            className="w-full rounded-2xl"
                            src="/Images/second_project(dark).png"
                            alt="first_project"
                            width={100}
                            height={90}
                        />
                        <div className="flex justify-between py-3">
                            <button className="flex items-center gap-2 text-sm border border-white rounded-3xl px-4 cursor-pointer">
                                <HiOutlineExternalLink size={20} />
                                Live
                            </button>
                            <div className="text-center">
                                <p className="text-[#C2FF78]">Flex work</p>
                                <p className="text-[0.75em] text-[#909090]">
                                    Freelacing platform
                                </p>
                            </div>
                            <button className="flex items-center gap-2 text-sm border border-white rounded-3xl px-4 cursor-pointer">
                                <FaGithub size={20} />
                                Github
                            </button>
                        </div>
                    </div>
                    <div className="md:absolute rounded-3xl right-0 bottom-0 h-[80%] md:w-[36%] mt-[3em]">
                        <Image
                            loading="lazy"
                            className="w-full rounded-2xl"
                            src="/Images/netflix_clone.png"
                            alt="first_project"
                            width={100}
                            height={90}
                        />
                        <div className="flex justify-between py-3">
                            <button className="flex items-center gap-2 text-sm border border-white rounded-3xl px-4 cursor-pointer">
                                <HiOutlineExternalLink size={20} />
                                Live
                            </button>
                            <div className="text-center">
                                <p className="text-[#C2FF78]">
                                    Netflix Replica
                                </p>
                                <p className="text-[0.75em] text-[#909090]">
                                    Entertainment platform
                                </p>
                            </div>
                            <button className="flex items-center gap-2 text-sm border border-white rounded-3xl px-4 cursor-pointer">
                                <FaGithub size={20} />
                                Github
                            </button>
                        </div>
                    </div>
                </div>
            </div>
        </motion.section>
    );
};

export default Project;
