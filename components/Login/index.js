import axios from "axios";
import { useRouter } from "next/router";
import { useState } from "react";

const Login = () => {
  const [userData, setUserData] = useState({
    identifier: "",
    password: "",
  });

  const router = useRouter();

  const handleSubmit = async (e) => {
    e.preventDefault();

    try {
      await axios.post("/api/login", { ...userData });
      router.push("/profile");
    } catch (error) {
      console.log(error);
    }
  };

  const handleChange = (e) => {
    const { name, value } = e.target;
    setUserData({ ...userData, [name]: value });
  };
  return (
    <div>
      <form onSubmit={handleSubmit}>
        <label>
          Email:
          <input type="email" name="identifier" onChange={handleChange} />
        </label>

        <label>
          Password:
          <input type="password" name="password" onChange={handleChange} />
        </label>
        <button> Логин </button>
      </form>
    </div>
  );
};

export default Login;
