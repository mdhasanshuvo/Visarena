import React, { useEffect, useState } from 'react';
import { useNavigate } from 'react-router-dom';

const LatestVisas = () => {
    const [visas, setVisas] = useState([]);
    const navigate = useNavigate();

    // Fetch the latest visas from the backend
    useEffect(() => {
        fetch('https://visarena-server.vercel.app/latest-visas')
            .then((res) => res.json())
            .then((data) => setVisas(data))
            .catch((err) => console.error('Error fetching latest visas:', err));
    }, []);

    return (
        <div className="px-4 py-8">
            <h2 className="text-3xl font-bold text-center mb-8">Latest Visas</h2>
            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
                {visas.map((visa) => (
                    <div key={visa._id} className="card bg-base-100 shadow-xl">
                        <figure>
                            <img src={visa.countryImage} alt={visa.country} className="w-full h-48 object-cover" />
                        </figure>
                        <div className="card-body">
                            <h3 className="card-title">{visa.country}</h3>
                            <p><strong>Visa Type:</strong> {visa.visaType}</p>
                            <p><strong>Processing Time:</strong> {visa.processingTime}</p>
                            <p><strong>Fee:</strong> {visa.fee}</p>
                            <p><strong>Validity:</strong> {visa.validity}</p>
                            <p><strong>Application Method:</strong> {visa.applicationMethod}</p>
                            <div className="card-actions justify-end">
                                <button
                                    className="btn btn-primary"
                                    onClick={() => navigate(`/allVisa/${visa._id}`)}
                                >
                                    See Details
                                </button>
                            </div>
                        </div>
                    </div>
                ))}
            </div>
            <div className="text-center mt-8">
                <button
                    className="btn btn-accent"
                    onClick={() => navigate('/allVisa')}
                >
                    See All Visas
                </button>
            </div>
        </div>
    );
};

export default LatestVisas;
