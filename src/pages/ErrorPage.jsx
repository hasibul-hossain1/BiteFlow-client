import React from "react";
import { FaExclamationTriangle } from "react-icons/fa";

function ErrorPage({ message = "Something went wrong!" }) {
  return (
    <div className="min-h-screen flex flex-col justify-center items-center text-center px-6 bg-base-100 text-error">
      <FaExclamationTriangle size={48} className="mb-4" />
      <h1 className="text-4xl font-bold mb-2">Oops!</h1>
      <p className="text-lg mb-4">{message}</p>
    </div>
  );
}

export default ErrorPage;
