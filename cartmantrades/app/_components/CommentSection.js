"use client";

import { useState } from "react";
import { addComment } from "../_utils/postActions";

function CommentsSection({ postId, comments, user }) {
  const [newComment, setNewComment] = useState("");
  const [showComments, setShowComments] = useState(false);

  async function handleAddComment(e, postId) {
    e.preventDefault();
    
    try {
      const result = await addComment(newComment, postId);
    } catch (error) {
    } finally {
      setNewComment((com) => (com = ""));
    }
  }

  return (
    <div className="mt-2">
      <div className="h-1 bg-slate-500"></div>
      <button
        onClick={() => setShowComments(!showComments)}
        className="text-blue-600 rounded-xl hover:underline"
      >
        {showComments ? `Comments ` : "Comments "}
        {comments.length ? comments.length : 0}
      </button>
      {showComments && (
        <div className="mt-2 space-y-2">
          {comments.length > 0 ? (
            comments.map((comment) => (
              <div
                key={comment._id}
                className="p-2 border border-gray-200 rounded-md"
              >
                <p className="text-gray-700">{comment.comment}</p>
                <p className="text-sm text-gray-500">
                  Posted by: {comment.userId.name}
                </p>
              </div>
            ))
          ) : (
            <p className="text-gray-500">No comments yet.</p>
          )}
          <form onSubmit={(e) => handleAddComment(e, postId)} className="mt-2">
            <textarea
              className="w-full p-2 border border-gray-300 rounded-md"
              placeholder="Add a comment..."
              value={newComment}
              onChange={(e) => setNewComment((com) => (com = e.target.value))}
              rows="2"
            />
            <button
              type="submit"
              className="px-3 py-1 mt-2 text-white bg-blue-600 rounded-md hover:bg-blue-700"
            >
              Add Comment
            </button>
          </form>
        </div>
      )}
    </div>
  );
}

export default CommentsSection;
