import Image from "next/image";

const Skill = () => {
    return (
        <div className="mt-[8em] flex flex-col items-center gap-2 w-full">
            <h2 className="font-semibold">FrontEnd</h2>
            <Image
                width={100}
                height={100}
                className="w-full h-[3.4em]"
                src="https://skillicons.dev/icons?i=html,css,next,react,tailwind,bootstrap"
                alt="skills"
            />
            <h2 className="font-semibold">BackEnd</h2>
            <Image
                width={100}
                height={100}
                className="w-full h-[3.4em]"
                src="https://skillicons.dev/icons?i=nodejs,express,firebase,mongo,postgres"
                alt="skills"
            />
        </div>
    );
};

export default Skill;
