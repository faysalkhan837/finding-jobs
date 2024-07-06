import { createBrowserRouter } from "react-router-dom";
import Main from "../Component/Main/Main";
import Home from "../assets/Pages/Home/Home";


export const router = createBrowserRouter([
    {
      path: "/",
      element: <Main></Main>,
      children:[
        {
            path:'/',
            element:<Home></Home>
        }
      ]
    },
  ]);