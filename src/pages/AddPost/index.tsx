import React, {
  useState,
  useMemo,
  useCallback,
  useRef,
  BaseSyntheticEvent,
  useEffect,
} from "react";
import TextField from "@mui/material/TextField";
import Paper from "@mui/material/Paper";
import Button from "@mui/material/Button";
import SimpleMDE from "react-simplemde-editor";

import "easymde/dist/easymde.min.css";
import useStyles from "./style";
import postServices from "../../services/postsServices";
import { useNavigate, useParams } from "react-router-dom";

const AddPost = () => {
  const classes = useStyles();
  const [imageUrl, setImageUrl] = useState("");
  const [text, setText] = useState("");
  const [title, setTitle] = useState("");
  const [tags, setTags] = useState("");
  const { id } = useParams<{ id: string }>();

  const isEditing = Boolean(id);

  const inputFileRef = useRef<HTMLInputElement | null>(null);

  const navigate = useNavigate();

  const handleChangeFile = async (event: BaseSyntheticEvent) => {
    console.log(event.target.files);

    try {
      const formData = new FormData();
      const file = event.target.files[0];
      formData.append("image", file);

      const data = await postServices.uploadPostImage(formData);

      console.log(data);
      setImageUrl(data.url);
    } catch (error) {
      console.log(error);
      alert("Error during upload file!");
    }
  };

  const onClickRemoveImage = () => {
    setImageUrl("");
  };

  const onChange = useCallback((value: any) => {
    setText(value);
  }, []);

  const onSubmit = async () => {
    try {
      const fields = {
        title,
        text,
        tags: tags.split(" "),
        imageUrl,
      };

      if (id) {
        await postServices.updateOnePost(id, fields);
        navigate(`/posts/${id}`);
      } else {
        const res = await postServices.addNewPost(fields);

        navigate(`/posts/${res._id}`);
      }
    } catch (error) {
      console.log(error);
      alert("Ошибка при создании статьи");
    }
  };

  const fetchOnePost = useCallback(async () => {
    try {
      if (id) {
        const res = await postServices.fetchOnePost(id);
        // setData(res);
        setImageUrl(res.imageUrl);
        setTags(res.tags.join(" "));
        setText(res.text);
        setTitle(res.title);
      }
    } catch (error) {
      console.log(error);
    }
  }, [id]);

  const options: any = useMemo(
    () => ({
      spellChecker: false,
      maxHeight: "400px",
      autofocus: true,
      placeholder: "Введите текст...",
      status: false,
      autosave: {
        enabled: true,
        delay: 1000,
      },
    }),
    []
  );

  useEffect(() => {
    fetchOnePost();
  }, [fetchOnePost]);

  return (
    <Paper style={{ padding: 30 }}>
      <Button
        variant="outlined"
        size="large"
        onClick={() => inputFileRef.current && inputFileRef.current.click()}
      >
        Загрузить превью
      </Button>
      <input
        ref={inputFileRef}
        type="file"
        onChange={handleChangeFile}
        hidden
      />
      {imageUrl && (
        <>
          <Button
            variant="contained"
            color="error"
            onClick={onClickRemoveImage}
          >
            Удалить
          </Button>
          <img
            className={classes.image}
            src={`${process.env.REACT_APP_API}api${imageUrl}`}
            alt="Uploaded"
          />
        </>
      )}
      <br />
      <br />
      <TextField
        classes={{ root: classes.title }}
        variant="standard"
        value={title}
        onChange={(event) => setTitle(event.target.value)}
        placeholder="Заголовок статьи..."
        fullWidth
      />
      <TextField
        classes={{ root: classes.tags }}
        variant="standard"
        value={tags}
        onChange={(event) => setTags(event.target.value)}
        placeholder="Тэги"
        fullWidth
      />
      <SimpleMDE
        className={classes.editor}
        value={text}
        onChange={onChange}
        options={options}
      />
      <div className={classes.buttons}>
        <Button onClick={onSubmit} size="large" variant="contained">
          {isEditing ? "Сохранить" : "Опубликовать"}
        </Button>

        <Button size="large" onClick={() => navigate("/")}>
          Отмена
        </Button>
      </div>
    </Paper>
  );
};

export default AddPost;
