import React, { useState } from 'react';
import { Link, useLoaderData } from 'react-router-dom';
import Navbar from '../components/Navbar';
import Footer from '../components/Footer';

const AllVisa = () => {
    const visas = useLoaderData();
    const visaTypes = ['All Visa', 'Tourist visa', 'Student visa', 'Official visa']; 
    const [filteredVisas, setFilteredVisas] = useState(visas); 

    const handleFilterChange = (event) => {
        const selectedType = event.target.value;

        if (selectedType === 'All Visa') {
            setFilteredVisas(visas); 
        } else {
            setFilteredVisas(visas.filter((visa) => visa.visaType === selectedType)); 
        }
    };

    return (
        <div>
            <header>
                <Navbar />
            </header>

            <div className="min-h-screen py-10 bg-gray-100">
                <div className="flex justify-center gap-5">
                    <div className="text-3xl font-bold text-center mb-8 text-primary">
                        <select
                            name="visaType"
                            onChange={handleFilterChange} // Attach filter change handler
                            className="select select-bordered"
                            required
                        >
                            <option value="" disabled>Select visa type</option>
                            {visaTypes.map((type, index) => (
                                <option key={index} value={type}>
                                    {type}
                                </option>
                            ))}
                        </select>
                    </div>
                </div>

                <div className="max-w-6xl mx-auto grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
                    {filteredVisas.length > 0 ? (
                        filteredVisas.map((visa) => (
                            <div
                                key={visa._id}
                                className="card shadow-lg p-4 bg-white rounded-lg"
                            >
                                <img
                                    src={visa.countryImage}
                                    alt={visa.countryName}
                                    className="w-full h-32 object-cover rounded-t-lg"
                                />
                                <div className="p-4">
                                    <h3 className="text-xl font-bold">{visa.countryName}</h3>
                                    <p className="text-sm text-gray-600">
                                        Type: {visa.visaType}
                                    </p>
                                    <p className="text-sm text-gray-600">Fee: ${visa.fee}</p>
                                    <p className="text-sm text-gray-600">
                                        Validity: {visa.validity}
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
                        <p className="text-center text-gray-600 text-lg">
                            No visas found for the selected type.
                        </p>
                    )}
                </div>
            </div>

            <footer>
                <Footer />
            </footer>
        </div>
    );
};

export default AllVisa;
