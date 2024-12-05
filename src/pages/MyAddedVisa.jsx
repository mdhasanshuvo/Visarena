import React, { useContext, useState } from 'react';
import { AuthContext } from '../provider/AuthProvider';
import Navbar from '../components/Navbar';
import Footer from '../components/Footer';
import Swal from 'sweetalert2';
import { useLoaderData } from 'react-router-dom';

const MyAddedVisa = () => {
    const visas = useLoaderData();
    const { user } = useContext(AuthContext);
    const [modalData, setModalData] = useState(null);
    const [updatedVisa, setUpdatedVisa] = useState({});

    const handleDelete = (id) => {
        Swal.fire({
            title: 'Are you sure?',
            text: 'This visa will be deleted permanently!',
            icon: 'warning',
            showCancelButton: true,
            confirmButtonColor: '#3085d6',
            cancelButtonColor: '#d33',
            confirmButtonText: 'Yes, delete it!',
        }).then((result) => {
            if (result.isConfirmed) {

                fetch(`http://localhost:5000/visarena/${id}`, {
                    method: "DELETE"
                })
                    .then(res => res.json())
                    .then(data => {
                        console.log(data);
                        if (data.deletedCount > 0) {
                            Swal.fire('Deleted!', 'The visa has been deleted.', 'success');
                        }
                    })
            }
        });
    };

    const handleUpdate = (visa) => {
        setModalData(visa);
        setUpdatedVisa(visa);
    };

    const handleInputChange = (e) => {
        const { name, value } = e.target;
        setUpdatedVisa((prev) => ({
            ...prev,
            [name]: value,
        }));
    };

    const handleSubmit = (e) => {
        e.preventDefault();

        // Call your backend to update the visa data
        // Assume the API request is successful and close the modal
        Swal.fire('Updated!', 'Your visa information has been updated.', 'success');
        setModalData(null);  // Close modal after update

    };

    return (
        <div>
            <header>
                <Navbar />
            </header>

            <div className="min-h-screen py-10 bg-gray-100">
                <div className="text-center mb-10">
                    <h2 className="text-3xl font-semibold text-gray-800">My Added Visas</h2>
                    <p className="text-lg text-gray-600">Manage the visas you have added</p>
                </div>

                <div className="max-w-6xl mx-auto grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 gap-6">
                    {visas.filter((visa) => visa.userEmail === user.email)
                        .map((visa) => (
                            <div key={visa._id} className="card shadow-xl p-6 bg-white rounded-lg hover:shadow-2xl transition-shadow duration-300">
                                <img
                                    src={visa.countryImage}
                                    alt={visa.countryName}
                                    className="w-full h-40 object-cover rounded-md"
                                />
                                <h3 className="text-2xl font-bold mt-4">{visa.countryName}</h3>
                                <div className="text-sm text-gray-600">
                                    <p><strong>Visa Type:</strong> {visa.visaType}</p>
                                    <p><strong>Processing Time:</strong> {visa.processingTime}</p>
                                    <p><strong>Fee:</strong> ${visa.fee}</p>
                                    <p><strong>Validity:</strong> {visa.validity}</p>
                                    <p><strong>Application Method:</strong> {visa.applicationMethod}</p>
                                </div>
                                <div className="flex justify-between mt-4">
                                    <button
                                        className="btn btn-secondary"
                                        onClick={() => handleUpdate(visa)}
                                    >
                                        Update
                                    </button>
                                    <button
                                        className="btn btn-error"
                                        onClick={() => handleDelete(visa._id)}
                                    >
                                        Delete
                                    </button>
                                </div>
                            </div>
                        ))}
                </div>
            </div>

            {/* Update Modal */}
            {modalData && (
                <div className="modal modal-open">
                    <div className="modal-box max-w-lg w-full p-6">
                        <h3 className="font-bold text-xl text-center mb-6">Update Visa Information</h3>

                        <form onSubmit={handleSubmit} className="space-y-4">
                            {/* Country Name Field */}
                            <div>
                                <label htmlFor="countryName" className="block text-sm font-medium text-gray-700">Country Name</label>
                                <input
                                    id="countryName"
                                    type="text"
                                    name="countryName"
                                    value={updatedVisa.countryName}
                                    onChange={handleInputChange}
                                    className="input input-bordered w-full mt-2 p-2 rounded-md border-gray-300"
                                    placeholder="Enter Country Name"
                                />
                            </div>

                            {/* Visa Type Field */}
                            <div>
                                <label htmlFor="visaType" className="block text-sm font-medium text-gray-700">Visa Type</label>
                                <input
                                    id="visaType"
                                    type="text"
                                    name="visaType"
                                    value={updatedVisa.visaType}
                                    onChange={handleInputChange}
                                    className="input input-bordered w-full mt-2 p-2 rounded-md border-gray-300"
                                    placeholder="Enter Visa Type"
                                />
                            </div>

                            {/* Processing Time Field */}
                            <div>
                                <label htmlFor="processingTime" className="block text-sm font-medium text-gray-700">Processing Time</label>
                                <input
                                    id="processingTime"
                                    type="text"
                                    name="processingTime"
                                    value={updatedVisa.processingTime}
                                    onChange={handleInputChange}
                                    className="input input-bordered w-full mt-2 p-2 rounded-md border-gray-300"
                                    placeholder="Enter Processing Time"
                                />
                            </div>

                            {/* Fee Field */}
                            <div>
                                <label htmlFor="fee" className="block text-sm font-medium text-gray-700">Fee ($)</label>
                                <input
                                    id="fee"
                                    type="number"
                                    name="fee"
                                    value={updatedVisa.fee}
                                    onChange={handleInputChange}
                                    className="input input-bordered w-full mt-2 p-2 rounded-md border-gray-300"
                                    placeholder="Enter Fee"
                                />
                            </div>

                            {/* Validity Field */}
                            <div>
                                <label htmlFor="validity" className="block text-sm font-medium text-gray-700">Validity</label>
                                <input
                                    id="validity"
                                    type="text"
                                    name="validity"
                                    value={updatedVisa.validity}
                                    onChange={handleInputChange}
                                    className="input input-bordered w-full mt-2 p-2 rounded-md border-gray-300"
                                    placeholder="Enter Validity"
                                />
                            </div>

                            {/* Application Method Field */}
                            <div>
                                <label htmlFor="applicationMethod" className="block text-sm font-medium text-gray-700">Application Method</label>
                                <input
                                    id="applicationMethod"
                                    type="text"
                                    name="applicationMethod"
                                    value={updatedVisa.applicationMethod}
                                    onChange={handleInputChange}
                                    className="input input-bordered w-full mt-2 p-2 rounded-md border-gray-300"
                                    placeholder="Enter Application Method"
                                />
                            </div>

                            {/* Modal Action Buttons */}
                            <div className="modal-action flex justify-between mt-6">
                                <button type="submit" className="btn btn-primary w-full sm:w-auto py-2 px-6 text-white rounded-md hover:bg-blue-600">
                                    Save
                                </button>
                                <button
                                    type="button"
                                    className="btn w-full sm:w-auto py-2 px-6 text-gray-600 border border-gray-300 rounded-md hover:bg-gray-100"
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
