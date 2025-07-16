import Link from "next/link";
import React from "react";
import { FaGithub, FaLinkedin } from "react-icons/fa";
import { SiGmail } from "react-icons/si";

const Footer = () => {
    return (
        <div className="bg-[#2b2b2b] text-sm py-[1em] flex justify-around">
            <p className="text-gray-400 hidden md:block">shabeensharih@gmail.com</p>
            <p className="text-gray-400">
                All rights reserved &copy; 2025{" "}
                <Link className="text-[#C2FF78]" href="https://shabeensharih.online">
                    shabeensharih.online
                </Link>
            </p>
            <div className="flex gap-10 text-white">
                <Link href="https://github.com/shabinx30" target="_blank"><FaGithub /></Link>
                <Link href="https://linkedin.com/in/shabeen-sharih/" target="_blank"><FaLinkedin /></Link>
                <Link href="mailto:shabeensharih@gmail.com" target="_blank"><SiGmail /></Link>
            </div>
        </div>
    );
};

export default Footer;
