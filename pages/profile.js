import axios from "axios";
import { useRouter } from "next/router";
import nookies from "nookies";

const Profile = (props) => {
  const router = useRouter();

  // get user info retrieved from server by cookie jwt-token
  const {
    user: { email, username },
  } = props;

  const logout = async () => {
    try {
      // This function deletes the cookie and then route the page to /
      await axios.get("/api/logout");
      router.push("/");
    } catch (error) {
      console.log(error.message);
    }
  };

  return (
    <div>
      <div>Username: {username} </div>
      <div>Email: {email} </div>
      <button onClick={logout}>Logout</button>
    </div>
  );
};

// we need to read the cookie in the server (using getServerSideProps),
// because this page needs to use the cookie in order to authenticate the user,
// and because we have set the cookie on the server side with the httpsOnly flag

export const getServerSideProps = async (context) => {
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

    if (!user) {
      return {
        redirect: {
          permanent: false,
          destination: "/",
        },
      };
    }
  }

  return { props: { user } };
};

export default Profile;
