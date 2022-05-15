import Navbar from "../components/Navbar";
import "../styles/index.scss";

function MyApp({ Component, pageProps }) {
  return (
    <>
      <Navbar />
      <div className="container">
        <Component {...pageProps} />
      </div>
    </>
  );
}

export default MyApp;
