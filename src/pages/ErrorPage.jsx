import { Link } from 'react-router-dom';

const ErrorPage = () => {
  return (
    <div className="min-h-screen bg-gradient-to-b from-gray-100 to-gray-200 flex flex-col justify-center items-center">
      <h1 className="text-7xl font-bold text-indigo-600 animate__animated animate__bounceIn mb-4">404</h1>
      <h2 className="text-4xl font-semibold text-gray-800 mb-2">Page Not Found</h2>
      <p className="text-lg text-gray-600 mb-8">
        Oops! The page you’re looking for doesn’t exist.
      </p>

      <Link
        to="/"
        className="btn btn-primary text-white px-6 py-3 rounded-lg hover:bg-indigo-700 transition-all duration-300"
      >
        Go Back to Home
      </Link>

      <div className="mt-12">
        <img
          src="https://via.placeholder.com/400x300?text=Not+Found" 
          alt="Not Found Illustration"
          className="max-w-full mx-auto rounded-lg shadow-lg animate__animated animate__fadeInUp"
        />
      </div>
    </div>
  );
};

export default ErrorPage;
