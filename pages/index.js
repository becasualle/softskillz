import axios from "axios";
import Head from "next/head";
import Image from "next/image";

export default function Home({ posts }) {
  return (
    <>
      <h1>{posts[1].attributes.title}</h1>
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
