"use client"

import { motion, useInView } from "framer-motion"
import { useEffect, useRef } from "react";
import { useAppContext } from "../context/AppContext";

const Hero = () => {
    const { setView } = useAppContext()

    const targetRef = useRef(null);
    const isView = useInView(targetRef, { margin: '-50% 0px -50% 0px' });

    useEffect(() => {
        setView(isView)
    }, [isView])

    return (
        <section ref={targetRef} className="h-[90vh] bg-gradient-to-b from-[#1cff99] to-[--background] text-black">
            <div className="w-full pt-[6em]">
                <h1 className="text-5xl leading-0 cu-head flex justify-center">
                    WELCOME TO MY DIGITAL PLAYGROUND,
                </h1>
                <div className="main">
                    <motion.div
                        initial={{ rotateX: 0.5 }}
                        animate={{ rotateX: 89.5 }}
                        transition={{
                            type: "spring",
                            stiffness: 120,
                            damping: 25,
                            duration: 5,
                            delay: 3,
                        }}
                        className="cube"
                    >
                        <div className="front flex justify-center">
                            <h1 className="text-[8em] leading-[.8] cu-head">
                                WHERE IMAGINATION MEETS INNOVATION
                            </h1>
                        </div>
                        <div className="bottom">
                            <h1 className="text-[8em] leading-[.8] cu-head">
                                I&apos;M SHABEEN SHARIH
                            </h1>
                        </div>
                    </motion.div>
                </div>
            </div>
        </section>
    )
}

export default Hero