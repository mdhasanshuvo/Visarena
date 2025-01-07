import React, { useContext, useState } from 'react';
import Navbar from '../components/Navbar';
import Footer from '../components/Footer';
import { useLoaderData } from 'react-router-dom';
import { AuthContext } from '../provider/AuthProvider';
import Swal from 'sweetalert2';
import { Helmet } from 'react-helmet';

const AppliedVisa = () => {
    const loadedVisas = useLoaderData();
    const [visas, setVisas] = useState(loadedVisas);
    const [searchTerm, setSearchTerm] = useState(''); 
    const { user } = useContext(AuthContext);

    const handleDelete = (id) => {
        Swal.fire({
            title: 'Are you sure?',
            text: 'This application will be permanently deleted!',
            icon: 'warning',
            showCancelButton: true,
            confirmButtonColor: '#d33',
            cancelButtonColor: '#3085d6',
            confirmButtonText: 'Yes, delete it!',
        }).then((result) => {
            if (result.isConfirmed) {
                fetch(`https://visarena-server.vercel.app/appliedvisas/${id}`, {
                    method: 'DELETE',
                })
                    .then((res) => res.json())
                    .then((data) => {
                        if (data.deletedCount > 0) {
                            Swal.fire('Deleted!', 'The application has been deleted.', 'success');
                            setVisas(visas.filter((visa) => visa._id !== id));
                        }
                    });
            }
        });
    };

    const handleSearch = () => {
        setVisas(
            loadedVisas.filter(
                (visa) =>
                    visa.email === user.email &&
                    visa.countryName.toLowerCase().includes(searchTerm.toLowerCase())
            )
        );
    };

    return (
        <div>
            <Helmet>
                <title>My Applied Visa | Visarena</title>
            </Helmet>

            <header className='sticky top-0 z-50 '>
                <Navbar />
            </header>

            <main className="min-h-screen py-12 px-6 bg-base-300">
                <div className="text-center mb-8">
                    <h1 className="text-4xl font-bold text-primary">My Applied Visas</h1>
                    <p className="text-lg text-gray-600 mt-2">View and manage your visa applications</p>
                </div>

                {/* Search Bar */}
                <div className="max-w-4xl mx-auto mb-8 flex gap-4">
                    <input
                        type="text"
                        placeholder="Search by country name"
                        value={searchTerm}
                        onChange={(e) => setSearchTerm(e.target.value)}
                        className="input input-bordered w-full"
                    />
                    <button
                        onClick={handleSearch}
                        className="btn btn-primary"
                    >
                        Search
                    </button>
                </div>

                <div className="max-w-7xl mx-auto grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6">
                    {visas
                        .filter((visa) => visa.email === user.email)
                        .map((visa) => (
                            <div
                                key={visa._id}
                                className="bg-white rounded-lg shadow-lg p-6 hover:shadow-2xl transition-shadow duration-300"
                            >
                                {/* Image */}
                                <img
                                    src={visa.countryImage}
                                    alt={visa.countryName}
                                    className="w-full h-48 object-cover rounded-md"
                                />

                                {/* Visa Info */}
                                <div className="mt-4">
                                    <h2 className="text-xl font-bold text-gray-800">
                                        {visa.countryName} Visa
                                    </h2>
                                    <ul className="text-sm text-gray-600 mt-2 space-y-1">
                                        <li>
                                            <strong>Visa Type:</strong> {visa.visaType}
                                        </li>
                                        <li>
                                            <strong>Processing Time:</strong> {visa.processingTime}
                                        </li>
                                        <li>
                                            <strong>Fee:</strong> ${visa.fee}
                                        </li>
                                        <li>
                                            <strong>Validity:</strong> {visa.validity}
                                        </li>
                                        <li>
                                            <strong>Application Method:</strong> {visa.applicationMethod}
                                        </li>
                                        <li>
                                            <strong>Applied Date:</strong> {visa.appliedDate}
                                        </li>
                                        <li>
                                            <strong>Applicant Name:</strong> {visa.firstName} {visa.lastName}
                                        </li>
                                        <li>
                                            <strong>Applicant Email:</strong> {visa.email}
                                        </li>
                                    </ul>
                                </div>

                                {/* Delete Button */}
                                <div className="mt-6">
                                    <button
                                        className="btn btn-error w-full text-white py-2 rounded-md"
                                        onClick={() => handleDelete(visa._id)}
                                    >
                                        Delete Application
                                    </button>
                                </div>
                            </div>
                        ))}
                </div>
            </main>

            <footer>
                <Footer />
            </footer>
        </div>
    );
};

export default AppliedVisa;
