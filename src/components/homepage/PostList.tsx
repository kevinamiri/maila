import React from "react";
import PropTypes from "prop-types";
import PostListItem from "./PostListItem";
const PostList = ({ posts }) => {
  return (
    <>
      {posts.map((post, index) => (
        <PostListItem post={post} key={index} />
      ))}
    </>
  );
};

PostList.propTypes = {
  posts: PropTypes.array,
};

export default PostList;
