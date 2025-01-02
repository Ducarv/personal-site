import ContactBtn from "../components/contact/ContactBtn";
import Services from '../components/Services';

export const ServicesPage = () => {
  return (
    <>
     <section className="p-6 text-secondary bg-[#212529] mb-6 rounded-lg shadow-lg text-center">
        <h2 className="text-2xl font-medium mb-4">
          Services
        </h2>
        <p className="text-sm text-secondary opacity-70">
            Explore our range of professional software development and engineering services.
        </p>
      </section>
      <Services showTitle={false} qty={6}/>
      <ContactBtn />
    </>
  );
};

export default ServicesPage;
