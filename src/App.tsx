import React from "react";
import "./App.css";
import { createBrowserRouter, RouterProvider } from "react-router-dom";
import Layout from "./Componenet/Layout/Layout";
import Home from "./Componenet/Home/Home";
import Details from "./Componenet/Details/Details";
import Shooter from "./Componenet/Shooter/Shooter";
import Zombie from "./Componenet/Zombie/Zombie";
import Sports from "./Componenet/Sports/Sports";
import Action from "./Componenet/Action/Action";
import Sailing from "./Componenet/Sailing/Sailing";

const router = createBrowserRouter([
  {
    path: "/",
    element: <Layout />,
    children: [
      { index: true, element: <Home /> },
      { path: "details/:id", element: <Details /> },
      { path: "shooter", element: <Shooter /> },
      { path: "zombie", element: <Zombie /> },
      { path: "sports", element: <Sports /> },
      { path: "action", element: <Action /> },
      { path: "sailing", element: <Sailing /> },
    ],
  },
]);

function App() {
  return (
    <>
      <RouterProvider router={router} />
    </>
  );
}

export default App;
