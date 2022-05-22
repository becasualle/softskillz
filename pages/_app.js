import Navbar from "../components/Navbar";
import "bootstrap/dist/css/bootstrap.min.css";
import "../styles/main.scss";
import { Container } from "react-bootstrap";
import SSRProvider from "react-bootstrap/SSRProvider";

function MyApp({ Component, pageProps }) {
  return (
    <>
      <SSRProvider>
        <Navbar />
        <Container>
          <Component {...pageProps} />
        </Container>
      </SSRProvider>
    </>
  );
}

export default MyApp;
