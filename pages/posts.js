import axios from "axios";
import AllPosts from "../components/AllPosts";
const Posts = ({ posts }) => {
  console.log({ posts });
  return (
    <>
      <AllPosts posts={posts} />
    </>
  );
};

export default Posts;

export async function getStaticProps() {
  const postsRes = await axios.get("http://localhost:1337/api/posts-plural/");
  const posts = postsRes.data.data;

  return {
    props: {
      posts,
    },
  };
}
