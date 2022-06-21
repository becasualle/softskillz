import axios from "axios";
import { API_URL } from "../../utils/urls";
import nookies from "nookies";

const createNote = async (req, res) => {
  const { title, description } = req.body;
  const cookies = nookies.get({ req, res });
  const { jwt } = cookies;
  const token = `Bearer ${jwt}`;
  try {
    // сохраняем запись в cbt таблицу, где хранятся все записи дневника КПТ
    const createNoteRes = await axios.post(
      `${API_URL}/api/cbts`,
      {
        data: {
          title,
          description,
        },
      },
      {
        headers: {
          Authorization: token,
        },
      }
    );
    // получаем id записи из ответа
    const noteId = createNoteRes.data.data.id;

    // получаем id текущего пользователя и значение его JSON файла c айдишниками контента, к которому у него есть доступ
    const { data } = await axios.get(`${API_URL}/api/users/me`, {
      headers: {
        Authorization: token,
      },
    });

    const userId = data.id;
    const userContentAccess = data.content_access;
    const currentUserContentIds = userContentAccess.cbt_notes_ids || [];

    // обновляем у залогиненного пользователя (автора заметки) значение поля content_access — сохраняем туда все имеющиеся данные + айдишник новой записи
    const updateUserRes = await axios.put(
      `${API_URL}/api/users/${userId}`,
      {
        content_access: {
          ...userContentAccess,
          cbt_notes_ids: [...currentUserContentIds, noteId],
        },
      },
      {
        headers: {
          Authorization: token,
        },
      }
    );

    res.status(200).end();
  } catch (error) {
    res.status(400).send(error.message);
  }
};

export default createNote;
