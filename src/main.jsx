import { StrictMode } from "react";
import { createRoot } from "react-dom/client";

import { createBrowserRouter, RouterProvider } from "react-router-dom";

import "./index.css";
import Home from "./pages/Home/Home.jsx";
import Services from "./pages/Services/Services.jsx";
import Insight from "./pages/Insight/Insight.jsx";
import About from "./pages/About/About.jsx";
import Career from "./pages/Career/Career.jsx";

const router = createBrowserRouter([
  {
    path: "/",
    element: <Home />,
  },
  {
    path: "/services",
    element: <Services />,
  },
  {
    path: "/insight",
    element: <Insight />,
  },
  {
    path: "/aboutus",
    element: <About />,
  },
  {
    path: "/career",
    element: <Career />,
  },
]);

createRoot(document.getElementById("root")).render(
  <StrictMode>
    <RouterProvider router={router} />
  </StrictMode>
);
