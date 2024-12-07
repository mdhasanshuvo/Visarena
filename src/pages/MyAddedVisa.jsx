import React, { useContext, useState } from 'react';
import { AuthContext } from '../provider/AuthProvider';
import Navbar from '../components/Navbar';
import Footer from '../components/Footer';
import Swal from 'sweetalert2';
import { useLoaderData } from 'react-router-dom';

const MyAddedVisa = () => {
    const loadedVisas = useLoaderData();
    const [visas, setVisas] = useState(loadedVisas);
    const { user } = useContext(AuthContext);
    const [modalData, setModalData] = useState(null);
    const [updatedVisa, setUpdatedVisa] = useState({});

    const handleDelete = (id) => {
        Swal.fire({
            title: 'Are you sure?',
            text: 'This visa will be deleted permanently!',
            icon: 'warning',
            showCancelButton: true,
            confirmButtonColor: '#d33',
            cancelButtonColor: '#3085d6',
            confirmButtonText: 'Yes, delete it!',
        }).then((result) => {
            if (result.isConfirmed) {
                fetch(`https://visarena-server.vercel.app/visarena/${id}`, {
                    method: 'DELETE',
                })
                    .then((res) => res.json())
                    .then((data) => {
                        if (data.deletedCount > 0) {
                            Swal.fire('Deleted!', 'The visa has been deleted.', 'success');
                            setVisas(visas.filter((visa) => visa._id !== id));
                        }
                    });
            }
        });
    };

    const handleUpdate = (visa) => {
        setModalData(visa);
        setUpdatedVisa(visa);
    };

    const handleInputChange = (e) => {
        const { name, value } = e.target;
        setUpdatedVisa((prev) => ({ ...prev, [name]: value }));
    };

    const handleSubmit = (e) => {
        e.preventDefault();

        fetch(`https://visarena-server.vercel.app/visarena/${modalData._id}`, {
            method: 'PUT',
            headers: { 'Content-Type': 'application/json' },
            body: JSON.stringify(updatedVisa),
        })
            .then((res) => res.json())
            .then((result) => {
                if (result.modifiedCount > 0) {
                    Swal.fire('Updated!', 'Visa information has been updated.', 'success');
                    setVisas((prev) =>
                        prev.map((visa) =>
                            visa._id === modalData._id ? { ...visa, ...updatedVisa } : visa
                        )
                    );
                    setModalData(null);
                } else {
                    Swal.fire('Error!', 'Failed to update visa information.', 'error');
                }
            });
    };

    return (
        <div>
            <header>
                <Navbar />
            </header>

            <main className="min-h-screen py-12 px-6 bg-gray-100">
                <div className="text-center mb-8">
                    <h1 className="text-4xl font-bold text-primary">My Added Visas</h1>
                    <p className="text-lg text-gray-600 mt-2">
                        View and manage the visas you have added
                    </p>
                </div>

                <div className="max-w-7xl mx-auto grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6">
                    {visas
                        .filter((visa) => visa.userEmail === user?.email)
                        .map((visa) => (
                            <div
                                key={visa._id}
                                className="bg-white rounded-lg shadow-lg p-6 hover:shadow-2xl transition-shadow duration-300"
                            >
                                <img
                                    src={visa.countryImage}
                                    alt={visa.countryName}
                                    className="w-full h-48 object-cover rounded-md"
                                />

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
                                    </ul>
                                </div>

                                <div className="flex justify-between mt-4">
                                    <button
                                        className="btn btn-primary w-[48%]"
                                        onClick={() => handleUpdate(visa)}
                                    >
                                        Update
                                    </button>
                                    <button
                                        className="btn btn-error w-[48%]"
                                        onClick={() => handleDelete(visa._id)}
                                    >
                                        Delete
                                    </button>
                                </div>
                            </div>
                        ))}
                </div>
            </main>

            {modalData && (
                <div className="modal modal-open">
                    <div className="modal-box max-w-lg w-full">
                        <h3 className="font-bold text-xl text-center mb-4">Update Visa</h3>
                        <form onSubmit={handleSubmit} className="space-y-4">
                            {['countryName', 'visaType', 'processingTime', 'fee', 'validity', 'applicationMethod'].map(
                                (field) => (
                                    <div key={field}>
                                        <label
                                            htmlFor={field}
                                            className="block text-sm font-medium text-gray-700 capitalize"
                                        >
                                            {field.replace(/([A-Z])/g, ' $1')}
                                        </label>
                                        <input
                                            id={field}
                                            name={field}
                                            value={updatedVisa[field]}
                                            onChange={handleInputChange}
                                            className="input input-bordered w-full mt-2"
                                            placeholder={`Enter ${field}`}
                                        />
                                    </div>
                                )
                            )}
                            <div className="flex justify-between mt-6">
                                <button
                                    type="submit"
                                    className="btn btn-primary w-full sm:w-auto px-6 py-2"
                                >
                                    Save
                                </button>
                                <button
                                    type="button"
                                    className="btn btn-outline w-full sm:w-auto px-6 py-2"
                                    onClick={() => setModalData(null)}
                                >
                                    Cancel
                                </button>
                            </div>
                        </form>
                    </div>
                </div>
            )}

            <footer>
                <Footer />
            </footer>
        </div>
    );
};

export default MyAddedVisa;
