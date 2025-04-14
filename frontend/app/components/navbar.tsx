"use client"

import { motion } from "framer-motion";
import { useAppContext } from "../context/AppContext";

export default function Navbar() {

    const { isInView, setIsPointer } = useAppContext()

    const handleClick = () => {
        setIsPointer(true)
        setTimeout(() => {
            setIsPointer(false)
        },200)
    }

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
                className={`flex fixed top-0 z-50 justify-between w-full transition-all duration-500 ease-in-out ${!isInView ? 'text-white backdrop-blur-md' : 'text-black'} p-4`}
            >
                <ul
                    className="pl-[3em] font-bold flex justify-between w-[18em] items-center"
                >
                    <li onMouseEnter={() => setIsPointer(true)} onMouseLeave={() => setIsPointer(false)}>HOME</li>
                    <li onMouseEnter={() => setIsPointer(true)} onMouseLeave={() => setIsPointer(false)}>PROJECTS</li>
                </ul>
                <ul
                    className="pr-[3em] font-bold flex justify-between w-[18em] items-center"
                >
                    <li onMouseEnter={() => setIsPointer(true)} onMouseLeave={() => setIsPointer(false)}>ABOUT</li>
                    <li onMouseEnter={() => setIsPointer(true)} onMouseLeave={() => setIsPointer(false)}>CONTACT</li>
                </ul>
            </motion.nav>
        </>
    );
}
