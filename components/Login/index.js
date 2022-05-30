import axios from "axios";
import { useRouter } from "next/router";
import Link from "next/link";
import { useState } from "react";
import { Button, Form } from "react-bootstrap";

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
    <div className="d-flex justify-content-center flex-column align-items-center">
      <Form
        onSubmit={handleSubmit}
        className="p-4 p-md-5 border rounded-3 bg-light form-auth"
      >
        <Form.Group className="mb-3" controlId="formBasicEmail">
          <Form.Label>Логин: </Form.Label>
          <Form.Control
            name="identifier"
            type="email"
            placeholder="Укажите ваш email"
            onChange={handleChange}
            value={userData.email}
          />
        </Form.Group>
        <Form.Group className="mb-3" controlId="formBasicPassword">
          <Form.Label>Пароль:</Form.Label>
          <Form.Control
            name="password"
            type="password"
            placeholder="Введите пароль"
            onChange={handleChange}
            value={userData.password}
          />
        </Form.Group>
        <Button variant="primary" type="submit" className="w-100">
          Войти
        </Button>
      </Form>
      <p className="py-3 small text-muted">
        Еще не создали аккаунт? <Link href="/sign-up">Зарегистрируйтесь</Link>
      </p>
    </div>
  );
};

export default Login;
