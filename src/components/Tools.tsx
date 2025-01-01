import { FaNodeJs, FaReact, FaAws } from 'react-icons/fa';
import { RiNextjsLine, RiTailwindCssFill } from "react-icons/ri";
import { SiNestjs, SiGooglecloud, SiMongodb, SiPostgresql  } from "react-icons/si";

const Tools = () => {
  const tools = [
    { name: 'NodeJS', icon: <FaNodeJs className="text-4xl text-primary" /> },
    { name: 'ReactJS', icon: <FaReact className="text-4xl text-primary" /> },
    { name: 'NextJS', icon: <RiNextjsLine className="text-4xl text-primary" /> },
    { name: 'AWS', icon: <FaAws className="text-4xl text-primary" /> },
    { name: 'GCP', icon: <SiGooglecloud className="text-4xl text-primary" /> },
    { name: 'MongoDB', icon: <SiMongodb className="text-4xl text-primary" /> },
    { name: 'PostgreSQL', icon: <SiPostgresql className="text-4xl text-primary" /> },
    { name: 'NestJS', icon: <SiNestjs className="text-4xl text-primary" /> },
    { name: 'Tailwind CSS', icon: <RiTailwindCssFill className="text-4xl text-primary" /> },
  ];

  return (
    <section className="p-6 text-secondary bg-[#212529] mb-6 rounded-lg shadow-lg">
      <h2 className="text-3xl font-semibold mb-4 text-primary">Tools</h2>
      <ul className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-4"> {/* Responsive grid */}
        {tools.map((tool, index) => (
          <li key={index} className="flex items-center">
            {tool.icon}
            <span className="text-lg font-semibold ml-4 text-primary">{tool.name}</span>
          </li>
        ))}
      </ul>
    </section>
  );
};

export default Tools;