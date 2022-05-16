import axios from "axios";
const PostPage = ({ post }) => {
  const { title, description, content } = post.attributes;
  return (
    <article>
      <header>
        <h1>{title}</h1>
        <h2>{description}</h2>
      </header>
    </article>
  );
};

export default PostPage;

export async function getStaticPaths() {
  const postsRes = await axios.get("http://localhost:1337/api/posts-plural/");
  const posts = postsRes.data.data;
  const paths = posts.map((post) => {
    return {
      params: {
        id: post.id.toString(),
      },
    };
  });

  return {
    fallback: false,
    paths,
  };
}

// get params object from getStaticPaths
export async function getStaticProps({ params }) {
  const postsRes = await axios.get(
    `http://localhost:1337/api/posts-plural/${params.id}`
  );

  return {
    props: {
      post: postsRes.data.data,
    },
  };
}
