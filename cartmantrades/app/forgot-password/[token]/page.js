"use client";
import { resetPassword } from "@/app/_utils/actions";
import { useRouter } from "next/navigation";
import toast from "react-hot-toast";

function PasswordReset({ params }) {
  const token = params.token;
  const router = useRouter();

  async function handleSubmit(e) {
    e.preventDefault();
    const formData = new FormData(e.target);
    const result = await resetPassword(formData, token);

    if (result.error) {
      toast.error(result.error);
    } else {
      toast.success(
        "Password reset successful. You can now log in with your new password."
      );
      router.push("/login");
    }
  }

  return (
    <div className="max-w-md p-6 mx-auto space-y-4 bg-white rounded-lg shadow-md">
      <h2 className="mb-4 text-2xl font-semibold text-red-600">
        Reset Password
      </h2>
      <form className="space-y-4" onSubmit={(e) => handleSubmit(e)}>
        <div className="flex flex-col space-y-2">
          <label className="text-gray-700">New Password</label>
          <input
            type="password"
            name="password"
            className="p-2 border border-gray-300 rounded-lg"
            required
          />
        </div>
        <div className="flex flex-col space-y-2">
          <label className="text-gray-700">Confirm New Password</label>
          <input
            type="password"
            name="passwordConfirm"
            className="p-2 border border-gray-300 rounded-lg"
            required
          />
        </div>
        <button
          type="submit"
          className="w-full p-3 text-white transition bg-red-500 rounded-lg hover:bg-red-600"
        >
          {"Reset Password"}
        </button>
      </form>
    </div>
  );
}

export default PasswordReset;
