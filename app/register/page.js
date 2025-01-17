"use client";
import { useState } from "react";
import Link from "next/link";
import { toast } from "react-hot-toast";
import { registerUser } from "../_utils/actions";



function Register() {
  const [loading, setLoading] = useState(false);
  const [error, setError] = useState("");

  const handleSubmit = async (event) => {
    event.preventDefault();
    const formData = new FormData(event.target);

    // Register user and capture the result
    const result = await registerUser(formData);

    // Check for errors in the result and set the error state
    if (result?.error) {
      setError(result.error);
      toast.error(result.error); // Show toast notification
    } else {
      toast.success("You are our new member");
    }
  };

  return (
    <div className="flex items-center justify-center min-h-screen mb-8 bg-gray-100">
      <div className="w-full max-w-2xl p-10 mt-8 space-y-6 bg-white rounded-lg shadow-md">
        <h2 className="text-3xl font-bold text-center text-gray-800">
          Register
        </h2>
        <div className="flex items-center justify-center w-full mb-4">
          <div className="w-32 h-32 bg-gray-200 rounded-full">
            <div className="flex items-center justify-center w-full h-full text-gray-400">
              <img src="/nudeman.png" alt="cartmani4" />
            </div>
          </div>
        </div>
        <form className="space-y-6" onSubmit={handleSubmit}>
          <div>
            <label
              htmlFor="name"
              className="block text-sm font-medium text-gray-700"
            >
              Name
            </label>
            <input
              type="text"
              id="name"
              name="name"
              required
              className="w-full px-4 py-3 mt-1 border border-gray-300 rounded-md focus:outline-none focus:ring-blue-500 focus:border-blue-500"
            />
          </div>
          <div>
            <label
              htmlFor="email"
              className="block text-sm font-medium text-gray-700"
            >
              Email
            </label>
            <input
              type="email"
              id="email"
              name="email"
              required
              className="w-full px-4 py-3 mt-1 border border-gray-300 rounded-md focus:outline-none focus:ring-blue-500 focus:border-blue-500"
            />
          </div>
          <div>
            <label
              htmlFor="password"
              className="block text-sm font-medium text-gray-700"
            >
              Password
            </label>
            <input
              type="password"
              id="password"
              name="password"
              required
              className="w-full px-4 py-3 mt-1 border border-gray-300 rounded-md focus:outline-none focus:ring-blue-500 focus:border-blue-500"
            />
          </div>
          <div>
            <label
              htmlFor="passwordConfirm"
              className="block text-sm font-medium text-gray-700"
            >
              Confirm Password
            </label>
            <input
              type="password"
              id="passwordConfirm"
              name="passwordConfirm"
              required
              className="w-full px-4 py-3 mt-1 border border-gray-300 rounded-md focus:outline-none focus:ring-blue-500 focus:border-blue-500"
            />
          </div>
          <div className="flex items-center justify-between">
            <button
              type="submit"
              className="px-6 py-3 text-lg text-white bg-blue-500 rounded-md hover:bg-blue-600 focus:outline-none focus:ring-2 focus:ring-blue-500 focus:ring-offset-2"
              disabled={loading}
            >
              {loading ? "Registering..." : "Register     "}
            </button>
            <Link
              href="/login"
              className="ml-3 text-sm text-blue-500 hover:underline"
            >
              Already have an account?
            </Link>
          </div>
        </form>
      </div>
    </div>
  );
}

export default Register;
