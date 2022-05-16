import axios from "axios";
import Head from "next/head";
import Image from "next/image";
import HomeHeader from "../components/HomeHeader";
import HomeLatestPosts from "../components/HomeLatestPosts";

export default function Home({ posts }) {
  return (
    <>
      <HomeHeader />
      <HomeLatestPosts posts={posts} />
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
