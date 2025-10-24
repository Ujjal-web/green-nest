import React from 'react';
import { createBrowserRouter } from 'react-router';
import Root from '../pages/Root/Root';
import ErrorPage from '../pages/ErrorPage/ErrorPage';
import Home from '../pages/Home/Home';
import Plants from '../pages/Plants/Plants';

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
        loader: () => fetch('/allPlantsData.json')

      },
      {
        path: "/plants",
        element: <Plants />,
        loader: () => fetch('/allPlantsData.json'),
      }
    ]
  },
]);