import React, { useContext, useState } from 'react';
import { AuthContext } from '../provider/AuthProvider';
import Navbar from '../components/Navbar';
import Footer from '../components/Footer';
import Swal from 'sweetalert2';
import { useLoaderData } from 'react-router-dom';
import { Helmet } from 'react-helmet';

const MyAddedVisa = () => {
    const loadedVisas = useLoaderData();
    const [visas, setVisas] = useState(loadedVisas);
    const { user } = useContext(AuthContext);
    const [modalData, setModalData] = useState(null);
    const [updatedVisa, setUpdatedVisa] = useState({});

    const visaTypes = ['Tourist visa', 'Student visa', 'Official visa'];
    const documents = ['Valid passport', 'Visa application form', 'Recent passport-sized photograph'];

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

    const handleCheckboxChange = (e) => {
        const { value, checked } = e.target;
        setUpdatedVisa((prev) => ({
            ...prev,
            requiredDocuments: checked
                ? [...(prev.requiredDocuments || []), value]
                : prev.requiredDocuments?.filter((doc) => doc !== value),
        }));
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
            <Helmet>
                <title>My Added Visa | Visarena</title>
            </Helmet>

            <header className='sticky top-0 z-50 '>
                <Navbar />
            </header>

            <main className="min-h-screen py-12 px-6 bg-base-300">
                <div className="text-center mb-8">
                    <h1 className="text-4xl font-bold text-primary">My Added Visas</h1>
                    <p className="text-lg text-gray-600 mt-2">
                        View and manage the visas you have added
                    </p>
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
                                <th className="border border-gray-300 px-4 py-2">Application Method</th>
                                <th className="border border-gray-300 px-4 py-2">Actions</th>
                            </tr>
                        </thead>
                        <tbody>
                            {visas
                                .filter((visa) => visa.userEmail === user?.email)
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
                                        <td className="border border-gray-300 px-4 py-2">
                                            {visa.applicationMethod}
                                        </td>
                                        <td className="border border-gray-300 px-4 py-2 text-center space-y-2">
                                            <button
                                                className="btn btn-primary btn-sm w-full"
                                                onClick={() => handleUpdate(visa)}
                                            >
                                                Update
                                            </button>
                                            <button
                                                className="btn btn-error btn-sm w-full"
                                                onClick={() => handleDelete(visa._id)}
                                            >
                                                Delete
                                            </button>
                                        </td>
                                    </tr>
                                ))}
                        </tbody>
                    </table>
                </div>

            </main>

            {modalData && (
                <div className="modal modal-open">
                    <div className="modal-box w-11/12 max-w-md">
                        <h3 className="font-bold text-xl text-center mb-4">Update Visa</h3>
                        <form onSubmit={handleSubmit} className="space-y-4">
                            <div>
                                <label className="block text-sm font-medium mb-2">Country Image</label>
                                <input
                                    type="text"
                                    name="countryImage"
                                    value={updatedVisa.countryImage || ''}
                                    onChange={handleInputChange}
                                    className="input input-bordered w-full"
                                />
                            </div>
                            <div>
                                <label className="block text-sm font-medium mb-2">Country Name</label>
                                <input
                                    type="text"
                                    name="countryName"
                                    value={updatedVisa.countryName || ''}
                                    onChange={handleInputChange}
                                    className="input input-bordered w-full"
                                />
                            </div>
                            <div>
                                <label className="block text-sm font-medium mb-2">Visa Type</label>
                                <select
                                    name="visaType"
                                    value={updatedVisa.visaType || ''}
                                    onChange={handleInputChange}
                                    className="select select-bordered w-full"
                                >
                                    <option value="" disabled>
                                        Select visa type
                                    </option>
                                    {visaTypes.map((type) => (
                                        <option key={type} value={type}>
                                            {type}
                                        </option>
                                    ))}
                                </select>
                            </div>
                            <div>
                                <label className="block text-sm font-medium mb-2">Processing Time</label>
                                <input
                                    type="text"
                                    name="processingTime"
                                    value={updatedVisa.processingTime || ''}
                                    onChange={handleInputChange}
                                    className="input input-bordered w-full"
                                />
                            </div>
                            <div>
                                <label className="block text-sm font-medium mb-2">Required Documents</label>
                                <div className="flex flex-wrap gap-4">
                                    {documents.map((doc, index) => (
                                        <label key={index} className="flex items-center space-x-3">
                                            <input
                                                type="checkbox"
                                                value={doc}
                                                checked={updatedVisa.requiredDocuments?.includes(doc)}
                                                onChange={handleCheckboxChange}
                                                className="checkbox checkbox-accent"
                                            />
                                            <span>{doc}</span>
                                        </label>
                                    ))}
                                </div>
                            </div>
                            <div>
                                <label className="block text-sm font-medium mb-2">Description</label>
                                <textarea
                                    name="description"
                                    value={updatedVisa.description || ''}
                                    onChange={handleInputChange}
                                    className="textarea textarea-bordered w-full"
                                ></textarea>
                            </div>
                            <div>
                                <label className="block text-sm font-medium mb-2">Age Restriction</label>
                                <input
                                    type="number"
                                    name="ageRestriction"
                                    value={updatedVisa.ageRestriction || ''}
                                    onChange={handleInputChange}
                                    className="input input-bordered w-full"
                                />
                            </div>
                            <div>
                                <label className="block text-sm font-medium mb-2">Visa Fee</label>
                                <input
                                    type="number"
                                    name="fee"
                                    value={updatedVisa.fee || ''}
                                    onChange={handleInputChange}
                                    className="input input-bordered w-full"
                                />
                            </div>
                            <div>
                                <label className="block text-sm font-medium mb-2">Validity</label>
                                <input
                                    type="text"
                                    name="validity"
                                    value={updatedVisa.validity || ''}
                                    onChange={handleInputChange}
                                    className="input input-bordered w-full"
                                />
                            </div>
                            <div>
                                <label className="block text-sm font-medium mb-2">Application Method</label>
                                <input
                                    type="text"
                                    name="applicationMethod"
                                    value={updatedVisa.applicationMethod || ''}
                                    onChange={handleInputChange}
                                    className="input input-bordered w-full"
                                />
                            </div>
                            <div className="modal-action">
                                <button type="submit" className="btn btn-primary">
                                    Update Visa
                                </button>
                                <button
                                    type="button"
                                    className="btn btn-error"
                                    onClick={() => setModalData(null)}
                                >
                                    Cancel
                                </button>
                            </div>
                        </form>
                    </div>
                </div>
            )}

            <Footer />
        </div>
    );
};

export default MyAddedVisa;
