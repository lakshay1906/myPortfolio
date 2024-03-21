import React from "react";
import ReactDOM from "react-dom/client";
import App from "./App.jsx";
import "./index.css";
import {
  Route,
  RouterProvider,
  createBrowserRouter,
  createRoutesFromElements,
} from "react-router-dom";
import Content from "./Components/Content.jsx";
import Services from "./Components/Services.jsx";
import NavLayout from "./Components/NavLayout.jsx";
import MajorProjects from "./Components/NavBar Components/MajorProjects.jsx";
import MinorProjects from "./Components/NavBar Components/MinorProjects.jsx";

const router = createBrowserRouter(
  createRoutesFromElements(
    <Route path="/" element={<App />}>
      <Route path="" element={<Content />} />
      <Route path="/project" element={<NavLayout />}>
        <Route path="/project/" element={<MajorProjects />} />
        <Route path="/project/minorProjects" element={<MinorProjects />} />
      </Route>
      <Route path="/services" element={<Services />} />
    </Route>
  )
);
ReactDOM.createRoot(document.getElementById("root")).render(
  <React.StrictMode>
    <RouterProvider router={router} />
  </React.StrictMode>
);

// Why we are using main.jsx for routing instead of  app.jsx
