import { useState, useEffect, useRef } from 'react';
import CountUp from 'react-countup';

const Success = () => {
    const [inView, setInView] = useState(false);
    const sectionRef = useRef(null);

    useEffect(() => {
        const observer = new IntersectionObserver(
            (entries) => {
                if (entries[0].isIntersecting) {
                    setInView(true);
                    observer.disconnect();
                }
            },
            {
                threshold: 0.3, 
            }
        );

        if (sectionRef.current) {
            observer.observe(sectionRef.current);
        }

        return () => {
            if (sectionRef.current) {
                observer.unobserve(sectionRef.current);
            }
        };
    }, []);

    const stats = [
        { title: 'Users Served', endValue: 5000, icon: '👥' },
        { title: 'Visa Applications', endValue: 1000, icon: '🛂' },
        { title: 'Countries Covered', endValue: 100, icon: '🌍' },
        { title: 'Successful Trips', endValue: 800, icon: '✈️' },
    ];

    return (
        <section
            ref={sectionRef}
            className="py-16 bg-gradient-to-r from-indigo-600 to-blue-500 text-white"
        >
            <div className="container mx-auto max-w-7xl  px-6 text-center">
                <h2 className="text-4xl font-extrabold mb-8">Our Success Stories</h2>
                <p className="text-lg md:text-xl mb-12">
                    Trusted by travelers worldwide, Visarena is committed to making your journeys seamless and successful.
                </p>
                <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-4 gap-12">
                    {stats.map((stat, index) => (
                        <div
                            key={index}
                            className="flex flex-col items-center bg-white text-indigo-600 rounded-lg shadow-lg p-6 transform hover:scale-105 transition-transform duration-300"
                        >
                            <div className="text-5xl">{stat.icon}</div>
                            <div className="text-4xl font-bold mt-4">
                                {inView && (
                                    <CountUp start={0} end={stat.endValue} duration={2.5} separator="," />
                                )}
                            </div>
                            <p className="text-lg font-medium mt-2">{stat.title}</p>
                        </div>
                    ))}
                </div>
            </div>
        </section>
    );
};

export default Success;
