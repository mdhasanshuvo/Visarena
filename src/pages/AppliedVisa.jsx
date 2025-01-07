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
                    <p className="text-lg text-gray-500 mt-2">View and manage your visa applications</p>
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

                <div className="max-w-7xl mx-auto overflow-x-auto">
                    <table className="table-auto w-full border-collapse border border-gray-300">
                        <thead className="bg-gray-200 text-gray-700">
                            <tr>
                                <th className="border border-gray-300 px-4 py-2">#</th>
                                <th className="border border-gray-300 px-4 py-2">Country</th>
                                <th className="border border-gray-300 px-4 py-2">Visa Type</th>
                                <th className="border border-gray-300 px-4 py-2">Processing Time</th>
                                <th className="border border-gray-300 px-4 py-2">Fee</th>
                                <th className="border border-gray-300 px-4 py-2">Validity</th>
                                {/* <th className="border border-gray-300 px-4 py-2">Application Method</th> */}
                                <th className="border border-gray-300 px-4 py-2">Applied Date</th>
                                <th className="border border-gray-300 px-4 py-2">Applicant Name</th>
                                {/* <th className="border border-gray-300 px-4 py-2">Applicant Email</th> */}
                                <th className="border border-gray-300 px-4 py-2">Actions</th>
                            </tr>
                        </thead>
                        <tbody>
                            {visas
                                .filter((visa) => visa.email === user.email)
                                .map((visa, index) => (
                                    <tr
                                        key={visa._id}
                                        className="hover:bg-gray-100 transition-colors duration-200"
                                    >
                                        <td className="border border-gray-300 px-4 py-2 text-center">
                                            {index + 1}
                                        </td>
                                        <td className="border border-gray-300 px-4 py-2 flex items-center">
                                            <img
                                                src={visa.countryImage}
                                                alt={visa.countryName}
                                                className="w-12 h-12 object-cover rounded-full mr-3"
                                            />
                                            {visa.countryName}
                                        </td>
                                        <td className="border border-gray-300 px-4 py-2">
                                            {visa.visaType}
                                        </td>
                                        <td className="border border-gray-300 px-4 py-2">
                                            {visa.processingTime}
                                        </td>
                                        <td className="border border-gray-300 px-4 py-2">${visa.fee}</td>
                                        <td className="border border-gray-300 px-4 py-2">
                                            {visa.validity}
                                        </td>
                                        {/* <td className="border border-gray-300 px-4 py-2">
                                            {visa.applicationMethod}
                                        </td> */}
                                        <td className="border border-gray-300 px-4 py-2">
                                            {visa.appliedDate}
                                        </td>
                                        <td className="border border-gray-300 px-4 py-2">
                                            {visa.firstName} {visa.lastName}
                                        </td>
                                        {/* <td className="border border-gray-300 px-4 py-2">
                                            {visa.email}
                                        </td> */}
                                        <td className="border border-gray-300 px-4 py-2 text-center">
                                            <button
                                                className="btn btn-error btn-sm w-full"
                                                onClick={() => handleDelete(visa._id)}
                                            >
                                                Delete Application
                                            </button>
                                        </td>
                                    </tr>
                                ))}
                        </tbody>
                    </table>
                </div>

            </main>

            <footer>
                <Footer />
            </footer>
        </div>
    );
};

export default AppliedVisa;
