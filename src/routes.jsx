import { createBrowserRouter } from "react-router";
import App from "./App";
import Home from "./pages/Home";
import AllFoods from "./pages/AllFoods";
import LoginPage from "./pages/LoginPage";
import SignUpPage from "./pages/Register";

export const router = createBrowserRouter([
  {
    path: "/",
    Component: App,
    children: [
      {
        index: true,
        Component: Home,
      },
      {
        path: "/allfoods",
        Component: AllFoods,
      },
      {
        path: "/login",
        Component: LoginPage,
      },
      {
        path: "/signup",
        Component:SignUpPage
      },
    ],
  },
]);
