import React from "react";
import Typography from "@mui/material/Typography";
import TextField from "@mui/material/TextField";
import Paper from "@mui/material/Paper";
import Button from "@mui/material/Button";
import Avatar from "@mui/material/Avatar";

import useStyles from "./style";
import { useAppDispatch, useAppSelector } from "../../utils/redux";
import { useForm } from "react-hook-form";
import { fetchRegister, selectIsAuth } from "../../store/auth/reducer";
import { Navigate } from "react-router-dom";

const Registration = () => {
  const classes = useStyles();
  const dispatch = useAppDispatch();

  const isAuth = useAppSelector(selectIsAuth);

  const {
    register,
    handleSubmit,
    formState: { errors, isValid },
  } = useForm({
    defaultValues: {
      fullName: "",
      email: "",
      password: "",
    },
    mode: "onChange",
  });

  const onSubmit = async (values: LoginBody & { fullName: string }) => {
    const data: any = await dispatch(fetchRegister(values));
    if (!data.payload) {
      return alert("Не удалось зарегестрироваться!");
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
        Создание аккаунта
      </Typography>
      <div className={classes.avatar}>
        <Avatar sx={{ width: 100, height: 100 }} />
      </div>
      <form onSubmit={handleSubmit(onSubmit)}>
        <TextField
          className={classes.field}
          label="Полное имя"
          fullWidth
          error={Boolean(errors.fullName?.message)}
          {...register("fullName", { required: "Укажите полное имя" })}
          helperText={errors.fullName?.message}
        />
        <TextField
          className={classes.field}
          label="E-Mail"
          fullWidth
          type="email"
          error={Boolean(errors.email?.message)}
          {...register("email", { required: "Укажите почту" })}
          helperText={errors.email?.message}
        />
        <TextField
          className={classes.field}
          label="Пароль"
          fullWidth
          type="password"
          error={Boolean(errors.password?.message)}
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
          Зарегистрироваться
        </Button>
      </form>
    </Paper>
  );
};

export default Registration;
