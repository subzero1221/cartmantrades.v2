"use client";

import LikeDislike from "./LikeDislike";
import CommentSection from "./CommentSection";
import PostAuthor from "./PostAuthor";

function RenderPosts({ posts, user }) {
  return (
    <div className="max-w-2xl mx-auto space-y-8">
      {posts.map((post) => (
        <div
          key={post._id}
          className="relative p-4 transition-shadow duration-300 bg-white rounded-lg shadow hover:shadow-lg"
        >
          <div className="pb-3">
            <PostAuthor post={post} />
          </div>
          <p className="text-gray-800">{post.description}</p>
          <div className="mt-2 text-sm text-gray-500">
            Posted on: {post.createdAt.split("T")[0]}
            <LikeDislike post={post} userId={user._id} />
          </div>
          <CommentSection
            postId={post._id}
            comments={post.commentedUser || []}
            // Ensure `comments` is passed and default to empty array
          />
        </div>
      ))}
    </div>
  );
}

export default RenderPosts;
