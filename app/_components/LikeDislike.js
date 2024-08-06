"use client";

import { useState } from "react";
import { updatePost } from "../_utils/postActions";

function LikeDislike({ post, userId }) {
  const myReaction = post?.reactedUsers.filter((el) => el?.userId === userId);
  const likes = post.reactedUsers.filter((el) => el.reactionType === "like");
  const dislikes = post.reactedUsers.filter(
    (el) => el.reactionType === "dislike"
  );
  const love = post.reactedUsers.filter((el) => el.reactionType === "love");

  const [isClicked, setIsClicked] = useState(false);
  const [reaction, setReaction] = useState("");
  const alreadyReacted = myReaction?.at(0)?.userId === userId;

  async function handleLikes(id) {
    setReaction((l) => (l = "like"));
    setIsClicked(true);
    await updatePost("like", id);
  }

  async function handleDisLikes(id) {
    setReaction((d) => (d = "dislike"));
    setIsClicked(true);
    await updatePost("dislike", id);
  }

  async function handleLove(id) {
    setReaction((lo) => (lo = "love"));
    setIsClicked(true);
    await updatePost("love", id);
  }

  return (
    <>
      <button
        onClick={() => handleLikes(post._id)}
        className={
          isClicked || alreadyReacted
            ? myReaction?.at(0)?.reactionType === "like"
              ? "bg-green-500 hover:bg-green-600 px-3 py-1 mx-2 text-white transition duration-300 rounded-md"
              : "bg-gray-400 px-3 py-1 mx-2 text-white transition duration-300 rounded-md"
            : "bg-green-300 hover:bg-green-600 px-3 py-1 mx-2 text-white transition duration-300 rounded-md"
        }
        disabled={isClicked || alreadyReacted}
      >
        👍 {likes.length}
      </button>
      <button
        className={
          isClicked || alreadyReacted
            ? myReaction?.at(0)?.reactionType === "dislike"
              ? "bg-red-500 hover:bg-red-600 px-3 py-1 mx-2 text-white transition duration-300 rounded-md"
              : "bg-gray-400 px-3 py-1 mx-2 text-white transition duration-300 rounded-md"
            : "bg-red-300 hover:bg-red-600 px-3 py-1 mx-2 text-white transition duration-300 rounded-md"
        }
        onClick={() => handleDisLikes(post._id)}
        disabled={isClicked || alreadyReacted}
      >
        👎 {dislikes.length}
      </button>
      <button
        className={
          isClicked || alreadyReacted
            ? myReaction?.at(0)?.reactionType === "love"
              ? "bg-pink-500 hover:bg-pink-600 px-3 py-1 mx-2 text-white transition duration-300 rounded-md"
              : "bg-gray-400 px-3 py-1 mx-2 text-white transition duration-300 rounded-md"
            : "bg-pink-300 hover:bg-pink-600 px-3 py-1 mx-2 text-white transition duration-300 rounded-md"
        }
        onClick={() => handleLove(post._id)}
        disabled={isClicked || alreadyReacted}
      >
        💖 {love.length}
      </button>
    </>
  );
}

export default LikeDislike;
