import Image from "next/image";

const SkillItems = ({ skill }: { skill: string | { name: string; icon: string } }) => {
    const isObject = typeof skill === "object";

    return (
        <div className="bg-black dark:bg-[#fff] HN-semi-bold text-white dark:text-black pr-3 rounded-lg flex items-center gap-2">
            <Image
                width={100}
                height={100}
                className="w-[1.8em]"
                src={`https://skillicons.dev/icons?i=${isObject ? skill.icon : skill}`}
                alt={isObject ? skill.name : skill}
            />
            {isObject ? skill.name : skill}
        </div>
    );
};

export default SkillItems;
