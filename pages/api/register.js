import axios from "axios";
import { setCookie } from "nookies";

const register = async (req, res) => {
  const { username, password, email } = req.body;

  try {
    // TODO: заменить на API_URL
    const response = await axios.post(
      "http://localhost:1337/api/auth/local/register",
      {
        username,
        email,
        password,
      }
    );
    // The response returned from the POST request contains a JWT token.
    // This token is specific to that user and should be stored securely in order to automatically authenticate the user.
    setCookie({ res }, "jwt", response.data.jwt, {
      // The httpOnly flag prevents the client — the javascript running on the browser — from accessing the cookie, so that you can protect the cookie from possible cross-site scripting (XSS) attacks.
      httpOnly: true,
      // The secure flag ensures that the cookie is only transmitted over a secure https connection. Because the localhost is not an https connection, we set it to false if the environment we are running the application is development.
      secure: process.env.NODE_ENV !== "development",
      // maxAge determines how many seconds the cookie will be valid. In this example, it is set to 30 days.
      maxAge: 30 * 24 * 60 * 60,
      // path determines in which path the cookie should be valid. It is set to / in order to make the cookie available for all the paths.
      path: "/",
    });

    res.status(200).end();
  } catch (error) {
    // send to client error message
    res.status(400).send(error.response.data.error.message);
  }
};

export default register;
