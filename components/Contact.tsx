"use client";

import { useAppContext } from "@/context/AppContext";
import React, { useState } from "react";

const Contacts = () => {
    const { contactRef } = useAppContext();
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
        const response = await fetch("/api/contact", {
            method: "POST",
            headers: { "Content-Type": "application/json" },
            body: JSON.stringify(formData),
        });

        const data = await response.json();
        alert(data.message);
    };

    return (
        <section ref={contactRef} className="flex flex-col items-center">
            <svg viewBox="0 0 600 40" className="w-full h-auto">
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
                    fontSize="16"
                    fontWeight="bold"
                    fill="transparent"
                    stroke="url(#strokeGradient)"
                    strokeWidth="0.6"
                    paintOrder="stroke"
                >
                    GET IN TOUCH
                </text>
            </svg>
            <form
                onSubmit={handleSubmit}
                className="flex flex-col gap-1 my-[2em] w-[50vw] md:w-[30vw] outline-none"
            >
                <label htmlFor="naam">Name</label>
                <input
                    id="naam"
                    type="text"
                    onChange={handleChange}
                    className="bg-[#3b3b3b] text-white rounded-lg outline-none p-1 h-[2em]"
                />
                <label htmlFor="email">Email</label>
                <input
                    id="email"
                    type="email"
                    onChange={handleChange}
                    className="bg-[#3b3b3b] text-white rounded-lg outline-none p-1 h-[2em]"
                />
                <label htmlFor="message">Message</label>
                <textarea
                    id="message"
                    onChange={handleChange}
                    className="bg-[#3b3b3b] text-white rounded-lg outline-none p-1 min-h-[6em]"
                ></textarea>
                <button
                    type="submit"
                    className="bg-black dark:bg-white text-white dark:text-black font-bold rounded-2xl py-2 my-4 cursor-pointer"
                >
                    send
                </button>
            </form>
        </section>
    );
};

export default Contacts;
