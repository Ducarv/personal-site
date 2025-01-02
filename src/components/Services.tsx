import { Link, useLocation } from 'react-router-dom'
import {
  FaCode,
  FaObjectGroup,
  FaCloudUploadAlt,
  FaRobot,
  FaTasks,
  FaHeadset,
} from "react-icons/fa";

const services = [
  {
    title: "Software Development",
    description:
      "We develop custom software solutions, from web and mobile applications to complex systems. We use the latest technologies to ensure performance and scalability.",
    icon: <FaCode className="text-5xl text-primary"/>,
    price: 1500,
  },
  {
    title: "Software Architecture Design",
    description:
      "We create robust and scalable architectures for your projects, focusing on maintainability, security, and performance. We plan the ideal structure for your system.",
    icon: <FaObjectGroup className="text-5xl text-primary"/>,
    price: 2000,
  },
  {
    title: "Deployment and Infrastructure",
    description:
      "We configure and manage your infrastructure in the cloud (AWS, Azure, GCP) or on-premises, ensuring high availability, security, and cost optimization.",
    icon: <FaCloudUploadAlt className="text-5xl text-primary"/>,
    price: 1800,
  },
  {
    title: "AI Assistant Development",
    description:
      "We develop intelligent virtual assistants with natural language processing (NLP) and machine learning, automating tasks and improving user interaction.",
    icon: <FaRobot className="text-5xl text-primary"/>,
    price: 2500,
  },
  {
    title: "Project Management",
    description:
      "We manage your software projects with agile methodologies, ensuring on-time delivery, budget adherence, and quality. Full monitoring from start to finish.",
    icon: <FaTasks className="text-5xl text-primary"/>,
    price: 1200,
  },
  {
    title: "Support and Maintenance",
    description:
      "We offer specialized technical support and ongoing maintenance for your applications, ensuring proper functioning, updates, and bug fixes.",
    icon: <FaHeadset className="text-5xl text-primary"/>,
    price: 800,
  },
];

interface ServicesProps {
  showTitle?: boolean;
  qty: number;
}

const Services: React.FC<ServicesProps> = ({ showTitle = true, qty }: ServicesProps) => {
  const displayedServices = services.slice(0, qty);
  const location = useLocation();

  return (
    <section className="p-6 text-secondary bg-[#212529] mb-6 rounded-lg shadow-lg">
      {showTitle && <h2 className="text-3xl font-semibold mb-4 text-primary">Services</h2>}
      <ul className="grid grid-cols-1 gap-4"> {/* One column, gap for spacing */}
        {displayedServices.map((service, index) => (
          <li key={index} className="card flex flex-col items-center rounded-lg overflow-hidden shadow-md bg-[#343a40] hover:bg-[#3c4349] transition duration-200 ease-in-out">
            <div className="flex-grow p-4"> {/* Increased space for content */}
              {service.icon} {/* Display the icon */}
              <div className="text-left"> {/* Align content to the left */}
                <h3 className="text-lg font-semibold mb-2 text-secondary">{service.title}</h3>
                <p className="text-sm text-gray-400 mb-4">{service.description}</p>
                <span className="text-xs mb-2 text-gray-400">Starting at ${service.price},00</span>
              </div>
            </div>
          </li>
        ))}
      </ul>
      {location.pathname !== '/services' && (
        <Link
          to="/services"
          className="text-primary hover:underline text-sm mt-4 inline-block"
        >
          See more services
        </Link>
      )}
    </section>
  );
};

export default Services;
