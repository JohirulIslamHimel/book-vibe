import React from "react";
import { Link } from "react-router";

const ErrorPage = () => {
  return (
    <div className="min-h-screen flex items-center justify-center bg-linear-to-br from-indigo-500 via-purple-500 to-pink-500 text-white px-4">
      <div className="text-center max-w-lg">
        {/* Error Code */}
        <h1 className="text-8xl font-extrabold tracking-widest drop-shadow-lg">
          404
        </h1>

        {/* Message */}
        <p className="mt-4 text-xl md:text-2xl font-semibold">
          Oops! Page not found
        </p>
        <p className="mt-2 text-sm md:text-base text-gray-200">
          The page you are looking for doesn’t exist or has been moved.
        </p>

        {/* Illustration */}
        <div className="mt-8">
          <img
            src="https://cdn.dribbble.com/users/285475/screenshots/2083086/dribbble_1.gif"
            alt="Error Illustration"
            className="w-full rounded-xl shadow-lg"
          />
        </div>

        {/* Button */}
        <div className="mt-8">
          <Link
            to="/"
            className="inline-block px-6 py-3 bg-white text-indigo-600 font-semibold rounded-full shadow-md hover:bg-gray-100 transition duration-300"
          >
            Go Back Home
          </Link>
        </div>
      </div>
    </div>
  );
};

export default ErrorPage;
