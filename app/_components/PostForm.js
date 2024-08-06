"use client";
import { useEffect, useRef, useState } from "react";
import { createPost } from "../_utils/postActions";
import Picker from "@emoji-mart/react";
import data from "@emoji-mart/data";
import { HiFaceSmile } from "react-icons/hi2";

function PostForm() {
  const [description, setDescription] = useState("");
  const [submiting, setSubmitting] = useState(false);
  const [pickerVisible, setPickerVisible] = useState(false);
  const pickerRef = useRef(null);

  const handleClickOutside = (event) => {
    if (pickerRef.current && !pickerRef.current.contains(event.target)) {
      setPickerVisible(false);
    }
  };

  useEffect(() => {
    if (pickerVisible) {
      document.addEventListener("mousedown", handleClickOutside);
    } else {
      document.removeEventListener("mousedown", handleClickOutside);
    }

    return () => {
      document.removeEventListener("mousedown", handleClickOutside);
    };
  }, [pickerVisible]);

  async function handlecreatePost(e) {
    e.preventDefault();
    setSubmitting(true);

    try {
      await createPost(description);
    } catch (error) {
      console.error("Error creating post:", error);
    } finally {
      setSubmitting(false);
      setDescription("");
    }
  }

  const addEmoji = (emoji) => {
    setDescription((prev) => prev + emoji.native);
  };

  return (
    <form onSubmit={handlecreatePost}>
      <div className="relative">
        <textarea
          className="w-full p-4 mb-4 border border-gray-300 rounded-md focus:outline-none focus:ring-2 focus:ring-blue-500"
          placeholder="What are your thoughts on the current market trends?"
          value={description}
          onChange={(e) => setDescription(e.target.value)}
          rows="4"
        />
        <span
          className="absolute cursor-pointer bottom-7 right-2"
          onClick={() => setPickerVisible((visible) => !visible)}
        >
          <HiFaceSmile className="text-2xl" />
        </span>
        {pickerVisible && (
          <div ref={pickerRef} className="absolute z-10 top-20 right-2">
            <Picker
              data={data}
              emojiSize={16}
              emojiButtonSize={28}
              onEmojiSelect={addEmoji}
            />
          </div>
        )}
      </div>
      <button
        type="submit"
        className="w-full py-2 text-white transition duration-300 bg-blue-600 rounded-md hover:bg-blue-700"
      >
        {submiting ? "Posting..." : "Post"}
      </button>
    </form>
  );
}

export default PostForm;
