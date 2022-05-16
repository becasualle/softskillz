import { useState, useEffect } from "react";
import PostPreview from "../PostPreview";

const HomeLatestPosts = ({ posts }) => {
  const [latestPosts, setLatestPosts] = useState([]);

  useEffect(() => {
    setLatestPosts(posts.slice(0, 5));
  }, [posts]);

  const renderPostPreviews = () =>
    latestPosts.map((post) => (
      <PostPreview key={post.id} post={post.attributes} />
    ));

  return (
    <>
      <h2>Latest Posts</h2>
      {renderPostPreviews()}
    </>
  );
};

export default HomeLatestPosts;
