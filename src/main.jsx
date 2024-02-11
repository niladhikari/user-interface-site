import React from "react";
import ReactDOM from "react-dom/client";
import App from "./App.jsx";
import "./index.css";
import { createBrowserRouter, RouterProvider } from "react-router-dom";
import Home from "./Pages/Home/Home.jsx";
import UserDetails from "./Pages/Home/User/UserDetails.jsx";
import AddUser from "./Pages/AddUser/AddUser.jsx";
import Login from "./Pages/Login/Login.jsx";
import SignUp from "./Pages/Signup/SignUp.jsx";

const router = createBrowserRouter([
  {
    path: "/",
    element: <App></App>,
    children: [
      {
        path: "/",
        element: <Home></Home>,
      },
      {
        path: '/details/:id',
        element: <UserDetails></UserDetails>,
        loader: () => fetch("https://dummyjson.com/users"),
      },
      {
        path: "/addUser",
        element: <AddUser></AddUser>,
      },
      {
        path: "/login",
        element: <Login></Login>,
      },
      {
        path: "/signUp",
        element:<SignUp></SignUp>,
      },
    ],
  },
]);

ReactDOM.createRoot(document.getElementById("root")).render(
  <React.StrictMode>
    <RouterProvider router={router} />
  </React.StrictMode>
);
