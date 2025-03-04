"use client"

import { motion } from "framer-motion";

export default function Navbar() {
    return (
        <>
            <motion.nav
                initial={{ y: "-100%", opacity: 0 }}
                animate={{ y: 0, opacity: 1 }}
                transition={{
                    type: "spring",
                    stiffness: 120,
                    damping: 25,
                    duration: 1,
                    delay: 0.5,
                }}
                className="flex justify-between gap-[40%] w-full border-b border-[#2e2e2e] text-white p-4 shadow-lg"
            >
                <motion.div
                    initial={{ width: 0, marginRight: "5em" }}
                    animate={{ width: "20em", marginRight: "0" }}
                    transition={{
                        type: "spring",
                        stiffness: 120,
                        damping: 30,
                        duration: 2,
                        delay: 1,
                    }}
                    className="border-2 border-white font-bold flex justify-between backdrop-blur-xs w-[30em] rounded-full px-8 py-2"
                >
                    <motion.p 
                        initial={{ y: "100%", opacity: 0 }}
                        animate={{ y: 0, opacity: 1 }}
                        transition={{
                            type: "spring",
                            stiffness: 120,
                            damping: 25,
                            duration: 1,
                            delay: 1,
                        }}
                        className="text-white"
                    >HOME</motion.p>
                    <motion.p 
                        initial={{ y: "100%", opacity: 0 }}
                        animate={{ y: 0, opacity: 1 }}
                        transition={{
                            type: "spring",
                            stiffness: 120,
                            damping: 25,
                            duration: 1,
                            delay: 1.25,
                        }}
                        className="text-white"
                    >PROJECT</motion.p>
                    <motion.p 
                        initial={{ y: "100%", opacity: 0 }}
                        animate={{ y: 0, opacity: 1 }}
                        transition={{
                            type: "spring",
                            stiffness: 120,
                            damping: 25,
                            duration: 1,
                            delay: 1.5,
                        }}
                        className="text-white"
                    >ABOUT</motion.p>
                </motion.div>
                <button className="cursor-pointer border-2 border-white mr-4 py-2 px-5 rounded-full font-bold">
                    CONTACT
                </button>
            </motion.nav>
        </>
    );
}
