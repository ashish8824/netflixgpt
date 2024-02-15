import React from "react";
import LogIn from "./LogIn";
import Broswe from "./Broswe";
import { RouterProvider, createBrowserRouter } from "react-router-dom";

const Body = () => {
  const appRouter = createBrowserRouter([
    {
      path: "/",
      element: <LogIn />,
    },
    {
      path: "/browse",
      element: <Broswe />,
    },
  ]);

  return (
    <div>
      <RouterProvider router={appRouter} />
    </div>
  );
};

export default Body;
