"use client";

import React, { useRef } from "react";
import Image from "next/image";
import { useAppContext } from "@/context/AppContext";

const Project = () => {
    const { projectRef } = useAppContext();
    // const videoRef = useRef<HTMLVideoElement>(null)

    // navigator.mediaDevices.getUserMedia({ video: true })
    // .then((stream) => {
    //     if(videoRef.current) {
    //         videoRef.current.srcObject = stream;
    //     }
    // })
    // .catch((err) => {
    //   console.error('Error accessing camera:', err);
    // });

    const pjs = [1,];

    return (
        <section
            ref={projectRef}
            className="w-[100dvw] h-[150vh] pt-[8em] px-[4em]"
        >
            
            <div>

            </div>
            {/* projects */}
            <div className="flex relative justify-between gap-4 h-[26em]">
                <div className="bg-[#282828] rounded-2xl h-full w-[46%] border border-[#484848]">
                    <Image className="w-full rounded-2xl" src="/Images/second_project.png" alt="first_project" width={100} height={90}/>
                    <div className="flex px-4">
                        <p>Flex work</p>
                    </div>
                </div>
                <div className="bg-[#282828] absolute rounded-3xl right-0 bottom-0 h-[80%] w-[36%] border border-[#484848]">
                    <Image className="w-full rounded-2xl" src="/Images/netflix_clone.png" alt="first_project" width={100} height={90}/>
                    {/* <video ref={videoRef} autoPlay ></video> */}
                </div>
            </div>
        </section>
    );
};

export default Project;
