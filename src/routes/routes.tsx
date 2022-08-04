import AddPost from "../pages/AddPost";
import FullPost from "../pages/FullPost/FullPost";
import Home from "../pages/Home/Home";
import Login from "../pages/Login";
import NotFind from "../pages/NotFind";
import Registration from "../pages/Registration";

export const ROUTES: IRoute[] = [
  {
    path: "/",
    element: <Home />,
    private: false,
  },

  {
    path: "/login",
    element: <Login />,
    private: false,
  },
  {
    path: "/register",
    element: <Registration />,
    private: false,
  },
  {
    path: "/posts/:id",
    element: <FullPost />,
    private: false,
  },

  {
    path: "/posts/:id/edit",
    element: <AddPost />,
    private: true,
  },

  {
    path: "/add-post",
    element: <AddPost />,
    private: true,
  },

  { path: "*", element: <NotFind />, private: false },
];
