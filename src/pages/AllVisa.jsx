import React, { useState } from 'react';
import { Link, useLoaderData } from 'react-router-dom';
import Navbar from '../components/Navbar';
import Footer from '../components/Footer';
import { Helmet } from 'react-helmet';

const AllVisa = () => {
    const visas = useLoaderData(); // Load visa data from the server
    const visaTypes = ['All Visa', 'Tourist visa', 'Student visa', 'Official visa'];
    const [filteredVisas, setFilteredVisas] = useState(visas);

    const handleFilterChange = (event) => {
        const selectedType = event.target.value;

        if (selectedType === 'All Visa') {
            setFilteredVisas(visas); // Reset to show all visas
        } else {
            setFilteredVisas(visas.filter((visa) => visa.visaType === selectedType));
        }
    };

    return (
        <div>
            <Helmet>
                <title>All Visa | Visarena</title>
            </Helmet>
            <header>
                <Navbar />
            </header>

            <div className="min-h-screen bg-gradient-to-b bg-base-200 via-white to-gray-100 py-12">
                <div className="container mx-auto px-4">
                    {/* Page Heading */}
                    <div className="text-center mb-12">
                        <h1 className="text-4xl font-bold text-primary">Explore Visas</h1>
                        <p className="text-lg text-gray-600 mt-2">Find the right visa for your next journey.</p>
                    </div>

                    {/* Filter Dropdown */}
                    <div className="flex justify-center mb-8">
                        <select
                            name="visaType"
                            onChange={handleFilterChange} // Attach filter change handler
                            className="select select-bordered w-full max-w-sm text-lg border-gray-300 shadow-md focus:outline-none focus:ring-2 focus:ring-primary"
                            defaultValue="All Visa"
                        >
                            {visaTypes.map((type, index) => (
                                <option key={index} value={type}>
                                    {type}
                                </option>
                            ))}
                        </select>
                    </div>

                    {/* Visa Cards */}
                    <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 gap-12">
                        {filteredVisas.length > 0 ? (
                            filteredVisas.map((visa) => (
                                <div
                                    key={visa._id}
                                    className="card bg-white shadow-lg rounded-lg overflow-hidden hover:shadow-2xl transition-shadow duration-300"
                                >
                                    <img
                                        src={visa.countryImage}
                                        alt={visa.countryName}
                                        className="w-full h-48 object-cover"
                                    />
                                    <div className="p-6">
                                        <h3 className="text-2xl font-bold text-gray-800 mb-2">{visa.countryName}</h3>
                                        <p className="text-sm text-gray-600 mb-1">
                                            <strong>Visa Type:</strong> {visa.visaType}
                                        </p>
                                        <p className="text-sm text-gray-600 mb-1">
                                            <strong>Fee:</strong> ${visa.fee}
                                        </p>
                                        <p className="text-sm text-gray-600 mb-1">
                                            <strong>Validity:</strong> {visa.validity}
                                        </p>
                                        <Link
                                            to={`/allVisa/${visa._id}`}
                                            className="btn btn-primary mt-4 w-full"
                                        >
                                            See Details
                                        </Link>
                                    </div>
                                </div>
                            ))
                        ) : (
                            <div className="col-span-full text-center text-gray-500 text-lg">
                                No visas found for the selected type.
                            </div>
                        )}
                    </div>

                </div>
            </div>

            <footer>
                <Footer />
            </footer>
        </div>
    );
};

export default AllVisa;
