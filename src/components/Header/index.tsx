import React from "react";
import { Link } from "react-router-dom";
import Button from "@mui/material/Button";

import { useAppDispatch, useAppSelector } from "../../utils/redux";
import { logout, selectIsAuth } from "../../store/auth/reducer";

import Container from "@mui/material/Container";

import useStyles from "./style";

const Header = () => {
  const classes = useStyles();
  const dispatch = useAppDispatch();
  const isAuth = useAppSelector(selectIsAuth);

  const onClickLogout = () => {
    if (window.confirm("Вы действительно хотите выйти?")) {
      dispatch(logout());

      localStorage.removeItem("token");
    }
  };

  return (
    <div className={classes.root}>
      <Container maxWidth="lg">
        <div className={classes.inner}>
          <Link className={classes.logo} to="/">
            <div>My BLOG</div>
          </Link>
          <div className={classes.buttons}>
            {isAuth ? (
              <>
                <Link to="/add-post">
                  <Button variant="contained">Написать статью</Button>
                </Link>
                <Button
                  onClick={onClickLogout}
                  variant="contained"
                  color="error"
                >
                  Выйти
                </Button>
              </>
            ) : (
              <>
                <Link to="/login">
                  <Button variant="outlined">Войти</Button>
                </Link>
                <Link to="/register">
                  <Button variant="contained">Создать аккаунт</Button>
                </Link>
              </>
            )}
          </div>
        </div>
      </Container>
    </div>
  );
};

export default Header;
