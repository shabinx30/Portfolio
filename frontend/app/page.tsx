import Navbar from "./components/navbar";
import SmoothScrollWrapper from "./components/wrapper/SmoothScrollWrapper";
// import FlowingMenu from "./components/FlowingMenu/FlowingMenu";
import Hero from "./components/Hero";
import Cursor from "./components/Cursor"



interface ProfileData {
    name: string;
    intro: string;
    skillsDescription: string;
    img: string;
}

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

    const profile: ProfileData = {
        name: "Shabeen Sharih",
        intro: "I'm a highly passionate web developer, constantly challenging my problem-solving skills and striving for consistency. Every day, I work diligently to enhance my abilities and grow in my craft.",
        skillsDescription: "As a Full Stack Developer, I specialize in web development, combining frontend development & backend development to build seamless digital experiences. My expertise includes modern frameworks like React.js & Next.js, alongside robust server-side technologies such as Node.js & TypeScript. With strong skills in MongoDB, PostgreSQL, & RESTful APIs, I efficiently manage databases & ensure data integrity. I focus on responsive design, web performance optimization, & UI/UX design to deliver user-friendly interfaces. Leveraging tools like Git for version control, I thrive in Agile development environments & am experienced in cloud deployment solutions. My goal is to build scalable, high-performance web applications that enhance user engagement & drive business growth.",
        img: "https://instagram.fcok10-4.fna.fbcdn.net/v/t51.2885-19/476501464_1523240058345855_3565333406899966342_n.jpg?_nc_ht=instagram.fcok10-4.fna.fbcdn.net&_nc_cat=103&_nc_oc=Q6cZ2AFeCYm11zBCiIvc8RQQ7g8rjat-Hg43kkkkkwySQw51EW8GmSVV9uSRTuohHRb8jRZXfGz8qY4J34vgW76V-eT9&_nc_ohc=RUriHpRQhYsQ7kNvgFuVKph&_nc_gid=752596427b0a4110bb2db4995adcc603&edm=ALGbJPMBAAAA&ccb=7-5&oh=00_AYFB6aPeQ4gRFk4AQtXOU8x_3p2yRVnSrlcsYGcB7Ojogw&oe=67D3705A&_nc_sid=7d3ac5"
    };

    return (
        <>
            <Cursor/>
            <Navbar />
            <SmoothScrollWrapper>
                <section className="h-[10vh] bg-[#1cff99]"></section>
                <Hero/>
                <section className="py-[10em] px-[5em] bg-black text-white">
                    {/* <div className="w-[75%]" style={{ height: '200px', position: 'relative' }}>
                        <FlowingMenu items={demoItems} />
                    </div> */}
                    <p className="pb-[10em]">
                        Hello, I&#39;m {profile.name}. {profile.intro}
                    </p>
                    <p className="pb-[10em]">
                        Hello, I&#39;m {profile.name}. {profile.intro}
                    </p>
                    <p className="pb-[10em]">
                        Hello, I&#39;m {profile.name}. {profile.intro}
                    </p>
                    <p className="pb-[10em]">
                        It is a long established fact that a reader will be distracted by the readable content of a page when looking at its layout. The point of using Lorem Ipsum is that it has a moreorless normal distribution of letters as opposed to using Content here content here making it look like readable English. Many desktop publishing packages and web page editors now use Lorem Ipsum as their default model text and a search for lorem ipsum will uncover many web sites still in their infancy. Various versions have evolved over the years sometimes by accident sometimes on purpose injected humour and the like.
                    </p>
                    <p className="pb-[10em]">
                        It is a long established fact that a reader will be distracted by the readable content of a page when looking at its layout. The point of using Lorem Ipsum is that it has a moreorless normal distribution of letters as opposed to using Content here content here making it look like readable English. Many desktop publishing packages and web page editors now use Lorem Ipsum as their default model text and a search for lorem ipsum will uncover many web sites still in their infancy. Various versions have evolved over the years sometimes by accident sometimes on purpose injected humour and the like.
                    </p>
                    <p className="pb-[10em]">
                        It is a long established fact that a reader will be distracted by the readable content of a page when looking at its layout. The point of using Lorem Ipsum is that it has a moreorless normal distribution of letters as opposed to using Content here content here making it look like readable English. Many desktop publishing packages and web page editors now use Lorem Ipsum as their default model text and a search for lorem ipsum will uncover many web sites still in their infancy. Various versions have evolved over the years sometimes by accident sometimes on purpose injected humour and the like.
                    </p>
                    <p className="pb-[10em]">
                        It is a long established fact that a reader will be distracted by the readable content of a page when looking at its layout. The point of using Lorem Ipsum is that it has a moreorless normal distribution of letters as opposed to using Content here content here making it look like readable English. Many desktop publishing packages and web page editors now use Lorem Ipsum as their default model text and a search for lorem ipsum will uncover many web sites still in their infancy. Various versions have evolved over the years sometimes by accident sometimes on purpose injected humour and the like.
                    </p>
                    <p className="pb-[10em]">
                        It is a long established fact that a reader will be distracted by the readable content of a page when looking at its layout. The point of using Lorem Ipsum is that it has a moreorless normal distribution of letters as opposed to using Content here content here making it look like readable English. Many desktop publishing packages and web page editors now use Lorem Ipsum as their default model text and a search for lorem ipsum will uncover many web sites still in their infancy. Various versions have evolved over the years sometimes by accident sometimes on purpose injected humour and the like.
                    </p>
                    <p className="">
                        {profile.skillsDescription}
                    </p>
                </section>
            </SmoothScrollWrapper>
        </>
    );
}