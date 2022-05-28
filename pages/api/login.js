import axios from "axios";
import { setCookie } from "nookies";
import { API_URL } from "../../utils/urls";

const login = async (req, res) => {
  const { identifier, password } = req.body;
  try {
    // Send user input from login component to Strapi endpoint to log a user in
    const postRes = await axios.post(`${API_URL}/api/auth/local`, {
      identifier,
      password,
    });

    setCookie({ res }, "jwt", postRes.data.jwt, {
      httpOnly: true,
      secure: process.env.NODE_ENV !== "development",
      maxAge: 30 * 24 * 60 * 60,
      path: "/",
    });

    res.status(200).end();
  } catch (error) {
    console.log(error);
    res.status(400).send(error.response);
  }
};

export default login;
