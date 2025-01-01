import { FaNodeJs, FaReact, FaAws } from 'react-icons/fa';
import { RiNextjsLine, RiTailwindCssFill } from "react-icons/ri";
import { SiNestjs, SiGooglecloud, SiMongodb, SiPostgresql } from "react-icons/si";

const Tools = () => {
  const tools = [
    { name: 'Node.js', icon: <FaNodeJs className="text-5xl text-[#343a40]" />, description: 'JavaScript runtime' },
    { name: 'NestJS', icon: <SiNestjs className="text-5xl text-[#343a40]" />, description: 'Node.js Framework' },
    { name: 'ReactJS', icon: <FaReact className="text-5xl text-[#343a40]" />, description: 'JavaScript library' },
    { name: 'Next.js', icon: <RiNextjsLine className="text-5xl text-[#343a40]" />, description: 'React framework' },
    { name: 'Tailwind CSS', icon: <RiTailwindCssFill className="text-5xl text-[#343a40]" />, description: 'CSS framework' },
    { name: 'AWS', icon: <FaAws className="text-5xl text-[#343a40]" />, description: 'Cloud computing platform' },
    { name: 'GCP', icon: <SiGooglecloud className="text-5xl text-[#343a40]" />, description: 'Cloud computing platform' },
    { name: 'MongoDB', icon: <SiMongodb className="text-5xl text-[#343a40]" />, description: 'NoSQL database' },
    { name: 'PostgreSQL', icon: <SiPostgresql className="text-5xl text-[#343a40]" />, description: 'SQL database' },
  ];

  return (
    <section className="p-6 text-secondary bg-[#212529] mb-6 rounded-lg shadow-lg">
      <h2 className="text-3xl font-semibold mb-4 text-primary">My Tools</h2>
      <ul className="grid grid-cols-1 sm:grid-cols-2 gap-4">
        {tools.map((tool, index) => (
          <li key={index} className="flex items-center mb-4 p-2 bg-[#343a40] rounded-lg hover:bg-[#3c4349] transition duration-200 ease-in-out">
            <div className="bg-[#ffc300] p-1 rounded-md">
              {tool.icon}
            </div>
            <div className='ml-4 left'>
              <span className="text-lg font-semibold text-primary left">{tool.name}</span>
              <p className="text-sm text-gray-500 left">{tool.description}</p>
            </div>
          </li>
        ))}
      </ul>
    </section>
  );
};

export default Tools;