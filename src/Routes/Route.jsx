import { createBrowserRouter } from "react-router-dom";
import Main from "../Component/Main/Main";
import ErrorPage from "../Pages/ErrorPage/ErrorPage";
import Home from "../Pages/Home/Home";
import JobDerails from "../Pages/JobDetails/JobDerails";
import MyBid from "../Pages/MyBid/MyBid";
import BidRequest from "../Pages/BidRequest/BidRequest";
import AddJob from "../Pages/AddJob/AddJob";
import SignUp from "../Pages/SignUp/SignUp";
import Login from "../Pages/Login/Login";
import MyPostedJob from "../Pages/MyPostedJob/MyPostedJob";
import EditJob from "../Pages/EditJob/EditJob";

export const router = createBrowserRouter([
  {
    path: "/",
    element: <Main></Main>,
    errorElement: <ErrorPage></ErrorPage>,
    children: [
      {
        path: "/",
        element: <Home></Home>,
        loader: () => fetch("http://localhost:5000/jobData"),
      },
      {
        path: "/jobdetail/:id",
        element: <JobDerails></JobDerails>,
        loader: ({ params }) =>
          fetch(`http://localhost:5000/jobData/${params.id}`),
      },
      {
        path: "/mybid",
        element: <MyBid></MyBid>
      },
      {
        path: "/bidrequest",
        element: <BidRequest></BidRequest>,
        loader: () => fetch("http://localhost:5000/bidingData")
      },
      {
        path: "/addjob",
        element: <AddJob></AddJob>,
      },
      {
        path: "/signUp",
        element: <SignUp></SignUp>,
      },
      {
        path: "/login",
        element: <Login></Login>,
      },
      {
        path: "/myPostedJob",
        element: <MyPostedJob></MyPostedJob>,
      },
      {
        path: "/editJob/:id",
        element: <EditJob></EditJob>,
      },
    ],
  },
]);
