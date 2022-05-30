import axios from "axios";
import HomeHeader from "../components/HomeHeader";
import { API_URL } from "../utils/urls";
import { useEffect, useState } from "react";
import PostsList from "../components/PostsList";
import RegisterComp from "../components/RegisterComp";
import { useRouter } from "next/router";
import { Row, Col, Button } from "react-bootstrap";
import Image from "next/image";
import Login from "../components/Login";
import nookies from "nookies";
import styles from "./index.module.scss";

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
      <Row
        className={[
          styles.hero,
          "d-flex flex-row-reverse align-items-center g-5",
        ].join(" ")}
      >
        <Col lg={6}>
          <img
            src="/bootstrap-themes.png"
            alt=""
            className="d-block mx-lg-auto img-fluid"
          />
        </Col>
        <Col lg={6}>
          <h1 className="display-5 fw-bold lh-1 mb-3">
            Станьте лучшей версией себя
          </h1>
          <p>
            Развивайте мягкие навыки с помощью курсов и практических упражнений
            на платформе SoftSkillz. Учитесь бесплатно, попробуйте прямо сейчас.
          </p>
          <div>
            <Button onClick={goToRegister}>Зарегистрироваться</Button>
          </div>
        </Col>
      </Row>
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
      const { data } = await axios.get(`${API_URL}/api/users/me`, {
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
