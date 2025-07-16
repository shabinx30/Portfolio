import Hero from "../components/Hero";
import Skill from "@/components/skill/Skills";
import Project from "@/components/project/Projects";
import Footer from "@/components/Footer";
import Contact from "@/components/Contact";


export default function Home() {
    return (
        <>
            <Hero />
            <Skill />
            <Project />
            <Contact />
            <Footer />
        </>
    );
}
