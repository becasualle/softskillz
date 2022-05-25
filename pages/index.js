import axios from "axios";
import HomeHeader from "../components/HomeHeader";
import { API_URL } from "../utils/urls";
import { useEffect, useState } from "react";
import PostsList from "../components/PostsList";
import RegisterComp from "../components/RegisterComp";
import { useRouter } from "next/router";
import { Button } from "react-bootstrap";
import Login from "../components/Login";
import nookies from "nookies";

export default function Home() {
  // const [latestPosts, setLatestPosts] = useState([]);
  const router = useRouter();

  const goToRegister = () => {
    router.push("/register");
  };

  // useEffect(() => {
  //   setLatestPosts(posts.slice(0, 3));
  // }, [posts]);

  return (
    <>
      {/* <HomeHeader />
      <PostsList posts={latestPosts} /> */}
      <Login />
      <Button variant="dark" onClick={goToRegister}>
        Зарегистрируйтесь
      </Button>
    </>
  );
}

// If the user does exist, then we redirect to /profile route.
// If not, we return an empty props object and stay on the same route to render the <LoginComponent/>
export async function getServerSideProps(context) {
  const cookies = nookies.get(context);
  let user = null;

  if (cookies?.jwt) {
    try {
      const { data } = await axios.get("http://localhost:1337/api/users/me", {
        headers: {
          Authorization: `Bearer ${cookies.jwt}`,
        },
      });

      user = data;
    } catch (error) {
      console.log(error);
    }

    if (user) {
      return {
        redirect: {
          permanent: false,
          destination: "/profile",
        },
      };
    }
  }

  return {
    props: {},
  };
}
