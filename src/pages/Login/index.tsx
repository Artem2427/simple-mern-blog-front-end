import React from "react";
import { useForm } from "react-hook-form";
import { Navigate } from "react-router-dom";
import Typography from "@mui/material/Typography";
import TextField from "@mui/material/TextField";
import Paper from "@mui/material/Paper";
import Button from "@mui/material/Button";

import { useAppDispatch, useAppSelector } from "../../utils/redux";
import { fetchUserData, selectIsAuth } from "../../store/auth/reducer";

import useStyles from "./style";

const Login = () => {
  const classes = useStyles();
  const dispatch = useAppDispatch();

  const isAuth = useAppSelector(selectIsAuth);

  const {
    register,
    handleSubmit,
    formState: { errors, isValid },
  } = useForm({
    defaultValues: {
      email: "",
      password: "",
    },
    mode: "onChange",
  });

  const onSubmit = async (values: LoginBody) => {
    const data: any = await dispatch(fetchUserData(values));

    if (!data.payload) {
      return alert("Не удалось авторизироваться!");
    }

    if ("token" in data.payload) {
      localStorage.setItem("token", data.payload.token);
    }
  };

  if (isAuth) {
    return <Navigate to="/" />;
  }

  return (
    <Paper classes={{ root: classes.root }}>
      <Typography classes={{ root: classes.title }} variant="h5">
        Вход в аккаунт
      </Typography>
      <form onSubmit={handleSubmit(onSubmit)}>
        <TextField
          className={classes.field}
          label="E-Mail"
          type="email"
          error={Boolean(errors.email?.message)}
          {...register("email", { required: "Укажите почту" })}
          helperText={errors.email?.message}
          fullWidth
        />
        <TextField
          className={classes.field}
          label="Пароль"
          fullWidth
          error={Boolean(errors.password?.message)}
          type="password"
          helperText={errors.password?.message}
          {...register("password", { required: "Укажите пароль" })}
        />
        <Button
          size="large"
          variant="contained"
          fullWidth
          type="submit"
          disabled={!isValid}
        >
          Войти
        </Button>
      </form>
    </Paper>
  );
};

export default Login;
