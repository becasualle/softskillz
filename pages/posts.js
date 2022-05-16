import axios from "axios";
import PostsList from "../components/PostsList";
const Posts = ({ posts }) => {
  return (
    <>
      <PostsList posts={posts} />
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
