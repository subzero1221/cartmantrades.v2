import PostAuthorImage from "./PostAuthorImage";

function PostAuthor({ post }) {
  const user = post.user;

  return (
    <div className="flex items-center p-4 space-x-4 bg-gray-300 rounded-lg shadow-sm">
      <PostAuthorImage user={user}></PostAuthorImage>
      <div>
        <p className="text-lg font-semibold text-gray-800">{user?.name}</p>
        <p className="text-sm text-gray-600">{user?.email}</p>
      </div>
    </div>
  );
}

export default PostAuthor;
