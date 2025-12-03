import React from "react";
import { createBrowserRouter } from "react-router";
import Root from "../pages/Root/Root";
import ErrorPage from "../pages/ErrorPage/ErrorPage";
import Home from "../pages/Home/Home";
import Plants from "../pages/Plants/Plants";
import PlantDetails from "../pages/PlantDetails/PlantDetails";
import Login from "../pages/Login/Login";
import Signup from "../pages/Signup/Signup";
import ProtectedRoute from "./ProtectedRoute";
import MyProfile from "../pages/MyProfile/MyProfile";
import AboutUs from "../pages/About/About";
import ContactUs from "../pages/Contact/Contact";
import Support from "../pages/Support/Support";

export const router = createBrowserRouter([
  {
    path: "/",
    element: <Root />,
    errorElement: (
      <Root>
        <ErrorPage />
      </Root>
    ),
    children: [
      {
        index: true,
        element: <Home />,
        loader: () => fetch("/allPlantsData.json"),
      },
      {
        path: "/plants",
        element: <Plants />,
        loader: () => fetch("/allPlantsData.json"),
      },
      {
        path: "/details/:id",
        element: (
          <PlantDetails />
        ),
        loader: () => fetch("/allPlantsData.json"),
      },
      {
        path: "/login",
        element: <Login />,
      },
      {
        path: "/signup",
        element: <Signup />,
      },
      {
        path: "/profile",
        element: (
          <ProtectedRoute>
            <MyProfile />
          </ProtectedRoute>
        ),
      },
      {
        path: "/about",
        element: <AboutUs />,
      },
      {
        path: "/contact",
        element: <ContactUs />,
      },
      {
        path: "/support",
        element: <Support />,
      },


    ],
  },
]);
