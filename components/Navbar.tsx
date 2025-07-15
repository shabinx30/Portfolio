"use client";

import { motion } from "framer-motion";
import React, { useEffect, useRef, useState } from "react";

import { useAppContext } from "@/context/AppContext";

const Navbar = () => {
    const [showNav, setShowNav] = useState<boolean>(true)
    const prevScoll = useRef<number>(0)
    const { projectRef, scroll } = useAppContext();

    const handleScroll = () => {
        if (scroll && projectRef.current) {
            scroll.scrollTo(projectRef?.current, {
                offset: -100,
                duration: 350,
                easing: [0.25, 0.0, 0.35, 1.0],
            });
        }
    };

    useEffect(() => {
        scroll?.on("scroll", (args) => {
            const currScroll = args.scroll.y;

            if(currScroll > prevScoll.current && currScroll > 100) {
                setShowNav(false)
            }else if(currScroll < prevScoll.current) {
                setShowNav(true)
            }

            prevScoll.current = currScroll
        })
    },[scroll])

    return (
        <motion.nav
            className="fixed z-[100] w-[100dvw] flex justify-center items-center pt-5 text-[0.7em] lg:text-[0.8em] font-bold select-none"
            initial={{ y: -100 }}
            animate={{ y: showNav ? 0 : -100 }}
            transition={{
                type: "spring",
                stiffness: 120,
                damping: 25
            }}
        >
            <ul className="w-[80%] md:w-[60%] lg:w-[46%] bg-[#B0FF62] dark:bg-[#272727] dark:text-[#e2ffc5] shadow-2xl flex justify-around items-center rounded-3xl py-4">
                <li className="cursor-pointer">HOME</li>
                <li className="cursor-pointer">SKILLS</li>
                <li className="cursor-pointer" onClick={handleScroll}>PROJECT</li>
                <li className="cursor-pointer">CONTACT</li>
            </ul>
        </motion.nav>
    );
};

export default Navbar;
