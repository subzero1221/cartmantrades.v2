"use client";

import { useState } from "react";
import { updateMe, updatePhoto } from "../_utils/actions";
import toast from "react-hot-toast";

function ProfileUpdate({ user }) {
  const [name, setName] = useState(user.name);
  const [email, setEmail] = useState(user.email);
  const [photo, setPhoto] = useState(user.photo);

  const handleFileChange = async (e) => {
    if (e.target.files.length > 0) {
      const file = e.target.files[0];
      setPhoto((f) => (f = file));
      const formData = new FormData();
      formData.append("photo", photo);
    } else {
      console.log("No file selected"); // Log no file selected
    }
  };

  const handleSubmit = async (event) => {
    event.preventDefault();

    const formData = new FormData();
    formData.append("name", name);
    formData.append("email", email);
    formData.append("photo", photo);
    // Append the photo file

    const result = await updateMe(formData);

    if (result?.error) {
      toast.error(result.error); // Show toast notification
    } else {
      toast.success("Your profile updated succsesfully");
    }
  };

  return (
    <form
      className="p-6 space-y-4 bg-white rounded-lg shadow-md"
      onSubmit={handleSubmit}
    >
      <h2 className="mb-4 text-2xl font-semibold">Edit Profile</h2>
      <div className="flex flex-col space-y-2">
        <label className="text-gray-700">Name</label>
        <input
          type="text"
          onChange={(e) => setName((n) => (n = e.target.value))}
          value={name}
          className="p-2 border border-gray-300 rounded-lg"
          name="name"
        />
      </div>
      <div className="flex flex-col space-y-2">
        <label className="text-gray-700">Email</label>
        <input
          type="email"
          onChange={(e) => setEmail((n) => (n = e.target.value))}
          value={email}
          className="p-2 border border-gray-300 rounded-lg"
          name="email"
        />
      </div>
      <div className="flex flex-col space-y-2">
        <label className="text-gray-700">Profile Photo</label>
        <input
          type="file"
          text="Upload photo"
          onChange={(e) => handleFileChange(e)}
          className="p-2 border border-gray-300 rounded-lg"
          name="photo"
          accept="image/*"
        />
      </div>
      <button
        type="submit"
        className="w-full p-3 text-white transition bg-blue-500 rounded-lg hover:bg-blue-600"
      >
        Save Changes
      </button>
    </form>
  );
}

export default ProfileUpdate;
