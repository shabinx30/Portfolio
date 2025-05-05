'use client';

import { useEffect, useState } from 'react';
import { motion } from 'framer-motion';
import { useAppContext } from '../context/AppContext';

export default function CustomCursor() {
    const [position, setPosition] = useState({ x: 0, y: 0 });
    const { isPointer } = useAppContext()

    useEffect(() => {
        const move = (e: MouseEvent) => {
            setPosition({ x: e.clientX, y: e.clientY });
        };
        window.addEventListener('mousemove', move);
        return () => window.removeEventListener('mousemove', move);
    }, []);

    return (
        <motion.div
            className={`flex justify-center bg-[#3535   35] items-center pointer-events-none fixed top-0 left-0 z-[9999] ${isPointer ? 'w-18' : 'w-5'} h-5 rounded-full mix-blend-difference bg-white`}
            animate={{
                x: position.x, // center the cursor
                y: position.y,
                scale: isPointer ? 2 : 1
            }}
            transition={{
                type: 'tween',stiffness: 500,
                damping: 30,
                duration: 0.1
            }}
        ><p className='text-[#000] mix-blend-overlay text-[0.5em]'>{isPointer? 'CHECKOUT' : ''}</p></motion.div>
    );
}
