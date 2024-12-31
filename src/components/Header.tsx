import { useState } from 'react';
import { FaHome, FaFolder, FaCog, FaTools, FaEnvelope } from 'react-icons/fa';
import { motion, AnimatePresence } from 'framer-motion';

const Header = () => {
    const [activeDropdown, setActiveDropdown] = useState<string | null>(null);

    const handleMouseEnter = (label: string) => {
        setActiveDropdown(label);
    };

    const handleMouseLeave = () => {
        setActiveDropdown(null);
    };

    const navItems = [
        { href: "/", icon: <FaHome />, label: "Home" },
        { href: "/projects", icon: <FaFolder />, label: "Projects" },
        { href: "/experience", icon: <FaCog />, label: "Experience" },
        { href: "/tools", icon: <FaTools />, label: "Tools" },
        { href: "/contact", icon: <FaEnvelope />, label: "Contact" },
    ];

    const dropdownVariants = {
        hidden: { opacity: 0, y: -10 },
        visible: { opacity: 1, y: 0, transition: { duration: 0.2, type: "tween" } },
    };

    return (
        <header className="p-2 mb-6 rounded-lg bg-neutral text-neutral-content shadow-md w-full z-50">
            <nav>
                <ul className="flex justify-center space-x-8">
                    {navItems.map((item) => (
                        <li
                            key={item.label}
                            onMouseEnter={() => handleMouseEnter(item.label)}
                            onMouseLeave={handleMouseLeave}
                            className="relative"
                        >
                            <a
                                href={item.href}
                                className="flex items-center text-lg transition duration-300"
                                aria-label={item.label}
                            >
                                <span className="p-2 text-2xl">{item.icon}</span>
                            </a>
                            <AnimatePresence>
                                {activeDropdown === item.label && (
                                    <motion.div
                                        className="absolute bg-[#6c757d] bg-opacity-90 text-secondary rounded-lg px-2 shadow-md w-max left-1/2 -translate-x-1/2 whitespace-nowrap text-sm"
                                        variants={dropdownVariants}
                                        initial="hidden"
                                        animate="visible"
                                        exit="hidden"
                                    >
                                        {item.label}
                                    </motion.div>
                                )}
                            </AnimatePresence>
                        </li>
                    ))}
                </ul>
            </nav>
        </header>
    );
};

export default Header;
