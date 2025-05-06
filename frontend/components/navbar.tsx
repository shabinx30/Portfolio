"use client";

import { motion } from "framer-motion";
import React from "react";

import { useAppContext } from "@/context/AppContext";

const navbar = () => {
    const { projectRef, scroll } = useAppContext();

    const handleScroll = () => {
        if (scroll && projectRef.current) {
            scroll.scrollTo(projectRef.current, {
                offset: 0,
                duration: 1000,
                easing: [0.25, 0.0, 0.35, 1.0],
            });
        }
    };

    return (
        <motion.nav
            className="fixed z-[100] w-full flex justify-center items-center pt-5 text-[0.8em] text-[#C2FF78]"
            initial={{ y: -100 }}
            animate={{ y: 0 }}
            transition={{
                type: "spring",
                stiffness: 120,
                damping: 25,
                duration: 1,
                delay: 0.5,
            }}
        >
            <ul className="w-[40%] bg-[#282828] flex justify-between px-[3.4vw] items-center rounded-full py-4">
                <li className="cursor-pointer" onClick={handleScroll}>PROJECTS</li>
                <li className="cursor-pointer">SKILLS</li>
                <li className="cursor-pointer">CONTACT</li>
            </ul>
        </motion.nav>
    );
};

export default navbar;
