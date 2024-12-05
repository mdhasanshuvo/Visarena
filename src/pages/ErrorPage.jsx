import React from 'react';
import { useNavigate } from 'react-router-dom';

const ErrorPage = () => {
    const navigate = useNavigate();

    return (
        <div className="h-screen flex flex-col items-center justify-center bg-gradient-to-r from-red-500 to-red-700 text-white text-center p-4">
            <div className="space-y-4">
                <h1 className="text-6xl font-bold">404</h1>
                <p className="text-2xl font-semibold">Oops! Page Not Found</p>
                <p className="text-lg">The page you're looking for doesn't exist or has been moved.</p>
                <button
                    onClick={() => navigate('/')}
                    className="btn btn-accent text-lg px-6 py-3 mt-6">
                    Go Back to Home
                </button>
            </div>
        </div>
    );
};

export default ErrorPage;
