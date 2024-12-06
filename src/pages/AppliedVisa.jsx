import React, { useContext, useState } from 'react';
import Navbar from '../components/Navbar';
import Footer from '../components/Footer';
import { useLoaderData } from 'react-router-dom';
import { AuthContext } from '../provider/AuthProvider';
import Swal from 'sweetalert2';

const AppliedVisa = () => {
    const loadedVisas = useLoaderData();
    const [visas, setVisas] = useState(loadedVisas);
    const { user } = useContext(AuthContext);


    const handleDelete = (id) => {
        Swal.fire({
            title: 'Are you sure?',
            text: 'This Application be deleted permanently!',
            icon: 'warning',
            showCancelButton: true,
            confirmButtonColor: '#3085d6',
            cancelButtonColor: '#d33',
            confirmButtonText: 'Yes, delete it!',
        }).then((result) => {
            if (result.isConfirmed) {

                fetch(`https://visarena-server.vercel.app/appliedvisas/${id}`, {
                    method: "DELETE"
                })
                    .then(res => res.json())
                    .then(data => {
                        console.log(data);
                        if (data.deletedCount > 0) {
                            Swal.fire('Deleted!', 'The application has been deleted.', 'success');
                        }
                        const remaining = visas.filter(visa => visa._id !== id);
                        setVisas(remaining);
                    })
            }
        });
    };

    return (
        <div>
            <header>
                <Navbar />
            </header>

            <div className="min-h-screen py-10 bg-gray-100">
                <div className="text-center mb-10">
                    <h2 className="text-3xl font-semibold text-gray-800">My Applied Visas</h2>
                    <p className="text-lg text-gray-600">Manage the visas you already applied</p>
                </div>

                <div className="max-w-6xl mx-auto grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 gap-6">
                    {visas.filter((visa) => visa.email === user.email)
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
                                    <p><strong>Applied Date:</strong> {visa.appliedDate}</p>
                                    <p><strong>Application Name:</strong> {visa.firstName} {visa.lastName}</p>
                                    <p><strong>Application Email:</strong> {visa.email}</p>
                                </div>
                                <div className="mt-4">
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



            <footer>
                <Footer />
            </footer>
        </div>
    );
};

export default AppliedVisa;