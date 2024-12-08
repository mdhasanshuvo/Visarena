import React, { useEffect, useState } from "react";
import { useNavigate } from "react-router-dom";

const LatestVisas = () => {
    const [visas, setVisas] = useState([]);
    const navigate = useNavigate();

    // Fetch the latest visas from the backend
    useEffect(() => {
        fetch("https://visarena-server.vercel.app/latest-visas")
            .then((res) => res.json())
            .then((data) => setVisas(data))
            .catch((err) => console.error("Error fetching latest visas:", err));
    }, []);

    return (
        <section className="bg-base-100 pb-16 lg:pb-40">
            <div className="container mx-auto px-4">
                <h2 className="text-4xl font-bold text-center mb-12 text-primary">
                    Latest Visa Updates
                </h2>
                <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-8">
                    {visas.map((visa) => (
                        <div
                            key={visa._id}
                            className="relative group bg-white rounded-lg shadow-lg hover:shadow-2xl transition-shadow duration-300 overflow-hidden"
                        >
                            <div className="h-48">
                                <img
                                    src={visa.countryImage}
                                    alt={visa.country}
                                    className="w-full h-full object-cover"
                                />
                            </div>
                            <div className="p-6">
                                <h3 className="text-2xl font-bold text-gray-800 mb-2">{visa.countryName}</h3>
                                <h3 className="text-2xl font-semibold text-gray-800 mb-2">
                                    {visa.country}
                                </h3>
                                <p className="text-sm text-gray-600 mb-2">
                                    <strong>Visa Type:</strong> {visa.visaType}
                                </p>
                                <p className="text-sm text-gray-600 mb-2">
                                    <strong>Processing Time:</strong>{" "}
                                    {visa.processingTime}
                                </p>
                                <p className="text-sm text-gray-600 mb-2">
                                    <strong>Fee:</strong> {visa.fee}
                                </p>
                                <p className="text-sm text-gray-600 mb-2">
                                    <strong>Validity:</strong> {visa.validity}
                                </p>
                                <p className="text-sm text-gray-600 mb-4">
                                    <strong>Application Method:</strong> {visa.applicationMethod}
                                </p>
                                <button
                                    className="w-full bg-primary text-white py-2 rounded-md hover:bg-primary-focus transition-colors"
                                    onClick={() => navigate(`/allVisa/${visa._id}`)}
                                >
                                    See Details
                                </button>
                            </div>
                        </div>
                    ))}
                </div>
                <div className="text-center mt-12">
                    <button
                        className="px-6 py-3 bg-accent text-white rounded-lg text-lg hover:bg-accent-focus transition-colors"
                        onClick={() => navigate("/allVisa")}
                    >
                        See All Visas
                    </button>
                </div>
            </div>
        </section>
    );
};

export default LatestVisas;
