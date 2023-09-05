import * as React from "react";
import * as ReactDOM from "react-dom/client";
import {
  createBrowserRouter,
  RouterProvider,
} from "react-router-dom";
import "./index.css";
import Home from "./Pages/Home";
import Profile from "./Pages/Profile";
import ErrorPage from "./Pages/ErrorPage";
// import DetailsCard from "./Components/Cards/DetailsCard";

const router = createBrowserRouter([
  {
    path: "/",
    element: <Home/>,
    errorElement: <ErrorPage/>,
  },
  {
    path: "/profile/:id",
    element: <Profile/>,
    errorElement: <ErrorPage/>,
  },
  // {
  //   path: "/profile/detailprofile/:id",
  //   element: <DetailsCard/>,
  // }
  
]);

ReactDOM.createRoot(document.getElementById("root")).render(
  <React.StrictMode>
    <RouterProvider router={router} />
  </React.StrictMode>
);