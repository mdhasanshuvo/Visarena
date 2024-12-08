import React, { useState, useContext } from 'react';
import { useParams, useNavigate, useLoaderData } from 'react-router-dom';
import Swal from 'sweetalert2';
import Navbar from '../components/Navbar';
import Footer from '../components/Footer';
import { AuthContext } from '../provider/AuthProvider';

const VisaDetails = () => {
    const visa = useLoaderData();
    const { user } = useContext(AuthContext);
    const [modalOpen, setModalOpen] = useState(false);
    const [applicationData, setApplicationData] = useState({
        countryName: visa.countryName,
        countryImage: visa.countryImage,
        visaType: visa.visaType,
        processingTime: visa.processingTime,
        fee: visa.fee,
        validity: visa.validity,
        applicationMethod: visa.applicationMethod,
        appliedDate: new Date().toISOString().split('T')[0], // Current date
        firstName: '',
        lastName: '',
        email: user ? user.email : '',
    });

    const navigate = useNavigate();

    if (!visa) {
        // Redirect or show an error if visa data is missing
        navigate('/allVisa');
        return null;
    }

    const handleInputChange = (e) => {
        const { name, value } = e.target;
        setApplicationData({ ...applicationData, [name]: value });
    };

    const handleSubmit = (e) => {
        e.preventDefault();
        fetch('https://visarena-server.vercel.app/appliedvisas', {
            method: 'POST',
            headers: { 'Content-Type': 'application/json' },
            body: JSON.stringify(applicationData),
        })
            .then((res) => res.json())
            .then((data) => {
                if (data.insertedId) {
                    Swal.fire('Success', 'Your visa application has been submitted!', 'success');
                    setModalOpen(false);
                    navigate('/appliedVisa');
                }
            });
    };

    const handleApplyClick = () => {
        if (!user) {
            Swal.fire({
                icon: 'error',
                title: 'Oops...',
                text: 'You need to log in to apply for a visa.',
            });
            navigate('/auth/login');
        } else {
            setModalOpen(true);
        }
    };

    return (
        <div>
            <header>
                <Navbar />
            </header>

            <main className="min-h-screen py-12 px-6 bg-base-200">
                <div className="max-w-5xl mx-auto bg-white shadow-lg rounded-lg overflow-hidden">
                    <div className="flex flex-col md:flex-row">
                        <div className="w-full md:w-1/2 p-6">
                            <img
                                src={visa.countryImage}
                                alt={visa.countryName}
                                className="w-full h-full object-cover"
                            />
                        </div>
                        <div className="w-full md:w-1/2 p-6">
                            <h1 className="text-3xl font-bold text-primary mb-4">{visa.countryName} Visa Details</h1>
                            <ul className="space-y-2">
                                <li className="text-lg">
                                    <strong>Visa Type:</strong> {visa.visaType}
                                </li>
                                <li className="text-lg">
                                    <strong>Processing Time:</strong> {visa.processingTime}
                                </li>
                                <li className="text-lg">
                                    <strong>Fee:</strong> ${visa.fee}
                                </li>
                                <li className="text-lg">
                                    <strong>Validity:</strong> {visa.validity}
                                </li>
                                <li className="text-lg">
                                    <strong>Application Method:</strong> {visa.applicationMethod}
                                </li>
                            </ul>
                            <button
                                className="btn btn-primary w-full mt-6"
                                onClick={handleApplyClick}
                            >
                                Apply for the Visa
                            </button>
                        </div>
                    </div>
                </div>
            </main>

            {/* Modal for Visa Application */}
            {modalOpen && (
                <div className="fixed inset-0 bg-black bg-opacity-50 flex justify-center items-center z-50">
                    <div className="bg-base-200 rounded-lg shadow-lg w-11/12 max-w-md">
                        <div className="p-6">
                            <h2 className="text-2xl font-bold mb-4">Apply for {visa.countryName} Visa</h2>
                            <form onSubmit={handleSubmit} className="space-y-4">
                                {/* Email */}
                                <div>
                                    <label className="block text-sm font-medium text-gray-700">Email</label>
                                    <input
                                        type="email"
                                        name="email"
                                        value={applicationData.email}
                                        onChange={handleInputChange}
                                        className="input input-bordered w-full"
                                        readOnly
                                    />
                                </div>
                                {/* First Name */}
                                <div>
                                    <label className="block text-sm font-medium text-gray-700">First Name</label>
                                    <input
                                        type="text"
                                        name="firstName"
                                        value={applicationData.firstName}
                                        onChange={handleInputChange}
                                        className="input input-bordered w-full"
                                        placeholder="Enter your first name"
                                        required
                                    />
                                </div>
                                {/* Last Name */}
                                <div>
                                    <label className="block text-sm font-medium text-gray-700">Last Name</label>
                                    <input
                                        type="text"
                                        name="lastName"
                                        value={applicationData.lastName}
                                        onChange={handleInputChange}
                                        className="input input-bordered w-full"
                                        placeholder="Enter your last name"
                                        required
                                    />
                                </div>
                                {/* Applied Date Field */}
                                <div>
                                    <label htmlFor="appliedDate" className="block text-sm font-medium text-gray-700">Applied Date</label>
                                    <input
                                        id="appliedDate"
                                        type="date"
                                        name="appliedDate"
                                        value={applicationData.appliedDate}
                                        onChange={handleInputChange}
                                        className="input input-bordered w-full p-2 mt-2"
                                        readOnly
                                    />
                                </div>
                                {/* Fee */}
                                <div>
                                    <label className="block text-sm font-medium text-gray-700">Visa Fee</label>
                                    <input
                                        type="number"
                                        name="fee"
                                        value={applicationData.fee}
                                        onChange={handleInputChange}
                                        className="input input-bordered w-full"
                                        readOnly
                                    />
                                </div>
                                <div className="flex justify-between mt-6">
                                    <button type="submit" className="btn btn-primary">
                                        Submit Application
                                    </button>
                                    <button
                                        type="button"
                                        className="btn btn-outline"
                                        onClick={() => setModalOpen(false)}
                                    >
                                        Cancel
                                    </button>
                                </div>
                            </form>
                        </div>
                    </div>
                </div>
            )}

            <footer>
                <Footer />
            </footer>
        </div>
    );
};

export default VisaDetails;
