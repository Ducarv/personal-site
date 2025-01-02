import ContactForm from "../components/contact/ContactForm";

export const ContactPage = () => {
  return (
    <>
      <section className="p-6 text-secondary bg-[#212529] mb-6 rounded-lg shadow-lg text-center">
        <h2 className="text-2xl font-medium mb-4">Contact</h2>
        <p className="text-sm text-secondary opacity-70">
          Whether you're interested in working together on a new project, have
          questions about my services, or just want to say hello, I'd love to
          hear from you.
        </p>
      </section>
      <ContactForm/>
    </>
  );
};

export default ContactPage;
