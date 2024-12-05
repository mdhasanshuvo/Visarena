import React from 'react';
import { useNavigate } from 'react-router-dom';

const LatestVisas = () => {
    const navigate = useNavigate();

    // Placeholder data; replace with actual fetched data later
    const visas = [
        {
            country: 'Japan',
            image: 'https://t4.ftcdn.net/jpg/10/28/41/49/360_F_1028414908_RINILfSDUkHyQrAn9qM0k0X1bmEawDcW.jpg',
            visaType: 'Tourist Visa',
            processingTime: '10-15 days',
            fee: '$50',
            validity: '90 days',
            applicationMethod: 'Online',
        },
        {
            country: 'Japan',
            image: 'https://t4.ftcdn.net/jpg/10/28/41/49/360_F_1028414908_RINILfSDUkHyQrAn9qM0k0X1bmEawDcW.jpg',
            visaType: 'Tourist Visa',
            processingTime: '10-15 days',
            fee: '$50',
            validity: '90 days',
            applicationMethod: 'Online',
        },
        {
            country: 'Japan',
            image: 'https://t4.ftcdn.net/jpg/10/28/41/49/360_F_1028414908_RINILfSDUkHyQrAn9qM0k0X1bmEawDcW.jpg',
            visaType: 'Tourist Visa',
            processingTime: '10-15 days',
            fee: '$50',
            validity: '90 days',
            applicationMethod: 'Online',
        },
        {
            country: 'Japan',
            image: 'https://t4.ftcdn.net/jpg/10/28/41/49/360_F_1028414908_RINILfSDUkHyQrAn9qM0k0X1bmEawDcW.jpg',
            visaType: 'Tourist Visa',
            processingTime: '10-15 days',
            fee: '$50',
            validity: '90 days',
            applicationMethod: 'Online',
        },
        {
            country: 'Japan',
            image: 'https://t4.ftcdn.net/jpg/10/28/41/49/360_F_1028414908_RINILfSDUkHyQrAn9qM0k0X1bmEawDcW.jpg',
            visaType: 'Tourist Visa',
            processingTime: '10-15 days',
            fee: '$50',
            validity: '90 days',
            applicationMethod: 'Online',
        },
        {
            country: 'Japan',
            image: 'https://t4.ftcdn.net/jpg/10/28/41/49/360_F_1028414908_RINILfSDUkHyQrAn9qM0k0X1bmEawDcW.jpg',
            visaType: 'Tourist Visa',
            processingTime: '10-15 days',
            fee: '$50',
            validity: '90 days',
            applicationMethod: 'Online',
        },
    ];

    return (
        <div className="px-4 py-8">
            <h2 className="text-3xl font-bold text-center mb-8">Latest Visas</h2>
            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
                {visas.map((visa, index) => (
                    <div key={index} className="card bg-base-100 shadow-xl">
                        <figure>
                            <img src={visa.image} alt={visa.country} className="w-full h-48 object-cover" />
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
                                    onClick={() => navigate(`/visa-details/${index}`)}
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
                    onClick={() => navigate('/all-visas')}
                >
                    See All Visas
                </button>
            </div>
        </div>
    );
};

export default LatestVisas;
