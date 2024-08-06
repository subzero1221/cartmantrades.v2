"use client";

import { useState } from "react";
import { updatePassword } from "../_utils/actions";
import toast from "react-hot-toast";

function ChangePasswordForm() {
  const [formVisible, setFormVisible] = useState(false);
  const [curPassword, setCurPassword] = useState("");
  const [password, setPassword] = useState("");
  const [passwordConfirm, setPasswordConfirm] = useState("");

  async function handleSubmit(e) {
    e.preventDefault();

    const formData = new FormData();
    formData.append("curPassword", curPassword);
    formData.append("password", password);
    formData.append("passwordConfirm", passwordConfirm);

    const result = await updatePassword(formData);

    if (result?.error) {
      toast.error(result.error); // Show toast notification
    } else {
      toast.success("Your password updated succsesfully");
    }
  }

  return (
    <div className="p-6 space-y-4 bg-white rounded-lg shadow-md">
      <button
        className="w-full p-3 text-white transition bg-red-500 rounded-lg hover:bg-red-600"
        onClick={() => setFormVisible((visible) => !visible)}
      >
        {formVisible ? "Close " : " Password ⚠ "}
      </button>
      {formVisible && (
        <form className="space-y-4" onSubmit={handleSubmit}>
          <h2 className="mb-4 text-2xl font-semibold text-red-600">
            change password
          </h2>
          <div className="flex flex-col space-y-2">
            <label className="text-gray-700">Your current password</label>
            <input
              type="password"
              name="curPassword"
              onChange={(e) => setCurPassword(e.target.value)}
              value={curPassword}
              className="p-2 border border-gray-300 rounded-lg"
            />
          </div>
          <div className="flex flex-col space-y-2">
            <label className="text-gray-700">New Password</label>
            <input
              type="password"
              name="password"
              onChange={(e) => setPassword(e.target.value)}
              value={password}
              className="p-2 border border-gray-300 rounded-lg"
            />
          </div>
          <div className="flex flex-col space-y-2">
            <label className="text-gray-700">Confirm New Password</label>
            <input
              type="password"
              value={passwordConfirm}
              onChange={(e) => setPasswordConfirm(e.target.value)}
              name="passwordConfirm"
              className="p-2 border border-gray-300 rounded-lg"
            />
          </div>
          <button
            type="submit"
            className="w-full p-3 text-white transition bg-red-500 rounded-lg hover:bg-red-600"
          >
            Change Password
          </button>
        </form>
      )}
    </div>
  );
}

export default ChangePasswordForm;
