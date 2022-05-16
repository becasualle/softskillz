import { useState, useEffect } from "react";
import PostPreview from "../PostPreview";

const AllPosts = ({ posts }) => {
  const renderPostPreviews = () =>
    posts.map((post) => <PostPreview key={post.id} post={post.attributes} />);

  return (
    <>
      <h2>Posts</h2>
      {renderPostPreviews()}
    </>
  );
};

export default AllPosts;
