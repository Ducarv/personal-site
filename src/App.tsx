import Experience from './components/Experience';
import Header from './components/Header';
import Hero from './components/Hero';
import Projects from './components/Projects';
import Tools from './components/Tools';
import './index.css';

const App = () => {
    return (
        <div className="bg-[#343a40] text-gray-900 min-h-screen flex items-center justify-center">
            <div className="w-[700px] max-w-full mx-auto px-6">
                <Header />
                <Hero/>
                <Experience />
                <Projects />
                <Tools />
            </div>
        </div>
    );
};

export default App;
