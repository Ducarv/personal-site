import { FaHome, FaCog, FaFolder, FaTools, FaEnvelope } from "react-icons/fa";

const Footer = () => {
    const navItems = [
        { href: "/", icon: <FaHome />, label: "Home" },
        { href: "/experience", icon: <FaCog />, label: "Experience" },
        { href: "/services", icon: <FaFolder />, label: "Services" },
        { href: "/tools", icon: <FaTools />, label: "Tools" },
        { href: "/contact", icon: <FaEnvelope />, label: "Contact" },
    ];

    return (
        <section className="p-6 text-secondary bg-[#212529] rounded-lg rounded-b-none shadow-lg text-center">
            <h2 className="text-xl text-primary font-normal my-4">
                Eduardo
            </h2>
            <ul className="flex flex-col items-center justify-center sm:flex-row sm:space-x-4">
                {navItems.map(item => (
                    <li className="m-2 font-light text-sm hover:text-primary transition duration-200 ease-in-out">
                        {item.label}
                    </li>
                ))}
            </ul>
            <div className="divider divider-primary"></div>
            <p className="text-xs font-light">Made by <span className="hover:text-primary transition duration-200 ease-in-out">Eduardo Carvalho</span></p>
        </section>
    );
};

export default Footer;
