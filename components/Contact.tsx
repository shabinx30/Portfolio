import React from "react";

const Contacts = () => {
    return (
        <section className="flex flex-col items-center">
            <h1 className="text-2xl HN-medium">Get in touch</h1>
            <form className="flex flex-col my-[2em] w-[50vw] md:w-[30vw] outline-none">
                <label htmlFor="naam">Name</label>
                <input id="naam" type="text" className="bg-[#3b3b3b] rounded-lg outline-none p-1 h-[2em]" />
                <label htmlFor="email">Email</label>
                <input id="email" type="email" className="bg-[#3b3b3b] rounded-lg outline-none p-1 h-[2em]" />
                <label htmlFor="message">Message</label>
                <textarea id="message" className="bg-[#3b3b3b] rounded-lg outline-none p-1 h-[6em]"></textarea>
                <button type="submit" className="bg-black dark:bg-white text-white dark:text-black font-semibold rounded-2xl py-2 my-4 cursor-pointer">send</button>
            </form>
        </section>
    );
};

export default Contacts;
