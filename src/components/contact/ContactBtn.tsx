import { Link } from 'react-router-dom';

const ContactBtn = () => {
    return (
        <section className="p-6 text-secondary bg-[#212529] mb-6 rounded-lg shadow-lg text-center">
            <h2 className="text-2xl font-medium mb-4">
                Let’s create <br /> something together!
            </h2>
            <Link to="/contact">
                <button className="btn btn-sm">Contact</button>
            </Link>
        </section>
    );
};

export default ContactBtn;
