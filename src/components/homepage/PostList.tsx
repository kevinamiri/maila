import React from "react";
import PostListItem from "./PostListItem";

// Define types
type Post = {
  id: string;
  // Add other post properties here
};

type PostListProps = {
  posts: Post[];
  isLoading?: boolean;
};

const PostList: React.FC<PostListProps> = ({ posts, isLoading = false }) => {
  // Log for debugging
  console.log(`Rendering PostList with ${posts.length} posts`);

  if (isLoading) return <p>Loading posts...</p>;

  if (!posts.length) return <p>No posts available.</p>;

  return (
    <ul aria-label="Post list">
      {posts.map((post) => (
        <PostListItem key={post.id} post={post} />
      ))}
    </ul>
  );
};

export default PostList;

// Usage example:
// <PostList posts={postData} isLoading={isLoadingPosts} />