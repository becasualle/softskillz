import { Form, Button } from "react-bootstrap";
import Link from "next/link";
import { useRouter } from "next/router";
import { useState } from "react";
import axios from "axios";

const CbtDiary = () => {
  const [note, setNote] = useState({ title: "", description: "" });
  const router = useRouter();

  const handleSubmit = async (e) => {
    e.preventDefault();
    try {
      await axios.post("api/createNote", { ...note });
      router.push("/profile");
    } catch (error) {
      console.log(error);
    }
  };

  const handleChange = (e) => {
    const { name, value } = e.target;
    setNote({ ...note, [name]: value });
  };
  return (
    <div className="d-flex justify-content-center flex-column align-items-center">
      <Form
        onSubmit={handleSubmit}
        className="p-4 p-md-5 border rounded-3 bg-light form-auth"
      >
        <Form.Group className="mb-3" controlId="noteTitle">
          <Form.Label>Что случилось?</Form.Label>
          <Form.Control
            name="title"
            type="text"
            placeholder="Например: Сергей опоздал на 45 минут"
            onChange={handleChange}
            value={note.title}
          />
        </Form.Group>
        <Form.Group className="mb-3" controlId="noteDescription">
          <Form.Label>Расскажите подробности</Form.Label>
          <Form.Control
            name="description"
            type="text"
            placeholder="Сегодня была наша годовщина и мы договорились встретиться в 13:00, чтобы ее отпраздновать"
            onChange={handleChange}
            value={note.description}
          />
        </Form.Group>
        <Button variant="primary" type="submit" className="w-100">
          Сохранить
        </Button>
      </Form>
    </div>
  );
};

export default CbtDiary;
