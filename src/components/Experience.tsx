import React from 'react';

interface ExperienceItem {
    company: string;
    role: string;
    description: string;
    startDate: string;
    endDate: string;
}

interface ExperienceProps {
    showTitle?: boolean;
}

const Experience: React.FC<ExperienceProps> = ({ showTitle = true }: ExperienceProps) => {
    const experiences: ExperienceItem[] = [
        {
            company: "Compass.UOL",
            role: "Software Engineer",
            description: "Experienced software engineer leading back-end architecture for large-scale projects. Proficient in building scalable, secure, and high-performance systems using NestJS, Fastify, TypeScript, and GCP cloud services (Cloud Functions, Cloud Scheduler, BigQuery).",
            startDate: "Jun 2024",
            endDate: "Present",
        },
        {
            company: "Compass.UOL",
            role: "Software Engineer Intern",
            description: "Intern software engineer with hands-on experience in Node.js, TypeScript, and JavaScript. Familiar with building scalable systems, using Express and MongoDB, and implementing security practices. Proficient in cloud services and Agile methodologies.",
            startDate: "Oct 2023",
            endDate: "Mar 2024",
        }
    ];

    return (
        <section className="p-6 text-secondary bg-[#212529] mb-6 rounded-lg shadow-lg">
            {showTitle && <h2 className="text-3xl font-semibold mb-4 text-primary">Experiences</h2>}
            {experiences.map((experience, index) => (
               <div key={index} className="mb-6 p-2 px-4 last:mb-0 bg-[#343a40] rounded-lg hover:bg-[#3c4349] transition duration-200 ease-in-out">
                <h3 className="text-xl font-semibold mb-2">{experience.company} - {experience.role}</h3>
                <p className="text-base text-gray-400 mb-1 leading-relaxed">
                    {experience.description}
                </p>
                <p className="text-base text-gray-400 mt-4">
                    {experience.startDate} - {experience.endDate}
                </p>
             </div>
            ))}
        </section>
    );
};

export default Experience;
