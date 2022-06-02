import axios from "axios";
import { API_URL } from "../../utils/urls";

const createNote = async (req, res) => {
  const { title, description } = req.body;
  try {
    const createNoteRes = await axios.post(`${API_URL}/api/cbts`, {
      data: {
        title,
        description,
      },
    });
    res.status(200).end();
  } catch (error) {
    res.status(400).send(error.message);
  }
};

export default createNote;
