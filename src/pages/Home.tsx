import Experience from "../components/Experience"
import Header from "../components/Header"
import Hero from "../components/Hero"
import Services from "../components/Services"
import Tools from "../components/Tools"
import ContactBtn from '../components/contact/ContactBtn';
import Footer from '../components/Footer';

export const Home = () => {
    return(
        <div className="w-[700px] max-w-full mx-auto px-6">
            <Header />
            <Hero/>
            <Experience />
            <Services />
            <Tools />
            <ContactBtn />
            <Footer/>
        </div>
    )
}