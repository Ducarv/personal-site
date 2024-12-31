import profileImage from "../assets/profile.jpg";
import { FaGithub, FaLinkedin } from "react-icons/fa"; // Import social icons

const Hero = () => {
  return (
    <section className="p-6 bg-[#212529] mb-6 rounded-lg shadow-lg">
      <div className="text-center">
        <div className="relative mb-6 flex items-center justify-center">
          <div className="rounded-full overflow-hidden w-32 h-32 border-4 border-primary">
            {" "}
            {/* Rounded image with border */}
            <img
              src={profileImage}
              alt="Profile"
              className="object-cover w-full h-full"
            />
          </div>
        </div>
        <p className="text-sm text-secondary mb-2 opacity-70">@idu.carvalho</p> {/* Username */}
        <h1 className="text-4xl text-secondary font-bold mb-4">Eduardo Carvalho</h1>
        <div className="flex items-center justify-center space-x-4 mb-6">
          {" "}
          {/* Social icons */}
          <a
            href="https://www.linkedin.com/in/ducarvalho-dev/"
            className="text-secondary hover:text-primary transition duration-300"
            aria-label="LinkedIn"
            target="_blank"
          >
            <FaLinkedin className="text-2xl" />
          </a>
          <a
            href="https://github.com/Ducarv"
            className="text-secondary hover:text-primary transition duration-300"
            aria-label="GitHub"
            target="_blank"
          >
            <FaGithub className="text-2xl" />
          </a>
        </div>
        <p className="text-lg text-secondary leading-relaxed max-w-lg">
            A Software Engineer who has developed countless innovative solutions.
        </p>
      </div>
    </section>
  );
};

export default Hero;
