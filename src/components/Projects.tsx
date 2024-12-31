const Projects = () => {
    const projects = [
        "SaaS Framer Template",
        "Website Builder",
        "AI Assistant",
        "Productivity Tool"
    ];

    return (
        <section className="p-6 text-secondary bg-[#212529] mb-6 rounded-lg shadow-lg">
            <h2 className="text-3xl font-semibold mb-4 text-primary">Projects</h2>
            <ul className="list-disc list-inside text-lg">
                {projects.map((project, index) => (
                    <li key={index} className="mb-2">{project}</li>
                ))}
            </ul>
        </section>
    );
};

export default Projects;
