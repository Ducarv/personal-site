import Hero from "../components/Hero";
import Experience from "../components/Experience";
import Services from "../components/Services";
import Tools from "../components/Tools";
import ContactBtn from "../components/contact/ContactBtn";

export const Home = () => {
  return (
    <>
      <Hero />
      <Experience showTitle={true}/>
      <Services qty={2} />
      <Tools />
      <ContactBtn />
    </>
  );
};

export default Home;
