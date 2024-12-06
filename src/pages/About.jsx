import { Link } from "react-router-dom";

const About = () => {
    return (
        <div className="container mx-auto">
            {/* bg-gradient-to-b from-base-200 to-base-100  */}
            <section className="py-20 text-base-content">
                <div className="container mx-auto text-center max-w-3xl px-4 space-y-12">
                    <h2 className="text-2xl md:text-3xl lg:text-4xl font-bold mb-6">About Visarena</h2>
                    <p className="text-sm md:text-lg mb-6">
                        Visarena is your one-stop solution for navigating the complexities of visa applications.
                        Whether you're planning a trip abroad for tourism, study, or work, our platform provides
                        comprehensive visa information, simplifies the application process, and tracks your status every step of the way.
                        Get started now to make your visa journey seamless and stress-free.
                    </p>
                    <Link to="/allVisa" className="btn btn-primary btn-wide text-white">Start Your Visa Journey</Link>
                </div>
            </section>
        </div>
    );
};

export default About;
