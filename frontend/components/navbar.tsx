"use client";

import { motion } from "framer-motion";
import Link from "next/link";
import React from "react";

const navbar = () => {
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
                <li><Link href={'#project'}>PROJECTS</Link></li>
                <li>SKILLS</li>
                <li>CONTACT</li>
            </ul>
        </motion.nav>
    );
};

export default navbar;
