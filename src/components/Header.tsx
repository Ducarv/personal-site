import { useState } from "react";
import { FaHome, FaFolder, FaCog, FaTools, FaEnvelope } from "react-icons/fa";
import { motion, AnimatePresence } from "framer-motion";
import { Link } from "react-router-dom";

const navItems = [
    { href: "/", icon: <FaHome />, label: "Home" },
    { href: "/experience", icon: <FaCog />, label: "Experience" },
    { href: "/services", icon: <FaFolder />, label: "Services" },
    { href: "/tools", icon: <FaTools />, label: "Tools" },
    { href: "/contact", icon: <FaEnvelope />, label: "Contact" },
];

const dropdownVariants = {
  hidden: { opacity: 0, y: -10 },
  visible: { opacity: 1, y: 0, transition: { duration: 0.3, type: "spring" } },
};

const Header = () => {
  const [openDropdown, setOpenDropdown] = useState<string | null>(null);

  const handleMouseEnter = (label: string) => {
    setOpenDropdown(label);
  };

  const handleMouseLeave = () => {
    setOpenDropdown(null);
  };

  return (
    <header className="p-4 mb-6 rounded-lg rounded-t-none bg-neutral text-neutral-content shadow-md w-full z-50 relative">
      <nav>
        <ul className="flex justify-center space-x-8">
          {navItems.map((item) => (
            <li key={item.label} className="relative flex flex-col items-center">
              <Link
                to={item.href}
                className="flex items-center text-lg transition duration-300 focus:outline-none"
                onMouseEnter={() => handleMouseEnter(item.label)}
                onMouseLeave={handleMouseLeave}
              >
                <span className="p-2 text-2xl">{item.icon}</span>
              </Link>
              <AnimatePresence>
                {openDropdown === item.label && (
                  <motion.div
                    className="absolute top-full mt-2 bg-[#6c757d] bg-opacity-90 text-secondary rounded-lg px-2 py-1 shadow-md whitespace-nowrap text-sm flex justify-center items-center" // Centered content styles
                    variants={dropdownVariants}
                    initial="hidden"
                    animate="visible"
                    exit="hidden"
                    style={{ transform: `translate(-50%, 0)` }}
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