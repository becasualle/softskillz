import axios from "axios";
import { useRouter } from "next/router";
import { useState } from "react";
import { Form, Button } from "react-bootstrap";

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
    <Form onSubmit={handleSubmit}>
      <Form.Group className="mb-3" controlId="formBasicUsername">
        <Form.Label>Username:</Form.Label>
        <Form.Control
          name="username"
          type="text"
          placeholder="Введите имя пользователя"
          onChange={handleChange}
          value={userData.username}
        />
      </Form.Group>
      <Form.Group className="mb-3" controlId="formBasicEmail">
        <Form.Label>Email:</Form.Label>
        <Form.Control
          name="email"
          type="email"
          placeholder="Укажите ваш email"
          onChange={handleChange}
          value={userData.email}
        />
        <Form.Text className="text-muted">
          Мы никому не передаем ваш email
        </Form.Text>
      </Form.Group>
      <Form.Group className="mb-3" controlId="formBasicPassword">
        <Form.Label>Password:</Form.Label>
        <Form.Control
          name="password"
          type="password"
          placeholder="Установите пароль"
          onChange={handleChange}
          value={userData.password}
        />
        <Form.Text className="text-muted">
          Пароль должен содержать не менее 6 символов
        </Form.Text>
      </Form.Group>
      <Button variant="primary" type="submit">
        Зарегистрироваться
      </Button>
    </Form>

    // <form>
    //   <label>
    //     <input
    //       type="text"
    //       name="username"
    //       onChange={handleChange}
    //       value={userData.username}
    //     />
    //   </label>
    //   <label>
    //     Email:
    //     <input
    //       type="email"
    //       name="email"
    //       onChange={handleChange}
    //       value={userData.email}
    //     />
    //   </label>
    //   <label>
    //     Password:
    //     <input
    //       type="password"
    //       name="password"
    //       onChange={handleChange}
    //       value={userData.password}
    //     />
    //   </label>
    //   <button>Submit</button>
    // </form>
  );
};

export default RegisterComp;
