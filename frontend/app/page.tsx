import Navbar from "./components/navbar";
import SmoothScrollWrapper from "./components/wrapper/SmoothScrollWrapper";


interface ProfileData {
  name: string;
  intro: string;
  skillsDescription: string;
}

export async function generateStaticParams() {
  return [];
}


export default async function Home() {
  
  const profile: ProfileData = {
    name: "Shabeen Sharih",
    intro: "I'm a highly passionate web developer, constantly challenging my problem-solving skills and striving for consistency. Every day, I work diligently to enhance my abilities and grow in my craft.",
    skillsDescription: "As a Full Stack Developer, I specialize in web development, combining frontend development & backend development to build seamless digital experiences. My expertise includes modern frameworks like React.js & Next.js, alongside robust server-side technologies such as Node.js & TypeScript. With strong skills in MongoDB, PostgreSQL, & RESTful APIs, I efficiently manage databases & ensure data integrity. I focus on responsive design, web performance optimization, & UI/UX design to deliver user-friendly interfaces. Leveraging tools like Git for version control, I thrive in Agile development environments & am experienced in cloud deployment solutions. My goal is to build scalable, high-performance web applications that enhance user engagement & drive business growth."
  };

  return (
    <SmoothScrollWrapper>
      <Navbar />
      <div className="py-[10em] px-[5em]">
        <p className="pb-[10em] text-[#7d7d7d]">
          Hello, I&#39;m {profile.name}. {profile.intro}
        </p>
        <p className="pb-[10em] text-[#7d7d7d]">
          {profile.skillsDescription}
        </p>
        <p className="pb-[10em] text-[#7d7d7d]">
          Hello, I&#39;m {profile.name}. {profile.intro}
        </p>
        <p className="pb-[10em] text-[#7d7d7d]">
          Hello, I&#39;m {profile.name}. {profile.intro}
        </p>
        <p className="pb-[10em] text-[#7d7d7d]">
          Hello, I&#39;m {profile.name}. {profile.intro}
        </p>
        <p className="pb-[10em] text-[#7d7d7d]">
          It is a long established fact that a reader will be distracted by the readable content of a page when looking at its layout. The point of using Lorem Ipsum is that it has a moreorless normal distribution of letters as opposed to using Content here content here making it look like readable English. Many desktop publishing packages and web page editors now use Lorem Ipsum as their default model text and a search for lorem ipsum will uncover many web sites still in their infancy. Various versions have evolved over the years sometimes by accident sometimes on purpose injected humour and the like.
        </p>
        <p className="pb-[10em] text-[#7d7d7d]">
          It is a long established fact that a reader will be distracted by the readable content of a page when looking at its layout. The point of using Lorem Ipsum is that it has a moreorless normal distribution of letters as opposed to using Content here content here making it look like readable English. Many desktop publishing packages and web page editors now use Lorem Ipsum as their default model text and a search for lorem ipsum will uncover many web sites still in their infancy. Various versions have evolved over the years sometimes by accident sometimes on purpose injected humour and the like.
        </p>
        <p className="pb-[10em] text-[#7d7d7d]">
          It is a long established fact that a reader will be distracted by the readable content of a page when looking at its layout. The point of using Lorem Ipsum is that it has a moreorless normal distribution of letters as opposed to using Content here content here making it look like readable English. Many desktop publishing packages and web page editors now use Lorem Ipsum as their default model text and a search for lorem ipsum will uncover many web sites still in their infancy. Various versions have evolved over the years sometimes by accident sometimes on purpose injected humour and the like.
        </p>
        <p className="pb-[10em] text-[#7d7d7d]">
          It is a long established fact that a reader will be distracted by the readable content of a page when looking at its layout. The point of using Lorem Ipsum is that it has a moreorless normal distribution of letters as opposed to using Content here content here making it look like readable English. Many desktop publishing packages and web page editors now use Lorem Ipsum as their default model text and a search for lorem ipsum will uncover many web sites still in their infancy. Various versions have evolved over the years sometimes by accident sometimes on purpose injected humour and the like.
        </p>
        <p className="pb-[10em] text-[#7d7d7d]">
          It is a long established fact that a reader will be distracted by the readable content of a page when looking at its layout. The point of using Lorem Ipsum is that it has a moreorless normal distribution of letters as opposed to using Content here content here making it look like readable English. Many desktop publishing packages and web page editors now use Lorem Ipsum as their default model text and a search for lorem ipsum will uncover many web sites still in their infancy. Various versions have evolved over the years sometimes by accident sometimes on purpose injected humour and the like.
        </p>
        <p className="text-[#7d7d7d]">
          {profile.skillsDescription}
        </p>
      </div>
    </SmoothScrollWrapper>
  );
}