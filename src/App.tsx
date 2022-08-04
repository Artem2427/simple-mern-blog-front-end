import React, { useEffect } from "react";
import { Routes, Route } from "react-router-dom";

import Container from "@mui/material/Container";

import { ROUTES } from "./routes/routes";
import PrivateRoute from "./routes/Private";

import Header from "./components/Header";
import { useAppDispatch, useAppSelector } from "./utils/redux";
import { fetchAuthMe, selectIsAuth } from "./store/auth/reducer";

const App = () => {
  const dispatch = useAppDispatch();
  const isAuth = useAppSelector(selectIsAuth);

  useEffect(() => {
    dispatch(fetchAuthMe());
  }, [dispatch]);

  return (
    <>
      <Header />
      <Container maxWidth="lg">
        <Routes>
          {ROUTES.map((route, index) => {
            return (
              <Route
                key={index}
                path={route.path}
                element={
                  route.private ? (
                    <PrivateRoute
                      component={route.element}
                      isAuthenticated={isAuth}
                    />
                  ) : (
                    route.element
                  )
                }
              />
            );
          })}
        </Routes>
      </Container>
    </>
  );
};

export default App;
