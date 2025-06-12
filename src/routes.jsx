import { createBrowserRouter } from "react-router";
import App from "./App";
import Home from "./pages/Home";
import AllFoods from "./pages/AllFoods";
import LoginPage from "./pages/LoginPage";
import SignUpPage from "./pages/Register";
import FoodDetails from "./pages/FoodDetails";
import FoodPurchase from "./pages/FoodPurchase";
import MyFoods from "./pages/MyFoods";
import AddFood from "./pages/AddFood";
import MyOrders from "./pages/MyOrders";
import UpdateFood from "./pages/UpdateFood";
import PrivateRoute from "./components/Common/PrivateRoute";
import GalleryPage from "./pages/GalleryPage";
import NotFoundPage from "./pages/NotFound"

export const router = createBrowserRouter(
  [
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
          Component: SignUpPage,
        },
        {
          path: "/details/:id",
          Component: FoodDetails,
        },
        {
          path: "/purchase/:id",
          element:<PrivateRoute><FoodPurchase/></PrivateRoute>,
        },
        {
          path: "/myfoods",
          element:<PrivateRoute><MyFoods/></PrivateRoute>,
        },
        {
          path:'/addfood',
          element:<PrivateRoute><AddFood/></PrivateRoute>
        },
        {
          path:'/myorders',
          element:<PrivateRoute><MyOrders/></PrivateRoute>
        },
        {
          path:'/myfoods/update',
          element:<PrivateRoute><UpdateFood/></PrivateRoute>
        },
        {
          path:'/gallery',
          Component:GalleryPage
        },
        {
          path:'/*',
          Component:NotFoundPage
        }
      ],
    },
  ],
);
