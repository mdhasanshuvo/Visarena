import React, { useState, useContext } from 'react';
import { useNavigate } from 'react-router-dom';
import Swal from 'sweetalert2';
import Navbar from '../components/Navbar';
import Footer from '../components/Footer';
import { AuthContext } from '../provider/AuthProvider';

const AddVisa = () => {
    const navigate = useNavigate();
    const { user } = useContext(AuthContext); // Get the current user
    const [visaData, setVisaData] = useState({
        countryImage: '',
        countryName: '',
        visaType: '',
        processingTime: '',
        requiredDocuments: [],
        description: '',
        ageRestriction: '',
        fee: '',
        validity: '',
        applicationMethod: '',
    });

    const visaTypes = ['Tourist visa', 'Student visa', 'Official visa'];
    const documents = ['Valid passport', 'Visa application form', 'Recent passport-sized photograph'];

    const handleInputChange = (e) => {
        const { name, value } = e.target;
        setVisaData({ ...visaData, [name]: value });
    };

    const handleCheckboxChange = (e) => {
        const { value, checked } = e.target;
        setVisaData((prev) => ({
            ...prev,
            requiredDocuments: checked
                ? [...prev.requiredDocuments, value]
                : prev.requiredDocuments.filter((doc) => doc !== value),
        }));
    };

    const handleSubmit = async (e) => {
        e.preventDefault();

        // Add user email to the visa data
        const newVisaData = {
            ...visaData,
            userEmail: user.email, // Add user's email to the form data
        };

        try {
            // Save newVisa to the database 
            fetch('http://localhost:5000/visarena', {
                method: 'POST',
                headers: {
                    'content-type': 'application/json'
                },
                body: JSON.stringify(newVisaData)
            })
                .then(res => res.json())
                .then(data => {
                    console.log(data);
                    if (data.insertedId > 0) {
                        Swal.fire({
                            icon: 'success',
                            title: 'Visa added successfully!',
                            showConfirmButton: false,
                            timer: 2000,
                        });
                    }
                })

            // After successful save:


            // navigate('/my-added-visas'); // Redirect to "My Added Visas" page (adjust the route as needed)
        } catch (error) {
            Swal.fire({
                icon: 'error',
                title: 'Failed to add visa!',
                text: error.message,
            });
        }

        console.log(newVisaData);
    };

    return (
        <div>
            <header>
                <Navbar />
            </header>

            <div className="min-h-screen bg-gray-100 py-10">
                <div className="max-w-4xl mx-auto bg-white shadow-lg rounded-lg p-8">
                    <h2 className="text-3xl font-bold mb-6 text-center text-primary">Add Visa</h2>

                    <form onSubmit={handleSubmit} className="space-y-6">
                        {/* Country Image */}
                        <div>
                            <label className="block text-lg font-medium mb-2">Country Image URL</label>
                            <input
                                type="text"
                                name="countryImage"
                                value={visaData.countryImage}
                                onChange={handleInputChange}
                                className="input input-bordered w-full"
                                placeholder="Enter the image URL"
                                required
                            />
                        </div>

                        {/* Country Name */}
                        <div>
                            <label className="block text-lg font-medium mb-2">Country Name</label>
                            <input
                                type="text"
                                name="countryName"
                                value={visaData.countryName}
                                onChange={handleInputChange}
                                className="input input-bordered w-full"
                                placeholder="Enter the country name"
                                required
                            />
                        </div>

                        {/* Visa Type */}
                        <div>
                            <label className="block text-lg font-medium mb-2">Visa Type</label>
                            <select
                                name="visaType"
                                value={visaData.visaType}
                                onChange={handleInputChange}
                                className="select select-bordered w-full"
                                required
                            >
                                <option value="" disabled>Select visa type</option>
                                {visaTypes.map((type, index) => (
                                    <option key={index} value={type}>{type}</option>
                                ))}
                            </select>
                        </div>

                        {/* Processing Time */}
                        <div>
                            <label className="block text-lg font-medium mb-2">Processing Time</label>
                            <input
                                type="text"
                                name="processingTime"
                                value={visaData.processingTime}
                                onChange={handleInputChange}
                                className="input input-bordered w-full"
                                placeholder="Enter the processing time"
                                required
                            />
                        </div>

                        {/* Required Documents */}
                        <div>
                            <label className="block text-lg font-medium mb-2">Required Documents</label>
                            <div className="flex flex-wrap gap-4">
                                {documents.map((doc, index) => (
                                    <label key={index} className="flex items-center space-x-3">
                                        <input
                                            type="checkbox"
                                            value={doc}
                                            onChange={handleCheckboxChange}
                                            className="checkbox checkbox-accent"
                                        />
                                        <span>{doc}</span>
                                    </label>
                                ))}
                            </div>
                        </div>

                        {/* Description */}
                        <div>
                            <label className="block text-lg font-medium mb-2">Description</label>
                            <textarea
                                name="description"
                                value={visaData.description}
                                onChange={handleInputChange}
                                className="textarea textarea-bordered w-full"
                                placeholder="Enter a brief description"
                                required
                            ></textarea>
                        </div>

                        {/* Age Restriction */}
                        <div>
                            <label className="block text-lg font-medium mb-2">Age Restriction</label>
                            <input
                                type="number"
                                name="ageRestriction"
                                value={visaData.ageRestriction}
                                onChange={handleInputChange}
                                className="input input-bordered w-full"
                                placeholder="Enter the age restriction"
                                required
                            />
                        </div>

                        {/* Fee */}
                        <div>
                            <label className="block text-lg font-medium mb-2">Visa Fee</label>
                            <input
                                type="number"
                                name="fee"
                                value={visaData.fee}
                                onChange={handleInputChange}
                                className="input input-bordered w-full"
                                placeholder="Enter the visa fee"
                                required
                            />
                        </div>

                        {/* Validity */}
                        <div>
                            <label className="block text-lg font-medium mb-2">Validity</label>
                            <input
                                type="text"
                                name="validity"
                                value={visaData.validity}
                                onChange={handleInputChange}
                                className="input input-bordered w-full"
                                placeholder="Enter the validity period"
                                required
                            />
                        </div>

                        {/* Application Method */}
                        <div>
                            <label className="block text-lg font-medium mb-2">Application Method</label>
                            <input
                                type="text"
                                name="applicationMethod"
                                value={visaData.applicationMethod}
                                onChange={handleInputChange}
                                className="input input-bordered w-full"
                                placeholder="Enter the application method"
                                required
                            />
                        </div>

                        {/* Submit Button */}
                        <div className="text-center">
                            <button type="submit" className="btn btn-primary w-full text-lg">
                                Add Visa
                            </button>
                        </div>
                    </form>
                </div>
            </div>

            <footer>
                <Footer />
            </footer>
        </div>
    );
};

export default AddVisa;
