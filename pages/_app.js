import Navbar from "../components/Navbar";
import "../styles/main.scss";

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
