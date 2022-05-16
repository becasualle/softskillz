import axios from "axios";
import HomeHeader from "../components/HomeHeader";

import { useEffect, useState } from "react";
import PostsList from "../components/PostsList";

export default function Home({ posts }) {
  const [latestPosts, setLatestPosts] = useState([]);

  useEffect(() => {
    setLatestPosts(posts.slice(0, 5));
  }, [posts]);

  return (
    <>
      <HomeHeader />
      <PostsList posts={latestPosts} />
    </>
  );
}

export async function getStaticProps() {
  const postsRes = await axios.get("http://localhost:1337/api/posts-plural/");
  const posts = postsRes.data.data;

  return {
    props: {
      posts,
    },
  };
}
