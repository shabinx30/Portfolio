// import FlowingMenu from "./components/FlowingMenu/FlowingMenu";
import Hero from "../components/Hero";
import Project from "@/components/Project";

export async function generateStaticParams() {
    return [];
}

export default async function Home() {
    // const demoItems = [
    //     { link: '#', text: 'Web Development', image: 'https://picsum.photos/600/400?random=1' },
    //     { link: '#', text: 'UI/UX', image: 'https://picsum.photos/600/400?random=2' },
    //     // { link: '#', text: 'Monterey', image: 'https://picsum.photos/600/400?random=3' },
    //     // { link: '#', text: 'Sequoia', image: 'https://picsum.photos/600/400?random=4' }
    // ];

    return (
        <>
            <Hero />
            <Project />
        </>
    );
}
