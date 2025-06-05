import { createBrowserRouter } from "react-router";
import App from "./App";
import Home from "./pages/Home";
import AllFoods from "./pages/AllFoods";

export const router=createBrowserRouter([
    {
        path:'/',
        Component:App,
        children:[
            {
                index:true,
                Component:Home
            },
            {
                path:'/allfoods',
                Component:AllFoods
            }
        ]
    }
])