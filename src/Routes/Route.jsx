import { createBrowserRouter } from "react-router-dom";
import Main from "../Component/Main/Main";
import ErrorPage from "../Pages/ErrorPage/ErrorPage";
import Home from "../Pages/Home/Home";
import JobDerails from "../Pages/JobDetails/JobDerails";
import MyBid from "../Pages/MyBid/MyBid";


export const router = createBrowserRouter([
    {
      path: "/",
      element: <Main></Main>,
      errorElement:<ErrorPage></ErrorPage>,
      children:[
        {
            path:'/',
            element:<Home></Home>,
            loader:() => fetch('http://localhost:5000/jobData')
        },
        {
          path:"/jobdetail/:id",
          element:<JobDerails></JobDerails>,
          loader: ({params}) => fetch(`http://localhost:5000/jobData/${params.id}`)
        },
        {
          path:"/mybid",
          element:<MyBid></MyBid>
        }
      ]
    },
  ]);