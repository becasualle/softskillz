import axios from "axios";
import { useRouter } from "next/router";
import { useState, useEffect } from "react";
import { Form, Button } from "react-bootstrap";
import Link from "next/link";

const RegisterComp = () => {
  const router = useRouter();
  const defaultData = {
    username: "",
    email: "",
    password: "",
  };
  const [userData, setUserData] = useState(defaultData);
  const [isBtnActive, setisBtnActive] = useState(false);

  const handleSubmit = async (e) => {
    e.preventDefault();
    try {
      await axios.post("api/register", userData);
      setUserData(defaultData);
      router.push("/profile");
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

  useEffect(() => {
    if (
      userData.email.length &&
      userData.password.length >= 6 &&
      userData.username.length
    ) {
      setisBtnActive(true);
    } else {
      setisBtnActive(false);
    }
  }, [userData]);

  return (
    <div className="d-flex justify-content-center flex-column align-items-center">
      <Form
        onSubmit={handleSubmit}
        className="p-4 p-md-5 border rounded-3 bg-light form-auth"
      >
        <Form.Group className="mb-3" controlId="formBasicUsername">
          <Form.Label>Имя пользователя:</Form.Label>
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
          <Form.Label>Пароль:</Form.Label>
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
        <Button
          variant="primary"
          type="submit"
          className="w-100"
          disabled={!isBtnActive}
        >
          Зарегистрироваться
        </Button>
      </Form>
      <p className="py-3 small text-muted">
        Уже зарегистрированы? <Link href="/sign-in">Войдите в систему</Link>
      </p>
    </div>
  );
};

export default RegisterComp;
