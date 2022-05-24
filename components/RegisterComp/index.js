import axios from "axios";
import { useRouter } from "next/router";
import { useState } from "react";

const RegisterComp = () => {
  const router = useRouter();
  const defaultData = {
    username: "",
    email: "",
    password: "",
  };
  const [userData, setUserData] = useState(defaultData);

  const handleSubmit = async (e) => {
    e.preventDefault();
    try {
      await axios.post("api/register", userData);
      setUserData(defaultData);
      router.replace("/posts");
    } catch (error) {
      // TODO: передавать ошибку в виде snackbar/toasts
      // from API we get error.response.data.error.message (stapi msg) with 400 status
      console.log(error.response.data);
    }
  };

  const handleChange = (e) => {
    const { name, value } = e.target;
    setUserData({ ...userData, [name]: value });
  };

  return (
    <form onSubmit={handleSubmit}>
      <label>
        Username:
        <input
          type="text"
          name="username"
          onChange={handleChange}
          value={userData.username}
        />
      </label>
      <label>
        Email:
        <input
          type="email"
          name="email"
          onChange={handleChange}
          value={userData.email}
        />
      </label>
      <label>
        Password:
        <input
          type="password"
          name="password"
          onChange={handleChange}
          value={userData.password}
        />
      </label>
      <button>Submit</button>
    </form>
  );
};

export default RegisterComp;
