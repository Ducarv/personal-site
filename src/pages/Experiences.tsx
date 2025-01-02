import Experience from "../components/Experience";
import ContactBtn from "../components/contact/ContactBtn";

export const ExperiencesPage = () => {
  return (
    <>
      <section className="p-6 text-secondary bg-[#212529] mb-6 rounded-lg shadow-lg text-center">
        <h2 className="text-2xl font-medium mb-4">
          Experiences
        </h2>
        <p className="text-sm text-secondary opacity-70">
            Explore my professional software engineering experience, delivering high-quality solutions and seamless user experiences.
        </p>
      </section>

      <Experience showTitle={false}/>
      <ContactBtn />
    </>
  );
};

export default ExperiencesPage;
