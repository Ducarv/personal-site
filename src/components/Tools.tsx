const Tools = () => {
    const tools = ["Framer", "Figma", "WordPress", "ReactJS"];

    return (
        <section className="p-6 text-secondary bg-[#212529] mb-6 rounded-lg shadow-lg">
            <h2 className="text-3xl font-semibold mb-4">Tools</h2>
            <ul className="list-disc list-inside text-lg">
                {tools.map((tool, index) => (
                    <li key={index} className="mb-2">{tool}</li>
                ))}
            </ul>
        </section>
    );
};

export default Tools;
