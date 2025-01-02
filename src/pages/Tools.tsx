import ContactBtn from "../components/contact/ContactBtn";
import Tools from "../components/Tools";

export const ToolsPage = () => {
  return (
    <>
      <section className="p-6 text-secondary bg-[#212529] mb-6 rounded-lg shadow-lg text-center">
        <h2 className="text-2xl font-medium mb-4">Tools</h2>
        <p className="text-sm text-secondary opacity-70">
            The tools and technologies I use to bring my projects to life.
        </p>
      </section>
      <Tools showTitle={false}/>
      <ContactBtn />
    </>
  );
};

export default ToolsPage;
