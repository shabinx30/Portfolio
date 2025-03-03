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
                className="flex justify-end w-full border-b border-[#2e2e2e] text-white p-4 shadow-lg"
            >
                <button className="cursor-pointer border-2 border-white mr-4 py-2 px-5 rounded-full font-bold">
                    CONTACT
                </button>
            </motion.nav>
        </>
    );
}
