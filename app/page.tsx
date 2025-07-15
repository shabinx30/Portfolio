// "use client"
// import FlowingMenu from "./components/FlowingMenu/FlowingMenu";
import Hero from "../components/Hero";
import Skill from "@/components/Skills";
import Project from "@/components/Projects";
import Footer from "@/components/Footer";
// import { useEffect } from "react";

// export async function generateStaticParams() {
//     return [];
// }

export default function Home() {
    // const demoItems = [
    //     { link: '#', text: 'Web Development', image: 'https://picsum.photos/600/400?random=1' },
    //     { link: '#', text: 'UI/UX', image: 'https://picsum.photos/600/400?random=2' },
    //     // { link: '#', text: 'Monterey', image: 'https://picsum.photos/600/400?random=3' },
    //     // { link: '#', text: 'Sequoia', image: 'https://picsum.photos/600/400?random=4' }
    // ];

    // useEffect(() => {
    //     const handleScroll = (e: any) => {
    //         console.log(e)
    //     }

    //     window.addEventListener("scroll", handleScroll)
    //     return () => {
    //         window.removeEventListener("scroll", handleScroll)
    //     }
    // })


    return (
        <>
            <Hero />
            <Skill />
            <Project />
            <Footer />
        </>
    );
}
