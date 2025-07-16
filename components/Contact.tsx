"use client";

import React, { useState } from "react";

const Contacts = () => {
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

        const data = await response.json()
        alert(data.message)
    };

    return (
        <section className="flex flex-col items-center">
            <h1 className="text-2xl HN-medium">Get in touch</h1>
            <form
                onSubmit={handleSubmit}
                className="flex flex-col gap-1 my-[2em] w-[50vw] md:w-[30vw] outline-none"
            >
                <label htmlFor="naam">Name</label>
                <input
                    id="naam"
                    type="text"
                    onChange={handleChange}
                    className="bg-[#3b3b3b] rounded-lg outline-none p-1 h-[2em]"
                />
                <label htmlFor="email">Email</label>
                <input
                    id="email"
                    type="email"
                    onChange={handleChange}
                    className="bg-[#3b3b3b] rounded-lg outline-none p-1 h-[2em]"
                />
                <label htmlFor="message">Message</label>
                <textarea
                    id="message"
                    onChange={handleChange}
                    className="bg-[#3b3b3b] rounded-lg outline-none p-1 min-h-[6em]"
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
