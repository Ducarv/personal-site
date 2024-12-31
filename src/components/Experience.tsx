import React from 'react';

interface ExperienceItem {
    company: string;
    description: string;
    startDate: string;
    endDate: string;
}

const Experience: React.FC = () => {
    const experiences: ExperienceItem[] = [
        {
            company: "Compass.UOL",
            description: "Experienced software engineer leading back-end architecture for large-scale projects. Proficient in building scalable, secure, and high-performance systems using NestJS, Fastify, TypeScript, and GCP cloud services (Cloud Functions, Cloud Scheduler, BigQuery).",
            startDate: "Jun 2024",
            endDate: "Present",
        }
    ];

    return (
        <section className="p-6 text-secondary bg-[#212529] mb-6 rounded-lg shadow-lg">
            <h2 className="text-3xl font-semibold mb-4 text-primary">Experiences</h2>
            {experiences.map((experience, index) => (
               <div key={index} className="mb-6 p-2 last:mb-0 hover:bg-[#343a40] rounded-lg transition duration-300 ease-in-out transform hover:scale-105">
                <h3 className="text-xl font-semibold mb-2">{experience.company}</h3>
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
