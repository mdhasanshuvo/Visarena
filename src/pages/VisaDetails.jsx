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

    const { visaId } = useParams(); // Get the visa ID from URL
    const navigate = useNavigate();


    if (!visa) {
        // If no visa is found, redirect or show an error
        navigate('/allVisa');
        return null;
    }

    const handleInputChange = (e) => {
        const { name, value } = e.target;
        setApplicationData({ ...applicationData, [name]: value });
    };

    const handleSubmit = (e) => {
        e.preventDefault();
        console.log(applicationData)

        fetch('https://visarena-server.vercel.app/appliedvisas', {
            method: 'POST',
            headers: {
                'content-type': 'application/json',
            },
            body: JSON.stringify(applicationData),
        })
            .then(res => res.json())
            .then(data => {
                console.log(data);
                if (data.insertedId) {
                    Swal.fire('Success', 'Your visa application has been submitted!', 'success');
                    setModalOpen(false);
                }
            })


    };

    const handleApplyClick = () => {
        if (!user) {
            // Redirect to login if the user is not logged in
            Swal.fire({
                icon: 'error',
                title: 'Oops...',
                text: 'You need to be logged in to apply for a visa.',
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

            <div className="min-h-screen py-10 bg-gray-100">
                <div className="max-w-6xl mx-auto bg-white p-6 rounded-lg shadow-lg">
                    <h2 className="text-3xl font-bold text-primary mb-4">{visa.countryName} Visa Details</h2>
                    <img src={visa.countryImage} alt={visa.countryName} className="w-full h-48 object-cover rounded-lg mb-6" />
                    <p className="text-lg text-gray-700"><strong>Visa Type:</strong> {visa.visaType}</p>
                    <p className="text-lg text-gray-700"><strong>Processing Time:</strong> {visa.processingTime}</p>
                    <p className="text-lg text-gray-700"><strong>Fee:</strong> ${visa.fee}</p>
                    <p className="text-lg text-gray-700"><strong>Validity:</strong> {visa.validity}</p>
                    <p className="text-lg text-gray-700"><strong>Application Method:</strong> {visa.applicationMethod}</p>

                    <button
                        className="btn btn-primary mt-6"
                        onClick={handleApplyClick}
                    >
                        Apply for the Visa
                    </button>
                </div>
            </div>

            {/* Apply for the Visa Modal */}
            {modalOpen && (
                <div className="modal modal-open">
                    <div className="modal-box max-w-lg w-full p-6">
                        <h3 className="font-bold text-xl mb-4">Apply for {visa.countryName} Visa</h3>
                        <form onSubmit={handleSubmit} className="space-y-4">
                            {/* Email Field */}
                            <div>
                                <label htmlFor="email" className="block text-sm font-medium text-gray-700">Email</label>
                                <input
                                    id="email"
                                    type="email"
                                    name="email"
                                    value={applicationData.email}
                                    onChange={handleInputChange}
                                    className="input input-bordered w-full p-2 mt-2"
                                    readOnly
                                />
                            </div>

                            {/* First Name Field */}
                            <div>
                                <label htmlFor="firstName" className="block text-sm font-medium text-gray-700">First Name</label>
                                <input
                                    id="firstName"
                                    type="text"
                                    name="firstName"
                                    value={applicationData.firstName}
                                    onChange={handleInputChange}
                                    className="input input-bordered w-full p-2 mt-2"
                                    placeholder="Enter your first name"
                                    required
                                />
                            </div>

                            {/* Last Name Field */}
                            <div>
                                <label htmlFor="lastName" className="block text-sm font-medium text-gray-700">Last Name</label>
                                <input
                                    id="lastName"
                                    type="text"
                                    name="lastName"
                                    value={applicationData.lastName}
                                    onChange={handleInputChange}
                                    className="input input-bordered w-full p-2 mt-2"
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

                            {/* Fee Field */}
                            <div>
                                <label htmlFor="fee" className="block text-sm font-medium text-gray-700">Visa Fee</label>
                                <input
                                    id="fee"
                                    type="number"
                                    name="fee"
                                    value={applicationData.fee}
                                    onChange={handleInputChange}
                                    className="input input-bordered w-full p-2 mt-2"
                                    readOnly
                                />
                            </div>

                            <div className="modal-action flex justify-between mt-6">
                                <button type="submit" className="btn btn-primary w-full sm:w-auto py-2 px-6 text-white rounded-md hover:bg-blue-600">
                                    Apply
                                </button>
                                <button
                                    type="button"
                                    className="btn w-full sm:w-auto py-2 px-6 text-gray-600 border border-gray-300 rounded-md hover:bg-gray-100"
                                    onClick={() => setModalOpen(false)}
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

export default VisaDetails;
