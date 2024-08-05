"use client";
import Link from "next/link";
import { forgotPassword } from "../_utils/actions";
import toast from "react-hot-toast";

function ForgotPassword() {
  async function handleSubmit(e) {
    e.preventDefault();

    const formData = new FormData(e.target);
    const result = await forgotPassword(formData);

    if (result?.error) {
      toast.error(result.error);
    } else if (result?.success) {
      toast.success(
        "Check your email address. We sent you password reset instructions!"
      );
    }
  }

  return (
    <div className="flex items-center justify-center min-h-screen bg-gray-100">
      <div className="w-full max-w-md p-8 mt-8 space-y-6 bg-white rounded-lg shadow-md">
        <h2 className="text-3xl font-bold text-center text-gray-800">
          Forgot Password
        </h2>
        <p className="text-center text-gray-600">
          Enter your email to reset your password.
        </p>
        <form className="space-y-6" onSubmit={(e) => handleSubmit(e)}>
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
          <div className="flex items-center justify-between">
            <button
              type="submit"
              className="px-6 py-3 text-lg text-white bg-blue-500 rounded-md hover:bg-blue-600 focus:outline-none focus:ring-2 focus:ring-blue-500 focus:ring-offset-2"
            >
              Reset Password
            </button>
            <Link
              href="/login"
              className="text-sm text-blue-500 hover:underline"
            >
              Back to Login
            </Link>
          </div>
        </form>
      </div>
    </div>
  );
}

export default ForgotPassword;
