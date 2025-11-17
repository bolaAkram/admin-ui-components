import { createBrowserRouter } from "react-router-dom";
import { BASE_NAME, ROUTES } from "./routes";
import Login from "../../pages/login/Login";

export const router = createBrowserRouter(
  [
    {
      path: ROUTES.LOGIN,
      element: <Login />,
    },
  ],
  {
    basename: BASE_NAME,
  }
);
