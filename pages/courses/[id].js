import axios from "axios";
import MarkdownIt from "markdown-it/lib";
import { API_URL } from "../../utils/urls";

const PostPage = ({ post }) => {
  const md = new MarkdownIt();
  const { title, description, text } = post.attributes;
  const htmlContent = md.render(text);
  return (
    <article>
      <header>
        <h1>{title}</h1>

        <em>{description}</em>
      </header>
      <section dangerouslySetInnerHTML={{ __html: htmlContent }} />
    </article>
  );
};

export default PostPage;

export async function getStaticPaths() {
  const postsRes = await axios.get(`${API_URL}/api/courses/`);
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
  const postsRes = await axios.get(`${API_URL}/api/courses/${params.id}`);

  return {
    props: {
      post: postsRes.data.data,
    },
  };
}
