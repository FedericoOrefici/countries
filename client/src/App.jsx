import React from 'react';
import { createBrowserRouter, RouterProvider } from 'react-router-dom';
import Countries from './pages/Countries';
import CountryDetail from './pages/CountryDetail';

const router = createBrowserRouter([
  {
    path: "/",
    element: <Countries />,
  },
  {
    path: "countries/:id",
    element: <CountryDetail />,
  },
]);

function App() {
  return <RouterProvider router={router} />;
}

export default App;
