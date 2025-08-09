"use client";

import { AnimatePresence, motion } from "framer-motion";
import React, { RefObject, useEffect, useRef, useState } from "react";
import { useAppContext } from "@/context/AppContext";

const Navbar = () => {
    const prevScoll = useRef<number>(0);
    const {
        homeRef,
        skillsRef,
        projectsRef,
        contactRef,
        scroll,
        alert,
        setAlert,
        showNav,
        setShowNav
    } = useAppContext();

    const handleScroll = (section: RefObject<HTMLDivElement | null>) => {
        if (scroll && section?.current) {
            scroll.scrollTo(section?.current, {
                offset: -100,
                duration: 350,
                easing: [0.25, 0.0, 0.35, 1.0],
            });
        }
    };

    useEffect(() => {
        scroll?.on("scroll", (args) => {
            const currScroll = args.scroll.y;

            if (currScroll > prevScoll.current && currScroll > 300) {
                setShowNav(false);
            } else if (currScroll < prevScoll.current) {
                setShowNav(true);
            }

            prevScoll.current = currScroll;
        });
    }, [scroll]);

    useEffect(() => {
        let interval: number;
        if (alert) {
            interval = window.setTimeout(() => {
                setAlert({ status: false, message: "" });
            }, 3000);
        }
        return () => clearInterval(interval);
    }, [alert]);

    return (
        <motion.nav
            className="fixed z-[100] w-[100dvw] text-[0.7em] HN-semi-bold lg:text-[0.84em] font-bold select-none"
            initial={{ y: -100 }}
            animate={{ y: showNav ? 0 : -100 }}
            transition={{
                type: "spring",
                stiffness: 120,
                damping: 25,
            }}
        >
            <div className="relative">
                <ul
                    className={
                        "absolute z-[100] top-5 transition-[width] duration-700 ease-in-out will-change-[width] place-self-center bg-[#B0FF62] dark:bg-[#cfcfcf] dark:text-black shadow-2xl flex justify-around items-center rounded-3xl py-4 " +
                        (alert.status
                            ? "w-[80%] md:w-[60%] lg:w-[50%]"
                            : "w-[calc(80%-(-1em))] md:w-[calc(60%-(-2em))] lg:w-[calc(50%-(-4em))]")
                    }
                >
                    <li
                        className="cursor-pointer"
                        onClick={() => handleScroll(homeRef)}
                    >
                        HOME
                    </li>
                    <li
                        className="cursor-pointer"
                        onClick={() => handleScroll(skillsRef)}
                    >
                        SKILLS
                    </li>
                    <li
                        className="cursor-pointer"
                        onClick={() => handleScroll(projectsRef)}
                    >
                        PROJECT
                    </li>
                    <li
                        className="cursor-pointer"
                        onClick={() => handleScroll(contactRef)}
                    >
                        CONTACT
                    </li>
                </ul>
                <AnimatePresence>
                    {alert.status && (
                        <motion.div
                            initial={{ top: 20, background: "#fff" }}
                            animate={{ top: 90, background: alert.message === "success" ? "#B0FF62" : "#FF6467" }}
                            exit={{ top: 20, background: "#fff" }}
                            transition={{
                                type: "spring",
                                stiffness: 120,
                                damping: 25,
                            }}
                            className={
                                "absolute z-[50] top-5 place-self-center text-black rounded-full pt-2 pb-2.5 px-4 " +
                                (alert.message === "success"
                                    ? "bg-[#B0FF62]"
                                    : "bg-red-400")
                            }
                        >
                            {alert.message}
                        </motion.div>
                    )}
                </AnimatePresence>
            </div>
        </motion.nav>
    );
};

export default Navbar;
