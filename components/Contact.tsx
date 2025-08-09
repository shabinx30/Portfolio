"use client";

import { useAppContext } from "@/context/AppContext";
import React, { useState } from "react";
import { LiaTelegramPlane } from "react-icons/lia";

const Contacts = () => {
    const { contactRef, setAlert, setShowNav } = useAppContext();
    const [formData, setFormData] = useState({
        naam: "",
        email: "",
        message: "",
    });

    const handleChange = (
        e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>
    ) => {
        setFormData((p) => ({ ...p, [e.target.id]: e.target.value }));
    };

    const handleSubmit = async (e: React.FormEvent<HTMLFormElement>) => {
        e.preventDefault();
        if (!formData.naam || !formData.email || !formData.message) {
            return;
        }
        setShowNav(true)
        const response = await fetch("/api/contact", {
            method: "POST",
            headers: { "Content-Type": "application/json" },
            body: JSON.stringify(formData),
        });

        const data = await response.json();
        if (data.message === "success") {
            setFormData({
                naam: "",
                email: "",
                message: "",
            });
        }
        setAlert({status: true, message: data.message})
        console.log(data.message)
    };

    return (
        <section ref={contactRef} className="flex flex-col items-center">
            <svg
                viewBox="0 0 600 40"
                className="w-full h-[40px] sm:h-[50px] md:h-[60px]"
            >
                <defs>
                    <linearGradient
                        id="strokeGradient"
                        x1="0%"
                        y1="0%"
                        x2="0%"
                        y2="100%"
                    >
                        <stop offset="0%" stopColor="#C2FF78" />
                        <stop offset="50%" stopColor="#C2FF78" />
                        <stop offset="100%" stopColor="#0000" />
                    </linearGradient>
                </defs>

                <text
                    x="50%"
                    y="50%"
                    textAnchor="middle"
                    dominantBaseline="middle"
                    fontSize="32"
                    fontWeight="bold"
                    fill="transparent"
                    stroke="url(#strokeGradient)"
                    strokeWidth="1"
                    paintOrder="stroke"
                >
                    GET IN TOUCH
                </text>
            </svg>
            <p className="text-lg">Let&apos;s build something together</p>
            <form
                onSubmit={handleSubmit}
                className="flex flex-col gap-1 my-[2em] w-[50vw] md:w-[30vw] outline-none"
            >
                <label htmlFor="naam">Name</label>
                <input
                    id="naam"
                    type="text"
                    value={formData.naam}
                    onChange={handleChange}
                    className="bg-[#3b3b3b] text-white rounded-lg outline-none p-1 h-[2em]"
                />
                <label htmlFor="email">Email</label>
                <input
                    id="email"
                    type="email"
                    value={formData.email}
                    onChange={handleChange}
                    className="bg-[#3b3b3b] text-white rounded-lg outline-none p-1 h-[2em]"
                />
                <label htmlFor="message">Message</label>
                <textarea
                    id="message"
                    value={formData.message}
                    onChange={handleChange}
                    className="bg-[#3b3b3b] text-white rounded-lg outline-none p-1 min-h-[6em]"
                ></textarea>
                <button
                    type="submit"
                    className="flex gap-2 justify-center items-end bg-black dark:bg-white text-white dark:text-black font-semibold rounded-2xl pt-2 pb-2.5 my-4 cursor-pointer"
                >
                    <LiaTelegramPlane size={21} />
                    send
                </button>
            </form>
        </section>
    );
};

export default Contacts;
