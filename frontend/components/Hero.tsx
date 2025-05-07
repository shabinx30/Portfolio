"use client";

import React from "react";
import { motion } from "framer-motion";

const Hero = () => {
    return (
        <section className="relative h-[100dvh] w-[100vw] bg-black">
            <div className="absolute flex justify-center pt-[14%] bg-[black]/30 z-40 backdrop-blur-[50px] h-[116dvh] w-[100vw]">
                <div className="text-center w-[47%]">
                    <h1 className="text-4xl text-[#C2FF78] mb-2">HELLO,</h1>
                    <h1 className="text-5xl">I&apos;M SHABEEN SHARIH</h1>
                    <p className="text-[#AEAEAE] text-[0.8em] mt-8">
                        I&apos;m a highly passionate web developer, constantly
                        challenging my problem-solving skills and striving for
                        consistency. Every day, I work diligently to enhance my
                        abilities and grow in my craft.
                    </p>
                </div>
            </div>
            <div className="absolute bottom-[-3em] z-50 flex justify-center items-center w-full">
                <h1 className="text-white text-4xl">
                    PROJECTS
                </h1>
            </div>
            <motion.div
                className="absolute bottom-[22%] right-[0%] rotate-[20deg] bg-[#8CFF00] w-[10em] h-[50%] rounded-full"
                animate={{ y: ["10%", "-10%", "10%"] }}
                transition={{
                    duration: 5,
                    repeat: Infinity,
                    ease: "easeIn",
                }}
            />
            <div className="absolute bottom-[-2%] right-[3em] rotate-[75deg] bg-[#8CFF00] w-[14em] h-[50%] rounded-full" />
            <motion.div
                className="absolute bottom-0 right-[26%] rotate-[-25deg] bg-[#8CFF00] w-[18%] h-[40%] rounded-full"
                animate={{ x: ["5%", "-5%", "5%"] }}
                transition={{
                    duration: 5,
                    repeat: Infinity,
                    ease: "easeIn",
                    delay: 0.2,
                }}
            />
            <div className="absolute bottom-0 right-[20%] bg-[#8CFF00] w-[8em] h-[30%] rounded-full" />
            <motion.div
                className="absolute bottom-8 left-0 rotate-[65deg] bg-[#8CFF00] w-[20%] h-[30%] rounded-full"
                animate={{ x: ["10%", "-10%", "10%"] }}
                transition={{
                    duration: 5,
                    repeat: Infinity,
                    ease: "easeIn",
                    delay: 0.6,
                }}
            />
            <div className="absolute bottom-8 left-0 rotate-[-30deg] bg-[#8CFF00] w-[20%] h-[20%] rounded-full" />
            <div className="absolute bottom-4 left-[16%] rotate-[10deg] bg-[#8CFF00] w-[20%] h-[10%] rounded-full" />
            <motion.div
                className="absolute bottom-2 left-[40%]  bg-[#8CFF00] w-[20%] h-[15%] rounded-full"
                animate={{ x: ["10%", "-10%", "10%"] }}
                transition={{
                    duration: 5,
                    repeat: Infinity,
                    ease: "easeIn",
                    delay: 0.4,
                }}
            />
        </section>
    );
};

export default Hero;
