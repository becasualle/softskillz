import axios from "axios";
import HomeHeader from "../components/HomeHeader";
import { API_URL } from "../utils/urls";
import { useEffect, useState } from "react";
import PostsList from "../components/PostsList";
import RegisterComp from "../components/RegisterComp";
import { useRouter } from "next/router";
import { Button } from "react-bootstrap";
import Login from "../components/Login";

export default function Home({ posts }) {
  const [latestPosts, setLatestPosts] = useState([]);
  const router = useRouter();

  const goToRegister = () => {
    router.push("/register");
  };

  useEffect(() => {
    setLatestPosts(posts.slice(0, 3));
  }, [posts]);

  return (
    <>
      <HomeHeader />
      <PostsList posts={latestPosts} />
      <Login />
      <Button variant="dark" onClick={goToRegister}>
        Зарегистрируйтесь
      </Button>
    </>
  );
}

export async function getStaticProps() {
  const postsRes = await axios.get(`${API_URL}/api/courses/`);
  const posts = postsRes.data.data;

  return {
    props: {
      posts,
    },
  };
}
